import { useState } from 'react';

const durations = [
  { name: 'instant', ms: 50, desc: 'Micro-interactions' },
  { name: 'fast', ms: 100, desc: 'Toggles, hover' },
  { name: 'normal', ms: 200, desc: 'Transitions padrao' },
  { name: 'moderate', ms: 300, desc: 'Expand/collapse' },
  { name: 'slow', ms: 400, desc: 'Modals, overlays' },
  { name: 'slower', ms: 500, desc: 'Page transitions' },
  { name: 'slowest', ms: 700, desc: 'Complex sequences' },
];

const easings = [
  { name: 'default', value: 'cubic-bezier(0.4, 0, 0.2, 1)', desc: 'Standard material' },
  { name: 'ease-in', value: 'cubic-bezier(0.4, 0, 1, 1)', desc: 'Accelerating' },
  { name: 'ease-out', value: 'cubic-bezier(0, 0, 0.2, 1)', desc: 'Decelerating' },
  { name: 'ease-in-out', value: 'cubic-bezier(0.4, 0, 0.2, 1)', desc: 'Symmetric' },
  { name: 'bounce', value: 'cubic-bezier(0.34, 1.56, 0.64, 1)', desc: 'Overshoot spring' },
  { name: 'spring', value: 'cubic-bezier(0.22, 1, 0.36, 1)', desc: 'Natural spring' },
  { name: 'glitch', value: 'steps(4, end)', desc: 'Stepped/digital' },
];

const MotionSystem = () => {
  const [playingDuration, setPlayingDuration] = useState<string | null>(null);
  const [hoveredEasing, setHoveredEasing] = useState<string | null>(null);
  const [playingEntrance, setPlayingEntrance] = useState<string | null>(null);
  const [playingScan, setPlayingScan] = useState(false);
  const [playingPowerOn, setPlayingPowerOn] = useState(false);

  const triggerEntrance = (name: string) => {
    setPlayingEntrance(null);
    requestAnimationFrame(() => setPlayingEntrance(name));
    setTimeout(() => setPlayingEntrance(null), 1200);
  };

  return (
    <section className="pb-24 border-b border-[#00E5FF]/10">
      <style>{`
        @keyframes bunker-fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes bunker-slide-up { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes bunker-scale-in { from { opacity: 0; transform: scale(0.85); } to { opacity: 1; transform: scale(1); } }
        @keyframes bunker-glitch-in {
          0% { opacity: 0; transform: translate(-4px, 2px) skewX(-5deg); filter: hue-rotate(90deg); }
          25% { opacity: 0.5; transform: translate(3px, -1px) skewX(3deg); filter: hue-rotate(-45deg); }
          50% { opacity: 0.8; transform: translate(-2px, 1px) skewX(-2deg); filter: hue-rotate(30deg); }
          75% { opacity: 0.9; transform: translate(1px, 0) skewX(1deg); filter: hue-rotate(0deg); }
          100% { opacity: 1; transform: translate(0) skewX(0); filter: hue-rotate(0deg); }
        }
        @keyframes bunker-scan-reveal {
          from { clip-path: inset(0 100% 0 0); }
          to { clip-path: inset(0 0 0 0); }
        }
        @keyframes bunker-power-on {
          0% { filter: brightness(0); }
          15% { filter: brightness(3); }
          30% { filter: brightness(0.5); }
          50% { filter: brightness(2); }
          70% { filter: brightness(0.8); }
          100% { filter: brightness(1); }
        }
        .bunker-motion-box { transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
      `}</style>

      <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#00E5FF] mb-3"
        style={{ fontFamily: "'Roboto Mono', monospace" }}>06 / Sistema de Motion</p>
      <h2 className="text-[42px] font-bold leading-tight mb-6"
        style={{ fontFamily: "'Averia Serif Libre', serif", color: '#FDF5E6' }}>Tokens de Animacao</h2>
      <p className="text-[15px] text-[#A9A9A9] max-w-[700px] mb-12 leading-relaxed"
        style={{ fontFamily: "'Roboto Mono', monospace" }}>
        Duracoes, curvas de easing e padroes de entrada. Todas as animacoes respeitam prefers-reduced-motion para acessibilidade.
      </p>

      {/* Duration Scale */}
      <h3 className="text-2xl font-bold mb-6"
        style={{ fontFamily: "'Averia Serif Libre', serif", color: '#FDF5E6' }}>Escala de Duracao</h3>
      <p className="text-[13px] text-[#A9A9A9] mb-4" style={{ fontFamily: "'Roboto Mono', monospace" }}>
        Clique em cada barra para ver a animacao na velocidade correspondente.
      </p>
      <div className="space-y-3 mb-12">
        {durations.map((d) => (
          <div key={d.name} className="flex items-center gap-4 cursor-pointer group"
            onClick={() => {
              setPlayingDuration(d.name);
              setTimeout(() => setPlayingDuration(null), d.ms + 200);
            }}>
            <div className="w-20 text-right text-[12px] text-[#A9A9A9] flex-shrink-0"
              style={{ fontFamily: "'Roboto Mono', monospace" }}>{d.ms}ms</div>
            <div className="flex-1 h-8 rounded relative overflow-hidden"
              style={{ background: 'rgba(0,229,255,0.06)', border: '1px solid rgba(0,229,255,0.1)' }}>
              <div className="h-full rounded transition-all"
                style={{
                  width: playingDuration === d.name ? '100%' : '0%',
                  background: 'linear-gradient(90deg, rgba(0,229,255,0.4), rgba(0,229,255,0.8))',
                  transitionDuration: `${d.ms}ms`,
                  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                }} />
            </div>
            <div className="w-28 text-[11px] flex-shrink-0"
              style={{ fontFamily: "'Roboto Mono', monospace", color: '#A9A9A9' }}>
              {d.name}
            </div>
            <div className="w-36 text-[10px] text-[#A9A9A9] opacity-60 flex-shrink-0"
              style={{ fontFamily: "'Roboto Mono', monospace" }}>{d.desc}</div>
          </div>
        ))}
      </div>

      {/* Easing Curves */}
      <h3 className="text-2xl font-bold mb-6"
        style={{ fontFamily: "'Averia Serif Libre', serif", color: '#FDF5E6' }}>Curvas de Easing</h3>
      <p className="text-[13px] text-[#A9A9A9] mb-4" style={{ fontFamily: "'Roboto Mono', monospace" }}>
        Passe o mouse sobre cada barra para ver a curva em acao.
      </p>
      <div className="space-y-3 mb-12">
        {easings.map((e) => (
          <div key={e.name} className="flex items-center gap-4"
            onMouseEnter={() => setHoveredEasing(e.name)}
            onMouseLeave={() => setHoveredEasing(null)}>
            <div className="w-24 text-right text-[12px] text-[#FDF5E6] flex-shrink-0"
              style={{ fontFamily: "'Roboto Mono', monospace" }}>{e.name}</div>
            <div className="flex-1 h-8 rounded relative overflow-hidden"
              style={{ background: 'rgba(205,127,50,0.06)', border: '1px solid rgba(205,127,50,0.1)' }}>
              <div className="h-full rounded"
                style={{
                  width: hoveredEasing === e.name ? '100%' : '8%',
                  background: 'linear-gradient(90deg, rgba(205,127,50,0.4), rgba(205,127,50,0.8))',
                  transitionDuration: '600ms',
                  transitionTimingFunction: e.value,
                  transitionProperty: 'width',
                }} />
            </div>
            <div className="w-56 text-[10px] text-[#A9A9A9] flex-shrink-0"
              style={{ fontFamily: "'Roboto Mono', monospace" }}>{e.value}</div>
          </div>
        ))}
      </div>

      {/* Entrance Patterns */}
      <h3 className="text-2xl font-bold mb-6"
        style={{ fontFamily: "'Averia Serif Libre', serif", color: '#FDF5E6' }}>Padroes de Entrada</h3>
      <div className="grid grid-cols-4 gap-4 mb-12">
        {[
          { name: 'fade-in', label: 'Fade In', animation: 'bunker-fade-in 0.6s ease-out forwards' },
          { name: 'slide-up', label: 'Slide Up', animation: 'bunker-slide-up 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards' },
          { name: 'scale-in', label: 'Scale In', animation: 'bunker-scale-in 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards' },
          { name: 'glitch-in', label: 'Glitch In', animation: 'bunker-glitch-in 0.5s steps(4, end) forwards' },
        ].map((p) => (
          <div key={p.name} className="rounded-lg border border-white/5 overflow-hidden" style={{ background: '#1A1E22' }}>
            <div className="h-28 flex items-center justify-center relative">
              <div
                key={playingEntrance === p.name ? Date.now() : 'static'}
                className="px-4 py-2 rounded text-[13px]"
                style={{
                  fontFamily: "'Roboto Mono', monospace",
                  background: 'rgba(0,229,255,0.15)',
                  border: '1px solid rgba(0,229,255,0.3)',
                  color: '#00E5FF',
                  opacity: playingEntrance === p.name ? undefined : 1,
                  animation: playingEntrance === p.name ? p.animation : 'none',
                }}>
                {p.label}
              </div>
            </div>
            <button
              onClick={() => triggerEntrance(p.name)}
              className="w-full py-2.5 text-[11px] uppercase tracking-[0.1em] cursor-pointer"
              style={{
                fontFamily: "'Roboto Mono', monospace",
                background: 'rgba(0,229,255,0.08)',
                borderTop: '1px solid rgba(0,229,255,0.1)',
                color: '#00E5FF',
                border: 'none',
                borderTopWidth: 1,
                borderTopStyle: 'solid',
                borderTopColor: 'rgba(0,229,255,0.1)',
              }}>
              Play
            </button>
          </div>
        ))}
      </div>

      {/* Bunker Specials */}
      <h3 className="text-2xl font-bold mb-6"
        style={{ fontFamily: "'Averia Serif Libre', serif", color: '#FDF5E6' }}>Animacoes do Bunker</h3>
      <div className="grid grid-cols-2 gap-6 mb-10">
        <div className="rounded-lg border border-white/5 overflow-hidden" style={{ background: '#1A1E22' }}>
          <div className="h-32 flex items-center justify-center">
            <div className="text-2xl font-bold"
              style={{
                fontFamily: "'Averia Serif Libre', serif",
                color: '#00E5FF',
                animation: playingScan ? 'bunker-scan-reveal 1s ease-out forwards' : 'none',
                clipPath: playingScan ? undefined : 'inset(0 0 0 0)',
              }}>
              SCAN REVEAL
            </div>
          </div>
          <button
            onClick={() => { setPlayingScan(false); requestAnimationFrame(() => setPlayingScan(true)); setTimeout(() => setPlayingScan(false), 1500); }}
            className="w-full py-2.5 text-[11px] uppercase tracking-[0.1em] cursor-pointer"
            style={{
              fontFamily: "'Roboto Mono', monospace",
              background: 'rgba(0,229,255,0.08)',
              border: 'none',
              borderTop: '1px solid rgba(0,229,255,0.1)',
              color: '#00E5FF',
            }}>
            Play Scan Reveal
          </button>
        </div>
        <div className="rounded-lg border border-white/5 overflow-hidden" style={{ background: '#1A1E22' }}>
          <div className="h-32 flex items-center justify-center">
            <div className="text-2xl font-bold"
              style={{
                fontFamily: "'Averia Serif Libre', serif",
                color: '#CD7F32',
                animation: playingPowerOn ? 'bunker-power-on 0.8s ease-out forwards' : 'none',
              }}>
              POWER ON
            </div>
          </div>
          <button
            onClick={() => { setPlayingPowerOn(false); requestAnimationFrame(() => setPlayingPowerOn(true)); setTimeout(() => setPlayingPowerOn(false), 1500); }}
            className="w-full py-2.5 text-[11px] uppercase tracking-[0.1em] cursor-pointer"
            style={{
              fontFamily: "'Roboto Mono', monospace",
              background: 'rgba(205,127,50,0.08)',
              border: 'none',
              borderTop: '1px solid rgba(205,127,50,0.1)',
              color: '#CD7F32',
            }}>
            Play Power On
          </button>
        </div>
      </div>

      {/* Reduced Motion Note */}
      <div className="p-5 rounded-lg border border-white/5" style={{ background: 'rgba(255,170,0,0.06)', borderColor: 'rgba(255,170,0,0.15)' }}>
        <div className="text-[11px] text-[#FFAA00] uppercase tracking-[0.1em] mb-2"
          style={{ fontFamily: "'Roboto Mono', monospace" }}>Acessibilidade</div>
        <div className="text-[13px] text-[#FDF5E6]" style={{ fontFamily: "'Roboto Mono', monospace" }}>
          Todas as animacoes devem respeitar <span className="text-[#00E5FF]">@media (prefers-reduced-motion: reduce)</span>. Quando ativo, substituir animacoes por transicoes instantaneas ou remove-las completamente. Manter opacity transitions como fallback.
        </div>
      </div>
    </section>
  );
};

export default MotionSystem;
