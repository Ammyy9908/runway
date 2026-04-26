/**
 * Browser calls to the auth-service (session cookie is set on the auth API origin).
 * Set NEXT_PUBLIC_AUTH_API_URL (e.g. http://localhost:3001) and CLIENT_ORIGIN on the auth service.
 */
export function getAuthApiBase(): string {
  const base = process.env.NEXT_PUBLIC_AUTH_API_URL;
  if (!base) return 'http://localhost:3001';
  return base.replace(/\/$/, '');
}

export async function authFetch(path: string, init?: RequestInit): Promise<Response> {
  const headers = new Headers(init?.headers);
  if (init?.body != null && !(init.body instanceof FormData) && !headers.has('Content-Type')) {
    headers.set('Content-Type', 'application/json');
  }
  return fetch(`${getAuthApiBase()}${path}`, {
    ...init,
    credentials: 'include',
    headers,
  });
}
