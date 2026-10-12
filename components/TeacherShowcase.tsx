'use client';

import React from 'react';
import Image from 'next/image';
import { BookOpen, GraduationCap, School, Sparkles } from 'lucide-react';

const gradeStrategies = [
  {
    icon: BookOpen,
    title: '초등부 (기초 체력 다지기)',
    points: [
      '공부 습관 형성 및 학습 흥미 유지',
      '중·고등 학습으로 이어지는 탄탄한 국·영·수 기본 개념 체득',
    ],
  },
  {
    icon: School,
    title: '중등부 (내신 대비 및 고등 연계)',
    points: [
      '자유학기제 이후 첫 내신 시험 완벽 대비',
      '서술형·논술형 평가 비중 확대에 따른 맞춤형 서술형 첨삭 지도',
    ],
  },
  {
    icon: GraduationCap,
    title: '고등부 (대입 직결, 등급 사수)',
    points: [
      '학교별 내신 1등급을 위한 고난도 킬러 문항 집중 공략',
      '수시 및 정시 대비를 아우르는 장기적 입시 학습 로드맵 구축',
    ],
  },
];

export default function TeacherShowcase() {
  return (
    <section className="relative bg-white border-b border-slate-200/80 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left Column: Teacher Image with Floating Badge */}
          <div className="relative group">
            {/* Soft Ambient Background Glow */}
            <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-purple-200/60 to-indigo-200/60 opacity-60 blur-xl group-hover:opacity-90 transition-opacity" />

            <div className="relative overflow-hidden rounded-3xl border border-purple-100 bg-white shadow-xl shadow-purple-500/10">
              <Image
                src="/images/teacher-coaching.jpg"
                alt="학생의 학년과 학습 수준에 맞춰 지도하는 전문 선생님"
                width={700}
                height={480}
                priority
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />

              {/* Floating Verification Badge */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900/85 backdrop-blur-md border border-purple-400/40 px-4 py-3 text-xs sm:text-sm font-bold text-white shadow-2xl">
                <Sparkles className="h-4 w-4 text-amber-300 shrink-0" />
                <span>초등부터 고등까지, 학년별 최적화 맞춤 지도</span>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Checklist Points */}
          <div className="min-w-0 text-left">
            {/* Subtitle Badge */}
            <div className="inline-flex items-center gap-1.5 rounded-full bg-purple-50 border border-purple-200 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-purple-700 mb-4 shadow-sm">
              <span>GRADE-SPECIFIC STRATEGY</span>
            </div>

            {/* Main Title */}
            <h2 className="text-balance text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-slate-900 leading-tight break-keep">
              <span className="inline-block">대상별</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 inline-block">
                맞춤 지도 전략
              </span>
            </h2>

            {/* Subtext */}
            <p className="mt-4 text-pretty text-slate-600 text-sm sm:text-base leading-relaxed font-medium break-keep">
              학년별 특성에 맞춘 전략적 학습 가이드
            </p>

            {/* 3 Checklist Points */}
            <div className="mt-8 space-y-4">
              {gradeStrategies.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="flex items-start gap-3.5 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 p-4 transition-all hover:border-purple-300 hover:bg-purple-50/30"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-700 border border-purple-200">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-balance text-sm sm:text-base font-bold text-slate-900 flex items-center gap-1.5">
                        {item.title}
                      </h3>
                      <ul className="mt-1.5 space-y-1 text-pretty text-xs sm:text-sm text-slate-600 font-medium break-keep">
                        {item.points.map((point) => (
                          <li key={point} className="flex items-start gap-2 leading-relaxed">
                            <span className="mt-[0.65em] h-1 w-1 shrink-0 rounded-full bg-purple-500" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
