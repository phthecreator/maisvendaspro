import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Terminal } from 'lucide-react';

const diagnosticLogs = [
  {
    code: 'ERR_HIGH_CONSUMPTION',
    title: 'Você consome muito. Implementa pouco.',
    detail: 'Cada novo vídeo é mais teoria sem aplicação. O projeto que você quer construir continua preso em arquivos temporários na sua mente.',
  },
  {
    code: 'ERR_ZERO_SUPPORT',
    title: 'Não há ninguém quando o código quebra.',
    detail: 'Cursos gravam conteúdo. Você assiste sozinho. No primeiro erro real de API ou Deploy, o seu progresso é interrompido.',
  },
  {
    code: 'ERR_TECH_INFERIORITY',
    title: 'A sensação de não ser "técnico o suficiente".',
    detail: 'Meses de estudo, zero projetos rodando. A culpa parece sua — mas o problema é o modelo de ensino passivo.',
  },
  {
    code: 'ERR_MARKET_MISALIGNMENT',
    title: 'Perdido em promessas de "dinheiro fácil".',
    detail: 'Dropshipping, PLR, Afiliados. Nada funcionou. Você sabe que IA é o motor real — mas não tem o mapa da implementação.',
  },
];

const ProblemSection: React.FC = () => {
  return (
    <section className="py-32 md:py-48 px-6 bg-[#020202] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/[0.02] -skew-x-12 transform origin-top pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 font-mono text-primary mb-6">
            <Terminal className="w-5 h-5" />
            <span className="text-xs md:text-sm font-bold uppercase tracking-[0.3em]">
              Diagnostic_Module v2.0
            </span>
          </div>
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-6 leading-none">
            O loop que te <span className="text-primary">destrói</span>.
          </h2>
          <p className="text-xl md:text-3xl text-white/40 leading-tight font-medium max-w-3xl">
            Não é falta de talento. É uma falha crítica no seu modelo de execução.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4">
          {diagnosticLogs.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.1 }}
              className="group relative p-8 md:p-10 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-primary/20 group-hover:bg-primary transition-colors duration-500" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <span className="font-mono text-[10px] md:text-xs text-primary/40 group-hover:text-primary transition-colors">
                  LOG_ID: {item.code}
                </span>
                <span className="font-mono text-[10px] md:text-xs text-white/20">
                  TIMESTAMP: {new Date().toISOString().split('T')[0]}
                </span>
              </div>

              <div className="flex items-start gap-6">
                <AlertTriangle className="w-6 h-6 text-primary/30 group-hover:text-primary shrink-0 transition-all duration-500" />
                <div>
                  <h3 className="text-white text-xl md:text-2xl font-bold mb-3 tracking-tight group-hover:translate-x-1 transition-transform duration-500">
                    {item.title}
                  </h3>
                  <p className="text-white/40 text-base md:text-lg leading-relaxed max-w-3xl group-hover:text-white/60 transition-colors">
                    {item.detail}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
          className="mt-12 p-8 border border-primary/20 bg-primary/[0.02] backdrop-blur-xl relative group"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
            <Terminal className="w-20 h-20 text-primary" />
          </div>
          <p className="text-white text-lg md:text-2xl font-bold leading-tight relative z-10">
            "A diferença entre quem fatura com IA e quem ainda estuda não é talento. É a coragem de sair do modo 'espectador' e entrar em produção."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
