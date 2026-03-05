import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, ShieldCheck } from 'lucide-react';

const CHECKOUT_URL = 'https://pay.cakto.com.br/1b5n5m'; // Link exemplo ou final

const included = [
  'Trilhas modulares — Níveis 1 a 4',
  'Encontros semanais ao vivo (terças 19h)',
  'Cohort mensal de implementação',
  'Grupo privado no WhatsApp',
  'Indicações de trabalho para membros ativos',
  'Modelos de Projetos e Boilerplates',
  'Acesso prioritário à Mentoria 100x',
];

const Pricing: React.FC = () => {
  return (
    <section className="py-32 md:py-48 px-6 bg-[#020202]" id="pricing">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-20 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] uppercase tracking-widest font-bold mb-6">
            <ShieldCheck className="w-3 h-3" /> Secure_Checkout
          </div>
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-white">
            O Investimento.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="relative p-10 md:p-16 rounded-[2rem] border border-primary/20 bg-white/[0.02] backdrop-blur-3xl overflow-hidden"
        >
          {/* Decorative Glow */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />

          <div className="text-center mb-12">
            <p className="font-mono text-[10px] md:text-xs text-white/30 uppercase tracking-[0.4em] mb-4">
              Full_Access_Membership
            </p>
            <div className="flex items-end justify-center gap-3">
              <span className="text-8xl md:text-9xl font-black text-primary tracking-tighter leading-none glow-text">
                R$250
              </span>
              <span className="text-white/20 text-2xl font-bold mb-4 tracking-tight">/ano</span>
            </div>
            <p className="text-white/40 text-sm mt-4 font-medium italic">
              "O preço de um jantar para transformar sua carreira em IA."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {included.map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-3 rounded-xl border border-white/5 bg-white/[0.01]">
                <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-primary" />
                </div>
                <p className="text-white/60 text-sm leading-snug">{item}</p>
              </div>
            ))}
          </div>

          <a
            href={CHECKOUT_URL}
            className="group w-full inline-flex items-center justify-center gap-4 bg-primary text-black font-black px-10 py-6 rounded-2xl hover:bg-primary/90 transition-all duration-500 hover:scale-[1.02] text-xl md:text-2xl shadow-[0_20px_40px_rgba(0,255,136,0.2)]"
          >
            Entrar na MVP Academy agora
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-500" />
          </a>

          <div className="mt-8 flex items-center justify-center gap-6 text-[10px] md:text-xs font-mono text-white/20 uppercase tracking-widest">
            <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary/40 animate-pulse" /> 7_Day_Guarantee</span>
            <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary/40 animate-pulse" /> Instant_Access</span>
          </div>
        </motion.div>

        {/* Value Staircase (Positioning - Godin Style) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 p-8 rounded-2xl border border-white/[0.03] bg-white/[0.01]"
        >
          <p className="font-mono text-[9px] text-white/20 uppercase tracking-[0.5em] font-semibold mb-8 text-center">
            The_Value_Staircase
          </p>
          <div className="space-y-2">
            {[
              { step: 'YouTube (Chaos)', value: 'Tempo alto / Autonomia baixa', price: 'Grátis', active: false },
              { step: 'MVP Academy (System)', value: 'Tempo baixo / Autonomia alta', price: 'R$250/ano', active: true },
              { step: 'Mentoria 100x (Scale)', value: 'Personalizado / 1-on-1', price: 'R$15k', active: false },
            ].map((row, i) => (
              <div
                key={i}
                className={`flex flex-col md:flex-row md:items-center justify-between px-6 py-4 rounded-xl transition-all duration-500 ${
                  row.active
                    ? 'bg-primary/5 border border-primary/20 shadow-[0_0_20px_rgba(0,255,136,0.05)]'
                    : 'border border-white/5 opacity-40'
                }`}
              >
                <div>
                  <span className={`block font-bold text-sm ${row.active ? 'text-primary' : 'text-white'}`}>
                    {row.step}
                  </span>
                  <span className="text-[10px] text-white/40 uppercase tracking-wider">{row.value}</span>
                </div>
                <span className={`font-mono text-xs font-bold mt-2 md:mt-0 ${row.active ? 'text-primary' : 'text-white/30'}`}>
                  {row.price}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
