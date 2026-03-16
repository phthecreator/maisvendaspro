import { useState, useEffect, useRef } from 'react';

const mono = "'Roboto Mono', monospace";
const serif = "'Averia Serif Libre', serif";

const GlitchText = ({ text }: { text: string }) => {
  const [glitching, setGlitching] = useState(false);

  return (
    <div
      className="relative cursor-pointer select-none"
      onMouseEnter={() => setGlitching(true)}
      onMouseLeave={() => setGlitching(false)}
      style={{
        fontFamily: serif,
        fontSize: 36,
        fontWeight: 700,
        color: '#FDF5E6',
      }}>
      <span style={{
        display: 'inline-block',
        animation: glitching ? 'bunker-glitch-text 0.3s steps(2, end) infinite' : 'none',
      }}>
        {text}
      </span>
      {glitching && (
        <>
          <span className="absolute top-0 left-0" style={{
            color: '#00E5FF',
            clipPath: 'inset(20% 0 40% 0)',
            animation: 'bunker-glitch-offset-1 0.2s steps(3, end) infinite',
          }}>
            {text}
          </span>
          <span className="absolute top-0 left-0" style={{
            color: '#FF3B30',
            clipPath: 'inset(60% 0 10% 0)',
            animation: 'bunker-glitch-offset-2 0.25s steps(2, end) infinite',
          }}>
            {text}
          </span>
        </>
      )}
    </div>
  );
};

const TerminalOutput = () => {
  const [lines, setLines] = useState<string[]>([]);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const terminalLines = [
    '$ bunker deploy --target production',
    'Connecting to server...',
    'Building project... [===========] 100%',
    'Running tests... 47/47 passed',
    'Deploying to EasyPanel...',
    'Health check: OK',
    'Deploy complete. URL: https://bunker.ia',
    '$_',
  ];

  const startTyping = () => {
    setLines([]);
    setRunning(true);
    let i = 0;
    intervalRef.current = setInterval(() => {
      if (i < terminalLines.length) {
        setLines(prev => [...prev, terminalLines[i]]);
        i++;
      } else {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setRunning(false);
      }
    }, 400);
  };

  useEffect(() => {
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  return (
    <div className="rounded-lg border border-white/5 overflow-hidden" style={{ background: '#0a0a0a' }}>
      <div className="flex items-center gap-2 px-4 py-2 border-b border-white/5">
        <div className="w-3 h-3 rounded-full" style={{ background: '#FF3B30' }} />
        <div className="w-3 h-3 rounded-full" style={{ background: '#FFAA00' }} />
        <div className="w-3 h-3 rounded-full" style={{ background: '#34C759' }} />
        <span className="text-[10px] text-[#A9A9A9] ml-2" style={{ fontFamily: mono }}>terminal</span>
      </div>
      <div className="p-4 min-h-[200px]" style={{ fontFamily: mono, fontSize: 13, lineHeight: 1.6 }}>
        {lines.map((line, i) => (
          <div key={i} style={{ color: line.startsWith('$') ? '#34C759' : line.includes('OK') || line.includes('complete') || line.includes('passed') ? '#34C759' : '#FDF5E6' }}>
            {line}
          </div>
        ))}
        {running && (
          <span className="inline-block w-2 h-4 ml-0.5" style={{ background: '#34C759', animation: 'bunker-cursor-blink 1s steps(2) infinite' }} />
        )}
        {!running && lines.length === 0 && (
          <span className="text-[#A9A9A9]">Clique em "Run" para iniciar</span>
        )}
      </div>
      <button onClick={startTyping} disabled={running}
        className="w-full py-2 text-[11px] uppercase tracking-[0.1em] cursor-pointer"
        style={{
          fontFamily: mono,
          background: 'rgba(52,199,89,0.08)',
          border: 'none',
          borderTop: '1px solid rgba(52,199,89,0.1)',
          color: running ? '#A9A9A9' : '#34C759',
        }}>
        {running ? 'Running...' : 'Run'}
      </button>
    </div>
  );
};

const RedactedText = () => {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="rounded-lg p-6 border border-white/5" style={{ background: '#1A1E22' }}>
      <div className="text-[14px] leading-loose" style={{ fontFamily: mono, color: '#FDF5E6' }}>
        Acesso ao sistema <span className="relative cursor-pointer inline-block" onClick={() => setRevealed(!revealed)}>
          <span style={{ visibility: revealed ? 'visible' : 'hidden' }}>BUNKER-ALPHA-7</span>
          {!revealed && <span className="absolute inset-0 rounded" style={{ background: '#FDF5E6', opacity: 0.9 }} />}
        </span> autorizado para nivel <span className="relative cursor-pointer inline-block" onClick={() => setRevealed(!revealed)}>
          <span style={{ visibility: revealed ? 'visible' : 'hidden' }}>CLASSIFICADO</span>
          {!revealed && <span className="absolute inset-0 rounded" style={{ background: '#FDF5E6', opacity: 0.9 }} />}
        </span>. Coordenadas: <span className="relative cursor-pointer inline-block" onClick={() => setRevealed(!revealed)}>
          <span style={{ visibility: revealed ? 'visible' : 'hidden' }}>-23.5505, -46.6339</span>
          {!revealed && <span className="absolute inset-0 rounded" style={{ background: '#FDF5E6', opacity: 0.9 }} />}
        </span>
      </div>
      <div className="text-[10px] text-[#A9A9A9] mt-3" style={{ fontFamily: mono }}>
        Clique nos blocos para {revealed ? 'ocultar' : 'revelar'}
      </div>
    </div>
  );
};

const SignalIndicator = ({ bars, label }: { bars: number; label: string }) => (
  <div className="flex items-center gap-3">
    <div className="flex items-end gap-0.5 h-5">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="w-1.5 rounded-sm transition-all duration-300"
          style={{
            height: `${i * 5}px`,
            background: i <= bars ? '#00E5FF' : 'rgba(169,169,169,0.2)',
            animation: i <= bars ? 'bunker-signal-pulse 2s ease-in-out infinite' : 'none',
            animationDelay: `${i * 0.1}s`,
          }} />
      ))}
    </div>
    <span className="text-[11px]" style={{ fontFamily: mono, color: bars >= 3 ? '#00E5FF' : bars >= 2 ? '#FFAA00' : '#FF3B30' }}>{label}</span>
  </div>
);

const BunkerSpecials = () => (
  <section id="bunker-specials" className="pb-24 border-b border-[#00E5FF]/10">
    <style>{`
      @keyframes bunker-glitch-text {
        0% { transform: translate(0); filter: hue-rotate(0deg); }
        25% { transform: translate(-2px, 1px); filter: hue-rotate(90deg); }
        50% { transform: translate(2px, -1px); filter: hue-rotate(-60deg); }
        75% { transform: translate(-1px, -1px); filter: hue-rotate(45deg); }
        100% { transform: translate(0); filter: hue-rotate(0deg); }
      }
      @keyframes bunker-glitch-offset-1 {
        0% { transform: translate(0); }
        33% { transform: translate(-3px, 1px); }
        66% { transform: translate(2px, -1px); }
        100% { transform: translate(0); }
      }
      @keyframes bunker-glitch-offset-2 {
        0% { transform: translate(0); }
        50% { transform: translate(3px, -2px); }
        100% { transform: translate(0); }
      }
      @keyframes bunker-cursor-blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
      }
      @keyframes bunker-signal-pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.5; }
      }
      @keyframes bunker-radar-line {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
    `}</style>

    <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#00E5FF] mb-3"
      style={{ fontFamily: mono }}>Componentes / Especiais</p>
    <h2 className="text-[42px] font-bold leading-tight mb-6"
      style={{ fontFamily: serif, color: '#FDF5E6' }}>Componentes do Bunker</h2>
    <p className="text-[15px] text-[#A9A9A9] max-w-[700px] mb-12 leading-relaxed"
      style={{ fontFamily: mono }}>
      Componentes tematicos exclusivos: glitch text, terminal output, texto redatado, indicador de sinal e radar scan.
    </p>

    {/* Glitch Text */}
    <h3 className="text-xl font-bold mb-4" style={{ fontFamily: serif, color: '#FDF5E6' }}>Glitch Text</h3>
    <p className="text-[12px] text-[#A9A9A9] mb-4" style={{ fontFamily: mono }}>Passe o mouse para ativar o efeito glitch.</p>
    <div className="rounded-lg p-8 border border-white/5 mb-10 flex items-center justify-center" style={{ background: '#0d1117' }}>
      <GlitchText text="CONTRA O ALGORITMO DO CAOS" />
    </div>

    {/* Terminal */}
    <h3 className="text-xl font-bold mb-4" style={{ fontFamily: serif, color: '#FDF5E6' }}>Terminal Output</h3>
    <div className="mb-10">
      <TerminalOutput />
    </div>

    {/* Redacted Text */}
    <h3 className="text-xl font-bold mb-4" style={{ fontFamily: serif, color: '#FDF5E6' }}>Texto Redatado</h3>
    <div className="mb-10">
      <RedactedText />
    </div>

    {/* Signal Indicator */}
    <h3 className="text-xl font-bold mb-4" style={{ fontFamily: serif, color: '#FDF5E6' }}>Indicador de Sinal</h3>
    <div className="rounded-lg p-6 border border-white/5 flex gap-8 flex-wrap mb-10" style={{ background: '#1A1E22' }}>
      <SignalIndicator bars={4} label="Conexao forte" />
      <SignalIndicator bars={3} label="Conexao boa" />
      <SignalIndicator bars={2} label="Sinal fraco" />
      <SignalIndicator bars={1} label="Critico" />
      <SignalIndicator bars={0} label="Sem sinal" />
    </div>

    {/* Radar Scan */}
    <h3 className="text-xl font-bold mb-4" style={{ fontFamily: serif, color: '#FDF5E6' }}>Radar Scan</h3>
    <div className="rounded-lg border border-white/5 p-8 flex flex-col items-center" style={{ background: '#0d1117' }}>
      <div className="relative" style={{ width: 160, height: 160 }}>
        {/* Concentric circles */}
        {[1, 0.75, 0.5, 0.25].map((scale) => (
          <div key={scale} className="absolute rounded-full"
            style={{
              width: `${scale * 100}%`,
              height: `${scale * 100}%`,
              top: `${(1 - scale) * 50}%`,
              left: `${(1 - scale) * 50}%`,
              border: '1px solid rgba(0,229,255,0.12)',
            }} />
        ))}
        {/* Cross lines */}
        <div className="absolute top-0 bottom-0 left-1/2 w-px" style={{ background: 'rgba(0,229,255,0.08)' }} />
        <div className="absolute left-0 right-0 top-1/2 h-px" style={{ background: 'rgba(0,229,255,0.08)' }} />
        {/* Sweep line */}
        <div className="absolute top-0 left-1/2 h-1/2 origin-bottom"
          style={{
            width: 2,
            background: 'linear-gradient(to top, rgba(0,229,255,0.6), transparent)',
            animation: 'bunker-radar-line 3s linear infinite',
            transformOrigin: 'bottom center',
          }} />
        {/* Center dot */}
        <div className="absolute rounded-full"
          style={{
            width: 6,
            height: 6,
            top: 'calc(50% - 3px)',
            left: 'calc(50% - 3px)',
            background: '#00E5FF',
            boxShadow: '0 0 8px rgba(0,229,255,0.6)',
          }} />
        {/* Blips */}
        <div className="absolute w-2 h-2 rounded-full" style={{ top: '25%', left: '60%', background: '#00E5FF', opacity: 0.6 }} />
        <div className="absolute w-1.5 h-1.5 rounded-full" style={{ top: '65%', left: '30%', background: '#00E5FF', opacity: 0.4 }} />
      </div>
      <div className="text-[11px] text-[#00E5FF] uppercase tracking-[0.1em] mt-4"
        style={{ fontFamily: mono }}>Escaneando setor...</div>
    </div>
  </section>
);

export default BunkerSpecials;
