import React, { useEffect, useState } from 'react';
import PostList from '../features/Post/PostList';

function MainContent() {
  const [posts, setPosts] = useState([]);
  const [feedType, setFeedType] = useState('best');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

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

  const pillClass = (active) => `mg-pill${active ? ' mg-pill-active' : ''}`;

  return (
    <section className="mg-feed">
      <div className="mg-card mg-card-center">
        <h2 className="mg-section-title">Home Feed</h2>

        <div className="mg-pill-row">
          <button onClick={() => setFeedType('new')} className={pillClass(feedType === 'new')}>
            Newest
          </button>
          <button onClick={() => setFeedType('best')} className={pillClass(feedType === 'best')}>
            Best
          </button>
          <button
            onClick={() => setFeedType('controversial')}
            className={pillClass(feedType === 'controversial')}
          >
            Controversial
          </button>
        </div>
      </div>

      <div className="mg-card mg-card-tight">
        {loading && <p className="mg-status">Loading posts...</p>}
        {error && <p className="mg-status">{error}</p>}
        {!loading && !error && <PostList posts={posts} />}
      </div>
    </section>
  );
}

export default MainContent;
