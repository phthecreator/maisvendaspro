import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Bot, Zap, BarChart3 } from 'lucide-react';

const pillars = [
  {
    icon: FileText,
    title: 'Processos (SOPs)',
    description: 'Cada entrega, onboarding e rotina documentados em SOPs claros. Qualquer pessoa do time executa no padrao — sem depender do dono.',
  },
  {
    icon: Bot,
    title: 'Agentes de IA',
    description: 'Agentes que qualificam leads, geram relatorios, respondem clientes e organizam dados. Trabalham 24/7 sem folha de pagamento.',
  },
  {
    icon: Zap,
    title: 'Automacoes',
    description: 'Follow-up automatico, coleta de dados, onboarding de clientes e alertas inteligentes. Zero retrabalho manual.',
  },
  {
    icon: BarChart3,
    title: 'Rotina + Scoreboard',
    description: 'Reunioes semanais com metricas claras. O time sabe o que fazer, quando fazer e como medir. Opera sem voce puxando.',
  },
];

const Mechanism: React.FC = () => {
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
            AIOS — seu centro de comando
          </h2>
          <p className="text-xl md:text-2xl text-white/60 leading-relaxed max-w-3xl mx-auto">
            Quatro pilares que transformam caos em operacao previsivel.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
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
                <h3 className="text-white text-xl font-bold mb-3">{pillar.title}</h3>
                <p className="text-white/50 text-base md:text-lg leading-relaxed">{pillar.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
          className="text-white text-lg md:text-xl font-bold mt-16 text-center"
        >
          Voce nao compra ferramenta. Compra operacao que roda.
        </motion.p>
      </div>
    </section>
  );
};

export default Mechanism;
