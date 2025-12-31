import React, { useState, useRef, useEffect } from 'react';
import { Button } from './Button';
import { AngryModal } from './AngryModal';
import { Coordinates } from '../types';

interface QuestionCardProps {
  onYes: () => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({ onYes }) => {
  const [noBtnPos, setNoBtnPos] = useState<Coordinates>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Initialize position only after mount to access container dims
  useEffect(() => {
    if (containerRef.current) {
      // Start in a neutral position relative to flow, handled by CSS
    }
  }, []);

  const moveButton = () => {
    const padding = 100; // Keep away from edges
    const maxX = window.innerWidth - padding;
    const maxY = window.innerHeight - padding;
    const minX = padding;
    const minY = padding;

    const newX = Math.random() * (maxX - minX) + minX;
    const newY = Math.random() * (maxY - minY) + minY;

    setNoBtnPos({ x: newX, y: newY });
    setIsHovered(true);
  };

  const handleNoClick = () => {
    setShowModal(true);
    try {
      const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2578/2578-preview.mp3');
      audio.volume = 0.5;
      audio.play().catch(() => { });
    } catch (e) {
      // Ignore audio errors
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-4 overflow-hidden relative">
      <AngryModal isOpen={showModal} onClose={() => setShowModal(false)} />

      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 text-6xl opacity-20 animate-float">🎉</div>
        <div className="absolute bottom-20 right-20 text-6xl opacity-20 animate-float" style={{ animationDelay: '1s' }}>🐹</div>
        <div className="absolute top-1/2 left-10 text-4xl opacity-10 animate-pulse">2026</div>
        <div className="absolute top-20 right-1/4 text-5xl opacity-10 animate-bounce">🎈</div>
        <div className="absolute bottom-1/3 right-10 text-6xl opacity-20 animate-spin-slow">✨</div>
      </div>

      <div
        ref={containerRef}
        className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 md:p-12 rounded-3xl shadow-2xl max-w-lg w-full text-center relative z-10 animate-pop-in border-t-4 border-ny-pink"
      >
        <div className="text-6xl mb-4 animate-bounce">🐹</div>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-8 drop-shadow-lg leading-tight">
          Will you celebrate <br />
          <span className="text-ny-gold">New Year 2026</span>
          <br /> with me?
        </h1>
        <p className="text-pink-200 mb-8 font-medium text-lg">
          (Say yes, little hamster!#The Jangra # Ladaku Biman)
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-4 h-32 md:h-20 relative">
          <Button
            variant="success"
            onClick={onYes}
            className="w-full md:w-auto text-xl px-10 py-4 z-20 hover:scale-110 active:scale-95 transition-all bg-gradient-to-r from-green-500 to-emerald-600 shadow-emerald-500/50"
          >
            YES! Let's Party! and I agree that Suman is always Right🥳
          </Button>

          <div
            className="transition-all duration-300 ease-out z-30"
            style={isHovered ? {
              position: 'fixed',
              left: noBtnPos.x,
              top: noBtnPos.y,
              transform: 'translate(-50%, -50%)'
            } : {}}
            onMouseEnter={moveButton}
            onTouchStart={(e) => {
              if (Math.random() > 0.3) moveButton();
            }}
          >
            <Button
              variant="danger"
              onClick={handleNoClick}
              className="w-full md:w-auto text-xl px-10 py-4 whitespace-nowrap bg-gradient-to-r from-red-500 to-rose-600"
            >
              No, I'm sleepy 😴(Tu Bas click karke baata)
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};