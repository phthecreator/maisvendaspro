import { useState } from 'react';
import { Link, useRoute } from 'wouter';
import { Menu, X } from 'lucide-react';
import BunkerShield from './BunkerShield';

const NAV_ITEMS = [
  {
    emoji: '\u{1F4CB}', label: 'Brand', path: '/bunker-brand-book/brand',
    subLinks: [
      { label: 'Narrativa', id: 'narrativa' },
      { label: 'Persona', id: 'persona' },
      { label: 'Voz & Tom', id: 'voz-tom' },
      { label: 'Posicionamento', id: 'posicionamento' },
      { label: 'Arco do Movimento', id: 'arco-movimento' },
    ],
  },
  {
    emoji: '\u{1F3A8}', label: 'Foundations', path: '/bunker-brand-book/foundations',
    subLinks: [
      { label: 'Cores', id: 'cores' },
      { label: 'Tipografia', id: 'tipografia' },
      { label: 'Spacing & Grid', id: 'spacing-grid' },
      { label: 'Texturas', id: 'texturas' },
      { label: 'Motion', id: 'motion' },
      { label: 'Elevacao', id: 'elevacao' },
    ],
  },
  {
    emoji: '\u{1F9E9}', label: 'Components', path: '/bunker-brand-book/components',
    subLinks: [
      { label: 'Botoes', id: 'botoes' },
      { label: 'Cards', id: 'cards' },
      { label: 'Formularios', id: 'formularios' },
      { label: 'Navegacao', id: 'navegacao' },
      { label: 'Feedback', id: 'feedback' },
      { label: 'Dados', id: 'dados' },
      { label: 'Especiais', id: 'especiais' },
    ],
  },
  {
    emoji: '\u{1F5A5}', label: 'Showcase', path: '/bunker-brand-book/showcase',
    subLinks: [
      { label: 'Sales Page', id: 'sales-page' },
      { label: 'Area de Membros', id: 'area-membros' },
      { label: 'Community Feed', id: 'community-feed' },
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
      className="bk-noise bk-scrollbar bk-scan"
      style={{
        width: 240,
        height: '100vh',
        backgroundColor: '#0d1117',
        display: 'flex',
        flexDirection: 'column',
        padding: '24px 16px',
        overflowY: 'auto',
        position: 'relative',
        borderRight: '1px solid rgba(0,229,255,0.15)',
        boxShadow: '1px 0 10px rgba(0,229,255,0.05)',
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
            color: '#A9A9A9',
            cursor: 'pointer',
          }}
          aria-label="Close menu"
        >
          <X size={20} />
        </button>
      )}

      {/* Logo with shield */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
        <BunkerShield size={28} />
        <h1
          className="bk-aged-text"
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 16,
            fontWeight: 700,
            letterSpacing: '0.08em',
            margin: 0,
          }}
        >
          BUNKER DA IA
        </h1>
      </div>

      {/* Status — more prominent pulse */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          marginBottom: 24,
          padding: '6px 10px',
          backgroundColor: 'rgba(52,199,89,0.06)',
          borderRadius: 4,
          border: '1px solid rgba(52,199,89,0.1)',
        }}
      >
        <div
          style={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            backgroundColor: '#34C759',
            boxShadow: '0 0 6px rgba(52,199,89,0.6), 0 0 12px rgba(52,199,89,0.3)',
            animation: 'bk-status-pulse 2s ease-in-out infinite',
          }}
        />
        <span
          style={{
            fontFamily: "'Roboto Mono', monospace",
            fontSize: 10,
            color: '#34C759',
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            fontWeight: 700,
          }}
        >
          SYSTEM ONLINE
        </span>
      </div>

      {/* Separator */}
      <div
        style={{
          height: 1,
          background: 'linear-gradient(90deg, transparent, rgba(0,229,255,0.15), transparent)',
          marginBottom: 16,
        }}
      />

      {/* Navigation */}
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
                    borderLeft: isActive ? '2px solid #00E5FF' : '2px solid transparent',
                    backgroundColor: isActive ? 'rgba(255,255,255,0.05)' : 'transparent',
                    transition: 'background-color 0.15s',
                    fontFamily: "'Roboto Mono', monospace",
                    fontSize: 13,
                    color: isActive ? '#FDF5E6' : '#A9A9A9',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.03)';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  <span style={{ color: isActive ? '#00E5FF' : '#555', fontSize: 12 }}>&gt;</span>
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
                        fontFamily: "'Roboto Mono', monospace",
                        fontSize: 11,
                        color: activeAnchor === sub.id ? '#00E5FF' : 'rgba(169,169,169,0.7)',
                        textAlign: 'left',
                        transition: 'color 0.15s',
                      }}
                      onMouseEnter={(e) => {
                        if (activeAnchor !== sub.id) e.currentTarget.style.color = '#A9A9A9';
                      }}
                      onMouseLeave={(e) => {
                        if (activeAnchor !== sub.id) e.currentTarget.style.color = 'rgba(169,169,169,0.7)';
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

      {/* Footer separator */}
      <div
        style={{
          height: 1,
          background: 'linear-gradient(90deg, transparent, rgba(205,127,50,0.2), transparent)',
          marginTop: 16,
          marginBottom: 12,
        }}
      />

      {/* Footer */}
      <div
        style={{
          fontFamily: "'Roboto Mono', monospace",
          fontSize: 10,
          color: '#555',
          lineHeight: 1.8,
        }}
      >
        <div style={{ color: '#A9A9A9' }}>v1.0.0</div>
        <div>Marco 2026</div>
      </div>
    </div>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [, params] = useRoute('/bunker-brand-book/:section');
  const section = params?.section || '';
  const currentPath = section ? `/bunker-brand-book/${section}` : '/bunker-brand-book';

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Desktop sidebar */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 30,
          height: '100vh',
        }}
        className="hidden lg:block"
      >
        <SidebarContent currentPath={currentPath} />
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMobileOpen(true)}
        style={{
          position: 'fixed',
          top: 16,
          left: 16,
          zIndex: 40,
          background: 'rgba(13,17,23,0.9)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: 6,
          padding: 8,
          color: '#FDF5E6',
          cursor: 'pointer',
        }}
        className="lg:hidden"
        aria-label="Open menu"
      >
        <Menu size={20} />
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 50,
            display: 'flex',
          }}
          className="lg:hidden"
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(0,0,0,0.6)',
            }}
            onClick={() => setMobileOpen(false)}
          />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <SidebarContent
              currentPath={currentPath}
              onClose={() => setMobileOpen(false)}
            />
          </div>
        </div>
      )}

      {/* Content area */}
      <div
        className="bk-noise bk-scrollbar lg:ml-[240px]"
        style={{
          flex: 1,
          overflowY: 'auto',
          minHeight: '100vh',
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            padding: '64px 48px',
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
