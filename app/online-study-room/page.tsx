import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  BarChart3,
  BookOpenCheck,
  CalendarCheck2,
  Check,
  ChevronRight,
  ClipboardList,
  Clock3,
  MonitorCheck,
  Sparkles,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LeadForm from '@/components/LeadForm';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';

const siteUrl = 'https://itda-edu.vercel.app';

export const metadata: Metadata = {
  title: '온라인 독서실 | 잇다과외',
  description: '수업이 끝난 뒤 혼자 공부하는 시간까지 이어지는 잇다과외 온라인 독서실. 학습 계획, 참여 관리, 공부 시간 기록과 주간 리포트로 자기주도학습 루틴을 돕습니다.',
  alternates: { canonical: '/online-study-room' },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: `${siteUrl}/online-study-room`,
    siteName: '잇다과외',
    title: '온라인 독서실 | 잇다과외',
    description: '1:1 수업에서 배운 내용을 스스로 공부하는 시간으로 연결하는 온라인 학습 공간.',
    images: [`${siteUrl}/images/mainbanner.png`],
  },
};

const benefits = [
  { icon: CalendarCheck2, title: '계획을 실천으로', text: '오늘 공부할 범위와 목표를 정하고 자율학습 시간에 실행합니다.' },
  { icon: MonitorCheck, title: '혼자가 아닌 학습', text: '온라인 공간의 참여 흐름을 살피며 공부를 이어갈 수 있도록 돕습니다.' },
  { icon: BarChart3, title: '기록을 다음 수업으로', text: '학습 시간과 참여 패턴을 돌아보고 다음 공부의 우선순위를 조정합니다.' },
];

const steps = [
  { number: '01', icon: ClipboardList, title: '오늘의 학습 계획', text: '수업 내용과 학교 진도를 바탕으로 지금 필요한 공부를 정합니다.' },
  { number: '02', icon: Clock3, title: '온라인 독서실 참여', text: '자신의 일정에 맞춰 입실하고 정해 둔 학습을 실행합니다.' },
  { number: '03', icon: MonitorCheck, title: '학습 흐름 관리', text: '참여와 집중 흐름을 살피고 꾸준히 이어갈 수 있도록 안내합니다.' },
  { number: '04', icon: BookOpenCheck, title: '기록과 피드백', text: '학습 기록을 확인하고 다음 수업과 자율학습 계획에 반영합니다.' },
];

export default function OnlineStudyRoomPage() {
  return (
    <div className="min-h-screen bg-white text-slate-950 selection:bg-purple-200">
      <Navbar />
      <BreadcrumbJsonLd name="온라인 독서실" path="/online-study-room" />
      <main>
        <section className="relative isolate overflow-hidden bg-[#F9EEE8] px-4 py-14 sm:px-6 md:py-20 lg:min-h-[700px] lg:px-8 lg:py-12">
          <div aria-hidden="true" className="pointer-events-none absolute -left-20 -top-32 h-96 w-96 rounded-full bg-[#C4C3D5]/35 blur-3xl" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:min-h-[604px] lg:grid-cols-[0.97fr_1.03fr] lg:gap-8">
            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#C4C3D5] bg-white/80 px-4 py-2 text-xs font-black tracking-[0.14em] text-[#765168] shadow-sm">
                <Sparkles className="h-4 w-4" /> IT-DA ONLINE STUDY ROOM
              </span>
              <h1 className="mt-6 max-w-2xl text-balance text-4xl font-black leading-[1.16] tracking-tight break-keep sm:text-5xl lg:text-[3.35rem]">
                수업이 끝난 뒤에도,<br /><span className="text-[#765168]">공부의 흐름은 계속됩니다.</span>
              </h1>
              <p className="mt-6 max-w-xl text-pretty text-base font-medium leading-8 text-slate-700 break-keep sm:text-lg">
                1:1 수업에서 배운 내용을 혼자 공부하는 시간으로 연결합니다. 계획하고, 참여하고, 기록을 돌아보는 온라인 학습 공간을 만나보세요.
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {['수업과 이어지는 자율학습', '학습 시간·루틴 관리', '주간 학습 피드백'].map((label) => (
                  <span key={label} className="rounded-full border border-[#C4C3D5]/70 bg-white/75 px-4 py-2 text-xs font-bold text-[#765168] shadow-sm">{label}</span>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#lead-form" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#765168] px-7 py-4 text-sm font-extrabold text-white shadow-lg transition hover:bg-[#604254] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#765168]">
                  이용 상담 신청 <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#study-flow" className="inline-flex items-center justify-center rounded-full border border-[#C4C3D5] bg-white/80 px-7 py-4 text-sm font-extrabold text-slate-800 transition hover:bg-white">
                  학습 흐름 살펴보기
                </a>
              </div>
              <p className="mt-5 text-xs leading-5 text-slate-600">이용 대상·운영시간·비용은 상담에서 안내합니다.</p>
            </div>
            <div className="relative mx-auto w-full max-w-[640px]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border-[7px] border-white/85 shadow-[0_30px_70px_rgba(89,55,77,0.18)] sm:aspect-[5/4]">
                <Image src="/images/mainbanner.png" alt="집에서 온라인 학습 공간에 참여하며 공부하는 학생" fill priority sizes="(min-width: 1280px) 640px, (min-width: 1024px) 50vw, 92vw" className="object-cover object-[57%_center]" style={{ filter: 'saturate(0.68) contrast(0.96) brightness(1.04)' }} />
                <div aria-hidden="true" className="absolute inset-0 bg-[#F9EEE8]/10" />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#221a24]/45 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/30 bg-white/90 p-4 shadow-lg backdrop-blur sm:bottom-7 sm:left-7 sm:right-auto sm:max-w-xs sm:p-5">
                  <p className="text-[11px] font-black tracking-[0.16em] text-[#765168]">STUDY BEYOND THE LESSON</p>
                  <p className="mt-1 text-base font-black text-slate-950 sm:text-lg">배운 만큼, 스스로 공부하는 시간</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-xs font-black tracking-[0.18em] text-[#765168]">WHY STUDY ROOM</p>
              <h2 className="mt-4 text-balance text-3xl font-black leading-tight break-keep sm:text-4xl">수업과 다음 수업 사이,<br />공부가 이어져야 실력이 됩니다.</h2>
              <p className="mt-5 text-base leading-8 text-slate-600 break-keep">설명을 이해한 순간에서 멈추지 않고, 혼자 풀고 복습하는 시간을 만들어야 합니다. 잇다과외는 수업 밖의 학습 흐름까지 함께 살핍니다.</p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {benefits.map(({ icon: Icon, title, text }, index) => (
                <article key={title} className="rounded-[2rem] border border-[#E5D9E2] bg-[#FBF7F5] p-7 sm:p-8">
                  <div className="flex items-start justify-between"><span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EEE4EA] text-[#765168]"><Icon className="h-6 w-6" /></span><span className="text-sm font-black text-[#A77B96]">0{index + 1}</span></div>
                  <h3 className="mt-7 text-xl font-black">{title}</h3><p className="mt-3 leading-8 text-slate-600 break-keep">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="study-flow" className="scroll-mt-20 bg-[#F3F0F3] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl"><p className="text-xs font-black tracking-[0.18em] text-[#765168]">HOW IT WORKS</p><h2 className="mt-4 text-balance text-3xl font-black break-keep sm:text-4xl">계획에서 피드백까지, 한 흐름으로</h2><p className="mt-5 leading-8 text-slate-600 break-keep">담당 선생님의 수업과 온라인 학습 공간을 연결해 혼자 공부하는 시간을 구체적으로 관리합니다.</p></div>
            <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {steps.map(({ number, icon: Icon, title, text }) => (
                <article key={number} className="relative rounded-3xl border border-[#DED5DE] bg-white p-7 shadow-sm">
                  <div className="flex items-center justify-between"><Icon className="h-7 w-7 text-[#765168]" /><span className="text-sm font-black tracking-widest text-[#A77B96]">STEP {number}</span></div>
                  <h3 className="mt-10 text-xl font-black">{title}</h3><p className="mt-3 leading-7 text-slate-600 break-keep">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative overflow-hidden rounded-[2rem] border border-[#DDD3DC] bg-[#2C292E] p-3 shadow-[0_24px_60px_rgba(45,35,45,0.16)] sm:p-5">
              <Image src="/images/management_preview.png" alt="온라인 독서실 참여 현황과 학습 기록을 보여주는 관리 화면 구성 예시" width={1200} height={896} sizes="(min-width: 1024px) 50vw, 92vw" className="h-auto w-full rounded-2xl" style={{ filter: 'grayscale(0.78) saturate(0.4) contrast(0.92)' }} />
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[#765168]/20 mix-blend-color" />
            </div>
            <div>
              <p className="text-xs font-black tracking-[0.18em] text-[#765168]">LEARNING MANAGEMENT</p>
              <h2 className="mt-4 text-balance text-3xl font-black leading-tight break-keep sm:text-4xl">혼자 공부해도,<br />학습 흐름은 함께 봅니다.</h2>
              <p className="mt-6 leading-8 text-slate-600 break-keep">참여 여부와 학습 시간만 세는 데서 끝내지 않습니다. 계획한 공부를 실행했는지, 어떤 순간에 집중이 흔들렸는지 확인해 다음 학습 방향을 정합니다.</p>
              <ul className="mt-8 space-y-4">{['입실과 참여 흐름 확인', '학습 시간과 실행 기록 점검', '담당 선생님 수업과 학습 방향 연결'].map((item) => <li key={item} className="flex items-start gap-3 font-semibold text-slate-800"><span className="mt-0.5 rounded-full bg-[#EEE4EA] p-1 text-[#765168]"><Check className="h-4 w-4" /></span>{item}</li>)}</ul>
              <p className="mt-7 text-xs leading-6 text-slate-500">이미지는 학습 관리 방식의 이해를 돕기 위한 예시입니다. 실제 제공 화면과 다를 수 있습니다.</p>
            </div>
          </div>
        </section>

        <section className="bg-[#F9EEE8] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="text-xs font-black tracking-[0.18em] text-[#765168]">WEEKLY REVIEW</p>
              <h2 className="mt-4 text-balance text-3xl font-black leading-tight break-keep sm:text-4xl">작은 실천을 기록하면<br />다음 계획이 선명해집니다.</h2>
              <p className="mt-6 leading-8 text-slate-700 break-keep">요일별 학습시간과 참여 패턴을 돌아보고 잘된 점과 보완할 점을 함께 확인합니다. 주간 피드백은 다음 수업과 자율학습 목표를 조정하는 출발점이 됩니다.</p>
              <div className="mt-8 flex flex-wrap gap-2">{['학습 시간 기록', '참여 패턴 확인', '다음 주 목표 조정'].map((item) => <span key={item} className="rounded-full border border-[#D9C9D4] bg-white/80 px-4 py-2 text-sm font-bold text-[#765168]">{item}</span>)}</div>
              <Link href="/online-tutoring" className="mt-9 inline-flex items-center gap-2 text-sm font-black text-[#765168] hover:underline">1:1 온라인 과외도 살펴보기 <ChevronRight className="h-4 w-4" /></Link>
            </div>
            <div className="relative mx-auto flex aspect-[1.25] w-full max-w-[590px] items-center justify-center overflow-hidden rounded-[2rem] border border-white/80 bg-[#E9E3EA] p-5 shadow-[0_24px_60px_rgba(60,43,58,0.12)] sm:p-10">
              <div aria-hidden="true" className="absolute -right-14 -top-20 h-60 w-60 rounded-full bg-[#C4C3D5]/70 blur-3xl" />
              <Image src="/images/routine_preview.png" alt="한 주의 공부 시간 변화와 코치 피드백을 보여주는 학습 리포트 구성 예시" width={517} height={513} sizes="(min-width: 1024px) 40vw, 85vw" className="relative h-auto max-h-full w-auto max-w-full object-contain" style={{ filter: 'saturate(0.55) contrast(0.96)' }} />
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="relative overflow-hidden rounded-[2rem] bg-[#29232B] px-6 py-16 text-white sm:px-12 lg:px-16">
              <Image src="/images/cta_bg.png" alt="" fill sizes="(min-width: 1280px) 1280px, 100vw" className="object-cover object-center" style={{ filter: 'grayscale(0.35) saturate(0.55)' }} />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-[#29232B]/95 via-[#4C3948]/88 to-[#29232B]/50" />
              <div className="relative max-w-2xl"><p className="text-xs font-black tracking-[0.18em] text-[#F5D598]">START WITH IT-DA</p><h2 className="mt-4 text-balance text-3xl font-black leading-tight break-keep sm:text-4xl">수업에서 배운 공부,<br />혼자서도 이어갈 수 있도록.</h2><p className="mt-5 leading-8 text-white/85 break-keep">학생의 학년과 학습 상황에 맞는 온라인 독서실 이용 방법을 상담에서 안내해 드립니다.</p><a href="#lead-form" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-black text-[#604254] transition hover:bg-[#F9EEE8]">온라인 독서실 상담 신청 <ArrowRight className="h-4 w-4" /></a></div>
            </div>
          </div>
        </section>

        <section className="border-t border-slate-100 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl"><h2 className="text-2xl font-black">이용 전 자주 묻는 질문</h2><div className="mt-7 grid gap-4 md:grid-cols-2">
            <details className="group rounded-2xl border border-[#E5D9E2] bg-white p-6"><summary className="cursor-pointer font-bold text-slate-900">온라인 과외 수업과 어떻게 연결되나요?</summary><p className="mt-4 leading-7 text-slate-600">수업에서 정한 복습·문제풀이 목표를 자율학습 시간에 실행하고, 학습 기록을 다음 수업 계획에 참고합니다.</p></details>
            <details className="group rounded-2xl border border-[#E5D9E2] bg-white p-6"><summary className="cursor-pointer font-bold text-slate-900">운영시간과 이용료는 어떻게 확인하나요?</summary><p className="mt-4 leading-7 text-slate-600">학생의 학년과 신청 시점에 따라 이용 가능 조건을 확인한 뒤 상담에서 안내합니다.</p></details>
          </div></div>
        </section>
        <LeadForm />
      </main>
      <Footer />
    </div>
  );
}
