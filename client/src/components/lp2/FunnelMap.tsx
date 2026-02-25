
import React from 'react';
import { Youtube, Users, Radio, BookOpen, Rocket, ArrowDown } from 'lucide-react';

const steps = [
  {
    icon: Youtube,
    label: 'CONTEÚDO GRATUITO',
    channel: 'YouTube / TikTok / Instagram',
    description: 'Vídeos curtos mostrando projetos reais sendo construídos com IA. Bastidores, resultados, tutoriais rápidos.',
    color: 'text-red-400',
    borderColor: 'border-red-400/20',
    bgColor: 'bg-red-400/5',
    free: true,
  },
  {
    icon: Users,
    label: 'GRUPO DE NETWORKING',
    channel: 'WhatsApp (gratuito)',
    description: 'Troca de experiências, indicações, parcerias. Onde devs, gestores de tráfego e empresários se conectam.',
    color: 'text-green-400',
    borderColor: 'border-green-400/20',
    bgColor: 'bg-green-400/5',
    free: true,
  },
  {
    icon: Radio,
    label: 'AULAS AO VIVO',
    channel: 'Lives semanais no grupo',
    description: 'Construímos projetos ao vivo, tiramos dúvidas, mostramos como fechar contratos. Gravadas e disponíveis.',
    color: 'text-blue-400',
    borderColor: 'border-blue-400/20',
    bgColor: 'bg-blue-400/5',
    free: true,
  },
  {
    icon: BookOpen,
    label: 'VIBE CODING PRO',
    channel: 'Método completo — R$ 250',
    description: '6 módulos, 3 projetos reais, templates prontos, framework AIOS Pro com 12 agentes. Acesso vitalício.',
    color: 'text-primary',
    borderColor: 'border-primary/30',
    bgColor: 'bg-primary/5',
    free: false,
  },
  {
    icon: Rocket,
    label: 'MENTORIA HIGH-TICKET',
    channel: 'Acompanhamento individual',
    description: 'Pra quem quer acelerar: revisamos seu projeto, ajudamos a fechar contratos, e construímos junto. Vagas limitadas.',
    color: 'text-yellow-400',
    borderColor: 'border-yellow-400/20',
    bgColor: 'bg-yellow-400/5',
    free: false,
  },
];

const FunnelMap: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-[#050505] border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-mono text-primary text-xs tracking-widest mb-4 block uppercase">Sua jornada</span>
          <h2 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6">
            Como funciona<br/>
            <span className="text-primary">do zero ao faturamento</span>
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto">
            Comece de graça. Evolua no seu ritmo. Pague só quando fizer sentido.
          </p>
        </div>

        <div className="space-y-6">
          {steps.map((step, i) => (
            <React.Fragment key={i}>
              <div className={`${step.bgColor} border ${step.borderColor} p-6 md:p-8 rounded-2xl flex flex-col md:flex-row items-start gap-6 transition-all hover:scale-[1.01]`}>
                <div className={`w-14 h-14 rounded-xl bg-black/40 border ${step.borderColor} flex items-center justify-center shrink-0`}>
                  <step.icon className={`w-7 h-7 ${step.color}`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h3 className={`text-lg font-black uppercase ${step.color}`}>{step.label}</h3>
                    {step.free ? (
                      <span className="text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded bg-green-400/10 text-green-400 border border-green-400/20">Gratuito</span>
                    ) : (
                      <span className="text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">Premium</span>
                    )}
                  </div>
                  <p className="text-white/50 text-xs font-bold uppercase tracking-wider mb-2">{step.channel}</p>
                  <p className="text-white/70 text-sm leading-relaxed">{step.description}</p>
                </div>
                <div className="text-white/20 font-mono text-3xl font-black shrink-0 hidden md:block">
                  {String(i + 1).padStart(2, '0')}
                </div>
              </div>
              {i < steps.length - 1 && (
                <div className="flex justify-center">
                  <ArrowDown className="w-5 h-5 text-white/20" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-primary/10 border border-primary/20 p-8 md:p-10 rounded-2xl max-w-2xl">
            <p className="text-white text-lg md:text-2xl font-black uppercase leading-tight mb-4">
              Primeiro passo? Entrar no grupo gratuito.
            </p>
            <p className="text-white/60 text-sm mb-6">
              Zero compromisso. Você conhece a galera, assiste as lives, e decide se quer ir mais fundo.
            </p>
            <a
              href="https://wa.me/556291508399?text=Quero%20entrar%20no%20grupo%20Vibe%20Coding%20Pro"
              className="inline-flex items-center justify-center gap-2 bg-primary text-black font-black text-sm py-4 px-8 rounded-xl uppercase tracking-wide transition-transform hover:scale-105 active:scale-95"
            >
              Entrar no grupo gratuito
              <Users className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunnelMap;
