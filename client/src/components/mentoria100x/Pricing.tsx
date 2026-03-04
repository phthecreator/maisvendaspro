import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

const Pricing: React.FC = () => {
  const scrollToForm = () => {
    document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
  };

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
          Investimento
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* DFY anchor */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="p-8 md:p-10 rounded-2xl border border-white/[0.04] bg-white/[0.02] opacity-50"
          >
            <span className="text-white/30 text-xs uppercase tracking-[0.2em] font-bold">
              Done For You
            </span>
            <p className="text-white/30 text-3xl md:text-4xl font-black mt-6 line-through">
              a partir de R$50.000
            </p>
            <p className="text-white/20 text-base mt-6 leading-relaxed">
              Nos fazemos tudo por voce. Para operacoes maiores com time dedicado.
            </p>
          </motion.div>

          {/* DWY main */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="p-8 md:p-10 rounded-2xl border border-white/[0.15] bg-white/[0.04] relative"
          >
            <div className="absolute -top-3 left-8 inline-flex items-center gap-1.5 px-4 py-1.5 bg-white text-black text-xs font-bold uppercase tracking-wider rounded-full">
              <Star className="w-3 h-3" />
              Recomendado
            </div>
            <span className="text-white/50 text-xs uppercase tracking-[0.2em] font-bold">
              Done With You
            </span>
            <p className="text-white text-4xl md:text-5xl font-black mt-6">
              R$15.000
            </p>
            <p className="text-white/50 text-base mt-6 leading-relaxed">
              90 dias de mentoria 1:1 com implantacao guiada. Tudo instalado e funcionando.
            </p>
            <button
              onClick={scrollToForm}
              className="mt-8 w-full inline-flex items-center justify-center gap-2 bg-white text-black font-semibold px-6 py-4 rounded-xl hover:bg-white/90 transition-all duration-300 hover:scale-[1.02] text-sm"
            >
              Aplicar para a Mentoria 100X
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Founders */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
            className="p-8 md:p-10 rounded-2xl border border-white/[0.08] bg-white/[0.03]"
          >
            <span className="text-white/50 text-xs uppercase tracking-[0.2em] font-bold">
              Founders (5 vagas)
            </span>
            <p className="text-white text-4xl md:text-5xl font-black mt-6">
              R$10.000
            </p>
            <p className="text-white/50 text-base mt-6 leading-relaxed">
              Mesmo escopo, preco de early adopter. Vagas limitadas.
            </p>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
          className="text-white/30 text-sm text-center mt-10"
        >
          Aplicacao = filtro. Se nao fizer sentido, a gente te direciona.
        </motion.p>
      </div>
    </section>
  );
};

export default Pricing;
