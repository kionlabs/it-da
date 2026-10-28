import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, ChevronRight, MapPin } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LeadForm from '@/components/LeadForm';
import { findAcademySubject } from '@/lib/academySubjects';
import { findNationalRegion, regionLabel } from '@/lib/nationalRegions';

type Props = { params: { slug: string }; searchParams?: { region?: string } };
const siteUrl = 'https://itda-edu.vercel.app';
export const dynamic = 'force-dynamic';

export function generateMetadata({ params }: Props): Metadata {
  const subject = findAcademySubject(params.slug);
  if (!subject) return {};
  const path = `/partner-academies/subjects/${subject.slug}`;
  const title = `${subject.name} 학원 | 학교별 내신·개별 학습 안내 | 잇다과외`;
  const description = `${subject.lead} 잇다과외 제휴학원의 ${subject.name} 학습 방식과 상담 절차를 확인하세요.`;
  return {
    title, description,
    alternates: { canonical: path },
    openGraph: { type: 'website', locale: 'ko_KR', siteName: '잇다과외', url: `${siteUrl}${path}`, title, description },
  };
}

export default function AcademySubjectPage({ params, searchParams }: Props) {
  const subject = findAcademySubject(params.slug);
  if (!subject) notFound();
  const region = searchParams?.region ? findNationalRegion(searchParams.region) : undefined;
  const place = region ? regionLabel(region) : undefined;

  return <div className="min-h-screen bg-white text-slate-950">
    <Navbar />
    <main>
      <section className="bg-gradient-to-br from-purple-50 via-white to-blue-50 px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <nav aria-label="현재 위치" className="flex flex-wrap items-center gap-2 text-sm text-slate-500"><Link href="/">홈</Link><ChevronRight className="h-4 w-4" /><Link href="/partner-academies">제휴학원</Link><ChevronRight className="h-4 w-4" /><span>{subject.name} 학원</span></nav>
          {place && <p className="mt-10 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white px-4 py-2 text-sm font-bold text-purple-700"><MapPin className="h-4 w-4" aria-hidden="true" />검색 지역: {place}</p>}
          <p className={place ? 'mt-6 text-sm font-black tracking-[0.14em] text-purple-700' : 'mt-12 text-sm font-black tracking-[0.14em] text-purple-700'}>IT-DA PARTNER ACADEMY · {subject.name.toUpperCase()}</p>
          <h1 className="mt-4 max-w-4xl text-balance text-4xl font-black leading-tight sm:text-5xl lg:text-6xl break-keep">{subject.title}</h1>
          <p className="mt-7 max-w-3xl text-lg leading-9 text-slate-700 break-keep">{subject.lead}</p>
          <div className="mt-8 flex flex-wrap gap-3"><a href="#lead-form" className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-7 py-4 text-sm font-bold text-white hover:bg-purple-800">{subject.name} 학습 상담 <ArrowRight className="h-4 w-4" /></a><a href="#academy-plan" className="rounded-full border border-slate-200 bg-white px-7 py-4 text-sm font-bold text-slate-800">학습 방식 보기</a></div>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-600 break-keep">{place ? `${place}에서 방문 가능한 제휴학원과 ${subject.name} 수업 여부` : `방문 가능한 제휴학원과 ${subject.name} 수업 여부`}는 상담 과정에서 확인합니다. 이 페이지는 지역별 학원 운영이나 특정 학교 자료 보유를 보장하지 않습니다.</p>
        </div>
      </section>
      <section id="academy-plan" className="scroll-mt-20 px-4 py-20 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl"><p className="text-sm font-black tracking-[0.16em] text-purple-700">SUBJECT LEARNING PLAN</p><h2 className="mt-4 text-balance text-3xl font-black sm:text-4xl break-keep">{subject.name} 학원 수업, 이렇게 준비합니다</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {[
              { no: '01', title: '현재 수준 진단', text: subject.diagnosis },
              { no: '02', title: '학교 자료 확인', text: subject.schoolMaterials },
              { no: '03', title: '시험 범위별 학습', text: subject.examPlan },
              { no: '04', title: '오답과 학습 피드백', text: subject.feedback },
            ].map((item) => <article key={item.no} className="rounded-3xl border border-purple-100 bg-purple-50/60 p-7 sm:p-8"><span className="text-sm font-black text-purple-700">STEP {item.no}</span><h3 className="mt-5 text-xl font-black">{item.title}</h3><p className="mt-4 leading-8 text-slate-600 break-keep">{item.text}</p></article>)}
          </div>
        </div>
      </section>
      <section className="bg-slate-950 px-4 py-16 text-white sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><h2 className="text-balance text-3xl font-black sm:text-4xl">우리 동네에서 필요한 수업을 확인하세요</h2><p className="mt-5 max-w-3xl leading-8 text-slate-300 break-keep">지역명과 과목으로 학습 방향을 찾을 수 있습니다. 제휴학원 방문 가능 여부, 수업 형태와 일정은 학생의 위치와 목표를 확인한 뒤 안내합니다.</p><Link href="/partner-academies" className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-slate-950">지역 다시 검색하기 <ArrowRight className="h-4 w-4" /></Link></div></section>
      <section className="px-4 py-20 sm:px-6 lg:px-8"><div className="mx-auto max-w-4xl"><h2 className="text-3xl font-black sm:text-4xl">{subject.name} 학원 자주 묻는 질문</h2><div className="mt-8 space-y-4">{subject.questions.map((item) => <article key={item.question} className="rounded-2xl border border-slate-200 p-6"><h3 className="text-lg font-black">Q. {item.question}</h3><p className="mt-3 leading-8 text-slate-600 break-keep">{item.answer}</p></article>)}</div></div></section>
      <LeadForm initialAddress={place} initialSubject={subject.name} />
    </main>
    <Footer />
  </div>;
}
