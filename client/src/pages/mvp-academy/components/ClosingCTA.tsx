import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CHECKOUT_URL = '#checkout'; // substituir pelo link Cakto

const ClosingCTA: React.FC = () => {
  return (
    <section className="py-32 md:py-40 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="text-primary/70 text-xs uppercase tracking-[0.3em] font-semibold mb-6">
            Um passo simples
          </p>
          <h2 className="text-5xl md:text-7xl font-black tracking-tight text-white mb-8 leading-tight">
            Você já consumiu o conteúdo.
            <br />
            O que falta é alguém do lado quando a coisa trava.
          </h2>
          <p className="text-xl text-white/50 leading-relaxed mb-14 max-w-2xl mx-auto">
            Essa é a comunidade. R$250/ano. Vagas abertas agora.
          </p>

          <a
            href={CHECKOUT_URL}
            className="group inline-flex items-center gap-3 bg-primary text-black font-semibold px-12 py-5 rounded-xl hover:bg-primary/90 transition-all duration-300 hover:scale-[1.02] text-lg neon-border"
          >
            Entrar na MVP Academy
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>

          <p className="mt-6 text-white/20 text-sm">
            Cohort começa assim que você entrar. Grupo de WhatsApp ativado no mesmo dia.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ClosingCTA;
