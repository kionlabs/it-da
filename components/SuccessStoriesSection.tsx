import Image from 'next/image';
import { Clock3, ExternalLink, Play, Youtube } from 'lucide-react';

type SuccessStory = {
  image: string;
  university: string;
  member: string;
  url?: string;
};

const successStories: SuccessStory[] = [
  {
    image: '/images/success-story-01.png',
    university: '경희대학교',
    member: '전유빈 회원',
    url: 'https://youtu.be/2fC5LOnc7Ss?si=oRN6zINyNbU30WSv',
  },
  {
    image: '/images/success-story-02.png',
    university: '연세대학교',
    member: '배민준 회원',
    url: 'https://youtu.be/ZzeWUEl2OHs?si=NuETGGQDyl2-aq8h',
  },
  {
    image: '/images/success-story-03.png',
    university: '건국대학교',
    member: '염지원 회원',
    url: 'https://youtu.be/pLt0AFEppQ8?si=iEKycexlJrCFnewl',
  },
  {
    image: '/images/success-story-04.png',
    university: '중앙대학교',
    member: '제갈시은 회원',
    url: 'https://youtu.be/5vdAODrj7e8?si=A9htOP4MnGWXoHJn',
  },
  {
    image: '/images/success-story-05.png',
    university: '서울대학교',
    member: '이서연 회원',
    url: 'https://youtu.be/oSvSalazA9k?si=e_1b7nH9sqKrxDq3',
  },
  {
    image: '/images/success-story-06.png',
    university: '포항공과대학교',
    member: '안홍상 회원',
    url: 'https://youtu.be/4BfB0nAME7Y?si=ectA6uVTep1BVKUa',
  },
  {
    image: '/images/success-story-07.png',
    university: '한양대학교',
    member: '장동현 회원',
    url: 'https://youtu.be/MLEJs0LCFUU?si=ZvEwryCsgMLVLQsA',
  },
  {
    image: '/images/success-story-08.png',
    university: '이화여자대학교',
    member: '이나운 회원',
    url: 'https://youtu.be/3vzq2_NzF_s?si=Ptxc9k8zzuHogCSm',
  },
  {
    image: '/images/success-story-11.png',
    university: '경희대학교',
    member: '김*윤 회원',
    url: 'https://youtu.be/Tbl5XkprBf0?si=PuDsS104h408VonG',
  },
  {
    image: '/images/success-story-12.png',
    university: '고려대학교',
    member: '구*아 회원',
    url: 'https://youtu.be/GXCWEab4GyY?si=FLE6y85l_JzXSTTv',
  },
  {
    image: '/images/success-story-13.png',
    university: '동국대학교 의과대학',
    member: '임*규 회원',
    url: 'https://youtu.be/7ZIXydsdgSk?si=aagBcRQ8g-FHvwyM',
  },
];

function StoryImage({ story }: { story: SuccessStory }) {
  return (
    <>
      <Image
        src={story.image}
        alt={`${story.university} 합격 ${story.member} 성공 후기`}
        fill
        sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </>
  );
}

export default function SuccessStoriesSection() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200/80 bg-[#F8FAFC] py-20 md:py-28">
      <div
        aria-hidden="true"
        className="absolute right-0 top-0 h-80 w-80 translate-x-1/3 -translate-y-1/3 rounded-full bg-purple-200/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-purple-200 bg-purple-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-purple-700 shadow-sm">
            <Youtube className="h-3.5 w-3.5" />
            <span>SUCCESS STORIES</span>
          </div>
          <h2 className="text-balance text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl break-keep">
            <span className="inline-block">결과로 증명하는</span>{' '}
            <span className="inline-block text-purple-700">성공후기</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {successStories.map((story) => {
            const cardClassName =
              'group relative aspect-[676/933] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg shadow-purple-950/5 transition-all duration-300 hover:-translate-y-1 hover:border-purple-300 hover:shadow-2xl';

            if (!story.url) {
              return (
                <div
                  key={story.image}
                  className={`${cardClassName} cursor-not-allowed`}
                  aria-label={`${story.university} ${story.member} 후기 영상 링크 확인 중`}
                >
                  <StoryImage story={story} />
                  <div className="absolute inset-x-4 bottom-4 flex items-center justify-center gap-2 rounded-2xl border border-white/30 bg-slate-900/85 px-4 py-3 text-sm font-bold text-white shadow-xl backdrop-blur-md">
                    <Clock3 className="h-4 w-4 text-amber-300" />
                    <span>영상 링크 확인 중</span>
                  </div>
                </div>
              );
            }

            return (
              <a
                key={story.image}
                href={story.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${cardClassName} focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-4`}
                aria-label={`${story.university} ${story.member} 합격 후기 영상 보기`}
              >
                <StoryImage story={story} />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus:opacity-100">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/40 bg-purple-600/95 text-white shadow-2xl">
                    <Play className="h-7 w-7 translate-x-0.5 fill-white" />
                  </span>
                </div>
                <div className="absolute inset-x-4 bottom-4 flex items-center justify-center gap-2 rounded-2xl border border-white/30 bg-slate-900/85 px-4 py-3 text-sm font-bold text-white opacity-0 shadow-xl backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100 group-focus:opacity-100">
                  <ExternalLink className="h-4 w-4 text-amber-300" />
                  <span>YouTube에서 후기 보기</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
