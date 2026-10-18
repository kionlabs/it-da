'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white py-12 text-slate-500">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          {/* Logo */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-purple-600 to-indigo-600 shadow-sm text-white">
                <Sparkles className="h-4 w-4" />
              </div>
              <div className="text-lg font-black tracking-tight flex items-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">잇다과외</span>
                <span className="text-purple-600 font-bold text-xs tracking-normal mx-0.5">(It-da)</span>
              </div>
            </Link>
            <p className="mt-3 max-w-xl text-sm font-medium leading-6 text-slate-500 break-keep">
              잇다과외는 학교별 출제 경향과 학생의 학습 수준을 분석해 전문 선생님과 연결하는 초·중·고 온라인 1:1 맞춤 과외 서비스입니다.
            </p>
          </div>

          <div className="lg:text-right">
            <nav aria-label="하단 주요 메뉴" className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-bold text-slate-600 lg:justify-end">
              <Link href="/online-tutoring" className="hover:text-purple-700">온라인 1:1 과외</Link>
              <Link href="/partner-academies" className="hover:text-purple-700">제휴학원</Link>
              <Link href="/language-programs" className="hover:text-purple-700">언어 프로그램</Link>
              <Link href="/pricing-faq" className="hover:text-purple-700">수업료 &amp; FAQ</Link>
            </nav>
            {/* Copyright Notice */}
            <div className="mt-5 text-xs text-slate-500">
              <p>© {currentYear} 잇다과외(It-da) &amp; KION Labs. All rights reserved.</p>
              <p className="mt-1 text-slate-400">학교별 내신 분석 기반 전문 선생님 1:1 맞춤 매칭 서비스</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
