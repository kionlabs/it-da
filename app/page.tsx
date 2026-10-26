import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ValueProposition from '@/components/ValueProposition';
import TutoringReasonsSection from '@/components/TutoringReasonsSection';
import CoreProcessSection from '@/components/CoreProcessSection';
import TeacherShowcase from '@/components/TeacherShowcase';
import SuccessStoriesSection from '@/components/SuccessStoriesSection';
import VideoSection from '@/components/VideoSection';
import LeadForm from '@/components/LeadForm';
import Footer from '@/components/Footer';

const siteUrl = 'https://itda-edu.vercel.app';

export const metadata: Metadata = {
  title: { absolute: '잇다과외 | 온라인 1:1 맞춤 과외' },
  description: '잇다과외는 학교별 출제 경향 분석과 1:1 정밀 진단을 바탕으로 초·중·고 학생에게 꼭 맞는 전문 선생님과 맞춤 학습을 연결합니다.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: siteUrl,
    siteName: '잇다과외',
    title: '잇다과외 | 온라인 1:1 맞춤 과외',
    description: '학교별 출제 경향과 학생의 실력을 분석해 전문 선생님과 연결하는 초·중·고 1:1 맞춤 과외 서비스입니다.',
    images: [`${siteUrl}/images/hero-student.png`],
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: '잇다과외',
      alternateName: ['잇다 과외', '잇다(It-da)과외', 'It-da 과외'],
      inLanguage: 'ko-KR',
      publisher: { '@id': `${siteUrl}/#organization` },
    },
    {
      '@type': 'EducationalOrganization',
      '@id': `${siteUrl}/#organization`,
      name: '잇다과외',
      alternateName: '잇다(It-da)과외',
      url: siteUrl,
      logo: `${siteUrl}/favicon.ico`,
      image: `${siteUrl}/images/hero-student.png`,
      description: '학교별 출제 경향과 학생의 실력을 분석해 전문 선생님과 연결하는 초·중·고 1:1 맞춤 과외 서비스',
      sameAs: ['https://pf.kakao.com/_xaeWxkn'],
      areaServed: 'KR',
      knowsAbout: ['온라인 1:1 맞춤 과외', '학교별 내신 과외', '초등 과외', '중등 과외', '고등 과외', '학습 코칭'],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: '잇다과외 맞춤 학습 서비스',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '온라인 1:1 맞춤 과외', url: `${siteUrl}/online-tutoring` } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '제휴학원 맞춤 학습', url: `${siteUrl}/partner-academies` } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '1:1 맞춤 언어 프로그램', url: `${siteUrl}/language-programs` } },
        ],
      },
    },
    {
      '@type': 'WebPage',
      '@id': `${siteUrl}/#webpage`,
      url: siteUrl,
      name: '잇다과외 | 온라인 1:1 맞춤 과외',
      description: '학교별 출제 경향 분석과 1:1 정밀 진단을 바탕으로 전문 선생님과 연결하는 맞춤 과외',
      isPartOf: { '@id': `${siteUrl}/#website` },
      about: { '@id': `${siteUrl}/#organization` },
      inLanguage: 'ko-KR',
    },
  ],
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col selection:bg-purple-600 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }}
      />
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ValueProposition />
        <TutoringReasonsSection />
        <CoreProcessSection />
        <TeacherShowcase />
        <SuccessStoriesSection />
        <VideoSection />
        <LeadForm />
      </main>
      <Footer />
    </div>
  );
}
