
import React from 'react';
import { ArrowRight, DollarSign, Zap, Users } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden px-4">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ff8810_1px,transparent_1px),linear-gradient(to_bottom,#00ff8810_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-8 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="font-mono text-primary text-xs uppercase tracking-widest">Turma 1 aberta</span>
          <span className="w-px h-3 bg-primary/20" />
          <span className="text-white/60 text-xs">Fecha quando encher — sem data de reabertura</span>
        </div>

        <h1 className="font-mono text-white text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tighter mb-8 px-2">
          Do zero ao deploy<br/>
          <span className="text-primary">em 4 aulas ao vivo</span><br/>
          <span className="text-white/50 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">sem cortes, sem enrolação, em grupo</span>
        </h1>

        <div className="max-w-3xl mx-auto mb-12 px-2">
          <p className="text-white/90 text-lg md:text-2xl font-medium leading-tight mb-6">
            A gente gera R$ 20k/mês com projetos de IA — bots de WhatsApp, SDRs inteligentes, automações reais.
            Agora vamos ensinar tudo em 4 aulas ao vivo por mês.
            Ferramentas gratuitas pra quem não tem grana. Stack completa pra quem tem.
          </p>
          <p className="text-white/60 text-base md:text-lg">
            E de quebra: como cobrar R$ 3k, R$ 6k, até R$ 10k por projeto.
            Um cliente por mês e você já bate o salário de muita gente.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-12 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 text-white/90 text-sm md:text-base">
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-primary" />
            </div>
            <div className="text-left">
              <p className="font-black uppercase text-xs text-primary">Nossa operação</p>
              <p className="text-white/70 text-xs">R$ 20k/mês usando esse método exato</p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-white/90 text-sm md:text-base">
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <div className="text-left">
              <p className="font-black uppercase text-xs text-primary">Ao vivo</p>
              <p className="text-white/70 text-xs">4 aulas por mês, você faz junto em tempo real</p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-white/90 text-sm md:text-base">
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <div className="text-left">
              <p className="font-black uppercase text-xs text-primary">Cohort</p>
              <p className="text-white/70 text-xs">Só quem quer resultado. Todos no mesmo nível.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 px-2">
          <a
            href="https://pay.cakto.com.br/3hjpqk6_784210"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-8 py-5 bg-primary text-black text-sm md:text-lg font-black uppercase tracking-wider overflow-hidden transition-all hover:pr-12 rounded-xl"
          >
            <span className="relative z-10">Quero entrar na Turma 1 — R$ 250</span>
            <div className="absolute right-0 top-0 h-full w-12 bg-black/10 flex items-center justify-center translate-x-12 group-hover:translate-x-0 transition-transform duration-300">
              <ArrowRight className="w-5 h-5" />
            </div>
          </a>

          <p className="text-white/40 text-xs uppercase tracking-widest">
            De R$ 1.200 • Garantia 7 dias • Parcelamento disponível
          </p>
        </div>

        <div className="mt-24 pt-12 border-t border-white/5">
          <p className="text-white/40 text-xs uppercase font-bold tracking-widest mb-8">O que você vai aprender a construir e entregar</p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
             {['Bot WhatsApp com IA', 'SDR Inteligente', 'Site + Catálogo Digital', 'Automações com n8n'].map((item) => (
               <span key={item} className="text-white/70 font-mono text-sm md:text-base uppercase tracking-wide">{item}</span>
             ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
