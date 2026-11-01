import type { Metadata } from 'next';
import OnlineDiscoveryHub from '@/components/OnlineDiscoveryHub';

export const metadata: Metadata = { title: '학교별 온라인 과외', description: '학교 교과서와 프린트, 시험 범위, 수행평가 자료를 바탕으로 설계하는 온라인 1:1 과외. 수완고 과학 과외 학습 안내를 살펴보세요.', alternates: { canonical: '/online-tutoring/by-school' } };
export default function Page() { return <OnlineDiscoveryHub mode="school" />; }
