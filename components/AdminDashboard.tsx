'use client';

import { FormEvent, useCallback, useEffect, useState } from 'react';
import { ArrowLeft, ChevronLeft, ChevronRight, LogOut, Search } from 'lucide-react';

type LeadStatus = 'new' | 'contacted' | 'completed' | 'cancelled';
type StatusFilter = LeadStatus | 'all';
type Lead = {
  id: string;
  name: string;
  phone: string;
  grade: string;
  subjects: string[];
  address: string;
  school: string | null;
  concern: string | null;
  status: LeadStatus;
  source_path: string | null;
  created_at: string;
};

const statusLabels: Record<LeadStatus, string> = {
  new: '신규',
  contacted: '연락 완료',
  completed: '상담 완료',
  cancelled: '취소',
};
const filters: { value: StatusFilter; label: string }[] = [
  { value: 'all', label: '전체' },
  ...Object.entries(statusLabels).map(([value, label]) => ({ value: value as LeadStatus, label })),
];

async function api(path: string, init?: RequestInit) {
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 15000);
  try {
    const response = await fetch(path, { ...init, cache: 'no-store', signal: controller.signal });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(data.message || '요청을 처리하지 못했습니다.');
    return data;
  } catch (reason) {
    if (controller.signal.aborted) throw new Error('응답이 지연되고 있습니다. 잠시 후 다시 시도해 주세요.');
    throw reason;
  } finally {
    window.clearTimeout(timeout);
  }
}

export default function AdminDashboard() {
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rows, setRows] = useState<Lead[]>([]);
  const [status, setStatus] = useState<StatusFilter>('all');
  const [searchText, setSearchText] = useState('');
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  const load = useCallback(async () => {
    setBusy(true);
    setError('');
    try {
      const params = new URLSearchParams({ status, q: query, page: String(page) });
      const data = await api(`/api/admin/leads?${params}`);
      setRows(data.rows);
      setTotal(data.total);
    } catch (reason) {
      if (reason instanceof Error && reason.message === '로그인이 필요합니다.') {
        try {
          await api('/api/admin/session');
          const params = new URLSearchParams({ status, q: query, page: String(page) });
          const data = await api(`/api/admin/leads?${params}`);
          setRows(data.rows);
          setTotal(data.total);
          return;
        } catch {
          setAuthenticated(false);
        }
      }
      setError(reason instanceof Error ? reason.message : '신청 내역을 불러오지 못했습니다.');
    } finally {
      setBusy(false);
    }
  }, [status, query, page]);

  useEffect(() => {
    api('/api/admin/session').then(() => setAuthenticated(true)).catch(() => setAuthenticated(false));
  }, []);

  useEffect(() => {
    if (authenticated) void load();
  }, [authenticated, load]);

  const login = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setBusy(true);
    setError('');
    try {
      await api('/api/admin/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password }) });
      setPassword('');
      setAuthenticated(true);
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : '로그인하지 못했습니다.');
    } finally {
      setBusy(false);
    }
  };

  const logout = async () => {
    await api('/api/admin/logout', { method: 'POST' }).catch(() => undefined);
    setRows([]);
    setAuthenticated(false);
    setSelected(null);
  };

  const changeStatus = async (lead: Lead, nextStatus: LeadStatus) => {
    if (lead.status === nextStatus) return;
    setBusy(true);
    setError('');
    try {
      await api(`/api/admin/leads/${lead.id}`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ status: nextStatus }) });
      await load();
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : '상태를 변경하지 못했습니다.');
    } finally {
      setBusy(false);
    }
  };

  return <main className="min-h-screen bg-[#f8f5f6] px-4 py-8 text-slate-900 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-6xl">
      <header className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e8dce2] pb-6">
        <div><a href="/" className="inline-flex items-center gap-2 text-sm font-bold text-[#765168] hover:underline"><ArrowLeft className="h-4 w-4" /> 사이트로 돌아가기</a><h1 className="mt-3 text-3xl font-black sm:text-4xl">잇다과외 신청 관리</h1><p className="mt-2 text-sm text-slate-600">상담 신청 내역과 진행 상태를 확인합니다.</p></div>
        {authenticated && <button type="button" onClick={logout} className="inline-flex items-center gap-2 rounded-full border border-[#dfcbd5] bg-white px-5 py-3 text-sm font-bold text-slate-700 hover:bg-[#f4e9ee]"><LogOut className="h-4 w-4" /> 로그아웃</button>}
      </header>

      {authenticated === null && <p className="py-16 text-center text-slate-600">로그인 상태를 확인하고 있습니다.</p>}
      {authenticated === false && (
        <section className="mx-auto mt-14 max-w-md rounded-3xl border border-[#e8dce2] bg-white p-7 shadow-sm sm:p-9">
          <h2 className="text-2xl font-black">관리자 로그인</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">승인된 Supabase Auth 계정만 신청 내역을 볼 수 있습니다.</p>
          <form onSubmit={login} className="mt-7 space-y-5">
            <label className="block text-sm font-bold">
              이메일
              <input type="email" required autoComplete="username" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#765168]" />
            </label>
            <label className="block text-sm font-bold">
              비밀번호
              <input type="password" required autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#765168]" />
            </label>
            {error && <p role="alert" className="rounded-xl bg-red-50 p-3 text-sm font-semibold leading-6 text-red-700">{error}</p>}
            <button type="submit" disabled={busy} className="w-full rounded-xl bg-[#765168] px-5 py-3.5 font-bold text-white disabled:opacity-50">{busy ? '확인 중…' : '로그인'}</button>
          </form>
        </section>
      )}

      {authenticated && <section className="py-8">
        <div className="flex flex-wrap items-end justify-between gap-3"><div><h2 className="text-2xl font-black">상담 신청 목록</h2><p className="mt-1 text-sm text-slate-600">현재 조건에 맞는 신청 {total.toLocaleString()}건</p></div><button type="button" onClick={() => void load()} disabled={busy} className="rounded-full border border-[#dfcbd5] bg-white px-5 py-2.5 text-sm font-bold disabled:opacity-50">새로고침</button></div>
        <div className="mt-6 flex flex-wrap gap-2" aria-label="진행 상태 필터">{filters.map((item) => <button key={item.value} type="button" onClick={() => { setStatus(item.value); setPage(1); setSelected(null); }} aria-pressed={status === item.value} className={`rounded-full px-4 py-2 text-sm font-bold ${status === item.value ? 'bg-[#765168] text-white' : 'border border-[#dfcbd5] bg-white text-slate-700'}`}>{item.label}</button>)}</div>
        <form onSubmit={(event) => { event.preventDefault(); setQuery(searchText.trim()); setPage(1); }} className="mt-5 flex max-w-xl gap-2"><label className="sr-only" htmlFor="lead-search">신청자 검색</label><input id="lead-search" value={searchText} onChange={(event) => setSearchText(event.target.value)} placeholder="이름·전화번호·학교 검색" maxLength={60} className="min-w-0 flex-1 rounded-xl border border-[#dfcbd5] bg-white px-4 py-3 outline-none focus:border-[#765168]" /><button type="submit" className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-bold text-white"><Search className="h-4 w-4" /> 검색</button></form>
        {error && <p role="alert" className="mt-5 rounded-xl bg-red-50 p-4 text-sm font-semibold text-red-700">{error}</p>}
        {rows.length === 0 && !busy && !error && <p className="mt-8 rounded-2xl border border-[#e8dce2] bg-white p-10 text-center text-slate-600">해당하는 신청 내역이 없습니다.</p>}
        <div className="mt-6 space-y-3">{rows.map((lead) => <article key={lead.id} className="rounded-2xl border border-[#e8dce2] bg-white p-5 shadow-sm sm:p-6"><div className="flex flex-wrap items-start justify-between gap-4"><div><div className="flex flex-wrap items-center gap-2"><h3 className="text-lg font-black">{lead.name}</h3><span className="rounded-full bg-[#f4e9ee] px-3 py-1 text-xs font-bold text-[#765168]">{statusLabels[lead.status]}</span></div><p className="mt-2 text-sm text-slate-600">{lead.grade} · {lead.subjects.join(', ')} · {new Date(lead.created_at).toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' })}</p></div><button type="button" onClick={() => setSelected(selected === lead.id ? null : lead.id)} aria-expanded={selected === lead.id} className="rounded-full border border-[#dfcbd5] px-4 py-2 text-sm font-bold text-[#765168]">{selected === lead.id ? '접기' : '상세 보기'}</button></div>{selected === lead.id && <div className="mt-5 border-t border-slate-200 pt-5"><dl className="grid gap-4 text-sm sm:grid-cols-2"><div><dt className="font-bold text-slate-500">연락처</dt><dd className="mt-1 font-semibold"><a href={`tel:${lead.phone.replace(/\D/g, '')}`} className="text-[#765168] underline underline-offset-2">{lead.phone}</a></dd></div><div><dt className="font-bold text-slate-500">주소</dt><dd className="mt-1">{lead.address}</dd></div><div><dt className="font-bold text-slate-500">학교</dt><dd className="mt-1">{lead.school || '미입력'}</dd></div><div><dt className="font-bold text-slate-500">신청 페이지</dt><dd className="mt-1 break-all">{lead.source_path || '/'}</dd></div><div className="sm:col-span-2"><dt className="font-bold text-slate-500">학습 고민</dt><dd className="mt-1 whitespace-pre-wrap break-words">{lead.concern || '미입력'}</dd></div></dl><div className="mt-6 flex flex-wrap items-center gap-3"><label htmlFor={`status-${lead.id}`} className="text-sm font-bold">진행 상태</label><select id={`status-${lead.id}`} value={lead.status} disabled={busy} onChange={(event) => void changeStatus(lead, event.target.value as LeadStatus)} className="rounded-xl border border-[#dfcbd5] bg-white px-4 py-2.5 text-sm font-bold disabled:opacity-50">{Object.entries(statusLabels).map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select></div></div>}</article>)}</div>
        {total > 20 && <div className="mt-7 flex items-center justify-center gap-4"><button type="button" disabled={page === 1 || busy} onClick={() => setPage(page - 1)} aria-label="이전 페이지" className="rounded-full border border-[#dfcbd5] bg-white p-3 disabled:opacity-40"><ChevronLeft className="h-5 w-5" /></button><span className="text-sm font-bold">{page} / {Math.ceil(total / 20)}</span><button type="button" disabled={page >= Math.ceil(total / 20) || busy} onClick={() => setPage(page + 1)} aria-label="다음 페이지" className="rounded-full border border-[#dfcbd5] bg-white p-3 disabled:opacity-40"><ChevronRight className="h-5 w-5" /></button></div>}
      </section>}
    </div>
  </main>;
}
