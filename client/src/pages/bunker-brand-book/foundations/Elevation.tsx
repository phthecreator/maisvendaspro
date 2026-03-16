const surfaces = [
  { name: 'surface-0', hex: '#0a0a0a', label: 'Deepest', desc: 'Background base, footer' },
  { name: 'surface-1', hex: '#121212', label: 'Base', desc: 'Page background' },
  { name: 'surface-2', hex: '#1a1a1a', label: 'Raised', desc: 'Cards, containers' },
  { name: 'surface-3', hex: '#242424', label: 'Overlay', desc: 'Dropdowns, menus' },
  { name: 'surface-4', hex: '#2e2e2e', label: 'Modal', desc: 'Modals, dialogs' },
  { name: 'surface-5', hex: '#383838', label: 'Popover', desc: 'Tooltips, popovers' },
];

const borders = [
  { name: 'Subtle', value: 'rgba(255,255,255,0.06)', desc: 'Cards, dividers', visual: '6%' },
  { name: 'Default', value: 'rgba(255,255,255,0.10)', desc: 'Inputs, containers', visual: '10%' },
  { name: 'Strong', value: 'rgba(255,255,255,0.16)', desc: 'Active elements', visual: '16%' },
  { name: 'Focus', value: '#00E5FF', desc: 'Focus rings, active states', visual: 'cyan' },
];

const Elevation = () => (
  <section className="pb-24 border-b border-[#00E5FF]/10">
    <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#00E5FF] mb-3"
      style={{ fontFamily: "'Roboto Mono', monospace" }}>07 / Elevacao &amp; Superficies</p>
    <h2 className="text-[42px] font-bold leading-tight mb-6"
      style={{ fontFamily: "'Averia Serif Libre', serif", color: '#FDF5E6' }}>Sistema de Elevacao</h2>
    <p className="text-[15px] text-[#A9A9A9] max-w-[700px] mb-12 leading-relaxed"
      style={{ fontFamily: "'Roboto Mono', monospace" }}>
      6 niveis de superficie para criar profundidade sem usar sombras. Cada nivel aumenta a luminosidade do background para simular elevacao em interfaces escuras.
    </p>

    {/* Surface Cards */}
    <h3 className="text-2xl font-bold mb-6"
      style={{ fontFamily: "'Averia Serif Libre', serif", color: '#FDF5E6' }}>Niveis de Superficie</h3>
    <div className="grid grid-cols-3 gap-5 mb-12">
      {surfaces.map((s) => (
        <div key={s.name} className="rounded-lg p-5 border border-white/5 flex flex-col gap-4"
          style={{ background: s.hex }}>
          <div>
            <div className="text-[11px] text-[#00E5FF] uppercase tracking-[0.1em] mb-1"
              style={{ fontFamily: "'Roboto Mono', monospace" }}>{s.name}</div>
            <div className="text-lg font-bold"
              style={{ fontFamily: "'Averia Serif Libre', serif", color: '#FDF5E6' }}>{s.label}</div>
            <div className="text-[12px] text-[#A9A9A9] mt-1" style={{ fontFamily: "'Roboto Mono', monospace" }}>
              {s.desc}
            </div>
          </div>
          <div className="text-[13px] leading-relaxed" style={{ fontFamily: "'Roboto Mono', monospace", color: 'rgba(253,245,230,0.68)' }}>
            Texto secundario demonstrando legibilidade neste nivel de superficie.
          </div>
          {/* Nested card */}
          <div className="rounded p-3 border border-white/5"
            style={{ background: `color-mix(in srgb, ${s.hex} 70%, white 5%)` }}>
            <div className="text-[11px] text-[#FDF5E6]" style={{ fontFamily: "'Roboto Mono', monospace" }}>
              Card aninhado
            </div>
            <div className="text-[10px] text-[#A9A9A9] mt-0.5" style={{ fontFamily: "'Roboto Mono', monospace" }}>
              Nivel + 1
            </div>
          </div>
          {/* Button */}
          <button className="w-full py-2 rounded text-[11px] uppercase tracking-[0.08em] cursor-pointer"
            style={{
              fontFamily: "'Roboto Mono', monospace",
              background: 'rgba(0,229,255,0.12)',
              border: '1px solid rgba(0,229,255,0.2)',
              color: '#00E5FF',
            }}>
            Acao
          </button>
          <div className="text-[10px] text-[#A9A9A9] opacity-50" style={{ fontFamily: "'Roboto Mono', monospace" }}>
            {s.hex}
          </div>
        </div>
      ))}
    </div>

    {/* Border Tokens */}
    <h3 className="text-2xl font-bold mb-6"
      style={{ fontFamily: "'Averia Serif Libre', serif", color: '#FDF5E6' }}>Tokens de Borda</h3>
    <div className="grid grid-cols-4 gap-4 mb-12">
      {borders.map((b) => (
        <div key={b.name} className="rounded-lg p-5 flex flex-col items-center text-center"
          style={{ background: '#1A1E22', border: `2px solid ${b.value}` }}>
          <div className="text-[13px] font-medium mb-1"
            style={{ fontFamily: "'Roboto Mono', monospace", color: '#FDF5E6' }}>{b.name}</div>
          <div className="text-[11px] text-[#A9A9A9] mb-2"
            style={{ fontFamily: "'Roboto Mono', monospace" }}>{b.desc}</div>
          <div className="text-[10px] text-[#00E5FF]"
            style={{ fontFamily: "'Roboto Mono', monospace" }}>{b.visual}</div>
        </div>
      ))}
    </div>

    {/* Shadow Demo */}
    <h3 className="text-2xl font-bold mb-6"
      style={{ fontFamily: "'Averia Serif Libre', serif", color: '#FDF5E6' }}>Sombras para Elementos Flutuantes</h3>
    <p className="text-[13px] text-[#A9A9A9] mb-6" style={{ fontFamily: "'Roboto Mono', monospace" }}>
      Sombras reservadas para tooltips, dropdowns e elementos que flutuam acima da superficie.
    </p>
    <div className="flex gap-8 mb-12">
      <div className="flex-1 flex flex-col items-center gap-3">
        <div className="rounded-lg p-4 text-center"
          style={{
            background: '#2e2e2e',
            boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
            border: '1px solid rgba(255,255,255,0.06)',
          }}>
          <div className="text-[12px] text-[#FDF5E6]" style={{ fontFamily: "'Roboto Mono', monospace" }}>
            Tooltip shadow
          </div>
        </div>
        <div className="text-[10px] text-[#A9A9A9]" style={{ fontFamily: "'Roboto Mono', monospace" }}>
          0 4px 12px rgba(0,0,0,0.4)
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center gap-3">
        <div className="rounded-lg p-4 text-center"
          style={{
            background: '#2e2e2e',
            boxShadow: '0 8px 24px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.06)',
          }}>
          <div className="text-[12px] text-[#FDF5E6]" style={{ fontFamily: "'Roboto Mono', monospace" }}>
            Dropdown shadow
          </div>
          <div className="text-[11px] text-[#A9A9A9] mt-1" style={{ fontFamily: "'Roboto Mono', monospace" }}>
            Item 1
          </div>
          <div className="text-[11px] text-[#A9A9A9]" style={{ fontFamily: "'Roboto Mono', monospace" }}>
            Item 2
          </div>
        </div>
        <div className="text-[10px] text-[#A9A9A9]" style={{ fontFamily: "'Roboto Mono', monospace" }}>
          0 8px 24px rgba(0,0,0,0.5)
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center gap-3">
        <div className="rounded-lg p-5 text-center"
          style={{
            background: '#2e2e2e',
            boxShadow: '0 16px 48px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.08)',
          }}>
          <div className="text-[12px] text-[#FDF5E6]" style={{ fontFamily: "'Roboto Mono', monospace" }}>
            Modal shadow
          </div>
          <div className="text-[11px] text-[#A9A9A9] mt-1" style={{ fontFamily: "'Roboto Mono', monospace" }}>
            Content area
          </div>
        </div>
        <div className="text-[10px] text-[#A9A9A9]" style={{ fontFamily: "'Roboto Mono', monospace" }}>
          0 16px 48px rgba(0,0,0,0.6)
        </div>
      </div>
    </div>

    {/* Text on Surfaces */}
    <h3 className="text-2xl font-bold mb-6"
      style={{ fontFamily: "'Averia Serif Libre', serif", color: '#FDF5E6' }}>Texto sobre Superficies</h3>
    <div className="grid grid-cols-3 gap-4">
      {surfaces.map((s) => (
        <div key={`text-${s.name}`} className="rounded-lg p-5 border border-white/5" style={{ background: s.hex }}>
          <div className="text-[10px] text-[#00E5FF] uppercase tracking-[0.1em] mb-3"
            style={{ fontFamily: "'Roboto Mono', monospace" }}>{s.name} ({s.hex})</div>
          <div className="text-[14px] mb-1.5" style={{ fontFamily: "'Roboto Mono', monospace", color: 'rgba(253,245,230,0.92)' }}>
            Primary 92%
          </div>
          <div className="text-[14px] mb-1.5" style={{ fontFamily: "'Roboto Mono', monospace", color: 'rgba(253,245,230,0.68)' }}>
            Secondary 68%
          </div>
          <div className="text-[14px] mb-1.5" style={{ fontFamily: "'Roboto Mono', monospace", color: 'rgba(253,245,230,0.45)' }}>
            Tertiary 45%
          </div>
          <div className="text-[14px]" style={{ fontFamily: "'Roboto Mono', monospace", color: 'rgba(253,245,230,0.28)' }}>
            Disabled 28%
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Elevation;
