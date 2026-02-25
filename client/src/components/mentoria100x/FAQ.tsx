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
    q: 'Isso e curso de IA?',
    a: 'Nao. E implantacao guiada. Voce sai com um sistema operavel instalado na sua agencia — processos, agentes, automacoes funcionando. Nao com certificado.',
  },
  {
    q: 'Meu time nao vai usar...',
    a: 'Por isso o sistema inclui SOP + rotina + scoreboard. A adocao nao depende de "boa vontade" — depende de processo bem desenhado. Se o fluxo e claro, o time executa.',
  },
  {
    q: 'Ja tenho ferramentas de IA.',
    a: 'Ferramenta sem processo e enfeite caro. A mentoria conecta ferramenta, processo e rotina numa operacao que roda sem voce puxando cada tarefa.',
  },
  {
    q: 'E se eu nao tiver tempo?',
    a: 'Se voce nao tem tempo pra instalar sistema, e exatamente por isso que precisa de um. O caos e o que rouba seu tempo. A mentoria economiza — nao consome.',
  },
  {
    q: 'Qual o nivel tecnico necessario?',
    a: 'Zero. Nos cuidamos da parte tecnica. Voce foca nas decisoes de negocio e na operacao do dia a dia. Se sabe usar WhatsApp e planilha, esta qualificado.',
  },
  {
    q: 'E se nao funcionar pro meu nicho?',
    a: 'Por isso tem processo de aplicacao. Se nao fizer sentido pro seu caso, a gente fala na call de qualificacao. Nao vendemos pra quem nao vai ter resultado.',
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
          Perguntas frequentes
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
                className="border border-white/[0.06] rounded-2xl bg-white/[0.03] px-6 md:px-8 overflow-hidden hover:border-white/[0.12] transition-all duration-300"
              >
                <AccordionTrigger className="text-white text-base md:text-lg font-bold hover:no-underline py-6">
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
