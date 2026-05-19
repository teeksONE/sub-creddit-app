export const config = {
  matcher: [
    '/.json',
    '/best/.json',
    '/new/.json',
    '/controversial/.json',
    '/r/:sub/.json',
    '/r/:sub/:filter.json',
  ],
};

const WINDOW_MS = 60_000;
const MAX_REQUESTS = 30;
const buckets = new Map();

function clientKey(request) {
  const fwd = request.headers.get('x-forwarded-for') || '';
  const ip = fwd.split(',')[0].trim() || request.headers.get('x-real-ip') || 'anon';
  return ip;
}

export default function middleware(request) {
  const key = clientKey(request);
  const now = Date.now();
  const recent = (buckets.get(key) || []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  buckets.set(key, recent);

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
}
