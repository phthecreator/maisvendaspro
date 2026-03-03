
import React from 'react';
import { Layers, Users, Workflow, Target, TrendingUp, BookOpen } from 'lucide-react';

const modules = [
  {
    icon: BookOpen,
    title: "MÓDULO 1: FUNDAMENTOS DE ORQUESTRAÇÃO",
    result: "Entender o mindset de orquestrador vs programador",
    items: [
      "O que é Methodology as a System (MaaS)",
      "AIOS Framework: arquitetura e agentes",
      "Claude + AIOS: a dupla perfeita",
      "Setup completo do ambiente"
    ]
  },
  {
    icon: Users,
    title: "MÓDULO 2: SQUAD CREATION",
    result: "Montar e coordenar squads de agentes especializados",
    items: [
      "Definir papéis e responsabilidades",
      "Criar workflows de comunicação",
      "Orquestrar trabalho em paralelo",
      "Casos práticos de squad composition"
    ]
  },
  {
    icon: Workflow,
    title: "MÓDULO 3: WORKFLOW AUTOMATION",
    result: "Automatizar processos de desenvolvimento end-to-end",
    items: [
      "Design de workflows inteligentes",
      "Story-driven development na prática",
      "CI/CD automatizado com agentes",
      "Testing e deployment hands-free"
    ]
  },
  {
    icon: Layers,
    title: "MÓDULO 4: PROJETOS REAIS",
    result: "Entregar 3 projetos completos do zero",
    items: [
      "Projeto 1: Bot WhatsApp com IA (case Patrocínio Café)",
      "Projeto 2: SDR inteligente para imobiliária (case CNR)",
      "Projeto 3: Site + catálogo digital (case América)",
      "Documentação e handoff profissional"
    ]
  },
  {
    icon: Target,
    title: "MÓDULO 5: OFFER SCULPTING",
    result: "Estruturar ofertas de alto valor",
    items: [
      "Identificar dores de negócio de alto valor",
      "Estruturar propostas baseadas em resultado",
      "Precificação estratégica (setup + MRR)",
      "Templates de proposta e contrato"
    ]
  },
  {
    icon: TrendingUp,
    title: "MÓDULO 6: GO-TO-MARKET",
    result: "Posicionar-se e atrair clientes",
    items: [
      "Content marketing para tech",
      "Case studies que vendem",
      "Network estratégico",
      "Personal branding de orquestrador"
    ]
  }
];

const Modules: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-[#0a0a0a] border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-mono text-primary text-xs tracking-widest mb-4 block uppercase">Currículo Completo</span>
          <h2 className="text-white text-3xl md:text-6xl font-black uppercase tracking-tighter mb-6">
            O que você vai aprender<br/>
            <span className="text-primary">do zero ao profissional</span>
          </h2>
          <p className="text-white/60 text-lg md:text-xl max-w-3xl mx-auto">
            6 módulos práticos focados em fazer você entregar projetos reais usando AIOS + Claude.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {modules.map((m, i) => (
            <div key={i} className="bg-white/[0.02] border border-white/5 p-6 md:p-8 rounded-2xl flex flex-col h-full hover:border-primary/20 transition-all">
              <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center mb-6">
                <m.icon className="text-primary w-6 h-6" />
              </div>

              <h3 className="text-white text-base md:text-lg font-black uppercase mb-3 leading-tight">{m.title}</h3>
              <p className="text-primary text-xs font-bold mb-6">Resultado: {m.result}</p>

              <ul className="flex-1 space-y-2 mb-6">
                {m.items.map((item, j) => (
                  <li key={j} className="text-white/60 text-sm flex items-start gap-2">
                    <span className="text-primary mt-1 shrink-0">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-transparent border border-primary/20 p-8 md:p-12 rounded-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
             <div>
               <p className="text-4xl md:text-5xl font-black leading-none text-white mb-2">6</p>
               <p className="text-xs text-white/60 uppercase font-bold tracking-wider">Módulos práticos</p>
             </div>
             <div>
               <p className="text-4xl md:text-5xl font-black leading-none text-white mb-2">3</p>
               <p className="text-xs text-white/60 uppercase font-bold tracking-wider">Projetos completos</p>
             </div>
             <div>
               <p className="text-4xl md:text-5xl font-black leading-none text-primary mb-2">∞</p>
               <p className="text-xs text-white/60 uppercase font-bold tracking-wider">Gravações inclusas</p>
             </div>
             <div>
               <p className="text-4xl md:text-5xl font-black leading-none text-white mb-2">+</p>
               <p className="text-xs text-white/60 uppercase font-bold tracking-wider">Atualizações incluídas</p>
             </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-white/40 text-sm uppercase font-bold tracking-widest mb-4">Garantia de resultado</p>
          <p className="text-white text-xl md:text-3xl font-black uppercase max-w-3xl mx-auto leading-tight">
            Não ficou satisfeito nos primeiros <span className="text-primary">7 dias</span>? Devolvemos 100% do seu dinheiro, sem perguntas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Modules;
