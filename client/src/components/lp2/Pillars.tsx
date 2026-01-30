
import React from 'react';
import { Hammer, Brain, Gem, Check } from 'lucide-react';

const Pillars: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-white text-3xl md:text-6xl font-black uppercase tracking-tighter mb-4">
            ⚙️ "O MÉTODO QUE TRANSFORMA VOCÊ EM UM SOLUCIONADOR TECH"
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Pilar 1 */}
          <div className="space-y-6">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8">
              <Hammer className="text-primary w-8 h-8" />
            </div>
            <h3 className="text-white text-2xl font-black uppercase">PILAR 1: 🔧 ARSENAL TÉCNICO</h3>
            <div className="space-y-4">
              <p className="text-primary text-xs font-black uppercase tracking-widest">O que você domina:</p>
              <ul className="text-white/60 space-y-2 text-sm">
                <li className="flex gap-2"><Check className="text-primary w-4 h-4 shrink-0" /> Claude Code + Cursor: IA real</li>
                <li className="flex gap-2"><Check className="text-primary w-4 h-4 shrink-0" /> N8N: O cérebro que conecta tudo</li>
                <li className="flex gap-2"><Check className="text-primary w-4 h-4 shrink-0" /> Evolution API: WhatsApp sem limites</li>
                <li className="flex gap-2"><Check className="text-primary w-4 h-4 shrink-0" /> Web Scraping: Dados de qualquer lugar</li>
                <li className="flex gap-2"><Check className="text-primary w-4 h-4 shrink-0" /> Automação de Browser: Robôs humanos</li>
              </ul>
            </div>
            <div className="bg-white/5 p-4 rounded-xl text-xs space-y-2">
              <p className="text-urgency font-bold uppercase">🚫 Por que importa:</p>
              <p className="text-white/40 italic">Você resolve o que 99% dos devs não consegue e vira insubstituível.</p>
            </div>
          </div>

          {/* Pilar 2 */}
          <div className="space-y-6">
            <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-8">
              <Brain className="text-secondary w-8 h-8" />
            </div>
            <h3 className="text-white text-2xl font-black uppercase">PILAR 2: 📊 MENTE DE GESTÃO</h3>
            <div className="space-y-4">
              <p className="text-secondary text-xs font-black uppercase tracking-widest">O que você entrega:</p>
              <ul className="text-white/60 space-y-2 text-sm">
                <li className="flex gap-2"><Check className="text-secondary w-4 h-4 shrink-0" /> Departamento Comercial Automatizado</li>
                <li className="flex gap-2"><Check className="text-secondary w-4 h-4 shrink-0" /> CRM visual de faturamento</li>
                <li className="flex gap-2"><Check className="text-secondary w-4 h-4 shrink-0" /> Gestão de filas inteligente</li>
                <li className="flex gap-2"><Check className="text-secondary w-4 h-4 shrink-0" /> Transbordo IA → Humano</li>
                <li className="flex gap-2"><Check className="text-secondary w-4 h-4 shrink-0" /> Qualificação automática de leads</li>
              </ul>
            </div>
            <div className="bg-white/5 p-4 rounded-xl text-xs space-y-2">
              <p className="text-secondary font-bold uppercase">💰 O resultado:</p>
              <p className="text-white/40 italic">Você resolve a dor real: "leads não viram venda". Cliente nunca te demite.</p>
            </div>
          </div>

          {/* Pilar 3 */}
          <div className="space-y-6">
            <div className="w-16 h-16 bg-accent-yellow/10 rounded-2xl flex items-center justify-center mb-8">
              <Gem className="text-accent-yellow w-8 h-8" />
            </div>
            <h3 className="text-white text-2xl font-black uppercase">PILAR 3: 💎 VENDAS HIGH-TICKET</h3>
            <div className="space-y-4">
              <p className="text-accent-yellow text-xs font-black uppercase tracking-widest">Como sair do "tiro curto":</p>
              <ul className="text-white/60 space-y-2 text-sm">
                <li className="flex gap-2"><Check className="text-accent-yellow w-4 h-4 shrink-0" /> Ancoragem de Preço (Setup + MRR)</li>
                <li className="flex gap-2"><Check className="text-accent-yellow w-4 h-4 shrink-0" /> Consultoria Diagnóstica estratégica</li>
                <li className="flex gap-2"><Check className="text-accent-yellow w-4 h-4 shrink-0" /> Scripts de Fechamento Irrecusáveis</li>
                <li className="flex gap-2"><Check className="text-accent-yellow w-4 h-4 shrink-0" /> Domínio de Nichos Quentes (Saúde, Legal)</li>
                <li className="flex gap-2"><Check className="text-accent-yellow w-4 h-4 shrink-0" /> De "menino do PC" a "Parceiro Estratégico"</li>
              </ul>
            </div>
            <div className="bg-white/5 p-4 rounded-xl text-xs space-y-2">
              <p className="text-accent-yellow font-bold uppercase">🚀 Por que isso muda tudo:</p>
              <p className="text-white/40 italic">Você cobra R$ 5k+ pelo valor gerado e não por hora trabalhada.</p>
            </div>
          </div>
        </div>

        <div className="mt-24 text-center">
          <div className="inline-block bg-primary/10 border border-primary/20 p-8 rounded-3xl">
            <h3 className="text-white text-2xl md:text-4xl font-black uppercase mb-4 leading-none">
              ⚡ "Tech sem Vendas = Hobby. Vendas sem Tech = Commodity."
            </h3>
            <p className="text-primary text-2xl md:text-5xl font-black uppercase italic italic">
              "Vibe Coding = Os 2 juntos. Por isso você DOMINA o mercado."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pillars;
