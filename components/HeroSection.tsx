export default function HeroSection() {
  return (
    <section
      className="relative aspect-[2/3] w-full overflow-hidden bg-[#f7f2e9] md:aspect-video"
      aria-label="2학기 개인별 맞춤 학습 전략"
    >
      <h1 className="sr-only">2학기 골든타임을 놓치지 않는 개인별 맞춤 전략</h1>
      <picture className="absolute inset-0 block h-full w-full">
        <source media="(min-width: 768px)" srcSet="/images/hero-semester-desktop.png" />
        <img
          src="/images/hero-semester-mobile.png"
          alt="2학기, 성적의 방향이 바뀝니다. 골든타임을 놓치지 않는 개인별 맞춤 전략. 중간·기말 내신과 수행평가를 준비하고 약점을 보완하는 2학기 학습 안내"
          width="640"
          height="960"
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover object-center"
        />
      </picture>
    </section>
  );
}
