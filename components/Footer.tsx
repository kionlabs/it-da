'use client';

import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white py-12 text-slate-500">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-purple-600 to-indigo-600 shadow-sm text-white">
              <Sparkles className="h-4 w-4" />
            </div>
            <div className="text-lg font-black tracking-tight flex items-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
                잇다과외
              </span>
              <span className="text-purple-600 font-bold text-xs tracking-normal mx-0.5">
                (It-da)
              </span>
            </div>
          </div>

          {/* Copyright Notice */}
          <div className="text-center text-xs text-slate-500 sm:text-right">
            <p>© {currentYear} 잇다과외(It-da) &amp; KION Labs. All rights reserved.</p>
            <p className="mt-1 text-slate-400">
              AI 기반 신입 코치 &amp; 학생 1:1 맞춤 매칭 서비스
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
