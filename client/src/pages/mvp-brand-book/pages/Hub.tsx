import { Link } from 'wouter';
import AlchemistTriangle from '../shared/AlchemistTriangle';

const SECTIONS = [
  { n: '01', title: 'Brand', description: 'Narrativa, Arquetipos, 7 Pilares, Posicionamento', path: '/mvp-brand-book/brand' },
  { n: '02', title: 'Foundations', description: 'Cores, Tipografia, Texturas, Motion, Elevacao', path: '/mvp-brand-book/foundations' },
  { n: '03', title: 'Components', description: 'Botoes, Cards, Formularios, Feedback, Especiais', path: '/mvp-brand-book/components' },
  { n: '04', title: 'Produtos', description: 'Escada de Valor, Bunker, Primeira Missao, Forja, Arsenal', path: '/mvp-brand-book/produtos' },
  { n: '05', title: 'Showcase', description: 'Copy, Voice & Tone, Bios, Objecoes', path: '/mvp-brand-book/showcase' },
];

export default function Hub() {
  return (
    <div>
      <div
        style={{
          minHeight: '65vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '80px 24px',
          position: 'relative',
        }}
      >
        <div style={{ marginBottom: 40 }}>
          <AlchemistTriangle size={80} />
        </div>

        <h1
          className="mvp-matrix-text"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 44,
            fontWeight: 700,
            letterSpacing: '0.06em',
            margin: 0,
            marginBottom: 20,
          }}
        >
          MAIS VENDAS PRO
        </h1>

        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 14,
            color: '#8B9A8B',
            maxWidth: 400,
            lineHeight: 1.8,
            margin: 0,
            marginBottom: 16,
            letterSpacing: '0.04em',
          }}
        >
          Brand Book & Design System
        </p>

        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 17,
            color: 'rgba(255, 255, 255, 0.6)',
            maxWidth: 540,
            lineHeight: 1.7,
            margin: 0,
          }}
        >
          Transformamos inteligencia em maquinas que trabalham 24/7
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 1, marginTop: 40 }}>
        {SECTIONS.map((section) => (
          <Link key={section.path} href={section.path}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 20,
                padding: '24px 20px',
                cursor: 'pointer',
                transition: 'background-color 0.2s',
                borderBottom: '1px solid rgba(255,255,255,0.03)',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(0, 201, 110, 0.04)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 11,
                  color: '#00C96E',
                  fontWeight: 600,
                  minWidth: 24,
                }}
              >
                {section.n}
              </span>
              <div>
                <h3
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 18,
                    fontWeight: 600,
                    color: '#FFFFFF',
                    margin: 0,
                    marginBottom: 4,
                  }}
                >
                  {section.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 12,
                    color: 'rgba(139, 154, 139, 0.6)',
                    margin: 0,
                    lineHeight: 1.5,
                  }}
                >
                  {section.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
