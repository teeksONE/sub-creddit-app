import React from 'react';
import CuratedPost from './CuratedPost';

function CuratedPostList({ posts = [] }) {
  if (posts.length === 0) {
    return <p className="mg-empty">No curated posts found.</p>;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {posts.map((post, index) =>
        post ? <CuratedPost key={post.id || index} post={post} /> : null
      )}
    </div>
  );
}

export default CuratedPostList;
