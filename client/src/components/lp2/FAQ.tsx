
import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqItems = [
  { q: "Eu não sei NADA de programação. Vai funcionar pra mim?", a: "Sim. O método é baseado em orquestração de IA — a IA escreve o código, você direciona. Nosso mentorado Raphael, que não era programador, faturou R$ 8k em 15 dias aplicando o método." },
  { q: "Quanto tempo até eu ter resultado?", a: "Primeira automação funcionando: 3-7 dias. Primeiro contrato depende do seu esforço de prospecção — temos caso de 15 dias (Raphael) até 45 dias." },
  { q: "Preciso investir em ferramentas caras?", a: "Não. N8N e Evolution são gratuitos. VPS custa R$ 20/mês. Inicialmente você gasta menos de R$ 100/mês." },
  { q: "E se eu não conseguir vender?", a: "O Módulo 5 é inteiramente sobre vendas. Ensinamos diagnósticos e prospecção em nichos que imploram por automação." },
  { q: "Isso funciona no meu nicho?", a: "Se o nicho tem leads, processos repetitivos e dinheiro para investir, funciona. Nichos testados: Imobiliária, Saúde, Direito, etc." },
  { q: "Vocês dão suporte? E se eu travar?", a: "Sim. Comunidade ativa com resposta em 24h, mentorias semanais e base de conhecimento robusta." },
  { q: "O conteúdo fica desatualizado?", a: "Não. O acesso é vitalício e as atualizações são gratuitas conforme a IA e as ferramentas evoluem." },
  { q: "Por que tão barato? É pegadinha?", a: "Preço de lançamento. Estamos construindo os primeiros cases e depoimentos. Quando atingirmos 100 alunos, o preço sobe. Quem entrar agora paga menos e tem mais acesso direto a nós." },
  { q: "Ensina a vender ou só parte técnica?", a: "Os dois. Tech sem vendas é hobby. Vendas sem tech é commodity. Unimos os dois." },
  { q: "E se a IA evoluir e isso ficar obsoleto?", a: "Quanto mais a IA evolui, mais poderoso você fica. IA substitui quem tenta competir com ela, não quem manda nela." },
  { q: "Consigo fazer isso trabalhando CLT?", a: "Sim. Muitos alunos começaram com 1-2h por dia e escalaram até poderem sair do emprego." },
  { q: "Tem garantia?", a: "7 dias incondicional. Se não sentir que vale, manda um email e devolvemos 100%. Sem perguntas, sem burocracia." },
  { q: "Diferença pros outros cursos de IA?", a: "Foco total em FECHAR CONTRATOS e usar ferramentas 'hack' BR, não apenas teoria de ChatGPT." },
  { q: "Posso revender as automações prontas?", a: "SIM! Os templates são seus. Muitos alunos pagam o curso só revendendo o bot SDR imobiliário pronto para outros corretores." },
  { q: "Já sei programar, é pra mim?", a: "Sim, talvez mais ainda. Você vai acelerar 10x sua entrega e aprender a vender valor em vez de horas." }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 bg-black" id="faq">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">
            PERGUNTAS QUE VOCÊ TEM (E RESPOSTAS HONESTAS)
          </h2>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, i) => (
            <div key={i} className="bg-card-dark border border-white/5 rounded-2xl overflow-hidden transition-all hover:border-primary/20">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 text-left flex justify-between items-center gap-4 group"
              >
                <span className="text-white font-bold text-sm md:text-base uppercase tracking-tight group-hover:text-primary transition-colors">{item.q}</span>
                <ChevronDown className={`text-primary w-5 h-5 shrink-0 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6 text-white/50 text-sm md:text-base leading-relaxed border-t border-white/5 pt-4">
                   <p className="font-mono text-primary text-[10px] uppercase font-black mb-2 tracking-widest">Resposta:</p>
                   {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
