const BrandFoundation = () => (
  <section className="pb-24 border-b border-[#00E5FF]/10">
    <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#00E5FF] mb-3"
      style={{ fontFamily: "'Roboto Mono', monospace" }}>01 / Fundação</p>
    <h2 className="text-[42px] font-bold leading-tight mb-6"
      style={{ fontFamily: "'Averia Serif Libre', serif", color: '#FDF5E6' }}>Conceito Central</h2>
    <p className="text-[15px] text-[#A9A9A9] max-w-[700px] mb-12 leading-relaxed"
      style={{ fontFamily: "'Roboto Mono', monospace" }}>
      O Bunker da IA é um refúgio impenetrável contra o caos tecnológico. Um hub de inteligência ciberativista onde resistência, conhecimento e tecnologia convergem. Estética "Heavy Metal Pós-Apocalíptico" com "Detalhamento Cibernético".
    </p>

    {/* Mission / Vision / Personality Cards */}
    <div className="grid grid-cols-3 gap-6 mb-10">
      {[
        { label: 'Missão', text: 'Ser o refúgio definitivo de IA aplicada — um espaço onde profissionais constroem, resistem e evoluem juntos.', rust: false },
        { label: 'Visão', text: 'Comunidade mais resiliente e tecnicamente preparada do ecossistema de IA no Brasil.', rust: true },
        { label: 'Personalidade', text: 'Determinado, técnico, direto. Humor seco. Autoridade sem arrogância. Energia intensa e controlada.', rust: false },
      ].map((card) => (
        <div key={card.label} className="relative rounded-lg p-8 border border-white/5" style={{ background: '#2F353A' }}>
          <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-lg"
            style={{ background: card.rust
              ? 'linear-gradient(90deg, transparent, #CD7F32, transparent)'
              : 'linear-gradient(90deg, transparent, #00E5FF, transparent)' }} />
          <div className="text-[13px] font-medium tracking-[0.1em] uppercase text-[#00E5FF] mb-3"
            style={{ fontFamily: "'Roboto Mono', monospace", color: card.rust ? '#CD7F32' : '#00E5FF' }}>
            {card.label}
          </div>
          <p className="text-sm text-[#FDF5E6]" style={{ fontFamily: "'Roboto Mono', monospace" }}>{card.text}</p>
        </div>
      ))}
    </div>

    {/* Brand Values */}
    <h3 className="text-2xl font-bold mb-5"
      style={{ fontFamily: "'Averia Serif Libre', serif", color: '#FDF5E6' }}>
      Valores da Marca
    </h3>
    <div className="grid grid-cols-5 gap-5">
      {[
        { icon: '⚔️', name: 'Resistência', desc: 'Persistimos onde outros desistem' },
        { icon: '🧠', name: 'Inteligência', desc: 'Conhecimento técnico profundo' },
        { icon: '🔩', name: 'Autenticidade', desc: 'Verdade bruta como metal' },
        { icon: '🛡️', name: 'Comunidade', desc: 'O bunker existe porque estamos juntos' },
        { icon: '⚡', name: 'Evolução', desc: 'Adaptamos e avançamos' },
      ].map((v) => (
        <div key={v.name} className="text-center">
          <div className="text-3xl mb-2">{v.icon}</div>
          <div className="text-[13px] font-bold" style={{ fontFamily: "'Roboto Mono', monospace", color: '#FDF5E6' }}>{v.name}</div>
          <div className="text-[11px] text-[#A9A9A9] mt-1" style={{ fontFamily: "'Roboto Mono', monospace" }}>{v.desc}</div>
        </div>
      ))}
    </div>
  </section>
);

export default BrandFoundation;
