import { useState } from 'react';

const mono = "'Roboto Mono', monospace";
const serif = "'Averia Serif Libre', serif";

const inputStyle: React.CSSProperties = {
  fontFamily: mono,
  fontSize: 14,
  background: 'rgba(0,0,0,0.3)',
  border: '1px solid rgba(169,169,169,0.2)',
  color: '#FDF5E6',
  borderRadius: 6,
  outline: 'none',
  width: '100%',
  transition: 'border-color 0.2s, box-shadow 0.2s',
};

const labelStyle: React.CSSProperties = {
  fontFamily: mono,
  fontSize: 12,
  color: '#A9A9A9',
  display: 'block',
  marginBottom: 6,
};

const Forms = () => {
  const [checkA, setCheckA] = useState(true);
  const [checkB, setCheckB] = useState(false);
  const [radio, setRadio] = useState('opt1');
  const [toggle, setToggle] = useState(true);
  const [slider, setSlider] = useState(60);

  return (
    <section id="forms">
      <style>{`
        .bunker-input:focus { border-color: #00E5FF !important; box-shadow: 0 0 0 3px rgba(0,229,255,0.15) !important; }
        .bunker-slider { -webkit-appearance: none; appearance: none; height: 6px; border-radius: 3px; background: #2F353A; outline: none; }
        .bunker-slider::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 18px; height: 18px; border-radius: 50%; background: #00E5FF; cursor: pointer; box-shadow: 0 0 8px rgba(0,229,255,0.4); }
        .bunker-slider::-moz-range-thumb { width: 18px; height: 18px; border-radius: 50%; background: #00E5FF; cursor: pointer; border: none; box-shadow: 0 0 8px rgba(0,229,255,0.4); }
      `}</style>

      <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#00E5FF] mb-3"
        style={{ fontFamily: mono }}>Componentes / Formularios</p>
      <h2 className="text-[42px] font-bold leading-tight mb-6"
        style={{ fontFamily: serif, color: '#FDF5E6' }}>Elementos de Formulario</h2>
      <p className="text-[15px] text-[#A9A9A9] max-w-[700px] mb-12 leading-relaxed"
        style={{ fontFamily: mono }}>
        Inputs, textareas, selects, checkboxes, radios, toggles e sliders com focus states em Cyber Cyan.
      </p>

      <div className="grid grid-cols-2 gap-8 mb-10">
        {/* Text Input */}
        <div>
          <label style={labelStyle}>Nome completo</label>
          <input type="text" placeholder="Seu nome de engenheiro" className="bunker-input px-4 py-3"
            style={inputStyle} />
        </div>
        {/* Email Input */}
        <div>
          <label style={labelStyle}>Email</label>
          <input type="email" placeholder="voce@bunker.ia" className="bunker-input px-4 py-3"
            style={inputStyle} />
        </div>
      </div>

      {/* Textarea */}
      <div className="mb-10">
        <label style={labelStyle}>Mensagem</label>
        <textarea rows={4} placeholder="Descreva seu projeto..." className="bunker-input px-4 py-3"
          style={{ ...inputStyle, resize: 'vertical' }} />
      </div>

      {/* Select */}
      <div className="grid grid-cols-2 gap-8 mb-10">
        <div>
          <label style={labelStyle}>Nivel de experiencia</label>
          <select className="bunker-input px-4 py-3 cursor-pointer"
            style={{ ...inputStyle, WebkitAppearance: 'none', appearance: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23A9A9A9' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' }}>
            <option value="">Selecione...</option>
            <option value="beginner">Consumidor</option>
            <option value="intermediate">Recruta</option>
            <option value="advanced">Construtor</option>
            <option value="expert">Agente</option>
          </select>
        </div>
        <div>
          <label style={labelStyle}>Squad</label>
          <select className="bunker-input px-4 py-3 cursor-pointer"
            style={{ ...inputStyle, WebkitAppearance: 'none', appearance: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23A9A9A9' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' }}>
            <option value="">Selecione...</option>
            <option value="alpha">Alpha</option>
            <option value="bravo">Bravo</option>
            <option value="charlie">Charlie</option>
          </select>
        </div>
      </div>

      {/* Checkbox & Radio */}
      <div className="grid grid-cols-2 gap-8 mb-10">
        <div>
          <label style={labelStyle}>Checkboxes</label>
          <div className="space-y-3">
            {[
              { label: 'Deploy automatico', checked: checkA, onChange: () => setCheckA(!checkA) },
              { label: 'Notificacoes por email', checked: checkB, onChange: () => setCheckB(!checkB) },
            ].map((cb) => (
              <label key={cb.label} className="flex items-center gap-3 cursor-pointer">
                <div className="w-5 h-5 rounded border flex items-center justify-center flex-shrink-0 transition-all duration-200"
                  style={{
                    background: cb.checked ? '#00E5FF' : 'rgba(0,0,0,0.3)',
                    borderColor: cb.checked ? '#00E5FF' : 'rgba(169,169,169,0.3)',
                  }}
                  onClick={cb.onChange}>
                  {cb.checked && (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1A1E22" strokeWidth="3">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  )}
                </div>
                <span className="text-[13px] text-[#FDF5E6]" style={{ fontFamily: mono }}>{cb.label}</span>
              </label>
            ))}
          </div>
        </div>
        <div>
          <label style={labelStyle}>Radio Group</label>
          <div className="space-y-3">
            {[
              { label: 'Plano Mensal', value: 'opt1' },
              { label: 'Plano Anual', value: 'opt2' },
              { label: 'Plano Vitalicio', value: 'opt3' },
            ].map((r) => (
              <label key={r.value} className="flex items-center gap-3 cursor-pointer" onClick={() => setRadio(r.value)}>
                <div className="w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-200"
                  style={{
                    borderColor: radio === r.value ? '#00E5FF' : 'rgba(169,169,169,0.3)',
                    background: 'rgba(0,0,0,0.3)',
                  }}>
                  {radio === r.value && (
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#00E5FF' }} />
                  )}
                </div>
                <span className="text-[13px] text-[#FDF5E6]" style={{ fontFamily: mono }}>{r.label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Toggle & Slider */}
      <div className="grid grid-cols-2 gap-8">
        <div>
          <label style={labelStyle}>Toggle / Switch</label>
          <div className="flex items-center gap-3">
            <div className="w-12 h-6 rounded-full cursor-pointer relative transition-all duration-200"
              style={{ background: toggle ? '#00E5FF' : 'rgba(169,169,169,0.3)' }}
              onClick={() => setToggle(!toggle)}>
              <div className="absolute top-0.5 w-5 h-5 rounded-full transition-all duration-200"
                style={{
                  background: toggle ? '#1A1E22' : '#A9A9A9',
                  left: toggle ? 26 : 2,
                }} />
            </div>
            <span className="text-[13px]" style={{ fontFamily: mono, color: toggle ? '#00E5FF' : '#A9A9A9' }}>
              {toggle ? 'Ativo' : 'Inativo'}
            </span>
          </div>
        </div>
        <div>
          <label style={labelStyle}>Slider — {slider}%</label>
          <input type="range" min="0" max="100" value={slider}
            onChange={(e) => setSlider(Number(e.target.value))}
            className="bunker-slider w-full cursor-pointer"
            style={{
              background: `linear-gradient(90deg, #00E5FF 0%, #00E5FF ${slider}%, #2F353A ${slider}%, #2F353A 100%)`,
            }} />
          <div className="flex justify-between mt-1 text-[10px] text-[#A9A9A9]" style={{ fontFamily: mono }}>
            <span>0%</span>
            <span>100%</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Forms;
