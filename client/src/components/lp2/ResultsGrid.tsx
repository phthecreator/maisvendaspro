
import React from 'react';
import { DollarSign, MessageCircle, FileText, Layout, Users, Star } from 'lucide-react';

const proofs = [
  {
    title: "João P. - Gestor de Tráfego",
    text: '"Fechei R$ 4.500 com imobiliária. Antes eu só vendia tráfego."',
    value: "R$ 4.500 + R$ 450/mês",
    type: "Proposta Aceita",
    icon: FileText
  },
  {
    title: "Maria L. - Ex-Assistente Virtual",
    text: '"Cliente mandou: \'Esse robô atende melhor que meu vendedor\'. Renovei por mais 6 meses."',
    value: "R$ 3.200/mês recorrente",
    type: "Feedback Cliente",
    icon: MessageCircle
  },
  {
    title: "Carlos M. - Desenvolvedor Júnior",
    text: '"Antes: salário de R$ 2.800. Agora: 3 contratos somando R$ 11k/mês."',
    value: "R$ 11.000/mês",
    type: "Pix Recebido",
    icon: DollarSign
  },
  {
    title: "Fernanda S. - Marketeira",
    text: '"Criei meu primeiro CRM em 2 dias. Cliente ficou impressionado."',
    value: "R$ 2.800 (projeto)",
    type: "Automação OK",
    icon: Layout
  },
  {
    title: "Ricardo B. - Contador",
    text: '"Automatizei 40% do meu escritório. Agora vendo automação pros meus clientes também."',
    value: "R$ 6.500 (acumulado)",
    type: "Depoimento",
    icon: MessageCircle
  },
  {
    title: "Paula D. - Estudante",
    text: '"Primeira nota da minha vida: R$ 5.000. Tenho 22 anos e nunca tinha programado."',
    value: "R$ 5.000",
    type: "Nota Fiscal",
    icon: FileText
  }
];

const ResultsGrid: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-white text-3xl md:text-6xl font-black uppercase mb-4 tracking-tighter px-2">
            💰 "Isso Funciona. E Aqui Estão as Provas."
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-16 md:mb-20">
          {proofs.map((p, i) => (
            <div key={i} className="bg-card-dark border border-white/5 p-5 md:p-6 rounded-2xl group hover:border-primary/20 transition-all flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <span className="bg-primary/10 text-primary text-[9px] font-black px-2 py-1 rounded uppercase tracking-widest">{p.type}</span>
                <p.icon className="text-white/20 w-4 h-4 group-hover:text-primary transition-colors" />
              </div>
              <div className="w-full aspect-[4/3] bg-zinc-900 rounded-xl mb-4 md:mb-6 overflow-hidden relative">
                <img loading="lazy" src={`https://picsum.photos/seed/vibe-${i}/400/300`} className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" alt="Proof" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
              <h4 className="text-white font-black uppercase mb-2 text-xs md:text-sm">{p.title}</h4>
              <p className="text-white/60 text-xs md:text-sm italic mb-4 flex-1">{p.text}</p>
              <p className="text-primary font-black uppercase text-[10px] md:text-xs tracking-widest">💰 Valor: {p.value}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-20 pt-12 border-t border-white/5">
          <div className="text-center">
            <p className="text-primary text-4xl md:text-6xl font-black tracking-tighter">+347</p>
            <p className="text-white/40 text-[9px] font-black uppercase tracking-[0.2em] mt-1">Alunos faturando</p>
          </div>
          <div className="text-center">
            <p className="text-white text-4xl md:text-6xl font-black tracking-tighter">R$ 2.1M+</p>
            <p className="text-white/40 text-[9px] font-black uppercase tracking-[0.2em] mt-1">Em contratos fechados</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-accent-yellow mb-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="fill-current w-4 h-4 md:w-5 md:h-5" />)}
            </div>
            <p className="text-white text-3xl md:text-4xl font-black tracking-tighter">4.9/5</p>
            <p className="text-white/40 text-[9px] font-black uppercase tracking-[0.2em] mt-1">Satisfação</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsGrid;
