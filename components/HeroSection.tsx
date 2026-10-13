'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Sparkles } from 'lucide-react';

const heroCards = [
  {
    badge: 'TARGET',
    badgeStyle: 'bg-orange-100 text-orange-600 border-orange-200',
    title: 'AI 성향 정밀 매칭',
    description: '학생의 성향, 취약점, 학습 패턴을 정밀 분석해 가장 시너지가 날 수 있는 명문대 코치를 배정합니다.',
  },
  {
    badge: 'METHOD',
    badgeStyle: 'bg-purple-100 text-purple-700 border-purple-200',
    title: '검증된 전문 선생님',
    description: '철저한 역량 검증과 인성 인터뷰를 통과한 멘토들이 자기주도학습 습관을 확실하게 잡아줍니다.',
  },
  {
    badge: 'SCHEDULE',
    badgeStyle: 'bg-teal-100 text-teal-700 border-teal-200',
    title: '투명한 밀착 학습 리포트',
    description: '매 수업마다 기록되는 구체적인 피드백과 데이터를 통해 아이의 성장 과정을 실시간으로 공유합니다.',
  },
];

export default function HeroSection() {
  const scrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const formElement = document.getElementById('lead-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-[#3b3864] text-white pt-14 pb-24 md:pt-20 md:pb-36 overflow-hidden">
      {/* Background Subtle Gradient & Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-0 -translate-x-1/2 blur-3xl opacity-30"
      >
        <div className="h-[500px] w-[1000px] bg-gradient-to-r from-purple-500 via-indigo-400 to-amber-300 rounded-full" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        {/* Top Tagline Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-white/10 px-4 py-1.5 text-xs font-bold tracking-wider uppercase text-amber-300 backdrop-blur-md shadow-sm mb-6">
          <Sparkles className="h-4 w-4 text-amber-400" />
          <span>잇다과외 | 학교별 1:1 맞춤 과외</span>
        </div>

        {/* Main Title */}
        <h1 className="mx-auto max-w-5xl text-balance text-3xl font-black leading-tight tracking-tight text-white break-keep sm:text-4xl md:text-[2.75rem] xl:text-5xl">
          <span className="inline-block">내 아이에게 딱 맞는</span>{' '}
          <span className="inline-block text-amber-400">전문 선생님과 매칭 후</span>
          <br className="hidden sm:block" />
          <span className="inline-block">실패 없는 맞춤형 학습의 시작</span>
        </h1>

        {/* Subtext */}
        <div className="mt-5 max-w-4xl mx-auto space-y-1.5 text-pretty text-slate-200 text-sm sm:text-base md:text-lg leading-relaxed font-medium break-keep">
          <p>학교별 출제 경향 분석부터 성적 향상까지, 우리 아이를 위한 완벽한 1:1 맞춤 과외</p>
          <p>남들과 똑같은 공부는 그만! 다닌 학교의 출제 경향과 아이의 실력을 입체적으로 분석해 꼭 필요한 공부만 짚어줍니다.</p>
        </div>

        {/* CTA Button */}
        <div className="mt-8 flex justify-center">
          <a
            href="#lead-form"
            onClick={scrollToForm}
            className="group inline-flex items-center gap-2.5 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold px-8 py-3.5 text-base shadow-xl shadow-amber-500/20 transition-all focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-[#3b3864]"
          >
            <span>지금 무료 매칭 신청하기</span>
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Central UP Graphic Banner Image (hero-up-banner.jpg) */}
        <div className="mt-12 md:mt-16 relative mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-t-3xl shadow-2xl">
            <Image
              src="/images/hero-up-banner.jpg"
              alt="성적 향상을 돕는 잇다과외 맞춤 학습"
              width={1024}
              height={512}
              priority
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* 3D Floating Overlapping Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto -mb-32 md:-mb-44 relative z-20 mt-6 text-left">
          {heroCards.map((card, idx) => (
            <div
              key={idx}
              className="group rounded-3xl bg-white border border-slate-100 p-6 sm:p-8 shadow-2xl shadow-indigo-950/30 transform hover:-translate-y-2 hover:shadow-3xl transition-all duration-300"
            >
              {/* Capsule Badge */}
              <span
                className={`inline-block border px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-4 shadow-sm ${card.badgeStyle}`}
              >
                {card.badge}
              </span>

              {/* Card Title */}
              <h3 className="text-balance text-xl font-black text-slate-900 mb-2 group-hover:text-purple-700 transition-colors">
                {card.title}
              </h3>

              {/* Card Description */}
              <p className="text-pretty text-slate-600 text-lg leading-relaxed break-keep font-medium">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
