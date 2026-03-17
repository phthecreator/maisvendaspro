import { Link } from 'wouter';
import BunkerShield from '../shared/BunkerShield';

const SECTIONS = [
  {
    emoji: '\u{1F4CB}',
    title: 'Brand',
    description: 'Narrativa, Persona, Voz & Posicionamento',
    path: '/bunker-brand-book/brand',
  },
  {
    emoji: '\u{1F3A8}',
    title: 'Foundations',
    description: 'Cores, Tipografia, Spacing, Texturas, Motion',
    path: '/bunker-brand-book/foundations',
  },
  {
    emoji: '\u{1F9E9}',
    title: 'Components',
    description: 'Botoes, Cards, Forms, Navigation, Feedback',
    path: '/bunker-brand-book/components',
  },
  {
    emoji: '\u{1F5A5}',
    title: 'Showcase',
    description: 'Sales Page, Member Area, Community Feed',
    path: '/bunker-brand-book/showcase',
  },
];

export default function Hub() {
  return (
    <div>
      {/* Hero */}
      <div
        className="bk-vignette bk-scan"
        style={{
          minHeight: '60vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '64px 24px',
          position: 'relative',
        }}
      >
        <div
          style={{
            marginBottom: 32,
            animation: 'bk-glow-pulse 3s ease-in-out infinite',
          }}
        >
          <BunkerShield size={100} />
        </div>

        <h1
          className="bk-aged-text"
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 48,
            fontWeight: 700,
            letterSpacing: '0.06em',
            margin: 0,
            marginBottom: 16,
          }}
        >
          BUNKER DA IA
        </h1>

        <p
          style={{
            fontFamily: "'Roboto Mono', monospace",
            fontSize: 14,
            color: '#A9A9A9',
            maxWidth: 500,
            lineHeight: 1.7,
            margin: 0,
            marginBottom: 8,
          }}
        >
          Design System & Brand Book
        </p>

        <p
          style={{
            fontFamily: "'Averia Serif Libre', serif",
            fontSize: 18,
            color: '#FDF5E6',
            maxWidth: 600,
            lineHeight: 1.6,
            margin: 0,
            opacity: 0.8,
          }}
        >
          "Nos somos o bunker. Somos a inteligencia que resiste. Contra o algoritmo do caos."
        </p>
      </div>

      {/* Section Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 24,
          marginTop: 48,
        }}
      >
        {SECTIONS.map((section) => (
          <Link key={section.path} href={section.path}>
            <div
              className="bk-metal"
              style={{
                border: '1px solid rgba(255,255,255,0.05)',
                borderTop: '3px solid #00E5FF',
                borderRadius: 8,
                padding: 32,
                cursor: 'pointer',
                transition: 'transform 0.2s, box-shadow 0.2s',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.02)';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(0,229,255,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ fontSize: 32, marginBottom: 16 }}>{section.emoji}</div>
              <h3
                style={{
                  fontFamily: "'Averia Serif Libre', serif",
                  fontSize: 22,
                  fontWeight: 700,
                  color: '#FDF5E6',
                  margin: 0,
                  marginBottom: 8,
                }}
              >
                {section.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontSize: 13,
                  color: '#A9A9A9',
                  margin: 0,
                  lineHeight: 1.6,
                }}
              >
                {section.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
