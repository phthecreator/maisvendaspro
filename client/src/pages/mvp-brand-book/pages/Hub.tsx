import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import AlchemistTriangle from '../shared/AlchemistTriangle';

const SECTIONS = [
  { n: '01', title: 'Brand', description: 'Narrativa, Arquétipos, 7 Pilares, Posicionamento', path: '/mvp-brand-book/brand' },
  { n: '02', title: 'Foundations', description: 'Cores, Tipografia, Texturas, Motion, Elevação', path: '/mvp-brand-book/foundations' },
  { n: '03', title: 'Components', description: 'Botões, Cards, Formulários, Feedback, Especiais', path: '/mvp-brand-book/components' },
  { n: '04', title: 'Produtos', description: 'Escada de Valor, Bunker, Primeira Missão, Forja, Arsenal', path: '/mvp-brand-book/produtos' },
  { n: '05', title: 'Showcase', description: 'Copy, Voice & Tone, Bios, Objeções', path: '/mvp-brand-book/showcase' },
];

const FULL_TITLE = 'MAIS VENDAS PRO';

export default function Hub() {
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [doneTyping, setDoneTyping] = useState(false);

  useEffect(() => {
    if (typedText.length < FULL_TITLE.length) {
      const timeout = setTimeout(() => {
        setTypedText(FULL_TITLE.slice(0, typedText.length + 1));
      }, 80);
      return () => clearTimeout(timeout);
    } else {
      setDoneTyping(true);
    }
  }, [typedText]);

  useEffect(() => {
    if (!doneTyping) return;
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, [doneTyping]);

  return (
    <div className="mvp-fade-in">
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
        <div className="mvp-logo-pulse" style={{ marginBottom: 40 }}>
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
            minHeight: '1.2em',
          }}
        >
          {typedText}
          <span
            style={{
              opacity: showCursor ? 1 : 0,
              color: '#00C96E',
              fontWeight: 400,
              marginLeft: 2,
              WebkitTextFillColor: '#00C96E',
            }}
          >
            |
          </span>
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
          Transformamos inteligência em máquinas que trabalham 24/7
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 12,
          marginTop: 40,
        }}
      >
        {SECTIONS.map((section) => (
          <Link key={section.path} href={section.path}>
            <div
              className="mvp-glass mvp-card-hover"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 20,
                padding: '24px 20px',
                cursor: 'pointer',
                borderRadius: 8,
                textDecoration: 'none',
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
