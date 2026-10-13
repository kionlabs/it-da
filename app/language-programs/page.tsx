'use client';

import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import LeadForm from '@/components/LeadForm';
import Footer from '@/components/Footer';
import { 
  Globe, 
  MessageCircle, 
  Target, 
  Award, 
  ChevronRight, 
  CheckCircle2, 
  Sparkles,
  BookOpen,
  Headphones,
  GraduationCap
} from 'lucide-react';

export default function LanguageProgramsPage() {
  const scrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const formElement = document.getElementById('lead-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const featureCards = [
    {
      badge: '실전 회화 & 스피킹',
      icon: MessageCircle,
      title: '1:1 맞춤 회화 코칭',
      description: '원어민 및 전문 코치와의 실시간 대화 중심 수업으로 말문이 트이고 자연스러운 외국어 습득 환경을 제공합니다.',
      benefits: ['원어민 1:1 맞춤 발음 교정', '실시간 피드백 및 프리토킹', '상황별 롤플레잉 회화']
    },
    {
      badge: '정밀 레벨 진단',
      icon: Target,
      title: '체계적인 레벨 테스팅',
      description: '현재 실력을 정확히 진단하고 학생의 어학 수준과 학습 목적에 꼭 맞춘 맞춤형 커리큘럼 및 교재를 매칭합니다.',
      benefits: ['어휘·문법·듣기·말하기 4대 영역 진단', '학습 목적별 맞춤 교재 추천', '주기적인 성장 리포트 발행']
    },
    {
      badge: '내신 · 시험 · 실전 통합',
      icon: Award,
      title: '상황별 실용 어학',
      description: '학교 내신 및 수능 어학은 물론 토익·토플·오픽 등 공인 어학시험과 실전 비즈니스 회화까지 한 번에 대비합니다.',
      benefits: ['학교별 교과서 내신 완벽 대비', '공인 시험 고득점 단기 완성', '유학·비즈니스 실전 인터뷰 대비']
    },
  ];

  const languageBadges = [
    { name: '영어 (English)', desc: '초중고 내신 · 수능 · 회화 · 공인시험' },
    { name: '일본어 (Japanese)', desc: 'JLPT · JPT · 일상 회화 · 유학' },
    { name: '중국어 (Chinese)', desc: 'HSK · TSC · 비즈니스 회화' },
    { name: '제2외국어 맞춤', desc: '프랑스어 · 독일어 · 스페인어' },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col selection:bg-purple-600 selection:text-white">
      {/* 1. Header Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <section className="relative overflow-hidden pt-12 pb-16 md:py-20 px-4 sm:px-6 lg:px-8">
          {/* Subtle Background Glows */}
          <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-purple-200/40 via-indigo-100/30 to-blue-100/20 blur-3xl" />

          <div className="mx-auto max-w-6xl">
            <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column (7 cols): Hero Copy & CTA */}
              <div className="md:col-span-7 space-y-6 text-left">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 rounded-full bg-purple-50 border border-purple-200 px-4 py-1.5 text-xs font-bold text-purple-700 uppercase tracking-wider shadow-sm">
                  <Globe className="h-3.5 w-3.5 text-purple-600" />
                  <span>GLOBAL LANGUAGE PROGRAM</span>
                </div>

                {/* Main Title */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.25] break-keep">
                  글로벌 소통의 시작,<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
                    차별화된 맞춤 언어 프로그램
                  </span>
                </h1>

                {/* Subtext */}
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed break-keep font-medium">
                  단순히 단어를 외우는 어학이 아닙니다. 실용 회화부터 공인 시험, 비즈니스 언어까지 아이의 목표에 맞춘 1:1 맞춤 언어 코칭을 경험하세요.
                </p>

                {/* Highlights List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-700 bg-white/80 border border-slate-200/80 rounded-xl px-3.5 py-2.5 shadow-sm">
                    <CheckCircle2 className="h-4 w-4 text-purple-600 shrink-0" />
                    <span>원어민 & 전문 코치 1:1 밀착 지도</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-700 bg-white/80 border border-slate-200/80 rounded-xl px-3.5 py-2.5 shadow-sm">
                    <CheckCircle2 className="h-4 w-4 text-purple-600 shrink-0" />
                    <span>목적별 맞춤 커리큘럼 설계</span>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-3">
                  <a
                    href="#lead-form"
                    onClick={scrollToForm}
                    className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 px-7 py-4 text-base font-bold text-white shadow-xl shadow-purple-500/25 hover:shadow-2xl hover:shadow-purple-500/30 hover:opacity-95 transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                  >
                    <span>언어 프로그램 무료 상담 신청</span>
                    <ChevronRight className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* Right Column (5 cols): Hero Image */}
              <div className="md:col-span-5 relative">
                <div className="relative mx-auto max-w-md md:max-w-none">
                  {/* Decorative Background Card */}
                  <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-purple-500/20 to-indigo-500/20 blur-lg -z-10" />
                  
                  <Image
                    src="/images/language-hero.jpg"
                    alt="잇다과외 1:1 맞춤 언어 프로그램"
                    width={600}
                    height={450}
                    className="w-full h-auto rounded-3xl shadow-2xl shadow-purple-950/15 object-cover border border-purple-100"
                    priority
                  />

                  {/* Floating Highlight Badge */}
                  <div className="absolute -bottom-4 -left-4 sm:left-4 rounded-2xl bg-white/95 backdrop-blur-md p-3.5 shadow-xl border border-purple-100 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                      <Sparkles className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">맞춤 언어 레벨 진단</p>
                      <p className="text-[11px] text-purple-700 font-semibold">무료 1:1 상담 시 제공</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Language Courses Banner */}
        <section className="py-8 bg-white border-y border-slate-200/80 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {languageBadges.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-slate-50 border border-slate-200/70 p-4 text-center hover:bg-purple-50/50 hover:border-purple-200 transition-colors"
                >
                  <p className="font-bold text-sm sm:text-base text-slate-900 mb-1">{item.name}</p>
                  <p className="text-xs text-slate-500 font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Core Features Section (3-Grid Cards) */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC]">
          <div className="mx-auto max-w-6xl">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-purple-50 border border-purple-200 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-purple-700 mb-4 shadow-sm">
                <span>WHY YES LANGUAGE</span>
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl break-keep">
                잇다과외 언어 프로그램만의 3가지 강점
              </h2>
              <p className="mt-3 text-slate-600 text-sm sm:text-base break-keep font-medium">
                막힘없는 실전 회화부터 철저한 내신 및 공인 어학시험 대비까지 완벽한 솔루션을 제공합니다.
              </p>
            </div>

            {/* 3-Grid 3D Cards */}
            <div className="grid md:grid-cols-3 gap-8">
              {featureCards.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <div
                    key={idx}
                    className="group relative rounded-3xl bg-white p-8 border border-slate-200/80 shadow-xl shadow-indigo-950/5 hover:shadow-2xl hover:shadow-purple-500/15 transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between"
                  >
                    <div>
                      {/* Top Badge & Icon */}
                      <div className="flex items-center justify-between mb-6">
                        <span className="inline-flex items-center rounded-full bg-purple-50 border border-purple-200 px-3 py-1 text-xs font-bold text-purple-700">
                          {card.badge}
                        </span>
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-tr from-purple-50 to-indigo-50 border border-purple-100 text-purple-600 group-hover:scale-110 transition-transform">
                          <Icon className="h-5 w-5" />
                        </div>
                      </div>

                      {/* Title & Description */}
                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed break-keep mb-6 font-medium">
                        {card.description}
                      </p>
                    </div>

                    {/* Benefit Checklist */}
                    <div className="pt-5 border-t border-slate-100 space-y-2.5">
                      {card.benefits.map((benefit, bIdx) => (
                        <div key={bIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                          <div className="h-1.5 w-1.5 rounded-full bg-purple-600 shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 5. Consultation Form */}
        <LeadForm />
      </main>

      {/* 6. Footer */}
      <Footer />
    </div>
  );
}
