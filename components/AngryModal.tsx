import React from 'react';
import { Button } from './Button';

interface AngryModalProps {
  onClose: () => void;
  isOpen: boolean;
}

export const AngryModal: React.FC<AngryModalProps> = ({ onClose, isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-pop-in">
      <div className="bg-white rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl animate-shake border-4 border-ny-red">
        <div className="mb-6 relative">
          <img 
            src="https://picsum.photos/id/1062/300/300" 
            alt="Angry Dog" 
            className="w-40 h-40 mx-auto rounded-full object-cover border-4 border-ny-red shadow-xl"
          />
          <div className="absolute -bottom-2 right-10 text-4xl">😠</div>
          <div className="absolute -top-2 left-10 text-4xl">🎆</div>
        </div>
        
        <h2 className="text-2xl font-black text-ny-red mb-4 uppercase tracking-tighter">
          Hey! What are you doing?!
        </h2>
        
        <p className="text-gray-700 font-bold mb-8 text-lg">
          Go back and click YES right now! We aren't skipping this party! 
        </p>

        <Button variant="success" onClick={onClose} className="w-full animate-pulse">
          Okay, I'm sorry! 🥺
        </Button>
      </div>
    </div>
  );
};