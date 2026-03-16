import { useState } from 'react';
import {
  Monitor,
  Megaphone,
  DollarSign,
  Brain,
  TrendingUp,
  ChevronDown,
  ChevronRight,
  Zap,
  Shield,
  Hammer,
  Star,
  Users,
  Rocket,
  Server,
  BarChart3,
  Check,
} from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  FAQ data from 02-icp-avatar.md objections + 01-primal-branding.md */
/* ------------------------------------------------------------------ */
const faqItems = [
  {
    q: 'R$250 e barato demais, deve ser fraco',
    a: 'O preco e acessivel porque o modelo depende de volume e cases de sucesso, nao de margem na entrada. O conteudo e a implementacao assistida valem mais de R$2.500 se comprados separadamente. Mantemos barato porque queremos 500 membros ativos, nao 5 membros pagando caro.',
  },
  {
    q: 'Ja comprei cursos que nao funcionaram',
    a: 'Exato. E qual era o formato? Video-aulas pra assistir sozinho, sem prazo e sem cobranca. Aqui e diferente: tem cohort com projeto real, encontros semanais e accountability. Nao tem como "deixar pra depois" porque o grupo avanca com ou sem voce.',
  },
  {
    q: 'Nao tenho tempo',
    a: 'O metodo exige 30 minutos por semana no minimo. Se voce nao tem 30 minutos, o problema nao e tempo -- e prioridade. E se nao prioriza agora, em 6 meses vai estar exatamente no mesmo lugar.',
  },
  {
    q: 'Nao sou tecnico / nao sei programar',
    a: '80% dos nossos membros nao sabiam programar quando entraram. Vibe Coding existe justamente para isso -- voce descreve o que quer em portugues e a IA gera o codigo. A trilha comeca do absoluto zero.',
  },
  {
    q: 'Vou esperar ate ter mais dinheiro',
    a: 'R$250 por ano e R$20 por mes. Menos que uma pizza. E o projeto voce define dentro da comunidade -- a maioria dos membros entrou sem saber o que ia construir e saiu com um produto real.',
  },
];

/* ------------------------------------------------------------------ */
/*  Enemies from 01-primal-branding.md Pilar 5                        */
/* ------------------------------------------------------------------ */
const enemies = [
  {
    icon: Monitor,
    title: 'A Esteira de Conteudo',
    desc: 'O sistema que mantem as pessoas eternamente consumindo e nunca implementando. Algoritmos de recomendacao que premiam tempo de tela, nao resultado.',
    combat: 'A esteira de conteudo e desenhada para te manter correndo sem sair do lugar.',
    color: '#FF3B30',
  },
  {
    icon: Megaphone,
    title: 'O Guru de Palco',
    desc: 'O modelo de negocio que vende transformacao sem oferecer estrutura de implementacao. Promessas vagas, resultados cherry-picked, preco alto, suporte zero.',
    combat: 'Guru vende ingresso pro show. O Bunker te coloca no palco.',
    color: '#FFAA00',
  },
  {
    icon: DollarSign,
    title: 'O Imposto do Amador',
    desc: 'O custo oculto de tentar fazer tudo sozinho -- tempo perdido, ferramentas erradas, erros que alguem com experiencia evitaria em 5 minutos.',
    combat: 'O imposto do amador e o preco que voce paga por orgulho de fazer sozinho.',
    color: '#FF3B30',
  },
  {
    icon: Brain,
    title: 'Paralisia por Analise',
    desc: 'O estado mental de quem tem tanta informacao que nao consegue dar o primeiro passo. Cada opcao parece errada porque existe outra opcao.',
    combat: 'No Bunker, a gente escolhe por voce. Depois voce entende por que.',
    color: '#FFAA00',
  },
  {
    icon: TrendingUp,
    title: 'O Ciclo do Hype',
    desc: 'A onda constante de "novidade que muda tudo" que reseta o progresso das pessoas a cada 2 semanas. Nova ferramenta, novo framework, novo modelo de IA.',
    combat: 'Enquanto o mundo corre atras da novidade, o Bunker termina o que comecou.',
    color: '#FF3B30',
  },
];

/* ------------------------------------------------------------------ */
/*  Levels from 06-movement-architecture.md                            */
/* ------------------------------------------------------------------ */
const levels = [
  { n: 1, title: 'Fundamentos IA', desc: 'Prompt engineering, ferramentas essenciais, primeiro hello world com IA', icon: Zap },
  { n: 2, title: 'Automacao + Agentes', desc: 'Workflows automatizados, agentes de IA, integracao de ferramentas', icon: Rocket },
  { n: 3, title: 'Infra & Deploy', desc: 'Docker, CI/CD, deploy em producao, dominio e SSL', icon: Server },
  { n: 4, title: 'Operacao & Escala', desc: 'Clientes, monetizacao, agencia de um, escala sustentavel', icon: BarChart3 },
];

/* ------------------------------------------------------------------ */
/*  Identity Arc from 06-movement-architecture.md                      */
/* ------------------------------------------------------------------ */
const identityStages = [
  { title: 'Consumidor', phrase: '"Estou estudando IA"', milestone: 'Percebe que o ciclo de consumo nao leva a resultado', icon: Monitor, color: '#A9A9A9' },
  { title: 'Recruta', phrase: '"Entrei no Bunker"', milestone: 'Primeira vitoria em 7 dias', icon: Shield, color: '#00E5FF' },
  { title: 'Construtor', phrase: '"Estou construindo meu projeto"', milestone: 'MVP funcional', icon: Hammer, color: '#FFAA00' },
  { title: 'Deployer', phrase: '"Meu projeto esta rodando"', milestone: 'Primeiro R$1 gerado pelo projeto', icon: Rocket, color: '#34C759' },
  { title: 'Agente', phrase: '"Construo solucoes com IA para clientes"', milestone: 'Receita recorrente com projetos IA', icon: Star, color: '#CD7F32' },
];

/* ================================================================== */
/*  SALES PAGE SHOWCASE                                                */
/* ================================================================== */
const SalesPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div style={{ background: '#0d1117' }}>
      {/* ===================== HERO ===================== */}
      <section
        className="relative overflow-hidden text-center"
        style={{
          minHeight: '70vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(180deg, #0d1117 0%, #1A1E22 50%, #2F353A 100%)',
        }}
      >
        {/* Scanline overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,229,255,0.015) 2px, rgba(0,229,255,0.015) 4px)',
          }}
        />

        <div className="relative z-10 px-6 py-20 max-w-[900px] mx-auto">
          <div
            className="mb-6"
            style={{
              fontFamily: "'Roboto Mono', monospace",
              fontSize: 11,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#00E5FF',
            }}
          >
            COMUNIDADE DE IMPLEMENTACAO COM IA
          </div>

          <h1
            className="mb-6"
            style={{
              fontFamily: "'Averia Serif Libre', serif",
              fontSize: 48,
              fontWeight: 700,
              lineHeight: 1.15,
              background: 'linear-gradient(135deg, #FDF5E6 0%, #CD7F32 40%, #FDF5E6 60%, #A9A9A9 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Voce ja consumiu conteudo suficiente.
            <br />
            Esta na hora de implementar.
          </h1>

          <p
            className="max-w-[600px] mx-auto mb-8"
            style={{
              fontFamily: "'Roboto Mono', monospace",
              fontSize: 15,
              color: '#A9A9A9',
              lineHeight: 1.7,
            }}
          >
            50 videos assistidos. Zero projetos no ar. A diferenca nao e talento — e implementacao assistida.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <button
              style={{
                fontFamily: "'Roboto Mono', monospace",
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                background: '#00E5FF',
                color: '#1A1E22',
                padding: '14px 28px',
                borderRadius: 6,
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 0 24px rgba(0,229,255,0.35)',
              }}
            >
              Entrar no Inner Circle — R$250/ano
            </button>
            <button
              style={{
                fontFamily: "'Roboto Mono', monospace",
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                background: 'transparent',
                color: '#00E5FF',
                padding: '14px 28px',
                borderRadius: 6,
                border: '1px solid #00E5FF',
                cursor: 'pointer',
              }}
            >
              Ver como funciona
            </button>
          </div>

          <div
            className="mt-10"
            style={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: 13,
              color: '#A9A9A9',
              opacity: 0.7,
            }}
          >
            147 membros &bull; 89 projetos deployados &bull; 34 primeiros clientes
          </div>
        </div>
      </section>

      {/* ===================== PROBLEM ===================== */}
      <section className="px-6 py-20 max-w-[1000px] mx-auto">
        <p
          className="mb-3"
          style={{
            fontFamily: "'Roboto Mono', monospace",
            fontSize: 11,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#00E5FF',
          }}
        >
          O Problema
        </p>
        <h2
          className="mb-10"
          style={{
            fontFamily: "'Averia Serif Libre', serif",
            fontSize: 36,
            fontWeight: 700,
            color: '#FDF5E6',
          }}
        >
          A Lacuna da Implementacao
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { stat: '50 videos assistidos', result: '0 projetos deployados', accent: '#FF3B30' },
            { stat: 'R$3-10k gastos em cursos', result: '0 ROI', accent: '#FFAA00' },
            { stat: '6 meses estudando', result: 'Mesma situacao', accent: '#FF3B30' },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-lg p-6"
              style={{
                background: '#2F353A',
                borderLeft: `3px solid ${item.accent}`,
              }}
            >
              <div
                style={{
                  fontFamily: "'Orbitron', sans-serif",
                  fontSize: 15,
                  fontWeight: 700,
                  color: '#FDF5E6',
                  marginBottom: 8,
                }}
              >
                {item.stat}
              </div>
              <div
                style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontSize: 13,
                  color: item.accent,
                  fontWeight: 600,
                }}
              >
                &rarr; {item.result}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== ENEMIES ===================== */}
      <section className="px-6 py-20 max-w-[1000px] mx-auto">
        <p
          className="mb-3"
          style={{
            fontFamily: "'Roboto Mono', monospace",
            fontSize: 11,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#FF3B30',
          }}
        >
          Avaliacao de Ameacas
        </p>
        <h2
          className="mb-10"
          style={{
            fontFamily: "'Averia Serif Libre', serif",
            fontSize: 36,
            fontWeight: 700,
            color: '#FDF5E6',
          }}
        >
          Contra o que lutamos
        </h2>

        <div className="flex flex-col gap-4">
          {enemies.map((e, i) => {
            const Icon = e.icon;
            return (
              <div
                key={i}
                className="rounded-lg p-6 flex gap-5 items-start"
                style={{
                  background: '#2F353A',
                  borderLeft: `3px solid ${e.color}`,
                }}
              >
                <div
                  className="shrink-0 w-10 h-10 rounded flex items-center justify-center"
                  style={{ background: 'rgba(255,255,255,0.05)' }}
                >
                  <Icon size={20} color={e.color} />
                </div>
                <div>
                  <div
                    className="mb-2"
                    style={{
                      fontFamily: "'Averia Serif Libre', serif",
                      fontSize: 18,
                      fontWeight: 700,
                      color: '#FDF5E6',
                    }}
                  >
                    {i + 1}. {e.title}
                  </div>
                  <p
                    className="mb-3"
                    style={{
                      fontFamily: "'Roboto Mono', monospace",
                      fontSize: 13,
                      color: '#A9A9A9',
                      lineHeight: 1.7,
                    }}
                  >
                    {e.desc}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Roboto Mono', monospace",
                      fontSize: 12,
                      color: e.color,
                      fontStyle: 'italic',
                    }}
                  >
                    "{e.combat}"
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ===================== HOW IT WORKS ===================== */}
      <section className="px-6 py-20 max-w-[1000px] mx-auto">
        <p
          className="mb-3"
          style={{
            fontFamily: "'Roboto Mono', monospace",
            fontSize: 11,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#00E5FF',
          }}
        >
          A Trilha
        </p>
        <h2
          className="mb-12"
          style={{
            fontFamily: "'Averia Serif Libre', serif",
            fontSize: 36,
            fontWeight: 700,
            color: '#FDF5E6',
          }}
        >
          Como Funciona
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
          {levels.map((l, i) => {
            const Icon = l.icon;
            return (
              <div key={i} className="relative flex flex-col items-center text-center px-4 pb-8">
                {/* connector line */}
                {i < levels.length - 1 && (
                  <div
                    className="hidden md:block absolute top-6 right-0 w-1/2 h-px"
                    style={{ background: 'rgba(0,229,255,0.2)' }}
                  />
                )}
                {i > 0 && (
                  <div
                    className="hidden md:block absolute top-6 left-0 w-1/2 h-px"
                    style={{ background: 'rgba(0,229,255,0.2)' }}
                  />
                )}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4 relative z-10"
                  style={{
                    background: '#1A1E22',
                    border: '2px solid #00E5FF',
                    boxShadow: '0 0 12px rgba(0,229,255,0.2)',
                  }}
                >
                  <Icon size={20} color="#00E5FF" />
                </div>
                <div
                  className="mb-1"
                  style={{
                    fontFamily: "'Orbitron', sans-serif",
                    fontSize: 11,
                    color: '#00E5FF',
                    letterSpacing: '0.1em',
                  }}
                >
                  NIVEL {l.n}
                </div>
                <div
                  className="mb-2"
                  style={{
                    fontFamily: "'Averia Serif Libre', serif",
                    fontSize: 16,
                    fontWeight: 700,
                    color: '#FDF5E6',
                  }}
                >
                  {l.title}
                </div>
                <p
                  style={{
                    fontFamily: "'Roboto Mono', monospace",
                    fontSize: 12,
                    color: '#A9A9A9',
                    lineHeight: 1.6,
                  }}
                >
                  {l.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ===================== IDENTITY ARC ===================== */}
      <section className="px-6 py-20 max-w-[1100px] mx-auto">
        <p
          className="mb-3"
          style={{
            fontFamily: "'Roboto Mono', monospace",
            fontSize: 11,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#CD7F32',
          }}
        >
          Arco de Transformacao
        </p>
        <h2
          className="mb-12"
          style={{
            fontFamily: "'Averia Serif Libre', serif",
            fontSize: 36,
            fontWeight: 700,
            color: '#FDF5E6',
          }}
        >
          De Consumidor a Agente
        </h2>

        <div className="flex flex-col md:flex-row gap-0 items-stretch">
          {identityStages.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="flex-1 relative">
                {/* arrow connector */}
                {i < identityStages.length - 1 && (
                  <div className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20">
                    <ChevronRight size={20} color="rgba(255,255,255,0.2)" />
                  </div>
                )}
                <div
                  className="rounded-lg p-5 h-full mx-1"
                  style={{
                    background: '#1A1E22',
                    border: `1px solid ${s.color}20`,
                  }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Icon size={16} color={s.color} />
                    <span
                      style={{
                        fontFamily: "'Orbitron', sans-serif",
                        fontSize: 12,
                        fontWeight: 700,
                        color: s.color,
                      }}
                    >
                      {s.title}
                    </span>
                  </div>
                  <p
                    className="mb-2"
                    style={{
                      fontFamily: "'Averia Serif Libre', serif",
                      fontSize: 14,
                      color: '#FDF5E6',
                      fontStyle: 'italic',
                    }}
                  >
                    {s.phrase}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Roboto Mono', monospace",
                      fontSize: 11,
                      color: '#A9A9A9',
                      lineHeight: 1.6,
                    }}
                  >
                    {s.milestone}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ===================== PRICING ===================== */}
      <section className="px-6 py-20 max-w-[1000px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Pricing Card */}
          <div
            className="relative rounded-xl p-10"
            style={{ background: '#2F353A', border: '1px solid rgba(0,229,255,0.1)' }}
          >
            <div
              className="absolute top-0 left-0 right-0 h-[3px] rounded-t-xl"
              style={{ background: 'linear-gradient(90deg, transparent, #00E5FF, transparent)' }}
            />
            <div
              className="mb-2"
              style={{
                fontFamily: "'Roboto Mono', monospace",
                fontSize: 11,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#00E5FF',
              }}
            >
              Inner Circle
            </div>
            <div style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 48, fontWeight: 700, color: '#FDF5E6' }}>
              R$250
              <span style={{ fontSize: 16, color: '#A9A9A9' }}>/ano</span>
            </div>
            <div
              className="mt-2 mb-6"
              style={{ fontFamily: "'Roboto Mono', monospace", fontSize: 13, color: '#A9A9A9' }}
            >
              = R$20/mes = R$0,66/dia
            </div>
            <div
              className="leading-8 mb-6"
              style={{ fontFamily: "'Roboto Mono', monospace", fontSize: 14, color: '#FDF5E6' }}
            >
              {[
                'Trilhas modulares (Niveis 1-4)',
                'Encontros semanais ao vivo',
                'Cohort mensal com accountability',
                'Hub de conexoes e networking',
                'Primeiro deploy em 7 dias',
                'Canal #socorro para duvidas',
                'Arsenal de ferramentas curado',
              ].map((f, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Check size={14} color="#34C759" /> {f}
                </div>
              ))}
            </div>
            <button
              className="w-full"
              style={{
                fontFamily: "'Roboto Mono', monospace",
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                background: '#00E5FF',
                color: '#1A1E22',
                padding: '14px 28px',
                borderRadius: 6,
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 0 24px rgba(0,229,255,0.35)',
              }}
            >
              Quero Implementar Agora
            </button>
          </div>

          {/* Manifesto Card */}
          <div
            className="rounded-xl p-10 flex flex-col justify-center"
            style={{
              background: 'linear-gradient(135deg, #2B3A33, #1A1E22)',
              border: '1px solid rgba(205,127,50,0.2)',
            }}
          >
            <div
              className="mb-4"
              style={{
                fontFamily: "'Roboto Mono', monospace",
                fontSize: 11,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#CD7F32',
              }}
            >
              Manifesto
            </div>
            <div
              className="mb-6"
              style={{
                fontFamily: "'Averia Serif Libre', serif",
                fontSize: 22,
                fontWeight: 700,
                lineHeight: 1.4,
                color: '#FDF5E6',
              }}
            >
              "O Bunker nao foi criado para te ensinar IA. Foi criado porque ninguem te ajudava a USAR."
            </div>
            <div style={{ fontFamily: "'Roboto Mono', monospace", fontSize: 14, color: '#A9A9A9', lineHeight: 2 }}>
              <p>Implementacao mata informacao.</p>
              <p>O imposto do amador e real -- e caro.</p>
              <p>30 minutos com direcao {'>'} 50 horas sem rumo.</p>
              <p>Deploy primeiro, perfeicao depois.</p>
              <p>A comunidade e o produto.</p>
              <p className="mt-4" style={{ color: '#CD7F32', fontWeight: 600 }}>
                Anti-guru. Anti-hype. Pro-engenharia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FAQ ===================== */}
      <section className="px-6 py-20 max-w-[800px] mx-auto">
        <p
          className="mb-3"
          style={{
            fontFamily: "'Roboto Mono', monospace",
            fontSize: 11,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#00E5FF',
          }}
        >
          Intelligence Briefing
        </p>
        <h2
          className="mb-10"
          style={{
            fontFamily: "'Averia Serif Libre', serif",
            fontSize: 36,
            fontWeight: 700,
            color: '#FDF5E6',
          }}
        >
          Perguntas Frequentes
        </h2>

        <div className="flex flex-col gap-3">
          {faqItems.map((item, i) => {
            const isOpen = openFaq === i;
            return (
              <div
                key={i}
                className="rounded-lg overflow-hidden"
                style={{
                  background: '#1A1E22',
                  borderLeft: isOpen ? '3px solid #00E5FF' : '3px solid transparent',
                  transition: 'border-color 0.2s',
                }}
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  className="w-full text-left p-5 flex items-center gap-4"
                  style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  <span
                    style={{
                      fontFamily: "'Orbitron', sans-serif",
                      fontSize: 11,
                      color: '#00E5FF',
                      opacity: 0.5,
                      minWidth: 24,
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span
                    className="flex-1"
                    style={{
                      fontFamily: "'Roboto Mono', monospace",
                      fontSize: 14,
                      fontWeight: 600,
                      color: '#FDF5E6',
                    }}
                  >
                    "{item.q}"
                  </span>
                  <ChevronDown
                    size={18}
                    color="#A9A9A9"
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s',
                    }}
                  />
                </button>
                {isOpen && (
                  <div
                    className="px-5 pb-5"
                    style={{
                      fontFamily: "'Roboto Mono', monospace",
                      fontSize: 13,
                      color: '#A9A9A9',
                      lineHeight: 1.7,
                      paddingLeft: 52,
                    }}
                  >
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ===================== FINAL CTA ===================== */}
      <section
        className="text-center px-6 py-24"
        style={{
          background: 'linear-gradient(180deg, #0d1117 0%, #1A1E22 40%, #2B3A33 100%)',
        }}
      >
        <div className="max-w-[700px] mx-auto">
          <div className="flex justify-center mb-6">
            <Users size={32} color="#00E5FF" />
          </div>
          <h2
            className="mb-4"
            style={{
              fontFamily: "'Averia Serif Libre', serif",
              fontSize: 36,
              fontWeight: 700,
              color: '#FDF5E6',
            }}
          >
            A janela da IA esta aberta. Os que construirem agora vao dominar os proximos 10 anos.
          </h2>
          <p
            className="mb-8"
            style={{
              fontFamily: "'Roboto Mono', monospace",
              fontSize: 14,
              color: '#A9A9A9',
              lineHeight: 1.7,
            }}
          >
            Seu proximo video nao vai mudar sua vida. Seu proximo deploy pode.
          </p>
          <button
            style={{
              fontFamily: "'Roboto Mono', monospace",
              fontSize: 15,
              fontWeight: 600,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              background: '#00E5FF',
              color: '#1A1E22',
              padding: '18px 40px',
              borderRadius: 6,
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 0 30px rgba(0,229,255,0.4)',
            }}
          >
            Quero Implementar Agora
          </button>
          <p
            className="mt-6"
            style={{
              fontFamily: "'Roboto Mono', monospace",
              fontSize: 12,
              color: '#A9A9A9',
              opacity: 0.6,
            }}
          >
            Acesso imediato &bull; Cancele quando quiser &bull; Garantia de 7 dias
          </p>
        </div>
      </section>

      {/* ===================== FOOTER ===================== */}
      <footer
        className="text-center py-12"
        style={{
          fontFamily: "'Roboto Mono', monospace",
          fontSize: 12,
          color: '#A9A9A9',
          opacity: 0.5,
        }}
      >
        Bunker da IA — Comunidade de Implementacao
        <br />
        Anti-guru. Anti-hype. Pro-engenharia.
      </footer>
    </div>
  );
};

export default SalesPage;
