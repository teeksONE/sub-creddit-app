import React, { useEffect, useState } from 'react';
import MainContent from './components/MainContent';
import LeftCommunityList from './components/LeftCommunityList';
import RightCuratedList from './components/RightCuratedList';
import WelcomeModal from './components/WelcomeModal';

const BG_IMAGES = Array.from(
  { length: 9 },
  (_, i) => `${process.env.PUBLIC_URL}/midnight-gospel/bg-${i + 1}.jpg`
);

const SLIDE_INTERVAL_MS = 9000;

function shuffle(arr) {
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

function App() {
  const [order] = useState(() => shuffle(BG_IMAGES));
  const [index, setIndex] = useState(0);
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    order.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [order]);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % order.length);
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(id);
  }, [order.length]);

  return (
    <div className="mg-app">
      {showWelcome && <WelcomeModal onClose={() => setShowWelcome(false)} />}
      <div className="mg-bg">
        {order.map((src, i) => (
          <div
            key={src}
            className={`mg-bg-layer${i === index ? ' is-active' : ''}`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
      </div>
      <header className="mg-header">
        <div className="mg-header-cell-left">
          <a href="/" className="mg-logo">
            <span className="mg-logo-dot" />
            r/teeksone
          </a>
        </div>

        <div className="mg-header-cell-mid">
          <a
            href="https://www.reddit.com/r/videos/comments/9ts43q/what_is_the_charge_eating_a_meal_a_succulent/"
            target="_blank"
            rel="noopener noreferrer"
            className="mg-title"
          >
            Don't argue just read-it.
          </a>
        </div>

        <div className="mg-header-cell-right">
          <input type="text" placeholder="Search Reddit" className="mg-search" />
        </div>
      </header>

      <main className="mg-main">
        <LeftCommunityList />
        <MainContent />
        <RightCuratedList />
      </main>
    </div>
  );
}

export default App;
