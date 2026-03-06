import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { EliteButton } from '../components/EliteDesign';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-48 pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/30 border border-white/5 text-slate-400 text-[10px] font-bold tracking-[0.3em] uppercase mb-12 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(245,158,11,0.5)]" /> 
              Protocolo de Elite Ativado
            </div>
            
            <h1 className="text-6xl md:text-[6.5rem] font-medium tracking-tight text-white mb-10 leading-[0.9] max-w-5xl mx-auto">
              Construa seu <br className="hidden md:block" />
              <span className="text-amber-500 italic font-serif">império digital</span> <br className="hidden md:block" />
              em 168 horas.
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-16 leading-relaxed font-light">
              O fim da paralisia por excesso de informação. <br className="hidden sm:block" /> 
              O MVP Academy entrega a execução que você nunca teve.
            </p>
            
            <div className="flex flex-col items-center gap-8">
              <EliteButton className="px-12 py-8 text-xl group h-20">
                QUERO ENTRAR NO BUNKER 
                <ArrowUpRight size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </EliteButton>
              
              <div className="flex flex-col items-center gap-3">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-[#020617] bg-slate-800 flex items-center justify-center overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-[#020617] bg-amber-500 flex items-center justify-center text-[10px] font-black text-black">
                    +240
                  </div>
                </div>
                <p className="text-xs text-slate-500 font-bold tracking-widest uppercase">Últimas 12 vagas do ciclo atual</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative lines */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-y-1/2" />
      <div className="absolute top-0 left-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-white/5 to-transparent -translate-x-1/2" />
    </section>
  );
};

export default Hero;
