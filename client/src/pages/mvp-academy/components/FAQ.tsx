import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqItems = [
  {
    q: 'R$250 parece barato demais pra ter valor.',
    a: 'O valor do que você acessa ultrapassa R$2.700 se comprado separado. Mantemos barato porque precisamos de volume e de cases de sucesso — não de margem na entrada. O upsell real é a mentoria. E só chega lá quem provar resultado aqui.',
  },
  {
    q: 'Não vou ter tempo pra participar.',
    a: 'Você tem 30 minutos por semana? É tudo que o método exige. Se não tem nem isso, você não precisa de comunidade — precisa de alguém fazendo por você. (Isso existe: é a nossa Implementação DFY. Pergunte quando estiver pronto.)',
  },
  {
    q: 'Já comprei outros cursos e não funcionou.',
    a: 'Perfeito. Então você sabe o que não funciona: conteúdo sem implementação, sem accountability. Aqui não tem curso pra assistir e deixar na estante. Tem projeto pra rodar essa semana.',
  },
  {
    q: 'Não sei se é pra mim.',
    a: 'Três perguntas: Você tem uma ideia de projeto? Quer implementar algo com IA? Consegue dedicar 30 min/semana? Se sim nas três — é pra você.',
  },
  {
    q: 'Vou esperar um pouco.',
    a: 'O que muda em 30 dias? O projeto ainda vai estar travado. A entrada é R$250 agora. A mentoria amanhã pode não ter vaga.',
  },
  {
    q: 'Preciso saber programar?',
    a: 'Não. O método é Vibe Coding — você usa IA como co-programador. Se sabe escrever um prompt, você está qualificado. O Nível 1 começa do zero absoluto.',
  },
];

const FAQ: React.FC = () => {
  return (
    <section className="py-32 md:py-40 px-6" id="faq">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-5xl md:text-7xl font-black tracking-tight text-white mb-20 text-center"
        >
          Perguntas diretas.
          <br />
          Respostas diretas.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border border-white/[0.06] rounded-2xl bg-white/[0.03] px-6 md:px-8 overflow-hidden hover:border-primary/20 transition-all duration-300"
              >
                <AccordionTrigger className="text-white text-base md:text-lg font-bold hover:no-underline py-6 text-left">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-white/50 text-base md:text-lg leading-relaxed pb-6">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
