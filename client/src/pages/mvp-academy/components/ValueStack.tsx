import React from 'react';
import { motion } from 'framer-motion';

const items = [
  { label: 'Trilhas modulares — 4 níveis completos', value: 'R$1.200' },
  { label: 'Encontros semanais ao vivo (48 por ano)', value: 'R$800' },
  { label: 'Cohort mensal com tutores', value: 'R$400' },
  { label: 'Comunidade privada + hub de conexões', value: 'R$300' },
  { label: 'Indicações de trabalho para membros ativos', value: 'R$?' },
];

const ValueStack: React.FC = () => {
  return (
    <section className="py-32 md:py-40 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-16 text-center"
        >
          <p className="text-primary/70 text-xs uppercase tracking-[0.3em] font-semibold mb-4">
            O que você estaria pagando separado
          </p>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight text-white">
            O valor real
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          className="rounded-2xl border border-white/[0.06] bg-white/[0.03] overflow-hidden"
        >
          <div className="divide-y divide-white/[0.05]">
            {items.map((item, i) => (
              <div key={i} className="flex items-center justify-between px-8 py-5">
                <span className="text-white/60 text-base">{item.label}</span>
                <span className="text-white/40 text-base font-mono shrink-0 ml-4">{item.value}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between px-8 py-6 border-t border-primary/20 bg-primary/[0.04]">
            <span className="text-white/40 text-base line-through">Total: R$2.700+</span>
            <span className="text-primary font-black text-2xl glow-text">MVP Academy: R$250/ano</span>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
          className="text-center text-white/30 text-sm mt-8 leading-relaxed"
        >
          Mantemos em R$250/ano porque precisamos de volume e de cases de sucesso — não de margem na entrada.
          <br />
          O upsell real é a mentoria. E só chega lá quem provar resultado aqui.
        </motion.p>
      </div>
    </section>
  );
};

export default ValueStack;
