import React, { useEffect, useRef, useState } from 'react';

const VIDEO_SRC = `${process.env.PUBLIC_URL}/midnight-gospel/midnight-launch.mp4`;

function WelcomeModal({ onClose }) {
  const [phase, setPhase] = useState('video'); // 'video' -> 'text'
  const closeBtnRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  useEffect(() => {
    if (phase !== 'text') return;

    closeBtnRef.current?.focus();

    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [phase, onClose]);

  const handleVideoEnded = () => setPhase('text');
  const handleVideoError = () => setPhase('text');

  const onBackdropClick = (e) => {
    if (phase !== 'text') return;
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className={`mg-modal-backdrop mg-modal-phase-${phase}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="mg-welcome-title"
      onClick={onBackdropClick}
    >
      {phase === 'video' && (
        <video
          ref={videoRef}
          className="mg-modal-video"
          src={VIDEO_SRC}
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnded}
          onError={handleVideoError}
        />
      )}

      {phase === 'text' && (
        <div className="mg-modal-card">
          <button
            type="button"
            className="mg-modal-close"
            aria-label="Close welcome message"
            onClick={onClose}
          >
            ×
          </button>

          <h2 id="mg-welcome-title" className="mg-modal-title">
            Don&apos;t argue. Just read it.
          </h2>

          <div className="mg-modal-body">
            <p>
              In a world where the media fights to shape what you think, who or
              what to fear, defining what is good or bad, who is the ingroup or
              outgroup, us from them. And all the while corporations profit from
              this distance and governments consolidate more control.
            </p>

            <p>
              But step back far enough to see this planet for what it is. One
              ecosystem that we all rely upon to survive, and those differences
              we&apos;re told to fear evaporate. Every flag, every conflict,
              every headline dissolves into a single pale blue dot alone in the
              dark. Eight billion people hurtling through space on this rock,
              needing the same things, asking the same questions about life.
            </p>

            <p>
              AskTheBlueDot is a simple idea: what if you asked them? What if
              we started communicating with the other dots.
            </p>

            <p>
              Every community here is an invitation to put a question to a real
              person from a culture, country, faith, or background you might
              otherwise only encounter as a headline. As a global population
              connected more than ever, actions have consequences that ripple
              out to affect the entire world. It is time we started to come
              together as a whole, to communicate our differences and to want a
              better life for all citizens of Earth. We have the technology to
              communicate with anyone on the planet, and we have more in common
              with each other than with any organisation, corporation, or
              government.
            </p>

            <p className="mg-modal-credit">
              Inspired by{' '}
              <a
                href="https://www.reddit.com/r/carlsagan/"
                target="_blank"
                rel="noopener noreferrer"
                className="mg-modal-credit-link"
              >
                r/carlsagan
              </a>
              .
            </p>
          </div>

          <button type="button" className="mg-modal-cta" ref={closeBtnRef} onClick={onClose}>
            Enter AskTheBlueDot
          </button>
        </div>
      )}
    </div>
  );
}

export default WelcomeModal;
