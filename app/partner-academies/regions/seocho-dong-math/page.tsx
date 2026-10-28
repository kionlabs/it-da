import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ChevronRight, MapPin } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LeadForm from '@/components/LeadForm';
import { regionTutoringPages } from '@/lib/regionTutoring';

const siteUrl = 'https://itda-edu.vercel.app';
const page = regionTutoringPages[0];

export const metadata: Metadata = {
  title: '서초동 수학과외 | 학교별 내신·1:1 맞춤 학습',
  robots: { index: false, follow: true },
  description: page.description,
  alternates: { canonical: '/partner-academies/subjects/math' },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    siteName: '잇다과외',
    title: '서초동 수학과외 | 잇다과외',
    description: page.description,
    url: `${siteUrl}${page.path}`,
  },
};

const preparation = [
  { title: '학교 시험 범위와 자료 확인', text: '학생이 다니는 학교의 교과서, 프린트, 부교재, 수행평가 안내를 확인해 이번 시험에서 다룰 단원과 유형을 정리합니다.' },
  { title: '현재 수학 실력 진단', text: '최근 풀이와 오답을 살펴 개념이 부족한지, 조건 해석이 어려운지, 계산 실수가 반복되는지 구분합니다.' },
  { title: '시험일까지 학습 순서 설계', text: '남은 기간에 맞춰 필요한 개념 복습, 유형 연습, 서술형 풀이와 오답 재풀이의 우선순위를 정합니다.' },
];

const focus = [
  { grade: '초등', text: '연산 정확도와 분수·비율처럼 이후 학습에 이어지는 개념을 확인합니다.' },
  { grade: '중등', text: '학교 진도에 맞춰 문자와 식, 함수, 기하의 개념 연결과 서술형 풀이를 연습합니다.' },
  { grade: '고등', text: '학교별 시험 난이도와 목표를 고려해 개념 적용, 변형 유형, 시간 안배를 점검합니다.' },
];

const questions = [
  { q: '서초동 학교의 수학 내신 자료도 반영하나요?', a: '학생이 제공하는 학교별 교과서, 프린트, 부교재와 시험 범위를 확인해 수업 계획에 반영합니다. 특정 학교 자료를 이미 보유하고 있다고 가정하지 않고, 상담에서 현재 자료와 일정을 먼저 확인합니다.' },
  { q: '방문할 수 있는 제휴학원이 있나요?', a: '방문 가능한 제휴학원과 수업 형태는 학생의 위치, 학년, 과목에 따라 상담에서 확인해 안내합니다. 온라인 1:1 수업도 함께 상담할 수 있습니다.' },
  { q: '수학 기초가 많이 부족해도 신청할 수 있나요?', a: '가능합니다. 현재 단원에서 막히는 원인을 찾고 필요한 선수 개념으로 돌아가 학습 순서를 조정합니다.' },
];

export default function SeochoMathPage() {
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, item: { '@id': siteUrl, name: '잇다과외' } },
      { '@type': 'ListItem', position: 2, item: { '@id': `${siteUrl}/partner-academies`, name: '제휴학원·지역별 과외' } },
      { '@type': 'ListItem', position: 3, item: { '@id': `${siteUrl}${page.path}`, name: page.title } },
    ],
  };

  return (
    <div className="min-h-screen bg-white text-slate-950">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb).replace(/</g, '\\u003c') }} />
      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50 px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div aria-hidden="true" className="absolute -right-24 -top-20 h-80 w-80 rounded-full bg-violet-200/60 blur-3xl" />
          <div className="relative mx-auto max-w-7xl">
            <nav aria-label="현재 위치" className="flex flex-wrap items-center gap-2 text-sm font-medium text-slate-500"><Link href="/" className="hover:text-purple-700">홈</Link><ChevronRight className="h-4 w-4" aria-hidden="true" /><Link href="/partner-academies" className="hover:text-purple-700">제휴학원</Link><ChevronRight className="h-4 w-4" aria-hidden="true" /><span className="text-slate-800">서초동 수학과외</span></nav>
            <div className="mt-14 max-w-4xl md:mt-20">
              <p className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white px-4 py-2 text-xs font-black tracking-[0.12em] text-purple-700"><MapPin className="h-4 w-4" aria-hidden="true" />서울 서초동 · 수학 1:1 학습 안내</p>
              <h1 className="mt-6 text-balance text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl break-keep">서초동 수학과외,<br /><span className="text-purple-700">우리 학교 시험에 맞게</span></h1>
              <p className="mt-7 max-w-3xl text-pretty text-lg font-medium leading-9 text-slate-700 break-keep">같은 수학 단원을 공부해도 학교 시험 범위와 학생이 막히는 개념은 다릅니다. 잇다과외는 학생의 학교 자료와 실제 풀이를 확인하고, 지금 필요한 수학 공부부터 순서를 정합니다.</p>
              <div className="mt-9 flex flex-wrap gap-3"><a href="#lead-form" className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-7 py-4 text-sm font-black text-white shadow-lg transition hover:bg-purple-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-purple-200">서초동 수학과외 상담 <ArrowRight className="h-4 w-4" aria-hidden="true" /></a><a href="#learning-plan" className="inline-flex items-center rounded-full border border-slate-200 bg-white px-7 py-4 text-sm font-black text-slate-800 transition hover:border-purple-300">학습 방식 살펴보기</a></div>
              <p className="mt-5 text-sm leading-6 text-slate-600 break-keep">방문 가능한 제휴학원과 수업 형태는 상담 시 확인해 안내합니다.</p>
            </div>
          </div>
        </section>

        <section id="learning-plan" className="scroll-mt-20 px-4 py-20 sm:px-6 md:py-28 lg:px-8" aria-labelledby="plan-title"><div className="mx-auto max-w-7xl"><p className="text-sm font-black tracking-[0.16em] text-purple-700">SCHOOL × STUDENT</p><h2 id="plan-title" className="mt-4 text-balance text-3xl font-black sm:text-4xl break-keep">서초동 수학 내신 준비, 무엇부터 확인할까요?</h2><p className="mt-4 max-w-3xl leading-8 text-slate-600 break-keep">지역명만으로 같은 수업을 권하지 않습니다. 학교 시험 자료와 학생의 현재 풀이를 함께 봐야 학습 우선순위가 분명해집니다.</p><div className="mt-10 grid gap-5 md:grid-cols-3">{preparation.map((item, index) => <article key={item.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-7"><span className="text-sm font-black text-purple-700">STEP 0{index + 1}</span><h3 className="mt-6 text-xl font-black break-keep">{item.title}</h3><p className="mt-4 leading-8 text-slate-600 break-keep">{item.text}</p></article>)}</div></div></section>

        <section className="bg-slate-950 px-4 py-20 text-white sm:px-6 md:py-28 lg:px-8" aria-labelledby="focus-title"><div className="mx-auto max-w-7xl"><p className="text-sm font-black tracking-[0.16em] text-violet-300">MATH BY SCHOOL LEVEL</p><h2 id="focus-title" className="mt-4 text-balance text-3xl font-black sm:text-4xl break-keep">학년별로 달라지는 수학 학습의 중심</h2><div className="mt-10 grid gap-5 md:grid-cols-3">{focus.map((item) => <article key={item.grade} className="rounded-3xl border border-white/15 bg-white/5 p-7"><div className="flex items-center gap-3"><CheckCircle2 className="h-6 w-6 text-violet-300" aria-hidden="true" /><h3 className="text-xl font-black">{item.grade}</h3></div><p className="mt-5 leading-8 text-slate-300 break-keep">{item.text}</p></article>)}</div></div></section>

        <section className="px-4 py-20 sm:px-6 md:py-28 lg:px-8" aria-labelledby="method-title"><div className="mx-auto max-w-7xl"><h2 id="method-title" className="text-balance text-3xl font-black sm:text-4xl break-keep">수학 오답은 원인별로 다시 봅니다</h2><p className="mt-5 max-w-3xl leading-8 text-slate-600 break-keep">틀린 문제를 다시 풀기 전에 개념 누락, 조건 해석, 계산 실수를 구분합니다. 시험 범위 안에서 자주 반복되는 오류부터 보완하고, 학생이 풀이 이유를 스스로 설명할 수 있는지 확인합니다.</p><div className="mt-8 flex flex-wrap gap-3">{['개념이 비어 있는 단원 찾기', '학교 범위의 유형별 문제 풀이', '서술형 풀이 과정 점검', '오답 재풀이와 복습 계획'].map((item) => <span key={item} className="rounded-full border border-purple-200 bg-purple-50 px-5 py-3 text-sm font-bold text-purple-900">{item}</span>)}</div></div></section>

        <section className="bg-purple-50/70 px-4 py-20 sm:px-6 md:py-24 lg:px-8" aria-labelledby="faq-title"><div className="mx-auto max-w-4xl"><h2 id="faq-title" className="text-balance text-3xl font-black sm:text-4xl break-keep">서초동 수학과외 자주 묻는 질문</h2><div className="mt-8 space-y-4">{questions.map((item) => <article key={item.q} className="rounded-2xl border border-purple-100 bg-white p-6 sm:p-7"><h3 className="text-lg font-black leading-7 break-keep">Q. {item.q}</h3><p className="mt-3 leading-8 text-slate-600 break-keep">{item.a}</p></article>)}</div></div></section>

        <section className="px-4 py-16 sm:px-6 lg:px-8"><div className="mx-auto flex max-w-7xl flex-wrap gap-4 text-sm font-bold"><Link href="/partner-academies" className="rounded-full border border-slate-200 px-5 py-3 text-purple-700 hover:bg-purple-50">지역별 과외 안내</Link><Link href="/online-tutoring/subjects/math" className="rounded-full border border-slate-200 px-5 py-3 text-blue-700 hover:bg-blue-50">수학 온라인 과외</Link><Link href="/pricing-faq" className="rounded-full border border-slate-200 px-5 py-3 text-slate-700 hover:bg-slate-50">수업료 &amp; FAQ</Link></div></section>
        <LeadForm initialSubject="수학" initialAddress="서울특별시 서초동" />
      </main>
      <Footer />
    </div>
  );
}
