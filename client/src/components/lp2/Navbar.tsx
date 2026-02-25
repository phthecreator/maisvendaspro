
import React from 'react';
import { Terminal, ArrowLeft } from 'lucide-react';

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
    <nav className="flex items-center bg-background-dark/80 backdrop-blur-xl sticky top-0 z-50 p-4 border-b border-white/10 justify-between">
      <div className="flex items-center gap-4">
        <a
          href="/"
          className="flex items-center gap-1 text-white/40 hover:text-primary transition-colors group"
          title="Voltar para o site"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          <span className="text-[10px] font-black tracking-widest uppercase hidden sm:block">Home</span>
        </a>

        <div
          className="flex items-center gap-2 cursor-pointer group"
          onClick={scrollToTop}
        >
          <Terminal className="text-primary w-5 h-5 group-hover:scale-110 transition-transform" />
          <h2 className="text-white text-sm font-black tracking-tighter uppercase leading-tight group-hover:text-primary transition-colors">
            VIBE CODING PRO
          </h2>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-6 mr-6">
          <a href="#pricing" className="text-[10px] font-black tracking-widest uppercase text-white/40 hover:text-primary transition-colors">Preço</a>
          <a href="#faq" className="text-[10px] font-black tracking-widest uppercase text-white/40 hover:text-primary transition-colors">Dúvidas</a>
        </div>
        <a
          href="https://pay.cakto.com.br/3hjpqk6_784210"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center px-4 py-2 bg-primary text-black text-[10px] font-black uppercase tracking-widest rounded-lg hover:opacity-90 transition-opacity"
        >
          Comprar R$ 250
        </a>
        <div className="bg-primary/10 px-3 py-1 rounded-full border border-primary/20 flex items-center gap-2">
          <span className="flex h-1.5 w-1.5 rounded-full bg-primary animate-pulse"></span>
          <p className="text-primary text-[10px] font-bold tracking-widest uppercase">
            T{turma}: {maxVagas - vagas} vagas
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
