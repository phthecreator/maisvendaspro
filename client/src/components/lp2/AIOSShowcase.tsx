
import React from 'react';
import { Code, TestTube, GitBranch, Package, Users, FileText, BarChart, Settings } from 'lucide-react';

const agents = [
  {
    icon: Code,
    name: 'Dev Agent',
    role: 'Full Stack Developer',
    description: 'Implementa features completas, escreve testes, segue padrões de código. Trabalha 24/7 sem parar.',
    capabilities: ['Story-driven development', 'Automated testing', 'Code review', 'Documentation']
  },
  {
    icon: TestTube,
    name: 'QA Agent',
    role: 'Quality Assurance',
    description: 'Testa cada linha de código, encontra bugs antes de produção, garante qualidade máxima.',
    capabilities: ['Automated testing', 'Bug detection', 'Performance testing', 'Security checks']
  },
  {
    icon: GitBranch,
    name: 'DevOps Agent',
    role: 'Infrastructure Specialist',
    description: 'Gerencia deploy, CI/CD, infraestrutura. Garante que tudo rode perfeitamente.',
    capabilities: ['Auto deployment', 'CI/CD pipelines', 'Infrastructure as code', 'Monitoring']
  },
  {
    icon: FileText,
    name: 'PM Agent',
    role: 'Product Manager',
    description: 'Quebra requisitos em stories executáveis, prioriza backlog, coordena o squad.',
    capabilities: ['Story creation', 'Backlog management', 'Sprint planning', 'Stakeholder sync']
  },
  {
    icon: Package,
    name: 'Architect Agent',
    role: 'System Architect',
    description: 'Define arquitetura, escolhe stack, garante escalabilidade e manutenibilidade.',
    capabilities: ['System design', 'Tech stack selection', 'Scalability planning', 'Code structure']
  },
  {
    icon: BarChart,
    name: 'Analyst Agent',
    role: 'Business Analyst',
    description: 'Analisa dados, gera insights, otimiza processos baseado em métricas reais.',
    capabilities: ['Data analysis', 'Metrics tracking', 'Business intelligence', 'Optimization']
  }
];

const AIOSShowcase: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-mono text-primary text-xs tracking-widest mb-4 block uppercase">AIOS Framework</span>
          <h2 className="text-white text-3xl md:text-6xl font-black uppercase tracking-tighter mb-6">
            Conheça seu novo squad<br/>
            <span className="text-primary">de agentes especializados</span>
          </h2>
          <p className="text-white/60 text-lg md:text-xl max-w-3xl mx-auto">
            Cada agente domina uma área específica. Juntos, eles entregam projetos completos enquanto você orquestra.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {agents.map((agent, i) => (
            <div key={i} className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl hover:border-primary/20 transition-all group">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <agent.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-white text-lg font-black uppercase">{agent.name}</h3>
                  <p className="text-primary text-xs font-bold uppercase tracking-wider">{agent.role}</p>
                </div>
              </div>

              <p className="text-white/70 text-sm mb-6 leading-relaxed">
                {agent.description}
              </p>

              <div className="space-y-2">
                <p className="text-white/40 text-xs uppercase font-bold tracking-wider">Capabilities:</p>
                <div className="flex flex-wrap gap-2">
                  {agent.capabilities.map((cap, j) => (
                    <span key={j} className="text-[10px] px-2 py-1 rounded bg-white/5 text-white/50 font-mono">
                      {cap}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-transparent border border-primary/20 p-8 md:p-12 rounded-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-white text-2xl md:text-3xl font-black uppercase mb-6">
                Eles são poderosos.<br/>
                Você é o maestro.
              </h3>
              <p className="text-white/70 text-base mb-6 leading-relaxed">
                O AIOS framework já vem com todos os agentes configurados e prontos para trabalhar. Você só precisa aprender a orquestrá-los para entregar projetos complexos em tempo recorde.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span className="text-white/80 text-sm">Agentes trabalham em paralelo, 24/7</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span className="text-white/80 text-sm">Comunicação automatizada entre agentes</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span className="text-white/80 text-sm">Você foca em estratégia, eles executam</span>
                </div>
              </div>
            </div>

            <div className="bg-black/40 border border-white/5 p-6 rounded-xl">
              <div className="font-mono text-xs text-primary mb-4">// Exemplo de orquestração</div>
              <div className="space-y-2 text-sm font-mono">
                <div className="text-white/50">
                  <span className="text-primary">@pm</span> create-story "Feature X"
                </div>
                <div className="text-white/50 pl-4">
                  → <span className="text-primary">@architect</span> define-structure
                </div>
                <div className="text-white/50 pl-4">
                  → <span className="text-primary">@dev</span> implement-story
                </div>
                <div className="text-white/50 pl-4">
                  → <span className="text-primary">@qa</span> run-tests
                </div>
                <div className="text-white/50 pl-4">
                  → <span className="text-primary">@devops</span> deploy
                </div>
                <div className="text-primary mt-4">✓ Feature entregue em produção</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-white/40 text-sm uppercase font-bold tracking-widest mb-4">Resultado final</p>
          <p className="text-white text-2xl md:text-4xl font-black uppercase max-w-4xl mx-auto leading-tight">
            Você entrega em <span className="text-primary">1 semana</span> o que uma equipe tradicional entrega em <span className="text-white/40">1 mês</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AIOSShowcase;
