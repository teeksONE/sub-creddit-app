const WINDOW_MS = 60_000;
const MAX_REQUESTS = 30;
const buckets = new Map();

export default async (request, context) => {
  const ip = context.ip || request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'anon';
  const now = Date.now();
  const recent = (buckets.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  buckets.set(ip, recent);

  if (buckets.size > 5000) {
    for (const [k, v] of buckets) {
      if (!v.length || now - v[v.length - 1] > WINDOW_MS) buckets.delete(k);
    }
  }

  if (recent.length > MAX_REQUESTS) {
    return new Response('Too Many Requests', {
      status: 429,
      headers: {
        'Retry-After': '60',
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-store',
      },
    });
  }

  return context.next();
};

export const config = {
  path: [
    '/.json',
    '/best/.json',
    '/new/.json',
    '/controversial/.json',
    '/r/*',
  ],
};
