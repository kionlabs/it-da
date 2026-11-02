import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { accessCookieName, cookieOptions, getAccessToken, getSupabaseConfig, isAdminToken, refreshCookieName } from '@/lib/adminAuth';

export async function GET() {
  const response = NextResponse.json({ authenticated: false }, { status: 401 });
  response.headers.set('Cache-Control', 'private, no-store');
  const accessToken = getAccessToken();
  if (accessToken && await isAdminToken(accessToken)) {
    return NextResponse.json({ authenticated: true }, { headers: { 'Cache-Control': 'private, no-store' } });
  }

  const refreshToken = cookies().get(refreshCookieName)?.value;
  const config = getSupabaseConfig();
  if (!refreshToken || !config) return response;
  try {
    const auth = await fetch(`${config.url}/auth/v1/token?grant_type=refresh_token`, {
      method: 'POST',
      headers: { apikey: config.key, 'Content-Type': 'application/json' },
      body: JSON.stringify({ refresh_token: refreshToken }),
      cache: 'no-store',
    });
    if (!auth.ok) return response;
    const session = await auth.json();
    if (!session.access_token || !session.refresh_token || !(await isAdminToken(session.access_token))) return response;
    const renewed = NextResponse.json({ authenticated: true }, { headers: { 'Cache-Control': 'private, no-store' } });
    renewed.cookies.set(accessCookieName, session.access_token, { ...cookieOptions, maxAge: Math.max(60, session.expires_in || 3600) });
    renewed.cookies.set(refreshCookieName, session.refresh_token, { ...cookieOptions, maxAge: 60 * 60 * 24 * 7 });
    return renewed;
  } catch {
    return response;
  }
}
