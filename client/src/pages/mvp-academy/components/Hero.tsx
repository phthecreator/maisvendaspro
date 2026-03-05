import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';

const PRICING_URL = '#pricing'; 

const Hero: React.FC = () => {
  return (
    <header className="relative pt-32 pb-24 md:pt-48 md:pb-40 px-6 overflow-hidden bg-black">
      {/* Elementos Estéticos Steve Jobs Style */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[700px] bg-primary/[0.07] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Status Badge (UX/UI Precision) */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-10 backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="font-mono text-[10px] md:text-xs text-primary uppercase tracking-[0.2em] font-bold">
            System Status: Implementation_Ready
          </span>
        </motion.div>

        {/* Headline (The Manifesto - Godin Style) */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="text-4xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent leading-[0.9] text-balance"
        >
          Você já consumiu conteúdo suficiente.
          <br />
          O sistema está pronto.
        </motion.h1>

        {/* Subheadline (Conceptual Model - Norman Style) */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="text-lg md:text-2xl text-white/50 leading-relaxed max-w-3xl mx-auto mb-12 font-medium"
        >
          Não é falta de informação — é falta de implementação assistida. 
          <span className="text-white/80"> Do zero ao deploy em 4 semanas.</span>
        </motion.p>

        {/* CTA Section (Irresistible Offer - Hormozi Style) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          className="flex flex-col items-center gap-6"
        >
          <a
            href={PRICING_URL}
            className="group relative inline-flex items-center gap-4 bg-primary text-black font-black px-12 py-5 rounded-2xl hover:bg-primary/90 transition-all duration-500 hover:scale-[1.03] text-lg md:text-xl shadow-[0_0_40px_rgba(0,255,136,0.3)]"
          >
            Acessar o Santuário — R$250/ano
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform duration-300" />
          </a>
          
          <div className="flex items-center gap-4 text-white/20 font-mono text-[10px] uppercase tracking-widest">
            <span className="flex items-center gap-1.5"><Terminal className="w-3 h-3" /> No-Code_Friendly</span>
            <span className="w-1 h-1 rounded-full bg-white/10" />
            <span className="flex items-center gap-1.5">Weekly_Cohorts</span>
            <span className="w-1 h-1 rounded-full bg-white/10" />
            <span className="flex items-center gap-1.5">Direct_Access</span>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Hero;
