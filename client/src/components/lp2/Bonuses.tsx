
import React from 'react';
import { Gift, Lock, Play, Users, Zap } from 'lucide-react';

interface Props {
  timeLeft: number;
}

const bonuses = [
  {
    title: "BÔNUS 1: 📘 BLACKBOOK DE VENDAS",
    value: "R$ 497",
    desc: "Contratos reais (5k-50k), propostas editáveis, scripts word-by-word e o case exclusivo do 'Cliente 100'."
  },
  {
    title: "BÔNUS 2: 🤖 PACK DE TEMPLATES PRONTOS",
    value: "R$ 397",
    desc: "CRM Imobiliário, Agendamento Clínico, Delivery, Qualificação de Leads e Cobrança Automática. Plug & Play."
  },
  {
    title: "BÔNUS 3: 🎥 GRAVAÇÕES DE CALLS REAIS",
    value: "R$ 297",
    desc: "Ouça o pitch real, descubra a dor com o especialista e veja como lidar com clientes desconfiados."
  },
  {
    title: "BÔNUS 4: 🔐 ACESSO À COMUNIDADE",
    value: "R$ 1.182",
    desc: "6 meses de acesso ao Discord exclusivo, mentorias semanais ao vivo e networking para parcerias."
  }
];

const Bonuses: React.FC<Props> = ({ timeLeft }) => {
  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-white text-3xl md:text-6xl font-black uppercase tracking-tighter mb-4">
            🎁 "BÔNUS QUE VALEM MAIS QUE O CURSO"
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {bonuses.map((b, i) => (
            <div key={i} className="bg-card-dark border border-white/5 p-8 rounded-2xl relative overflow-hidden group">
              <div className="absolute -top-4 -right-4 bg-primary/10 p-12 rounded-full opacity-5">
                <Gift className="w-24 h-24 text-primary" />
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white/5 p-3 rounded-xl">
                  <Zap className="text-primary w-6 h-6" />
                </div>
                <div>
                   <h3 className="text-white text-xl font-black uppercase">{b.title}</h3>
                   <p className="text-urgency text-xs font-black uppercase tracking-widest line-through">Valor: {b.value}</p>
                </div>
              </div>
              <p className="text-white/60 text-base leading-relaxed mb-6">{b.desc}</p>
              <p className="text-primary font-black uppercase text-xs tracking-widest">✅ GRÁTIS HOJE</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-secondary/20 to-urgency/20 border-2 border-secondary/40 p-8 md:p-16 rounded-[2.5rem] relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-secondary text-white font-black px-6 py-2 uppercase text-xs rotate-12 translate-x-4 -translate-y-2">RELÂMPAGO</div>
          
          <div className="max-w-3xl">
            <h3 className="text-white text-3xl md:text-5xl font-black uppercase mb-6 leading-tight">
              🔥 BÔNUS RELÂMPAGO (SÓ ATÉ SEXTA):
            </h3>
            <h4 className="text-secondary text-2xl md:text-4xl font-black uppercase mb-4">
              BÔNUS 5: 💎 SESSÃO ESTRATÉGICA 1-ON-1
            </h4>
            <p className="text-white/50 text-xs font-black uppercase tracking-widest mb-8">Valor: R$ 997 | GRÁTIS (Primeiras 10 vagas)</p>
            
            <div className="space-y-4 text-white/80 font-bold mb-10">
              <p>• 1 hora de call comigo ou mentor sênior</p>
              <p>• Análise do seu nicho, oferta e posicionamento</p>
              <p>• Plano de ação personalizado para os primeiros 30 dias</p>
            </div>

            <div className="bg-black/40 p-6 rounded-2xl border border-secondary/30 inline-flex flex-col gap-2">
              <p className="text-secondary font-black uppercase text-sm">⚠️ ATENÇÃO: Restam apenas 3 vagas</p>
              <p className="text-white/60 text-[10px] font-black uppercase tracking-widest">Expira em: [{formatTime(timeLeft)}]</p>
            </div>
          </div>
        </div>

        <div className="mt-20 max-w-xl mx-auto bg-card-dark border border-white/10 p-10 rounded-3xl text-center">
           <p className="text-white/40 text-[10px] font-black uppercase tracking-widest mb-4">VALOR TOTAL SE COMPRADO SEPARADO:</p>
           <div className="space-y-1 mb-8 opacity-40 font-mono text-xs">
             <p>Curso: R$ 997</p>
             <p>Bônus 1: R$ 497</p>
             <p>Bônus 2: R$ 397</p>
             <p>Bônus 3: R$ 297</p>
             <p>Bônus 4: R$ 1.182</p>
             <p>Bônus 5: R$ 997</p>
           </div>
           <div className="h-px bg-white/10 mb-8"></div>
           <p className="text-white text-xl font-black uppercase line-through mb-2">TOTAL: R$ 4.367</p>
           <p className="text-primary text-5xl md:text-7xl font-black tracking-tighter glow-text">R$ 250</p>
           <p className="text-white/60 font-black uppercase text-[10px] tracking-[0.3em] mt-4">🎯 Desconto de 94% OFF</p>
        </div>
      </div>
    </section>
  );
};

export default Bonuses;
