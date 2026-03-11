import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Bot, User, Zap, ChevronDown } from "lucide-react";

interface Squad {
  id: string;
  title: string;
  name: string;
  agents: { id: string; name: string; icon: string; title: string }[];
}

interface Message {
  id: string;
  role: "user" | "agent";
  text: string;
  ts: Date;
  tokens?: number;
}

const AVATARS: Record<string, string> = {
  alex_hormozi: "💰", daniel_kahneman: "🧠", mitchell_hashimoto: "⚙️",
  sam_altman: "🚀", elon_musk: "⚡", steve_jobs: "🍎",
};

let totalTokens = 0;

export default function ChatView() {
  const [squads, setSquads] = useState<Squad[]>([]);
  const [selectedSquad, setSelectedSquad] = useState<Squad | null>(null);
  const [selectedAgent, setSelectedAgent] = useState<{ id: string; name: string; icon: string; title: string } | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [tokens, setTokens] = useState(0);
  const [agentDropdown, setAgentDropdown] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("/api/squads")
      .then((r) => r.json())
      .then((d: Squad[]) => {
        setSquads(d);
        // Default: first squad with agents
        const first = d.find((s) => s.agents.length > 0);
        if (first) {
          setSelectedSquad(first);
          setSelectedAgent(first.agents[0]);
        }
      });
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const send = () => {
    if (!input.trim() || !selectedAgent) return;

    const userMsg: Message = {
      id: crypto.randomUUID(),
      role: "user",
      text: input,
      ts: new Date(),
    };
    setMessages((m) => [...m, userMsg]);
    setInput("");

    // Simulate agent response
    setTimeout(() => {
      const estimated = Math.floor(input.split(" ").length * 1.3 + 50);
      totalTokens += estimated;
      setTokens(totalTokens);

      const agentMsg: Message = {
        id: crypto.randomUUID(),
        role: "agent",
        text: getSimulatedResponse(selectedAgent.name, input),
        ts: new Date(),
        tokens: estimated,
      };
      setMessages((m) => [...m, agentMsg]);
    }, 800 + Math.random() * 600);
  };

  const clear = () => {
    setMessages([]);
    totalTokens = 0;
    setTokens(0);
  };

  return (
    <div className="h-full flex flex-col">
      {/* Top bar */}
      <div className="flex-shrink-0 border-b border-white/5 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Agent selector */}
          <div className="relative">
            <button
              onClick={() => setAgentDropdown(!agentDropdown)}
              className="flex items-center gap-2 bg-white/5 hover:bg-white/8 border border-white/10 rounded-lg px-3 py-2 text-sm transition-colors"
            >
              <span>{selectedAgent?.icon?.replace(/['"]/g, "") || "🤖"}</span>
              <span className="text-white/80">{selectedAgent?.name || "Selecionar agente"}</span>
              <ChevronDown size={14} className="text-white/40" />
            </button>

            <AnimatePresence>
              {agentDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  className="absolute top-full left-0 mt-1 w-64 bg-[#15151e] border border-white/10 rounded-xl overflow-hidden z-50 shadow-xl"
                >
                  {squads.map((squad) => (
                    <div key={squad.id}>
                      {squad.agents.length > 0 && (
                        <>
                          <div className="px-3 py-1.5 text-[10px] text-white/30 uppercase tracking-wider bg-white/2">
                            {squad.title || squad.name}
                          </div>
                          {squad.agents.map((agent) => (
                            <button
                              key={agent.id}
                              onClick={() => {
                                setSelectedSquad(squad);
                                setSelectedAgent(agent);
                                setAgentDropdown(false);
                                setMessages([]);
                                totalTokens = 0;
                                setTokens(0);
                              }}
                              className={`w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-white/5 transition-colors ${
                                selectedAgent?.id === agent.id ? "text-violet-300" : "text-white/60"
                              }`}
                            >
                              <span>{agent.icon?.replace(/['"]/g, "") || "🤖"}</span>
                              <div className="text-left">
                                <p className="text-sm">{agent.name}</p>
                                {agent.title && <p className="text-[10px] text-white/30">{agent.title}</p>}
                              </div>
                            </button>
                          ))}
                        </>
                      )}
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {selectedAgent?.title && (
            <span className="text-xs text-white/30 hidden sm:block">{selectedAgent.title}</span>
          )}
        </div>

        {/* Token counter */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-xs text-white/40">
            <Zap size={12} className="text-amber-400" />
            <span><span className="text-amber-300 font-mono">{tokens.toLocaleString()}</span> tokens</span>
          </div>
          {messages.length > 0 && (
            <button onClick={clear} className="text-xs text-white/25 hover:text-white/50 transition-colors">
              limpar
            </button>
          )}
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-auto px-6 py-4 space-y-4">
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-center gap-3">
            <div className="text-4xl">{selectedAgent?.icon?.replace(/['"]/g, "") || "🤖"}</div>
            <p className="text-white/60 font-medium">{selectedAgent?.name || "Selecione um agente"}</p>
            <p className="text-white/25 text-sm max-w-xs">
              {selectedAgent
                ? `Inicie uma conversa com ${selectedAgent.name}. Este é o modo sandbox — sem chamadas reais à LLM.`
                : "Escolha um agente no menu acima para começar"}
            </p>
          </div>
        )}

        {messages.map((msg) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
          >
            {/* Avatar */}
            <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-sm ${
              msg.role === "user"
                ? "bg-white/10"
                : "bg-violet-500/20 border border-violet-500/30"
            }`}>
              {msg.role === "user"
                ? <User size={14} className="text-white/50" />
                : <span>{selectedAgent?.icon?.replace(/['"]/g, "") || "🤖"}</span>
              }
            </div>

            {/* Bubble */}
            <div className={`max-w-[75%] ${msg.role === "user" ? "items-end" : "items-start"} flex flex-col gap-1`}>
              <div className={`rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                msg.role === "user"
                  ? "bg-violet-600/30 border border-violet-500/20 text-white/90 rounded-tr-sm"
                  : "bg-white/5 border border-white/8 text-white/80 rounded-tl-sm"
              }`}>
                {msg.text}
              </div>
              <div className="flex items-center gap-2 px-1">
                <span className="text-[10px] text-white/20">
                  {msg.ts.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })}
                </span>
                {msg.tokens && (
                  <span className="text-[10px] text-amber-400/40">~{msg.tokens} tokens</span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="flex-shrink-0 border-t border-white/5 p-4">
        <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus-within:border-violet-500/40 transition-colors">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && send()}
            placeholder={selectedAgent ? `Mensagem para ${selectedAgent.name}…` : "Selecione um agente"}
            disabled={!selectedAgent}
            className="flex-1 bg-transparent text-sm text-white/80 placeholder:text-white/25 outline-none"
          />
          <button
            onClick={send}
            disabled={!input.trim() || !selectedAgent}
            className="w-8 h-8 rounded-lg bg-violet-600 hover:bg-violet-500 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
          >
            <Send size={14} />
          </button>
        </div>
        <p className="text-[10px] text-white/15 text-center mt-2">
          Sandbox mode — respostas simuladas. Integre sua API para respostas reais.
        </p>
      </div>
    </div>
  );
}

function getSimulatedResponse(agentName: string, input: string): string {
  const responses: Record<string, string[]> = {
    "Creator": [
      "Analisando o tema... Aqui está um hook viral para sua postagem: 'A maioria falha porque não entende isso...'",
      "Ótimo input! Posso gerar 5 variações de copy para esse tema. Qual formato prefere: carrossel, story ou post longo?",
    ],
    "TrafficManager": [
      "Com base nessa premissa, recomendo campanha de remarketing com CPM otimizado. Segmentação sugerida: LAL 3% + interesse.",
      "Analisando o funil... O CPA está acima do benchmark. Sugiro pausar os adsets com CTR < 0.8% e redistribuir verba.",
    ],
    "Scout": [
      "Pesquisando tendências no LinkedIn e Google Trends... Encontrei 3 tópicos em alta relevantes para sua audiência.",
    ],
    "default": [
      `Recebido! Estou processando sua solicitação sobre "${input.slice(0, 40)}...". Como posso aprofundar isso?`,
      "Excelente ponto. Com base no meu conhecimento especializado, aqui está minha perspectiva:",
      "Analisando o contexto... Minha recomendação seria abordar isso em três etapas principais.",
    ],
  };

  const pool = responses[agentName] || responses["default"];
  return pool[Math.floor(Math.random() * pool.length)];
}
