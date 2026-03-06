import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, ArrowRight } from 'lucide-react';
import { EliteButton } from '../components/EliteDesign';

const Guarantee: React.FC = () => {
  return (
    <section className="py-40 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-24 h-24 bg-gradient-to-br from-amber-400 to-amber-600 rounded-3xl mx-auto mb-12 flex items-center justify-center shadow-2xl shadow-amber-500/20 rotate-3 group hover:rotate-6 transition-transform">
            <Trophy size={48} className="text-black" />
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter mb-10 uppercase italic font-serif">
            Ou você vence, ou eu te <span className="text-amber-500">pago</span> pelo seu tempo.
          </h2>
          
          <p className="text-xl md:text-2xl text-slate-400 font-light max-w-2xl mx-auto mb-16 leading-relaxed">
            Se em 7 dias você aplicar e não tiver sua primeira vitória, devolvemos seu investimento <span className="text-white font-bold underline decoration-amber-500">total + R$ 100 via PIX</span> imediatamente.
          </p>
          
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-amber-500/20 bg-amber-500/5 text-amber-500 text-[10px] font-bold tracking-[0.4em] uppercase mb-16">
            Risco Zero Absoluto
          </div>
          
          <br />
          
          <div className="flex flex-col items-center gap-6">
            <EliteButton className="px-16 py-10 text-2xl group h-24 bg-white text-black hover:bg-slate-200 shadow-white/10">
              ENVIAR MINHA CANDIDATURA
              <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform" />
            </EliteButton>
            <p className="text-slate-600 text-[10px] font-bold tracking-[0.2em] uppercase">Processo de Seleção Rigoroso</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Guarantee;
