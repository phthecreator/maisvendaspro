import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Users, Brain, Bot, Workflow, ArrowRight, Activity } from "lucide-react";

interface Stats {
  squads: number;
  minds: number;
  agents: number;
  tasks: number;
  workflows: number;
}

const ACTIVITY = [
  { time: "agora", msg: "mmos-squad/mitchell_hashimoto carregado", type: "info" },
  { time: "2m", msg: "marketing-brand/creator executou generate-posts", type: "success" },
  { time: "5m", msg: "meta-ads-traffic/TrafficManager analisou campanhas", type: "success" },
  { time: "12m", msg: "ralph iniciou loop de desenvolvimento", type: "info" },
  { time: "18m", msg: "daniel_kahneman consultado via chat", type: "info" },
];

export default function OverviewView({ onNavigate }: { onNavigate: (v: string) => void }) {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/stats")
      .then((r) => r.json())
      .then((d) => { setStats(d); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const cards = [
    { label: "Squads", value: stats?.squads ?? "—", icon: Users, color: "violet", action: "squads" },
    { label: "Mentes Clonadas", value: stats?.minds ?? "—", icon: Brain, color: "indigo", action: "minds" },
    { label: "Agentes", value: stats?.agents ?? "—", icon: Bot, color: "cyan", action: "squads" },
    { label: "Workflows", value: stats?.workflows ?? "—", icon: Workflow, color: "emerald", action: "squads" },
  ];

  const colorMap: Record<string, string> = {
    violet: "from-violet-500/20 to-violet-600/5 border-violet-500/20 text-violet-300",
    indigo: "from-indigo-500/20 to-indigo-600/5 border-indigo-500/20 text-indigo-300",
    cyan: "from-cyan-500/20 to-cyan-600/5 border-cyan-500/20 text-cyan-300",
    emerald: "from-emerald-500/20 to-emerald-600/5 border-emerald-500/20 text-emerald-300",
  };

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Visão Geral</h1>
        <p className="text-white/40 text-sm mt-1">
          Sistema de orquestração de agentes — dados ao vivo do repositório
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map(({ label, value, icon: Icon, color, action }, i) => (
          <motion.button
            key={label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07 }}
            onClick={() => onNavigate(action)}
            className={`text-left p-5 rounded-xl border bg-gradient-to-br ${colorMap[color]} hover:scale-[1.02] transition-transform`}
          >
            <Icon size={20} className="mb-3 opacity-70" />
            <p className="text-3xl font-bold">{loading ? "…" : value}</p>
            <p className="text-xs text-white/50 mt-1">{label}</p>
          </motion.button>
        ))}
      </div>

      {/* Two-col layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quick actions */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="rounded-xl border border-white/5 bg-white/2 p-6"
        >
          <h2 className="font-semibold mb-4 text-white/80">Acesso Rápido</h2>
          <div className="space-y-2">
            {[
              { label: "Ver todos os Squads", sub: "Agentes, tasks e workflows", nav: "squads" },
              { label: "Explorar Mentes Clonadas", sub: "27 experts clonados", nav: "minds" },
              { label: "Iniciar Chat", sub: "Converse com um agente", nav: "chat" },
            ].map(({ label, sub, nav }) => (
              <button
                key={label}
                onClick={() => onNavigate(nav)}
                className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors group"
              >
                <div>
                  <p className="text-sm font-medium text-white/80">{label}</p>
                  <p className="text-xs text-white/30">{sub}</p>
                </div>
                <ArrowRight size={14} className="text-white/20 group-hover:text-white/60 transition-colors" />
              </button>
            ))}
          </div>
        </motion.div>

        {/* Activity feed */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.35 }}
          className="rounded-xl border border-white/5 bg-white/2 p-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <Activity size={15} className="text-emerald-400" />
            <h2 className="font-semibold text-white/80">Atividade Recente</h2>
          </div>
          <div className="space-y-3">
            {ACTIVITY.map(({ time, msg, type }, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${
                  type === "success" ? "bg-emerald-400" : "bg-violet-400"
                }`} />
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-white/60 truncate">{msg}</p>
                </div>
                <span className="text-[10px] text-white/25 flex-shrink-0">{time}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
