'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowRight, Search } from 'lucide-react';
import { tutoringSubjects } from '@/lib/tutoringSubjects';

export default function SubjectSearch() {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const normalizedQuery = query.trim().toLocaleLowerCase('ko-KR');
  const matches = normalizedQuery
    ? tutoringSubjects.filter((subject) => subject.aliases.some((alias) => alias.toLocaleLowerCase('ko-KR').includes(normalizedQuery)))
    : tutoringSubjects;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!normalizedQuery) {
      setIsOpen(true);
      return;
    }
    if (matches.length > 0) router.push(`/online-tutoring/subjects/${matches[0].slug}`);
  };

  return (
    <div className="relative z-30 mt-7 max-w-xl">
      <label htmlFor="subject-search" className="mb-2 block text-sm font-bold text-slate-800">과목별 1:1 과외 찾기</label>
      <form onSubmit={handleSubmit} role="search" className="flex rounded-2xl border border-blue-200 bg-white p-1.5 shadow-lg shadow-blue-900/10 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200">
        <Search className="ml-3 mt-3 h-5 w-5 shrink-0 text-blue-700" aria-hidden="true" />
        <input
          id="subject-search"
          type="search"
          value={query}
          onChange={(event) => { setQuery(event.target.value); setIsOpen(true); }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={(event) => { if (event.key === 'Escape') setIsOpen(false); }}
          placeholder="예: 수학, 영어, 한국사, 논술"
          autoComplete="off"
          aria-controls="subject-search-results"
          aria-expanded={isOpen}
          className="min-w-0 flex-1 bg-transparent px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none sm:text-base"
        />
        <button type="submit" className="inline-flex shrink-0 items-center gap-1 rounded-xl bg-blue-700 px-4 py-2 text-sm font-bold text-white transition hover:bg-blue-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
          검색 <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </form>
      {isOpen && (
        <div id="subject-search-results" className="absolute inset-x-0 top-full z-20 mt-2 max-h-72 overflow-y-auto rounded-2xl border border-blue-100 bg-white p-2 shadow-xl">
          {matches.length > 0 ? matches.map((subject) => (
            <Link key={subject.slug} href={`/online-tutoring/subjects/${subject.slug}`} onClick={() => setIsOpen(false)} className="flex items-center justify-between gap-3 rounded-xl px-4 py-3 transition hover:bg-blue-50 focus:outline-none focus-visible:bg-blue-50">
              <span className="font-bold text-slate-900">{subject.name} 온라인 과외</span>
              <span className="hidden text-xs text-slate-500 sm:block">{subject.tagline}</span>
              <ArrowRight className="h-4 w-4 shrink-0 text-blue-700" aria-hidden="true" />
            </Link>
          )) : <p className="px-4 py-3 text-sm text-slate-600">일치하는 과목이 없습니다. 아래 과목 목록에서 선택하거나 상담으로 문의해 주세요.</p>}
        </div>
      )}
    </div>
  );
}
