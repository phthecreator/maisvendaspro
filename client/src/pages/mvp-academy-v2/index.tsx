import React from 'react';
import { MeshGradient, EliteButton } from './components/EliteDesign';
import Hero from './sections/Hero';
import Wall from './sections/Wall';
import Void from './sections/Void';
import Roadmap from './sections/Roadmap';
import ValueStack from './sections/ValueStack';
import Guarantee from './sections/Guarantee';

const MVPAcademyV2: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-amber-500 selection:text-black">
      <MeshGradient />

      {/* REFINED NAVBAR */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#020617]/50 backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto px-8 h-24 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center font-black text-black text-xl shadow-lg shadow-amber-500/10 rotate-3">M</div>
            <div className="flex flex-col">
              <span className="font-black tracking-[0.2em] text-sm text-white uppercase">MVP ACADEMY</span>
              <span className="text-[10px] text-amber-500 font-bold uppercase tracking-[0.4em]">Elite Cycle</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-12 text-[11px] font-bold tracking-[0.3em] text-slate-500 uppercase">
            <a href="#metodo" className="hover:text-amber-400 transition-colors">O Método</a>
            <a href="#valor" className="hover:text-amber-400 transition-colors">Valor Stack</a>
            <EliteButton variant="outline" className="px-8 py-3 text-[10px]">
              LOGIN BUNKER
            </EliteButton>
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        <div id="hero"><Hero /></div>
        <div id="metodo"><Wall /></div>
        <div id="void"><Void /></div>
        <div id="roadmap"><Roadmap /></div>
        <div id="valor"><ValueStack /></div>
        <div id="garantia"><Guarantee /></div>
      </main>

      {/* REFINED FOOTER */}
      <footer className="py-24 border-t border-white/5 bg-[#01030a] relative z-10">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <div className="flex justify-center gap-12 mb-12 text-[10px] font-bold tracking-[0.4em] uppercase text-slate-600">
            <a href="#" className="hover:text-amber-500 transition-colors">Privacidade</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Suporte Elite</a>
          </div>
          <p className="text-slate-700 text-xs italic font-serif opacity-50">
            MVP Academy Elite Cycle © 2026. This is not just a course. This is an engine for execution.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default MVPAcademyV2;
