import type { Metadata } from 'next';
import Image from 'next/image';
import {
  ArrowRight,
  BookOpenCheck,
  BrainCircuit,
  CalendarCheck2,
  CheckCircle2,
  ClipboardCheck,
  GraduationCap,
  Handshake,
  HeartHandshake,
  MapPin,
  MessageSquareText,
  School,
  SearchCheck,
  Sparkles,
  Target,
  UsersRound,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import LeadForm from '@/components/LeadForm';
import Footer from '@/components/Footer';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';

const siteUrl = 'https://itda-edu.vercel.app';

export const metadata: Metadata = {
  title: '제휴학원 맞춤 학습 시스템',
  description:
    '잇다과외 제휴학원은 지역 학교의 출제 경향과 학생의 수준을 함께 분석해 내신 대비, 학습 플래닝, 오답 관리까지 연결하는 맞춤 학습 시스템을 제공합니다.',
  keywords: ['잇다과외 제휴학원', '학교별 내신 학원', '자기주도학습', '맞춤 학습 코칭', '초중고 내신 관리'],
  alternates: { canonical: '/partner-academies' },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: `${siteUrl}/partner-academies`,
    siteName: '잇다과외',
    title: '제휴학원 맞춤 학습 시스템 | 잇다과외',
    description: '지역 학교를 잘 아는 학원과 잇다과외의 정밀한 학습 코칭이 만납니다.',
    images: [`${siteUrl}/images/brand_intro_coach.png`],
  },
};

const strengths = [
  {
    number: '01',
    icon: School,
    title: '학교별 시험 경향 반영',
    text: '같은 학년, 같은 과목이라도 학교마다 시험 스타일이 다릅니다. 어떤 학교는 교과서 중심으로 출제하고, 어떤 학교는 프린트·부교재·수업 필기에서 많이 출제합니다. 지역 학교를 오래 관리해 온 학원은 이런 차이를 알고 학생이 다니는 학교의 출제 경향에 맞춰 효율적으로 준비합니다.',
  },
  {
    number: '02',
    icon: ClipboardCheck,
    title: '학교 수업 자료 기반 대비',
    text: '내신은 수능형 실력만으로 해결되지 않습니다. 학교 선생님이 강조한 내용과 수행평가 자료, 프린트, 교과서 본문, 부교재, 수업 중 필기가 시험에 직접 반영되는 경우가 많습니다. 학생이 가져오는 학교별 자료를 분석해 시험 범위에서 중요한 부분을 선별하고 집중적으로 다룹니다.',
  },
  {
    number: '03',
    icon: CalendarCheck2,
    title: '구체적인 시험 직전 대비',
    text: '시험 기간에 맞춰 학습 계획을 조정합니다. 시험 3~4주 전에는 범위를 정리하고, 2주 전에는 유형별 문제 풀이, 1주 전에는 학교별 예상 문제와 오답 정리, 시험 직전에는 암기 확인과 서술형 대비에 집중합니다.',
  },
  {
    number: '04',
    icon: Target,
    title: '학생별 약점 보완',
    text: '같은 학교 학생이라도 약점은 다릅니다. 어떤 학생은 개념 이해가 부족하고, 어떤 학생은 계산 실수가 많으며, 어떤 학생은 서술형 답안 작성이 약합니다. 학교 시험 범위 안에서 학생별 약점을 점검하고 점수에 직접 영향을 주는 부분부터 보완합니다.',
  },
  {
    number: '05',
    icon: BookOpenCheck,
    title: '서술형·수행평가 대비',
    text: '내신에서 서술형과 수행평가는 점수와 등급 차이를 만드는 중요한 요소입니다. 학교별 서술형 출제 방식과 감점 포인트, 답안 작성 방식까지 지도합니다. 단순히 정답을 맞히는 훈련을 넘어 학교 선생님이 요구하는 표현 방식에 맞춰 답안을 쓰는 연습을 합니다.',
  },
  {
    number: '06',
    icon: UsersRound,
    title: '학부모에게 명확한 학습 관리',
    text: '시험 범위, 학교별 일정, 학생의 준비 상태를 함께 확인합니다. 아이가 어떤 범위를 끝냈고 어떤 단원이 약한지, 시험 전까지 무엇을 보완해야 하는지 알기 쉽게 안내합니다. 이번 시험을 위해 무엇을 준비하고 있는지 분명하게 공유합니다.',
  },
];

const coachingSteps = [
  {
    code: 'C1',
    label: 'CHECK',
    icon: SearchCheck,
    title: '현재 상태 진단',
    text: '성취도와 취약 개념, 공부 습관을 함께 확인합니다.',
  },
  {
    code: 'C2',
    label: 'CURRICULUM',
    icon: Target,
    title: '맞춤 과정 설계',
    text: '학교 일정과 목표에 맞춰 교재, 진도, 주간 목표를 정합니다.',
  },
  {
    code: 'C3',
    label: 'CONSULTING',
    icon: MessageSquareText,
    title: '학습 방향 상담',
    text: '학습 기록을 바탕으로 학생·학부모와 다음 방향을 조율합니다.',
  },
  {
    code: 'C4',
    label: 'COACHING',
    icon: HeartHandshake,
    title: '실천 밀착 코칭',
    text: '계획이 행동으로 이어지도록 수업과 자기주도 학습을 관리합니다.',
  },
];

const faqs = [
  {
    question: '제휴학원 수업은 일반 단체 수업과 무엇이 다른가요?',
    answer:
      '같은 반에서도 학생별 진단 결과와 학교 일정에 따라 교재, 진도, 과제가 달라집니다. 설명을 함께 듣는 시간과 개별 학습·피드백 시간을 조합해 각자의 속도를 지킬 수 있도록 설계합니다.',
  },
  {
    question: '내신 시험 기간에는 어떻게 관리하나요?',
    answer:
      '학교별 시험 범위와 자료를 먼저 분석한 뒤 개념, 유형, 서술형, 오답 순서로 학습합니다. 시험 직전에는 학생별 취약 영역과 누적 오답을 중심으로 압축 점검합니다.',
  },
  {
    question: '학부모도 학습 진행 상황을 확인할 수 있나요?',
    answer:
      '수업 내용, 과제 수행, 학습 태도, 보완이 필요한 부분을 상담과 학습 피드백을 통해 확인할 수 있도록 안내합니다.',
  },
  {
    question: '가까운 제휴학원이나 이용 가능 여부는 어떻게 확인하나요?',
    answer:
      '하단 무료 상담 폼에 학생의 학년과 현재 고민을 남겨 주세요. 확인 후 이용 가능한 학습 형태와 상담 방법을 안내해 드립니다.',
  },
];

export default function PartnerAcademiesPage() {
  return (
    <div className="min-h-screen bg-white text-slate-950 selection:bg-purple-600 selection:text-white">
      <Navbar />
      <BreadcrumbJsonLd name="제휴학원 맞춤 학습" path="/partner-academies" />

      <main>
        <section className="relative overflow-hidden bg-[#f4f1ff] px-4 pb-20 pt-14 sm:px-6 md:pb-28 md:pt-24 lg:min-h-[calc(100svh-4rem)] lg:px-8 lg:py-8">
          <div aria-hidden="true" className="absolute -left-28 top-20 h-72 w-72 rounded-full bg-violet-300/35 blur-3xl" />
          <div aria-hidden="true" className="absolute -right-20 -top-16 h-96 w-96 rounded-full bg-sky-200/55 blur-3xl" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:min-h-[calc(100svh-8rem)] lg:grid-cols-[0.96fr_1.04fr] lg:gap-16">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white/80 px-4 py-2 text-xs font-black tracking-[0.14em] text-purple-700 shadow-sm backdrop-blur">
                <Handshake className="h-4 w-4" /> IT-DA PARTNER ACADEMY
              </div>
              <h1 className="mt-6 max-w-2xl text-balance text-3xl font-black leading-[1.18] tracking-tight sm:text-5xl lg:text-[3.5rem] break-keep">
                지역 내 <span className="whitespace-nowrap text-purple-700">학교 내신</span>
                <br className="hidden sm:block" /> 맞춤형 준비
              </h1>
              <p className="mt-6 max-w-2xl text-pretty text-base font-medium leading-8 text-slate-700 sm:text-lg break-keep">
                지역 내 학교 내신 맞춤형 학원의 강점은 ‘일반적인 공부’가 아니라 ‘우리 학교 시험에 맞는 공부’를 시킨다는 점입니다.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#lead-form" className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-7 py-4 text-sm font-extrabold text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-purple-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-purple-300">
                  제휴학원 상담 신청 <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#academy-system" className="inline-flex items-center justify-center rounded-full border border-slate-900/15 bg-white/80 px-7 py-4 text-sm font-extrabold text-slate-800 transition hover:bg-white">
                  학습 시스템 보기
                </a>
              </div>
              <div className="mt-9 flex flex-wrap gap-3">
                {['학교별 내신', '개별 진도', '학습 습관', '밀착 피드백'].map((item) => (
                  <span key={item} className="rounded-full border border-purple-200 bg-white/75 px-4 py-2 text-xs font-bold text-slate-700 shadow-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-2xl sm:px-6">
              <div className="relative ml-auto aspect-[5/4] w-full overflow-hidden rounded-[2rem_5rem_2rem_5rem] border-[10px] border-white shadow-2xl">
                <Image src="/images/brand_intro_coach.png" alt="선생님과 학생들이 함께 소통하며 공부하는 제휴학원 코칭 환경" fill priority sizes="(min-width: 1024px) 48vw, 92vw" className="object-cover object-center" />
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-[0.82fr_1.18fr]">
                <div className="rounded-2xl bg-purple-700 p-5 text-white shadow-lg">
                  <MapPin className="h-6 w-6 text-violet-200" />
                  <p className="mt-3 text-xs font-bold text-violet-100">지역 밀착 학습</p>
                  <p className="mt-1 text-lg font-black">우리 학교 맞춤</p>
                </div>
                <div className="flex flex-col justify-center rounded-2xl bg-slate-950 p-5 text-white shadow-lg xl:pr-28">
                  <p className="text-xs font-black tracking-[0.16em] text-violet-300">LOCAL × PERSONAL</p>
                  <p className="mt-2 text-lg font-black leading-snug">학교는 가까이, 관리는 더 깊이</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-950 px-4 py-16 text-white sm:px-6 md:py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-sm font-black tracking-[0.18em] text-violet-300">WHY PARTNER ACADEMY</p>
              <h2 className="mt-4 text-balance text-3xl font-black leading-tight sm:text-4xl break-keep">
                같은 교과서라도
                <br />시험과 이해 속도는 다릅니다.
              </h2>
            </div>
            <p className="text-pretty text-base font-medium leading-8 text-slate-300 sm:text-lg break-keep">
              지역 학교의 평가 특성을 아는 현장 경험과 학생 한 명의 수준을 끝까지 살피는 코칭이 함께해야 합니다. 잇다과외 제휴학원은 모두에게 같은 진도를 요구하지 않고, 필요한 공부를 필요한 순서로 연결합니다.
            </p>
          </div>
        </section>

        <section id="academy-system" className="scroll-mt-20 bg-white px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-black tracking-[0.18em] text-purple-700">SIX SCHOOL-FOCUSED STRENGTHS</p>
              <h2 className="mt-4 text-balance text-3xl font-black leading-tight sm:text-5xl break-keep">우리 학교 시험에 맞춰 준비하는<br />제휴학원의 6가지 강점</h2>
              <p className="mt-5 text-pretty font-medium leading-7 text-slate-600 break-keep">학교별 자료 분석부터 시험 직전 점검과 학부모 피드백까지, 내신 준비의 흐름을 이어갑니다.</p>
            </div>
            <div className="mt-14 grid gap-5 md:grid-cols-2">
              {strengths.map(({ number, icon: Icon, title, text }, index) => (
                <article key={title} className={`group relative overflow-hidden rounded-[2rem] border p-7 transition hover:-translate-y-1 hover:shadow-xl sm:p-9 ${index % 3 === 0 ? 'border-purple-200 bg-purple-50' : 'border-slate-200 bg-slate-50'}`}>
                  <span className="absolute -right-2 -top-6 text-8xl font-black text-slate-900/[0.05]">{number}</span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-purple-700 shadow-sm"><Icon className="h-6 w-6" /></span>
                  <h3 className="mt-7 text-2xl font-black">{title}</h3>
                  <p className="mt-3 max-w-xl text-pretty font-medium leading-8 text-slate-600 break-keep">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="overflow-hidden bg-[#eef6ff] px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div className="relative mx-auto w-full max-w-xl">
                <div className="absolute -inset-4 -rotate-2 rounded-[2.5rem] bg-blue-300/30" />
                <div className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem] border-8 border-white shadow-xl">
                  <Image src="/images/core-process-1.jpg" alt="학생의 학습 데이터를 분석하고 상담하는 모습" fill sizes="(min-width: 1024px) 42vw, 100vw" className="object-cover" />
                </div>
                <div className="absolute -bottom-7 right-2 rounded-2xl bg-white px-5 py-4 shadow-xl sm:right-8">
                  <p className="text-xs font-black tracking-widest text-blue-700">START WITH CHECK</p>
                  <p className="mt-1 font-black">정확히 알아야 바르게 설계합니다.</p>
                </div>
              </div>
              <div>
                <p className="text-sm font-black tracking-[0.18em] text-blue-700">DIAGNOSIS FIRST</p>
                <h2 className="mt-4 text-balance text-3xl font-black leading-tight sm:text-5xl break-keep">진도보다 먼저,<br />아이의 현재를 봅니다.</h2>
                <p className="mt-6 text-pretty font-medium leading-8 text-slate-700 break-keep">점수만으로는 원인을 알 수 없습니다. 개념 이해도, 문제 풀이 과정, 공부 습관과 태도를 함께 살펴 ‘왜 막혔는지’를 찾습니다.</p>
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {['교과 성취도 확인', '취약 개념 추적', '학습 습관 점검', '학교 일정 반영'].map((item) => (
                    <li key={item} className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 font-bold text-slate-700 shadow-sm"><CheckCircle2 className="h-5 w-5 shrink-0 text-blue-600" />{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-black tracking-[0.18em] text-purple-700">4C COACHING FLOW</p>
              <h2 className="mt-4 text-balance text-3xl font-black leading-tight sm:text-5xl break-keep">진단부터 실천까지<br />하나의 흐름으로 이어집니다.</h2>
            </div>
            <div className="relative mt-14 grid gap-5 lg:grid-cols-4">
              <div aria-hidden="true" className="absolute left-[12%] right-[12%] top-16 hidden border-t-2 border-dashed border-purple-200 lg:block" />
              {coachingSteps.map(({ code, label, icon: Icon, title, text }, index) => (
                <article key={code} className="relative rounded-[2rem] border border-slate-200 bg-white p-6 shadow-lg shadow-slate-950/5 sm:p-7">
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-purple-700 text-lg font-black text-white ring-8 ring-white">{code}</span>
                    {index < coachingSteps.length - 1 && <ArrowRight className="hidden h-5 w-5 text-purple-300 lg:block" />}
                  </div>
                  <p className="mt-7 text-xs font-black tracking-[0.16em] text-purple-600">{label}</p>
                  <h3 className="mt-2 flex items-center gap-2 text-xl font-black"><Icon className="h-5 w-5 text-purple-700" />{title}</h3>
                  <p className="mt-3 text-sm font-medium leading-6 text-slate-600">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#fff8ec] px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 lg:order-1">
              <p className="text-sm font-black tracking-[0.18em] text-amber-700">PLANNER & FEEDBACK</p>
              <h2 className="mt-4 text-balance text-3xl font-black leading-tight sm:text-5xl break-keep">계획표를 채우는 데서 끝나지 않습니다.</h2>
              <p className="mt-6 text-pretty font-medium leading-8 text-slate-700 break-keep">오늘 할 일을 구체적으로 정하고, 실천 결과를 돌아보며 다음 계획을 조정합니다. 작은 성공 경험이 쌓여 스스로 공부하는 힘이 됩니다.</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  [ClipboardCheck, '실천 가능한 분량 설정'],
                  [BrainCircuit, '나에게 맞는 공부법 탐색'],
                  [CalendarCheck2, '주간·월간 목표 점검'],
                  [MessageSquareText, '학부모 학습 피드백'],
                ].map(([Icon, label]) => {
                  const PlannerIcon = Icon as typeof ClipboardCheck;
                  return <div key={label as string} className="flex items-center gap-3 rounded-2xl border border-amber-200 bg-white px-4 py-4 font-bold text-slate-700"><PlannerIcon className="h-5 w-5 shrink-0 text-amber-600" />{label as string}</div>;
                })}
              </div>
            </div>
            <div className="order-1 relative mx-auto w-full max-w-xl lg:order-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem] shadow-2xl">
                <Image src="/images/core-process-3.jpg" alt="학부모와 학습 상담을 진행하는 모습" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-950/50 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/90 p-5 backdrop-blur">
                  <p className="text-sm font-bold text-amber-700">RECORD → REVIEW → GROW</p>
                  <p className="mt-1 text-xl font-black">기록이 보이면 변화도 보입니다.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-black tracking-[0.18em] text-purple-700">PERSONALIZED LEARNING</p>
              <h2 className="mt-4 text-balance text-3xl font-black leading-tight sm:text-5xl break-keep">한 교실에서도<br />아이마다 다른 공부를 합니다.</h2>
            </div>
            <div className="mt-14 grid overflow-hidden rounded-[2.5rem] border border-slate-200 lg:grid-cols-2">
              <div className="bg-slate-100 p-8 sm:p-12">
                <p className="text-sm font-black tracking-widest text-slate-500">ONE-SIZE-FITS-ALL</p>
                <h3 className="mt-4 text-2xl font-black text-slate-600">모두가 같은 진도</h3>
                <ul className="mt-7 space-y-4 text-slate-500">
                  {['학년과 반을 기준으로 같은 교재 사용', '이해 여부와 관계없이 다음 단원 진행', '시험 직전 일괄적인 문제 풀이'].map((item) => <li key={item} className="flex gap-3"><span className="font-black">—</span><span>{item}</span></li>)}
                </ul>
              </div>
              <div className="relative bg-gradient-to-br from-purple-700 to-indigo-700 p-8 text-white sm:p-12">
                <Sparkles className="absolute right-8 top-8 h-9 w-9 text-violet-300" />
                <p className="text-sm font-black tracking-widest text-violet-200">IT-DA PERSONALIZED</p>
                <h3 className="mt-4 text-2xl font-black">학생마다 다른 학습 경로</h3>
                <ul className="mt-7 space-y-4">
                  {['진단 결과에 맞춘 교재와 시작점', '이해할 때까지 확인하는 개별 피드백', '학교별 일정과 약점에 맞춘 시험 전략'].map((item) => <li key={item} className="flex gap-3 font-bold"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-violet-200" /><span>{item}</span></li>)}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f5f3ff] px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <GraduationCap className="mx-auto h-10 w-10 text-purple-700" />
              <p className="mt-5 text-sm font-black tracking-[0.18em] text-purple-700">FREQUENTLY ASKED QUESTIONS</p>
              <h2 className="mt-4 text-3xl font-black sm:text-5xl">궁금한 점을 먼저 확인하세요.</h2>
            </div>
            <div className="mt-12 space-y-3">
              {faqs.map(({ question, answer }, index) => (
                <details key={question} className="group rounded-2xl border border-purple-100 bg-white p-5 shadow-sm open:shadow-md sm:p-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-black text-slate-900 marker:hidden">
                    <span className="flex items-center gap-3"><span className="text-purple-600">Q{index + 1}</span>{question}</span>
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-purple-50 text-purple-700 transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 border-t border-slate-100 pt-4 font-medium leading-7 text-slate-600">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-purple-800 via-violet-700 to-indigo-700 px-4 py-16 text-white sm:px-6 md:py-20 lg:px-8">
          <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
            <div>
              <p className="text-sm font-black tracking-[0.18em] text-violet-200">START NEAR, GROW FAR</p>
              <h2 className="mt-3 text-balance text-3xl font-black leading-tight sm:text-4xl break-keep">가까운 곳에서 시작하는<br />우리 아이 맞춤 학습</h2>
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
