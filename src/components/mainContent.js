import React, { useEffect, useState } from 'react';
import PostList from '../features/Post/PostList';

function MainContent() {
  const [posts, setPosts] = useState([]);
  const [feedType, setFeedType] = useState('best');
  const [loading, setLoading] = useState(true);
  const [ error, setError] = useState('');

  useEffect(() => {
    async function fetchHomeFeed() {
      setLoading(true);
      setError('');

      try {
        const path = feedType === 'best' ? '/.json' : `/${feedType}/.json`;

        const response = await fetch(path);

        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`);
        }

        const data = await response.json();
        const children = data?.data?.children || [];
        const formattedPosts = children.map((child) => child.data);

        setPosts(formattedPosts);
      } catch (err) {
        console.error('Failed to fetch homepage feed:', err);
        setError('Unable to load sub-Creddit homepage feed.');
        setPosts([]);
      } finally {
        setLoading(false);
      }
    }

    fetchHomeFeed();
  }, [feedType]);

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
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '12px',
          flexWrap: 'wrap',
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

        <div style={{ display: 'flex', gap: '8px' }}>
          <button onClick={() => setFeedType('new')}>Newest</button>
          <button onClick={() => setFeedType('best')}>Best</button>
          <button onClick={() => setFeedType('controversial')}>
            Controversial
          </button>
        </div>
      </div>

      <div
        style={{
          backgroundColor: '#fff',
          border: '1px solid #ddd',
          borderRadius: '12px',
          padding: '16px',
        }}
      >
        {loading && <p style={{ margin: 0 }}>Loading posts...</p>}
        {error && <p style={{ margin: 0 }}>{error}</p>}
        {!loading && !error && <PostList posts={posts} />}
      </div>
    </section>
  );
}

export default MainContent;