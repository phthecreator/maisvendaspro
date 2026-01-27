
import React from 'react';
import { Menu, Terminal } from 'lucide-react';
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

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
    <nav className="flex items-center bg-background/80 backdrop-blur-xl sticky top-0 z-50 px-4 py-3 border-b border-white/10 justify-between">
      <div 
        className="flex items-center gap-2 cursor-pointer group"
        onClick={scrollToTop}
      >
        <Terminal className="text-[#39ff14] w-6 h-6 group-hover:scale-110 transition-transform drop-shadow-[0_0_5px_rgba(57,255,20,0.8)]" />
        <h2 className="text-white text-base font-black tracking-tighter uppercase leading-tight group-hover:text-[#39ff14] transition-colors drop-shadow-[0_0_8px_rgba(57,255,20,0.5)]">
          Ia_<span className="text-[#39ff14]">lucrativa_1</span>
        </h2>
      </div>
      <div className="flex items-center gap-3">
        <div className="hidden md:flex items-center gap-6 mr-6">
          <a href="/" className="text-[10px] font-black tracking-widest uppercase text-primary hover:text-white transition-colors">← Voltar ao Início</a>
          <a href="#pricing" className="text-[10px] font-black tracking-widest uppercase text-white/40 hover:text-primary transition-colors">Preço</a>
          <a href="#faq" className="text-[10px] font-black tracking-widest uppercase text-white/40 hover:text-primary transition-colors">Dúvidas</a>
        </div>
        <Sheet>
          <SheetTrigger className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:text-white hover:border-primary/60">
            <Menu className="h-5 w-5" />
          </SheetTrigger>
          <SheetContent side="right" className="bg-background border-white/10 text-white">
            <SheetHeader>
              <SheetTitle className="text-xs uppercase tracking-[0.3em] text-white/60">Menu</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-2 px-4 pb-6">
              <SheetClose asChild>
                <a href="/" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/80 hover:text-white">
                  ← Voltar ao Início
                </a>
              </SheetClose>
              <SheetClose asChild>
                <a href="#pricing" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/80 hover:text-white">
                  Preço
                </a>
              </SheetClose>
              <SheetClose asChild>
                <a href="#faq" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/80 hover:text-white">
                  Dúvidas
                </a>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
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
