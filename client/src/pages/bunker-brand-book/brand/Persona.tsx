import { useState } from 'react';
import {
  User, Clock, DollarSign, Heart, Users, Cpu,
  ChevronDown, ChevronUp, MessageSquare,
} from 'lucide-react';
import SectionHeader from '../shared/SectionHeader';

const TIMELINE = [
  { time: '07:30', icon: <Clock size={16} />, title: 'Acorda e pega o celular', desc: 'Abre YouTube, ve 3 videos novos sobre IA. Assiste inicio de "como criar SaaS com Claude em 1 hora". Fica empolgado.' },
  { time: '08:30', icon: <MessageSquare size={16} />, title: 'Cafe + Twitter/X', desc: 'Ve indie hacker postando $5k MRR. Pensa "eu poderia fazer isso". Salva o post. Nunca mais volta nele.' },
  { time: '09:00', icon: <Cpu size={16} />, title: 'Tenta comecar projeto', desc: 'Abre Claude ou Cursor. Digita prompt. Resultado nao e o esperado. Googla. Cai em mais tutorial.' },
  { time: '10:30', icon: <Clock size={16} />, title: 'Rabbit hole', desc: 'Ja esta em outra aba, assistindo video sobre "agencia de IA". 3 paginas de notas no Notion. Zero proximo passo concreto.' },
  { time: '12:00', icon: <Users size={16} />, title: 'Almoco + WhatsApp', desc: 'Amigo pergunta sobre o "projeto de IA". Responde: "ta andando, semana que vem tem novidade". Nao tem novidade.' },
  { time: '15:00', icon: <DollarSign size={16} />, title: 'Tentacao de compra', desc: 'Notificacao de curso novo: R$97. Pensa em comprar. Lembra dos 3 ultimos que nao terminou. Fecha. Abre. Fecha.' },
  { time: '17:00', icon: <Cpu size={16} />, title: 'Tentativa frustrada', desc: 'Erro que nao entende. Cola no ChatGPT — resposta generica. Tenta Claude — melhor, mas nao sabe aplicar. Fecha tudo.' },
  { time: '19:00', icon: <Clock size={16} />, title: 'Janta + YouTube', desc: 'Descobre video de Vibe Coding. Assiste ate o fim. Se inscreve. Sente fio de esperanca.' },
  { time: '22:00', icon: <Heart size={16} />, title: 'Na cama, rolando celular', desc: 'Nao deployou nada. Nao vendeu nada. Outro dia de "estudo" sem resultado. Promete que amanha sera diferente.' },
];

const PAIN_CATEGORIES = [
  {
    title: 'Financeira',
    icon: <DollarSign size={20} />,
    color: '#FF3B30',
    pains: [
      'Renda instavel — meses de R$8k seguidos de meses de R$2k',
      'Ja gastou R$3k-R$10k em cursos e ferramentas sem resultado',
      'Nao consegue planejar 3 meses a frente',
      'Compara o proprio faturamento com o que "gurus" ostentam',
    ],
  },
  {
    title: 'Emocional',
    icon: <Heart size={20} />,
    color: '#FFAA00',
    pains: [
      'Vergonha silenciosa: meses estudando IA e nada para mostrar',
      'Sindrome do impostor: fala sobre IA mas nao faz projeto do zero',
      'Paralisia por analise: 47 ideias no Notion, 12 tutoriais salvos, zero execucao',
      'Solidao do empreendedor solo: ninguem no circulo entende',
      'Culpa do tempo perdido: cada mes sem resultado aumenta a pressao',
    ],
  },
  {
    title: 'Social',
    icon: <Users size={20} />,
    color: '#3A86FF',
    pains: [
      'Nao tem network de pessoas no mesmo nivel',
      'Nao tem ninguem para perguntar "como voce resolveu isso?"',
      'Ve comunidades gringas de builders e nao encontra equivalente BR',
      'Quer ser visto como profissional de IA mas nao tem portfolio',
    ],
  },
  {
    title: 'Tecnica',
    icon: <Cpu size={20} />,
    color: '#00E5FF',
    pains: [
      'Sabe que Vibe Coding existe mas nao sabe os primeiros passos',
      'Nao entende a ponte entre "prompt" e "produto deployado"',
      'Perdido entre ferramentas: Claude, Cursor, Bolt, v0, Replit',
      'Nao sabe Docker, deploy, configurar servidor',
      'Segue tutorial ate a metade e trava quando contexto muda',
    ],
  },
];

const ASPIRATIONS = [
  { period: '30 Dias', items: ['Um projeto funcionando e deployado', 'Entender o fluxo: ideia > prompt > codigo > deploy > URL', 'Primeira interacao real com alguem no mesmo caminho', 'Poder dizer "olha o que eu deployei" — com link'] },
  { period: '90 Dias', items: ['2-3 projetos no portfolio', 'Primeiro cliente pagante (mesmo R$500)', 'Dominar stack basico: Claude/Cursor + GitHub + deploy', 'Clareza sobre modelo: agencia, SaaS, freelance'] },
  { period: '1 Ano', items: ['Faturando R$10k-R$20k/mes consistente', 'Agencia de uma pessoa so ou micro-SaaS com receita recorrente', 'Reconhecido na comunidade como quem executa', 'Liberdade de tempo — 4-6h/dia no que escolhe'] },
];

const QUOTES = [
  'Eu sei que IA e o futuro. Mas toda vez que sento pra fazer, eu travo. Nao e falta de vontade, e que eu literalmente nao sei o proximo passo.',
  'Ja gastei uns R$5 mil em curso nos ultimos 2 anos. Metade eu nem terminei. To cansado de ser trouxa.',
  'O cara no YouTube faz em 10 minutos o que eu nao consigo em 3 dias. Sera que sou burro ou tem algo que nao estao mostrando?',
  'Meu maior medo e chegar em dezembro e estar no mesmo lugar. Mesma renda, mesmo projeto travado.',
  'Se eu tivesse alguem pra olhar minha tela e falar "faz isso aqui, agora", eu resolveria em uma tarde.',
  'Minha namorada ja fez aquela cara de "de novo isso?" quando falo que estou estudando um negocio novo.',
  'Eu vejo os caras no Twitter postando "$10k MRR". Sei que metade e mentira. Mas a outra metade me come por dentro.',
  'O que eu preciso nao e mais um curso. E alguem que ja fez me mostrando passo a passo na pratica.',
  'R$250 por ano? Isso e menos do que gasto de Uber num mes. O medo nao e o preco, e investir e nao fazer nada de novo.',
  'Eu tenho uma ideia boa. Mas a distancia entre a ideia na minha cabeca e um produto rodando parece um abismo. Preciso de uma ponte.',
];

const OBJECTIONS = [
  { q: 'R$250 e muito barato, deve ser fraco', a: 'O preco e acessivel porque o modelo depende de volume e cases de sucesso. O conteudo e implementacao assistida valem mais de R$2.500 separadamente. Mantemos barato porque queremos 500 membros ativos, nao 5 pagando caro.' },
  { q: 'Ja comprei cursos que nao funcionaram', a: 'Exato. E qual era o formato? Video-aulas pra assistir sozinho, sem prazo e sem cobranca. Aqui tem cohort com projeto real, encontros semanais e accountability. Nao tem como "deixar pra depois".' },
  { q: 'Nao tenho tempo', a: 'O metodo exige 30 minutos por semana no minimo. Se nao tem 30 minutos, o problema nao e tempo — e prioridade. Em 6 meses, vai estar exatamente no mesmo lugar.' },
  { q: 'Nao sei programar', a: '80% dos membros nao sabiam programar quando entraram. Vibe Coding existe pra isso — voce descreve em portugues e a IA gera o codigo. A trilha comeca do absoluto zero.' },
  { q: 'Vou esperar ter mais dinheiro', a: 'R$250/ano = R$20/mes. Menos que uma pizza. E o projeto voce define dentro da comunidade — a maioria entrou sem saber o que ia construir.' },
  { q: 'Prefiro aprender sozinho no YouTube', a: 'Quanto tempo faz que esta aprendendo sozinho? O YouTube te da informacao. A comunidade te da implementacao. A diferenca entre saber e fazer e ter alguem do lado.' },
  { q: 'Parece bom demais pra ser verdade', a: 'Saudavel desconfiar. A comunidade e anual com transparencia total. Voce ve projetos dos membros, participa dos encontros e decide. Sem contrato, sem multa. 7 dias pra devolver.' },
  { q: 'E se eu nao conseguir acompanhar?', a: 'A trilha tem 4 niveis. Comeca no Nivel 1 com prompt engineering basico. Ninguem te joga no Docker no primeiro dia. Tem gente de todos os niveis.' },
  { q: 'Vou esperar a proxima turma', a: 'Cada semana que passa alguem deploya enquanto voce espera. A comunidade roda o ano todo. Nao tem "proxima turma". Tem o cohort acontecendo agora.' },
  { q: 'Nao sei se IA e pra mim', a: 'IA nao e trend como NFT ou dropshipping. E infraestrutura — como internet nos anos 2000. A questao nao e SE vai impactar seu trabalho, e QUANDO.' },
];

export default function Persona() {
  const [openObjection, setOpenObjection] = useState<number | null>(null);

  return (
    <div>
      <SectionHeader
        overline="01.2 // Persona"
        title="Avatar: Fabricio"
        description="Perfil profundo do ICP. Quem ele e, como pensa, o que dói e o que sonha."
      />

      {/* Dog Tag Card */}
      <div
        className="bk-metal"
        style={{
          borderRadius: 8,
          padding: 32,
          marginBottom: 48,
          border: '1px solid rgba(205,127,50,0.3)',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 16,
            right: 16,
            fontFamily: "'Roboto Mono', monospace",
            fontSize: 10,
            color: '#CD7F32',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
          }}
        >
          FICHA DE RECRUTA
        </div>
        <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: '50%',
              backgroundColor: '#1A1E22',
              border: '2px solid #CD7F32',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <User size={28} color="#CD7F32" />
          </div>
          <div style={{ flex: 1, minWidth: 240 }}>
            <h3
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: 24,
                color: '#FDF5E6',
                margin: 0,
                marginBottom: 16,
              }}
            >
              Fabricio
            </h3>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: 12,
                fontFamily: "'Roboto Mono', monospace",
                fontSize: 13,
              }}
            >
              {[
                ['Idade', '28-34 anos'],
                ['Renda', 'R$3k-R$10k/mes (instavel)'],
                ['Situacao', 'Autonomo / freelancer'],
                ['Escolaridade', 'Superior incompleto ou completo'],
                ['Moradia', 'Aluguel ou familia'],
                ['Consumo', '2-4h YouTube/dia'],
              ].map(([label, value]) => (
                <div key={label}>
                  <span style={{ color: '#A9A9A9' }}>{label}: </span>
                  <span style={{ color: '#FDF5E6' }}>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Day in the Life Timeline */}
      <h3
        style={{
          fontFamily: "'Averia Serif Libre', serif",
          fontSize: 28,
          color: '#FDF5E6',
          marginBottom: 24,
        }}
      >
        Um Dia na Vida
      </h3>
      <div style={{ position: 'relative', paddingLeft: 48, marginBottom: 48 }}>
        {/* Vertical line */}
        <div
          style={{
            position: 'absolute',
            left: 19,
            top: 0,
            bottom: 0,
            width: 2,
            backgroundColor: 'rgba(0,229,255,0.2)',
          }}
        />
        {TIMELINE.map((item, i) => (
          <div key={i} style={{ position: 'relative', marginBottom: 20, paddingBottom: 4 }}>
            {/* Dot */}
            <div
              style={{
                position: 'absolute',
                left: -36,
                top: 4,
                width: 12,
                height: 12,
                borderRadius: '50%',
                backgroundColor: '#1A1E22',
                border: '2px solid #00E5FF',
              }}
            />
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
              <span
                style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontSize: 13,
                  fontWeight: 700,
                  color: '#00E5FF',
                }}
              >
                {item.time}
              </span>
              <span style={{ color: '#A9A9A9' }}>{item.icon}</span>
              <span
                style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontSize: 13,
                  fontWeight: 700,
                  color: '#FDF5E6',
                }}
              >
                {item.title}
              </span>
            </div>
            <p
              style={{
                fontFamily: "'Roboto Mono', monospace",
                fontSize: 12,
                color: '#A9A9A9',
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Pains by Category */}
      <h3
        style={{
          fontFamily: "'Averia Serif Libre', serif",
          fontSize: 28,
          color: '#FDF5E6',
          marginBottom: 24,
        }}
      >
        Mapa de Dores
      </h3>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 16,
          marginBottom: 48,
        }}
      >
        {PAIN_CATEGORIES.map((cat) => (
          <div
            key={cat.title}
            style={{
              backgroundColor: 'rgba(47,53,58,0.5)',
              borderTop: `3px solid ${cat.color}`,
              borderRadius: 6,
              padding: 24,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <span style={{ color: cat.color }}>{cat.icon}</span>
              <span
                style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontSize: 14,
                  fontWeight: 700,
                  color: '#FDF5E6',
                }}
              >
                {cat.title}
              </span>
            </div>
            <ul style={{ margin: 0, paddingLeft: 16, listStyleType: 'none' }}>
              {cat.pains.map((pain, i) => (
                <li
                  key={i}
                  style={{
                    fontFamily: "'Roboto Mono', monospace",
                    fontSize: 12,
                    color: '#A9A9A9',
                    lineHeight: 1.6,
                    marginBottom: 8,
                    paddingLeft: 8,
                    borderLeft: `1px solid ${cat.color}33`,
                  }}
                >
                  {pain}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Aspirations Timeline */}
      <h3
        style={{
          fontFamily: "'Averia Serif Libre', serif",
          fontSize: 28,
          color: '#FDF5E6',
          marginBottom: 24,
        }}
      >
        Dream Outcome
      </h3>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 16,
          marginBottom: 48,
        }}
      >
        {ASPIRATIONS.map((asp) => (
          <div
            key={asp.period}
            style={{
              backgroundColor: 'rgba(47,53,58,0.4)',
              border: '1px solid rgba(0,229,255,0.15)',
              borderRadius: 6,
              padding: 24,
            }}
          >
            <div
              style={{
                fontFamily: "'Roboto Mono', monospace",
                fontSize: 11,
                color: '#00E5FF',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                marginBottom: 16,
              }}
            >
              Em {asp.period}
            </div>
            {asp.items.map((item, i) => (
              <div
                key={i}
                style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontSize: 12,
                  color: '#FDF5E6',
                  lineHeight: 1.6,
                  marginBottom: 8,
                  paddingLeft: 12,
                  borderLeft: '1px solid rgba(0,229,255,0.2)',
                }}
              >
                {item}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Intercepted Transmissions */}
      <h3
        style={{
          fontFamily: "'Averia Serif Libre', serif",
          fontSize: 28,
          color: '#FDF5E6',
          marginBottom: 8,
        }}
      >
        Transmissoes Interceptadas
      </h3>
      <p
        style={{
          fontFamily: "'Roboto Mono', monospace",
          fontSize: 12,
          color: '#A9A9A9',
          marginBottom: 24,
        }}
      >
        Dialogo interno do Fabricio — frases reais do avatar.
      </p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 12,
          marginBottom: 48,
        }}
      >
        {QUOTES.map((quote, i) => (
          <div
            key={i}
            className="bk-scan"
            style={{
              backgroundColor: 'rgba(13,17,23,0.8)',
              border: '1px solid rgba(0,229,255,0.1)',
              borderRadius: 4,
              padding: 16,
            }}
          >
            <div
              style={{
                fontFamily: "'Roboto Mono', monospace",
                fontSize: 10,
                color: '#00E5FF',
                marginBottom: 8,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
              }}
            >
              Transmissao #{String(i + 1).padStart(2, '0')}
            </div>
            <p
              style={{
                fontFamily: "'Roboto Mono', monospace",
                fontSize: 12,
                color: '#FDF5E6',
                lineHeight: 1.7,
                margin: 0,
                fontStyle: 'italic',
                opacity: 0.9,
              }}
            >
              "{quote}"
            </p>
          </div>
        ))}
      </div>

      {/* Objection Accordion */}
      <h3
        style={{
          fontFamily: "'Averia Serif Libre', serif",
          fontSize: 28,
          color: '#FDF5E6',
          marginBottom: 24,
        }}
      >
        Mapa de Objecoes
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {OBJECTIONS.map((obj, i) => (
          <div
            key={i}
            style={{
              backgroundColor: 'rgba(47,53,58,0.4)',
              border: '1px solid rgba(255,255,255,0.05)',
              borderRadius: 6,
              overflow: 'hidden',
            }}
          >
            <button
              onClick={() => setOpenObjection(openObjection === i ? null : i)}
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '16px 20px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
              }}
            >
              <span
                style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontSize: 13,
                  color: '#FDF5E6',
                  fontWeight: 600,
                }}
              >
                "{obj.q}"
              </span>
              {openObjection === i ? (
                <ChevronUp size={16} color="#A9A9A9" />
              ) : (
                <ChevronDown size={16} color="#A9A9A9" />
              )}
            </button>
            {openObjection === i && (
              <div
                style={{
                  padding: '0 20px 16px',
                  fontFamily: "'Roboto Mono', monospace",
                  fontSize: 12,
                  color: '#A9A9A9',
                  lineHeight: 1.7,
                  borderTop: '1px solid rgba(255,255,255,0.04)',
                  paddingTop: 16,
                }}
              >
                <span style={{ color: '#00E5FF', fontWeight: 700 }}>Reframe: </span>
                {obj.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
