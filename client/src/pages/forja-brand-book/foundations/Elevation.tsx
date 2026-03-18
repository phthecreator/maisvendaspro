import { useState } from 'react';

const elevations = [
  {
    level: 0,
    name: 'Flat',
    hex: '#0A0400',
    shadow: 'none',
    shadowSpec: 'none',
    desc: 'Background base, sem sombra',
  },
  {
    level: 1,
    name: 'Raised',
    hex: '#120A04',
    shadow: '0 2px 4px rgba(10,4,0,0.3), 0 0 0 1px rgba(255,107,0,0.04)',
    shadowSpec: '0 2px 4px rgba(10,4,0,0.3)',
    desc: 'Cards, containers sutis',
  },
  {
    level: 2,
    name: 'Overlay',
    hex: '#141010',
    shadow: '0 4px 12px rgba(10,4,0,0.4), 0 0 0 1px rgba(255,107,0,0.06)',
    shadowSpec: '0 4px 12px rgba(10,4,0,0.4)',
    desc: 'Dropdowns, menus',
  },
  {
    level: 3,
    name: 'Modal',
    hex: '#241408',
    shadow: '0 8px 24px rgba(10,4,0,0.5), 0 0 0 1px rgba(255,107,0,0.08)',
    shadowSpec: '0 8px 24px rgba(10,4,0,0.5)',
    desc: 'Modais, dialogs',
  },
  {
    level: 4,
    name: 'Popover',
    hex: '#1E1616',
    shadow: '0 16px 48px rgba(10,4,0,0.6), 0 0 0 1px rgba(255,107,0,0.1)',
    shadowSpec: '0 16px 48px rgba(10,4,0,0.6)',
    desc: 'Tooltips, popovers',
  },
];

const borders = [
  { name: 'Subtle', value: 'rgba(255,255,255,0.06)', desc: 'Cards, dividers', visual: '6%' },
  { name: 'Default', value: 'rgba(255,255,255,0.10)', desc: 'Inputs, containers', visual: '10%' },
  { name: 'Strong', value: 'rgba(255,255,255,0.16)', desc: 'Active elements', visual: '16%' },
  { name: 'Focus', value: '#FF6B00', desc: 'Focus rings, active states', visual: 'laranja' },
];

const Elevation = () => {
  const [hoveredLevel, setHoveredLevel] = useState<number | null>(null);

  return (
    <section>
      <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#FF6B00] mb-3"
        style={{ fontFamily: "'Roboto Mono', monospace" }}>07 / Elevacao &amp; Superficies</p>
      <h2 className="text-[42px] font-bold leading-tight mb-6"
        style={{ fontFamily: "'Averia Serif Libre', serif", color: '#FFF8F0' }}>Sistema de Elevacao</h2>
      <p className="text-[15px] text-[#B8976A] max-w-[700px] mb-12 leading-relaxed"
        style={{ fontFamily: "'Roboto Mono', monospace" }}>
        5 niveis de elevacao com sombras de calor crescente. Cada nivel aumenta profundidade e brilho sutil de brasa nas bordas. Passe o mouse para ver a sombra em acao.
      </p>

      {/* Elevation Cards */}
      <h3 className="text-2xl font-bold mb-6"
        style={{ fontFamily: "'Averia Serif Libre', serif", color: '#FFF8F0' }}>Niveis de Elevacao</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 mb-12">
        {elevations.map((e) => (
          <div
            key={e.level}
            className="rounded-lg p-5 border border-white/5 flex flex-col gap-3 cursor-pointer"
            style={{
              background: e.hex,
              boxShadow: hoveredLevel === e.level ? e.shadow : 'none',
              transition: 'box-shadow 0.3s ease, transform 0.2s ease',
              transform: hoveredLevel === e.level ? 'translateY(-4px)' : 'translateY(0)',
            }}
            onMouseEnter={() => setHoveredLevel(e.level)}
            onMouseLeave={() => setHoveredLevel(null)}
            onClick={() => setHoveredLevel(hoveredLevel === e.level ? null : e.level)}
          >
            <div>
              <div className="text-[11px] text-[#FF6B00] uppercase tracking-[0.1em] mb-1"
                style={{ fontFamily: "'Roboto Mono', monospace" }}>Level {e.level}</div>
              <div className="text-lg font-bold"
                style={{ fontFamily: "'Averia Serif Libre', serif", color: '#FFF8F0' }}>{e.name}</div>
              <div className="text-[12px] text-[#B8976A] mt-1" style={{ fontFamily: "'Roboto Mono', monospace" }}>
                {e.desc}
              </div>
            </div>
            <div className="text-[10px] text-[#B8976A] opacity-60 mt-auto pt-2 border-t border-white/5"
              style={{ fontFamily: "'Roboto Mono', monospace" }}>
              {e.shadowSpec}
            </div>
          </div>
        ))}
      </div>

      {/* Border Tokens */}
      <h3 className="text-2xl font-bold mb-6"
        style={{ fontFamily: "'Averia Serif Libre', serif", color: '#FFF8F0' }}>Tokens de Borda</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {borders.map((b) => (
          <div key={b.name} className="rounded-lg p-5 flex flex-col items-center text-center"
            style={{ background: '#141010', border: `2px solid ${b.value}` }}>
            <div className="text-[13px] font-medium mb-1"
              style={{ fontFamily: "'Roboto Mono', monospace", color: '#FFF8F0' }}>{b.name}</div>
            <div className="text-[11px] text-[#B8976A] mb-2"
              style={{ fontFamily: "'Roboto Mono', monospace" }}>{b.desc}</div>
            <div className="text-[10px] text-[#FF6B00]"
              style={{ fontFamily: "'Roboto Mono', monospace" }}>{b.visual}</div>
          </div>
        ))}
      </div>

      {/* Shadow Comparison */}
      <h3 className="text-2xl font-bold mb-6"
        style={{ fontFamily: "'Averia Serif Libre', serif", color: '#FFF8F0' }}>Comparacao de Sombras</h3>
      <p className="text-[13px] text-[#B8976A] mb-6" style={{ fontFamily: "'Roboto Mono', monospace" }}>
        Sombras com tom quente para manter coerencia com a paleta da Forja.
      </p>
      <div className="flex gap-8 flex-wrap mb-12">
        <div className="flex-1 flex flex-col items-center gap-3">
          <div className="rounded-lg p-4 text-center"
            style={{
              background: '#1E1616',
              boxShadow: '0 4px 12px rgba(10,4,0,0.4), 0 0 0 1px rgba(255,107,0,0.06)',
            }}>
            <div className="text-[12px] text-[#FFF8F0]" style={{ fontFamily: "'Roboto Mono', monospace" }}>
              Tooltip
            </div>
          </div>
          <div className="text-[10px] text-[#B8976A]" style={{ fontFamily: "'Roboto Mono', monospace" }}>
            Level 2
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center gap-3">
          <div className="rounded-lg p-4 text-center"
            style={{
              background: '#1E1616',
              boxShadow: '0 8px 24px rgba(10,4,0,0.5), 0 0 0 1px rgba(255,107,0,0.08)',
            }}>
            <div className="text-[12px] text-[#FFF8F0]" style={{ fontFamily: "'Roboto Mono', monospace" }}>
              Dropdown
            </div>
            <div className="text-[11px] text-[#B8976A] mt-1" style={{ fontFamily: "'Roboto Mono', monospace" }}>
              Item 1
            </div>
            <div className="text-[11px] text-[#B8976A]" style={{ fontFamily: "'Roboto Mono', monospace" }}>
              Item 2
            </div>
          </div>
          <div className="text-[10px] text-[#B8976A]" style={{ fontFamily: "'Roboto Mono', monospace" }}>
            Level 3
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center gap-3">
          <div className="rounded-lg p-5 text-center"
            style={{
              background: '#1E1616',
              boxShadow: '0 16px 48px rgba(10,4,0,0.6), 0 0 0 1px rgba(255,107,0,0.1)',
            }}>
            <div className="text-[12px] text-[#FFF8F0]" style={{ fontFamily: "'Roboto Mono', monospace" }}>
              Modal
            </div>
            <div className="text-[11px] text-[#B8976A] mt-1" style={{ fontFamily: "'Roboto Mono', monospace" }}>
              Content area
            </div>
          </div>
          <div className="text-[10px] text-[#B8976A]" style={{ fontFamily: "'Roboto Mono', monospace" }}>
            Level 4
          </div>
        </div>
      </div>

      {/* Text on Surfaces */}
      <h3 className="text-2xl font-bold mb-6"
        style={{ fontFamily: "'Averia Serif Libre', serif", color: '#FFF8F0' }}>Texto sobre Superficies</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {elevations.map((s) => (
          <div key={`text-${s.level}`} className="rounded-lg p-5 border border-white/5" style={{ background: s.hex }}>
            <div className="text-[10px] text-[#FF6B00] uppercase tracking-[0.1em] mb-3"
              style={{ fontFamily: "'Roboto Mono', monospace" }}>Level {s.level} ({s.hex})</div>
            <div className="text-[14px] mb-1.5" style={{ fontFamily: "'Roboto Mono', monospace", color: 'rgba(255,248,240,0.92)' }}>
              Primary 92%
            </div>
            <div className="text-[14px] mb-1.5" style={{ fontFamily: "'Roboto Mono', monospace", color: 'rgba(255,248,240,0.68)' }}>
              Secondary 68%
            </div>
            <div className="text-[14px] mb-1.5" style={{ fontFamily: "'Roboto Mono', monospace", color: 'rgba(255,248,240,0.45)' }}>
              Tertiary 45%
            </div>
            <div className="text-[14px]" style={{ fontFamily: "'Roboto Mono', monospace", color: 'rgba(255,248,240,0.28)' }}>
              Disabled 28%
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Elevation;
