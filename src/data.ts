import { Match, Partner, Player, StaffMember } from './types';

export const MASCOT_IMAGE_URL = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDScN8sSjYR3g8VzufS0GTEw-0N7oW-6gUKgdOJ6txfuriYJty2-AELIvl5VLtNU3ezEk_mJkBMEyohTboL8bIHCbBvsAenpDx8UoUz6UgxXRVay-QbigriTcrO3BeF8uwzCXJ8LMIR-Fao4GXlrj_lLegUXfN7_CVuj-YO-mom7CoEJ0p79A0b-g6lLHX36r4mqHCV5zvE0YStT2bB-vNCLW5krpxbwsaP2UJD_SJSryDtM5ws95YUQXvsRQ5KPiIR7Adx9jiEgT_v';

export const SCHEDULE_URL = 'https://www.vlr.gg/team/13920/sad-esports';

export const MATCHES: Match[] = [
  {
    id: 'm1',
    stage: 'VCL 2026: North America ACE Stage 3',
    opponent: 'FlyQuest',
    scoreSaD: 2,
    scoreOpp: 0,
    status: 'WIN',
    opponentLogo: 'FQ',
    opponentLogoUrl: 'https://owcdn.net/img/69cac541ed59b.png',
    date: '2026-05-29',
    time: '18:00',
    statsUrl: 'https://www.vlr.gg/685253/sad-esports-vs-flyquest-challengers-2026-north-america-ace-stage-3-r2-0-1'
  },
  {
    id: 'm2',
    stage: 'VCL 2026: North America ACE Stage 3',
    opponent: 'YFP',
    scoreSaD: 2,
    scoreOpp: 0,
    status: 'WIN',
    opponentLogo: 'YFP',
    opponentLogoUrl: 'https://owcdn.net/img/677826ad11d3b.png',
    date: '2026-05-20',
    time: '19:30',
    statsUrl: 'https://www.vlr.gg/681523/sad-esports-vs-yfp-challengers-2026-north-america-ace-stage-3-r1'
  },
   {
    id: 'm3',
    stage: 'VCL 2026: North America ACE Stage 3',
    opponent: 'NRG Academy',
    scoreSaD: 2,
    scoreOpp: 1,
    status: 'WIN',
    opponentLogo: 'NRG',
    opponentLogoUrl: 'https://owcdn.net/img/6610f026c1a9e.png',
    date: '2026-06-03',
    time: '19:30',
    statsUrl: 'https://www.vlr.gg/681523/sad-esports-vs-yfp-challengers-2026-north-america-ace-stage-3-r1'
  },
  {
    id: 'm4',
    stage: 'VCL 2026: North America ACE Stage 3',
    opponent: 'M80',
    scoreSaD: 0,
    scoreOpp: 0,
    status: 'UPCOMING',
    opponentLogo: 'M80',
    opponentLogoUrl: 'https://owcdn.net/img/6945c73504452.pngg',
    date: '2026-06-19',
    time: '19:00',
    statsUrl: 'https://www.vlr.gg/688234/m80-vs-sad-esports-challengers-2026-north-america-ace-stage-3-r4-3-0'
  }
];

export const PARTNERS: Partner[] = [
  {
    id: 'p1',
    name: 'CRIT',
    logoType: 'shoe',
    description: 'Premier apparel company supplying top-tier gaming wear and performance aesthetics to the next generation of talent.'
  },
  {
    id: 'p2',
    name: 'COMPREADY',
    logoType: 'server',
    description: 'Specializing in hyper-optimized PC tuning and custom operating setups for peak performance.'
  },
  {
    id: 'p3',
    name: 'Your Brand Here',
    logoType: 'lightning',
    description: 'This slot is reserved for visionary brands. Partner with us to fuel the next generation of esports champions!'
  },
  {
    id: 'p4',
    name: 'Your Brand Here',
    logoType: 'mouse',
    description: 'Showcase your hardware or gaming products here to millions of global competitive esports enthusiasts.'
  },
  {
    id: 'p5',
    name: 'Your Brand Here',
    logoType: 'eye',
    description: 'A perfect showcase space for cutting-edge monitors, screens, or beverage sponsors.'
  }
];

export const PLAYERS: Player[] = [
  // === VCL ROSTER ===
  {
    id: 'vcl1',
    nickname: 'welyy',
    realName: 'Carter Steven Mikkelsen',
    role: 'INITIATOR',
    team: 'VCL',
    bio: 'The strategic blueprint of the squad. Locks down the Initiator slot on Sova, tracking down enemy setups with precise recon bolts to map out our line of scrimmage.',
    twitter: '@welyy',
    twitterUrl: 'https://x.com/welyyval',
    gameProfile: 'SAD welyy',
    gameProfileUrl: 'https://www.vlr.gg/player/16671/welyy',
    avatarStyle: {
      skinColor: '#fecaca',
      hairColor: '#451a03',
      hairStyle: 'classic',
      shirtColor: '#0ea5e9',
      accessories: 'none'
    }
  },
  {
    id: 'vcl2',
    nickname: 'payne',
    realName: 'Kaiden Michael Peterson',
    role: 'CONTROLLER',
    team: 'VCL',
    bio: 'Commanding map architecture from the shadows. Holds down our Controller lines on Omen, anchoring positions and slicing up lines of sight with calculated utility.',
    twitter: '@payneiwnl',
    twitterUrl: 'https://x.com/Payneiwnl',
    gameProfile: 'SAD payne',
    gameProfileUrl: 'https://www.vlr.gg/player/39239/payne',
    avatarStyle: {
      skinColor: '#fed7aa',
      hairColor: '#1e293b',
      hairStyle: 'spiky',
      shirtColor: '#ef4444',
      accessories: 'none'
    }
  },
  {
    id: 'vcl3',
    nickname: 'Zaj',
    realName: 'Tommy Chanchrisna',
    role: 'SENTINEL',
    team: 'VCL',
    bio: 'The ultimate anchor on the Sentinel role. Shuts down map sectors single-handedly on Cypher with impenetrable networks of traps and surveillance.',
    twitter: '@zajinn7',
    twitterUrl: 'https://x.com/zajinn7',
    gameProfile: 'SAD zaj',
    gameProfileUrl: 'https://www.vlr.gg/player/41550/zaj',
    avatarStyle: {
      skinColor: '#ffedd5',
      hairColor: '#78350f',
      hairStyle: 'glasses',
      shirtColor: '#10b981',
      accessories: 'glasses'
    }
  },
  {
    id: 'vcl4',
    nickname: 'PA1NT',
    realName: "Amarii Lee'Andre Peak",
    role: 'FLEX',
    team: 'VCL',
    bio: 'Bringing high-impact utility and versatility to the server. Operating out of our Flex position on Phoenix to break stalemates and secure critical space.',
    twitter: '@Pa1ntVAL',
    twitterUrl: 'https://x.com/Pa1ntVAL',
    gameProfile: 'SAD pa1nt',
    gameProfileUrl: 'https://www.vlr.gg/player/23407/pa1nt',
    avatarStyle: {
      skinColor: '#fbcfe8',
      hairColor: '#9d174d',
      hairStyle: 'topknot',
      shirtColor: '#f59e0b',
      accessories: 'none'
    }
  },
  {
    id: 'vcl5',
    nickname: 'Vita',
    realName: 'Placeholder Name', // Add actual name for Vita here if available!
    role: 'DUELIST',
    team: 'VCL',
    bio: 'Pure lightning on the space creation. Drives the team forward out of the Duelist slot on Neon, catching opponents off guard with explosive entry speed.',
    twitter: '@vitathedeleta',
    twitterUrl: 'https://x.com/vitathedeleta',
    gameProfile: 'SmokeScreen#SAD',
    gameProfileUrl: 'https://www.vlr.gg/player/45696/vita',
    avatarStyle: {
      skinColor: '#cbd5e1',
      hairColor: '#475569',
      hairStyle: 'short',
      shirtColor: '#8b5cf6',
      accessories: 'none'
    }
  },
  // === GC ROSTER PLACEHOLDERS ===
  {
    id: 'gc1',
    nickname: 'TBD Player 1',
    realName: 'Placeholder',
    role: 'INITIATOR',
    team: 'GC',
    bio: 'Roster details coming soon.',
    twitter: '@sadesports',
    twitterUrl: 'https://twitter.com/sadesports',
    gameProfile: 'TBD',
    gameProfileUrl: '#',
    avatarStyle: { skinColor: '#ffe4e6', hairColor: '#111827', hairStyle: 'bob', shirtColor: '#0284c7', accessories: 'none' }
  },
  {
    id: 'gc2',
    nickname: 'TBD Player 2',
    realName: 'Placeholder',
    role: 'DUELIST',
    team: 'GC',
    bio: 'Roster details coming soon.',
    twitter: '@sadesports',
    twitterUrl: 'https://twitter.com/sadesports',
    gameProfile: 'TBD',
    gameProfileUrl: '#',
    avatarStyle: { skinColor: '#f1f5f9', hairColor: '#1e3a8a', hairStyle: 'spiky', shirtColor: '#bef264', accessories: 'none' }
  },
  {
    id: 'gc3',
    nickname: 'TBD Player 3',
    realName: 'Placeholder',
    role: 'CONTROLLER',
    team: 'GC',
    bio: 'Roster details coming soon.',
    twitter: '@sadesports',
    twitterUrl: 'https://twitter.com/sadesports',
    gameProfile: 'TBD',
    gameProfileUrl: '#',
    avatarStyle: { skinColor: '#ffedd5', hairColor: '#4f46e5', hairStyle: 'classic', shirtColor: '#db2777', accessories: 'none' }
  },
  {
    id: 'gc4',
    nickname: 'TBD Player 4',
    realName: 'Placeholder',
    role: 'SENTINEL',
    team: 'GC',
    bio: 'Roster details coming soon.',
    twitter: '@sadesports',
    twitterUrl: 'https://twitter.com/sadesports',
    gameProfile: 'TBD',
    gameProfileUrl: '#',
    avatarStyle: { skinColor: '#fdf2f8', hairColor: '#0369a1', hairStyle: 'bob', shirtColor: '#fda4af', accessories: 'none' }
  },
  {
    id: 'gc5',
    nickname: 'TBD Player 5',
    realName: 'Placeholder',
    role: 'FLEX',
    team: 'GC',
    bio: 'Roster details coming soon.',
    twitter: '@sadesports',
    twitterUrl: 'https://twitter.com/sadesports',
    gameProfile: 'TBD',
    gameProfileUrl: '#',
    avatarStyle: { skinColor: '#fae8ff', hairColor: '#6b21a8', hairStyle: 'topknot', shirtColor: '#2dd4bf', accessories: 'none' }
  }
];

export const STAFF: StaffMember[] = [
  // === MANAGEMENT ===
  {
    id: 's1',
    name: 'Nick Atkins',
    nickname: 'Nick Atkins',
    role: 'Chief Executive Officer',
    section: 'Management',
    bio: 'Steering the vision of SaD Esports. Building championship-winning foundations across competitive ecosystems.',
    twitter: '@sadesports',
    twitterUrl: 'https://twitter.com/sadesports',
    contact: 'nick@sadwin.gg',
    contactUrl: 'mailto:nick@sadwin.gg',
    avatarStyle: { bgColor: '#d4e3ff', skinColor: '#fecaca', hairColor: '#2d1500', hairStyle: 'spiky', shirtColor: '#0059a4' }
  },
  {
    id: 's2',
    name: 'Hong Wei "ech0" Teo',
    nickname: 'ech0',
    role: 'Chief Operating Officer',
    section: 'Management',
    bio: 'Optimizing infrastructure, business channels, and daily club logistics for maximum organizational growth.',
    twitter: '@ech0iwnl',
    twitterUrl: 'https://x.com/ech0iwnl',
    contact: 'hongwei@sadwin.gg',
    contactUrl: 'mailto:hongwei@sadwin.gg',
    avatarStyle: { bgColor: '#e8e8ea', skinColor: '#ffd167', hairColor: '#0369a1', hairStyle: 'bun', shirtColor: '#785a00', accessories: 'none' }
  },
  {
    id: 's3',
    name: 'Kaitlyn',
    nickname: 'Kaitlyn',
    role: 'Team Manager',
    section: 'Management',
    bio: 'Overseeing daily operations, player wellness, and scheduling coordination across our competitive rosters.',
    twitter: '@kaitlyn_xe',
    twitterUrl: 'https://x.com/kaitlyn_xe',
    contact: 'kaitlyn@sadwin.gg',
    contactUrl: 'mailto:kaitlyn@sadwin.gg',
    avatarStyle: { bgColor: '#d4e3ff', skinColor: '#fed7aa', hairColor: '#451a03', hairStyle: 'slick', shirtColor: '#0369a1', accessories: 'none' }
  },
  {
    id: 's4',
    name: 'MHVisuals',
    nickname: 'MHVisuals',
    role: 'Creative Director',
    section: 'Management',
    bio: 'Developing visual design languages, digital media frameworks, and creative branding aesthetics for the organization.',
    twitter: '@sadesports',
    twitterUrl: 'https://twitter.com/sadesports',
    contact: 'media@sadesports.gg',
    contactUrl: 'mailto:media@sadesports.gg',
    avatarStyle: { bgColor: '#ffdad6', skinColor: '#ffedd5', hairColor: '#1e293b', hairStyle: 'glasses', shirtColor: '#00654a', accessories: 'glasses' }
  },

  // === COACHING (VCL) ===
  {
    id: 's7',
    name: 'Mikey',
    nickname: 'Mikey',
    role: 'Head Coach',
    section: 'Coaching',
    badge: 'VCL',
    bio: 'Architecting the tactical strategy and micro-system playstyles for the main VCL roster.',
    twitter: '@mikeysXO',
    twitterUrl: 'https://x.com/mikeysXO',
    contact: 'mikey@sadwin.gg',
    contactUrl: 'mailto:mikey@sadwin.gg',
    avatarStyle: { bgColor: '#d4e3ff', skinColor: '#fca5a5', hairColor: '#47impl', hairStyle: 'spiky', shirtColor: '#1e3a8a', accessories: 'none' }
  },
  {
    id: 's8',
    name: 'Scorezy',
    nickname: 'Scorezy',
    role: 'Assistant Coach',
    section: 'Coaching',
    badge: 'VCL',
    bio: 'Breaking down performance data, dynamic VOD analysis, and structural mid-round adaptation.',
    twitter: '@_scorezy_',
    twitterUrl: 'https://x.com/_scorezy_',
    contact: 'scorezy@sadwin.gg',
    contactUrl: 'mailto:scorezy@sadwin.gg',
    avatarStyle: { bgColor: '#eeeef0', skinColor: '#fde047', hairColor: '#ec4899', hairStyle: 'bun', shirtColor: '#db2777' }
  },

  // === COACHING / STAFF (GC PLACEHOLDERS) ===
  {
    id: 's9',
    name: 'GC Coach Placeholder',
    nickname: 'TBD',
    role: 'GC Head Coach',
    section: 'Coaching',
    badge: 'GC',
    bio: 'Staff assignments pending updates.',
    twitter: '@sadesports',
    twitterUrl: 'https://twitter.com/sadesports',
    contact: 'info@sadesports.gg',
    contactUrl: 'mailto:info@sadesports.gg',
    avatarStyle: { bgColor: '#ffdad6', skinColor: '#ffd167', hairColor: '#312e81', hairStyle: 'bob', shirtColor: '#4c1d95' }
  },
  {
    id: 's12',
    name: 'GC Analyst Placeholder',
    nickname: 'TBD',
    role: 'GC Analyst',
    section: 'Coaching',
    badge: 'GC',
    bio: 'Staff assignments pending updates.',
    twitter: '@sadesports',
    twitterUrl: 'https://twitter.com/sadesports',
    contact: 'info@sadesports.gg',
    contactUrl: 'mailto:info@sadesports.gg',
    avatarStyle: { bgColor: '#ffdad6', skinColor: '#ffecd2', hairColor: '#0d9488', hairStyle: 'glasses', shirtColor: '#5c0632', accessories: 'none' }
  }
];
