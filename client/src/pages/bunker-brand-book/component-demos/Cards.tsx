const mono = "'Roboto Mono', monospace";
const serif = "'Averia Serif Libre', serif";

const Cards = () => (
  <section id="cards" className="pb-24 border-b border-[#00E5FF]/10">
    <style>{`
      @keyframes bunker-legendary-pulse {
        0%, 100% { box-shadow: 0 0 15px rgba(205,127,50,0.3), 0 0 30px rgba(205,127,50,0.15); }
        50% { box-shadow: 0 0 25px rgba(205,127,50,0.5), 0 0 50px rgba(205,127,50,0.25); }
      }
      @keyframes bunker-scanline-move {
        0% { transform: translateY(-100%); }
        100% { transform: translateY(100%); }
      }
    `}</style>

    <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#00E5FF] mb-3"
      style={{ fontFamily: mono }}>Componentes / Cards</p>
    <h2 className="text-[42px] font-bold leading-tight mb-6"
      style={{ fontFamily: serif, color: '#FDF5E6' }}>Cards</h2>
    <p className="text-[15px] text-[#A9A9A9] max-w-[700px] mb-12 leading-relaxed"
      style={{ fontFamily: mono }}>
      Variantes de card para diferentes contextos: padrao, rust, holo panel e loot cards com 4 niveis de raridade.
    </p>

    {/* Standard Cards */}
    <h3 className="text-xl font-bold mb-4" style={{ fontFamily: serif, color: '#FDF5E6' }}>Padrao &amp; Rust</h3>
    <div className="grid grid-cols-3 gap-6 mb-10">
      {/* Default */}
      <div className="relative rounded-lg p-6 border border-white/5" style={{ background: '#2F353A' }}>
        <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-lg"
          style={{ background: 'linear-gradient(90deg, transparent, #00E5FF, transparent)' }} />
        <div className="text-[11px] text-[#00E5FF] uppercase tracking-[0.1em] mb-1" style={{ fontFamily: mono }}>Modulo</div>
        <div className="text-lg mb-2" style={{ fontFamily: serif, color: '#FDF5E6' }}>Fundamentos IA</div>
        <p className="text-[13px] text-[#A9A9A9] mb-4" style={{ fontFamily: mono }}>
          Prompt Engineering + Claude para iniciantes + Primeiro projeto na pratica.
        </p>
        <span className="inline-flex px-2.5 py-1 text-[11px] font-medium tracking-[0.05em] uppercase rounded-sm"
          style={{ fontFamily: mono, background: 'rgba(0,229,255,0.15)', color: '#00E5FF' }}>
          4 modulos
        </span>
      </div>
      {/* Rust */}
      <div className="relative rounded-lg p-6 border border-white/5" style={{ background: '#2F353A' }}>
        <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-lg"
          style={{ background: 'linear-gradient(90deg, transparent, #CD7F32, transparent)' }} />
        <div className="text-[11px] text-[#CD7F32] uppercase tracking-[0.1em] mb-1" style={{ fontFamily: mono }}>Avancado</div>
        <div className="text-lg mb-2" style={{ fontFamily: serif, color: '#FDF5E6' }}>Automacao + Agentes</div>
        <p className="text-[13px] text-[#A9A9A9] mb-4" style={{ fontFamily: mono }}>
          Hooks &amp; Skills + AIOS Overview + Dashboard Interativo.
        </p>
        <span className="inline-flex px-2.5 py-1 text-[11px] font-medium tracking-[0.05em] uppercase rounded-sm"
          style={{ fontFamily: mono, background: 'rgba(205,127,50,0.15)', color: '#CD7F32' }}>
          6 modulos
        </span>
      </div>
      {/* Holo Panel */}
      <div className="relative rounded-lg p-6 overflow-hidden"
        style={{
          background: 'rgba(255,255,255,0.04)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(0,229,255,0.15)',
          boxShadow: '0 0 20px rgba(0,229,255,0.08)',
        }}>
        {/* Scanline overlay */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="w-full h-full" style={{
            background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,229,255,0.02) 2px, rgba(0,229,255,0.02) 4px)',
          }} />
        </div>
        <div className="relative z-10">
          <div className="text-[11px] text-[#00E5FF] uppercase tracking-[0.1em] mb-1" style={{ fontFamily: mono }}>Holo Panel</div>
          <div className="text-lg mb-2" style={{ fontFamily: serif, color: '#FDF5E6' }}>Painel Holografico</div>
          <p className="text-[13px] text-[#A9A9A9] mb-4" style={{ fontFamily: mono }}>
            Glassmorphism + scanline overlay + cyan border glow.
          </p>
          <span className="inline-flex px-2.5 py-1 text-[11px] font-medium tracking-[0.05em] uppercase rounded-sm"
            style={{ fontFamily: mono, background: 'rgba(0,229,255,0.15)', color: '#00E5FF' }}>
            Holographic
          </span>
        </div>
      </div>
    </div>

    {/* Loot Cards */}
    <h3 className="text-xl font-bold mb-4" style={{ fontFamily: serif, color: '#FDF5E6' }}>Loot Cards — Raridades</h3>
    <div className="grid grid-cols-4 gap-5">
      {[
        { rarity: 'Common', border: '#A9A9A9', glow: 'none', shadow: 'none', title: 'Prompt Basico', desc: 'Template de prompt simples para tarefas cotidianas.', badge: 'Consumidor' },
        { rarity: 'Rare', border: '#3A86FF', glow: 'rgba(58,134,255,0.3)', shadow: '0 0 15px rgba(58,134,255,0.2)', title: 'Agent Builder', desc: 'Framework para criar agentes autonomos com Claude.', badge: 'Recruta' },
        { rarity: 'Epic', border: '#9B59B6', glow: 'rgba(155,89,182,0.3)', shadow: '0 0 20px rgba(155,89,182,0.25)', title: 'Full Stack Deploy', desc: 'Pipeline completo: dev, staging, production em 1 click.', badge: 'Construtor' },
        { rarity: 'Legendary', border: '#CD7F32', glow: 'rgba(205,127,50,0.4)', shadow: 'none', title: 'AIOS Framework', desc: 'Meta-framework que orquestra IA para dev full stack.', badge: 'Agente' },
      ].map((card) => (
        <div key={card.rarity} className="rounded-lg p-5 relative"
          style={{
            background: '#1A1E22',
            border: `1px solid ${card.border}`,
            boxShadow: card.rarity === 'Legendary' ? undefined : card.shadow,
            animation: card.rarity === 'Legendary' ? 'bunker-legendary-pulse 3s ease-in-out infinite' : undefined,
          }}>
          <div className="text-[10px] uppercase tracking-[0.15em] mb-3"
            style={{ fontFamily: mono, color: card.border }}>{card.rarity}</div>
          <div className="text-base font-bold mb-2"
            style={{ fontFamily: serif, color: '#FDF5E6' }}>{card.title}</div>
          <p className="text-[12px] text-[#A9A9A9] mb-4 leading-relaxed" style={{ fontFamily: mono }}>
            {card.desc}
          </p>
          <span className="inline-flex px-2 py-0.5 text-[10px] font-medium tracking-[0.05em] uppercase rounded-sm"
            style={{ fontFamily: mono, background: `${card.border}20`, color: card.border }}>
            {card.badge}
          </span>
        </div>
      ))}
    </div>
  </section>
);

export default Cards;
