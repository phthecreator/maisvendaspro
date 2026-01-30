
import React from 'react';
import { Check } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <header className="relative pt-24 pb-16 md:pt-48 md:pb-32 overflow-hidden px-4">
      {/* Background Terminal Effect */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none grid-bg"></div>
      
      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <p className="text-secondary font-black text-xs md:text-base uppercase tracking-[0.2em] mb-4">
          🚨 O FIM do programador que só sabe escrever código.<br/>
          ✨ O INÍCIO do Solucionador que fica rico.
        </p>
        
        <h1 className="font-mono text-white text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-black leading-[1.1] md:leading-[0.9] tracking-tighter mb-8 px-2">
          TRANSFORME-SE EM UMA<br/>
          <span className="text-primary neon-glow italic">SOFTWARE HOUSE</span><br/>
          DE UMA PESSOA SÓ
        </h1>
        
        <div className="max-w-2xl mx-auto mb-10 px-2">
          <p className="text-accent-yellow text-lg md:text-2xl font-bold leading-tight mb-4 uppercase">
            Domine IA, Ferramentas "Hacker" e Automação para construir e vender soluções de R$ 3k a R$ 15k/mês...
          </p>
          <p className="text-white/80 text-sm md:text-xl font-medium">
            ...mesmo que você nunca tenha escrito uma linha de código na vida.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 mb-12">
          {[
            'Sem depender de API oficial',
            'Sem precisar de dev sênior',
            'Sem levar meses'
          ].map((text, i) => (
            <div key={i} className="flex items-center gap-2 text-white/90 font-bold uppercase text-[10px] md:text-sm">
              <div className="bg-primary/20 p-1 rounded-full">
                <Check className="w-3 h-3 md:w-4 md:h-4 text-primary" />
              </div>
              {text}
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-4 px-2">
          <button 
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            className="pulse-neon w-full max-w-lg bg-primary text-black font-black text-base md:text-2xl py-5 md:py-6 rounded-xl uppercase tracking-wider hover:scale-105 transition-all active:scale-95"
          >
            GARANTIR MINHA VAGA AGORA<br/>
            <span className="text-[10px] md:text-xs opacity-70">TURMA FECHA EM 3 DIAS</span>
          </button>
          <div className="text-center">
            <p className="text-white/60 text-xs md:text-sm font-bold">↓ Apenas R$ 297 à vista (ou 12x de R$ 29,90)</p>
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mt-4 text-[9px] md:text-[10px] text-white/40 uppercase font-bold">
              <span>🔒 Compra Segura</span>
              <span className="hidden sm:inline">|</span>
              <span>✓ 7 Dias de Garantia</span>
              <span className="hidden sm:inline">|</span>
              <span>🎁 Acesso imediato</span>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-white/5 overflow-hidden">
          <p className="text-white/30 text-[9px] md:text-[10px] uppercase font-black tracking-widest mb-6">Método usado por alunos que atendem:</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 md:gap-16 opacity-30 grayscale contrast-125">
             {['Imobiliárias', 'Clínicas', 'Advocacia', 'E-commerce', 'Agências'].map((item) => (
               <span key={item} className="font-black text-sm sm:text-base md:text-xl italic uppercase whitespace-nowrap">{item}</span>
             ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
