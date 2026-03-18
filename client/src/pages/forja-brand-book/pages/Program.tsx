const WEEKS = [
  { weeks: '1-2', title: 'Diagnostico e Setup', items: ['Auditoria completa do negocio', 'Setup do AIOS (framework de IA)', 'Definicao de ICP e posicionamento', 'Primeiros squads configurados'] },
  { weeks: '3-4', title: 'Stack de Vendas', items: ['Sistema de prospeccao com IA', 'Copy de vendas gerada por squad', 'Pipeline de leads configurado', 'Primeiro pitch testado'] },
  { weeks: '5-6', title: 'Operacao de IA', items: ['Squads de marketing operando', 'Automacoes de atendimento', 'Dashboard de metricas', 'Primeiros clientes entrando'] },
  { weeks: '7-8', title: 'Escala', items: ['Otimizacao de conversao', 'Expansao de canais', 'Contratacao de ferramentas definitivas', 'Revenue review com ajustes'] },
  { weeks: '9-10', title: 'Autonomia', items: ['Sistema rodando semi-autonomo', 'Documentacao de processos', 'Treinamento de equipe (se aplicavel)', 'Stress test do sistema'] },
  { weeks: '11-12', title: 'Lancamento', items: ['Go-live da operacao completa', 'Plano de 90 dias pos-mentoria', 'Sessao final de review', 'Graduacao: De Aprendiz a Mestre'] },
];

const DELIVERABLES = [
  { item: '12 Sessoes Individuais', detail: '1h/semana, tela compartilhada, implementacao real' },
  { item: '12 Sessoes em Grupo', detail: 'Mesa de Ferro semanal com ate 10 pares' },
  { item: '3 Sessoes SOS', detail: 'Mao na massa, suporte emergencial' },
  { item: 'Setup AIOS Completo', detail: 'Framework de IA configurado pro seu negocio' },
  { item: 'Squads Personalizados', detail: 'Agentes IA trabalhando entre as calls' },
  { item: 'Dashboard de Metricas', detail: 'Visao clara de resultados e progresso' },
  { item: 'Acesso Vitalicio ao Bunker', detail: 'Comunidade R$250/ano inclusa' },
  { item: 'Playbook de Operacao', detail: 'Documentacao completa do seu sistema' },
  { item: 'Suporte Async WhatsApp', detail: 'Duvidas respondidas em ate 24h' },
  { item: 'Gravacao de Todas as Calls', detail: 'Acervo pessoal de referencia' },
];

export default function Program() {
  return (
    <div>
      {/* === VISAO GERAL === */}
      <section id="visao-geral" style={{ marginBottom: 120 }}>
        <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: 32, fontWeight: 700, color: '#FFF8F0', marginBottom: 8 }}>
          90 Dias de Transformacao
        </h2>
        <div style={{ height: 2, width: 40, backgroundColor: '#FF6B00', marginBottom: 32, borderRadius: 2 }} />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 12, marginBottom: 40 }}>
          {[
            { label: 'Duracao', value: '90 dias' },
            { label: 'Modelo', value: 'Done With You' },
            { label: 'Individual', value: '1x/semana' },
            { label: 'Grupo', value: '1x/semana' },
            { label: 'SOS', value: '1x/mes' },
            { label: 'Investimento', value: 'R$ 15.000' },
          ].map((item) => (
            <div key={item.label} className="fj-forged-metal" style={{ padding: 20, borderRadius: 8, border: '1px solid rgba(255,107,0,0.08)', textAlign: 'center' }}>
              <div style={{ fontSize: 10, color: '#B8976A', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>{item.label}</div>
              <div style={{ fontSize: 18, fontWeight: 700, color: '#FF6B00' }}>{item.value}</div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
          {[
            { phase: 'FUNDACAO', days: 'Dias 1-30', desc: 'Setup AIOS, definicao de nicho, primeiros clientes', color: '#FF6B00' },
            { phase: 'CONSTRUCAO', days: 'Dias 31-60', desc: 'Squads operando, pipeline de vendas, 3+ projetos', color: '#FFF8F0' },
            { phase: 'OPERACAO', days: 'Dias 61-90', desc: 'Sistema autonomo, receita recorrente, escalabilidade', color: '#FF4500' },
          ].map((p) => (
            <div key={p.phase} className="fj-forged-metal" style={{ padding: 24, borderRadius: 8, borderTop: `3px solid ${p.color}` }}>
              <div style={{ fontSize: 10, color: p.color, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 4, fontWeight: 700 }}>{p.days}</div>
              <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: 20, color: '#FFF8F0', margin: '8px 0' }}>{p.phase}</h3>
              <p style={{ fontSize: 13, color: '#B8976A', margin: 0, lineHeight: 1.7 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* === METODOLOGIA === */}
      <section id="metodologia" style={{ marginBottom: 120 }}>
        <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: 32, fontWeight: 700, color: '#FFF8F0', marginBottom: 8 }}>
          O Metodo Forja
        </h2>
        <div style={{ height: 2, width: 40, backgroundColor: '#FF6B00', marginBottom: 32, borderRadius: 2 }} />

        <div className="fj-molten" style={{ padding: 24, borderRadius: 8, marginBottom: 32 }}>
          <p style={{ fontSize: 15, lineHeight: 1.9, color: '#FFF8F0', margin: 0 }}>
            Done With You nao e curso. Nao e "assista e faca sozinho". E trabalho conjunto: o Mestre da Forja esta na sua tela, no seu repositorio, no seu pipeline. A diferenca entre DWY e DIY e a mesma diferenca entre ter um <span style={{ color: '#FF6B00', fontWeight: 700 }}>GPS</span> e ter um <span style={{ color: '#B8976A' }}>mapa</span>.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {[
            { icon: '\u{1F3AF}', title: 'Sessoes Individuais — A Bigorna', desc: '1 hora por semana, tela compartilhada, problema real sendo resolvido. Nao e call de coaching. E sessao de implementacao onde o mentor esta com as maos na massa junto com voce. Cada sessao tem objetivo claro, entregavel definido e deadline.' },
            { icon: '\u{1F916}', title: 'Squads de IA — O Multiplicador', desc: 'Entre as calls, squads de agentes IA trabalham para voce: analisando seu mercado, gerando copy, otimizando processos, criando assets. Voce dorme, os squads produzem. E o diferencial que nenhuma outra mentoria oferece.' },
            { icon: '\u{2694}\u{FE0F}', title: 'Grupo Estrategico — A Mesa de Ferro', desc: '1 vez por semana, grupo de ate 10 mentorados. Cada um traz seu desafio. O grupo resolve junto. Networking real entre pessoas que faturam R$80k+/mes. Hot seat rotativo com feedback direto e sem filtro.' },
          ].map((m) => (
            <div key={m.title} className="fj-forged-metal" style={{ padding: 28, borderRadius: 8, border: '1px solid rgba(255,107,0,0.08)', borderLeft: '3px solid #FF6B00' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <span style={{ fontSize: 28 }}>{m.icon}</span>
                <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: 18, color: '#FFF8F0', margin: 0 }}>{m.title}</h3>
              </div>
              <p style={{ fontSize: 14, lineHeight: 1.8, color: '#B8976A', margin: 0 }}>{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* === SEMANA A SEMANA === */}
      <section id="semana-a-semana" style={{ marginBottom: 120 }}>
        <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: 32, fontWeight: 700, color: '#FFF8F0', marginBottom: 8 }}>
          Cronograma de 12 Semanas
        </h2>
        <div style={{ height: 2, width: 40, backgroundColor: '#FF6B00', marginBottom: 32, borderRadius: 2 }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {WEEKS.map((w, idx) => (
            <div key={w.weeks} className="fj-forged-metal" style={{ padding: 24, borderRadius: 8, border: '1px solid rgba(255,107,0,0.05)', display: 'grid', gridTemplateColumns: '80px 1fr', gap: 20, alignItems: 'start' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{
                  width: 48, height: 48, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  backgroundColor: idx === 5 ? 'rgba(255,215,0,0.15)' : 'rgba(255,107,0,0.1)',
                  border: `2px solid ${idx === 5 ? '#FFD700' : '#FF6B00'}`,
                  fontSize: 12, fontWeight: 700, color: idx === 5 ? '#FFD700' : '#FF6B00',
                }}>
                  S{w.weeks}
                </div>
              </div>
              <div>
                <h4 style={{ fontSize: 16, color: '#FFF8F0', margin: '0 0 12px 0', fontWeight: 700 }}>{w.title}</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {w.items.map((item) => (
                    <div key={item} style={{ fontSize: 13, color: '#B8976A', display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ color: '#FF6B00', fontSize: 10 }}>&bull;</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* === ENTREGAVEIS === */}
      <section id="entregaveis" style={{ marginBottom: 120 }}>
        <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: 32, fontWeight: 700, color: '#FFF8F0', marginBottom: 8 }}>
          O Que Voce Recebe
        </h2>
        <div style={{ height: 2, width: 40, backgroundColor: '#FF6B00', marginBottom: 32, borderRadius: 2 }} />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 12 }}>
          {DELIVERABLES.map((d) => (
            <div key={d.item} className="fj-forged-metal" style={{ padding: 20, borderRadius: 8, border: '1px solid rgba(255,107,0,0.05)', display: 'flex', gap: 12, alignItems: 'start' }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#FF6B00', marginTop: 6, flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#FFF8F0', marginBottom: 4 }}>{d.item}</div>
                <div style={{ fontSize: 12, color: '#B8976A', lineHeight: 1.6 }}>{d.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
