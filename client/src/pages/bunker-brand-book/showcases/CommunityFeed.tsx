import { useState } from 'react';
import {
  Heart,
  MessageCircle,
  Star,
  Shield,
  Hammer,
  Rocket,
  Send,
  Code,
  Image as ImageIcon,
  Users,
} from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Channel tabs                                                       */
/* ------------------------------------------------------------------ */
const channels = ['#bunker-geral', '#diario-de-obra', '#socorro', '#arsenal', '#cases'];

/* ------------------------------------------------------------------ */
/*  Posts data                                                         */
/* ------------------------------------------------------------------ */
const posts = [
  {
    id: 1,
    name: 'RafaelCode',
    badge: 'Agente',
    badgeIcon: Star,
    badgeColor: '#CD7F32',
    time: '3h atras',
    content:
      'Fechei meu 3o cliente usando automacoes com IA! Esse e um chatbot de qualificacao de leads para uma imobiliaria. O cara viu o demo e fechou na hora. Receita recorrente total agora: R$4.200/mes.',
    hasCode: true,
    codeBlock: `// Qualificacao automatica de leads\nconst qualify = async (lead) => {\n  const score = await ai.analyze(lead.answers);\n  if (score > 0.7) notify(sales_team, lead);\n  return { score, next_action: getAction(score) };\n};`,
    reactions: 15,
    comments: 4,
  },
  {
    id: 2,
    name: 'JuliaStarter',
    badge: 'Recruta',
    badgeIcon: Shield,
    badgeColor: '#00E5FF',
    time: '6h atras',
    content:
      'Primeira automacao rodando! Configurei um sistema que responde mensagens automaticamente no WhatsApp do meu negocio. Salvou 2h por dia no atendimento. Nao acredito que fiz isso em 3 dias.',
    hasImage: true,
    reactions: 8,
    comments: 2,
  },
  {
    id: 3,
    name: 'BrunoBuilder',
    badge: 'Construtor',
    badgeIcon: Hammer,
    badgeColor: '#FFAA00',
    time: '8h atras',
    content:
      'Alguem ja fez deploy de container Docker no Railway? Estou travado na configuracao do banco. O app roda local perfeito mas em producao da erro de conexao.',
    channel: '#socorro',
    reactions: 3,
    comments: 6,
    thread: [
      {
        name: 'MarcosDev',
        badge: 'Construtor',
        badgeIcon: Hammer,
        badgeColor: '#FFAA00',
        time: '7h atras',
        content: 'Ja passei por isso! O problema e que no Railway voce precisa usar a internal URL do banco, nao a externa. Tenta trocar o DATABASE_URL.',
      },
      {
        name: 'PedroOps',
        badge: 'Deployer',
        badgeIcon: Rocket,
        badgeColor: '#34C759',
        time: '6h atras',
        content: 'Marco ta certo. E adiciona a env var RAILWAY_INTERNAL=true. Vou te mandar o template de docker-compose que uso.',
      },
      {
        name: 'BrunoBuilder',
        badge: 'Construtor',
        badgeIcon: Hammer,
        badgeColor: '#FFAA00',
        time: '5h atras',
        content: 'Funcionou! Era a URL interna mesmo. Valeu demais, galera. Isso no YouTube ia demorar 3 dias pra resolver.',
      },
    ],
  },
  {
    id: 4,
    name: 'CarlosOps',
    badge: 'Deployer',
    badgeIcon: Rocket,
    badgeColor: '#34C759',
    time: '1d atras',
    content:
      'Review de ferramenta pro #arsenal: testei o Cursor AI por 30 dias vs Bolt vs v0. Cursor ganha de lavada pra projetos complexos. Bolt e bom pra prototipo rapido. v0 so pra UI. Fiz um doc comparativo completo pra comunidade.',
    channel: '#arsenal',
    reactions: 7,
    comments: 3,
  },
];

/* ------------------------------------------------------------------ */
/*  Online members                                                     */
/* ------------------------------------------------------------------ */
const onlineMembers = ['Rafael', 'Julia', 'Bruno', 'Carlos', 'Ana'];
const topWeek = [
  { name: 'RafaelCode', deploys: 3 },
  { name: 'PedroOps', deploys: 2 },
  { name: 'MarcosDev', deploys: 1 },
];

/* ================================================================== */
/*  COMMUNITY FEED SHOWCASE                                            */
/* ================================================================== */
const CommunityFeed = () => {
  const [activeChannel, setActiveChannel] = useState(0);
  const mono = "'Roboto Mono', monospace";
  const serif = "'Averia Serif Libre', serif";
  const orbitron = "'Orbitron', sans-serif";

  const renderBadge = (
    icon: React.ElementType,
    label: string,
    color: string,
  ) => {
    const Icon = icon;
    return (
      <span
        className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full shrink-0"
        style={{ fontFamily: mono, fontSize: 10, background: `${color}15`, color }}
      >
        <Icon size={10} /> {label}
      </span>
    );
  };

  return (
    <div className="flex flex-col lg:flex-row rounded-xl overflow-hidden" style={{ background: '#0d1117', minHeight: 500 }}>
      {/* ===================== MAIN FEED ===================== */}
      <div className="flex-1 flex flex-col lg:border-r" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
        {/* Channel Tabs */}
        <div
          className="flex gap-0 overflow-x-auto px-4"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}
        >
          {channels.map((ch, i) => (
            <button
              key={i}
              onClick={() => setActiveChannel(i)}
              aria-selected={activeChannel === i}
              role="tab"
              className="px-4 py-3 shrink-0 min-h-[44px]"
              style={{
                fontFamily: mono,
                fontSize: 12,
                color: activeChannel === i ? '#00E5FF' : '#A9A9A9',
                background: 'none',
                border: 'none',
                borderBottom: activeChannel === i ? '2px solid #00E5FF' : '2px solid transparent',
                cursor: 'pointer',
                transition: 'color 0.15s, border-color 0.15s',
              }}
            >
              {ch}
            </button>
          ))}
        </div>

        {/* Create Post */}
        <div className="p-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="flex gap-3">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
              style={{ background: '#2F353A', color: '#FDF5E6', fontFamily: serif, fontSize: 14, fontWeight: 700 }}
            >
              F
            </div>
            <div className="flex-1">
              <div
                className="w-full rounded-lg px-4 py-3 mb-3"
                style={{
                  background: '#1A1E22',
                  border: '1px solid rgba(255,255,255,0.08)',
                  fontFamily: mono,
                  fontSize: 13,
                  color: '#A9A9A9',
                  minHeight: 44,
                }}
              >
                Compartilhe seu progresso...
              </div>
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <div className="flex items-center gap-2">
                  <select
                    className="min-h-[44px]"
                    style={{
                      fontFamily: mono,
                      fontSize: 12,
                      background: '#1A1E22',
                      color: '#A9A9A9',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: 4,
                      padding: '8px 12px',
                    }}
                  >
                    <option>#bunker-geral</option>
                    <option>#diario-de-obra</option>
                    <option>#socorro</option>
                    <option>#arsenal</option>
                  </select>
                </div>
                <button
                  className="flex items-center gap-2 px-4 py-2 rounded min-h-[44px]"
                  style={{
                    fontFamily: mono,
                    fontSize: 12,
                    background: '#00E5FF',
                    color: '#1A1E22',
                    border: 'none',
                    cursor: 'pointer',
                    fontWeight: 600,
                  }}
                >
                  <Send size={14} /> Publicar
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Feed */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="flex flex-col gap-4">
            {posts.map((p) => (
              <div
                key={p.id}
                className="rounded-lg p-4"
                style={{ background: '#1A1E22', border: '1px solid rgba(255,255,255,0.05)' }}
              >
                {/* Post header */}
                <div className="flex items-start gap-3 mb-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                    style={{
                      background: '#2F353A',
                      color: '#FDF5E6',
                      fontFamily: serif,
                      fontSize: 14,
                      fontWeight: 700,
                    }}
                  >
                    {p.name[0]}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="shrink-0" style={{ fontFamily: mono, fontSize: 13, color: '#FDF5E6', fontWeight: 600 }}>
                        {p.name}
                      </span>
                      {renderBadge(p.badgeIcon, p.badge, p.badgeColor)}
                      {p.channel && (
                        <span style={{ fontFamily: mono, fontSize: 10, color: '#00E5FF', opacity: 0.6 }}>
                          {p.channel}
                        </span>
                      )}
                    </div>
                    <span style={{ fontFamily: mono, fontSize: 10, color: '#A9A9A9' }}>{p.time}</span>
                  </div>
                </div>

                {/* Content */}
                <p style={{ fontFamily: mono, fontSize: 13, color: '#A9A9A9', lineHeight: 1.7, marginBottom: 10 }}>
                  {p.content}
                </p>

                {/* Code block */}
                {p.hasCode && p.codeBlock && (
                  <div className="rounded-lg p-4 mb-3 overflow-x-auto" style={{ background: '#0d1117', border: '1px solid rgba(0,229,255,0.1)' }}>
                    <div className="flex items-center gap-2 mb-2">
                      <Code size={12} color="#00E5FF" />
                      <span style={{ fontFamily: mono, fontSize: 10, color: '#00E5FF' }}>JavaScript</span>
                    </div>
                    <pre style={{ fontFamily: mono, fontSize: 12, color: '#34C759', lineHeight: 1.6, margin: 0, whiteSpace: 'pre-wrap' }}>
                      {p.codeBlock}
                    </pre>
                  </div>
                )}

                {/* Image placeholder */}
                {p.hasImage && (
                  <div
                    className="rounded-lg mb-3 flex items-center justify-center"
                    style={{
                      background: '#0d1117',
                      border: '1px solid rgba(255,255,255,0.05)',
                      height: 120,
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <ImageIcon size={16} color="#A9A9A9" />
                      <span style={{ fontFamily: mono, fontSize: 12, color: '#A9A9A9' }}>screenshot-automacao.png</span>
                    </div>
                  </div>
                )}

                {/* Reactions */}
                <div className="flex items-center gap-2 mb-2">
                  <button className="flex items-center gap-1.5 min-h-[44px] px-2 rounded hover:bg-white/5 transition-colors" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                    <Heart size={14} color="#A9A9A9" />
                    <span style={{ fontFamily: mono, fontSize: 11, color: '#A9A9A9' }}>{p.reactions}</span>
                  </button>
                  <button className="flex items-center gap-1.5 min-h-[44px] px-2 rounded hover:bg-white/5 transition-colors" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                    <MessageCircle size={14} color="#A9A9A9" />
                    <span style={{ fontFamily: mono, fontSize: 11, color: '#A9A9A9' }}>{p.comments}</span>
                  </button>
                </div>

                {/* Thread */}
                {p.thread && (
                  <div
                    className="ml-2 sm:ml-6 mt-3 flex flex-col gap-3 pt-3"
                    style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
                  >
                    {p.thread.map((reply, ri) => (
                      <div key={ri} className="flex gap-3">
                        <div
                          className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                          style={{
                            background: '#2F353A',
                            color: '#FDF5E6',
                            fontFamily: serif,
                            fontSize: 11,
                            fontWeight: 700,
                          }}
                        >
                          {reply.name[0]}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span style={{ fontFamily: mono, fontSize: 12, color: '#FDF5E6', fontWeight: 600 }}>
                              {reply.name}
                            </span>
                            {renderBadge(reply.badgeIcon, reply.badge, reply.badgeColor)}
                            <span style={{ fontFamily: mono, fontSize: 9, color: '#A9A9A9' }}>{reply.time}</span>
                          </div>
                          <p style={{ fontFamily: mono, fontSize: 12, color: '#A9A9A9', lineHeight: 1.6 }}>
                            {reply.content}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===================== RIGHT SIDEBAR ===================== */}
      <aside className="hidden lg:block shrink-0" style={{ width: 220, background: '#1A1E22' }}>
        {/* Profile card */}
        <div className="p-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="flex items-center gap-3 mb-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background: '#2F353A', color: '#FDF5E6', fontFamily: serif, fontSize: 16, fontWeight: 700 }}
            >
              F
            </div>
            <div>
              <div style={{ fontFamily: mono, fontSize: 13, color: '#FDF5E6', fontWeight: 600 }}>Fabricio</div>
              <span
                className="inline-block px-2 py-0.5 rounded-full"
                style={{ fontFamily: mono, fontSize: 9, background: 'rgba(0,229,255,0.15)', color: '#00E5FF' }}
              >
                Recruta
              </span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center">
            {[
              { label: 'Streak', value: '12' },
              { label: 'Deploys', value: '0' },
              { label: 'XP', value: '1.2k' },
            ].map((s, i) => (
              <div key={i}>
                <div style={{ fontFamily: orbitron, fontSize: 14, fontWeight: 700, color: '#00E5FF' }}>{s.value}</div>
                <div style={{ fontFamily: mono, fontSize: 9, color: '#A9A9A9' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Online members */}
        <div className="p-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="flex items-center gap-2 mb-3">
            <Users size={13} color="#34C759" />
            <span style={{ fontFamily: mono, fontSize: 11, color: '#A9A9A9' }}>23 online</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {onlineMembers.map((m, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center"
                  style={{ background: '#2F353A', color: '#FDF5E6', fontFamily: serif, fontSize: 10, fontWeight: 700 }}
                >
                  {m[0]}
                </div>
                <span style={{ fontFamily: mono, fontSize: 10, color: '#A9A9A9' }}>{m}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Top da Semana */}
        <div className="p-4">
          <div className="flex items-center gap-2 mb-3">
            <Star size={13} color="#CD7F32" />
            <span style={{ fontFamily: mono, fontSize: 11, color: '#CD7F32', fontWeight: 600 }}>Top da Semana</span>
          </div>
          <div className="flex flex-col gap-2">
            {topWeek.map((t, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span style={{ fontFamily: orbitron, fontSize: 10, color: '#A9A9A9', width: 16 }}>
                    #{i + 1}
                  </span>
                  <span style={{ fontFamily: mono, fontSize: 11, color: '#FDF5E6' }}>{t.name}</span>
                </div>
                <span style={{ fontFamily: mono, fontSize: 10, color: '#34C759' }}>{t.deploys} deploys</span>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
};

export default CommunityFeed;
