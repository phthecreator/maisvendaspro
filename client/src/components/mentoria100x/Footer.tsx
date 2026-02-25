import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 px-6 border-t border-white/[0.04]">
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-white text-lg font-bold tracking-[0.2em] uppercase mb-6">
          MaisVendasPro
        </h3>

        <a
          href="https://wa.me/556291508399"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/40 text-sm hover:text-white/60 transition-colors duration-300"
        >
          WhatsApp: +55 62 9150-8399
        </a>

        <p className="text-white/15 text-xs mt-8">
          &copy; {new Date().getFullYear()} MaisVendasPro. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
