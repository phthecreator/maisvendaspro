
import React from 'react';
import { XCircle, Rocket } from 'lucide-react';

const PainVsGain: React.FC = () => {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">
      <div className="mb-12">
        <h2 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-tighter">
          Você Está Preso na<br />
          <span className="text-primary/70 italic">Era das Cavernas</span>
        </h2>
        <div className="h-1.5 w-16 bg-primary mt-4 rounded-full shadow-[0_0_10px_#46ec13]"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-5 p-8 rounded-2xl bg-white/5 border border-white/10 group hover:border-red-500/30 transition-colors">
          <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center">
            <XCircle className="text-red-500 w-7 h-7" />
          </div>
          <div>
            <h3 className="text-white text-xl font-black mb-2 uppercase">Dev Tradicional</h3>
            <p className="text-white/50 text-base leading-relaxed">
              Escravo de sintaxe, corrigindo bugs infinitos em troca de um salário estagnado que não paga sua liberdade.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col gap-5 p-8 rounded-2xl bg-primary/5 border border-primary/20 group hover:border-primary/50 transition-colors relative overflow-hidden">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shadow-[0_0_15px_rgba(70,236,19,0.2)]">
            <Rocket className="text-primary w-7 h-7" />
          </div>
          <div>
            <h3 className="text-primary text-xl font-black mb-2 uppercase">IA Money Maker</h3>
            <p className="text-white/70 text-base leading-relaxed">
              Faturando <span className="text-primary font-black glow-text">R$20k/mês</span> criando automações inteligentes que trabalham 24/7 para clientes de alto ticket.
            </p>
          </div>
          
          {/* subtle glow */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 blur-2xl rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default PainVsGain;
