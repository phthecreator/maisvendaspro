
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
            <span className="text-primary">entregar o primeiro projeto e cobrar por ele</span>
          </h2>
          <p className="text-white/60 text-lg md:text-xl max-w-3xl mx-auto">
            Não é curso gravado. É um cohort ao vivo onde você aprende fazendo,
            com dois caras que vivem do que vão te ensinar.
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
                  <p className="text-white font-bold">4 aulas ao vivo por mês (gravadas no grupo)</p>
                  <p className="text-white/40 text-xs">Se vendesse separado: R$ 400</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-white/80 text-sm md:text-base">
                <span className="text-primary mt-1 font-black">02</span>
                <div>
                  <p className="text-white font-bold">Projetos reais do zero ao deploy</p>
                  <p className="text-white/40 text-xs">Bot WhatsApp, SDR com IA, Site profissional — valor: R$ 800</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-white/80 text-sm md:text-base">
                <span className="text-primary mt-1 font-black">03</span>
                <div>
                  <p className="text-white font-bold">Setup completo das ferramentas (gratuitas + pagas)</p>
                  <p className="text-white/40 text-xs">Claude Code, AIOS, n8n, Cursor — valor: R$ 200</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-white/80 text-sm md:text-base">
                <span className="text-primary mt-1 font-black">04</span>
                <div>
                  <p className="text-white font-bold">Como cobrar, vender e fechar o contrato</p>
                  <p className="text-white/40 text-xs">Ligação, proposta, precificação — valor: R$ 300</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-white/80 text-sm md:text-base">
                <span className="text-primary mt-1 font-black">05</span>
                <div>
                  <p className="text-white font-bold">Acesso ao grupo de cohort no WhatsApp</p>
                  <p className="text-white/40 text-xs">Só quem pagou. Todos com o mesmo objetivo. — valor: R$ 97/mês</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-white/80 text-sm md:text-base">
                <span className="text-primary mt-1 font-black">06</span>
                <div>
                  <p className="text-white font-bold">Templates de proposta comercial prontos pra usar</p>
                  <p className="text-white/40 text-xs">Manda pro cliente e fecha — valor: R$ 200</p>
                </div>
              </div>
            </div>

            <div className="bg-white/[0.02] border border-primary/20 p-6 rounded-xl mt-8">
              <div className="flex items-center gap-2 mb-3">
                <Gift className="w-5 h-5 text-primary" />
                <p className="text-primary text-xs uppercase font-black tracking-wider">Quem ensina</p>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                Pedro e Murillo. Full stack + prompt engineering + automações.
                Geramos R$ 20k/mês usando exatamente o que vamos te ensinar por R$ 250.
                Não é teoria — é o que a gente faz todo dia.
              </p>
            </div>

            <div className="bg-white/[0.02] border border-white/5 p-6 rounded-xl">
              <p className="text-white/40 text-xs uppercase font-bold tracking-wider mb-3">Valor total se comprasse separado</p>
              <p className="text-white/50 text-2xl font-black line-through">R$ 1.997</p>
              <p className="text-white/40 text-xs mt-2">Você investe R$ 250 pra aprender a fechar projetos de R$ 3k a R$ 10k.</p>
            </div>
          </div>

          {/* Price Card */}
          <div className="bg-white/[0.02] border-2 border-primary/30 p-8 md:p-12 rounded-2xl shadow-[0_0_60px_rgba(0,255,136,0.08)] relative overflow-hidden order-1 lg:order-2">
            <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-6">Investimento único</p>

            <div className="mb-8">
              <p className="text-white/50 text-lg line-through mb-1">De R$ 1.200</p>
              <div className="text-center">
                <h2 className="text-primary text-6xl md:text-8xl font-black tracking-tighter leading-none mb-2">R$ 250</h2>
                <p className="text-white/80 text-base md:text-lg font-medium">ou parcelado — opções no checkout</p>
              </div>
            </div>

            <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 mb-8 text-center">
              <p className="text-primary font-black text-sm uppercase">Preço de lançamento — Turma 1</p>
              <p className="text-white/60 text-xs">Próximas turmas sem desconto garantido</p>
            </div>

            <div className="space-y-4 mb-10">
              <a
                href="https://pay.cakto.com.br/3hjpqk6_784210"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-primary text-black font-black text-base md:text-xl py-5 md:py-6 rounded-xl uppercase tracking-wide transition-transform hover:scale-105 active:scale-95"
              >
                Quero entrar na Turma 1
                <ArrowRight className="w-5 h-5" />
              </a>
              <p className="text-center text-white/40 text-xs uppercase tracking-wider">Pagamento seguro • Grupo liberado após confirmação</p>
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
            Você aprende a construir e vender por R$ 250. Se fechar um cliente no mês,
            você já está ganhando mais que a maioria. O ROI se paga na primeira ligação.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
