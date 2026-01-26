
import React from 'react';
import { Terminal } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-6 border-t border-white/5 text-center bg-black/40">
      <div className="flex items-center justify-center gap-2 mb-8 opacity-50 grayscale hover:grayscale-0 transition-all">
        <Terminal className="w-4 h-4 text-primary" />
        <h2 className="text-white text-[10px] font-black tracking-[0.5em] uppercase">IA LUCRATIVA</h2>
      </div>
      
      <p className="text-white/30 text-[10px] uppercase tracking-[0.3em] mb-4 font-bold">
        © 2024 IA Lucrativa Mentoria • Todos os direitos reservados
      </p>
      
      <p className="text-white/20 text-[9px] max-w-sm mx-auto leading-relaxed font-medium">
        Este site não possui vínculo oficial com o Google LLC, Meta Platforms, Inc. ou suas subsidiárias. 
        As estratégias e resultados mostrados variam de acordo com o empenho individual e condições de mercado.
      </p>
      
      <div className="mt-10 flex justify-center gap-6 text-[9px] uppercase tracking-widest text-white/20 font-bold">
        <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
        <a href="#" className="hover:text-primary transition-colors">Privacidade</a>
      </div>
      
      {/* Spacer for sticky CTA */}
      <div className="h-24"></div>
    </footer>
  );
};

export default Footer;
