
import React from 'react';
import { ShieldCheck, Lock, Zap } from 'lucide-react';

interface Props {
  vagas: number;
  timeLeft: number;
}

const Pricing: React.FC<Props> = ({ vagas, timeLeft }) => {
  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <section className="py-24 px-4 bg-[#0c0c0c] border-t border-white/5" id="pricing">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-white text-3xl md:text-6xl font-black uppercase tracking-tighter mb-4 px-2">
            🚀 "ÚLTIMA CHAMADA: VIRE UM VIBE CODER AGORA"
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="space-y-6 md:space-y-8 order-2 lg:order-1 px-2">
            <h4 className="text-white text-xl md:text-2xl font-black uppercase italic mb-6 border-b border-primary pb-2 inline-block">RECAPITULANDO O QUE VOCÊ RECEBE:</h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center text-white/60 text-xs sm:text-sm">
                <p>✅ 6 Módulos Completos (50h+)</p>
                <p className="font-mono text-[10px]">R$ 997</p>
              </div>
              <div className="flex justify-between items-center text-white/60 text-xs sm:text-sm">
                <p>✅ Blackbook de Vendas</p>
                <p className="font-mono text-[10px]">R$ 497</p>
              </div>
              <div className="flex justify-between items-center text-white/60 text-xs sm:text-sm">
                <p>✅ Templates Prontos</p>
                <p className="font-mono text-[10px]">R$ 397</p>
              </div>
              <div className="flex justify-between items-center text-white/60 text-xs sm:text-sm">
                <p>✅ Gravações de Calls Reais</p>
                <p className="font-mono text-[10px]">R$ 297</p>
              </div>
              <div className="flex justify-between items-center text-white/60 text-xs sm:text-sm">
                <p>✅ Comunidade + Mentoria (6 meses)</p>
                <p className="font-mono text-[10px]">R$ 1.182</p>
              </div>
              <div className="flex justify-between items-center text-secondary font-black text-xs sm:text-sm">
                <p>✅ Sessão Estratégica 1-on-1 (Relâmpago)</p>
                <p className="font-mono text-[10px]">R$ 997</p>
              </div>
              <div className="h-px bg-white/10 my-4"></div>
              <div className="flex justify-between items-center text-white font-black text-lg md:text-xl">
                <p>VALOR TOTAL:</p>
                <p className="font-mono">R$ 4.367</p>
              </div>
            </div>
          </div>

          <div className="bg-card-dark border-4 border-primary/50 p-6 sm:p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] shadow-[0_0_60px_rgba(0,255,136,0.1)] relative overflow-hidden order-1 lg:order-2">
            <div className="absolute top-0 right-0 bg-primary text-black font-black px-6 md:px-8 py-2 md:py-3 uppercase text-[9px] md:text-xs rotate-12 translate-x-6 md:translate-x-8 translate-y-2 md:translate-y-4">93% OFF</div>
            
            <p className="text-white/40 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] mb-4 md:mb-6">VOCÊ PAGA HOJE:</p>
            
            <div className="mb-8 md:mb-10 text-center">
              <p className="text-white/60 text-base md:text-lg line-through decoration-urgency italic opacity-40 mb-2">R$ 4.367,00</p>
              <h2 className="text-primary text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter glow-text leading-none mb-4">R$ 297</h2>
              <p className="text-white text-lg md:text-xl font-bold uppercase">(ou 12x de R$ 29,90)</p>
            </div>

            <div className="space-y-4 mb-8 md:mb-10">
              <button className="pulse-neon w-full bg-primary text-black font-black text-base md:text-2xl py-5 md:py-6 rounded-2xl uppercase tracking-widest transition-transform hover:scale-105 active:scale-95">
                🚀 SIM, QUERO MINHA VAGA AGORA
              </button>
              <p className="text-center text-white/40 text-[9px] md:text-[10px] font-bold uppercase tracking-widest">↓ Acesso liberado em 2 minutos</p>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center border-t border-white/5 pt-6 md:pt-8 mb-6 md:mb-8">
              <div>
                <ShieldCheck className="text-primary w-4 h-4 md:w-5 md:h-5 mx-auto mb-1 md:mb-2" />
                <p className="text-white/60 text-[7px] md:text-[8px] font-black uppercase tracking-widest leading-tight">Garantia<br/>7 dias</p>
              </div>
              <div>
                <Lock className="text-primary w-4 h-4 md:w-5 md:h-5 mx-auto mb-1 md:mb-2" />
                <p className="text-white/60 text-[7px] md:text-[8px] font-black uppercase tracking-widest leading-tight">Pagamento<br/>100% Seguro</p>
              </div>
              <div>
                <Zap className="text-primary w-4 h-4 md:w-5 md:h-5 mx-auto mb-1 md:mb-2" />
                <p className="text-white/60 text-[7px] md:text-[8px] font-black uppercase tracking-widest leading-tight">Acesso<br/>Imediato</p>
              </div>
            </div>

            <div className="bg-urgency/10 border border-urgency/20 p-4 rounded-xl text-center flex flex-col gap-1 md:gap-2">
              <p className="text-urgency font-black uppercase text-[10px]">⏰ OFERTA EXPIRA EM:</p>
              <p className="text-white font-mono text-2xl md:text-3xl font-black">[{formatTime(timeLeft)}]</p>
              <p className="text-white/60 text-[8px] md:text-[10px] font-black uppercase tracking-widest mt-1">Restam {vagas} vagas nesta turma</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
