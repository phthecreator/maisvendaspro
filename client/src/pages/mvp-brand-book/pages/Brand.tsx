import SectionHeader from '../shared/SectionHeader';
import AlchemistTriangle from '../shared/AlchemistTriangle';

const FOUNDERS = [
  {
    name: 'Pedro',
    role: 'CRO — O Mago',
    archetype: 'Mago',
    description: 'Transforma caos em sistema. Vê padrões onde outros veem confusão. Domina a alquimia da conversão — funis, copy, estratégia de vendas. O cara que olha pro teu negócio e fala "aqui tem dinheiro escondido".',
    color: '#00C96E',
  },
  {
    name: 'Murillo',
    role: 'CTO — O Criador',
    archetype: 'Criador',
    description: 'Constrói o que não existe. Arquiteta sistemas, squads de IA, automações que rodam 24/7. Se o Mago enxerga o caminho, o Criador pavimenta com código e infraestrutura. Engenheiro de máquinas inteligentes.',
    color: '#33D489',
  },
  {
    name: 'Rapha',
    role: 'CEO — O Governante',
    archetype: 'Governante',
    description: 'Garante que o reino funciona. Visão de longo prazo, estrutura de negócios, gestão de portfólio. Enquanto o Mago e o Criador mergulham no detalhe, o Governante mantém a direção e protege a operação.',
    color: '#00A85A',
  },
];

const PILLARS = [
  {
    n: 1,
    title: 'História de Criação',
    text: 'Três sócios com backgrounds complementares — vendas, tecnologia e gestão — se encontraram num ponto em comum: empresas desperdiçam fortunas tentando escalar sem sistema. A MCX nasceu como consultoria e evoluiu para Mais Vendas Pro quando percebemos que o mercado precisava de máquinas, não de conselhos.',
  },
  {
    n: 2,
    title: 'Credo',
    text: 'Inteligência artificial só funciona quando tem estratégia por trás. Máquina sem direção é desperdício. Resultado se mede em receita, não em likes. O empresário não precisa de mais conteúdo — precisa de sistema que trabalhe enquanto ele dorme. Cada real investido tem que voltar multiplicado.',
  },
  {
    n: 3,
    title: 'Ícones',
    text: 'O Triângulo Alquimista — três vértices representando os fundadores e a tríade Estratégia + Tecnologia + Gestão. Estética Matrix: verde sobre preto, código fluindo, terminal como interface de poder. O triângulo com o ponto central é o símbolo da transmutação — transformar negócio comum em máquina.',
  },
  {
    n: 4,
    title: 'Rituais',
    text: 'Sessão diagnóstico antes de qualquer venda. Onboarding com setup completo de squads de IA. Review semanal de métricas com ajuste de rota. Deploy quinzenal de novas automações. Quarterly business review com roadmap do próximo trimestre.',
  },
  {
    n: 5,
    title: 'Pagãos (Inimigos)',
    text: 'O guru de marketing que vende curso e some. A agência que cobra retainer e entrega relatório bonito sem resultado. O "faz tudo sozinho" que leva 2 anos pra montar o que a gente monta em 90 dias. A IA genérica sem estratégia — chatbot burro, automação sem funil.',
  },
  {
    n: 6,
    title: 'Palavras Sagradas',
    text: 'Máquina = sistema automatizado que gera resultado. Squad = time de IA especialista. Deploy = colocar no ar, em produção. Funil = caminho do desconhecido até o cliente. Escada de valor = jornada do cliente de R$97 a R$100k. Alquimia = transformação de negócio comum em operação de alto nível.',
  },
  {
    n: 7,
    title: 'Líder',
    text: 'Não é um guru. São três operadores que constroem o que vendem. Pedro mostra o funil rodando, não o slide. Murillo mostra o terminal, não a teoria. Rapha mostra o P&L, não a promessa. Autoridade vem de resultado entregue, não de palco.',
  },
];

const VALUE_LADDER = [
  { label: 'Bunker IA', price: 'R$97/mês', description: 'Comunidade + conteúdo + deploys em grupo', h: 80, border: '#00C96E', glow: false },
  { label: 'Primeira Missão', price: 'R$3-5k', description: 'Projeto inicial de automação — prova de conceito', h: 120, border: '#33D489', glow: false },
  { label: 'A Forja', price: 'R$15-30k', description: 'Mentoria premium 90 dias — done with you', h: 170, border: '#00C96E', glow: true },
  { label: 'Arsenal', price: 'R$50-100k', description: 'Implementação completa — done for you', h: 220, border: '#00A85A', glow: false },
];

export default function Brand() {
  return (
    <div>
      {/* === NARRATIVA === */}
      <section id="narrativa" style={{ marginBottom: 120 }}>
        <SectionHeader
          overline="Origem"
          title="A História da Mais Vendas Pro"
          description="De consultoria a fábrica de máquinas inteligentes."
        />

        <div
          className="mvp-glass"
          style={{ padding: 32, borderRadius: 8, marginBottom: 24 }}
        >
          <p style={{ fontSize: 15, lineHeight: 1.9, color: '#FFFFFF', margin: 0 }}>
            Tudo começou com três problemas diferentes que se encontraram na mesma mesa. Pedro via empresas com produtos incríveis que não sabiam vender. Murillo via processos manuais que podiam rodar sozinhos com IA. Rapha via negócios crescendo sem estrutura, quebrando no próprio sucesso. A MCX nasceu como consultoria — mas rapidamente ficou claro que o mercado não precisava de mais conselhos. Precisava de máquinas.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
          <div className="mvp-glass" style={{ padding: 24, borderRadius: 8 }}>
            <h4 style={{ color: '#00C96E', fontSize: 12, marginBottom: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              DE MCX PARA MVP
            </h4>
            <p style={{ fontSize: 13, lineHeight: 1.7, color: '#8B9A8B', margin: 0 }}>
              MCX era consultoria tradicional. Mais Vendas Pro é a evolução: um ecossistema de produtos que instala máquinas de vendas inteligentes em negócios de alto ticket. O nome carrega duplo sentido — MVP como Minimum Viable Product e como Mais Vendas Pro.
            </p>
          </div>
          <div className="mvp-glass" style={{ padding: 24, borderRadius: 8 }}>
            <h4 style={{ color: '#33D489', fontSize: 12, marginBottom: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              A TESE CENTRAL
            </h4>
            <p style={{ fontSize: 13, lineHeight: 1.7, color: '#8B9A8B', margin: 0 }}>
              Inteligência artificial sem estratégia é chatbot caro. Estratégia sem automação é consultoria lenta. A Mais Vendas Pro une os dois: squads de IA dirigidos por estratégia de negócio, gerando resultado mensurável em receita.
            </p>
          </div>
        </div>

        <div
          style={{
            marginTop: 24,
            padding: 20,
            borderLeft: '3px solid #00C96E',
            backgroundColor: 'rgba(0, 201, 110, 0.03)',
            borderRadius: '0 8px 8px 0',
          }}
        >
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: '#33D489', margin: 0, fontStyle: 'italic' }}>
            "Eram três problemas diferentes que se encontraram na mesma mesa. E a solução não era mais um conselho — era uma máquina."
          </p>
        </div>
      </section>

      {/* === ARQUETIPOS === */}
      <section id="arquetipos" style={{ marginBottom: 120 }}>
        <SectionHeader
          overline="Identidade"
          title="O Alquimista — Três Arquétipos"
          description="Mago + Criador + Governante = A tríade que transforma negócios."
        />

        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 40 }}>
          <div style={{ position: 'relative', width: 200, height: 200 }}>
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <AlchemistTriangle size={180} />
            </div>
            {/* Labels around triangle */}
            <div style={{ position: 'absolute', top: -8, left: '50%', transform: 'translateX(-50%)', textAlign: 'center' }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: '#00C96E', fontFamily: "'Inter', sans-serif" }}>Pedro</div>
              <div style={{ fontSize: 9, color: '#8B9A8B' }}>Mago</div>
            </div>
            <div style={{ position: 'absolute', bottom: -8, left: -20, textAlign: 'center' }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: '#33D489', fontFamily: "'Inter', sans-serif" }}>Murillo</div>
              <div style={{ fontSize: 9, color: '#8B9A8B' }}>Criador</div>
            </div>
            <div style={{ position: 'absolute', bottom: -8, right: -24, textAlign: 'center' }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: '#00A85A', fontFamily: "'Inter', sans-serif" }}>Rapha</div>
              <div style={{ fontSize: 9, color: '#8B9A8B' }}>Governante</div>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {FOUNDERS.map((f) => (
            <div
              key={f.name}
              className="mvp-glass"
              style={{
                padding: 24,
                borderRadius: 8,
                borderLeft: `3px solid ${f.color}`,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    backgroundColor: `${f.color}15`,
                    border: `1px solid ${f.color}40`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 14,
                    fontWeight: 700,
                    color: f.color,
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {f.name[0]}
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: '#FFFFFF', margin: 0, fontWeight: 700 }}>
                    {f.name}
                  </h3>
                  <div style={{ fontSize: 11, color: f.color, fontWeight: 600, letterSpacing: '0.05em' }}>
                    {f.role}
                  </div>
                </div>
              </div>
              <p style={{ fontSize: 14, lineHeight: 1.8, color: '#8B9A8B', margin: 0 }}>
                {f.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mvp-glass" style={{ padding: 20, borderRadius: 8, marginTop: 24, textAlign: 'center' }}>
          <p style={{ fontSize: 13, color: '#8B9A8B', margin: 0, lineHeight: 1.7 }}>
            <span style={{ color: '#00C96E', fontWeight: 600 }}>Complementaridade:</span> O Mago enxerga a oportunidade. O Criador constrói a solução. O Governante escala a operação. Juntos formam O Alquimista — capaz de transformar qualquer negócio em máquina.
          </p>
        </div>
      </section>

      {/* === PRIMAL BRANDING === */}
      <section id="primal-branding" style={{ marginBottom: 120 }}>
        <SectionHeader
          overline="Framework"
          title="Primal Branding — 7 Pilares"
          description="Os elementos primitivos que constroem a identidade da marca."
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {PILLARS.map((p) => (
            <div
              key={p.n}
              className="mvp-glass"
              style={{
                padding: 24,
                borderRadius: 8,
                borderLeft: '3px solid #00C96E',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(0, 201, 110, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 14,
                    fontWeight: 700,
                    color: '#00C96E',
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {p.n}
                </div>
                <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: 18, color: '#FFFFFF', margin: 0, fontWeight: 700 }}>
                  {p.title}
                </h3>
              </div>
              <p style={{ fontSize: 14, lineHeight: 1.8, color: '#8B9A8B', margin: 0, whiteSpace: 'pre-line' }}>
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* === POSICIONAMENTO === */}
      <section id="posicionamento" style={{ marginBottom: 120 }}>
        <SectionHeader
          overline="Estratégia"
          title="Posicionamento — Escada de Valor"
          description="4 produtos que conduzem o cliente do primeiro contato até a operação completa."
        />

        {/* Value Ladder */}
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, marginBottom: 40, flexWrap: 'wrap', justifyContent: 'center' }}>
          {VALUE_LADDER.map((step) => (
            <div key={step.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
              <div
                style={{
                  width: 140,
                  height: step.h,
                  background: step.glow ? 'linear-gradient(180deg, rgba(0,201,110,0.12), #111111)' : '#111111',
                  borderRadius: '8px 8px 0 0',
                  border: `1.5px solid ${step.border}`,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  padding: 14,
                  boxShadow: step.glow ? `0 0 24px rgba(0, 201, 110, 0.2)` : 'none',
                }}
              >
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: step.glow ? '#00C96E' : '#FFFFFF',
                    textAlign: 'center',
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {step.label}
                </div>
                <div style={{ fontSize: 10, color: '#8B9A8B', marginTop: 4, fontFamily: "'Inter', sans-serif" }}>
                  {step.price}
                </div>
                <div
                  style={{
                    fontSize: 9,
                    color: 'rgba(139, 154, 139, 0.5)',
                    marginTop: 6,
                    textAlign: 'center',
                    lineHeight: 1.4,
                  }}
                >
                  {step.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Hero's Journey narrative */}
        <div className="mvp-glass" style={{ padding: 24, borderRadius: 8, marginBottom: 24 }}>
          <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, fontWeight: 700, color: '#FFFFFF', marginBottom: 16, marginTop: 0 }}>
            A Jornada do Herói
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { step: '1', label: 'Bunker IA', text: 'O empresário descobre que IA pode ser aplicada ao negócio. Entra na comunidade, aprende os fundamentos, faz seus primeiros deploys em grupo. Sai da esteira de conteúdo e entra em modo implementação.' },
              { step: '2', label: 'Primeira Missão', text: 'Prova de conceito. Um projeto focado — chatbot, automação de lead, qualificação automática. O empresário vê a IA funcionando no próprio negócio e entende o potencial real.' },
              { step: '3', label: 'A Forja', text: 'Mentoria premium de 90 dias. Acompanhamento semanal, squads de IA trabalhando entre as calls, sistema completo de vendas implementado. Sai com máquina posicionada e vendendo.' },
              { step: '4', label: 'Arsenal', text: 'Implementação completa done-for-you. A equipe MVP instala a operação inteira: funis, automações, squads de IA, integração CRM, tracking completo. O empresário recebe a máquina rodando.' },
            ].map((item) => (
              <div key={item.step} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <div
                  style={{
                    minWidth: 28,
                    height: 28,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(0, 201, 110, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 12,
                    fontWeight: 700,
                    color: '#00C96E',
                  }}
                >
                  {item.step}
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: '#00C96E', marginBottom: 4, fontFamily: "'Inter', sans-serif" }}>
                    {item.label}
                  </div>
                  <p style={{ fontSize: 13, lineHeight: 1.7, color: '#8B9A8B', margin: 0 }}>
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            marginTop: 24,
            padding: 20,
            borderLeft: '3px solid #00C96E',
            backgroundColor: 'rgba(0, 201, 110, 0.03)',
            borderRadius: '0 8px 8px 0',
          }}
        >
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: '#33D489', margin: 0, fontStyle: 'italic' }}>
            "Cada degrau resolve um problema e revela o próximo. O cliente nunca é empurrado — ele sobe porque faz sentido."
          </p>
        </div>
      </section>
    </div>
  );
}
