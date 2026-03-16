import { useState } from 'react';
import { Check, X } from 'lucide-react';
import SectionHeader from '../shared/SectionHeader';

const PILLARS = [
  { name: 'Tecnico', value: 8, desc: 'Usamos termos tecnicos quando economizam tempo. Mas sempre traduzimos na sequencia.' },
  { name: 'Direto', value: 7, desc: 'Falamos a verdade sem rodeios. Mas o objetivo e acordar, nao humilhar.' },
  { name: 'Pratico', value: 9, desc: 'Cada conteudo termina com algo que a pessoa pode fazer HOJE.' },
  { name: 'Autentico', value: 6, desc: 'Falamos como gente, nao como press release. Mas mantemos credibilidade.' },
];

const SPECTRUM = [
  { left: 'Formal', right: 'Casual', value: 5, label: 'Semi-casual, profissional sem ser rigido' },
  { left: 'Serio', right: 'Brincalhao', value: 4, label: 'Predominantemente serio, humor pontual e seco' },
  { left: 'Respeitoso', right: 'Irreverente', value: 6, label: 'Respeitoso com o avatar, irreverente com o mercado' },
  { left: 'Tecnico', right: 'Leigo', value: 3, label: 'Tecnico com traducao imediata' },
  { left: 'Otimista', right: 'Realista', value: 5, label: 'Realista com vies construtivo' },
  { left: 'Acolhedor', right: 'Desafiador', value: 6, label: 'Desafia mais do que acolhe, mas nunca rejeita' },
  { left: 'Autoritario', right: 'Democratico', value: 4, label: 'Opinativo e firme, mas aberto a dialogo' },
  { left: 'Rapido', right: 'Detalhado', value: 2, label: 'Rapido e direto, detalha so quando impacta resultado' },
];

const CONTEXTS = [
  {
    id: 'social',
    label: 'Social Media',
    tone: 'Provocativo + Pratico',
    intensity: 'Alta energia, frases curtas, pattern interrupts',
    example: 'Voce assistiu 47 videos sobre IA essa semana. Quantas automacoes voce criou? Zero? Entao voce nao esta estudando. Esta procrastinando com roupa de produtividade.',
  },
  {
    id: 'email',
    label: 'Email',
    tone: 'Consultivo + Urgente',
    intensity: 'Media, mais espaco para argumentacao',
    example: 'Olha, eu sei que voce abriu esse email esperando mais uma dica. Mas o que eu tenho pra te falar hoje nao e uma dica — e um diagnostico. Se voce esta faturando entre 5 e 10 mil e ainda nao tem um sistema automatizado, voce esta pagando o imposto do amadorismo todo mes.',
  },
  {
    id: 'lp',
    label: 'Landing Page',
    tone: 'Autoridade + Escassez Real',
    intensity: 'Alta nos headlines, moderada no corpo',
    example: 'O mercado nao espera voce terminar mais um curso. Enquanto voce estuda, quem implementa ta faturando. O Bunker da IA existe pra acabar com essa distancia entre saber e fazer.',
  },
  {
    id: 'community',
    label: 'Comunidade',
    tone: 'Acolhedor + Accountability',
    intensity: 'Baixa agressividade, alta proximidade',
    example: 'Boa, [nome]! Primeira automacao rodando. Agora vem a parte boa: iterar ate ela virar uma maquina. Posta o print do resultado aqui quando sair.',
  },
  {
    id: 'lives',
    label: 'Lives',
    tone: 'Professor de campo + Storytelling',
    intensity: 'Varia — comeca provocativo, aprofunda com calma, fecha com CTA forte',
    example: 'Deixa eu te contar o que aconteceu com um membro semana passada. Ele chegou igualzinho a voce — consumindo conteudo, sem implementar. Em 14 dias, montou o primeiro fluxo de atendimento. Nao porque ele e genio. Porque ele seguiu o sistema.',
  },
];

const ANTI_PATTERNS = [
  {
    name: 'O Guru Iluminado',
    bad: 'Eu descobri o SEGREDO que os grandes players nao querem que voce saiba. E hoje, EXCLUSIVAMENTE, vou revelar...',
    why: 'Linguagem manipulativa, promessa de informacao oculta. O Bunker compartilha abertamente.',
  },
  {
    name: 'O Coach Motivacional',
    bad: 'ACREDITE no seu potencial! Voce e capaz de TUDO! Basta QUERER! Mentalidade de abundancia!!',
    why: 'Motivacao sem metodo e barulho. O Bunker e sobre acao pratica, nao afirmacao positiva.',
  },
  {
    name: 'O Vendedor Desesperado',
    bad: 'ULTIMAS VAGAS!!!! CORRE!!! SO HOJE!!!! NUNCA MAIS ESSE PRECO!!!!',
    why: 'Escassez falsa. Se precisamos gritar, o produto nao fala por si.',
  },
  {
    name: 'O Academico Digital',
    bad: 'Conforme pesquisas de McKinsey (2024), a implementacao de IA generativa no contexto de microempresas apresenta correlacao de 0.73...',
    why: 'O Fabricio tem 3 segundos de atencao. Dados sao bons quando traduzidos em acao.',
  },
  {
    name: 'O Bro Tech',
    bad: 'Mano, bora escalar! Mete um n8n com webhook pra triggar o GPT-4 via API com streaming, suave!',
    why: 'Jargao tecnico sem traducao exclui 90% da audiencia.',
  },
  {
    name: 'O Coitadista',
    bad: 'Eu sei que e dificil... o mercado e cruel... voce deve estar sofrendo... mas um dia vai melhorar...',
    why: 'O Bunker e sobre resistencia, nao vitimismo. A frase seguinte SEMPRE e uma solucao.',
  },
];

export default function VoiceTone() {
  const [activeContext, setActiveContext] = useState('social');
  const currentContext = CONTEXTS.find((c) => c.id === activeContext)!;

  return (
    <div>
      <SectionHeader
        overline="01.3 // Voice & Tone"
        title="Voz & Tom"
        description="A voz do Bunker e como um sargento que ja passou pelo campo de batalha: direta, sem enrolacao, mas que genuinamente quer que voce sobreviva."
      />

      {/* 4 Pillars with Scale Bars */}
      <h3
        style={{
          fontFamily: "'Averia Serif Libre', serif",
          fontSize: 28,
          color: '#FDF5E6',
          marginBottom: 24,
        }}
      >
        Os 4 Pilares da Voz
      </h3>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 16,
          marginBottom: 48,
        }}
      >
        {PILLARS.map((pillar) => (
          <div
            key={pillar.name}
            style={{
              backgroundColor: 'rgba(47,53,58,0.5)',
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
                {pillar.name}
              </span>
              <span
                style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontSize: 13,
                  color: '#00E5FF',
                  fontWeight: 700,
                }}
              >
                {pillar.value}/10
              </span>
            </div>
            {/* Bar */}
            <div
              style={{
                height: 6,
                backgroundColor: 'rgba(255,255,255,0.08)',
                borderRadius: 3,
                marginBottom: 12,
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  height: '100%',
                  width: `${pillar.value * 10}%`,
                  backgroundColor: '#00E5FF',
                  borderRadius: 3,
                  transition: 'width 0.5s ease',
                }}
              />
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
              {pillar.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Personality Spectrum */}
      <h3
        style={{
          fontFamily: "'Averia Serif Libre', serif",
          fontSize: 28,
          color: '#FDF5E6',
          marginBottom: 24,
        }}
      >
        Espectro de Personalidade
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 48 }}>
        {SPECTRUM.map((s) => (
          <div key={s.left} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span
              style={{
                fontFamily: "'Roboto Mono', monospace",
                fontSize: 11,
                color: '#A9A9A9',
                width: 100,
                textAlign: 'right',
                flexShrink: 0,
              }}
            >
              {s.left}
            </span>
            <div
              style={{
                flex: 1,
                height: 8,
                backgroundColor: 'rgba(255,255,255,0.06)',
                borderRadius: 4,
                position: 'relative',
                maxWidth: 300,
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  left: `${s.value * 10}%`,
                  top: -3,
                  width: 14,
                  height: 14,
                  borderRadius: '50%',
                  backgroundColor: '#00E5FF',
                  border: '2px solid #1A1E22',
                  transform: 'translateX(-50%)',
                }}
              />
            </div>
            <span
              style={{
                fontFamily: "'Roboto Mono', monospace",
                fontSize: 11,
                color: '#A9A9A9',
                width: 100,
                flexShrink: 0,
              }}
            >
              {s.right}
            </span>
            <span
              style={{
                fontFamily: "'Roboto Mono', monospace",
                fontSize: 10,
                color: '#A9A9A9',
                opacity: 0.6,
                display: 'none',
              }}
              className="xl:inline"
            >
              {s.label}
            </span>
          </div>
        ))}
      </div>

      {/* Tone by Context — Tabs */}
      <h3
        style={{
          fontFamily: "'Averia Serif Libre', serif",
          fontSize: 28,
          color: '#FDF5E6',
          marginBottom: 24,
        }}
      >
        Tom por Contexto
      </h3>
      <div style={{ marginBottom: 48 }}>
        {/* Tab bar */}
        <div
          style={{
            display: 'flex',
            gap: 4,
            marginBottom: 24,
            flexWrap: 'wrap',
          }}
        >
          {CONTEXTS.map((ctx) => (
            <button
              key={ctx.id}
              onClick={() => setActiveContext(ctx.id)}
              style={{
                fontFamily: "'Roboto Mono', monospace",
                fontSize: 12,
                padding: '8px 16px',
                border: 'none',
                borderRadius: 4,
                cursor: 'pointer',
                backgroundColor:
                  activeContext === ctx.id ? 'rgba(0,229,255,0.15)' : 'rgba(255,255,255,0.04)',
                color: activeContext === ctx.id ? '#00E5FF' : '#A9A9A9',
                transition: 'all 0.15s',
              }}
            >
              {ctx.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div
          style={{
            backgroundColor: 'rgba(47,53,58,0.4)',
            border: '1px solid rgba(255,255,255,0.05)',
            borderRadius: 8,
            padding: 32,
          }}
        >
          <div style={{ display: 'flex', gap: 24, marginBottom: 20, flexWrap: 'wrap' }}>
            <div>
              <div
                style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontSize: 10,
                  color: '#A9A9A9',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginBottom: 4,
                }}
              >
                Tom
              </div>
              <div
                style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontSize: 13,
                  color: '#00E5FF',
                }}
              >
                {currentContext.tone}
              </div>
            </div>
            <div>
              <div
                style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontSize: 10,
                  color: '#A9A9A9',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginBottom: 4,
                }}
              >
                Intensidade
              </div>
              <div
                style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontSize: 13,
                  color: '#FDF5E6',
                }}
              >
                {currentContext.intensity}
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundColor: 'rgba(13,17,23,0.6)',
              borderLeft: '3px solid #00E5FF',
              borderRadius: 4,
              padding: 20,
              fontFamily: "'Roboto Mono', monospace",
              fontSize: 13,
              color: '#FDF5E6',
              lineHeight: 1.7,
              fontStyle: 'italic',
            }}
          >
            "{currentContext.example}"
          </div>
        </div>
      </div>

      {/* Anti-Patterns */}
      <h3
        style={{
          fontFamily: "'Averia Serif Libre', serif",
          fontSize: 28,
          color: '#FDF5E6',
          marginBottom: 24,
        }}
      >
        Anti-Padroes
      </h3>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 16,
        }}
      >
        {ANTI_PATTERNS.map((ap) => (
          <div
            key={ap.name}
            style={{
              backgroundColor: 'rgba(47,53,58,0.4)',
              border: '1px solid rgba(255,59,48,0.15)',
              borderRadius: 6,
              padding: 24,
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                marginBottom: 14,
              }}
            >
              <X size={16} color="#FF3B30" />
              <span
                style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontSize: 13,
                  fontWeight: 700,
                  color: '#FF3B30',
                }}
              >
                {ap.name}
              </span>
            </div>
            <div
              style={{
                backgroundColor: 'rgba(255,59,48,0.05)',
                borderRadius: 4,
                padding: 12,
                marginBottom: 12,
                fontFamily: "'Roboto Mono', monospace",
                fontSize: 12,
                color: '#FDF5E6',
                lineHeight: 1.6,
                opacity: 0.7,
                fontStyle: 'italic',
              }}
            >
              "{ap.bad}"
            </div>
            <p
              style={{
                fontFamily: "'Roboto Mono', monospace",
                fontSize: 11,
                color: '#A9A9A9',
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              {ap.why}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
