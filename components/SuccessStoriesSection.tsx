'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Play, X, Youtube } from 'lucide-react';

type SuccessStory = {
  image: string;
  university: string;
  member: string;
  youtubeId: string;
};

const successStories: SuccessStory[] = [
  { image: '/images/success-story-01.png', university: '경희대학교', member: '전유빈 회원', youtubeId: '2fC5LOnc7Ss' },
  { image: '/images/success-story-02.png', university: '연세대학교', member: '배민준 회원', youtubeId: 'ZzeWUEl2OHs' },
  { image: '/images/success-story-03.png', university: '건국대학교', member: '염지원 회원', youtubeId: 'pLt0AFEppQ8' },
  { image: '/images/success-story-04.png', university: '중앙대학교', member: '제갈시은 회원', youtubeId: '5vdAODrj7e8' },
  { image: '/images/success-story-05.png', university: '서울대학교', member: '이서연 회원', youtubeId: 'oSvSalazA9k' },
  { image: '/images/success-story-06.png', university: '포항공과대학교', member: '안홍상 회원', youtubeId: '4BfB0nAME7Y' },
  { image: '/images/success-story-07.png', university: '한양대학교', member: '장동현 회원', youtubeId: 'MLEJs0LCFUU' },
  { image: '/images/success-story-08.png', university: '이화여자대학교', member: '이나운 회원', youtubeId: '3vzq2_NzF_s' },
  { image: '/images/success-story-11.png', university: '경희대학교', member: '김*윤 회원', youtubeId: 'Tbl5XkprBf0' },
  { image: '/images/success-story-12.png', university: '고려대학교', member: '구*아 회원', youtubeId: 'GXCWEab4GyY' },
  { image: '/images/success-story-13.png', university: '동국대학교 의과대학', member: '임*규 회원', youtubeId: '7ZIXydsdgSk' },
];

function StoryImage({ story }: { story: SuccessStory }) {
  return (
    <>
      <Image
        src={story.image}
        alt={`${story.university} 합격 ${story.member} 성공 후기`}
        fill
        sizes="(min-width: 1024px) 300px, (min-width: 640px) 280px, 240px"
        className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100" />
    </>
  );
}

export default function SuccessStoriesSection() {
  const [selectedStory, setSelectedStory] = useState<SuccessStory | null>(null);

  useEffect(() => {
    if (!selectedStory) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedStory(null);
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedStory]);

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
          <h2 className="text-balance break-keep text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            <span className="inline-block">결과로 증명하는</span>{' '}
            <span className="inline-block text-purple-700">성공후기</span>
          </h2>
        </div>
      </div>

      <div className="success-story-viewport relative mx-auto w-full max-w-[1600px] overflow-hidden px-4 sm:px-6">
        <div className="success-story-marquee flex w-max gap-6 py-2">
          {[...successStories, ...successStories].map((story, index) => {
            const isDuplicate = index >= successStories.length;

            return (
              <button
                key={`${story.image}-${index}`}
                type="button"
                onClick={() => setSelectedStory(story)}
                tabIndex={isDuplicate ? -1 : 0}
                aria-hidden={isDuplicate}
                aria-label={`${story.university} ${story.member} 합격 후기 영상 재생`}
                className="group relative aspect-[676/933] w-[240px] shrink-0 overflow-hidden rounded-3xl border border-slate-200 bg-white text-left shadow-lg shadow-purple-950/5 transition-[border-color,box-shadow] duration-300 hover:border-purple-300 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-4 sm:w-[280px] lg:w-[300px]"
              >
                <StoryImage story={story} />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/40 bg-purple-600/95 text-white shadow-2xl">
                    <Play className="h-7 w-7 translate-x-0.5 fill-white" />
                  </span>
                </div>
                <div className="absolute inset-x-4 bottom-4 flex items-center justify-center gap-2 rounded-2xl border border-white/30 bg-slate-900/85 px-4 py-3 text-sm font-bold text-white opacity-0 shadow-xl backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                  <Play className="h-4 w-4 fill-amber-300 text-amber-300" />
                  <span>후기 영상 재생</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {selectedStory && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedStory.university} ${selectedStory.member} 합격 후기 영상`}
        >
          <button
            type="button"
            className="absolute inset-0 cursor-default bg-slate-950/85 backdrop-blur-sm"
            onClick={() => setSelectedStory(null)}
            aria-label="영상 닫기"
          />
          <div className="relative z-10 w-full max-w-5xl overflow-hidden rounded-2xl border border-white/15 bg-slate-950 shadow-2xl sm:rounded-3xl">
            <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3 text-white sm:px-6 sm:py-4">
              <div className="min-w-0">
                <p className="truncate text-sm font-bold text-purple-300 sm:text-base">{selectedStory.university} 합격</p>
                <p className="truncate text-xs text-slate-300 sm:text-sm">{selectedStory.member} 성공 후기</p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedStory(null)}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
                aria-label="영상 닫기"
                autoFocus
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="aspect-video bg-black">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${selectedStory.youtubeId}?autoplay=1&rel=0`}
                title={`${selectedStory.university} ${selectedStory.member} 성공 후기`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
