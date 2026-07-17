export interface Match {
  id: string;
  stage: string;
  opponent: string;
  scoreSaD: number;
  scoreOpp: number;
  status: 'WIN' | 'LOSS' | 'UPCOMING';
  opponentLogo: string;
  opponentLogoUrl?: string;
  date: string;
  time: string;
  statsUrl: string; // Customizable hyperlink for stats
}

export interface Partner {
  id: string;
  name: string;
  logoType: 'lightning' | 'mouse' | 'shoe' | 'server' | 'eye';
  description: string;
  url?: string; // Add this line
}

export interface Player {
  id: string;
  nickname: string;
  realName: string;
  role: 'IGL / CAPTAIN' | 'DUELIST' | 'SENTINEL' | 'INITIATOR' | 'CONTROLLER' | 'FLEX';
  team: 'VCL' | 'GC';
  bio: string;
  twitter: string;
  twitterUrl: string; // Customizable Twitter link
  gameProfile: string;
  gameProfileUrl: string; // Customizable Gaming Tracker link
  avatarUrl?: string;     // Option for a custom 200x200 image link
  avatarStyle?: {        // Made optional to support direct image overrides
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
  twitterUrl: string; // Customizable Twitter link
  contact: string;
  contactUrl: string; // Customizable Contact link (mailto or website)
  badge?: 'VCL' | 'GC' | 'ACADEMY';
  avatarUrl?: string;     // Option for a custom 200x200 image link
  avatarStyle?: {        // Made optional to support direct image overrides
    bgColor: string;
    skinColor: string;
    hairColor: string;
    hairStyle: 'classic' | 'spiky' | 'glasses' | 'slick' | 'topknot' | 'bob' | 'bun' | 'short' | 'curly' | 'bald';
    shirtColor: string;
    accessories?: 'headset' | 'glasses' | 'whistle' | 'none';
  };
}
