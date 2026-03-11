import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Users, Bot, FileText, Workflow, ChevronDown, ChevronUp, Search } from "lucide-react";

interface Agent {
  id: string;
  name: string;
  title: string;
  icon: string;
  description: string;
}

interface Squad {
  id: string;
  name: string;
  title: string;
  description: string;
  version: string;
  agents: Agent[];
  taskCount: number;
  workflowCount: number;
}

const SQUAD_COLORS: Record<string, string> = {
  "mmos-squad": "violet",
  "marketing-brand": "pink",
  "meta-ads-traffic": "blue",
  "ralph": "amber",
  "reuniao-report": "teal",
  "squad-creator-pro": "indigo",
  "etl-squad": "emerald",
};

const COLOR_MAP: Record<string, { border: string; badge: string; dot: string }> = {
  violet: { border: "border-violet-500/20", badge: "bg-violet-500/10 text-violet-300", dot: "bg-violet-400" },
  pink: { border: "border-pink-500/20", badge: "bg-pink-500/10 text-pink-300", dot: "bg-pink-400" },
  blue: { border: "border-blue-500/20", badge: "bg-blue-500/10 text-blue-300", dot: "bg-blue-400" },
  amber: { border: "border-amber-500/20", badge: "bg-amber-500/10 text-amber-300", dot: "bg-amber-400" },
  teal: { border: "border-teal-500/20", badge: "bg-teal-500/10 text-teal-300", dot: "bg-teal-400" },
  indigo: { border: "border-indigo-500/20", badge: "bg-indigo-500/10 text-indigo-300", dot: "bg-indigo-400" },
  emerald: { border: "border-emerald-500/20", badge: "bg-emerald-500/10 text-emerald-300", dot: "bg-emerald-400" },
};

export default function SquadsView() {
  const [squads, setSquads] = useState<Squad[]>([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/api/squads")
      .then((r) => r.json())
      .then((d) => { setSquads(d); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const filtered = squads.filter(
    (s) =>
      s.title.toLowerCase().includes(search.toLowerCase()) ||
      s.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Squads</h1>
          <p className="text-white/40 text-sm mt-1">{squads.length} squads carregados do repositório</p>
        </div>
        <div className="relative">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar squad..."
            className="bg-white/5 border border-white/10 rounded-lg pl-9 pr-4 py-2 text-sm text-white/70 placeholder:text-white/25 outline-none focus:border-violet-500/50 w-52"
          />
        </div>
      </div>

      {/* Squads */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-36 rounded-xl bg-white/3 animate-pulse border border-white/5" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((squad, i) => {
            const color = COLOR_MAP[SQUAD_COLORS[squad.id] || "violet"];
            const isOpen = expanded === squad.id;

            return (
              <motion.div
                key={squad.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className={`rounded-xl border ${color.border} bg-white/2 overflow-hidden`}
              >
                {/* Card header */}
                <button
                  onClick={() => setExpanded(isOpen ? null : squad.id)}
                  className="w-full p-5 text-left hover:bg-white/3 transition-colors"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <div className={`w-2 h-2 rounded-full ${color.dot}`} />
                        <span className={`text-xs px-2 py-0.5 rounded-full ${color.badge}`}>
                          v{squad.version}
                        </span>
                      </div>
                      <h3 className="font-semibold text-white/90 truncate">{squad.title || squad.name}</h3>
                      <p className="text-xs text-white/40 mt-1 line-clamp-2">{squad.description || "Squad de agentes especializados"}</p>
                    </div>
                    {isOpen ? <ChevronUp size={16} className="text-white/30 flex-shrink-0 mt-1" /> : <ChevronDown size={16} className="text-white/30 flex-shrink-0 mt-1" />}
                  </div>

                  {/* Stats row */}
                  <div className="flex gap-4 mt-3">
                    <span className="flex items-center gap-1.5 text-xs text-white/35">
                      <Bot size={12} /> {squad.agents.length} agente{squad.agents.length !== 1 ? "s" : ""}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-white/35">
                      <FileText size={12} /> {squad.taskCount} tasks
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-white/35">
                      <Workflow size={12} /> {squad.workflowCount} workflows
                    </span>
                  </div>
                </button>

                {/* Expanded agents */}
                {isOpen && squad.agents.length > 0 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="border-t border-white/5 px-5 pb-4 pt-3 space-y-2"
                  >
                    <p className="text-xs text-white/30 uppercase tracking-wider mb-2">Agentes</p>
                    {squad.agents.map((agent) => (
                      <div key={agent.id} className="flex items-start gap-3 p-2 rounded-lg bg-white/3">
                        <span className="text-lg leading-none">{agent.icon.replace(/['"]/g, "") || "🤖"}</span>
                        <div className="min-w-0">
                          <p className="text-sm font-medium text-white/80">{agent.name}</p>
                          {agent.title && <p className="text-xs text-white/40">{agent.title}</p>}
                          {agent.description && (
                            <p className="text-xs text-white/30 mt-0.5 line-clamp-2">{agent.description}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}

                {isOpen && squad.agents.length === 0 && (
                  <div className="border-t border-white/5 px-5 pb-4 pt-3">
                    <p className="text-xs text-white/25">Nenhum agente .md encontrado neste squad</p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
}
