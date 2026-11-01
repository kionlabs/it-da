import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import OnlineDiscoveryGuide from '@/components/OnlineDiscoveryGuide';
import { findNationalRegion, regionLabel } from '@/lib/nationalRegions';
import { findTutoringSubject } from '@/lib/tutoringSubjects';

type Props = { params: { code: string; subject: string } };
const siteUrl = 'https://itda-edu.vercel.app';
export function generateMetadata({ params }: Props): Metadata {
  const region = findNationalRegion(params.code);
  const subject = findTutoringSubject(params.subject);
  if (!region || !subject) return {};
  const featured = region.code === '1165010600' && subject.slug === 'math';
  const title = `${region.name} ${subject.name} 과외`;
  const path = `/online-tutoring/by-region/${region.code}/${subject.slug}`;
  const description = `${regionLabel(region)} ${subject.name} 과외 학습 안내. 온라인 1:1 수업으로 현재 실력과 학교 진도를 확인하고 개념·유형·오답을 학생에게 맞는 순서로 연결합니다.`;
  return { title, description, robots: featured ? undefined : { index: false, follow: true }, alternates: { canonical: featured ? path : `/online-tutoring/subjects/${subject.slug}` }, openGraph: { title: `${title} | 잇다과외`, description, url: `${siteUrl}${path}` } };
}
export default function Page({ params }: Props) {
  const region = findNationalRegion(params.code);
  const subject = findTutoringSubject(params.subject);
  if (!region || !subject) notFound();
  const featured = region.code === '1165010600' && subject.slug === 'math';
  const detail = featured
    ? '잠원동 수학 과외를 찾는 학생에게도 먼저 필요한 것은 현재 풀이와 학교 진도를 확인하는 일입니다. 선수 개념이 비어 있다면 시험 범위의 핵심 유형과 연결해 보완하고, 계산 실수·조건 누락·서술형 풀이를 구분해 복습합니다.'
    : `${region.name}에서 온라인 ${subject.name} 과외를 찾는 학생의 학습 상태와 학교 자료를 확인해 수업 순서를 정합니다. 지역별 대면 수업 여부는 상담에서 안내합니다.`;
  return <OnlineDiscoveryGuide kind="region" title={`${region.name} ${subject.name} 과외`} place={regionLabel(region)} subject={subject} focus={subject.introduction} detail={detail} related={[{ title: `${subject.name} 온라인 과외`, href: `/online-tutoring/subjects/${subject.slug}` }, { title: '다른 지역 찾기', href: '/online-tutoring/by-region' }]} />;
}
