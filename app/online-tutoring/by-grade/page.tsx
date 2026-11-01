import type { Metadata } from 'next';
import OnlineDiscoveryHub from '@/components/OnlineDiscoveryHub';

export const metadata: Metadata = { title: '학년별 온라인 과외', description: '초4부터 고3까지 학년과 과목에 맞는 온라인 1:1 과외 학습 방향을 살펴보세요. 중2 영어 과외 학습 안내도 확인할 수 있습니다.', alternates: { canonical: '/online-tutoring/by-grade' } };
export default function Page() { return <OnlineDiscoveryHub mode="grade" />; }
