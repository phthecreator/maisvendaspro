
import React from 'react';

const Hero: React.FC = () => {
  const scrollToPricing = () => {
    const el = document.getElementById('pricing');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="relative overflow-hidden pt-16 pb-24 min-h-[80vh] flex flex-col justify-center">
      {/* LOCAL SMOKE EFFECT BEHIND TITLE - Like the reference image */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-[2/1] pointer-events-none">
        <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full animate-[pulse-smoke_5s_infinite_ease-in-out]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 bg-primary/10 blur-[120px] rotate-12"></div>
      </div>

      <div className="px-6 flex flex-col items-center text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-8 backdrop-blur-sm">
          <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
          <span className="text-[10px] font-black tracking-wider text-primary uppercase">
            Disponível para Projetos de Elite
          </span>
        </div>
        
        <h1 className="text-white text-5xl md:text-[7rem] font-black leading-[0.8] tracking-tighter mb-10 max-w-5xl">
          PARE DE CODAR <br />
          <span className="text-primary glow-text italic terminal-cursor">DE GRAÇA</span>
        </h1>
        
        <p className="text-white/80 text-lg md:text-2xl font-medium leading-tight max-w-2xl mb-12">
          Criando soluções digitais inovadoras com foco em lucro real. <br className="hidden md:block" />
          Especializado em <span className="text-primary font-bold">Inteligência Artificial</span> e automações que botam dinheiro no bolso.
        </p>

        {/* Tech Stack Pills - Reference inspired */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-2xl">
          {['IA Generativa', 'Python', 'Node.js', 'React', 'Agentic Workflows', 'Prompt Engineering', 'API Rest'].map((tech) => (
            <span key={tech} className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-black text-primary uppercase tracking-widest backdrop-blur-md">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 w-full max-w-md">
          <button 
            onClick={scrollToPricing}
            className="glow-primary flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-xl h-16 bg-primary text-background-dark text-lg font-black leading-normal tracking-wide uppercase transition-all hover:scale-[1.03] active:scale-95 shadow-[0_20px_50px_rgba(70,236,19,0.3)]"
          >
            Faturar com IA
          </button>
          <button 
            onClick={() => window.location.hash = 'faq'}
            className="flex-1 border-2 border-primary/40 hover:border-primary text-primary cursor-pointer items-center justify-center overflow-hidden rounded-xl h-16 bg-transparent text-lg font-black leading-normal tracking-wide uppercase transition-all hover:bg-primary/5 active:scale-95"
          >
            Ver Detalhes
          </button>
        </div>
        
        <div className="mt-12 animate-bounce">
          <svg className="w-6 h-6 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7-7-7m14-8l-7 7-7-7"></path>
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Hero;
