const Cover = () => (
  <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
    style={{ background: 'linear-gradient(180deg, #0d1117 0%, #1A1E22 50%, #2F353A 100%)' }}>
    {/* Scanline overlay */}
    <div className="absolute inset-0 pointer-events-none"
      style={{
        background: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,229,255,0.015) 2px, rgba(0,229,255,0.015) 4px),
          radial-gradient(ellipse at 50% 50%, rgba(0,229,255,0.05) 0%, transparent 70%)`
      }} />

    {/* Shield */}
    <div className="relative flex items-center justify-center mb-12"
      style={{
        width: 120,
        height: 140,
        border: '3px solid #CD7F32',
        borderRadius: '10px 10px 50% 50%',
        boxShadow: '0 0 40px rgba(205,127,50,0.2), inset 0 0 20px rgba(0,0,0,0.5)',
      }}>
      <span className="text-4xl" style={{ filter: 'sepia(1) saturate(2) hue-rotate(-10deg)' }}>
        🔒
      </span>
    </div>

    {/* Title */}
    <h1 className="text-6xl font-black tracking-[0.1em] mb-4"
      style={{
        fontFamily: "'Cinzel', serif",
        background: 'linear-gradient(135deg, #FDF5E6 0%, #CD7F32 40%, #FDF5E6 60%, #A9A9A9 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}>
      BUNKER DA IA
    </h1>

    <p className="text-sm tracking-[0.3em] uppercase mb-16"
      style={{ fontFamily: "'Roboto Mono', monospace", color: '#00E5FF' }}>
      Design System &amp; Brandbook Visual
    </p>

    <p className="text-xl italic max-w-[500px]"
      style={{ fontFamily: "'Averia Serif Libre', serif", color: '#A9A9A9' }}>
      "Nós somos o bunker. Somos a inteligência que resiste."
    </p>

    <span className="absolute bottom-8 text-[11px] tracking-[0.15em] uppercase opacity-50"
      style={{ fontFamily: "'Roboto Mono', monospace", color: '#A9A9A9' }}>
      v1.0.0 — Março 2026 — Heavy Metal Post-Apocalyptic • Cybernetic Detailing
    </span>
  </section>
);

export default Cover;
