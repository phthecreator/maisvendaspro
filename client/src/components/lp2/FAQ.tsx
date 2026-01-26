
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-card border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary/20">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full p-5 text-left transition-colors hover:bg-white/[0.02]"
      >
        <span className="text-base md:text-lg font-black text-white pr-6 uppercase tracking-tight">{question}</span>
        <ChevronDown className={`text-primary w-6 h-6 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="px-5 pb-6 text-base text-white/50 leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Preciso saber programar muito?",
      answer: "Não. Se você sabe o básico de lógica e quer faturar, a IA faz a parte pesada da codificação por você. Nosso método ensina você a orquestrar modelos para criar soluções robustas."
    },
    {
      question: "Quanto tempo demora pra ter retorno?",
      answer: "Temos alunos que fecharam o primeiro contrato em menos de 10 dias seguindo o método exato de prospecção ativa que ensinamos logo no primeiro módulo."
    },
    {
      question: "As aulas são gravadas ou ao vivo?",
      answer: "Você recebe acesso imediato a mais de 40 aulas gravadas. Além disso, temos encontros ao vivo quinzenais para análise de projetos reais e networking avançado."
    },
    {
      question: "Tenho suporte para tirar dúvidas?",
      answer: "Sim! Temos uma comunidade exclusiva no Discord e suporte individual via plataforma para garantir que você nunca fique travado em nenhum projeto."
    }
  ];

  return (
    <section id="faq" className="py-24 px-6 max-w-3xl mx-auto scroll-mt-20">
      <h2 className="text-white text-3xl font-black mb-12 text-center uppercase tracking-tighter">Dúvidas Frequentes</h2>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <FAQItem key={i} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
