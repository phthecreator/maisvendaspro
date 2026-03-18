const TypeSpecimen = ({ label, children, meta, useCase }: { label: string; children: React.ReactNode; meta: string; useCase?: string }) => (
  <div className="p-8 rounded-lg mb-6 border border-white/5" style={{ background: '#2F353A' }}>
    <div className="flex items-center justify-between mb-3">
      <div className="text-[11px] tracking-[0.1em] uppercase text-[#00E5FF]"
        style={{ fontFamily: "'Roboto Mono', monospace" }}>{label}</div>
      {useCase && (
        <div className="text-[10px] text-[#A9A9A9] px-2 py-0.5 rounded" style={{
          fontFamily: "'Roboto Mono', monospace",
          background: 'rgba(0,229,255,0.08)',
          border: '1px solid rgba(0,229,255,0.15)',
        }}>{useCase}</div>
      )}
    </div>
    {children}
    <div className="text-[12px] text-[#A9A9A9] mt-3 pt-3 border-t border-white/5"
      style={{ fontFamily: "'Roboto Mono', monospace" }}>{meta}</div>
  </div>
);

const Typography = () => (
  <section>
    <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#00E5FF] mb-3"
      style={{ fontFamily: "'Roboto Mono', monospace" }}>03 / Sistema Tipografico</p>
    <h2 className="text-[42px] font-bold leading-tight mb-6"
      style={{ fontFamily: "'Averia Serif Libre', serif", color: '#FDF5E6' }}>Tipografia do Bunker</h2>
    <p className="text-[15px] text-[#A9A9A9] max-w-[700px] mb-12 leading-relaxed"
      style={{ fontFamily: "'Roboto Mono', monospace" }}>
      Escala tipografica completa com 4 familias: Cinzel para marca premium, Averia Serif Libre para display e headings, Roboto Mono para corpo e UI, Orbitron para numeros e metricas.
    </p>

    {/* Full Scale */}
    <h3 className="text-2xl font-bold mb-6"
      style={{ fontFamily: "'Averia Serif Libre', serif", color: '#FDF5E6' }}>Escala Completa</h3>

    <TypeSpecimen label="Display — Cinzel 900 — 64px"
      meta="Font: Cinzel | Size: 64px / 4rem | Weight: 900 Black | Line-height: 1.1 | Letter-spacing: 0.06em"
      useCase="Logo, marca, premium">
      <div className="text-3xl sm:text-4xl md:text-6xl" style={{ fontFamily: "'Cinzel', serif", fontWeight: 900, lineHeight: 1.1, letterSpacing: '0.06em', color: '#FDF5E6' }}>
        BUNKER DA IA
      </div>
    </TypeSpecimen>

    <TypeSpecimen label="H1 — Averia Serif Libre 700 — 48px"
      meta="Font: Averia Serif Libre | Size: 48px / 3rem | Weight: 700 Bold | Line-height: 1.15"
      useCase="Hero, page titles">
      <div style={{ fontFamily: "'Averia Serif Libre', serif", fontSize: 48, fontWeight: 700, lineHeight: 1.15, color: '#FDF5E6' }}>
        Nos somos o bunker.
      </div>
    </TypeSpecimen>

    <TypeSpecimen label="H2 — Averia Serif Libre 700 — 42px"
      meta="Font: Averia Serif Libre | Size: 42px / 2.625rem | Weight: 700 Bold | Line-height: 1.2"
      useCase="Section headings">
      <div style={{ fontFamily: "'Averia Serif Libre', serif", fontSize: 42, fontWeight: 700, lineHeight: 1.2, color: '#FDF5E6' }}>
        Contra o algoritmo do caos.
      </div>
    </TypeSpecimen>

    <TypeSpecimen label="H3 — Averia Serif Libre 700 — 28px"
      meta="Font: Averia Serif Libre | Size: 28px / 1.75rem | Weight: 700 Bold | Line-height: 1.3"
      useCase="Sub-sections, cards">
      <div style={{ fontFamily: "'Averia Serif Libre', serif", fontSize: 28, fontWeight: 700, lineHeight: 1.3, color: '#FDF5E6' }}>
        Implementacao sobre informacao.
      </div>
    </TypeSpecimen>

    <TypeSpecimen label="H4 — Roboto Mono 500 — 20px Uppercase"
      meta="Font: Roboto Mono | Size: 20px / 1.25rem | Weight: 500 Medium | Line-height: 1.4 | Uppercase | Tracking: 0.08em"
      useCase="Category labels, nav">
      <div style={{ fontFamily: "'Roboto Mono', monospace", fontSize: 20, fontWeight: 500, lineHeight: 1.4, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#FDF5E6' }}>
        SISTEMA DE DESIGN
      </div>
    </TypeSpecimen>

    <TypeSpecimen label="Body — Roboto Mono 400 — 16px"
      meta="Font: Roboto Mono | Size: 16px / 1rem | Weight: 400 Regular | Line-height: 1.6"
      useCase="Paragraphs, UI text">
      <div style={{ fontFamily: "'Roboto Mono', monospace", fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: '#FDF5E6' }}>
        A diferenca entre quem esta faturando com IA e quem ainda esta estudando nao e talento. E implementacao assistida. O Bunker nao foi criado para te ensinar IA. Foi criado porque ninguem te ajudava a USAR.
      </div>
    </TypeSpecimen>

    <TypeSpecimen label="Caption — Roboto Mono 400 — 13px"
      meta="Font: Roboto Mono | Size: 13px / 0.8125rem | Weight: 400 Regular | Line-height: 1.5"
      useCase="Descriptions, meta">
      <div style={{ fontFamily: "'Roboto Mono', monospace", fontSize: 13, fontWeight: 400, lineHeight: 1.5, color: '#A9A9A9' }}>
        Texto auxiliar para descricoes, metadados de cards, timestamps e informacoes complementares que nao precisam de destaque visual.
      </div>
    </TypeSpecimen>

    <TypeSpecimen label="Overline — Roboto Mono 500 — 11px Uppercase"
      meta="Font: Roboto Mono | Size: 11px / 0.6875rem | Weight: 500 Medium | Line-height: 1.4 | Uppercase | Tracking: 0.15em"
      useCase="Labels, sections, tags">
      <div style={{ fontFamily: "'Roboto Mono', monospace", fontSize: 11, fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#00E5FF' }}>
        DESIGN SYSTEM &bull; IDENTIDADE VISUAL &bull; COMUNIDADE
      </div>
    </TypeSpecimen>

    {/* Text Opacity Hierarchy */}
    <h3 className="text-2xl font-bold mb-4 mt-12"
      style={{ fontFamily: "'Averia Serif Libre', serif", color: '#FDF5E6' }}>
      Hierarquia de Opacidade
    </h3>
    <p className="text-[13px] text-[#A9A9A9] mb-6" style={{ fontFamily: "'Roboto Mono', monospace" }}>
      4 niveis de opacidade para criar hierarquia visual em texto sobre backgrounds escuros.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
      {[
        { label: 'Primary — 92%', opacity: 0.92, desc: 'Texto principal, titulos, conteudo de leitura.' },
        { label: 'Secondary — 68%', opacity: 0.68, desc: 'Texto de suporte, descricoes, placeholders ativos.' },
        { label: 'Tertiary — 45%', opacity: 0.45, desc: 'Informacao complementar, timestamps, metadados.' },
        { label: 'Disabled — 28%', opacity: 0.28, desc: 'Elementos desabilitados, hints, texto inativo.' },
      ].map((level) => (
        <div key={level.label} className="p-5 rounded-lg border border-white/5" style={{ background: '#1A1E22' }}>
          <div className="text-[11px] text-[#00E5FF] uppercase tracking-[0.1em] mb-2"
            style={{ fontFamily: "'Roboto Mono', monospace" }}>{level.label}</div>
          <div className="text-[15px] leading-relaxed"
            style={{ fontFamily: "'Roboto Mono', monospace", color: `rgba(253,245,230,${level.opacity})` }}>
            {level.desc}
          </div>
        </div>
      ))}
    </div>

    {/* Aged Gradient Text */}
    <h3 className="text-2xl font-bold mb-4"
      style={{ fontFamily: "'Averia Serif Libre', serif", color: '#FDF5E6' }}>
      Efeito de Envelhecimento
    </h3>
    <div className="p-8 rounded-lg border border-white/5 text-center mb-10" style={{ background: '#2F353A' }}>
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
        CSS: background-clip: text com gradiente Aged White &rarr; Bronze Patina &rarr; Silver
      </div>
    </div>

    {/* Metric Numbers */}
    <h3 className="text-2xl font-bold mb-4"
      style={{ fontFamily: "'Averia Serif Libre', serif", color: '#FDF5E6' }}>
      Numeros &amp; Metricas — Orbitron
    </h3>
    <p className="text-[13px] text-[#A9A9A9] mb-6" style={{ fontFamily: "'Roboto Mono', monospace" }}>
      Orbitron e reservada exclusivamente para numeros, metricas e dados de impacto. Nunca use para corpo de texto.
    </p>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {[
        { value: 'R$250', sub: '/ano', color: '#00E5FF' },
        { value: '147', sub: 'membros', color: '#CD7F32' },
        { value: '99.9%', sub: 'uptime', color: '#34C759' },
        { value: '2.4s', sub: 'response', color: '#3A86FF' },
      ].map((m) => (
        <div key={m.value} className="p-6 rounded-lg border border-white/5 text-center" style={{ background: '#1A1E22' }}>
          <div style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 42, fontWeight: 700, color: m.color, letterSpacing: '0.03em' }}>
            {m.value}
          </div>
          <div className="text-[13px] text-[#A9A9A9] mt-1" style={{ fontFamily: "'Roboto Mono', monospace" }}>
            {m.sub}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Typography;
