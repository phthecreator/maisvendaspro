import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const yesItems = [
  'Agencia ativa (trafego, criativos, web, full-service)',
  'Time de 2 a 15+ pessoas',
  'Gargalo principal e operacao, nao venda',
  'Quer implementar de verdade, nao so "aprender"',
  'Fatura pelo menos R$20k/mes',
];

const noItems = [
  'Quer aprender IA por curiosidade',
  'Nao tem operacao rodando ainda',
  'Quer consultoria sem por a mao na massa',
  'Nao tem budget para investir em sistema',
];

const ForWho: React.FC = () => {
  return (
    <section className="py-32 md:py-40 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-5xl md:text-7xl font-black tracking-tight text-white mb-20 text-center"
        >
          Pra quem e — e nao e
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* YES column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="p-8 md:p-10 rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm"
          >
            <h3 className="text-white text-xl font-bold mb-8">
              E pra voce se...
            </h3>
            <div className="space-y-5">
              {yesItems.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-lg bg-white/[0.08] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-white/70 text-base md:text-lg leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* NO column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="p-8 md:p-10 rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm"
          >
            <h3 className="text-white text-xl font-bold mb-8">
              Nao e pra voce se...
            </h3>
            <div className="space-y-5">
              {noItems.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-lg bg-white/[0.04] flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-4 h-4 text-white/30" />
                  </div>
                  <p className="text-white/40 text-base md:text-lg leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ForWho;
