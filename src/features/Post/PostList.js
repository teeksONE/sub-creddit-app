import React from 'react';
import Post from './Post';

function PostList({ posts = [] }) {
  if (posts.length === 0) {
    return <p className="mg-empty">No posts yet.</p>;
  }

  return (
    <div className="mg-feed">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;
