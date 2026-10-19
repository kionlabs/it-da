import { NextResponse } from 'next/server';

const ALLOWED_GRADES = new Set(['초등', '중등', '고등', '기타/N수생/성인']);
const ALLOWED_SUBJECTS = new Set([
  '국어',
  '영어',
  '수학',
  '사회',
  '과학',
  '역사',
  '논술',
  '코딩',
  '전과목',
]);

export interface LeadRequestBody {
  name: string;
  phone: string;
  grade: string;
  subjects: string[];
  address: string;
  school?: string;
  concern?: string;
  privacyConsent: boolean;
}

const cleanOptionalText = (value: unknown, maxLength: number) => {
  if (typeof value !== 'string') return null;
  const cleaned = value.trim();
  return cleaned ? cleaned.slice(0, maxLength) : null;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<LeadRequestBody>;
    const name = typeof body.name === 'string' ? body.name.trim() : '';
    const phone = typeof body.phone === 'string' ? body.phone.trim() : '';
    const phoneDigits = phone.replace(/\D/g, '');
    const grade = typeof body.grade === 'string' ? body.grade : '';
    const subjects = Array.isArray(body.subjects)
      ? [...new Set(body.subjects.filter((subject): subject is string => typeof subject === 'string'))]
      : [];
    const address = typeof body.address === 'string' ? body.address.trim() : '';

    if (name.length < 2 || name.length > 40) {
      return NextResponse.json(
        { success: false, message: '이름을 2~40자로 입력해 주세요.' },
        { status: 400 }
      );
    }
    if (phoneDigits.length < 9 || phoneDigits.length > 11) {
      return NextResponse.json(
        { success: false, message: '올바른 연락처를 입력해 주세요.' },
        { status: 400 }
      );
    }
    if (!ALLOWED_GRADES.has(grade)) {
      return NextResponse.json(
        { success: false, message: '학년을 선택해 주세요.' },
        { status: 400 }
      );
    }
    if (subjects.length === 0 || subjects.some((subject) => !ALLOWED_SUBJECTS.has(subject))) {
      return NextResponse.json(
        { success: false, message: '희망 과목을 한 개 이상 선택해 주세요.' },
        { status: 400 }
      );
    }
    if (subjects.includes('전과목') && subjects.length > 1) {
      return NextResponse.json(
        { success: false, message: '전과목은 다른 과목과 함께 선택할 수 없습니다.' },
        { status: 400 }
      );
    }
    if (address.length < 2 || address.length > 100) {
      return NextResponse.json(
        { success: false, message: '주소를 시·도와 동까지만 입력해 주세요.' },
        { status: 400 }
      );
    }
    if (body.privacyConsent !== true) {
      return NextResponse.json(
        { success: false, message: '개인정보 수집·이용 동의가 필요합니다.' },
        { status: 400 }
      );
    }

    const supabaseUrl = process.env.SUPABASE_URL;
    const supabasePublishableKey = process.env.SUPABASE_PUBLISHABLE_KEY;

    if (!supabaseUrl || !supabasePublishableKey) {
      console.error('[API Leads] Supabase environment variables are missing.');
      return NextResponse.json(
        { success: false, message: '상담 신청 시스템을 준비 중입니다. 잠시 후 다시 시도해 주세요.' },
        { status: 503 }
      );
    }

    const referrer = request.headers.get('referer');
    let sourcePath = '/';
    if (referrer) {
      try {
        sourcePath = new URL(referrer).pathname.slice(0, 200) || '/';
      } catch {
        sourcePath = '/';
      }
    }

    const supabaseResponse = await fetch(
      `${supabaseUrl.replace(/\/$/, '')}/rest/v1/consultation_requests`,
      {
        method: 'POST',
        headers: {
          apikey: supabasePublishableKey,
          'Content-Type': 'application/json',
          'Content-Profile': 'itda',
          Prefer: 'return=minimal',
        },
        body: JSON.stringify({
          name,
          phone,
          grade,
          subjects,
          address,
          school: cleanOptionalText(body.school, 100),
          concern: cleanOptionalText(body.concern, 1000),
          privacy_consent: true,
          source_path: sourcePath,
        }),
        cache: 'no-store',
      }
    );

    if (!supabaseResponse.ok) {
      const supabaseError = await supabaseResponse.text();
      console.error('[API Leads] Supabase insert failed.', {
        status: supabaseResponse.status,
        detail: supabaseError.slice(0, 500),
      });
      return NextResponse.json(
        { success: false, message: '상담 신청을 저장하지 못했습니다. 잠시 후 다시 시도해 주세요.' },
        { status: 502 }
      );
    }

    return NextResponse.json(
      { success: true, message: '무료 상담 신청이 접수되었습니다.' },
      { status: 201 }
    );
  } catch (error) {
    console.error(
      '[API Leads] Unexpected submission error.',
      error instanceof Error ? error.message : 'Unknown error'
    );
    return NextResponse.json(
      { success: false, message: '서버 내부 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
