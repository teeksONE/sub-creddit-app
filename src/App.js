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
          gridTemplateColumns: '220px 1fr 280px',
          alignItems: 'center',
          gap: '16px',
          padding: '14px 24px',
          borderBottom: '1px solid #ddd',
          backgroundColor: '#ffffff',
          position: 'sticky',
          top: 0,
          zIndex: 20,
          boxShadow: '0 1px 6px rgba(0, 0, 0, 0.06)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <a
            href="#"
            style={{
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 14px',
              borderRadius: '999px',
              backgroundColor: '#ff4500',
              color: '#ffffff',
              fontWeight: '700',
              fontSize: '0.95rem',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
            }}
          >
            <span
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: '#ffffff',
                display: 'inline-block',
              }}
            />
            r/teeksone
          </a>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <a
            href="https://www.reddit.com/r/videos/comments/9ts43q/what_is_the_charge_eating_a_meal_a_succulent/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: 'none',
              color: '#1a1a1b',
              fontWeight: '700',
              fontSize: '1.5rem',
              letterSpacing: '0.3px',
            }}
          >
            Succulent-reddit
          </a>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <input
            type="text"
            placeholder="Search Reddit"
            style={{
              width: '100%',
              maxWidth: '260px',
              padding: '10px 14px',
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
          gridTemplateColumns: '260px minmax(0, 1fr) 320px',
          gap: '20px',
          padding: '20px 24px',
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