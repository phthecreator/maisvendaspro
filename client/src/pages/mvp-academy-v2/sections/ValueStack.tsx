import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { SectionTitle, GlassCard } from '../components/EliteDesign';

const ValueStack: React.FC = () => {
  const items = [
    { item: 'MVP Plugin [Infraestrutura Pronta]', price: 'R$ 4.997' },
    { item: 'Academy Execution [Método 30min]', price: 'R$ 1.997' },
    { item: 'Desafio Vitória 7 Dias [Checklist]', price: 'R$ 997' },
    { item: 'The Bunker [Acesso VIP Squad]', price: 'R$ 2.997' }
  ];

  return (
    <section className="py-40">
      <div className="max-w-4xl mx-auto px-8">
        <SectionTitle 
          subtitle="O Empilhamento de Valor"
          title="O Investimento Proporcional"
          description="Transformando R$ 10.988 em Oportunidade"
        />
        
        <GlassCard className="p-1 shadow-2xl overflow-hidden border-white/5 bg-slate-900/60 backdrop-blur-3xl">
          <div className="divide-y divide-white/5">
            {items.map((row, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex justify-between items-center p-10 hover:bg-white/[0.02] transition-colors group"
              >
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center text-amber-500 font-bold group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-black transition-all">
                    <CheckCircle2 size={24} />
                  </div>
                  <span className="text-xl font-medium text-slate-200">{row.item}</span>
                </div>
                <span className="text-slate-500 font-mono text-lg group-hover:text-amber-500 transition-colors">{row.price}</span>
              </motion.div>
            ))}
          </div>
          
          <div className="p-16 bg-gradient-to-br from-amber-500/5 to-transparent flex flex-col sm:flex-row justify-between items-center gap-10 border-t border-white/10">
            <div className="text-center sm:text-left">
              <p className="text-slate-500 font-bold uppercase tracking-[0.2em] text-[10px] mb-2">Preço de Mercado</p>
              <p className="text-3xl font-medium text-slate-500 line-through decoration-amber-500/30">R$ 10.988,00</p>
            </div>
            
            <div className="text-center sm:text-right">
              <p className="text-amber-500 font-bold uppercase tracking-[0.2em] text-[10px] mb-2">Investimento Único</p>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl text-slate-400 font-light">R$</span>
                <span className="text-8xl font-black text-white leading-none tracking-tighter">250</span>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
};

export default ValueStack;
