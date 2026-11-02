import { NextResponse } from 'next/server';
import { getAccessToken, getSupabaseConfig, isAdminToken } from '@/lib/adminAuth';

const statuses = new Set(['new', 'contacted', 'completed', 'cancelled']);

export async function GET(request: Request) {
  const token = getAccessToken();
  if (!token || !(await isAdminToken(token))) {
    return NextResponse.json({ message: '로그인이 필요합니다.' }, { status: 401, headers: { 'Cache-Control': 'private, no-store' } });
  }
  const config = getSupabaseConfig();
  if (!config) return NextResponse.json({ message: '데이터 연결을 확인해 주세요.' }, { status: 503 });

  const incoming = new URL(request.url).searchParams;
  const status = incoming.get('status') || 'all';
  const query = (incoming.get('q') || '').trim();
  const page = Number(incoming.get('page') || '1');
  if ((status !== 'all' && !statuses.has(status)) || query.length > 60 || !Number.isInteger(page) || page < 1 || page > 10000) {
    return NextResponse.json({ message: '검색 조건을 확인해 주세요.' }, { status: 400 });
  }

  const params = new URLSearchParams({
    select: 'id,name,phone,grade,subjects,address,school,concern,status,source_path,created_at',
    order: 'created_at.desc',
    limit: '20',
    offset: String((page - 1) * 20),
  });
  if (status !== 'all') params.set('status', `eq.${status}`);
  if (query) {
    const safeQuery = query.replace(/[^\p{L}\p{N}\s-]/gu, '').trim();
    if (!safeQuery) return NextResponse.json({ message: '다른 검색어를 입력해 주세요.' }, { status: 400 });
    params.set('or', `(name.ilike.*${safeQuery}*,phone.ilike.*${safeQuery}*,school.ilike.*${safeQuery}*)`);
  }

  try {
    const result = await fetch(`${config.url}/rest/v1/consultation_requests?${params}`, {
      headers: {
        apikey: config.key,
        Authorization: `Bearer ${token}`,
        'Accept-Profile': 'itda',
        Prefer: 'count=exact',
      },
      cache: 'no-store',
    });
    if (!result.ok) return NextResponse.json({ message: '신청 내역을 불러오지 못했습니다.' }, { status: 502 });
    const rows = await result.json();
    const total = Number(result.headers.get('content-range')?.split('/')[1] || 0);
    return NextResponse.json({ rows, total, page }, { headers: { 'Cache-Control': 'private, no-store' } });
  } catch {
    return NextResponse.json({ message: '데이터 연결을 확인해 주세요.' }, { status: 502 });
  }
}
