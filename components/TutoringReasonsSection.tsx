import { BrainCircuit, HeartHandshake, UserRoundSearch } from 'lucide-react';

const reasons = [
  {
    number: '01',
    icon: UserRoundSearch,
    title: '교수법 전문가의 다각적 분석',
    paragraphs: [
      '교육학적 관점과 다년간의 지도 경험을 바탕으로 선생님의 교수 스타일과 성향을 입체적으로 분석합니다.',
      '이 데이터를 기반으로 학생의 학습 심리와 성향에 최적화된 맞춤형 매칭을 실행합니다.',
    ],
  },
  {
    number: '02',
    icon: BrainCircuit,
    title: '과학적 진단 기반 개인별 로드맵',
    paragraphs: [
      '공신력 있는 진단 도구를 활용하여 학생의 현재 실력뿐만 아니라 잠재력과 취약 영역을 정밀하게 파악합니다.',
      '이를 토대로 과목별 핵심 개념부터 심화 과정까지 연결되는 정교한 단계별 학습 로드맵을 설계합니다.',
    ],
  },
  {
    number: '03',
    icon: HeartHandshake,
    title: '성적 향상 그 이상의 책임 지도',
    paragraphs: [
      '단순한 성적 상승을 넘어 학생의 올바른 학습 태도와 메타인지 능력 향상을 목표로 합니다.',
      '전문 멘토가 학습 전 과정을 밀착 관리하며, 학생의 정서적 안정과 동기 부여를 위한 성장 파트너로서 책임을 다합니다.',
    ],
  },
];

export default function TutoringReasonsSection() {
  return (
    <section id="tutoring-reasons" className="scroll-mt-16 bg-[#f5f3ff] px-4 py-20 sm:px-6 md:py-28 lg:px-8" aria-labelledby="tutoring-reasons-title">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-black tracking-[0.18em] text-purple-700 sm:text-sm">WHY IT-DA TUTORING</p>
          <h2 id="tutoring-reasons-title" className="mt-4 text-balance text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl md:text-5xl break-keep">
            1:1 맞춤 과외를 선택하는<br className="hidden sm:block" /> 3가지 이유
          </h2>
        </div>

        <div className="mt-12 grid gap-5 lg:mt-16 lg:grid-cols-3 lg:gap-6">
          {reasons.map(({ number, icon: Icon, title, paragraphs }) => (
            <article key={number} className="relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-purple-100 bg-white p-7 shadow-lg shadow-purple-900/5 sm:p-9">
              <span aria-hidden="true" className="absolute -right-2 -top-7 text-8xl font-black text-purple-900/[0.04]">{number}</span>
              <div className="relative flex items-center justify-between">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100 text-purple-700">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </span>
                <span className="text-sm font-black tracking-[0.15em] text-purple-600">REASON {number}</span>
              </div>
              <h3 className="relative mt-8 text-balance text-2xl font-black leading-snug text-slate-950 break-keep">{title}</h3>
              <div className="relative mt-5 space-y-4 text-pretty text-base font-medium leading-8 text-slate-600 break-keep">
                {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
