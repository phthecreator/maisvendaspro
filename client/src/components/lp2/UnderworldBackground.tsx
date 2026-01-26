
import React from 'react';

const UnderworldBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Base Grid / Sewer Texture */}
      <div className="absolute inset-0 sewer-grating"></div>
      
      {/* Animated Smoke Layers */}
      <div className="smoke-layer smoke-1"></div>
      <div className="smoke-layer smoke-2"></div>
      
      {/* Vignette for more "deep sewer" feel */}
      <div className="absolute inset-0 bg-gradient-to-b from-background-dark via-transparent to-background-dark opacity-80"></div>
      
      {/* Radioactive Green Glows */}
      <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '8s' }}></div>
      <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '12s' }}></div>
      
      {/* Overlay noise/texture simulation */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')]"></div>
    </div>
  );
};

export default UnderworldBackground;
