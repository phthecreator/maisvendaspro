import { Flame, TrendingUp, TrendingDown, Zap, Target, Shield, Star } from 'lucide-react';

const mono = "'Roboto Mono', monospace";
const serif = "'Averia Serif Libre', serif";

const Cards = () => (
  <section id="cards">
    <style>{`
      @keyframes forja-glow-pulse {
        0%, 100% { box-shadow: 0 0 15px rgba(255,107,0,0.2), 0 0 30px rgba(255,107,0,0.1); }
        50% { box-shadow: 0 0 25px rgba(255,107,0,0.4), 0 0 50px rgba(255,107,0,0.2); }
      }
    `}</style>

    <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#FF6B00] mb-3"
      style={{ fontFamily: mono }}>Componentes / Cards</p>
    <h2 className="text-[42px] font-bold leading-tight mb-6"
      style={{ fontFamily: serif, color: '#FFF8F0' }}>Cards</h2>
    <p className="text-[15px] text-[#B8976A] max-w-[700px] mb-12 leading-relaxed"
      style={{ fontFamily: mono }}>
      Variantes de card para diferentes contextos: padrao, elevado, estatisticas, features e depoimentos.
    </p>

    {/* Default & Elevated Cards */}
    <h3 className="text-xl font-bold mb-4" style={{ fontFamily: serif, color: '#FFF8F0' }}>Padrao &amp; Elevado</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
      {/* Default Card */}
      <div className="relative rounded-lg p-6 border" style={{ background: '#2A1810', borderColor: 'rgba(255,107,0,0.05)' }}>
        <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-lg"
          style={{ background: 'linear-gradient(90deg, transparent, #FF6B00, transparent)' }} />
        <div className="text-[11px] text-[#FF6B00] uppercase tracking-[0.1em] mb-1" style={{ fontFamily: mono }}>Modulo</div>
        <div className="text-lg mb-2" style={{ fontFamily: serif, color: '#FFF8F0' }}>Semana de Imersao</div>
        <p className="text-[13px] text-[#B8976A] mb-4" style={{ fontFamily: mono }}>
          Diagnostico completo + plano de acao + primeira implementacao com IA.
        </p>
        <span className="inline-flex px-2.5 py-1 text-[11px] font-medium tracking-[0.05em] uppercase rounded-sm"
          style={{ fontFamily: mono, background: 'rgba(255,107,0,0.15)', color: '#FF6B00' }}>
          S1-S2
        </span>
      </div>
      {/* Default Card 2 */}
      <div className="relative rounded-lg p-6 border" style={{ background: '#2A1810', borderColor: 'rgba(255,107,0,0.05)' }}>
        <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-lg"
          style={{ background: 'linear-gradient(90deg, transparent, #FFD700, transparent)' }} />
        <div className="text-[11px] text-[#FFD700] uppercase tracking-[0.1em] mb-1" style={{ fontFamily: mono }}>Avancado</div>
        <div className="text-lg mb-2" style={{ fontFamily: serif, color: '#FFF8F0' }}>Sprint de Escala</div>
        <p className="text-[13px] text-[#B8976A] mb-4" style={{ fontFamily: mono }}>
          Automacao de processos + squad IA ativo + otimizacao de funil.
        </p>
        <span className="inline-flex px-2.5 py-1 text-[11px] font-medium tracking-[0.05em] uppercase rounded-sm"
          style={{ fontFamily: mono, background: 'rgba(255,215,0,0.15)', color: '#FFD700' }}>
          S7-S10
        </span>
      </div>
      {/* Elevated Card */}
      <div className="relative rounded-lg p-6 border transition-all duration-300"
        style={{
          background: '#2A1810',
          borderColor: 'rgba(255,107,0,0.1)',
          boxShadow: '0 8px 32px rgba(255,107,0,0.08), 0 2px 8px rgba(0,0,0,0.3)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.boxShadow = '0 16px 48px rgba(255,107,0,0.15), 0 4px 16px rgba(0,0,0,0.4)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 8px 32px rgba(255,107,0,0.08), 0 2px 8px rgba(0,0,0,0.3)';
        }}>
        <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-lg"
          style={{ background: 'linear-gradient(90deg, #FF6B00, #FFD700, #FF6B00)' }} />
        <div className="text-[11px] text-[#FF6B00] uppercase tracking-[0.1em] mb-1" style={{ fontFamily: mono }}>Elevado</div>
        <div className="text-lg mb-2" style={{ fontFamily: serif, color: '#FFF8F0' }}>Card com Hover Lift</div>
        <p className="text-[13px] text-[#B8976A] mb-4" style={{ fontFamily: mono }}>
          Passe o mouse para ver o efeito de elevacao com warm shadow.
        </p>
        <span className="inline-flex px-2.5 py-1 text-[11px] font-medium tracking-[0.05em] uppercase rounded-sm"
          style={{ fontFamily: mono, background: 'rgba(255,107,0,0.15)', color: '#FF6B00' }}>
          Interativo
        </span>
      </div>
    </div>

    {/* Stat Cards */}
    <h3 className="text-xl font-bold mb-4" style={{ fontFamily: serif, color: '#FFF8F0' }}>Stat Cards</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
      {[
        { label: 'Faturamento Mensal', value: 'R$ 47.000', trend: '+23%', up: true, accent: '#FF6B00' },
        { label: 'Leads Qualificados', value: '184', trend: '+12%', up: true, accent: '#FFD700' },
        { label: 'Custo por Lead', value: 'R$ 8,40', trend: '-18%', up: false, accent: '#34C759' },
      ].map((stat) => (
        <div key={stat.label} className="rounded-lg p-5 border" style={{ background: '#2A1810', borderColor: 'rgba(255,107,0,0.08)' }}>
          <div className="text-[11px] uppercase tracking-[0.1em] mb-3" style={{ fontFamily: mono, color: '#B8976A' }}>
            {stat.label}
          </div>
          <div className="flex items-end justify-between">
            <div className="text-[28px] font-bold" style={{ fontFamily: serif, color: '#FFF8F0' }}>{stat.value}</div>
            <div className="flex items-center gap-1 text-[12px] font-medium"
              style={{ fontFamily: mono, color: stat.up ? '#34C759' : '#FF3B30' }}>
              {stat.up ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
              {stat.trend}
            </div>
          </div>
          <div className="mt-3 h-1 rounded-full overflow-hidden" style={{ background: 'rgba(255,107,0,0.1)' }}>
            <div className="h-full rounded-full" style={{ width: '68%', background: stat.accent }} />
          </div>
        </div>
      ))}
    </div>

    {/* Feature Cards */}
    <h3 className="text-xl font-bold mb-4" style={{ fontFamily: serif, color: '#FFF8F0' }}>Feature Cards</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
      {[
        { icon: <Flame size={24} />, title: 'Squad de IA', desc: 'Time de agentes IA configurados para seu negocio.', color: '#FF6B00' },
        { icon: <Zap size={24} />, title: 'Automacao', desc: 'Processos automatizados que rodam 24/7 sem intervencao.', color: '#FFD700' },
        { icon: <Target size={24} />, title: 'Funil Otimizado', desc: 'Conversao maximizada com copy e design testados.', color: '#FF4500' },
        { icon: <Shield size={24} />, title: 'Suporte Dedicado', desc: 'Acesso direto ao Mestre da Forja via calls semanais.', color: '#B8976A' },
      ].map((feature) => (
        <div key={feature.title} className="rounded-lg p-5 border transition-all duration-300 cursor-pointer"
          style={{ background: '#2A1810', borderColor: 'rgba(255,107,0,0.05)' }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = feature.color;
            e.currentTarget.style.boxShadow = `0 0 20px ${feature.color}20`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255,107,0,0.05)';
            e.currentTarget.style.boxShadow = 'none';
          }}>
          <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
            style={{ background: `${feature.color}15`, color: feature.color }}>
            {feature.icon}
          </div>
          <div className="text-base font-bold mb-2" style={{ fontFamily: serif, color: '#FFF8F0' }}>{feature.title}</div>
          <p className="text-[12px] leading-relaxed" style={{ fontFamily: mono, color: '#B8976A' }}>{feature.desc}</p>
        </div>
      ))}
    </div>

    {/* Testimonial Cards */}
    <h3 className="text-xl font-bold mb-4" style={{ fontFamily: serif, color: '#FFF8F0' }}>Depoimentos</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {[
        { quote: 'Em 3 semanas meu faturamento saltou de R$12k para R$28k. O squad de IA fez o trabalho de 3 funcionarios.', name: 'Carlos Mendes', role: 'Dono de Agencia Digital', avatar: 'C' },
        { quote: 'A Forja me deu clareza. Eu tentava tudo sozinha, agora tenho um plano e ferramentas que executam por mim.', name: 'Ana Ferreira', role: 'Consultora de Marketing', avatar: 'A' },
        { quote: 'ROI de 15x no primeiro mes. Nunca vi uma mentoria entregar resultado tao rapido. Paguei-se na segunda semana.', name: 'Ricardo Lima', role: 'E-commerce Owner', avatar: 'R' },
      ].map((testimonial) => (
        <div key={testimonial.name} className="rounded-lg p-6 border relative"
          style={{ background: '#2A1810', borderColor: 'rgba(255,107,0,0.08)' }}>
          <div className="absolute top-4 right-5 text-[48px] leading-none opacity-10"
            style={{ fontFamily: serif, color: '#FF6B00' }}>"</div>
          <p className="text-[13px] leading-relaxed mb-5 relative z-10"
            style={{ fontFamily: mono, color: '#FFF8F0' }}>
            "{testimonial.quote}"
          </p>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full flex items-center justify-center text-[13px] font-bold"
              style={{ background: 'rgba(255,107,0,0.15)', color: '#FF6B00', fontFamily: mono }}>
              {testimonial.avatar}
            </div>
            <div>
              <div className="text-[13px] font-medium" style={{ fontFamily: mono, color: '#FFF8F0' }}>{testimonial.name}</div>
              <div className="text-[11px]" style={{ fontFamily: mono, color: '#B8976A' }}>{testimonial.role}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Cards;
