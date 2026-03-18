const INCLUDES = [
  '12 Sessoes Individuais (1h/semana)',
  '12 Sessoes em Grupo (Mesa de Ferro)',
  '3 Sessoes SOS emergenciais',
  'Setup AIOS completo',
  'Squads de IA personalizados',
  'Acesso vitalicio ao Bunker',
  'Playbook de operacao documentado',
  'Suporte async via WhatsApp',
];

const FAQS = [
  { q: 'Ja fiz mentoria antes e nao funcionou', a: 'A Forja e DWY — Done With You. O mentor esta na sua tela, implementando junto. Entre as calls, squads de IA continuam trabalhando. Nao e mais uma mentoria. E um co-piloto por 90 dias.' },
  { q: 'Nao tenho certeza se e pra mim', a: 'Criterios: faturamento >= R$80k/mes, autonomia de decisao, segmento de agencias ou servicos. Se nao se encaixa, direcionamos pro Bunker primeiro.' },
  { q: 'E se eu nao conseguir resultado em 90 dias?', a: 'Se voce seguir o programa e nao alcancar os marcos definidos, estendemos o acompanhamento por mais 30 dias sem custo adicional.' },
];

export default function Investment() {
  return (
    <div>
      {/* === O QUE ESTA INCLUSO === */}
      <section id="stack-valor" style={{ marginBottom: 120 }}>
        <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: 32, fontWeight: 700, color: '#FFF8F0', marginBottom: 8 }}>
          O Que Esta Incluso
        </h2>
        <div style={{ height: 2, width: 40, backgroundColor: '#FF6B00', marginBottom: 40, borderRadius: 1 }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {INCLUDES.map((item, i) => (
            <div key={item} style={{
              display: 'flex', alignItems: 'center', gap: 16, padding: '16px 0',
              borderBottom: i < INCLUDES.length - 1 ? '1px solid rgba(255,255,255,0.03)' : 'none',
            }}>
              <span style={{ color: '#FF6B00', fontSize: 11 }}>&#10003;</span>
              <span style={{ fontSize: 15, color: '#FFF8F0', lineHeight: 1.6 }}>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* === INVESTIMENTO === */}
      <section id="pricing" style={{ marginBottom: 120 }}>
        <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: 32, fontWeight: 700, color: '#FFF8F0', marginBottom: 8 }}>
          Investimento
        </h2>
        <div style={{ height: 2, width: 40, backgroundColor: '#FF6B00', marginBottom: 48, borderRadius: 1 }} />

        <div style={{ textAlign: 'center', maxWidth: 500, margin: '0 auto' }}>
          <div style={{ fontFamily: "'Cinzel', serif", fontSize: 56, fontWeight: 700, color: '#FFF8F0', marginBottom: 8 }}>
            R$ 15.000
          </div>
          <div style={{ fontSize: 14, color: '#B8976A', marginBottom: 32, lineHeight: 1.7 }}>
            90 dias &middot; Parcelamento em ate 12x &middot; Nota fiscal emitida
          </div>

          <div className="min-h-[44px]" style={{
            padding: '16px 32px', border: '1px solid #FF6B00', borderRadius: 8,
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', transition: 'background-color 0.2s',
            fontSize: 13, fontWeight: 600, color: '#FF6B00', fontFamily: "'Roboto Mono', monospace",
            letterSpacing: '0.05em', textTransform: 'uppercase' as const,
          }}>
            Agendar Diagnostico
          </div>

          <p style={{ fontSize: 12, color: 'rgba(184,151,106,0.5)', marginTop: 20 }}>
            Turmas limitadas a 10 participantes por ciclo.
          </p>
        </div>
      </section>

      {/* === PERGUNTAS FREQUENTES === */}
      <section id="objecoes" style={{ marginBottom: 120 }}>
        <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: 32, fontWeight: 700, color: '#FFF8F0', marginBottom: 8 }}>
          Perguntas Frequentes
        </h2>
        <div style={{ height: 2, width: 40, backgroundColor: '#FF6B00', marginBottom: 40, borderRadius: 1 }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {FAQS.map((faq) => (
            <div key={faq.q} style={{ paddingBottom: 24, borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
              <h4 style={{ fontSize: 15, color: '#FFF8F0', margin: '0 0 12px', fontWeight: 600 }}>{faq.q}</h4>
              <p style={{ fontSize: 14, lineHeight: 1.8, color: '#B8976A', margin: 0 }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* === GARANTIA === */}
      <section id="garantia" style={{ marginBottom: 120 }}>
        <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: 32, fontWeight: 700, color: '#FFF8F0', marginBottom: 8 }}>
          Garantia
        </h2>
        <div style={{ height: 2, width: 40, backgroundColor: '#FF6B00', marginBottom: 40, borderRadius: 1 }} />

        <div style={{ maxWidth: 600 }}>
          <p style={{ fontSize: 16, lineHeight: 1.9, color: '#FFF8F0', margin: '0 0 24px' }}>
            Se em 30 dias voce seguir o programa e sentir que nao esta no caminho certo, devolvemos 100% do investimento.
          </p>

          <div style={{ fontSize: 13, color: 'rgba(184,151,106,0.5)', lineHeight: 2 }}>
            Participacao nas 4 primeiras sessoes individuais. Execucao de 80% das tarefas. Uso dos squads fornecidos.
          </div>
        </div>
      </section>
    </div>
  );
}
