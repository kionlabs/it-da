import type { Metadata } from 'next';
import {
  ArrowRight,
  BadgeCheck,
  CircleHelp,
  GraduationCap,
  ReceiptText,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import LeadForm from '@/components/LeadForm';
import Footer from '@/components/Footer';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';

const siteUrl = 'https://itda-edu.vercel.app';

export const metadata: Metadata = {
  title: '수업료 안내 & 자주 묻는 질문',
  description:
    '잇다과외 초등·중등·고등 수업료와 무료 체험수업, 선생님 배정, 학교별 내신 대비, 수업 횟수 등 자주 묻는 질문을 확인하세요.',
  keywords: ['잇다과외 수업료', '과외 비용', '무료 체험수업', '과외 선생님 매칭', '1:1 과외 FAQ'],
  alternates: { canonical: '/pricing-faq' },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: `${siteUrl}/pricing-faq`,
    siteName: '잇다과외',
    title: '수업료 안내 & 자주 묻는 질문 | 잇다과외',
    description: '학년별 수업료와 잇다과외 이용 전 궁금한 내용을 한눈에 확인하세요.',
    images: [`${siteUrl}/images/hero-up-banner.jpg`],
  },
};

const prices = [
  { grade: '초등', price: '236,000원', note: '기초 개념과 공부 습관 형성' },
  { grade: '중등', price: '268,000원', note: '학교별 내신과 고등 연계 학습' },
  { grade: '고1·2', price: '308,000원', note: '내신 등급과 과목별 약점 관리' },
  { grade: '고3', price: '328,000원', note: '입시 목표에 맞춘 집중 학습' },
];

const faqs = [
  {
    question: '우리 동네 과외는 어떤 학생이 많이 신청하나요?',
    answer:
      '지역 학교 내신을 체계적으로 관리하고 싶은 초등·중등·고등학생이 많이 신청합니다. 학원 수업만으로 개인별 취약점을 보완하기 어려운 학생, 특정 과목의 기초가 부족한 학생, 상위권 진입을 목표로 심화 학습이 필요한 학생 등 다양한 목표를 가진 학생들이 1:1 맞춤 과외를 이용하고 있습니다.',
  },
  {
    question: '우리 동네 학교 내신 대비도 가능한가요?',
    answer:
      '네, 가능합니다. 지역 학교의 시험 범위와 출제 경향, 수행평가 기준을 파악한 선생님이 학교별 맞춤 내신 대비를 진행합니다. 시험 2~4주 전에는 해당 학교 기출을 집중 분석하여 내신 고득점을 목표로 학습합니다.',
  },
  {
    question: '무료 체험수업이 있나요?',
    answer:
      '네, 첫 수업은 30분 무료 체험으로 진행 가능합니다. 체험수업을 통해 선생님과의 궁합, 수업 방식, 학생의 현재 수준을 파악한 후 정규 수업 여부를 결정하실 수 있습니다. 부담 없이 상담만 받아보셔도 됩니다.',
  },
  {
    question: '선생님은 어떻게 배정되나요?',
    answer:
      '학생의 현재 수준, 목표, 성향, 희망 수업 방식을 종합적으로 파악한 후 가장 적합한 선생님을 매칭해 드립니다. 모든 선생님은 학력 검증과 신원 확인, 모의 수업 평가를 거쳐 선발되며, 명문대 재학생·졸업생, 현직 교사, 학원 강사 출신 등 검증된 분들이 활동합니다.',
  },
  {
    question: '우리 동네 과외 수업료는 얼마인가요?',
    answer:
      '수업료는 학년, 과목, 수업 횟수, 수업 방식에 따라 달라집니다. 정확한 비용은 무료 상담을 통해 학생의 상황을 파악한 후 맞춤 커리큘럼과 함께 안내해 드립니다. 합리적인 가격에 질 높은 수업을 제공합니다.',
  },
  {
    question: '수학, 영어 외 다른 과목도 가능한가요?',
    answer:
      '네, 수학·영어 외에도 국어, 과학(물리·화학·생물·지구과학), 사회(한국사·사회탐구), 논술, 코딩 등 다양한 과목의 과외가 가능합니다. 원하시는 과목을 말씀해 주시면 해당 과목 전문 선생님을 연결해 드립니다.',
  },
  {
    question: '수업은 주 몇 회, 몇 시간 하는 것이 좋나요?',
    answer:
      '학생의 학년·과목·현재 수준·학습 목표에 따라 달라집니다. 일반적으로 주 1~2회 수업을 많이 진행하지만, 시험기간이나 입시 준비 등 상황에 따라 조정할 수 있습니다. 상담을 통해 무리하지 않으면서도 목표를 달성할 수 있는 수업 횟수와 시간을 안내해 드립니다.',
  },
  {
    question: '선생님과 아이가 맞지 않으면 변경할 수 있나요?',
    answer:
      '네, 가능합니다. 아무리 실력 있는 선생님이라도 학생의 학습 스타일과 맞지 않는다면 좋은 수업이 되기 어렵습니다. 수업 방식이나 학생과의 궁합이 맞지 않는 경우 상담을 통해 선생님 변경을 안내해 드립니다. 잇다과외는 단순한 선생님 연결보다 학생이 꾸준히 학습할 수 있는 환경을 중요하게 생각합니다.',
  },
  {
    question: '우리 아이에게 어떤 선생님이 배정되나요?',
    answer:
      '학생의 학년·과목·현재 성적·학습 수준·목표·성향·희망 수업 방식 등을 종합적으로 확인한 후 학생에게 적합한 선생님을 매칭합니다. 단순히 가까운 선생님을 연결하는 것이 아니라, 학생에게 잘 맞는 선생님을 찾는 것부터 과외의 시작이라고 생각합니다.',
  },
];

export default function PricingFaqPage() {
  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-white text-slate-950 selection:bg-purple-600 selection:text-white">
      <Navbar />
      <BreadcrumbJsonLd name="수업료 안내와 자주 묻는 질문" path="/pricing-faq" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData).replace(/</g, '\\u003c') }}
      />

      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-[#f5f1ff] via-white to-[#eaf3ff] px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div aria-hidden="true" className="absolute -left-28 top-6 h-80 w-80 rounded-full bg-purple-300/30 blur-3xl" />
          <div aria-hidden="true" className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-blue-300/30 blur-3xl" />
          <div className="relative mx-auto max-w-5xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white/80 px-4 py-2 text-xs font-black tracking-[0.14em] text-purple-700 shadow-sm backdrop-blur">
              <ReceiptText className="h-4 w-4" /> PRICING & FAQ
            </span>
            <h1 className="mt-6 text-balance text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl break-keep">
              수업료부터 수업 방식까지,
              <br />궁금한 내용을 한곳에 모았습니다.
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-pretty text-base font-medium leading-8 text-slate-600 sm:text-lg break-keep">
              학년별 기본 수업료를 확인하고, 무료 체험부터 선생님 배정과 내신 대비까지 상담 전에 궁금한 내용을 빠르게 확인해 보세요.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a href="#pricing" className="inline-flex items-center justify-center rounded-full bg-slate-950 px-7 py-4 text-sm font-extrabold text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-purple-800">수업료 확인하기</a>
              <a href="#faq" className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-4 text-sm font-extrabold text-slate-800 shadow-sm transition hover:border-purple-200 hover:text-purple-700">FAQ 바로가기 <ArrowRight className="h-4 w-4" /></a>
            </div>
          </div>
        </section>

        <section id="pricing" className="scroll-mt-20 bg-slate-950 px-4 py-20 text-white sm:px-6 md:py-28 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
              <div>
                <p className="text-sm font-black tracking-[0.18em] text-violet-300">TUITION GUIDE</p>
                <h2 className="mt-4 text-balance text-3xl font-black leading-tight sm:text-5xl break-keep">학년별 기본<br />수업료 안내</h2>
              </div>
              <div>
                <p className="text-pretty font-medium leading-8 text-slate-300 break-keep">학생의 학년과 목표를 기준으로 안내되는 기본 수업료입니다. 과목, 수업 횟수와 방식에 따라 달라질 수 있으며 상담 후 맞춤 커리큘럼과 함께 정확히 안내해 드립니다.</p>
                <div className="mt-5 flex flex-wrap gap-3 text-xs font-bold text-violet-100">
                  {['맞춤 커리큘럼', '전문 선생님 매칭', '학습 피드백'].map((item) => <span key={item} className="rounded-full border border-white/15 bg-white/5 px-4 py-2">{item}</span>)}
                </div>
              </div>
            </div>

            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {prices.map(({ grade, price, note }, index) => (
                <article key={grade} className={`relative overflow-hidden rounded-[2rem] border p-6 sm:p-7 ${index === 3 ? 'border-violet-400 bg-violet-600' : 'border-white/10 bg-white/[0.06]'}`}>
                  <span className="absolute right-5 top-4 text-xs font-black tracking-widest text-white/30">0{index + 1}</span>
                  <GraduationCap className="h-8 w-8 text-violet-300" />
                  <p className="mt-7 text-sm font-bold text-slate-300">{grade}</p>
                  <p className="mt-2 text-3xl font-black tracking-tight">{price}</p>
                  <p className={`mt-4 text-sm font-medium leading-6 ${index === 3 ? 'text-violet-100' : 'text-slate-400'}`}>{note}</p>
                </article>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm leading-6 text-slate-400">
              ※ 정확한 수업료는 학생의 학년, 과목, 수업 횟수, 수업 방식에 따라 달라질 수 있습니다.
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-black tracking-[0.18em] text-purple-700">BEFORE YOU START</p>
              <h2 className="mt-4 text-balance text-3xl font-black leading-tight sm:text-5xl break-keep">부담 없이 경험하고<br />충분히 확인한 뒤 시작하세요.</h2>
            </div>
            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {[
                { icon: Sparkles, title: '30분 무료 체험', text: '수업 방식과 학생의 현재 수준을 확인한 뒤 정규 수업을 결정할 수 있습니다.' },
                { icon: ShieldCheck, title: '검증된 선생님', text: '학력과 신원, 수업 역량을 확인하고 학생의 목표와 성향에 맞춰 연결합니다.' },
                { icon: UsersRound, title: '매칭 변경 상담', text: '수업 스타일과 궁합이 맞지 않을 때 상담을 통해 선생님 변경을 안내합니다.' },
              ].map(({ icon: Icon, title, text }) => (
                <article key={title} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7 sm:p-8">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100 text-purple-700"><Icon className="h-6 w-6" /></span>
                  <h3 className="mt-6 text-xl font-black">{title}</h3>
                  <p className="mt-3 font-medium leading-7 text-slate-600">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="scroll-mt-20 bg-[#f5f3ff] px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <CircleHelp className="mx-auto h-10 w-10 text-purple-700" />
              <p className="mt-5 text-sm font-black tracking-[0.18em] text-purple-700">FREQUENTLY ASKED QUESTIONS</p>
              <h2 className="mt-4 text-3xl font-black sm:text-5xl">자주 묻는 질문</h2>
              <p className="mx-auto mt-5 max-w-2xl font-medium leading-7 text-slate-600">질문을 누르면 자세한 답변을 확인할 수 있습니다.</p>
            </div>
            <div className="mt-12 space-y-3">
              {faqs.map(({ question, answer }, index) => (
                <details key={question} className="group rounded-2xl border border-purple-100 bg-white p-5 shadow-sm open:shadow-md sm:p-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-black text-slate-900 marker:hidden">
                    <span className="flex items-start gap-3"><span className="mt-0.5 shrink-0 text-purple-600">Q{String(index + 1).padStart(2, '0')}</span><span>{question}</span></span>
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-purple-50 text-purple-700 transition group-open:rotate-45">+</span>
                  </summary>
                  <div className="mt-4 border-t border-slate-100 pt-4">
                    <p className="font-medium leading-7 text-slate-600">{answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-purple-800 via-violet-700 to-indigo-700 px-4 py-16 text-white sm:px-6 md:py-20 lg:px-8">
          <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
            <div>
              <BadgeCheck className="h-9 w-9 text-violet-200" />
              <h2 className="mt-4 text-balance text-3xl font-black leading-tight sm:text-4xl break-keep">아직 궁금한 점이 남아 있다면<br />학생에게 맞춰 안내해 드릴게요.</h2>
            </div>
            <a href="#lead-form" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-extrabold text-purple-800 shadow-xl transition hover:-translate-y-0.5">무료 상담 신청하기 <ArrowRight className="h-4 w-4" /></a>
          </div>
        </section>

        <LeadForm />
      </main>

      <Footer />
    </div>
  );
}
