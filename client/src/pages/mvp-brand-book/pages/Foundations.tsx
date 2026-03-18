import React, { useState, useEffect } from 'react';

/* ────────────────────────────────────────────
   FOUNDATIONS PAGE — MVP Brand Book
   Design tokens, colors, typography, textures,
   motion & elevation from the official design system.
   ──────────────────────────────────────────── */

// ─── Shared helpers ──────────────────────────
const sectionTitle: React.CSSProperties = {
  fontFamily: "'Inter', system-ui, sans-serif",
  fontSize: 36,
  fontWeight: 700,
  color: '#FFFFFF',
  letterSpacing: '-0.015em',
  marginBottom: 8,
};

const sectionOverline: React.CSSProperties = {
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: 11,
  fontWeight: 700,
  letterSpacing: '0.15em',
  textTransform: 'uppercase' as const,
  color: '#00C96E',
  marginBottom: 12,
};

const sectionDesc: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontSize: 16,
  color: '#A0A0A0',
  lineHeight: 1.6,
  maxWidth: 680,
  marginBottom: 48,
};

const divider: React.CSSProperties = {
  height: 1,
  background: 'linear-gradient(90deg, transparent 0%, #00C96E 50%, transparent 100%)',
  boxShadow: '0 0 8px rgba(0,201,110,0.3), 0 0 16px rgba(0,201,110,0.15)',
  margin: '64px 0',
};

// ─── COLOR DATA ──────────────────────────────
interface ColorSwatch {
  name: string;
  hex: string;
  role: string;
}

const primaryColors: ColorSwatch[] = [
  { name: 'Emerald Matrix', hex: '#00C96E', role: 'Primary — CTAs, accents' },
  { name: 'Deep Terminal', hex: '#00A85A', role: 'Hover, active borders' },
  { name: 'Phantom Green', hex: '#008F4C', role: 'Badges, pressed states' },
  { name: 'Matrix Glow', hex: '#33D489', role: 'Glow, highlights' },
  { name: 'Code Rain', hex: '#0AE57A', role: 'Luminous effects' },
];

const bgColors: ColorSwatch[] = [
  { name: 'Void Black', hex: '#000000', role: 'Page background' },
  { name: 'Carbon', hex: '#0A0A0A', role: 'Cards, panels L1' },
  { name: 'Graphite', hex: '#111111', role: 'Cards L2, sidebar' },
  { name: 'Onyx', hex: '#1A1A1A', role: 'Hover backgrounds' },
  { name: 'Charcoal', hex: '#222222', role: 'Borders, dividers' },
];

const accentColors: ColorSwatch[] = [
  { name: 'Signal Red', hex: '#FF0066', role: 'Urgency, conversion CTAs' },
  { name: 'Flame Orange', hex: '#FF4400', role: 'Countdown, time pressure' },
  { name: 'Alchemist Gold', hex: '#FFD700', role: 'Premium, VIP badges' },
];

const neutralColors: ColorSwatch[] = [
  { name: 'Pure White', hex: '#FFFFFF', role: 'Primary text on dark' },
  { name: 'Silver Mist', hex: '#A0A0A0', role: 'Secondary text, labels' },
  { name: 'Steel Gray', hex: '#666666', role: 'Disabled, tertiary' },
  { name: 'Iron', hex: '#333333', role: 'Subtle borders' },
];

const semanticColors: ColorSwatch[] = [
  { name: 'Success', hex: '#00C96E', role: 'Success states' },
  { name: 'Error', hex: '#EF4444', role: 'Error, validation' },
  { name: 'Warning', hex: '#F59E0B', role: 'Warnings, attention' },
  { name: 'Info', hex: '#3B82F6', role: 'Informational, tips' },
];

// ─── WCAG DATA ───────────────────────────────
const wcagPairs = [
  { fg: '#FFFFFF', bg: '#000000', ratio: '21:1', level: 'AAA' },
  { fg: '#FFFFFF', bg: '#0A0A0A', ratio: '19.3:1', level: 'AAA' },
  { fg: '#00C96E', bg: '#000000', ratio: '9.8:1', level: 'AAA' },
  { fg: '#00C96E', bg: '#0A0A0A', ratio: '9.1:1', level: 'AAA' },
  { fg: '#33D489', bg: '#000000', ratio: '11.2:1', level: 'AAA' },
  { fg: '#FF0066', bg: '#000000', ratio: '5.6:1', level: 'AA' },
  { fg: '#FFD700', bg: '#000000', ratio: '13.1:1', level: 'AAA' },
];

// ─── GRADIENT DATA ───────────────────────────
const gradients = [
  {
    name: 'Depth',
    css: 'linear-gradient(180deg, #000000 0%, #0A0A0A 100%)',
    code: 'linear-gradient(180deg, #000000 0%, #0A0A0A 100%)',
    desc: 'Lab depth — page backgrounds',
  },
  {
    name: 'Energy',
    css: 'linear-gradient(90deg, transparent 0%, #00C96E 50%, transparent 100%)',
    code: 'linear-gradient(90deg, transparent 0%, #00C96E 50%, transparent 100%)',
    desc: 'Accent border lines, dividers',
  },
  {
    name: 'Alchemist',
    css: 'linear-gradient(135deg, #00C96E 0%, #FFD700 100%)',
    code: 'linear-gradient(135deg, #00C96E 0%, #FFD700 100%)',
    desc: 'Premium, transformation',
  },
  {
    name: 'Urgency',
    css: 'linear-gradient(135deg, #FF0066 0%, #FF4400 100%)',
    code: 'linear-gradient(135deg, #FF0066 0%, #FF4400 100%)',
    desc: 'High-pressure conversion CTAs',
  },
];

// ─── TYPOGRAPHY DATA ─────────────────────────
const typeScale = [
  { token: 'display-2xl', size: '80px', weight: 900, font: 'Inter', use: 'Hero numbers ("444x")' },
  { token: 'display-xl', size: '64px', weight: 800, font: 'Inter', use: 'Hero statement' },
  { token: 'display-lg', size: '48px', weight: 700, font: 'Inter', use: 'Section titles (H1)' },
  { token: 'display-md', size: '36px', weight: 700, font: 'Inter', use: 'Subtitles (H2)' },
  { token: 'heading-lg', size: '28px', weight: 600, font: 'Inter', use: 'Heading H3' },
  { token: 'heading-md', size: '22px', weight: 600, font: 'Inter', use: 'Heading H4' },
  { token: 'heading-sm', size: '18px', weight: 600, font: 'Inter', use: 'H5, large labels' },
  { token: 'body-lg', size: '18px', weight: 400, font: 'Inter', use: 'Hero body, long paragraphs' },
  { token: 'body-md', size: '16px', weight: 400, font: 'Inter', use: 'Default body, UI' },
  { token: 'body-sm', size: '14px', weight: 400, font: 'Inter', use: 'Secondary text, captions' },
  { token: 'caption', size: '12px', weight: 500, font: 'Inter', use: 'Micro-text, timestamps' },
  { token: 'overline', size: '11px', weight: 700, font: 'JetBrains Mono', use: 'Overlines (UPPERCASE)' },
  { token: 'code-lg', size: '16px', weight: 400, font: 'JetBrains Mono', use: 'Code blocks, large metrics' },
  { token: 'code-md', size: '14px', weight: 400, font: 'JetBrains Mono', use: 'Inline code, tech data' },
  { token: 'code-sm', size: '12px', weight: 400, font: 'JetBrains Mono', use: 'Terminal output, logs' },
];

const weightMap = [
  { weight: 300, name: 'Light' },
  { weight: 400, name: 'Regular' },
  { weight: 500, name: 'Medium' },
  { weight: 600, name: 'SemiBold' },
  { weight: 700, name: 'Bold' },
  { weight: 800, name: 'ExtraBold' },
  { weight: 900, name: 'Black' },
];

// ─── TEXTURE DATA ────────────────────────────
const textures = [
  {
    name: 'Grid Matrix',
    desc: 'Signature texture — thin green lines evoking the terminal',
    bgStyle: {
      backgroundImage:
        'linear-gradient(rgba(0,201,110,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,201,110,0.06) 1px, transparent 1px)',
      backgroundSize: '40px 40px',
    },
    code: `background-image:\n  linear-gradient(rgba(0,201,110,0.04) 1px, transparent 1px),\n  linear-gradient(90deg, rgba(0,201,110,0.04) 1px, transparent 1px);\nbackground-size: 50px 50px;`,
  },
  {
    name: 'Noise / Grain',
    desc: 'Subtle granularity — adds materiality to dark surfaces',
    bgStyle: {
      backgroundImage:
        `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E")`,
      backgroundRepeat: 'repeat',
      backgroundSize: '256px 256px',
    },
    code: `/* SVG noise overlay */\nbackground-image: url("data:image/svg+xml,...");\nbackground-size: 256px 256px;\nmix-blend-mode: overlay;\nopacity: 0.4;`,
  },
  {
    name: 'Scanlines',
    desc: 'Horizontal CRT scan lines — retro terminal aesthetic',
    bgStyle: {
      backgroundImage:
        'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,201,110,0.05) 2px, rgba(0,201,110,0.05) 4px)',
    },
    code: `background: repeating-linear-gradient(\n  0deg,\n  transparent,\n  transparent 2px,\n  rgba(0,0,0,0.03) 2px,\n  rgba(0,0,0,0.03) 4px\n);`,
  },
  {
    name: 'Dot Grid',
    desc: 'Blueprint-style dot pattern for featured sections',
    bgStyle: {
      backgroundImage: 'radial-gradient(circle, rgba(0,201,110,0.15) 1px, transparent 1px)',
      backgroundSize: '24px 24px',
    },
    code: `background-image: radial-gradient(\n  circle,\n  rgba(0,201,110,0.12) 1px,\n  transparent 1px\n);\nbackground-size: 24px 24px;`,
  },
  {
    name: 'Circuit Trace',
    desc: 'Energy line — premium section divider with glow',
    bgStyle: {
      background: 'linear-gradient(90deg, transparent 0%, #00C96E 50%, transparent 100%)',
      height: 2,
      borderRadius: 1,
      boxShadow: '0 0 8px rgba(0,201,110,0.3), 0 0 16px rgba(0,201,110,0.15)',
    },
    code: `background: linear-gradient(\n  90deg,\n  transparent 0%,\n  #00C96E 50%,\n  transparent 100%\n);\nbox-shadow: 0 0 8px rgba(0,201,110,0.3);`,
  },
];

// ─── MOTION DATA ─────────────────────────────
const durations = [
  { token: 'instant', ms: 75, desc: 'Micro-interactions' },
  { token: 'fast', ms: 150, desc: 'Hover, active state' },
  { token: 'normal', ms: 250, desc: 'Standard transitions' },
  { token: 'slow', ms: 400, desc: 'Content reveal' },
  { token: 'slower', ms: 600, desc: 'Complex animations' },
  { token: 'cinematic', ms: 1000, desc: 'Hero sequences' },
];

const easings = [
  { name: 'precise', value: 'cubic-bezier(0.33, 1, 0.68, 1)', use: 'Interactions, hovers' },
  { name: 'reveal', value: 'cubic-bezier(0.0, 0.0, 0.2, 1)', use: 'Fade-in, content emerge' },
  { name: 'exit', value: 'cubic-bezier(0.4, 0.0, 1, 1)', use: 'Elements exiting' },
  { name: 'snap', value: 'cubic-bezier(0.2, 0, 0, 1)', use: 'Immediate feedback' },
];

// ─── ELEVATION DATA ──────────────────────────
const elevationLevels = [
  { level: 0, name: 'Void Black', hex: '#000000', border: 'none', use: 'Page base' },
  { level: 1, name: 'Carbon', hex: '#0A0A0A', border: 'rgba(255,255,255,0.05)', use: 'Cards, panels' },
  { level: 2, name: 'Graphite', hex: '#111111', border: 'rgba(255,255,255,0.10)', use: 'Modals, dropdowns' },
  { level: 3, name: 'Onyx', hex: '#1A1A1A', border: 'rgba(255,255,255,0.15)', use: 'Tooltips, popovers' },
  { level: 4, name: 'Charcoal', hex: '#222222', border: 'rgba(255,255,255,0.20)', use: 'Floating elements' },
];

// ═══════════════════════════════════════════════
//  COLOR SWATCH COMPONENT
// ═══════════════════════════════════════════════
function SwatchCard({ swatch }: { swatch: ColorSwatch }) {
  const [hover, setHover] = useState(false);
  const isDark = ['#000000', '#0A0A0A', '#111111', '#1A1A1A', '#222222', '#333333'].includes(swatch.hex);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: '#111111',
        border: `1px solid ${hover ? 'rgba(0,201,110,0.3)' : 'rgba(255,255,255,0.08)'}`,
        borderRadius: 8,
        overflow: 'hidden',
        transition: 'border-color 300ms ease, box-shadow 300ms ease',
        boxShadow: hover ? '0 0 15px rgba(0,201,110,0.15)' : 'none',
        cursor: 'default',
      }}
    >
      <div
        style={{
          height: 64,
          background: swatch.hex,
          borderBottom: isDark ? '1px solid rgba(255,255,255,0.06)' : 'none',
        }}
      />
      <div style={{ padding: '12px 14px' }}>
        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 600, color: '#FFFFFF', marginBottom: 4 }}>
          {swatch.name}
        </div>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: '#00C96E', marginBottom: 4 }}>
          {swatch.hex}
        </div>
        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: '#666666', lineHeight: 1.4 }}>
          {swatch.role}
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════
//  ANIMATED DEMO BOX
// ═══════════════════════════════════════════════
function AnimatedBox({
  label,
  animStyle,
  triggerKey,
}: {
  label: string;
  animStyle: React.CSSProperties;
  triggerKey: number;
}) {
  return (
    <div style={{ textAlign: 'center' }}>
      <div
        key={triggerKey}
        style={{
          width: 80,
          height: 80,
          background: '#111111',
          border: '1px solid rgba(0,201,110,0.3)',
          borderRadius: 8,
          margin: '0 auto 12px',
          ...animStyle,
        }}
      />
      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#A0A0A0' }}>{label}</div>
    </div>
  );
}

// ═══════════════════════════════════════════════
//  MAIN COMPONENT
// ═══════════════════════════════════════════════
export default function Foundations() {
  const [animKey, setAnimKey] = useState(0);
  const [glowPulse, setGlowPulse] = useState(false);
  const [blinkOn, setBlinkOn] = useState(true);

  // Terminal blink cursor
  useEffect(() => {
    const interval = setInterval(() => setBlinkOn((v) => !v), 530);
    return () => clearInterval(interval);
  }, []);

  // Glow pulse loop
  useEffect(() => {
    const interval = setInterval(() => setGlowPulse((v) => !v), 1250);
    return () => clearInterval(interval);
  }, []);

  const replayAnimations = () => setAnimKey((k) => k + 1);

  // CSS keyframes injected once
  useEffect(() => {
    const id = 'mvp-foundations-keyframes';
    if (document.getElementById(id)) return;
    const style = document.createElement('style');
    style.id = id;
    style.textContent = `
      @keyframes mvpFadeIn {
        from { opacity: 0; transform: translateY(16px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      @keyframes mvpSlideUp {
        from { opacity: 0; transform: translateY(32px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      @keyframes mvpGlowPulse {
        0%,100% { box-shadow: 0 0 4px rgba(0,201,110,0.3); }
        50%     { box-shadow: 0 0 20px rgba(0,201,110,0.6); }
      }
      @keyframes mvpBlink {
        0%,100% { opacity: 1; }
        50%     { opacity: 0; }
      }
    `;
    document.head.appendChild(style);
  }, []);

  const container: React.CSSProperties = {
    fontFamily: "'Inter', system-ui, sans-serif",
    color: '#FFFFFF',
    background: '#0A0A0A',
    minHeight: '100vh',
    padding: '0 32px 80px',
  };

  const colorGrid: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr))',
    gap: 16,
    marginBottom: 40,
  };

  const subsectionLabel: React.CSSProperties = {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 12,
    fontWeight: 600,
    color: '#A0A0A0',
    letterSpacing: '0.08em',
    textTransform: 'uppercase' as const,
    marginBottom: 16,
    paddingBottom: 8,
    borderBottom: '1px solid rgba(255,255,255,0.06)',
  };

  return (
    <div style={container}>
      {/* ═══════════════════════════════════════
          SECTION: CORES
          ═══════════════════════════════════════ */}
      <section id="cores" style={{ paddingTop: 48 }}>
        <div style={sectionOverline}>SYSTEM.COLORS</div>
        <h2 style={sectionTitle}>Sistema de Cores</h2>
        <p style={sectionDesc}>
          A paleta MVP abandona o verde neon brilhante em favor de um verde escuro sofisticado
          &mdash; inspirado no terminal do Matrix, com sobriedade enterprise. O verde evoca
          código executando em produção, não letreiros de neon.
        </p>

        {/* Primary */}
        <div style={subsectionLabel}>Primárias &mdash; Verde Alquimista</div>
        <div style={colorGrid}>
          {primaryColors.map((c) => (
            <SwatchCard key={c.hex} swatch={c} />
          ))}
        </div>

        {/* Backgrounds */}
        <div style={subsectionLabel}>Backgrounds &mdash; Profundidade</div>
        <div style={colorGrid}>
          {bgColors.map((c) => (
            <SwatchCard key={c.hex} swatch={c} />
          ))}
        </div>

        {/* Accents */}
        <div style={subsectionLabel}>Acentos Secundários</div>
        <div style={colorGrid}>
          {accentColors.map((c) => (
            <SwatchCard key={c.hex} swatch={c} />
          ))}
        </div>

        {/* Neutrals */}
        <div style={subsectionLabel}>Neutras</div>
        <div style={colorGrid}>
          {neutralColors.map((c) => (
            <SwatchCard key={c.hex} swatch={c} />
          ))}
        </div>

        {/* Semantic */}
        <div style={subsectionLabel}>Funcionais (Semânticas)</div>
        <div style={colorGrid}>
          {semanticColors.map((c) => (
            <SwatchCard key={c.hex} swatch={c} />
          ))}
        </div>

        {/* ── WCAG Contrast ── */}
        <div style={{ ...subsectionLabel, marginTop: 40 }}>WCAG 2.1 Contrast Ratios</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 40 }}>
          {wcagPairs.map((p, i) => (
            <div
              key={i}
              style={{
                background: p.bg,
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 8,
                padding: '14px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                minWidth: 240,
              }}
            >
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, fontWeight: 700, color: p.fg }}>
                Aa
              </span>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#A0A0A0' }}>
                  {p.fg} on {p.bg}
                </div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: '#FFFFFF' }}>
                  {p.ratio}
                </div>
              </div>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10,
                  fontWeight: 700,
                  background: p.level === 'AAA' ? 'rgba(0,201,110,0.15)' : 'rgba(245,158,11,0.15)',
                  color: p.level === 'AAA' ? '#00C96E' : '#F59E0B',
                  padding: '3px 8px',
                  borderRadius: 4,
                  letterSpacing: '0.05em',
                }}
              >
                {p.level}
              </span>
            </div>
          ))}
        </div>

        {/* ── Gradients ── */}
        <div style={subsectionLabel}>Gradientes Permitidos</div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: 16,
          }}
        >
          {gradients.map((g) => (
            <div
              key={g.name}
              style={{
                background: '#111111',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 8,
                overflow: 'hidden',
              }}
            >
              <div style={{ height: 56, background: g.css }} />
              <div style={{ padding: '12px 14px' }}>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 600, color: '#FFFFFF', marginBottom: 4 }}>
                  {g.name}
                </div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#666666', marginBottom: 8 }}>
                  {g.desc}
                </div>
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 10,
                    color: '#33D489',
                    background: '#0A0A0A',
                    padding: '8px 10px',
                    borderRadius: 4,
                    whiteSpace: 'nowrap',
                    overflow: 'auto',
                  }}
                >
                  {g.code}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div style={divider} />

      {/* ═══════════════════════════════════════
          SECTION: TIPOGRAFIA
          ═══════════════════════════════════════ */}
      <section id="tipografia">
        <div style={sectionOverline}>SYSTEM.TYPOGRAPHY</div>
        <h2 style={sectionTitle}>Sistema Tipográfico</h2>
        <p style={sectionDesc}>
          Inter para toda interface &mdash; o workhorse da marca. JetBrains Mono para
          overlines, métricas, blocos de código e terminal aesthetic. A combinação transmite:
          &ldquo;construído por devs, para empresários.&rdquo;
        </p>

        {/* Type scale showcase */}
        <div style={subsectionLabel}>Escala Tipográfica</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0, marginBottom: 48 }}>
          {typeScale.map((t) => {
            const isMono = t.font === 'JetBrains Mono';
            const numSize = parseInt(t.size);
            // Clamp specimen display for very large sizes
            const displaySize = numSize > 48 ? 48 : numSize;
            return (
              <div
                key={t.token}
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: 24,
                  padding: '16px 0',
                  borderBottom: '1px solid rgba(255,255,255,0.04)',
                }}
              >
                <div style={{ width: 130, flexShrink: 0 }}>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#00C96E' }}>
                    {t.token}
                  </div>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#666666', marginTop: 2 }}>
                    {t.size} / {t.weight}
                  </div>
                </div>
                <div
                  style={{
                    fontFamily: isMono ? "'JetBrains Mono', monospace" : "'Inter', sans-serif",
                    fontSize: displaySize,
                    fontWeight: t.weight,
                    color: '#FFFFFF',
                    lineHeight: 1.2,
                    letterSpacing: isMono ? 0 : numSize >= 36 ? '-0.02em' : 0,
                    textTransform: t.token === 'overline' ? 'uppercase' as const : 'none' as const,
                    flex: 1,
                    minWidth: 0,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {t.token === 'overline' ? 'OVERLINE LABEL' : 'Mais Vendas Pro'}
                </div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 11,
                    color: '#666666',
                    width: 180,
                    flexShrink: 0,
                    textAlign: 'right',
                  }}
                >
                  {t.use}
                </div>
              </div>
            );
          })}
        </div>

        {/* Weight variations */}
        <div style={subsectionLabel}>Weight Variations &mdash; Inter</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, marginBottom: 48 }}>
          {weightMap.map((w) => (
            <div key={w.weight} style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 28,
                  fontWeight: w.weight,
                  color: '#FFFFFF',
                  marginBottom: 4,
                }}
              >
                Aa
              </div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#00C96E' }}>
                {w.weight}
              </div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: '#666666' }}>
                {w.name}
              </div>
            </div>
          ))}
        </div>

        {/* Usage rules table */}
        <div style={subsectionLabel}>Regras de Uso</div>
        <div
          style={{
            background: '#111111',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 8,
            overflow: 'hidden',
          }}
        >
          {[
            { rule: 'Headings', font: 'Inter', weights: '600-700', note: 'SemiBold or Bold only' },
            { rule: 'Body text', font: 'Inter', weights: '400', note: 'Regular, max 680px width' },
            { rule: 'Code / Terminal', font: 'JetBrains Mono', weights: '400-700', note: 'Never for long paragraphs' },
            { rule: 'Overlines', font: 'JetBrains Mono', weights: '700', note: 'UPPERCASE + 0.15em spacing' },
            { rule: 'Metric numbers', font: 'JetBrains Mono', weights: '700', note: 'ROI, %, R$ values' },
            { rule: 'Min font size', font: 'Any', weights: '--', note: '12px (caption). Never below.' },
          ].map((r, i) => (
            <div
              key={r.rule}
              style={{
                display: 'grid',
                gridTemplateColumns: '140px 160px 80px 1fr',
                gap: 12,
                padding: '12px 16px',
                borderBottom: i < 5 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                alignItems: 'center',
              }}
            >
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 500, color: '#FFFFFF' }}>
                {r.rule}
              </span>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: '#00C96E' }}>
                {r.font}
              </span>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: '#A0A0A0' }}>
                {r.weights}
              </span>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#666666' }}>
                {r.note}
              </span>
            </div>
          ))}
        </div>
      </section>

      <div style={divider} />

      {/* ═══════════════════════════════════════
          SECTION: TEXTURAS
          ═══════════════════════════════════════ */}
      <section id="texturas">
        <div style={sectionOverline}>SYSTEM.TEXTURES</div>
        <h2 style={sectionTitle}>Texturas e Padrões</h2>
        <p style={sectionDesc}>
          Camadas decorativas que adicionam profundidade e identidade Matrix. A soma total de
          opacidade não deve ultrapassar 15% para garantir legibilidade.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: 20,
          }}
        >
          {textures.map((tex) => {
            const isCircuitTrace = tex.name === 'Circuit Trace';
            return (
              <div
                key={tex.name}
                style={{
                  background: '#111111',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 8,
                  overflow: 'hidden',
                }}
              >
                {/* Preview */}
                <div
                  style={{
                    height: isCircuitTrace ? 64 : 120,
                    background: '#0A0A0A',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                  }}
                >
                  {isCircuitTrace ? (
                    <div
                      style={{
                        width: '80%',
                        ...tex.bgStyle,
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        ...tex.bgStyle,
                      }}
                    />
                  )}
                </div>
                {/* Info */}
                <div style={{ padding: '14px 16px' }}>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 14,
                      fontWeight: 600,
                      color: '#FFFFFF',
                      marginBottom: 4,
                    }}
                  >
                    {tex.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 12,
                      color: '#666666',
                      marginBottom: 12,
                      lineHeight: 1.4,
                    }}
                  >
                    {tex.desc}
                  </div>
                  <pre
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 10,
                      color: '#33D489',
                      background: '#0A0A0A',
                      padding: '10px 12px',
                      borderRadius: 4,
                      margin: 0,
                      whiteSpace: 'pre-wrap',
                      lineHeight: 1.5,
                      overflowX: 'auto',
                    }}
                  >
                    {tex.code}
                  </pre>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <div style={divider} />

      {/* ═══════════════════════════════════════
          SECTION: MOTION
          ═══════════════════════════════════════ */}
      <section id="motion">
        <div style={sectionOverline}>SYSTEM.MOTION</div>
        <h2 style={sectionTitle}>Motion e Animação</h2>
        <p style={sectionDesc}>
          Animações devem parecer calculadas, como código executando. Conteúdo emerge da
          escuridão &mdash; nunca aparece do nada. Max 2-3 elementos animados por viewport.
        </p>

        {/* Live animation demos */}
        <div style={subsectionLabel}>
          Animações ao Vivo{' '}
          <button
            onClick={replayAnimations}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10,
              background: 'rgba(0,201,110,0.1)',
              color: '#00C96E',
              border: '1px solid rgba(0,201,110,0.3)',
              borderRadius: 4,
              padding: '3px 10px',
              cursor: 'pointer',
              marginLeft: 12,
              letterSpacing: '0.05em',
            }}
          >
            REPLAY
          </button>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
            gap: 24,
            marginBottom: 48,
          }}
        >
          <AnimatedBox
            label="Fade In"
            triggerKey={animKey}
            animStyle={{
              animation: 'mvpFadeIn 0.4s cubic-bezier(0,0,0.2,1) forwards',
              opacity: 0,
            }}
          />
          <AnimatedBox
            label="Slide Up"
            triggerKey={animKey}
            animStyle={{
              animation: 'mvpSlideUp 0.5s cubic-bezier(0,0,0.2,1) forwards',
              opacity: 0,
            }}
          />
          <div style={{ textAlign: 'center' }}>
            <div
              style={{
                width: 80,
                height: 80,
                background: '#111111',
                border: '1px solid rgba(0,201,110,0.3)',
                borderRadius: 8,
                margin: '0 auto 12px',
                animation: 'mvpGlowPulse 2.5s ease-in-out infinite',
              }}
            />
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#A0A0A0' }}>Glow Pulse</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div
              style={{
                width: 80,
                height: 80,
                background: '#111111',
                border: '1px solid rgba(0,201,110,0.3)',
                borderRadius: 8,
                margin: '0 auto 12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 28,
                  color: '#00C96E',
                  opacity: blinkOn ? 1 : 0,
                  transition: 'opacity 0s',
                }}
              >
                _
              </span>
            </div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#A0A0A0' }}>Terminal Blink</div>
          </div>
        </div>

        {/* Duration tokens */}
        <div style={subsectionLabel}>Duration Tokens</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginBottom: 48 }}>
          {durations.map((d) => (
            <div
              key={d.token}
              style={{
                background: '#111111',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 8,
                padding: '14px 18px',
                minWidth: 140,
              }}
            >
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: '#00C96E', marginBottom: 4 }}>
                --duration-{d.token}
              </div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 20, fontWeight: 700, color: '#FFFFFF', marginBottom: 4 }}>
                {d.ms}ms
              </div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: '#666666' }}>
                {d.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Easing curves */}
        <div style={subsectionLabel}>Easing Curves</div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: 16,
          }}
        >
          {easings.map((e) => (
            <div
              key={e.name}
              style={{
                background: '#111111',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 8,
                padding: '14px 18px',
              }}
            >
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 600, color: '#FFFFFF', marginBottom: 4 }}>
                {e.name}
              </div>
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  color: '#33D489',
                  marginBottom: 6,
                }}
              >
                {e.value}
              </div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#666666' }}>
                {e.use}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div style={divider} />

      {/* ═══════════════════════════════════════
          SECTION: ELEVACAO
          ═══════════════════════════════════════ */}
      <section id="elevacao">
        <div style={sectionOverline}>SYSTEM.ELEVATION</div>
        <h2 style={sectionTitle}>Elevação e Superfícies</h2>
        <p style={sectionDesc}>
          O MVP usa a profundidade dos pretos como sistema de elevação em vez de sombras
          tradicionais. Cada nível acima recebe borda proporcional para definição sutil.
        </p>

        {/* Stacked elevation cards */}
        <div style={subsectionLabel}>Surface Levels</div>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 20,
            marginBottom: 48,
          }}
        >
          {elevationLevels.map((lv) => (
            <div
              key={lv.level}
              style={{
                flex: '1 1 180px',
                maxWidth: 240,
                background: lv.hex,
                border: lv.border !== 'none' ? `1px solid ${lv.border}` : '1px solid rgba(255,255,255,0.03)',
                borderRadius: 8,
                padding: 24,
                boxShadow:
                  lv.level === 0
                    ? 'none'
                    : lv.level === 1
                      ? '0 1px 2px rgba(0,0,0,0.5)'
                      : lv.level === 2
                        ? '0 4px 12px rgba(0,0,0,0.6)'
                        : lv.level === 3
                          ? '0 8px 24px rgba(0,0,0,0.7)'
                          : '0 16px 48px rgba(0,0,0,0.8)',
              }}
            >
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  color: '#00C96E',
                  marginBottom: 8,
                  letterSpacing: '0.05em',
                }}
              >
                LEVEL {lv.level}
              </div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, fontWeight: 600, color: '#FFFFFF', marginBottom: 4 }}>
                {lv.name}
              </div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: '#A0A0A0', marginBottom: 8 }}>
                {lv.hex}
              </div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#666666' }}>
                {lv.use}
              </div>
            </div>
          ))}
        </div>

        {/* Borders & shadows spec */}
        <div style={subsectionLabel}>Border & Shadow Specifications</div>
        <div
          style={{
            background: '#111111',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 8,
            overflow: 'hidden',
          }}
        >
          {[
            { token: '--shadow-sm', value: '0 1px 2px rgba(0,0,0,0.5)', desc: 'Subtle lift' },
            { token: '--shadow-md', value: '0 4px 12px rgba(0,0,0,0.6)', desc: 'Card elevation' },
            { token: '--shadow-lg', value: '0 8px 24px rgba(0,0,0,0.7)', desc: 'Modal, dropdown' },
            { token: '--shadow-xl', value: '0 16px 48px rgba(0,0,0,0.8)', desc: 'Floating panels' },
            { token: '--glow-green-sm', value: '0 0 8px rgba(0,201,110,0.2)', desc: 'Subtle green glow' },
            { token: '--glow-green-md', value: '0 0 15px rgba(0,201,110,0.3)', desc: 'Active glow' },
            { token: '--glow-green-lg', value: '0 0 25px rgba(0,201,110,0.4)', desc: 'Hero CTA glow' },
          ].map((s, i) => (
            <div
              key={s.token}
              style={{
                display: 'grid',
                gridTemplateColumns: '180px 1fr 140px',
                gap: 12,
                padding: '12px 16px',
                borderBottom: i < 6 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                alignItems: 'center',
              }}
            >
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: '#00C96E' }}>
                {s.token}
              </span>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#A0A0A0' }}>
                {s.value}
              </span>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#666666', textAlign: 'right' }}>
                {s.desc}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
