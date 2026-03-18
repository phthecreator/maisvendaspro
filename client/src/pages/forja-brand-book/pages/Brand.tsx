const COLORS = [
  { name: 'Obsidiana Quente', hex: '#1A0A00', role: 'Background principal' },
  { name: 'Carvao Forjado', hex: '#2A1810', role: 'Surfaces, cards' },
  { name: 'Laranja Forja', hex: '#FF6B00', role: 'Acento primario, CTAs' },
  { name: 'Ouro Fundido', hex: '#FFD700', role: 'Destaques premium' },
  { name: 'Brasa', hex: '#FF4500', role: 'Alertas, urgencia' },
  { name: 'Pergaminho Quente', hex: '#FFF8F0', role: 'Texto principal' },
  { name: 'Bronze Antigo', hex: '#B8976A', role: 'Texto secundario' },
];

const SYMBOLS = [
  { symbol: 'Bigorna', meaning: 'Transformacao bruta para refinada', use: 'Logo, avatar, marca principal' },
  { symbol: 'Martelo', meaning: 'Acao decisiva, impacto', use: 'CTAs, transicoes, momentos de decisao' },
  { symbol: 'Fogo / Chamas', meaning: 'Energia, purificacao, processo', use: 'Backgrounds, particulas, atmosfera' },
  { symbol: 'Faiscas', meaning: 'Insights, vitorias rapidas', use: 'Animacoes, celebracoes, feedback' },
  { symbol: 'Metal Fundido', meaning: 'Estado de fluxo, maleabilidade', use: 'Gradientes, texturas premium' },
];

const PILLARS = [
  { n: 1, title: 'Historia de Criacao', text: 'A Forja nasceu dentro do Bunker. Os membros que mais cresciam tinham algo em comum: acompanhamento proximo. Nao era o conteudo — era ter alguem do lado acelerando decisoes, eliminando atalhos errados e forcando execucao com prazo. Decidimos criar um espaco onde esse acompanhamento fosse o produto.' },
  { n: 2, title: 'Credo', text: 'Acompanhamento supera conteudo. 90 dias focados superam 2 anos de tentativa e erro. Squads de IA sao o multiplicador de forca. O mentorado faz, nos aceleramos. Resultado medido em receita, nao em certificados.' },
  { n: 3, title: 'Icones', text: 'Bigorna + martelo + faiscas. Estetica de forja medieval com acabamento tech. Metal quente, texturas brutas, brilho dourado. A bigorna e onde a transformacao acontece — e o simbolo central da marca.' },
  { n: 4, title: 'Rituais', text: 'Call individual semanal — A Bigorna (1h). Call grupo semanal — A Mesa de Ferro (1h). SOS mensal — mao na massa emergencial. Sprint de implementacao quinzenal. Review de metricas mensal com ajuste de rota.' },
  { n: 5, title: 'Pagaos (Inimigos)', text: 'O mentor de palco que vende call e some. A mentoria generica com mesmo playbook pra todo mundo. O "faca voce mesmo" forcado que te larga com videos. O ticket alto sem entrega — R$15k por calls de 30 minutos sem implementacao real.' },
  { n: 6, title: 'Palavras Sagradas', text: 'Forjar = transformar pela acao. Temperatura = nivel de intensidade. Bigorna = sessao individual. Faiscas = wins rapidos. Metal Fundido = momento de flow. Temperar = otimizar apos deploy. Mestre da Forja = mentor. Aprendiz = mentorado.' },
  { n: 7, title: 'Lider', text: 'O Mestre da Forja nao e guru. E operador que ja construiu o que ensina. Mostra o terminal, nao o slide. Erra junto, corrige junto. Sua autoridade vem de deploys, nao de diplomas. Esta na trincheira, nao no palco.' },
];

export default function Brand() {
  return (
    <div>
      {/* === NARRATIVA === */}
      <section id="narrativa" style={{ marginBottom: 120 }}>
        <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: 32, fontWeight: 700, color: '#FFF8F0', marginBottom: 8 }}>
          A Historia da Forja
        </h2>
        <div style={{ height: 2, width: 40, backgroundColor: '#FF6B00', marginBottom: 32, borderRadius: 2 }} />

        <div className="fj-forged-metal" style={{ padding: 32, borderRadius: 8, border: '1px solid rgba(255,107,0,0.1)', marginBottom: 24 }}>
          <p style={{ fontSize: 15, lineHeight: 1.9, color: '#FFF8F0', margin: 0 }}>
            A Forja nasceu de uma observacao dentro do proprio Bunker: os membros que mais evoluiam nao eram os mais inteligentes — eram os que tinham acompanhamento proximo. Os deployers que viravam agentes tinham algo em comum: alguem do lado acelerando as decisoes, eliminando os atalhos errados e forcando a execucao com prazo.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
          <div className="fj-molten" style={{ padding: 24, borderRadius: 8 }}>
            <h4 style={{ color: '#FF6B00', fontSize: 12, marginBottom: 12, fontWeight: 600, textTransform: 'uppercase' as const, letterSpacing: '0.1em' }}>O BUNKER TE TIRA DA ESTEIRA</h4>
            <p style={{ fontSize: 13, lineHeight: 1.7, color: '#B8976A', margin: 0 }}>
              A comunidade de R$250/ano quebra o ciclo de consumo e te coloca em modo implementacao. Voce deploya, erra em grupo, aprende fazendo.
            </p>
          </div>
          <div className="fj-molten" style={{ padding: 24, borderRadius: 8 }}>
            <h4 style={{ color: '#FFD700', fontSize: 14, marginBottom: 12, fontWeight: 700 }}>A FORJA TE TRANSFORMA EM OPERADOR</h4>
            <p style={{ fontSize: 13, lineHeight: 1.7, color: '#B8976A', margin: 0 }}>
              Em 90 dias, com reunioes semanais individuais, squads de IA trabalhando entre as calls e um sistema que nao te deixa parar, voce sai com negocio posicionado e vendendo.
            </p>
          </div>
        </div>

        <div style={{ marginTop: 24, padding: 20, borderLeft: '3px solid #FF6B00', backgroundColor: 'rgba(255,107,0,0.03)', borderRadius: '0 8px 8px 0' }}>
          <p style={{ fontFamily: "'Averia Serif Libre', serif", fontSize: 16, color: '#FFD700', margin: 0, fontStyle: 'italic' }}>
            "A Forja nao e um upgrade do Bunker. E outro nivel do jogo."
          </p>
        </div>
      </section>

      {/* === IDENTIDADE VISUAL === */}
      <section id="identidade" style={{ marginBottom: 120 }}>
        <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: 32, fontWeight: 700, color: '#FFF8F0', marginBottom: 8 }}>
          Identidade Visual
        </h2>
        <div style={{ height: 2, width: 40, backgroundColor: '#FF6B00', marginBottom: 32, borderRadius: 2 }} />

        <h3 style={{ color: '#FFF8F0', fontSize: 16, marginBottom: 16, fontWeight: 700 }}>Paleta de Cores</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 12, marginBottom: 40 }}>
          {COLORS.map((c) => (
            <div key={c.hex} style={{ borderRadius: 8, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ height: 64, backgroundColor: c.hex, borderBottom: '1px solid rgba(255,255,255,0.05)' }} />
              <div style={{ padding: 12, backgroundColor: '#2A1810' }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: '#FFF8F0', marginBottom: 4 }}>{c.name}</div>
                <div style={{ fontSize: 11, color: '#B8976A', fontFamily: "'Roboto Mono', monospace" }}>{c.hex}</div>
                <div style={{ fontSize: 10, color: '#7A6040', marginTop: 4 }}>{c.role}</div>
              </div>
            </div>
          ))}
        </div>

        <h3 style={{ color: '#FFF8F0', fontSize: 16, marginBottom: 16, fontWeight: 700 }}>Tipografia</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, marginBottom: 40 }}>
          <div className="fj-forged-metal" style={{ padding: 24, borderRadius: 8, border: '1px solid rgba(255,107,0,0.1)' }}>
            <div style={{ fontSize: 10, color: '#FF6B00', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Titulos</div>
            <div style={{ fontFamily: "'Cinzel', serif", fontSize: 28, fontWeight: 700, color: '#FFF8F0' }}>A FORJA</div>
            <div style={{ fontSize: 11, color: '#B8976A', marginTop: 8 }}>Cinzel — Serif premium, peso bold</div>
          </div>
          <div className="fj-forged-metal" style={{ padding: 24, borderRadius: 8, border: '1px solid rgba(255,107,0,0.1)' }}>
            <div style={{ fontSize: 10, color: '#FF6B00', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Corpo</div>
            <div style={{ fontFamily: "'Roboto Mono', monospace", fontSize: 14, color: '#FFF8F0', lineHeight: 1.7 }}>Sistema de implementacao assistida com squads de IA</div>
            <div style={{ fontSize: 11, color: '#B8976A', marginTop: 8 }}>Roboto Mono — Tecnico e legivel</div>
          </div>
          <div className="fj-forged-metal" style={{ padding: 24, borderRadius: 8, border: '1px solid rgba(255,107,0,0.1)' }}>
            <div style={{ fontSize: 10, color: '#FF6B00', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Acentos / Citacoes</div>
            <div style={{ fontFamily: "'Averia Serif Libre', serif", fontSize: 18, color: '#FFF8F0', fontStyle: 'italic' }}>"Onde deployers se tornam agentes"</div>
            <div style={{ fontSize: 11, color: '#B8976A', marginTop: 8 }}>Averia Serif Libre — Elegante e humano</div>
          </div>
        </div>

        <h3 style={{ color: '#FFF8F0', fontSize: 16, marginBottom: 16, fontWeight: 700 }}>Simbolos & Icones</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {SYMBOLS.map((s) => (
            <div key={s.symbol} className="fj-forged-metal" style={{ display: 'grid', gridTemplateColumns: '140px 1fr 1fr', gap: 16, padding: '16px 20px', borderRadius: 6, border: '1px solid rgba(255,107,0,0.05)', alignItems: 'center' }}>
              <span style={{ color: '#FFD700', fontWeight: 700, fontSize: 13 }}>{s.symbol}</span>
              <span style={{ color: '#FFF8F0', fontSize: 12 }}>{s.meaning}</span>
              <span style={{ color: '#B8976A', fontSize: 11 }}>{s.use}</span>
            </div>
          ))}
        </div>
      </section>

      {/* === PRIMAL BRANDING === */}
      <section id="primal-branding" style={{ marginBottom: 120 }}>
        <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: 32, fontWeight: 700, color: '#FFF8F0', marginBottom: 8 }}>
          Primal Branding — 7 Pilares
        </h2>
        <div style={{ height: 2, width: 40, backgroundColor: '#FF6B00', marginBottom: 32, borderRadius: 2 }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {PILLARS.map((p) => (
            <div key={p.n} className="fj-forged-metal" style={{ padding: 24, borderRadius: 8, border: '1px solid rgba(255,107,0,0.08)', borderLeft: '3px solid #FF6B00' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <div style={{ width: 32, height: 32, borderRadius: '50%', backgroundColor: 'rgba(255,107,0,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700, color: '#FF6B00' }}>
                  {p.n}
                </div>
                <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: 18, color: '#FFD700', margin: 0 }}>{p.title}</h3>
              </div>
              <p style={{ fontSize: 14, lineHeight: 1.8, color: '#B8976A', margin: 0, whiteSpace: 'pre-line' }}>{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* === POSICIONAMENTO === */}
      <section id="posicionamento" style={{ marginBottom: 120 }}>
        <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: 32, fontWeight: 700, color: '#FFF8F0', marginBottom: 8 }}>
          Posicionamento na Escada de Valor
        </h2>
        <div style={{ height: 2, width: 40, backgroundColor: '#FF6B00', marginBottom: 32, borderRadius: 2 }} />

        {/* Value Ladder */}
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, marginBottom: 40, flexWrap: 'wrap', justifyContent: 'center' }}>
          {[
            { label: 'YouTube', price: 'Gratis', h: 60, bg: '#2A1810', border: '#555' },
            { label: 'Bunker', price: 'R$250/ano', h: 100, bg: '#2A1810', border: '#00E5FF' },
            { label: 'A FORJA', price: 'R$15.000', h: 160, bg: 'linear-gradient(180deg, #3A2818, #2A1810)', border: '#FF6B00' },
            { label: 'DFY', price: 'R$30-100k', h: 200, bg: '#2A1810', border: '#FFD700' },
          ].map((step) => (
            <div key={step.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
              <div style={{
                width: 120, height: step.h, background: step.bg, borderRadius: '8px 8px 0 0',
                border: `2px solid ${step.border}`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', padding: 12,
                boxShadow: step.label === 'A FORJA' ? '0 0 20px rgba(255,107,0,0.3)' : 'none',
              }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: step.label === 'A FORJA' ? '#FF6B00' : '#FFF8F0', textAlign: 'center' }}>{step.label}</div>
                <div style={{ fontSize: 10, color: '#B8976A', marginTop: 4 }}>{step.price}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="fj-molten" style={{ padding: 24, borderRadius: 8, marginBottom: 24 }}>
          <p style={{ fontSize: 14, lineHeight: 1.8, color: '#FFF8F0', margin: 0 }}>
            A Forja e para quem ja saiu da esteira de conteudo, ja provou que implementa no Bunker, e agora quer <span style={{ color: '#FF6B00', fontWeight: 700 }}>ACELERAR</span>. Nao e para iniciantes. E para deployers que querem virar agentes em 90 dias.
          </p>
        </div>

        <h3 style={{ color: '#FFF8F0', fontSize: 16, marginBottom: 16, fontWeight: 700 }}>Criterios de Qualificacao</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 12, marginBottom: 32 }}>
          {[
            'Faturamento >= R$80k/mes',
            'Capacidade de investir em mentoria + tools',
            'Autonomia de decisao (socio/fundador)',
            'Segmento: agencias e servicos',
          ].map((q) => (
            <div key={q} style={{ padding: '12px 16px', borderRadius: 6, backgroundColor: 'rgba(255,107,0,0.05)', border: '1px solid rgba(255,107,0,0.1)', fontSize: 13, color: '#FFF8F0' }}>
              <span style={{ color: '#FF6B00', marginRight: 8 }}>&#10003;</span>{q}
            </div>
          ))}
        </div>

        <h3 style={{ color: '#FFF8F0', fontSize: 16, marginBottom: 16, fontWeight: 700 }}>Bunker vs Forja</h3>
        <div style={{ overflow: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
            <thead>
              <tr>
                <th style={{ textAlign: 'left', padding: '12px 16px', borderBottom: '2px solid #FF6B00', color: '#B8976A' }}>Bunker</th>
                <th style={{ textAlign: 'left', padding: '12px 16px', borderBottom: '2px solid #FF6B00', color: '#FF6B00' }}>Forja</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Heavy Metal Pos-Apocaliptico', 'Forja Medieval Tech'],
                ['Neon Ciano, frio, tech', 'Laranja/Ouro, quente, premium'],
                ['Comunidade (DIY)', 'Mentoria (DWY)'],
                ['R$250/ano', 'R$15.000 / 90 dias'],
                ['Metrica: Deploys', 'Metrica: Receita'],
              ].map(([b, f], i) => (
                <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '10px 16px', color: '#B8976A' }}>{b}</td>
                  <td style={{ padding: '10px 16px', color: '#FFF8F0' }}>{f}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
