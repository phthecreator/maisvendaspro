import {
  LayoutDashboard,
  Route,
  BookOpen,
  LifeBuoy,
  Swords,
  Trophy,
  Settings,
  Search,
  Bell,
  Flame,
  Lock,
  ChevronRight,
  Heart,
  MessageCircle,
  Shield,
  Hammer,
  Rocket,
  Plus,
  Menu,
} from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Sidebar nav items                                                  */
/* ------------------------------------------------------------------ */
const navItems = [
  { label: 'Dashboard', icon: LayoutDashboard, active: true },
  { label: 'Trilha', icon: Route },
  { label: 'Diario de Obra', icon: BookOpen },
  { label: 'Socorro', icon: LifeBuoy },
  { label: 'Arsenal', icon: Swords },
  { label: 'Cases', icon: Trophy },
  { label: 'Configuracoes', icon: Settings },
];

/* ------------------------------------------------------------------ */
/*  Activity feed data                                                 */
/* ------------------------------------------------------------------ */
const activityPosts = [
  {
    name: 'MarcosDev',
    badge: 'Construtor',
    badgeColor: '#FFAA00',
    badgeIcon: Hammer,
    content: 'Consegui deployar meu primeiro chatbot! Atendimento automatizado para clientes do e-commerce. Rodando em producao desde ontem.',
    time: '2h atras',
    reactions: 5,
    comments: 2,
  },
  {
    name: 'AnaBuilder',
    badge: 'Recruta',
    badgeColor: '#00E5FF',
    badgeIcon: Shield,
    content: 'Configurei o ambiente Claude + Cursor. Proximo passo: primeiro prompt funcional para meu projeto de automacao de emails.',
    time: '5h atras',
    reactions: 3,
    comments: 1,
  },
  {
    name: 'PedroOps',
    badge: 'Deployer',
    badgeColor: '#34C759',
    badgeIcon: Rocket,
    content: 'Terceiro cliente usando minha automacao de atendimento. Receita recorrente batendo R$2.800/mes so com esse servico.',
    time: '1d atras',
    reactions: 12,
    comments: 4,
  },
];

/* ================================================================== */
/*  MEMBER AREA SHOWCASE                                               */
/* ================================================================== */
const MemberArea = () => {
  const mono = "'Roboto Mono', monospace";
  const serif = "'Averia Serif Libre', serif";
  const orbitron = "'Orbitron', sans-serif";

  return (
    <div className="flex flex-col md:flex-row rounded-xl overflow-hidden" style={{ background: '#0d1117', minHeight: 700 }}>
      {/* ===================== MOBILE HEADER ===================== */}
      <div
        className="flex md:hidden items-center justify-between px-4 py-3"
        style={{ background: '#1A1E22', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
      >
        <span style={{ fontFamily: orbitron, fontSize: 16, fontWeight: 700, color: '#00E5FF', letterSpacing: '0.15em' }}>
          BUNKER
        </span>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Bell size={18} color="#A9A9A9" />
            <div
              className="absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center"
              style={{ background: '#FF3B30', fontSize: 9, color: '#FDF5E6', fontWeight: 700 }}
            >
              3
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Flame size={16} color="#FFAA00" />
            <span style={{ fontFamily: orbitron, fontSize: 12, color: '#FFAA00' }}>12</span>
          </div>
          <Menu size={20} color="#A9A9A9" />
        </div>
      </div>

      {/* Mobile Tab Bar */}
      <div
        className="flex md:hidden overflow-x-auto gap-0 px-2"
        style={{ background: '#1A1E22', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
      >
        {navItems.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className="flex flex-col items-center gap-1 px-3 py-2 shrink-0"
              style={{
                borderBottom: item.active ? '2px solid #00E5FF' : '2px solid transparent',
              }}
            >
              <Icon size={16} color={item.active ? '#00E5FF' : '#A9A9A9'} />
              <span style={{ fontFamily: mono, fontSize: 9, color: item.active ? '#FDF5E6' : '#A9A9A9' }}>
                {item.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* ===================== SIDEBAR ===================== */}
      <aside
        className="hidden md:flex shrink-0 flex-col"
        style={{ width: 210, background: '#1A1E22', borderRight: '1px solid rgba(255,255,255,0.05)' }}
      >
        {/* Logo */}
        <div className="px-5 pt-5 pb-4">
          <span style={{ fontFamily: orbitron, fontSize: 16, fontWeight: 700, color: '#00E5FF', letterSpacing: '0.15em' }}>
            BUNKER
          </span>
        </div>

        {/* Profile */}
        <div className="px-5 pb-4 flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
            style={{ background: '#2F353A', color: '#FDF5E6', fontFamily: serif, fontSize: 16, fontWeight: 700 }}
          >
            F
          </div>
          <div>
            <div style={{ fontFamily: mono, fontSize: 13, color: '#FDF5E6', fontWeight: 600 }}>Fabricio</div>
            <span
              className="inline-block mt-1 px-2 py-0.5 rounded-full"
              style={{ fontFamily: mono, fontSize: 10, background: 'rgba(0,229,255,0.15)', color: '#00E5FF' }}
            >
              Recruta
            </span>
          </div>
        </div>

        <div style={{ height: 1, background: 'rgba(255,255,255,0.05)' }} />

        {/* Nav */}
        <nav className="flex-1 py-3">
          {navItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-3 px-5 py-2.5 cursor-pointer"
                style={{
                  background: item.active ? 'rgba(255,255,255,0.05)' : 'transparent',
                  borderLeft: item.active ? '2px solid #00E5FF' : '2px solid transparent',
                }}
              >
                <Icon size={15} color={item.active ? '#00E5FF' : '#A9A9A9'} />
                <span style={{ fontFamily: mono, fontSize: 12, color: item.active ? '#FDF5E6' : '#A9A9A9' }}>
                  {item.label}
                </span>
              </div>
            );
          })}
        </nav>

        {/* Streak */}
        <div className="px-5 pb-5">
          <div className="flex items-center gap-2 mb-2">
            <Flame size={14} color="#FFAA00" />
            <span style={{ fontFamily: mono, fontSize: 11, color: '#FDF5E6' }}>Streak: 12 dias</span>
          </div>
          <div className="w-full rounded-full overflow-hidden" style={{ height: 4, background: '#2F353A' }}>
            <div className="rounded-full" style={{ width: '48%', height: '100%', background: '#00E5FF' }} />
          </div>
          <div className="mt-1" style={{ fontFamily: mono, fontSize: 10, color: '#A9A9A9' }}>
            Nivel 2 — 48% progresso
          </div>
        </div>
      </aside>

      {/* ===================== MAIN CONTENT ===================== */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <header
          className="flex items-center justify-between px-6 py-4"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}
        >
          <div style={{ fontFamily: serif, fontSize: 20, fontWeight: 700, color: '#FDF5E6' }}>
            Bem-vindo, Recruta Fabricio
          </div>
          <div className="flex items-center gap-4">
            <div
              className="flex items-center gap-2 px-3 py-1.5 rounded"
              style={{ background: '#1A1E22', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <Search size={14} color="#A9A9A9" />
              <span style={{ fontFamily: mono, fontSize: 12, color: '#A9A9A9' }}>Buscar...</span>
            </div>
            <div className="relative">
              <Bell size={18} color="#A9A9A9" />
              <div
                className="absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center"
                style={{ background: '#FF3B30', fontSize: 9, color: '#FDF5E6', fontWeight: 700 }}
              >
                3
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Flame size={16} color="#FFAA00" />
              <span style={{ fontFamily: orbitron, fontSize: 12, color: '#FFAA00' }}>12</span>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-6">
          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: 'Modulos Completos', value: '4/16', sub: '25%', color: '#00E5FF' },
              { label: 'Streak Atual', value: '12', sub: 'dias', color: '#FFAA00', iconEl: Flame },
              { label: 'XP Total', value: '1,240', sub: 'pts', color: '#CD7F32' },
              { label: 'Rank', value: 'Recruta', sub: 'Nivel 1', color: '#00E5FF', iconEl: Shield },
            ].map((s, i) => {
              const SIcon = s.iconEl;
              return (
                <div key={i} className="rounded-lg p-4" style={{ background: '#1A1E22', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div className="flex items-center justify-between mb-2">
                    <span style={{ fontFamily: mono, fontSize: 11, color: '#A9A9A9' }}>{s.label}</span>
                    {SIcon && <SIcon size={14} color={s.color} />}
                  </div>
                  <div style={{ fontFamily: orbitron, fontSize: 24, fontWeight: 700, color: s.color }}>
                    {s.value}
                  </div>
                  <div style={{ fontFamily: mono, fontSize: 11, color: '#A9A9A9', marginTop: 2 }}>{s.sub}</div>
                  {i === 0 && (
                    <div className="mt-2 rounded-full overflow-hidden" style={{ height: 3, background: '#2F353A' }}>
                      <div className="rounded-full" style={{ width: '25%', height: '100%', background: '#00E5FF' }} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Module Cards */}
          <div className="mb-8">
            <h3 className="mb-4" style={{ fontFamily: serif, fontSize: 18, fontWeight: 700, color: '#FDF5E6' }}>
              Trilha de Implementacao
            </h3>
            <div className="flex flex-col gap-3">
              {[
                { n: 1, title: 'Fundamentos IA', done: 3, total: 4, status: 'UNLOCKED', statusColor: '#00E5FF', pct: 75 },
                { n: 2, title: 'Automacao + Agentes', done: 1, total: 6, status: 'IN PROGRESS', statusColor: '#FFAA00', pct: 17 },
                { n: 3, title: 'Infra & Deploy', done: 0, total: 5, status: 'LOCKED', statusColor: '#A9A9A9', pct: 0, locked: true },
                { n: 4, title: 'Operacao & Escala', done: 0, total: 4, status: 'LOCKED', statusColor: '#A9A9A9', pct: 0, locked: true },
              ].map((m, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 rounded-lg p-4"
                  style={{
                    background: '#1A1E22',
                    border: '1px solid rgba(255,255,255,0.05)',
                    opacity: m.locked ? 0.5 : 1,
                  }}
                >
                  <div
                    className="w-10 h-10 rounded flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(255,255,255,0.05)' }}
                  >
                    {m.locked ? (
                      <Lock size={16} color="#A9A9A9" />
                    ) : (
                      <span style={{ fontFamily: orbitron, fontSize: 14, fontWeight: 700, color: m.statusColor }}>
                        {m.n}
                      </span>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span style={{ fontFamily: serif, fontSize: 15, fontWeight: 700, color: '#FDF5E6' }}>
                        Nivel {m.n}: {m.title}
                      </span>
                      <span
                        className="px-2 py-0.5 rounded-full"
                        style={{
                          fontFamily: mono,
                          fontSize: 10,
                          background: `${m.statusColor}15`,
                          color: m.statusColor,
                          fontWeight: 600,
                        }}
                      >
                        {m.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span style={{ fontFamily: mono, fontSize: 11, color: '#A9A9A9' }}>
                        {m.done}/{m.total} modulos
                      </span>
                      <div className="flex-1 rounded-full overflow-hidden" style={{ height: 3, background: '#2F353A' }}>
                        <div
                          className="rounded-full"
                          style={{ width: `${m.pct}%`, height: '100%', background: m.statusColor, transition: 'width 0.3s' }}
                        />
                      </div>
                    </div>
                  </div>
                  {!m.locked && <ChevronRight size={16} color="#A9A9A9" />}
                </div>
              ))}
            </div>
          </div>

          {/* Activity Feed */}
          <div className="mb-8">
            <h3 className="mb-4" style={{ fontFamily: serif, fontSize: 18, fontWeight: 700, color: '#FDF5E6' }}>
              Diario de Obra
            </h3>
            <div className="flex flex-col gap-3">
              {activityPosts.map((p, i) => {
                const BadgeIcon = p.badgeIcon;
                return (
                  <div
                    key={i}
                    className="rounded-lg p-4"
                    style={{ background: '#1A1E22', border: '1px solid rgba(255,255,255,0.05)' }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center"
                        style={{ background: '#2F353A', color: '#FDF5E6', fontFamily: serif, fontSize: 13, fontWeight: 700 }}
                      >
                        {p.name[0]}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span style={{ fontFamily: mono, fontSize: 13, color: '#FDF5E6', fontWeight: 600 }}>
                            {p.name}
                          </span>
                          <span
                            className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full"
                            style={{ fontFamily: mono, fontSize: 9, background: `${p.badgeColor}15`, color: p.badgeColor }}
                          >
                            <BadgeIcon size={10} /> {p.badge}
                          </span>
                        </div>
                        <span style={{ fontFamily: mono, fontSize: 10, color: '#A9A9A9' }}>{p.time}</span>
                      </div>
                    </div>
                    <p style={{ fontFamily: mono, fontSize: 13, color: '#A9A9A9', lineHeight: 1.7, marginBottom: 10 }}>
                      {p.content}
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1 cursor-pointer">
                        <Heart size={13} color="#A9A9A9" />
                        <span style={{ fontFamily: mono, fontSize: 11, color: '#A9A9A9' }}>{p.reactions}</span>
                      </div>
                      <div className="flex items-center gap-1 cursor-pointer">
                        <MessageCircle size={13} color="#A9A9A9" />
                        <span style={{ fontFamily: mono, fontSize: 11, color: '#A9A9A9' }}>{p.comments}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Actions */}
          <div>
            <h3 className="mb-4" style={{ fontFamily: serif, fontSize: 18, fontWeight: 700, color: '#FDF5E6' }}>
              Acoes Rapidas
            </h3>
            <div className="flex flex-wrap gap-3">
              <button
                className="flex items-center gap-2 px-4 py-2.5 rounded"
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
                <Plus size={14} /> Postar no Diario
              </button>
              <button
                className="flex items-center gap-2 px-4 py-2.5 rounded"
                style={{
                  fontFamily: mono,
                  fontSize: 12,
                  background: '#FFAA00',
                  color: '#1A1E22',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: 600,
                }}
              >
                <LifeBuoy size={14} /> Pedir Socorro
              </button>
              <button
                className="flex items-center gap-2 px-4 py-2.5 rounded"
                style={{
                  fontFamily: mono,
                  fontSize: 12,
                  background: 'transparent',
                  color: '#A9A9A9',
                  border: '1px solid rgba(255,255,255,0.1)',
                  cursor: 'pointer',
                }}
              >
                <Swords size={14} /> Ver Arsenal
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberArea;
