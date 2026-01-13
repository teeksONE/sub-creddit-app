import React from 'react';
import { getPostImage } from '../../utils/getPostImage';

function Post({ post }) {
  if (!post) return null;

  const imageUrl = getPostImage(post);

  return (
    <div style={{ padding: '8px', border: '1px solid #ddd', borderRadius: '6px', marginBottom: '12px' }}>
      {imageUrl && (
        <img src={imageUrl} alt={post.title} style={{ width: '100%', borderRadius: '6px', marginBottom: '4px' }} />
      )}
      <h4>{post.title}</h4>
      <p style={{ fontSize: '0.85rem', color: '#555' }}>
        r/{post.subreddit} • by {post.author}
      </p>
      <a href={`https://reddit.com/r/${post.subreddit}`} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.85rem', color: 'blue' }}>
        Go to subreddit
      </a>
    </div>
  );
}

export default Post;
