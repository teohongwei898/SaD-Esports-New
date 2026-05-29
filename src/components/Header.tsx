import React, { useState } from 'react';
import { MASCOT_IMAGE_URL } from '../data';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onJoinDiscord: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, onJoinDiscord }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const tabs = [
    { id: 'home', label: 'Home' },
    { id: 'partners', label: 'Partners' },
    { id: 'vcl', label: 'VCL Team' },
    { id: 'gc', label: 'Game Changers' },
    { id: 'staff', label: 'Staff' }
  ];

  return (
    <nav className="bg-surface text-primary border-b-2 border-on-surface shadow-[4px_4px_0px_0px_rgba(26,28,30,1)] sticky top-0 z-50 w-full">
      <div className="flex justify-between items-center w-full px-4 md:px-16 py-4 max-w-7xl mx-auto">
        {/* Brand */}
        <button 
          onClick={() => setActiveTab('home')}
          className="flex items-center gap-3 cursor-pointer text-left hover:scale-105 transition-transform"
        >
          <img
            alt="SaD Esports Logo"
            className="h-10 w-10 object-contain rounded-circle"
            src={MASCOT_IMAGE_URL}
          />
          <span className="text-2xl font-black text-primary tracking-tight font-sans">
            SaD <span className="text-on-surface">Esports</span>
          </span>
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 items-center">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <li key={tab.id}>
                <button
                  onClick={() => setActiveTab(tab.id)}
                  className={`cursor-pointer transition-all px-2 py-1 ${
                    isActive
                      ? 'text-primary border-b-3 border-primary pb-1 font-extrabold text-sm'
                      : 'text-on-surface-variant hover:text-primary hover:bg-surface-container-low rounded font-bold text-sm'
                  }`}
                >
                  {tab.label}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Trailing Action */}
        <div className="hidden md:block">
          <a
            href="https://discord.gg/fGVEZaB3rn"
            target="_blank"
            rel="noreferrer noopener"
            className="bg-primary text-on-primary hard-shadow-btn px-6 py-2 rounded-lg font-bold text-xs inline-block"
          >
            Join Discord ↗
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-primary p-1 border-2 border-primary rounded-lg hover:bg-surface-container"
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-[28px] block">
            {mobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t-2 border-on-surface bg-surface px-4 py-6 flex flex-col gap-4 animate-fade-in shadow-[0px_4px_10px_rgba(0,0,0,0.05)]">
          <ul className="flex flex-col gap-3">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <li key={tab.id}>
                  <button
                    onClick={() => {
                      setActiveTab(tab.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full text-left p-3 rounded-lg font-bold transition-all ${
                      isActive
                        ? 'bg-primary text-on-primary border-2 border-on-surface'
                        : 'text-on-surface-variant hover:bg-surface-container'
                    }`}
                  >
                    {tab.label}
                  </button>
                </li>
              );
            })}
          </ul>
          <a
            href="https://discord.gg/fGVEZaB3rn"
            target="_blank"
            rel="noreferrer noopener"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full bg-primary text-on-primary hard-shadow-btn py-3 rounded-lg font-bold text-sm text-center block"
          >
            Join Discord ↗
          </a>
        </div>
      )}
    </nav>
  );
};
