
import React from 'react';
import { CheckSquare, Zap } from 'lucide-react';

const MethodReveal: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-[#0c0c0c] border-y border-white/5">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-white text-3xl md:text-6xl font-black uppercase tracking-tighter text-center mb-16">
          "A Verdade Dura Que Ninguém Conta:"
        </h2>

        <div className="bg-card-dark border-2 border-primary/40 p-8 md:p-12 rounded-3xl relative overflow-hidden mb-16">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Zap className="w-48 h-48 text-primary" />
          </div>
          
          <p className="text-white/60 text-lg md:text-xl italic mb-10 leading-relaxed">
            Enquanto você tenta aprender a sintaxe do Python lendo documentação por 6 meses...
          </p>
          
          <h4 className="text-primary text-2xl font-black uppercase mb-8">...o Vibe Coder já:</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12 mb-10">
            {[
              'Usou a IA (Claude/Cursor) para gerar 90% do código',
              'Integrou WhatsApp usando API não-oficial (Evolution)',
              'Raspou dados do concorrente do cliente (web scraping)',
              'Montou um CRM automatizado no N8N',
              'Entregou a solução em 48 horas',
              'Emitiu a nota de R$ 5.000'
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-white font-bold">
                <CheckSquare className="text-primary w-6 h-6 shrink-0" />
                {item}
              </div>
            ))}
          </div>

          <p className="text-white/40 text-sm font-bold uppercase tracking-widest">
            Tudo isso enquanto você ainda estava escolhendo qual curso fazer.
          </p>
        </div>

        <div className="bg-accent-yellow p-8 md:p-12 rounded-2xl transform md:-rotate-1 text-black">
          <h3 className="text-3xl md:text-5xl font-black uppercase mb-6 leading-none">
            ⚡ "NÃO É SOBRE SABER CODAR. É SOBRE SABER RESOLVER."
          </h3>
          <div className="space-y-4 text-lg md:text-xl font-bold uppercase">
            <p><span className="opacity-50">Se a porta está fechada (sem API)</span> → Entramos pela janela (Scraping)</p>
            <p><span className="opacity-50">Se o sistema é caro</span> → Criamos um clone funcional barato</p>
            <p><span className="opacity-50">Se a empresa não sabe o que precisa</span> → Diagnosticamos e vendemos a cura</p>
          </div>
          <p className="text-4xl md:text-6xl font-black mt-8 text-right italic">Isso é Vibe Coding.</p>
        </div>
      </div>
    </section>
  );
};

export default MethodReveal;
