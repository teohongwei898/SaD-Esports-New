import { Match, Partner, Player, StaffMember } from './types';

export const MASCOT_IMAGE_URL = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDScN8sSjYR3g8VzufS0GTEw-0N7oW-6gUKgdOJ6txfuriYJty2-AELIvl5VLtNU3ezEk_mJkBMEyohTboL8bIHCbBvsAenpDx8UoUz6UgxXRVay-QbigriTcrO3BeF8uwzCXJ8LMIR-Fao4GXlrj_lLegUXfN7_CVuj-YO-mom7CoEJ0p79A0b-g6lLHX36r4mqHCV5zvE0YStT2bB-vNCLW5krpxbwsaP2UJD_SJSryDtM5ws95YUQXvsRQ5KPiIR7Adx9jiEgT_v';

export const MATCHES: Match[] = [
  {
    id: 'm1',
    stage: 'Challengers ACE Stage 3',
    opponent: 'YFP',
    scoreSaD: 2,
    scoreOpp: 0,
    status: 'WIN',
    opponentLogo: 'YFP',
    date: '2026-05-27',
    time: '19:00',
    stats: {
      mvp: 'vita',
      kills: 43,
      deaths: 19,
      assists: 7,
      mapScores: [
        { mapName: 'Fracture', scoreSaD: 13, scoreOpp: 4 },
        { mapName: 'Haven', scoreSaD: 13, scoreOpp: 7 },
        { mapName: 'Pearl', scoreSaD: -, scoreOpp: - }
      ]
    }
  },
  {
    id: 'm2',
    stage: 'Challengers ACE Stage 3',
    opponent: 'FQ',
    scoreSaD: 2,
    scoreOpp: 0,
    status: 'WIN',
    opponentLogo: 'FQ',
    date: '2026-05-29',
    time: '19:00',
    stats: {
      mvp: 'vita',
      kills: 48,
      deaths: 26,
      assists: 7,
      mapScores: [
        { mapName: 'Pearl', scoreSaD: 13, scoreOpp: 8 },
        { mapName: 'Split', scoreSaD: 13, scoreOpp: 5 },
        { mapName: 'Haven', scoreSaD: -, scoreOpp: - }
      ]
    }
  },
  {
    id: 'm3',
    stage: 'Challengers ACE Stage 3',
    opponent: 'NRG Academy',
    scoreSaD: 0,
    scoreOpp: 0,
    status: 'UPCOMING',
    opponentLogo: 'NRG',
    date: '2026-06-03',
    time: '16:00'
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
  {
    id: 'welyy',
    nickname: 'ShadowBear',
    realName: 'IGL / CAPTAIN',
    role: 'IGL / CAPTAIN',
    team: 'VCL',
    bio: 'The strategic mastermind behind our aggressive plays. Never seen without a cup of coffee and a sharp tactical mind.',
    twitter: '@welyyval',
    gameProfile: 'https://www.vlr.gg/player/16671/welyy',
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
    nickname: 'Clawz',
    realName: 'Role: Duelist',
    role: 'DUELIST',
    team: 'VCL',
    bio: 'Entry fragging with zero fear and maximum chaos.',
    twitter: '@Clawz_SaD',
    gameProfile: 'Clawz#SAD',
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
    nickname: 'LockDown',
    realName: 'Role: Sentinel',
    role: 'SENTINEL',
    team: 'VCL',
    bio: 'Holding the flank so the rest of the team can play wild.',
    twitter: '@LockDown_SaD',
    gameProfile: 'LockDown#SAD',
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
    nickname: 'Flash',
    realName: 'Role: Initiator',
    role: 'INITIATOR',
    team: 'VCL',
    bio: 'Setting up the team for success with perfect timing and utility.',
    twitter: '@Flash_SaD',
    gameProfile: 'Flash#SAD',
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
    nickname: 'SmokeScreen',
    realName: 'Role: Controller',
    role: 'CONTROLLER',
    team: 'VCL',
    bio: 'Manipulating the map to our advantage. The silent carry.',
    twitter: '@SmokeScreen_SaD',
    gameProfile: 'SmokeScreen#SAD',
    avatarStyle: {
      skinColor: '#cbd5e1',
      hairColor: '#475569',
      hairStyle: 'short',
      shirtColor: '#8b5cf6',
      accessories: 'none'
    }
  },
  {
    id: 'gc1',
    nickname: 'Valkyrie',
    realName: 'Role: Initiator',
    role: 'INITIATOR',
    team: 'GC',
    bio: 'The mastermind. Calls the shots and sets the traps with flawless precision.',
    twitter: '@Valkyrie_SaD',
    gameProfile: 'Valkyrie#SAD',
    avatarStyle: {
      skinColor: '#ffe4e6',
      hairColor: '#111827',
      hairStyle: 'bob',
      shirtColor: '#0284c7',
      accessories: 'headset'
    }
  },
  {
    id: 'gc2',
    nickname: 'JettLag',
    realName: 'Role: Duelist',
    role: 'DUELIST',
    team: 'GC',
    bio: 'First in, last out. Entry fragger who thrives in chaos and dashes into danger.',
    twitter: '@JettLag_SaD',
    gameProfile: 'JettLag#SAD',
    avatarStyle: {
      skinColor: '#f1f5f9',
      hairColor: '#1e3a8a',
      hairStyle: 'spiky',
      shirtColor: '#bef264',
      accessories: 'none'
    }
  },
  {
    id: 'gc3',
    nickname: 'Smokescreen',
    realName: 'Role: Controller',
    role: 'CONTROLLER',
    team: 'GC',
    bio: 'Dictates the pace. Turns the map into a labyrinth of one-ways and paranoia.',
    twitter: '@Smokescreen_SaDGC',
    gameProfile: 'SmokescreenGC#SAD',
    avatarStyle: {
      skinColor: '#ffedd5',
      hairColor: '#4f46e5',
      hairStyle: 'classic',
      shirtColor: '#db2777',
      accessories: 'headset'
    }
  },
  {
    id: 'gc4',
    nickname: 'Lockdown',
    realName: 'Role: Sentinel',
    role: 'SENTINEL',
    team: 'GC',
    bio: 'The anchor. Flanks are secured and sites are held with stubborn determination.',
    twitter: '@Lockdown_SaDGC',
    gameProfile: 'LockdownGC#SAD',
    avatarStyle: {
      skinColor: '#fdf2f8',
      hairColor: '#0369a1',
      hairStyle: 'bob',
      shirtColor: '#fda4af',
      accessories: 'none'
    }
  },
  {
    id: 'gc5',
    nickname: 'Adapt',
    realName: 'Role: Flex',
    role: 'FLEX',
    team: 'GC',
    bio: 'The wildcard. Plays whatever the team needs to secure the win, unpredictably dangerous.',
    twitter: '@Adapt_SaD',
    gameProfile: 'Adapt#SAD',
    avatarStyle: {
      skinColor: '#fae8ff',
      hairColor: '#6b21a8',
      hairStyle: 'topknot',
      shirtColor: '#2dd4bf',
      accessories: 'none'
    }
  }
];

export const STAFF: StaffMember[] = [
  {
    id: 's1',
    name: 'Alex "Vanguard" Chen',
    nickname: 'Alex "Vanguard" Chen',
    role: 'Chief Executive Officer',
    section: 'Management',
    bio: 'The mastermind steering the ship. Alex brings a decade of competitive experience and a slightly unhinged approach to team building.',
    twitter: '@Vanguard_SaD',
    contact: 'alex@sadesports.gg',
    avatarStyle: {
      bgColor: '#d4e3ff',
      skinColor: '#fecaca',
      hairColor: '#2d1500',
      hairStyle: 'spiky',
      shirtColor: '#0059a4'
    }
  },
  {
    id: 's2',
    name: 'Sarah "Nexus" Jenkins',
    nickname: 'Sarah "Nexus" Jenkins',
    role: 'Chief Operating Officer',
    section: 'Management',
    bio: 'Keeping the chaos organized. Sarah ensures schedules are met, logistics are flawless, and everyone remembers to hydrate.',
    twitter: '@Nexus_SaD',
    contact: 'sarah@sadesports.gg',
    avatarStyle: {
      bgColor: '#e8e8ea',
      skinColor: '#ffd167',
      hairColor: '#0369a1',
      hairStyle: 'bun',
      shirtColor: '#785a00',
      accessories: 'glasses'
    }
  },
  {
    id: 's3',
    name: 'David "Oracle" Kim',
    nickname: 'David "Oracle" Kim',
    role: 'General Manager',
    section: 'Management',
    bio: 'The talent scout and roster architect. David has an uncanny eye for up-and-coming players and hidden potential.',
    twitter: '@Oracle_SaD',
    contact: 'david@sadesports.gg',
    avatarStyle: {
      bgColor: '#d4e3ff',
      skinColor: '#fed7aa',
      hairColor: '#451a03',
      hairStyle: 'slick',
      shirtColor: '#0369a1',
      accessories: 'headset'
    }
  },
  {
    id: 's4',
    name: 'Jane "Shadow" Doe',
    nickname: 'Jane "Shadow" Doe',
    role: 'VP of Operations',
    section: 'Management',
    bio: 'Ensuring smooth day-to-day operations across all teams and facilities.',
    twitter: '@Shadow_SaD',
    contact: 'jane@sadesports.gg',
    avatarStyle: {
      bgColor: '#ffdad6',
      skinColor: '#ffedd5',
      hairColor: '#1e293b',
      hairStyle: 'glasses',
      shirtColor: '#00654a',
      accessories: 'glasses'
    }
  },
  {
    id: 's5',
    name: 'Mark "Steel" Smith',
    nickname: 'Mark "Steel" Smith',
    role: 'Logistics Director',
    section: 'Management',
    bio: 'The master of travel arrangements, gear shipments, and making sure nobody misses a flight.',
    twitter: '@Steel_SaD',
    contact: 'mark@sadesports.gg',
    avatarStyle: {
      bgColor: '#eeeef0',
      skinColor: '#fbcfe8',
      hairColor: '#451a03',
      hairStyle: 'slick',
      shirtColor: '#785a00'
    }
  },
  // Coaching Staff
  {
    id: 's7',
    name: 'Marcus "Forge" Wright',
    nickname: 'Marcus "Forge" Wright',
    role: 'Head Coach',
    section: 'Coaching',
    badge: 'VCL',
    bio: 'Guiding the VCL champions through the heat of high-tier competition.',
    twitter: '@MarcusForge_SaD',
    contact: 'forge@sadesports.gg',
    avatarStyle: {
      bgColor: '#d4e3ff',
      skinColor: '#fca5a5',
      hairColor: '#475569',
      hairStyle: 'spiky',
      shirtColor: '#1e3a8a',
      accessories: 'headset'
    }
  },
  {
    id: 's8',
    name: 'Elena "Cipher" Rostova',
    nickname: 'Elena "Cipher" Rostova',
    role: 'Strategic Coach',
    section: 'Coaching',
    badge: 'VCL',
    bio: 'Crafting complex tactical setups and counter-strategies for our opponents.',
    twitter: '@ElenaCipher_SaD',
    contact: 'cipher@sadesports.gg',
    avatarStyle: {
      bgColor: '#eeeef0',
      skinColor: '#fde047',
      hairColor: '#ec4899',
      hairStyle: 'bun',
      shirtColor: '#db2777'
    }
  },
  {
    id: 's9',
    name: 'Chloe "Nova" Smith',
    nickname: 'Chloe "Nova" Smith',
    role: 'GC Head Coach',
    section: 'Coaching',
    badge: 'GC',
    bio: 'Developing the Game Changers roster to achieve flawless tactical execution.',
    twitter: '@ChloeNova_SaD',
    contact: 'nova@sadesports.gg',
    avatarStyle: {
      bgColor: '#ffdad6',
      skinColor: '#ffd167',
      hairColor: '#312e81',
      hairStyle: 'bob',
      shirtColor: '#4c1d95'
    }
  },
  {
    id: 's10',
    name: 'Liam "Spark" Jones',
    nickname: 'Liam "Spark" Jones',
    role: 'Academy Coach',
    section: 'Coaching',
    badge: 'ACADEMY',
    bio: 'Nurturing young and upcoming talents in our tier-2 development academy.',
    twitter: '@LiamSpark_SaD',
    contact: 'spark@sadesports.gg',
    avatarStyle: {
      bgColor: '#dcffed',
      skinColor: '#fed7aa',
      hairColor: '#22c55e',
      hairStyle: 'spiky',
      shirtColor: '#0f766e'
    }
  },
  {
    id: 's11',
    name: 'Kevin "Data" Chen',
    nickname: 'Kevin "Data" Chen',
    role: 'VCL Analyst',
    section: 'Coaching',
    badge: 'VCL',
    bio: 'Turning numerical heatmaps, economy flows, and round patterns into tactical updates.',
    twitter: '@KevinData_SaD',
    contact: 'kevin@sadesports.gg',
    avatarStyle: {
      bgColor: '#d4e3ff',
      skinColor: '#ffedd5',
      hairColor: '#172554',
      hairStyle: 'glasses',
      shirtColor: '#334155',
      accessories: 'glasses'
    }
  },
  {
    id: 's12',
    name: 'Aria "Glitch" Patel',
    nickname: 'Aria "Glitch" Patel',
    role: 'GC Analyst',
    section: 'Coaching',
    badge: 'GC',
    bio: 'Analyzing competitor utility usage and defense defaults to map weak points.',
    twitter: '@AriaGlitch_SaD',
    contact: 'aria@sadesports.gg',
    avatarStyle: {
      bgColor: '#ffdad6',
      skinColor: '#ffecd2',
      hairColor: '#0d9488',
      hairStyle: 'glasses',
      shirtColor: '#5c0632',
      accessories: 'glasses'
    }
  }
];
