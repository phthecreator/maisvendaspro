import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';
import { GlassCard } from '../components/EliteDesign';

const Wall: React.FC = () => {
  return (
    <section className="py-32 border-y border-white/5 bg-[#020617] relative">
      <div className="max-w-7xl mx-auto px-8">
        <GlassCard className="p-12 md:p-24 relative overflow-hidden group">
          {/* Accent glow */}
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-amber-500/5 blur-[100px] rounded-full group-hover:bg-amber-500/10 transition-colors duration-1000" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
            <div>
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-amber-500 font-bold uppercase tracking-[0.3em] text-xs mb-4 block"
              >
                O Filtro de Sangue
              </motion.span>
              
              <h2 className="text-4xl md:text-[3.5rem] font-medium text-white mb-8 tracking-tight max-w-lg leading-[1.1]">
                O sucesso é <span className="italic font-serif text-amber-500">solitário</span> por um motivo.
              </h2>
              
              <p className="text-xl text-slate-400 mb-12 leading-relaxed max-w-lg">
                Excluímos quem busca "atalhos mágicos" ou "dicas rápidas". Este ambiente foi desenhado para quem prioriza a <span className="text-white font-medium">soberania financeira</span> acima de tudo.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Quem só consome conteúdos', 'Quem espera o momento perfeito', 'Quem tem medo de investir', 'Quem busca aprovação externa'].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 p-4 bg-slate-900/60 rounded-xl border border-white/5 text-[11px] font-bold tracking-widest uppercase text-slate-500 group-hover:border-amber-500/20 transition-colors"
                  >
                    <AlertCircle size={14} className="text-amber-500/50" /> {item}
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col justify-center items-center lg:items-end text-center lg:text-right border-l border-white/5 lg:pl-20">
              <div className="w-16 h-1 bg-amber-500 mb-10" />
              <blockquote className="text-4xl md:text-5xl font-medium text-white italic leading-tight mb-8 font-serif">
                "Pessoas como nós buscam resultados, não <br /> certificados."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-8 bg-slate-800" />
                <p className="text-slate-500 text-[10px] font-bold tracking-[0.4em] uppercase">The Executive Creed</p>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
};

export default Wall;
