
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-6 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="font-mono text-white text-xl font-black uppercase tracking-[0.5em] mb-10">VIBE CODING PRO</h2>
        
        <p className="text-white/30 text-[10px] uppercase font-black tracking-widest mb-6">© 2024 Vibe Coding Pro • Todos os direitos reservados</p>
        
        <div className="max-w-xl mx-auto space-y-4 opacity-20 text-[9px] uppercase font-bold tracking-widest mb-10">
          <p>Este site não possui vínculo oficial com o Google LLC, Meta Platforms, Inc. ou suas subsidiárias. Os resultados financeiros variam de acordo com o empenho individual, nicho escolhido e condições de mercado.</p>
          <p>Vibe Coding é uma marca registrada de Educação e Tecnologia.</p>
        </div>

        <div className="flex justify-center gap-8 text-[10px] font-black uppercase tracking-widest text-white/40">
           <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
           <a href="#" className="hover:text-primary transition-colors">Privacidade</a>
           <a href="#" className="hover:text-primary transition-colors">Suporte</a>
        </div>
      </div>
      {/* Spacer for sticky CTA on mobile */}
      <div className="h-20 md:hidden"></div>
    </footer>
  );
};

export default Footer;
