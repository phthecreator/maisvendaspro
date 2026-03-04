import React from 'react';
import { motion } from 'framer-motion';
import { TrendingDown } from 'lucide-react';

const costs = [
  {
    title: 'Horas nao-faturaveis',
    metric: '15-25h/semana',
    description: 'Tempo gasto em retrabalho, alinhamento interno e apagar incendio. Nunca vira receita. A R$150/h, sao R$9-15k/mes evaporando.',
  },
  {
    title: 'Folha inchando',
    metric: 'R$5-8k por contratacao',
    description: 'Cada gargalo operacional "resolve" com mais gente. Custo fixo sobe, margem cai, e o problema real continua la.',
  },
  {
    title: 'Churn silencioso',
    metric: '10-20% ao ano',
    description: 'Clientes saem sem aviso porque a entrega nao tem padrao e o reporting e fraco. Voce so descobre no cancelamento.',
  },
];

const ChaosMath: React.FC = () => {
  return (
    <section className="py-32 md:py-40 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-5xl md:text-7xl font-black tracking-tight text-white mb-4">
            A matematica do caos
          </h2>
          <p className="text-xl md:text-2xl text-white/60 leading-relaxed mb-20">
            Quanto custa NAO resolver.
          </p>
        </motion.div>

        <div className="space-y-6">
          {costs.map((cost, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.1 }}
              className="p-8 md:p-10 rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm hover:border-white/[0.12] hover:bg-white/[0.05] transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-6 mb-4">
                <h3 className="text-white text-xl font-bold">{cost.title}</h3>
                <span className="text-white/30 text-sm font-mono shrink-0 px-3 py-1 rounded-lg bg-white/[0.04]">{cost.metric}</span>
              </div>
              <p className="text-white/50 text-base md:text-lg leading-relaxed">{cost.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
          className="mt-16 flex items-center gap-4 p-8 rounded-2xl border border-white/[0.1] bg-white/[0.03]"
        >
          <TrendingDown className="w-6 h-6 text-white/40 shrink-0" />
          <p className="text-white text-lg md:text-xl font-bold">
            Se voce nao instala um sistema, continua comprando paz com contratacao.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ChaosMath;
