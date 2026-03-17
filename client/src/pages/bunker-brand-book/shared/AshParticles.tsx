import { useMemo } from 'react';

const COLORS = ['#FF6600', '#FF4400', '#FFAA00', '#CD7F32', '#FF8C00'];

const DENSITY_MAP = {
  high: 50,
  normal: 30,
  low: 15,
  none: 0,
} as const;

export type ParticleDensity = keyof typeof DENSITY_MAP;

export default function AshParticles({ density = 'normal' }: { density?: ParticleDensity }) {
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const count = DENSITY_MAP[density];

  const particles = useMemo(() => {
    if (prefersReducedMotion || count === 0) return [];
    return Array.from({ length: count }, (_, i) => {
      const size = 2 + Math.random() * 3;
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      const blur = 0.5 + Math.random() * 0.5;
      return {
        id: i,
        size,
        left: Math.random() * 100,
        delay: Math.random() * 15,
        duration: 8 + Math.random() * 10,
        color,
        blur,
      };
    });
  }, [prefersReducedMotion, count]);

  if (prefersReducedMotion || count === 0 || particles.length === 0) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 1,
        overflow: 'hidden',
      }}
      aria-hidden="true"
    >
      {particles.map((p) => (
        <div
          key={p.id}
          style={{
            position: 'absolute',
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            top: -20,
            borderRadius: '50%',
            backgroundColor: p.color,
            boxShadow: `0 0 ${p.size}px ${p.color}`,
            filter: `blur(${p.blur}px)`,
            opacity: 0,
            animation: `bk-ash-fall ${p.duration}s ${p.delay}s linear infinite`,
          }}
        />
      ))}
    </div>
  );
}
