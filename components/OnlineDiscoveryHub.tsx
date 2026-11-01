import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LeadForm from '@/components/LeadForm';
import OnlineDiscoverySearch from '@/components/OnlineDiscoverySearch';
import { featuredGuides } from '@/lib/onlineDiscovery';
import { tutoringSubjects } from '@/lib/tutoringSubjects';

type Mode = 'grade' | 'region' | 'school';
const content = {
  grade: {
    label: 'BY GRADE', title: '학년별 온라인 과외',
    intro: '같은 과목도 학년에 따라 필요한 공부가 다릅니다. 현재 학년과 과목을 선택해 기초, 학교 진도, 시험 대비의 우선순위를 살펴보세요.',
    guide: '중2 영어 과외', guidePath: featuredGuides.grade,
    points: [
      ['초등', '기본 개념과 공부 습관을 함께 다집니다. 이해한 내용을 자기 말로 설명하는 연습이 중요합니다.'],
      ['중등', '학교별 교과서와 수업 자료를 연결하고 첫 내신부터 서술형 답안까지 준비합니다.'],
      ['고등', '학교 시험 범위와 선택 과목, 모의고사 및 입시 목표에 따라 학습 비중을 조정합니다.'],
    ],
  },
  region: {
    label: 'BY REGION', title: '지역별 온라인 과외',
    intro: '온라인 수업은 지역에 관계없이 진행할 수 있습니다. 학생의 거주 지역을 찾고, 학교 진도와 학습 목표에 맞는 1:1 수업 방향을 확인하세요.',
    guide: '잠원동 수학 과외', guidePath: featuredGuides.region,
    points: [
      ['학교 범위 확인', '거주지만으로 출제 경향을 단정하지 않습니다. 학생이 재학 중인 학교와 실제 시험 범위를 먼저 확인합니다.'],
      ['온라인 1:1 연결', '화상 수업에서 풀이 화면과 학습 자료를 공유하며 학생의 이해와 오답 과정을 살핍니다.'],
      ['수업 가능 여부', '지역별 방문 수업과 제휴학원 운영 여부는 상담을 통해 개별 확인합니다.'],
    ],
  },
  school: {
    label: 'BY SCHOOL', title: '학교별 온라인 과외',
    intro: '학교 이름만 같다고 시험 문제가 늘 같은 것은 아닙니다. 학생이 제공하는 교과서, 프린트, 수행평가 안내와 시험 범위를 확인해 수업 계획을 세웁니다.',
    guide: '수완고 과학 과외', guidePath: featuredGuides.school,
    points: [
      ['자료 확인', '교과서·부교재·학교 프린트와 평가 안내를 학생에게 받아 실제 학습 범위를 확인합니다.'],
      ['개념 진단', '문제 정답뿐 아니라 실험 원리, 자료 해석, 서술형 설명 중 어느 부분에서 막히는지 살핍니다.'],
      ['시험 전 복습', '남은 기간에 맞춰 개념 복습, 적용 문제, 오답 재풀이의 순서를 정합니다.'],
    ],
  },
} as const;

export default function OnlineDiscoveryHub({ mode }: { mode: Mode }) {
  const item = content[mode];
  return <div className="min-h-screen bg-white text-slate-900">
    <Navbar />
    <main>
      <section className="bg-gradient-to-br from-[#F9EEE8] via-white to-[#F3E8EC] px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <nav aria-label="현재 위치" className="flex items-center gap-2 text-sm text-slate-600"><Link href="/">홈</Link><ChevronRight className="h-4 w-4" /><Link href="/online-tutoring">온라인 과외</Link><ChevronRight className="h-4 w-4" /><span>{item.title}</span></nav>
          <div className="mt-14 max-w-4xl">
            <p className="text-xs font-black tracking-[0.18em] text-purple-700">{item.label}</p>
            <h1 className="mt-4 text-balance text-4xl font-black tracking-tight text-slate-950 sm:text-6xl">{item.title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-9 text-slate-700 break-keep">{item.intro}</p>
            <OnlineDiscoverySearch mode={mode} />
          </div>
        </div>
      </section>
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-black sm:text-4xl">{mode === 'grade' ? '학습 단계별로 달라지는 초점' : mode === 'region' ? '지역을 찾은 뒤 확인할 내용' : '학교 자료를 반영하는 순서'}</h2>
          <div className="mt-9 grid gap-5 md:grid-cols-3">{item.points.map(([title, copy], index) => <article key={title} className="rounded-3xl border border-purple-200 bg-purple-50/50 p-7"><span className="text-sm font-black text-purple-700">0{index + 1}</span><h3 className="mt-5 text-xl font-black">{title}</h3><p className="mt-3 leading-8 text-slate-600 break-keep">{copy}</p></article>)}</div>
        </div>
      </section>
      <section className="bg-[#F9EEE8] px-4 py-16 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><p className="text-sm font-black text-purple-700">학습 안내 예시</p><h2 className="mt-3 text-3xl font-black">{item.guide}</h2><p className="mt-4 max-w-2xl leading-8 text-slate-700">학생의 현재 수준과 실제 학교 자료를 확인한 뒤 수업 계획을 조정하는 과정을 살펴보세요.</p><Link href={item.guidePath} className="mt-7 inline-flex items-center gap-2 rounded-full bg-purple-700 px-6 py-3 text-sm font-black text-white hover:bg-purple-800">안내 보기 <ArrowRight className="h-4 w-4" /></Link></div></section>
      <section className="px-4 py-16 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><h2 className="text-2xl font-black">과목별 수업도 살펴보세요</h2><div className="mt-6 flex flex-wrap gap-2">{tutoringSubjects.map((subject) => <Link key={subject.slug} href={`/online-tutoring/subjects/${subject.slug}`} className="rounded-full border border-slate-200 px-4 py-2 text-sm font-bold hover:border-purple-400 hover:bg-purple-50">{subject.name} 온라인 과외</Link>)}</div></div></section>
      <LeadForm />
    </main>
    <Footer />
  </div>;
}
