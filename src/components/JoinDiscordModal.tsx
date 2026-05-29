import React, { useState } from 'react';

interface JoinDiscordModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const JoinDiscordModal: React.FC<JoinDiscordModalProps> = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('flex');
  const [registered, setRegistered] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      setRegistered(true);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-fade-in">
      <div className="bg-surface-container-lowest max-w-md w-full rounded-2xl border-4 border-on-surface shadow-[8px_8px_0px_0px_rgba(26,28,30,1)] overflow-hidden">
        {/* Modal Header */}
        <div className="bg-primary text-on-primary p-4 border-b-4 border-on-surface flex justify-between items-center">
          <h3 className="text-lg font-black tracking-tight flex items-center gap-2">
            <span className="material-symbols-outlined">forum</span> Join SaD Discord
          </h3>
          <button
            onClick={onClose}
            className="text-on-primary hover:bg-primary-container p-1 rounded-lg transition-colors border-2 border-transparent hover:border-on-surface"
          >
            <span className="material-symbols-outlined block">close</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {!registered ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <p className="text-sm font-semibold text-on-surface-variant leading-relaxed">
                Unlock exclusive channels, participate in fan scrims, track match statistics, and join our vibrant community of over 5,000 members dedicated to supporting the next generation of esports talent!
              </p>

              <div>
                <label className="block text-xs font-black mb-1 text-on-surface uppercase tracking-wider">
                  Valorant ID / Gaming Tag
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g., ShadowPlayer#1234"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-2 border-3 border-on-surface rounded-xl focus:outline-none focus:ring-0 focus:border-primary font-bold text-sm bg-surface-container-low"
                />
              </div>

              <div>
                <label className="block text-xs font-black mb-1 text-on-surface uppercase tracking-wider">
                  Select Your Main Role
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'duelist', label: 'Duelist 🔥' },
                    { id: 'initiator', label: 'Initiator ⚡' },
                    { id: 'sentinel', label: 'Sentinel 🛡️' },
                    { id: 'controller', label: 'Controller 🔮' },
                    { id: 'flex', label: 'Flex 🌀' }
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setRole(item.id)}
                      className={`py-2 px-3 border-2 rounded-xl text-left font-bold text-xs transition-all ${
                        role === item.id
                          ? 'border-primary bg-primary-fixed text-on-primary-fixed shadow-[2px_2px_0px_0px_rgba(26,28,30,1)]'
                          : 'border-slate-300 hover:border-on-surface bg-surface-container-lowest'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="mt-2 w-full bg-secondary-container text-on-secondary-container hard-shadow-btn py-3 rounded-xl font-bold text-sm text-center"
              >
                Generate Discord Invite Link 🤖
              </button>
            </form>
          ) : (
            <div className="flex flex-col items-center text-center gap-4 py-4 animate-fade-in">
              <div className="w-16 h-16 bg-tertiary-fixed text-on-tertiary-fixed rounded-full flex items-center justify-center border-3 border-on-surface shadow-[3px_3px_0px_0px_rgba(26,28,30,1)]">
                <span className="material-symbols-outlined text-[36px] font-bold">check_circle</span>
              </div>
              <h4 className="text-xl font-black text-on-surface">Welcome, {username.split('#')[0]}!</h4>
              <p className="text-sm font-semibold text-on-surface-variant">
                Your role assignment: <span className="text-primary font-black uppercase">{role}</span> is set. Use this exclusive temporary invitation token to join:
              </p>
              <div className="bg-slate-900 text-tertiary-fixed p-3 rounded-lg font-mono text-sm tracking-wider border-2 border-on-surface w-full shadow-[2px_2px_0px_0px_rgba(26,28,30,1)]">
                discord.gg/sad-esports-{Math.random().toString(36).substring(2, 7).toUpperCase()}
              </div>
              <button
                onClick={() => {
                  setRegistered(false);
                  setUsername('');
                  onClose();
                }}
                className="w-full bg-primary text-on-primary hard-shadow-btn py-2.5 rounded-xl font-bold text-xs"
              >
                Done / Launch Discord
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
