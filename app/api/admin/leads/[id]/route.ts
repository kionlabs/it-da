import { NextResponse } from 'next/server';
import { getAccessToken, getSupabaseConfig, isAdminToken, sameOrigin } from '@/lib/adminAuth';

const statuses = new Set(['new', 'contacted', 'completed', 'cancelled']);
const uuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  if (!sameOrigin(request)) return NextResponse.json({ message: '요청을 확인할 수 없습니다.' }, { status: 403 });
  const token = getAccessToken();
  if (!token || !(await isAdminToken(token))) return NextResponse.json({ message: '로그인이 필요합니다.' }, { status: 401 });
  const config = getSupabaseConfig();
  if (!config) return NextResponse.json({ message: '데이터 연결을 확인해 주세요.' }, { status: 503 });
  const body = await request.json().catch(() => ({}));
  if (!uuid.test(params.id) || !statuses.has(body.status)) {
    return NextResponse.json({ message: '변경할 상태를 확인해 주세요.' }, { status: 400 });
  }

  try {
    const result = await fetch(`${config.url}/rest/v1/consultation_requests?id=eq.${params.id}`, {
      method: 'PATCH',
      headers: {
        apikey: config.key,
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Content-Profile': 'itda',
        Prefer: 'return=representation',
      },
      body: JSON.stringify({ status: body.status }),
      cache: 'no-store',
    });
    if (!result.ok) return NextResponse.json({ message: '상태를 변경하지 못했습니다.' }, { status: 502 });
    const rows = await result.json();
    if (!Array.isArray(rows) || rows.length !== 1) return NextResponse.json({ message: '신청 내역을 찾지 못했습니다.' }, { status: 404 });
    return NextResponse.json({ success: true }, { headers: { 'Cache-Control': 'private, no-store' } });
  } catch {
    return NextResponse.json({ message: '데이터 연결을 확인해 주세요.' }, { status: 502 });
  }
}
