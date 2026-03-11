import { useState } from "react";
import { useRoute } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Users,
  Brain,
  MessageSquare,
  Zap,
  ChevronRight,
  Bot,
} from "lucide-react";
import OverviewView from "./views/OverviewView";
import SquadsView from "./views/SquadsView";
import MindsView from "./views/MindsView";
import ChatView from "./views/ChatView";

const NAV = [
  { id: "overview", label: "Visão Geral", icon: LayoutDashboard },
  { id: "squads", label: "Squads", icon: Users },
  { id: "minds", label: "Mentes Clonadas", icon: Brain },
  { id: "chat", label: "Chat com Agente", icon: MessageSquare },
];

export default function Dashboard() {
  const [, params] = useRoute("/dashboard/:view");
  const [active, setActive] = useState(params?.view || "overview");

  const renderView = () => {
    switch (active) {
      case "squads": return <SquadsView />;
      case "minds": return <MindsView />;
      case "chat": return <ChatView />;
      default: return <OverviewView onNavigate={setActive} />;
    }
  };

  return (
    <div className="flex h-screen bg-[#0a0a0f] text-white overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 flex-shrink-0 border-r border-white/5 bg-[#0d0d14] flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
              <Bot size={16} />
            </div>
            <div>
              <p className="font-semibold text-sm tracking-wide">AIOS</p>
              <p className="text-[10px] text-white/40 uppercase tracking-widest">Orchestrator</p>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 p-4 space-y-1">
          {NAV.map(({ id, label, icon: Icon }) => {
            const isActive = active === id;
            return (
              <button
                key={id}
                onClick={() => setActive(id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all ${
                  isActive
                    ? "bg-violet-600/20 text-violet-300 border border-violet-500/20"
                    : "text-white/40 hover:text-white/70 hover:bg-white/5"
                }`}
              >
                <Icon size={16} />
                <span>{label}</span>
                {isActive && <ChevronRight size={14} className="ml-auto" />}
              </button>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-white/5">
          <div className="flex items-center gap-2 px-3 py-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-white/30">Sistema online</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1">
            <Zap size={12} className="text-violet-400" />
            <span className="text-xs text-white/30">Sandbox Mode</span>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 overflow-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="h-full"
          >
            {renderView()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
