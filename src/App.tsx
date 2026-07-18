import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  Twitter,
  Mail,
  ChevronLeft,
  ChevronRight,
  Gamepad2,
  Calendar,
} from 'lucide-react';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Avatar } from './components/Avatar';
import { ContactModal } from './components/DynamicModals';
import { MerchModal } from './components/MerchModal';
import { MATCHES, PARTNERS, PLAYERS, STAFF, MASCOT_IMAGE_URL, SCHEDULE_URL } from './data';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [contactOpen, setContactOpen] = useState(false);
  const [merchOpen, setMerchOpen] = useState(false);
  const matchScrollRef = useRef<HTMLDivElement>(null);

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => setToastMessage(null), 3500);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  const triggerToast = (message: string) => setToastMessage(message);

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-background relative font-sans">
      <div className="absolute inset-0 paw-pattern-bg -z-10 pointer-events-none" />

      <Header activeTab={activeTab} setActiveTab={setActiveTab} onJoinDiscord={() => {}} />

      <main className="flex-grow w-full max-w-7xl mx-auto px-4 md:px-16 py-8 relative z-10">
        <AnimatePresence mode="wait">
          {/* HOME VIEW */}
          {activeTab === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col gap-16"
            >
              {/* Hero Banner Section */}
              <section className="flex flex-col md:flex-row items-center gap-12 mt-4">
                <div className="flex-1 flex flex-col gap-6 items-start">
                  <div className="bg-[#0e76bc] text-white px-4 py-1.5 rounded-full border-2 border-on-surface font-extrabold text-xs inline-block shadow-[2px_2px_0px_0px_rgba(26,28,30,1)] hover:-translate-y-0.5 transition-transform">
                    ⚡ #SaDWin
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-on-surface tracking-tight leading-tight">
                    Nurturing <span className="text-primary text-stroke">Champions.</span> Supplying the Future.
                  </h1>
                  <p className="text-lg font-semibold text-on-surface-variant max-w-lg leading-relaxed">
                    Welcome to the home of SaD Esports. Our mission is centered around supplying the next generation of
                    top-tier competitive esports talent. Track our journey to VCL victory.
                  </p>

                  <div className="flex flex-wrap gap-4 pt-4">
                    <div className="relative group">
                      <button
                        onClick={() => setActiveTab('vcl')}
                        className="bg-primary text-on-primary hard-shadow-btn px-8 py-3.5 rounded-lg font-black text-xs flex items-center gap-2 cursor-pointer"
                      >
                        View Rosters
                        <span className="material-symbols-outlined text-[18px]">expand_more</span>
                      </button>

                      <div className="absolute left-0 mt-2 w-48 bg-surface-container-lowest border-2 border-on-surface rounded-lg shadow-[4px_4px_0px_0px_rgba(26,28,30,1)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-20">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveTab('vcl');
                          }}
                          className="w-full text-left block px-4 py-2.5 hover:bg-primary-container hover:text-on-primary-container text-xs font-black cursor-pointer"
                        >
                          VCL Main Team
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveTab('gc');
                          }}
                          className="w-full text-left block px-4 py-2.5 hover:bg-primary-container hover:text-on-primary-container text-xs font-black cursor-pointer"
                        >
                          Game Changers
                        </button>
                      </div>
                    </div>

                    <button
                      onClick={() => setMerchOpen(true)}
                      className="bg-surface-container-lowest text-on-surface hard-shadow-btn px-8 py-3.5 rounded-lg font-black text-xs cursor-pointer hover:bg-surface-container-low"
                    >
                      Shop Merch
                    </button>
                  </div>
                </div>

                <div className="flex-1 w-full max-w-md md:max-w-none relative">
                  <div className="relative w-full aspect-[0.95] md:aspect-[0.9] rounded-2xl overflow-hidden border-4 border-on-surface shadow-[8px_8px_0px_0px_rgba(26,28,30,1)] bg-surface-container-highest flex items-center justify-center p-6 group cursor-pointer">
                    <div className="absolute inset-0 bg-primary-container/10 group-hover:scale-105 transition-transform duration-300" />
                    <img
                      alt="SaD Esports Blue Bear Mascot"
                      className="w-4/5 h-4/5 object-contain rounded-xl z-10 transition-transform duration-350 hover:scale-110 active:rotate-3"
                      src={MASCOT_IMAGE_URL}
                    />
                  </div>
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary-container rounded-full border-3 border-on-surface shadow-[4px_4px_0px_0px_rgba(26,28,30,1)] -z-10 flex items-center justify-center animate-spin-slow">
                    <span className="material-symbols-outlined text-[42px] text-on-secondary-container font-black">
                      star
                    </span>
                  </div>
                </div>
              </section>

              {/* Match Results section */}
              <section className="relative py-4 border-t-3 border-on-surface/30">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 pt-4">
                  <div>
                    <span className="text-xs font-black uppercase text-primary tracking-widest block">
                      VCT Challengers
                    </span>
                    <h2 className="text-2xl md:text-3xl font-black text-on-surface">Recent & Active Matches</h2>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-outline-variant italic hidden md:inline">
                      Scroll or use buttons
                    </span>
                    <div className="flex gap-2">
                      <button
                        onClick={() => matchScrollRef.current?.scrollBy({ left: -340, behavior: 'smooth' })}
                        className="w-10 h-10 rounded-full border-2 border-on-surface bg-white shadow-[2px_2px_0px_0px_rgba(26,28,30,1)] flex items-center justify-center cursor-pointer hover:bg-surface-container-low active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_rgba(26,28,30,1)] transition-all"
                        title="Scroll Left"
                        aria-label="Scroll Left"
                      >
                        <ChevronLeft className="w-5 h-5 font-black text-on-surface" />
                      </button>
                      <button
                        onClick={() => matchScrollRef.current?.scrollBy({ left: 340, behavior: 'smooth' })}
                        className="w-10 h-10 rounded-full border-2 border-on-surface bg-white shadow-[2px_2px_0px_0px_rgba(26,28,30,1)] flex items-center justify-center cursor-pointer hover:bg-surface-container-low active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_rgba(26,28,30,1)] transition-all"
                        title="Scroll Right"
                        aria-label="Scroll Right"
                      >
                        <ChevronRight className="w-5 h-5 font-black text-on-surface" />
                      </button>
                    </div>
                  </div>
                </div>

                <div
                  ref={matchScrollRef}
                  className="flex overflow-x-auto gap-6 pb-4 custom-scrollbar snap-x snap-mandatory scroll-smooth"
                >
                  {MATCHES.map((match) => (
                    <div
                      key={match.id}
                      className="min-w-[300px] md:min-w-[380px] hard-shadow-card rounded-xl p-6 bg-surface-container-lowest snap-center shrink-0 flex flex-col justify-between border-3 border-on-surface"
                    >
                      <div>
                        <div className="flex justify-between items-center mb-4 border-b-2 border-surface-variant pb-3">
                          <span className="font-extrabold text-xs text-outline tracking-wider uppercase">
                            {match.stage}
                          </span>
                          <span
                            className={`px-2.5 py-0.5 rounded-full text-[10px] font-black border border-on-surface/20 shadow-[1px_1px_0px_0px_rgba(26,28,30,1)] ${
                              match.status === 'WIN'
                                ? 'bg-tertiary-container text-on-tertiary'
                                : match.status === 'LOSS'
                                ? 'bg-red-100 text-red-800'
                                : 'bg-primary-fixed text-on-primary-fixed'
                            }`}
                          >
                            {match.status}
                          </span>
                        </div>

                        <div className="flex justify-between items-center my-6">
                          <div className="flex flex-col items-center gap-2 flex-1">
                            <div className="w-12 h-12 bg-white rounded-full border-2 border-on-surface flex items-center justify-center overflow-hidden p-1">
                              <img alt="SaD Logo" className="w-full h-full object-contain" src={MASCOT_IMAGE_URL} />
                            </div>
                            <span className="font-black text-sm text-on-surface">SaD</span>
                          </div>

                          <div className="text-center px-4 flex flex-col items-center">
                            {match.status !== 'UPCOMING' ? (
                              <div className="text-2xl md:text-3xl font-black text-primary tracking-wide">
                                {match.scoreSaD} – {match.scoreOpp}
                              </div>
                            ) : (
                              <div className="text-xs font-black text-on-secondary-fixed bg-secondary-fixed border px-2 py-0.5 rounded-md uppercase">
                                VS
                              </div>
                            )}
                            <span className="text-[10px] uppercase font-black text-outline tracking-wider mt-1">
                              Result
                            </span>
                          </div>

                          <div className="flex flex-col items-center gap-2 flex-1">
                            <div className="w-12 h-12 bg-white rounded-full border-2 border-on-surface flex items-center justify-center overflow-hidden p-1">
                              <img
                                alt={`${match.opponent} Logo`}
                                className="w-full h-full object-contain"
                                src={match.opponentLogoUrl}
                              />
                            </div>
                            <span className="font-black text-sm text-on-surface-variant">{match.opponent}</span>
                          </div>
                        </div>
                      </div>

                      <a
                        href={match.statsUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="w-full text-center py-2.5 border-2 border-on-surface rounded-lg font-black text-xs hover:bg-surface-container-low transition-colors mt-2 block shadow-[2px_2px_0px_0px_rgba(26,28,30,1)] active:translate-y-0.5"
                      >
                        {match.status === 'UPCOMING' ? 'Match Details ↗' : 'View Stats ↗'}
                      </a>
                    </div>
                  ))}
                </div>
              </section>
            </motion.div>
          )}

          {/* PARTNERS VIEW */}
          {activeTab === 'partners' && (
            <motion.div
              key="partners"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col gap-12"
            >
              <div className="text-center max-w-2xl mx-auto my-6">
                <span className="bg-primary-fixed text-on-primary-fixed border border-on-surface px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-3 inline-block">
                  Brand Affiliates
                </span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-on-surface leading-tight">
                  Our <span className="text-primary">Mischievous</span> Partners
                </h1>
                <div className="mt-6 bg-surface-container-lowest border-3 border-on-surface p-6 rounded-xl shadow-[4px_4px_0px_0px_rgba(26,28,30,1)]">
                  <p className="text-sm font-bold text-on-surface-variant leading-relaxed">
                    We team up with the best brands in the game to bring you top-tier esports entertainment. Support the
                    brands that support the chaos.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {PARTNERS.map((partner) => {
                  const baseClassName =
                    'hard-shadow-card rounded-xl p-6 bg-surface-container-lowest border-3 border-on-surface block transition-transform duration-200';

                  const content = (
                    <div className="flex flex-col items-center text-center gap-6 h-full justify-between">
                      <div className="flex flex-col items-center text-center gap-6">
                        <div className="w-20 h-20 bg-slate-100 rounded-lg border-2 border-on-surface shadow-[2px_2px_0px_0px_rgba(26,28,30,1)] p-4 flex items-center justify-center">
                          {partner.logoType === 'lightning' && (
                            <div className="text-yellow-500 animate-pulse">
                              <span className="material-symbols-outlined text-[48px] font-black">bolt</span>
                            </div>
                          )}
                          {partner.logoType === 'mouse' && (
                            <div className="text-slate-700">
                              <span className="material-symbols-outlined text-[48px] font-black">mouse</span>
                            </div>
                          )}
                          {partner.logoType === 'shoe' && (
                            <div className="text-slate-600">
                              <span className="material-symbols-outlined text-[48px] font-black">steps</span>
                            </div>
                          )}
                          {partner.logoType === 'server' && (
                            <div className="text-blue-600">
                              <span className="material-symbols-outlined text-[48px] font-black">dns</span>
                            </div>
                          )}
                          {partner.logoType === 'eye' && (
                            <div className="text-emerald-600">
                              <span className="material-symbols-outlined text-[48px] font-black">visibility</span>
                            </div>
                          )}
                        </div>

                        <div>
                          <h3 className="text-lg font-black text-on-surface mb-2">{partner.name}</h3>
                          <p className="text-xs font-semibold text-on-surface-variant leading-relaxed">
                            {partner.description}
                          </p>
                        </div>
                      </div>

                      {partner.url && (
                        <div className="text-xs font-black text-primary hover:underline mt-2 flex items-center gap-1">
                          Visit Brand Website ↗
                        </div>
                      )}
                    </div>
                  );

                  if (partner.url) {
                    return (
                      <a
                        key={partner.id}
                        href={partner.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${baseClassName} cursor-pointer hover:-translate-y-1`}
                      >
                        {content}
                      </a>
                    );
                  }

                  return (
                    <div key={partner.id} className={baseClassName}>
                      {content}
                    </div>
                  );
                })}

                {/* Card 6: Join the Pack (Blue) */}
                <div className="bg-primary text-on-primary border-3 border-on-surface rounded-xl p-6 flex flex-col justify-between items-center text-center gap-6 shadow-[4px_4px_0px_0px_rgba(26,28,30,1)] transition-transform hover:-translate-y-1">
                  <div className="w-16 h-16 bg-white/10 rounded-full border-2 border-white/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[36px] text-white">groups</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-black mb-2">Want to join the pack?</h3>
                    <p className="text-xs font-bold text-on-primary-container leading-relaxed opacity-90">
                      Partner up with SaD and feature your tech, wear, or drink to millions of global gaming fans.
                    </p>
                  </div>
                  <button
                    onClick={() => setContactOpen(true)}
                    className="w-full py-3 bg-white text-on-surface rounded-lg font-black text-xs border-2 border-on-surface shadow-[3px_3px_0px_0px_rgba(26,28,30,1)] hover:bg-slate-50 transition-all flex items-center justify-center gap-2 cursor-pointer active:translate-y-0.5"
                  >
                    Contact Us <span className="material-symbols-outlined text-[16px] font-bold">arrow_forward</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* VCL TEAM VIEW */}
          {activeTab === 'vcl' && (
            <motion.div
              key="vcl"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col gap-12"
            >
              <section className="flex flex-col gap-6 mt-4">
                <div className="bg-primary/5 border-3 border-on-surface rounded-2xl p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(26,28,30,1)] flex flex-col md:flex-row gap-8 items-center justify-between text-left">
                  <div className="flex flex-col gap-5 items-start">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-blue-100 border-2 border-on-surface flex items-center justify-center font-bold text-xs shadow-[1.5px_1.5px_0px_0px_rgba(26,28,30,1)]">
                        🏆
                      </div>
                      <span className="bg-blue-100 text-blue-800 border-2 border-on-surface px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider">
                        VALORANT Challengers League
                      </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-on-surface tracking-tight leading-tight">
                      The <span className="text-primary font-extrabold underline decoration-wavy decoration-3 underline-offset-8">Kings</span> of Chaos.
                    </h1>
                    <p className="text-sm font-semibold text-on-surface-variant max-w-2xl leading-relaxed">
                      Meet our premier VCL roster dominating Split 3. Unconventional tacticians, crispy headshots, and an
                      unrelenting drive to secure the trophy.
                    </p>
                  </div>
                  <div className="shrink-0 w-24 h-24 bg-blue-100 text-blue-700 border-3 border-on-surface rounded-full flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(26,28,30,1)]">
                    <span className="material-symbols-outlined text-[48px] font-black text-primary animate-pulse">
                      emoji_events
                    </span>
                  </div>
                </div>
              </section>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PLAYERS.filter((p) => p.team === 'VCL').map((player) => {
                  const isIgl = player.role === 'IGL / CAPTAIN';
                  return (
                    <div
                      key={player.id}
                      className={`hard-shadow-card rounded-2xl border-3 border-on-surface p-6 bg-surface-container-lowest flex flex-col justify-between ${
                        isIgl ? 'md:col-span-2 flex-row gap-6 p-8 items-center' : ''
                      }`}
                    >
                      <div
                        className={`flex ${
                          isIgl ? 'flex-row gap-6 items-center flex-1' : 'flex-col items-center text-center gap-4'
                        }`}
                      >
                        <div className="relative">
                          {isIgl && (
                            <span className="absolute -top-3 -left-3 bg-secondary-container border border-on-surface text-[10px] uppercase font-black px-2 py-0.5 rounded-full rotate-[-6deg] shadow-xs z-10">
                              IGL/CO-LEAD
                            </span>
                          )}
                          {player.avatarUrl ? (
                            <img
                              src={player.avatarUrl}
                              alt={`${player.nickname}'s avatar`}
                              className={`rounded-full object-cover border-2 border-on-surface bg-zinc-800 ${
                                isIgl ? 'w-28 h-28 md:w-36 md:h-36' : 'w-24 h-24'
                              }`}
                            />
                          ) : (
                            <Avatar
                              style={player.avatarStyle || { skinColor: '#fdf2f8' }}
                              className={`${isIgl ? 'w-28 h-28 md:w-36 md:h-36' : 'w-24 h-24'}`}
                            />
                          )}
                        </div>

                        <div className={`flex flex-col ${isIgl ? 'items-start text-left' : 'items-center'} gap-2`}>
                          <div className="flex items-center gap-2">
                            <span className="bg-primary/10 text-primary border border-primary/30 px-2 py-0.5 rounded-full text-[10px] font-black uppercase">
                              {player.role}
                            </span>
                          </div>
                          <h3 className="text-xl font-black text-on-surface">{player.nickname}</h3>
                          <span className="text-xs text-outline font-extrabold">{player.realName}</span>
                          <p className="text-xs font-semibold text-on-surface-variant leading-relaxed max-w-sm">
                            {player.bio}
                          </p>
                        </div>
                      </div>

                      <div
                        className={`flex gap-3 mt-6 ${
                          isIgl ? 'flex-col' : 'justify-center w-full border-t-2 border-surface-variant pt-4'
                        }`}
                      >
                        <a
                          href={player.twitterUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="px-3.5 py-2 border-2 border-on-surface rounded-lg hover:bg-slate-100 transition-colors shadow-[2px_2px_0px_0px_rgba(26,28,30,1)] active:translate-y-0.5 flex items-center justify-center cursor-pointer"
                          title={`Twitter Profile: ${player.twitter}`}
                          aria-label="Twitter handle"
                        >
                          <Twitter className="w-4 h-4 text-on-surface" />
                        </a>
                        <a
                          href={player.gameProfileUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="px-3.5 py-2 border-2 border-on-surface rounded-lg hover:bg-slate-100 transition-colors shadow-[2px_2px_0px_0px_rgba(26,28,30,1)] active:translate-y-0.5 flex items-center justify-center cursor-pointer"
                          title={`In-Game Profile: ${player.gameProfile}`}
                          aria-label="Game stats"
                        >
                          <Gamepad2 className="w-4 h-4 text-on-surface" />
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="bg-primary/10 border-3 border-on-surface rounded-2xl p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(26,28,30,1)] flex flex-col md:flex-row justify-between items-center gap-6 mt-8">
                <div>
                  <h3 className="text-xl md:text-2xl font-black text-on-surface mb-2">Want to see them in action?</h3>
                  <p className="text-sm font-semibold text-on-surface-variant max-w-lg leading-relaxed">
                    Follow our match schedule and tune in to the VCL streams to support the SaD Esports squad.
                  </p>
                </div>
                <a
                  href={SCHEDULE_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="bg-white text-on-surface hard-shadow-btn px-6 py-3 rounded-lg font-black text-xs flex items-center gap-2 cursor-pointer hover:bg-slate-50 inline-flex"
                >
                  <Calendar className="w-4 h-4" /> View Schedule ↗
                </a>
              </div>
            </motion.div>
          )}

          {/* GAME CHANGERS VIEW */}
          {activeTab === 'gc' && (
            <motion.div
              key="gc"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col gap-12"
            >
              <section className="flex flex-col gap-6 mt-4">
                <div className="bg-pink-500/5 border-3 border-on-surface rounded-2xl p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(26,28,30,1)] flex flex-col md:flex-row gap-8 items-center justify-between text-left">
                  <div className="flex flex-col gap-5 items-start">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-pink-100 border-2 border-on-surface flex items-center justify-center font-bold text-xs shadow-[1.5px_1.5px_0px_0px_rgba(26,28,30,1)]">
                        ⭐
                      </div>
                      <span className="bg-rose-100 text-rose-800 border-2 border-on-surface px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider">
                        VALORANT Game Changers
                      </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-on-surface tracking-tight leading-tight">
                      The <span className="text-pink-500 font-extrabold underline decoration-wavy decoration-3 underline-offset-8">Queens</span> of SaD.
                    </h1>
                    <p className="text-sm font-semibold text-on-surface-variant max-w-2xl leading-relaxed">
                      Fierce, unyielding, and focused on greatness. Meet the formidable squad tearing through the Game
                      Changers circuit. Expect no mercy, just absolute dominance.
                    </p>
                  </div>
                  <div className="shrink-0 w-24 h-24 bg-pink-100 text-pink-700 border-3 border-on-surface rounded-full flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(26,28,30,1)]">
                    <span className="material-symbols-outlined text-[48px] font-black text-pink-600 animate-pulse">
                      sparkles
                    </span>
                  </div>
                </div>
              </section>

              <section className="pt-4 border-t-3 border-on-surface/30">
                <h2 className="text-2xl font-black text-on-surface mb-8 border-b-3 border-on-surface text-left pb-1 inline-block">
                  Starting Lineup
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {PLAYERS.filter((p) => p.team === 'GC').map((player) => (
                    <div
                      key={player.id}
                      className="hard-shadow-card rounded-xl border-3 border-on-surface bg-surface-container-lowest p-6 flex flex-col justify-between"
                    >
                      <div className="relative">
                        <div className="flex flex-col items-center gap-4 text-center">
                          <span className="bg-slate-100 border border-slate-300 text-slate-800 text-[10px] font-black tracking-wider uppercase px-2 py-0.5 rounded-full mt-1">
                            👑 {player.role}
                          </span>
                          <Avatar style={player.avatarStyle} className="w-24 h-24" />
                          <div>
                            <h3 className="text-xl font-black text-on-surface">"{player.nickname}"</h3>
                            <span className="text-xs text-outline font-extrabold italic uppercase">
                              {player.realName}
                            </span>
                          </div>
                          <p className="text-xs font-semibold text-on-surface-variant leading-relaxed max-w-xs">
                            {player.bio}
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-2.5 mt-6 border-t-2 border-surface-variant pt-4 items-center">
                        <a
                          href={player.twitterUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="p-2 border-2 border-on-surface rounded-lg hover:bg-slate-100 transition-colors shadow-[2px_2px_0px_0px_rgba(26,28,30,1)] active:translate-y-0.5 flex items-center justify-center"
                          title={`Twitter Profile: ${player.twitter}`}
                          aria-label="Twitter profile"
                        >
                          <Twitter className="w-4 h-4 text-on-surface" />
                        </a>

                        <a
                          href={player.gameProfileUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="flex-1 py-1.5 bg-secondary-container text-on-secondary-container border-2 border-on-surface rounded-lg font-black text-[11px] shadow-[2px_2px_0px_0px_rgba(26,28,30,1)] hover:bg-yellow-300 transition-all flex items-center justify-center gap-1 cursor-pointer"
                          title={`Gaming Profile: ${player.gameProfile}`}
                        >
                          👾 Gaming Profile
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </motion.div>
          )}

          {/* STAFF VIEW */}
          {activeTab === 'staff' && (
            <motion.div
              key="staff"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col gap-16"
            >
              <div className="text-center max-w-3xl mx-auto my-4">
                <span className="bg-primary-fixed text-on-primary-fixed border border-on-surface px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-3 inline-block">
                  Staff Directory
                </span>
                <h1 className="text-3xl md:text-5xl font-black text-on-surface leading-tight">
                  The Minds Behind the Mischief
                </h1>
                <p className="text-sm font-bold text-on-surface-variant mt-4 leading-relaxed max-w-xl mx-auto">
                  Meet the management and coaching staff steering SaD Esports to victory. A mix of strategic brilliance
                  and chaotic energy.
                </p>
              </div>

              <section className="relative">
                <div className="flex items-center gap-3 mb-8 border-b-2 border-on-surface/20 pb-3">
                  <div className="w-3 h-8 bg-primary rounded-full border border-on-surface" />
                  <h2 className="text-2xl font-black text-on-surface tracking-tight">Management</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {STAFF.filter((s) => s.section === 'Management').map((member) => (
                    <div
                      key={member.id}
                      className="hard-shadow-card rounded-xl border-3 border-on-surface bg-surface-container-lowest p-6 flex flex-col justify-between"
                    >
                      <div className="flex flex-col items-center text-center gap-3">
                        <Avatar style={member.avatarStyle} className="w-20 h-20" />
                        <div>
                          <h3 className="text-lg font-black text-on-surface">{member.nickname}</h3>
                          <span className="text-xs text-primary font-black uppercase tracking-wide italic">
                            {member.role}
                          </span>
                        </div>
                        <p className="text-xs font-semibold text-on-surface-variant leading-relaxed">{member.bio}</p>
                      </div>

                      <div className="flex gap-2 mt-6 border-t-2 border-surface-variant pt-4 justify-center">
                        <a
                          href={member.twitterUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="px-3 py-1.5 border-2 border-on-surface rounded-lg hover:bg-slate-100 shadow-[2px_2px_0px_0px_rgba(26,28,30,1)] active:translate-y-0.5 flex justify-center items-center cursor-pointer"
                          title={`Twitter Profile: ${member.twitter}`}
                          aria-label="Twitter handle"
                        >
                          <Twitter className="w-4 h-4 text-on-surface" />
                        </a>
                        <a
                          href={member.contactUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="px-3 py-1.5 border-2 border-on-surface rounded-lg hover:bg-slate-100 shadow-[2px_2px_0px_0px_rgba(26,28,30,1)] active:translate-y-0.5 flex justify-center items-center cursor-pointer"
                          title={`Contact: ${member.contact}`}
                          aria-label="Staff Email Contact"
                        >
                          <Mail className="w-4 h-4 text-on-surface" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="relative pt-4 border-t-3 border-on-surface/30">
                <div className="flex items-center gap-3 mb-8 border-b-2 border-on-surface/20 pb-3">
                  <div className="w-3.5 h-3.5 rounded-full bg-secondary-container border border-on-surface" />
                  <h2 className="text-2xl font-black text-on-surface tracking-tight">Coaching Staff</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {STAFF.filter((s) => s.section === 'Coaching').map((member) => (
                    <div
                      key={member.id}
                      className="hard-shadow-card rounded-xl border-3 border-on-surface bg-surface-container-lowest p-5 flex flex-col justify-between relative"
                    >
                      {member.badge && (
                        <span
                          className={`absolute top-3 right-3 border border-on-surface text-[9px] font-black px-2 py-0.5 rounded-md shadow-[1px_1px_0px_0px_rgba(26,28,30,1)] uppercase tracking-wider ${
                            member.badge === 'VCL'
                              ? 'bg-blue-100 text-blue-800'
                              : member.badge === 'GC'
                              ? 'bg-pink-100 text-pink-800'
                              : 'bg-zinc-100 text-zinc-800'
                          }`}
                        >
                          {member.badge}
                        </span>
                      )}

                      <div className="flex flex-col items-center text-center gap-3">
                        <Avatar style={member.avatarStyle} className="w-16 h-16" />
                        <div>
                          <h3 className="text-base font-black text-on-surface">{member.nickname}</h3>
                          <span className="text-xs text-outline font-extrabold">{member.role}</span>
                        </div>
                      </div>

                      <div className="flex gap-2.5 mt-5 border-t-2 border-surface-variant pt-3 justify-center">
                        <a
                          href={member.twitterUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="p-1.5 border-2 border-on-surface rounded-lg hover:bg-slate-100 shadow-[2px_2px_0px_0px_rgba(26,28,30,1)] active:translate-y-0.5 flex justify-center items-center cursor-pointer"
                          title={`Twitter Profile: ${member.twitter}`}
                          aria-label="Twitter Profile"
                        >
                          <Twitter className="w-3.5 h-3.5 text-on-surface" />
                        </a>
                        <a
                          href={member.contactUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="p-1.5 border-2 border-on-surface rounded-lg hover:bg-slate-100 shadow-[2px_2px_0px_0px_rgba(26,28,30,1)] active:translate-y-0.5 flex justify-center items-center cursor-pointer"
                          title={`Contact: ${member.contact}`}
                          aria-label="Contact / Inquiries"
                        >
                          <Mail className="w-3.5 h-3.5 text-on-surface" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer
        setActiveTab={setActiveTab}
        onJoinDiscord={() => {}}
        onShowTwitter={() => triggerToast('🐦 Follow @SaDEsports on X (Twitter) for live roster updates and scrim streams!')}
      />

      <MerchModal isOpen={merchOpen} onClose={() => setMerchOpen(false)} />
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />

      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            className="fixed bottom-6 right-6 bg-slate-900 text-white border-2 border-white px-5 py-3.5 rounded-xl shadow-[4px_4px_0px_0px_rgba(26,28,30,1)] z-50 flex items-center gap-3 text-xs font-bold"
          >
            <span className="text-secondary-container material-symbols-outlined block">info</span>
            {toastMessage}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
