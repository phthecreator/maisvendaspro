import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../components/EliteDesign';

const Roadmap: React.FC = () => {
  const steps = [
    { 
      step: '01', 
      title: 'Question & Delete', 
      desc: 'Limpamos sua mesa. Deletamos 90% das tarefas inúteis. Foco total em uma única oferta de alto ticket.' 
    },
    { 
      step: '02', 
      title: 'Simplify & Plugin', 
      desc: 'Não há o que criar. Plugamos nossa tecnologia de cópia e funis testados. Velocidade de engenharia.' 
    },
    { 
      step: '03', 
      title: 'Accelerate', 
      desc: 'O primeiro real no dashboard em menos de 168 horas. Dados reais. Execução implacável.' 
    }
  ];

  return (
    <section className="py-40 bg-slate-900/20 relative overflow-hidden">
      {/* Decorative vertical line */}
      <div className="absolute top-0 left-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <SectionTitle 
          subtitle="O Processo"
          title="A Engenharia da Vitória."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {steps.map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="group relative"
            >
              <div className="text-9xl font-black text-white/[0.03] absolute -top-16 -left-8 group-hover:text-amber-500/[0.08] transition-colors font-serif">
                {item.step}
              </div>
              
              <div className="relative pt-10 border-t border-white/5 group-hover:border-amber-500/30 transition-colors">
                <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight flex items-center gap-4">
                  <span className="w-8 h-[1px] bg-amber-500" />
                  {item.title}
                </h3>
                <p className="text-slate-400 leading-relaxed font-light text-lg">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
