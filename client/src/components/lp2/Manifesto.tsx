
import React from 'react';
import { ShieldCheck, Info } from 'lucide-react';

const Manifesto: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-[#0e0e0e] border-y border-white/5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-white text-3xl md:text-6xl font-black uppercase tracking-tighter text-center mb-16">
          QUANDO FALAMOS EM "HACK", FALAMOS DE LIBERDADE
        </h2>

        <div className="space-y-8 text-white/70 text-lg md:text-xl font-medium leading-relaxed mb-16">
          <p>Deixa eu ser claro com você:</p>
          <p>Quando falamos em <span className="text-primary font-black uppercase">"ferramentas hack"</span> ou <span className="text-primary font-black uppercase">"APIs não-oficiais"</span>, não estamos falando de crime.</p>
          
          <div className="space-y-6 pt-6">
            <p className="text-white font-black uppercase tracking-widest text-sm">Estamos falando de:</p>
            <div className="flex gap-4">
               <span className="text-primary text-lg font-black">—</span>
               <p><span className="text-white font-black">LIBERDADE TECNOLÓGICA:</span> Não ficar refém de uma plataforma que muda as regras do jogo.</p>
            </div>
            <div className="flex gap-4">
               <span className="text-primary text-lg font-black">—</span>
               <p><span className="text-white font-black">DEMOCRATIZAÇÃO:</span> Permitir que o pequeno tenha a MESMA automação que a multinacional.</p>
            </div>
            <div className="flex gap-4">
               <span className="text-primary text-lg font-black">—</span>
               <p><span className="text-white font-black">RESILIÊNCIA:</span> Ensinar você a SEMPRE encontrar um caminho.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
           <div className="bg-urgency/5 border border-urgency/20 p-6 rounded-2xl">
             <p className="text-urgency font-black uppercase text-xs mb-4">ERRADO (e ilegal):</p>
             <ul className="text-white/40 text-sm space-y-1">
               <li>• Invadir sistemas</li>
               <li>• Roubar dados</li>
               <li>• Fazer phishing</li>
               <li>• Quebrar criptografia</li>
             </ul>
           </div>
           <div className="bg-primary/5 border border-primary/20 p-6 rounded-2xl">
             <p className="text-primary font-black uppercase text-xs mb-4">CERTO (o que ensinamos):</p>
             <ul className="text-white/80 text-sm space-y-1 font-bold">
               <li>• Scraping de dados públicos</li>
               <li>• Usar APIs reversas oficiais</li>
               <li>• Automatizar tarefas repetitivas</li>
               <li>• Integrar sistemas que não conversam</li>
             </ul>
           </div>
        </div>

        <div className="text-center">
           <div className="bg-white/5 p-10 rounded-3xl border border-white/10 mb-8">
             <p className="text-white text-xl md:text-2xl italic font-medium leading-relaxed">
               "Nosso trabalho é transformar você em alguém que NÃO aceita um 'não dá pra fazer' como resposta. Sempre há um jeito. Sempre."
             </p>
           </div>
           <div className="inline-flex items-center gap-3 bg-accent-yellow px-6 py-3 rounded-xl text-black font-black uppercase tracking-widest">
             <ShieldCheck className="w-6 h-6" />
             100% ÉTICO. 100% LEGAL. 100% PODEROSO.
           </div>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
