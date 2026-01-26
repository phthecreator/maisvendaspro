
import React from 'react';
import { Terminal } from 'lucide-react';

interface NavbarProps {
  vagas: number;
  maxVagas: number;
  turma: number;
}

const Navbar: React.FC<NavbarProps> = ({ vagas, maxVagas, turma }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="flex items-center bg-background/80 backdrop-blur-xl sticky top-0 z-50 p-4 border-b border-white/10 justify-between">
      <div 
        className="flex items-center gap-2 cursor-pointer group"
        onClick={scrollToTop}
      >
        <Terminal className="text-[#39ff14] w-6 h-6 group-hover:scale-110 transition-transform drop-shadow-[0_0_5px_rgba(57,255,20,0.8)]" />
        <h2 className="text-white text-base font-black tracking-tighter uppercase leading-tight group-hover:text-[#39ff14] transition-colors drop-shadow-[0_0_8px_rgba(57,255,20,0.5)]">
          IA <span className="text-[#39ff14]">LUCRATIVA</span>
        </h2>
      </div>
      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-6 mr-6">
          <a href="/" className="text-[10px] font-black tracking-widest uppercase text-primary hover:text-white transition-colors">← Voltar ao Início</a>
          <a href="#pricing" className="text-[10px] font-black tracking-widest uppercase text-white/40 hover:text-primary transition-colors">Preço</a>
          <a href="#faq" className="text-[10px] font-black tracking-widest uppercase text-white/40 hover:text-primary transition-colors">Dúvidas</a>
        </div>
        <div className="bg-primary/10 px-3 py-1 rounded-full border border-primary/20 flex items-center gap-2">
          <span className="flex h-1.5 w-1.5 rounded-full bg-primary animate-pulse"></span>
          <p className="text-primary text-[10px] font-bold tracking-widest uppercase">
            T{turma}: {maxVagas - vagas} Vagas
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
