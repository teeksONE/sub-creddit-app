export function getPostImage(post) {

    const url = post?.preview?.images?.[0]?.source?.url;
    return url ? url.replace(/&amp;/g, '&') : null;
  }
  