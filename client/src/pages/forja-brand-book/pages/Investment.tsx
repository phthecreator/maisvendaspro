const VALUE_STACK = [
  { item: '12 Sessoes Individuais (1h)', value: 'R$ 24.000' },
  { item: '12 Sessoes em Grupo', value: 'R$ 6.000' },
  { item: '3 Sessoes SOS', value: 'R$ 4.500' },
  { item: 'Setup AIOS Completo', value: 'R$ 8.000' },
  { item: 'Squads de IA Personalizados', value: 'R$ 12.000' },
  { item: 'Dashboard de Metricas', value: 'R$ 3.000' },
  { item: 'Acesso Vitalicio Bunker', value: 'R$ 250' },
  { item: 'Playbook de Operacao', value: 'R$ 5.000' },
  { item: 'Suporte Async WhatsApp', value: 'R$ 3.000' },
  { item: 'Gravacao de Todas as Calls', value: 'R$ 2.000' },
];

const FAQS = [
  { q: 'R$15k e muito caro', a: 'Se voce fatura R$80k/mes, R$15k e menos de 20% do faturamento de um mes. Se a mentoria te ajudar a faturar 30% mais — e esse e o objetivo — voce recupera o investimento no primeiro mes. A conta nao e "R$15k e caro". A conta e: quanto custa ficar mais 6 meses sem direcao?' },
  { q: 'Ja fiz mentoria antes e nao funcionou', a: 'A maioria das mentorias vende calls e te larga com homework. A Forja e DWY — Done With You. O mentor esta na sua tela, no seu repositorio, implementando junto. E entre as calls, squads de IA continuam trabalhando. Nao e mais uma mentoria. E um co-piloto por 90 dias.' },
  { q: 'Nao tenho certeza se e pra mim', a: 'A Forja tem criterios de entrada: faturamento >= R$80k/mes, autonomia de decisao, segmento de agencias ou servicos. Se voce se encaixa e ja provou que implementa, e pra voce. Se nao se encaixa, a gente te direciona pro Bunker primeiro.' },
  { q: 'Qual a diferenca da Forja pro Bunker?', a: 'O Bunker e comunidade — voce implementa com o grupo, no seu ritmo, por R$250/ano. A Forja e mentoria individual — voce implementa com acompanhamento direto, squads de IA dedicados e deadline de 90 dias. O Bunker te ensina a andar. A Forja te faz correr.' },
  { q: 'E se eu nao conseguir resultado em 90 dias?', a: 'Em 90 dias com sessoes semanais, squads operando e accountability constante, e muito dificil nao ter resultado. Mas se por algum motivo extraordinario voce nao alcancar os marcos definidos, estendemos o acompanhamento por mais 30 dias sem custo adicional.' },
  { q: 'Posso comecar quando quiser?', a: 'As turmas abrem com no maximo 10 vagas por ciclo. Voce entra, faz uma sessao de diagnostico, e comecamos na semana seguinte. Nao precisa esperar turma — o programa e individualizado.' },
];

export default function Investment() {
  return (
    <div>
      {/* === STACK DE VALOR === */}
      <section id="stack-valor" style={{ marginBottom: 80 }}>
        <h2 className="fj-molten-text" style={{ fontFamily: "'Cinzel', serif", fontSize: 32, fontWeight: 700, marginBottom: 8 }}>
          O Que Esta Incluso
        </h2>
        <div style={{ height: 3, width: 60, backgroundColor: '#FF6B00', marginBottom: 32, borderRadius: 2 }} />

        <div className="fj-forged-metal" style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid rgba(255,107,0,0.1)' }}>
          {VALUE_STACK.map((v, i) => (
            <div key={v.item} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 24px',
              borderBottom: i < VALUE_STACK.length - 1 ? '1px solid rgba(255,255,255,0.03)' : 'none',
            }}>
              <span style={{ fontSize: 13, color: '#FFF8F0' }}>{v.item}</span>
              <span style={{ fontSize: 13, color: '#B8976A', fontWeight: 600, textDecoration: 'line-through', opacity: 0.7 }}>{v.value}</span>
            </div>
          ))}

          <div style={{ height: 2, background: 'linear-gradient(90deg, transparent, #FF6B00, transparent)' }} />

          <div style={{ padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 14, color: '#B8976A' }}>Valor Total Real</span>
            <span style={{ fontSize: 18, color: '#B8976A', textDecoration: 'line-through' }}>R$ 67.750</span>
          </div>

          <div style={{ padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'rgba(255,107,0,0.05)' }}>
            <span style={{ fontSize: 16, color: '#FFD700', fontWeight: 700 }}>Investimento Forja</span>
            <span className="fj-molten-text" style={{ fontSize: 28, fontWeight: 700 }}>R$ 15.000</span>
          </div>

          <div style={{ padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'rgba(255,69,0,0.08)', borderTop: '1px solid rgba(255,69,0,0.15)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: 16, color: '#FF4500', fontWeight: 700 }}>Founders</span>
              <span style={{ fontSize: 10, padding: '2px 8px', borderRadius: 4, backgroundColor: 'rgba(255,69,0,0.2)', color: '#FF4500', fontWeight: 700 }}>5 VAGAS</span>
            </div>
            <span style={{ fontSize: 28, fontWeight: 700, color: '#FF4500' }}>R$ 10.000</span>
          </div>
        </div>
      </section>

      {/* === PRICING === */}
      <section id="pricing" style={{ marginBottom: 80 }}>
        <h2 className="fj-molten-text" style={{ fontFamily: "'Cinzel', serif", fontSize: 32, fontWeight: 700, marginBottom: 8 }}>
          Investimento
        </h2>
        <div style={{ height: 3, width: 60, backgroundColor: '#FF6B00', marginBottom: 32, borderRadius: 2 }} />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
          {/* Founders */}
          <div style={{ borderRadius: 12, border: '2px solid #FF4500', padding: 32, position: 'relative', boxShadow: '0 0 30px rgba(255,69,0,0.15)', backgroundColor: '#2A1810' }}>
            <div style={{ position: 'absolute', top: -12, left: 24, padding: '4px 16px', backgroundColor: '#FF4500', borderRadius: 4, fontSize: 11, fontWeight: 700, color: '#FFF8F0', letterSpacing: '0.1em' }}>
              PRIMEIRA TURMA
            </div>
            <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: 22, color: '#FFD700', margin: '16px 0 8px' }}>Founders Edition</h3>
            <div style={{ fontSize: 40, fontWeight: 700, color: '#FF4500', margin: '8px 0' }}>R$ 10.000</div>
            <div style={{ fontSize: 12, color: '#B8976A', marginBottom: 20 }}>90 dias &bull; 5 vagas exclusivas</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
              {['Tudo do stack de valor', 'Acesso antecipado a features', 'Prioridade de horario', 'Desconto de 33%'].map((f) => (
                <div key={f} style={{ fontSize: 13, color: '#FFF8F0', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ color: '#FF4500' }}>&#10003;</span>{f}
                </div>
              ))}
            </div>
            <div style={{ padding: '14px 24px', backgroundColor: '#FF4500', borderRadius: 8, textAlign: 'center', cursor: 'pointer', fontSize: 14, fontWeight: 700, color: '#FFF8F0', transition: 'opacity 0.2s' }}>
              Garantir Vaga Founders
            </div>
          </div>

          {/* Standard */}
          <div style={{ borderRadius: 12, border: '1px solid rgba(255,107,0,0.15)', padding: 32, backgroundColor: '#2A1810' }}>
            <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: 22, color: '#FFF8F0', margin: '0 0 8px' }}>Investimento Padrao</h3>
            <div className="fj-molten-text" style={{ fontSize: 40, fontWeight: 700, margin: '8px 0' }}>R$ 15.000</div>
            <div style={{ fontSize: 12, color: '#B8976A', marginBottom: 20 }}>90 dias &bull; Stack completo</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
              {['Stack completo de valor', 'Parcelamento em ate 12x', 'Nota fiscal emitida', 'Inicio na semana seguinte'].map((f) => (
                <div key={f} style={{ fontSize: 13, color: '#FFF8F0', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ color: '#FF6B00' }}>&#10003;</span>{f}
                </div>
              ))}
            </div>
            <div style={{ padding: '14px 24px', border: '2px solid #FF6B00', borderRadius: 8, textAlign: 'center', cursor: 'pointer', fontSize: 14, fontWeight: 700, color: '#FF6B00', transition: 'opacity 0.2s' }}>
              Agendar Diagnostico
            </div>
          </div>
        </div>

        <div className="fj-molten" style={{ padding: 20, borderRadius: 8, marginTop: 24, display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap' }}>
          {['Pix, cartao ou boleto', 'Parcelamento ate 12x', 'Nota fiscal emitida'].map((p) => (
            <span key={p} style={{ fontSize: 12, color: '#B8976A' }}>&bull; {p}</span>
          ))}
        </div>
      </section>

      {/* === OBJECOES === */}
      <section id="objecoes" style={{ marginBottom: 80 }}>
        <h2 className="fj-molten-text" style={{ fontFamily: "'Cinzel', serif", fontSize: 32, fontWeight: 700, marginBottom: 8 }}>
          Perguntas Frequentes
        </h2>
        <div style={{ height: 3, width: 60, backgroundColor: '#FF6B00', marginBottom: 32, borderRadius: 2 }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {FAQS.map((faq) => (
            <div key={faq.q} className="fj-forged-metal" style={{ padding: 24, borderRadius: 8, border: '1px solid rgba(255,107,0,0.05)' }}>
              <h4 style={{ fontSize: 15, color: '#FFD700', margin: '0 0 12px', fontWeight: 700 }}>"{faq.q}"</h4>
              <p style={{ fontSize: 13, lineHeight: 1.8, color: '#B8976A', margin: 0 }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* === GARANTIA === */}
      <section id="garantia" style={{ marginBottom: 80 }}>
        <h2 className="fj-molten-text" style={{ fontFamily: "'Cinzel', serif", fontSize: 32, fontWeight: 700, marginBottom: 8 }}>
          Garantia de Resultado
        </h2>
        <div style={{ height: 3, width: 60, backgroundColor: '#FF6B00', marginBottom: 32, borderRadius: 2 }} />

        <div style={{ padding: 32, borderRadius: 12, border: '2px solid rgba(255,215,0,0.2)', backgroundColor: 'rgba(255,215,0,0.03)', boxShadow: '0 0 40px rgba(255,215,0,0.05)' }}>
          <div style={{ fontSize: 48, textAlign: 'center', marginBottom: 20 }}>{'\u{1F6E1}\u{FE0F}'}</div>
          <p style={{ fontSize: 16, lineHeight: 1.9, color: '#FFF8F0', textAlign: 'center', maxWidth: 700, margin: '0 auto 24px' }}>
            Se em 30 dias voce seguir o programa — participar das calls, executar as tarefas, usar os squads — e sentir que nao esta no caminho certo, devolvemos <span style={{ color: '#FFD700', fontWeight: 700 }}>100% do seu investimento</span>. Sem perguntas, sem burocracia.
          </p>

          <div style={{ maxWidth: 500, margin: '0 auto' }}>
            <div style={{ fontSize: 11, color: '#B8976A', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>Condicoes</div>
            {[
              'Participacao em pelo menos 4 sessoes individuais',
              'Execucao de pelo menos 80% das tarefas propostas',
              'Uso ativo dos squads de IA fornecidos',
              'Solicitacao dentro dos primeiros 30 dias',
            ].map((c) => (
              <div key={c} style={{ fontSize: 12, color: '#B8976A', padding: '6px 0', display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ color: '#FFD700', fontSize: 10 }}>&bull;</span>{c}
              </div>
            ))}
          </div>

          <div style={{ marginTop: 28, padding: 20, borderTop: '1px solid rgba(255,215,0,0.1)', textAlign: 'center' }}>
            <p style={{ fontFamily: "'Averia Serif Libre', serif", fontSize: 16, color: '#FFD700', margin: 0, fontStyle: 'italic' }}>
              "Nos nao vendemos esperanca. Vendemos resultado. Se nao entregar, nao merece seu dinheiro."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
