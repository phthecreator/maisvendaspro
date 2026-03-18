import { useState } from 'react';
import { Info, CheckCircle, AlertTriangle, XCircle, X } from 'lucide-react';

const mono = "'Roboto Mono', monospace";
const serif = "'Averia Serif Libre', serif";

const alertConfigs = [
  { type: 'info', icon: <Info size={18} />, color: '#00E5FF', bg: 'rgba(0,229,255,0.08)', border: 'rgba(0,229,255,0.2)', message: 'Nova versao disponivel. Atualize para a v2.4.0.' },
  { type: 'success', icon: <CheckCircle size={18} />, color: '#34C759', bg: 'rgba(52,199,89,0.08)', border: 'rgba(52,199,89,0.2)', message: 'Deploy realizado com sucesso em producao.' },
  { type: 'warning', icon: <AlertTriangle size={18} />, color: '#FFAA00', bg: 'rgba(255,170,0,0.08)', border: 'rgba(255,170,0,0.2)', message: 'Uso de tokens atingiu 85% do limite mensal.' },
  { type: 'error', icon: <XCircle size={18} />, color: '#FF3B30', bg: 'rgba(255,59,48,0.08)', border: 'rgba(255,59,48,0.2)', message: 'Falha na conexao com o servidor de build.' },
];

const Feedback = () => {
  const [dismissed, setDismissed] = useState<string[]>([]);
  const [showBanner, setShowBanner] = useState(true);
  const [progress, setProgress] = useState(65);

  return (
    <section id="feedback">
      <style>{`
        @keyframes bunker-skeleton-pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.15; }
        }
        @keyframes bunker-spinner {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>

      <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#00E5FF] mb-3"
        style={{ fontFamily: mono }}>Componentes / Feedback</p>
      <h2 className="text-[42px] font-bold leading-tight mb-6"
        style={{ fontFamily: serif, color: '#FDF5E6' }}>Feedback</h2>
      <p className="text-[15px] text-[#A9A9A9] max-w-[700px] mb-12 leading-relaxed"
        style={{ fontFamily: mono }}>
        Alertas, barras de progresso, skeletons, spinners e banners. Feedback visual para estados do sistema.
      </p>

      {/* Alerts */}
      <h3 className="text-xl font-bold mb-4" style={{ fontFamily: serif, color: '#FDF5E6' }}>Alertas</h3>
      <div className="space-y-3 mb-10">
        {alertConfigs.filter(a => !dismissed.includes(a.type)).map((alert) => (
          <div key={alert.type} className="rounded-lg px-4 py-3.5 flex items-start gap-3"
            style={{ background: alert.bg, border: `1px solid ${alert.border}` }}>
            <div className="flex-shrink-0 mt-0.5" style={{ color: alert.color }}>{alert.icon}</div>
            <div className="flex-1 text-[13px]" style={{ fontFamily: mono, color: '#FDF5E6' }}>
              {alert.message}
            </div>
            <button className="flex-shrink-0 cursor-pointer min-h-[44px] min-w-[44px] p-2 rounded transition-colors duration-200 flex items-center justify-center"
              style={{ color: alert.color, background: 'transparent', border: 'none' }}
              onClick={() => setDismissed([...dismissed, alert.type])}>
              <X size={14} />
            </button>
          </div>
        ))}
        {dismissed.length > 0 && (
          <button className="text-[11px] text-[#00E5FF] cursor-pointer underline"
            style={{ fontFamily: mono, background: 'transparent', border: 'none' }}
            onClick={() => setDismissed([])}>
            Mostrar todos os alertas
          </button>
        )}
      </div>

      {/* Progress Bars */}
      <h3 className="text-xl font-bold mb-4" style={{ fontFamily: serif, color: '#FDF5E6' }}>Barra de Progresso</h3>
      <div className="space-y-6 mb-10">
        <div>
          <div className="flex justify-between mb-1.5">
            <span className="text-[11px] text-[#A9A9A9]" style={{ fontFamily: mono }}>Deploy Progress</span>
            <span className="text-[11px] text-[#00E5FF]" style={{ fontFamily: mono }}>{progress}%</span>
          </div>
          <div className="h-2 rounded-full overflow-hidden" style={{ background: '#2F353A' }}>
            <div className="h-full rounded-full transition-all duration-500"
              style={{ width: `${progress}%`, background: '#00E5FF' }} />
          </div>
          <div className="flex gap-2 mt-2">
            <button onClick={() => setProgress(Math.max(0, progress - 10))}
              className="text-xs px-3 py-2 min-h-[44px] rounded cursor-pointer"
              style={{ fontFamily: mono, background: 'rgba(0,229,255,0.1)', color: '#00E5FF', border: 'none' }}>-10</button>
            <button onClick={() => setProgress(Math.min(100, progress + 10))}
              className="text-xs px-3 py-2 min-h-[44px] rounded cursor-pointer"
              style={{ fontFamily: mono, background: 'rgba(0,229,255,0.1)', color: '#00E5FF', border: 'none' }}>+10</button>
          </div>
        </div>

        {/* Damage Meter */}
        <div>
          <div className="flex justify-between mb-1.5">
            <span className="text-[11px] text-[#A9A9A9]" style={{ fontFamily: mono }}>Damage Meter</span>
            <span className="text-[11px] text-[#FF3B30]" style={{ fontFamily: mono }}>78%</span>
          </div>
          <div className="h-3 rounded-full overflow-hidden relative" style={{ background: '#2F353A' }}>
            <div className="h-full rounded-full relative"
              style={{
                width: '78%',
                background: 'linear-gradient(90deg, #FF3B30, #FFAA00, #FF3B30)',
              }}>
              <div className="absolute inset-0" style={{
                background: 'repeating-linear-gradient(90deg, transparent, transparent 8px, rgba(0,0,0,0.15) 8px, rgba(0,0,0,0.15) 10px)',
              }} />
            </div>
          </div>
        </div>
      </div>

      {/* Skeleton */}
      <h3 className="text-xl font-bold mb-4" style={{ fontFamily: serif, color: '#FDF5E6' }}>Skeleton Loader</h3>
      <div className="rounded-lg p-6 border border-white/5 mb-10" style={{ background: '#2F353A' }}>
        <div className="flex gap-4">
          <div className="w-12 h-12 rounded-full flex-shrink-0"
            style={{ background: '#1A1E22', animation: 'bunker-skeleton-pulse 1.5s ease-in-out infinite' }} />
          <div className="flex-1 space-y-3">
            <div className="h-4 rounded w-1/3"
              style={{ background: '#1A1E22', animation: 'bunker-skeleton-pulse 1.5s ease-in-out infinite 0.1s' }} />
            <div className="h-3 rounded w-full"
              style={{ background: '#1A1E22', animation: 'bunker-skeleton-pulse 1.5s ease-in-out infinite 0.2s' }} />
            <div className="h-3 rounded w-2/3"
              style={{ background: '#1A1E22', animation: 'bunker-skeleton-pulse 1.5s ease-in-out infinite 0.3s' }} />
          </div>
        </div>
      </div>

      {/* Spinner */}
      <h3 className="text-xl font-bold mb-4" style={{ fontFamily: serif, color: '#FDF5E6' }}>Spinner</h3>
      <div className="flex items-center gap-8 mb-10">
        {[20, 32, 48].map((size) => (
          <div key={size} className="flex flex-col items-center gap-2">
            <div style={{
              width: size,
              height: size,
              borderRadius: '50%',
              border: `${Math.max(2, size / 12)}px solid rgba(0,229,255,0.2)`,
              borderTopColor: '#00E5FF',
              animation: 'bunker-spinner 0.8s linear infinite',
            }} />
            <span className="text-[10px] text-[#A9A9A9]" style={{ fontFamily: mono }}>{size}px</span>
          </div>
        ))}
      </div>

      {/* Banner */}
      <h3 className="text-xl font-bold mb-4" style={{ fontFamily: serif, color: '#FDF5E6' }}>Banner</h3>
      {showBanner ? (
        <div className="rounded-lg px-6 py-3 flex items-center justify-between"
          style={{ background: 'linear-gradient(90deg, rgba(0,229,255,0.12), rgba(58,134,255,0.08))', border: '1px solid rgba(0,229,255,0.15)' }}>
          <div className="flex items-center gap-3">
            <Info size={16} color="#00E5FF" />
            <span className="text-[13px] text-[#FDF5E6]" style={{ fontFamily: mono }}>
              Bunker da IA Cohort #4 abre em 15 dias. Garanta sua vaga.
            </span>
          </div>
          <button className="cursor-pointer min-h-[44px] min-w-[44px] p-2 rounded flex items-center justify-center" style={{ color: '#A9A9A9', background: 'transparent', border: 'none' }}
            onClick={() => setShowBanner(false)}>
            <X size={14} />
          </button>
        </div>
      ) : (
        <button className="text-[11px] text-[#00E5FF] cursor-pointer underline"
          style={{ fontFamily: mono, background: 'transparent', border: 'none' }}
          onClick={() => setShowBanner(true)}>
          Mostrar banner
        </button>
      )}
    </section>
  );
};

export default Feedback;
