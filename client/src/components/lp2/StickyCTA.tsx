
import React, { useState, useEffect } from 'react';

const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after hero section (roughly 500px)
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background-dark via-background-dark/95 to-transparent z-40 animate-in fade-in slide-in-from-bottom-5 duration-300">
      <div className="max-w-xl mx-auto">
        <button 
          onClick={scrollToPricing}
          className="glow-primary flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-16 bg-primary text-background-dark text-base md:text-lg font-black tracking-widest uppercase transition-all active:scale-95 shadow-2xl"
        >
          QUERO MINHA VAGA
        </button>
      </div>
    </div>
  );
};

export default StickyCTA;
