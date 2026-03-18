import { useMemo } from 'react';

const COLOR = '#FF6B00';

const DENSITY_MAP = {
  high: 8,
  normal: 5,
  low: 3,
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
      const size = 1.5 + Math.random() * 2;
      return { id: i, size, left: Math.random() * 100, delay: Math.random() * 20, duration: 10 + Math.random() * 12 };
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
            backgroundColor: COLOR,
            opacity: 0,
            animation: `fj-spark-rise ${p.duration}s ${p.delay}s linear infinite`,
          }}
        />
      ))}
    </div>
  );
}
