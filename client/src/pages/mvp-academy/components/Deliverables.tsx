import React from 'react';
import { motion } from 'framer-motion';
import { Video, Users, BookOpen, Network, Award, TrendingUp } from 'lucide-react';

const deliverables = [
  {
    icon: Video,
    title: 'Encontros Semanais ao Vivo',
    subtitle: 'Terças, 19h — Grupo de WhatsApp',
    detail: 'Você não assiste — você constrói junto. Implementação em tempo real com tutores presentes.',
  },
  {
    icon: Users,
    title: 'Método Cohort',
    subtitle: 'Grupos de implementação por nível',
    detail: 'Accountability real. Progresso visível. Do Hello World ao deploy automático — com outros fazendo junto.',
  },
  {
    icon: BookOpen,
    title: 'Trilhas Modulares Gravadas',
    subtitle: '4 níveis — do fundamento ao cliente',
    detail: 'Prompt Engineering, Claude para iniciantes, Docker, Easy Panel, GitHub Actions. Cada trilha: prática primeiro.',
  },
  {
    icon: Network,
    title: 'Hub de Conexões',
    subtitle: 'Rede privada de empreendedores',
    detail: 'Indicações de trabalho para membros que geram valor. Parcerias reais dentro da comunidade.',
  },
  {
    icon: Award,
    title: 'Premiações Mensais',
    subtitle: 'Reconhecimento de quem entrega',
    detail: 'Os melhores membros são reconhecidos. Reputação dentro da comunidade abre portas.',
  },
  {
    icon: TrendingUp,
    title: 'Porta de Entrada para Mentoria',
    subtitle: 'Upsell natural — sem pressão',
    detail: 'Membros que provam resultado têm acesso prioritário à Mentoria R$15k. A comunidade é onde você mostra fit.',
  },
];

const Deliverables: React.FC = () => {
  return (
    <section className="py-32 md:py-40 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-20 text-center"
        >
          <p className="text-primary/70 text-xs uppercase tracking-[0.3em] font-semibold mb-4">
            O que você acessa
          </p>
          <h2 className="text-5xl md:text-7xl font-black tracking-tight text-white">
            Dentro da MVP Academy
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deliverables.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.07 }}
                className="p-8 rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm hover:border-primary/20 hover:bg-primary/[0.03] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/[0.08] flex items-center justify-center mb-6">
                  <Icon className="w-5 h-5 text-primary/70" />
                </div>
                <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                <p className="text-white/30 text-sm mb-4">{item.subtitle}</p>
                <p className="text-white/50 text-sm leading-relaxed">{item.detail}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Deliverables;
