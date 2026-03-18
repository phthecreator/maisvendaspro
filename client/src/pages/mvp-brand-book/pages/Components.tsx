import React, { useState, useEffect } from 'react';

/* ────────────────────────────────────────────
   COMPONENTS PAGE — MVP Brand Book
   Showcase of UI components: buttons, cards,
   forms, feedback, and special components.
   ──────────────────────────────────────────── */

// ─── Shared styles ───────────────────────────
const sectionOverline: React.CSSProperties = {
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: 11,
  fontWeight: 700,
  letterSpacing: '0.15em',
  textTransform: 'uppercase',
  color: '#00C96E',
  marginBottom: 12,
};

const sectionTitle: React.CSSProperties = {
  fontFamily: "'Inter', system-ui, sans-serif",
  fontSize: 36,
  fontWeight: 700,
  color: '#FFFFFF',
  letterSpacing: '-0.015em',
  marginBottom: 8,
};

const sectionDesc: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontSize: 16,
  color: '#A0A0A0',
  lineHeight: 1.6,
  maxWidth: 680,
  marginBottom: 48,
};

const subsectionLabel: React.CSSProperties = {
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: 12,
  fontWeight: 600,
  color: '#A0A0A0',
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  marginBottom: 16,
  paddingBottom: 8,
  borderBottom: '1px solid rgba(255,255,255,0.06)',
};

const divider: React.CSSProperties = {
  height: 1,
  background: 'linear-gradient(90deg, transparent 0%, #00C96E 50%, transparent 100%)',
  boxShadow: '0 0 8px rgba(0,201,110,0.3), 0 0 16px rgba(0,201,110,0.15)',
  margin: '64px 0',
};

const componentRow: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: 16,
  alignItems: 'center',
  marginBottom: 32,
};

// ═══════════════════════════════════════════════
//  BUTTON SHOWCASE
// ═══════════════════════════════════════════════
function DemoButton({
  label,
  variant,
  size = 'md',
  disabled = false,
}: {
  label: string;
  variant: 'primary' | 'secondary' | 'ghost' | 'danger' | 'matrix';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}) {
  const [hover, setHover] = useState(false);

  const sizeMap = {
    sm: { fontSize: 13, padding: '6px 14px' },
    md: { fontSize: 15, padding: '10px 22px' },
    lg: { fontSize: 17, padding: '14px 32px' },
  };

  const base: React.CSSProperties = {
    fontFamily: "'Inter', sans-serif",
    fontWeight: 600,
    borderRadius: 6,
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 200ms ease',
    border: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    letterSpacing: '0.01em',
    opacity: disabled ? 0.5 : 1,
    ...sizeMap[size],
  };

  const variants: Record<string, { normal: React.CSSProperties; hovered: React.CSSProperties }> = {
    primary: {
      normal: {
        background: '#00C96E',
        color: '#000000',
      },
      hovered: {
        background: '#00A85A',
        color: '#000000',
        boxShadow: '0 0 15px rgba(0,201,110,0.3)',
        transform: 'translateY(-1px)',
      },
    },
    secondary: {
      normal: {
        background: 'transparent',
        color: '#FFFFFF',
        border: '1px solid rgba(255,255,255,0.20)',
      },
      hovered: {
        background: 'rgba(255,255,255,0.05)',
        color: '#00C96E',
        border: '1px solid #00C96E',
      },
    },
    ghost: {
      normal: {
        background: 'transparent',
        color: '#A0A0A0',
      },
      hovered: {
        background: 'transparent',
        color: '#FFFFFF',
      },
    },
    danger: {
      normal: {
        background: '#EF4444',
        color: '#FFFFFF',
      },
      hovered: {
        background: '#DC2626',
        color: '#FFFFFF',
        boxShadow: '0 0 15px rgba(239,68,68,0.3)',
        transform: 'translateY(-1px)',
      },
    },
    matrix: {
      normal: {
        background: '#00C96E',
        color: '#000000',
        fontWeight: 900,
        textTransform: 'uppercase' as const,
        letterSpacing: '0.15em',
        boxShadow: '0 5px 0 #008F4C, 0 0 15px rgba(0,201,110,0.3)',
      },
      hovered: {
        background: '#33D489',
        color: '#000000',
        fontWeight: 900,
        textTransform: 'uppercase' as const,
        letterSpacing: '0.15em',
        boxShadow: '0 5px 0 #008F4C, 0 0 25px rgba(0,201,110,0.4)',
        transform: 'translateY(-1px)',
      },
    },
  };

  const v = variants[variant];
  const style = {
    ...base,
    ...v.normal,
    ...(hover && !disabled ? v.hovered : {}),
  };

  return (
    <button
      style={style}
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {label}
    </button>
  );
}

// ═══════════════════════════════════════════════
//  CARD SHOWCASE
// ═══════════════════════════════════════════════
function DemoCard({
  variant,
  children,
}: {
  variant: 'default' | 'premium' | 'product' | 'feature';
  children: React.ReactNode;
}) {
  const [hover, setHover] = useState(false);

  const base: React.CSSProperties = {
    background: '#0A0A0A',
    border: '1px solid rgba(255,255,255,0.10)',
    borderRadius: 8,
    padding: 24,
    transition: 'all 300ms ease',
    position: 'relative',
    overflow: 'hidden',
  };

  const variantStyles: Record<string, { normal: React.CSSProperties; hovered: React.CSSProperties }> = {
    default: {
      normal: {},
      hovered: {
        borderColor: 'rgba(0,201,110,0.2)',
        boxShadow: '0 4px 12px rgba(0,0,0,0.6), 0 0 1px rgba(0,201,110,0.15)',
      },
    },
    premium: {
      normal: {
        borderColor: 'rgba(0,201,110,0.3)',
        boxShadow: '0 0 8px rgba(0,201,110,0.2)',
        background: 'linear-gradient(180deg, #111111 0%, #0A0A0A 100%)',
      },
      hovered: {
        borderColor: 'rgba(0,201,110,0.5)',
        boxShadow: '0 0 20px rgba(0,201,110,0.3)',
      },
    },
    product: {
      normal: {},
      hovered: {
        borderColor: 'rgba(0,201,110,0.25)',
        boxShadow: '0 8px 24px rgba(0,0,0,0.7)',
        transform: 'translateY(-2px)',
      },
    },
    feature: {
      normal: {
        background: '#111111',
      },
      hovered: {
        borderColor: 'rgba(0,201,110,0.2)',
        boxShadow: '0 4px 12px rgba(0,0,0,0.6)',
      },
    },
  };

  const v = variantStyles[variant];
  const style = { ...base, ...v.normal, ...(hover ? v.hovered : {}) };

  return (
    <div style={style} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      {/* top circuit line for premium */}
      {variant === 'premium' && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 24,
            right: 24,
            height: 1,
            background: 'linear-gradient(90deg, transparent, #00C96E, transparent)',
          }}
        />
      )}
      {children}
    </div>
  );
}

// ═══════════════════════════════════════════════
//  ALERT COMPONENT
// ═══════════════════════════════════════════════
function DemoAlert({
  variant,
  message,
}: {
  variant: 'success' | 'warning' | 'error' | 'info';
  message: string;
}) {
  const colorMap = {
    success: { accent: '#00C96E', bg: 'rgba(0,201,110,0.08)', icon: '\u2713' },
    warning: { accent: '#F59E0B', bg: 'rgba(245,158,11,0.08)', icon: '\u26A0' },
    error: { accent: '#EF4444', bg: 'rgba(239,68,68,0.08)', icon: '\u2717' },
    info: { accent: '#3B82F6', bg: 'rgba(59,130,246,0.08)', icon: '\u2139' },
  };

  const c = colorMap[variant];

  return (
    <div
      style={{
        background: c.bg,
        border: `1px solid ${c.accent}33`,
        borderLeft: `3px solid ${c.accent}`,
        borderRadius: 6,
        padding: '12px 16px',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
      }}
    >
      <span style={{ fontSize: 16, color: c.accent }}>{c.icon}</span>
      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#FFFFFF' }}>
        {message}
      </span>
    </div>
  );
}

// ═══════════════════════════════════════════════
//  MAIN COMPONENT
// ═══════════════════════════════════════════════
export default function Components() {
  const [toggleOn, setToggleOn] = useState(false);
  const [checkboxOn, setCheckboxOn] = useState(true);
  const [blinkOn, setBlinkOn] = useState(true);
  const [progressVal] = useState(72);
  const [skeletonPulse, setSkeletonPulse] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setBlinkOn((v) => !v), 530);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setSkeletonPulse((v) => !v), 800);
    return () => clearInterval(interval);
  }, []);

  // Inject keyframes once
  useEffect(() => {
    const id = 'mvp-components-keyframes';
    if (document.getElementById(id)) return;
    const style = document.createElement('style');
    style.id = id;
    style.textContent = `
      @keyframes mvpSkeletonPulse {
        0%,100% { opacity: 0.3; }
        50%     { opacity: 0.6; }
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

  return (
    <div style={container}>
      {/* ═══════════════════════════════════════
          SECTION: BOTOES
          ═══════════════════════════════════════ */}
      <section id="botoes" style={{ paddingTop: 48 }}>
        <div style={sectionOverline}>UI.BUTTONS</div>
        <h2 style={sectionTitle}>Botoes</h2>
        <p style={sectionDesc}>
          Sistema de botoes do MVP. Primary para CTAs, Secondary para acoes alternativas,
          Ghost para acoes minimas, Danger para acoes destrutivas, e o Matrix Button com
          efeito 3D tatico para conversao.
        </p>

        {/* Variants */}
        <div style={subsectionLabel}>Variants</div>
        <div style={componentRow}>
          <DemoButton label="Primary" variant="primary" />
          <DemoButton label="Secondary" variant="secondary" />
          <DemoButton label="Ghost" variant="ghost" />
          <DemoButton label="Danger" variant="danger" />
          <DemoButton label="Enter the Matrix" variant="matrix" />
        </div>

        {/* Sizes */}
        <div style={subsectionLabel}>Sizes</div>
        <div style={componentRow}>
          <DemoButton label="Small" variant="primary" size="sm" />
          <DemoButton label="Medium" variant="primary" size="md" />
          <DemoButton label="Large" variant="primary" size="lg" />
        </div>

        {/* States */}
        <div style={subsectionLabel}>States</div>
        <div style={componentRow}>
          <DemoButton label="Default" variant="primary" />
          <DemoButton label="Hover Me" variant="primary" />
          <DemoButton label="Disabled" variant="primary" disabled />
          <DemoButton label="Disabled" variant="secondary" disabled />
        </div>

        {/* All button variants in secondary */}
        <div style={subsectionLabel}>Secondary Sizes</div>
        <div style={componentRow}>
          <DemoButton label="Small" variant="secondary" size="sm" />
          <DemoButton label="Medium" variant="secondary" size="md" />
          <DemoButton label="Large" variant="secondary" size="lg" />
        </div>
      </section>

      <div style={divider} />

      {/* ═══════════════════════════════════════
          SECTION: CARDS
          ═══════════════════════════════════════ */}
      <section id="cards">
        <div style={sectionOverline}>UI.CARDS</div>
        <h2 style={sectionTitle}>Cards</h2>
        <p style={sectionDesc}>
          Cards com hierarquia visual por profundidade dos pretos. Hover revela bordas
          verdes e circuit lines. Cards premium recebem glow permanente.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 20,
          }}
        >
          {/* Default card */}
          <DemoCard variant="default">
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#00C96E', letterSpacing: '0.1em', marginBottom: 12 }}>
              DEFAULT
            </div>
            <div style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>Card Padrao</div>
            <div style={{ fontSize: 14, color: '#A0A0A0', lineHeight: 1.6 }}>
              Surface background com borda sutil. Hover revela destaque verde e elevacao.
            </div>
          </DemoCard>

          {/* Premium card */}
          <DemoCard variant="premium">
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#FFD700', letterSpacing: '0.1em', marginBottom: 12 }}>
              PREMIUM
            </div>
            <div style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>Card Premium</div>
            <div style={{ fontSize: 14, color: '#A0A0A0', lineHeight: 1.6 }}>
              Borda verde luminosa com circuit line no topo. Gradiente de fundo elevado.
            </div>
          </DemoCard>

          {/* Product card */}
          <DemoCard variant="product">
            <div
              style={{
                width: 48,
                height: 48,
                background: 'rgba(0,201,110,0.1)',
                borderRadius: 8,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 16,
                fontSize: 24,
              }}
            >
              <span role="img" aria-label="squad">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00C96E" strokeWidth="1.5">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </span>
            </div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#00C96E', letterSpacing: '0.1em', marginBottom: 8 }}>
              SQUAD AS A SERVICE
            </div>
            <div style={{ fontSize: 18, fontWeight: 600, marginBottom: 4 }}>Squad Comercial IA</div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 24, fontWeight: 700, color: '#00C96E', marginBottom: 8 }}>
              R$ 4.997<span style={{ fontSize: 14, color: '#666666' }}>/mes</span>
            </div>
            <div style={{ fontSize: 13, color: '#A0A0A0', lineHeight: 1.5 }}>
              Clone cognitivo do seu melhor vendedor. Fidelidade 91%.
              Atendimento 24/7 com IA treinada no seu processo.
            </div>
          </DemoCard>

          {/* Feature card */}
          <DemoCard variant="feature">
            <div
              style={{
                width: 40,
                height: 40,
                background: 'rgba(0,201,110,0.1)',
                borderRadius: 8,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 16,
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00C96E" strokeWidth="1.5">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 8 }}>ROI Comprovado</div>
            <div style={{ fontSize: 13, color: '#A0A0A0', lineHeight: 1.5 }}>
              Retorno medio de 444x sobre investimento em tokens de IA.
              Metricas transparentes e documentadas.
            </div>
          </DemoCard>
        </div>
      </section>

      <div style={divider} />

      {/* ═══════════════════════════════════════
          SECTION: FORMULARIOS
          ═══════════════════════════════════════ */}
      <section id="formularios">
        <div style={sectionOverline}>UI.FORMS</div>
        <h2 style={sectionTitle}>Formularios</h2>
        <p style={sectionDesc}>
          Inputs dark-first com focus ring verde. Todos os campos seguem o mesmo padrao
          de profundidade e borda do design system.
        </p>

        <div style={{ maxWidth: 480, display: 'flex', flexDirection: 'column', gap: 24 }}>
          {/* Text input */}
          <div>
            <label
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 14,
                fontWeight: 500,
                color: '#A0A0A0',
                display: 'block',
                marginBottom: 6,
              }}
            >
              Nome da Empresa
            </label>
            <input
              type="text"
              placeholder="Digite o nome da empresa..."
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 16,
                color: '#FFFFFF',
                background: '#000000',
                border: '1px solid rgba(255,255,255,0.20)',
                borderRadius: 6,
                padding: '12px 16px',
                width: '100%',
                outline: 'none',
                boxSizing: 'border-box',
                transition: 'border-color 200ms ease, box-shadow 200ms ease',
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = '#00C96E';
                e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0,201,110,0.12)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.20)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            />
          </div>

          {/* Select */}
          <div>
            <label
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 14,
                fontWeight: 500,
                color: '#A0A0A0',
                display: 'block',
                marginBottom: 6,
              }}
            >
              Segmento
            </label>
            <select
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 16,
                color: '#FFFFFF',
                background: '#000000',
                border: '1px solid rgba(255,255,255,0.20)',
                borderRadius: 6,
                padding: '12px 16px',
                width: '100%',
                outline: 'none',
                boxSizing: 'border-box',
                appearance: 'none',
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23A0A0A0' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 12px center',
                paddingRight: 40,
                cursor: 'pointer',
                transition: 'border-color 200ms ease, box-shadow 200ms ease',
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = '#00C96E';
                e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0,201,110,0.12)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.20)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <option value="">Selecione o segmento...</option>
              <option value="saas">SaaS / Tecnologia</option>
              <option value="ecommerce">E-commerce</option>
              <option value="services">Servicos Profissionais</option>
              <option value="health">Saude</option>
            </select>
          </div>

          {/* Checkbox */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div
              onClick={() => setCheckboxOn(!checkboxOn)}
              style={{
                width: 22,
                height: 22,
                borderRadius: 4,
                border: checkboxOn ? '1px solid #00C96E' : '1px solid rgba(255,255,255,0.20)',
                background: checkboxOn ? '#00C96E' : 'transparent',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 200ms ease',
                flexShrink: 0,
              }}
            >
              {checkboxOn && (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="3">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              )}
            </div>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#FFFFFF' }}>
              Aceito os termos de servico
            </span>
          </div>

          {/* Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div
              onClick={() => setToggleOn(!toggleOn)}
              style={{
                width: 48,
                height: 26,
                borderRadius: 13,
                background: toggleOn ? '#00C96E' : '#333333',
                cursor: 'pointer',
                position: 'relative',
                transition: 'background 200ms ease',
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: '50%',
                  background: '#FFFFFF',
                  position: 'absolute',
                  top: 3,
                  left: toggleOn ? 25 : 3,
                  transition: 'left 200ms ease',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.4)',
                }}
              />
            </div>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#FFFFFF' }}>
              Notificacoes por email
            </span>
          </div>
        </div>
      </section>

      <div style={divider} />

      {/* ═══════════════════════════════════════
          SECTION: FEEDBACK
          ═══════════════════════════════════════ */}
      <section id="feedback">
        <div style={sectionOverline}>UI.FEEDBACK</div>
        <h2 style={sectionTitle}>Feedback</h2>
        <p style={sectionDesc}>
          Alertas, progress bars, badges e skeleton loaders para comunicar estados
          do sistema ao usuario.
        </p>

        {/* Alerts */}
        <div style={subsectionLabel}>Alerts</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 560, marginBottom: 40 }}>
          <DemoAlert variant="success" message="Squad operacional. 97% de fidelidade cognitiva atingida." />
          <DemoAlert variant="warning" message="Creditos de token abaixo de 20%. Considere upgrade do plano." />
          <DemoAlert variant="error" message="Pipeline interrompido. Reconectando em 3... 2... 1..." />
          <DemoAlert variant="info" message="Novo squad disponivel para ativacao no seu workspace." />
        </div>

        {/* Progress bar */}
        <div style={subsectionLabel}>Progress Bar</div>
        <div style={{ maxWidth: 480, marginBottom: 40 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#A0A0A0' }}>
              Treinamento do Squad
            </span>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: '#00C96E' }}>
              {progressVal}%
            </span>
          </div>
          <div
            style={{
              width: '100%',
              height: 8,
              background: '#1A1A1A',
              borderRadius: 4,
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                width: `${progressVal}%`,
                height: '100%',
                background: 'linear-gradient(90deg, #008F4C, #00C96E)',
                borderRadius: 4,
                transition: 'width 500ms ease',
                boxShadow: '0 0 8px rgba(0,201,110,0.3)',
              }}
            />
          </div>
        </div>

        {/* Badges */}
        <div style={subsectionLabel}>Badges</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 40 }}>
          {[
            { label: 'Default', bg: '#222222', color: '#A0A0A0' },
            { label: 'Primary', bg: 'rgba(0,201,110,0.15)', color: '#00C96E' },
            { label: 'Success', bg: 'rgba(0,201,110,0.15)', color: '#00C96E' },
            { label: 'Warning', bg: 'rgba(245,158,11,0.15)', color: '#F59E0B' },
            { label: 'Error', bg: 'rgba(239,68,68,0.15)', color: '#EF4444' },
            { label: 'VIP', bg: 'rgba(255,215,0,0.15)', color: '#FFD700' },
          ].map((b) => (
            <span
              key={b.label}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.05em',
                background: b.bg,
                color: b.color,
                padding: '4px 10px',
                borderRadius: 4,
              }}
            >
              {b.label.toUpperCase()}
            </span>
          ))}
        </div>

        {/* Skeleton loader */}
        <div style={subsectionLabel}>Skeleton Loader</div>
        <div
          style={{
            maxWidth: 360,
            background: '#111111',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 8,
            padding: 20,
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 8,
              background: '#1A1A1A',
              marginBottom: 16,
              animation: 'mvpSkeletonPulse 1.6s ease-in-out infinite',
            }}
          />
          <div
            style={{
              width: '70%',
              height: 14,
              borderRadius: 4,
              background: '#1A1A1A',
              marginBottom: 10,
              animation: 'mvpSkeletonPulse 1.6s ease-in-out infinite',
              animationDelay: '0.1s',
            }}
          />
          <div
            style={{
              width: '100%',
              height: 10,
              borderRadius: 4,
              background: '#1A1A1A',
              marginBottom: 8,
              animation: 'mvpSkeletonPulse 1.6s ease-in-out infinite',
              animationDelay: '0.2s',
            }}
          />
          <div
            style={{
              width: '85%',
              height: 10,
              borderRadius: 4,
              background: '#1A1A1A',
              animation: 'mvpSkeletonPulse 1.6s ease-in-out infinite',
              animationDelay: '0.3s',
            }}
          />
        </div>
      </section>

      <div style={divider} />

      {/* ═══════════════════════════════════════
          SECTION: ESPECIAIS
          ═══════════════════════════════════════ */}
      <section id="especiais">
        <div style={sectionOverline}>UI.SPECIALS</div>
        <h2 style={sectionTitle}>Componentes Especiais</h2>
        <p style={sectionDesc}>
          Terminal blocks, stat cards, timelines e code blocks que referenciam a estetica
          Matrix do MVP. Elementos que diferenciam a marca de interfaces corporativas genericas.
        </p>

        {/* Terminal block */}
        <div style={subsectionLabel}>Terminal Block</div>
        <div
          style={{
            maxWidth: 600,
            background: '#000000',
            border: '1px solid rgba(0,201,110,0.15)',
            borderRadius: 8,
            overflow: 'hidden',
            marginBottom: 40,
          }}
        >
          {/* Title bar */}
          <div
            style={{
              background: '#0A0A0A',
              padding: '10px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              borderBottom: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#EF4444' }} />
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#F59E0B' }} />
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#00C96E' }} />
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                color: '#666666',
                marginLeft: 8,
              }}
            >
              terminal &mdash; mvp-lab
            </span>
          </div>
          {/* Terminal content */}
          <div style={{ padding: '16px 20px', fontFamily: "'JetBrains Mono', monospace", fontSize: 13, lineHeight: 1.8 }}>
            <div>
              <span style={{ color: '#00C96E' }}>mvp@lab</span>
              <span style={{ color: '#666666' }}>:</span>
              <span style={{ color: '#3B82F6' }}>~/squads</span>
              <span style={{ color: '#666666' }}>$ </span>
              <span style={{ color: '#FFFFFF' }}>aios deploy --squad comercial-ia</span>
            </div>
            <div style={{ color: '#A0A0A0' }}>
              Deploying squad-comercial-ia to production...
            </div>
            <div style={{ color: '#A0A0A0' }}>
              Extracting cognitive DNA... <span style={{ color: '#00C96E' }}>done</span>
            </div>
            <div style={{ color: '#A0A0A0' }}>
              Training mind clone... <span style={{ color: '#00C96E' }}>91% fidelity</span>
            </div>
            <div style={{ color: '#A0A0A0' }}>
              Connecting to pipeline... <span style={{ color: '#00C96E' }}>active</span>
            </div>
            <div>
              <span style={{ color: '#00C96E' }}>
                Squad operational. ROI tracking enabled.
              </span>
            </div>
            <div>
              <span style={{ color: '#00C96E' }}>mvp@lab</span>
              <span style={{ color: '#666666' }}>:</span>
              <span style={{ color: '#3B82F6' }}>~/squads</span>
              <span style={{ color: '#666666' }}>$ </span>
              <span style={{ color: '#00C96E', opacity: blinkOn ? 1 : 0, transition: 'none' }}>_</span>
            </div>
          </div>
        </div>

        {/* Code block */}
        <div style={subsectionLabel}>Code Block</div>
        <div
          style={{
            maxWidth: 600,
            background: '#0A0A0A',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 8,
            overflow: 'hidden',
            marginBottom: 40,
          }}
        >
          <div
            style={{
              padding: '8px 16px',
              background: '#111111',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#666666' }}>
              squad-config.yaml
            </span>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#333333' }}>
              YAML
            </span>
          </div>
          <pre
            style={{
              padding: '16px 20px',
              margin: 0,
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 13,
              lineHeight: 1.7,
              overflowX: 'auto',
            }}
          >
            <span style={{ color: '#3B82F6' }}>squad</span><span style={{ color: '#666666' }}>:</span>{'\n'}
            <span style={{ color: '#666666' }}>  </span><span style={{ color: '#3B82F6' }}>name</span><span style={{ color: '#666666' }}>: </span><span style={{ color: '#00C96E' }}>"comercial-ia"</span>{'\n'}
            <span style={{ color: '#666666' }}>  </span><span style={{ color: '#3B82F6' }}>fidelity</span><span style={{ color: '#666666' }}>: </span><span style={{ color: '#FFD700' }}>0.91</span>{'\n'}
            <span style={{ color: '#666666' }}>  </span><span style={{ color: '#3B82F6' }}>model</span><span style={{ color: '#666666' }}>: </span><span style={{ color: '#00C96E' }}>"claude-opus-4-6"</span>{'\n'}
            <span style={{ color: '#666666' }}>  </span><span style={{ color: '#3B82F6' }}>tokens_monthly</span><span style={{ color: '#666666' }}>: </span><span style={{ color: '#FFD700' }}>50_000</span>{'\n'}
            <span style={{ color: '#666666' }}>  </span><span style={{ color: '#3B82F6' }}>roi_tracking</span><span style={{ color: '#666666' }}>: </span><span style={{ color: '#00C96E' }}>true</span>
          </pre>
        </div>

        {/* Stat cards */}
        <div style={subsectionLabel}>Stat Cards</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, marginBottom: 40 }}>
          {[
            { value: '444x', label: 'ROI MEDIO', color: '#00C96E' },
            { value: '91%', label: 'FIDELIDADE', color: '#00C96E' },
            { value: 'R$3', label: 'CUSTO TOKENS/DIA', color: '#33D489' },
            { value: '24/7', label: 'OPERACAO', color: '#FFD700' },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                background: '#0A0A0A',
                border: '1px solid rgba(255,255,255,0.10)',
                borderRadius: 8,
                padding: '28px 24px',
                textAlign: 'center',
                minWidth: 140,
                flex: '1 1 140px',
                maxWidth: 200,
              }}
            >
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 40,
                  fontWeight: 700,
                  color: stat.color,
                  lineHeight: 1,
                  marginBottom: 8,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10,
                  fontWeight: 700,
                  color: '#A0A0A0',
                  letterSpacing: '0.15em',
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div style={subsectionLabel}>Timeline</div>
        <div style={{ maxWidth: 480, marginBottom: 40, paddingLeft: 24 }}>
          {[
            { title: 'Discovery', desc: 'Mapeamento de processos e oportunidades de automacao.', status: 'done' },
            { title: 'Extracao Cognitiva', desc: 'Entrevistas e captura do conhecimento do especialista.', status: 'done' },
            { title: 'Build do Squad', desc: 'Treinamento do clone cognitivo com fidelidade mensuravel.', status: 'active' },
            { title: 'Deploy', desc: 'Squad operacional integrado aos canais de atendimento.', status: 'pending' },
          ].map((step, i) => (
            <div
              key={step.title}
              style={{
                position: 'relative',
                paddingLeft: 32,
                paddingBottom: i < 3 ? 32 : 0,
              }}
            >
              {/* Vertical line */}
              {i < 3 && (
                <div
                  style={{
                    position: 'absolute',
                    left: 5,
                    top: 16,
                    bottom: 0,
                    width: 1,
                    background:
                      step.status === 'done'
                        ? '#00C96E'
                        : 'rgba(255,255,255,0.08)',
                  }}
                />
              )}
              {/* Dot */}
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  background:
                    step.status === 'done'
                      ? '#00C96E'
                      : step.status === 'active'
                        ? '#0A0A0A'
                        : '#1A1A1A',
                  border:
                    step.status === 'active'
                      ? '2px solid #00C96E'
                      : step.status === 'done'
                        ? 'none'
                        : '1px solid rgba(255,255,255,0.15)',
                  boxShadow:
                    step.status === 'active'
                      ? '0 0 8px rgba(0,201,110,0.4)'
                      : 'none',
                }}
              />
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 15,
                  fontWeight: 600,
                  color: step.status === 'pending' ? '#666666' : '#FFFFFF',
                  marginBottom: 4,
                }}
              >
                {step.title}
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 13,
                  color: step.status === 'pending' ? '#333333' : '#A0A0A0',
                  lineHeight: 1.5,
                }}
              >
                {step.desc}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
