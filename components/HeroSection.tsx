import Image from 'next/image';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

const strengths = ['학교별 기출 분석', '1:1 정밀 진단', '맞춤 커리큘럼', '밀착 피드백'];

export default function HeroSection() {
  return (
    <section className="relative isolate min-h-[780px] overflow-hidden bg-[#f8f1e9] sm:min-h-[820px] lg:min-h-[calc(100svh-4rem)]">
      <div className="absolute inset-0 lg:bottom-6 lg:left-[8%] lg:right-[45%] lg:flex lg:justify-start">
        <div className="relative h-full w-full lg:aspect-[2/3] lg:w-auto lg:max-w-full lg:flex-none">
          <Image
            src="/images/hero-student.png"
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 55vh, 100vw"
            className="home-hero-photo object-cover object-[52%_68%] lg:object-contain lg:object-right-bottom"
          />
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,241,233,0.98)_0%,rgba(248,241,233,0.92)_38%,rgba(248,241,233,0.2)_64%,rgba(248,241,233,0)_100%)] lg:bg-[linear-gradient(270deg,#f8f1e9_0%,#f8f1e9_35%,rgba(248,241,233,0.88)_48%,rgba(248,241,233,0.1)_70%,rgba(248,241,233,0)_100%)]"
      />

      <div className="home-hero-inner relative mx-auto flex min-h-[780px] max-w-7xl items-start px-4 pb-80 pt-12 sm:min-h-[820px] sm:px-6 sm:pb-[28rem] sm:pt-16 lg:min-h-[calc(100svh-4rem)] lg:items-center lg:justify-end lg:px-8 lg:py-20">
        <div className="max-w-2xl lg:w-[54%]">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-200/80 bg-white/80 px-4 py-2 text-xs font-black tracking-[0.14em] text-purple-700 shadow-sm backdrop-blur">
            <Sparkles className="h-4 w-4" />
            IT-DA PERSONAL TUTORING
          </div>

          <h1 className="home-hero-title mt-6 text-[2.1rem] font-black leading-[1.14] tracking-tight text-slate-950 break-keep sm:text-5xl lg:text-[3.25rem] xl:text-6xl">
            <span className="block">내 아이에게 딱 맞는</span>
            <span className="block text-purple-700">전문 선생님과 매칭 후</span>
            <span className="block">실패 없는 맞춤형</span>
            <span className="block">학습의 시작</span>
          </h1>

          <div className="home-hero-copy mt-6 max-w-xl space-y-2 text-pretty text-base font-medium leading-7 text-slate-700 break-keep sm:text-lg sm:leading-8">
            <p>학교별 출제 경향 분석부터 성적 향상까지, 우리 아이를 위한 완벽한 1:1 맞춤 과외</p>
            <p>아이의 학교와 실력을 입체적으로 분석해 지금 꼭 필요한 공부만 정확하게 짚어드립니다.</p>
          </div>

          <div className="home-hero-actions mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#lead-form"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-7 py-4 text-sm font-extrabold text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-purple-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-purple-300"
            >
              무료 시범수업 신청
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#online-tutoring"
              className="inline-flex items-center justify-center rounded-full border border-slate-900/15 bg-white/80 px-7 py-4 text-sm font-extrabold text-slate-800 shadow-sm backdrop-blur transition hover:bg-white focus:outline-none focus-visible:ring-4 focus-visible:ring-purple-200"
            >
              4단계 학습 시스템 보기
            </a>
          </div>

          <div className="home-hero-strengths mt-8 hidden flex-wrap gap-2 sm:flex">
            {strengths.map((strength) => (
              <span
                key={strength}
                className="inline-flex items-center gap-1.5 rounded-full border border-purple-200/80 bg-white/75 px-3.5 py-2 text-xs font-bold text-slate-700 shadow-sm backdrop-blur"
              >
                <CheckCircle2 className="h-3.5 w-3.5 text-purple-600" />
                {strength}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
