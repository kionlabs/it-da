import type { Metadata } from 'next';
import OnlineDiscoveryHub from '@/components/OnlineDiscoveryHub';

export const metadata: Metadata = { title: '지역별 온라인 과외', description: '전국 읍·면·동을 찾아 학생의 학교 진도와 목표에 맞는 온라인 1:1 과외 방향을 확인하세요. 잠원동 수학 과외 학습 안내를 제공합니다.', alternates: { canonical: '/online-tutoring/by-region' } };
export default function Page() { return <OnlineDiscoveryHub mode="region" />; }
