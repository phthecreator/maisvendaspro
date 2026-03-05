import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CHECKOUT_URL = '#checkout'; // substituir pelo link Cakto

const Hero: React.FC = () => {
  return (
    <header className="relative pt-32 pb-24 md:pt-48 md:pb-40 px-6 overflow-hidden grid-bg">
      {/* Radial green glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-primary/70 text-xs md:text-sm uppercase tracking-[0.3em] font-semibold mb-6"
        >
          MVP Academy — Vagas abertas
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-8 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent leading-tight"
        >
          Você já consumiu conteúdo suficiente.
          <br />
          Está na hora de implementar.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          className="text-xl md:text-2xl text-white/60 leading-relaxed max-w-3xl mx-auto mb-6"
        >
          50 vídeos assistidos. Zero projetos no ar.
          <br />
          Não é falta de informação — é falta de implementação assistida.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
          className="text-base text-white/30 max-w-2xl mx-auto mb-14"
        >
          Comunidade de implementação com IA. Cohort semanal. Trilhas modulares.
          Do zero ao deploy — com tutores que já fizeram isso.
          R$250/ano.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={CHECKOUT_URL}
            className="group inline-flex items-center gap-3 bg-primary text-black font-semibold px-10 py-4 rounded-xl hover:bg-primary/90 transition-all duration-300 hover:scale-[1.02] text-base md:text-lg neon-border"
          >
            Entrar na MVP Academy — R$250/ano
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
          className="mt-6 text-white/20 text-sm"
        >
          = R$20/mês. Menos que uma pizza por mês.
        </motion.p>
      </div>
    </header>
  );
};

export default Hero;
