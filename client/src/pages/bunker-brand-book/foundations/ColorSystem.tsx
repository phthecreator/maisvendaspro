interface SwatchProps {
  color: string;
  name: string;
  hex: string;
  usage: string;
  darkText?: boolean;
}

const Swatch = ({ color, name, hex, usage, darkText }: SwatchProps) => (
  <div className="rounded-lg overflow-hidden border border-white/5" style={{ background: '#2F353A' }}>
    <div className="h-24 relative" style={{ background: color }}>
      <span className="absolute bottom-2 right-2.5 text-[11px] rounded px-1.5 py-0.5"
        style={{ fontFamily: "'Roboto Mono', monospace", color: 'rgba(255,255,255,0.7)', background: 'rgba(0,0,0,0.5)' }}>
        {hex}
      </span>
    </div>
    <div className="px-4 py-3">
      <div className={`text-[13px] font-medium ${darkText ? 'text-[#1A1E22]' : ''}`}>{name}</div>
      <div className="text-[11px] text-[#A9A9A9]">{usage}</div>
    </div>
  </div>
);

const GradientPanel = ({ gradient, label }: { gradient: string; label: string }) => (
  <div className="h-28 rounded-lg flex items-end p-3 border border-white/5" style={{ background: gradient }}>
    <span className="text-[11px] bg-black/50 px-2 py-0.5 rounded"
      style={{ fontFamily: "'Roboto Mono', monospace" }}>{label}</span>
  </div>
);

const surfaces = [
  { name: 'surface-0', hex: '#0a0a0a', label: 'Deepest' },
  { name: 'surface-1', hex: '#121212', label: 'Base' },
  { name: 'surface-2', hex: '#1a1a1a', label: 'Raised' },
  { name: 'surface-3', hex: '#242424', label: 'Overlay' },
  { name: 'surface-4', hex: '#2e2e2e', label: 'Modal' },
  { name: 'surface-5', hex: '#383838', label: 'Popover' },
];

const semanticTokens = [
  { label: 'Success', bg: 'rgba(52,199,89,0.12)', border: 'rgba(52,199,89,0.25)', color: '#34C759', text: 'Deploy completo com sucesso.' },
  { label: 'Warning', bg: 'rgba(255,170,0,0.12)', border: 'rgba(255,170,0,0.25)', color: '#FFAA00', text: 'Limite de tokens atingindo 80%.' },
  { label: 'Error', bg: 'rgba(255,59,48,0.12)', border: 'rgba(255,59,48,0.25)', color: '#FF3B30', text: 'Falha na conexao com o servidor.' },
  { label: 'Info', bg: 'rgba(0,229,255,0.12)', border: 'rgba(0,229,255,0.25)', color: '#00E5FF', text: 'Nova versao disponivel para deploy.' },
];

const ColorSystem = () => (
  <section className="pb-24 border-b border-[#00E5FF]/10">
    <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#00E5FF] mb-3"
      style={{ fontFamily: "'Roboto Mono', monospace" }}>02 / Sistema de Cores</p>
    <h2 className="text-[42px] font-bold leading-tight mb-6"
      style={{ fontFamily: "'Averia Serif Libre', serif", color: '#FDF5E6' }}>Paleta do Bunker</h2>
    <p className="text-[15px] text-[#A9A9A9] max-w-[700px] mb-12 leading-relaxed"
      style={{ fontFamily: "'Roboto Mono', monospace" }}>
      Cores primarias escuras representam o interior do bunker. Secundarias trazem oxidacao e energia cibernetica. Todas passam WCAG AA minimo sobre backgrounds primarios.
    </p>

    {/* Primary */}
    <h3 className="text-2xl font-bold mb-4"
      style={{ fontFamily: "'Averia Serif Libre', serif", color: '#FDF5E6' }}>
      Primarias — Base &amp; Background
    </h3>
    <div className="grid grid-cols-3 gap-6 mb-10">
      <Swatch color="#2F353A" name="Dark Metallic Gray" hex="#2F353A" usage="Backgrounds principais, cards, paineis" />
      <Swatch color="#1A1E22" name="Chaos Black" hex="#1A1E22" usage="Sombras profundas, hero sections" />
      <Swatch color="#2B3A33" name="Deep Moss Green" hex="#2B3A33" usage="Backgrounds secundarios, secoes alternadas" />
    </div>

    {/* Secondary */}
    <h3 className="text-2xl font-bold mb-4"
      style={{ fontFamily: "'Averia Serif Libre', serif", color: '#FDF5E6' }}>
      Secundarias — Oxidacao &amp; Energia
    </h3>
    <div className="grid grid-cols-4 gap-6 mb-10">
      <Swatch color="#8B4513" name="Oxidized Copper" hex="#8B4513" usage="Oxidacao principal, badges" />
      <Swatch color="#CD7F32" name="Bronze Patina" hex="#CD7F32" usage="Detalhes metalicos, hover" />
      <Swatch color="#00E5FF" name="Cyber Cyan" hex="#00E5FF" usage="CTAs, links, glow effects" />
      <Swatch color="#3A86FF" name="Laser Blue" hex="#3A86FF" usage="Alternativa ao ciano, links" />
    </div>

    {/* Neutrals & Functional */}
    <h3 className="text-2xl font-bold mb-4"
      style={{ fontFamily: "'Averia Serif Libre', serif", color: '#FDF5E6' }}>
      Neutras &amp; Funcionais
    </h3>
    <div className="grid grid-cols-5 gap-5 mb-10">
      <Swatch color="#FDF5E6" name="Aged White" hex="#FDF5E6" usage="Texto principal" darkText />
      <Swatch color="#A9A9A9" name="Matte Silver" hex="#A9A9A9" usage="Texto secundario" />
      <Swatch color="#FF3B30" name="Alert Red" hex="#FF3B30" usage="Erros" />
      <Swatch color="#34C759" name="Signal Green" hex="#34C759" usage="Sucesso" />
      <Swatch color="#FFAA00" name="Warning Amber" hex="#FFAA00" usage="Avisos" />
    </div>

    {/* Surface Elevation */}
    <h3 className="text-2xl font-bold mb-4"
      style={{ fontFamily: "'Averia Serif Libre', serif", color: '#FDF5E6' }}>
      Elevacao de Superficie
    </h3>
    <p className="text-[13px] text-[#A9A9A9] mb-6" style={{ fontFamily: "'Roboto Mono', monospace" }}>
      6 niveis de superficie, do mais profundo ao mais elevado. Cada nivel adiciona luminosidade para criar hierarquia visual.
    </p>
    <div className="grid grid-cols-6 gap-4 mb-10">
      {surfaces.map((s) => (
        <div key={s.name} className="rounded-lg p-4 border border-white/5 min-h-[160px] flex flex-col justify-between"
          style={{ background: s.hex }}>
          <div>
            <div className="text-[11px] text-[#00E5FF] uppercase tracking-[0.1em] mb-2"
              style={{ fontFamily: "'Roboto Mono', monospace" }}>{s.name}</div>
            <div className="text-[13px] text-[#FDF5E6] mb-1" style={{ fontFamily: "'Roboto Mono', monospace" }}>
              {s.label}
            </div>
            <div className="text-[11px] text-[#A9A9A9]" style={{ fontFamily: "'Roboto Mono', monospace" }}>
              Texto legivel neste nivel
            </div>
          </div>
          <div className="text-[10px] text-[#A9A9A9] opacity-60 mt-3" style={{ fontFamily: "'Roboto Mono', monospace" }}>
            {s.hex}
          </div>
        </div>
      ))}
    </div>

    {/* Semantic Tokens */}
    <h3 className="text-2xl font-bold mb-4"
      style={{ fontFamily: "'Averia Serif Libre', serif", color: '#FDF5E6' }}>
      Tokens Semanticos
    </h3>
    <div className="grid grid-cols-2 gap-4 mb-10">
      {semanticTokens.map((t) => (
        <div key={t.label} className="rounded-lg p-5 flex items-start gap-3"
          style={{ background: t.bg, border: `1px solid ${t.border}` }}>
          <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ background: t.color }} />
          <div>
            <div className="text-[12px] font-medium uppercase tracking-[0.08em] mb-1"
              style={{ fontFamily: "'Roboto Mono', monospace", color: t.color }}>{t.label}</div>
            <div className="text-[13px]" style={{ fontFamily: "'Roboto Mono', monospace", color: '#FDF5E6' }}>
              {t.text}
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Contrast Table */}
    <h3 className="text-2xl font-bold mb-4"
      style={{ fontFamily: "'Averia Serif Libre', serif", color: '#FDF5E6' }}>
      Contraste WCAG
    </h3>
    <table className="w-full text-[13px] mb-10" style={{ fontFamily: "'Roboto Mono', monospace" }}>
      <thead>
        <tr className="border-b border-[#00E5FF]/20">
          <th className="text-left py-2.5 px-3 text-[11px] tracking-[0.1em] uppercase text-[#00E5FF] font-medium">Combinacao</th>
          <th className="text-left py-2.5 px-3 text-[11px] tracking-[0.1em] uppercase text-[#00E5FF] font-medium">Ratio</th>
          <th className="text-left py-2.5 px-3 text-[11px] tracking-[0.1em] uppercase text-[#00E5FF] font-medium">Nivel</th>
        </tr>
      </thead>
      <tbody>
        {[
          { combo: 'Aged White sobre Chaos Black', fg: '#FDF5E6', ratio: '15.2:1', level: 'AAA', pass: true },
          { combo: 'Cyber Cyan sobre Chaos Black', fg: '#00E5FF', ratio: '12.1:1', level: 'AAA', pass: true },
          { combo: 'Bronze Patina sobre Chaos Black', fg: '#CD7F32', ratio: '5.1:1', level: 'AA', pass: false },
          { combo: 'Matte Silver sobre Chaos Black', fg: '#A9A9A9', ratio: '7.3:1', level: 'AAA', pass: true },
          { combo: 'Laser Blue sobre Chaos Black', fg: '#3A86FF', ratio: '5.6:1', level: 'AA', pass: false },
        ].map((row) => (
          <tr key={row.combo} className="border-b border-white/[0.03]">
            <td className="py-2.5 px-3">
              <span style={{ color: row.fg }}>{row.combo.split(' sobre ')[0]}</span>
              {' sobre '}
              <span className="bg-[#1A1E22] px-1.5 py-0.5 rounded text-[12px]">Chaos Black</span>
            </td>
            <td className={`py-2.5 px-3 ${row.pass ? 'text-[#34C759]' : 'text-[#FFAA00]'}`}>{row.ratio}</td>
            <td className={`py-2.5 px-3 ${row.pass ? 'text-[#34C759]' : 'text-[#FFAA00]'}`}>{row.level}</td>
          </tr>
        ))}
      </tbody>
    </table>

    {/* Gradients */}
    <h3 className="text-2xl font-bold mb-4"
      style={{ fontFamily: "'Averia Serif Libre', serif", color: '#FDF5E6' }}>
      Gradientes Permitidos
    </h3>
    <div className="grid grid-cols-4 gap-5">
      <GradientPanel gradient="linear-gradient(180deg, #1A1E22 0%, #2F353A 100%)" label="Bunker Primary" />
      <GradientPanel gradient="linear-gradient(135deg, #1A1E22 0%, #2B3A33 100%)" label="Moss Depth" />
      <GradientPanel gradient="linear-gradient(180deg, #8B4513 0%, #CD7F32 100%)" label="Rust Metallic" />
      <GradientPanel gradient="linear-gradient(90deg, transparent 0%, #00E5FF 50%, transparent 100%)" label="Energy Line" />
    </div>
  </section>
);

export default ColorSystem;
