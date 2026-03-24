import React from 'react';

// ============ ARROWS ============

export const DashedCurvedArrowUp = ({ color = "#1A1A1A", size = 100 }: { color?: string; size?: number }) => (
  <svg width={size} height={size * 0.8} viewBox="0 0 120 96" fill="none">
    <path d="M12 80C12 80 8 40 32 24C56 8 80 16 96 8" stroke={color} strokeWidth="2.5" strokeDasharray="8 6" strokeLinecap="round" fill="none" />
    <path d="M88 4L98 8L92 16" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

export const DashedCurvedArrowDown = ({ color = "#1A1A1A", size = 100 }: { color?: string; size?: number }) => (
  <svg width={size} height={size * 0.8} viewBox="0 0 120 96" fill="none">
    <path d="M12 16C12 16 8 56 32 72C56 88 80 80 96 88" stroke={color} strokeWidth="2.5" strokeDasharray="8 6" strokeLinecap="round" fill="none" />
    <path d="M88 92L98 88L92 80" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

export const DashedLoopArrow = ({ color = "#1A1A1A", size = 100 }: { color?: string; size?: number }) => (
  <svg width={size} height={size * 0.8} viewBox="0 0 120 96" fill="none">
    <path d="M16 60C16 60 20 20 50 20C80 20 80 50 60 55C40 60 40 30 60 25C80 20 100 40 104 60" stroke={color} strokeWidth="2.5" strokeDasharray="8 6" strokeLinecap="round" fill="none" />
    <path d="M98 54L106 62L100 68" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

export const SolidCurvedArrowUp = ({ color = "#A2146A", size = 100 }: { color?: string; size?: number }) => (
  <svg width={size} height={size * 0.8} viewBox="0 0 120 96" fill="none">
    <path d="M12 80C12 80 8 40 32 24C56 8 80 16 96 8" stroke={color} strokeWidth="3" strokeLinecap="round" fill="none" />
    <path d="M88 4L98 8L92 16" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

export const SolidCurvedArrowDown = ({ color = "#A2146A", size = 100 }: { color?: string; size?: number }) => (
  <svg width={size} height={size * 0.8} viewBox="0 0 120 96" fill="none">
    <path d="M12 16C12 16 8 56 32 72C56 88 80 80 96 88" stroke={color} strokeWidth="3" strokeLinecap="round" fill="none" />
    <path d="M88 92L98 88L92 80" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

export const StraightArrow = ({ color = "#A2146A", size = 80 }: { color?: string; size?: number }) => (
  <svg width={size} height={size * 0.25} viewBox="0 0 80 20" fill="none">
    <line x1="4" y1="10" x2="68" y2="10" stroke={color} strokeWidth="3" strokeLinecap="round" />
    <path d="M64 4L72 10L64 16" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

export const StraightArrowDashed = ({ color = "#1A1A1A", size = 80 }: { color?: string; size?: number }) => (
  <svg width={size} height={size * 0.25} viewBox="0 0 80 20" fill="none">
    <line x1="4" y1="10" x2="68" y2="10" stroke={color} strokeWidth="2.5" strokeDasharray="8 5" strokeLinecap="round" />
    <path d="M64 4L72 10L64 16" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

export const DiagonalArrowUp = ({ color = "#A2146A", size = 80 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
    <line x1="12" y1="68" x2="64" y2="16" stroke={color} strokeWidth="3" strokeLinecap="round" />
    <path d="M52 12L68 14L66 30" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

export const DiagonalArrowDown = ({ color = "#EF8005", size = 80 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
    <line x1="12" y1="12" x2="64" y2="64" stroke={color} strokeWidth="3" strokeLinecap="round" />
    <path d="M52 68L68 66L66 50" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

export const WavyArrow = ({ color = "#EF8005", size = 100 }: { color?: string; size?: number }) => (
  <svg width={size} height={size * 0.35} viewBox="0 0 100 35" fill="none">
    <path d="M4 20C14 8 26 28 36 16C46 4 58 28 68 16C78 4 88 20 88 20" stroke={color} strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <path d="M82 14L90 20L82 26" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

export const BouncingArrow = ({ color = "#A2146A", size = 100 }: { color?: string; size?: number }) => (
  <svg width={size} height={size * 0.5} viewBox="0 0 120 60" fill="none">
    <path d="M8 52C8 52 24 8 44 52C64 8 84 52 104 12" stroke={color} strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <path d="M98 8L106 12L100 20" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

export const CircleArrow = ({ color = "#A2146A", size = 80 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
    <path d="M60 16C68 24 72 36 68 48C64 60 52 68 40 68C28 68 16 60 12 48C8 36 12 24 20 16" stroke={color} strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <path d="M16 22L20 14L28 18" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

export const SpiralArrow = ({ color = "#EF8005", size = 80 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
    <path d="M40 60C28 60 20 52 20 40C20 28 28 20 40 20C52 20 56 28 56 36C56 44 48 48 42 48" stroke={color} strokeWidth="2.5" strokeDasharray="6 4" strokeLinecap="round" fill="none" />
    <path d="M36 44L42 50L48 44" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

export const ZigzagArrow = ({ color = "#A2146A", size = 100 }: { color?: string; size?: number }) => (
  <svg width={size} height={size * 0.4} viewBox="0 0 120 48" fill="none">
    <path d="M8 40L28 8L48 40L68 8L88 40L108 8" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="M102 4L110 8L104 14" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

export const UArrow = ({ color = "#EF8005", size = 80 }: { color?: string; size?: number }) => (
  <svg width={size} height={size * 0.8} viewBox="0 0 80 64" fill="none">
    <path d="M16 8V40C16 52 28 60 40 60C52 60 64 52 64 40V8" stroke={color} strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <path d="M58 14L64 6L70 14" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

export const DashedSCurveArrow = ({ color = "#1A1A1A", size = 100 }: { color?: string; size?: number }) => (
  <svg width={size} height={size * 0.8} viewBox="0 0 100 80" fill="none">
    <path d="M10 70C10 70 30 10 50 40C70 70 90 10 90 10" stroke={color} strokeWidth="2.5" strokeDasharray="8 5" strokeLinecap="round" fill="none" />
    <path d="M84 6L92 10L86 18" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

// ============ BADGES ============

export const BadgeElement = ({ color = "#A2146A", text = "BADGE", size = 120 }: { color?: string; text?: string; size?: number }) => (
  <svg width={size} height={size * 0.3} viewBox="0 0 120 36" fill="none">
    <rect width="120" height="36" rx="18" fill={color} />
    <text x="60" y="23" textAnchor="middle" fill="white" fontFamily="Nunito Sans, sans-serif" fontWeight="700" fontSize="13">{text}</text>
  </svg>
);

export const BadgeOutline = ({ color = "#A2146A", text = "BADGE", size = 120 }: { color?: string; text?: string; size?: number }) => (
  <svg width={size} height={size * 0.3} viewBox="0 0 120 36" fill="none">
    <rect x="1.5" y="1.5" width="117" height="33" rx="16.5" stroke={color} strokeWidth="2" fill="white" />
    <text x="60" y="23" textAnchor="middle" fill={color} fontFamily="Nunito Sans, sans-serif" fontWeight="700" fontSize="13">{text}</text>
  </svg>
);

export const BadgeDot = ({ color = "#A2146A", text = "BADGE", size = 130 }: { color?: string; text?: string; size?: number }) => (
  <svg width={size} height={size * 0.28} viewBox="0 0 130 36" fill="none">
    <rect width="130" height="36" rx="18" fill={color} opacity="0.1" />
    <circle cx="18" cy="18" r="5" fill={color} />
    <text x="72" y="23" textAnchor="middle" fill={color} fontFamily="Nunito Sans, sans-serif" fontWeight="700" fontSize="13">{text}</text>
  </svg>
);

// ============ SHAPES ============

export const GradientRing = ({ color1 = "#A2146A", color2 = "#EF8005", size = 80 }: { color1?: string; color2?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
    <defs>
      <linearGradient id={`ring-${color1.replace('#','')}-${color2.replace('#','')}`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor={color1} />
        <stop offset="100%" stopColor={color2} />
      </linearGradient>
    </defs>
    <circle cx="40" cy="40" r="32" stroke={`url(#ring-${color1.replace('#','')}-${color2.replace('#','')})`} strokeWidth="10" />
  </svg>
);

export const DecorativeDots = ({ color1 = "#A2146A", color2 = "#EF8005", size = 80 }: { color1?: string; color2?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
    {[0, 1, 2, 3].map(row =>
      [0, 1, 2, 3].map(col => (
        <circle key={`${row}-${col}`} cx={12 + col * 20} cy={12 + row * 20} r="5"
          fill={(row + col) % 2 === 0 ? color1 : color2} opacity={0.7 + (row + col) * 0.03} />
      ))
    )}
  </svg>
);

export const BlobShape = ({ color = "#A2146A", opacity = 0.15, size = 120 }: { color?: string; opacity?: number; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
    <path d="M60 10C80 5 110 20 105 50C100 80 90 100 65 110C40 120 15 100 10 70C5 40 35 15 60 10Z"
      fill={color} opacity={opacity} />
  </svg>
);

export const BlobShape2 = ({ color = "#A2146A", opacity = 0.15, size = 120 }: { color?: string; opacity?: number; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
    <path d="M50 8C75 2 108 18 112 48C116 78 98 108 68 114C38 120 10 98 6 68C2 38 25 14 50 8Z"
      fill={color} opacity={opacity} />
  </svg>
);

export const BlobShape3 = ({ color = "#A2146A", opacity = 0.15, size = 120 }: { color?: string; opacity?: number; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
    <path d="M40 6C60 2 90 10 104 35C118 60 110 90 85 105C60 120 25 115 12 90C-1 65 20 10 40 6Z"
      fill={color} opacity={opacity} />
  </svg>
);

export const WaveShape = ({ color = "#A2146A", size = 200 }: { color?: string; size?: number }) => (
  <svg width={size} height={size * 0.2} viewBox="0 0 200 40" fill="none">
    <path d="M0 20C25 8 50 32 75 20C100 8 125 32 150 20C175 8 200 32 200 20" stroke={color} strokeWidth="3" strokeLinecap="round" fill="none" />
  </svg>
);

export const PaperAirplane = ({ color = "#EF8005", size = 60, rotation = -30 }: { color?: string; size?: number; rotation?: number }) => (
  <svg width={size} height={size} viewBox="0 0 60 60" fill="none" style={{ transform: `rotate(${rotation}deg)` }}>
    <path d="M6 54L54 30L24 26L20 10L6 54Z" fill={color} />
    <path d="M24 26L32 44L20 10" fill={color} opacity="0.7" />
  </svg>
);

export const HighlightBox = ({ color = "#A2146A", size = 160 }: { color?: string; size?: number }) => (
  <svg width={size} height={size * 0.4} viewBox="0 0 160 64" fill="none">
    <rect x="2" y="2" width="156" height="60" rx="12" fill={color} opacity="0.12" />
    <rect x="2" y="2" width="156" height="60" rx="12" stroke={color} strokeWidth="1" opacity="0.2" />
  </svg>
);

export const StarShape = ({ color = "#EF8005", size = 60 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
    <path d="M30 4L36 22H56L40 34L46 52L30 40L14 52L20 34L4 22H24L30 4Z" fill={color} opacity="0.2" stroke={color} strokeWidth="2" />
  </svg>
);

export const HexagonShape = ({ color = "#A2146A", size = 70 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 70 70" fill="none">
    <path d="M35 5L62 20V50L35 65L8 50V20L35 5Z" stroke={color} strokeWidth="2.5" fill={color} opacity="0.08" />
  </svg>
);

export const DiamondShape = ({ color = "#EF8005", size = 60 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
    <path d="M30 4L56 30L30 56L4 30L30 4Z" stroke={color} strokeWidth="2.5" fill={color} opacity="0.1" />
  </svg>
);

export const CrossShape = ({ color = "#A2146A", size = 60 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
    <path d="M22 4H38V22H56V38H38V56H22V38H4V22H22V4Z" fill={color} opacity="0.12" stroke={color} strokeWidth="2" />
  </svg>
);

export const TriangleShape = ({ color = "#EF8005", size = 60 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
    <path d="M30 6L56 54H4L30 6Z" stroke={color} strokeWidth="2.5" fill={color} opacity="0.1" />
  </svg>
);

export const SemiCircle = ({ color = "#A2146A", size = 80 }: { color?: string; size?: number }) => (
  <svg width={size} height={size * 0.55} viewBox="0 0 80 44" fill="none">
    <path d="M4 40A36 36 0 0 1 76 40" stroke={color} strokeWidth="3" fill={color} opacity="0.08" />
  </svg>
);

export const ConcentricCircles = ({ color = "#A2146A", size = 80 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
    <circle cx="40" cy="40" r="36" stroke={color} strokeWidth="1.5" opacity="0.15" />
    <circle cx="40" cy="40" r="28" stroke={color} strokeWidth="1.5" opacity="0.25" />
    <circle cx="40" cy="40" r="20" stroke={color} strokeWidth="1.5" opacity="0.35" />
    <circle cx="40" cy="40" r="12" stroke={color} strokeWidth="1.5" opacity="0.5" />
    <circle cx="40" cy="40" r="5" fill={color} opacity="0.6" />
  </svg>
);

export const ScatterDots = ({ color1 = "#A2146A", color2 = "#EF8005", size = 80 }: { color1?: string; color2?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
    <circle cx="12" cy="20" r="4" fill={color1} opacity="0.5" />
    <circle cx="35" cy="10" r="6" fill={color2} opacity="0.4" />
    <circle cx="60" cy="22" r="3" fill={color1} opacity="0.6" />
    <circle cx="25" cy="45" r="5" fill={color2} opacity="0.3" />
    <circle cx="55" cy="50" r="7" fill={color1} opacity="0.2" />
    <circle cx="70" cy="65" r="4" fill={color2} opacity="0.5" />
    <circle cx="15" cy="68" r="6" fill={color1} opacity="0.3" />
    <circle cx="45" cy="72" r="3" fill={color2} opacity="0.6" />
  </svg>
);

// ============ FRAMES ============

export const FrameSolid = ({ color = "#A2146A", size = 100 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <rect x="4" y="4" width="92" height="92" rx="8" stroke={color} strokeWidth="3" />
  </svg>
);

export const FrameDashed = ({ color = "#EF8005", size = 100 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <rect x="4" y="4" width="92" height="92" rx="8" stroke={color} strokeWidth="3" strokeDasharray="10 6" />
  </svg>
);

export const FrameDouble = ({ color = "#A2146A", size = 100 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <rect x="4" y="4" width="92" height="92" rx="8" stroke={color} strokeWidth="2" />
    <rect x="10" y="10" width="80" height="80" rx="5" stroke={color} strokeWidth="2" />
  </svg>
);

export const FrameRounded = ({ color = "#A2146A", size = 100 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <rect x="4" y="4" width="92" height="92" rx="24" stroke={color} strokeWidth="3" />
  </svg>
);

export const FrameCircle = ({ color = "#EF8005", size = 100 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="44" stroke={color} strokeWidth="3" />
  </svg>
);

export const FrameCircleDashed = ({ color = "#A2146A", size = 100 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="44" stroke={color} strokeWidth="2.5" strokeDasharray="10 6" />
  </svg>
);

export const FrameCircleDouble = ({ color = "#EF8005", size = 100 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="44" stroke={color} strokeWidth="2" />
    <circle cx="50" cy="50" r="38" stroke={color} strokeWidth="2" />
  </svg>
);

export const FrameDotted = ({ color = "#A2146A", size = 100 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <rect x="4" y="4" width="92" height="92" rx="8" stroke={color} strokeWidth="3" strokeDasharray="3 6" strokeLinecap="round" />
  </svg>
);

export const FrameTicket = ({ color = "#A2146A", size = 120 }: { color?: string; size?: number }) => (
  <svg width={size} height={size * 0.6} viewBox="0 0 120 72" fill="none">
    <path d="M8 4H112C114 4 116 6 116 8V28C110 28 106 32 106 36C106 40 110 44 116 44V64C116 66 114 68 112 68H8C6 68 4 66 4 64V44C10 44 14 40 14 36C14 32 10 28 4 28V8C4 6 6 4 8 4Z" stroke={color} strokeWidth="2.5" />
  </svg>
);

export const FrameWavy = ({ color = "#EF8005", size = 100 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <path d="M10 4C20 4 20 10 30 10C40 10 40 4 50 4C60 4 60 10 70 10C80 10 80 4 90 4V90C80 90 80 96 70 96C60 96 60 90 50 90C40 90 40 96 30 96C20 96 20 90 10 90V4Z" stroke={color} strokeWidth="2" />
  </svg>
);

export const FrameCornerDots = ({ color = "#A2146A", size = 100 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <rect x="10" y="10" width="80" height="80" rx="4" stroke={color} strokeWidth="2" />
    <circle cx="10" cy="10" r="5" fill={color} />
    <circle cx="90" cy="10" r="5" fill={color} />
    <circle cx="10" cy="90" r="5" fill={color} />
    <circle cx="90" cy="90" r="5" fill={color} />
  </svg>
);

export const FrameSquircle = ({ color = "#EF8005", size = 100 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <path d="M50 4C70 4 96 4 96 30V70C96 96 70 96 50 96C30 96 4 96 4 70V30C4 4 30 4 50 4Z" stroke={color} strokeWidth="2.5" />
  </svg>
);

export const FrameShield = ({ color = "#A2146A", size = 80 }: { color?: string; size?: number }) => (
  <svg width={size} height={size * 1.15} viewBox="0 0 80 92" fill="none">
    <path d="M40 4L72 18V48C72 68 56 84 40 88C24 84 8 68 8 48V18L40 4Z" stroke={color} strokeWidth="2.5" fill={color} opacity="0.05" />
  </svg>
);

export const FrameHeart = ({ color = "#A2146A", size = 80 }: { color?: string; size?: number }) => (
  <svg width={size} height={size * 0.9} viewBox="0 0 80 72" fill="none">
    <path d="M40 68C40 68 4 44 4 24C4 12 14 4 24 4C32 4 38 10 40 14C42 10 48 4 56 4C66 4 76 12 76 24C76 44 40 68 40 68Z" stroke={color} strokeWidth="2.5" fill={color} opacity="0.05" />
  </svg>
);

export const FrameHexagon = ({ color = "#EF8005", size = 80 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
    <path d="M40 4L72 20V52L40 68L8 52V20L40 4Z" stroke={color} strokeWidth="2.5" />
  </svg>
);

// ============ ICONS (education/business themed) ============

export const BookIcon = ({ color = "#A2146A", size = 48 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M24 8V40" />
    <path d="M24 8C24 8 18 6 10 8V40C18 38 24 40 24 40" />
    <path d="M24 8C24 8 30 6 38 8V40C30 38 24 40 24 40" />
  </svg>
);

export const GraduationIcon = ({ color = "#A2146A", size = 48 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M24 14L4 24L24 34L44 24L24 14Z" />
    <path d="M12 28V38C12 38 18 42 24 42C30 42 36 38 36 38V28" />
    <line x1="44" y1="24" x2="44" y2="36" />
  </svg>
);

export const LightbulbIcon = ({ color = "#EF8005", size = 48 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="24" cy="20" r="12" />
    <line x1="18" y1="36" x2="30" y2="36" />
    <line x1="19" y1="40" x2="29" y2="40" />
    <path d="M18 32C18 28 14 26 14 20" />
    <path d="M30 32C30 28 34 26 34 20" />
  </svg>
);

export const PencilIcon = ({ color = "#EF8005", size = 48 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 40L12 28L36 4L44 12L20 36L8 40Z" />
    <line x1="30" y1="10" x2="38" y2="18" />
  </svg>
);

export const LaptopIcon = ({ color = "#A2146A", size = 48 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="8" y="10" width="32" height="22" rx="2" />
    <path d="M4 36H44" />
    <line x1="20" y1="32" x2="28" y2="32" />
  </svg>
);

export const CertificateIcon = ({ color = "#EF8005", size = 48 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="6" y="6" width="36" height="28" rx="2" />
    <line x1="14" y1="14" x2="34" y2="14" />
    <line x1="14" y1="20" x2="28" y2="20" />
    <circle cx="34" cy="34" r="8" />
    <path d="M30 40L34 44L38 40" />
  </svg>
);

export const ChartIcon = ({ color = "#A2146A", size = 48 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="6" y1="40" x2="42" y2="40" />
    <line x1="6" y1="8" x2="6" y2="40" />
    <rect x="12" y="24" width="6" height="16" rx="1" fill={color} opacity="0.15" />
    <rect x="22" y="16" width="6" height="24" rx="1" fill={color} opacity="0.15" />
    <rect x="32" y="10" width="6" height="30" rx="1" fill={color} opacity="0.15" />
  </svg>
);

export const CalendarIcon = ({ color = "#EF8005", size = 48 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="6" y="10" width="36" height="32" rx="3" />
    <line x1="6" y1="20" x2="42" y2="20" />
    <line x1="16" y1="6" x2="16" y2="14" />
    <line x1="32" y1="6" x2="32" y2="14" />
    <circle cx="16" cy="28" r="2" fill={color} />
    <circle cx="24" cy="28" r="2" fill={color} />
    <circle cx="32" cy="28" r="2" fill={color} />
    <circle cx="16" cy="36" r="2" fill={color} />
  </svg>
);

export const ClockIcon = ({ color = "#A2146A", size = 48 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="24" cy="24" r="18" />
    <path d="M24 12V24L32 28" />
  </svg>
);

export const TargetIcon = ({ color = "#EF8005", size = 48 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="24" cy="24" r="18" />
    <circle cx="24" cy="24" r="12" />
    <circle cx="24" cy="24" r="6" />
    <circle cx="24" cy="24" r="2" fill={color} />
  </svg>
);

export const TrophyIcon = ({ color = "#EF8005", size = 48 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 6H32V22C32 28 28 32 24 32C20 32 16 28 16 22V6Z" />
    <path d="M16 12H8C8 12 6 20 14 22" />
    <path d="M32 12H40C40 12 42 20 34 22" />
    <line x1="24" y1="32" x2="24" y2="38" />
    <line x1="16" y1="42" x2="32" y2="42" />
    <line x1="14" y1="38" x2="34" y2="38" />
  </svg>
);

export const MicrophoneIcon = ({ color = "#A2146A", size = 48 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="18" y="6" width="12" height="22" rx="6" />
    <path d="M10 24C10 32 16 38 24 38C32 38 38 32 38 24" />
    <line x1="24" y1="38" x2="24" y2="44" />
    <line x1="16" y1="44" x2="32" y2="44" />
  </svg>
);

export const GlobeIcon = ({ color = "#4A90D9", size = 48 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="24" cy="24" r="18" />
    <ellipse cx="24" cy="24" rx="8" ry="18" />
    <line x1="6" y1="24" x2="42" y2="24" />
    <path d="M8 14H40" />
    <path d="M8 34H40" />
  </svg>
);

export const RocketIcon = ({ color = "#EF8005", size = 48 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M24 4C24 4 34 10 34 24C34 34 28 42 24 44C20 42 14 34 14 24C14 10 24 4 24 4Z" />
    <circle cx="24" cy="22" r="4" />
    <path d="M14 30L6 34L10 40" />
    <path d="M34 30L42 34L38 40" />
  </svg>
);

export const UsersIcon = ({ color = "#A2146A", size = 48 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="18" cy="16" r="6" />
    <path d="M6 38C6 30 12 26 18 26C24 26 30 30 30 38" />
    <circle cx="34" cy="18" r="5" />
    <path d="M32 26C36 26 42 30 42 36" />
  </svg>
);

export const StarIcon = ({ color = "#EF8005", size = 48 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M24 4L30 18H44L32 28L36 42L24 34L12 42L16 28L4 18H18L24 4Z" />
  </svg>
);

export const HeartIcon = ({ color = "#A2146A", size = 48 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M24 42C24 42 4 30 4 16C4 8 10 4 16 4C20 4 23 7 24 10C25 7 28 4 32 4C38 4 44 8 44 16C44 30 24 42 24 42Z" />
  </svg>
);

export const PlayIcon = ({ color = "#EF8005", size = 48 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="24" cy="24" r="18" />
    <path d="M20 16L34 24L20 32V16Z" fill={color} opacity="0.15" />
  </svg>
);

export const CheckBadgeIcon = ({ color = "#369D69", size = 48 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="24" cy="24" r="18" />
    <path d="M16 24L22 30L34 18" />
  </svg>
);

export const MailIcon = ({ color = "#A2146A", size = 48 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="10" width="40" height="28" rx="3" />
    <path d="M4 14L24 28L44 14" />
  </svg>
);

export const CameraIcon = ({ color = "#EF8005", size = 48 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 16H10L16 10H32L38 16H42V38H6V16Z" />
    <circle cx="24" cy="26" r="8" />
  </svg>
);

export const ShieldIcon = ({ color = "#369D69", size = 48 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M24 4L40 12V24C40 36 32 42 24 44C16 42 8 36 8 24V12L24 4Z" />
    <path d="M16 24L22 30L32 18" />
  </svg>
);

export const WifiIcon = ({ color = "#4A90D9", size = 48 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 18C12 10 24 8 36 12C40 14 44 16 44 18" />
    <path d="M10 26C16 20 24 18 32 20C36 22 38 24 38 26" />
    <path d="M16 34C20 30 28 30 32 34" />
    <circle cx="24" cy="40" r="2" fill={color} />
  </svg>
);

export const BellIcon = ({ color = "#EF8005", size = 48 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22C12 14 18 8 24 8C30 8 36 14 36 22V32H12V22Z" />
    <line x1="8" y1="32" x2="40" y2="32" />
    <path d="M20 36C20 38 22 40 24 40C26 40 28 38 28 36" />
    <line x1="24" y1="4" x2="24" y2="8" />
  </svg>
);

export const SettingsIcon = ({ color = "#A2146A", size = 48 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="24" cy="24" r="6" />
    <path d="M24 4L28 10L36 8L34 16L42 20L38 26L44 32L36 34L36 42L28 38L24 44L20 38L12 42L12 34L4 32L10 26L6 20L14 16L12 8L20 10L24 4Z" />
  </svg>
);

// ============ LINES ============

export const DottedLine = ({ color = "#A2146A", size = 200 }: { color?: string; size?: number }) => (
  <svg width={size} height="8" viewBox="0 0 200 8" fill="none">
    {Array.from({ length: 20 }).map((_, i) => (
      <circle key={i} cx={5 + i * 10} cy="4" r="3" fill={color} />
    ))}
  </svg>
);

export const DashedLine = ({ color = "#A2146A", size = 200 }: { color?: string; size?: number }) => (
  <svg width={size} height="8" viewBox="0 0 200 8" fill="none">
    <line x1="0" y1="4" x2="200" y2="4" stroke={color} strokeWidth="2.5" strokeDasharray="12 6" strokeLinecap="round" />
  </svg>
);

export const SolidLine = ({ color = "#A2146A", size = 200 }: { color?: string; size?: number }) => (
  <svg width={size} height="8" viewBox="0 0 200 8" fill="none">
    <line x1="0" y1="4" x2="200" y2="4" stroke={color} strokeWidth="3" strokeLinecap="round" />
  </svg>
);

export const DoubleLine = ({ color = "#A2146A", size = 200 }: { color?: string; size?: number }) => (
  <svg width={size} height="14" viewBox="0 0 200 14" fill="none">
    <line x1="0" y1="4" x2="200" y2="4" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <line x1="0" y1="10" x2="200" y2="10" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const GradientLine = ({ color1 = "#A2146A", color2 = "#EF8005", size = 200 }: { color1?: string; color2?: string; size?: number }) => (
  <svg width={size} height="8" viewBox="0 0 200 8" fill="none">
    <defs>
      <linearGradient id={`gl-${color1.replace('#','')}-${color2.replace('#','')}`} x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor={color1} />
        <stop offset="100%" stopColor={color2} />
      </linearGradient>
    </defs>
    <line x1="0" y1="4" x2="200" y2="4" stroke={`url(#gl-${color1.replace('#','')}-${color2.replace('#','')})`} strokeWidth="3" strokeLinecap="round" />
  </svg>
);

export const WavyLine = ({ color = "#A2146A", size = 200 }: { color?: string; size?: number }) => (
  <svg width={size} height="20" viewBox="0 0 200 20" fill="none">
    <path d="M0 10C12 4 25 16 37 10C50 4 62 16 75 10C87 4 100 16 112 10C125 4 137 16 150 10C162 4 175 16 187 10C195 6 200 8 200 10" stroke={color} strokeWidth="2.5" strokeLinecap="round" fill="none" />
  </svg>
);

export const ZigzagLine = ({ color = "#EF8005", size = 200 }: { color?: string; size?: number }) => (
  <svg width={size} height="16" viewBox="0 0 200 16" fill="none">
    <path d="M0 8L10 2L20 14L30 2L40 14L50 2L60 14L70 2L80 14L90 2L100 14L110 2L120 14L130 2L140 14L150 2L160 14L170 2L180 14L190 2L200 8" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

export const DashDotLine = ({ color = "#A2146A", size = 200 }: { color?: string; size?: number }) => (
  <svg width={size} height="8" viewBox="0 0 200 8" fill="none">
    <line x1="0" y1="4" x2="200" y2="4" stroke={color} strokeWidth="2.5" strokeDasharray="16 6 4 6" strokeLinecap="round" />
  </svg>
);

export const TaperedLine = ({ color = "#EF8005", size = 200 }: { color?: string; size?: number }) => (
  <svg width={size} height="12" viewBox="0 0 200 12" fill="none">
    <path d="M0 6C0 6 50 2 100 6C150 10 200 6 200 6" stroke={color} strokeWidth="3" strokeLinecap="round" fill="none" />
  </svg>
);

export const CrosshatchLine = ({ color = "#A2146A", size = 200 }: { color?: string; size?: number }) => (
  <svg width={size} height="16" viewBox="0 0 200 16" fill="none">
    <line x1="0" y1="8" x2="200" y2="8" stroke={color} strokeWidth="1.5" />
    {Array.from({ length: 20 }).map((_, i) => (
      <line key={i} x1={10 + i * 10} y1="2" x2={10 + i * 10} y2="14" stroke={color} strokeWidth="1.5" />
    ))}
  </svg>
);

export const ArrowLine = ({ color = "#EF8005", size = 200 }: { color?: string; size?: number }) => (
  <svg width={size} height="12" viewBox="0 0 200 12" fill="none">
    <line x1="0" y1="6" x2="192" y2="6" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <path d="M188 2L196 6L188 10" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

export const ScallopLine = ({ color = "#A2146A", size = 200 }: { color?: string; size?: number }) => (
  <svg width={size} height="16" viewBox="0 0 200 16" fill="none">
    <path d="M0 12C8 4 16 4 20 12C24 4 32 4 40 12C44 4 52 4 60 12C64 4 72 4 80 12C84 4 92 4 100 12C104 4 112 4 120 12C124 4 132 4 140 12C144 4 152 4 160 12C164 4 172 4 180 12C184 4 192 4 200 12" stroke={color} strokeWidth="2" strokeLinecap="round" fill="none" />
  </svg>
);

export const ThickThinLine = ({ color = "#EF8005", size = 200 }: { color?: string; size?: number }) => (
  <svg width={size} height="14" viewBox="0 0 200 14" fill="none">
    <line x1="0" y1="4" x2="200" y2="4" stroke={color} strokeWidth="4" strokeLinecap="round" />
    <line x1="0" y1="12" x2="200" y2="12" stroke={color} strokeWidth="1" strokeLinecap="round" />
  </svg>
);

export const BracketLine = ({ color = "#A2146A", size = 200 }: { color?: string; size?: number }) => (
  <svg width={size} height="20" viewBox="0 0 200 20" fill="none">
    <path d="M4 4V16" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    <line x1="4" y1="10" x2="196" y2="10" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <path d="M196 4V16" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

// ============ ALL ELEMENTS REGISTRY ============

export interface DesignElement {
  id: string;
  name: string;
  category: string;
  component: React.ReactNode;
}

export const ELEMENT_CATEGORIES = [
  "Nooled",
  "Badge'id",
  "Kujundid",
  "Raamid",
  "Ikoonid",
  "Jooned",
] as const;

export function getAllElements(): DesignElement[] {
  return [
    // ===== ARROWS (16) =====
    { id: "dashed-curved-up-black", name: "Kumer kriipsnool üles (must)", category: "Nooled", component: <DashedCurvedArrowUp color="#1A1A1A" /> },
    { id: "dashed-curved-up-purple", name: "Kumer kriipsnool üles (purple)", category: "Nooled", component: <DashedCurvedArrowUp color="#A2146A" /> },
    { id: "dashed-curved-up-orange", name: "Kumer kriipsnool üles (orange)", category: "Nooled", component: <DashedCurvedArrowUp color="#EF8005" /> },
    { id: "dashed-curved-down-black", name: "Kumer kriipsnool alla (must)", category: "Nooled", component: <DashedCurvedArrowDown color="#1A1A1A" /> },
    { id: "dashed-loop-black", name: "Silmusnool (must)", category: "Nooled", component: <DashedLoopArrow color="#1A1A1A" /> },
    { id: "dashed-loop-purple", name: "Silmusnool (purple)", category: "Nooled", component: <DashedLoopArrow color="#A2146A" /> },
    { id: "solid-curved-up-purple", name: "Kumer nool üles (purple)", category: "Nooled", component: <SolidCurvedArrowUp color="#A2146A" /> },
    { id: "solid-curved-up-orange", name: "Kumer nool üles (orange)", category: "Nooled", component: <SolidCurvedArrowUp color="#EF8005" /> },
    { id: "solid-curved-down-purple", name: "Kumer nool alla (purple)", category: "Nooled", component: <SolidCurvedArrowDown color="#A2146A" /> },
    { id: "straight-arrow-purple", name: "Sirge nool (purple)", category: "Nooled", component: <StraightArrow color="#A2146A" /> },
    { id: "straight-arrow-orange", name: "Sirge nool (orange)", category: "Nooled", component: <StraightArrow color="#EF8005" /> },
    { id: "straight-dashed-black", name: "Sirge kriipsnool (must)", category: "Nooled", component: <StraightArrowDashed color="#1A1A1A" /> },
    { id: "diagonal-up-purple", name: "Diagonaalnool üles (purple)", category: "Nooled", component: <DiagonalArrowUp color="#A2146A" /> },
    { id: "diagonal-down-orange", name: "Diagonaalnool alla (orange)", category: "Nooled", component: <DiagonalArrowDown color="#EF8005" /> },
    { id: "wavy-arrow-purple", name: "Laineline nool (purple)", category: "Nooled", component: <WavyArrow color="#A2146A" /> },
    { id: "wavy-arrow-orange", name: "Laineline nool (orange)", category: "Nooled", component: <WavyArrow color="#EF8005" /> },
    { id: "bouncing-arrow-purple", name: "Põrkav nool (purple)", category: "Nooled", component: <BouncingArrow color="#A2146A" /> },
    { id: "circle-arrow-purple", name: "Ringnool (purple)", category: "Nooled", component: <CircleArrow color="#A2146A" /> },
    { id: "spiral-arrow-orange", name: "Spiraal-nool (orange)", category: "Nooled", component: <SpiralArrow color="#EF8005" /> },
    { id: "zigzag-arrow-purple", name: "Siksak nool (purple)", category: "Nooled", component: <ZigzagArrow color="#A2146A" /> },
    { id: "u-arrow-orange", name: "U-nool (orange)", category: "Nooled", component: <UArrow color="#EF8005" /> },
    { id: "s-curve-black", name: "S-kõver (must)", category: "Nooled", component: <DashedSCurveArrow color="#1A1A1A" /> },

    // ===== BADGES (16) =====
    { id: "badge-uus", name: "UUS", category: "Badge'id", component: <BadgeElement color="#A2146A" text="UUS" /> },
    { id: "badge-tasuta", name: "TASUTA", category: "Badge'id", component: <BadgeElement color="#EF8005" text="TASUTA" /> },
    { id: "badge-populaarne", name: "POPULAARNE", category: "Badge'id", component: <BadgeElement color="#369D69" text="POPULAARNE" /> },
    { id: "badge-pro", name: "PRO", category: "Badge'id", component: <BadgeElement color="#7B0F50" text="PRO" /> },
    { id: "badge-live", name: "LIVE", category: "Badge'id", component: <BadgeElement color="#FD3D3D" text="LIVE" /> },
    { id: "badge-soovitatud", name: "SOOVITATUD", category: "Badge'id", component: <BadgeElement color="#4A90D9" text="SOOVITATUD" /> },
    { id: "badge-preemium", name: "PREEMIUM", category: "Badge'id", component: <BadgeElement color="#7B0F50" text="PREEMIUM" /> },
    { id: "badge-bestseller", name: "BESTSELLER", category: "Badge'id", component: <BadgeElement color="#A2146A" text="BESTSELLER" /> },
    { id: "badge-soodne", name: "SOODNE", category: "Badge'id", component: <BadgeElement color="#369D69" text="SOODNE" /> },
    { id: "badge-piiratud", name: "PIIRATUD", category: "Badge'id", component: <BadgeElement color="#E95A0C" text="PIIRATUD" /> },
    { id: "badge-tunnistus", name: "TUNNISTUS", category: "Badge'id", component: <BadgeElement color="#4A90D9" text="TUNNISTUS" /> },
    { id: "badge-ekspert", name: "EKSPERT", category: "Badge'id", component: <BadgeElement color="#A2146A" text="EKSPERT" /> },
    { id: "badge-algaja", name: "ALGAJA", category: "Badge'id", component: <BadgeElement color="#EF8005" text="ALGAJA" /> },
    { id: "badge-edasijoudnud", name: "EDASIJÕUDNUD", category: "Badge'id", component: <BadgeElement color="#7B0F50" text="EDASIJÕUDNUD" /> },
    { id: "badge-interaktiivne", name: "INTERAKTIIVNE", category: "Badge'id", component: <BadgeElement color="#4A90D9" text="INTERAKTIIVNE" /> },
    { id: "badge-sertifikaat", name: "SERTIFIKAAT", category: "Badge'id", component: <BadgeElement color="#369D69" text="SERTIFIKAAT" /> },
    // Outline badges
    { id: "badge-outline-uus", name: "UUS (outline)", category: "Badge'id", component: <BadgeOutline color="#A2146A" text="UUS" /> },
    { id: "badge-outline-tasuta", name: "TASUTA (outline)", category: "Badge'id", component: <BadgeOutline color="#EF8005" text="TASUTA" /> },
    { id: "badge-outline-preemium", name: "PREEMIUM (outline)", category: "Badge'id", component: <BadgeOutline color="#7B0F50" text="PREEMIUM" /> },
    // Dot badges
    { id: "badge-dot-live", name: "LIVE (dot)", category: "Badge'id", component: <BadgeDot color="#FD3D3D" text="LIVE" /> },
    { id: "badge-dot-populaarne", name: "POPULAARNE (dot)", category: "Badge'id", component: <BadgeDot color="#369D69" text="POPULAARNE" /> },

    // ===== SHAPES (17) =====
    { id: "ring-purple-orange", name: "Gradient ring (purple-orange)", category: "Kujundid", component: <GradientRing color1="#A2146A" color2="#EF8005" /> },
    { id: "ring-purple-blue", name: "Gradient ring (purple-blue)", category: "Kujundid", component: <GradientRing color1="#A2146A" color2="#4A90D9" /> },
    { id: "ring-green", name: "Ring (green)", category: "Kujundid", component: <GradientRing color1="#369D69" color2="#DAF8E9" /> },
    { id: "dots-purple-orange", name: "Punktimuster", category: "Kujundid", component: <DecorativeDots /> },
    { id: "scatter-dots", name: "Hajutatud punktid", category: "Kujundid", component: <ScatterDots /> },
    { id: "blob-purple", name: "Blob (purple)", category: "Kujundid", component: <BlobShape color="#A2146A" opacity={0.2} /> },
    { id: "blob-orange", name: "Blob (orange)", category: "Kujundid", component: <BlobShape color="#EF8005" opacity={0.15} /> },
    { id: "blob-pink", name: "Blob (pastel pink)", category: "Kujundid", component: <BlobShape color="#ECD9E4" opacity={0.8} /> },
    { id: "blob2-purple", name: "Blob 2 (purple)", category: "Kujundid", component: <BlobShape2 color="#A2146A" opacity={0.18} /> },
    { id: "blob3-orange", name: "Blob 3 (orange)", category: "Kujundid", component: <BlobShape3 color="#EF8005" opacity={0.15} /> },
    { id: "wave-purple", name: "Laine (purple)", category: "Kujundid", component: <WaveShape color="#A2146A" /> },
    { id: "wave-orange", name: "Laine (orange)", category: "Kujundid", component: <WaveShape color="#EF8005" /> },
    { id: "airplane-purple", name: "Paberlennuk (purple)", category: "Kujundid", component: <PaperAirplane color="#A2146A" rotation={-25} /> },
    { id: "airplane-orange", name: "Paberlennuk (orange)", category: "Kujundid", component: <PaperAirplane color="#EF8005" rotation={-30} /> },
    { id: "star-orange", name: "Täht (orange)", category: "Kujundid", component: <StarShape color="#EF8005" /> },
    { id: "star-purple", name: "Täht (purple)", category: "Kujundid", component: <StarShape color="#A2146A" /> },
    { id: "hexagon-purple", name: "Kuusnurk (purple)", category: "Kujundid", component: <HexagonShape color="#A2146A" /> },
    { id: "diamond-orange", name: "Romb (orange)", category: "Kujundid", component: <DiamondShape color="#EF8005" /> },
    { id: "cross-purple", name: "Rist (purple)", category: "Kujundid", component: <CrossShape color="#A2146A" /> },
    { id: "triangle-orange", name: "Kolmnurk (orange)", category: "Kujundid", component: <TriangleShape color="#EF8005" /> },
    { id: "semicircle-purple", name: "Poolring (purple)", category: "Kujundid", component: <SemiCircle color="#A2146A" /> },
    { id: "concentric-purple", name: "Kontsentrilised ringid", category: "Kujundid", component: <ConcentricCircles color="#A2146A" /> },
    { id: "highlight-purple", name: "Highlight (purple)", category: "Kujundid", component: <HighlightBox color="#A2146A" /> },
    { id: "highlight-orange", name: "Highlight (orange)", category: "Kujundid", component: <HighlightBox color="#EF8005" /> },

    // ===== FRAMES (15) =====
    { id: "frame-solid-purple", name: "Solid raam (purple)", category: "Raamid", component: <FrameSolid color="#A2146A" /> },
    { id: "frame-solid-orange", name: "Solid raam (orange)", category: "Raamid", component: <FrameSolid color="#EF8005" /> },
    { id: "frame-dashed-purple", name: "Katkendlik raam (purple)", category: "Raamid", component: <FrameDashed color="#A2146A" /> },
    { id: "frame-dashed-orange", name: "Katkendlik raam (orange)", category: "Raamid", component: <FrameDashed color="#EF8005" /> },
    { id: "frame-double-purple", name: "Topeltraam (purple)", category: "Raamid", component: <FrameDouble color="#A2146A" /> },
    { id: "frame-rounded-purple", name: "Ümardatud raam (purple)", category: "Raamid", component: <FrameRounded color="#A2146A" /> },
    { id: "frame-rounded-orange", name: "Ümardatud raam (orange)", category: "Raamid", component: <FrameRounded color="#EF8005" /> },
    { id: "frame-circle-orange", name: "Ringraam (orange)", category: "Raamid", component: <FrameCircle color="#EF8005" /> },
    { id: "frame-circle-dashed-purple", name: "Katkendlik ringraam (purple)", category: "Raamid", component: <FrameCircleDashed color="#A2146A" /> },
    { id: "frame-circle-double-orange", name: "Topelt ringraam (orange)", category: "Raamid", component: <FrameCircleDouble color="#EF8005" /> },
    { id: "frame-dotted-purple", name: "Punktiir-raam (purple)", category: "Raamid", component: <FrameDotted color="#A2146A" /> },
    { id: "frame-ticket-purple", name: "Piletiraam (purple)", category: "Raamid", component: <FrameTicket color="#A2146A" /> },
    { id: "frame-wavy-orange", name: "Laineraam (orange)", category: "Raamid", component: <FrameWavy color="#EF8005" /> },
    { id: "frame-cornerdots-purple", name: "Nurgapunktidega raam (purple)", category: "Raamid", component: <FrameCornerDots color="#A2146A" /> },
    { id: "frame-squircle-orange", name: "Squircle raam (orange)", category: "Raamid", component: <FrameSquircle color="#EF8005" /> },
    { id: "frame-shield-purple", name: "Kilbiraam (purple)", category: "Raamid", component: <FrameShield color="#A2146A" /> },
    { id: "frame-heart-purple", name: "Südameraam (purple)", category: "Raamid", component: <FrameHeart color="#A2146A" /> },
    { id: "frame-hexagon-orange", name: "Kuusnurk-raam (orange)", category: "Raamid", component: <FrameHexagon color="#EF8005" /> },

    // ===== ICONS (22) =====
    { id: "icon-book-purple", name: "Raamat (purple)", category: "Ikoonid", component: <BookIcon color="#A2146A" /> },
    { id: "icon-book-green", name: "Raamat (green)", category: "Ikoonid", component: <BookIcon color="#369D69" /> },
    { id: "icon-graduation-purple", name: "Lõpetamine (purple)", category: "Ikoonid", component: <GraduationIcon color="#A2146A" /> },
    { id: "icon-graduation-blue", name: "Lõpetamine (blue)", category: "Ikoonid", component: <GraduationIcon color="#4A90D9" /> },
    { id: "icon-lightbulb-orange", name: "Idee (orange)", category: "Ikoonid", component: <LightbulbIcon color="#EF8005" /> },
    { id: "icon-lightbulb-red", name: "Idee (red)", category: "Ikoonid", component: <LightbulbIcon color="#FD3D3D" /> },
    { id: "icon-pencil-orange", name: "Pliiats (orange)", category: "Ikoonid", component: <PencilIcon color="#EF8005" /> },
    { id: "icon-pencil-purple", name: "Pliiats (purple)", category: "Ikoonid", component: <PencilIcon color="#A2146A" /> },
    { id: "icon-laptop-purple", name: "Sülearvuti (purple)", category: "Ikoonid", component: <LaptopIcon color="#A2146A" /> },
    { id: "icon-laptop-orange", name: "Sülearvuti (orange)", category: "Ikoonid", component: <LaptopIcon color="#EF8005" /> },
    { id: "icon-certificate-orange", name: "Sertifikaat (orange)", category: "Ikoonid", component: <CertificateIcon color="#EF8005" /> },
    { id: "icon-chart-purple", name: "Diagramm (purple)", category: "Ikoonid", component: <ChartIcon color="#A2146A" /> },
    { id: "icon-calendar-orange", name: "Kalender (orange)", category: "Ikoonid", component: <CalendarIcon color="#EF8005" /> },
    { id: "icon-clock-purple", name: "Kell (purple)", category: "Ikoonid", component: <ClockIcon color="#A2146A" /> },
    { id: "icon-target-orange", name: "Sihtmärk (orange)", category: "Ikoonid", component: <TargetIcon color="#EF8005" /> },
    { id: "icon-trophy-orange", name: "Karikas (orange)", category: "Ikoonid", component: <TrophyIcon color="#EF8005" /> },
    { id: "icon-microphone-purple", name: "Mikrofon (purple)", category: "Ikoonid", component: <MicrophoneIcon color="#A2146A" /> },
    { id: "icon-globe-blue", name: "Maakera (blue)", category: "Ikoonid", component: <GlobeIcon color="#4A90D9" /> },
    { id: "icon-rocket-orange", name: "Rakett (orange)", category: "Ikoonid", component: <RocketIcon color="#EF8005" /> },
    { id: "icon-users-purple", name: "Kasutajad (purple)", category: "Ikoonid", component: <UsersIcon color="#A2146A" /> },
    { id: "icon-star-orange", name: "Täht (orange)", category: "Ikoonid", component: <StarIcon color="#EF8005" /> },
    { id: "icon-heart-purple", name: "Süda (purple)", category: "Ikoonid", component: <HeartIcon color="#A2146A" /> },
    { id: "icon-play-orange", name: "Esita (orange)", category: "Ikoonid", component: <PlayIcon color="#EF8005" /> },
    { id: "icon-checkbadge-green", name: "Kinnitatud (green)", category: "Ikoonid", component: <CheckBadgeIcon color="#369D69" /> },
    { id: "icon-mail-purple", name: "Kiri (purple)", category: "Ikoonid", component: <MailIcon color="#A2146A" /> },
    { id: "icon-camera-orange", name: "Kaamera (orange)", category: "Ikoonid", component: <CameraIcon color="#EF8005" /> },
    { id: "icon-shield-green", name: "Kaitse (green)", category: "Ikoonid", component: <ShieldIcon color="#369D69" /> },
    { id: "icon-wifi-blue", name: "WiFi (blue)", category: "Ikoonid", component: <WifiIcon color="#4A90D9" /> },
    { id: "icon-bell-orange", name: "Kell (orange)", category: "Ikoonid", component: <BellIcon color="#EF8005" /> },
    { id: "icon-settings-purple", name: "Seaded (purple)", category: "Ikoonid", component: <SettingsIcon color="#A2146A" /> },

    // ===== LINES (15) =====
    { id: "dotted-purple", name: "Punktiirjoon (purple)", category: "Jooned", component: <DottedLine color="#A2146A" /> },
    { id: "dotted-orange", name: "Punktiirjoon (orange)", category: "Jooned", component: <DottedLine color="#EF8005" /> },
    { id: "dashed-purple", name: "Kriipsjoon (purple)", category: "Jooned", component: <DashedLine color="#A2146A" /> },
    { id: "dashed-orange", name: "Kriipsjoon (orange)", category: "Jooned", component: <DashedLine color="#EF8005" /> },
    { id: "solid-purple", name: "Pidevjoon (purple)", category: "Jooned", component: <SolidLine color="#A2146A" /> },
    { id: "solid-orange", name: "Pidevjoon (orange)", category: "Jooned", component: <SolidLine color="#EF8005" /> },
    { id: "double-purple", name: "Topeltjoon (purple)", category: "Jooned", component: <DoubleLine color="#A2146A" /> },
    { id: "gradient-line", name: "Gradient joon", category: "Jooned", component: <GradientLine /> },
    { id: "wavy-line-purple", name: "Lainejoon (purple)", category: "Jooned", component: <WavyLine color="#A2146A" /> },
    { id: "wavy-line-blue", name: "Lainejoon (blue)", category: "Jooned", component: <WavyLine color="#4A90D9" /> },
    { id: "zigzag-line-orange", name: "Siksak joon (orange)", category: "Jooned", component: <ZigzagLine color="#EF8005" /> },
    { id: "dashdot-purple", name: "Kriips-punkt joon (purple)", category: "Jooned", component: <DashDotLine color="#A2146A" /> },
    { id: "scallop-purple", name: "Kaarejoon (purple)", category: "Jooned", component: <ScallopLine color="#A2146A" /> },
    { id: "thickthin-orange", name: "Paks-õhuke joon (orange)", category: "Jooned", component: <ThickThinLine color="#EF8005" /> },
    { id: "bracket-purple", name: "Sulgujoon (purple)", category: "Jooned", component: <BracketLine color="#A2146A" /> },
    { id: "crosshatch-purple", name: "Ristjoon (purple)", category: "Jooned", component: <CrosshatchLine color="#A2146A" /> },
    { id: "arrow-line-orange", name: "Noolejoon (orange)", category: "Jooned", component: <ArrowLine color="#EF8005" /> },
  ];
}

// ============ DOWNLOAD UTILITY ============

export function downloadElementAsPng(elementId: string, element: React.ReactNode) {
  const tempDiv = document.getElementById(`svg-${elementId}`);
  if (!tempDiv) return;
  
  const svgElement = tempDiv.querySelector('svg');
  if (!svgElement) return;

  const svgData = new XMLSerializer().serializeToString(svgElement);
  const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
  const url = URL.createObjectURL(svgBlob);

  const img = new Image();
  img.onload = () => {
    const canvas = document.createElement('canvas');
    const scale = 3;
    canvas.width = img.width * scale;
    canvas.height = img.height * scale;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.scale(scale, scale);
    ctx.drawImage(img, 0, 0);

    canvas.toBlob((blob) => {
      if (!blob) return;
      const link = document.createElement('a');
      link.download = `veebikool-${elementId}.png`;
      link.href = URL.createObjectURL(blob);
      link.click();
      URL.revokeObjectURL(link.href);
    }, 'image/png');

    URL.revokeObjectURL(url);
  };
  img.src = url;
}

export function downloadSvg(elementId: string) {
  const tempDiv = document.getElementById(`svg-${elementId}`);
  if (!tempDiv) return;
  
  const svgElement = tempDiv.querySelector('svg');
  if (!svgElement) return;

  const svgData = new XMLSerializer().serializeToString(svgElement);
  const blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
  const link = document.createElement('a');
  link.download = `veebikool-${elementId}.svg`;
  link.href = URL.createObjectURL(blob);
  link.click();
  URL.revokeObjectURL(link.href);
}
