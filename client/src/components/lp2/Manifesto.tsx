
import React from 'react';
import { ShieldCheck } from 'lucide-react';

const Manifesto: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-[#0e0e0e] border-y border-white/5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-white text-3xl md:text-6xl font-black uppercase tracking-tighter text-center mb-16">
          A GENTE CAMINHOU MUITO PRA CHEGAR AQUI
        </h2>

        <div className="space-y-8 text-white/70 text-lg md:text-xl font-medium leading-relaxed mb-16">
          <p>Deixa eu ser direto com você:</p>
          <p>
            <span className="text-primary font-black uppercase">Pedro</span> trabalhou com lançamento, passou 2 anos no Vale do Silício,
            ficou 3 anos mergulhado em IA quando ninguém ainda falava nisso.
            Hoje tem um time de agentes que vai do zero ao deploy — e ele só orquestra.
          </p>

          <p>
            <span className="text-primary font-black uppercase">Murillo</span> passou por tudo que existe no digital:
            gestor de tráfego, lançamentos, estratégias de todo tipo.
            Até entender que a virada real estava na IA.
            Hoje é especialista full stack com prompt engineering no sangue.
          </p>

          <div className="space-y-6 pt-6">
            <p className="text-white font-black uppercase tracking-widest text-sm">Juntos, hoje fazemos:</p>
            <div className="flex gap-4">
               <span className="text-primary text-lg font-black">—</span>
               <p><span className="text-white font-black">PROJETOS REAIS:</span> Bot de WhatsApp para indústria de café, SDR inteligente para imobiliária, catálogo digital para empresa de 30 anos.</p>
            </div>
            <div className="flex gap-4">
               <span className="text-primary text-lg font-black">—</span>
               <p><span className="text-white font-black">R$ 20K/MÊS:</span> Usando Claude Code, AIOS e automações — o mesmo método que vamos te ensinar por R$ 250.</p>
            </div>
            <div className="flex gap-4">
               <span className="text-primary text-lg font-black">—</span>
               <p><span className="text-white font-black">DO ZERO AO DEPLOY:</span> Sem depender de dev raiz, sem fila de espera, sem orçamento absurdo.</p>
            </div>
          </div>
        </div>

        <div className="text-center">
           <div className="bg-white/5 p-10 rounded-3xl border border-white/10 mb-8">
             <p className="text-white text-xl md:text-2xl italic font-medium leading-relaxed">
               "Não somos gurus de internet. Somos dois caras que bateram muito,
               encontraram o atalho, e queremos mostrar pra você.
               A galera só tem que estar no grupo."
             </p>
             <p className="text-primary font-black uppercase text-sm mt-6 tracking-widest">— Pedro & Murillo</p>
           </div>
           <div className="inline-flex items-center gap-3 bg-accent-yellow px-6 py-3 rounded-xl text-black font-black uppercase tracking-widest">
             <ShieldCheck className="w-6 h-6" />
             100% PRÁTICO. 100% AO VIVO. 100% BASEADO NO QUE A GENTE FAZ.
           </div>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
