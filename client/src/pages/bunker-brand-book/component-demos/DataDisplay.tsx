import { Shield, Zap, Users, TrendingUp, Clock, Radio } from 'lucide-react';

const mono = "'Roboto Mono', monospace";
const serif = "'Averia Serif Libre', serif";

const tableData = [
  { name: 'Agent Builder', type: 'Curso', members: 47, status: 'Ativo' },
  { name: 'Deploy Pipeline', type: 'Workshop', members: 23, status: 'Ativo' },
  { name: 'Prompt Lab', type: 'Lab', members: 89, status: 'Completo' },
  { name: 'AIOS Framework', type: 'Curso', members: 12, status: 'Em breve' },
];

const rankBadges = [
  { rank: 'Consumidor', color: '#A9A9A9', glow: false, icon: '---' },
  { rank: 'Recruta', color: '#00E5FF', glow: false, icon: '>>' },
  { rank: 'Construtor', color: '#FFAA00', glow: false, icon: '>>>' },
  { rank: 'Deployer', color: '#34C759', glow: false, icon: '>>>>' },
  { rank: 'Agente', color: '#CD7F32', glow: true, icon: '>>>>>' },
];

const timelineEvents = [
  { time: '15 Mar', title: 'Conta criada', desc: 'Onboarding completo' },
  { time: '18 Mar', title: 'Primeiro deploy', desc: 'App Next.js no EasyPanel' },
  { time: '22 Mar', title: 'Rank: Recruta', desc: 'Completou modulo 1' },
  { time: '28 Mar', title: 'Squad Alpha', desc: 'Entrou no squad de agentes' },
];

const DataDisplay = () => (
  <section id="data-display">
    <style>{`
      @keyframes bunker-rank-glow {
        0%, 100% { box-shadow: 0 0 8px rgba(205,127,50,0.3); }
        50% { box-shadow: 0 0 16px rgba(205,127,50,0.5); }
      }
      @keyframes bunker-radar-sweep {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
    `}</style>

    <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#00E5FF] mb-3"
      style={{ fontFamily: mono }}>Componentes / Dados</p>
    <h2 className="text-[42px] font-bold leading-tight mb-6"
      style={{ fontFamily: serif, color: '#FDF5E6' }}>Exibicao de Dados</h2>
    <p className="text-[15px] text-[#A9A9A9] max-w-[700px] mb-12 leading-relaxed"
      style={{ fontFamily: mono }}>
      Tabelas, badges, avatares, rank badges, stat cards, timeline e empty states para exibicao de dados.
    </p>

    {/* Table */}
    <h3 className="text-xl font-bold mb-4" style={{ fontFamily: serif, color: '#FDF5E6' }}>Tabela</h3>
    <div className="rounded-lg border border-white/5 overflow-x-auto mb-10">
      <table className="w-full text-[13px] min-w-[500px]" style={{ fontFamily: mono }}>
        <thead>
          <tr style={{ background: '#0d1117' }}>
            <th className="text-left py-3 px-4 text-[11px] tracking-[0.1em] uppercase font-medium" style={{ color: '#00E5FF' }}>Nome</th>
            <th className="text-left py-3 px-4 text-[11px] tracking-[0.1em] uppercase font-medium" style={{ color: '#00E5FF' }}>Tipo</th>
            <th className="text-left py-3 px-4 text-[11px] tracking-[0.1em] uppercase font-medium" style={{ color: '#00E5FF' }}>Membros</th>
            <th className="text-left py-3 px-4 text-[11px] tracking-[0.1em] uppercase font-medium" style={{ color: '#00E5FF' }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, i) => (
            <tr key={row.name}
              className="transition-colors duration-150"
              style={{
                background: i % 2 === 0 ? '#1a1a1a' : '#1A1E22',
                borderBottom: '1px solid rgba(255,255,255,0.03)',
              }}>
              <td className="py-3 px-4 text-[#FDF5E6]">{row.name}</td>
              <td className="py-3 px-4 text-[#A9A9A9]">{row.type}</td>
              <td className="py-3 px-4" style={{ fontFamily: "'Orbitron', sans-serif", color: '#00E5FF', fontSize: 13 }}>{row.members}</td>
              <td className="py-3 px-4">
                <span className="inline-flex px-2 py-0.5 text-[10px] uppercase tracking-[0.05em] rounded-sm"
                  style={{
                    fontFamily: mono,
                    background: row.status === 'Ativo' ? 'rgba(0,229,255,0.15)' : row.status === 'Completo' ? 'rgba(52,199,89,0.15)' : 'rgba(255,170,0,0.15)',
                    color: row.status === 'Ativo' ? '#00E5FF' : row.status === 'Completo' ? '#34C759' : '#FFAA00',
                  }}>
                  {row.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Badges */}
    <h3 className="text-xl font-bold mb-4" style={{ fontFamily: serif, color: '#FDF5E6' }}>Badges</h3>
    <div className="flex gap-2.5 flex-wrap mb-10">
      {[
        { text: 'Deploy Ativo', bg: 'rgba(0,229,255,0.15)', color: '#00E5FF' },
        { text: 'Cohort #3', bg: 'rgba(205,127,50,0.15)', color: '#CD7F32' },
        { text: 'Primeiro Deploy', bg: 'rgba(52,199,89,0.15)', color: '#34C759' },
        { text: 'Circuito Queimado', bg: 'rgba(255,59,48,0.15)', color: '#FF3B30' },
      ].map((b) => (
        <span key={b.text} className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-medium tracking-[0.05em] uppercase rounded-sm"
          style={{ fontFamily: mono, background: b.bg, color: b.color }}>
          {b.text}
        </span>
      ))}
    </div>

    {/* Avatar */}
    <h3 className="text-xl font-bold mb-4" style={{ fontFamily: serif, color: '#FDF5E6' }}>Avatar</h3>
    <div className="flex items-center gap-4 mb-10">
      {[
        { size: 32, initials: 'MV', fontSize: 10 },
        { size: 40, initials: 'AB', fontSize: 12 },
        { size: 56, initials: 'CD', fontSize: 16 },
      ].map((a, i) => (
        <div key={i} className="rounded-full flex items-center justify-center font-bold"
          style={{
            width: a.size,
            height: a.size,
            background: i === 0 ? 'rgba(0,229,255,0.15)' : i === 1 ? 'rgba(205,127,50,0.15)' : 'rgba(58,134,255,0.15)',
            color: i === 0 ? '#00E5FF' : i === 1 ? '#CD7F32' : '#3A86FF',
            fontFamily: mono,
            fontSize: a.fontSize,
          }}>
          {a.initials}
        </div>
      ))}
    </div>

    {/* Rank Badges */}
    <h3 className="text-xl font-bold mb-4" style={{ fontFamily: serif, color: '#FDF5E6' }}>Rank Badges</h3>
    <div className="flex gap-3 flex-wrap mb-10">
      {rankBadges.map((r) => (
        <div key={r.rank} className="rounded-lg px-4 py-3 flex items-center gap-3 border"
          style={{
            background: '#1A1E22',
            borderColor: `${r.color}40`,
            animation: r.glow ? 'bunker-rank-glow 2s ease-in-out infinite' : undefined,
          }}>
          <span className="text-[10px]" style={{ fontFamily: mono, color: r.color, letterSpacing: '0.1em' }}>{r.icon}</span>
          <span className="text-[12px] font-medium uppercase tracking-[0.08em]"
            style={{ fontFamily: mono, color: r.color }}>{r.rank}</span>
        </div>
      ))}
    </div>

    {/* Stat Cards */}
    <h3 className="text-xl font-bold mb-4" style={{ fontFamily: serif, color: '#FDF5E6' }}>Stat Cards</h3>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
      {[
        { icon: <Users size={20} />, value: '147', label: 'Membros ativos', color: '#00E5FF' },
        { icon: <Zap size={20} />, value: '89', label: 'Deploys este mes', color: '#CD7F32' },
        { icon: <TrendingUp size={20} />, value: '94%', label: 'Taxa de conclusao', color: '#34C759' },
        { icon: <Clock size={20} />, value: '2.4s', label: 'Tempo medio', color: '#3A86FF' },
      ].map((stat) => (
        <div key={stat.label} className="rounded-lg p-5 border border-white/5" style={{ background: '#1a1a1a' }}>
          <div className="mb-3" style={{ color: stat.color }}>{stat.icon}</div>
          <div style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 32, fontWeight: 700, color: stat.color, letterSpacing: '0.03em' }}>
            {stat.value}
          </div>
          <div className="text-[11px] text-[#A9A9A9] mt-1" style={{ fontFamily: mono }}>{stat.label}</div>
        </div>
      ))}
    </div>

    {/* Timeline */}
    <h3 className="text-xl font-bold mb-4" style={{ fontFamily: serif, color: '#FDF5E6' }}>Timeline</h3>
    <div className="mb-10">
      {timelineEvents.map((event, i) => (
        <div key={i} className="flex gap-4">
          <div className="flex flex-col items-center">
            <div className="w-3 h-3 rounded-full flex-shrink-0"
              style={{ background: i === timelineEvents.length - 1 ? '#00E5FF' : '#2F353A', border: '2px solid #00E5FF' }} />
            {i < timelineEvents.length - 1 && (
              <div className="w-px flex-1 min-h-[40px]" style={{ background: 'rgba(0,229,255,0.2)' }} />
            )}
          </div>
          <div className="pb-6">
            <div className="text-[10px] text-[#00E5FF] uppercase tracking-[0.1em] mb-0.5" style={{ fontFamily: mono }}>{event.time}</div>
            <div className="text-[14px] text-[#FDF5E6] font-medium" style={{ fontFamily: mono }}>{event.title}</div>
            <div className="text-[12px] text-[#A9A9A9]" style={{ fontFamily: mono }}>{event.desc}</div>
          </div>
        </div>
      ))}
    </div>

    {/* Empty State */}
    <h3 className="text-xl font-bold mb-4" style={{ fontFamily: serif, color: '#FDF5E6' }}>Empty State</h3>
    <div className="rounded-lg border border-white/5 p-12 flex flex-col items-center text-center"
      style={{ background: '#1A1E22' }}>
      <div className="w-20 h-20 rounded-full relative mb-4 flex items-center justify-center"
        style={{ background: 'rgba(0,229,255,0.06)', border: '1px solid rgba(0,229,255,0.15)' }}>
        <Radio size={28} color="#00E5FF" style={{ opacity: 0.5 }} />
        <div className="absolute inset-0 rounded-full"
          style={{
            border: '2px solid rgba(0,229,255,0.1)',
            borderTopColor: 'rgba(0,229,255,0.3)',
            animation: 'bunker-radar-sweep 3s linear infinite',
          }} />
      </div>
      <div className="text-lg font-bold mb-1"
        style={{ fontFamily: serif, color: '#FDF5E6' }}>Setor Liberado</div>
      <div className="text-[13px] text-[#A9A9A9] max-w-[300px]" style={{ fontFamily: mono }}>
        Nenhum dado encontrado neste setor. Inicie uma varredura ou adicione novos itens.
      </div>
    </div>
  </section>
);

export default DataDisplay;
