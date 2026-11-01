'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';
import { gradeOptions, featuredSchool } from '@/lib/onlineDiscovery';
import { regionLabel, searchNationalRegions } from '@/lib/nationalRegions';
import { tutoringSubjects } from '@/lib/tutoringSubjects';

type Mode = 'grade' | 'region' | 'school';

export default function OnlineDiscoverySearch({ mode }: { mode: Mode }) {
  const router = useRouter();
  const [grade, setGrade] = useState<string>('middle-2');
  const [subject, setSubject] = useState<string>(mode === 'region' ? 'math' : mode === 'school' ? 'science' : 'english');
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const typedSubject = mode === 'region' ? tutoringSubjects.find((item) => item.aliases.some((alias) => query.replace(/\s/g, '').includes(alias))) : undefined;
  const regionQuery = mode === 'region' ? query.replace(/과외|학원|온라인|1:1/g, '').replace(typedSubject?.name ?? /$^/, '').trim() : '';
  const regions = regionQuery ? searchNationalRegions(regionQuery, 8) : [];
  const [regionCode, setRegionCode] = useState('');
  const schoolMatch = mode === 'school' && /수완고|수완고등학교/.test(query.replace(/\s/g, ''));

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (mode === 'grade') router.push(`/online-tutoring/by-grade/${grade}/${subject}`);
    if (mode === 'region') {
      const found = regions.find((region) => region.code === regionCode) ?? regions[0];
      if (found) router.push(`/online-tutoring/by-region/${found.code}/${typedSubject?.slug ?? subject}`);
      else setOpen(true);
    }
    if (mode === 'school') {
      if (schoolMatch) router.push(`/online-tutoring/by-school/${featuredSchool.slug}/${subject}`);
      else setOpen(true);
    }
  };

  const field = 'min-w-0 w-full rounded-xl border border-purple-200 bg-white px-4 py-3.5 text-sm font-semibold text-slate-900 outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-200';
  return (
    <form onSubmit={submit} role="search" className="mt-8 rounded-3xl border border-purple-200 bg-white/90 p-4 shadow-xl shadow-purple-900/10 sm:p-6">
      <div className="grid gap-3 sm:grid-cols-[1fr_1fr_auto]">
        {mode === 'grade' ? (
          <label className="text-sm font-bold text-slate-700">학년
            <select value={grade} onChange={(event) => setGrade(event.target.value)} className={`mt-2 ${field}`}>{gradeOptions.map((item) => <option key={item.slug} value={item.slug}>{item.label}</option>)}</select>
          </label>
        ) : (
          <label className="relative text-sm font-bold text-slate-700">{mode === 'region' ? '지역' : '학교'}
            <input value={query} onChange={(event) => { setQuery(event.target.value); setRegionCode(''); setOpen(true); }} placeholder={mode === 'region' ? '예: 잠원동' : '예: 수완고'} className={`mt-2 ${field}`} autoComplete="off" />
            {mode === 'region' && open && query && <div className="absolute inset-x-0 top-full z-20 mt-2 max-h-60 overflow-auto rounded-2xl border border-purple-200 bg-white p-2 shadow-xl">
              {regions.length ? regions.map((region) => <button type="button" key={region.code} onClick={() => { setQuery(regionLabel(region)); setRegionCode(region.code); setOpen(false); }} className="block w-full rounded-xl px-3 py-2 text-left text-sm hover:bg-purple-50">{regionLabel(region)}</button>) : <p className="px-3 py-2 text-xs text-slate-600">지역을 찾지 못했습니다. 동 이름을 확인해 주세요.</p>}
            </div>}
          </label>
        )}
        <label className="text-sm font-bold text-slate-700">과목
          <select value={subject} onChange={(event) => setSubject(event.target.value)} className={`mt-2 ${field}`}>{tutoringSubjects.map((item) => <option key={item.slug} value={item.slug}>{item.name}</option>)}</select>
        </label>
        <button type="submit" className="mt-auto inline-flex items-center justify-center gap-2 rounded-xl bg-purple-700 px-6 py-3.5 text-sm font-black text-white hover:bg-purple-800"><Search className="h-4 w-4" /> 찾기</button>
      </div>
      {mode === 'school' && open && query && !schoolMatch && <p role="status" className="mt-3 text-sm text-slate-600">현재 학교별 상세 안내는 수완고부터 제공하고 있습니다. 다른 학교는 상담 신청 시 학교명과 시험 자료를 알려 주세요.</p>}
      {mode === 'region' && <p className="mt-3 text-xs leading-5 text-slate-600">전국 읍·면·동을 찾을 수 있습니다. 해당 지역의 대면 수업 또는 제휴학원 운영 여부는 상담에서 확인합니다.</p>}
    </form>
  );
}
