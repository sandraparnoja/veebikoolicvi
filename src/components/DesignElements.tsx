import React, { useRef, useCallback } from 'react';

// ============ SVG DESIGN ELEMENTS ============

export const CurvedArrowRight = ({ color = "#A2146A", size = 80 }: { color?: string; size?: number }) => (
  <svg width={size} height={size * 0.6} viewBox="0 0 80 48" fill="none">
    <path d="M4 40C4 40 20 4 40 4C60 4 76 40 76 40" stroke={color} strokeWidth="3" strokeLinecap="round" fill="none" />
    <path d="M68 36L76 40L70 46" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

export const CurvedArrowLeft = ({ color = "#EF8005", size = 80 }: { color?: string; size?: number }) => (
  <svg width={size} height={size * 0.6} viewBox="0 0 80 48" fill="none">
    <path d="M76 40C76 40 60 4 40 4C20 4 4 40 4 40" stroke={color} strokeWidth="3" strokeLinecap="round" fill="none" />
    <path d="M12 36L4 40L10 46" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

export const StraightArrow = ({ color = "#A2146A", size = 80 }: { color?: string; size?: number }) => (
  <svg width={size} height={size * 0.25} viewBox="0 0 80 20" fill="none">
    <line x1="4" y1="10" x2="68" y2="10" stroke={color} strokeWidth="3" strokeLinecap="round" />
    <path d="M64 4L72 10L64 16" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

export const WavyArrow = ({ color = "#EF8005", size = 100 }: { color?: string; size?: number }) => (
  <svg width={size} height={size * 0.35} viewBox="0 0 100 35" fill="none">
    <path d="M4 20C14 8 26 28 36 16C46 4 58 28 68 16C78 4 88 20 88 20" stroke={color} strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <path d="M82 14L90 20L82 26" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

export const GradientRing = ({ color1 = "#A2146A", color2 = "#EF8005", size = 80 }: { color1?: string; color2?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
    <defs>
      <linearGradient id={`ring-${color1}-${color2}`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor={color1} />
        <stop offset="100%" stopColor={color2} />
      </linearGradient>
    </defs>
    <circle cx="40" cy="40" r="32" stroke={`url(#ring-${color1}-${color2})`} strokeWidth="10" />
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

export const WaveShape = ({ color = "#A2146A", size = 200 }: { color?: string; size?: number }) => (
  <svg width={size} height={size * 0.2} viewBox="0 0 200 40" fill="none">
    <path d="M0 20C25 8 50 32 75 20C100 8 125 32 150 20C175 8 200 32 200 20" stroke={color} strokeWidth="3" strokeLinecap="round" fill="none" />
  </svg>
);

export const PaperAirplane = ({ color = "#A2146A", size = 60, rotation = 15 }: { color?: string; size?: number; rotation?: number }) => (
  <svg width={size} height={size} viewBox="0 0 60 60" fill="none" style={{ transform: `rotate(${rotation}deg)` }}>
    <path d="M8 52L52 30L22 26L18 12L8 52Z" fill={color} />
    <path d="M22 26L30 42L18 12" fill={color} opacity="0.7" />
    <path d="M8 52C4 48 0 44 -4 46" stroke={color} strokeWidth="1.5" strokeDasharray="4 3" strokeLinecap="round" fill="none" />
  </svg>
);

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
    <line x1="20" y1="44" x2="28" y2="44" />
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

export const HighlightBox = ({ color = "#A2146A", size = 160 }: { color?: string; size?: number }) => (
  <svg width={size} height={size * 0.4} viewBox="0 0 160 64" fill="none">
    <rect x="2" y="2" width="156" height="60" rx="12" fill={color} opacity="0.12" />
    <rect x="2" y="2" width="156" height="60" rx="12" stroke={color} strokeWidth="1" opacity="0.2" />
  </svg>
);

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

export const BadgeElement = ({ color = "#A2146A", text = "BADGE", size = 120 }: { color?: string; text?: string; size?: number }) => (
  <svg width={size} height={size * 0.3} viewBox="0 0 120 36" fill="none">
    <rect width="120" height="36" rx="18" fill={color} />
    <text x="60" y="23" textAnchor="middle" fill="white" fontFamily="Nunito Sans, sans-serif" fontWeight="700" fontSize="13">{text}</text>
  </svg>
);

// ============ ALL ELEMENTS REGISTRY ============

export interface DesignElement {
  id: string;
  name: string;
  category: string;
  component: React.ReactNode;
  svgRef?: React.RefObject<SVGSVGElement>;
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
    // Arrows
    { id: "curved-arrow-right-purple", name: "Kumernool paremale (purple)", category: "Nooled", component: <CurvedArrowRight color="#A2146A" /> },
    { id: "curved-arrow-right-orange", name: "Kumernool paremale (orange)", category: "Nooled", component: <CurvedArrowRight color="#EF8005" /> },
    { id: "curved-arrow-left-purple", name: "Kumernool vasakule (purple)", category: "Nooled", component: <CurvedArrowLeft color="#A2146A" /> },
    { id: "curved-arrow-left-orange", name: "Kumernool vasakule (orange)", category: "Nooled", component: <CurvedArrowLeft color="#EF8005" /> },
    { id: "straight-arrow-purple", name: "Sirge nool (purple)", category: "Nooled", component: <StraightArrow color="#A2146A" /> },
    { id: "straight-arrow-orange", name: "Sirge nool (orange)", category: "Nooled", component: <StraightArrow color="#EF8005" /> },
    { id: "wavy-arrow-purple", name: "Laineline nool (purple)", category: "Nooled", component: <WavyArrow color="#A2146A" /> },
    { id: "wavy-arrow-orange", name: "Laineline nool (orange)", category: "Nooled", component: <WavyArrow color="#EF8005" /> },

    // Badges
    { id: "badge-uus", name: "Badge: UUS", category: "Badge'id", component: <BadgeElement color="#A2146A" text="UUS" /> },
    { id: "badge-tasuta", name: "Badge: TASUTA", category: "Badge'id", component: <BadgeElement color="#EF8005" text="TASUTA" /> },
    { id: "badge-populaarne", name: "Badge: POPULAARNE", category: "Badge'id", component: <BadgeElement color="#369D69" text="POPULAARNE" /> },
    { id: "badge-pro", name: "Badge: PRO", category: "Badge'id", component: <BadgeElement color="#7B0F50" text="PRO" /> },
    { id: "badge-live", name: "Badge: LIVE", category: "Badge'id", component: <BadgeElement color="#FD3D3D" text="LIVE" /> },
    { id: "badge-soovitatud", name: "Badge: SOOVITATUD", category: "Badge'id", component: <BadgeElement color="#4A90D9" text="SOOVITATUD" /> },

    // Shapes
    { id: "ring-purple-orange", name: "Gradient ring (purple-orange)", category: "Kujundid", component: <GradientRing color1="#A2146A" color2="#EF8005" /> },
    { id: "ring-purple-blue", name: "Gradient ring (purple-blue)", category: "Kujundid", component: <GradientRing color1="#A2146A" color2="#4A90D9" /> },
    { id: "ring-green", name: "Ring (green)", category: "Kujundid", component: <GradientRing color1="#369D69" color2="#DAF8E9" /> },
    { id: "dots-purple-orange", name: "Punktimuster", category: "Kujundid", component: <DecorativeDots /> },
    { id: "blob-purple", name: "Blob (purple)", category: "Kujundid", component: <BlobShape color="#A2146A" opacity={0.2} /> },
    { id: "blob-orange", name: "Blob (orange)", category: "Kujundid", component: <BlobShape color="#EF8005" opacity={0.15} /> },
    { id: "blob-pink", name: "Blob (pastel pink)", category: "Kujundid", component: <BlobShape color="#ECD9E4" opacity={0.8} /> },
    { id: "wave-purple", name: "Laine (purple)", category: "Kujundid", component: <WaveShape color="#A2146A" /> },
    { id: "wave-orange", name: "Laine (orange)", category: "Kujundid", component: <WaveShape color="#EF8005" /> },
    { id: "airplane-purple", name: "Paberlennuk (purple)", category: "Kujundid", component: <PaperAirplane color="#A2146A" rotation={15} /> },
    { id: "airplane-orange", name: "Paberlennuk (orange)", category: "Kujundid", component: <PaperAirplane color="#EF8005" rotation={-10} /> },
    { id: "highlight-purple", name: "Highlight (purple)", category: "Kujundid", component: <HighlightBox color="#A2146A" /> },
    { id: "highlight-orange", name: "Highlight (orange)", category: "Kujundid", component: <HighlightBox color="#EF8005" /> },

    // Frames
    { id: "frame-solid-purple", name: "Solid raam (purple)", category: "Raamid", component: <FrameSolid color="#A2146A" /> },
    { id: "frame-solid-orange", name: "Solid raam (orange)", category: "Raamid", component: <FrameSolid color="#EF8005" /> },
    { id: "frame-dashed-purple", name: "Katkendlik raam (purple)", category: "Raamid", component: <FrameDashed color="#A2146A" /> },
    { id: "frame-dashed-orange", name: "Katkendlik raam (orange)", category: "Raamid", component: <FrameDashed color="#EF8005" /> },
    { id: "frame-double-purple", name: "Topeltraam (purple)", category: "Raamid", component: <FrameDouble color="#A2146A" /> },

    // Icons
    { id: "icon-book-purple", name: "Raamat (purple)", category: "Ikoonid", component: <BookIcon color="#A2146A" /> },
    { id: "icon-book-green", name: "Raamat (green)", category: "Ikoonid", component: <BookIcon color="#369D69" /> },
    { id: "icon-graduation-purple", name: "Lõpetamine (purple)", category: "Ikoonid", component: <GraduationIcon color="#A2146A" /> },
    { id: "icon-graduation-blue", name: "Lõpetamine (blue)", category: "Ikoonid", component: <GraduationIcon color="#4A90D9" /> },
    { id: "icon-lightbulb-orange", name: "Idee (orange)", category: "Ikoonid", component: <LightbulbIcon color="#EF8005" /> },
    { id: "icon-lightbulb-red", name: "Idee (red)", category: "Ikoonid", component: <LightbulbIcon color="#FD3D3D" /> },
    { id: "icon-pencil-orange", name: "Pliiats (orange)", category: "Ikoonid", component: <PencilIcon color="#EF8005" /> },
    { id: "icon-pencil-purple", name: "Pliiats (purple)", category: "Ikoonid", component: <PencilIcon color="#A2146A" /> },

    // Lines
    { id: "dotted-purple", name: "Punktiirjoon (purple)", category: "Jooned", component: <DottedLine color="#A2146A" /> },
    { id: "dotted-orange", name: "Punktiirjoon (orange)", category: "Jooned", component: <DottedLine color="#EF8005" /> },
    { id: "dashed-purple", name: "Kriipsjoon (purple)", category: "Jooned", component: <DashedLine color="#A2146A" /> },
    { id: "dashed-orange", name: "Kriipsjoon (orange)", category: "Jooned", component: <DashedLine color="#EF8005" /> },
    { id: "wave-line-blue", name: "Lainejoon (blue)", category: "Jooned", component: <WaveShape color="#4A90D9" size={200} /> },
  ];
}

// ============ DOWNLOAD UTILITY ============

export function downloadElementAsPng(elementId: string, element: React.ReactNode) {
  const container = document.createElement('div');
  container.style.position = 'absolute';
  container.style.left = '-9999px';
  container.style.top = '-9999px';
  document.body.appendChild(container);

  // Render SVG to get its HTML
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
    const scale = 3; // 3x for high-res
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
    document.body.removeChild(container);
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
