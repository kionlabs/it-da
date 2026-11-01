import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import OnlineDiscoveryGuide from '@/components/OnlineDiscoveryGuide';
import { gradeOptions } from '@/lib/onlineDiscovery';
import { findTutoringSubject } from '@/lib/tutoringSubjects';

type Props = { params: { grade: string; subject: string } };
const siteUrl = 'https://itda-edu.vercel.app';
export function generateMetadata({ params }: Props): Metadata {
  const grade = gradeOptions.find((item) => item.slug === params.grade);
  const subject = findTutoringSubject(params.subject);
  if (!grade || !subject) return {};
  const featured = grade.slug === 'middle-2' && subject.slug === 'english';
  const title = `${grade.label} ${subject.name} 과외`;
  const path = `/online-tutoring/by-grade/${grade.slug}/${subject.slug}`;
  const description = `${grade.label} ${subject.name} 과외 학습 안내. ${subject.gradeFocus.find((item) => item.grade === grade.stage)?.description ?? subject.description} 학생의 수준과 학교 진도에 맞춰 온라인 1:1 수업을 설계합니다.`;
  return { title, description, robots: featured ? undefined : { index: false, follow: true }, alternates: { canonical: featured ? path : `/online-tutoring/subjects/${subject.slug}` }, openGraph: { title: `${title} | 잇다과외`, description, url: `${siteUrl}${path}` } };
}
export default function Page({ params }: Props) {
  const grade = gradeOptions.find((item) => item.slug === params.grade);
  const subject = findTutoringSubject(params.subject);
  if (!grade || !subject) notFound();
  const focus = subject.gradeFocus.find((item) => item.grade === grade.stage)?.description ?? subject.description;
  const detail = grade.slug === 'middle-2' && subject.slug === 'english'
    ? '중2 영어는 교과서 본문을 외우는 데 그치지 않고 어휘·문법·구문이 변형 문제와 서술형 답안에 어떻게 연결되는지 점검해야 합니다. 시험 범위와 학교 프린트를 확인해 부족한 개념부터 다시 익힙니다.'
    : `${grade.label} 학습 진도와 최근 풀이를 확인해 ${subject.name}에서 필요한 개념과 유형을 정합니다. 실제 시험 범위는 학교 자료를 받은 뒤 반영합니다.`;
  return <OnlineDiscoveryGuide kind="grade" title={`${grade.label} ${subject.name} 과외`} place={grade.label} subject={subject} focus={focus} detail={detail} related={[{ title: `${subject.name} 온라인 과외`, href: `/online-tutoring/subjects/${subject.slug}` }, { title: '학년별 과외 찾기', href: '/online-tutoring/by-grade' }]} />;
}
