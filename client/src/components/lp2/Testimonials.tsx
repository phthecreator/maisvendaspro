
import React from 'react';
import { Play, Star } from 'lucide-react';

const videoTestimonials = [
  { name: "Pedro M.", role: "Ex-Travado", sub: "Desenvolvedor Jr → Vibe Coder", quote: "Eu fiz 3 cursos de Python. Sabia fazer 'Hello World', mas não sabia integrar nada de verdade. Com o Vibe Coding, criei minha primeira automação COMPLEXA em 2 dias." },
  { name: "Ana L.", role: "Foco no Dinheiro", sub: "Gestora de Tráfego → Vibe Coder", quote: "Eu cobrava R$ 300 pra fazer um bot. Era humilhante. Agora cobro R$ 3k de implementação + R$ 800/mês. Tenho 4 contratos ativos." },
  { name: "Carlos R.", role: "Não-Técnico", sub: "Contador → Vibe Coder", quote: "Sou contador. Zero conhecimento de programação. Automatizei meu escritório e comecei a vender pros clientes. Fechei R$ 5.200 mês passado." }
];

const wallOfLove = [
  { user: "Lucas P.", text: "Primeira nota: R$ 4.500. Tenho 23 anos. Obrigado Vibe Coding." },
  { user: "Mariana S.", text: "Automatizei a captação da imobiliária. Depois vendi o sistema pra 3 concorrentes. R$ 9k em um mês." },
  { user: "Thiago B.", text: "Meu cliente disse: 'esse robô atende melhor que meu vendedor'. Renovação automática." },
  { user: "Júlia F.", text: "Fui de CLT R$ 2.800 para PJ faturando R$ 12k. Em 4 meses." },
  { user: "Rodrigo M.", text: "Primeira automação em 3 dias. Primeira venda em 11 dias. R$ 3.200." },
  { user: "Felipe K.", text: "Tenho 19 anos. Larguei a faculdade. Faturei mais em 2 meses do que em 1 ano de estágio." },
  { user: "Camila D.", text: "Sou mãe, trabalho de casa. Fechei R$ 2.500 com uma clínica. Método funciona." },
  { user: "Bruno H.", text: "De freelancer quebrado a R$ 8k/mês recorrente. Vida nova." },
  { user: "André & Paula", text: "Ensinei minha esposa. Ela fechou R$ 1.800 na primeira semana. Casal Vibe Coder." },
  { user: "Renato C.", text: "Automação rodando 24/7. Cliente feliz. Eu recebendo. Melhor negócio." },
  { user: "Diego L.", text: "Antes: desempregado. Hoje: 2 contratos de R$ 4k cada. Método salva vidas." },
  { user: "Beatriz A.", text: "Aprendi em português, com exemplos BR. Faz TODA a diferença." }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-white text-3xl md:text-6xl font-black uppercase tracking-tighter mb-4">
            🎬 "OUÇA DE QUEM JÁ ESTÁ FATURANDO"
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
           {videoTestimonials.map((t, i) => (
             <div key={i} className="bg-card-dark border border-white/5 rounded-3xl overflow-hidden flex flex-col group">
                <div className="relative aspect-[9/16] bg-card-dark overflow-hidden">
                   <img src={`https://picsum.photos/seed/testi-${i}/400/700`} className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform" />
                   <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(0,255,136,0.4)] transition-transform group-hover:scale-110">
                        <Play className="text-black fill-current w-6 h-6 ml-1" />
                      </div>
                   </div>
                   <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                      <p className="text-white font-black uppercase text-xl">{t.name}</p>
                      <p className="text-primary text-[10px] font-black uppercase tracking-widest">{t.sub}</p>
                   </div>
                </div>
                <div className="p-6">
                   <p className="text-white/60 text-sm italic leading-relaxed">"{t.quote}"</p>
                </div>
             </div>
           ))}
        </div>

        <div className="text-center mb-12">
           <h3 className="text-white/40 font-black uppercase text-xs tracking-[0.3em]">WALL OF LOVE</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {wallOfLove.map((w, i) => (
            <div key={i} className="bg-card-dark p-6 rounded-2xl border border-white/5 flex flex-col justify-between">
              <p className="text-white/70 text-sm italic mb-4 leading-relaxed">"{w.text}"</p>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                <span className="text-white font-black text-[10px] uppercase">{w.user}</span>
                <div className="flex text-accent-yellow">
                  <Star className="fill-current w-2.5 h-2.5" />
                  <Star className="fill-current w-2.5 h-2.5" />
                  <Star className="fill-current w-2.5 h-2.5" />
                  <Star className="fill-current w-2.5 h-2.5" />
                  <Star className="fill-current w-2.5 h-2.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
