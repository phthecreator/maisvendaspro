import SectionHeader from '../shared/SectionHeader';

/* ─── Value Ladder data ─── */
const products = [
  {
    id: 'bunker',
    icon: '\u{1F6E1}\uFE0F',
    name: 'O Bunker',
    tagline: 'Entre. Se proteja. Fique forte.',
    price: 'R$97/mes',
    priceAlt: 'R$997/ano',
    model: 'DIY Self-service',
    narrative: 'Protecao',
    barHeight: 120,
    gradient: 'linear-gradient(180deg, #00C96E 0%, #00A85A 100%)',
    opacity: 0.55,
  },
  {
    id: 'primeira-missao',
    icon: '\u26A1',
    name: 'A Primeira Missao',
    tagline: 'Seu primeiro combate real com IA.',
    price: 'R$3-5k',
    priceAlt: null,
    model: 'DFY pontual',
    narrative: 'Combate',
    barHeight: 180,
    gradient: 'linear-gradient(180deg, #00D474 0%, #00A85A 100%)',
    opacity: 0.7,
  },
  {
    id: 'forja',
    icon: '\u{1F525}',
    name: 'A Forja',
    tagline: 'Forje sua maquina de IA.',
    price: 'R$15-30k',
    priceAlt: '90 dias',
    model: 'DWY — Done With You',
    narrative: 'Forja',
    barHeight: 250,
    gradient: 'linear-gradient(180deg, #00E07A 0%, #00B862 100%)',
    opacity: 0.85,
  },
  {
    id: 'arsenal',
    icon: '\u2694\uFE0F',
    name: 'O Arsenal',
    tagline: 'Seu exercito completo de IA.',
    price: 'R$50-100k',
    priceAlt: null,
    model: 'DFY total',
    narrative: 'Dominio Total',
    barHeight: 320,
    gradient: 'linear-gradient(180deg, #00FF88 0%, #00C96E 100%)',
    opacity: 1,
  },
];

/* ─── Bunker deliverables ─── */
const bunkerDeliverables = [
  { item: 'Grupo WhatsApp exclusivo', detail: 'Acesso imediato — conteudo, networking, suporte' },
  { item: 'Trilha autoguiada (4 niveis)', detail: 'L1: Fundamentos IA · L2: Automacao + Agentes · L3: Infra & Deploy · L4: Operacao & Escala' },
  { item: '1 Squad Template incluso', detail: 'Escolhe na entrada (marketing, vendas ou conteudo)' },
  { item: 'Conteudo semanal', detail: 'Aulas praticas via Notebook LM (conceito = IA gera, pratica = gravada)' },
  { item: 'Encontro semanal ao vivo', detail: 'Terca 19h — tira-duvidas, demo ao vivo, cases' },
  { item: 'Onboarding automatico', detail: 'Entrou no grupo → recebe sequencia de boas-vindas + trilha + squad template automaticamente' },
];

/* ─── Primeira Missao deliverables ─── */
const primeiraMissaoDeliverables = [
  { item: 'Diagnostico express (1h)', detail: 'Mapeamento da dor principal + processo a automatizar' },
  { item: '1 Squad implementado', detail: 'Customizado pro seu negocio, configurado e rodando' },
  { item: 'Setup completo', detail: 'Agents configurados, tasks definidas, workflows testados' },
  { item: 'Treinamento de operacao (2h)', detail: 'Voce/seu time aprende a usar e manter o squad' },
  { item: '30 dias de suporte', detail: 'Ajustes e duvidas pos-implementacao' },
  { item: 'Relatorio de resultados', detail: 'Metricas do squad nos primeiros 30 dias' },
  { item: 'Acesso ao Bunker (3 meses)', detail: 'Incluso — continua evoluindo com a comunidade' },
];

const mostRequestedSquads = [
  'Squad Marketing (conteudo + copy automatizados)',
  'Squad Trafego (gestao de Meta Ads)',
  'Squad Vendas (closer + comercial)',
  'Squad Landing Page (paginas prontas em horas)',
  'Squad RH (recrutamento + processos)',
];

/* ─── Forja deliverables ─── */
const forjaDeliverables = [
  { item: '3-7 Squads implementados', detail: 'Customizados por area (marketing, vendas, ops, design, etc.)' },
  { item: '90 dias de acompanhamento', detail: 'Reuniao individual semanal (1h) + grupo semanal + SOS mensal' },
  { item: 'Squads produzindo entre as calls', detail: 'Entregas continuas — nao e "so conversar", e maquina rodando' },
  { item: 'DNA Extractor', detail: 'Clonagem de conhecimento de 1-2 pessoas-chave do seu negocio' },
  { item: 'Dashboard de resultados', detail: 'Metricas de todos os squads em tempo real' },
  { item: 'Treinamento do time (4h)', detail: 'Sua equipe opera os squads com autonomia total' },
  { item: 'Acesso ao Bunker (12 meses)', detail: 'Incluso' },
];

const forjaTiers = [
  { tier: 'Forja Core', squads: '3-5 squads', price: 'R$15k', profile: 'Agencia/empresa R$20-80k/mes' },
  { tier: 'Forja Growth', squads: '5-7 squads', price: 'R$20-30k', profile: 'Empresa R$80-200k/mes' },
];

/* ─── Arsenal deliverables ─── */
const arsenalDeliverables = [
  { item: '15-30+ Squads implementados', detail: 'Cobertura total de todas as areas' },
  { item: 'Implementacao em 3-4 dias (imersao)', detail: 'Presencial ou remoto intensivo' },
  { item: 'DNA Extractor completo', detail: 'Clonagem de toda lideranca — suas mentes viram IA' },
  { item: 'MMOS Advisory Board', detail: '35+ mentes de especialistas como conselheiros' },
  { item: 'Squad Creator Pro', detail: 'Squads custom criados sob medida, sem limite' },
  { item: 'Treinamento completo (8h+)', detail: 'Todo time operando com autonomia' },
  { item: '6 meses de suporte dedicado', detail: 'Account manager + suporte tecnico' },
  { item: 'Dashboard enterprise', detail: 'Metricas, ROI, health checks de todos squads' },
  { item: 'Acesso ao Bunker (vitalicio)', detail: 'Incluso' },
];

const arsenalTiers = [
  { tier: 'Arsenal Tatico', squads: '15-20 squads', price: 'R$50k', profile: '1-2 areas, empresa R$80-200k/mes' },
  { tier: 'Arsenal Estrategico', squads: '20-25 squads', price: 'R$75k', profile: '3-4 areas, empresa R$200-500k/mes' },
  { tier: 'Arsenal Completo', squads: '30+ squads', price: 'R$100k', profile: 'Empresa inteira, R$500k+/mes' },
];

/* ─── Upsell flow steps ─── */
const upsellSteps = [
  { icon: '\u{1F6E1}\uFE0F', name: 'Bunker', price: 'R$97/mes', trigger: 'Membro experimenta squad template, ve potencial' },
  { icon: '\u26A1', name: 'Primeira Missao', price: 'R$3-5k', trigger: 'Relatorio 30 dias mostra resultado concreto' },
  { icon: '\u{1F525}', name: 'Forja', price: 'R$15-30k', trigger: '90 dias de resultado comprovado, squads produzindo' },
  { icon: '\u2694\uFE0F', name: 'Arsenal', price: 'R$50-100k', trigger: 'Cliente vira case + evangelista' },
];

/* ─── Shared styles ─── */
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
  marginBottom: 24,
};

const tableStyle: React.CSSProperties = {
  width: '100%',
  borderCollapse: 'collapse' as const,
  marginTop: 16,
};

const thStyle: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontSize: 11,
  fontWeight: 600,
  textTransform: 'uppercase' as const,
  letterSpacing: '0.1em',
  color: '#8B9A8B',
  textAlign: 'left' as const,
  padding: '8px 12px',
  borderBottom: '1px solid rgba(255,255,255,0.08)',
};

const tdStyle: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontSize: 14,
  color: '#FFFFFF',
  padding: '10px 12px',
  borderBottom: '1px solid rgba(255,255,255,0.04)',
  lineHeight: 1.5,
};

const tdMutedStyle: React.CSSProperties = {
  ...tdStyle,
  color: '#8B9A8B',
  fontSize: 13,
};

/* ─── Deliverables table component ─── */
function DeliverablesTable({ items }: { items: { item: string; detail: string }[] }) {
  return (
    <table style={tableStyle}>
      <thead>
        <tr>
          <th style={thStyle}>Entregavel</th>
          <th style={thStyle}>Detalhe</th>
        </tr>
      </thead>
      <tbody>
        {items.map((d, i) => (
          <tr key={i}>
            <td style={{ ...tdStyle, fontWeight: 600, whiteSpace: 'nowrap' as const, minWidth: 200 }}>{d.item}</td>
            <td style={tdMutedStyle}>{d.detail}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

/* ─── Sub-tier table ─── */
function SubTierTable({ tiers }: { tiers: { tier: string; squads: string; price: string; profile: string }[] }) {
  return (
    <table style={{ ...tableStyle, marginTop: 24 }}>
      <thead>
        <tr>
          <th style={thStyle}>Sub-tier</th>
          <th style={thStyle}>Squads</th>
          <th style={thStyle}>Preco</th>
          <th style={thStyle}>Perfil</th>
        </tr>
      </thead>
      <tbody>
        {tiers.map((t, i) => (
          <tr key={i}>
            <td style={{ ...tdStyle, fontWeight: 600 }}>{t.tier}</td>
            <td style={tdStyle}>{t.squads}</td>
            <td style={{ ...tdStyle, color: '#00C96E', fontWeight: 600 }}>{t.price}</td>
            <td style={tdMutedStyle}>{t.profile}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

/* ─── Product Card Header ─── */
function ProductCardHeader({
  icon,
  name,
  tagline,
  price,
  priceAlt,
  model,
}: {
  icon: string;
  name: string;
  tagline: string;
  price: string;
  priceAlt?: string | null;
  model: string;
}) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 24, flexWrap: 'wrap' as const }}>
      <div
        style={{
          fontSize: 48,
          lineHeight: 1,
          flexShrink: 0,
        }}
      >
        {icon}
      </div>
      <div style={{ flex: 1, minWidth: 200 }}>
        <h3
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 28,
            fontWeight: 700,
            color: '#FFFFFF',
            margin: 0,
            marginBottom: 4,
          }}
        >
          {name}
        </h3>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 16,
            color: '#8B9A8B',
            margin: 0,
            marginBottom: 12,
            fontStyle: 'italic',
          }}
        >
          "{tagline}"
        </p>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' as const }}>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 18,
              fontWeight: 700,
              color: '#00C96E',
            }}
          >
            {price}
          </span>
          {priceAlt && (
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 14,
                color: '#8B9A8B',
                alignSelf: 'center',
              }}
            >
              {priceAlt}
            </span>
          )}
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 11,
              fontWeight: 600,
              textTransform: 'uppercase' as const,
              letterSpacing: '0.1em',
              color: '#0A0A0A',
              backgroundColor: 'rgba(0, 201, 110, 0.8)',
              padding: '3px 10px',
              borderRadius: 4,
              alignSelf: 'center',
            }}
          >
            {model}
          </span>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════ */
export default function Products() {
  return (
    <div style={containerStyle}>
      {/* ─── ESCADA DE VALOR ─── */}
      <section id="escada-valor" style={sectionStyle}>
        <SectionHeader
          overline="Escada de Valor"
          title="A Jornada do Heroi"
          description="Protecao → Combate → Forja → Dominio Total. Quatro produtos. Uma escada. O heroi fica mais forte a cada nivel."
        />

        {/* Narrative intro */}
        <div
          style={{
            ...cardStyle,
            background: 'linear-gradient(135deg, #111111 0%, #0A1A0F 100%)',
            borderColor: 'rgba(0, 201, 110, 0.25)',
            marginBottom: 40,
          }}
        >
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 15,
              color: '#8B9A8B',
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            Voce esta exposto. O mercado esta mudando. IA esta devorando negocios lentos. Mas existe um caminho:
            entre no Bunker, proteja-se, fique forte. Depois saia para o primeiro combate real. Prove que funciona.
            Entao forje sua maquina — junto com a gente. E quando estiver pronto, monte seu exercito completo.
          </p>
        </div>

        {/* Visual value ladder */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            gap: 24,
            padding: '40px 0',
            minHeight: 420,
          }}
          className="hidden lg:flex"
        >
          {products.map((p) => (
            <div
              key={p.id}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 12,
                flex: 1,
                maxWidth: 200,
              }}
            >
              {/* Name + price label */}
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 32, marginBottom: 4 }}>{p.icon}</div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 14,
                    fontWeight: 700,
                    color: '#FFFFFF',
                  }}
                >
                  {p.name}
                </div>
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 12,
                    color: '#00C96E',
                    fontWeight: 600,
                  }}
                >
                  {p.price}
                </div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 10,
                    textTransform: 'uppercase' as const,
                    letterSpacing: '0.08em',
                    color: '#8B9A8B',
                    marginTop: 2,
                  }}
                >
                  {p.model}
                </div>
              </div>

              {/* The bar */}
              <div
                style={{
                  width: '100%',
                  height: p.barHeight,
                  background: p.gradient,
                  opacity: p.opacity,
                  borderRadius: '8px 8px 0 0',
                  position: 'relative',
                  transition: 'height 0.6s ease',
                }}
              >
                {/* Narrative tag */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 12,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 10,
                    fontWeight: 600,
                    textTransform: 'uppercase' as const,
                    letterSpacing: '0.1em',
                    color: '#0A0A0A',
                    whiteSpace: 'nowrap' as const,
                  }}
                >
                  {p.narrative}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile-friendly card list */}
        <div className="lg:hidden" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {products.map((p) => (
            <div
              key={p.id}
              style={{
                ...cardStyle,
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                padding: 20,
                marginBottom: 0,
              }}
            >
              <div style={{ fontSize: 32, flexShrink: 0 }}>{p.icon}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, fontWeight: 700, color: '#FFFFFF' }}>
                  {p.name}
                </div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#8B9A8B' }}>{p.tagline}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 14, color: '#00C96E', fontWeight: 700 }}>
                  {p.price}
                </div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, color: '#8B9A8B', textTransform: 'uppercase' as const }}>
                  {p.model}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Narrative connection */}
        <div
          style={{
            textAlign: 'center',
            marginTop: 32,
            fontFamily: "'Inter', sans-serif",
            fontSize: 14,
            color: '#8B9A8B',
            letterSpacing: '0.08em',
          }}
        >
          <span style={{ color: '#00C96E', fontWeight: 600 }}>Protecao</span>
          {' → '}
          <span style={{ color: '#00C96E', fontWeight: 600 }}>Combate</span>
          {' → '}
          <span style={{ color: '#00C96E', fontWeight: 600 }}>Forja</span>
          {' → '}
          <span style={{ color: '#00C96E', fontWeight: 600 }}>Dominio Total</span>
        </div>
      </section>

      {/* ─── O BUNKER ─── */}
      <section id="bunker" style={sectionStyle}>
        <SectionHeader overline="Nivel 1 — DIY Self-service" title="O Bunker" />
        <div style={cardStyle}>
          <ProductCardHeader
            icon={'\u{1F6E1}\uFE0F'}
            name="O Bunker"
            tagline="Entre. Se proteja. Fique forte."
            price="R$97/mes"
            priceAlt="R$997/ano"
            model="DIY Self-service"
          />

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 15,
              color: '#8B9A8B',
              lineHeight: 1.7,
              margin: '0 0 24px 0',
              maxWidth: 700,
            }}
          >
            Voce entra cru e sai preparado. O Bunker e onde voce aprende a usar IA de verdade no seu negocio
            — sem teoria, sem enrolacao. Implementacao real, no seu ritmo, com suporte de quem ja faz.
          </p>

          <DeliverablesTable items={bunkerDeliverables} />

          {/* Member arc */}
          <div
            style={{
              marginTop: 28,
              padding: '16px 20px',
              backgroundColor: 'rgba(0, 201, 110, 0.06)',
              borderRadius: 8,
              border: '1px solid rgba(0, 201, 110, 0.12)',
            }}
          >
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 11,
                fontWeight: 600,
                textTransform: 'uppercase' as const,
                letterSpacing: '0.1em',
                color: '#8B9A8B',
                marginBottom: 8,
              }}
            >
              Arco do Membro
            </div>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 14,
                color: '#00C96E',
                display: 'flex',
                gap: 8,
                flexWrap: 'wrap' as const,
                alignItems: 'center',
              }}
            >
              <span style={{ color: '#FFFFFF' }}>Recruta</span>
              <span style={{ opacity: 0.5 }}>{'\u2192'}</span>
              <span style={{ color: '#FFFFFF' }}>Construtor</span>
              <span style={{ opacity: 0.5 }}>{'\u2192'}</span>
              <span style={{ color: '#FFFFFF' }}>Deployer</span>
              <span style={{ opacity: 0.5 }}>{'\u2192'}</span>
              <span style={{ color: '#00C96E', fontWeight: 700 }}>Operador</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── A PRIMEIRA MISSAO ─── */}
      <section id="primeira-missao" style={sectionStyle}>
        <SectionHeader overline="Nivel 2 — DFY Pontual" title="A Primeira Missao" />
        <div style={cardStyle}>
          <ProductCardHeader
            icon={'\u26A1'}
            name="A Primeira Missao"
            tagline="Seu primeiro combate real com IA. Um squad. Cinco dias. Resultado."
            price="R$3-5k"
            model="DFY pontual — 1 squad"
          />

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 15,
              color: '#8B9A8B',
              lineHeight: 1.7,
              margin: '0 0 24px 0',
              maxWidth: 700,
            }}
          >
            Voce saiu do Bunker. Esta pronto pro primeiro combate de verdade. A gente pega, implementa UM squad
            no seu negocio em 5 dias, e voce ve o resultado com os proprios olhos. Sem teoria — resultado.
          </p>

          <DeliverablesTable items={primeiraMissaoDeliverables} />

          {/* Most requested squads */}
          <div
            style={{
              marginTop: 28,
              padding: '16px 20px',
              backgroundColor: 'rgba(0, 201, 110, 0.06)',
              borderRadius: 8,
              border: '1px solid rgba(0, 201, 110, 0.12)',
            }}
          >
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 11,
                fontWeight: 600,
                textTransform: 'uppercase' as const,
                letterSpacing: '0.1em',
                color: '#8B9A8B',
                marginBottom: 12,
              }}
            >
              Squads Mais Pedidos
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: 8 }}>
              {mostRequestedSquads.map((s, i) => (
                <span
                  key={i}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 12,
                    color: '#FFFFFF',
                    backgroundColor: 'rgba(0, 201, 110, 0.12)',
                    border: '1px solid rgba(0, 201, 110, 0.2)',
                    padding: '6px 12px',
                    borderRadius: 6,
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── A FORJA ─── */}
      <section id="forja" style={sectionStyle}>
        <SectionHeader overline="Nivel 3 — Done With You" title="A Forja" />
        <div style={cardStyle}>
          <ProductCardHeader
            icon={'\u{1F525}'}
            name="A Forja"
            tagline="Forje sua maquina de IA. Junto com a gente. 90 dias."
            price="R$15-30k"
            priceAlt="90 dias"
            model="DWY — Done With You"
          />

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 15,
              color: '#8B9A8B',
              lineHeight: 1.7,
              margin: '0 0 16px 0',
              maxWidth: 700,
            }}
          >
            Voce provou que funciona. Agora e hora de escalar. Na Forja, construimos sua maquina de IA junto
            com voce — 3 a 7 squads cobrindo multiplas areas do negocio. E o diferencial: os squads trabalham
            ENTRE as reunioes.
          </p>

          {/* Diferencial callout */}
          <div
            style={{
              margin: '0 0 24px 0',
              padding: '16px 20px',
              backgroundColor: 'rgba(0, 201, 110, 0.08)',
              borderLeft: '3px solid #00C96E',
              borderRadius: '0 8px 8px 0',
            }}
          >
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 14,
                color: '#FFFFFF',
                margin: 0,
                lineHeight: 1.6,
              }}
            >
              <strong style={{ color: '#00C96E' }}>Diferencial:</strong> Mentoria comum = conversa. A Forja = conversa + squads
              trabalhando 24/7 entre uma call e outra.
            </p>
          </div>

          <DeliverablesTable items={forjaDeliverables} />

          {/* Sub-tiers */}
          <div style={{ marginTop: 28 }}>
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 11,
                fontWeight: 600,
                textTransform: 'uppercase' as const,
                letterSpacing: '0.1em',
                color: '#8B9A8B',
                marginBottom: 8,
              }}
            >
              Sub-tiers
            </div>
            <SubTierTable tiers={forjaTiers} />
          </div>
        </div>
      </section>

      {/* ─── O ARSENAL ─── */}
      <section id="arsenal" style={sectionStyle}>
        <SectionHeader overline="Nivel 4 — DFY Total" title="O Arsenal" />
        <div style={cardStyle}>
          <ProductCardHeader
            icon={'\u2694\uFE0F'}
            name="O Arsenal"
            tagline="Seu exercito completo de IA. Implementado. Funcionando. Voce comanda."
            price="R$50-100k"
            model="DFY total"
          />

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 15,
              color: '#8B9A8B',
              lineHeight: 1.7,
              margin: '0 0 24px 0',
              maxWidth: 700,
            }}
          >
            Arsenal completo. Toda a operacao da empresa coberta por squads de IA. Marketing, vendas, design,
            dados, operacoes, RH, juridico. Voce comanda. Eles executam. 24 horas. 7 dias.
          </p>

          <DeliverablesTable items={arsenalDeliverables} />

          {/* Sub-tiers */}
          <div style={{ marginTop: 28 }}>
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 11,
                fontWeight: 600,
                textTransform: 'uppercase' as const,
                letterSpacing: '0.1em',
                color: '#8B9A8B',
                marginBottom: 8,
              }}
            >
              Sub-tiers
            </div>
            <SubTierTable tiers={arsenalTiers} />
          </div>
        </div>
      </section>

      {/* ─── UPSELL FLOW ─── */}
      <section id="upsell-flow" style={{ ...sectionStyle, marginBottom: 40 }}>
        <SectionHeader
          overline="Jornada de Upsell"
          title="Fluxo Natural de Evolucao"
          description="Cada produto e uma evolucao natural — o heroi fica mais forte a cada nivel. Ninguem precisa comprar tudo de uma vez."
        />

        <div
          style={{
            ...cardStyle,
            background: 'linear-gradient(135deg, #111111 0%, #0A1A0F 100%)',
            padding: 40,
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {upsellSteps.map((step, i) => (
              <div key={i}>
                {/* Step card */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 20,
                    padding: '16px 0',
                    flexWrap: 'wrap' as const,
                  }}
                >
                  <div style={{ fontSize: 32, flexShrink: 0, width: 48, textAlign: 'center' }}>{step.icon}</div>
                  <div style={{ flex: 1, minWidth: 200 }}>
                    <div
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 18,
                        fontWeight: 700,
                        color: '#FFFFFF',
                        marginBottom: 2,
                      }}
                    >
                      {step.name}
                      <span
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: 13,
                          color: '#00C96E',
                          fontWeight: 600,
                          marginLeft: 12,
                        }}
                      >
                        {step.price}
                      </span>
                    </div>
                    <div
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 13,
                        color: '#8B9A8B',
                      }}
                    >
                      {step.trigger}
                    </div>
                  </div>
                </div>

                {/* Arrow connector */}
                {i < upsellSteps.length - 1 && (
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      paddingLeft: 20,
                      height: 32,
                    }}
                  >
                    <div
                      style={{
                        width: 2,
                        height: '100%',
                        backgroundColor: 'rgba(0, 201, 110, 0.3)',
                        marginLeft: 22,
                      }}
                    />
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      style={{ marginLeft: -9, marginTop: 16 }}
                    >
                      <polygon points="8,14 2,6 14,6" fill="#00C96E" opacity={0.5} />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
