import React from 'react';
import { Target, Users } from 'lucide-react';
import { SectionTitle, GlassCard } from '../components/EliteDesign';

const Void: React.FC = () => {
  return (
    <section className="py-40 relative">
      <div className="max-w-7xl mx-auto px-8">
        <SectionTitle 
          subtitle="O Diagnóstico"
          title="O Fim da Obesidade Mental."
          description="A Indústria do Entretenimento Educacional prospera com o seu fracasso. Eles vendem dopamina. Nós entregamos dividendos."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <GlassCard className="p-16 border-white/5 hover:border-amber-500/20 transition-all group">
            <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <Target className="text-amber-500" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-6">O Paradoxo da Informação</h3>
            <p className="text-slate-400 leading-relaxed text-lg font-light">
              Seu cérebro substitui a execução pelo "aprender". É um vício em progresso falso. 
              Enquanto você estuda, o mercado exige <span className="text-white font-medium italic">velocidade absoluta</span>.
            </p>
          </GlassCard>
          
          <GlassCard className="p-16 border-white/5 hover:border-amber-500/20 transition-all group">
            <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <Users className="text-amber-500" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-6">O Inimigo Oculto</h3>
            <p className="text-slate-400 leading-relaxed text-lg font-light">
              O sistema quer que você continue comprando. Complicam o jogo para você se sentir incapaz. 
              O MVP Academy <span className="text-white font-medium italic">simplifica o jogo</span> para você se tornar lucrativo.
            </p>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default Void;
