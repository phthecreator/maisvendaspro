
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const benefits = [
  {
    title: "4 Aulas Ao Vivo Por Mês",
    desc: "Pedro e Murillo ensinam sem script, sem cortes. Você acompanha em tempo real e faz junto. Gravadas no grupo caso não possa ao vivo."
  },
  {
    title: "Do Zero ao Deploy",
    desc: "Saia de cada aula com projeto funcional em produção. Não teoria — código rodando, cliente podendo usar."
  },
  {
    title: "Pra Quem Não Tem Grana",
    desc: "Ferramentas 100% gratuitas no cardápio. Cursor free, Claude free tier, n8n self-hosted. Sem desculpa pra não começar."
  },
  {
    title: "Aprenda a Cobrar de Verdade",
    desc: "Como falar na ligação com o cliente. Como montar proposta. Como assinar contrato. Quanto cobrar por bot, site, automação."
  }
];

const Benefits: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-primary/[0.02] border-y border-white/5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-white text-3xl md:text-4xl font-black leading-tight tracking-tight mb-12">
          O que muda depois das <br className="md:hidden" />
          <span className="text-primary italic">4 aulas</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {benefits.map((benefit, i) => (
            <div key={i} className="flex gap-4 items-start">
              <CheckCircle2 className="text-primary w-6 h-6 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-white/90 text-lg leading-snug">
                  <span className="text-white font-black uppercase text-sm block mb-1 tracking-wider">{benefit.title}</span>
                  <span className="text-white/60">{benefit.desc}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
