import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/20 text-sm">
          © 2026 maisvendaspro.com.br — MVP Academy
        </p>
        <div className="flex items-center gap-6 text-white/20 text-sm">
          <a href="#" className="hover:text-white/40 transition-colors duration-200">Termos</a>
          <a href="#" className="hover:text-white/40 transition-colors duration-200">Privacidade</a>
          <a href="/" className="hover:text-white/40 transition-colors duration-200">Voltar ao inicio</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
