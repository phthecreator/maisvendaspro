import { useState } from 'react';
import { TrendingUp, TrendingDown, Check, ChevronRight, Flame, Zap, Star } from 'lucide-react';

const mono = "'Roboto Mono', monospace";
const serif = "'Averia Serif Libre', serif";

const ValueStackRow = ({ item, originalValue }: { item: string; originalValue: string }) => (
  <div className="flex items-center justify-between py-3 border-b" style={{ borderColor: 'rgba(255,107,0,0.08)' }}>
    <div className="flex items-center gap-3">
      <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#FF6B00' }} />
      <span className="text-[13px]" style={{ fontFamily: mono, color: '#FFF8F0' }}>{item}</span>
    </div>
    <span className="text-[13px] line-through" style={{ fontFamily: mono, color: '#B8976A' }}>{originalValue}</span>
  </div>
);

const WeekBadge = ({ week, active }: { week: string; active: boolean }) => (
  <div className="flex flex-col items-center gap-1.5">
    <div className="w-11 h-11 rounded-full flex items-center justify-center text-[12px] font-bold border-2 transition-all duration-300"
      style={{
        fontFamily: mono,
        background: active ? 'rgba(255,107,0,0.15)' : 'transparent',
        borderColor: active ? '#FF6B00' : 'rgba(184,151,106,0.2)',
        color: active ? '#FF6B00' : '#B8976A',
        boxShadow: active ? '0 0 12px rgba(255,107,0,0.2)' : 'none',
      }}>
      {week}
    </div>
    <div className="w-1.5 h-1.5 rounded-full" style={{ background: active ? '#FF6B00' : 'rgba(184,151,106,0.15)' }} />
  </div>
);

const MetricCard = ({ label, value, trend, up }: { label: string; value: string; trend: string; up: boolean }) => (
  <div className="rounded-lg p-4 border" style={{ background: '#2A1810', borderColor: 'rgba(255,107,0,0.08)' }}>
    <div className="text-[10px] uppercase tracking-[0.15em] mb-2" style={{ fontFamily: mono, color: '#B8976A' }}>{label}</div>
    <div className="flex items-end justify-between">
      <span className="text-[24px] font-bold" style={{ fontFamily: serif, color: '#FFF8F0' }}>{value}</span>
      <div className="flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded"
        style={{
          fontFamily: mono,
          color: up ? '#34C759' : '#FF3B30',
          background: up ? 'rgba(52,199,89,0.1)' : 'rgba(255,59,48,0.1)',
        }}>
        {up ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
        {trend}
      </div>
    </div>
  </div>
);

const StatusIndicator = ({ label, active }: { label: string; active: boolean }) => (
  <div className="flex items-center gap-3">
    <div className="relative">
      <div className="w-2.5 h-2.5 rounded-full"
        style={{ background: active ? '#34C759' : '#B8976A' }} />
      {active && (
        <div className="absolute inset-0 w-2.5 h-2.5 rounded-full"
          style={{
            background: '#34C759',
            animation: 'forja-status-pulse 2s ease-in-out infinite',
          }} />
      )}
    </div>
    <span className="text-[12px] uppercase tracking-[0.1em]"
      style={{ fontFamily: mono, color: active ? '#FFF8F0' : '#B8976A' }}>
      {label}
    </span>
  </div>
);

const ForjaSpecials = () => {
  const [checkedItems, setCheckedItems] = useState([true, true, false, false, false]);

  const toggleCheck = (index: number) => {
    const updated = [...checkedItems];
    updated[index] = !updated[index];
    setCheckedItems(updated);
  };

  return (
    <section id="forja-specials">
      <style>{`
        @keyframes forja-status-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0; transform: scale(2.5); }
        }
      `}</style>

      <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#FF6B00] mb-3"
        style={{ fontFamily: mono }}>Componentes / Especiais</p>
      <h2 className="text-[42px] font-bold leading-tight mb-6"
        style={{ fontFamily: serif, color: '#FFF8F0' }}>Componentes da Forja</h2>
      <p className="text-[15px] text-[#B8976A] max-w-[700px] mb-12 leading-relaxed"
        style={{ fontFamily: mono }}>
        Componentes tematicos exclusivos: value stack, week badges, metricas, status indicators, checklist de qualificacao e pricing card.
      </p>

      {/* Value Stack Row */}
      <h3 className="text-xl font-bold mb-4" style={{ fontFamily: serif, color: '#FFF8F0' }}>Value Stack Row</h3>
      <div className="rounded-lg p-6 border mb-10 max-w-[500px]"
        style={{ background: '#2A1810', borderColor: 'rgba(255,107,0,0.08)' }}>
        <div className="text-[11px] text-[#FF6B00] uppercase tracking-[0.15em] mb-4" style={{ fontFamily: mono }}>
          O que voce recebe
        </div>
        <ValueStackRow item="12 Sessoes Individuais (Bigorna)" originalValue="R$ 24.000" />
        <ValueStackRow item="Squad de IA Personalizado" originalValue="R$ 15.000" />
        <ValueStackRow item="12 Sessoes em Grupo (Mesa de Ferro)" originalValue="R$ 6.000" />
        <ValueStackRow item="Templates e Playbooks Exclusivos" originalValue="R$ 4.000" />
        <ValueStackRow item="Suporte SOS Emergencial" originalValue="R$ 3.000" />
        <div className="flex items-center justify-between pt-4 mt-2">
          <span className="text-[13px] font-bold" style={{ fontFamily: mono, color: '#FFD700' }}>VALOR TOTAL</span>
          <span className="text-[18px] font-bold line-through" style={{ fontFamily: serif, color: '#B8976A' }}>R$ 52.000</span>
        </div>
      </div>

      {/* Week Badges */}
      <h3 className="text-xl font-bold mb-4" style={{ fontFamily: serif, color: '#FFF8F0' }}>Week Badges</h3>
      <div className="rounded-lg p-6 border mb-10" style={{ background: '#2A1810', borderColor: 'rgba(255,107,0,0.08)' }}>
        <div className="flex gap-3 flex-wrap items-center">
          {Array.from({ length: 12 }, (_, i) => (
            <WeekBadge key={i} week={`S${i + 1}`} active={i < 5} />
          ))}
        </div>
        <div className="mt-4 flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ background: 'rgba(255,107,0,0.15)', border: '2px solid #FF6B00' }} />
            <span className="text-[10px]" style={{ fontFamily: mono, color: '#B8976A' }}>Completa</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ border: '2px solid rgba(184,151,106,0.2)' }} />
            <span className="text-[10px]" style={{ fontFamily: mono, color: '#B8976A' }}>Pendente</span>
          </div>
        </div>
      </div>

      {/* Metric Cards */}
      <h3 className="text-xl font-bold mb-4" style={{ fontFamily: serif, color: '#FFF8F0' }}>Metric Cards</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        <MetricCard label="Receita" value="R$ 47k" trend="+23%" up={true} />
        <MetricCard label="Leads" value="184" trend="+12%" up={true} />
        <MetricCard label="CAC" value="R$ 42" trend="-18%" up={false} />
        <MetricCard label="LTV" value="R$ 2.8k" trend="+8%" up={true} />
      </div>

      {/* Status Indicators */}
      <h3 className="text-xl font-bold mb-4" style={{ fontFamily: serif, color: '#FFF8F0' }}>Status Indicators</h3>
      <div className="rounded-lg p-6 border mb-10 flex flex-wrap gap-8"
        style={{ background: '#2A1810', borderColor: 'rgba(255,107,0,0.08)' }}>
        <StatusIndicator label="FORJA ATIVA" active={true} />
        <StatusIndicator label="SQUAD OPERANDO" active={true} />
        <StatusIndicator label="BIGORNA AGENDADA" active={true} />
        <StatusIndicator label="SOS DISPONIVEL" active={false} />
        <StatusIndicator label="REVIEW PENDENTE" active={false} />
      </div>

      {/* Qualification Checklist */}
      <h3 className="text-xl font-bold mb-4" style={{ fontFamily: serif, color: '#FFF8F0' }}>Checklist de Qualificacao</h3>
      <div className="rounded-lg p-6 border mb-10 max-w-[500px]"
        style={{ background: '#2A1810', borderColor: 'rgba(255,107,0,0.08)' }}>
        <div className="text-[11px] text-[#FF6B00] uppercase tracking-[0.15em] mb-4" style={{ fontFamily: mono }}>
          Voce se qualifica?
        </div>
        <div className="space-y-3">
          {[
            'Faturamento acima de R$ 15k/mes',
            'Equipe de pelo menos 2 pessoas',
            'Disposicao para implementar em 90 dias',
            'Orcamento para ferramentas de IA',
            'Compromisso com calls semanais',
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 cursor-pointer" onClick={() => toggleCheck(i)}>
              <div className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 transition-all duration-200"
                style={{
                  background: checkedItems[i] ? '#FF6B00' : 'transparent',
                  border: checkedItems[i] ? '1px solid #FF6B00' : '1px solid rgba(184,151,106,0.3)',
                }}>
                {checkedItems[i] && <Check size={13} color="#1A0A00" strokeWidth={3} />}
              </div>
              <span className="text-[13px]" style={{
                fontFamily: mono,
                color: checkedItems[i] ? '#FFF8F0' : '#B8976A',
              }}>
                {item}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-5 pt-4" style={{ borderTop: '1px solid rgba(255,107,0,0.08)' }}>
          <div className="flex items-center gap-2">
            <span className="text-[12px] font-medium" style={{ fontFamily: mono, color: '#FF6B00' }}>
              {checkedItems.filter(Boolean).length}/5 criterios atendidos
            </span>
            {checkedItems.filter(Boolean).length >= 3 && (
              <span className="text-[10px] px-2 py-0.5 rounded" style={{ fontFamily: mono, background: 'rgba(52,199,89,0.1)', color: '#34C759' }}>
                QUALIFICADO
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Pricing Card */}
      <h3 className="text-xl font-bold mb-4" style={{ fontFamily: serif, color: '#FFF8F0' }}>Pricing Card</h3>
      <div className="max-w-[360px]">
        <div className="rounded-xl border overflow-hidden relative"
          style={{
            background: '#2A1810',
            borderColor: '#FF6B00',
            boxShadow: '0 0 30px rgba(255,107,0,0.15)',
          }}>
          {/* Badge */}
          <div className="text-center py-2 text-[10px] uppercase tracking-[0.2em] font-bold"
            style={{ fontFamily: mono, background: 'linear-gradient(90deg, #FF6B00, #FFD700)', color: '#1A0A00' }}>
            Mais Popular
          </div>

          <div className="p-6">
            <div className="text-center mb-6">
              <div className="text-[11px] text-[#FF6B00] uppercase tracking-[0.15em] mb-2" style={{ fontFamily: mono }}>
                Forja Completa
              </div>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-[11px]" style={{ fontFamily: mono, color: '#B8976A' }}>12x de</span>
                <span className="text-[36px] font-bold" style={{ fontFamily: serif, color: '#FFF8F0' }}>R$ 997</span>
              </div>
              <div className="text-[11px] mt-1" style={{ fontFamily: mono, color: '#B8976A' }}>
                ou R$ 9.970 a vista (desconto de 17%)
              </div>
            </div>

            <div className="space-y-2.5 mb-6">
              {[
                '12 sessoes individuais (Bigorna)',
                '12 sessoes em grupo (Mesa de Ferro)',
                'Squad de IA personalizado',
                'Templates e playbooks',
                'Canal SOS emergencial',
                'Acesso ao Bunker da IA',
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-2.5">
                  <Check size={14} style={{ color: '#FF6B00', flexShrink: 0 }} />
                  <span className="text-[12px]" style={{ fontFamily: mono, color: '#FFF8F0' }}>{feature}</span>
                </div>
              ))}
            </div>

            <button style={{
              fontFamily: mono,
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: '0.05em',
              textTransform: 'uppercase' as const,
              cursor: 'pointer',
              border: 'none',
              borderRadius: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              width: '100%',
              padding: '14px 24px',
              background: '#FF6B00',
              color: '#1A0A00',
              boxShadow: '0 0 20px rgba(255,107,0,0.3)',
              transition: 'all 0.2s',
            }}>
              <Flame size={16} /> Comecar Agora
              <ChevronRight size={16} />
            </button>

            <p className="text-center text-[10px] mt-3" style={{ fontFamily: mono, color: '#B8976A' }}>
              Garantia de 7 dias ou seu dinheiro de volta
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForjaSpecials;
