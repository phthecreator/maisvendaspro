import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

const CHECKOUT_URL = '#checkout'; // substituir pelo link Cakto

const included = [
  'Trilhas modulares — Níveis 1 a 4',
  'Encontros semanais ao vivo (terças 19h)',
  'Cohort mensal de implementação',
  'Grupo privado no WhatsApp',
  'Indicações de trabalho para membros ativos',
  'Premiações mensais',
  'Acesso prioritário à Mentoria quando disponível',
];

const Pricing: React.FC = () => {
  return (
    <section className="py-32 md:py-40 px-6" id="pricing">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-16 text-center"
        >
          <p className="text-primary/70 text-xs uppercase tracking-[0.3em] font-semibold mb-4">
            Sem mistério
          </p>
          <h2 className="text-5xl md:text-7xl font-black tracking-tight text-white">
            Preço
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          className="p-10 md:p-12 rounded-2xl border border-primary/20 bg-white/[0.03]"
        >
          <div className="text-center mb-10">
            <p className="text-white/40 text-sm mb-2">Acesso completo — 1 ano</p>
            <div className="flex items-end justify-center gap-2 mb-2">
              <span className="text-7xl md:text-8xl font-black text-primary tracking-tight glow-text">
                R$250
              </span>
              <span className="text-white/40 text-xl mb-4">/ano</span>
            </div>
            <p className="text-white/30 text-sm">
              = R$20/mês = R$0,66/dia
            </p>
          </div>

          <div className="space-y-4 mb-10">
            {included.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-5 h-5 rounded-md bg-primary/[0.12] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <p className="text-white/60 text-base">{item}</p>
              </div>
            ))}
          </div>

          <a
            href={CHECKOUT_URL}
            className="group w-full inline-flex items-center justify-center gap-3 bg-primary text-black font-semibold px-10 py-4 rounded-xl hover:bg-primary/90 transition-all duration-300 hover:scale-[1.02] text-base md:text-lg neon-border"
          >
            Entrar na MVP Academy agora
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>

          <p className="text-center text-white/20 text-sm mt-6">
            Vagas abertas. Cohort começa assim que você entrar.
          </p>
        </motion.div>

        {/* Escada de valor */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
          className="mt-12 p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02]"
        >
          <p className="text-white/30 text-xs uppercase tracking-[0.3em] font-semibold mb-6 text-center">
            Onde isso se encaixa
          </p>
          <div className="space-y-3 font-mono text-sm">
            {[
              { step: 'YouTube', price: 'Grátis', active: false },
              { step: 'MVP Academy', price: 'R$250/ano', active: true },
              { step: 'Mentoria', price: 'R$15k', active: false },
              { step: 'Implementação DFY', price: 'High-ticket', active: false },
            ].map((row, i) => (
              <div
                key={i}
                className={`flex items-center justify-between px-4 py-3 rounded-lg ${
                  row.active
                    ? 'bg-primary/[0.06] border border-primary/30'
                    : 'border border-transparent'
                }`}
              >
                <span className={row.active ? 'text-primary font-bold' : 'text-white/30'}>
                  {row.step}
                </span>
                <span className={row.active ? 'text-primary' : 'text-white/20'}>{row.price}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
