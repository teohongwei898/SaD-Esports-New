export interface Match {
  id: string;
  stage: string;
  opponent: string;
  scoreSaD: number;
  scoreOpp: number;
  status: 'WIN' | 'LOSS' | 'UPCOMING';
  opponentLogo: string;
  date: string;
  time: string;
  stats?: {
    mvp: string;
    kills: number;
    deaths: number;
    assists: number;
    mapScores: { mapName: string; scoreSaD: number; scoreOpp: number }[];
  };
}

export interface Partner {
  id: string;
  name: string;
  logoType: 'lightning' | 'mouse' | 'shoe' | 'server' | 'eye';
  description: string;
}

export interface Player {
  id: string;
  nickname: string;
  realName: string;
  role: 'IGL / CAPTAIN' | 'DUELIST' | 'SENTINEL' | 'INITIATOR' | 'CONTROLLER' | 'FLEX';
  team: 'VCL' | 'GC';
  bio: string;
  twitter: string;
  gameProfile: string;
  avatarStyle: {
    skinColor: string;
    hairColor: string;
    hairStyle: 'classic' | 'spiky' | 'glasses' | 'slick' | 'topknot' | 'bob' | 'bun' | 'short' | 'curly' | 'bald';
    shirtColor: string;
    accessories?: 'glasses' | 'headset' | 'eyepatch' | 'none';
  };
}

export interface StaffMember {
  id: string;
  name: string;
  nickname: string;
  role: string;
  section: 'Management' | 'Coaching';
  bio: string;
  twitter: string;
  contact: string; // email or controller / whistle
  badge?: 'VCL' | 'GC' | 'ACADEMY';
  avatarStyle: {
    bgColor: string;
    skinColor: string;
    hairColor: string;
    hairStyle: 'classic' | 'spiky' | 'glasses' | 'slick' | 'topknot' | 'bob' | 'bun' | 'short' | 'curly' | 'bald';
    shirtColor: string;
    accessories?: 'headset' | 'glasses' | 'whistle' | 'none';
  };
}
