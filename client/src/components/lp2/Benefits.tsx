
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const benefits = [
  {
    title: "Venda Automações",
    desc: "Como encontrar clientes dispostos a pagar R$5k+ por um robô simples."
  },
  {
    title: "Portfólio em 7 Dias",
    desc: "Saia do zero com 3 projetos de IA prontos para o mercado."
  },
  {
    title: "Precificação de Elite",
    desc: "Como cobrar pelo valor gerado e não por hora/homem."
  },
  {
    title: "Networking Secreto",
    desc: "Acesso ao grupo onde os maiores negócios de IA do Brasil acontecem."
  }
];

const Benefits: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-primary/[0.02] border-y border-white/5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-white text-3xl md:text-4xl font-black leading-tight tracking-tight mb-12">
          A Mentoria de R$15 Mil <br className="md:hidden" />
          Que Virou <span className="text-primary italic">Trampolim</span>
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
