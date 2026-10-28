import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, ChevronRight, MapPin } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LeadForm from '@/components/LeadForm';
import RegionDataAttribution from '@/components/RegionDataAttribution';
import { findAcademySubject } from '@/lib/academySubjects';
import { findNationalRegion, regionLabel } from '@/lib/nationalRegions';
import { tutoringSubjects } from '@/lib/tutoringSubjects';

type Props = { params: { code: string } };

export function generateMetadata({ params }: Props): Metadata {
  const region = findNationalRegion(params.code);
  if (!region) return {};
  return {
    title: `${region.name} 제휴학원 과목별 안내`,
    description: `${regionLabel(region)}에서 필요한 과목을 선택하고 학습 방향을 확인하세요. 방문 가능한 제휴학원은 상담에서 확인합니다.`,
    robots: { index: false, follow: true },
  };
}

export default function RegionPage({ params }: Props) {
  const region = findNationalRegion(params.code);
  if (!region) notFound();

  return (
    <div className="min-h-screen bg-white text-slate-950">
      <Navbar />
      <main>
        <section className="bg-gradient-to-br from-purple-50 to-blue-50 px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <nav aria-label="현재 위치" className="flex items-center gap-2 text-sm text-slate-500"><Link href="/">홈</Link><ChevronRight className="h-4 w-4" /><Link href="/partner-academies">제휴학원</Link><ChevronRight className="h-4 w-4" /><span>{region.name}</span></nav>
            <p className="mt-12 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white px-4 py-2 text-sm font-bold text-purple-700"><MapPin className="h-4 w-4" />{regionLabel(region)}</p>
            <h1 className="mt-6 text-balance text-4xl font-black leading-tight sm:text-5xl">{region.name} 제휴학원 학습 안내</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700 break-keep">학생의 학교 자료와 현재 학습 상태를 확인한 뒤 과목별 목표에 맞춰 수업 방향을 정합니다. 방문 가능한 제휴학원과 수업 방식은 상담에서 확인해 안내합니다.</p>
          </div>
        </section>
        <section className="px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-black">과목별 학습 안내</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {tutoringSubjects.map((subject) => <Link key={subject.slug} href={findAcademySubject(subject.slug) ? `/partner-academies/subjects/${subject.slug}?region=${encodeURIComponent(region.code)}` : `/partner-academies/regions/${region.code}/${subject.slug}`} className="group flex min-h-40 flex-col justify-between rounded-3xl border border-purple-100 bg-purple-50/60 p-6 transition hover:border-purple-300 hover:shadow-lg"><div><h3 className="text-xl font-black">{region.name} {subject.name} 학원</h3><p className="mt-3 text-sm leading-6 text-slate-600 break-keep">{subject.tagline}</p></div><ArrowRight className="mt-4 h-5 w-5 text-purple-700 transition group-hover:translate-x-1" /></Link>)}
            </div>
          </div>
        </section>
        <RegionDataAttribution />
        <LeadForm initialAddress={regionLabel(region)} />
      </main>
      <Footer />
    </div>
  );
}
