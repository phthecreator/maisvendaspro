
import React from 'react';
import { TrendingUp, Quote } from 'lucide-react';

const CaseStudy: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-blue-900/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-white text-3xl md:text-6xl font-black uppercase mb-4 tracking-tighter">
            📈 "De ZERO a R$ 8.000 em 15 Dias"
          </h2>
          <p className="text-primary text-xl font-bold uppercase tracking-widest">O Case do Raphael Meres</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 items-center">
          <div className="lg:col-span-6 relative group">
            <div className="absolute -inset-4 bg-primary/20 blur-xl rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop" 
                alt="Case Raphael"
                className="w-full aspect-video object-cover"
              />
              <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-md p-6 rounded-xl border border-primary/30 max-w-xs">
                <p className="text-primary font-black text-3xl">R$ 8.000,00</p>
                <p className="text-white/60 text-xs font-bold uppercase tracking-widest">Faturamento em 15 dias</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-8">
            <div>
              <h4 className="text-white text-2xl font-black uppercase mb-4 italic">Raphael não era um gênio da programação.</h4>
              <p className="text-white/60 leading-relaxed text-lg">
                Ele era só mais um cara que sabia usar ChatGPT pra fazer uns bots simples. Cobrava R$ 300, R$ 500... quando conseguia vender.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-primary font-black uppercase">O que mudou?</p>
              <div className="space-y-3">
                <p className="text-white flex items-center gap-2"><span className="text-urgency font-bold">❌</span> Parou de vender "bot de WhatsApp"</p>
                <p className="text-white flex items-center gap-2"><span className="text-primary font-bold">✅</span> Começou a vender "Comercial Automatizado"</p>
                <p className="text-white flex items-center gap-2"><span className="text-urgency font-bold">❌</span> Parou de cobrar por hora</p>
                <p className="text-white flex items-center gap-2"><span className="text-primary font-bold">✅</span> Começou a cobrar por resultado</p>
              </div>
            </div>

            <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-xl">
              <div className="flex gap-4 items-start">
                <Quote className="text-primary w-12 h-12 opacity-50 shrink-0" />
                <p className="text-white text-lg font-medium italic leading-snug">
                  "Eu não sabia nem fazer um 'for loop'. Mas entendi que não precisa. A IA escreve o código. Eu vendo a solução. O robô trabalha. Eu lucro."
                </p>
              </div>
              <p className="text-primary font-black text-right mt-4 uppercase text-sm">— Raphael Meres, Vibe Coder</p>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <button className="text-white/40 font-black uppercase tracking-[0.2em] border-b border-white/10 pb-1 hover:text-primary transition-colors">
            [VER OUTROS CASES DE SUCESSO ↓]
          </button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
