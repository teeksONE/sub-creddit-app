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

          <p className="mg-modal-body">
            In a world where the media is constantly trying to shape how you think and
            what you believe, maybe it&apos;s time to step back and listen to people who
            might actually know and be happy to tell you if you ask. It&apos;s 2026 —
            we should all be able to communicate a little better and think a little more
            openly. After all, every single person on this planet needs the same basic
            things to survive, and we all share this one home hurtling through space to
            who knows where. It&apos;s about time we grow up and realise we have more in
            common than we don&apos;t.
          </p>

          <button type="button" className="mg-modal-cta" ref={closeBtnRef} onClick={onClose}>
            Enter sub-Creddit
          </button>
        </div>
      )}
    </div>
  );
}

export default WelcomeModal;
