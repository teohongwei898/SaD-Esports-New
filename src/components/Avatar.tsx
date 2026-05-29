import React from 'react';

interface AvatarProps {
  style: {
    skinColor: string;
    hairColor: string;
    hairStyle: string;
    shirtColor: string;
    accessories?: 'glasses' | 'headset' | 'eyepatch' | 'whistle' | 'none';
  };
  gender?: 'm' | 'f';
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({ style, className = 'w-24 h-24' }) => {
  const { skinColor, hairColor, hairStyle, shirtColor, accessories } = style;

  // Let's render custom SVG based on characteristics
  return (
    <div className={`relative inline-block overflow-hidden rounded-full border-2 border-slate-900 bg-slate-50 shadow-[2px_2px_0px_0px_rgba(26,28,30,1)] ${className}`}>
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full select-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background Subtle Gradient */}
        <defs>
          <radialGradient id="grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#f1f5f9" />
          </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="48" fill="url(#grad)" />

        {/* Neck */}
        <rect
          x="44"
          y="56"
          width="12"
          height="14"
          fill={skinColor}
          stroke="#1e293b"
          strokeWidth="2.5"
          rx="2"
        />

        {/* Shirt / Clothes */}
        <path
          d="M 28 85 C 28 70, 72 70, 72 85 Z"
          fill={shirtColor}
          stroke="#1e293b"
          strokeWidth="2.5"
        />
        {/* V-neck or collar detail */}
        <path
          d="M 42 70 L 50 78 L 58 70"
          fill="none"
          stroke="#1e293b"
          strokeWidth="2.5"
        />

        {/* Head/Face base */}
        <circle
          cx="50"
          cy="46"
          r="20"
          fill={skinColor}
          stroke="#1e293b"
          strokeWidth="2.5"
        />

        {/* Ears */}
        <circle
          cx="28"
          cy="46"
          r="4.5"
          fill={skinColor}
          stroke="#1e293b"
          strokeWidth="2.5"
        />
        <circle
          cx="72"
          cy="46"
          r="4.5"
          fill={skinColor}
          stroke="#1e293b"
          strokeWidth="2.5"
        />

        {/* Face Elements: Eyes */}
        <circle cx="44" cy="44" r="2.5" fill="#1e293b" />
        <circle cx="56" cy="44" r="2.5" fill="#1e293b" />

        {/* Eyebrows */}
        <path
          d="M 39 39 Q 44 38, 47 41"
          fill="none"
          stroke="#1e293b"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M 61 39 Q 56 38, 53 41"
          fill="none"
          stroke="#1e293b"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Nose */}
        <path
          d="M 50 44 L 49 48 L 52 48"
          fill="none"
          stroke="#1e293b"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Mouth (Mischievous smirk) */}
        <path
          d="M 44 51 Q 50 56, 55 51"
          fill="none"
          stroke="#1e293b"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Smirk dimple */}
        <path
          d="M 54 50 L 56 52"
          stroke="#1e293b"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* Hair Styles */}
        {hairStyle === 'classic' && (
          <path
            d="M 28 42 Q 22 28, 48 24 Q 78 28, 72 42 Q 62 30, 50 29 Q 38 30, 28 42"
            fill={hairColor}
            stroke="#1e293b"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
        )}

        {hairStyle === 'spiky' && (
          <path
            d="M 27 40 L 32 30 L 38 31 L 43 23 L 50 28 L 57 21 L 62 29 L 68 28 L 73 40 C 65 35, 55 35, 50 35 C 45 35, 35 35, 27 40"
            fill={hairColor}
            stroke="#1e293b"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
        )}

        {hairStyle === 'glasses' && (
          <path
            d="M 29 44 C 27 34, 38 24, 50 24 C 62 24, 73 34, 71 44 Q 50 32, 29 44"
            fill={hairColor}
            stroke="#1e293b"
            strokeWidth="2.5"
          />
        )}

        {hairStyle === 'slick' && (
          <path
            d="M 30 38 C 30 24, 70 24, 70 38 Q 50 28, 30 38"
            fill={hairColor}
            stroke="#1e293b"
            strokeWidth="2.5"
          />
        )}

        {hairStyle === 'topknot' && (
          <>
            {/* Knot */}
            <circle
              cx="50"
              cy="20"
              r="6"
              fill={hairColor}
              stroke="#1e293b"
              strokeWidth="2.5"
            />
            {/* Main Hair hair base */}
            <path
              d="M 30 42 C 28 32, 40 26, 50 26 C 60 26, 72 32, 70 42 C 60 38, 40 38, 30 42"
              fill={hairColor}
              stroke="#1e293b"
              strokeWidth="2.5"
            />
          </>
        )}

        {hairStyle === 'bob' && (
          <path
            d="M 26 46 C 26 22, 74 22, 74 46 C 74 54, 70 54, 70 46 C 70 30, 30 30, 30 46 C 30 54, 26 54, 26 46"
            fill={hairColor}
            stroke="#1e293b"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        )}

        {hairStyle === 'bun' && (
          <>
            {/* Buns on side or top */}
            <circle
              cx="50"
              cy="21"
              r="8"
              fill={hairColor}
              stroke="#1e293b"
              strokeWidth="2.5"
            />
            <path
              d="M 28 42 C 27 30, 38 25, 50 25 C 62 25, 73 30, 72 42 C 64 36, 36 36, 28 42"
              fill={hairColor}
              stroke="#1e293b"
              strokeWidth="2.5"
            />
          </>
        )}

        {hairStyle === 'short' && (
          <path
            d="M 29 41 C 28 32, 38 28, 50 28 C 62 28, 72 32, 71 41 Q 50 36, 29 41"
            fill={hairColor}
            stroke="#1e293b"
            strokeWidth="2.5"
          />
        )}

        {hairStyle === 'curly' && (
          <path
            d="M 28 42 C 25 38, 25 30, 32 28 C 34 22, 44 20, 50 24 C 56 20, 66 22, 68 28 C 75 30, 75 38, 72 42 Q 50 36, 28 42"
            fill={hairColor}
            stroke="#1e293b"
            strokeWidth="2.5"
          />
        )}

        {/* Accessories Overlay */}
        {accessories === 'glasses' && (
          <>
            {/* Left Glass Frame */}
            <rect
              x="36"
              y="40"
              width="10"
              height="8"
              fill="rgba(56, 189, 248, 0.2)"
              stroke="#1e293b"
              strokeWidth="2.5"
              rx="1.5"
            />
            {/* Right Glass Frame */}
            <rect
              x="54"
              y="40"
              width="10"
              height="8"
              fill="rgba(56, 189, 248, 0.2)"
              stroke="#1e293b"
              strokeWidth="2.5"
              rx="1.5"
            />
            {/* Bridge */}
            <line
              x1="46"
              y1="44"
              x2="54"
              y2="44"
              stroke="#1e293b"
              strokeWidth="2.5"
            />
            {/* Side bars */}
            <line
              x1="28"
              y1="43"
              x2="36"
              y2="43"
              stroke="#1e293b"
              strokeWidth="2"
            />
            <line
              x1="64"
              y1="43"
              x2="72"
              y2="43"
              stroke="#1e293b"
              strokeWidth="2"
            />
          </>
        )}

        {accessories === 'headset' && (
          <>
            {/* Band */}
            <path
              d="M 27 46 C 24 24, 76 24, 73 46"
              fill="none"
              stroke="#334155"
              strokeWidth="4"
              strokeLinecap="round"
            />
            {/* Ear Cups */}
            <rect
              x="22"
              y="40"
              width="6"
              height="14"
              fill="#ef4444"
              stroke="#1e293b"
              strokeWidth="2"
              rx="2"
            />
            <rect
              x="72"
              y="40"
              width="6"
              height="14"
              fill="#ef4444"
              stroke="#1e293b"
              strokeWidth="2"
              rx="2"
            />
            {/* Microphone Boom */}
            <path
              d="M 26 50 L 35 53 L 37 56"
              fill="none"
              stroke="#1e293b"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </>
        )}

        {accessories === 'eyepatch' && (
          <>
            {/* Strap */}
            <line
              x1="28"
              y1="38"
              x2="72"
              y2="48"
              stroke="#1e293b"
              strokeWidth="2.5"
            />
            {/* Patch */}
            <ellipse
              cx="44"
              cy="43"
              rx="6"
              ry="5"
              fill="#1e293b"
              stroke="#1e293b"
              strokeWidth="1"
            />
          </>
        )}

        {/* Blush details for a cute/mischievous touch */}
        <ellipse cx="36" cy="49" rx="3" ry="1.5" fill="#f43f5e" opacity="0.4" />
        <ellipse cx="64" cy="49" rx="3" ry="1.5" fill="#f43f5e" opacity="0.4" />
      </svg>
    </div>
  );
};
