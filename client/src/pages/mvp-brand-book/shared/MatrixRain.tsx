import { useMemo } from 'react';

const COLOR = '#00C96E';

const DENSITY_MAP = {
  high: 12,
  normal: 7,
  low: 4,
  none: 0,
} as const;

export type RainDensity = keyof typeof DENSITY_MAP;

const CHARS = 'アイウエオカキクケコサシスセソタチツテトABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

function randomChar() {
  return CHARS[Math.floor(Math.random() * CHARS.length)];
}

export default function MatrixRain({ density = 'normal' }: { density?: RainDensity }) {
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const count = DENSITY_MAP[density];

  const drops = useMemo(() => {
    if (prefersReducedMotion || count === 0) return [];
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      char: randomChar(),
      left: Math.random() * 100,
      delay: Math.random() * 18,
      duration: 8 + Math.random() * 14,
      size: 10 + Math.random() * 6,
      opacity: 0.15 + Math.random() * 0.35,
    }));
  }, [prefersReducedMotion, count]);

  if (prefersReducedMotion || count === 0 || drops.length === 0) return null;

  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 1, overflow: 'hidden' }} aria-hidden="true">
      {drops.map((d) => (
        <span
          key={d.id}
          style={{
            position: 'absolute',
            left: `${d.left}%`,
            top: -30,
            color: COLOR,
            fontSize: d.size,
            fontFamily: "'Courier New', monospace",
            opacity: 0,
            animation: `mvp-code-rain ${d.duration}s ${d.delay}s linear infinite`,
            textShadow: `0 0 6px ${COLOR}`,
            maxWidth: '1em',
          }}
        >
          {d.char}
        </span>
      ))}
    </div>
  );
}
