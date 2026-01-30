
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
      <button 
        onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
        className="w-full bg-primary text-black font-black py-5 rounded-xl uppercase tracking-widest shadow-2xl pulse-neon text-base"
      >
        QUERO MINHA VAGA AGORA
      </button>
    </div>
  );
};

export default StickyCTA;
