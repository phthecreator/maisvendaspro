import React from 'react';

const Hero: React.FC = () => {
  const scrollToPricing = () => {
    const el = document.getElementById('pricing');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="relative overflow-hidden pt-16 pb-24 min-h-[85vh] flex flex-col justify-center bg-black">
      {/* Background Sutil (apenas grid distante, sem fumaça excessiva) */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
         <div className="absolute bottom-0 left-0 w-full h-[40vh] bg-[linear-gradient(to_bottom,transparent_0%,#000000_100%),linear-gradient(rgba(57,255,20,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(57,255,20,0.05)_1px,transparent_1px)] bg-[size:3rem_3rem] [transform:perspective(1000px)_rotateX(60deg)] origin-bottom"></div>
      </div>

      <div className="px-6 flex flex-col items-center text-center relative z-10">
        
        {/* Badge Minimalista */}
        <div className="inline-flex items-center gap-3 px-4 py-1.5 border border-[#39ff14]/30 rounded-full mb-12 bg-[#39ff14]/5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#39ff14] animate-pulse"></span>
          <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-[#39ff14] uppercase">
            System_Ready_v2.0
          </span>
        </div>
        
        {/* TÍTULO PRINCIPAL (Efeito Terminal Clean) */}
        <h1 className="text-white text-5xl md:text-[6rem] lg:text-[7.5rem] font-black leading-[0.9] tracking-tighter mb-10 max-w-6xl select-text">
          PARE DE CODAR <br />
          <span className="text-[#39ff14] drop-shadow-[0_0_15px_rgba(57,255,20,0.6)] selection:bg-white selection:text-black">
            DE GRAÇA
          </span>
          {/* Cursor Piscante */}
          <span className="inline-block w-2 md:w-4 h-[0.8em] bg-[#39ff14] align-middle ml-1 md:ml-4 animate-[pulse_1s_steps(2)_infinite] shadow-[0_0_10px_#39ff14]"></span>
        </h1>
        
        <p className="text-white/60 text-lg md:text-2xl font-light leading-tight max-w-2xl mb-14 font-sans">
          Especializado em <span className="text-[#39ff14] font-medium">Inteligência Artificial</span> e automações que geram lucro real.
          Sem hype. Apenas código que paga boleto.
        </p>

        {/* Tech Stack Pills - Estilo Terminal */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 max-w-2xl font-mono text-[10px] md:text-xs">
          {['> IA_GENERATIVA', '> PYTHON', '> N8N', '> AGENTS', '> OPENAI_API'].map((tech) => (
            <span key={tech} className="px-3 py-1.5 text-[#39ff14]/70 border border-[#39ff14]/20 bg-[#39ff14]/5 tracking-widest uppercase hover:bg-[#39ff14] hover:text-black transition-colors cursor-default">
              {tech}
            </span>
          ))}
        </div>
        
        {/* Botões */}
        <div className="flex flex-col md:flex-row gap-5 w-full max-w-md">
          <a 
            href="https://wa.me/556191185635"
            className="group btn-neon-3d flex-1 cursor-pointer flex items-center justify-center overflow-hidden rounded-md h-16 text-base md:text-lg"
          >
            <span className="relative z-10">Faturar com IA</span>
          </a>
          <button 
            onClick={() => window.location.hash = 'faq'}
            className="flex-1 border border-white/20 hover:border-white text-white/70 hover:text-white cursor-pointer items-center justify-center h-16 bg-transparent text-sm font-bold tracking-[0.2em] uppercase transition-all hover:bg-white/5 active:scale-95"
          >
            Ver Detalhes
          </button>
        </div>
      </div>
    </header>
  );
};

export default Hero;