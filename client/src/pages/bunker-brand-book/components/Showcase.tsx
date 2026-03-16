const Showcase = () => (
  <section className="pb-24">
    <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#00E5FF] mb-3"
      style={{ fontFamily: "'Roboto Mono', monospace" }}>06 / Showcase</p>
    <h2 className="text-[42px] font-bold leading-tight mb-6"
      style={{ fontFamily: "'Averia Serif Libre', serif", color: '#FDF5E6' }}>Composição Visual</h2>
    <p className="text-[15px] text-[#A9A9A9] max-w-[700px] mb-12 leading-relaxed"
      style={{ fontFamily: "'Roboto Mono', monospace" }}>
      Demonstração de como os elementos se combinam em composições reais.
    </p>

    {/* Hero Demo */}
    <div className="relative rounded-xl overflow-hidden text-center mb-10 px-12 py-20"
      style={{ background: 'linear-gradient(180deg, #0d1117 0%, #1A1E22 60%, #2F353A 100%)' }}>
      {/* Scanline overlay */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,229,255,0.02) 2px, rgba(0,229,255,0.02) 4px)' }} />

      <div className="relative z-10">
        <div className="text-[11px] tracking-[0.15em] uppercase text-[#00E5FF] mb-6"
          style={{ fontFamily: "'Roboto Mono', monospace" }}>
          Comunidade de Implementação com IA
        </div>
        <div className="mb-4" style={{
          fontFamily: "'Averia Serif Libre', serif",
          fontSize: 48,
          fontWeight: 700,
          lineHeight: 1.15,
          background: 'linear-gradient(135deg, #FDF5E6 0%, #CD7F32 40%, #FDF5E6 60%, #A9A9A9 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          Você já consumiu conteúdo suficiente.<br />Está na hora de implementar.
        </div>
        <div className="text-[15px] text-[#A9A9A9] max-w-[550px] mx-auto mb-8"
          style={{ fontFamily: "'Roboto Mono', monospace" }}>
          50 vídeos assistidos. Zero projetos no ar. A diferença não é talento — é implementação assistida.
        </div>
        <div className="flex gap-4 justify-center">
          <button className="inline-flex items-center gap-2 px-6 py-3 text-[13px] font-medium tracking-[0.05em] uppercase rounded"
            style={{ fontFamily: "'Roboto Mono', monospace", background: '#00E5FF', color: '#1A1E22', boxShadow: '0 0 20px rgba(0,229,255,0.3)' }}>
            Entrar no Inner Circle — R$250/ano
          </button>
          <button className="inline-flex items-center gap-2 px-6 py-3 text-[13px] font-medium tracking-[0.05em] uppercase rounded"
            style={{ fontFamily: "'Roboto Mono', monospace", background: 'transparent', color: '#00E5FF', border: '1px solid #00E5FF' }}>
            Ver como funciona
          </button>
        </div>
        <div className="mt-8 opacity-60 text-[13px] text-[#A9A9A9]"
          style={{ fontFamily: "'Orbitron', sans-serif" }}>
          147 membros • 89 projetos deployados • 34 primeiros clientes
        </div>
      </div>
    </div>

    {/* Pricing Card + Manifesto */}
    <div className="grid grid-cols-2 gap-6">
      {/* Pricing Card */}
      <div className="relative rounded-xl p-10" style={{ background: '#2F353A', border: '1px solid rgba(0,229,255,0.1)' }}>
        <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-xl"
          style={{ background: 'linear-gradient(90deg, transparent, #00E5FF, transparent)' }} />
        <div className="text-[11px] tracking-[0.15em] uppercase text-[#00E5FF] mb-2"
          style={{ fontFamily: "'Roboto Mono', monospace" }}>Inner Circle</div>
        <div style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 48, fontWeight: 700, color: '#FDF5E6' }}>
          R$250<span className="text-base text-[#A9A9A9]">/ano</span>
        </div>
        <div className="text-[13px] text-[#A9A9A9] mt-2 mb-6" style={{ fontFamily: "'Roboto Mono', monospace" }}>
          = R$20/mês = R$0,66/dia
        </div>
        <div className="text-sm leading-8" style={{ fontFamily: "'Roboto Mono', monospace", color: '#FDF5E6' }}>
          <div>✅ Trilhas modulares (Níveis 1–4)</div>
          <div>✅ Encontros semanais ao vivo</div>
          <div>✅ Cohort mensal</div>
          <div>✅ Hub de conexões</div>
          <div>✅ Primeiro deploy em 7 dias</div>
        </div>
        <button className="w-full mt-6 inline-flex items-center justify-center gap-2 px-6 py-3 text-[13px] font-medium tracking-[0.05em] uppercase rounded"
          style={{ fontFamily: "'Roboto Mono', monospace", background: '#00E5FF', color: '#1A1E22', boxShadow: '0 0 20px rgba(0,229,255,0.3)' }}>
          Quero Implementar Agora
        </button>
      </div>

      {/* Manifesto */}
      <div className="rounded-xl p-10"
        style={{ background: 'linear-gradient(135deg, #2B3A33, #1A1E22)', border: '1px solid rgba(205,127,50,0.2)' }}>
        <div className="text-[11px] tracking-[0.15em] uppercase text-[#CD7F32] mb-4"
          style={{ fontFamily: "'Roboto Mono', monospace" }}>Manifesto</div>
        <div className="text-2xl font-bold leading-snug mb-6"
          style={{ fontFamily: "'Averia Serif Libre', serif", color: '#FDF5E6' }}>
          "O Bunker não foi criado para te ensinar IA. Foi criado porque ninguém te ajudava a USAR."
        </div>
        <div className="text-sm leading-7" style={{ fontFamily: "'Roboto Mono', monospace", color: '#A9A9A9' }}>
          <p className="mb-2">Implementação mata informação.</p>
          <p className="mb-2">O imposto do amador é real — e caro.</p>
          <p className="mb-2">30 minutos com direção {'>'} 50 horas sem rumo.</p>
          <p className="mb-2">Deploy primeiro, perfeição depois.</p>
          <p className="mt-4 font-medium" style={{ color: '#CD7F32' }}>Anti-guru. Anti-hype. Pro-engenharia.</p>
        </div>
      </div>
    </div>
  </section>
);

export default Showcase;
