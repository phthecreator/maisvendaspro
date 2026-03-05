import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

const problems = [
  {
    number: '01',
    title: 'Você consome muito. Implementa pouco.',
    detail: 'Cada novo vídeo é mais teoria sem aplicação. O projeto que você quer construir continua só na cabeça.',
  },
  {
    number: '02',
    title: 'Não há ninguém do lado quando a coisa trava.',
    detail: 'Cursos gravam conteúdo. Você assiste sozinho. No primeiro erro real, o progresso para.',
  },
  {
    number: '03',
    title: 'A sensação de não ser "técnico o suficiente".',
    detail: 'Meses de estudo, zero projetos rodando. A culpa parece sua — mas o problema é o modelo.',
  },
  {
    number: '04',
    title: 'Já tentou dropshipping, PLR, afiliados.',
    detail: 'Não funcionou. Você sabe que IA é o caminho real — mas não sabe por onde começar na prática.',
  },
];

const ProblemSection: React.FC = () => {
  return (
    <section className="py-32 md:py-40 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black tracking-tight text-white mb-4">
            O loop que te prende
          </h2>
          <p className="text-xl md:text-2xl text-white/60 leading-relaxed">
            Não é falta de talento. É falta de implementação assistida.
          </p>
        </motion.div>

        <div className="space-y-6">
          {problems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.08 }}
              className="flex items-start gap-6 p-8 md:p-10 rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm hover:border-white/[0.12] hover:bg-white/[0.05] transition-all duration-300"
            >
              <span className="text-primary/40 font-black text-2xl shrink-0 font-mono">
                {item.number}
              </span>
              <div>
                <h3 className="text-white text-lg md:text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-white/50 text-base md:text-lg leading-relaxed">{item.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
          className="mt-16 flex items-center gap-4 p-8 rounded-2xl border border-primary/20 bg-primary/[0.04]"
        >
          <Zap className="w-6 h-6 text-primary shrink-0" />
          <p className="text-white text-lg md:text-xl font-bold">
            A diferença entre quem fatura com IA e quem ainda estuda não é talento. É implementação assistida.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
