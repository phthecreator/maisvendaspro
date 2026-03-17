import { useState } from 'react';
import { Info, CheckCircle, AlertTriangle, XCircle, X, Flame } from 'lucide-react';

const mono = "'Roboto Mono', monospace";
const serif = "'Averia Serif Libre', serif";

const alertConfigs = [
  { type: 'success', icon: <CheckCircle size={18} />, color: '#34C759', bg: 'rgba(52,199,89,0.08)', border: 'rgba(52,199,89,0.2)', message: 'Implementacao concluida com sucesso. Squad ativo e operando.' },
  { type: 'warning', icon: <AlertTriangle size={18} />, color: '#FFAA00', bg: 'rgba(255,170,0,0.08)', border: 'rgba(255,170,0,0.2)', message: 'Atencao: sua sessao da Bigorna e amanha as 14h. Prepare suas duvidas.' },
  { type: 'error', icon: <XCircle size={18} />, color: '#FF3B30', bg: 'rgba(255,59,48,0.08)', border: 'rgba(255,59,48,0.2)', message: 'Falha ao processar pagamento. Verifique os dados do cartao.' },
  { type: 'info', icon: <Flame size={18} />, color: '#FF6B00', bg: 'rgba(255,107,0,0.08)', border: 'rgba(255,107,0,0.2)', message: 'Nova funcionalidade: Squad de Conteudo IA disponivel para ativacao.' },
];

const Feedback = () => {
  const [dismissed, setDismissed] = useState<string[]>([]);
  const [progress, setProgress] = useState(65);

  return (
    <section id="feedback">
      <style>{`
        @keyframes forja-skeleton-pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.15; }
        }
      `}</style>

      <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#FF6B00] mb-3"
        style={{ fontFamily: mono }}>Componentes / Feedback</p>
      <h2 className="text-[42px] font-bold leading-tight mb-6"
        style={{ fontFamily: serif, color: '#FFF8F0' }}>Feedback</h2>
      <p className="text-[15px] text-[#B8976A] max-w-[700px] mb-12 leading-relaxed"
        style={{ fontFamily: mono }}>
        Alertas, toasts, barras de progresso e skeletons. Feedback visual para estados do sistema.
      </p>

      {/* Alert Boxes */}
      <h3 className="text-xl font-bold mb-4" style={{ fontFamily: serif, color: '#FFF8F0' }}>Alertas</h3>
      <div className="space-y-3 mb-10">
        {alertConfigs.filter(a => !dismissed.includes(a.type)).map((alert) => (
          <div key={alert.type} className="rounded-lg px-4 py-3.5 flex items-start gap-3"
            style={{ background: alert.bg, border: `1px solid ${alert.border}` }}>
            <div className="flex-shrink-0 mt-0.5" style={{ color: alert.color }}>{alert.icon}</div>
            <div className="flex-1 text-[13px]" style={{ fontFamily: mono, color: '#FFF8F0' }}>
              {alert.message}
            </div>
            <button className="flex-shrink-0 cursor-pointer p-1 rounded transition-colors duration-200"
              style={{ color: alert.color, background: 'transparent', border: 'none' }}
              onClick={() => setDismissed([...dismissed, alert.type])}>
              <X size={14} />
            </button>
          </div>
        ))}
        {dismissed.length > 0 && (
          <button className="text-[11px] text-[#FF6B00] cursor-pointer underline"
            style={{ fontFamily: mono, background: 'transparent', border: 'none' }}
            onClick={() => setDismissed([])}>
            Mostrar todos os alertas
          </button>
        )}
      </div>

      {/* Toast Notifications */}
      <h3 className="text-xl font-bold mb-4" style={{ fontFamily: serif, color: '#FFF8F0' }}>Toast Notifications</h3>
      <div className="mb-10 relative" style={{ minHeight: 200 }}>
        <div className="flex flex-col gap-3" style={{ maxWidth: 380 }}>
          {[
            { icon: <CheckCircle size={16} />, color: '#34C759', title: 'Squad ativado', desc: 'Seu squad de conteudo IA esta operando.', time: 'Agora' },
            { icon: <Flame size={16} />, color: '#FF6B00', title: 'Nova bigorna agendada', desc: 'Sessao individual confirmada para quinta.', time: '2 min atras' },
            { icon: <AlertTriangle size={16} />, color: '#FFAA00', title: 'Acao necessaria', desc: 'Complete seu perfil para desbloquear recursos.', time: '5 min atras' },
          ].map((toast, i) => (
            <div key={i} className="rounded-lg px-4 py-3 flex items-start gap-3 border"
              style={{
                background: '#2A1810',
                borderColor: 'rgba(255,107,0,0.1)',
                boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
              }}>
              <div className="flex-shrink-0 mt-0.5" style={{ color: toast.color }}>{toast.icon}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-0.5">
                  <span className="text-[12px] font-medium" style={{ fontFamily: mono, color: '#FFF8F0' }}>{toast.title}</span>
                  <span className="text-[10px] ml-2 flex-shrink-0" style={{ fontFamily: mono, color: '#B8976A' }}>{toast.time}</span>
                </div>
                <p className="text-[11px]" style={{ fontFamily: mono, color: '#B8976A' }}>{toast.desc}</p>
              </div>
              <button className="flex-shrink-0 cursor-pointer p-0.5" style={{ color: '#B8976A', background: 'transparent', border: 'none' }}>
                <X size={12} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <h3 className="text-xl font-bold mb-4" style={{ fontFamily: serif, color: '#FFF8F0' }}>Barra de Progresso</h3>
      <div className="space-y-6 mb-10">
        <div>
          <div className="flex justify-between mb-1.5">
            <span className="text-[11px] text-[#B8976A]" style={{ fontFamily: mono }}>Progresso do Programa</span>
            <span className="text-[11px] text-[#FF6B00]" style={{ fontFamily: mono }}>{progress}%</span>
          </div>
          <div className="h-2.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,107,0,0.1)' }}>
            <div className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #FF6B00, #FFD700)',
              }} />
          </div>
          <div className="flex gap-2 mt-2">
            <button onClick={() => setProgress(Math.max(0, progress - 10))}
              className="text-[10px] px-2 py-0.5 rounded cursor-pointer"
              style={{ fontFamily: mono, background: 'rgba(255,107,0,0.1)', color: '#FF6B00', border: 'none' }}>-10</button>
            <button onClick={() => setProgress(Math.min(100, progress + 10))}
              className="text-[10px] px-2 py-0.5 rounded cursor-pointer"
              style={{ fontFamily: mono, background: 'rgba(255,107,0,0.1)', color: '#FF6B00', border: 'none' }}>+10</button>
          </div>
        </div>

        {/* Secondary progress */}
        <div>
          <div className="flex justify-between mb-1.5">
            <span className="text-[11px] text-[#B8976A]" style={{ fontFamily: mono }}>Semanas Completas</span>
            <span className="text-[11px] text-[#FFD700]" style={{ fontFamily: mono }}>8/12</span>
          </div>
          <div className="h-2 rounded-full overflow-hidden" style={{ background: 'rgba(255,215,0,0.1)' }}>
            <div className="h-full rounded-full"
              style={{ width: '66.7%', background: 'linear-gradient(90deg, #FFD700, #FFA800)' }} />
          </div>
        </div>
      </div>

      {/* Skeleton Loader */}
      <h3 className="text-xl font-bold mb-4" style={{ fontFamily: serif, color: '#FFF8F0' }}>Skeleton Loader</h3>
      <div className="rounded-lg p-6 border" style={{ background: '#2A1810', borderColor: 'rgba(255,107,0,0.05)' }}>
        <div className="flex gap-4">
          <div className="w-12 h-12 rounded-full flex-shrink-0"
            style={{ background: 'rgba(255,107,0,0.08)', animation: 'forja-skeleton-pulse 1.5s ease-in-out infinite' }} />
          <div className="flex-1 space-y-3">
            <div className="h-4 rounded w-1/3"
              style={{ background: 'rgba(255,107,0,0.08)', animation: 'forja-skeleton-pulse 1.5s ease-in-out infinite 0.1s' }} />
            <div className="h-3 rounded w-full"
              style={{ background: 'rgba(255,107,0,0.06)', animation: 'forja-skeleton-pulse 1.5s ease-in-out infinite 0.2s' }} />
            <div className="h-3 rounded w-2/3"
              style={{ background: 'rgba(255,107,0,0.06)', animation: 'forja-skeleton-pulse 1.5s ease-in-out infinite 0.3s' }} />
          </div>
        </div>
        <div className="mt-6 grid grid-cols-3 gap-4">
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-20 rounded-lg"
              style={{ background: 'rgba(255,107,0,0.06)', animation: `forja-skeleton-pulse 1.5s ease-in-out infinite ${0.1 * i}s` }} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feedback;
