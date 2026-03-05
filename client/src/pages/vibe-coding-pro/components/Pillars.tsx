
import React from 'react';
import { Users, Zap, Target, TrendingUp } from 'lucide-react';

const pillars = [
  {
    icon: Users,
    title: 'SQUAD CREATION',
    subtitle: 'Monte seu time de IA',
    description: 'Aprenda a estruturar e coordenar squads de agentes especializados para cada tipo de projeto.',
    points: [
      'Definir papéis e responsabilidades',
      'Criar workflows de comunicação',
      'Coordenar trabalho paralelo',
      'Escalar sem contratar'
    ]
  },
  {
    icon: Zap,
    title: 'WORKFLOW AUTOMATION',
    subtitle: 'Automatize tudo que é repetitivo',
    description: 'Domine a arte de automatizar processos complexos usando AIOS e Claude para trabalhar enquanto você dorme.',
    points: [
      'Design de workflows inteligentes',
      'Integração entre ferramentas',
      'Testing e deployment automático',
      'Monitoramento contínuo'
    ]
  },
  {
    icon: Target,
    title: 'OFFER SCULPTING',
    subtitle: 'Esculpa ofertas valiosas',
    description: 'Transforme capacidade técnica em ofertas de alto valor que resolvem problemas reais de negócio.',
    points: [
      'Identificar dores de alto valor',
      'Estruturar propostas irresistíveis',
      'Precificar baseado em resultado',
      'Criar contratos recorrentes'
    ]
  },
  {
    icon: TrendingUp,
    title: 'AUDIENCE BUILDING',
    subtitle: 'Construa autoridade',
    description: 'Posicione-se como especialista no mercado e atraia clientes de alto valor organicamente.',
    points: [
      'Content marketing estratégico',
      'Case studies documentados',
      'Network com decisores',
      'Personal branding técnico'
    ]
  }
];

const Pillars: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-mono text-primary text-xs tracking-widest mb-4 block uppercase">Os 4 Fundamentos</span>
          <h2 className="text-white text-3xl md:text-6xl font-black uppercase tracking-tighter mb-6">
            O que você vai dominar<br/>
            <span className="text-primary">de verdade</span>
          </h2>
          <p className="text-white/60 text-lg md:text-xl max-w-3xl mx-auto">
            Não é sobre aprender mais uma ferramenta. É sobre dominar um sistema completo de orquestração.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {pillars.map((pillar, i) => (
            <div key={i} className="bg-white/[0.02] border border-white/5 p-8 md:p-10 rounded-2xl hover:border-primary/20 transition-all">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <pillar.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-white text-xl font-black uppercase mb-1">{pillar.title}</h3>
                  <p className="text-primary text-xs font-bold uppercase tracking-wider">{pillar.subtitle}</p>
                </div>
              </div>

              <p className="text-white/70 text-base mb-6 leading-relaxed">
                {pillar.description}
              </p>

              <div className="space-y-3">
                <p className="text-white/40 text-xs uppercase font-bold tracking-wider">Você vai aprender:</p>
                {pillar.points.map((point, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <span className="text-primary mt-1 text-sm">→</span>
                    <span className="text-white/60 text-sm">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-transparent border border-primary/20 p-8 md:p-12 rounded-2xl">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-white text-xl md:text-3xl font-black uppercase leading-tight mb-4">
              Não vendemos curso de programação.
            </p>
            <p className="text-primary text-2xl md:text-4xl font-black uppercase leading-tight">
              Vendemos metodologia de orquestração.
            </p>
            <p className="text-white/60 text-base md:text-lg mt-6">
              Porque no futuro, quem sabe orquestrar sistemas inteligentes vai dominar o mercado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pillars;
