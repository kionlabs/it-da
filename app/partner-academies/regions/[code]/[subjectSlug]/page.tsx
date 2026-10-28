import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, CheckCircle2, ChevronRight, MapPin } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LeadForm from '@/components/LeadForm';
import RegionDataAttribution from '@/components/RegionDataAttribution';
import { findAcademySubject } from '@/lib/academySubjects';
import { findNationalRegion, regionLabel } from '@/lib/nationalRegions';
import { findTutoringSubject } from '@/lib/tutoringSubjects';

const siteUrl = 'https://itda-edu.vercel.app';
type Props = { params: { code: string; subjectSlug: string } };

export function generateMetadata({ params }: Props): Metadata {
  const region = findNationalRegion(params.code);
  const subject = findTutoringSubject(params.subjectSlug);
  if (!region || !subject) return {};
  const path = `/partner-academies/regions/${region.code}/${subject.slug}`;
  const title = `${region.name} ${subject.name} 학원 상담 안내 | 잇다과외`;
  const description = `${regionLabel(region)}에서 ${subject.name} 학습을 찾는 학생을 위한 상담 안내. 방문 가능한 제휴학원은 상담에서 확인합니다.`;
  return {
    title,
    description,
    robots: { index: false, follow: true },
    alternates: { canonical: findAcademySubject(subject.slug) ? `/partner-academies/subjects/${subject.slug}` : path },
    openGraph: { type: 'website', locale: 'ko_KR', siteName: '잇다과외', url: `${siteUrl}${path}`, title, description },
  };
}

export default function RegionSubjectPage({ params }: Props) {
  const region = findNationalRegion(params.code);
  const subject = findTutoringSubject(params.subjectSlug);
  if (!region || !subject) notFound();
  const place = regionLabel(region);

  return (
    <div className="min-h-screen bg-white text-slate-950">
      <Navbar />
      <main>
        <section className="bg-gradient-to-br from-purple-50 via-white to-blue-50 px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <nav aria-label="현재 위치" className="flex flex-wrap items-center gap-2 text-sm text-slate-500"><Link href="/">홈</Link><ChevronRight className="h-4 w-4" /><Link href="/partner-academies">지역별 과외</Link><ChevronRight className="h-4 w-4" /><Link href={`/partner-academies/regions/${region.code}`}>{region.name}</Link><ChevronRight className="h-4 w-4" /><span>{subject.name}</span></nav>
            <p className="mt-12 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white px-4 py-2 text-sm font-bold text-purple-700"><MapPin className="h-4 w-4" />{place}</p>
            <h1 className="mt-6 text-balance text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">{region.name} {subject.name}과외,<br /><span className="text-purple-700">학생에게 맞는 순서로</span></h1>
            <p className="mt-7 max-w-3xl text-lg leading-9 text-slate-700 break-keep">{subject.introduction} 학교별 시험 범위와 학생의 실제 풀이를 함께 확인해 학습 계획을 조정합니다.</p>
            <div className="mt-8 flex flex-wrap gap-3"><a href="#lead-form" className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-7 py-4 text-sm font-bold text-white hover:bg-purple-800">{region.name} {subject.name}과외 상담 <ArrowRight className="h-4 w-4" /></a><a href="#learning-plan" className="rounded-full border border-slate-200 bg-white px-7 py-4 text-sm font-bold text-slate-800">학습 방식 보기</a></div>
            <p className="mt-5 text-sm text-slate-600">방문 가능한 제휴학원과 수업 방식은 상담에서 확인해 안내합니다.</p>
          </div>
        </section>
        <section id="learning-plan" className="scroll-mt-20 px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-black tracking-[0.16em] text-purple-700">PERSONAL LEARNING PLAN</p>
            <h2 className="mt-4 text-balance text-3xl font-black sm:text-4xl">{region.name} {subject.name} 학습, 이렇게 시작합니다</h2>
            <p className="mt-4 max-w-3xl leading-8 text-slate-600 break-keep">{subject.description}</p>
            <div className="mt-10 grid gap-5 md:grid-cols-3">{subject.approach.map((step, index) => <article key={step.title} className="rounded-3xl border border-purple-100 bg-purple-50/60 p-7"><span className="text-sm font-black text-purple-700">STEP 0{index + 1}</span><h3 className="mt-5 text-xl font-black">{step.title}</h3><p className="mt-4 leading-8 text-slate-600 break-keep">{step.description}</p></article>)}</div>
          </div>
        </section>
        <section className="bg-slate-950 px-4 py-20 text-white sm:px-6 md:py-24 lg:px-8"><div className="mx-auto max-w-7xl"><h2 className="text-3xl font-black sm:text-4xl">학년별로 달라지는 학습 초점</h2><div className="mt-9 grid gap-5 md:grid-cols-3">{subject.gradeFocus.map((item) => <article key={item.grade} className="rounded-3xl border border-white/15 bg-white/5 p-7"><div className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-violet-300" /><h3 className="text-xl font-black">{item.grade}</h3></div><p className="mt-4 leading-8 text-slate-300 break-keep">{item.description}</p></article>)}</div></div></section>
        <section className="px-4 py-20 sm:px-6 lg:px-8"><div className="mx-auto max-w-4xl"><h2 className="text-3xl font-black sm:text-4xl">{subject.name}과외 자주 묻는 질문</h2><div className="mt-8 space-y-4">{subject.questions.map((item) => <article key={item.question} className="rounded-2xl border border-slate-200 p-6"><h3 className="text-lg font-black">Q. {item.question}</h3><p className="mt-3 leading-8 text-slate-600 break-keep">{item.answer}</p></article>)}</div></div></section>
        <RegionDataAttribution />
        <LeadForm initialAddress={place} initialSubject={subject.name} />
      </main>
      <Footer />
    </div>
  );
}
