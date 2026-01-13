import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from './features/Post/postsSlice';
import mainContent from './components/mainContent';
import RightCuratedList from './components/rightCuratedList';
import PostList from './features/Post/PostList';

function App() {
  return (
    <div
      style={{
        display: 'flex',
        minHeight: '100vh',
        gap: '16px',
        padding: '16px',
        boxSizing: 'border-box',
      }}
    >
      <aside style={{ flex: 1, border: '1px solid #ccc', borderRadius: '8px' }}>
        {/* Column 1: r/subreddits list */}
      </aside>

      <mainContent /> {/* Column 2: middle column with main reddit feed*/}

      <RightCuratedList />
    </div>
  );
}

export default App;
