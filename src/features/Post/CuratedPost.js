import React from 'react';

function getPostImage(post) {
    const previewUrl = post?.preview?.images?.[0]?.source?.url;

    if (previewUrl) {
        return previewUrl.replace(/&amp;/g, '&');
    }

    if (post?.thumbnail && post.thumbnail.startsWith('https')) {
        return post.thumbnail;
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
          style={{
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          <article
            style={{
              border: '1px solid #e7e7e7',
              borderRadius: '12px',
              overflow: 'hidden',
              backgroundColor: '#ffffff',
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
                  borderBottom: '1px solid #eee',
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
    
            <div style={{ padding: '12px' }}>
              <p
                style={{
                  margin: '0 0 6px 0',
                  fontSize: '0.75rem',
                  color: '#6b6f76',
                  fontWeight: 600,
                }}
              >
                r/{post.subreddit}
              </p>
    
              <h3
                style={{
                  margin: '0 0 8px 0',
                  fontSize: '0.92rem',
                  lineHeight: 1.35,
                  color: '#1a1a1b',
                }}
              >
                {post.title}
              </h3>
    
              <p
                style={{
                  margin: 0,
                  fontSize: '0.78rem',
                  color: '#6b6f76',
                }}
              >
                by u/{post.author}
              </p>
            </div>
          </article>
        </a>
      );
    }
    
    export default CuratedPost;
