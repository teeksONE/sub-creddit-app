import React from 'react';

function getPostImage(post) {
  const previewUrl = post?.preview?.images?.[0]?.source?.url;
  if (previewUrl) {
    return previewUrl.replace(/&amp;/g, '&');
  }

  if (post?.thumbnail && post.thumbnail.startsWith('http')) {
    return post.thumbnail;
  }

  return null;
}

function Post({ post }) {
  if (!post) return null;

  const imageUrl = getPostImage(post);

  return (
    <article
      style={{
        border: '1px solid #e7e7e7',
        borderRadius: '14px',
        overflow: 'hidden',
        backgroundColor: '#ffffff',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
      }}
    >
      {imageUrl && (
        <div
          style={{
            width: '100%',
            backgroundColor: '#f0f2f5',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            src={imageUrl}
            alt={post.title}
            loading="lazy"
            style={{
              maxWidth: '100%',
              height: 'auto',
              display: 'block',
            }}
          />
        </div>
      )}

      <div style={{ padding: '16px' }}>
        <p
          style={{
            margin: '0 0 8px 0',
            fontSize: '0.85rem',
            color: '#6b6f76',
          }}
        >
          r/{post.subreddit} • u/{post.author}
        </p>

        <h3
          style={{
            margin: '0 0 12px 0',
            fontSize: '1.05rem',
            lineHeight: 1.45,
            color: '#1a1a1b',
          }}
        >
          {post.title}
        </h3>

        <a
          href={`https://www.reddit.com${post.permalink}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            textDecoration: 'none',
            color: '#ff4500',
            fontWeight: '700',
          }}
        >
          View post
        </a>
      </div>
    </article>
  );
}

export default Post;