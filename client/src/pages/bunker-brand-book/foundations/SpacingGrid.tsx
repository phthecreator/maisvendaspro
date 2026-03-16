const spacingScale = [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128];

const breakpoints = [
  { name: 'xs', width: 480, icon: '[ ]', desc: 'Mobile small' },
  { name: 'sm', width: 640, icon: '[  ]', desc: 'Mobile large' },
  { name: 'md', width: 768, icon: '[   ]', desc: 'Tablet portrait' },
  { name: 'lg', width: 1024, icon: '[    ]', desc: 'Tablet landscape / Desktop' },
  { name: 'xl', width: 1280, icon: '[     ]', desc: 'Desktop wide' },
  { name: '2xl', width: 1440, icon: '[      ]', desc: 'Desktop ultrawide' },
  { name: '3xl', width: 1536, icon: '[       ]', desc: 'Large monitors' },
];

const semanticSpacing = [
  { type: 'Inset', desc: 'Padding interno de componentes', sizes: ['inset-xs: 4px', 'inset-sm: 8px', 'inset-md: 16px', 'inset-lg: 24px', 'inset-xl: 32px'] },
  { type: 'Stack', desc: 'Espacamento vertical entre elementos', sizes: ['stack-xs: 4px', 'stack-sm: 8px', 'stack-md: 16px', 'stack-lg: 24px', 'stack-xl: 48px'] },
  { type: 'Inline', desc: 'Espacamento horizontal entre elementos', sizes: ['inline-xs: 4px', 'inline-sm: 8px', 'inline-md: 12px', 'inline-lg: 16px', 'inline-xl: 24px'] },
];

const SpacingGrid = () => (
  <section className="pb-24 border-b border-[#00E5FF]/10">
    <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#00E5FF] mb-3"
      style={{ fontFamily: "'Roboto Mono', monospace" }}>05 / Espacamento &amp; Grid</p>
    <h2 className="text-[42px] font-bold leading-tight mb-6"
      style={{ fontFamily: "'Averia Serif Libre', serif", color: '#FDF5E6' }}>Tokens de Espacamento</h2>
    <p className="text-[15px] text-[#A9A9A9] max-w-[700px] mb-12 leading-relaxed"
      style={{ fontFamily: "'Roboto Mono', monospace" }}>
      Escala de espacamento baseada em multiplos de 4px. Tokens semanticos para padding, stack e inline garantem consistencia em todo o sistema.
    </p>

    {/* Spacing Scale */}
    <h3 className="text-2xl font-bold mb-6"
      style={{ fontFamily: "'Averia Serif Libre', serif", color: '#FDF5E6' }}>Escala Visual</h3>
    <div className="space-y-3 mb-12">
      {spacingScale.map((size) => (
        <div key={size} className="flex items-center gap-4">
          <div className="w-16 text-right text-[12px] text-[#A9A9A9] flex-shrink-0"
            style={{ fontFamily: "'Roboto Mono', monospace" }}>{size}px</div>
          <div className="h-6 rounded-sm flex-shrink-0" style={{
            width: Math.min(size * 2, 600),
            background: `linear-gradient(90deg, rgba(0,229,255,0.6), rgba(58,134,255,0.4))`,
          }} />
          <div className="text-[11px] text-[#A9A9A9] flex-shrink-0"
            style={{ fontFamily: "'Roboto Mono', monospace" }}>
            space-{size}
          </div>
        </div>
      ))}
    </div>

    {/* Semantic Spacing */}
    <h3 className="text-2xl font-bold mb-6"
      style={{ fontFamily: "'Averia Serif Libre', serif", color: '#FDF5E6' }}>Espacamento Semantico</h3>
    <div className="grid grid-cols-3 gap-6 mb-12">
      {semanticSpacing.map((s) => (
        <div key={s.type} className="p-6 rounded-lg border border-white/5" style={{ background: '#2F353A' }}>
          <div className="text-[11px] text-[#00E5FF] uppercase tracking-[0.1em] mb-1"
            style={{ fontFamily: "'Roboto Mono', monospace" }}>{s.type}</div>
          <div className="text-[13px] text-[#A9A9A9] mb-4" style={{ fontFamily: "'Roboto Mono', monospace" }}>
            {s.desc}
          </div>
          <div className="space-y-1.5">
            {s.sizes.map((sz) => (
              <div key={sz} className="text-[11px] text-[#FDF5E6]" style={{ fontFamily: "'Roboto Mono', monospace" }}>
                {sz}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>

    {/* 12 Column Grid */}
    <h3 className="text-2xl font-bold mb-4"
      style={{ fontFamily: "'Averia Serif Libre', serif", color: '#FDF5E6' }}>Grid de 12 Colunas</h3>
    <p className="text-[13px] text-[#A9A9A9] mb-6" style={{ fontFamily: "'Roboto Mono', monospace" }}>
      Grid flexivel com gutter de 24px. Responsivo com colapso automatico em breakpoints menores.
    </p>
    <div className="rounded-lg p-4 border border-white/5 mb-3" style={{ background: '#1A1E22' }}>
      <div className="grid grid-cols-12 gap-2">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="h-16 rounded flex items-center justify-center text-[11px]"
            style={{
              fontFamily: "'Roboto Mono', monospace",
              background: 'rgba(0,229,255,0.12)',
              border: '1px solid rgba(0,229,255,0.2)',
              color: '#00E5FF',
            }}>
            {i + 1}
          </div>
        ))}
      </div>
    </div>
    <div className="rounded-lg p-4 border border-white/5 mb-3" style={{ background: '#1A1E22' }}>
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-4 h-12 rounded flex items-center justify-center text-[11px]"
          style={{ fontFamily: "'Roboto Mono', monospace", background: 'rgba(205,127,50,0.15)', border: '1px solid rgba(205,127,50,0.25)', color: '#CD7F32' }}>
          span-4
        </div>
        <div className="col-span-4 h-12 rounded flex items-center justify-center text-[11px]"
          style={{ fontFamily: "'Roboto Mono', monospace", background: 'rgba(205,127,50,0.15)', border: '1px solid rgba(205,127,50,0.25)', color: '#CD7F32' }}>
          span-4
        </div>
        <div className="col-span-4 h-12 rounded flex items-center justify-center text-[11px]"
          style={{ fontFamily: "'Roboto Mono', monospace", background: 'rgba(205,127,50,0.15)', border: '1px solid rgba(205,127,50,0.25)', color: '#CD7F32' }}>
          span-4
        </div>
      </div>
    </div>
    <div className="rounded-lg p-4 border border-white/5 mb-12" style={{ background: '#1A1E22' }}>
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

    {/* Breakpoints */}
    <h3 className="text-2xl font-bold mb-4"
      style={{ fontFamily: "'Averia Serif Libre', serif", color: '#FDF5E6' }}>Breakpoints</h3>
    <table className="w-full text-[13px] mb-12" style={{ fontFamily: "'Roboto Mono', monospace" }}>
      <thead>
        <tr className="border-b border-[#00E5FF]/20">
          <th className="text-left py-2.5 px-3 text-[11px] tracking-[0.1em] uppercase text-[#00E5FF] font-medium">Token</th>
          <th className="text-left py-2.5 px-3 text-[11px] tracking-[0.1em] uppercase text-[#00E5FF] font-medium">Largura</th>
          <th className="text-left py-2.5 px-3 text-[11px] tracking-[0.1em] uppercase text-[#00E5FF] font-medium">Icone</th>
          <th className="text-left py-2.5 px-3 text-[11px] tracking-[0.1em] uppercase text-[#00E5FF] font-medium">Descricao</th>
        </tr>
      </thead>
      <tbody>
        {breakpoints.map((bp) => (
          <tr key={bp.name} className="border-b border-white/[0.03]">
            <td className="py-2.5 px-3 text-[#FDF5E6]">{bp.name}</td>
            <td className="py-2.5 px-3 text-[#00E5FF]">{bp.width}px</td>
            <td className="py-2.5 px-3 text-[#A9A9A9]">{bp.icon}</td>
            <td className="py-2.5 px-3 text-[#A9A9A9]">{bp.desc}</td>
          </tr>
        ))}
      </tbody>
    </table>

    {/* Container Widths */}
    <h3 className="text-2xl font-bold mb-4"
      style={{ fontFamily: "'Averia Serif Libre', serif", color: '#FDF5E6' }}>Larguras de Container</h3>
    <div className="space-y-3">
      {[
        { name: 'xs', width: 480 },
        { name: 'sm', width: 640 },
        { name: 'md', width: 768 },
        { name: 'lg', width: 1024 },
        { name: 'xl', width: 1280 },
        { name: '2xl', width: 1440 },
      ].map((c) => (
        <div key={c.name} className="relative">
          <div className="h-10 rounded flex items-center px-4 text-[11px]"
            style={{
              width: `${Math.min((c.width / 1440) * 100, 100)}%`,
              fontFamily: "'Roboto Mono', monospace",
              background: 'rgba(0,229,255,0.06)',
              border: '1px solid rgba(0,229,255,0.15)',
              color: '#00E5FF',
            }}>
            container-{c.name}: {c.width}px
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default SpacingGrid;
