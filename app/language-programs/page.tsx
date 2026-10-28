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
        <section className="relative isolate overflow-hidden bg-[#F1F0F6] px-4 pt-14 sm:px-6 sm:pt-20 lg:min-h-[640px] lg:px-8 lg:py-12">
          <div className="absolute inset-0 hidden lg:block">
            <Image src="/images/language-hero.jpg" alt="" fill priority sizes="100vw" className="object-cover object-center" />
            <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(90deg,#F1F0F6_0%,#F1F0F6_29%,rgba(241,240,246,0.96)_43%,rgba(241,240,246,0.5)_61%,transparent_79%)]" />
            <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(0deg,#F1F0F6_0%,transparent_17%,transparent_88%,#F1F0F6_100%)]" />
          </div>
          <div className="relative mx-auto flex max-w-7xl lg:min-h-[544px] lg:items-center">
            <div className="max-w-2xl lg:w-[55%]">
              <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white/80 px-4 py-2 text-xs font-black tracking-[0.14em] text-purple-700 shadow-sm backdrop-blur">
                <Globe className="h-4 w-4" /> GLOBAL LANGUAGE PROGRAM
              </div>
              <h1 className="mt-6 text-balance text-3xl font-black leading-[1.16] tracking-tight text-slate-950 break-keep sm:text-5xl lg:text-[clamp(2.5rem,3.3vw,3.4rem)]">
                글로벌 소통의 시작,<br />
                <span className="text-purple-700">차별화된 맞춤 언어 프로그램</span>
              </h1>
              <p className="mt-6 max-w-xl text-pretty text-base font-medium leading-8 text-slate-700 break-keep sm:text-lg">
                단순히 단어를 외우는 어학이 아닙니다. 실용 회화부터 공인 시험, 비즈니스 언어까지 아이의 목표에 맞춘 1:1 맞춤 언어 코칭을 경험하세요.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {['원어민·전문 코치 1:1 밀착 지도', '목적별 맞춤 커리큘럼 설계'].map((item) => (
                  <span key={item} className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white/80 px-4 py-2 text-xs font-bold text-slate-700 shadow-sm sm:text-sm">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-purple-600" />{item}
                  </span>
                ))}
              </div>
              <a href="#lead-form" onClick={scrollToForm} className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#765168] px-7 py-4 text-sm font-extrabold text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-[#604254] focus:outline-none focus-visible:ring-4 focus-visible:ring-purple-300">
                언어 프로그램 무료 상담 신청 <ChevronRight className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="relative mx-auto mt-8 aspect-[16/9] max-w-[700px] overflow-hidden lg:hidden [mask-image:linear-gradient(to_bottom,transparent_0%,#000_15%,#000_83%,transparent_100%)]">
            <Image src="/images/language-hero.jpg" alt="온라인으로 언어 학습을 하는 학생" fill priority sizes="(min-width: 700px) 700px, 100vw" className="object-cover object-center" />
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
