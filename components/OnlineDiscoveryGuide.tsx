import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LeadForm from '@/components/LeadForm';
import { TutoringSubject } from '@/lib/tutoringSubjects';

type GuideProps = {
  kind: 'grade' | 'region' | 'school';
  title: string;
  place: string;
  subject: TutoringSubject;
  focus: string;
  detail: string;
  related: { title: string; href: string }[];
};

export default function OnlineDiscoveryGuide({ kind, title, place, subject, focus, detail, related }: GuideProps) {
  const section = kind === 'grade' ? '학년별 과외' : kind === 'region' ? '지역별 과외' : '학교별 과외';
  return <div className="min-h-screen bg-white text-slate-900">
    <Navbar />
    <main>
      <section className="bg-gradient-to-br from-[#F9EEE8] via-white to-[#F3E8EC] px-4 py-16 sm:px-6 md:py-24 lg:px-8"><div className="mx-auto max-w-7xl">
        <nav aria-label="현재 위치" className="flex flex-wrap items-center gap-2 text-sm text-slate-600"><Link href="/">홈</Link><ChevronRight className="h-4 w-4" /><Link href="/online-tutoring">온라인 과외</Link><ChevronRight className="h-4 w-4" /><Link href={`/online-tutoring/by-${kind}`}>{section}</Link><ChevronRight className="h-4 w-4" /><span>{title}</span></nav>
        <div className="mt-14 max-w-4xl"><p className="text-sm font-black text-purple-700">{section} · 1:1 맞춤 학습</p><h1 className="mt-4 text-balance text-4xl font-black leading-tight text-slate-950 sm:text-6xl">{title}</h1><p className="mt-6 text-lg leading-9 text-slate-700 break-keep">{focus}</p><p className="mt-3 leading-8 text-slate-600 break-keep">{detail}</p><a href="#lead-form" className="mt-8 inline-flex items-center gap-2 rounded-full bg-purple-700 px-7 py-4 text-sm font-black text-white hover:bg-purple-800">{title} 상담 신청 <ArrowRight className="h-4 w-4" /></a></div>
      </div></section>
      <section className="px-4 py-20 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><h2 className="text-3xl font-black sm:text-4xl">{place}에서 살펴볼 {subject.name} 학습 과제</h2><p className="mt-4 max-w-3xl leading-8 text-slate-600 break-keep">{subject.introduction}</p><div className="mt-9 grid gap-5 md:grid-cols-3">{subject.concerns.map((concern, index) => <article key={concern} className="rounded-3xl border border-purple-200 bg-purple-50/50 p-7"><span className="font-black text-purple-700">0{index + 1}</span><p className="mt-5 text-lg font-bold leading-8 break-keep">{concern}</p></article>)}</div></div></section>
      <section className="bg-[#30242C] px-4 py-20 text-white sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><h2 className="text-3xl font-black sm:text-4xl">실제 수업 계획을 세우는 순서</h2><p className="mt-4 max-w-3xl leading-8 text-white/75">학생의 학습 상태와 시험 범위를 확인한 뒤 아래 내용을 필요한 순서로 조정합니다.</p><div className="mt-9 grid gap-5 md:grid-cols-3">{subject.approach.map((step, index) => <article key={step.title} className="rounded-3xl border border-white/20 bg-white/5 p-7"><span className="text-sm font-black text-[#F5D598]">STEP 0{index + 1}</span><h3 className="mt-5 text-xl font-black">{step.title}</h3><p className="mt-3 leading-8 text-white/75 break-keep">{step.description}</p></article>)}</div></div></section>
      <section className="px-4 py-20 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><h2 className="text-3xl font-black">확인하고 시작합니다</h2><div className="mt-7 max-w-4xl space-y-4"><p className="rounded-2xl border border-slate-200 p-6 leading-8 text-slate-700">{kind === 'region' ? '온라인 수업은 지역에 관계없이 상담할 수 있습니다. 방문 수업 및 지역 제휴학원 운영 여부는 별도로 확인해 안내합니다.' : kind === 'school' ? '수완고등학교의 특정 시험 문제나 출제 경향을 확인했다고 주장하지 않습니다. 학생이 제공하는 실제 학교 자료와 최근 시험 범위로 수업 계획을 세웁니다.' : '학년이 같아도 이해 수준과 학교 진도는 다릅니다. 진단과 상담을 통해 학생에게 필요한 개념부터 시작합니다.'}</p><p className="rounded-2xl border border-slate-200 p-6 leading-8 text-slate-700">{subject.description}</p></div><div className="mt-9 flex flex-wrap gap-3">{related.map((item) => <Link href={item.href} key={item.href} className="rounded-full border border-purple-200 px-5 py-3 text-sm font-bold text-purple-700 hover:bg-purple-50">{item.title}</Link>)}</div></div></section>
      <LeadForm initialSubject={subject.name} initialAddress={kind === 'region' ? place : undefined} initialSchool={kind === 'school' ? '수완고등학교' : undefined} />
    </main>
    <Footer />
  </div>;
}
