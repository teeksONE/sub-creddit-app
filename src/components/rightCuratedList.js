import React, { useState, useEffect } from 'react';
import CuratedPostList from '../features/Post/CuratedPostList';
import { fetchCuratedPosts } from '../features/Post/fetchCuratedPosts';

function RightCuratedList() {
  const [filter, setFilter] = useState('best');
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadingCuratedPosts() {
      setLoading(true);
      setError('');

      try {
        const curatedPosts = await fetchCuratedPosts(filter);
        setPosts(curatedPosts);
      } catch (err) {
        console.error(err);
        setError('Unable to load curated posts.');
        setPosts([]);
      } finally {
        setLoading(false);
      }
    }

    loadingCuratedPosts();
  }, [filter]);

  const pillClass = (active) => `mg-pill mg-pill-sm${active ? ' mg-pill-active' : ''}`;

  return (
    <aside className="mg-feed">
      <div className="mg-card mg-card-center">
        <h2 className="mg-section-title">Curated Feed</h2>

        <div className="mg-pill-row">
          <button onClick={() => setFilter('new')} className={pillClass(filter === 'new')}>
            Newest
          </button>
          <button onClick={() => setFilter('best')} className={pillClass(filter === 'best')}>
            Best
          </button>
          <button
            onClick={() => setFilter('controversial')}
            className={pillClass(filter === 'controversial')}
          >
            Controversial
          </button>
        </div>
      </div>

      <div className="mg-card mg-card-tight">
        {loading && <p className="mg-status">Loading curated posts...</p>}
        {error && <p className="mg-status">{error}</p>}
        {!loading && !error && <CuratedPostList posts={posts} />}
      </div>
    </aside>
  );
}

export default RightCuratedList;
