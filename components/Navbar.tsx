'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  BadgeDollarSign,
  ChevronRight,
  CircleHelp,
  Globe,
  Handshake,
  Laptop,
  Menu,
  Sparkles,
  X,
} from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const formElement = document.getElementById('lead-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#lead-form';
    }
  };

  const navLinks = [
    { name: '온라인 과외', href: '/online-tutoring', icon: Laptop },
    { name: '제휴학원', href: '/partner-academies', icon: Handshake },
    { name: '언어 프로그램', href: '/language-programs', icon: Globe },
    { name: 'QnA', href: '/#qna', icon: CircleHelp },
    { name: '수업료 안내', href: '/#pricing', icon: BadgeDollarSign },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: Brand Logo (Link to Home) */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-500/20 group-hover:scale-105 transition-transform">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <div className="text-xl font-black tracking-tight flex items-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
              잇다과외
            </span>
            <span className="text-purple-600 font-bold text-sm tracking-normal mx-0.5">
              (It-da)
            </span>
          </div>
        </Link>

        {/* Right: Desktop Navigation & CTA Button */}
        <div className="hidden lg:flex items-center gap-3 xl:gap-5">
          <nav className="flex items-center gap-3 xl:gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="whitespace-nowrap text-xs font-medium text-slate-600 transition-colors hover:text-purple-600 xl:text-sm"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <a
            href="#lead-form"
            onClick={scrollToForm}
            className="group relative inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-3 py-2 text-xs font-semibold text-white shadow-md shadow-purple-500/20 transition-all hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 xl:px-4 xl:text-sm"
          >
            <span>무료 상담 신청</span>
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 text-white/90" />
          </a>
        </div>

        {/* Mobile: Hamburger Button & CTA */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="#lead-form"
            onClick={scrollToForm}
            className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm"
          >
            <span>무료 상담</span>
            <ChevronRight className="h-3.5 w-3.5" />
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
            aria-label="메뉴 열기"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-slate-700" />
            ) : (
              <Menu className="h-6 w-6 text-slate-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white/95 backdrop-blur-md px-4 pt-3 pb-5 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
                >
                  <Icon className="h-4 w-4 text-purple-600" />
                  <span>{link.name}</span>
                </Link>
              );
            })}
            <div className="pt-2 border-t border-slate-100">
              <a
                href="#lead-form"
                onClick={scrollToForm}
                className="flex w-full items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 py-2.5 text-sm font-semibold text-white shadow-md shadow-purple-500/20"
              >
                <span>무료 상담 신청하기</span>
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
