const spacingScale = [8, 16, 24, 32, 48, 64, 80, 96];

const breakpoints = [
  { name: 'xs', width: 480, desc: 'Mobile small' },
  { name: 'sm', width: 640, desc: 'Mobile large' },
  { name: 'md', width: 768, desc: 'Tablet portrait' },
  { name: 'lg', width: 1024, desc: 'Tablet landscape / Desktop' },
  { name: 'xl', width: 1280, desc: 'Desktop wide' },
  { name: '2xl', width: 1440, desc: 'Desktop ultrawide' },
];

const SpacingGrid = () => (
  <section>
    <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#FF6B00] mb-3"
      style={{ fontFamily: "'Roboto Mono', monospace" }}>05 / Espacamento &amp; Grid</p>
    <h2 className="text-[42px] font-bold leading-tight mb-6"
      style={{ fontFamily: "'Averia Serif Libre', serif", color: '#FFF8F0' }}>Tokens de Espacamento</h2>
    <p className="text-[15px] text-[#B8976A] max-w-[700px] mb-12 leading-relaxed"
      style={{ fontFamily: "'Roboto Mono', monospace" }}>
      Escala de espacamento baseada em multiplos de 8px. Unidade base para garantir ritmo visual consistente em todo o sistema da Forja.
    </p>

    {/* 8px Base Unit Visualization */}
    <h3 className="text-2xl font-bold mb-6"
      style={{ fontFamily: "'Averia Serif Libre', serif", color: '#FFF8F0' }}>Unidade Base — 8px</h3>
    <div className="space-y-3 mb-12">
      {spacingScale.map((size) => (
        <div key={size} className="flex items-center gap-4">
          <div className="w-16 text-right text-[12px] text-[#B8976A] flex-shrink-0"
            style={{ fontFamily: "'Roboto Mono', monospace" }}>{size}px</div>
          <div className="h-6 rounded-sm flex-shrink-0" style={{
            width: Math.min(size * 2.5, 600),
            background: `linear-gradient(90deg, rgba(255,107,0,0.6), rgba(255,168,0,0.4))`,
          }} />
          <div className="text-[11px] text-[#B8976A] flex-shrink-0"
            style={{ fontFamily: "'Roboto Mono', monospace" }}>
            space-{size} ({size / 8}x)
          </div>
        </div>
      ))}
    </div>

    {/* Grid Overlay Demo */}
    <h3 className="text-2xl font-bold mb-4"
      style={{ fontFamily: "'Averia Serif Libre', serif", color: '#FFF8F0' }}>Grid de 12 Colunas</h3>
    <p className="text-[13px] text-[#B8976A] mb-6" style={{ fontFamily: "'Roboto Mono', monospace" }}>
      Grid flexivel com gutter de 24px. Responsivo com colapso automatico em breakpoints menores.
    </p>
    <div className="overflow-x-auto mb-1">
      <div className="rounded-lg p-4 border border-white/5" style={{ background: '#0A0400', minWidth: 600 }}>
        <div className="grid grid-cols-12 gap-2">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="h-16 rounded flex items-center justify-center text-[11px]"
              style={{
                fontFamily: "'Roboto Mono', monospace",
                background: 'rgba(255,107,0,0.12)',
                border: '1px solid rgba(255,107,0,0.2)',
                color: '#FF6B00',
              }}>
              {i + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
    <p className="text-xs text-center opacity-50 mt-2 md:hidden" style={{ fontFamily: "'Roboto Mono', monospace" }}>&larr; Deslize para ver &rarr;</p>
    <div className="overflow-x-auto mb-1 mt-3">
      <div className="rounded-lg p-4 border border-white/5" style={{ background: '#0A0400', minWidth: 600 }}>
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-4 h-12 rounded flex items-center justify-center text-[11px]"
            style={{ fontFamily: "'Roboto Mono', monospace", background: 'rgba(255,215,0,0.12)', border: '1px solid rgba(255,215,0,0.2)', color: '#FFD700' }}>
            span-4
          </div>
          <div className="col-span-4 h-12 rounded flex items-center justify-center text-[11px]"
            style={{ fontFamily: "'Roboto Mono', monospace", background: 'rgba(255,215,0,0.12)', border: '1px solid rgba(255,215,0,0.2)', color: '#FFD700' }}>
            span-4
          </div>
          <div className="col-span-4 h-12 rounded flex items-center justify-center text-[11px]"
            style={{ fontFamily: "'Roboto Mono', monospace", background: 'rgba(255,215,0,0.12)', border: '1px solid rgba(255,215,0,0.2)', color: '#FFD700' }}>
            span-4
          </div>
        </div>
      </div>
    </div>
    <p className="text-xs text-center opacity-50 mt-2 md:hidden" style={{ fontFamily: "'Roboto Mono', monospace" }}>&larr; Deslize para ver &rarr;</p>
    <div className="overflow-x-auto mb-1 mt-3">
      <div className="rounded-lg p-4 border border-white/5" style={{ background: '#0A0400', minWidth: 600 }}>
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-3 h-12 rounded flex items-center justify-center text-[11px]"
            style={{ fontFamily: "'Roboto Mono', monospace", background: 'rgba(52,199,89,0.12)', border: '1px solid rgba(52,199,89,0.2)', color: '#34C759' }}>
            span-3
          </div>
          <div className="col-span-6 h-12 rounded flex items-center justify-center text-[11px]"
            style={{ fontFamily: "'Roboto Mono', monospace", background: 'rgba(52,199,89,0.12)', border: '1px solid rgba(52,199,89,0.2)', color: '#34C759' }}>
            span-6
          </div>
          <div className="col-span-3 h-12 rounded flex items-center justify-center text-[11px]"
            style={{ fontFamily: "'Roboto Mono', monospace", background: 'rgba(52,199,89,0.12)', border: '1px solid rgba(52,199,89,0.2)', color: '#34C759' }}>
            span-3
          </div>
        </div>
      </div>
    </div>
    <p className="text-xs text-center opacity-50 mt-2 mb-12 md:hidden" style={{ fontFamily: "'Roboto Mono', monospace" }}>&larr; Deslize para ver &rarr;</p>

    {/* Responsive Breakpoints Table */}
    <h3 className="text-2xl font-bold mb-4"
      style={{ fontFamily: "'Averia Serif Libre', serif", color: '#FFF8F0' }}>Breakpoints Responsivos</h3>
    <div className="overflow-x-auto mb-12">
    <table className="w-full text-[13px]" style={{ fontFamily: "'Roboto Mono', monospace" }}>
      <thead>
        <tr className="border-b border-[#FF6B00]/20">
          <th className="text-left py-2.5 px-3 text-[11px] tracking-[0.1em] uppercase text-[#FF6B00] font-medium">Token</th>
          <th className="text-left py-2.5 px-3 text-[11px] tracking-[0.1em] uppercase text-[#FF6B00] font-medium">Min Width</th>
          <th className="text-left py-2.5 px-3 text-[11px] tracking-[0.1em] uppercase text-[#FF6B00] font-medium">Descricao</th>
          <th className="text-left py-2.5 px-3 text-[11px] tracking-[0.1em] uppercase text-[#FF6B00] font-medium">Colunas</th>
        </tr>
      </thead>
      <tbody>
        {breakpoints.map((bp) => (
          <tr key={bp.name} className="border-b border-white/[0.03]">
            <td className="py-2.5 px-3 text-[#FFF8F0]">{bp.name}</td>
            <td className="py-2.5 px-3 text-[#FF6B00]">{bp.width}px</td>
            <td className="py-2.5 px-3 text-[#B8976A]">{bp.desc}</td>
            <td className="py-2.5 px-3 text-[#B8976A]">{bp.width < 640 ? '1-2' : bp.width < 1024 ? '2-6' : '12'}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>

    {/* Container Widths */}
    <h3 className="text-2xl font-bold mb-4"
      style={{ fontFamily: "'Averia Serif Libre', serif", color: '#FFF8F0' }}>Larguras de Container</h3>
    <div className="space-y-3">
      {breakpoints.map((c) => (
        <div key={c.name} className="relative">
          <div className="h-10 rounded flex items-center px-4 text-[11px]"
            style={{
              width: `${Math.min((c.width / 1440) * 100, 100)}%`,
              fontFamily: "'Roboto Mono', monospace",
              background: 'rgba(255,107,0,0.06)',
              border: '1px solid rgba(255,107,0,0.15)',
              color: '#FF6B00',
            }}>
            container-{c.name}: {c.width}px
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default SpacingGrid;
