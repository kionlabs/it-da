import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

const processSteps = [
  {
    step: 'STEP 1',
    title: '학교별 기출 및 성향 분석',
    image: '/images/core-process-1.jpg',
    imageAlt: '학생과 학부모가 선생님과 함께 학습 진단 결과를 살펴보는 모습',
    points: [
      '최근 3개년 학교별 출제 경향, 교과서 부교재, 프린트물 완벽 분석',
      '학교별 맞춤형 내신 대비 전략 수립',
    ],
  },
  {
    step: 'STEP 2',
    title: '1:1 정밀 진단 테스트',
    image: '/images/core-process-2.jpg',
    imageAlt: '선생님이 태블릿의 학습 분석 데이터를 설명하는 모습',
    points: [
      '학생의 현재 학습 상태, 취약 개념, 학습 습관 입체 진단',
      '진도 나가기에 급급한 수업이 아닌, 구멍 난 개념 메우기',
    ],
  },
  {
    step: 'STEP 3',
    title: '맞춤형 커리큘럼 및 로드맵 설계',
    image: '/images/core-process-3.jpg',
    imageAlt: '학부모와 선생님이 학생의 맞춤 학습 로드맵을 상담하는 모습',
    points: [
      '학생의 레벨과 학교 시험 난이도에 맞춘 최적의 교재 및 진도 선정',
      '주간·월간 목표 설정으로 성취감 고취',
    ],
  },
  {
    step: 'STEP 4',
    title: '밀착 피드백 및 오답 관리',
    image: '/images/core-process-4.jpg',
    imageAlt: '선생님이 학생의 문제 풀이와 오답을 밀착 지도하는 모습',
    points: [
      '매 수업 후 학부모 안심 리포트 전송 (학습 내용 및 태도 공유)',
      '틀린 문제는 끝까지 내 것으로 만드는 철저한 오답 노트 시스템',
    ],
  },
];

export default function CoreProcessSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 md:py-32">
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-purple-100/60 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-4xl text-center md:mb-20">
          <div className="mb-4 inline-flex items-center rounded-full border border-purple-200 bg-purple-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-purple-700 shadow-sm">
            CORE PROCESS
          </div>
          <h2 className="text-balance text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl break-keep">
            <span className="inline-block">핵심 프로세스:</span>{' '}
            <span className="inline-block text-purple-700">4단계 맞춤 학습 시스템</span>
          </h2>
          <p className="mt-5 text-balance text-lg font-semibold leading-relaxed text-slate-600 sm:text-xl break-keep">
            체계적인 4단계 프로세스로 실력의 차이를 만듭니다.
          </p>
        </div>

        <div className="space-y-14 md:space-y-20">
          {processSteps.map((item, index) => {
            const imageOnRight = index % 2 === 1;

            return (
              <article
                key={item.step}
                className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16"
              >
                <div
                  className={`relative min-h-64 overflow-hidden rounded-3xl border border-slate-200 shadow-xl sm:min-h-80 lg:min-h-[400px] ${
                    imageOnRight ? 'lg:order-2' : ''
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-transparent" />
                </div>

                <div className={`min-w-0 ${imageOnRight ? 'lg:order-1' : ''}`}>
                  <div className="mb-5 flex items-center gap-4">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-purple-700 text-lg font-black text-white shadow-lg shadow-purple-700/20">
                      {index + 1}
                    </span>
                    <span className="text-sm font-black tracking-[0.18em] text-purple-600">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="text-balance text-2xl font-black leading-snug tracking-tight text-slate-900 sm:text-3xl break-keep">
                    {item.title}
                  </h3>

                  <ul className="mt-7 space-y-4">
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-pretty text-base font-medium leading-relaxed text-slate-700 sm:text-lg break-keep"
                      >
                        <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-purple-600" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
