import React, { useState } from 'react';
import { Fireworks } from './Fireworks';
import { MediaGallery } from './MediaGallery';
import { ShareModal } from './ShareModal';

export const CelebrationView: React.FC = () => {
  const [showShare, setShowShare] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-ny-dark to-purple-900 relative overflow-x-hidden pb-20">
      <Fireworks />
      <ShareModal isOpen={showShare} onClose={() => setShowShare(false)} />

      <div className="relative z-10 flex flex-col items-center pt-24 pb-12 text-center px-4">
        <div className="animate-pop-in relative">
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 text-6xl animate-bounce">
            🐹
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-ny-gold via-yellow-200 to-ny-gold drop-shadow-[0_0_25px_rgba(251,191,36,0.6)] mb-2 tracking-tight leading-tight">
            HAPPY NEW YEAR
          </h1>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg mt-2 font-serif italic text-pink-400">
            Crazy Ladaku  Hamster
          </h2>
          <div className="text-6xl md:text-8xl font-black text-white drop-shadow-xl animate-pulse mt-6">
            2026
          </div>
        </div>

        <p className="mt-8 text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in-up delay-500 bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 shadow-xl">
          Here's to another year of adventures, snacks, and being absolutely adorable! ✨
          <br />
          <span className="font-bold text-ny-gold block mt-2">I'm so happy to celebrate with you!</span>
        </p>

        <button
          onClick={() => setShowShare(true)}
          className="mt-8 group relative inline-flex items-center justify-center px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-ny-pink font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ny-pink hover:bg-pink-600 shadow-lg hover:shadow-pink-500/50 hover:-translate-y-1"
        >
          <i className="fas fa-share-alt mr-2"></i> Share the
        </button>
      </div>

      <div className="relative z-10 mt-10">
        <div className="text-center mb-8">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-ny-gold text-sm font-bold tracking-wider uppercase border border-ny-gold/30">
            Our hightlights to view click on the black space anywhere in a row
          </span>
        </div>
        <MediaGallery />
      </div>

      <footer className="relative z-10 text-center py-12 text-white/40 text-sm">
        <p>Made for 🐹 for 2026</p>
      </footer>
    </div>
  );
};