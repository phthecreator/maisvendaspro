import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const results = [
  {
    title: 'Onboarding com padrao',
    detail: 'Novo cliente entra, time sabe exatamente o que fazer. Sem improviso.',
  },
  {
    title: 'Entrega 2-3x mais rapida',
    detail: 'SOPs + automacoes eliminam retrabalho e gargalos de alinhamento.',
  },
  {
    title: 'Relatorio sem sofrer',
    detail: 'Dados coletados automaticamente. Report gerado em minutos, nao horas.',
  },
  {
    title: 'Time com autonomia real',
    detail: 'Scoreboard + rotina semanal. O time opera sem voce puxando cada tarefa.',
  },
  {
    title: 'Dono para de apagar incendio',
    detail: 'Voce volta a trabalhar NO negocio, nao dentro do negocio.',
  },
];

const Results: React.FC = () => {
  return (
    <section className="py-32 md:py-40 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-5xl md:text-7xl font-black tracking-tight text-white mb-20"
        >
          O que muda em 90 dias
        </motion.h2>

        <div className="space-y-6">
          {results.map((result, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.08 }}
              className="flex items-start gap-5 p-6 md:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.03] hover:border-white/[0.12] hover:bg-white/[0.05] transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-white/[0.08] flex items-center justify-center shrink-0">
                <Check className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white text-lg md:text-xl font-bold mb-1">{result.title}</h3>
                <p className="text-white/50 text-base md:text-lg leading-relaxed">{result.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
          className="text-white/30 text-sm mt-16 border-t border-white/[0.06] pt-8"
        >
          Nao prometemos milagre. Prometemos sistema operavel instalado e funcionando.
        </motion.p>
      </div>
    </section>
  );
};

export default Results;
