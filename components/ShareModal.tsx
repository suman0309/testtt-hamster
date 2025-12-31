import React from 'react';
import { Button } from './Button';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const currentUrl = window.location.href;
  const encodedUrl = encodeURIComponent(currentUrl);
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`Hey! Will you celebrate New Year 2026 with me? Check this out: ${currentUrl}`)}`;
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodedUrl}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentUrl);
    alert('Link copied to clipboard!');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-pop-in">
      <div className="bg-white rounded-3xl p-8 max-w-md w-full text-center shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition"
        >
          <i className="fas fa-times text-xl"></i>
        </button>

        <h2 className="text-2xl font-black text-ny-dark mb-2">Share the Celebration! 🥳</h2>
        <p className="text-gray-500 mb-6">Invite your friends to join the party</p>

        <div className="bg-gray-100 p-4 rounded-xl mb-6 inline-block shadow-inner">
          <img
            src={qrCodeUrl}
            alt="QR Code"
            className="w-48 h-48 mix-blend-multiply"
          />
        </div>

        <div className="flex flex-col gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-3 px-6 rounded-full shadow-lg transition flex items-center justify-center gap-2"
          >
            <i className="fab fa-whatsapp text-2xl"></i>
            Share on WhatsApp
          </a>

          <button
            onClick={copyToClipboard}
            className="w-full bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-full shadow-lg transition flex items-center justify-center gap-2"
          >
            <i className="fas fa-link"></i>
            Copy Link
          </button>
        </div>
      </div>
    </div>
  );
};