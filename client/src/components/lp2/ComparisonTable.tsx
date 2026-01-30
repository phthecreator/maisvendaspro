
import React from 'react';
import { Check, X, MoveHorizontal } from 'lucide-react';

const ComparisonTable: React.FC = () => {
  const rows = [
    { label: "Custo", vibe: "R$ 297", dev: "R$ 15.000+", traditional: "R$ 2.000+", solo: "R$ 0" },
    { label: "Tempo até resultado", vibe: "7-30 dias", dev: "3-6 meses", traditional: "6-12 meses", solo: "???" },
    { label: "Aprende a vender", vibe: true, dev: false, traditional: false, solo: false },
    { label: "Ferramentas \"hack\"", vibe: true, dev: false, traditional: false, solo: "talvez" },
    { label: "Suporte/Comunidade", vibe: true, dev: false, traditional: "limitado", solo: false },
    { label: "Templates prontos", vibe: true, dev: false, traditional: false, solo: false },
    { label: "Garantia", vibe: true, dev: false, traditional: "raro", solo: false },
    { label: "Acesso vitalício", vibe: true, dev: false, traditional: "1 ano", solo: true }
  ];

  const renderVal = (val: any, isVibe: boolean) => {
    if (val === true) return <Check className={`w-4 h-4 md:w-5 md:h-5 mx-auto ${isVibe ? 'text-primary' : 'text-white/30'}`} />;
    if (val === false) return <X className="w-4 h-4 md:w-5 md:h-5 mx-auto text-urgency/40" />;
    return <span className={`text-[10px] md:text-xs font-bold uppercase ${isVibe ? 'text-primary' : 'text-white/30'}`}>{val}</span>;
  };

  return (
    <section className="py-24 px-4 bg-background-dark overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-white text-3xl md:text-6xl font-black uppercase tracking-tighter mb-4">
            🆚 "VIBE CODING vs ALTERNATIVAS"
          </h2>
          <div className="md:hidden flex items-center justify-center gap-2 text-white/30 text-[10px] font-bold uppercase tracking-widest animate-pulse">
            <MoveHorizontal className="w-3 h-3" /> deslize para o lado
          </div>
        </div>

        <div className="overflow-x-auto pb-4 scrolling-content">
          <table className="w-full text-center border-separate border-spacing-2 min-w-[600px] md:min-w-0">
            <thead>
              <tr className="text-[9px] md:text-xs font-black uppercase tracking-widest text-white/40">
                <th className="p-2 md:p-4 text-left"></th>
                <th className="p-2 md:p-4 bg-primary/10 text-primary border border-primary/20 rounded-t-xl">VIBE CODING PRO</th>
                <th className="p-2 md:p-4">Contratar Dev</th>
                <th className="p-2 md:p-4">Curso Tradicional</th>
                <th className="p-2 md:p-4">Fazer Sozinho</th>
              </tr>
            </thead>
            <tbody className="text-xs">
              {rows.map((row, i) => (
                <tr key={i} className="group">
                  <td className="p-3 md:p-4 text-left font-bold text-white/80 border-b border-white/5 text-[10px] md:text-sm">{row.label}</td>
                  <td className="p-3 md:p-4 bg-primary/5 border-x border-primary/10 group-last:rounded-b-xl group-last:border-b">
                    {renderVal(row.vibe, true)}
                  </td>
                  <td className="p-3 md:p-4 border-b border-white/5 opacity-40">{renderVal(row.dev, false)}</td>
                  <td className="p-3 md:p-4 border-b border-white/5 opacity-40">{renderVal(row.traditional, false)}</td>
                  <td className="p-3 md:p-4 border-b border-white/5 opacity-40">{renderVal(row.solo, false)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-16 text-center px-2">
           <h3 className="text-white text-xl md:text-3xl font-black uppercase italic mb-2 leading-none">
             💡 "A verdadeira pergunta não é 'Vale a pena?'"
           </h3>
           <p className="text-primary text-xl md:text-4xl font-black uppercase tracking-tighter">
             "É: 'Quanto custa NÃO fazer isso agora?'"
           </p>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
