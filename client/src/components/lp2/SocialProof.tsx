
import React from 'react';
import { TrendingUp, PlayCircle } from 'lucide-react';

const SocialProof: React.FC = () => {
  return (
    <section className="py-24 px-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-white text-2xl md:text-3xl font-black tracking-tighter uppercase">Resultados Reais</h2>
        <TrendingUp className="text-primary w-8 h-8" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 p-6 bg-card border border-white/5 rounded-2xl group cursor-pointer overflow-hidden">
          <div className="relative w-full aspect-video rounded-xl mb-6 bg-zinc-800 flex items-center justify-center overflow-hidden">
            <img 
              alt="Rafael Testimonial" 
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" 
              src="https://picsum.photos/seed/testimonial-dev/800/450"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
            <PlayCircle className="w-16 h-16 text-white relative z-10 group-hover:scale-110 transition-transform" />
            <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-primary text-background-dark text-[10px] font-black rounded uppercase tracking-widest">
              ALUNO EM DESTAQUE
            </div>
          </div>
          <p className="text-white/90 text-lg md:text-xl font-medium leading-relaxed italic">
            "Em 15 dias de mentoria fechei meu primeiro contrato de R$8.000,00 com uma clínica médica. A IA faz todo o trabalho."
          </p>
          <p className="text-primary text-sm font-black mt-3 uppercase tracking-tighter">— Rafael Meres</p>
        </div>
        
        <div className="grid grid-cols-1 gap-6">
          <div className="bg-card rounded-2xl p-4 border border-white/5 flex flex-col items-center">
            <div className="w-full aspect-square rounded-xl overflow-hidden mb-3 border border-white/10">
              <img 
                alt="Payment proof" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" 
                src="https://picsum.photos/seed/pix/400/400"
              />
            </div>
            <p className="text-[10px] font-black text-primary text-center uppercase tracking-[0.2em]">Recebido via Pix</p>
          </div>
          
          <div className="bg-card rounded-2xl p-4 border border-white/5 flex flex-col items-center">
            <div className="w-full aspect-square rounded-xl overflow-hidden mb-3 border border-white/10">
              <img 
                alt="Dashboard proof" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" 
                src="https://picsum.photos/seed/dash/400/400"
              />
            </div>
            <p className="text-[10px] font-black text-primary text-center uppercase tracking-[0.2em]">Faturamento Semanal</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
