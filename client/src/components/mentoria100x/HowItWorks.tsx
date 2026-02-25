import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    label: 'Semana 1',
    title: 'Diagnostico + Alinhamento + Plano',
    detail: 'Mapeamos seus gargalos, definimos prioridades e montamos o plano de implantacao personalizado.',
  },
  {
    label: 'Semana 2',
    title: 'Implantacao guiada (mao na massa)',
    detail: 'Comecamos a instalar SOPs, agentes e automacoes no seu ambiente real. Nada teorico.',
  },
  {
    label: 'Semanal',
    title: '1:1 com Pedro + Murilo',
    detail: 'Call semanal para revisar progresso, destravar bloqueios e calibrar proximos passos.',
  },
  {
    label: 'Mensal',
    title: 'Call SOS (destravar gargalo critico)',
    detail: 'Sessao extra para resolver problemas urgentes que nao podem esperar a call semanal.',
  },
  {
    label: 'Continuo',
    title: 'Grupo VIP com SLA de resposta',
    detail: 'Acesso direto ao time via grupo exclusivo. Duvidas respondidas em ate 24h uteis.',
  },
];

const HowItWorks: React.FC = () => {
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
            Como funciona
          </h2>
          <p className="text-xl md:text-2xl text-white/60 leading-relaxed mb-20">
            Programa fechado. 90 dias. Implantacao real.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent" />

          <div className="space-y-12">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.08 }}
                className="flex items-start gap-8 relative"
              >
                {/* Dot */}
                <div className="w-10 h-10 rounded-full border border-white/20 bg-black flex items-center justify-center shrink-0 z-10">
                  <div className="w-2.5 h-2.5 rounded-full bg-white" />
                </div>
                <div className="pb-2">
                  <span className="text-white/30 text-xs uppercase tracking-[0.2em] font-bold">
                    {step.label}
                  </span>
                  <h3 className="text-white text-lg md:text-xl font-bold mt-2 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-white/50 text-base md:text-lg leading-relaxed">
                    {step.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
