import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, BarChart2, Paintbrush, Globe } from 'lucide-react';

const packs = [
  {
    icon: MessageSquare,
    title: 'Pack SDR / Atendimento',
    description: 'Agente de IA que qualifica leads no WhatsApp, faz follow-up automatico e agenda reunioes. Seu time so atende quem esta pronto pra comprar.',
  },
  {
    icon: BarChart2,
    title: 'Pack Relatorios & Metricas',
    description: 'Coleta automatica de dados de campanhas, dashboards atualizados em tempo real e reports semanais gerados sem planilha manual.',
  },
  {
    icon: Paintbrush,
    title: 'Pack Criativos',
    description: 'Geracao assistida de copies, briefings estruturados e organizacao de assets. Da ideia ao criativo em metade do tempo.',
  },
  {
    icon: Globe,
    title: 'Pack Web / LP',
    description: 'Landing pages, sites e funis construidos com IA e templates validados. Deploy rapido com padrao visual profissional.',
  },
];

const extras = ['SOPs operacionais', 'Templates prontos', 'Scoreboard semanal', 'Playbooks de processo'];

const AgentPacks: React.FC = () => {
  return (
    <section className="py-32 md:py-40 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black tracking-tight text-white mb-4">
            Entregaveis (Agent Packs)
          </h2>
          <p className="text-xl md:text-2xl text-white/60 leading-relaxed">
            O que voce recebe instalado e funcionando.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {packs.map((pack, i) => {
            const Icon = pack.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.1 }}
                className="p-8 md:p-10 rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm hover:border-white/[0.12] hover:bg-white/[0.05] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-white/[0.06] flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-white/60" />
                </div>
                <h3 className="text-white text-lg md:text-xl font-bold mb-3">{pack.title}</h3>
                <p className="text-white/50 text-base leading-relaxed">{pack.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <span className="text-white/20 text-xs uppercase tracking-[0.2em] font-bold">Incluso:</span>
          {extras.map((extra, i) => (
            <span
              key={i}
              className="text-white/50 text-sm px-5 py-2.5 rounded-full border border-white/[0.08] bg-white/[0.02]"
            >
              {extra}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AgentPacks;
