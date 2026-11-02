import { NextResponse } from 'next/server';
import { accessCookieName, getAccessToken, getSupabaseConfig, refreshCookieName, sameOrigin } from '@/lib/adminAuth';

export async function POST(request: Request) {
  if (!sameOrigin(request)) return NextResponse.json({ message: '요청을 확인할 수 없습니다.' }, { status: 403 });
  const config = getSupabaseConfig();
  const token = getAccessToken();
  if (config && token) {
    await fetch(`${config.url}/auth/v1/logout?scope=local`, {
      method: 'POST',
      headers: { apikey: config.key, Authorization: `Bearer ${token}` },
      cache: 'no-store',
    }).catch(() => undefined);
  }
  const response = NextResponse.json({ authenticated: false });
  response.cookies.delete(accessCookieName);
  response.cookies.delete(refreshCookieName);
  response.headers.set('Cache-Control', 'no-store');
  return response;
}
