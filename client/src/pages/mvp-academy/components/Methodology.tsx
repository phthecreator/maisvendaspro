import React from 'react';
import { motion } from 'framer-motion';

const levels = [
  {
    level: '01',
    name: 'Fundamentos IA + Vibe Coding',
    modules: ['Prompt Engineering Básico', 'Claude para Iniciantes', 'Primeiro projeto na prática'],
    duration: '6 semanas',
  },
  {
    level: '02',
    name: 'Automação + Agentes',
    modules: ['Hooks & Skills', 'AIOS Overview', 'Dashboard Interativo'],
    duration: '5 semanas',
  },
  {
    level: '03',
    name: 'Infraestrutura & Deploy',
    modules: ['Docker 101', 'Easy Panel + Portainer', 'GitHub Actions', 'Deploy Automático'],
    duration: '6 semanas',
  },
  {
    level: '04',
    name: 'Escalando para Agência',
    modules: ['Padrões de Vibe Coding', 'Como vender serviços de IA', 'Seu Primeiro Cliente'],
    duration: '4 semanas',
  },
];

const Methodology: React.FC = () => {
  return (
    <section className="py-32 md:py-40 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-6"
        >
          <p className="text-primary/70 text-xs uppercase tracking-[0.3em] font-semibold mb-4">
            O método
          </p>
          <h2 className="text-5xl md:text-7xl font-black tracking-tight text-white mb-4">
            Prática antes da teoria. Sempre.
          </h2>
          <p className="text-xl text-white/60 leading-relaxed max-w-3xl">
            Cada trilha segue a mesma estrutura: você faz primeiro, entende o porquê depois, aplica no seu projeto na mesma semana.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
          className="flex items-center gap-8 text-sm text-primary/40 mb-16 mt-10 font-mono"
        >
          <span>1. Você faz</span>
          <span className="text-white/10">→</span>
          <span>2. Entende o porquê</span>
          <span className="text-white/10">→</span>
          <span>3. Aplica no projeto</span>
        </motion.div>

        <div className="space-y-4">
          {levels.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.08 }}
              className="p-8 md:p-10 rounded-2xl border border-white/[0.06] bg-white/[0.03] hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <span className="text-primary/30 font-black text-xl font-mono shrink-0">
                    {item.level}
                  </span>
                  <h3 className="text-white font-bold text-lg md:text-xl">{item.name}</h3>
                </div>
                <span className="text-white/20 text-sm font-mono shrink-0">{item.duration}</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {item.modules.map((mod, j) => (
                  <span
                    key={j}
                    className="text-white/40 text-sm px-4 py-2 rounded-lg border border-white/[0.06] bg-white/[0.02]"
                  >
                    {mod}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
