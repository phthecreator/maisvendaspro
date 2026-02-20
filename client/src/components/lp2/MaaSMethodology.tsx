
import React from 'react';
import { Network, Zap, Target, Users } from 'lucide-react';

const MaaSMethodology: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-mono text-primary text-xs tracking-widest mb-4 block uppercase">Methodology as a System</span>
          <h2 className="text-white text-3xl md:text-6xl font-black uppercase tracking-tighter mb-6">
            Não somos programadores.<br/>
            <span className="text-primary">Somos orquestradores.</span>
          </h2>
          <p className="text-white/60 text-lg md:text-xl max-w-3xl mx-auto">
            O futuro não é sobre escrever código. É sobre orquestrar sistemas inteligentes que trabalham por você.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-2xl">
            <h3 className="text-white text-2xl md:text-3xl font-black uppercase mb-6">
              O Método Antigo
            </h3>
            <div className="space-y-4 text-white/50">
              <p className="flex items-start gap-3">
                <span className="text-red-500 mt-1">×</span>
                <span>Escrever código linha por linha manualmente</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-red-500 mt-1">×</span>
                <span>Gastar semanas debugando e refatorando</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-red-500 mt-1">×</span>
                <span>Ficar limitado pelo seu conhecimento técnico</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-red-500 mt-1">×</span>
                <span>Cobrar por hora trabalhada, não por valor entregue</span>
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-white/5">
              <p className="text-white/40 text-sm uppercase font-bold">Resultado:</p>
              <p className="text-white text-lg font-bold mt-2">1 projeto por mês, limitado pela sua capacidade</p>
            </div>
          </div>

          <div className="bg-primary/[0.03] border border-primary/20 p-8 md:p-12 rounded-2xl">
            <h3 className="text-primary text-2xl md:text-3xl font-black uppercase mb-6">
              O Método MaaS
            </h3>
            <div className="space-y-4 text-white/80">
              <p className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span>Orquestrar agentes especializados (AIOS + Claude)</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span>Automatizar 80% do workflow de desenvolvimento</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span>Entregar soluções complexas em dias, não meses</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span>Cobrar pelo valor e impacto, não por horas</span>
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-primary/20">
              <p className="text-primary/80 text-sm uppercase font-bold">Resultado:</p>
              <p className="text-white text-lg font-bold mt-2">4+ projetos por mês, escalável infinitamente</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white/[0.02] border border-white/5 p-6 rounded-xl">
            <Network className="w-8 h-8 text-primary mb-4" />
            <h4 className="text-white font-black uppercase text-sm mb-2">Squad Creation</h4>
            <p className="text-white/50 text-xs">Monte squads de agentes especializados para cada tipo de projeto</p>
          </div>

          <div className="bg-white/[0.02] border border-white/5 p-6 rounded-xl">
            <Zap className="w-8 h-8 text-primary mb-4" />
            <h4 className="text-white font-black uppercase text-sm mb-2">Workflow Automation</h4>
            <p className="text-white/50 text-xs">Automatize todo o fluxo de desenvolvimento, teste e deploy</p>
          </div>

          <div className="bg-white/[0.02] border border-white/5 p-6 rounded-xl">
            <Target className="w-8 h-8 text-primary mb-4" />
            <h4 className="text-white font-black uppercase text-sm mb-2">Offer Sculpting</h4>
            <p className="text-white/50 text-xs">Esculpa ofertas de alto valor baseadas em resultados</p>
          </div>

          <div className="bg-white/[0.02] border border-white/5 p-6 rounded-xl">
            <Users className="w-8 h-8 text-primary mb-4" />
            <h4 className="text-white font-black uppercase text-sm mb-2">Audience Building</h4>
            <p className="text-white/50 text-xs">Construa e posicione-se como especialista no mercado</p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-primary/10 border border-primary/20 p-8 md:p-12 rounded-2xl max-w-4xl">
            <p className="text-white text-xl md:text-3xl font-black uppercase leading-tight mb-4">
              "Não ensinamos você a programar."
            </p>
            <p className="text-primary text-2xl md:text-4xl font-black uppercase italic">
              "Ensinamos você a orquestrar."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaaSMethodology;
