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

  const buttonStyle = (active) => ({
    padding: '10px 16px',
    borderRadius: '999px',
    border: '1px solid #d7d7d7',
    backgroundColor: active ? '#ff4500' : '#ffffff',
    color: active ? '#ffffff' : '#1a1a1b',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  });

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
          padding: '20px 16px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '14px',
        }}
      >
        <h2
          style={{
            margin: 0,
            fontSize: '1.2rem',
            color: '#1a1a1b',
            textAlign: 'center',
          }}
        >
          Home Feed
        </h2>

        <div
          style={{
            display: 'flex',
            gap: '10px',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <button
            onClick={() => setFeedType('new')}
            style={buttonStyle(feedType === 'new')}
          >
            Newest
          </button>

          <button
            onClick={() => setFeedType('best')}
            style={buttonStyle(feedType === 'best')}
          >
            Best
          </button>

          <button
            onClick={() => setFeedType('controversial')}
            style={buttonStyle(feedType === 'controversial')}
          >
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