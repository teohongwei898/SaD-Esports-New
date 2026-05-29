import React from 'react';
import { MASCOT_IMAGE_URL } from '../data';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  onJoinDiscord: () => void;
  onShowTwitter: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onJoinDiscord, onShowTwitter }) => {
  return (
    <footer className="bg-surface-container border-t-2 border-on-surface py-12 px-4 md:px-16 mt-auto relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
        {/* Mascot Box */}
        <button
          onClick={() => setActiveTab('home')}
          className="squishy-border bg-surface p-3 rounded-xl cursor-pointer hover:scale-105 transition-all"
        >
          <img
            alt="SaD Esports Logo"
            className="h-16 w-16 object-contain rounded-full"
            src={MASCOT_IMAGE_URL}
          />
        </button>

        {/* Footer Navigation */}
        <nav className="flex flex-wrap justify-center gap-8">
          <button
            onClick={() => {
              setActiveTab('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xs font-black text-on-surface-variant hover:text-primary transition-all hover:scale-110 cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={onShowTwitter}
            className="text-xs font-black text-on-surface-variant hover:text-primary transition-all hover:scale-110 cursor-pointer"
          >
            X (Twitter)
          </button>
          <button
            onClick={onJoinDiscord}
            className="text-xs font-black text-on-surface-variant hover:text-primary transition-all hover:scale-110 cursor-pointer"
          >
            Discord
          </button>
        </nav>

        {/* Legal Text */}
        <div className="text-xs font-medium text-on-surface-variant opacity-70 text-center">
          © 2026 SaD Esports. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
