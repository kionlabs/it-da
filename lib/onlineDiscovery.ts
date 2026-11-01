export const gradeOptions = [
  { slug: 'elementary-4', label: '초4', stage: '초등' },
  { slug: 'elementary-5', label: '초5', stage: '초등' },
  { slug: 'elementary-6', label: '초6', stage: '초등' },
  { slug: 'middle-1', label: '중1', stage: '중등' },
  { slug: 'middle-2', label: '중2', stage: '중등' },
  { slug: 'middle-3', label: '중3', stage: '중등' },
  { slug: 'high-1', label: '고1', stage: '고등' },
  { slug: 'high-2', label: '고2', stage: '고등' },
  { slug: 'high-3', label: '고3', stage: '고등' },
] as const;

export const featuredSchool = {
  slug: 'suwan-high',
  name: '수완고',
  fullName: '수완고등학교',
  location: '광주광역시 광산구 수완동',
  // 학교별 실제 시험 범위와 수업 자료는 상담 시 학생이 제공한 자료로 확인합니다.
} as const;

export const featuredGuides = {
  grade: '/online-tutoring/by-grade/middle-2/english',
  region: '/online-tutoring/by-region/1165010600/math',
  school: '/online-tutoring/by-school/suwan-high/science',
} as const;
