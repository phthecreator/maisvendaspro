import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Lock, Rocket, Target, Zap, Code } from 'lucide-react';

const steps = [
  {
    level: 'LVL_01',
    title: 'SETUP_CORE',
    desc: 'Mentalidade e Ferramentas. Configuração do ambiente AIOS e acesso às Minds.',
    icon: Target,
    status: 'Unlocked',
  },
  {
    level: 'LVL_02',
    title: 'AI_ORCHESTRATION',
    desc: 'O domínio dos Prompts e Fluxos. Como orquestrar clones para fazer o trabalho duro.',
    icon: Code,
    status: 'Unlocked',
  },
  {
    level: 'LVL_03',
    title: 'SYSTEM_BUILD',
    desc: 'Aplicações Reais. Construção do seu primeiro MVP funcional assistido por IA.',
    icon: Zap,
    status: 'Unlocked',
  },
  {
    level: 'LVL_04',
    title: 'DEPLOY_PRO',
    desc: 'Lançamento e Mercado. Como colocar no ar e captar os primeiros clientes.',
    icon: Rocket,
    status: 'Unlocked',
  },
];

const ImplementationRoadmap: React.FC = () => {
  return (
    <section className="py-32 md:py-48 px-6 bg-black relative overflow-hidden" id="roadmap">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-primary text-xs uppercase tracking-[0.4em] mb-6"
          >
            The_Execution_Protocol
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-8"
          >
            A Trilha do <span className="text-primary">Deploy</span>.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative p-8 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500 group"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-[10px] text-primary/40 group-hover:text-primary transition-colors">
                  {step.level}
                </span>
                <step.icon className="w-6 h-6 text-white/20 group-hover:text-primary transition-all duration-500" />
              </div>

              <h3 className="text-white text-xl font-bold mb-4 tracking-tight">
                {step.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed mb-8 group-hover:text-white/60 transition-colors">
                {step.desc}
              </p>

              <div className="flex items-center gap-2 mt-auto">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span className="font-mono text-[10px] text-primary uppercase font-bold tracking-widest">
                  {step.status}
                </span>
              </div>

              {/* Progress Line for Desktop */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-px bg-white/10 z-10" />
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full border border-white/10 bg-white/5 font-mono text-[10px] md:text-xs text-white/40 uppercase tracking-widest">
            <Lock className="w-3 h-3" /> 
            Próximo Cohort: <span className="text-white">Segunda-feira às 19:00</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImplementationRoadmap;
