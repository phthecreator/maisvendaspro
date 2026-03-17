interface TexturePanelProps {
  label: string;
  style: React.CSSProperties;
  overlay?: React.ReactNode;
  css?: string;
}

const TexturePanel = ({ label, style, overlay, css }: TexturePanelProps) => (
  <div className="h-48 rounded-lg relative overflow-hidden border border-white/5" style={style}>
    {overlay}
    <div className="absolute bottom-0 left-0 right-0 px-4 py-3"
      style={{ background: 'linear-gradient(transparent, rgba(0,0,0,0.8))', fontFamily: "'Roboto Mono', monospace", color: '#FFF8F0' }}>
      <div className="text-[12px] font-medium">{label}</div>
      {css && <div className="text-[10px] text-[#B8976A] mt-0.5 opacity-70">{css}</div>}
    </div>
  </div>
);

const Textures = () => (
  <section>
    <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#FF6B00] mb-3"
      style={{ fontFamily: "'Roboto Mono', monospace" }}>04 / Texturas &amp; Padroes</p>
    <h2 className="text-[42px] font-bold leading-tight mb-6"
      style={{ fontFamily: "'Averia Serif Libre', serif", color: '#FFF8F0' }}>Biblioteca de Texturas</h2>
    <p className="text-[15px] text-[#B8976A] max-w-[700px] mb-12 leading-relaxed"
      style={{ fontFamily: "'Roboto Mono', monospace" }}>
      Texturas de metal forjado, brasa, linhas de calor e marcas do martelo. Novas texturas incluem ember grid, cross-hatch, glassmorphism e vignette. Combine em camadas com opacidade maxima de 40% cumulativa.
    </p>

    {/* Base Textures */}
    <h3 className="text-2xl font-bold mb-4"
      style={{ fontFamily: "'Averia Serif Libre', serif", color: '#FFF8F0' }}>Texturas Base</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-5">
      <TexturePanel label="Metal Forjado" css="repeating-linear-gradient" style={{
        background: `repeating-linear-gradient(90deg, rgba(42,24,16,0.3) 0px, rgba(42,24,16,0.3) 1px, transparent 1px, transparent 3px),
          linear-gradient(180deg, #2A1810, #1A0A00)`
      }} />
      <TexturePanel label="Brasa & Oxidacao" css="radial-gradient ellipse" style={{
        background: `radial-gradient(ellipse at 30% 40%, rgba(255,69,0,0.4) 0%, transparent 50%),
          radial-gradient(ellipse at 70% 60%, rgba(255,107,0,0.3) 0%, transparent 50%),
          linear-gradient(135deg, #2A1810, #1A0A00)`
      }} />
      <TexturePanel label="Linhas de Calor" css="grid + radial-gradient dots" style={{
        background: `linear-gradient(0deg, transparent 49%, rgba(255,107,0,0.08) 49%, rgba(255,107,0,0.08) 51%, transparent 51%),
          linear-gradient(90deg, transparent 49%, rgba(255,107,0,0.08) 49%, rgba(255,107,0,0.08) 51%, transparent 51%),
          radial-gradient(circle at 25% 25%, rgba(255,107,0,0.15) 1px, transparent 1px),
          radial-gradient(circle at 75% 75%, rgba(255,107,0,0.15) 1px, transparent 1px),
          #1A0A00`,
        backgroundSize: '40px 40px, 40px 40px, 40px 40px, 40px 40px',
      }} />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
      <TexturePanel label="Marcas do Martelo" css="diagonal linear-gradients" style={{
        background: `linear-gradient(47deg, transparent 40%, rgba(184,151,106,0.1) 40.5%, rgba(184,151,106,0.1) 41%, transparent 41.5%),
          linear-gradient(-30deg, transparent 60%, rgba(184,151,106,0.08) 60.5%, rgba(184,151,106,0.08) 61%, transparent 61.5%),
          linear-gradient(15deg, transparent 75%, rgba(184,151,106,0.06) 75.5%, rgba(184,151,106,0.06) 76%, transparent 76.5%),
          #2A1810`
      }} />
      <TexturePanel label="Heat Lines (CRT)" css="repeating-linear-gradient 2px" style={{
        background: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,107,0,0.03) 2px, rgba(255,107,0,0.03) 4px),
          radial-gradient(ellipse at 50% 0%, rgba(255,107,0,0.08) 0%, transparent 60%),
          #1A0A00`
      }} />
      <TexturePanel label="Grain / Noise (5%)" css="SVG feTurbulence filter" style={{ background: '#2A1810' }}
        overlay={
          <div className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E")`,
              backgroundSize: '256px 256px',
            }} />
        } />
    </div>

    {/* New Textures */}
    <h3 className="text-2xl font-bold mb-4"
      style={{ fontFamily: "'Averia Serif Libre', serif", color: '#FFF8F0' }}>Novas Texturas</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-5">
      <TexturePanel label="Ember Grid" css="radial-gradient 1px dots, 24px spacing" style={{
        background: `radial-gradient(circle, rgba(255,107,0,0.06) 1px, transparent 1px), #1A0A00`,
        backgroundSize: '24px 24px',
      }} />
      <TexturePanel label="Cross-Hatch" css="45deg/-45deg linear-gradients 8px" style={{
        background: `linear-gradient(45deg, rgba(255,255,255,0.02) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.02) 50%, rgba(255,255,255,0.02) 75%, transparent 75%),
          linear-gradient(-45deg, rgba(255,255,255,0.02) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.02) 50%, rgba(255,255,255,0.02) 75%, transparent 75%),
          #2A1810`,
        backgroundSize: '8px 8px, 8px 8px',
      }} />
      <TexturePanel label="Mesh Gradient" css="multiple radial-gradients 3-5%" style={{
        background: `radial-gradient(ellipse at 20% 30%, rgba(255,107,0,0.05) 0%, transparent 50%),
          radial-gradient(ellipse at 80% 20%, rgba(255,215,0,0.04) 0%, transparent 50%),
          radial-gradient(ellipse at 50% 70%, rgba(255,168,0,0.03) 0%, transparent 50%),
          radial-gradient(ellipse at 30% 80%, rgba(255,69,0,0.04) 0%, transparent 50%),
          #1A0A00`
      }} />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      <TexturePanel label="Glassmorphism" css="backdrop-filter: blur(16px)" style={{
        background: 'rgba(255,255,255,0.04)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(255,255,255,0.08)',
      }}
        overlay={
          <div className="absolute inset-0 -z-10" style={{
            background: `radial-gradient(ellipse at 30% 40%, rgba(255,107,0,0.15) 0%, transparent 50%),
              radial-gradient(ellipse at 70% 60%, rgba(255,215,0,0.1) 0%, transparent 50%),
              #1A0A00`
          }} />
        } />
      <TexturePanel label="Vignette" css="box-shadow: inset 0 0 150px" style={{
        background: '#2A1810',
        boxShadow: 'inset 0 0 150px rgba(10,4,0,0.6)',
      }} />
      <div className="h-48 rounded-lg relative overflow-hidden border border-white/5" style={{ background: '#1A0A00' }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-[11px] text-[#B8976A] text-center px-4" style={{ fontFamily: "'Roboto Mono', monospace" }}>
            Combine texturas<br />usando z-index layers
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 px-4 py-3"
          style={{ background: 'linear-gradient(transparent, rgba(0,0,0,0.8))', fontFamily: "'Roboto Mono', monospace", color: '#FFF8F0' }}>
          <div className="text-[12px] font-medium">Composicao (ver abaixo)</div>
        </div>
      </div>
    </div>

    {/* Layering Demo */}
    <h3 className="text-2xl font-bold mb-4"
      style={{ fontFamily: "'Averia Serif Libre', serif", color: '#FFF8F0' }}>Composicao em Camadas</h3>
    <p className="text-[13px] text-[#B8976A] mb-6" style={{ fontFamily: "'Roboto Mono', monospace" }}>
      5 passos para compor texturas: Base &rarr; Mesh &rarr; Noise &rarr; Pattern &rarr; Vignette. Opacidade total max 40%.
    </p>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {[
        { step: '1. Base', bg: '#1A0A00', extra: {} },
        { step: '2. + Mesh', bg: `radial-gradient(ellipse at 20% 30%, rgba(255,107,0,0.05) 0%, transparent 50%), radial-gradient(ellipse at 80% 70%, rgba(255,215,0,0.03) 0%, transparent 50%), #1A0A00`, extra: {} },
        { step: '3. + Noise', bg: '#1A0A00', extra: { position: 'relative' as const } },
        { step: '4. + Pattern', bg: `radial-gradient(circle, rgba(255,107,0,0.06) 1px, transparent 1px), radial-gradient(ellipse at 20% 30%, rgba(255,107,0,0.05) 0%, transparent 50%), #1A0A00`, extra: { backgroundSize: '24px 24px, 100% 100%, 100% 100%' } },
        { step: '5. + Vignette', bg: `radial-gradient(circle, rgba(255,107,0,0.06) 1px, transparent 1px), radial-gradient(ellipse at 20% 30%, rgba(255,107,0,0.05) 0%, transparent 50%), #1A0A00`, extra: { backgroundSize: '24px 24px, 100% 100%, 100% 100%', boxShadow: 'inset 0 0 80px rgba(10,4,0,0.6)' } },
      ].map((layer, i) => (
        <div key={i} className="h-36 rounded-lg border border-white/5 flex items-end p-3 relative overflow-hidden"
          style={{ background: layer.bg, ...layer.extra }}>
          {i === 2 && (
            <div className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E")`,
                backgroundSize: '256px 256px',
              }} />
          )}
          <span className="text-[10px] bg-black/60 px-2 py-0.5 rounded relative z-10"
            style={{ fontFamily: "'Roboto Mono', monospace", color: '#FFF8F0' }}>{layer.step}</span>
        </div>
      ))}
    </div>
  </section>
);

export default Textures;
