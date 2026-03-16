import { ArrowRight } from 'lucide-react';
import SectionHeader from '../shared/SectionHeader';

const VALUE_LADDER = [
  { tier: 'Gratis', name: 'YouTube', price: 'R$0', desc: 'Atrai e educa. Conteudo gratuito que demonstra o metodo.', color: '#A9A9A9' },
  { tier: 'Inner Circle', name: 'Comunidade', price: 'R$250/ano', desc: 'Implementacao em cohort. Frameworks prontos, accountability, suporte.', color: '#00E5FF' },
  { tier: 'Mentoria', name: 'Acompanhamento', price: 'R$15k', desc: 'Acompanhamento individualizado. So para quem ja provou que implementa.', color: '#CD7F32' },
  { tier: 'DFY', name: 'Done For You', price: 'Sob medida', desc: 'Implementacao completa. Nao e upsell — e recomendacao baseada em realidade.', color: '#FF3B30' },
];

const CONTRAST_TABLE = [
  { them: 'Consome conteudo infinito', us: 'Implementa em 7 dias' },
  { them: 'Compra curso de R$2.000 e nao termina', us: 'Investe R$250/ano e deploya todo mes' },
  { them: 'Segue guru e repete frases', us: 'Segue processo e mostra resultado' },
  { them: 'Muda de ferramenta toda semana', us: 'Domina uma stack e entrega' },
  { them: 'Faz sozinho e demora 6 meses', us: 'Faz em cohort e entrega em 30 dias' },
];

const SEGMENTS = [
  {
    name: 'Fabricio Iniciante',
    range: 'R$3-5k/mes',
    pain: 'Sobrecarregado com informacao, nao sabe por onde comecar.',
    prop: 'Pare de assistir tutorial e comece a implementar. O Bunker te da o passo 1, 2 e 3 — na ordem certa, com suporte de quem ja fez.',
  },
  {
    name: 'Fabricio Intermediario',
    range: 'R$5-10k/mes',
    pain: 'Faz tudo manualmente, sabe que IA pode ajudar mas nao encaixa na rotina.',
    prop: 'Voce ta trocando tempo por dinheiro e sabe que nao escala. O Bunker te mostra quais processos automatizar primeiro pra liberar 10+ horas por semana.',
  },
  {
    name: 'Fabricio Aspirante',
    range: 'CLT / freelancer',
    pain: 'Quer comecar negocio digital, ve IA como oportunidade.',
    prop: 'Voce nao precisa de mais um curso de R$2 mil. Precisa de um sistema de R$250/ano que te coloca pra implementar desde o dia 1.',
  },
  {
    name: 'Profissional de Marketing',
    range: 'Social Media / Agencia',
    pain: 'Clientes pedindo IA, nao sabe como entregar.',
    prop: 'Seus clientes ja pedem IA. Voce pode ser quem entrega — ou quem e substituido. O Bunker te da os frameworks pra implementar IA nos seus servicos.',
  },
];

export default function Positioning() {
  return (
    <div>
      <SectionHeader
        overline="01.4 // Positioning"
        title="Posicionamento"
        description="Onde o Bunker se encaixa no mercado, a escada de valor, e como nos diferenciamos."
      />

      {/* The Gap Diagram */}
      <h3
        style={{
          fontFamily: "'Averia Serif Libre', serif",
          fontSize: 28,
          color: '#FDF5E6',
          marginBottom: 24,
        }}
      >
        O Gap do Mercado
      </h3>
      <div
        style={{
          backgroundColor: 'rgba(47,53,58,0.4)',
          border: '1px solid rgba(255,255,255,0.05)',
          borderRadius: 8,
          padding: 40,
          marginBottom: 48,
          textAlign: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 24,
            flexWrap: 'wrap',
          }}
        >
          {/* Left */}
          <div style={{ textAlign: 'center' }}>
            <div
              style={{
                fontFamily: "'Roboto Mono', monospace",
                fontSize: 12,
                color: '#A9A9A9',
                marginBottom: 8,
              }}
            >
              YouTube / Conteudo Gratis
            </div>
            <div
              style={{
                fontFamily: "'Roboto Mono', monospace",
                fontSize: 20,
                fontWeight: 700,
                color: '#A9A9A9',
              }}
            >
              R$0
            </div>
            <div
              style={{
                fontFamily: "'Roboto Mono', monospace",
                fontSize: 11,
                color: '#A9A9A9',
                marginTop: 4,
              }}
            >
              Informacao sem estrutura
            </div>
          </div>

          <ArrowRight size={20} color="#A9A9A9" />

          {/* Center — Bunker */}
          <div
            style={{
              backgroundColor: 'rgba(0,229,255,0.1)',
              border: '2px solid #00E5FF',
              borderRadius: 8,
              padding: '20px 32px',
              animation: 'bk-glow-pulse 3s ease-in-out infinite',
            }}
          >
            <div
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: 14,
                color: '#00E5FF',
                marginBottom: 8,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
              }}
            >
              BUNKER DA IA
            </div>
            <div
              style={{
                fontFamily: "'Roboto Mono', monospace",
                fontSize: 24,
                fontWeight: 700,
                color: '#FDF5E6',
              }}
            >
              R$250/ano
            </div>
            <div
              style={{
                fontFamily: "'Roboto Mono', monospace",
                fontSize: 11,
                color: '#00E5FF',
                marginTop: 4,
              }}
            >
              Implementacao assistida em cohort
            </div>
          </div>

          <ArrowRight size={20} color="#A9A9A9" />

          {/* Right */}
          <div style={{ textAlign: 'center' }}>
            <div
              style={{
                fontFamily: "'Roboto Mono', monospace",
                fontSize: 12,
                color: '#A9A9A9',
                marginBottom: 8,
              }}
            >
              Mentorias Premium
            </div>
            <div
              style={{
                fontFamily: "'Roboto Mono', monospace",
                fontSize: 20,
                fontWeight: 700,
                color: '#A9A9A9',
              }}
            >
              R$15k+
            </div>
            <div
              style={{
                fontFamily: "'Roboto Mono', monospace",
                fontSize: 11,
                color: '#A9A9A9',
                marginTop: 4,
              }}
            >
              Caro demais para quem comeca
            </div>
          </div>
        </div>

        <p
          style={{
            fontFamily: "'Roboto Mono', monospace",
            fontSize: 13,
            color: '#A9A9A9',
            marginTop: 24,
            marginBottom: 0,
          }}
        >
          O Bunker preenche o gap entre conteudo gratuito infinito e mentorias inacessiveis.
        </p>
      </div>

      {/* Value Ladder */}
      <h3
        style={{
          fontFamily: "'Averia Serif Libre', serif",
          fontSize: 28,
          color: '#FDF5E6',
          marginBottom: 24,
        }}
      >
        Escada de Valor
      </h3>
      <div
        style={{
          display: 'flex',
          gap: 16,
          marginBottom: 48,
          overflowX: 'auto',
          paddingBottom: 8,
        }}
      >
        {VALUE_LADDER.map((item, i) => (
          <div
            key={item.tier}
            style={{
              minWidth: 220,
              flex: 1,
              backgroundColor: 'rgba(47,53,58,0.5)',
              borderTop: `3px solid ${item.color}`,
              borderRadius: 6,
              padding: 24,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                fontFamily: "'Roboto Mono', monospace",
                fontSize: 10,
                color: item.color,
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                marginBottom: 8,
              }}
            >
              Tier {i + 1}: {item.tier}
            </div>
            <div
              style={{
                fontFamily: "'Averia Serif Libre', serif",
                fontSize: 18,
                fontWeight: 700,
                color: '#FDF5E6',
                marginBottom: 4,
              }}
            >
              {item.name}
            </div>
            <div
              style={{
                fontFamily: "'Roboto Mono', monospace",
                fontSize: 16,
                fontWeight: 700,
                color: item.color,
                marginBottom: 12,
              }}
            >
              {item.price}
            </div>
            <p
              style={{
                fontFamily: "'Roboto Mono', monospace",
                fontSize: 12,
                color: '#A9A9A9',
                lineHeight: 1.6,
                margin: 0,
                flex: 1,
              }}
            >
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Enemy vs Bunker Contrast Table */}
      <h3
        style={{
          fontFamily: "'Averia Serif Libre', serif",
          fontSize: 28,
          color: '#FDF5E6',
          marginBottom: 24,
        }}
      >
        Nos vs. Eles
      </h3>
      <div
        style={{
          backgroundColor: 'rgba(47,53,58,0.3)',
          borderRadius: 8,
          overflow: 'hidden',
          marginBottom: 48,
          border: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        {/* Header */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            backgroundColor: 'rgba(255,59,48,0.08)',
          }}
        >
          <div
            style={{
              padding: '12px 20px',
              fontFamily: "'Roboto Mono', monospace",
              fontSize: 11,
              color: '#FF3B30',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              borderRight: '1px solid rgba(255,255,255,0.05)',
            }}
          >
            O Mundo La Fora
          </div>
          <div
            style={{
              padding: '12px 20px',
              fontFamily: "'Roboto Mono', monospace",
              fontSize: 11,
              color: '#00E5FF',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
            }}
          >
            O Bunker
          </div>
        </div>
        {/* Rows */}
        {CONTRAST_TABLE.map((row, i) => (
          <div
            key={i}
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              borderTop: '1px solid rgba(255,255,255,0.04)',
            }}
          >
            <div
              style={{
                padding: '14px 20px',
                fontFamily: "'Roboto Mono', monospace",
                fontSize: 13,
                color: '#A9A9A9',
                borderRight: '1px solid rgba(255,255,255,0.04)',
                lineHeight: 1.5,
              }}
            >
              {row.them}
            </div>
            <div
              style={{
                padding: '14px 20px',
                fontFamily: "'Roboto Mono', monospace",
                fontSize: 13,
                color: '#FDF5E6',
                lineHeight: 1.5,
              }}
            >
              {row.us}
            </div>
          </div>
        ))}
      </div>

      {/* Segment Value Propositions */}
      <h3
        style={{
          fontFamily: "'Averia Serif Libre', serif",
          fontSize: 28,
          color: '#FDF5E6',
          marginBottom: 24,
        }}
      >
        Proposta de Valor por Segmento
      </h3>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 16,
        }}
      >
        {SEGMENTS.map((seg) => (
          <div
            key={seg.name}
            style={{
              backgroundColor: 'rgba(47,53,58,0.4)',
              border: '1px solid rgba(255,255,255,0.05)',
              borderRadius: 6,
              padding: 24,
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
              <span
                style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontSize: 14,
                  fontWeight: 700,
                  color: '#FDF5E6',
                }}
              >
                {seg.name}
              </span>
              <span
                style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontSize: 11,
                  color: '#00E5FF',
                  border: '1px solid rgba(0,229,255,0.3)',
                  padding: '2px 8px',
                  borderRadius: 2,
                }}
              >
                {seg.range}
              </span>
            </div>
            <p
              style={{
                fontFamily: "'Roboto Mono', monospace",
                fontSize: 12,
                color: '#FF3B30',
                lineHeight: 1.5,
                marginBottom: 12,
              }}
            >
              Dor: {seg.pain}
            </p>
            <p
              style={{
                fontFamily: "'Roboto Mono', monospace",
                fontSize: 12,
                color: '#A9A9A9',
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              {seg.prop}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
