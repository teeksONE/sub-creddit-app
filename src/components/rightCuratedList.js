import React, { useState, useEffect } from 'react';
import CuratedPostList from '../features/Post/CuratedPostList';
import { fetchCuratedPosts } from '../features/Post/fetchCuratedPosts';


function RightCuratedList() {
  const [filter, setFilter] = useState('best');
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const buttonStyle = (active) => ({
    padding: '7px 10px',
    borderRadius: '999px',
    border: '1px solid #d7d7d7',
    backgroundColor: active ? '#ff4500' : '#fff',
    color: active ? '#fff' : '#1a1a1b',
    fontWeight: '600',
    fontSize: '0.85rem',
    cursor: 'pointer',
  });

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
  
  
  return (
    <aside
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
          padding: '22px 16px',
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
      lineHeight: 1.2,
    }}
  >
    Curated Feed
  </h2>

  <div
    style={{
      display: 'flex',
      gap: '10px',
      justifyContent: 'center',
      flexWrap: 'wrap',
      width: '100%',
    }}
  >
    <button onClick={() => setFilter('new')} style={buttonStyle(filter === 'new')}>
      Newest
    </button>

    <button onClick={() => setFilter('best')} style={buttonStyle(filter === 'best')}>
      Best
    </button>

    <button
      onClick={() => setFilter('controversial')}
      style={buttonStyle(filter === 'controversial')}
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
        {loading && <p style={{ margin: 0 }}>Loading curated posts...</p>}
        {error && <p style={{ margin: 0 }}>{error}</p>}
        {!loading && !error && <CuratedPostList posts={posts} />}
      </div>
    </aside>
  );
}

export default RightCuratedList;