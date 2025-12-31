import React, { useState } from 'react';
import { MediaItem } from '../types';

export const MediaGallery: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);

  // ==========================================
  // 🐹 YOUR MEMORY WALL 🐹
  // ==========================================

  const MY_MEMORIES: MediaItem[] = [
    {
      id: 'my-pic-1',
      type: 'image',
      // ✅ Updated: Pointing to the renamed file 'golden-smile.jpg'
      // Ensure your file is named exactly 'golden-smile.jpg' inside the 'public' folder
      url: '/golden-smile.jpg',
      caption: 'Sun-kissed & Happy ☀️'
    },
    {
      id: 'my-pic-2',
      type: 'image',
      // Reliable Party Image
      url: '/WhatsApp Image 2025-12-31 at 10.37.14 PM.jpeg',
      caption: 'Coconut vibes 🥥'
    },
    // {
    //   id: 'my-pic-3',
    //   type: 'image',
    //   // Reliable Summer/Coconut Image
    //   url: '',
    //   caption: 'Coconut vibes 🥥'
    // },
    {
      id: '4',
      type: 'image',
      // Reliable Hamster Image
      url: '/WhatsApp Image 2025-12-31 at 10.37.15 PM.jpeg',
      caption: 'So cute! 🐹'
    },
    {
      id: '5',
      type: 'image',
      // Reliable Love/Hearts Image
      url: '/WhatsApp Image 2025-12-31 at 10.38.51 PM (1).jpeg',
      caption: 'Forever ❤️'
    },
    {
      id: '6',
      type: 'image',
      // Reliable Love/Hearts Image
      url: '/WhatsApp Image 2025-12-31 at 10.38.51 PM.jpeg',
      caption: ''
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 pb-12 z-10 relative">
      {/* Gallery Grid */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-8 space-y-8">
        {MY_MEMORIES.map((item, index) => (
          <div
            key={item.id}
            className="break-inside-avoid relative group cursor-pointer"
            onClick={() => setSelectedItem(item)}
            style={{
              animation: `pop-in 0.6s ease-out forwards ${index * 0.15}s`,
              opacity: 0
            }}
          >
            <div className={`
              bg-white p-4 pb-16 shadow-2xl transform transition-all duration-300 hover:z-20 hover:scale-105 hover:rotate-0
              ${index % 2 === 0 ? 'rotate-2' : '-rotate-2'}
            `}>
              <div className="overflow-hidden bg-gray-100 aspect-auto shadow-inner">
                {item.type === 'image' ? (
                  <img
                    src={item.url}
                    alt="Memory"
                    className="w-full h-auto object-cover filter sepia-[.15] contrast-110 group-hover:sepia-0 transition-all duration-500"
                    loading="lazy"
                    onError={(e) => {
                      // Fallback if image isn't found
                      console.error(`Could not load image: ${item.url}`);
                      (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x500?text=Image+Not+Found';
                    }}
                  />
                ) : (
                  <div className="relative group-hover:opacity-90 transition">
                    <video
                      src={item.url}
                      className="w-full h-auto object-cover pointer-events-none"
                      muted
                      loop
                      autoPlay
                      playsInline
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <i className="fas fa-play-circle text-white text-5xl opacity-80 drop-shadow-lg"></i>
                    </div>
                  </div>
                )}
              </div>

              <div className="absolute bottom-4 left-0 right-0 text-center font-handwriting text-gray-700 font-bold text-xl transform -rotate-1 font-serif tracking-wide">
                {item.caption || '❤️'}
              </div>

              {/* Tape Effect */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-10 bg-white/20 backdrop-blur-[2px] border-l border-r border-white/40 rotate-[-2deg] shadow-sm"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox / Fullscreen View */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md animate-pop-in p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div className="relative max-w-5xl w-full max-h-screen flex flex-col items-center">
            <button
              className="absolute -top-12 right-0 text-white hover:text-ny-gold transition text-4xl"
              onClick={() => setSelectedItem(null)}
            >
              &times;
            </button>

            <div
              className="bg-white p-2 rounded-lg shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedItem.type === 'image' ? (
                <img
                  src={selectedItem.url}
                  alt="Full view"
                  className="max-h-[80vh] w-auto object-contain rounded"
                />
              ) : (
                <video
                  src={selectedItem.url}
                  controls
                  autoPlay
                  className="max-h-[80vh] w-auto rounded"
                />
              )}
            </div>

            {selectedItem.caption && (
              <p className="text-white mt-4 text-2xl font-bold tracking-wide drop-shadow-md">
                {selectedItem.caption}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};