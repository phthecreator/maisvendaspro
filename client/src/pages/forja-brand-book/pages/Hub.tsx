import { Link } from 'wouter';
import ForjaAnvil from '../shared/ForjaAnvil';

const SECTIONS = [
  { emoji: '\u{1F525}', title: 'Brand', description: 'Narrativa, Identidade Visual, Primal Branding, Posicionamento', path: '/forja-brand-book/brand' },
  { emoji: '\u{2692}\u{FE0F}', title: 'Programa', description: 'Metodologia DWY, Cronograma 12 Semanas, Entregaveis', path: '/forja-brand-book/programa' },
  { emoji: '\u{1F4B0}', title: 'Investimento', description: 'Stack de Valor, Pricing, Objecoes, Garantia', path: '/forja-brand-book/investimento' },
  { emoji: '\u{1F5A5}\u{FE0F}', title: 'Showcase', description: 'Sales Page, Area do Mentorado, Sessao Diagnostico', path: '/forja-brand-book/showcase' },
];

export default function Hub() {
  return (
    <div>
      <div
        className="fj-vignette fj-heat-lines"
        style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '64px 24px', position: 'relative' }}
      >
        <div style={{ marginBottom: 32, animation: 'fj-glow-pulse 3s ease-in-out infinite' }}>
          <ForjaAnvil size={100} />
        </div>

        <h1 className="fj-molten-text" style={{ fontFamily: "'Cinzel', serif", fontSize: 48, fontWeight: 700, letterSpacing: '0.06em', margin: 0, marginBottom: 16 }}>
          A FORJA
        </h1>

        <p style={{ fontFamily: "'Roboto Mono', monospace", fontSize: 14, color: '#B8976A', maxWidth: 500, lineHeight: 1.7, margin: 0, marginBottom: 8 }}>
          Brand Book & Programa Premium
        </p>

        <p style={{ fontFamily: "'Averia Serif Libre', serif", fontSize: 18, color: '#FFF8F0', maxWidth: 600, lineHeight: 1.6, margin: 0, opacity: 0.8 }}>
          "Onde deployers se tornam agentes. 90 dias de transformacao."
        </p>

        <div style={{ display: 'flex', gap: 16, marginTop: 32, flexWrap: 'wrap', justifyContent: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 16px', borderRadius: 4, border: '1px solid rgba(255,107,0,0.2)', backgroundColor: 'rgba(255,107,0,0.05)' }}>
            <span style={{ color: '#FF6B00', fontSize: 12, fontWeight: 700 }}>90 DIAS</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 16px', borderRadius: 4, border: '1px solid rgba(255,215,0,0.2)', backgroundColor: 'rgba(255,215,0,0.05)' }}>
            <span style={{ color: '#FFD700', fontSize: 12, fontWeight: 700 }}>R$ 15.000</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 16px', borderRadius: 4, border: '1px solid rgba(255,69,0,0.2)', backgroundColor: 'rgba(255,69,0,0.05)' }}>
            <span style={{ color: '#FF4500', fontSize: 12, fontWeight: 700 }}>DONE WITH YOU</span>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, marginTop: 48 }}>
        {SECTIONS.map((section) => (
          <Link key={section.path} href={section.path}>
            <div
              className="fj-forged-metal"
              style={{ border: '1px solid rgba(255,255,255,0.05)', borderTop: '3px solid #FF6B00', borderRadius: 8, padding: 32, cursor: 'pointer', transition: 'transform 0.2s, box-shadow 0.2s', textDecoration: 'none' }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.02)'; e.currentTarget.style.boxShadow = '0 0 20px rgba(255,107,0,0.15)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div style={{ fontSize: 32, marginBottom: 16 }}>{section.emoji}</div>
              <h3 style={{ fontFamily: "'Averia Serif Libre', serif", fontSize: 22, fontWeight: 700, color: '#FFF8F0', margin: 0, marginBottom: 8 }}>
                {section.title}
              </h3>
              <p style={{ fontFamily: "'Roboto Mono', monospace", fontSize: 13, color: '#B8976A', margin: 0, lineHeight: 1.6 }}>
                {section.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
