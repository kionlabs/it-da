import { cookies } from 'next/headers';

export const accessCookieName = 'itda_admin_access';
export const refreshCookieName = 'itda_admin_refresh';

export const getSupabaseConfig = () => {
  const url = process.env.SUPABASE_URL?.replace(/\/$/, '');
  const key = process.env.SUPABASE_PUBLISHABLE_KEY;
  return url && key ? { url, key } : null;
};

export const sameOrigin = (request: Request) => {
  const origin = request.headers.get('origin');
  return !!origin && origin === new URL(request.url).origin;
};

export const getAccessToken = () => cookies().get(accessCookieName)?.value;

export const isAdminToken = async (token: string) => {
  const config = getSupabaseConfig();
  if (!config) return false;
  try {
    const response = await fetch(`${config.url}/rest/v1/rpc/is_admin`, {
      method: 'POST',
      headers: {
        apikey: config.key,
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Content-Profile': 'itda',
        Accept: 'application/json',
      },
      body: '{}',
      cache: 'no-store',
    });
    return response.ok && (await response.json()) === true;
  } catch {
    return false;
  }
};

export const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'strict' as const,
  path: '/',
};
