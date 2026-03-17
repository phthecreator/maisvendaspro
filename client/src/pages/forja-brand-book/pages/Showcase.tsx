function BrowserFrame({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid rgba(255,107,0,0.15)', marginBottom: 24 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 16px', backgroundColor: '#0D0604', borderBottom: '1px solid rgba(255,107,0,0.1)' }}>
        <div style={{ display: 'flex', gap: 6 }}>
          <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#FF4500' }} />
          <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#FFD700' }} />
          <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#34C759' }} />
        </div>
        <div style={{ flex: 1, textAlign: 'center', fontSize: 11, color: '#B8976A' }}>{title}</div>
      </div>
      <div style={{ backgroundColor: '#1A0A00', padding: 24 }}>
        {children}
      </div>
    </div>
  );
}

export default function Showcase() {
  return (
    <div>
      {/* === SALES PAGE === */}
      <section id="sales-page" style={{ marginBottom: 80 }}>
        <h2 className="fj-molten-text" style={{ fontFamily: "'Cinzel', serif", fontSize: 32, fontWeight: 700, marginBottom: 8 }}>
          Preview: Pagina de Vendas
        </h2>
        <div style={{ height: 3, width: 60, backgroundColor: '#FF6B00', marginBottom: 32, borderRadius: 2 }} />

        <BrowserFrame title="forja.maisvendaspro.com.br">
          {/* Hero */}
          <div style={{ textAlign: 'center', padding: '40px 20px', borderBottom: '1px solid rgba(255,107,0,0.08)' }}>
            <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: 28, color: '#FFF8F0', margin: '0 0 12px' }}>Pare de fazer sozinho.</h2>
            <p style={{ fontSize: 14, color: '#B8976A', maxWidth: 500, margin: '0 auto 20px', lineHeight: 1.7 }}>
              Em 90 dias, saia de deployer a agente. Com acompanhamento individual, squads de IA dedicados e um sistema que nao te deixa parar.
            </p>
            <div style={{ display: 'inline-block', padding: '12px 32px', backgroundColor: '#FF6B00', borderRadius: 8, color: '#FFF8F0', fontWeight: 700, fontSize: 14, cursor: 'pointer' }}>
              Agendar Diagnostico Gratuito
            </div>
            <div style={{ marginTop: 12 }}>
              <span style={{ fontSize: 11, padding: '4px 12px', borderRadius: 4, backgroundColor: 'rgba(255,69,0,0.15)', color: '#FF4500', fontWeight: 600 }}>5 vagas founders — R$10.000</span>
            </div>
          </div>

          {/* Social Proof */}
          <div style={{ padding: '32px 0' }}>
            <h3 style={{ textAlign: 'center', fontSize: 16, color: '#FFD700', marginBottom: 20, fontWeight: 700 }}>Resultados dos Mentorados</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
              {[
                { name: 'Rafael', role: 'Agencia de Marketing', result: 'De R$15k/mes para R$47k/mes em 8 semanas', quote: 'A Forja nao me ensinou IA. Me ensinou a montar uma operacao.' },
                { name: 'Camila', role: 'Consultora de Vendas', result: '3 clientes novos no primeiro mes', quote: 'Os squads trabalhavam enquanto eu dormia. Literalmente.' },
                { name: 'Diego', role: 'Fundador SaaS', result: 'MVP deployado em 3 semanas', quote: 'Em 90 dias eu fiz o que levaria 1 ano sozinho.' },
              ].map((t) => (
                <div key={t.name} className="fj-forged-metal" style={{ padding: 20, borderRadius: 8, border: '1px solid rgba(255,107,0,0.05)' }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: '#FFF8F0' }}>{t.name}</div>
                  <div style={{ fontSize: 11, color: '#B8976A', marginBottom: 8 }}>{t.role}</div>
                  <div style={{ fontSize: 12, color: '#FF6B00', fontWeight: 600, marginBottom: 8 }}>{t.result}</div>
                  <p style={{ fontSize: 11, color: '#B8976A', margin: 0, fontStyle: 'italic', lineHeight: 1.6 }}>"{t.quote}"</p>
                </div>
              ))}
            </div>
          </div>

          {/* Value Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, padding: '20px 0 0' }}>
            {[
              { icon: '\u{1F3AF}', title: 'Sessoes Individuais', desc: '12 sessoes de 1h' },
              { icon: '\u{1F916}', title: 'Squads de IA', desc: 'Trabalhando 24/7' },
              { icon: '\u{2694}\u{FE0F}', title: 'Mesa de Ferro', desc: 'Grupo semanal' },
            ].map((c) => (
              <div key={c.title} style={{ textAlign: 'center', padding: 16, borderRadius: 8, backgroundColor: 'rgba(255,107,0,0.03)', border: '1px solid rgba(255,107,0,0.08)' }}>
                <div style={{ fontSize: 24, marginBottom: 8 }}>{c.icon}</div>
                <div style={{ fontSize: 12, fontWeight: 700, color: '#FFF8F0', marginBottom: 4 }}>{c.title}</div>
                <div style={{ fontSize: 11, color: '#B8976A' }}>{c.desc}</div>
              </div>
            ))}
          </div>
        </BrowserFrame>
      </section>

      {/* === AREA DO MENTORADO === */}
      <section id="area-mentorado" style={{ marginBottom: 80 }}>
        <h2 className="fj-molten-text" style={{ fontFamily: "'Cinzel', serif", fontSize: 32, fontWeight: 700, marginBottom: 8 }}>
          Preview: Dashboard do Mentorado
        </h2>
        <div style={{ height: 3, width: 60, backgroundColor: '#FF6B00', marginBottom: 32, borderRadius: 2 }} />

        <BrowserFrame title="app.forja.maisvendaspro.com.br/dashboard">
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid rgba(255,107,0,0.08)', marginBottom: 20 }}>
            <div>
              <div style={{ fontSize: 16, color: '#FFF8F0', fontWeight: 600 }}>Boa tarde, Rafael</div>
              <div style={{ fontSize: 11, color: '#B8976A' }}>Semana 6 de 12</div>
            </div>
            <div style={{ width: 200, height: 8, borderRadius: 4, backgroundColor: '#2A1810', overflow: 'hidden' }}>
              <div style={{ width: '50%', height: '100%', borderRadius: 4, background: 'linear-gradient(90deg, #FF6B00, #FFD700)' }} />
            </div>
          </div>

          {/* Metrics */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginBottom: 20 }}>
            {[
              { label: 'Receita Gerada', value: 'R$ 32.000', trend: '+18%' },
              { label: 'Deploys', value: '7 projetos', trend: '+2' },
              { label: 'Squads Ativos', value: '4', trend: '' },
            ].map((m) => (
              <div key={m.label} className="fj-forged-metal" style={{ padding: 16, borderRadius: 8, border: '1px solid rgba(255,107,0,0.05)' }}>
                <div style={{ fontSize: 10, color: '#B8976A', marginBottom: 6 }}>{m.label}</div>
                <div style={{ fontSize: 20, fontWeight: 700, color: '#FF6B00' }}>{m.value}</div>
                {m.trend && <div style={{ fontSize: 11, color: '#34C759', marginTop: 4 }}>{'\u{2191}'} {m.trend}</div>}
              </div>
            ))}
          </div>

          {/* Next Session */}
          <div className="fj-molten" style={{ padding: 16, borderRadius: 8, marginBottom: 20 }}>
            <div style={{ fontSize: 11, color: '#FF6B00', fontWeight: 700, marginBottom: 8 }}>PROXIMA BIGORNA</div>
            <div style={{ fontSize: 14, color: '#FFF8F0', fontWeight: 600 }}>Terca, 14h — Otimizacao do pipeline de vendas</div>
            <div style={{ fontSize: 11, color: '#B8976A', marginTop: 4 }}>Preparacao: Trazer metricas da semana</div>
          </div>

          {/* Tasks */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <div style={{ fontSize: 11, color: '#B8976A', marginBottom: 4, fontWeight: 700 }}>TAREFAS DA SEMANA</div>
            {[
              { done: true, text: 'Configurar squad de prospeccao' },
              { done: true, text: 'Deploy da landing page v2' },
              { done: false, text: 'Review do script de vendas' },
              { done: false, text: 'Implementar follow-up automatico' },
            ].map((t) => (
              <div key={t.text} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 12px', borderRadius: 6, backgroundColor: 'rgba(255,255,255,0.02)' }}>
                <div style={{ width: 16, height: 16, borderRadius: 4, border: `2px solid ${t.done ? '#34C759' : '#555'}`, backgroundColor: t.done ? '#34C759' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, color: '#FFF8F0' }}>
                  {t.done && '\u{2713}'}
                </div>
                <span style={{ fontSize: 13, color: t.done ? '#B8976A' : '#FFF8F0', textDecoration: t.done ? 'line-through' : 'none' }}>{t.text}</span>
              </div>
            ))}
          </div>
        </BrowserFrame>
      </section>

      {/* === SESSAO DIAGNOSTICO === */}
      <section id="sessao-diagnostico" style={{ marginBottom: 80 }}>
        <h2 className="fj-molten-text" style={{ fontFamily: "'Cinzel', serif", fontSize: 32, fontWeight: 700, marginBottom: 8 }}>
          Preview: Sessao de Diagnostico
        </h2>
        <div style={{ height: 3, width: 60, backgroundColor: '#FF6B00', marginBottom: 32, borderRadius: 2 }} />

        <BrowserFrame title="forja.maisvendaspro.com.br/diagnostico">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {/* Step 1 */}
            <div className="fj-forged-metal" style={{ padding: 24, borderRadius: 8, border: '1px solid rgba(255,107,0,0.05)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <div style={{ width: 28, height: 28, borderRadius: '50%', backgroundColor: 'rgba(255,107,0,0.15)', border: '2px solid #FF6B00', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: '#FF6B00' }}>1</div>
                <span style={{ fontSize: 14, fontWeight: 700, color: '#FFF8F0' }}>Questionario</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  { label: 'Faturamento mensal atual', value: 'R$80k-150k' },
                  { label: 'Quantos funcionarios', value: '1-5' },
                  { label: 'Principal gargalo', value: 'Vendas' },
                  { label: 'Ja usa IA no negocio?', value: 'Sim, basico' },
                ].map((f) => (
                  <div key={f.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 12px', borderRadius: 6, backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.03)' }}>
                    <span style={{ fontSize: 12, color: '#B8976A' }}>{f.label}</span>
                    <span style={{ fontSize: 12, color: '#FFF8F0', padding: '4px 12px', backgroundColor: 'rgba(255,107,0,0.08)', borderRadius: 4 }}>{f.value} &#9662;</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 2 */}
            <div className="fj-forged-metal" style={{ padding: 24, borderRadius: 8, border: '1px solid rgba(255,107,0,0.05)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <div style={{ width: 28, height: 28, borderRadius: '50%', backgroundColor: 'rgba(255,215,0,0.15)', border: '2px solid #FFD700', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: '#FFD700' }}>2</div>
                <span style={{ fontSize: 14, fontWeight: 700, color: '#FFF8F0' }}>Analise do Squad</span>
              </div>
              <div style={{ padding: 16, borderRadius: 8, backgroundColor: 'rgba(255,215,0,0.03)', border: '1px solid rgba(255,215,0,0.1)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  <div><span style={{ fontSize: 11, color: '#B8976A' }}>Perfil</span><div style={{ fontSize: 13, color: '#FFF8F0', marginTop: 2 }}>Agencia de Marketing Digital</div></div>
                  <div><span style={{ fontSize: 11, color: '#B8976A' }}>Score de Prontidao</span><div style={{ fontSize: 13, color: '#FFD700', fontWeight: 700, marginTop: 2 }}>8.5 / 10</div></div>
                  <div><span style={{ fontSize: 11, color: '#B8976A' }}>Recomendacao</span><div style={{ fontSize: 13, color: '#FF6B00', fontWeight: 600, marginTop: 2 }}>Forja — Ciclo de 90 dias</div></div>
                  <div><span style={{ fontSize: 11, color: '#B8976A' }}>Foco sugerido</span><div style={{ fontSize: 13, color: '#FFF8F0', marginTop: 2 }}>Pipeline + automacao</div></div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="fj-forged-metal" style={{ padding: 24, borderRadius: 8, border: '1px solid rgba(255,107,0,0.05)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <div style={{ width: 28, height: 28, borderRadius: '50%', backgroundColor: 'rgba(52,199,89,0.15)', border: '2px solid #34C759', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: '#34C759' }}>3</div>
                <span style={{ fontSize: 14, fontWeight: 700, color: '#FFF8F0' }}>Agendamento</span>
              </div>
              <div style={{ textAlign: 'center', padding: '20px 0' }}>
                <p style={{ fontSize: 14, color: '#FFF8F0', margin: '0 0 16px' }}>Agendar call de 30min com o Mestre da Forja</p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, maxWidth: 300, margin: '0 auto 16px' }}>
                  {['Seg 10h', 'Ter 14h', 'Qua 16h', 'Qui 10h', 'Sex 14h', 'Seg 16h'].map((s) => (
                    <div key={s} style={{ padding: '8px', borderRadius: 6, border: '1px solid rgba(255,107,0,0.1)', backgroundColor: 'rgba(255,107,0,0.03)', fontSize: 11, color: '#B8976A', cursor: 'pointer' }}>
                      {s}
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: 11, color: '#B8976A', margin: 0 }}>Sem compromisso. So diagnostico.</p>
              </div>
            </div>
          </div>
        </BrowserFrame>
      </section>
    </div>
  );
}
