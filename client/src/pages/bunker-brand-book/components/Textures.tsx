interface TexturePanelProps {
  label: string;
  style: React.CSSProperties;
  overlay?: React.ReactNode;
}

const TexturePanel = ({ label, style, overlay }: TexturePanelProps) => (
  <div className="h-48 rounded-lg relative overflow-hidden border border-white/5" style={style}>
    {overlay}
    <div className="absolute bottom-0 left-0 right-0 px-4 py-3 text-[12px] font-medium"
      style={{ background: 'linear-gradient(transparent, rgba(0,0,0,0.8))', fontFamily: "'Roboto Mono', monospace", color: '#FDF5E6' }}>
      {label}
    </div>
  </div>
);

const Textures = () => (
  <section className="pb-24 border-b border-[#00E5FF]/10">
    <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#00E5FF] mb-3"
      style={{ fontFamily: "'Roboto Mono', monospace" }}>04 / Texturas &amp; Padrões</p>
    <h2 className="text-[42px] font-bold leading-tight mb-6"
      style={{ fontFamily: "'Averia Serif Libre', serif", color: '#FDF5E6' }}>Biblioteca de Texturas</h2>
    <p className="text-[15px] text-[#A9A9A9] max-w-[700px] mb-12 leading-relaxed"
      style={{ fontFamily: "'Roboto Mono', monospace" }}>
      Texturas de metal envelhecido, ferrugem, circuitos e marcas de batalha. Combinadas em camadas com opacidade máxima de 40% cumulativa.
    </p>

    <div className="grid grid-cols-3 gap-6 mb-5">
      <TexturePanel label="Metal Escovado" style={{
        background: `repeating-linear-gradient(90deg, rgba(47,53,58,0.3) 0px, rgba(47,53,58,0.3) 1px, transparent 1px, transparent 3px),
          linear-gradient(180deg, #2F353A, #1A1E22)`
      }} />
      <TexturePanel label="Ferrugem & Oxidação" style={{
        background: `radial-gradient(ellipse at 30% 40%, rgba(139,69,19,0.6) 0%, transparent 50%),
          radial-gradient(ellipse at 70% 60%, rgba(205,127,50,0.4) 0%, transparent 50%),
          linear-gradient(135deg, #2F353A, #1A1E22)`
      }} />
      <TexturePanel label="Linhas de Circuito" style={{
        background: `linear-gradient(0deg, transparent 49%, rgba(0,229,255,0.08) 49%, rgba(0,229,255,0.08) 51%, transparent 51%),
          linear-gradient(90deg, transparent 49%, rgba(0,229,255,0.08) 49%, rgba(0,229,255,0.08) 51%, transparent 51%),
          radial-gradient(circle at 25% 25%, rgba(0,229,255,0.15) 1px, transparent 1px),
          radial-gradient(circle at 75% 75%, rgba(0,229,255,0.15) 1px, transparent 1px),
          #1A1E22`,
        backgroundSize: '40px 40px, 40px 40px, 40px 40px, 40px 40px',
      }} />
    </div>

    <div className="grid grid-cols-3 gap-6">
      <TexturePanel label="Marcas de Batalha" style={{
        background: `linear-gradient(47deg, transparent 40%, rgba(169,169,169,0.1) 40.5%, rgba(169,169,169,0.1) 41%, transparent 41.5%),
          linear-gradient(-30deg, transparent 60%, rgba(169,169,169,0.08) 60.5%, rgba(169,169,169,0.08) 61%, transparent 61.5%),
          linear-gradient(15deg, transparent 75%, rgba(169,169,169,0.06) 75.5%, rgba(169,169,169,0.06) 76%, transparent 76.5%),
          #2F353A`
      }} />
      <TexturePanel label="Scan Lines (CRT)" style={{
        background: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,229,255,0.03) 2px, rgba(0,229,255,0.03) 4px),
          radial-gradient(ellipse at 50% 0%, rgba(0,229,255,0.08) 0%, transparent 60%),
          #1A1E22`
      }} />
      <TexturePanel label="Grain / Noise (8%)" style={{ background: '#2F353A' }}
        overlay={
          <div className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E")`,
              backgroundSize: '256px 256px',
            }} />
        } />
    </div>
  </section>
);

export default Textures;
