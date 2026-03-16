import { useState } from 'react';
import { Link, useRoute } from 'wouter';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { emoji: '\u{1F4CB}', label: 'Brand', path: '/bunker-brand-book/brand' },
  { emoji: '\u{1F3A8}', label: 'Foundations', path: '/bunker-brand-book/foundations' },
  { emoji: '\u{1F9E9}', label: 'Components', path: '/bunker-brand-book/components' },
  { emoji: '\u{1F5A5}', label: 'Showcase', path: '/bunker-brand-book/showcase' },
];

function SidebarContent({ currentPath, onClose }: { currentPath: string; onClose?: () => void }) {
  return (
    <div
      className="bk-noise bk-scrollbar"
      style={{
        width: 240,
        height: '100vh',
        backgroundColor: '#0d1117',
        display: 'flex',
        flexDirection: 'column',
        padding: '24px 16px',
        overflowY: 'auto',
        position: 'relative',
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

      {/* Logo */}
      <div style={{ marginBottom: 8 }}>
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

      {/* Status */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          marginBottom: 32,
        }}
      >
        <div
          style={{
            width: 6,
            height: 6,
            borderRadius: '50%',
            backgroundColor: '#34C759',
            animation: 'bk-blink 2s step-start infinite',
          }}
        />
        <span
          style={{
            fontFamily: "'Roboto Mono', monospace",
            fontSize: 10,
            color: '#34C759',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
          }}
        >
          SYSTEM ONLINE
        </span>
      </div>

      {/* Navigation */}
      <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
        {NAV_ITEMS.map((item) => {
          const isActive = currentPath === item.path || currentPath.startsWith(item.path + '/');
          return (
            <Link key={item.path} href={item.path} onClick={onClose}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
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
                <span>{item.emoji}</span>
                <span>{item.label}</span>
              </div>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div
        style={{
          borderTop: '1px solid rgba(255,255,255,0.05)',
          paddingTop: 16,
          marginTop: 16,
        }}
      >
        <div
          style={{
            fontFamily: "'Roboto Mono', monospace",
            fontSize: 10,
            color: '#A9A9A9',
            lineHeight: 1.6,
          }}
        >
          <div>v1.0.0</div>
          <div>Marco 2026</div>
        </div>
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
        className="bk-scrollbar lg:ml-[240px]"
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
