import { useMemo } from 'react';

const COLORS = ['#FF6B00', '#FFD700', '#FF4500', '#FF8C00', '#FFA500'];

const DENSITY_MAP = {
  high: 45,
  normal: 25,
  low: 12,
  none: 0,
} as const;

export type ParticleDensity = keyof typeof DENSITY_MAP;

export default function ForgeParticles({ density = 'normal' }: { density?: ParticleDensity }) {
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const count = DENSITY_MAP[density];

  const particles = useMemo(() => {
    if (prefersReducedMotion || count === 0) return [];
    return Array.from({ length: count }, (_, i) => {
      const size = 1.5 + Math.random() * 2.5;
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      const blur = 0.3 + Math.random() * 0.6;
      return { id: i, size, left: Math.random() * 100, delay: Math.random() * 15, duration: 7 + Math.random() * 9, color, blur };
    });
  }, [prefersReducedMotion, count]);

  if (prefersReducedMotion || count === 0 || particles.length === 0) return null;

  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 1, overflow: 'hidden' }} aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.id}
          style={{
            position: 'absolute',
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            bottom: -20,
            borderRadius: '50%',
            backgroundColor: p.color,
            boxShadow: `0 0 ${p.size + 1}px ${p.color}`,
            filter: `blur(${p.blur}px)`,
            opacity: 0,
            animation: `fj-spark-rise ${p.duration}s ${p.delay}s linear infinite`,
          }}
        />
      ))}
    </div>
  );
}
