import type { Metadata } from 'next';
import Image from 'next/image';
import {
  ArrowRight,
  BarChart3,
  BookOpenCheck,
  BrainCircuit,
  CalendarCheck2,
  CheckCircle2,
  ClipboardCheck,
  GraduationCap,
  HeartHandshake,
  Laptop2,
  Lightbulb,
  MessagesSquare,
  Route,
  ShieldCheck,
  Sparkles,
  Target,
  UserCheck,
  UsersRound,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import LeadForm from '@/components/LeadForm';
import Footer from '@/components/Footer';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';

const siteUrl = 'https://itda-edu.vercel.app';

export const metadata: Metadata = {
  title: '온라인 1:1 맞춤 과외',
  description:
    '잇다과외 온라인 1:1 맞춤 과외는 정밀 진단, 전문 선생님 매칭, 학교별 맞춤 수업, 오답 분석과 학습 플래닝을 한 번에 제공합니다.',
  keywords: ['잇다과외 온라인 과외', '온라인 1:1 과외', '화상 과외', '초중고 온라인 과외', '학교별 내신 과외'],
  alternates: { canonical: '/online-tutoring' },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: `${siteUrl}/online-tutoring`,
    siteName: '잇다과외',
    title: '온라인 1:1 맞춤 과외 | 잇다과외',
    description: '장소의 제약 없이 전문 선생님과 연결되는 진단 기반 온라인 1:1 맞춤 과외 서비스입니다.',
    images: [`${siteUrl}/images/online.png`],
  },
};

const diagnostics = [
  { icon: BrainCircuit, title: '학습진단검사', description: '학습 성격 유형과 학습 동기·요인을 분석합니다.' },
  { icon: CalendarCheck2, title: '자기주도검사', description: '계획 수립과 실천 능력, 자기주도성을 확인합니다.' },
  { icon: Route, title: '진로적성검사', description: '직업 성격 유형과 진로 준비 수준을 진단합니다.' },
  { icon: BarChart3, title: '학습유형검사', description: '학습 성향과 의지, 실제 학습 행동을 분석합니다.' },
  { icon: GraduationCap, title: '입시예측검사', description: '목표 고교·대학과 수시·정시 전략을 점검합니다.' },
  { icon: HeartHandshake, title: '부모코칭검사', description: '자녀 양육 스타일과 상호작용 방식을 살펴봅니다.' },
];

const learningSteps = [
  {
    step: 'STEP 01',
    icon: UserCheck,
    title: '전문 선생님의 1:1 수업',
    description: '학생의 현재 수준과 학교 진도에 맞춰 전략적인 학습 플랜을 세우고 실시간 맞춤 수업을 진행합니다.',
  },
  {
    step: 'STEP 02',
    icon: BrainCircuit,
    title: 'AI 학습 분석과 오답 훈련',
    description: '학습 데이터를 바탕으로 취약 개념과 오답 유형을 진단하고 필요한 문제를 집중적으로 반복합니다.',
  },
  {
    step: 'STEP 03',
    icon: Target,
    title: '개별 약점 정밀 보완',
    description: '분석 결과를 선생님이 수업에 다시 반영해 이해가 부족한 개념과 풀이 습관을 끝까지 보완합니다.',
  },
];

const allInOneSteps = [
  ['01', '퍼스널 진단'],
  ['02', '맞춤 수업'],
  ['03', 'AI 오답 분석'],
  ['04', '학습 플래닝'],
  ['05', '습관·인성 코칭'],
  ['06', '진로·입시 설계'],
];

export default function OnlineTutoringPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-purple-600 selection:text-white">
      <Navbar />
      <BreadcrumbJsonLd name="온라인 1:1 맞춤 과외" path="/online-tutoring" />

      <main>
        <section className="relative overflow-hidden bg-[#dcecff] px-4 pb-20 pt-16 sm:px-6 md:pb-28 md:pt-24 lg:px-8">
          <div aria-hidden="true" className="absolute -left-32 -top-28 h-96 w-96 rounded-full bg-purple-400/35 blur-3xl" />
          <div aria-hidden="true" className="absolute -right-20 top-20 h-80 w-80 rounded-full bg-cyan-300/30 blur-3xl" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-300/70 bg-white/70 px-4 py-2 text-xs font-black tracking-[0.14em] text-blue-700 shadow-sm backdrop-blur">
                <Laptop2 className="h-4 w-4" /> ONLINE 1:1 TUTORING
              </div>
              <h1 className="mt-6 text-balance text-4xl font-black leading-[1.16] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl break-keep">
                장소의 한계를 넘어,
                <br />
                <span className="text-blue-700">전문 선생님과 만나는</span>
                <br />
                온라인 1:1 맞춤 과외
              </h1>
              <p className="mt-6 max-w-2xl text-pretty text-base font-medium leading-8 text-slate-700 sm:text-lg break-keep">
                학교별 출제 경향과 학생의 학습 성향을 함께 분석합니다. 실시간 화상 수업부터 오답 관리, 학습 플래닝까지 한 명의 선생님이 밀착 관리합니다.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#lead-form" className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-7 py-4 text-sm font-extrabold text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-blue-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-300">
                  무료 상담 신청하기 <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#online-system" className="inline-flex items-center justify-center rounded-full border border-slate-900/15 bg-white/80 px-7 py-4 text-sm font-extrabold text-slate-800 transition hover:bg-white">
                  수업 시스템 살펴보기
                </a>
              </div>
              <div className="mt-9 grid max-w-xl grid-cols-3 gap-3 text-center">
                {['실시간 화상 수업', '학교별 맞춤 진도', '수업 후 학습 리포트'].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/70 bg-white/60 px-3 py-3 text-xs font-bold leading-5 text-slate-700 backdrop-blur sm:text-sm">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-xl">
              <div className="absolute -inset-4 rotate-2 rounded-[2.5rem] bg-gradient-to-br from-purple-500/25 to-blue-500/20" />
              <div className="relative overflow-hidden rounded-[2.5rem] border-8 border-white/70 shadow-2xl">
                <Image src="/images/online.png" alt="노트북 화상 연결로 전문 선생님과 수업하는 잇다과외 온라인 1:1 맞춤 과외" width={682} height={503} priority sizes="(min-width: 1024px) 45vw, 100vw" className="block h-auto w-full" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />
                <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/25 bg-slate-950/75 p-4 text-white backdrop-blur-md sm:inset-x-7 sm:bottom-7 sm:p-5">
                  <p className="text-xs font-bold tracking-widest text-cyan-300">LIVE COACHING</p>
                  <p className="mt-1 text-lg font-black sm:text-xl">학생 한 명만을 위한 실시간 수업</p>
                </div>
              </div>
              <div className="absolute -left-5 top-14 rounded-2xl bg-white px-4 py-3 shadow-xl sm:-left-10">
                <p className="text-xs font-bold text-slate-500">수업 준비</p>
                <p className="mt-1 font-black text-blue-700">진단부터 정밀하게</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-950 px-4 py-16 text-white sm:px-6 md:py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div>
                <p className="text-sm font-black tracking-[0.18em] text-cyan-300">WHY ONLINE COACHING</p>
                <h2 className="mt-4 text-balance text-3xl font-black leading-tight sm:text-4xl break-keep">
                  바뀌는 교육 환경,
                  <br />수업도 더 정교해져야 합니다.
                </h2>
              </div>
              <p className="text-pretty text-base font-medium leading-8 text-slate-300 sm:text-lg break-keep">
                학생이 과목을 선택하고 스스로 진로를 설계하는 시대입니다. 학교와 학년마다 다른 진도, 평가 방식, 학습 속도 속에서 온라인 1:1 수업은 필요한 순간에 가장 적합한 선생님과 연결해 학습의 방향을 바로잡습니다.
              </p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7 sm:p-9">
                <Lightbulb className="h-9 w-9 text-amber-300" />
                <h3 className="mt-5 text-2xl font-black">교육 과정의 변화</h3>
                <p className="mt-3 leading-7 text-slate-300">정답을 외우는 공부보다 학습 설계력과 자기주도성이 더 중요해지고 있습니다.</p>
              </div>
              <div className="rounded-[2rem] border border-blue-300/20 bg-blue-500/10 p-7 sm:p-9">
                <UsersRound className="h-9 w-9 text-cyan-300" />
                <h3 className="mt-5 text-2xl font-black">교육 전문가의 역할</h3>
                <p className="mt-3 leading-7 text-slate-300">빠르게 바뀌는 흐름을 읽고 학생에게 맞는 과목과 학습 전략을 함께 설계해야 합니다.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-black tracking-[0.18em] text-purple-600">PROVEN EDUCATION INFRASTRUCTURE</p>
              <h2 className="mt-4 text-balance text-3xl font-black leading-tight sm:text-5xl break-keep">검증된 교육 인프라 위에서<br />더 가까워진 1:1 수업</h2>
              <p className="mt-5 text-slate-600">본사 교육 인프라와 운영 경험을 바탕으로 온라인에서도 일관된 수업 품질을 제공합니다.</p>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ['31년', '축적된 교육 노하우'],
                ['100만', '누적 회원의 선택'],
                ['96.7%', '수업 만족도'],
                ['1:1', '학생별 맞춤 수업'],
              ].map(([value, label]) => (
                <div key={label} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7 text-center shadow-sm">
                  <p className="text-4xl font-black text-purple-700">{value}</p>
                  <p className="mt-3 text-sm font-bold text-slate-600">{label}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-center text-xs text-slate-400">※ 교육 노하우·누적 회원·만족도는 본사 상상코칭 공개 자료 기준</p>
          </div>
        </section>

        <section className="overflow-hidden bg-[#f0ebff] px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-700 text-white shadow-lg"><ClipboardCheck className="h-7 w-7" /></span>
                <h2 className="mt-6 text-balance text-3xl font-black leading-tight sm:text-5xl break-keep">성적보다 먼저,<br />학습 상태를 정확하게</h2>
              </div>
              <p className="text-pretty text-lg font-semibold leading-8 text-slate-700 break-keep">공부를 안 하는 것인지, 방법을 모르는 것인지부터 구분해야 합니다. 표면적인 점수만 보지 않고 학생의 성향·행동·진로를 입체적으로 진단합니다.</p>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {diagnostics.map(({ icon: Icon, title, description }, index) => (
                <article key={title} className="group rounded-[1.75rem] border border-purple-200/70 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-100 text-purple-700"><Icon className="h-5 w-5" /></span>
                    <span className="text-sm font-black text-purple-300">0{index + 1}</span>
                  </div>
                  <h3 className="mt-5 text-xl font-black">{title}</h3>
                  <p className="mt-2 text-sm font-medium leading-6 text-slate-600">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-black tracking-[0.18em] text-blue-600">TEACHER STANDARD</p>
              <h2 className="mt-4 text-balance text-3xl font-black leading-tight sm:text-5xl break-keep">온라인 수업일수록<br />선생님의 역량이 중요합니다.</h2>
              <p className="mt-5 text-pretty text-slate-600 break-keep">화면 너머의 반응까지 세심하게 읽고, 학습과 정서적 유대를 함께 관리하는 선생님을 연결합니다.</p>
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {[
                { icon: ShieldCheck, no: '01', title: '전문 역량 검증', text: '학습코칭 역량과 수업 전문성을 확인한 선생님이 수업을 담당합니다.' },
                { icon: BookOpenCheck, no: '02', title: '수업 품질 관리', text: '학생의 학년, 학교 진도, 목표에 맞는 플랜과 수업 기록을 체계적으로 관리합니다.' },
                { icon: HeartHandshake, no: '03', title: '학생 성향 맞춤', text: '학습뿐 아니라 정서적 유대와 습관 코칭까지 고려해 가장 잘 맞는 선생님을 연결합니다.' },
              ].map(({ icon: Icon, no, title, text }) => (
                <article key={title} className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 p-8">
                  <span className="absolute right-5 top-2 text-7xl font-black text-slate-200/80">{no}</span>
                  <Icon className="relative h-10 w-10 text-blue-700" />
                  <h3 className="relative mt-8 text-2xl font-black">{title}</h3>
                  <p className="relative mt-4 font-medium leading-7 text-slate-600">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="online-system" className="scroll-mt-20 bg-[#edf7ff] px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-black tracking-[0.18em] text-blue-700">AI × HUMAN COACHING</p>
              <h2 className="mt-4 text-balance text-3xl font-black leading-tight sm:text-5xl break-keep">학습의 빈틈을 찾아<br />수업으로 다시 채웁니다.</h2>
              <p className="mt-5 text-pretty text-slate-600 break-keep">데이터 분석만으로 끝내지 않습니다. 선생님이 분석 결과를 읽고 다음 수업과 훈련에 연결합니다.</p>
            </div>
            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {learningSteps.map(({ step, icon: Icon, title, description }, index) => (
                <article key={step} className="relative rounded-[2rem] border border-blue-200 bg-white p-7 shadow-lg shadow-blue-950/5 sm:p-9">
                  {index < learningSteps.length - 1 && <ArrowRight aria-hidden="true" className="absolute -right-5 top-1/2 z-10 hidden h-8 w-8 -translate-y-1/2 rounded-full bg-blue-700 p-2 text-white lg:block" />}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black tracking-[0.16em] text-blue-600">{step}</span>
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700"><Icon className="h-6 w-6" /></span>
                  </div>
                  <h3 className="mt-8 text-2xl font-black">{title}</h3>
                  <p className="mt-4 font-medium leading-7 text-slate-600">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="mx-auto max-w-7xl space-y-8">
            <div className="grid overflow-hidden rounded-[2.5rem] border border-slate-200 bg-slate-950 text-white lg:grid-cols-2">
              <div className="relative min-h-80 lg:min-h-[500px]">
                <Image src="/images/core-process-3.jpg" alt="학생의 맞춤 학습 로드맵을 함께 설계하는 상담" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-14">
                <CalendarCheck2 className="h-10 w-10 text-cyan-300" />
                <h2 className="mt-6 text-balance text-3xl font-black leading-tight sm:text-4xl break-keep">계획을 세우는 공부에서<br />계획을 지키는 공부로</h2>
                <p className="mt-5 text-pretty font-medium leading-8 text-slate-300 break-keep">학습 성취도와 목표를 바탕으로 중장기 전략과 매일의 실천 계획을 설계합니다. 수업이 끝난 뒤에도 스스로 공부할 수 있는 힘을 기릅니다.</p>
                <ul className="mt-7 space-y-3">
                  {['주간·월간 목표 설정', '수업 후 실천 과제 관리', '학부모 학습 리포트 공유'].map((item) => (
                    <li key={item} className="flex items-center gap-3 font-bold"><CheckCircle2 className="h-5 w-5 text-cyan-300" />{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-[2rem] bg-amber-50 p-8 sm:p-10">
                <MessagesSquare className="h-9 w-9 text-amber-600" />
                <h3 className="mt-5 text-2xl font-black">마음과 습관까지 살피는 코칭</h3>
                <p className="mt-4 font-medium leading-7 text-slate-700">공부를 할 수 없는 마음 상태일 수 있습니다. 학습 태도와 감정, 관계, 습관을 함께 살피며 다시 시작할 힘을 만듭니다.</p>
              </div>
              <div className="rounded-[2rem] bg-purple-50 p-8 sm:p-10">
                <GraduationCap className="h-9 w-9 text-purple-700" />
                <h3 className="mt-5 text-2xl font-black">진로와 입시까지 이어지는 설계</h3>
                <p className="mt-4 font-medium leading-7 text-slate-700">진로 탐색, 비교과 관리, 내신·수능 전략, 전공 설정, 면접 대비까지 학생의 목표에 맞는 장기 로드맵을 세웁니다.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="overflow-hidden bg-gradient-to-br from-purple-700 via-indigo-700 to-blue-700 px-4 py-20 text-white sm:px-6 md:py-28 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <Sparkles className="mx-auto h-10 w-10 text-amber-300" />
              <p className="mt-5 text-sm font-black tracking-[0.2em] text-purple-200">ALL IN ONE</p>
              <h2 className="mt-4 text-balance text-3xl font-black leading-tight sm:text-5xl break-keep">진단부터 목표 달성까지<br />하나의 학습 흐름으로</h2>
            </div>
            <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
              {allInOneSteps.map(([step, label]) => (
                <div key={step} className="rounded-2xl border border-white/15 bg-white/10 p-5 text-center backdrop-blur-sm">
                  <p className="text-xs font-black tracking-widest text-cyan-200">STEP {step}</p>
                  <p className="mt-3 text-base font-black">{label}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <a href="#lead-form" className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-black text-indigo-800 shadow-xl transition hover:-translate-y-0.5">
                우리 아이 맞춤 수업 상담받기 <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        <LeadForm />
      </main>

      <Footer />
    </div>
  );
}
