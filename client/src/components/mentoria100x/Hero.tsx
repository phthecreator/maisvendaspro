import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToForm = () => {
    document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="relative pt-32 pb-24 md:pt-48 md:pb-40 px-6 overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-white/40 text-xs md:text-sm uppercase tracking-[0.3em] font-semibold mb-6"
        >
          Programa de Aceleracao
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-8 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent leading-tight"
        >
          E se o seu time produzisse 100x mais — sem contratar ninguem?
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          className="text-xl md:text-2xl text-white/60 leading-relaxed max-w-3xl mx-auto mb-6"
        >
          Ferramentas e sistemas de IA que aumentam ate 100x a eficiencia da sua operacao. A gente instala com voce em 90 dias.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
          className="text-base text-white/30 max-w-2xl mx-auto mb-14"
        >
          Consultoria gratuita. Mapeamos seu negocio com especialistas e mostramos exatamente o que fazer.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
        >
          <button
            onClick={scrollToForm}
            className="group inline-flex items-center gap-3 bg-white text-black font-semibold px-10 py-4 rounded-xl hover:bg-white/90 transition-all duration-300 hover:scale-[1.02] text-base md:text-lg"
          >
            Agendar consultoria gratuita
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </motion.div>
      </div>
    </header>
  );
};

export default Hero;
