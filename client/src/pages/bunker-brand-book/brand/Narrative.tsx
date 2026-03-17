import { Shield, Flame, Sword, BookOpen, AlertTriangle, Crosshair } from 'lucide-react';
import SectionHeader from '../shared/SectionHeader';

const CREDOS = [
  { icon: <Crosshair size={20} />, title: 'Implementacao mata informacao', text: 'Saber e nao fazer e a mesma coisa que nao saber. O Bunker mede progresso em deploys, nao em horas assistidas.' },
  { icon: <AlertTriangle size={20} />, title: 'O imposto do amador e real', text: 'Tentar sozinho custa tempo, dinheiro e sanidade mental. Pagar esse imposto nao e virtude, e desperdicio.' },
  { icon: <Shield size={20} />, title: '30 min com direcao > 50h sem rumo', text: 'Consistencia focada supera consumo massivo. Sempre.' },
  { icon: <BookOpen size={20} />, title: 'Implementacao assistida', text: 'O problema nunca foi falta de informacao. E falta de um ambiente que te force a agir.' },
  { icon: <Sword size={20} />, title: 'Anti-guru, anti-hype, pro-engenharia', text: 'Nao vendemos sonhos. Mostramos o processo — inclusive quando e feio, demorado e frustrante.' },
  { icon: <Flame size={20} />, title: 'Errar em grupo e 10x mais barato', text: 'O cohort existe para isso: dividir o custo do erro e multiplicar o aprendizado.' },
  { icon: <Crosshair size={20} />, title: 'Deploy primeiro, perfeicao depois', text: 'Nada sai perfeito na primeira vez. O que importa e estar no ar. Refina depois.' },
  { icon: <Shield size={20} />, title: 'IA e ferramenta, nao messias', text: 'Nao estamos aqui para adorar tecnologia. Estamos aqui para usar tecnologia e resolver problemas reais.' },
  { icon: <BookOpen size={20} />, title: 'Transparencia radical', text: 'Mostramos o que funciona E o que nao funciona. Mostramos receita E prejuizo. Deploy E bug.' },
  { icon: <Flame size={20} />, title: 'A comunidade e o produto', text: 'Nao e o conteudo. Nao e o guru. E o ambiente de implementacao coletiva que gera resultado.' },
];

const ENEMIES = [
  { name: 'A Esteira de Conteudo', severity: 'CRITICAL', color: '#FF3B30', desc: 'O sistema que mantem as pessoas eternamente consumindo e nunca implementando. Algoritmos que premiam tempo de tela, nao resultado.', combat: 'A esteira de conteudo e desenhada para te manter correndo sem sair do lugar.' },
  { name: 'O Guru de Palco', severity: 'HIGH', color: '#FFAA00', desc: 'O modelo de negocio que vende transformacao sem oferecer estrutura de implementacao. Promessas vagas, resultados cherry-picked.', combat: 'Guru vende ingresso pro show. O Bunker te coloca no palco.' },
  { name: 'O Imposto do Amador', severity: 'HIGH', color: '#FFAA00', desc: 'O custo oculto de tentar fazer tudo sozinho — tempo perdido, ferramentas erradas, erros que experiencia evitaria em 5 minutos.', combat: 'O imposto do amador e o preco que voce paga por orgulho de fazer sozinho.' },
  { name: 'Paralisia por Analise', severity: 'MEDIUM', color: '#FFAA00', desc: 'O estado mental de quem tem tanta informacao que nao consegue dar o primeiro passo. Cada opcao parece errada.', combat: 'No Bunker, a gente escolhe por voce. Depois voce entende por que.' },
  { name: 'O Hype Cycle', severity: 'MEDIUM', color: '#FFAA00', desc: 'A onda constante de "novidade que muda tudo" que reseta o progresso a cada 2 semanas.', combat: 'Enquanto o mundo corre atras da novidade, o Bunker termina o que comecou.' },
];

const ALWAYS_WORDS = [
  'Implementar', 'Sistema', 'Campo de batalha', 'Resultado', 'Na pratica',
  'Framework', 'Operacao', 'Trincheira', 'Imposto do amadorismo', 'Lacuna da implementacao', 'Atalho certo',
];

const NEVER_WORDS = [
  'Facil', 'Fique rico', 'Segredo', 'Guru / Mestre', 'Passivo (renda)',
  'Hack / Growth hack', 'Sem esforco', 'Garantido', 'Exclusivo (sozinho)', 'Revolucionario',
];

const DEFINING_PHRASES = [
  'Nos somos o bunker. Somos a inteligencia que resiste. Contra o algoritmo do caos.',
  'Deploy or die.',
  'Feito > Perfeito.',
  'Saiu do video, entrou no terminal.',
  'Conteudo sem implementacao e entretenimento caro.',
  'O Bunker nao e pra quem quer aprender. E pra quem quer fazer.',
  'Aqui dentro, a gente nao aplaude ideia. Aplaude deploy.',
  'O mercado nao paga por potencial. Paga por resultado.',
];

export default function Narrative() {
  return (
    <div>
      <SectionHeader
        overline="01.1 // Narrative"
        title="Historia de Criacao"
        description="A origem do Bunker, credos inegociaveis, inimigos declarados e a linguagem da tribo."
      />

      {/* Origin Story — Classified Document */}
      <div
        style={{
          backgroundColor: '#2B3A33',
          border: '1px solid rgba(205,127,50,0.3)',
          borderRadius: 8,
          padding: 40,
          marginBottom: 48,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 16,
            right: 16,
            fontFamily: "'Roboto Mono', monospace",
            fontSize: 10,
            color: '#FF3B30',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            border: '1px solid #FF3B30',
            padding: '4px 8px',
            borderRadius: 2,
          }}
        >
          CLASSIFICADO
        </div>
        <h3
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 20,
            color: '#CD7F32',
            marginTop: 0,
            marginBottom: 24,
          }}
        >
          Documento de Origem
        </h3>
        <div
          style={{
            fontFamily: "'Roboto Mono', monospace",
            fontSize: 14,
            color: '#FDF5E6',
            lineHeight: 1.8,
            opacity: 0.9,
          }}
        >
          <p style={{ marginBottom: 16 }}>
            Existiu um tempo — nao faz muito — em que a IA era promessa. Todo guru vendia o sonho: "automatize tudo", "fature 6 digitos com ChatGPT". Os videos se multiplicavam. Os cursos tambem. E o Fabricio — como milhares de outros — assistia. Assistia 10, 20, 50 videos. Salvava nos favoritos. Comprava o curso de R$497. E nao implementava nada.
          </p>
          <p style={{ marginBottom: 16 }}>
            Nao por preguica. Por paralisia. Cada video novo contradizia o anterior. O ecossistema inteiro era desenhado para manter as pessoas consumindo — nao construindo. O algoritmo alimentava o caos.
          </p>
          <p style={{ marginBottom: 16 }}>
            Os fundadores do Bunker viram isso de dentro. Eram engenheiros, desenvolvedores, tecnicos que ja estavam <strong style={{ color: '#00E5FF' }}>usando</strong> IA em producao — deployando, quebrando, consertando, iterando. E perceberam algo brutal: <strong style={{ color: '#00E5FF' }}>o gap nao era de informacao. Era de implementacao.</strong>
          </p>
          <p style={{ marginBottom: 16 }}>
            Entao construiram um bunker. Nao para se esconder da IA — mas para domina-la. Um espaco blindado contra o hype, contra os gurus de palco, contra a ansiedade de ficar para tras.
          </p>
          <p style={{ margin: 0 }}>
            <strong style={{ color: '#CD7F32' }}>O Bunker nao nasceu de uma oportunidade de mercado. Nasceu de raiva.</strong> Raiva de ver gente boa sendo explorada por vendedores de sonho. A primeira turma tinha 12 pessoas. Em 7 dias, todas tinham feito o primeiro deploy.
          </p>
        </div>
        <blockquote
          style={{
            borderLeft: '3px solid #CD7F32',
            paddingLeft: 20,
            marginTop: 24,
            marginBottom: 0,
            fontFamily: "'Averia Serif Libre', serif",
            fontSize: 18,
            color: '#FDF5E6',
            fontStyle: 'italic',
          }}
        >
          "O Bunker nao foi criado para te ensinar IA. Foi criado porque ninguem te ajudava a USAR."
        </blockquote>
      </div>

      {/* 10 Credos */}
      <h3
        style={{
          fontFamily: "'Averia Serif Libre', serif",
          fontSize: 28,
          color: '#FDF5E6',
          marginBottom: 24,
        }}
      >
        Os 10 Credos
      </h3>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 16,
          marginBottom: 48,
        }}
      >
        {CREDOS.map((credo, i) => (
          <div
            key={i}
            style={{
              backgroundColor: 'rgba(47,53,58,0.6)',
              border: '1px solid rgba(255,255,255,0.05)',
              borderRadius: 6,
              padding: 20,
              display: 'flex',
              gap: 14,
            }}
          >
            <div style={{ color: '#00E5FF', flexShrink: 0, marginTop: 2 }}>{credo.icon}</div>
            <div>
              <div
                style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontSize: 13,
                  fontWeight: 700,
                  color: '#FDF5E6',
                  marginBottom: 6,
                }}
              >
                {i + 1}. {credo.title}
              </div>
              <div
                style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontSize: 12,
                  color: '#A9A9A9',
                  lineHeight: 1.6,
                }}
              >
                {credo.text}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 5 Enemies */}
      <h3
        style={{
          fontFamily: "'Averia Serif Libre', serif",
          fontSize: 28,
          color: '#FDF5E6',
          marginBottom: 8,
        }}
      >
        Threat Assessment
      </h3>
      <p
        style={{
          fontFamily: "'Roboto Mono', monospace",
          fontSize: 12,
          color: '#A9A9A9',
          marginBottom: 24,
        }}
      >
        O inimigo do Bunker nunca e uma pessoa. Sao sistemas, comportamentos e mentalidades.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 48 }}>
        {ENEMIES.map((enemy, i) => (
          <div
            key={i}
            style={{
              backgroundColor: 'rgba(47,53,58,0.5)',
              borderLeft: `3px solid ${enemy.color}`,
              borderRadius: 6,
              padding: 24,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
              <span
                style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontSize: 10,
                  color: enemy.color,
                  border: `1px solid ${enemy.color}`,
                  padding: '2px 8px',
                  borderRadius: 2,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                }}
              >
                {enemy.severity}
              </span>
              <span
                style={{
                  fontFamily: "'Averia Serif Libre', serif",
                  fontSize: 18,
                  fontWeight: 700,
                  color: '#FDF5E6',
                }}
              >
                {enemy.name}
              </span>
            </div>
            <p
              style={{
                fontFamily: "'Roboto Mono', monospace",
                fontSize: 13,
                color: '#A9A9A9',
                lineHeight: 1.6,
                margin: 0,
                marginBottom: 12,
              }}
            >
              {enemy.desc}
            </p>
            <div
              style={{
                fontFamily: "'Roboto Mono', monospace",
                fontSize: 12,
                color: '#00E5FF',
                fontStyle: 'italic',
              }}
            >
              "{enemy.combat}"
            </div>
          </div>
        ))}
      </div>

      {/* Tribal Language — Always / Never Table */}
      <h3
        style={{
          fontFamily: "'Averia Serif Libre', serif",
          fontSize: 28,
          color: '#FDF5E6',
          marginBottom: 24,
        }}
      >
        Linguagem Tribal
      </h3>
      <div
        className="grid grid-cols-1 md:grid-cols-2"
        style={{
          gap: 24,
          marginBottom: 48,
        }}
      >
        {/* Always */}
        <div
          style={{
            backgroundColor: 'rgba(52,199,89,0.05)',
            border: '1px solid rgba(52,199,89,0.2)',
            borderRadius: 8,
            padding: 24,
          }}
        >
          <div
            style={{
              fontFamily: "'Roboto Mono', monospace",
              fontSize: 11,
              color: '#34C759',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              marginBottom: 16,
            }}
          >
            Sempre Usamos
          </div>
          {ALWAYS_WORDS.map((word, i) => (
            <div
              key={i}
              style={{
                fontFamily: "'Roboto Mono', monospace",
                fontSize: 13,
                color: '#FDF5E6',
                padding: '6px 0',
                borderBottom: i < ALWAYS_WORDS.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
              }}
            >
              {word}
            </div>
          ))}
        </div>

        {/* Never */}
        <div
          style={{
            backgroundColor: 'rgba(255,59,48,0.05)',
            border: '1px solid rgba(255,59,48,0.2)',
            borderRadius: 8,
            padding: 24,
          }}
        >
          <div
            style={{
              fontFamily: "'Roboto Mono', monospace",
              fontSize: 11,
              color: '#FF3B30',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              marginBottom: 16,
            }}
          >
            Nunca Usamos
          </div>
          {NEVER_WORDS.map((word, i) => (
            <div
              key={i}
              style={{
                fontFamily: "'Roboto Mono', monospace",
                fontSize: 13,
                color: '#FDF5E6',
                padding: '6px 0',
                borderBottom: i < NEVER_WORDS.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                textDecoration: 'line-through',
                textDecorationColor: '#FF3B30',
                opacity: 0.7,
              }}
            >
              {word}
            </div>
          ))}
        </div>
      </div>

      {/* Defining Phrases — Manifesto Quotes */}
      <h3
        style={{
          fontFamily: "'Averia Serif Libre', serif",
          fontSize: 28,
          color: '#FDF5E6',
          marginBottom: 24,
        }}
      >
        Frases que nos Definem
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {DEFINING_PHRASES.map((phrase, i) => (
          <blockquote
            key={i}
            style={{
              borderLeft: '2px solid #CD7F32',
              paddingLeft: 20,
              margin: 0,
              fontFamily: "'Averia Serif Libre', serif",
              fontSize: 16,
              color: '#FDF5E6',
              lineHeight: 1.6,
              opacity: 0.85,
            }}
          >
            "{phrase}"
          </blockquote>
        ))}
      </div>
    </div>
  );
}
