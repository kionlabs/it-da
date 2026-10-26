'use client';

import React, { useState } from 'react';
import {
  AlertCircle,
  BookOpen,
  CheckCircle2,
  GraduationCap,
  Loader2,
  MapPin,
  MessageSquare,
  Phone,
  School,
  Send,
  ShieldCheck,
  Sparkles,
  User,
} from 'lucide-react';

interface FormData {
  name: string;
  phone: string;
  grade: string;
  subjects: string[];
  address: string;
  school: string;
  concern: string;
  privacyConsent: boolean;
}

const subjectOptions = ['국어', '영어', '수학', '사회', '과학', '역사', '논술', '코딩', '전과목'];

const quickTags = [
  '성적이 정체되어 있어요',
  '자기주도학습 습관이 안 잡혀요',
  '올바른 공부법을 모르겠어요',
  '1:1 맞춤 관리가 시급해요',
];

export default function LeadForm({ initialSubject }: { initialSubject?: string } = {}) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    grade: '중등',
    subjects: initialSubject ? [initialSubject] : [],
    address: '',
    school: '',
    concern: '',
    privacyConsent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage(null);
  };

  const handleTagClick = (tagText: string) => {
    setFormData((prev) => {
      if (!prev.concern.trim()) {
        return { ...prev, concern: tagText };
      }
      if (prev.concern.includes(tagText)) {
        return prev;
      }
      return { ...prev, concern: `${prev.concern}, ${tagText}` };
    });
    if (errorMessage) setErrorMessage(null);
  };

  const handleSubjectClick = (subject: string) => {
    setFormData((prev) => {
      if (subject === '전과목') {
        return { ...prev, subjects: prev.subjects.includes('전과목') ? [] : ['전과목'] };
      }

      const subjectsWithoutAll = prev.subjects.filter((item) => item !== '전과목');
      const subjects = subjectsWithoutAll.includes(subject)
        ? subjectsWithoutAll.filter((item) => item !== subject)
        : [...subjectsWithoutAll, subject];
      return { ...prev, subjects };
    });
    if (errorMessage) setErrorMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic Validation
    if (!formData.name.trim()) {
      setErrorMessage('이름을 입력해 주세요.');
      return;
    }
    if (!formData.phone.trim()) {
      setErrorMessage('연락처를 입력해 주세요.');
      return;
    }
    if (formData.subjects.length === 0) {
      setErrorMessage('희망 과목을 한 개 이상 선택해 주세요.');
      return;
    }
    if (!formData.address.trim()) {
      setErrorMessage('주소를 시·도와 동까지만 입력해 주세요.');
      return;
    }
    if (!formData.privacyConsent) {
      setErrorMessage('개인정보 수집·이용에 동의해 주세요.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || '상담 신청 중 오류가 발생했습니다.');
      }

      setSubmitted(true);
    } catch (err: unknown) {
      console.error('Lead submission error:', err);
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage('상담 신청 처리 중 문제가 발생했습니다. 잠시 후 다시 시도해 주세요.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="lead-form" className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-xl">
        {/* Section Title */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-purple-50 border border-purple-200 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-purple-700 mb-4 shadow-sm">
            <span>Free Consultation</span>
          </div>
          <h2 className="text-balance text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl break-keep">
            <span className="sm:inline-block">우리 아이를 위한 맞춤형 과외,</span>{' '}
            <span className="sm:inline-block">지금 상담받아보세요.</span>
          </h2>
          <p className="mt-3 mx-auto max-w-3xl text-pretty text-slate-600 text-sm sm:text-base leading-relaxed break-keep font-medium">
            학교별 맞춤 커리큘럼과 상세한 수업 방식이 궁금하시다면 언제든 편하게 문의해 주세요. 아이의 현재 상황에 맞는 최적의 길을 안내해 드립니다.
          </p>
        </div>

        {/* Form Container Card */}
        <div className="relative rounded-3xl border border-slate-200 bg-white p-8 md:p-12 shadow-xl transition-all">
          {submitted ? (
            /* Success Message Card (Emerald Light Theme) */
            <div className="py-8 text-center animate-fadeIn bg-emerald-50/50 rounded-2xl border border-emerald-200 p-6">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 border-2 border-emerald-300 text-emerald-600 shadow-sm">
                <CheckCircle2 className="h-10 w-10 animate-bounce" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                무료 상담 신청이 완료되었습니다!
              </h3>
              <p className="text-slate-600 text-sm sm:text-base max-w-md mx-auto leading-relaxed mb-6 break-keep">
                <span className="text-purple-700 font-bold">{formData.name}</span> 학부모님/학생의 소중한 정보가 접수되었습니다.<br />
                AI 분석 시스템이 최적의 코치 후보를 정리하여 빠르게 안내해 드리겠습니다.
              </p>
              <div className="inline-flex items-center gap-2 rounded-xl bg-emerald-100 border border-emerald-300 px-4 py-2.5 text-xs text-emerald-800 font-semibold">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                <span>접수 번호: #{Math.floor(100000 + Math.random() * 900000)}</span>
              </div>
            </div>
          ) : (
            /* Main Input Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMessage && (
                <div className="flex items-center gap-2 rounded-xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-700">
                  <AlertCircle className="h-5 w-5 shrink-0 text-rose-600" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* 1. 이름 */}
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-slate-800 mb-2">
                  이름 <span className="text-purple-600">*</span>
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-purple-500">
                    <User className="h-4 w-4" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="홍길동"
                    maxLength={40}
                    autoComplete="name"
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 pl-10 pr-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition focus:bg-white focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>

              {/* 2. 연락처 */}
              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-slate-800 mb-2">
                  연락처 <span className="text-purple-600">*</span>
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-purple-500">
                    <Phone className="h-4 w-4" />
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="010-1234-5678"
                    inputMode="tel"
                    autoComplete="tel"
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 pl-10 pr-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition focus:bg-white focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>

              {/* 3. 학년 */}
              <div>
                <label htmlFor="grade" className="block text-sm font-bold text-slate-800 mb-2">
                  학년 <span className="text-purple-600">*</span>
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-purple-500">
                    <GraduationCap className="h-4 w-4" />
                  </div>
                  <select
                    id="grade"
                    name="grade"
                    value={formData.grade}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 pl-10 pr-4 py-3 text-sm text-slate-900 transition focus:bg-white focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none"
                  >
                    <option value="초등">초등학생 (4~6학년)</option>
                    <option value="중등">중학생 (1~3학년)</option>
                    <option value="고등">고등학생 (1~3학년)</option>
                    <option value="기타/N수생/성인">기타 / N수생 / 성인</option>
                  </select>
                </div>
              </div>

              {/* 4. 희망 과목 */}
              <fieldset>
                <legend className="mb-2 flex items-center gap-2 text-sm font-bold text-slate-800">
                  <BookOpen className="h-4 w-4 text-purple-500" />
                  희망 과목 <span className="text-purple-600">*</span>
                  <span className="text-xs font-normal text-slate-500">(다중 선택)</span>
                </legend>
                <div className="grid grid-cols-3 gap-2 sm:grid-cols-5" aria-label="희망 과목 선택">
                  {subjectOptions.map((subject) => {
                    const isSelected = formData.subjects.includes(subject);
                    return (
                      <button
                        key={subject}
                        type="button"
                        aria-pressed={isSelected}
                        onClick={() => handleSubjectClick(subject)}
                        className={`rounded-xl border px-2 py-2.5 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-1 ${
                          isSelected
                            ? 'border-purple-600 bg-purple-600 text-white shadow-sm'
                            : 'border-slate-300 bg-slate-50 text-slate-700 hover:border-purple-300 hover:bg-purple-50'
                        }`}
                      >
                        {subject}
                      </button>
                    );
                  })}
                </div>
              </fieldset>

              {/* 5. 주소 */}
              <div>
                <label htmlFor="address" className="block text-sm font-bold text-slate-800 mb-2">
                  주소 <span className="text-purple-600">*</span>
                  <span className="ml-1 text-xs font-normal text-slate-500">(시·도, 동까지만 입력)</span>
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-purple-500">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="예: 서울특별시 강남구 대치동"
                    maxLength={100}
                    autoComplete="address-level2"
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 pl-10 pr-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition focus:bg-white focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>

              {/* 6. 학교 */}
              <div>
                <label htmlFor="school" className="block text-sm font-bold text-slate-800 mb-2">
                  학교 <span className="text-xs font-normal text-slate-500">(선택)</span>
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-purple-500">
                    <School className="h-4 w-4" />
                  </div>
                  <input
                    type="text"
                    id="school"
                    name="school"
                    value={formData.school}
                    onChange={handleChange}
                    placeholder="재학 중인 학교명을 입력해 주세요."
                    maxLength={100}
                    autoComplete="organization"
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 pl-10 pr-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition focus:bg-white focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>

              {/* 7. 가장 시급한 고민 (Textarea & Quick Tags) */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="concern" className="block text-sm font-bold text-slate-800">
                    가장 시급한 학습 고민 <span className="text-slate-500 text-xs font-normal">(선택)</span>
                  </label>
                  <span className="text-xs text-purple-600 font-bold flex items-center gap-1">
                    <Sparkles className="h-3.5 w-3.5 text-purple-600" />
                    <span>원터치 태그 선택</span>
                  </span>
                </div>

                {/* Quick Select Chips */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {quickTags.map((tag, idx) => {
                    const isSelected = formData.concern.includes(tag);
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handleTagClick(tag)}
                        className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? 'bg-purple-600 text-white border-purple-600 shadow-sm'
                            : 'bg-purple-50/80 text-purple-700 border-purple-200/90 hover:bg-purple-100 hover:border-purple-300'
                        }`}
                      >
                        + {tag}
                      </button>
                    );
                  })}
                </div>

                <div className="relative">
                  <div className="pointer-events-none absolute top-3.5 left-3.5 text-purple-500">
                    <MessageSquare className="h-4 w-4" />
                  </div>
                  <textarea
                    id="concern"
                    name="concern"
                    rows={3}
                    value={formData.concern}
                    onChange={handleChange}
                    placeholder="예: 수학 성적이 오르지 않고 자기주도 학습 습관이 잡히지 않아요."
                    maxLength={1000}
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 pl-10 pr-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition focus:bg-white focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>

              {/* 8. 개인정보 수집·이용 동의 */}
              <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-purple-200 hover:bg-purple-50/40">
                <input
                  type="checkbox"
                  name="privacyConsent"
                  checked={formData.privacyConsent}
                  onChange={(event) => {
                    setFormData((prev) => ({ ...prev, privacyConsent: event.target.checked }));
                    if (errorMessage) setErrorMessage(null);
                  }}
                  required
                  className="mt-0.5 h-4 w-4 rounded border-slate-300 text-purple-600 focus:ring-purple-500"
                />
                <span className="min-w-0">
                  <span className="flex items-center gap-1.5 text-sm font-bold text-slate-800">
                    <ShieldCheck className="h-4 w-4 text-purple-600" />
                    개인정보 수집·이용 동의 <span className="text-purple-600">*</span>
                  </span>
                  <span className="mt-1 block text-xs leading-relaxed text-slate-500 break-keep">
                    상담 안내를 위해 이름, 연락처, 학년, 희망 과목, 주소 및 선택 입력 정보를 수집·이용하는 데 동의합니다.
                  </span>
                </span>
              </label>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-4 text-base font-extrabold text-white shadow-md hover:opacity-95 transition-all focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed mt-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin text-white" />
                    <span>상담 신청 처리 중...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 text-white" />
                    <span>지금 무료 시범수업 신청하기</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
