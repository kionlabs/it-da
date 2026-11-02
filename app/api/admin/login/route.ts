import { NextResponse } from 'next/server';
import { accessCookieName, cookieOptions, getSupabaseConfig, isAdminToken, refreshCookieName, sameOrigin } from '@/lib/adminAuth';

export async function POST(request: Request) {
  if (!sameOrigin(request)) return NextResponse.json({ message: '요청을 확인할 수 없습니다.' }, { status: 403 });
  const config = getSupabaseConfig();
  if (!config) return NextResponse.json({ message: '관리자 로그인을 준비 중입니다.' }, { status: 503 });

  const body = await request.json().catch(() => ({}));
  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const password = typeof body.password === 'string' ? body.password : '';
  if (!email || !password || email.length > 254 || password.length > 1024) {
    return NextResponse.json({ message: '이메일과 비밀번호를 확인해 주세요.' }, { status: 400 });
  }

  try {
    const auth = await fetch(`${config.url}/auth/v1/token?grant_type=password`, {
      method: 'POST',
      headers: { apikey: config.key, 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
      cache: 'no-store',
    });
    if (!auth.ok) {
      const failure = await auth.json().catch(() => ({}));
      const message = failure.error_code === 'email_not_confirmed'
        ? '이메일 인증을 완료한 뒤 다시 로그인해 주세요.'
        : '이메일 또는 비밀번호가 올바르지 않습니다. 신규 계정은 이메일 인증 여부도 확인해 주세요.';
      return NextResponse.json({ message }, { status: 401 });
    }
    const session = await auth.json();
    if (!session.access_token || !session.refresh_token || !(await isAdminToken(session.access_token))) {
      return NextResponse.json({ message: '관리자 권한이 없습니다.' }, { status: 403 });
    }
    const response = NextResponse.json({ authenticated: true });
    response.cookies.set(accessCookieName, session.access_token, { ...cookieOptions, maxAge: Math.max(60, session.expires_in || 3600) });
    response.cookies.set(refreshCookieName, session.refresh_token, { ...cookieOptions, maxAge: 60 * 60 * 24 * 7 });
    response.headers.set('Cache-Control', 'no-store');
    return response;
  } catch {
    return NextResponse.json({ message: '로그인 서비스에 연결하지 못했습니다.' }, { status: 502 });
  }
}
