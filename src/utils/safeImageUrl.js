const ALLOWED_HOSTS = [
  'i.redd.it',
  'preview.redd.it',
  'external-preview.redd.it',
  'b.thumbs.redditmedia.com',
  'a.thumbs.redditmedia.com',
  'styles.redditmedia.com',
  'www.redditstatic.com',
];

export function safeImageUrl(rawUrl) {
  if (!rawUrl || typeof rawUrl !== 'string') return null;

  let parsed;
  try {
    parsed = new URL(rawUrl);
  } catch {
    return null;
  }

  if (parsed.protocol !== 'https:') return null;

  const host = parsed.hostname.toLowerCase();
  const ok = ALLOWED_HOSTS.some((h) => host === h || host.endsWith(`.${h}`));
  if (!ok) return null;

  return parsed.toString();
}
