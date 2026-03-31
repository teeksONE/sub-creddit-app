import React from 'react';
import PostList from '../features/Post/PostList';

function MainContent() {
  const posts = [];

  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        minWidth: 0,
      }}
    >
      <div
        style={{
          backgroundColor: '#fff',
          border: '1px solid #ddd',
          borderRadius: '12px',
          padding: '16px',
        }}
      >
        <h2
          style={{
            margin: 0,
            fontSize: '1.2rem',
            color: '#1a1a1b',
          }}
        >
          Home Feed
        </h2>
      </div>

      <div
        style={{
          backgroundColor: '#fff',
          border: '1px solid #ddd',
          borderRadius: '12px',
          padding: '16px',
        }}
      >
        <PostList posts={posts} />
      </div>
    </section>
  );
}

export default MainContent;