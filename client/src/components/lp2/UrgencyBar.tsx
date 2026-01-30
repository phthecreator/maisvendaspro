
import React from 'react';

interface Props {
  timeLeft: number;
  viewers: number;
  vagas: number;
}

const UrgencyBar: React.FC<Props> = ({ timeLeft, viewers, vagas }) => {
  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] bg-urgency/90 backdrop-blur-md text-white py-2 px-4 text-center text-[10px] md:text-xs font-bold uppercase tracking-tight">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
        <span>⚠️ ATENÇÃO: Restam apenas {vagas} vagas nesta turma | Bônus "Pack Cliente 100" expira em:</span>
        <span className="bg-black/20 px-2 py-0.5 rounded font-mono text-sm md:text-base">[{formatTime(timeLeft)}]</span>
        <span className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
          🔥 {viewers} pessoas visualizando agora
        </span>
      </div>
    </div>
  );
};

export default UrgencyBar;
