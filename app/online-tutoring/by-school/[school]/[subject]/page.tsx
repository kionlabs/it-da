import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import OnlineDiscoveryGuide from '@/components/OnlineDiscoveryGuide';
import { featuredSchool } from '@/lib/onlineDiscovery';
import { findTutoringSubject } from '@/lib/tutoringSubjects';

type Props = { params: { school: string; subject: string } };
const siteUrl = 'https://itda-edu.vercel.app';
export function generateMetadata({ params }: Props): Metadata {
  const subject = findTutoringSubject(params.subject);
  if (params.school !== featuredSchool.slug || !subject) return {};
  const featured = subject.slug === 'science';
  const title = `${featuredSchool.name} ${subject.name} 과외`;
  const path = `/online-tutoring/by-school/${featuredSchool.slug}/${subject.slug}`;
  const description = `${featuredSchool.fullName} ${subject.name} 과외 학습 안내. 실제 교과서·프린트·시험 범위와 학생의 현재 개념 이해를 확인해 온라인 1:1 학습을 설계합니다.`;
  return { title, description, robots: featured ? undefined : { index: false, follow: true }, alternates: { canonical: featured ? path : `/online-tutoring/subjects/${subject.slug}` }, openGraph: { title: `${title} | 잇다과외`, description, url: `${siteUrl}${path}` } };
}
export default function Page({ params }: Props) {
  const subject = findTutoringSubject(params.subject);
  if (params.school !== featuredSchool.slug || !subject) notFound();
  const detail = subject.slug === 'science'
    ? '수완고 과학 과외는 학생이 현재 배우는 과학 과목과 단원부터 확인합니다. 실험 원리와 변인, 그래프·자료 해석, 서술형 설명을 구분해 진단하고 학교에서 제공한 교과서·프린트·평가 안내를 토대로 시험 전 복습 순서를 정합니다.'
    : `수완고등학교 ${subject.name} 수업은 학생이 제공한 학교 자료와 현재 풀이를 확인한 뒤 필요한 개념부터 시작합니다.`;
  return <OnlineDiscoveryGuide kind="school" title={`${featuredSchool.name} ${subject.name} 과외`} place={featuredSchool.fullName} subject={subject} focus={subject.introduction} detail={detail} related={[{ title: `${subject.name} 온라인 과외`, href: `/online-tutoring/subjects/${subject.slug}` }, { title: '학교별 과외 찾기', href: '/online-tutoring/by-school' }]} />;
}
