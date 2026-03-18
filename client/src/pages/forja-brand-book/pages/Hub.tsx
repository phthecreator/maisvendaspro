import { Link } from 'wouter';
import ForjaAnvil from '../shared/ForjaAnvil';

const SECTIONS = [
  { n: '01', title: 'Brand', description: 'Narrativa, Identidade, Primal Branding, Posicionamento', path: '/forja-brand-book/brand' },
  { n: '02', title: 'Foundations', description: 'Cores, Texturas, Motion, Spacing, Elevacao', path: '/forja-brand-book/foundations' },
  { n: '03', title: 'Components', description: 'Botoes, Cards, Forms, Feedback, Especiais', path: '/forja-brand-book/components' },
  { n: '04', title: 'Programa', description: 'Metodologia DWY, Cronograma 12 Semanas, Entregaveis', path: '/forja-brand-book/programa' },
  { n: '05', title: 'Investimento', description: 'Pricing, Garantia, Perguntas Frequentes', path: '/forja-brand-book/investimento' },
  { n: '06', title: 'Showcase', description: 'Sales Page, Area do Mentorado, Diagnostico', path: '/forja-brand-book/showcase' },
];

export default function Hub() {
  return (
    <div>
      <div
        style={{ minHeight: '65vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '80px 24px', position: 'relative' }}
      >
        <div style={{ marginBottom: 40 }}>
          <ForjaAnvil size={80} />
        </div>

        <h1 className="fj-molten-text text-2xl sm:text-3xl md:text-4xl" style={{ fontFamily: "'Cinzel', serif", fontWeight: 700, letterSpacing: '0.08em', margin: 0, marginBottom: 20 }}>
          A FORJA
        </h1>

        <p style={{ fontFamily: "'Roboto Mono', monospace", fontSize: 13, color: '#B8976A', maxWidth: 400, lineHeight: 1.8, margin: 0, marginBottom: 16 }}>
          Brand Book & Design System
        </p>

        <p style={{ fontFamily: "'Averia Serif Libre', serif", fontSize: 17, color: 'rgba(255,248,240,0.6)', maxWidth: 500, lineHeight: 1.7, margin: 0 }}>
          Mentoria premium. 90 dias. Done with you.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 1, marginTop: 40 }}>
        {SECTIONS.map((section) => (
          <Link key={section.path} href={section.path}>
            <div
              style={{
                display: 'flex', alignItems: 'center', gap: 20, padding: '24px 20px',
                cursor: 'pointer', transition: 'background-color 0.2s',
                borderBottom: '1px solid rgba(255,255,255,0.03)', textDecoration: 'none',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.02)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}
            >
              <span style={{ fontFamily: "'Roboto Mono', monospace", fontSize: 11, color: '#FF6B00', fontWeight: 600, minWidth: 24 }}>
                {section.n}
              </span>
              <div>
                <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: 18, fontWeight: 600, color: '#FFF8F0', margin: 0, marginBottom: 4 }}>
                  {section.title}
                </h3>
                <p style={{ fontFamily: "'Roboto Mono', monospace", fontSize: 12, color: 'rgba(184,151,106,0.6)', margin: 0, lineHeight: 1.5 }}>
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
