import React, { useState } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [brandName, setBrandName] = useState('');
  const [proposal, setProposal] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (brandName.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-fade-in">
      <div className="bg-surface-container-lowest max-w-md w-full rounded-2xl border-4 border-on-surface shadow-[8px_8px_0px_0px_rgba(26,28,30,1)] overflow-hidden">
        {/* Modal Header */}
        <div className="bg-primary text-on-primary p-4 border-b-4 border-on-surface flex justify-between items-center">
          <h3 className="text-lg font-black tracking-tight flex items-center gap-2">
            <span className="material-symbols-outlined">handshake</span> Partner Invitation
          </h3>
          <button
            onClick={onClose}
            className="text-on-primary hover:bg-primary-container p-1 rounded-lg transition-colors border-2 border-transparent hover:border-on-surface hover:scale-105 animate-all"
          >
            <span className="material-symbols-outlined block">close</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <p className="text-xs font-semibold text-on-surface-variant leading-relaxed">
                Connect your brand with the wildest fanbase in esports. Let’s create partnerships, co-branded drops, and absolute social media chaos.
              </p>

              <div>
                <label className="block text-xs font-black mb-1 text-on-surface uppercase tracking-wider">
                  Brand / Organization Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g., UltraGear Esports Tech"
                  value={brandName}
                  onChange={(e) => setBrandName(e.target.value)}
                  className="w-full px-4 py-2 border-3 border-on-surface rounded-xl focus:outline-none focus:ring-0 focus:border-primary font-bold text-sm bg-surface-container-low"
                />
              </div>

              <div>
                <label className="block text-xs font-black mb-1 text-on-surface uppercase tracking-wider">
                  Partnership Idea / Goals
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="How would you like to sponsor or support the team?"
                  value={proposal}
                  onChange={(e) => setProposal(e.target.value)}
                  className="w-full px-4 py-2 border-3 border-on-surface rounded-xl focus:outline-none focus:ring-0 focus:border-primary font-bold text-sm bg-surface-container-low resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-secondary-container text-on-secondary-container hard-shadow-btn py-3 rounded-xl font-bold text-sm text-center"
              >
                Send Proposal ☄️
              </button>
            </form>
          ) : (
            <div className="flex flex-col items-center text-center gap-4 py-4 animate-fade-in animate-duration-150">
              <div className="w-16 h-16 bg-primary-fixed text-on-primary-fixed rounded-full flex items-center justify-center border-3 border-on-surface shadow-[3px_3px_0px_0px_rgba(26,28,30,1)]">
                <span className="material-symbols-outlined text-[36px] font-bold">mail</span>
              </div>
              <h4 className="text-xl font-black text-on-surface">Proposal Received!</h4>
              <p className="text-sm font-semibold text-on-surface-variant leading-relaxed">
                Thank you, <span className="font-extrabold text-primary">{brandName}</span>. Our partnership managers will review your application and respond within 24 hours. Let's build the future of esports together!
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setBrandName('');
                  setProposal('');
                  onClose();
                }}
                className="w-full bg-on-surface text-white hard-shadow-btn py-2 rounded-xl font-bold text-xs"
              >
                Return to Site
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

interface ScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ScheduleModal: React.FC<ScheduleModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const schedules = [
    { date: 'June 3rd, 2026', time: '18:00 UTC', event: 'VCL Upper Bracket Semis', opponent: 'Zeta Reborn', channel: 'Twitch.tv/VCL_Main' },
    { date: 'June 8th, 2026', time: '19:30 UTC', event: 'VCL Upper Bracket Finals', opponent: 'TBD', channel: 'Twitch.tv/VCL_Main' },
    { date: 'June 15th, 2026', time: '17:00 UTC', event: 'Game Changers Stage 2 Day 1', opponent: 'Soverign GC', channel: 'Twitch.tv/VALORANT_GC' },
    { date: 'June 22nd, 2026', time: '18:00 UTC', event: 'VCT Champions Qualifier Scrims', opponent: 'Apex Legion', channel: 'Discord Private stream' },
  ];

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-fade-in">
      <div className="bg-surface-container-lowest max-w-lg w-full rounded-2xl border-4 border-on-surface shadow-[8px_8px_0px_0px_rgba(26,28,30,1)] overflow-hidden">
        {/* Modal Header */}
        <div className="bg-primary text-on-primary p-4 border-b-4 border-on-surface flex justify-between items-center">
          <h3 className="text-lg font-black tracking-tight flex items-center gap-2">
            <span className="material-symbols-outlined">calendar_month</span> Match Schedules
          </h3>
          <button
            onClick={onClose}
            className="text-on-primary hover:bg-primary-container p-1 rounded-lg transition-colors border-2 border-transparent hover:border-on-surface hover:scale-105"
          >
            <span className="material-symbols-outlined block">close</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[450px] overflow-y-auto">
          <p className="text-xs font-semibold text-on-surface-variant leading-relaxed mb-4">
            Tune in live to support the SaD Esports squad. Bring your spam, cheer emotes, and chaotic energy!
          </p>

          <div className="flex flex-col gap-3">
            {schedules.map((match, idx) => (
              <div
                key={idx}
                className="p-3 bg-surface-container-low border-2 border-on-surface rounded-xl hover:bg-surface-container transition-colors"
              >
                <div className="flex justify-between items-start">
                  <span className="bg-secondary-container text-on-secondary-container border border-on-surface px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase shadow-[1px_1px_0px_0px_rgba(26,28,30,1)]">
                    {match.event}
                  </span>
                  <span className="text-xs font-black text-primary font-mono">{match.date}</span>
                </div>
                <div className="flex justify-between items-center mt-3">
                  <div>
                    <span className="block text-[10px] uppercase text-outline font-black">Opponent</span>
                    <span className="text-sm font-black text-on-surface">vs {match.opponent}</span>
                  </div>
                  <div className="text-right">
                    <span className="block text-[10px] uppercase text-outline font-black">Bcast Channel</span>
                    <span className="text-xs font-bold text-on-surface-variant flex items-center gap-1">
                      <span className="inline-block w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                      {match.channel}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={onClose}
            className="w-full mt-5 bg-on-surface text-white hard-shadow-btn py-2.5 rounded-xl font-bold text-xs"
          >
            Acknowledge
          </button>
        </div>
      </div>
    </div>
  );
};
