import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ClosingCTA: React.FC = () => {
  const scrollToForm = () => {
    document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-32 md:py-40 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-2xl md:text-4xl font-black text-white leading-snug mb-6"
        >
          Sua agencia ja vende. Agora precisa de sistema.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          className="text-white/50 text-base md:text-lg mb-12 max-w-2xl mx-auto"
        >
          Agende uma consultoria gratuita. Nossos especialistas vao mapear seu negocio completo e mostrar o caminho.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
        >
          <button
            onClick={scrollToForm}
            className="group inline-flex items-center gap-3 bg-white text-black font-semibold px-10 py-4 rounded-xl hover:bg-white/90 transition-all duration-300 hover:scale-[1.02] text-base md:text-lg"
          >
            Quero minha consultoria gratuita
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ClosingCTA;
