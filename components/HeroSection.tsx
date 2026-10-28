import Image from 'next/image';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

const strengths = ['학교별 기출 분석', '1:1 정밀 진단', '맞춤 커리큘럼', '밀착 피드백'];

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#F5F1EE] lg:min-h-[calc(100svh-4rem)]">
      <div className="absolute inset-0 hidden lg:bottom-6 lg:left-[8%] lg:right-[45%] lg:flex lg:justify-start">
        <div className="relative h-full w-full lg:aspect-[2/3] lg:w-auto lg:max-w-full lg:flex-none">
          <Image
            src="/images/hero-student.png"
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 55vh, 100vw"
            className="home-hero-photo object-contain object-right-bottom"
          />
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0 hidden lg:block lg:bg-[linear-gradient(270deg,#F5F1EE_0%,#F5F1EE_35%,rgba(245,241,238,0.88)_48%,rgba(245,241,238,0.1)_70%,rgba(245,241,238,0)_100%)]"
      />

      <div className="home-hero-inner relative mx-auto flex max-w-7xl items-start px-4 pb-0 pt-10 sm:px-6 sm:pt-14 lg:min-h-[calc(100svh-4rem)] lg:items-center lg:justify-end lg:px-8 lg:py-20">
        <div className="max-w-2xl lg:w-[54%]">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-200/80 bg-white/80 px-4 py-2 text-xs font-black tracking-[0.14em] text-purple-700 shadow-sm backdrop-blur">
            <Sparkles className="h-4 w-4" />
            IT-DA PERSONAL TUTORING
          </div>

          <h1 className="home-hero-title mt-6 max-w-2xl text-[clamp(1.45rem,7vw,2.25rem)] font-black leading-[1.14] tracking-tight text-slate-950 break-keep sm:text-[clamp(2.25rem,5vw,3rem)] lg:text-[clamp(2rem,3.2vw,2.75rem)]">
            학교별 출제 경향 분석부터<br />
            성적 향상까지,<br className="lg:hidden" />{' '}
            우리 아이를 위한<br className="hidden lg:inline" />{' '}
            완벽한<br className="lg:hidden" />{' '}
            <span className="text-purple-700">1:1 맞춤 과외</span>
          </h1>

          <p className="home-hero-copy mt-6 max-w-xl text-pretty text-base font-medium leading-7 text-slate-700 break-keep sm:text-lg sm:leading-8">
            <span className="block font-bold text-slate-800">남들과 똑같은 공부는 그만!</span>
            <span className="block">
              다닌 학교의 출제 경향과 아이의 실력을<br className="hidden lg:inline" />{' '}
              입체적으로 분석해 꼭 필요한 공부만 짚어줍니다.
            </span>
          </p>

          <div className="home-hero-actions mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#lead-form"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#58626C] px-7 py-4 text-sm font-extrabold text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-[#414B55] focus:outline-none focus-visible:ring-4 focus-visible:ring-purple-300"
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

      <div className="relative mx-auto mt-8 w-full max-w-lg sm:mt-10 sm:mb-12 lg:hidden">
        <Image
          src="/images/hero-student.png"
          alt="공부하는 학생의 모습"
          width={1024}
          height={1536}
          priority
          sizes="(min-width: 640px) 512px, 100vw"
          className="h-auto w-full"
        />
      </div>
    </section>
  );
}
