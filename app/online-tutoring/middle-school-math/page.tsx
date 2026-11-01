import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LeadForm from '@/components/LeadForm';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';

const path = '/online-tutoring/middle-school-math';
const siteUrl = 'https://itda-edu.vercel.app';

export const metadata: Metadata = {
  title: '중등 수학 과외 | 중1·중2·중3 온라인 1:1 수업',
  description: '중등 수학 과외를 찾는다면 문자와 식, 함수, 기하의 선수 개념부터 학교 시험 범위와 서술형 풀이까지 살펴보세요. 잇다과외의 중1·중2·중3 온라인 1:1 수업 안내입니다.',
  alternates: { canonical: path },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    siteName: '잇다과외',
    title: '중등 수학 과외 | 잇다과외',
    description: '중학교 수학의 빈틈을 찾고 학교 진도에 맞춰 준비하는 1:1 온라인 과외',
    url: `${siteUrl}${path}`,
  },
};

const gradeGuide = [
  { grade: '중1', title: '계산에서 식으로 넘어가는 시기', body: '정수·유리수 계산이 흔들리면 문자와 식에서도 실수가 이어집니다. 계산 과정과 식의 의미를 함께 점검하고, 풀이를 말로 설명할 수 있는지 확인합니다.' },
  { grade: '중2', title: '식과 함수의 연결을 익히는 시기', body: '일차함수와 연립방정식처럼 서로 연결되는 단원에서 막히는 지점을 찾습니다. 그래프·표·식을 오가며 개념을 적용하고, 학교 시험의 서술형 풀이 과정을 연습합니다.' },
  { grade: '중3', title: '고등 수학의 바탕을 다지는 시기', body: '제곱근·이차방정식·이차함수 등 새로운 개념을 이전 단원과 연결합니다. 현재 학교 시험을 준비하면서 고등 과정에서 다시 쓰일 개념도 빠뜨리지 않습니다.' },
];

const questions = [
  { question: '진도가 늦은 학생도 중등 수학 과외를 시작할 수 있나요?', answer: '네. 지금 배우는 단원을 무조건 반복하기보다 문제를 풀 때 필요한 이전 개념을 먼저 확인합니다. 시험까지 남은 기간과 학교 범위를 함께 보고 복습 순서를 정합니다.' },
  { question: '학교 시험 문제와 프린트도 수업에 반영하나요?', answer: '학생이 제공하는 교과서, 학교 프린트와 시험 범위를 확인해 학습 우선순위를 정합니다. 학교별 자료는 실제로 전달받은 내용을 기준으로 살펴봅니다.' },
  { question: '온라인 수업에서 풀이 과정은 어떻게 확인하나요?', answer: '실시간 1:1 수업 중 답뿐 아니라 식을 세우는 이유와 풀이 순서를 학생이 설명하도록 돕습니다. 틀린 문제는 개념 오류, 조건 누락, 계산 실수처럼 원인을 구분해 다시 확인합니다.' },
];

export default function MiddleSchoolMathPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <BreadcrumbJsonLd name="중등 수학 과외" path={path} />
      <main>
        <section className="bg-[#f7f0f3] px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <nav aria-label="현재 위치" className="flex flex-wrap items-center gap-2 text-sm font-medium text-slate-600">
              <Link href="/" className="hover:underline">홈</Link><ChevronRight className="h-4 w-4" aria-hidden="true" />
              <Link href="/online-tutoring" className="hover:underline">온라인 과외</Link><ChevronRight className="h-4 w-4" aria-hidden="true" />
              <span>중등 수학 과외</span>
            </nav>
            <div className="mt-12 max-w-4xl">
              <p className="inline-flex rounded-full border border-[#e8d6df] bg-white px-4 py-2 text-xs font-black tracking-[0.14em] text-[#765168]">MIDDLE SCHOOL MATH TUTORING</p>
              <h1 className="mt-6 text-balance text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl break-keep">중등 수학 과외,<br /><span className="text-[#765168]">막히는 개념부터 찾아갑니다</span></h1>
              <p className="mt-7 max-w-3xl text-pretty text-lg leading-9 text-slate-700 break-keep">중1·중2·중3 수학은 앞 단원의 이해가 다음 단원의 풀이로 이어집니다. 잇다과외는 학생의 현재 개념과 학교 진도를 함께 확인하고, 필요한 순서로 온라인 1:1 수업을 설계합니다.</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#lead-form" className="inline-flex items-center gap-2 rounded-full bg-[#765168] px-7 py-4 text-sm font-black text-white transition hover:bg-[#604254]">중등 수학 상담 신청 <ArrowRight className="h-4 w-4" aria-hidden="true" /></a>
                <a href="#grade-guide" className="inline-flex items-center rounded-full border border-[#ddcbd5] bg-white px-7 py-4 text-sm font-black text-slate-800">학년별 학습 방향 보기</a>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="diagnosis-title">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-black tracking-[0.16em] text-[#765168]">WHERE TO START</p>
            <h2 id="diagnosis-title" className="mt-4 text-balance text-3xl font-black sm:text-4xl break-keep">문제 수보다 틀린 이유를 먼저 봅니다</h2>
            <p className="mt-4 max-w-3xl leading-8 text-slate-600 break-keep">같은 오답이라도 원인이 다르면 수업의 시작점도 달라집니다. 상담 시 최근 시험지나 풀던 문제, 학교 진도와 학습 목표를 알려주시면 현재 필요한 학습을 함께 살펴볼 수 있습니다.</p>
            <div className="mt-9 grid gap-4 md:grid-cols-3">
              {[
                { title: '선수 개념의 빈틈', body: '현재 단원에서 막히는 문제를 따라가며 이전 학년·단원의 개념을 확인합니다.' },
                { title: '풀이 과정의 오류', body: '공식을 외웠는지보다 어떤 조건에서 그 방법을 선택했는지 살펴봅니다.' },
                { title: '학교 시험 준비', body: '학교별 시험 범위와 학생이 가져온 자료를 바탕으로 복습 우선순위를 정합니다.' },
              ].map((item) => <article key={item.title} className="rounded-3xl border border-[#eadde5] bg-[#fbf8f9] p-7"><CheckCircle2 className="h-7 w-7 text-[#765168]" aria-hidden="true" /><h3 className="mt-5 text-xl font-black">{item.title}</h3><p className="mt-3 leading-8 text-slate-600 break-keep">{item.body}</p></article>)}
            </div>
          </div>
        </section>

        <section id="grade-guide" className="scroll-mt-20 bg-[#faf4f0] px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="grade-guide-title">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-black tracking-[0.16em] text-[#765168]">BY GRADE</p>
            <h2 id="grade-guide-title" className="mt-4 text-balance text-3xl font-black sm:text-4xl break-keep">중1부터 중3까지, 달라지는 수학 공부</h2>
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {gradeGuide.map((item) => <article key={item.grade} className="rounded-3xl border border-[#eadde5] bg-white p-7 sm:p-8"><span className="text-sm font-black text-[#765168]">{item.grade} 수학</span><h3 className="mt-4 text-xl font-black break-keep">{item.title}</h3><p className="mt-4 leading-8 text-slate-600 break-keep">{item.body}</p></article>)}
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="lesson-title">
          <div className="mx-auto max-w-7xl">
            <h2 id="lesson-title" className="text-balance text-3xl font-black sm:text-4xl break-keep">1:1 온라인 수업은 이렇게 이어집니다</h2>
            <div className="mt-9 grid gap-4 md:grid-cols-3">
              {[
                { step: '01', title: '현재 상태 확인', body: '최근에 틀린 문제, 학습 자료, 학교 시험 범위로 우선 학습할 단원을 정합니다.' },
                { step: '02', title: '개념과 풀이 연결', body: '학생이 직접 풀이 이유를 설명하고 선생님과 함께 막힌 부분을 다시 풀어 봅니다.' },
                { step: '03', title: '오답 다시 점검', body: '오류 원인별로 복습하고 다음 수업에서 스스로 해결할 수 있는지 확인합니다.' },
              ].map((item) => <article key={item.step} className="rounded-3xl border border-slate-200 p-7"><span className="text-sm font-black text-[#765168]">STEP {item.step}</span><h3 className="mt-4 text-xl font-black">{item.title}</h3><p className="mt-3 leading-8 text-slate-600 break-keep">{item.body}</p></article>)}
            </div>
            <p className="mt-8 leading-8 text-slate-600 break-keep">수학 전체 학년의 수업 방식은 <Link href="/online-tutoring/subjects/math" className="font-bold text-[#765168] underline underline-offset-4">수학 온라인 과외 안내</Link>에서 확인할 수 있습니다.</p>
          </div>
        </section>

        <section className="bg-[#f8f7f8] px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="faq-title">
          <div className="mx-auto max-w-4xl">
            <h2 id="faq-title" className="text-balance text-3xl font-black sm:text-4xl break-keep">중등 수학 과외 자주 묻는 질문</h2>
            <div className="mt-8 space-y-4">
              {questions.map((item) => <article key={item.question} className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7"><h3 className="text-lg font-black leading-7 break-keep">Q. {item.question}</h3><p className="mt-3 leading-8 text-slate-600 break-keep">{item.answer}</p></article>)}
            </div>
          </div>
        </section>
        <LeadForm initialSubject="수학" />
      </main>
      <Footer />
    </div>
  );
}
