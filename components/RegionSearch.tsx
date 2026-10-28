'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowRight, MapPin, Search } from 'lucide-react';
import { regionTutoringPages } from '@/lib/regionTutoring';
import { regionLabel, searchNationalRegions } from '@/lib/nationalRegions';
import { tutoringSubjects } from '@/lib/tutoringSubjects';

function compact(value: string) {
  return value.toLocaleLowerCase('ko-KR').replace(/\s+/g, '');
}

export default function RegionSearch() {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const normalized = compact(query);
  const subject = tutoringSubjects.find((item) => item.aliases.some((alias) => normalized.includes(compact(alias))));
  const subjectAlias = subject?.aliases.find((alias) => normalized.includes(compact(alias)));
  const regionQuery = query.replace(/과외|학원|1:1/gi, '').replace(subjectAlias ?? /$^/, '').trim();
  const regions = regionQuery ? searchNationalRegions(regionQuery) : [];
  const featured = regionTutoringPages.filter((page) =>
    regionQuery
      ? Boolean(subject) && compact(page.region) === compact(regionQuery) && page.subject === subject?.name
      : !subject || page.subject === subject.name,
  );
  const results = [
    ...featured.map((page) => ({ key: page.slug, path: page.path, title: page.title, location: `서울 서초구 ${page.region}` })),
    ...regions
      .filter((region) => !featured.some((page) => page.path === `/partner-academies/regions/${region.code}/${subject?.slug}`))
      .map((region) => ({
        key: `${region.code}-${subject?.slug ?? 'all'}`,
        path: `/partner-academies/regions/${region.code}${subject ? `/${subject.slug}` : ''}`,
        title: `${region.name} ${subject?.name ?? '과목별'} 과외`,
        location: regionLabel(region),
      })),
  ];

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (results.length === 1 && regionQuery) router.push(results[0].path);
    else setIsOpen(true);
  };

  return (
    <div className="relative z-30 mt-7 max-w-xl">
      <label htmlFor="region-search" className="mb-2 block text-sm font-bold text-slate-800">우리 지역 과외 찾기</label>
      <form role="search" onSubmit={handleSubmit} className="flex rounded-2xl border border-purple-200 bg-white p-1.5 shadow-lg shadow-purple-900/10 focus-within:border-purple-500 focus-within:ring-2 focus-within:ring-purple-200">
        <Search className="ml-3 mt-3 h-5 w-5 shrink-0 text-purple-700" aria-hidden="true" />
        <input id="region-search" type="search" value={query} onChange={(event) => { setQuery(event.target.value); setIsOpen(true); }} onFocus={() => setIsOpen(true)} onKeyDown={(event) => { if (event.key === 'Escape') setIsOpen(false); }} placeholder="예: 잠원동 영어과외, 서초동 수학과외" autoComplete="off" aria-controls="region-search-results" aria-expanded={isOpen} className="min-w-0 flex-1 bg-transparent px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none sm:text-base" />
        <button type="submit" className="inline-flex shrink-0 items-center gap-1 rounded-xl bg-purple-700 px-4 py-2 text-sm font-bold text-white transition hover:bg-purple-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2">검색 <ArrowRight className="h-4 w-4" aria-hidden="true" /></button>
      </form>
      {isOpen && <div id="region-search-results" className="absolute inset-x-0 top-full z-20 mt-2 max-h-72 overflow-y-auto rounded-2xl border border-purple-100 bg-white p-2 shadow-xl">
        {results.length ? results.map((result) => <Link key={result.key} href={result.path} onClick={() => setIsOpen(false)} className="flex items-center justify-between gap-3 rounded-xl px-4 py-3 transition hover:bg-purple-50 focus:outline-none focus-visible:bg-purple-50"><span className="min-w-0"><span className="flex items-center gap-2 font-bold text-slate-900"><MapPin className="h-4 w-4 shrink-0 text-purple-700" aria-hidden="true" />{result.title}</span><span className="ml-6 block text-xs text-slate-500">{result.location}</span></span><ArrowRight className="h-4 w-4 shrink-0 text-purple-700" aria-hidden="true" /></Link>) : <div className="px-4 py-3 text-sm leading-6 text-slate-600">지역명을 찾지 못했습니다. 시·군·구와 동 이름을 확인하거나 <a href="#lead-form" onClick={() => setIsOpen(false)} className="font-bold text-purple-700 underline">상담 신청</a>에서 주소를 알려 주세요.</div>}
        {regions.length === 12 && <p className="px-4 py-2 text-xs text-slate-500">결과가 더 있습니다. 시·군·구 또는 동 이름을 더 입력해 주세요.</p>}
      </div>}
      <p className="mt-3 text-xs leading-5 text-slate-500">전국 읍·면·동 이름을 검색할 수 있습니다. 방문 가능한 제휴학원과 수업 방식은 상담에서 확인합니다.</p>
    </div>
  );
}
