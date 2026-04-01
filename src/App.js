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
        color: '#1a1a1b',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <header
        style={{
          display: 'grid',
          gridTemplateColumns: '220px 1fr 220px',
          alignItems: 'center',
          padding: '16px 24px',
          borderBottom: '1px solid #ddd',
          backgroundColor: '#ffffff',
          position: 'sticky',
          top: 0,
          zIndex: 20,
          boxShadow: '0 1px 6px rgba(0, 0, 0, 0.06)',
        }}
      >
        <div style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
          Sub-Creddit
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
            flexWrap: 'wrap',
          }}
        >
          <button
            style={{
              padding: '10px 16px',
              borderRadius: '999px',
              border: '1px solid #d7d7d7',
              backgroundColor: '#ffffff',
              color: '#1a1a1b',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            Newest
          </button>

          <button
            style={{
              padding: '10px 16px',
              borderRadius: '999px',
              border: '1px solid #d7d7d7',
              backgroundColor: '#ff4500',
              color: '#ffffff',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            Best
          </button>

          <button
            style={{
              padding: '10px 16px',
              borderRadius: '999px',
              border: '1px solid #d7d7d7',
              backgroundColor: '#ffffff',
              color: '#1a1a1b',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            Controversial
          </button>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <input
            type="text"
            placeholder="Search Reddit"
            style={{
              width: '260px',
              padding: '10px 12px',
              borderRadius: '999px',
              border: '1px solid #d6d6d6',
              outline: 'none',
              backgroundColor: '#f8f9fa',
              fontSize: '0.95rem',
            }}
          />
        </div>
      </header>

      <main
        style={{
          display: 'grid',
          gridTemplateColumns: '250px minmax(0, 1fr) 320px',
          gap: '20px',
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