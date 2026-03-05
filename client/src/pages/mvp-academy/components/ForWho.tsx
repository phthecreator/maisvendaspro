import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const yesItems = [
  'Tem uma ideia de projeto e quer implementar com IA',
  'Consegue dedicar 30 minutos por semana',
  'Quer fazer na prática, não só estudar teoria',
  'Está faturando (ou quer faturar) entre R$5k e R$10k/mês',
  'Já consumiu conteúdo no YouTube, agora quer execução',
];

const noItems = [
  'Está procurando atalho sem esforço',
  'Quer suporte 1v1 ilimitado com os founders (isso é mentoria)',
  'Não tem nenhuma ideia de projeto ainda',
  'Acha que 30 min/semana é muito compromisso',
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
          Pra quem é — e não é
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="p-8 md:p-10 rounded-2xl border border-primary/20 bg-primary/[0.03] backdrop-blur-sm"
          >
            <h3 className="text-white text-xl font-bold mb-8">É pra você se...</h3>
            <div className="space-y-5">
              {yesItems.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-lg bg-primary/[0.12] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-white/70 text-base leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="p-8 md:p-10 rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm"
          >
            <h3 className="text-white text-xl font-bold mb-8">Não é pra você se...</h3>
            <div className="space-y-5">
              {noItems.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-lg bg-white/[0.04] flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-4 h-4 text-white/30" />
                  </div>
                  <p className="text-white/40 text-base leading-relaxed">{item}</p>
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
