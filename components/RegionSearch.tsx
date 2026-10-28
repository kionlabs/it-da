'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowRight, MapPin, Search } from 'lucide-react';
import { regionTutoringPages } from '@/lib/regionTutoring';
import { tutoringSubjects } from '@/lib/tutoringSubjects';

export default function RegionSearch() {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const normalized = query.trim().toLocaleLowerCase('ko-KR').replace(/\s+/g, '');
  const requestedSubjects = tutoringSubjects.filter((subject) => normalized.includes(subject.name));
  const matches = normalized
    ? regionTutoringPages.filter((page) => (page.aliases.some((alias) => alias.toLocaleLowerCase('ko-KR').replace(/\s+/g, '').includes(normalized)) || normalized.includes(page.region)) && (requestedSubjects.length === 0 || requestedSubjects.some((subject) => subject.name === page.subject)))
    : regionTutoringPages;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (matches.length === 1 && normalized) router.push(matches[0].path);
    else setIsOpen(true);
  };

  return (
    <div className="relative z-30 mt-7 max-w-xl">
      <label htmlFor="region-search" className="mb-2 block text-sm font-bold text-slate-800">우리 지역 과외 찾기</label>
      <form role="search" onSubmit={handleSubmit} className="flex rounded-2xl border border-purple-200 bg-white p-1.5 shadow-lg shadow-purple-900/10 focus-within:border-purple-500 focus-within:ring-2 focus-within:ring-purple-200">
        <Search className="ml-3 mt-3 h-5 w-5 shrink-0 text-purple-700" aria-hidden="true" />
        <input id="region-search" type="search" value={query} onChange={(event) => { setQuery(event.target.value); setIsOpen(true); }} onFocus={() => setIsOpen(true)} onKeyDown={(event) => { if (event.key === 'Escape') setIsOpen(false); }} placeholder="예: 서초동 수학과외" autoComplete="off" aria-controls="region-search-results" aria-expanded={isOpen} className="min-w-0 flex-1 bg-transparent px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none sm:text-base" />
        <button type="submit" className="inline-flex shrink-0 items-center gap-1 rounded-xl bg-purple-700 px-4 py-2 text-sm font-bold text-white transition hover:bg-purple-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2">검색 <ArrowRight className="h-4 w-4" aria-hidden="true" /></button>
      </form>
      {isOpen && <div id="region-search-results" className="absolute inset-x-0 top-full z-20 mt-2 max-h-64 overflow-y-auto rounded-2xl border border-purple-100 bg-white p-2 shadow-xl">
        {matches.length ? matches.map((page) => <Link key={page.slug} href={page.path} onClick={() => setIsOpen(false)} className="flex items-center justify-between gap-3 rounded-xl px-4 py-3 transition hover:bg-purple-50 focus:outline-none focus-visible:bg-purple-50"><span className="inline-flex items-center gap-2 font-bold text-slate-900"><MapPin className="h-4 w-4 text-purple-700" aria-hidden="true" />{page.title}</span><span className="hidden text-xs text-slate-500 sm:block">학교별 내신·1:1 맞춤</span><ArrowRight className="h-4 w-4 shrink-0 text-purple-700" aria-hidden="true" /></Link>) : <div className="px-4 py-3 text-sm leading-6 text-slate-600">준비된 지역 상세 안내가 없습니다. 다른 지역은 <a href="#lead-form" onClick={() => setIsOpen(false)} className="font-bold text-purple-700 underline">상담 신청</a>에서 주소를 알려 주세요.</div>}
      </div>}
    </div>
  );
}
