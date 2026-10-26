import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LeadForm from '@/components/LeadForm';
import { findTutoringSubject, tutoringSubjects } from '@/lib/tutoringSubjects';

const siteUrl = 'https://itda-edu.vercel.app';

type PageProps = { params: { subject: string } };

export const dynamicParams = false;

export function generateStaticParams() {
  return tutoringSubjects.map(({ slug }) => ({ subject: slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const subject = findTutoringSubject(params.subject);
  if (!subject) return {};
  const title = `${subject.name} 온라인 과외`;
  const url = `/online-tutoring/subjects/${subject.slug}`;
  return {
    title,
    description: subject.description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      locale: 'ko_KR',
      siteName: '잇다과외',
      title: `${title} | 잇다과외`,
      description: subject.description,
      url: `${siteUrl}${url}`,
    },
  };
}

export default function SubjectPage({ params }: PageProps) {
  const subject = findTutoringSubject(params.subject);
  if (!subject) notFound();
  const siblings = tutoringSubjects.filter((item) => item.slug !== subject.slug);
  const path = `/online-tutoring/subjects/${subject.slug}`;
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, item: { '@id': siteUrl, name: '잇다과외' } },
      { '@type': 'ListItem', position: 2, item: { '@id': `${siteUrl}/online-tutoring`, name: '온라인 과외' } },
      { '@type': 'ListItem', position: 3, item: { '@id': `${siteUrl}${path}`, name: `${subject.name} 온라인 과외` } },
    ],
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb).replace(/</g, '\\u003c') }} />
      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-violet-50 px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div aria-hidden="true" className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-blue-200/60 blur-3xl" />
          <div className="relative mx-auto max-w-7xl">
            <nav aria-label="현재 위치" className="flex flex-wrap items-center gap-2 text-sm font-medium text-slate-500">
              <Link href="/" className="hover:text-blue-700">홈</Link><ChevronRight className="h-4 w-4" aria-hidden="true" />
              <Link href="/online-tutoring" className="hover:text-blue-700">온라인 과외</Link><ChevronRight className="h-4 w-4" aria-hidden="true" />
              <span className="text-slate-800">{subject.name}</span>
            </nav>
            <div className="mt-14 max-w-4xl md:mt-20">
              <p className="inline-flex rounded-full border border-blue-200 bg-white px-4 py-2 text-xs font-black tracking-[0.14em] text-blue-700">IT-DA SUBJECT TUTORING</p>
              <h1 className="mt-6 text-balance text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl break-keep">{subject.name} 온라인 과외,<br /><span className="text-blue-700">{subject.tagline}</span></h1>
              <p className="mt-7 max-w-3xl text-pretty text-lg font-medium leading-9 text-slate-700 break-keep">{subject.introduction}</p>
              <p className="mt-3 max-w-3xl text-pretty leading-8 text-slate-600 break-keep">{subject.description}</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#lead-form" className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-7 py-4 text-sm font-black text-white shadow-lg transition hover:bg-blue-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-200">{subject.name} 과외 상담 신청 <ArrowRight className="h-4 w-4" aria-hidden="true" /></a>
                <a href="#learning-plan" className="inline-flex items-center rounded-full border border-slate-200 bg-white px-7 py-4 text-sm font-black text-slate-800 transition hover:border-blue-300">수업 방식 살펴보기</a>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 md:py-28 lg:px-8" aria-labelledby="concerns-title">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-black tracking-[0.16em] text-blue-700">START WITH THE RIGHT QUESTION</p>
            <h2 id="concerns-title" className="mt-4 text-balance text-3xl font-black leading-tight sm:text-4xl break-keep">이런 {subject.name} 고민이 있다면</h2>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {subject.concerns.map((concern, index) => <div key={concern} className="rounded-3xl border border-slate-200 bg-slate-50 p-7"><span className="text-sm font-black text-blue-700">0{index + 1}</span><p className="mt-7 text-lg font-bold leading-8 text-slate-900 break-keep">{concern}</p></div>)}
            </div>
          </div>
        </section>

        <section id="learning-plan" className="scroll-mt-20 bg-slate-950 px-4 py-20 text-white sm:px-6 md:py-28 lg:px-8" aria-labelledby="plan-title">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-black tracking-[0.16em] text-cyan-300">PERSONAL LEARNING PLAN</p>
            <h2 id="plan-title" className="mt-4 text-balance text-3xl font-black sm:text-4xl break-keep">{subject.name} 실력에 맞춰 이렇게 배웁니다</h2>
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {subject.approach.map((step, index) => <article key={step.title} className="rounded-3xl border border-white/15 bg-white/5 p-7"><span className="text-sm font-black text-cyan-300">STEP 0{index + 1}</span><h3 className="mt-5 text-xl font-black break-keep">{step.title}</h3><p className="mt-4 leading-8 text-slate-300 break-keep">{step.description}</p></article>)}
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 md:py-28 lg:px-8" aria-labelledby="grade-title">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-black tracking-[0.16em] text-blue-700">BY SCHOOL LEVEL</p>
            <h2 id="grade-title" className="mt-4 text-balance text-3xl font-black sm:text-4xl break-keep">학년별 {subject.name} 학습 방향</h2>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {subject.gradeFocus.map((item) => <div key={item.grade} className="rounded-3xl border border-blue-100 bg-blue-50/60 p-7"><div className="flex items-center gap-3"><CheckCircle2 className="h-6 w-6 text-blue-700" aria-hidden="true" /><h3 className="text-xl font-black">{item.grade}</h3></div><p className="mt-5 leading-8 text-slate-700 break-keep">{item.description}</p></div>)}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 px-4 py-20 sm:px-6 md:py-24 lg:px-8" aria-labelledby="faq-title">
          <div className="mx-auto max-w-4xl">
            <h2 id="faq-title" className="text-balance text-3xl font-black sm:text-4xl break-keep">{subject.name} 과외 자주 묻는 질문</h2>
            <div className="mt-8 space-y-4">
              {subject.questions.map((item) => <article key={item.question} className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7"><h3 className="text-lg font-black leading-7 text-slate-950 break-keep">Q. {item.question}</h3><p className="mt-3 leading-8 text-slate-600 break-keep">{item.answer}</p></article>)}
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="other-subjects-title">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-wrap items-end justify-between gap-4"><h2 id="other-subjects-title" className="text-3xl font-black break-keep">다른 과목도 살펴보세요</h2><Link href="/online-tutoring#subject-catalog" className="font-bold text-blue-700 hover:underline">전체 과목 보기</Link></div>
            <div className="mt-7 flex flex-wrap gap-3">{siblings.map((item) => <Link key={item.slug} href={`/online-tutoring/subjects/${item.slug}`} className="rounded-full border border-slate-200 px-5 py-3 text-sm font-bold text-slate-800 transition hover:border-blue-300 hover:bg-blue-50">{item.name} 온라인 과외</Link>)}</div>
          </div>
        </section>
        <LeadForm initialSubject={subject.name} />
      </main>
      <Footer />
    </div>
  );
}
