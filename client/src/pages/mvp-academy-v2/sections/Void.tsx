import React from 'react';
import { Target, Users } from 'lucide-react';
import { SectionTitle, GlassCard } from '../components/EliteDesign';

const Void: React.FC = () => {
  return (
    <section className="py-40 relative">
      <div className="max-w-7xl mx-auto px-8">
        <SectionTitle 
          subtitle="O Diagnóstico"
          title="A Armadilha do Aprendizado Infinito."
          description="A indústria quer que você continue estudando para se sentir produtivo. Nós queremos que você pare de estudar e comece a lucrar."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <GlassCard className="p-16 border-white/5 hover:border-amber-500/20 transition-all group">
            <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <Target className="text-amber-500" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-6">A Ilusão do Progresso</h3>
            <p className="text-slate-400 leading-relaxed text-lg font-light">
              Assistir aulas libera dopamina, mas não paga boletos. É um vício em "estar quase lá". 
              Enquanto você estuda, o mercado exige <span className="text-white font-medium italic">presença e lucro</span>.
            </p>
          </GlassCard>
          
          <GlassCard className="p-16 border-white/5 hover:border-amber-500/20 transition-all group">
            <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <Users className="text-amber-500" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-6">O Fim da Busca</h3>
            <p className="text-slate-400 leading-relaxed text-lg font-light">
              Você não precisa de mais ferramentas. Precisa de uma direção clara e um ambiente de elite. 
              O MVP Academy é a última porta que você vai precisar <span className="text-white font-medium italic">abrir este ano</span>.
            </p>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default Void;
