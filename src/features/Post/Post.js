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

function Post({ post }) {
  if (!post) return null;

  const imageUrl = getPostImage(post);

  return (
    <article className="mg-post">
      {imageUrl && (
        <div className="mg-post-image-wrap">
          <img src={imageUrl} alt={post.title} loading="lazy" className="mg-post-image" />
        </div>
      )}

      <div className="mg-post-body">
        <p className="mg-post-meta">
          r/{post.subreddit} • u/{post.author}
        </p>

        <h3 className="mg-post-title">{post.title}</h3>

        <a
          href={`https://www.reddit.com${post.permalink}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mg-post-link"
        >
          View post →
        </a>
      </div>
    </article>
  );
}

export default Post;
