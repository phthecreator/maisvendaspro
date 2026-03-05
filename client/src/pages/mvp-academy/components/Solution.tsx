import React from 'react';
import { motion } from 'framer-motion';

const Solution: React.FC = () => {
  return (
    <section className="py-32 md:py-40 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <p className="text-primary/70 text-xs uppercase tracking-[0.3em] font-semibold mb-4">
              A solução
            </p>
            <h2 className="text-5xl md:text-6xl font-black tracking-tight text-white mb-6 leading-tight">
              Não é mais um curso pra assistir na estante.
            </h2>
            <p className="text-xl text-white/60 leading-relaxed">
              É um método cohort — você constrói junto, com tutores ao vivo, com uma comunidade que está na mesma caminhada.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="space-y-6"
          >
            {[
              {
                label: 'Em 7 dias',
                value: 'Primeira vitória concreta — uma ação simples com resultado visível.',
              },
              {
                label: 'Em 30 dias',
                value: 'Projeto funcionando. Não um certificado. Um projeto na web.',
              },
              {
                label: 'Em 90 dias',
                value: 'Infraestrutura de deploy automático. Pronto pra escalar.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-5 p-6 rounded-2xl border border-white/[0.06] bg-white/[0.03]"
              >
                <div className="shrink-0">
                  <p className="text-primary/50 text-xs font-semibold uppercase tracking-widest mb-1">
                    {item.label}
                  </p>
                </div>
                <p className="text-white/70 text-base leading-relaxed">{item.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
