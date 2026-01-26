import React, { useState, useEffect } from 'react';
import Navbar from '@/components/lp2/Navbar';
import Hero from '@/components/lp2/Hero';
import VideoSection from '@/components/lp2/VideoSection';
import PainVsGain from '@/components/lp2/PainVsGain';
import Benefits from '@/components/lp2/Benefits';
import SocialProof from '@/components/lp2/SocialProof';
import Pricing from '@/components/lp2/Pricing';
import Guarantee from '@/components/lp2/Guarantee';
import FAQ from '@/components/lp2/FAQ';
import Footer from '@/components/lp2/Footer';
import StickyCTA from '@/components/lp2/StickyCTA';
import UnderworldBackground from '@/components/lp2/UnderworldBackground';

const LP2: React.FC = () => {
  const MAX_VAGAS = 40;

  // Estados persistentes
  const [vagas, setVagas] = useState(() => {
    const saved = localStorage.getItem('ia_vagas_count');
    return saved ? parseInt(saved) : 32; // Começa alto para gerar urgência
  });

  const [turma, setTurma] = useState(() => {
    const saved = localStorage.getItem('ia_turma_count');
    return saved ? parseInt(saved) : 1;
  });

  const [showNotification, setShowNotification] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Lógica de incremento "Real Time"
  useEffect(() => {
    if (isTransitioning) return;

    const timer = setTimeout(() => {
      if (vagas < MAX_VAGAS) {
        const novoValor = vagas + 1;
        setVagas(novoValor);
        localStorage.setItem('ia_vagas_count', novoValor.toString());
        
        // Notificação de novo aluno
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 4000);
      } else {
        // TURMA LOTADA - Abrir próxima
        setIsTransitioning(true);
        setTimeout(() => {
          const novaTurma = turma + 1;
          setTurma(novaTurma);
          setVagas(1);
          localStorage.setItem('ia_turma_count', novaTurma.toString());
          localStorage.setItem('ia_vagas_count', "1");
          setIsTransitioning(false);
        }, 5000); // 5 segundos de suspense para abrir a nova turma
      }
    }, Math.random() * (45000 - 15000) + 15000); // Entre 15 e 45 segundos

    return () => clearTimeout(timer);
  }, [vagas, turma, isTransitioning]);

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary selection:text-black relative overflow-x-hidden">
      <UnderworldBackground />
      
      {/* Toast de Notificação Real Time */}
      <div className={`fixed top-24 right-6 z-[60] transition-all duration-500 transform ${showNotification ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
        <div className="bg-card border border-primary/30 p-4 rounded-xl shadow-[0_0_20px_rgba(70,236,19,0.2)] backdrop-blur-md flex items-center gap-3">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          <p className="text-white text-xs font-black uppercase tracking-tighter">
            +1 Dev entrou no submundo agora!
          </p>
        </div>
      </div>

      {/* Overlay de Transição de Turma */}
      {isTransitioning && (
        <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex flex-col items-center justify-center text-center p-6 animate-in fade-in duration-500">
          <div className="w-20 h-20 border-4 border-primary border-t-transparent rounded-full animate-spin mb-8 shadow-[0_0_30px_#46ec13]"></div>
          <h2 className="text-primary text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 glow-text">
            TURMA {turma.toString().padStart(2, '0')} ESGOTADA!
          </h2>
          <p className="text-white/60 text-xl font-bold uppercase tracking-widest">
            Preparando infraestrutura para a Turma {(turma + 1).toString().padStart(2, '0')}...
          </p>
        </div>
      )}

      <Navbar vagas={vagas} maxVagas={MAX_VAGAS} turma={turma} />
      
      <main className="relative z-10">
        <Hero />
        <VideoSection />
        <PainVsGain />
        <Benefits />
        <SocialProof />
        <Pricing vagas={vagas} maxVagas={MAX_VAGAS} turma={turma} />
        <Guarantee />
        <FAQ />
      </main>
      
      <Footer />
      <StickyCTA />
    </div>
  );
};

export default LP2;