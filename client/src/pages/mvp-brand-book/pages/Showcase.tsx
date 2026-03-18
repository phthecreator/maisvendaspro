import SectionHeader from '../shared/SectionHeader';

/* ─── COPY DATA ─── */
const headlines = [
  'Transformamos a inteligencia que ja existe na sua empresa em uma maquina que trabalha 24/7.',
  'Voce esta sentado numa mina de ouro. A gente te da a pa.',
  'Enquanto voce dorme, seus squads de IA estao vendendo, atendendo e produzindo.',
  '14 squads. 35 mentes. Uma plataforma. Seu negocio nunca mais vai ser o mesmo.',
  'Eu nao abaixo o preco — eu aumento o valor.',
  '85 a 97% de fidelidade cognitiva. Nao e promessa. E metrica.',
  'Um squad. Cinco dias. Resultado. Depois a gente conversa sobre o resto.',
  'Quem chega primeiro bebe agua limpa. Os atrasados bebem o que sobrou.',
];

const taglines = [
  { text: 'Sua empresa. Potencializada por IA.', use: 'Logo lockup principal' },
  { text: 'O ultimo aplicativo que a sua empresa contrata.', use: 'Paginas de venda' },
  { text: 'Squads de IA que trabalham enquanto voce dorme.', use: 'Bio de redes sociais' },
  { text: 'Da inteligencia humana a maquina que nunca para.', use: 'Email signature' },
  { text: 'Implemente. Escale. Domine.', use: 'CTA curto, botoes' },
  { text: 'Laboratorio de IA para aceleracao empresarial.', use: 'LinkedIn, B2B' },
];

const elevatorPitch30s =
  'A Mais Vendas Pro transforma a inteligencia que ja existe na sua empresa em squads de IA que trabalham 24 horas por dia. Clonamos o conhecimento dos seus melhores profissionais com fidelidade de ate 97% e colocamos equipes de IA pra vender, atender, produzir conteudo e operar — sem parar. Ja temos 14 squads prontos cobrindo marketing, vendas, design, RH, juridico. E o ROI medio dos nossos clientes e de 444 vezes o investimento.';

const elevatorPitch60s =
  'Toda empresa tem gente boa. Gente que sabe vender, que conhece o produto, que entende o cliente. O problema? Essas pessoas trabalham 8 horas por dia, tiram ferias, ficam doentes, pedem demissao.\n\nA Mais Vendas Pro resolve isso. A gente pega o conhecimento dos seus melhores profissionais — o jeito que vendem, o tom que usam, as decisoes que tomam — e transforma em squads de IA que operam 24 horas, 7 dias por semana. Com fidelidade cognitiva de 85 a 97%. Nao e chatbot. Nao e automacao generica. E a mente do seu melhor funcionario, replicada e escalada.\n\nTemos 4 formas de comecar: desde a comunidade por R$97/mes ate a implementacao completa de 30+ squads por R$100 mil. Mas a maioria comeca com A Primeira Missao — um squad, cinco dias, resultado concreto por R$5 mil. Se funcionar, a gente conversa sobre escalar. Se nao funcionar, voce viu com os proprios olhos que tentou.';

const ctas = [
  { stage: 'Topo', text: 'Comenta "SQUAD" que eu te mostro qual IA resolve a sua maior dor.', where: 'Instagram/TikTok' },
  { stage: 'Topo', text: 'Salva esse post. Quando voce decidir parar de fazer tudo sozinho, vai precisar dele.', where: 'Instagram/TikTok' },
  { stage: 'Meio', text: 'Faz o quiz de 2 minutos e descobre qual squad de IA sua empresa precisa primeiro.', where: 'Landing page / bio' },
  { stage: 'Meio', text: 'Assiste o case completo: como reduzimos 40% do tempo de RH com R$3 de custo.', where: 'Email / pagina' },
  { stage: 'Meio', text: 'Agenda um diagnostico de 15 minutos. Sem compromisso.', where: 'Email / DM aquecido' },
  { stage: 'Fundo', text: 'Entra no Bunker. R$97/mes. Comeca hoje, implementa amanha.', where: 'Pagina de vendas Bunker' },
  { stage: 'Fundo', text: 'Comeca com A Primeira Missao. Um squad. Cinco dias. Resultado ou voce viu com os proprios olhos.', where: 'Pagina de vendas / email' },
  { stage: 'Fundo', text: 'Agenda a call com o Pedro. 15 minutos. Ele vai te mostrar exatamente quanto voce esta perdendo por mes sem IA.', where: 'Pagina de vendas / WhatsApp' },
  { stage: 'Retencao', text: 'Seu squad de marketing ja esta rodando. Imagina com vendas, RH e atendimento tambem. Vem pra Forja.', where: 'WhatsApp pos-venda' },
  { stage: 'Retencao', text: 'Voce ja viu o resultado de 1 squad. Agora imagina 30. Hora do Arsenal. Agenda com o Pedro.', where: 'Email de upsell' },
];

/* ─── VOICE & TONE DATA ─── */
const voicePillars = [
  {
    pillar: 'Alquimista, nao guru',
    yes: 'A inteligencia que ja existe na sua empresa pode virar uma maquina que trabalha 24/7. Nos transformamos isso em squad — com metricas, nao promessas.',
    no: 'Descubra o SEGREDO que vai REVOLUCIONAR seu negocio com inteligencia artificial!',
  },
  {
    pillar: 'Direto, nao arrogante',
    yes: 'Enquanto voce pensa, seu concorrente esta implementando. A pergunta nao e SE voce vai usar IA. E QUANDO.',
    no: 'Quem nao usa IA e incompetente.',
  },
  {
    pillar: 'Tecnico com traducao',
    yes: 'Um squad e como um funcionario que nunca dorme, nunca erra o script e custa R$3 por dia.',
    no: 'Implementamos pipelines asincronos com webhooks bidirecionais e parsing de JSON via streaming API com RAG-enabled context injection.',
  },
  {
    pillar: 'Pragmatico, nao raso',
    yes: 'Reducao de 40% no tempo de triagem de RH. O squad custou R$3 em tokens. A funcionaria que fazia isso ganha R$4k/mes. Faca a conta.',
    no: 'Segundo estudos da McKinsey sobre adocao de inteligencia artificial generativa no contexto organizacional brasileiro...',
  },
  {
    pillar: 'Autentico, nao desleixado',
    yes: 'A real e que 90% das empresas estao pagando o imposto da ineficiencia todo mes. Um squad resolve em 20 dias o que voce vem tolerando ha 2 anos.',
    no: 'Fala galeeera!! Bora disruptar o mercado com IA!! Tmj!!',
  },
];

const registerComparison = [
  {
    context: 'Apresentando a plataforma',
    business:
      'A MVP transforma a inteligencia que ja existe na sua empresa em squads de IA que trabalham 24/7. Prospeccao, atendimento, triagem, follow-up — tudo automatizado. Em 20 dias, seu primeiro squad esta rodando. ROI medio: 444x.',
    dev: 'A MVP orquestra agentes de IA via CLI usando o AIOS — um meta-framework que gerencia squads, tasks e workflows. Cada squad e um conjunto de mind clones com Voice DNA e Thinking DNA extraidos via ETL. Fidelidade cognitiva: 85-97%. Deploy via terminal em minutos.',
  },
  {
    context: 'Descrevendo o squad de vendas',
    business:
      'Imagina um vendedor que nao dorme, nao reclama, nao esquece follow-up e custa R$3 por dia. Ele prospecta na sua lista de WhatsApp, qualifica pelo perfil, e agenda a reuniao. Voce so aparece pra fechar.',
    dev: 'O squad de vendas usa Evolution API pra WhatsApp, MCP servers pra orquestracao, e mind clones treinados com SPIN Selling. O flow: ingestao de base → qualificacao por scoring → abordagem personalizada via template → agendamento automatico.',
  },
];

const toneVariations = [
  {
    channel: 'Redes Sociais',
    tone: 'Provocativo + Resultado concreto',
    example:
      'Voce ta sentado numa mina de ouro e nao sabe. Enquanto voce faz follow-up manual, seu concorrente tem um squad que fez 847 abordagens ontem. Custo: R$3. Resultado: 12 reunioes agendadas.',
  },
  {
    channel: 'Email',
    tone: 'Consultivo + Direto',
    example:
      'Olha, eu vou ser direto: se voce ainda depende de pessoas para prospectar, qualificar e agendar reunioes, voce esta pagando o imposto da ineficiencia. Na Doutora Fit, um squad de IA reduziu 40% do tempo de triagem de RH no primeiro mes.',
  },
  {
    channel: 'Landing Page',
    tone: 'Autoridade + Transformacao mensuravel',
    example:
      'Transformamos a inteligencia que ja existe na sua empresa em uma maquina que trabalha 24/7. 14 squads. 35 mentes clonadas. Fidelidade cognitiva de 85-97%. O ultimo aplicativo que sua empresa contrata.',
  },
  {
    channel: 'Call de Venda',
    tone: 'Diagnostico + Conta de padeiro',
    example:
      'Me conta: quantas pessoas fazem prospeccao na sua empresa hoje? Quanto cada uma custa por mes? Um squad faz 3X reunioes por R$3/dia. Nao e promessa — e metrica. Quer ver funcionando?',
  },
];

/* ─── BIOS DATA ─── */
const founders = [
  {
    name: 'Pedro Henrique Silva Ribeiro',
    role: 'Cofundador',
    archetype: 'O Mago',
    oneLiner: 'Traduz tecnologia complexa em desejo de compra. Fecha contratos de R$50k com empresarios que nao sabem o que e API.',
    instagram:
      'Pedro Ribeiro | Cofundador @maisvendaspro\nFaco empresarios comprarem o futuro antes de entenderem o presente.\nVoce ta sentado numa mina de ouro.\nQuem chega primeiro bebe agua limpa ↓',
    linkedin:
      'Cofundador da Mais Vendas Pro — laboratorio de IA para aceleracao empresarial. Eu faco empresarios comprarem o futuro antes de entenderem o presente. Depois, entrego um sistema que faz o presente trabalhar sozinho. Na pratica: pego empresas que faturam R$20k a R$500k+/mes e implemento squads de IA que operam 24/7 com a inteligencia do proprio time do cliente. ROI medio de 444x.',
    signature: 'Voce ta sentado numa mina de ouro.',
  },
  {
    name: 'Murillo Fagundes Alves',
    role: 'Cofundador & CTO',
    archetype: 'O Criador',
    oneLiner: 'Arquiteta sistemas de IA que clonam mentes com fidelidade de 85-97%. Documenta tudo. Ensina tudo. Constroi o que parecia impossivel.',
    instagram:
      'Murillo Alves | CTO @maisvendaspro\nConstruo maquinas que pensam como genios.\nO limite da IA e a imaginacao.\nOpen source, builds ao vivo ↓',
    linkedin:
      'Cofundador e CTO da Mais Vendas Pro. Arquiteto do AIOS — o sistema que clona mentes com fidelidade de 85-97%. Eu construo maquinas que pensam como genios — e ensino outras maquinas a fazer o mesmo. Squad Creator Pro, DNA Extractor, AIOS Framework. Open source, documentacao publica, builds ao vivo.',
    signature: 'O limite da IA e a imaginacao.',
  },
  {
    name: 'Raphael Meres',
    role: 'Cofundador & CEO',
    archetype: 'O Governante',
    oneLiner: 'Conecta tecnologia com capital e mercado. Testa nas proprias empresas antes de oferecer. Mede ROI, nao promessas.',
    instagram:
      'Raphael Meres | CEO @maisvendaspro\nConecto IA de ponta com empresas reais.\nSe voce tem processo, eu tenho squad.\nFaca a conta ↓',
    linkedin:
      'Cofundador e CEO da Mais Vendas Pro — laboratorio de IA para aceleracao empresarial. Eu conecto tecnologia de ponta com empresas reais. Nao em PowerPoint — em producao. Resultado real: reducao de 40% no tempo de triagem de RH. Squad custou R$3 em tokens. Funcionaria custava R$4k/mes. Faca a conta.',
    signature: 'O foco tem que ser em ganhar dinheiro.',
  },
];

const brandBio =
  'A Mais Vendas Pro transforma a inteligencia que ja existe na sua empresa em squads de IA que trabalham 24 horas por dia, 7 dias por semana. 14 squads prontos, 35 mentes clonadas, fidelidade cognitiva de 85 a 97%. Do Bunker R$97/mes ao Arsenal R$100k. Laboratorio de IA para aceleracao empresarial.';

/* ─── OBJECTIONS DATA ─── */
const objections = [
  {
    objection: 'Ta caro.',
    reframe:
      'Caro comparado com o que? O Bunker custa R$97/mes. Menos que uma hora do seu tempo se voce fatura R$20k. A Primeira Missao custa R$5k e implementa um squad em 5 dias — um estagiario custa R$1.500/mes e demora 3 meses pra aprender. Eu nao abaixo o preco. Eu aumento o valor.',
  },
  {
    objection: 'Ja tentei IA e nao funcionou.',
    reframe:
      'Provavelmente voce tentou ferramenta generica. ChatGPT solto. Automacao que quebra. Chatbot burro. A gente clona a inteligencia que JA EXISTE na sua empresa. Fidelidade cognitiva de 85 a 97%. Nao e IA generica. E a SUA IA, com o SEU conhecimento. Sistema funciona. E sistema e o que a gente entrega.',
  },
  {
    objection: 'Nao tenho tempo pra implementar.',
    reframe:
      'Perfeito. Porque a gente implementa PRA voce. Na Primeira Missao, nosso time configura o squad em 5 dias. Voce participa de 1 hora de diagnostico e 2 horas de treinamento. Depois, o squad roda sozinho. Voce nao precisa de tempo pra implementar IA. Voce precisa de IA pra GANHAR tempo.',
  },
  {
    objection: 'Preciso pensar / conversar com o socio.',
    reframe:
      'Respeito total. Decisao de investimento merece reflexao. So te peco uma coisa: leva numeros pro socio, nao opiniao. Pega o que voce gasta hoje com o processo que a gente mostrou e compara com o custo do squad. Se fizer sentido na planilha, faz sentido na empresa. Pensar e inteligente. Adiar por medo e caro.',
  },
  {
    objection: 'Tenho medo de IA / minha equipe vai resistir.',
    reframe:
      'Os squads de IA nao SUBSTITUEM sua equipe — POTENCIALIZAM. Sua vendedora continua vendendo, mas agora tem um squad que pre-qualifica os leads. A equipe nao perde emprego. Perde trabalho repetitivo. E ganha tempo pra fazer o que so humano faz. O medo da IA e o medo do desconhecido. E o Bunker existe justamente pra transformar desconhecido em ferramenta.',
  },
  {
    objection: 'Qual a diferenca de voces pra outras empresas de IA?',
    reframe:
      'A maioria vende ferramenta. Nos vendemos INTELIGENCIA REPLICADA. Tres diferenciais: 1) Clonagem cognitiva — fidelidade de 85-97%. 2) Squads, nao ferramentas — cada squad tem agents especializados, tasks definidas, workflows testados. 3) Os fundadores sao o produto — quem vende entende a tecnologia, quem constroi entende o negocio.',
  },
  {
    objection: 'Vou esperar o momento certo.',
    reframe:
      'Quem chega primeiro bebe agua limpa. O mercado de IA nao esta maturando — esta acelerando. Voce nao precisa implementar tudo de uma vez. O Bunker custa R$97/mes. Comece pequeno. Prove o conceito. O momento certo era ontem. O segundo melhor e agora.',
  },
];

/* ─── FOUNDING STORY ─── */
const foundingStory = `Eram tres problemas diferentes que se encontraram.

Pedro vendia o impossivel. Sentava com empresarios que nao sabiam o que era IA e, em 60 minutos, fazia eles enxergarem uma mina de ouro onde so viam complicacao. Mas ele tinha um problema: vendia futuro sem ter presente pra entregar.

Murillo construia coisas que ninguem comprava. Ficava ate de madrugada no terminal criando sistemas de IA que clonavam mentes com fidelidade de 91%. Arquitetava frameworks que criavam outros frameworks. Mas ninguem sabia que ele existia — porque engenheiro nao sabe vender.

Rapha tinha empresas reais precisando de solucoes que ninguem oferecia. Acesso a capital. Portfolio de negocios. Networking. Mas sem produto e sem time tecnico, era como ter um carro sem motor e sem estrada.

Entao fizeram um pacto simples:

O que Pedro vende, Murillo constroi, Rapha testa nas trincheiras.

Em 20 dias, o primeiro squad de IA funcionou. Em 3 meses, eram 14 squads e 35 mentes clonadas operando em empresas reais. O ROI medio dos clientes bateu 444 vezes o investimento.

Pedro continuou vendendo — mas agora tinha produto. Murillo continuou construindo — mas agora tinha clientes. Rapha continuou estrategando — mas agora tinha maquina e receita.

A empresa que nasceu desse pacto se chama Mais Vendas Pro.

E a promessa que carregam e simples: se o seu negocio tem um processo que depende de pessoas, nos temos um squad de IA que faz melhor, mais rapido e 24 horas por dia.

O nome do sistema? MVP-SYSTEM.
O nome da promessa? O ultimo aplicativo que a sua empresa contrata.`;

/* ─── SHARED STYLES ─── */
const containerStyle: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  color: '#FFFFFF',
  maxWidth: 1100,
  margin: '0 auto',
};

const sectionStyle: React.CSSProperties = {
  marginBottom: 80,
  paddingTop: 40,
};

const cardStyle: React.CSSProperties = {
  backgroundColor: '#111111',
  borderRadius: 12,
  border: '1px solid rgba(0, 201, 110, 0.15)',
  padding: 32,
  marginBottom: 16,
};

const stageColors: Record<string, string> = {
  Topo: '#8B9A8B',
  Meio: '#00C96E',
  Fundo: '#00FF88',
  Retencao: '#00A85A',
};

/* ═══════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════ */
export default function Showcase() {
  return (
    <div style={containerStyle}>
      {/* ─── COPY SHOWCASE ─── */}
      <section id="copy" style={sectionStyle}>
        <SectionHeader
          overline="Copy Foundations"
          title="Copy Pronto para Uso"
          description="Headlines, taglines, elevator pitches e CTAs reais. Copiou, colou, deployou."
        />

        {/* Headlines */}
        <div style={{ marginBottom: 48 }}>
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 11,
              fontWeight: 600,
              textTransform: 'uppercase' as const,
              letterSpacing: '0.14em',
              color: '#00C96E',
              marginBottom: 20,
            }}
          >
            Headlines Principais
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {headlines.map((h, i) => (
              <div
                key={i}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: i < 2 ? 24 : 18,
                  fontWeight: 700,
                  color: '#FFFFFF',
                  lineHeight: 1.3,
                  padding: '16px 24px',
                  backgroundColor: '#111111',
                  borderRadius: 8,
                  borderLeft: '3px solid #00C96E',
                  opacity: 1 - i * 0.05,
                }}
              >
                "{h}"
              </div>
            ))}
          </div>
        </div>

        {/* Taglines */}
        <div style={{ marginBottom: 48 }}>
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 11,
              fontWeight: 600,
              textTransform: 'uppercase' as const,
              letterSpacing: '0.14em',
              color: '#00C96E',
              marginBottom: 20,
            }}
          >
            Taglines
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: 12,
            }}
          >
            {taglines.map((t, i) => (
              <div key={i} style={cardStyle}>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 16,
                    fontWeight: 700,
                    color: '#FFFFFF',
                    marginBottom: 8,
                    lineHeight: 1.4,
                  }}
                >
                  "{t.text}"
                </div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 11,
                    color: '#8B9A8B',
                    textTransform: 'uppercase' as const,
                    letterSpacing: '0.08em',
                  }}
                >
                  {t.use}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Elevator Pitches */}
        <div style={{ marginBottom: 48 }}>
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 11,
              fontWeight: 600,
              textTransform: 'uppercase' as const,
              letterSpacing: '0.14em',
              color: '#00C96E',
              marginBottom: 20,
            }}
          >
            Elevator Pitches
          </div>

          {/* 30s */}
          <div
            style={{
              ...cardStyle,
              borderLeft: '3px solid #00C96E',
              marginBottom: 16,
            }}
          >
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                color: '#00C96E',
                marginBottom: 12,
                textTransform: 'uppercase' as const,
                letterSpacing: '0.1em',
              }}
            >
              30 segundos
            </div>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 15,
                color: '#FFFFFF',
                lineHeight: 1.8,
                margin: 0,
                fontStyle: 'italic',
              }}
            >
              "{elevatorPitch30s}"
            </p>
          </div>

          {/* 60s */}
          <div
            style={{
              ...cardStyle,
              borderLeft: '3px solid #00C96E',
            }}
          >
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                color: '#00C96E',
                marginBottom: 12,
                textTransform: 'uppercase' as const,
                letterSpacing: '0.1em',
              }}
            >
              60 segundos
            </div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: '#FFFFFF', lineHeight: 1.8, fontStyle: 'italic' }}>
              {elevatorPitch60s.split('\n\n').map((para, i) => (
                <p key={i} style={{ margin: '0 0 16px 0' }}>
                  "{para}"
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* CTAs Grid */}
        <div>
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 11,
              fontWeight: 600,
              textTransform: 'uppercase' as const,
              letterSpacing: '0.14em',
              color: '#00C96E',
              marginBottom: 20,
            }}
          >
            CTAs por Etapa do Funil
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: 12,
            }}
          >
            {ctas.map((c, i) => (
              <div
                key={i}
                style={{
                  ...cardStyle,
                  padding: 20,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  marginBottom: 0,
                }}
              >
                <div>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 9,
                      fontWeight: 700,
                      textTransform: 'uppercase' as const,
                      letterSpacing: '0.12em',
                      color: stageColors[c.stage] || '#8B9A8B',
                      backgroundColor: `${stageColors[c.stage] || '#8B9A8B'}18`,
                      padding: '3px 8px',
                      borderRadius: 4,
                    }}
                  >
                    {c.stage}
                  </span>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 14,
                      color: '#FFFFFF',
                      lineHeight: 1.5,
                      margin: '12px 0 12px 0',
                    }}
                  >
                    "{c.text}"
                  </p>
                </div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 10,
                    color: '#8B9A8B',
                    textTransform: 'uppercase' as const,
                    letterSpacing: '0.06em',
                  }}
                >
                  {c.where}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── VOICE & TONE ─── */}
      <section id="voice-tone" style={sectionStyle}>
        <SectionHeader
          overline="Voz & Tom"
          title="Como a MVP Fala"
          description="5 pilares de voz, 2 registros, variacoes por canal. A voz permanece a mesma. O tom se adapta."
        />

        {/* Voice Pillars */}
        <div style={{ marginBottom: 48 }}>
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 11,
              fontWeight: 600,
              textTransform: 'uppercase' as const,
              letterSpacing: '0.14em',
              color: '#00C96E',
              marginBottom: 20,
            }}
          >
            5 Pilares de Voz
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {voicePillars.map((v, i) => (
              <div key={i} style={cardStyle}>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 18,
                    fontWeight: 700,
                    color: '#FFFFFF',
                    marginBottom: 16,
                  }}
                >
                  {v.pillar}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="lg:grid-cols-2">
                  {/* Yes */}
                  <div
                    style={{
                      padding: 16,
                      backgroundColor: 'rgba(0, 201, 110, 0.06)',
                      borderRadius: 8,
                      border: '1px solid rgba(0, 201, 110, 0.15)',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 10,
                        fontWeight: 700,
                        color: '#00C96E',
                        textTransform: 'uppercase' as const,
                        letterSpacing: '0.1em',
                        marginBottom: 8,
                      }}
                    >
                      E isso
                    </div>
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 13,
                        color: '#FFFFFF',
                        lineHeight: 1.6,
                        margin: 0,
                      }}
                    >
                      "{v.yes}"
                    </p>
                  </div>
                  {/* No */}
                  <div
                    style={{
                      padding: 16,
                      backgroundColor: 'rgba(255, 60, 60, 0.04)',
                      borderRadius: 8,
                      border: '1px solid rgba(255, 60, 60, 0.12)',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 10,
                        fontWeight: 700,
                        color: '#FF4444',
                        textTransform: 'uppercase' as const,
                        letterSpacing: '0.1em',
                        marginBottom: 8,
                      }}
                    >
                      Nao e isso
                    </div>
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 13,
                        color: '#8B9A8B',
                        lineHeight: 1.6,
                        margin: 0,
                        textDecoration: 'line-through',
                        textDecorationColor: 'rgba(255, 60, 60, 0.3)',
                      }}
                    >
                      "{v.no}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Two Registers */}
        <div style={{ marginBottom: 48 }}>
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 11,
              fontWeight: 600,
              textTransform: 'uppercase' as const,
              letterSpacing: '0.14em',
              color: '#00C96E',
              marginBottom: 20,
            }}
          >
            Dois Registros: Business Owner vs Developer
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {registerComparison.map((r, i) => (
              <div key={i} style={cardStyle}>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 14,
                    fontWeight: 700,
                    color: '#8B9A8B',
                    marginBottom: 16,
                    textTransform: 'uppercase' as const,
                    letterSpacing: '0.06em',
                  }}
                >
                  {r.context}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div
                    style={{
                      padding: 16,
                      backgroundColor: 'rgba(0, 201, 110, 0.04)',
                      borderRadius: 8,
                      border: '1px solid rgba(0, 201, 110, 0.1)',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 10,
                        color: '#00C96E',
                        textTransform: 'uppercase' as const,
                        letterSpacing: '0.1em',
                        marginBottom: 8,
                        fontWeight: 700,
                      }}
                    >
                      Business Owner
                    </div>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#FFFFFF', lineHeight: 1.6, margin: 0 }}>
                      {r.business}
                    </p>
                  </div>
                  <div
                    style={{
                      padding: 16,
                      backgroundColor: 'rgba(100, 140, 255, 0.04)',
                      borderRadius: 8,
                      border: '1px solid rgba(100, 140, 255, 0.1)',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 10,
                        color: '#648CFF',
                        textTransform: 'uppercase' as const,
                        letterSpacing: '0.1em',
                        marginBottom: 8,
                        fontWeight: 700,
                      }}
                    >
                      Developer
                    </div>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#FFFFFF', lineHeight: 1.6, margin: 0 }}>
                      {r.dev}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tone Variations */}
        <div>
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 11,
              fontWeight: 600,
              textTransform: 'uppercase' as const,
              letterSpacing: '0.14em',
              color: '#00C96E',
              marginBottom: 20,
            }}
          >
            Variacoes de Tom por Canal
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(480px, 1fr))', gap: 12 }}>
            {toneVariations.map((t, i) => (
              <div key={i} style={cardStyle}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 16,
                      fontWeight: 700,
                      color: '#FFFFFF',
                    }}
                  >
                    {t.channel}
                  </span>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 10,
                      color: '#00C96E',
                      backgroundColor: 'rgba(0, 201, 110, 0.1)',
                      padding: '3px 8px',
                      borderRadius: 4,
                    }}
                  >
                    {t.tone}
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 13,
                    color: '#8B9A8B',
                    lineHeight: 1.7,
                    margin: 0,
                    fontStyle: 'italic',
                  }}
                >
                  "{t.example}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BIOS ─── */}
      <section id="bios" style={sectionStyle}>
        <SectionHeader
          overline="Bios & Assinaturas"
          title="Os Fundadores"
          description="Tres tipos de inteligencia. Um sistema. Uma promessa."
        />

        {/* Founder cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 32 }}>
          {founders.map((f, i) => (
            <div key={i} style={cardStyle}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 20, flexWrap: 'wrap' as const }}>
                {/* Avatar placeholder */}
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(0, 201, 110, 0.12)',
                    border: '2px solid rgba(0, 201, 110, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 24,
                    fontWeight: 700,
                    color: '#00C96E',
                    flexShrink: 0,
                  }}
                >
                  {f.name.charAt(0)}
                </div>
                <div style={{ flex: 1, minWidth: 200 }}>
                  <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: 20, fontWeight: 700, color: '#FFFFFF', margin: '0 0 4px 0' }}>
                    {f.name}
                  </h3>
                  <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' as const }}>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#8B9A8B' }}>{f.role}</span>
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 10,
                        fontWeight: 700,
                        color: '#00C96E',
                        backgroundColor: 'rgba(0, 201, 110, 0.12)',
                        padding: '2px 8px',
                        borderRadius: 4,
                      }}
                    >
                      {f.archetype}
                    </span>
                  </div>
                </div>
              </div>

              {/* One-liner */}
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 15,
                  color: '#FFFFFF',
                  lineHeight: 1.6,
                  margin: '0 0 20px 0',
                  fontStyle: 'italic',
                }}
              >
                "{f.oneLiner}"
              </p>

              {/* Signature quote */}
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 14,
                  fontWeight: 700,
                  color: '#00C96E',
                  margin: '0 0 20px 0',
                }}
              >
                "{f.signature}"
              </div>

              {/* Bio versions */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                {/* Instagram */}
                <div
                  style={{
                    padding: 16,
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    borderRadius: 8,
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 10,
                      color: '#E1306C',
                      textTransform: 'uppercase' as const,
                      letterSpacing: '0.1em',
                      marginBottom: 8,
                      fontWeight: 700,
                    }}
                  >
                    Instagram Bio
                  </div>
                  <pre
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 12,
                      color: '#8B9A8B',
                      lineHeight: 1.6,
                      margin: 0,
                      whiteSpace: 'pre-wrap' as const,
                      wordWrap: 'break-word' as const,
                    }}
                  >
                    {f.instagram}
                  </pre>
                </div>
                {/* LinkedIn */}
                <div
                  style={{
                    padding: 16,
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    borderRadius: 8,
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 10,
                      color: '#0A66C2',
                      textTransform: 'uppercase' as const,
                      letterSpacing: '0.1em',
                      marginBottom: 8,
                      fontWeight: 700,
                    }}
                  >
                    LinkedIn Summary
                  </div>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 12,
                      color: '#8B9A8B',
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {f.linkedin}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Brand bio */}
        <div
          style={{
            ...cardStyle,
            borderColor: 'rgba(0, 201, 110, 0.25)',
            background: 'linear-gradient(135deg, #111111 0%, #0A1A0F 100%)',
          }}
        >
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10,
              color: '#00C96E',
              textTransform: 'uppercase' as const,
              letterSpacing: '0.1em',
              marginBottom: 12,
              fontWeight: 700,
            }}
          >
            Bio da Marca (perfis corporativos)
          </div>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 15,
              color: '#FFFFFF',
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            {brandBio}
          </p>
        </div>
      </section>

      {/* ─── OBJECTION BREAKERS ─── */}
      <section id="objecoes" style={sectionStyle}>
        <SectionHeader
          overline="Quebradores de Objecao"
          title="Reframes que Convertem"
          description="O lead resiste. Voce reframing. A objecao vira ponte para a venda."
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {objections.map((o, i) => (
            <div
              key={i}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                borderRadius: 12,
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              {/* Objection side */}
              <div
                style={{
                  padding: 24,
                  backgroundColor: 'rgba(255, 60, 60, 0.04)',
                  borderRight: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 10,
                    color: '#FF4444',
                    textTransform: 'uppercase' as const,
                    letterSpacing: '0.1em',
                    marginBottom: 12,
                    fontWeight: 700,
                  }}
                >
                  Objecao
                </div>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 18,
                    fontWeight: 700,
                    color: '#FF6B6B',
                    lineHeight: 1.4,
                    margin: 0,
                  }}
                >
                  "{o.objection}"
                </p>
              </div>
              {/* Reframe side */}
              <div
                style={{
                  padding: 24,
                  backgroundColor: 'rgba(0, 201, 110, 0.04)',
                }}
              >
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 10,
                    color: '#00C96E',
                    textTransform: 'uppercase' as const,
                    letterSpacing: '0.1em',
                    marginBottom: 12,
                    fontWeight: 700,
                  }}
                >
                  Reframe
                </div>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 13,
                    color: '#FFFFFF',
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {o.reframe}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── FOUNDING STORY ─── */}
      <section id="founding-story" style={{ ...sectionStyle, marginBottom: 40 }}>
        <SectionHeader
          overline="Historia dos Fundadores"
          title="Eram tres problemas diferentes que se encontraram."
        />

        <div
          style={{
            ...cardStyle,
            background: 'linear-gradient(135deg, #111111 0%, #0A1A0F 100%)',
            borderColor: 'rgba(0, 201, 110, 0.2)',
            padding: 48,
          }}
        >
          {foundingStory.split('\n\n').map((para, i) => {
            // Special styling for the pact line
            const isPact = para.startsWith('O que Pedro vende');
            const isSystemName = para.startsWith('O nome do sistema') || para.startsWith('O nome da promessa');

            return (
              <p
                key={i}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: isPact ? 20 : isSystemName ? 16 : 16,
                  fontWeight: isPact ? 700 : isSystemName ? 700 : 400,
                  color: isPact ? '#00C96E' : isSystemName ? '#00C96E' : '#FFFFFF',
                  lineHeight: 1.8,
                  margin: '0 0 24px 0',
                  maxWidth: 700,
                  textAlign: isPact ? 'center' as const : 'left' as const,
                  ...(isPact
                    ? {
                        padding: '20px 24px',
                        backgroundColor: 'rgba(0, 201, 110, 0.06)',
                        borderRadius: 8,
                        border: '1px solid rgba(0, 201, 110, 0.15)',
                        maxWidth: '100%',
                      }
                    : {}),
                }}
              >
                {para}
              </p>
            );
          })}

          {/* Founder signatures */}
          <div
            style={{
              marginTop: 32,
              paddingTop: 24,
              borderTop: '1px solid rgba(0, 201, 110, 0.15)',
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
            }}
          >
            {[
              { name: 'Pedro Henrique Silva Ribeiro', title: 'O Mago', quote: 'Voce ta sentado numa mina de ouro.' },
              { name: 'Murillo Fagundes Alves', title: 'O Criador', quote: 'O limite da IA e a imaginacao.' },
              { name: 'Raphael Meres', title: 'O Governante', quote: 'O foco tem que ser em ganhar dinheiro.' },
            ].map((f, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(0, 201, 110, 0.12)',
                    border: '1px solid rgba(0, 201, 110, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 16,
                    fontWeight: 700,
                    color: '#00C96E',
                    flexShrink: 0,
                  }}
                >
                  {f.name.charAt(0)}
                </div>
                <div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 700, color: '#FFFFFF' }}>
                    {f.name}{' '}
                    <span style={{ fontWeight: 400, color: '#8B9A8B', fontSize: 12 }}>— {f.title}</span>
                  </div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#00C96E', fontStyle: 'italic' }}>
                    "{f.quote}"
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
