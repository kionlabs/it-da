'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { MapPin, Search } from 'lucide-react';
import type { LayerGroup, Map as LeafletMap } from 'leaflet';
import type { AcademyLocation } from '@/lib/academyLocations';

type Props = { locations: AcademyLocation[] };

export default function AcademyDirectory({ locations }: Props) {
  const mapElement = useRef<HTMLDivElement>(null);
  const map = useRef<LeafletMap | null>(null);
  const markerLayer = useRef<LayerGroup | null>(null);
  const leaflet = useRef<typeof import('leaflet') | null>(null);
  const [mapReady, setMapReady] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const filtered = useMemo(() => {
    const term = query.trim().toLocaleLowerCase('ko-KR');
    if (!term) return locations;
    return locations.filter((location) =>
      [location.branch_name, location.region_sido, location.region_gugun, location.road_address]
        .some((value) => value.toLocaleLowerCase('ko-KR').includes(term)),
    );
  }, [locations, query]);
  const selected = locations.find((location) => location.source_id === selectedId);

  useEffect(() => {
    let cancelled = false;
    let currentMap: LeafletMap | null = null;

    const initialize = async () => {
      if (!mapElement.current) return;
      const L = await import('leaflet');
      if (cancelled || !mapElement.current) return;

      leaflet.current = L;
      currentMap = L.map(mapElement.current, { scrollWheelZoom: false, zoomControl: true })
        .setView([36.35, 127.8], 7);
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(currentMap);
      map.current = currentMap;
      markerLayer.current = L.layerGroup().addTo(currentMap);
      setMapReady(true);
    };

    void initialize();
    return () => {
      cancelled = true;
      currentMap?.remove();
      map.current = null;
      markerLayer.current = null;
    };
  }, []);

  useEffect(() => {
    const L = leaflet.current;
    const currentMap = map.current;
    const group = markerLayer.current;
    if (!mapReady || !L || !currentMap || !group) return;

    const plotted = filtered.filter((location) => location.latitude !== null && location.longitude !== null);
    const draw = () => {
      group.clearLayers();
      const zoom = currentMap.getZoom();
      if (zoom <= 8 && plotted.length > 20) {
        const regions = new Map<string, AcademyLocation[]>();
        for (const location of plotted) {
          const list = regions.get(location.region_sido) ?? [];
          list.push(location);
          regions.set(location.region_sido, list);
        }
        for (const [region, list] of regions) {
          const latitude = list.reduce((sum, location) => sum + Number(location.latitude), 0) / list.length;
          const longitude = list.reduce((sum, location) => sum + Number(location.longitude), 0) / list.length;
          L.marker([latitude, longitude], {
            icon: L.divIcon({ html: `<span>${list.length}</span>`, className: 'academy-map-cluster', iconSize: [42, 42] }),
            title: `${region} ${list.length}곳`,
          }).on('click', () => {
            currentMap.fitBounds(L.latLngBounds(list.map((location) => [Number(location.latitude), Number(location.longitude)] as [number, number])), { padding: [35, 35], maxZoom: 12 });
          }).addTo(group);
        }
      } else {
        for (const location of plotted) {
          L.marker([Number(location.latitude), Number(location.longitude)], {
            icon: L.divIcon({ html: '<span aria-hidden="true"></span>', className: 'academy-map-pin', iconSize: [28, 34], iconAnchor: [14, 32] }),
            title: `${location.branch_name} · ${location.road_address}`,
          }).on('click', () => setSelectedId(location.source_id)).addTo(group);
        }
      }
    };

    draw();
    currentMap.on('zoomend', draw);
    if (plotted.length > 0) {
      currentMap.fitBounds(L.latLngBounds(plotted.map((location) => [Number(location.latitude), Number(location.longitude)] as [number, number])), { padding: [35, 35], maxZoom: 12 });
    }
    return () => { currentMap.off('zoomend', draw); group.clearLayers(); };
  }, [filtered, mapReady]);

  const selectLocation = (location: AcademyLocation) => {
    setSelectedId(location.source_id);
    if (location.latitude === null || location.longitude === null || !map.current) return;
    map.current.flyTo([location.latitude, location.longitude], 14, { duration: 0.6 });
  };

  return (
    <div className="overflow-hidden rounded-[2rem] border border-purple-100 bg-white shadow-xl shadow-purple-900/10">
      <div className="border-b border-slate-100 p-4 sm:p-6">
        <label htmlFor="academy-search" className="mb-2 block text-sm font-bold text-slate-800">지역·학원명·주소 검색</label>
        <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 focus-within:border-purple-500 focus-within:ring-2 focus-within:ring-purple-100">
          <Search className="h-5 w-5 shrink-0 text-purple-600" aria-hidden="true" />
          <input id="academy-search" value={query} onChange={(event) => { setQuery(event.target.value); setSelectedId(null); }}
            type="search" placeholder="예: 강남구, 고잔점, 광덕대로" className="h-12 w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400 sm:text-base" />
        </div>
        <p className="mt-2 text-xs text-slate-500">공개 목록 {locations.length}곳 · 검색 결과 {filtered.length}곳</p>
      </div>

      <div className="grid lg:grid-cols-[minmax(0,1.5fr)_minmax(320px,1fr)]">
        <div className="relative isolate h-[420px] bg-[#e9edf0] sm:h-[540px]" aria-label="학원 위치 지도">
          <div ref={mapElement} className="h-full w-full" />
          {!mapReady && <div className="absolute inset-0 flex items-center justify-center bg-slate-100 text-sm text-slate-600">지도를 불러오는 중입니다.</div>}
        </div>

        <div className="flex h-[420px] flex-col border-t border-slate-100 lg:h-[540px] lg:border-l lg:border-t-0">
          {selected && <div className="border-b border-purple-100 bg-purple-50 p-4 sm:p-5">
            <p className="text-xs font-bold text-purple-700">선택한 학원</p>
            <h3 className="mt-1 text-lg font-black text-slate-950">{selected.branch_name}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">{selected.road_address}</p>
            {selected.latitude === null && <p className="mt-1 text-xs text-amber-700">지도 좌표 확인 중</p>}
          </div>}
          <div className="min-h-0 flex-1 overflow-y-auto" aria-label="학원 목록">
            {filtered.length ? filtered.map((location) => (
              <button key={location.source_id} type="button" onClick={() => selectLocation(location)}
                className={`flex w-full gap-3 border-b border-slate-100 p-4 text-left transition hover:bg-purple-50 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-purple-600 sm:px-5 ${selectedId === location.source_id ? 'bg-purple-50' : ''}`}>
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#765168]" aria-hidden="true" />
                <span className="min-w-0">
                  <span className="block font-bold text-slate-900">{location.branch_name}</span>
                  <span className="mt-1 block text-xs leading-5 text-slate-600">{location.road_address}</span>
                  {location.latitude === null && <span className="mt-1 block text-xs text-amber-700">지도 좌표 확인 중</span>}
                </span>
              </button>
            )) : <p className="p-6 text-sm text-slate-600">검색 결과가 없습니다. 지역명이나 학원명을 다시 입력해 주세요.</p>}
          </div>
        </div>
      </div>
      <p className="border-t border-slate-100 px-4 py-3 text-xs leading-5 text-slate-500 sm:px-6">
        출처: <a href="https://myoungmoon.com/academy" target="_blank" rel="noopener noreferrer" className="underline">명문과외 공개 동네학원 목록</a> (2026.11.05 확인). 실제 잇다과외 제휴 및 수업 가능 여부는 상담에서 확인해 주세요.
      </p>
    </div>
  );
}
