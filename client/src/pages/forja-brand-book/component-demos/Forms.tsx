import { useState } from 'react';

const mono = "'Roboto Mono', monospace";
const serif = "'Averia Serif Libre', serif";

const inputStyle: React.CSSProperties = {
  fontFamily: mono,
  fontSize: 14,
  background: 'rgba(0,0,0,0.3)',
  border: '1px solid rgba(184,151,106,0.2)',
  color: '#FFF8F0',
  borderRadius: 6,
  outline: 'none',
  width: '100%',
  transition: 'border-color 0.2s, box-shadow 0.2s',
};

const labelStyle: React.CSSProperties = {
  fontFamily: mono,
  fontSize: 12,
  color: '#B8976A',
  display: 'block',
  marginBottom: 6,
};

const Forms = () => {
  const [checkA, setCheckA] = useState(true);
  const [checkB, setCheckB] = useState(false);
  const [toggle, setToggle] = useState(true);
  const [formData, setFormData] = useState({ nome: '', email: '', faturamento: '' });

  return (
    <section id="forms">
      <style>{`
        .forja-input:focus { border-color: #FF6B00 !important; box-shadow: 0 0 0 3px rgba(255,107,0,0.15) !important; }
      `}</style>

      <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#FF6B00] mb-3"
        style={{ fontFamily: mono }}>Componentes / Formularios</p>
      <h2 className="text-[42px] font-bold leading-tight mb-6"
        style={{ fontFamily: serif, color: '#FFF8F0' }}>Elementos de Formulario</h2>
      <p className="text-[15px] text-[#B8976A] max-w-[700px] mb-12 leading-relaxed"
        style={{ fontFamily: mono }}>
        Inputs, textareas, selects, checkboxes, toggles e estados de erro com focus ring em laranja forja.
      </p>

      {/* Text Inputs */}
      <h3 className="text-xl font-bold mb-4" style={{ fontFamily: serif, color: '#FFF8F0' }}>Text Input</h3>
      <div className="grid grid-cols-2 gap-8 mb-10">
        <div>
          <label style={labelStyle}>Nome completo</label>
          <input type="text" placeholder="Seu nome" className="forja-input px-4 py-3"
            style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Email</label>
          <input type="email" placeholder="voce@empresa.com" className="forja-input px-4 py-3"
            style={inputStyle} />
        </div>
      </div>

      {/* Select Dropdown */}
      <h3 className="text-xl font-bold mb-4" style={{ fontFamily: serif, color: '#FFF8F0' }}>Select</h3>
      <div className="grid grid-cols-2 gap-8 mb-10">
        <div>
          <label style={labelStyle}>Faturamento mensal</label>
          <select className="forja-input px-4 py-3 cursor-pointer"
            style={{
              ...inputStyle,
              WebkitAppearance: 'none',
              appearance: 'none',
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23B8976A' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 12px center',
            }}>
            <option value="">Selecione...</option>
            <option value="10k">Ate R$ 10.000</option>
            <option value="30k">R$ 10.000 - R$ 30.000</option>
            <option value="50k">R$ 30.000 - R$ 50.000</option>
            <option value="100k">R$ 50.000 - R$ 100.000</option>
            <option value="100k+">Acima de R$ 100.000</option>
          </select>
        </div>
        <div>
          <label style={labelStyle}>Nicho de atuacao</label>
          <select className="forja-input px-4 py-3 cursor-pointer"
            style={{
              ...inputStyle,
              WebkitAppearance: 'none',
              appearance: 'none',
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23B8976A' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 12px center',
            }}>
            <option value="">Selecione...</option>
            <option value="saas">SaaS</option>
            <option value="ecommerce">E-commerce</option>
            <option value="agencia">Agencia Digital</option>
            <option value="consultoria">Consultoria</option>
            <option value="infoproduto">Infoproduto</option>
          </select>
        </div>
      </div>

      {/* Textarea */}
      <h3 className="text-xl font-bold mb-4" style={{ fontFamily: serif, color: '#FFF8F0' }}>Textarea</h3>
      <div className="mb-10">
        <label style={labelStyle}>Descreva seu desafio atual</label>
        <textarea rows={4} placeholder="Conte sobre seu negocio e o que precisa resolver..." className="forja-input px-4 py-3"
          style={{ ...inputStyle, resize: 'vertical' }} />
      </div>

      {/* Checkbox */}
      <h3 className="text-xl font-bold mb-4" style={{ fontFamily: serif, color: '#FFF8F0' }}>Checkbox</h3>
      <div className="mb-10">
        <div className="space-y-3">
          {[
            { label: 'Aceito os termos de uso', checked: checkA, onChange: () => setCheckA(!checkA) },
            { label: 'Quero receber novidades por email', checked: checkB, onChange: () => setCheckB(!checkB) },
          ].map((cb) => (
            <label key={cb.label} className="flex items-center gap-3 cursor-pointer">
              <div className="w-5 h-5 rounded border flex items-center justify-center flex-shrink-0 transition-all duration-200"
                style={{
                  background: cb.checked ? '#FF6B00' : 'rgba(0,0,0,0.3)',
                  borderColor: cb.checked ? '#FF6B00' : 'rgba(184,151,106,0.3)',
                }}
                onClick={cb.onChange}>
                {cb.checked && (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1A0A00" strokeWidth="3">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                )}
              </div>
              <span className="text-[13px] text-[#FFF8F0]" style={{ fontFamily: mono }}>{cb.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Toggle */}
      <h3 className="text-xl font-bold mb-4" style={{ fontFamily: serif, color: '#FFF8F0' }}>Toggle / Switch</h3>
      <div className="mb-10">
        <div className="flex items-center gap-3">
          <div className="w-12 h-6 rounded-full cursor-pointer relative transition-all duration-200"
            style={{ background: toggle ? '#FF6B00' : 'rgba(184,151,106,0.3)' }}
            onClick={() => setToggle(!toggle)}>
            <div className="absolute top-0.5 w-5 h-5 rounded-full transition-all duration-200"
              style={{
                background: toggle ? '#1A0A00' : '#B8976A',
                left: toggle ? 26 : 2,
              }} />
          </div>
          <span className="text-[13px]" style={{ fontFamily: mono, color: toggle ? '#FF6B00' : '#B8976A' }}>
            {toggle ? 'Ativo' : 'Inativo'}
          </span>
        </div>
      </div>

      {/* Error State */}
      <h3 className="text-xl font-bold mb-4" style={{ fontFamily: serif, color: '#FFF8F0' }}>Estado de Erro</h3>
      <div className="grid grid-cols-2 gap-8 mb-10">
        <div>
          <label style={labelStyle}>Email (com erro)</label>
          <input type="email" value="email-invalido" readOnly className="px-4 py-3"
            style={{
              ...inputStyle,
              borderColor: '#FF3B30',
              boxShadow: '0 0 0 3px rgba(255,59,48,0.15)',
            }} />
          <p className="text-[11px] mt-1.5 flex items-center gap-1" style={{ fontFamily: mono, color: '#FF3B30' }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            Por favor, insira um email valido
          </p>
        </div>
        <div>
          <label style={labelStyle}>Telefone (com erro)</label>
          <input type="text" value="abc" readOnly className="px-4 py-3"
            style={{
              ...inputStyle,
              borderColor: '#FF3B30',
              boxShadow: '0 0 0 3px rgba(255,59,48,0.15)',
            }} />
          <p className="text-[11px] mt-1.5 flex items-center gap-1" style={{ fontFamily: mono, color: '#FF3B30' }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            Formato invalido. Use apenas numeros.
          </p>
        </div>
      </div>

      {/* Complete Form */}
      <h3 className="text-xl font-bold mb-4" style={{ fontFamily: serif, color: '#FFF8F0' }}>Formulario Completo</h3>
      <div className="rounded-lg p-8 border max-w-[500px]"
        style={{ background: '#2A1810', borderColor: 'rgba(255,107,0,0.1)' }}>
        <div className="text-[11px] text-[#FF6B00] uppercase tracking-[0.15em] mb-2" style={{ fontFamily: mono }}>
          Agendar Diagnostico
        </div>
        <div className="text-lg mb-6" style={{ fontFamily: serif, color: '#FFF8F0' }}>
          Descubra como escalar com IA
        </div>

        <div className="space-y-4">
          <div>
            <label style={labelStyle}>Nome</label>
            <input type="text" placeholder="Seu nome completo" className="forja-input px-4 py-3"
              style={inputStyle}
              value={formData.nome}
              onChange={(e) => setFormData({ ...formData, nome: e.target.value })} />
          </div>
          <div>
            <label style={labelStyle}>Email</label>
            <input type="email" placeholder="seu@email.com" className="forja-input px-4 py-3"
              style={inputStyle}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
          </div>
          <div>
            <label style={labelStyle}>Faturamento mensal</label>
            <select className="forja-input px-4 py-3 cursor-pointer"
              style={{
                ...inputStyle,
                WebkitAppearance: 'none',
                appearance: 'none',
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23B8976A' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 12px center',
              }}
              value={formData.faturamento}
              onChange={(e) => setFormData({ ...formData, faturamento: e.target.value })}>
              <option value="">Selecione...</option>
              <option value="10k">Ate R$ 10.000</option>
              <option value="30k">R$ 10.000 - R$ 30.000</option>
              <option value="50k">R$ 30.000 - R$ 50.000</option>
              <option value="100k">Acima de R$ 50.000</option>
            </select>
          </div>
          <button
            style={{
              fontFamily: mono,
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: '0.05em',
              textTransform: 'uppercase' as const,
              cursor: 'pointer',
              transition: 'all 0.2s',
              border: 'none',
              borderRadius: 6,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              width: '100%',
              padding: '14px 24px',
              background: '#FF6B00',
              color: '#1A0A00',
              boxShadow: '0 0 20px rgba(255,107,0,0.3)',
              marginTop: 8,
            }}>
            Agendar Diagnostico Gratuito
          </button>
        </div>
      </div>
    </section>
  );
};

export default Forms;
