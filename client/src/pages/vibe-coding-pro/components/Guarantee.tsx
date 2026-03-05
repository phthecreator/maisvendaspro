
import React from 'react';
import { ShieldCheck } from 'lucide-react';

const Guarantee: React.FC = () => {
  return (
    <section className="py-24 px-8 text-center flex flex-col items-center">
      <div className="w-28 h-28 mb-8 relative flex items-center justify-center">
        <div className="absolute inset-0 bg-accent-gold/20 blur-3xl rounded-full"></div>
        <ShieldCheck className="w-24 h-24 text-accent-gold relative z-10 drop-shadow-[0_0_15px_rgba(255,215,0,0.5)]" />
      </div>
      
      <h2 className="text-white text-3xl md:text-4xl font-black mb-6 tracking-tight">Eu Ponho Minha Conta em Cheque</h2>
      <p className="text-white/50 text-lg leading-relaxed max-w-lg font-medium">
        Assista a mentoria por 7 dias. Se você não achar que ela vale 10x o que pagou, eu devolvo 100% do seu dinheiro. Sem perguntas, sem burocracia.
      </p>
    </section>
  );
};

export default Guarantee;
