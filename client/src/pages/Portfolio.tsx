import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useMemo, useRef, useState } from "react";
import SecretTerminal from "../components/lp2/SecretTerminal";
import { Menu } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const images = {
  skyline: "/portfolio/01-skyline.jpg",
  studio: "/portfolio/02-studio.jpg",
  hoodie: "/portfolio/03-hoodie.jpg",
  desk: "/portfolio/04-desk.jpg",
};

type Step = {
  id: string;
  kicker?: string;
  title?: string;
  description?: string;
  highlights?: string[];
  bg: string;
  image?: string;
  imageAlt?: string;
  layout?: "split" | "full";
  content: React.ReactNode;
};

const steps: Step[] = [
  {
    id: "sobre",
    title: "Sobre mim",
    bg: "linear-gradient(135deg, rgba(57,255,20,0.10), rgba(0,0,0,0.92) 55%, rgba(0,153,255,0.12))",
    image: images.hoodie,
    imageAlt: "Pedro em um mirante com vista da cidade",
    content: (
      <div className="space-y-10">
        <div className="space-y-6">
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-primary/70">Manifesto</p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white">
            A verdade que ninguém fala
          </h2>
          <div className="space-y-4 text-base sm:text-lg md:text-xl text-white/80 leading-relaxed">
            <p>Por que a maioria das automações falha?</p>
            <p>Porque não é sobre tecnologia. É sobre mentalidade.</p>
            <p>
              Eu já vi empresário matar automação que tava gerando +40k/mês porque ela mostrava a verdade que ele
              não queria ouvir.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 text-white/80">
          <p className="text-xl md:text-2xl font-semibold text-white">
            Ele não desligou o sistema. Ele desligou o espelho.
          </p>
        </div>

        <div className="space-y-6">
          <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed">
            No Vale do Silício, onde passei os últimos 2 anos, a mentalidade é outra:
          </p>
          <ul className="space-y-4 text-white/70 leading-relaxed text-base md:text-lg">
            <li>
              → Investe-se 20k numa ferramenta e treina-se o time porque o retorno é pensado em anos, não em
              semanas.
            </li>
            <li>
              → Contrata-se júnior de 23 anos porque o foco é lapidar, não procurar quem “já vem pronto”.
            </li>
            <li>→ IA tá na base da infraestrutura, não é enfeite de site.</li>
          </ul>
        </div>

        <div className="space-y-4 text-white/70 text-base sm:text-lg leading-relaxed">
          <p>
            No Brasil, a pergunta ainda é: “E se for golpe? E se não funcionar? E se eu investir e perder?”
          </p>
          <p>E enquanto isso, quem entendeu o jogo já tá 3 anos na frente.</p>
        </div>

        <div className="space-y-4 text-white/80 text-base sm:text-lg leading-relaxed">
          <p>
            Eu trabalho com quem entende que automação não é bot no WhatsApp. É CRM integrado, leads qualificados
            sozinhos, remarketing rodando, SDR e Closer sendo treinados por IA baseado nas próprias calls.
          </p>
          <p className="text-white">
            É sistema. Não é mágica. E sistema demora pra construir, mas roda sozinho depois.
          </p>
        </div>

        <div className="mt-10 space-y-8">
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.4em] text-primary/70">
            <span>Anti-cliente</span>
            <span className="h-px flex-1 bg-white/10" />
          </div>
          <h3 className="text-2xl md:text-4xl font-black tracking-tighter text-white">
            Com quem eu NÃO trabalho
          </h3>
          <p className="text-base sm:text-lg text-white/70 leading-relaxed">
            Esse trabalho não é pra todo mundo.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-white/50">Eu NÃO trabalho com</p>
              <ul className="space-y-4 text-white/70 leading-relaxed">
                <li>
                  → Quem acha que bot resolve tudo
                  <span className="block text-white/50 text-sm">(Bot é ferramenta. Sistema é estratégia.)</span>
                </li>
                <li>
                  → Quem quer resultado instantâneo sem processo
                  <span className="block text-white/50 text-sm">
                    (Automação roda sozinha depois de estruturada. Não antes.)
                  </span>
                </li>
                <li>
                  → Quem tem medo de ver a verdade nos dados
                  <span className="block text-white/50 text-sm">
                    (Se você prefere manter o ego intacto a ter mais vendas, esse não é o projeto certo pra gente trabalhar juntos.)
                  </span>
                </li>
                <li>
                  → Quem quer “testar pra ver se funciona” sem investir em estrutura
                  <span className="block text-white/50 text-sm">
                    (Sistema demanda setup. Não é plug-and-play de 3 dias.)
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-white/50">Eu trabalho melhor com</p>
              <ul className="space-y-4 text-white/70 leading-relaxed">
                <li>✓ Empresas de médio/grande porte que querem escalar vendas com operação real</li>
                <li>✓ Negócios que entendem que automação é investimento, não custo</li>
                <li>✓ Times que topam ajustar processo pra sistema rodar direito</li>
                <li>✓ Pessoas que sabem que “fulano que sabe de tudo” não é estratégia de crescimento</li>
              </ul>
              <p className="text-white/80 font-semibold">
                Se você se encaixa no segundo grupo, a gente vai se dar bem.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "o-que-eu-faco",
    title: "O que eu faço",
    bg: "linear-gradient(135deg, rgba(255,0,82,0.12), rgba(0,0,0,0.92) 55%, rgba(57,255,20,0.08))",
    layout: "full",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-card border border-white/5 rounded-2xl p-6 sm:p-8 hover:border-primary/20 transition-all group">
          <span className="text-3xl mb-4 block">🚀</span>
          <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">Automações de Vendas + Integração de Sistemas</h3>
          <p className="mt-3 text-white/60 leading-relaxed">
            Crio fluxos que respondem rápido, qualificam de verdade e encaminham pro humano no momento certo — sem parecer robô. Integro WhatsApp, CRM, e-mail, formulário e pipeline num fluxo único. Nada de dado espalhado.
          </p>
          <p className="mt-4 text-xs uppercase tracking-widest text-white/40">
            WhatsApp / Instagram / Funil / CRM Integrado
          </p>
        </div>

        <div className="bg-card border border-white/5 rounded-2xl p-6 sm:p-8 hover:border-primary/20 transition-all group">
          <span className="text-3xl mb-4 block">🤖</span>
          <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">SDR com IA + Treino de Time</h3>
          <p className="mt-3 text-white/60 leading-relaxed">
            Desenho o roteiro completo do agente: perguntas certas, objeções mapeadas, qualificação real e agendamento de call. Analiso as calls e transformo padrões de sucesso em ajustes no playbook. Closer bom vira método. Método vira escala.
          </p>
          <p className="mt-4 text-xs uppercase tracking-widest text-white/40">
            Agendamento / Qualificação / Padrões de Performance
          </p>
        </div>

        <div className="bg-card border border-white/5 rounded-2xl p-6 sm:p-8 hover:border-primary/20 transition-all group">
          <span className="text-3xl mb-4 block">🛠️</span>
          <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">MVP / Produto Rápido</h3>
          <p className="mt-3 text-white/60 leading-relaxed">
            Estruturo e tiro do papel MVPs e produtos digitais: landing, proposta, lógica do fluxo, integrações e versão funcional. Ideia no papel vira produto testável em semanas, não meses.
          </p>
          <p className="mt-4 text-xs uppercase tracking-widest text-white/40">
            Landing / Proposta / Integrações / Versão Funcional
          </p>
        </div>

        <div className="bg-card border border-white/5 rounded-2xl p-6 sm:p-8 hover:border-primary/20 transition-all group">
          <span className="text-3xl mb-4 block">✍️</span>
          <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">Copy e Posicionamento</h3>
          <p className="mt-3 text-white/60 leading-relaxed">
            Escrevo a copy do jeito que o cliente entende. Direto, sem clichê, sem “tecniquês”. Bom pra página, anúncio, pitch e WhatsApp. Se ninguém entende o que você vende, o problema é comunicação.
          </p>
          <p className="mt-4 text-xs uppercase tracking-widest text-white/40">
            Página / Anúncio / Pitch / Mensagens
          </p>
        </div>

        <div className="bg-card border border-white/5 rounded-2xl p-6 sm:p-8 hover:border-primary/20 transition-all group">
          <span className="text-3xl mb-4 block">📋</span>
          <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">Operação e Playbooks</h3>
          <p className="mt-3 text-white/60 leading-relaxed">
            Crio checklists, scripts, templates e rotinas pra time operar sem improviso. Método (SPIN adaptado, micro-pactos, funil, métricas) + execução documentada. Acabou a era do “fulano que sabe de tudo”.
          </p>
          <p className="mt-4 text-xs uppercase tracking-widest text-white/40">
            Processos / Scripts / Rotinas
          </p>
        </div>

        <div className="bg-card border border-white/5 rounded-2xl p-6 sm:p-8 hover:border-primary/20 transition-all group">
          <span className="text-3xl mb-4 block">📊</span>
          <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">Diagnóstico e Estratégia de Operação</h3>
          <p className="mt-3 text-white/60 leading-relaxed">
            Antes de automatizar, eu mapeio o fluxo, encontro o gargalo e digo o que fica, o que muda e o que corta. Transformo dados soltos em diagnóstico claro. Às vezes o problema não é tecnologia — é processo.
          </p>
          <p className="mt-4 text-xs uppercase tracking-widest text-white/40">
            Análise / Dashboards / Diagnóstico de Gargalo
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "stack",
    title: "Stack & Metodologia",
    bg: "linear-gradient(135deg, rgba(0,153,255,0.16), rgba(0,0,0,0.92) 55%, rgba(255,0,82,0.10))",
    image: images.desk,
    imageAlt: "Pedro trabalhando no escritorio",
    content: (
      <div className="space-y-10">
        <div className="space-y-4">
          <p className="text-base sm:text-lg text-white/80">Como eu trabalho (Stack e método)</p>
          <p className="text-white/70 leading-relaxed">
            Eu não tenho fetiche por framework. Uso o que resolve o problema mais rápido, com menos fricção.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card border border-white/5 rounded-2xl p-6 sm:p-8">
            <p className="text-sm font-bold text-primary uppercase tracking-wider mb-6">Ferramentas e linguagens (de verdade)</p>
            <ul className="space-y-3 text-white/80 font-medium">
              <li className="flex items-center gap-2"><span className="text-primary">✔</span> React — Front-end (nossa base principal)</li>
              <li className="flex items-center gap-2"><span className="text-primary">✔</span> Node.js — Backend quando precisa de lógica server-side</li>
              <li className="flex items-center gap-2"><span className="text-primary">✔</span> Python — Automações, scripts e integrações pesadas</li>
              <li className="flex items-center gap-2"><span className="text-primary">✔</span> n8n — Automação e orquestração de fluxos (coração do sistema)</li>
              <li className="flex items-center gap-2"><span className="text-primary">✔</span> WhatsApp API — Fluxos comerciais e qualificação</li>
              <li className="flex items-center gap-2"><span className="text-primary">✔</span> LLMs (Claude, GPT, Gemini) — IA aplicada, não enfeite</li>
              <li className="flex items-center gap-2"><span className="text-primary">✔</span> Baserow / Google Sheets — Base de dados rápida e acessível</li>
              <li className="flex items-center gap-2"><span className="text-primary">✔</span> Portainer — Gerenciamento de containers</li>
              <li className="flex items-center gap-2"><span className="text-primary">✔</span> Git + VS Code + IA — Meu setup diário de dev</li>
            </ul>
          </div>
          <div className="bg-card border border-white/5 rounded-2xl p-6 sm:p-8">
            <p className="text-sm font-bold text-primary uppercase tracking-wider mb-6">Meu método de trabalho</p>
            <ul className="space-y-4 text-white/80 font-medium text-lg">
              <li className="flex items-start gap-3">
                <span className="bg-primary/20 text-primary px-2 rounded text-sm mt-1">01</span>
                <span>Entender o problema real (não o que o cliente acha que é)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-primary/20 text-primary px-2 rounded text-sm mt-1">02</span>
                <span>Definir “sucesso” com métrica clara (agendamentos, conversão, tempo de resposta)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-primary/20 text-primary px-2 rounded text-sm mt-1">03</span>
                <span>Desenhar o fluxo antes de codar (processo &gt; código)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-primary/20 text-primary px-2 rounded text-sm mt-1">04</span>
                <span>Entregar versão funcional rápido (80% rodando hoje &gt; 100% nunca)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-primary/20 text-primary px-2 rounded text-sm mt-1">05</span>
                <span>Iterar com base em dado real, não achismo</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card border border-white/5 rounded-2xl p-6 sm:p-8">
            <p className="text-sm font-bold text-primary uppercase tracking-wider mb-6">Metodologias que eu adapto</p>
            <ul className="space-y-3 text-white/80 leading-relaxed">
              <li>→ SPIN Selling: pra estruturar call de vendas e qualificação</li>
              <li>→ Micro-pactos: pra conduzir conversa e fechar próximo passo</li>
              <li>→ “Simples que roda”: primeiro funcionar, depois sofisticar</li>
              <li>→ Foco no gargalo: onde tá travando? Velocidade de resposta? Qualificação? Conversão?</li>
            </ul>
          </div>
          <div className="bg-card border border-white/5 rounded-2xl p-6 sm:p-8">
            <p className="text-sm font-bold text-primary uppercase tracking-wider mb-6">O que me diferencia</p>
            <p className="text-white/80 leading-relaxed text-lg">
              Eu não sou só dev. Eu entendo de copy, vendas, processos e operação. Isso me permite construir automação
              que não fica só “bonita no fluxograma”. Ela vende. Ela qualifica. Ela entrega.
            </p>
            <p className="mt-4 text-white/60 leading-relaxed">
              Porque eu sei que código sem conversão é hobby, não negócio.
            </p>
          </div>
        </div>

        <SecretTerminal />
      </div>
    ),
  },
  {
    id: "projetos",
    title: "Projetos",
    bg: "linear-gradient(135deg, rgba(57,255,20,0.16), rgba(0,0,0,0.92) 55%, rgba(255,204,0,0.10))",
    layout: "full",
    content: (
      <div className="space-y-10">
        <div className="space-y-3">
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-primary/70">Casos reais, números reais</p>
          <p className="text-lg text-white/70">O que eu já construí (e o que aprendi no processo)</p>
        </div>

        <article className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8">
            <div className="space-y-5">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary/70">
                🎯 Sistema de treinamento automático para closers
              </p>
              <div className="space-y-3 text-white/80 leading-relaxed">
                <p><strong className="text-white">Cliente:</strong> Empresário de mentoria high-ticket</p>
                <p><strong className="text-white">Resultado:</strong> +R$ 40.000/mês em vendas (≈USD 7.400)</p>
                <p>
                  <strong className="text-white">O que aconteceu:</strong> Criei um sistema que analisava as calls do closer em
                  tempo real e mandava resumo + pontos fortes/fracos no WhatsApp assim que ele terminava. Resultado?
                  Vendas subiram 40k no primeiro mês.
                </p>
              </div>
              <div className="space-y-3 text-white/70 leading-relaxed">
                <p><strong className="text-white">O que eu aprendi:</strong> Tecnologia não resolve ego.</p>
                <p>
                  Eu posso construir o melhor sistema do mundo, mas se o cliente não quer ver a verdade nos dados,
                  não adianta. Por isso hoje eu filtro: trabalho com quem quer crescer, não com quem quer conforto.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-red-500/30 bg-red-500/10 p-6 space-y-3">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-200/80">Plot twist</p>
              <p className="text-lg font-semibold text-red-200">
                💔 Plot twist: Ele desligou o sistema na segunda semana.
              </p>
              <p className="text-red-200/70">Motivo: “Não me adaptei aos treinamentos chegando todo dia.”</p>
            </div>
          </div>
        </article>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <article className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary/70">💰 Mentoria de desenvolvimento digital</p>
            <p className="text-white/80"><strong className="text-white">Faturamento:</strong> R$ 23.000 (≈USD 4.259)</p>
            <p className="text-white/70 leading-relaxed">
              <strong className="text-white">O que eu fiz:</strong> Estruturei operação completa de mentoria — desde a oferta
              até o processo de entrega e vendas.
            </p>
            <p className="text-white/70"><strong className="text-white">Foco:</strong> High-ticket com plano de ação + suporte + venda ativa.</p>
          </article>

          <article className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary/70">🤖 Automações comerciais com IA</p>
            <p className="text-white/80"><strong className="text-white">Faturamento:</strong> R$ 5.000 (≈USD 926)</p>
            <p className="text-white/70 leading-relaxed">
              <strong className="text-white">O que eu fiz:</strong> SDR no WhatsApp, qualificação automática, integração com CRM e
              disparo de remarketing.
            </p>
            <p className="text-white/70"><strong className="text-white">Stack:</strong> n8n + LLM + integrações customizadas.</p>
          </article>
        </div>

        <article className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary/70">🌐 Sites e catálogos sob demanda</p>
          <div className="space-y-2 text-white/70">
            <p><strong className="text-white">Projetos entregues:</strong></p>
            <p>→ Site individual: R$ 3.000 (≈USD 555)</p>
            <p>→ Catálogo digital: R$ 2.000 (≈USD 370)</p>
          </div>
          <p className="text-white/70 leading-relaxed">
            <strong className="text-white">O que mudou no meu jeito de trabalhar:</strong> Parei de vender “site bonito” e passei
            a vender “sistema que vende”. Landing page não é portfólio. É ferramenta de conversão.
          </p>
        </article>

        <article className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 space-y-6">
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary/70">🔄 Projetos em andamento</p>
            <p className="text-white/80 leading-relaxed">
              Estou tocando projetos comerciais com meu sócio Murillo, onde minha remuneração é % de receita futura.
              Por quê? Porque eu acredito no que construo. E porque prefiro crescer junto com quem entende o jogo
              do que receber fixo de quem só quer “testar”.
            </p>
          </div>

          <div className="rounded-2xl border border-dashed border-white/20 bg-black/60 p-6">
            <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.4em] text-white/60">
              <span>Arquivo confidencial</span>
              <span className="h-px flex-1 bg-white/10" />
            </div>
            <p className="mt-4 text-white/80 leading-relaxed">
              Tenho um acervo com centenas de templates funcionais no n8n (≈900), prontos para acelerar automações
              comerciais, CRM e operações internas.
            </p>
          </div>
        </article>

        <article className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary/70">📌 Network ativo</p>
          <p className="text-white/70">Tenho conexão direta com empresários validando:</p>
          <ul className="space-y-2 text-white/70">
            <li>→ Bot SDR comercial</li>
            <li>→ Automações de captação (Facebook/Instagram)</li>
            <li>→ Ferramentas de treinamento para closers</li>
          </ul>
          <p className="text-white/80 font-semibold">O foco é sempre o mesmo: negócio real, não tecnologia pela tecnologia.</p>
        </article>
      </div>
    ),
  },
  {
    id: "vale-do-silicio",
    kicker: "Vale do Silício",
    title: "O que eu vi lá que o Brasil ainda não sacou",
    bg: "linear-gradient(135deg, rgba(0,153,255,0.12), rgba(0,0,0,0.92) 55%, rgba(57,255,20,0.08))",
    image: images.skyline,
    imageAlt: "Vista panoramica do Vale do Silicio",
    content: (
      <div className="flex flex-col gap-8">
        <div className="space-y-4 text-white/80 leading-relaxed text-base sm:text-lg">
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-primary/70">2 anos no Vale do Silício</p>
          <p>
            Entre 2023 e 2025, eu morei no Vale do Silício. Não fui pra tirar foto na frente do Google. Fui pra
            entender como times que movem bilhões trabalham de verdade.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl md:text-3xl font-black text-white">O que eu aprendi (e trago pro Brasil)</h3>

          <div className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
              <p className="text-white font-semibold">1️⃣ Mentalidade de abundância vs mentalidade de escassez</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/70">
                <div className="rounded-xl border border-white/10 bg-black/40 p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">No Vale</p>
                  <p>“Vou investir 20k numa ferramenta, treinar o time e colher nos próximos anos.”</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-black/40 p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">No Brasil</p>
                  <p>“E se for golpe? E se não der certo? E se eu perder dinheiro?”</p>
                </div>
              </div>
              <p className="text-white/70">
                Resultado: lá eles testam rápido, erram barato e ajustam na mesma semana. Aqui, a maioria fica travada
                esperando “o momento certo” que nunca chega.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
              <p className="text-white font-semibold">2️⃣ Contratar pelo potencial, não pelo currículo</p>
              <p className="text-white/70">
                No Vale, empresa contrata júnior de 23 anos porque o foco é lapidar talento, não achar quem “já vem
                pronto”. No Brasil, a exigência é: “5 anos de experiência + sênior + que aceite salário de júnior.”
                Isso não é critério. É medo de investir em gente.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
              <p className="text-white font-semibold">3️⃣ IA como infraestrutura, não como enfeite</p>
              <p className="text-white/70">
                Lá, IA tá na base do sistema desde 2020. Não é “chatbot no site pra parecer moderno”. É automação
                rodando em CRM, qualificação, treinamento, análise de dados, predição de churn, otimização de funil —
                tudo integrado.
              </p>
              <p className="text-white/70">
                No Brasil, em 2025, a maioria ainda tá debatendo se IA “vai roubar emprego” ou “é só hype”. Enquanto
                isso, quem entendeu já tá usando IA como alavanca há 3 anos.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-black/50 p-6 space-y-4">
          <p className="text-white font-semibold">O que eu trouxe de lá</p>
          <ul className="space-y-2 text-white/70">
            <li>✓ Pensar em sistema, não em feature isolada</li>
            <li>✓ Velocidade de execução &gt; perfeição estética</li>
            <li>✓ Investir em processo porque ele escala, gente não</li>
            <li>✓ Usar IA como copiloto, não como substituto</li>
          </ul>
          <p className="text-white/80 font-semibold">
            Voltei pro Brasil com mais repertório, menos ilusão e foco total no que gera resultado: construir sistema
            que roda.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "contato",
    title: "Vamos acabar com o caos?",
    bg: "linear-gradient(135deg, rgba(255,204,0,0.16), rgba(0,0,0,0.92) 55%, rgba(57,255,20,0.10))",
    layout: "full",
    content: (
      <div className="text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-base sm:text-lg md:text-xl text-white/70 leading-relaxed">
            Se você tá perdendo lead no WhatsApp, se o time improvisa em vez de seguir processo, se você depende de
            “fulano que sabe de tudo”, ou se simplesmente não sabe por onde começar —
          </p>
          <p className="text-base sm:text-lg md:text-xl text-white/70 leading-relaxed">
            Eu consigo te dizer rápido se faz sentido automatizar, arrumar o processo ou fazer as duas coisas.
          </p>
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 sm:p-8 max-w-xl mx-auto my-10">
          <p className="text-primary font-bold text-lg italic mb-2">Me manda o print do seu caos no WhatsApp.</p>
          <p className="text-white/60 text-sm">Eu te devolvo diagnóstico em 24h. Sem compromisso. Sem enrolação. Direto ao ponto.</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://wa.me/556291508399" className="glow-primary inline-flex items-center justify-center rounded-xl bg-primary text-background text-lg font-black px-8 py-4 uppercase tracking-wide hover:scale-[1.02] active:scale-95 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)]">
            Chamar no WhatsApp →
          </a>
        </div>

        <div className="mt-10 text-sm text-white/60 space-y-2">
          <p>Ou se preferir:</p>
          <p>📧 pedrohensmkt@gmail.com</p>
          <p>💼 LinkedIn: www.linkedin.com/in/pedro-pag-dev</p>
        </div>
      </div>
    ),
  },
];

const variants = {
  inactive: { opacity: 0.9, y: 16 },
  active: { opacity: 1, y: 0 },
};

export default function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<Array<HTMLElement | null>>([]);
  const { scrollYProgress } = useScroll();
  const bgShift = useTransform(scrollYProgress, [0, 1], [20, -20]);

  const backgroundLayers = useMemo(
    () =>
      steps.map((step, index) => (
        <motion.div
          key={step.id}
          className="absolute inset-0"
          style={{ background: step.bg, y: bgShift }}
          animate={{ opacity: activeIndex === index ? 1 : 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      )),
    [activeIndex, bgShift]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            if (!Number.isNaN(index)) setActiveIndex(index);
          }
        });
      },
      { threshold: 0.6 }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-black relative overflow-x-hidden">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto max-w-6xl px-4 sm:px-5 py-4 flex items-center justify-between">
          <a href="#top" className="font-bold tracking-tight text-white hover:text-primary transition-colors">
            Pedro <span className="text-primary">•</span> Portfólio
          </a>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-white/60">
            <a className="hover:text-primary transition-colors font-bold text-primary" href="/">← Voltar ao Início</a>
            <a className="hover:text-primary transition-colors" href="#sobre">Sobre</a>
            <a className="hover:text-primary transition-colors" href="#o-que-eu-faco">O que eu faço</a>
            <a className="hover:text-primary transition-colors" href="#stack">Stack</a>
            <a className="hover:text-primary transition-colors" href="#projetos">Projetos</a>
            <a className="hover:text-primary transition-colors" href="#vale-do-silicio">Vale do Silício</a>
            <a className="hover:text-primary transition-colors" href="#contato">Contato</a>
          </nav>
          <Sheet>
            <SheetTrigger
              aria-label="Abrir menu"
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:text-white hover:border-primary/60"
            >
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="right" className="bg-background border-white/10 text-white">
              <SheetHeader>
                <SheetTitle className="text-xs uppercase tracking-[0.3em] text-white/60">Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-2 px-4 pb-6">
                <SheetClose asChild>
                  <a className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/80 hover:text-white" href="/">
                    ← Voltar ao Início
                  </a>
                </SheetClose>
                <SheetClose asChild>
                  <a className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/80 hover:text-white" href="#sobre">
                    Sobre
                  </a>
                </SheetClose>
                <SheetClose asChild>
                  <a className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/80 hover:text-white" href="#o-que-eu-faco">
                    O que eu faço
                  </a>
                </SheetClose>
                <SheetClose asChild>
                  <a className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/80 hover:text-white" href="#stack">
                    Stack
                  </a>
                </SheetClose>
                <SheetClose asChild>
                  <a className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/80 hover:text-white" href="#projetos">
                    Projetos
                  </a>
                </SheetClose>
                <SheetClose asChild>
                  <a className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/80 hover:text-white" href="#vale-do-silicio">
                    Vale do Silício
                  </a>
                </SheetClose>
                <SheetClose asChild>
                  <a className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/80 hover:text-white" href="#contato">
                    Contato
                  </a>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <div className="relative">
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(57,255,20,0.12),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(0,153,255,0.12),transparent_55%)]" />
          {backgroundLayers}
          <div className="absolute inset-0 bg-black/40" />
          <motion.div
            className="absolute right-6 top-24 hidden h-[60vh] w-1 rounded-full bg-white/10 md:block"
            style={{ originY: 0, scaleY: scrollYProgress }}
          />
        </div>

        <main id="top" className="relative z-10">
          <section className="min-h-[70vh] md:min-h-[85vh] flex items-center">
            <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 px-5 py-12 sm:px-6 sm:py-16 md:grid-cols-[1.1fr_0.9fr]">
              <div className="flex flex-col justify-center gap-6">
                <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-2 backdrop-blur-sm w-fit">
                  <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                  <span className="text-xs font-bold tracking-wider text-primary uppercase">
                    Disponível para Projetos de Automação & IA
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tighter text-white">
                  Eu construo sistemas que rodam <br className="hidden md:block" />
                  <span className="text-primary glow-text italic terminal-cursor">
                    enquanto muita gente no Brasil ainda discute
                  </span>{" "}
                  se IA é golpe.
                </h1>

                <p className="mt-2 text-lg sm:text-xl md:text-2xl text-white/70 max-w-4xl leading-relaxed font-medium">
                  Não faço só aqueles bots bonitinhos. Faço operação completa: CRM integrado, SDR e Closer treinado por IA,
                  leads fluindo sozinhos e vendas escalando sem depender de “fulano que sabe onde tá tudo”.
                </p>

                <p className="text-base sm:text-lg text-white/60 max-w-3xl leading-relaxed">
                  Se você quer automação de Instagram, sem objetivo, algo frio, tem 500 freelancers. Se você quer sistema rodando,
                  tá no lugar certo.
                </p>

                <div className="mt-5 flex flex-col sm:flex-row gap-4">
                  <a href="#contato" className="glow-primary inline-flex items-center justify-center rounded-xl bg-primary text-background text-lg font-black px-8 py-4 uppercase tracking-wide hover:scale-[1.02] active:scale-95 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                    Me manda o print do seu caos →
                  </a>
                  <a href="#projetos" className="inline-flex items-center justify-center rounded-xl border-2 border-primary/30 text-primary hover:border-primary hover:bg-primary/10 px-8 py-4 text-lg font-bold uppercase tracking-wide transition-all">
                    Ver como eu resolvo ↓
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-white/5 w-full max-w-[520px]">
                  <img
                    src={images.studio}
                    alt="Pedro em ensaio com fundo neutro"
                    className="h-[260px] sm:h-[320px] md:h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </section>

          {steps.map((step, index) => {
            const isFull = step.layout === "full";

            return (
              <section
                key={step.id}
                ref={(el) => {
                  sectionRefs.current[index] = el;
                }}
                id={step.id}
                data-index={index}
                className="min-h-[70vh] md:min-h-screen flex items-center"
              >
                <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-6 sm:py-16">
                  <div className={isFull ? "flex flex-col gap-10" : "flex flex-col gap-10 md:flex-row md:items-start"}>
                    <motion.div
                      initial={false}
                      animate={activeIndex === index ? "active" : "inactive"}
                      variants={variants}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className={isFull ? "space-y-6" : "space-y-6 md:w-3/5"}
                    >
                      {step.kicker && (
                        <span className="text-xs font-bold uppercase tracking-[0.4em] text-primary/70">
                          {step.kicker}
                        </span>
                      )}
                      {step.title && (
                        <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white">
                          {step.title}
                        </h2>
                      )}
                      {step.description && (
                        <p className="text-lg text-white/70 leading-relaxed">
                          {step.description}
                        </p>
                      )}
                      {step.highlights && step.highlights.length > 0 && (
                        <div className="flex flex-wrap gap-3">
                          {step.highlights.map((item) => (
                            <span
                              key={item}
                              className="rounded-full border border-white/20 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white/80"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      )}
                      {step.content}
                    </motion.div>

                    {!isFull && step.image && (
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: activeIndex === index ? 1 : 0, y: activeIndex === index ? 0 : 30 }}
                      transition={{ duration: 0.6 }}
                      className="md:w-2/5"
                    >
                        <div className="rounded-3xl border border-white/10 bg-black/60 p-6 backdrop-blur-xl">
                          <div className="overflow-hidden rounded-2xl border border-white/10">
                            <img
                              src={step.image}
                              alt={step.imageAlt}
                              className="h-48 sm:h-56 w-full object-cover"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </section>
            );
          })}

          <footer className="py-10 text-center text-sm text-white/40 border-t border-white/10">
            <p>© {new Date().getFullYear()} Pedro • Sistema & Operação com IA</p>
          </footer>
        </main>
      </div>
    </div>
  );
}
