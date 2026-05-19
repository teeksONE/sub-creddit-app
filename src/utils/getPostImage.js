import { safeImageUrl } from './safeImageUrl';

export function getPostImage(post) {
  const url = post?.preview?.images?.[0]?.source?.url;
  if (!url) return null;
  return safeImageUrl(url.replace(/&amp;/g, '&'));
}
