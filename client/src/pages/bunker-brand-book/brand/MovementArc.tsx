import { ArrowRight, Calendar, Users, Repeat } from 'lucide-react';
import SectionHeader from '../shared/SectionHeader';

const STAGES = [
  {
    id: 0,
    title: 'Consumidor',
    subtitle: 'Pre-Bunker',
    identity: '"Estou estudando IA"',
    behavior: 'Assiste videos, acumula bookmarks, nao implementa',
    trigger: 'Perceber que o ciclo de consumo nao leva a resultado',
    badge: null,
    color: '#A9A9A9',
  },
  {
    id: 1,
    title: 'Recruta',
    subtitle: 'Estagio 1',
    identity: '"Entrei no Bunker"',
    behavior: 'Segue a trilha, participa das lives, pede ajuda',
    trigger: 'Completar onboarding de 7 dias + primeira acao concreta',
    badge: 'Capacete de Recruta',
    color: '#34C759',
  },
  {
    id: 2,
    title: 'Construtor',
    subtitle: 'Estagio 2',
    identity: '"Estou construindo meu projeto"',
    behavior: 'Desenvolve ativamente, compartilha progresso, ajuda recrutas',
    trigger: 'Mostrar MVP em andamento na live semanal',
    badge: 'Martelo de Construtor',
    color: '#FFAA00',
  },
  {
    id: 3,
    title: 'Deployer',
    subtitle: 'Estagio 3',
    identity: '"Meu projeto esta rodando"',
    behavior: 'Projeto gerando valor, documenta aprendizados, vira referencia',
    trigger: 'Deploy publico + primeiro cliente/usuario',
    badge: 'Escudo de Deploy',
    color: '#00E5FF',
  },
  {
    id: 4,
    title: 'Agente',
    subtitle: 'Estagio 4',
    identity: '"Construo solucoes com IA para clientes"',
    behavior: 'Opera como agencia de um, atrai clientes, forma novos membros',
    trigger: 'Terceiro projeto entregue para terceiros',
    badge: 'Estrela de Agente',
    color: '#CD7F32',
  },
];

const PYRAMID_LEVELS = [
  { label: 'Evangelista', pct: '5%', desc: 'Indica membros, cria conteudo, representa o Bunker externamente', color: '#CD7F32', width: 30 },
  { label: 'Engajado', pct: '15%', desc: 'Deployou projeto, ajuda outros, participa de tudo', color: '#00E5FF', width: 50 },
  { label: 'Ativo', pct: '30%', desc: 'Posta no Diario de Obra, faz perguntas, segue trilha', color: '#FFAA00', width: 70 },
  { label: 'Observador', pct: '50%', desc: 'Assiste lives, le conteudo, ainda nao postou', color: '#A9A9A9', width: 90 },
];

const CHANNELS = [
  { name: '#bunker-geral', purpose: 'Discussao livre, boas-vindas', who: 'Todos' },
  { name: '#diario-de-obra', purpose: 'Progresso semanal (sexta)', who: 'Ativo+' },
  { name: '#socorro', purpose: 'Duvidas tecnicas urgentes', who: 'Todos' },
  { name: '#arsenal', purpose: 'Review de ferramentas', who: 'Construtor+' },
  { name: '#cases', purpose: 'Projetos deployados', who: 'Deployer+' },
  { name: '#vagas-e-oportunidades', purpose: 'Indicacoes de trabalho', who: 'Curadoria' },
];

const RITUALS = [
  { freq: 'Semanal', name: 'Live de Terca', desc: 'Sessao ao vivo 19h: Relatorio de Campo + conteudo pratico + Mesa de Operacoes + Q&A.', color: '#00E5FF' },
  { freq: 'Semanal', name: 'Diario de Obra', desc: 'Sexta — post async: "Essa semana eu [fez]. Proximo passo [vai fazer]. Travei em [ajuda]."', color: '#00E5FF' },
  { freq: 'Mensal', name: 'Promocao de Patente', desc: 'Reconhecimento publico de membros que mudaram de estagio. Badge atualizada.', color: '#FFAA00' },
  { freq: 'Mensal', name: 'Case do Mes', desc: 'Membro apresenta projeto deployado em 15 min. Numeros reais, erros, aprendizados.', color: '#FFAA00' },
  { freq: 'Mensal', name: 'Revisao de Arsenal', desc: 'Review coletivo de ferramentas e stacks usados no mes. Avaliacoes reais de quem usa.', color: '#FFAA00' },
  { freq: 'Trimestral', name: 'Showcase do Bunker', desc: '5-10 membros apresentam projetos completos. Pitch de 5 min + Q&A. Aberto para nao-membros.', color: '#CD7F32' },
  { freq: 'Trimestral', name: 'Cohort Kickoff', desc: 'Lancamento de nova turma: onboarding coletivo, definicao de projetos, formacao de pares.', color: '#CD7F32' },
  { freq: 'Anual', name: 'Aniversario do Bunker', desc: 'Retrospectiva de cases, numeros do ano, premiacoes: Construtor do Ano, Maior Evolucao, Case Mais Impactante.', color: '#FF3B30' },
];

const FLYWHEEL_STEPS = [
  'Conteudo Gratuito (YouTube)',
  'Atrai Consumidores Frustrados',
  'Comunidade R$250/ano',
  'Implementacao Assistida',
  'Projeto Deployado (Case Real)',
  'Case Study Publicado',
  'Prova Social (mais conteudo)',
];

export default function MovementArc() {
  return (
    <div>
      <SectionHeader
        overline="01.5 // Movement Architecture"
        title="Arco do Movimento"
        description="O Bunker nao ensina IA — forja construtores. A transformacao e de identidade, nao apenas de habilidade."
      />

      {/* 5-Stage Identity Arc */}
      <h3
        style={{
          fontFamily: "'Averia Serif Libre', serif",
          fontSize: 28,
          color: '#FDF5E6',
          marginBottom: 24,
        }}
      >
        Arco de Transformacao
      </h3>
      <div
        style={{
          display: 'flex',
          gap: 8,
          overflowX: 'auto',
          paddingBottom: 8,
          marginBottom: 48,
        }}
      >
        {STAGES.map((stage, i) => (
          <div key={stage.id} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
            <div
              style={{
                minWidth: 200,
                backgroundColor: 'rgba(47,53,58,0.5)',
                borderTop: `3px solid ${stage.color}`,
                borderRadius: 6,
                padding: 20,
              }}
            >
              <div
                style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontSize: 10,
                  color: stage.color,
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  marginBottom: 6,
                }}
              >
                {stage.subtitle}
              </div>
              <div
                style={{
                  fontFamily: "'Averia Serif Libre', serif",
                  fontSize: 18,
                  fontWeight: 700,
                  color: '#FDF5E6',
                  marginBottom: 10,
                }}
              >
                {stage.title}
              </div>
              <div
                style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontSize: 12,
                  color: '#00E5FF',
                  fontStyle: 'italic',
                  marginBottom: 8,
                }}
              >
                {stage.identity}
              </div>
              <div
                style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontSize: 11,
                  color: '#A9A9A9',
                  lineHeight: 1.5,
                  marginBottom: 8,
                }}
              >
                {stage.behavior}
              </div>
              <div
                style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontSize: 10,
                  color: '#A9A9A9',
                  borderTop: '1px solid rgba(255,255,255,0.06)',
                  paddingTop: 8,
                }}
              >
                <strong style={{ color: stage.color }}>Gatilho: </strong>{stage.trigger}
              </div>
              {stage.badge && (
                <div
                  style={{
                    fontFamily: "'Roboto Mono', monospace",
                    fontSize: 10,
                    color: stage.color,
                    marginTop: 6,
                  }}
                >
                  Badge: {stage.badge}
                </div>
              )}
            </div>
            {i < STAGES.length - 1 && (
              <div style={{ display: 'flex', alignItems: 'center', paddingTop: 48 }}>
                <ArrowRight size={16} color="#A9A9A9" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Engagement Pyramid */}
      <h3
        style={{
          fontFamily: "'Averia Serif Libre', serif",
          fontSize: 28,
          color: '#FDF5E6',
          marginBottom: 24,
        }}
      >
        Piramide de Engajamento
      </h3>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
          marginBottom: 48,
        }}
      >
        {PYRAMID_LEVELS.map((level) => (
          <div
            key={level.label}
            style={{
              width: `${level.width}%`,
              maxWidth: 600,
              backgroundColor: 'rgba(47,53,58,0.5)',
              borderLeft: `3px solid ${level.color}`,
              borderRadius: 4,
              padding: '12px 20px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 12,
            }}
          >
            <div>
              <span
                style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontSize: 13,
                  fontWeight: 700,
                  color: '#FDF5E6',
                }}
              >
                {level.label}
              </span>
              <span
                style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontSize: 11,
                  color: '#A9A9A9',
                  marginLeft: 8,
                  display: 'none',
                }}
                className="sm:inline"
              >
                {level.desc}
              </span>
            </div>
            <span
              style={{
                fontFamily: "'Roboto Mono', monospace",
                fontSize: 13,
                fontWeight: 700,
                color: level.color,
                flexShrink: 0,
              }}
            >
              {level.pct}
            </span>
          </div>
        ))}
      </div>

      {/* Community Channels */}
      <h3
        style={{
          fontFamily: "'Averia Serif Libre', serif",
          fontSize: 28,
          color: '#FDF5E6',
          marginBottom: 24,
        }}
      >
        Canais da Comunidade
      </h3>
      <div className="overflow-x-auto" style={{ marginBottom: 48 }}>
      <div
        style={{
          backgroundColor: 'rgba(47,53,58,0.3)',
          borderRadius: 8,
          overflow: 'hidden',
          border: '1px solid rgba(255,255,255,0.05)',
          minWidth: 480,
        }}
      >
        {/* Header */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '160px 1fr 120px',
            backgroundColor: 'rgba(255,255,255,0.03)',
            padding: '10px 20px',
            fontFamily: "'Roboto Mono', monospace",
            fontSize: 11,
            color: '#A9A9A9',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
          }}
        >
          <span>Canal</span>
          <span>Proposito</span>
          <span>Acesso</span>
        </div>
        {CHANNELS.map((ch) => (
          <div
            key={ch.name}
            style={{
              display: 'grid',
              gridTemplateColumns: '160px 1fr 120px',
              padding: '12px 20px',
              borderTop: '1px solid rgba(255,255,255,0.04)',
              fontFamily: "'Roboto Mono', monospace",
              fontSize: 13,
            }}
          >
            <span style={{ color: '#00E5FF' }}>{ch.name}</span>
            <span style={{ color: '#A9A9A9' }}>{ch.purpose}</span>
            <span style={{ color: '#FDF5E6', fontSize: 12 }}>{ch.who}</span>
          </div>
        ))}
      </div>
      </div>

      {/* Rituals */}
      <h3
        style={{
          fontFamily: "'Averia Serif Libre', serif",
          fontSize: 28,
          color: '#FDF5E6',
          marginBottom: 24,
        }}
      >
        Rituais
      </h3>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 12,
          marginBottom: 48,
        }}
      >
        {RITUALS.map((ritual) => (
          <div
            key={ritual.name}
            style={{
              backgroundColor: 'rgba(47,53,58,0.4)',
              borderLeft: `3px solid ${ritual.color}`,
              borderRadius: 6,
              padding: 20,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
              <Calendar size={14} color={ritual.color} />
              <span
                style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontSize: 10,
                  color: ritual.color,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                }}
              >
                {ritual.freq}
              </span>
            </div>
            <div
              style={{
                fontFamily: "'Roboto Mono', monospace",
                fontSize: 14,
                fontWeight: 700,
                color: '#FDF5E6',
                marginBottom: 8,
              }}
            >
              {ritual.name}
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
              {ritual.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Flywheel Diagram */}
      <h3
        style={{
          fontFamily: "'Averia Serif Libre', serif",
          fontSize: 28,
          color: '#FDF5E6',
          marginBottom: 24,
        }}
      >
        Flywheel do Movimento
      </h3>
      <div
        style={{
          backgroundColor: 'rgba(47,53,58,0.3)',
          border: '1px solid rgba(255,255,255,0.05)',
          borderRadius: 8,
          padding: 40,
          textAlign: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 0,
          }}
        >
          {FLYWHEEL_STEPS.map((step, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div
                style={{
                  backgroundColor: i === 2 ? 'rgba(0,229,255,0.1)' : 'rgba(47,53,58,0.8)',
                  border: i === 2 ? '1px solid #00E5FF' : '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 6,
                  padding: '12px 24px',
                  fontFamily: "'Roboto Mono', monospace",
                  fontSize: 13,
                  color: i === 2 ? '#00E5FF' : '#FDF5E6',
                  fontWeight: i === 2 ? 700 : 400,
                }}
              >
                {step}
              </div>
              {i < FLYWHEEL_STEPS.length - 1 && (
                <div style={{ padding: '4px 0', color: '#A9A9A9' }}>
                  <ArrowRight size={14} style={{ transform: 'rotate(90deg)' }} />
                </div>
              )}
            </div>
          ))}
          {/* Loop arrow */}
          <div style={{ marginTop: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
            <Repeat size={16} color="#00E5FF" />
            <span
              style={{
                fontFamily: "'Roboto Mono', monospace",
                fontSize: 11,
                color: '#00E5FF',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
              }}
            >
              LOOP
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
