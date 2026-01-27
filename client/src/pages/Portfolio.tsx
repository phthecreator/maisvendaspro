import React from 'react';
import UnderworldBackground from '../components/lp2/UnderworldBackground';
import SecretTerminal from '../components/lp2/SecretTerminal';
import { Menu } from 'lucide-react';
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary selection:text-black relative overflow-x-hidden text-foreground">
      <UnderworldBackground />

      {/* Top Bar */}
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
            <SheetTrigger className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:text-white hover:border-primary/60">
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

      {/* HERO */}
      <main id="top" className="relative z-10 mx-auto max-w-6xl px-5">
        <section className="py-20 md:py-32">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-xs font-bold tracking-wider text-primary uppercase">
              Disponível para Projetos de Automação & IA
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tighter mb-8 text-white">
            Eu construo automações e produtos com IA que <br className="hidden md:block" />
            <span className="text-primary glow-text italic terminal-cursor">
              viram vendas, operação e entrega
            </span> <br />
            de verdade.
          </h1>

          <p className="mt-6 text-xl md:text-2xl text-white/70 max-w-4xl leading-relaxed font-medium">
            De SDR no WhatsApp a funis completos e MVPs rápidos: eu uno estratégia + execução 
            (n8n, bots, front-end, copy e processos) pra transformar ideia em sistema rodando.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a href="#contato" className="glow-primary inline-flex items-center justify-center rounded-xl bg-primary text-background text-lg font-black px-8 py-4 uppercase tracking-wide hover:scale-[1.02] active:scale-95 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)]">
              Falar comigo agora
            </a>
            <a href="#projetos" className="inline-flex items-center justify-center rounded-xl border-2 border-primary/30 text-primary hover:border-primary hover:bg-primary/10 px-8 py-4 text-lg font-bold uppercase tracking-wide transition-all">
              Ver Projetos
            </a>
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            <img
              src="/portfolio/02-studio.jpg"
              alt="Pedro em ensaio com fundo neutro"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </section>

        {/* SOBRE MIM */}
        <section id="sobre" className="py-20 border-t border-white/10">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white mb-8">Sobre mim</h2>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr_1fr] gap-8 items-start">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
              <img
                src="/portfolio/03-hoodie.jpg"
                alt="Pedro em um mirante com vista da cidade"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="text-xl text-white/80 leading-relaxed flex flex-col gap-4">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-primary/70">Bio curta</p>
              <p>
                Sou o Pedro Henrique Silva Ribeiro. Trabalho com IA aplicada e automação para colocar processos no
                piloto automático (principalmente vendas e atendimento), criar produtos/MVPs e estruturar operação
                com método. Gosto de resolver problema real: pegar o caos do “tá tudo no WhatsApp e ninguém responde”
                e transformar em fluxo, sistema e resultado.
              </p>
              <p className="text-white/60 text-base">
                Minha abordagem é direta: entendo o objetivo, defino o caminho e executo até virar rotina rodando.
              </p>
            </div>
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
              <img
                src="/portfolio/04-desk.jpg"
                alt="Pedro trabalhando no escritorio"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="mt-12 bg-card border border-white/5 rounded-2xl p-8 md:p-12 hover:border-primary/20 transition-all">
            <p className="text-sm font-bold text-primary uppercase tracking-wider mb-6">Bio completa</p>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6 text-white/70 leading-relaxed text-lg lg:text-xl">
              <p>
                Minha trajetória é bem mão na massa: eu misturo marketing, copy, vendas e tecnologia — e isso me permite construir soluções que não ficam só no “bonito no slide”. Eu já atuei criando e vendendo automações (principalmente em WhatsApp), estruturando ofertas e funis, e desenhando a entrega pra rodar sem depender de uma pessoa 24h.
              </p>
              <p>
                Nos últimos projetos, eu foquei muito em SDR com IA, qualificação de leads, agendamento e integração com ferramentas (tipo n8n, CRMs, Google Sheets, etc.). Também venho construindo presença e ativos como portfólio/site, apresentações, páginas de venda e processos internos — porque eu acredito que produto sem operação vira gambiarra cara.
              </p>
              <p>
                Meu jeito de trabalhar é direto: eu entendo o objetivo, descubro o gargalo real, defino o que é “sucesso” (mesmo que seja estimado no começo), e entrego um sistema simples que funciona — com melhoria incremental.
              </p>
            </div>
          </div>
        </section>

        {/* O QUE EU FAÇO */}
        <section id="o-que-eu-faco" className="py-20 border-t border-white/10">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white mb-10">O que eu faço</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card border border-white/5 rounded-2xl p-8 hover:border-primary/20 transition-all group">
              <span className="text-3xl mb-4 block">🚀</span>
              <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">Automações de Vendas</h3>
              <p className="mt-3 text-white/60 leading-relaxed">
                Crio fluxos que respondem rápido, qualificam, filtram curiosos e encaminham pro humano no momento certo — com linguagem que parece gente, não robô. (WhatsApp / Direct / Funil)
              </p>
            </div>

            <div className="bg-card border border-white/5 rounded-2xl p-8 hover:border-primary/20 transition-all group">
              <span className="text-3xl mb-4 block">🤖</span>
              <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">SDR com IA</h3>
              <p className="mt-3 text-white/60 leading-relaxed">
                Desenho o roteiro do agente, regras de qualificação, perguntas certas, objeções e fechamento do próximo passo (call). Foco total em agendamento real.
              </p>
            </div>

            <div className="bg-card border border-white/5 rounded-2xl p-8 hover:border-primary/20 transition-all group">
              <span className="text-3xl mb-4 block">🛠️</span>
              <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">MVP / Produto Rápido</h3>
              <p className="mt-3 text-white/60 leading-relaxed">
                Estruturo e tiro do papel MVPs e produtos digitais: landing, proposta, lógica do fluxo, integrações e versão “rodável”.
              </p>
            </div>

            <div className="bg-card border border-white/5 rounded-2xl p-8 hover:border-primary/20 transition-all group">
              <span className="text-3xl mb-4 block">✍️</span>
              <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">Copy e Posicionamento</h3>
              <p className="mt-3 text-white/60 leading-relaxed">
                Escrevo a copy do que você faz do jeito que o cliente entende. Direto, sem clichê. Bom pra página, anúncio, pitch e WhatsApp.
              </p>
            </div>

            <div className="bg-card border border-white/5 rounded-2xl p-8 md:col-span-2 hover:border-primary/20 transition-all group">
              <span className="text-3xl mb-4 block">📋</span>
              <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">Operação e Playbooks</h3>
              <p className="mt-3 text-white/60 leading-relaxed">
                Crio checklists, scripts, templates e rotinas pra time operar. Eu gosto de botar método (SPIN adaptado, micro-pactos, funil e métricas) para garantir que o processo vença o improviso.
              </p>
            </div>
          </div>
        </section>

        {/* STACK */}
        <section id="stack" className="py-20 border-t border-white/10">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white mb-10">Stack & Metodologia</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card border border-white/5 rounded-2xl p-8">
              <p className="text-sm font-bold text-primary uppercase tracking-wider mb-6">Ferramentas (Uso Real)</p>
              <ul className="space-y-3 text-white/80 font-medium">
                <li className="flex items-center gap-2"><span className="text-primary">✔</span> n8n (automação e integrações)</li>
                <li className="flex items-center gap-2"><span className="text-primary">✔</span> WhatsApp (fluxos e qualificação)</li>
                <li className="flex items-center gap-2"><span className="text-primary">✔</span> HTML + Bootstrap / Tailwind</li>
                <li className="flex items-center gap-2"><span className="text-primary">✔</span> WordPress (Organização técnica)</li>
                <li className="flex items-center gap-2"><span className="text-primary">✔</span> Gemini / LLMs / Prompts</li>
                <li className="flex items-center gap-2"><span className="text-primary">✔</span> Baserow / Planilhas</li>
                <li className="flex items-center gap-2"><span className="text-primary">✔</span> Canva (Materiais de entrega)</li>
              </ul>
            </div>
            <div className="bg-card border border-white/5 rounded-2xl p-8">
              <p className="text-sm font-bold text-primary uppercase tracking-wider mb-6">Métodos do dia a dia</p>
              <ul className="space-y-4 text-white/80 font-medium text-lg">
                <li className="flex items-start gap-3">
                  <span className="bg-primary/20 text-primary px-2 rounded text-sm mt-1">01</span>
                  <span><strong>SPIN Selling adaptado + micro-pactos:</strong> para conduzir call e fechar.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-primary/20 text-primary px-2 rounded text-sm mt-1">02</span>
                  <span><strong>“Simples que roda”:</strong> primeiro funcionar, depois sofisticar.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-primary/20 text-primary px-2 rounded text-sm mt-1">03</span>
                  <span><strong>Foco em gargalo:</strong> qualificação, tempo de resposta e conversão.</span>
                </li>
              </ul>
            </div>
          </div>

          <SecretTerminal />
        </section>

        {/* PROJETOS */}
        <section id="projetos" className="py-20 border-t border-white/10">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white mb-12">Projetos</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 1 */}
            <article className="bg-card border border-white/5 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 group flex flex-col">
              <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors mb-4">1) Mais Vendas Pro — SDR com IA no WhatsApp</h3>
              <div className="space-y-3 text-white/70 flex-grow">
                <p><strong className="text-white">Problema:</strong> Muito lead chegando e pouca velocidade de resposta; curiosos atrapalhando.</p>
                <p><strong className="text-white">Solução:</strong> Agente SDR no WhatsApp pra atender, qualificar, filtrar e agendar call.</p>
                <p><strong className="text-white">O que eu fiz:</strong> Estrutura do SDR (abertura ao handoff), ajustes de tom e foco em agendamento.</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-white/5">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase rounded-full">n8n</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase rounded-full">WhatsApp</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase rounded-full">LLM</span>
              </div>
            </article>

            {/* 2 */}
            <article className="bg-card border border-white/5 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 group flex flex-col">
              <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors mb-4">2) Mora Mídia — Operação de mentoria</h3>
              <div className="space-y-3 text-white/70 flex-grow">
                <p><strong className="text-white">Problema:</strong> Donos de lojas travados no limite físico, sem conseguir escalar.</p>
                <p><strong className="text-white">Solução:</strong> Estrutura high ticket com plano de ação + suporte + venda ativa.</p>
                <p><strong className="text-white">O que eu fiz:</strong> Modelagem de oferta, estrutura da entrega, scripts e processo de vendas.</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-white/5">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase rounded-full">WhatsApp</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase rounded-full">Strategy</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase rounded-full">Playbooks</span>
              </div>
            </article>

            {/* 3 */}
            <article className="bg-card border border-white/5 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 group flex flex-col">
              <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors mb-4">3) Doctor Mentors — Script de fechamento</h3>
              <div className="space-y-3 text-white/70 flex-grow">
                <p><strong className="text-white">Problema:</strong> Calls longas, cliente indeciso, falta de condução e fechamento.</p>
                <p><strong className="text-white">Solução:</strong> Script-guia baseado em SPIN adaptado, com micro-pactos de alinhamento.</p>
                <p><strong className="text-white">O que eu fiz:</strong> Estrutura do roteiro, perguntas-chave e transições de valor.</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-white/5">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase rounded-full">SPIN</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase rounded-full">Vendas</span>
              </div>
            </article>

            {/* 4 */}
            <article className="bg-card border border-white/5 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 group flex flex-col">
              <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors mb-4">4) Landing Moda Jeans — Modelos Virtuais</h3>
              <div className="space-y-3 text-white/70 flex-grow">
                <p><strong className="text-white">Problema:</strong> Loja com fotos fracas; necessidade de visual profissional sem estúdio caro.</p>
                <p><strong className="text-white">Solução:</strong> Landing page focada em converter usando imagens geradas por IA.</p>
                <p><strong className="text-white">O que eu fiz:</strong> Estrutura da página, copy e organização técnica (HTML/Bootstrap).</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-white/5">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase rounded-full">HTML/Bootstrap</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase rounded-full">IA Imagem</span>
              </div>
            </article>

            {/* 5 */}
            <article className="bg-card border border-white/5 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 group flex flex-col">
              <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors mb-4">5) Hayk Energia Solar — Estratégia 1:1</h3>
              <div className="space-y-3 text-white/70 flex-grow">
                <p><strong className="text-white">Problema:</strong> Leads no direct sem processo; perda de timing e dificuldade de fechar.</p>
                <p><strong className="text-white">Solução:</strong> Fluxo de conversa estabelecido + call estruturada em 2 etapas.</p>
                <p><strong className="text-white">O que eu fiz:</strong> Sequência do atendimento, proposta de operação e fechamento.</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-white/5">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase rounded-full">Instagram</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase rounded-full">Processos</span>
              </div>
            </article>

            {/* 6 */}
            <article className="bg-card border border-white/5 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 group flex flex-col">
              <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors mb-4">6) Canal Dark + Automação (n8n)</h3>
              <div className="space-y-3 text-white/70 flex-grow">
                <p><strong className="text-white">Problema:</strong> Produzir conteúdo em escala sem virar escravo da edição manual.</p>
                <p><strong className="text-white">Solução:</strong> Workflow de geração de ideias diárias com LLM + pipeline automatizado.</p>
                <p><strong className="text-white">O que eu fiz:</strong> Estrutura do fluxo, prompts e organização da base no Baserow.</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-white/5">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase rounded-full">n8n</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase rounded-full">Baserow</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase rounded-full">LLM</span>
              </div>
            </article>

             {/* 7 */}
             <article className="bg-card border border-white/5 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 group flex flex-col md:col-span-2">
              <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors mb-4">7) Projeto Imobiliário (MVP/Automação)</h3>
              <div className="space-y-3 text-white/70 flex-grow">
                <p><strong className="text-white">Problema:</strong> Atendimento e triagem desorganizados no mercado imobiliário.</p>
                <p><strong className="text-white">Solução:</strong> Ferramenta/fluxo para qualificar e encaminhar leads de forma transparente.</p>
                <p><strong className="text-white">O que eu fiz:</strong> Estrutura de proposta, comunicação e validação do MVP rodando.</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-white/5">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase rounded-full">MVP</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase rounded-full">Real Estate</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase rounded-full">WhatsApp</span>
              </div>
            </article>
          </div>
        </section>

        <section id="vale-do-silicio" className="py-24 border-t border-white/10">
          <div className="flex flex-col gap-6 max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.4em] text-primary/70">Vale do Silício</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white">
              Dois anos vivendo onde o futuro vira rotina
            </h2>
            <p className="text-lg text-white/80 leading-relaxed">
              Entre 2023 e 2025 eu vivi no Vale do Silício, perto de empresas gigantes que moldam o mercado todos os dias.
              Essa imersão me deu visão prática de escala, produto e execução: como times pensam, como decisões são tomadas
              e por que clareza de processo vence improviso.
            </p>
            <p className="text-white/60 leading-relaxed">
              Voltei com mais repertório e foco no que importa: criar sistemas que rodam, gerar resultado e manter o padrão
              alto — não só no discurso, mas na entrega.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            <img
              src="/portfolio/01-skyline.jpg"
              alt="Vista panoramica do Vale do Silicio"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </section>

        {/* CONTATO */}
        <section id="contato" className="py-24 border-t border-white/10 text-center">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white mb-6">Vamos acabar com o caos?</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10">
            Se você quer mais vendas, menos caos e um sistema rodando, me chama.
            Eu consigo te dizer rápido se faz sentido automatizar ou só arrumar o processo.
          </p>

          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 max-w-xl mx-auto mb-10">
            <p className="text-primary font-bold text-lg italic mb-2">"Qual teu gargalo hoje?"</p>
            <p className="text-white/60 text-sm">Me manda essa mensagem e eu te respondo com o caminho mais direto.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/556191185635" className="glow-primary inline-flex items-center justify-center rounded-xl bg-primary text-background text-lg font-black px-8 py-4 uppercase tracking-wide hover:scale-[1.02] active:scale-95 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)]">
              Chamar no WhatsApp
            </a>
            <a href="mailto:pedro@example.com" className="inline-flex items-center justify-center rounded-xl border-2 border-primary/30 text-primary hover:border-primary hover:bg-primary/10 px-8 py-4 text-lg font-bold uppercase tracking-wide transition-all">
              Enviar e-mail
            </a>
          </div>
        </section>

        <footer className="py-10 text-center text-sm text-white/40 border-t border-white/10">
          <p>© {new Date().getFullYear()} Pedro • Sistema & Operação com IA</p>
        </footer>
      </main>
    </div>
  );
}
