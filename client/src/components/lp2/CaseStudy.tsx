
import React from 'react';
import { TrendingUp, Quote } from 'lucide-react';

const CaseStudy: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-primary/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-white text-3xl md:text-6xl font-black uppercase mb-4 tracking-tighter">
            📈 Agência B2B escala +55% em 60 dias
          </h2>
          <p className="text-primary text-xl font-bold uppercase tracking-widest">Enterprise OS — Case Real</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 items-center">
          <div className="lg:col-span-6 relative group">
            <div className="absolute -inset-4 bg-primary/20 blur-xl rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
                alt="Case Agência B2B"
                className="w-full aspect-video object-cover"
              />
              <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-md p-6 rounded-xl border border-primary/30 max-w-xs">
                <p className="text-primary font-black text-3xl">+R$ 100k/mês</p>
                <p className="text-white/60 text-xs font-bold uppercase tracking-widest">Receita adicional gerada</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-8">
            <div>
              <h4 className="text-white text-2xl font-black uppercase mb-4 italic">Agência de 8 pessoas em SP perdia leads todo dia.</h4>
              <p className="text-white/60 leading-relaxed text-lg">
                Time de SDR gastava 4 horas/dia qualificando leads manualmente. Tempo de resposta: mais de 4 horas. Quando ligavam, o cliente já tinha fechado com concorrente.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-primary font-black uppercase">O que implementamos</p>
              <div className="space-y-3">
                <p className="text-white flex items-center gap-2"><span className="text-primary font-bold">✅</span> SDR com IA respondendo em 30 segundos</p>
                <p className="text-white flex items-center gap-2"><span className="text-primary font-bold">✅</span> CRM integrado (Pipedrive) com pipeline automático</p>
                <p className="text-white flex items-center gap-2"><span className="text-primary font-bold">✅</span> Dashboard analytics em tempo real</p>
                <p className="text-white flex items-center gap-2"><span className="text-primary font-bold">✅</span> Automações de follow-up no WhatsApp</p>
              </div>
            </div>

            <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-xl">
              <div className="flex gap-4 items-start">
                <Quote className="text-primary w-12 h-12 opacity-50 shrink-0" />
                <p className="text-white text-lg font-medium italic leading-snug">
                  "Em 60 dias, nosso faturamento foi de R$ 180k pra R$ 280k. O sistema qualifica, agenda e acompanha sozinho. Nosso time agora foca em fechar."
                </p>
              </div>
              <p className="text-primary font-black text-right mt-4 uppercase text-sm">— Head of Sales, Agência B2B (SP)</p>
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
