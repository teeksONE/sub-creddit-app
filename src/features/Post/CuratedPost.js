import React from 'react';
import { safeImageUrl } from '../../utils/safeImageUrl';

function getPostImage(post) {
  const previewUrl = post?.preview?.images?.[0]?.source?.url;

  if (previewUrl) {
    return safeImageUrl(previewUrl.replace(/&amp;/g, '&'));
  }

  if (post?.thumbnail) {
    return safeImageUrl(post.thumbnail);
  }

  return null;
}

function CuratedPost({ post }) {
  if (!post) return null;

  const imageUrl = getPostImage(post);

  return (
    <a
      href={`https://www.reddit.com/r/${post.subreddit}/`}
      target="_blank"
      rel="noopener noreferrer"
      className="mg-curated-card"
    >
      {imageUrl && (
        <div className="mg-post-image-wrap">
          <img src={imageUrl} alt={post.title} loading="lazy" className="mg-post-image" />
        </div>
      )}

      <div style={{ padding: '12px 14px' }}>
        <p className="mg-curated-meta">r/{post.subreddit}</p>
        <h3 className="mg-curated-title">{post.title}</h3>
        <p className="mg-curated-author">by u/{post.author}</p>
      </div>
    </a>
  );
}

export default CuratedPost;
