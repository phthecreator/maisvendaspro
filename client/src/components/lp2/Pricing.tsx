
import React from 'react';
import { ShieldCheck, Lock, Zap, Gift, ArrowRight } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-black border-t border-white/5" id="pricing">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-mono text-primary text-xs tracking-widest mb-4 block uppercase">Oferta</span>
          <h2 className="text-white text-3xl md:text-6xl font-black uppercase tracking-tighter mb-6 px-2">
            Tudo que você precisa pra<br/>
            <span className="text-primary">faturar com IA em 30 dias</span>
          </h2>
          <p className="text-white/60 text-lg md:text-xl max-w-3xl mx-auto">
            Não estamos vendendo curso. Estamos vendendo um atalho de 6 meses de tentativa e erro
            comprimido em 30 dias com acompanhamento.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
          {/* Value Stack */}
          <div className="space-y-6 order-2 lg:order-1 px-2">
            <h4 className="text-white text-xl md:text-2xl font-black uppercase mb-6 border-b border-primary/20 pb-4">O que você recebe:</h4>
            <div className="space-y-5">
              <div className="flex items-start gap-3 text-white/80 text-sm md:text-base">
                <span className="text-primary mt-1 font-black">01</span>
                <div>
                  <p className="text-white font-bold">6 módulos completos (AIOS + Claude + Vendas)</p>
                  <p className="text-white/40 text-xs">Se vendesse separado: R$ 997</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-white/80 text-sm md:text-base">
                <span className="text-primary mt-1 font-black">02</span>
                <div>
                  <p className="text-white font-bold">3 projetos reais do zero ao deploy</p>
                  <p className="text-white/40 text-xs">Bot WhatsApp, SDR com IA, Site profissional — valor: R$ 1.500</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-white/80 text-sm md:text-base">
                <span className="text-primary mt-1 font-black">03</span>
                <div>
                  <p className="text-white font-bold">Templates de squad, workflow e proposta comercial</p>
                  <p className="text-white/40 text-xs">Prontos pra usar com clientes — valor: R$ 500</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-white/80 text-sm md:text-base">
                <span className="text-primary mt-1 font-black">04</span>
                <div>
                  <p className="text-white font-bold">Acesso ao grupo de networking (lives semanais)</p>
                  <p className="text-white/40 text-xs">Troca de experiência, parcerias, indicações — valor: R$ 97/mês</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-white/80 text-sm md:text-base">
                <span className="text-primary mt-1 font-black">05</span>
                <div>
                  <p className="text-white font-bold">Framework AIOS Pro (12 agentes configurados)</p>
                  <p className="text-white/40 text-xs">O mesmo que usamos nos nossos projetos — valor: R$ 2.000</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-white/80 text-sm md:text-base">
                <span className="text-primary mt-1 font-black">06</span>
                <div>
                  <p className="text-white font-bold">Acesso vitalício + atualizações</p>
                  <p className="text-white/40 text-xs">IA evolui, o curso evolui junto — valor: inestimável</p>
                </div>
              </div>
            </div>

            <div className="bg-white/[0.02] border border-primary/20 p-6 rounded-xl mt-8">
              <div className="flex items-center gap-2 mb-3">
                <Gift className="w-5 h-5 text-primary" />
                <p className="text-primary text-xs uppercase font-black tracking-wider">Bônus: mentoria em grupo</p>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                Aulas ao vivo semanais onde tiramos dúvidas, revisamos projetos e mostramos
                como fechar contratos. Gravadas e disponíveis pra sempre.
              </p>
            </div>

            <div className="bg-white/[0.02] border border-white/5 p-6 rounded-xl">
              <p className="text-white/40 text-xs uppercase font-bold tracking-wider mb-3">Valor total se comprasse separado</p>
              <p className="text-white/50 text-2xl font-black line-through">R$ 5.094</p>
              <p className="text-white/40 text-xs mt-2">Você paga uma fração disso. E ainda tem garantia.</p>
            </div>
          </div>

          {/* Price Card */}
          <div className="bg-white/[0.02] border-2 border-primary/30 p-8 md:p-12 rounded-2xl shadow-[0_0_60px_rgba(0,255,136,0.08)] relative overflow-hidden order-1 lg:order-2">
            <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-6">Investimento único</p>

            <div className="mb-8">
              <p className="text-white/50 text-lg line-through mb-1">De R$ 997</p>
              <div className="text-center">
                <h2 className="text-primary text-6xl md:text-8xl font-black tracking-tighter leading-none mb-2">R$ 297</h2>
                <p className="text-white/80 text-base md:text-lg font-medium">ou 12x de R$ 29,90</p>
              </div>
            </div>

            <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 mb-8 text-center">
              <p className="text-primary font-black text-sm uppercase">Preço de lançamento</p>
              <p className="text-white/60 text-xs">Vai subir quando atingirmos 100 alunos</p>
            </div>

            <div className="space-y-4 mb-10">
              <a
                href="https://wa.me/556291508399?text=Quero%20o%20Vibe%20Coding%20Pro"
                className="w-full inline-flex items-center justify-center gap-2 bg-primary text-black font-black text-base md:text-xl py-5 md:py-6 rounded-xl uppercase tracking-wide transition-transform hover:scale-105 active:scale-95"
              >
                Quero começar agora
                <ArrowRight className="w-5 h-5" />
              </a>
              <p className="text-center text-white/40 text-xs uppercase tracking-wider">Acesso liberado imediatamente</p>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center border-t border-white/5 pt-8">
              <div>
                <ShieldCheck className="text-primary w-5 h-5 mx-auto mb-2" />
                <p className="text-white/60 text-xs font-bold uppercase tracking-wider leading-tight">Garantia<br/>7 dias</p>
              </div>
              <div>
                <Lock className="text-primary w-5 h-5 mx-auto mb-2" />
                <p className="text-white/60 text-xs font-bold uppercase tracking-wider leading-tight">Pagamento<br/>Seguro</p>
              </div>
              <div>
                <Zap className="text-primary w-5 h-5 mx-auto mb-2" />
                <p className="text-white/60 text-xs font-bold uppercase tracking-wider leading-tight">Acesso<br/>Imediato</p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 text-center">
              <p className="text-white/50 text-xs leading-relaxed">
                Se em 7 dias você não sentir que valeu, manda um email e devolvemos 100%. Sem perguntas, sem burocracia.
              </p>
            </div>
          </div>
        </div>

        {/* Risk Reversal */}
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <p className="text-white/40 text-xs uppercase font-bold tracking-widest mb-4">Pensa assim</p>
          <p className="text-white text-xl md:text-3xl font-black uppercase leading-tight">
            Um único projeto de bot WhatsApp cobra <span className="text-primary">R$ 3.000+</span> no mercado.
          </p>
          <p className="text-white/60 text-base mt-4">
            Você aprende a construir quantos quiser por R$ 297. O ROI se paga no primeiro cliente.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
