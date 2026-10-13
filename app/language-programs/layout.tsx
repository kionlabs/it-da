import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '1:1 맞춤 언어 프로그램',
  description: '잇다과외의 영어·일본어·중국어 1:1 맞춤 언어 프로그램입니다. 실용 회화부터 학교 내신, 공인 어학시험까지 목표에 맞게 학습합니다.',
  alternates: {
    canonical: '/language-programs',
  },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: '/language-programs',
    siteName: '잇다과외',
    title: '1:1 맞춤 언어 프로그램 | 잇다과외',
    description: '영어·일본어·중국어 실용 회화부터 학교 내신과 공인 어학시험까지 지원하는 1:1 맞춤 언어 코칭입니다.',
  },
};

export default function LanguageProgramsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
