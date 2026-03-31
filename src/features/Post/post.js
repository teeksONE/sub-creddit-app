import React from 'react';

function Post({ post }) {
  if (!post) return null;

  return (
    <article
      style={{
        border: '1px solid #eee',
        borderRadius: '10px',
        padding: '12px',
        backgroundColor: '#fafafa',
      }}
    >
      <h3 style={{ marginTop: 0 }}>{post.title}</h3>
      <p style={{ marginBottom: 0, color: '#555' }}>
        by {post.author}
      </p>
    </article>
  );
}

export default Post;