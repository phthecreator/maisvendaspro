import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Brain, Search, Zap, Sparkles } from "lucide-react";

interface Mind {
  id: string;
  name: string;
  archetype: string;
  essence: string;
  superpower: string;
}

const AVATARS: Record<string, string> = {
  alex_hormozi: "💰",
  daniel_kahneman: "🧠",
  mitchell_hashimoto: "⚙️",
  sam_altman: "🚀",
  elon_musk: "⚡",
  steve_jobs: "🍎",
  paul_graham: "💡",
  seth_godin: "📣",
  andrej_karpathy: "🤖",
  jesus_cristo: "✝️",
  napoleon_hill: "📖",
  ray_kurzweil: "🌐",
  kent_beck: "🧪",
  brad_frost: "🎨",
  don_norman: "🔧",
  marty_cagan: "📦",
  jeff_patton: "🗺️",
  guillermo_rauch: "⚡",
  eugene_schwartz: "✍️",
  kapil_gupta: "🧘",
  cagan_patton: "🎯",
  pedro_valerio: "🔄",
  alan_nicolas: "🌟",
  adriano_de_marqui: "📊",
  joao_lozano: "💼",
  jose_amorim: "🏆",
  juliano_dutra: "🎯",
  thiago_finch: "🔥",
};

export default function MindsView() {
  const [minds, setMinds] = useState<Mind[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Mind | null>(null);

  useEffect(() => {
    fetch("/api/minds")
      .then((r) => r.json())
      .then((d) => { setMinds(d); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const filtered = minds.filter(
    (m) =>
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.archetype.toLowerCase().includes(search.toLowerCase()) ||
      m.essence.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-8 h-full flex flex-col space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between flex-shrink-0">
        <div>
          <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
            <Brain size={22} className="text-violet-400" />
            Mentes Clonadas
          </h1>
          <p className="text-white/40 text-sm mt-1">
            {minds.length} experts clonados via MMOS — carregados de <code className="text-violet-400 text-xs">squads/mmos-squad/minds/</code>
          </p>
        </div>
        <div className="relative">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar mente..."
            className="bg-white/5 border border-white/10 rounded-lg pl-9 pr-4 py-2 text-sm text-white/70 placeholder:text-white/25 outline-none focus:border-violet-500/50 w-52"
          />
        </div>
      </div>

      <div className="flex gap-6 flex-1 min-h-0">
        {/* Grid */}
        <div className="flex-1 overflow-auto">
          {loading ? (
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="h-28 rounded-xl bg-white/3 animate-pulse border border-white/5" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
              {filtered.map((mind, i) => {
                const isSelected = selected?.id === mind.id;
                return (
                  <motion.button
                    key={mind.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.03 }}
                    onClick={() => setSelected(isSelected ? null : mind)}
                    className={`text-left p-4 rounded-xl border transition-all ${
                      isSelected
                        ? "border-violet-500/50 bg-violet-500/10"
                        : "border-white/5 bg-white/2 hover:border-white/15 hover:bg-white/4"
                    }`}
                  >
                    <div className="text-2xl mb-2">{AVATARS[mind.id] || "🧠"}</div>
                    <p className="font-medium text-sm text-white/90 leading-tight">{mind.name}</p>
                    {mind.archetype && (
                      <p className="text-[10px] text-violet-400/70 mt-1 line-clamp-1">{mind.archetype}</p>
                    )}
                    {mind.essence && (
                      <p className="text-[10px] text-white/30 mt-1 line-clamp-2">{mind.essence}</p>
                    )}
                  </motion.button>
                );
              })}
            </div>
          )}
        </div>

        {/* Detail panel */}
        {selected && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-72 flex-shrink-0 rounded-xl border border-violet-500/20 bg-violet-500/5 p-5 space-y-4"
          >
            <div className="text-center">
              <div className="text-4xl mb-2">{AVATARS[selected.id] || "🧠"}</div>
              <h3 className="font-bold text-white/90">{selected.name}</h3>
              {selected.archetype && (
                <p className="text-xs text-violet-400 mt-1">{selected.archetype}</p>
              )}
            </div>

            {selected.essence && (
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-white/40 uppercase tracking-wider">
                  <Zap size={11} /> Obsessão central
                </div>
                <p className="text-sm text-white/70 leading-relaxed">{selected.essence}</p>
              </div>
            )}

            {selected.superpower && (
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-white/40 uppercase tracking-wider">
                  <Sparkles size={11} /> Superpoder
                </div>
                <p className="text-sm text-white/70 leading-relaxed">{selected.superpower}</p>
              </div>
            )}

            <div className="pt-2 border-t border-white/10">
              <p className="text-[10px] text-white/25">
                ID: <code className="text-violet-400">{selected.id}</code>
              </p>
              <p className="text-[10px] text-white/25 mt-0.5">
                Fonte: squads/mmos-squad/minds/{selected.id}/
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
