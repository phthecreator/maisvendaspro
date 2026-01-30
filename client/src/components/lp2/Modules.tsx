
import React from 'react';
import { ChevronRight, Box, BrainCircuit, ShieldAlert, Workflow, Headphones, Target, Rocket } from 'lucide-react';

const modules = [
  {
    icon: Box,
    title: "MÓDULO 0: ⚙️ SETUP DE GUERRA",
    result: "Ambiente pronto para trabalhar como Vibe Coder",
    items: ["Configurar VS Code + extensões", "VPS barata (sem gastar R$ 500/mês)", "Docker para iniciantes", "Git básico: nunca perca código"],
    time: "3-5 horas",
    bonus: "Checklist de ferramentas (90% gratuitas)"
  },
  {
    icon: BrainCircuit,
    title: "MÓDULO 1: 🤖 VIBE CODING NA PRÁTICA",
    result: "Criar seu primeiro app funcional em 2 horas",
    items: ["Conversar com Claude e Cursor", "Prompts que geram código profissional", "Debug com IA: a IA conserta ela mesma", "Do zero ao deploy real"],
    time: "8 horas",
    bonus: "50 prompts prontos para acelerar tudo"
  },
  {
    icon: ShieldAlert,
    title: "MÓDULO 2: 🕵️ O \"HACKER\" DO BEM",
    result: "Extrair dados e integrar sistemas \"impossíveis\"",
    items: ["Web Scraping de qualquer site", "Automação de Browser (robôs humanos)", "APIs reversas (conexões sem API)", "Ferramentas underground éticas"],
    time: "10 horas",
    bonus: "Scripts prontos de scraping"
  },
  {
    icon: Workflow,
    title: "MÓDULO 3: 🧠 DOMINANDO O N8N",
    result: "Criar CRMs e automações complexas sem código",
    items: ["Lógica de workflows: como pensar", "WhatsApp, Email, Notion, Sheets", "Criando seu primeiro CRM automatizado", "Templates prontos: adapte e venda"],
    time: "12 horas",
    bonus: "10 workflows prontos para vender"
  },
  {
    icon: Headphones,
    title: "MÓDULO 4: 💼 ATENDIMENTO & GESTÃO",
    result: "Entregar soluções que geram ROI real",
    items: ["Arquitetura de atendimento convertida", "Gestão de filas e transbordo", "Qualificação automática de leads", "Dashboards que impressionam o cliente"],
    time: "8 horas",
    bonus: "Template de Dashboard para clientes"
  },
  {
    icon: Target,
    title: "MÓDULO 5: 🎯 VENDAS HIGH-TICKET",
    result: "Fechar contratos de R$ 3k-15k",
    items: ["Prospecção em nichos quentes", "Consultoria diagnóstica poderosa", "Proposta irrecusável estruturada", "Scripts reais de fechamento"],
    time: "6 horas",
    bonus: "Gravações reais de calls de fechamento"
  }
];

const Modules: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-[#080808] border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-white text-3xl md:text-6xl font-black uppercase tracking-tighter mb-4">
            📚 "O QUE ESTÁ DENTRO DO VIBE CODING PRO"
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {modules.map((m, i) => (
            <div key={i} className="bg-card-dark border border-white/5 p-8 rounded-2xl flex flex-col h-full hover:border-primary/20 transition-all">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6">
                <m.icon className="text-primary w-6 h-6" />
              </div>
              <h3 className="text-white text-lg font-black uppercase mb-2 leading-tight">{m.title}</h3>
              <p className="text-primary text-[10px] font-black uppercase tracking-widest mb-6">🏁 Resultado: {m.result}</p>
              
              <ul className="flex-1 space-y-3 mb-8">
                {m.items.map((item, j) => (
                  <li key={j} className="text-white/50 text-xs flex items-center gap-2">
                    <ChevronRight className="w-3 h-3 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-white/5 space-y-2">
                <p className="text-white/30 text-[10px] font-black uppercase tracking-widest">⏱️ Tempo: {m.time}</p>
                <p className="text-accent-yellow text-[10px] font-black uppercase tracking-widest">🎁 Bônus: {m.bonus}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-primary p-8 md:p-12 rounded-3xl text-black">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
             <div>
               <p className="text-4xl font-black leading-none">6</p>
               <p className="text-[10px] font-black uppercase tracking-widest mt-2">Módulos Completos</p>
             </div>
             <div>
               <p className="text-4xl font-black leading-none">50h+</p>
               <p className="text-[10px] font-black uppercase tracking-widest mt-2">Conteúdo Prático</p>
             </div>
             <div>
               <p className="text-4xl font-black leading-none">Vitalício</p>
               <p className="text-[10px] font-black uppercase tracking-widest mt-2">Acesso Garantido</p>
             </div>
             <div>
               <p className="text-4xl font-black leading-none">Suporte</p>
               <p className="text-[10px] font-black uppercase tracking-widest mt-2">Comunidade Ativa</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Modules;
