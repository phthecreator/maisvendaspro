
import React, { useState, useEffect } from 'react';

const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 800);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 z-[90] md:hidden bg-gradient-to-t from-black via-black/80 to-transparent">
      <a
        href="https://pay.cakto.com.br/3hjpqk6_784210"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full inline-flex items-center justify-center bg-primary text-black font-black py-5 rounded-xl uppercase tracking-widest shadow-2xl text-base"
      >
        ENTRAR NA TURMA 1 — R$ 250
      </a>
    </div>
  );
};

export default StickyCTA;
