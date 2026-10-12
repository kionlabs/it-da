'use client';

import React from 'react';
import Image from 'next/image';
import { CheckCircle2, Sparkles } from 'lucide-react';

export default function ValueProposition() {
  return (
    <section className="relative pt-36 md:pt-48 pb-16 md:pb-24 bg-[#F8FAFC] border-b border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-purple-50 border border-purple-200 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-purple-700 mb-4 shadow-sm">
            <span>SCHOOL-SPECIFIC TUTORING</span>
          </div>
          <h2 className="text-balance text-3xl font-black tracking-tight text-slate-900 sm:text-4xl md:text-5xl leading-tight break-keep">
            <span className="inline-block">왜</span>{' '}
            <span className="inline-block text-purple-700">&apos;학교별 맞춤 과외&apos;</span>
            <span className="inline-block">여야 할까요?</span>
          </h2>
          <p className="mt-6 text-balance text-lg sm:text-xl md:text-2xl text-slate-700 font-bold leading-relaxed break-keep">
            &ldquo;학교마다 출제 경향이 다르고, 아이마다 이해하는 속도가 다릅니다.&rdquo;
          </p>
        </div>

        {/* School-Specific Tutoring Story */}
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
          <div className="grid md:grid-cols-2">
            <div className="relative min-h-72 sm:min-h-80 md:min-h-[420px] group">
              <Image
                src="/images/study-env.jpg"
                alt="학교별 시험 경향에 맞춰 1:1 맞춤 학습을 진행하는 학생"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 inline-flex items-center gap-2 text-sm font-bold text-white sm:bottom-8 sm:left-8">
                <Sparkles className="h-5 w-5 shrink-0 text-amber-300" />
                <span>학교와 학생을 함께 분석하는 맞춤 학습</span>
              </div>
            </div>

            <div className="flex flex-col justify-center p-7 sm:p-10 md:p-12 lg:p-14">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100 text-purple-700">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <p className="mt-6 text-pretty text-base sm:text-lg leading-loose text-slate-700 font-medium break-keep">
                똑같은 교과서를 쓰더라도 학교마다 출제 선생님의 성향, 서술형 비중, 고난도 문항의 출제 방식은 천차만별입니다. 우리 아이가 다니는 학교의 시험 특징을 모른 채 공부하는 것은 방향을 잃은 것과 같습니다.
              </p>
              <div className="mt-8 rounded-2xl border border-purple-200 bg-gradient-to-br from-purple-50 to-indigo-50 p-5 sm:p-6">
                <p className="text-pretty text-lg sm:text-xl font-extrabold leading-relaxed text-slate-900 break-keep">
                  초등부터 고등까지, 학교별 기출 분석을 바탕으로 한 1:1 맞춤 솔루션으로 성적의 체질을 바꿉니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
