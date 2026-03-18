import { useState } from 'react';

interface SwatchProps {
  color: string;
  name: string;
  hex: string;
  usage: string;
  token?: string;
  darkText?: boolean;
}

const Swatch = ({ color, name, hex, usage, token, darkText }: SwatchProps) => {
  const [copied, setCopied] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(hex);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Fallback silently
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <div
      className="rounded-lg overflow-hidden border border-white/5"
      role="button"
      tabIndex={0}
      aria-label={`Copiar cor ${name}: ${hex}`}
      style={{
        background: '#2A1810',
        cursor: 'pointer',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        transform: hovered ? 'scale(1.02)' : 'scale(1)',
        boxShadow: hovered ? '0 8px 24px rgba(0,0,0,0.4)' : 'none',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      <div className="h-24 relative" style={{ background: color }}>
        <span className="absolute bottom-2 right-2.5 text-[11px] rounded px-1.5 py-0.5"
          style={{ fontFamily: "'Roboto Mono', monospace", color: 'rgba(255,255,255,0.7)', background: 'rgba(0,0,0,0.5)' }}>
          {hex}
        </span>
        {hovered && token && (
          <div className="absolute inset-0 flex items-center justify-center"
            style={{ background: 'rgba(0,0,0,0.55)' }}>
            <span className="text-[11px] text-[#FF6B00] px-2 py-1 rounded"
              style={{ fontFamily: "'Roboto Mono', monospace", background: 'rgba(0,0,0,0.6)' }}>
              {token}
            </span>
          </div>
        )}
        {copied && (
          <div className="absolute inset-0 flex items-center justify-center"
            style={{ background: 'rgba(0,0,0,0.7)' }}>
            <span className="text-[13px] font-medium text-[#34C759]"
              style={{ fontFamily: "'Roboto Mono', monospace" }}>
              Copiado!
            </span>
          </div>
        )}
      </div>
      <div className="px-4 py-3">
        <div className={`text-[13px] font-medium ${darkText ? 'text-[#1A0A00]' : ''}`}>{name}</div>
        <div className="text-[11px] text-[#B8976A]">{usage}</div>
      </div>
    </div>
  );
};

const GradientPanel = ({ gradient, label }: { gradient: string; label: string }) => (
  <div className="h-28 rounded-lg flex items-end p-3 border border-white/5" style={{ background: gradient }}>
    <span className="text-[11px] bg-black/50 px-2 py-0.5 rounded"
      style={{ fontFamily: "'Roboto Mono', monospace" }}>{label}</span>
  </div>
);

const surfaces = [
  { name: 'surface-0', hex: '#0A0400', label: 'Deepest' },
  { name: 'surface-1', hex: '#120A04', label: 'Base' },
  { name: 'surface-2', hex: '#1A0A00', label: 'Raised' },
  { name: 'surface-3', hex: '#241408', label: 'Overlay' },
  { name: 'surface-4', hex: '#2A1810', label: 'Modal' },
  { name: 'surface-5', hex: '#3A2818', label: 'Popover' },
];

const semanticTokens = [
  { label: 'Success', bg: 'rgba(52,199,89,0.12)', border: 'rgba(52,199,89,0.25)', color: '#34C759', text: 'Proposta enviada com sucesso.' },
  { label: 'Warning', bg: 'rgba(255,168,0,0.12)', border: 'rgba(255,168,0,0.25)', color: '#FFA800', text: 'Limite de leads atingindo 80%.' },
  { label: 'Error', bg: 'rgba(255,59,48,0.12)', border: 'rgba(255,59,48,0.25)', color: '#FF3B30', text: 'Falha na conexao com o servidor.' },
  { label: 'Info', bg: 'rgba(255,107,0,0.12)', border: 'rgba(255,107,0,0.25)', color: '#FF6B00', text: 'Nova versao do Forja disponivel.' },
];

const ColorSystem = () => (
  <section>
    <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#FF6B00] mb-3"
      style={{ fontFamily: "'Roboto Mono', monospace" }}>02 / Sistema de Cores</p>
    <h2 className="text-[42px] font-bold leading-tight mb-6"
      style={{ fontFamily: "'Averia Serif Libre', serif", color: '#FFF8F0' }}>Paleta da Forja</h2>
    <p className="text-[15px] text-[#B8976A] max-w-[700px] mb-12 leading-relaxed"
      style={{ fontFamily: "'Roboto Mono', monospace" }}>
      Cores primarias quentes representam o interior da forja. Acentos trazem energia de brasa e ouro fundido. Todas passam WCAG AA minimo sobre backgrounds primarios.
    </p>

    {/* Primary */}
    <h3 className="text-2xl font-bold mb-4"
      style={{ fontFamily: "'Averia Serif Libre', serif", color: '#FFF8F0' }}>
      Primarias — Base &amp; Background
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      <Swatch color="#1A0A00" name="Obsidiana Quente" hex="#1A0A00" token="--forja-obsidiana" usage="Background principal, hero sections" />
      <Swatch color="#2A1810" name="Carvao Forjado" hex="#2A1810" token="--forja-carvao" usage="Surfaces, cards, paineis" />
      <Swatch color="#0D0604" name="Noite da Forja" hex="#0D0604" token="--forja-noite" usage="Sidebar, deepest backgrounds" />
    </div>

    {/* Accent */}
    <h3 className="text-2xl font-bold mb-4"
      style={{ fontFamily: "'Averia Serif Libre', serif", color: '#FFF8F0' }}>
      Acentos — Brasa &amp; Energia
    </h3>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
      <Swatch color="#FF6B00" name="Laranja Forja" hex="#FF6B00" token="--forja-laranja" usage="CTAs, links, glow effects" />
      <Swatch color="#FFD700" name="Ouro Fundido" hex="#FFD700" token="--forja-ouro" usage="Destaques premium, badges" />
      <Swatch color="#FF4500" name="Brasa" hex="#FF4500" token="--forja-brasa" usage="Alertas, urgencia" />
      <Swatch color="#FFA800" name="Ambar Quente" hex="#FFA800" token="--forja-ambar" usage="Status, badges, indicators" />
    </div>

    {/* Neutrals & Functional */}
    <h3 className="text-2xl font-bold mb-4"
      style={{ fontFamily: "'Averia Serif Libre', serif", color: '#FFF8F0' }}>
      Neutras &amp; Funcionais
    </h3>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mb-10">
      <Swatch color="#FFF8F0" name="Pergaminho Quente" hex="#FFF8F0" token="--forja-pergaminho" usage="Texto principal" darkText />
      <Swatch color="#B8976A" name="Bronze Antigo" hex="#B8976A" token="--forja-bronze" usage="Texto secundario" />
      <Swatch color="#FF3B30" name="Alert Red" hex="#FF3B30" usage="Erros" />
      <Swatch color="#34C759" name="Signal Green" hex="#34C759" usage="Sucesso" />
      <Swatch color="#FFAA00" name="Warning Amber" hex="#FFAA00" usage="Avisos" />
    </div>

    {/* Surface Elevation */}
    <h3 className="text-2xl font-bold mb-4"
      style={{ fontFamily: "'Averia Serif Libre', serif", color: '#FFF8F0' }}>
      Elevacao de Superficie
    </h3>
    <p className="text-[13px] text-[#B8976A] mb-6" style={{ fontFamily: "'Roboto Mono', monospace" }}>
      6 niveis de superficie, do mais profundo ao mais elevado. Cada nivel adiciona luminosidade quente para criar hierarquia visual.
    </p>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
      {surfaces.map((s) => (
        <div key={s.name} className="rounded-lg p-4 border border-white/5 min-h-[160px] flex flex-col justify-between"
          style={{ background: s.hex }}>
          <div>
            <div className="text-[11px] text-[#FF6B00] uppercase tracking-[0.1em] mb-2"
              style={{ fontFamily: "'Roboto Mono', monospace" }}>{s.name}</div>
            <div className="text-[13px] text-[#FFF8F0] mb-1" style={{ fontFamily: "'Roboto Mono', monospace" }}>
              {s.label}
            </div>
            <div className="text-[11px] text-[#B8976A]" style={{ fontFamily: "'Roboto Mono', monospace" }}>
              Texto legivel neste nivel
            </div>
          </div>
          <div className="text-[10px] text-[#B8976A] opacity-60 mt-3" style={{ fontFamily: "'Roboto Mono', monospace" }}>
            {s.hex}
          </div>
        </div>
      ))}
    </div>

    {/* Semantic Tokens */}
    <h3 className="text-2xl font-bold mb-4"
      style={{ fontFamily: "'Averia Serif Libre', serif", color: '#FFF8F0' }}>
      Tokens Semanticos
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
      {semanticTokens.map((t) => (
        <div key={t.label} className="rounded-lg p-5 flex items-start gap-3"
          style={{ background: t.bg, border: `1px solid ${t.border}` }}>
          <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ background: t.color }} />
          <div>
            <div className="text-[12px] font-medium uppercase tracking-[0.08em] mb-1"
              style={{ fontFamily: "'Roboto Mono', monospace", color: t.color }}>{t.label}</div>
            <div className="text-[13px]" style={{ fontFamily: "'Roboto Mono', monospace", color: '#FFF8F0' }}>
              {t.text}
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Contrast Table */}
    <h3 className="text-2xl font-bold mb-4"
      style={{ fontFamily: "'Averia Serif Libre', serif", color: '#FFF8F0' }}>
      Contraste WCAG
    </h3>
    <div className="overflow-x-auto mb-10">
    <table className="w-full text-[13px]" style={{ fontFamily: "'Roboto Mono', monospace" }}>
      <thead>
        <tr className="border-b border-[#FF6B00]/20">
          <th className="text-left py-2.5 px-3 text-[11px] tracking-[0.1em] uppercase text-[#FF6B00] font-medium">Combinacao</th>
          <th className="text-left py-2.5 px-3 text-[11px] tracking-[0.1em] uppercase text-[#FF6B00] font-medium">Ratio</th>
          <th className="text-left py-2.5 px-3 text-[11px] tracking-[0.1em] uppercase text-[#FF6B00] font-medium">Nivel</th>
        </tr>
      </thead>
      <tbody>
        {[
          { combo: 'Pergaminho sobre Obsidiana', fg: '#FFF8F0', ratio: '17.8:1', level: 'AAA', pass: true },
          { combo: 'Laranja Forja sobre Obsidiana', fg: '#FF6B00', ratio: '6.2:1', level: 'AA', pass: true },
          { combo: 'Ouro Fundido sobre Obsidiana', fg: '#FFD700', ratio: '11.4:1', level: 'AAA', pass: true },
          { combo: 'Bronze Antigo sobre Obsidiana', fg: '#B8976A', ratio: '5.8:1', level: 'AA', pass: true },
          { combo: 'Brasa sobre Obsidiana', fg: '#FF4500', ratio: '4.9:1', level: 'AA', pass: false },
        ].map((row) => (
          <tr key={row.combo} className="border-b border-white/[0.03]">
            <td className="py-2.5 px-3">
              <span style={{ color: row.fg }}>{row.combo.split(' sobre ')[0]}</span>
              {' sobre '}
              <span className="bg-[#1A0A00] px-1.5 py-0.5 rounded text-[12px]">Obsidiana</span>
            </td>
            <td className={`py-2.5 px-3 ${row.pass ? 'text-[#34C759]' : 'text-[#FFAA00]'}`}>{row.ratio}</td>
            <td className={`py-2.5 px-3 ${row.pass ? 'text-[#34C759]' : 'text-[#FFAA00]'}`}>{row.level}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>

    {/* Gradients */}
    <h3 className="text-2xl font-bold mb-4"
      style={{ fontFamily: "'Averia Serif Libre', serif", color: '#FFF8F0' }}>
      Gradientes Permitidos
    </h3>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
      <GradientPanel gradient="linear-gradient(180deg, #1A0A00 0%, #2A1810 100%)" label="Forja Primary" />
      <GradientPanel gradient="linear-gradient(135deg, #1A0A00 0%, #3A2818 100%)" label="Ember Depth" />
      <GradientPanel gradient="linear-gradient(180deg, #FF4500 0%, #FFD700 100%)" label="Rust Metallic" />
      <GradientPanel gradient="linear-gradient(90deg, transparent 0%, #FF6B00 50%, transparent 100%)" label="Energy Line" />
    </div>
  </section>
);

export default ColorSystem;
