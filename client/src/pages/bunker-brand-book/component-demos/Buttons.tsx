import { useState } from 'react';
import { Shield, Zap, Lock, AlertTriangle, ChevronRight, Download, Settings } from 'lucide-react';

const mono = "'Roboto Mono', monospace";
const btnBase = {
  fontFamily: mono,
  fontSize: 13,
  fontWeight: 500,
  letterSpacing: '0.05em',
  textTransform: 'uppercase' as const,
  cursor: 'pointer',
  transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
  border: 'none',
  borderRadius: 6,
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,
};

const Buttons = () => {
  const [loading, setLoading] = useState(false);

  return (
    <section id="buttons">
      <style>{`
        @keyframes bunker-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>

      <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#00E5FF] mb-3"
        style={{ fontFamily: mono }}>Componentes / Botoes</p>
      <h2 className="text-[42px] font-bold leading-tight mb-6"
        style={{ fontFamily: "'Averia Serif Libre', serif", color: '#FDF5E6' }}>Botoes</h2>
      <p className="text-[15px] text-[#A9A9A9] max-w-[700px] mb-12 leading-relaxed"
        style={{ fontFamily: mono }}>
        5 variantes de botao, estados de loading, tamanhos e versoes com icone. Todos com Roboto Mono uppercase e tracking.
      </p>

      {/* Row 1: Variants */}
      <h3 className="text-xl font-bold mb-4"
        style={{ fontFamily: "'Averia Serif Libre', serif", color: '#FDF5E6' }}>Variantes</h3>
      <div className="flex gap-4 flex-wrap mb-10">
        <button style={{
          ...btnBase,
          padding: '12px 24px',
          background: '#00E5FF',
          color: '#1A1E22',
          boxShadow: '0 0 20px rgba(0,229,255,0.3)',
        }}>
          <Shield size={16} /> Primary
        </button>
        <button style={{
          ...btnBase,
          padding: '12px 24px',
          background: 'transparent',
          color: '#00E5FF',
          border: '1px solid #00E5FF',
        }}>
          <Zap size={16} /> Secondary
        </button>
        <button style={{
          ...btnBase,
          padding: '12px 24px',
          background: 'linear-gradient(135deg, #8B4513, #CD7F32)',
          color: '#FDF5E6',
          boxShadow: '0 0 15px rgba(205,127,50,0.3)',
        }}>
          <Lock size={16} /> Rust
        </button>
        <button style={{
          ...btnBase,
          padding: '12px 24px',
          background: 'transparent',
          color: '#A9A9A9',
          border: '1px solid rgba(169,169,169,0.3)',
        }}>
          Ghost
        </button>
        <button style={{
          ...btnBase,
          padding: '12px 24px',
          background: '#FF3B30',
          color: '#FDF5E6',
          boxShadow: '0 0 15px rgba(255,59,48,0.3)',
        }}>
          <AlertTriangle size={16} /> Destructive
        </button>
      </div>

      {/* Row 2: Icon-only */}
      <h3 className="text-xl font-bold mb-4"
        style={{ fontFamily: "'Averia Serif Libre', serif", color: '#FDF5E6' }}>Icone Only</h3>
      <div className="flex gap-3 flex-wrap mb-10">
        {[
          { icon: <Shield size={18} />, bg: '#00E5FF', color: '#1A1E22' },
          { icon: <Zap size={18} />, bg: 'transparent', color: '#00E5FF', border: '1px solid #00E5FF' },
          { icon: <Lock size={18} />, bg: 'linear-gradient(135deg, #8B4513, #CD7F32)', color: '#FDF5E6' },
          { icon: <Settings size={18} />, bg: 'transparent', color: '#A9A9A9', border: '1px solid rgba(169,169,169,0.3)' },
          { icon: <Download size={18} />, bg: 'rgba(0,229,255,0.12)', color: '#00E5FF' },
          { icon: <ChevronRight size={18} />, bg: 'rgba(205,127,50,0.12)', color: '#CD7F32' },
        ].map((btn, i) => (
          <button key={i} className="flex items-center justify-center rounded-full cursor-pointer transition-all duration-200"
            style={{
              width: 44,
              height: 44,
              background: btn.bg,
              color: btn.color,
              border: btn.border || 'none',
            }}>
            {btn.icon}
          </button>
        ))}
      </div>

      {/* Row 3: Loading */}
      <h3 className="text-xl font-bold mb-4"
        style={{ fontFamily: "'Averia Serif Libre', serif", color: '#FDF5E6' }}>Estado de Loading</h3>
      <div className="flex gap-4 mb-10">
        <button
          onClick={() => { setLoading(true); setTimeout(() => setLoading(false), 2000); }}
          style={{
            ...btnBase,
            padding: '12px 24px',
            background: loading ? 'rgba(0,229,255,0.5)' : '#00E5FF',
            color: '#1A1E22',
            opacity: loading ? 0.8 : 1,
          }}>
          {loading ? (
            <>
              <div style={{
                width: 16,
                height: 16,
                border: '2px solid rgba(26,30,34,0.3)',
                borderTopColor: '#1A1E22',
                borderRadius: '50%',
                animation: 'bunker-spin 0.6s linear infinite',
              }} />
              Processing...
            </>
          ) : (
            <>Clique para testar</>
          )}
        </button>
        <button style={{
          ...btnBase,
          padding: '12px 24px',
          background: 'rgba(0,229,255,0.5)',
          color: '#1A1E22',
          opacity: 0.8,
        }}>
          <div style={{
            width: 16,
            height: 16,
            border: '2px solid rgba(26,30,34,0.3)',
            borderTopColor: '#1A1E22',
            borderRadius: '50%',
            animation: 'bunker-spin 0.6s linear infinite',
          }} />
          Processing...
        </button>
      </div>

      {/* Row 4: Sizes */}
      <h3 className="text-xl font-bold mb-4"
        style={{ fontFamily: "'Averia Serif Libre', serif", color: '#FDF5E6' }}>Tamanhos</h3>
      <div className="flex gap-4 items-center">
        <button style={{ ...btnBase, padding: '8px 16px', fontSize: 11, background: '#00E5FF', color: '#1A1E22' }}>
          Small
        </button>
        <button style={{ ...btnBase, padding: '12px 24px', fontSize: 13, background: '#00E5FF', color: '#1A1E22' }}>
          Medium
        </button>
        <button style={{ ...btnBase, padding: '16px 32px', fontSize: 15, background: '#00E5FF', color: '#1A1E22' }}>
          Large
        </button>
      </div>
    </section>
  );
};

export default Buttons;
