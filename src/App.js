import React from 'react';
import MainContent from './components/MainContent';
import LeftCommunityList from './components/LeftCommunityList';
import RightCuratedList from './components/RightCuratedList';

function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#f6f7f8',
      }}
    >
      <header
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          alignItems: 'center',
          padding: '16px 24px',
          borderBottom: '1px solid #ddd',
          backgroundColor: '#fff',
        }}
      >
        <div style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
          Sub-Creddit
        </div>

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
          <button>Newest</button>
          <button>Best</button>
          <button>Controversial</button>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <input
            type="text"
            placeholder="Search Reddit"
            style={{
              width: '260px',
              padding: '10px 12px',
              borderRadius: '20px',
              border: '1px solid #ccc',
            }}
          />
        </div>
      </header>

      <main
        style={{
          display: 'grid',
          gridTemplateColumns: '250px minmax(0, 1fr) 320px',
          gap: '16px',
          padding: '16px 24px',
          flex: 1,
        }}
      >
        <LeftCommunityList />
        <MainContent />
        <RightCuratedList />
      </main>
    </div>
  );
}

export default App;