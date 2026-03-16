const TypeSpecimen = ({ label, children, meta }: { label: string; children: React.ReactNode; meta: string }) => (
  <div className="p-8 rounded-lg mb-6 border border-white/5" style={{ background: '#2F353A' }}>
    <div className="text-[11px] tracking-[0.1em] uppercase text-[#00E5FF] mb-3"
      style={{ fontFamily: "'Roboto Mono', monospace" }}>{label}</div>
    {children}
    <div className="text-[12px] text-[#A9A9A9] mt-3 pt-3 border-t border-white/5"
      style={{ fontFamily: "'Roboto Mono', monospace" }}>{meta}</div>
  </div>
);

const Typography = () => (
  <section className="pb-24 border-b border-[#00E5FF]/10">
    <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#00E5FF] mb-3"
      style={{ fontFamily: "'Roboto Mono', monospace" }}>03 / Sistema Tipográfico</p>
    <h2 className="text-[42px] font-bold leading-tight mb-6"
      style={{ fontFamily: "'Averia Serif Libre', serif", color: '#FDF5E6' }}>Tipografia do Bunker</h2>
    <p className="text-[15px] text-[#A9A9A9] max-w-[700px] mb-12 leading-relaxed"
      style={{ fontFamily: "'Roboto Mono', monospace" }}>
      Display em Averia Serif Libre para títulos e impacto. Corpo em Roboto Mono para leitura técnica. Métricas em Orbitron para números.
    </p>

    <TypeSpecimen label="Display — Averia Serif Libre 700"
      meta="Uso: H1, H2, títulos hero, headings de seção • 48px / 3rem • Bold 700 • Line-height 1.15">
      <div style={{ fontFamily: "'Averia Serif Libre', serif", fontSize: 48, fontWeight: 700, lineHeight: 1.15, color: '#FDF5E6' }}>
        Nós somos o bunker.
      </div>
    </TypeSpecimen>

    <TypeSpecimen label="Display Alt — Cinzel 900"
      meta="Uso: Logo, marca d'água, elementos premium • 42px • Black 900 • Letter-spacing 0.08em">
      <div style={{ fontFamily: "'Cinzel', serif", fontSize: 42, fontWeight: 900, letterSpacing: '0.08em', color: '#FDF5E6' }}>
        BUNKER DA IA
      </div>
    </TypeSpecimen>

    <TypeSpecimen label="Heading — Averia Serif Libre 700"
      meta="Uso: H3, subtítulos, cards • 28px / 1.75rem • Bold 700 • Line-height 1.3">
      <div style={{ fontFamily: "'Averia Serif Libre', serif", fontSize: 28, fontWeight: 700, lineHeight: 1.3, color: '#FDF5E6' }}>
        Implementação sobre informação.
      </div>
    </TypeSpecimen>

    <TypeSpecimen label="Body — Roboto Mono 400"
      meta="Uso: Parágrafos, descrições, UI • 16px / 1rem • Regular 400 • Line-height 1.6">
      <div style={{ fontFamily: "'Roboto Mono', monospace", fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: '#FDF5E6' }}>
        A diferença entre quem está faturando com IA e quem ainda está estudando não é talento. É implementação assistida. O Bunker não foi criado para te ensinar IA. Foi criado porque ninguém te ajudava a USAR.
      </div>
    </TypeSpecimen>

    <TypeSpecimen label="Metric — Orbitron 700"
      meta="Uso: Números de impacto, métricas, preços • Variável • Bold 700 • Color Cyber Cyan">
      <div style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 56, fontWeight: 700, color: '#00E5FF', letterSpacing: '0.05em' }}>
        R$250<span style={{ fontSize: 20, color: '#A9A9A9' }}>/ano</span>
      </div>
    </TypeSpecimen>

    <TypeSpecimen label="Overline — Roboto Mono 500 Uppercase"
      meta="Uso: Labels, categorias, seções • 11px • Medium 500 • Uppercase • Letter-spacing 0.15em">
      <div style={{ fontFamily: "'Roboto Mono', monospace", fontSize: 11, fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#00E5FF' }}>
        DESIGN SYSTEM • IDENTIDADE VISUAL • COMUNIDADE
      </div>
    </TypeSpecimen>

    {/* Aging Effect */}
    <h3 className="text-2xl font-bold mb-4 mt-10"
      style={{ fontFamily: "'Averia Serif Libre', serif", color: '#FDF5E6' }}>
      Efeito de Envelhecimento
    </h3>
    <div className="p-8 rounded-lg border border-white/5 text-center" style={{ background: '#2F353A' }}>
      <div style={{
        fontFamily: "'Averia Serif Libre', serif",
        fontSize: 56,
        fontWeight: 700,
        background: 'linear-gradient(135deg, #FDF5E6 0%, #CD7F32 40%, #FDF5E6 60%, #A9A9A9 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}>
        Contra o algoritmo do caos.
      </div>
      <div className="text-[12px] text-[#A9A9A9] mt-3 pt-3 border-t border-white/5"
        style={{ fontFamily: "'Roboto Mono', monospace" }}>
        CSS: background-clip: text com gradiente Aged White → Bronze Patina → Silver
      </div>
    </div>
  </section>
);

export default Typography;
