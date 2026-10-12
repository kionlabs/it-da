'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Play, Sparkles, Youtube, CheckCircle2 } from 'lucide-react';

const videoList = [
  {
    id: 'left',
    youtubeId: 'SHx7ExgqsEI',
    badge: '수업 프로세스',
    title: '[상상코칭] 상상코칭이 뭔가요? & 수업 프로세스',
    caption: '실제 1:1 맞춤 코칭 & 스마트 진단 수업 모음',
    thumbnail: 'https://img.youtube.com/vi/SHx7ExgqsEI/hqdefault.jpg',
  },
  {
    id: 'right',
    youtubeId: 'Tbl5XkprBf0',
    badge: '성공 후기',
    title: '[합격회원인터뷰] 성적 향상 및 대학 합격 사례',
    caption: '예스지구와 함께 성적 반등에 성공한 학생들의 이야기',
    thumbnail: 'https://img.youtube.com/vi/Tbl5XkprBf0/hqdefault.jpg',
  },
];

export default function VideoSection() {
  const [playingState, setPlayingState] = useState<{ [key: string]: boolean }>({});

  const handlePlay = (id: string) => {
    setPlayingState((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section className="relative bg-gradient-to-b from-purple-50/30 via-white to-white border-b border-slate-200/80 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-purple-50 border border-purple-200 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-purple-700 mb-4 shadow-sm">
            <span>PREMIUM REVIEWS</span>
          </div>
          <h2 className="text-balance text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-slate-900 leading-tight break-keep">
            <span className="inline-block">영상으로 만나는</span>{' '}
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">리얼 성장 스토리</span>
          </h2>
          <p className="mt-4 text-pretty text-slate-600 text-sm sm:text-base break-keep font-medium">
            단순한 과외를 넘어, 아이의 진짜 변화를 이끌어낸 생생한 후기와 코칭 노하우를 확인하세요.
          </p>
        </div>

        {/* YouTube Video 2-Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {videoList.map((video) => {
            const isPlaying = playingState[video.id];

            return (
              <div
                key={video.id}
                className="group rounded-3xl bg-white border border-slate-200/90 p-4 sm:p-5 shadow-xl shadow-purple-500/5 hover:shadow-2xl hover:border-purple-300 transition-all duration-300 flex flex-col"
              >
                {/* Video Container (Thumbnail or Embedded iFrame) */}
                <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-900 shadow-md">
                  {isPlaying ? (
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full border-0"
                    />
                  ) : (
                    <button
                      type="button"
                      onClick={() => handlePlay(video.id)}
                      className="relative w-full h-full group/btn block text-left focus:outline-none"
                    >
                      {/* YouTube High Quality Thumbnail */}
                      <Image
                        src={video.thumbnail}
                        alt={video.title}
                        fill
                        unoptimized
                        className="object-cover transition-transform duration-500 group-hover/btn:scale-105 opacity-90"
                      />

                      {/* Dark Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                      {/* Top Badge */}
                      <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-slate-900/80 border border-white/20 px-3 py-1 text-xs font-bold text-white backdrop-blur-md">
                        <Youtube className="h-3.5 w-3.5 text-red-500" />
                        <span>{video.badge}</span>
                      </div>

                      {/* Center Glowing Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-600/90 text-white shadow-xl shadow-purple-600/50 border border-purple-300/40 group-hover/btn:scale-110 group-hover/btn:bg-purple-500 transition-all duration-300">
                          <Play className="h-7 w-7 fill-white translate-x-0.5" />
                        </div>
                      </div>

                      {/* Bottom Overlay Hint */}
                      <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-semibold flex items-center gap-1">
                        <Sparkles className="h-3.5 w-3.5 text-amber-300 shrink-0" />
                        <span className="truncate">클릭하여 영상 바로 재생하기</span>
                      </div>
                    </button>
                  )}
                </div>

                {/* Card Text Footer */}
                <div className="mt-4 px-1 pb-1 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-balance text-base sm:text-lg font-extrabold text-slate-900 group-hover:text-purple-700 transition-colors line-clamp-1">
                      {video.title}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-slate-600 font-medium flex items-center gap-1.5">
                      <CheckCircle2 className="h-4 w-4 text-purple-600 shrink-0" />
                      <span>{video.caption}</span>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
