'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, BarChart3, CheckCircle2, ShieldCheck, Sparkles, UserRoundCheck } from 'lucide-react';

const heroCards = [
  {
    badge: 'TARGET',
    icon: UserRoundCheck,
    iconStyle: 'bg-orange-100 text-orange-600',
    title: 'AI 성향 정밀 매칭',
    description: '학생의 성향, 취약점, 학습 패턴을 정밀 분석해 가장 시너지가 날 수 있는 전문 선생님을 배정합니다.',
  },
  {
    badge: 'METHOD',
    icon: ShieldCheck,
    iconStyle: 'bg-purple-100 text-purple-700',
    title: '검증된 전문 선생님',
    description: '철저한 역량 검증과 인성 인터뷰를 통과한 선생님이 자기주도학습 습관을 확실하게 잡아줍니다.',
  },
  {
    badge: 'REPORT',
    icon: BarChart3,
    iconStyle: 'bg-blue-100 text-blue-700',
    title: '투명한 밀착 학습 리포트',
    description: '매 수업마다 기록되는 구체적인 피드백과 데이터를 통해 아이의 성장 과정을 실시간으로 공유합니다.',
  },
];

export default function HeroSection() {
  const scrollToForm = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-[#f4f1ff] px-4 pb-20 pt-14 sm:px-6 md:pb-24 md:pt-20 lg:px-8 lg:pt-24">
      <div aria-hidden="true" className="absolute -left-32 top-24 h-80 w-80 rounded-full bg-purple-300/35 blur-3xl" />
      <div aria-hidden="true" className="absolute -right-24 -top-20 h-96 w-96 rounded-full bg-sky-200/55 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[0.98fr_1.02fr] lg:gap-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white/80 px-4 py-2 text-xs font-black tracking-[0.14em] text-purple-700 shadow-sm backdrop-blur">
              <Sparkles className="h-4 w-4" />
              IT-DA PERSONAL TUTORING
            </div>

            <h1 className="mt-6 text-balance text-4xl font-black leading-[1.14] tracking-tight text-slate-950 break-keep sm:text-5xl lg:text-6xl">
              내 아이에게 딱 맞는
              <br />
              <span className="text-purple-700">전문 선생님과 매칭 후</span>
              <br />
              실패 없는 맞춤형 학습의 시작
            </h1>

            <div className="mt-6 max-w-2xl space-y-2 text-pretty text-base font-medium leading-8 text-slate-700 break-keep sm:text-lg">
              <p>학교별 출제 경향 분석부터 성적 향상까지, 우리 아이를 위한 완벽한 1:1 맞춤 과외</p>
              <p>아이의 학교와 실력을 입체적으로 분석해 지금 꼭 필요한 공부만 정확하게 짚어드립니다.</p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#lead-form"
                onClick={scrollToForm}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-7 py-4 text-sm font-extrabold text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-purple-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-purple-300"
              >
                무료 시범수업 신청
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#online-tutoring"
                className="inline-flex items-center justify-center rounded-full border border-slate-900/15 bg-white/80 px-7 py-4 text-sm font-extrabold text-slate-800 transition hover:bg-white focus:outline-none focus-visible:ring-4 focus-visible:ring-purple-200"
              >
                4단계 학습 시스템 보기
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              {['학교별 기출 분석', '1:1 정밀 진단', '맞춤 커리큘럼', '밀착 피드백'].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-1.5 rounded-full border border-purple-200 bg-white/75 px-4 py-2 text-xs font-bold text-slate-700 shadow-sm"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-purple-600" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl sm:px-6">
            <div className="absolute -inset-4 rotate-2 rounded-[2.75rem] bg-gradient-to-br from-purple-500/25 to-blue-400/20" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border-8 border-white/80 bg-white shadow-2xl">
              <Image
                src="/images/hero.png"
                alt="전문 선생님이 학생에게 맞춤형 1:1 학습을 지도하는 모습"
                fill
                priority
                sizes="(min-width: 1024px) 44vw, 92vw"
                className="object-cover object-[center_68%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent" />
              <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/20 bg-slate-950/80 p-4 text-white backdrop-blur-md sm:inset-x-7 sm:bottom-7 sm:p-5">
                <p className="text-xs font-black tracking-[0.16em] text-violet-300">PERSONAL COACHING</p>
                <p className="mt-1 text-lg font-black sm:text-xl">우리 아이에게 꼭 맞는 1:1 수업</p>
              </div>
            </div>
            <div className="absolute -left-1 top-12 rounded-2xl bg-white px-4 py-3 shadow-xl sm:-left-6">
              <p className="text-xs font-bold text-slate-500">맞춤 학습의 시작</p>
              <p className="mt-1 font-black text-purple-700">진단부터 꼼꼼하게</p>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {heroCards.map(({ badge, icon: Icon, iconStyle, title, description }) => (
            <article
              key={badge}
              className="rounded-[1.75rem] border border-white/90 bg-white/85 p-6 shadow-lg shadow-purple-950/5 backdrop-blur transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${iconStyle}`}>
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-xs font-black tracking-[0.16em] text-purple-400">{badge}</span>
              </div>
              <h2 className="mt-5 text-xl font-black text-slate-950">{title}</h2>
              <p className="mt-2 text-base font-medium leading-7 text-slate-600 break-keep">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
