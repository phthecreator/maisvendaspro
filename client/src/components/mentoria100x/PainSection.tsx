import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

const pains = [
  {
    number: '01',
    title: 'Cada pessoa faz de um jeito',
    detail: 'Sem SOP, o padrao morre na primeira contratacao. O dono vira gargalo de qualidade.',
  },
  {
    number: '02',
    title: 'Onboarding vira improviso',
    detail: 'Novo cliente entra e ninguem sabe o passo a passo. Prazo estoura, confianca cai.',
  },
  {
    number: '03',
    title: 'Reporting e escravidao manual',
    detail: 'Horas semanais montando planilha que ninguem le. Retencao vira aposta, nao dados.',
  },
  {
    number: '04',
    title: 'Crescer = contratar por desespero',
    detail: 'Cada gargalo "resolve" com mais gente. Custo fixo sobe R$5-8k/mes por cabeca. Margem sangra.',
  },
];

const PainSection: React.FC = () => {
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
            O problema que voce ja conhece
          </h2>
          <p className="text-xl md:text-2xl text-white/60 leading-relaxed mb-16">
            E que ta comendo seu lucro todo mes.
          </p>
        </motion.div>

        <div className="space-y-6">
          {pains.map((pain, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.1 }}
              className="flex items-start gap-6 p-8 md:p-10 rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm hover:border-white/[0.12] hover:bg-white/[0.05] transition-all duration-300"
            >
              <span className="text-white/20 font-black text-2xl shrink-0 font-mono">
                {pain.number}
              </span>
              <div>
                <h3 className="text-white text-lg md:text-xl font-bold mb-2">{pain.title}</h3>
                <p className="text-white/50 text-base md:text-lg leading-relaxed">{pain.detail}</p>
              </div>
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
          <AlertTriangle className="w-6 h-6 text-white/40 shrink-0" />
          <p className="text-white text-lg md:text-xl font-bold">
            Seu gargalo nao e trafego. E operacao.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PainSection;
