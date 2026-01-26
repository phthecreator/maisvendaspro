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
// Removed old UnderworldBackground in favor of the new system

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
        }, 5000); 
      }
    }, Math.random() * (45000 - 15000) + 15000); 

    return () => clearTimeout(timer);
  }, [vagas, turma, isTransitioning]);

  return (
    <div className="min-h-screen bg-[#020617] font-sans selection:bg-[#00ff88] selection:text-black text-white relative overflow-x-hidden">
      
      {/* --- PREMIUM BACKGROUND LAYERS (The "Silent System" Aesthetic) --- */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[#050505]">
        {/* FOG / FUMAÇA LAYERS */}
        <div className="fog-container">
          <div className="fog-layer"></div>
          <div className="fog-layer two"></div>
          <div className="fog-layer vertical"></div>
        </div>

        {/* Noise Texture */}
        <div className="absolute inset-0 opacity-[0.06] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
        
        {/* Animated Grid Floor */}
        <div className="absolute bottom-0 left-0 w-full h-[60vh] bg-[linear-gradient(to_bottom,transparent_0%,#000000_100%),linear-gradient(rgba(57,255,20,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(57,255,20,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] [transform:perspective(1000px)_rotateX(60deg)] origin-bottom opacity-30"></div>
      </div>

      {/* Toast de Notificação Real Time - Estilo Clean */}
      <div className={`fixed top-24 right-6 z-[60] transition-all duration-500 transform ${showNotification ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
        <div className="bg-[#0a0a0a]/90 border border-[#00ff88]/30 p-4 rounded-lg backdrop-blur-md flex items-center gap-4 shadow-2xl">
          <div className="w-2 h-2 bg-[#00ff88] rounded-full animate-pulse shadow-[0_0_10px_#00ff88]"></div>
          <div>
            <p className="text-white text-xs font-bold uppercase tracking-widest">
              Novo Aluno Matriculado
            </p>
            <p className="text-white/40 text-[10px] font-mono">
              System ID: {Math.floor(Math.random() * 10000)}
            </p>
          </div>
        </div>
      </div>

      {/* Overlay de Transição de Turma */}
      {isTransitioning && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center text-center p-6 animate-in fade-in duration-500">
          <div className="w-16 h-16 border-2 border-[#00ff88] border-t-transparent rounded-full animate-spin mb-8 shadow-[0_0_30px_#00ff88]"></div>
          <h2 className="text-[#00ff88] text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 glow-text">
            TURMA {turma.toString().padStart(2, '0')} ENCERRADA
          </h2>
          <p className="text-white/50 text-sm font-mono uppercase tracking-widest">
            Reiniciando sistema para Turma {(turma + 1).toString().padStart(2, '0')}...
          </p>
        </div>
      )}

      {/* Content Wrapper */}
      <div className="relative z-10">
        <Navbar vagas={vagas} maxVagas={MAX_VAGAS} turma={turma} />
        
        <main>
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
    </div>
  );
};

export default LP2;
