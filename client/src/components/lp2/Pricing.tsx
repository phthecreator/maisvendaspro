
import React from 'react';

interface PricingProps {
  vagas: number;
  maxVagas: number;
  turma: number;
}

const Pricing: React.FC<PricingProps> = ({ vagas, maxVagas, turma }) => {
  const percentage = (vagas / maxVagas) * 100;

  return (
    <section id="pricing" className="py-24 px-6 bg-background border-t border-white/10 scroll-mt-20">
      <div className="max-w-xl mx-auto p-10 md:p-14 rounded-[2.5rem] bg-gradient-to-b from-card-dark to-black border-2 border-primary/30 relative overflow-hidden shadow-[0_0_50px_rgba(70,236,19,0.1)]">
        
        {/* Scarcity Banner Dinâmico */}
        <div className="absolute top-0 right-0 px-8 py-3 bg-primary text-background-dark text-[10px] font-black tracking-[0.3em] uppercase rotate-12 translate-x-10 translate-y-6 shadow-xl">
          TURMA {turma.toString().padStart(2, '0')}
        </div>

        <div className="text-center mb-12">
          <p className="text-white/40 text-base line-through decoration-red-500/50 mb-1 font-medium italic">De R$ 15.000,00</p>
          <p className="text-white text-xs uppercase tracking-[0.3em] mb-6 font-bold">Por apenas 12x de</p>
          
          <div className="flex items-center justify-center gap-1 mb-2">
            <span className="text-white text-3xl font-black self-start mt-4">R$</span>
            <span className="text-primary text-8xl md:text-9xl font-black tracking-tighter glow-text">80</span>
            <span className="text-white text-3xl font-black self-end mb-4">,00</span>
          </div>
          
          <p className="text-white/50 text-xs font-bold uppercase tracking-widest">Ou R$ 700,00 à vista no PIX</p>
        </div>

        {/* Progress Bar Real Time */}
        <div className="space-y-4 mb-12">
          <div className="w-full bg-white/5 rounded-full h-4 p-1 border border-white/10 relative">
            <div 
              className="bg-primary h-full rounded-full transition-all duration-1000 ease-out shadow-[0_0_15px_#46ec13]"
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-[11px] font-black uppercase tracking-[0.2em]">
            <span className="text-white/40">Status da Turma {turma}</span>
            <span className="text-primary animate-pulse">{vagas} / {maxVagas} PREENCHIDAS</span>
          </div>
        </div>

        <button className="glow-primary flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-2xl h-16 md:h-20 bg-primary text-background-dark text-xl md:text-2xl font-black leading-normal tracking-wide uppercase transition-all hover:scale-[1.02] active:scale-95">
          QUERO MINHA VAGA AGORA
        </button>
        
        <p className="mt-6 text-center text-white/30 text-[9px] uppercase tracking-widest font-medium">
          Sistema de Vagas Auditado • Atualizado em Tempo Real
        </p>
      </div>
    </section>
  );
};

export default Pricing;
