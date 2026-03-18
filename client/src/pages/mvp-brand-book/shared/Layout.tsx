import { useState } from 'react';
import { Link, useRoute } from 'wouter';
import { Menu, X } from 'lucide-react';
import AlchemistTriangle from './AlchemistTriangle';

const NAV_ITEMS = [
  {
    label: 'Brand',
    path: '/mvp-brand-book/brand',
    subLinks: [
      { label: 'Narrativa', id: 'narrativa' },
      { label: 'Arquetipos', id: 'arquetipos' },
      { label: '7 Pilares', id: 'primal-branding' },
      { label: 'Posicionamento', id: 'posicionamento' },
    ],
  },
  {
    label: 'Foundations',
    path: '/mvp-brand-book/foundations',
    subLinks: [
      { label: 'Cores', id: 'cores' },
      { label: 'Tipografia', id: 'tipografia' },
      { label: 'Texturas', id: 'texturas' },
      { label: 'Motion', id: 'motion' },
      { label: 'Elevacao', id: 'elevacao' },
    ],
  },
  {
    label: 'Components',
    path: '/mvp-brand-book/components',
    subLinks: [
      { label: 'Botoes', id: 'botoes' },
      { label: 'Cards', id: 'cards' },
      { label: 'Formularios', id: 'formularios' },
      { label: 'Feedback', id: 'feedback' },
      { label: 'Especiais', id: 'especiais' },
    ],
  },
  {
    label: 'Produtos',
    path: '/mvp-brand-book/produtos',
    subLinks: [
      { label: 'Escada de Valor', id: 'escada-valor' },
      { label: 'Bunker', id: 'bunker' },
      { label: 'Primeira Missao', id: 'primeira-missao' },
      { label: 'Forja', id: 'forja' },
      { label: 'Arsenal', id: 'arsenal' },
    ],
  },
  {
    label: 'Showcase',
    path: '/mvp-brand-book/showcase',
    subLinks: [
      { label: 'Copy', id: 'copy' },
      { label: 'Voice & Tone', id: 'voice-tone' },
      { label: 'Bios', id: 'bios' },
      { label: 'Objecoes', id: 'objecoes' },
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
      className="mvp-scrollbar"
      style={{
        width: 240,
        height: '100vh',
        backgroundColor: '#0A0A0A',
        display: 'flex',
        flexDirection: 'column',
        padding: '24px 16px',
        overflowY: 'auto',
        position: 'relative',
        borderRight: '1px solid rgba(0, 201, 110, 0.08)',
      }}
    >
      {onClose && (
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: 16,
            right: 16,
            background: 'none',
            border: 'none',
            color: '#00C96E',
            cursor: 'pointer',
          }}
          aria-label="Fechar menu"
        >
          <X size={20} />
        </button>
      )}

      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
        <AlchemistTriangle size={28} />
        <h1
          className="mvp-matrix-text"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: '0.1em',
            margin: 0,
          }}
        >
          MAIS VENDAS PRO
        </h1>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24, padding: '6px 10px' }}>
        <div style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#00C96E' }} />
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 10,
            color: '#8B9A8B',
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
          }}
        >
          v1.0
        </span>
      </div>

      <div style={{ height: 1, background: 'rgba(255,255,255,0.04)', marginBottom: 16 }} />

      <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
        {NAV_ITEMS.map((item) => {
          const isActive = currentPath === item.path || currentPath.startsWith(item.path + '/');
          return (
            <div key={item.path}>
              <Link href={item.path} onClick={onClose}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '10px 12px',
                    borderRadius: 4,
                    cursor: 'pointer',
                    borderLeft: isActive ? '2px solid #00C96E' : '2px solid transparent',
                    backgroundColor: isActive ? 'rgba(0, 201, 110, 0.06)' : 'transparent',
                    transition: 'background-color 0.15s',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 13,
                    color: isActive ? '#FFFFFF' : '#8B9A8B',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.03)';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  <span style={{ color: isActive ? '#00C96E' : '#555', fontSize: 12 }}>&gt;</span>
                  <span>{item.label}</span>
                </div>
              </Link>
              {isActive && item.subLinks && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 1, marginTop: 2, marginBottom: 4 }}>
                  {item.subLinks.map((sub) => (
                    <button
                      key={sub.id}
                      onClick={() => handleSubLinkClick(sub.id)}
                      style={{
                        display: 'block',
                        paddingLeft: 24,
                        paddingRight: 12,
                        paddingTop: 4,
                        paddingBottom: 4,
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 11,
                        color: activeAnchor === sub.id ? '#00C96E' : 'rgba(139, 154, 139, 0.7)',
                        textAlign: 'left',
                        transition: 'color 0.15s',
                      }}
                      onMouseEnter={(e) => {
                        if (activeAnchor !== sub.id) e.currentTarget.style.color = '#8B9A8B';
                      }}
                      onMouseLeave={(e) => {
                        if (activeAnchor !== sub.id) e.currentTarget.style.color = 'rgba(139, 154, 139, 0.7)';
                      }}
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

      <div style={{ height: 1, background: 'rgba(255,255,255,0.04)', marginTop: 16, marginBottom: 12 }} />

      <div
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 10,
          color: 'rgba(139, 154, 139, 0.4)',
          lineHeight: 1.8,
        }}
      >
        <div>Marco 2026</div>
      </div>
    </div>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [, params] = useRoute('/mvp-brand-book/:section');
  const section = params?.section || '';
  const currentPath = section ? `/mvp-brand-book/${section}` : '/mvp-brand-book';

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <div style={{ position: 'fixed', top: 0, left: 0, zIndex: 30, height: '100vh' }} className="hidden lg:block">
        <SidebarContent currentPath={currentPath} />
      </div>

      <button
        onClick={() => setMobileOpen(true)}
        style={{
          position: 'fixed',
          top: 16,
          left: 16,
          zIndex: 40,
          background: 'rgba(10, 10, 10, 0.9)',
          border: '1px solid rgba(0, 201, 110, 0.15)',
          borderRadius: 6,
          padding: 8,
          color: '#FFFFFF',
          cursor: 'pointer',
        }}
        className="lg:hidden"
        aria-label="Abrir menu"
      >
        <Menu size={20} />
      </button>

      {mobileOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 50, display: 'flex' }} className="lg:hidden">
          <div
            style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.6)' }}
            onClick={() => setMobileOpen(false)}
          />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <SidebarContent currentPath={currentPath} onClose={() => setMobileOpen(false)} />
          </div>
        </div>
      )}

      <div className="mvp-scrollbar lg:ml-[240px]" style={{ flex: 1, overflowY: 'auto', minHeight: '100vh' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '80px 48px' }}>
          {children}
        </div>
      </div>
    </div>
  );
}
