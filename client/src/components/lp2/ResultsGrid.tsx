
import React from 'react';
import { DollarSign, MessageCircle, FileText, Layout, Users, Star } from 'lucide-react';

const proofs = [
  {
    title: "Agência de Marketing — SP",
    text: '"O SDR com IA triplicou nossas reuniões agendadas. Tempo de resposta caiu de 4 horas pra 30 segundos."',
    value: "+55% faturamento mensal",
    type: "Enterprise OS",
    icon: DollarSign
  },
  {
    title: "Rede de Consultórios — 5 unidades",
    text: '"No-show caiu de 60% pra 12%. São 120 pacientes novos em 3 meses que não teríamos sem o sistema."',
    value: "R$ 72.000 receita adicional",
    type: "Specialist Squad",
    icon: MessageCircle
  },
  {
    title: "SaaS B2B — $500k ARR",
    text: '"Automatizamos 75% das operações repetitivas. A equipe agora foca no que importa: produto e clientes."',
    value: "$156k economia anual",
    type: "Enterprise OS",
    icon: Layout
  },
  {
    title: "E-commerce de Moda — RJ",
    text: '"Landing page convertendo 8.2%. Dashboard mostra exatamente de onde vem cada venda. Controle total."',
    value: "8.2% taxa de conversão",
    type: "Specialist Squad",
    icon: FileText
  },
  {
    title: "Escritório Contábil — MG",
    text: '"O CRM integrado com WhatsApp mudou nossa operação. Zero lead esquecido. Pipeline sempre atualizado."',
    value: "R$ 45k/mês em novos contratos",
    type: "Enterprise OS",
    icon: DollarSign
  },
  {
    title: "Startup Fintech — SP",
    text: '"Entrega em 7 dias como prometido. Performance acima de 90 no Lighthouse. Documentação impecável."',
    value: "MVP em 7 dias",
    type: "Specialist Squad",
    icon: Users
  }
];

const ResultsGrid: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-white text-3xl md:text-6xl font-black uppercase mb-4 tracking-tighter px-2">
            💰 Resultados Documentados de Clientes Reais
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
            <p className="text-primary text-4xl md:text-6xl font-black tracking-tighter">15+</p>
            <p className="text-white/40 text-[9px] font-black uppercase tracking-[0.2em] mt-1">Clientes em produção</p>
          </div>
          <div className="text-center">
            <p className="text-white text-4xl md:text-6xl font-black tracking-tighter">$180k</p>
            <p className="text-white/40 text-[9px] font-black uppercase tracking-[0.2em] mt-1">Revenue mensal dos clientes</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-accent-yellow mb-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="fill-current w-4 h-4 md:w-5 md:h-5" />)}
            </div>
            <p className="text-white text-3xl md:text-4xl font-black tracking-tighter">4.8/5</p>
            <p className="text-white/40 text-[9px] font-black uppercase tracking-[0.2em] mt-1">NPS clientes em produção</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsGrid;
