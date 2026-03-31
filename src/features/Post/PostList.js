import React from 'react';
import Post from './Post';

function PostList({ posts = [] }) {
  if (posts.length === 0) {
    return (
      <p
        style={{
          margin: 0,
          color: '#666',
        }}
      >
        No posts yet.
      </p>
    );
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
      }}
    >
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;