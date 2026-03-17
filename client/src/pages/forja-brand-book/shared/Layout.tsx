import { useState } from 'react';
import { Link, useRoute } from 'wouter';
import { Menu, X } from 'lucide-react';
import ForjaAnvil from './ForjaAnvil';

const NAV_ITEMS = [
  {
    emoji: '\u{1F525}', label: 'Brand', path: '/forja-brand-book/brand',
    subLinks: [
      { label: 'Narrativa', id: 'narrativa' },
      { label: 'Identidade Visual', id: 'identidade' },
      { label: 'Primal Branding', id: 'primal-branding' },
      { label: 'Posicionamento', id: 'posicionamento' },
    ],
  },
  {
    emoji: '\u{2692}\u{FE0F}', label: 'Programa', path: '/forja-brand-book/programa',
    subLinks: [
      { label: 'Visao Geral', id: 'visao-geral' },
      { label: 'Metodologia', id: 'metodologia' },
      { label: 'Semana a Semana', id: 'semana-a-semana' },
      { label: 'Entregaveis', id: 'entregaveis' },
    ],
  },
  {
    emoji: '\u{1F3A8}', label: 'Foundations', path: '/forja-brand-book/foundations',
    subLinks: [
      { label: 'Cores', id: 'cores' },
      { label: 'Texturas', id: 'texturas' },
      { label: 'Motion', id: 'motion' },
      { label: 'Spacing & Grid', id: 'spacing-grid' },
      { label: 'Elevacao', id: 'elevacao' },
    ],
  },
  {
    emoji: '\u{1F9E9}', label: 'Components', path: '/forja-brand-book/components',
    subLinks: [
      { label: 'Botoes', id: 'botoes' },
      { label: 'Cards', id: 'cards' },
      { label: 'Formularios', id: 'formularios' },
      { label: 'Feedback', id: 'feedback' },
      { label: 'Especiais', id: 'especiais' },
    ],
  },
  {
    emoji: '\u{1F4B0}', label: 'Investimento', path: '/forja-brand-book/investimento',
    subLinks: [
      { label: 'Stack de Valor', id: 'stack-valor' },
      { label: 'Pricing', id: 'pricing' },
      { label: 'Objecoes', id: 'objecoes' },
      { label: 'Garantia', id: 'garantia' },
    ],
  },
  {
    emoji: '\u{1F5A5}\u{FE0F}', label: 'Showcase', path: '/forja-brand-book/showcase',
    subLinks: [
      { label: 'Sales Page', id: 'sales-page' },
      { label: 'Area do Mentorado', id: 'area-mentorado' },
      { label: 'Sessao Diagnostico', id: 'sessao-diagnostico' },
    ],
  },
];

function SidebarContent({ currentPath, onClose }: { currentPath: string; onClose?: () => void }) {
  const [activeAnchor, setActiveAnchor] = useState<string | null>(null);

  const handleSubLinkClick = (id: string) => {
    setActiveAnchor(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className="fj-noise fj-scrollbar fj-heat-lines"
      style={{
        width: 240, height: '100vh', backgroundColor: '#0D0604',
        display: 'flex', flexDirection: 'column', padding: '24px 16px',
        overflowY: 'auto', position: 'relative',
        borderRight: '1px solid rgba(255,107,0,0.15)',
        boxShadow: '1px 0 10px rgba(255,107,0,0.05)',
      }}
    >
      {onClose && (
        <button onClick={onClose} style={{ position: 'absolute', top: 16, right: 16, background: 'none', border: 'none', color: '#B8976A', cursor: 'pointer' }} aria-label="Fechar menu">
          <X size={20} />
        </button>
      )}

      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
        <ForjaAnvil size={28} />
        <h1 className="fj-molten-text" style={{ fontFamily: "'Cinzel', serif", fontSize: 16, fontWeight: 700, letterSpacing: '0.08em', margin: 0 }}>
          A FORJA
        </h1>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24, padding: '6px 10px', backgroundColor: 'rgba(255,168,0,0.06)', borderRadius: 4, border: '1px solid rgba(255,168,0,0.1)' }}>
        <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#FFA800', boxShadow: '0 0 6px rgba(255,168,0,0.6), 0 0 12px rgba(255,168,0,0.3)', animation: 'fj-status-pulse 2s ease-in-out infinite' }} />
        <span style={{ fontFamily: "'Roboto Mono', monospace", fontSize: 10, color: '#FFA800', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 700 }}>
          FORJA ATIVA
        </span>
      </div>

      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(255,107,0,0.15), transparent)', marginBottom: 16 }} />

      <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
        {NAV_ITEMS.map((item) => {
          const isActive = currentPath === item.path || currentPath.startsWith(item.path + '/');
          return (
            <div key={item.path}>
              <Link href={item.path} onClick={onClose}>
                <div
                  style={{
                    display: 'flex', alignItems: 'center', gap: 8, padding: '10px 12px', borderRadius: 4, cursor: 'pointer',
                    borderLeft: isActive ? '2px solid #FF6B00' : '2px solid transparent',
                    backgroundColor: isActive ? 'rgba(255,255,255,0.05)' : 'transparent',
                    transition: 'background-color 0.15s',
                    fontFamily: "'Roboto Mono', monospace", fontSize: 13,
                    color: isActive ? '#FFF8F0' : '#B8976A', textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.03)'; }}
                  onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.backgroundColor = 'transparent'; }}
                >
                  <span style={{ color: isActive ? '#FF6B00' : '#555', fontSize: 12 }}>&gt;</span>
                  <span>{item.label}</span>
                </div>
              </Link>
              {isActive && item.subLinks && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 1, marginTop: 2, marginBottom: 4 }}>
                  {item.subLinks.map((sub) => (
                    <button key={sub.id} onClick={() => handleSubLinkClick(sub.id)}
                      style={{
                        display: 'block', paddingLeft: 24, paddingRight: 12, paddingTop: 4, paddingBottom: 4,
                        background: 'none', border: 'none', cursor: 'pointer',
                        fontFamily: "'Roboto Mono', monospace", fontSize: 11,
                        color: activeAnchor === sub.id ? '#FF6B00' : 'rgba(184,151,106,0.7)', textAlign: 'left', transition: 'color 0.15s',
                      }}
                      onMouseEnter={(e) => { if (activeAnchor !== sub.id) e.currentTarget.style.color = '#B8976A'; }}
                      onMouseLeave={(e) => { if (activeAnchor !== sub.id) e.currentTarget.style.color = 'rgba(184,151,106,0.7)'; }}
                    >
                      {sub.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(255,215,0,0.2), transparent)', marginTop: 16, marginBottom: 12 }} />

      <div style={{ fontFamily: "'Roboto Mono', monospace", fontSize: 10, color: '#555', lineHeight: 1.8 }}>
        <div style={{ color: '#B8976A' }}>v1.0.0</div>
        <div>Marco 2026</div>
      </div>
    </div>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [, params] = useRoute('/forja-brand-book/:section');
  const section = params?.section || '';
  const currentPath = section ? `/forja-brand-book/${section}` : '/forja-brand-book';

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <div style={{ position: 'fixed', top: 0, left: 0, zIndex: 30, height: '100vh' }} className="hidden lg:block">
        <SidebarContent currentPath={currentPath} />
      </div>

      <button onClick={() => setMobileOpen(true)}
        style={{ position: 'fixed', top: 16, left: 16, zIndex: 40, background: 'rgba(13,6,4,0.9)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 6, padding: 8, color: '#FFF8F0', cursor: 'pointer' }}
        className="lg:hidden" aria-label="Abrir menu"
      >
        <Menu size={20} />
      </button>

      {mobileOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 50, display: 'flex' }} className="lg:hidden">
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.6)' }} onClick={() => setMobileOpen(false)} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <SidebarContent currentPath={currentPath} onClose={() => setMobileOpen(false)} />
          </div>
        </div>
      )}

      <div className="fj-noise fj-scrollbar lg:ml-[240px]" style={{ flex: 1, overflowY: 'auto', minHeight: '100vh' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 48px' }}>
          {children}
        </div>
      </div>
    </div>
  );
}
