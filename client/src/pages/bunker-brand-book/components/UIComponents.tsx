const UIComponents = () => (
  <section className="pb-24 border-b border-[#00E5FF]/10">
    <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#00E5FF] mb-3"
      style={{ fontFamily: "'Roboto Mono', monospace" }}>05 / Componentes UI</p>
    <h2 className="text-[42px] font-bold leading-tight mb-6"
      style={{ fontFamily: "'Averia Serif Libre', serif", color: '#FDF5E6' }}>Elementos de Interface</h2>
    <p className="text-[15px] text-[#A9A9A9] max-w-[700px] mb-12 leading-relaxed"
      style={{ fontFamily: "'Roboto Mono', monospace" }}>
      Componentes web prontos para uso. Botões, cards, inputs, badges e dividers seguindo o sistema de design do Bunker.
    </p>

    {/* Buttons */}
    <h3 className="text-2xl font-bold mb-4"
      style={{ fontFamily: "'Averia Serif Libre', serif", color: '#FDF5E6' }}>Botões</h3>
    <div className="flex gap-4 flex-wrap mb-10">
      <button className="inline-flex items-center gap-2 px-6 py-3 text-[13px] font-medium tracking-[0.05em] uppercase rounded cursor-pointer transition-all duration-200"
        style={{
          fontFamily: "'Roboto Mono', monospace",
          background: '#00E5FF',
          color: '#1A1E22',
          boxShadow: '0 0 20px rgba(0,229,255,0.3)',
          animation: 'bunker-glow-pulse 3s ease-in-out infinite',
        }}>
        Entrar no Bunker
      </button>
      <button className="inline-flex items-center gap-2 px-6 py-3 text-[13px] font-medium tracking-[0.05em] uppercase rounded cursor-pointer transition-all duration-200"
        style={{
          fontFamily: "'Roboto Mono', monospace",
          background: 'transparent',
          color: '#00E5FF',
          border: '1px solid #00E5FF',
        }}>
        Deploy Agora
      </button>
      <button className="inline-flex items-center gap-2 px-6 py-3 text-[13px] font-medium tracking-[0.05em] uppercase rounded cursor-pointer transition-all duration-200"
        style={{
          fontFamily: "'Roboto Mono', monospace",
          background: 'linear-gradient(135deg, #8B4513, #CD7F32)',
          color: '#FDF5E6',
          boxShadow: '0 0 15px rgba(205,127,50,0.3)',
        }}>
        Acessar Cohort
      </button>
      <button className="inline-flex items-center gap-2 px-6 py-3 text-[13px] font-medium tracking-[0.05em] uppercase rounded cursor-pointer transition-all duration-200"
        style={{
          fontFamily: "'Roboto Mono', monospace",
          background: 'transparent',
          color: '#A9A9A9',
          border: '1px solid rgba(169,169,169,0.3)',
        }}>
        Saiba Mais
      </button>
    </div>

    {/* Cards */}
    <h3 className="text-2xl font-bold mb-4"
      style={{ fontFamily: "'Averia Serif Libre', serif", color: '#FDF5E6' }}>Cards</h3>
    <div className="grid grid-cols-3 gap-6 mb-10">
      {[
        { level: 'Nível 1', title: 'Fundamentos IA', desc: 'Prompt Engineering + Claude para iniciantes + Primeiro projeto na prática.', badge: '4 módulos', badgeColor: 'cyan', rust: false },
        { level: 'Nível 2', title: 'Automação + Agentes', desc: 'Hooks & Skills + AIOS Overview + Dashboard Interativo.', badge: '6 módulos', badgeColor: 'rust', rust: true },
        { level: 'Nível 3', title: 'Infra & Deploy', desc: 'Docker 101 + EasyPanel + Deploy Automático com GitHub Actions.', badge: 'Deploy Ready', badgeColor: 'green', rust: false },
      ].map((card) => (
        <div key={card.level} className="relative rounded-lg p-8 border border-white/5" style={{ background: '#2F353A' }}>
          <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-lg"
            style={{ background: card.rust
              ? 'linear-gradient(90deg, transparent, #CD7F32, transparent)'
              : 'linear-gradient(90deg, transparent, #00E5FF, transparent)' }} />
          <div className="text-[13px] font-medium tracking-[0.1em] uppercase mb-3"
            style={{ fontFamily: "'Roboto Mono', monospace", color: card.rust ? '#CD7F32' : '#00E5FF' }}>
            {card.level}
          </div>
          <div className="text-xl mb-2"
            style={{ fontFamily: "'Averia Serif Libre', serif", color: '#FDF5E6' }}>{card.title}</div>
          <p className="text-[13px] text-[#A9A9A9] mb-3" style={{ fontFamily: "'Roboto Mono', monospace" }}>{card.desc}</p>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-medium tracking-[0.05em] uppercase rounded-sm"
            style={{
              fontFamily: "'Roboto Mono', monospace",
              background: card.badgeColor === 'cyan' ? 'rgba(0,229,255,0.15)' : card.badgeColor === 'rust' ? 'rgba(205,127,50,0.15)' : 'rgba(52,199,89,0.15)',
              color: card.badgeColor === 'cyan' ? '#00E5FF' : card.badgeColor === 'rust' ? '#CD7F32' : '#34C759',
            }}>
            {card.badge}
          </span>
        </div>
      ))}
    </div>

    {/* Inputs */}
    <h3 className="text-2xl font-bold mb-4"
      style={{ fontFamily: "'Averia Serif Libre', serif", color: '#FDF5E6' }}>Inputs</h3>
    <div className="grid grid-cols-2 gap-6 mb-10">
      <div>
        <label className="block text-[12px] text-[#A9A9A9] mb-1.5" style={{ fontFamily: "'Roboto Mono', monospace" }}>Nome completo</label>
        <input type="text" placeholder="Seu nome de engenheiro" readOnly
          className="w-full px-4 py-3 text-sm rounded outline-none transition-colors duration-200 focus:border-[#00E5FF]"
          style={{
            fontFamily: "'Roboto Mono', monospace",
            background: 'rgba(0,0,0,0.3)',
            border: '1px solid rgba(169,169,169,0.2)',
            color: '#FDF5E6',
          }} />
      </div>
      <div>
        <label className="block text-[12px] text-[#A9A9A9] mb-1.5" style={{ fontFamily: "'Roboto Mono', monospace" }}>Email</label>
        <input type="email" placeholder="voce@bunker.ia" readOnly
          className="w-full px-4 py-3 text-sm rounded outline-none transition-colors duration-200 focus:border-[#00E5FF]"
          style={{
            fontFamily: "'Roboto Mono', monospace",
            background: 'rgba(0,0,0,0.3)',
            border: '1px solid rgba(169,169,169,0.2)',
            color: '#FDF5E6',
          }} />
      </div>
    </div>

    {/* Badges */}
    <h3 className="text-2xl font-bold mb-4"
      style={{ fontFamily: "'Averia Serif Libre', serif", color: '#FDF5E6' }}>Badges</h3>
    <div className="flex gap-2.5 flex-wrap mb-10">
      {[
        { text: 'Deploy Ativo', bg: 'rgba(0,229,255,0.15)', color: '#00E5FF' },
        { text: 'Cohort #3', bg: 'rgba(205,127,50,0.15)', color: '#CD7F32' },
        { text: 'Primeiro Deploy', bg: 'rgba(52,199,89,0.15)', color: '#34C759' },
        { text: 'Circuito Queimado', bg: 'rgba(255,59,48,0.15)', color: '#FF3B30' },
      ].map((b) => (
        <span key={b.text} className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-medium tracking-[0.05em] uppercase rounded-sm"
          style={{ fontFamily: "'Roboto Mono', monospace", background: b.bg, color: b.color }}>
          {b.text}
        </span>
      ))}
    </div>

    {/* Dividers */}
    <h3 className="text-2xl font-bold mb-4"
      style={{ fontFamily: "'Averia Serif Libre', serif", color: '#FDF5E6' }}>Dividers</h3>
    <div className="h-px opacity-20 my-8"
      style={{ background: 'linear-gradient(90deg, transparent 0%, #00E5FF 20%, #00E5FF 80%, transparent 100%)' }} />
    <p className="text-[12px] text-[#A9A9A9] text-center mb-2" style={{ fontFamily: "'Roboto Mono', monospace" }}>Circuit Line Divider</p>
    <div className="h-0.5 my-8"
      style={{ background: 'linear-gradient(90deg, transparent, #8B4513, #CD7F32, transparent)' }} />
    <p className="text-[12px] text-[#A9A9A9] text-center" style={{ fontFamily: "'Roboto Mono', monospace" }}>Rust Line Divider</p>
  </section>
);

export default UIComponents;
