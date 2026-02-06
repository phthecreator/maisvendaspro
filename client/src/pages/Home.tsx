import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Map,
  Menu,
  PlayCircle,
  Rocket,
  Stethoscope,
  XCircle,
} from 'lucide-react';
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import beforeRoupasImg from '@/assets/cases/before-roupa.jpg';
import afterRoupasImg from '@/assets/cases/after-roupa.jpg';
import printBotImg from '@/assets/cases/print-bot.jpg';
import instagramProfileImg from '@/assets/cases/instagram-profile.jpg';

export default function Home() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start start', 'end start'],
  });

  const yHero = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const howItWorks = [
    {
      icon: Stethoscope,
      title: 'DIAGNÓSTICO GRATUITO',
      desc:
        'Você conta sua dor. A gente investiga a raiz do problema (não só o sintoma).',
      note: 'Não empurramos produto. Primeiro entendemos onde você está e pra onde quer ir.',
    },
    {
      icon: Map,
      title: 'MAPEAMENTO DE SOLUÇÕES',
      desc: 'Te mostramos 2-3 caminhos possíveis. Do mais simples ao mais complexo.',
      note: 'Você escolhe o que faz sentido pro seu momento e orçamento.',
    },
    {
      icon: Rocket,
      title: 'EXECUÇÃO + CAPACITAÇÃO',
      desc: 'A gente faz e ensina sua equipe a usar. Você não fica refém de tecnologia.',
      note: 'Toda entrega vem com documentação e treinamento. Você contrata uma vez, usa pra sempre.',
    },
  ];

  const painPoints = [
    {
      title: 'VENDAS',
      quote: 'Leads somem antes de eu conseguir responder.',
      desc: 'Perder oportunidade por demora e jogar dinheiro fora.',
    },
    {
      title: 'IMAGEM PROFISSIONAL',
      quote: 'Meu catálogo parece de brechó.',
      desc: 'Fotos amadoras afastam clientes, e você perde vendas.',
    },
    {
      title: 'OPERAÇÃO',
      quote: 'Minha equipe não usa o CRM.',
      desc: 'Ferramentas caras paradas e processo travado.',
    },
    {
      title: 'CONHECIMENTO',
      quote: 'Contratei dev que sumiu.',
      desc: 'Sem documentação, sem suporte, sem autonomia.',
    },
    {
      title: 'CUSTOS ALTOS',
      quote: 'Gasto demais com agência.',
      desc: 'Mensalidades que não param de subir.',
    },
    {
      title: 'ESCALA',
      quote: 'Não consigo atender todo mundo.',
      desc: 'Crescer vira contratar mais gente (e mais custo).',
    },
  ];

  const comparisonRows = [
    { label: 'Diagnóstico', agency: 'Vende pacote pronto', mvp: 'Investiga sua dor primeiro' },
    { label: 'Pós-entrega', agency: 'Entrega e tchau', mvp: 'Ensina sua equipe a usar' },
    { label: 'Modelo de cobrança', agency: 'Cobra por hora', mvp: 'Cobra por resultado' },
    { label: 'Flexibilidade', agency: 'Só faz o combinado', mvp: 'Adapta durante o projeto' },
    { label: 'Equipe', agency: 'Terceiriza tudo', mvp: 'Time in-house (CTO disponível)' },
    { label: 'Dependência', agency: 'Você fica refém', mvp: 'Você ganha autonomia' },
    { label: 'Suporte', agency: 'Cobra extra', mvp: 'Incluído por 90 dias' },
  ];

  const cases = [
    {
      title: 'AGÊNCIA DE MARKETING B2B',
      problem:
        'Time de SDR gastava 4h/dia qualificando leads. Tempo de resposta: +4 horas. Leads fechavam com concorrente.',
      solution: 'SDR com IA + CRM integrado + Dashboard analytics + automações WhatsApp',
      results: ['Faturamento: +55% (R$ 180k → R$ 280k/mês)', 'Tempo de resposta: 30 segundos', 'ROI: 46x em 6 meses'],
      cta: 'Quero escalar minha operação',
      images: [
        { src: beforeRoupasImg, label: 'Antes' },
        { src: afterRoupasImg, label: 'Depois' },
      ],
    },
    {
      title: 'SAAS B2B — $500K ARR',
      problem:
        '12 pessoas, 60h/semana em tarefas repetitivas. Email manual, CRM desatualizado, relatórios no Excel.',
      solution: 'Enterprise OS: Dashboard executivo + automações + CRM sync + relatórios automáticos',
      results: ['75% operações automatizadas', 'Erro humano: -87%', 'Economia anual: $156.000'],
      cta: 'Quero automatizar operações',
      images: [{ src: printBotImg, label: 'Dashboard' }],
    },
    {
      title: 'REDE DE 5 CONSULTÓRIOS',
      problem:
        '60% de cancelamento por no-show. Agenda vazia = receita perdida. Equipe gastava horas ligando para confirmar.',
      solution: 'Agendamento inteligente + lembretes automáticos WhatsApp + confirmação com IA',
      results: ['No-show: 60% → 12%', '+120 novos pacientes em 90 dias', 'Receita adicional: R$ 72.000'],
      cta: 'Quero eliminar no-shows',
      images: [{ src: instagramProfileImg, label: 'Sistema' }],
    },
  ];

  const services = [
    { title: 'SDR com IA', desc: 'Qualifica e agenda 24/7.' },
    { title: 'Foto com IA', desc: 'Catálogo profissional.' },
    { title: 'CRM Custom', desc: 'Sistema que sua equipe usa.' },
    { title: 'Mentoria IA', desc: 'Aprenda a fazer sua própria IA.' },
    { title: 'Sites/Apps', desc: 'Do landing page ao sistema.' },
    { title: 'Chatbots', desc: 'Atendimento que nunca dorme.' },
    { title: 'Tráfego IA', desc: 'Robô que analisa e reporta.' },
    { title: 'Newsletter', desc: 'Disparo inteligente.' },
    { title: 'Conteúdo', desc: 'Cronograma automático.' },
  ];

  const metrics = [
    { value: '15+', label: 'Clientes em produção com ROI documentado' },
    { value: '$180k', label: 'Revenue mensal gerado para nossos clientes' },
    { value: '4.8/5', label: 'NPS médio dos clientes (apenas em produção)' },
    { value: '7 dias', label: 'Tempo médio de entrega do MVP funcional' },
  ];

  const faqs = [
    {
      q: 'Quanto custa?',
      a: 'Depende da solução. Um SDR básico pode sair por R$ 3k. Um sistema completo pode chegar a R$ 50k. No diagnóstico você recebe 2-3 opções de investimento.',
    },
    {
      q: 'Quanto tempo demora?',
      a: 'Do diagnóstico ao MVP funcionando: média de 7 dias. Projetos mais complexos podem levar 30-45 dias, com acompanhamento em tempo real.',
    },
    {
      q: 'Eu preciso entender de tecnologia?',
      a: 'Não. A gente traduz tudo pro português e ensina sua equipe a mexer. Você entende o suficiente pra não ficar refém.',
    },
    {
      q: 'Vocês atendem meu nicho?',
      a: 'Se você vende produto ou serviço, provavelmente sim. No diagnóstico a gente fala se conseguimos ajudar ou não.',
    },
    {
      q: 'E se eu não gostar?',
      a: 'A gente ajusta até você aprovar. Se não rolar, você não paga. Simples assim.',
    },
  ];

  return (
    <div
      ref={scrollRef}
      className="min-h-screen bg-[#000000] font-sans selection:bg-[#00ff88] selection:text-black text-white overflow-x-hidden"
    >
      {/* --- BACKGROUND LAYERS --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
        <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-[#00ff88] rounded-full blur-[180px] opacity-[0.08]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-[#00ff88] rounded-full blur-[200px] opacity-[0.05]" />
        <div className="absolute bottom-0 left-0 w-full h-[50vh] bg-[linear-gradient(to_bottom,transparent_0%,#000000_100%),linear-gradient(rgba(0,255,136,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,136,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] [transform:perspective(1000px)_rotateX(60deg)] origin-bottom opacity-20" />
      </div>

      {/* --- HEADER --- */}
      <header className="fixed top-0 w-full z-50 border-b border-white/[0.05] bg-[#000000]/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 h-20 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 flex items-center justify-center overflow-hidden bg-white/[0.03] border border-white/10 rounded-lg group-hover:border-[#00ff88]/50 transition-colors duration-500">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                className="text-[#00ff88] transform group-hover:rotate-12 transition-transform duration-500"
              >
                <path
                  d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-white text-sm leading-none">MAIS VENDAS</span>
              <span className="font-mono text-[10px] text-[#00ff88] tracking-[0.2em] leading-none mt-1">
                PRO_SYSTEMS
              </span>
            </div>
          </a>

          <nav className="hidden md:flex gap-10 text-xs font-medium uppercase tracking-widest text-white/50">
            <button onClick={() => scrollTo('top')} className="hover:text-white transition-colors">
              Início
            </button>
            <button onClick={() => scrollTo('como-funciona')} className="hover:text-white transition-colors">
              Como funciona
            </button>
            <button onClick={() => scrollTo('dores')} className="hover:text-white transition-colors">
              Dores
            </button>
            <button onClick={() => scrollTo('cases')} className="hover:text-white transition-colors">
              Cases
            </button>
            <button onClick={() => scrollTo('faq')} className="hover:text-white transition-colors">
              FAQ
            </button>
            <a href="/portfolio" className="hover:text-white transition-colors">
              Portfólio
            </a>
            <a href="/vibe-coding-pro" className="hover:text-white transition-colors">
              Vibe Coding Pro
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Sheet>
              <SheetTrigger className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:text-white hover:border-[#00ff88]/60">
                <Menu className="h-5 w-5" />
              </SheetTrigger>
              <SheetContent side="right" className="bg-black border-white/10 text-white">
                <SheetHeader>
                  <SheetTitle className="text-xs uppercase tracking-[0.3em] text-white/60">Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-2 px-4 pb-6">
                  <SheetClose asChild>
                    <button
                      onClick={() => scrollTo('top')}
                      className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-left text-sm font-semibold text-white/80 hover:text-white"
                    >
                      Início
                    </button>
                  </SheetClose>
                  <SheetClose asChild>
                    <button
                      onClick={() => scrollTo('como-funciona')}
                      className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-left text-sm font-semibold text-white/80 hover:text-white"
                    >
                      Como funciona
                    </button>
                  </SheetClose>
                  <SheetClose asChild>
                    <button
                      onClick={() => scrollTo('dores')}
                      className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-left text-sm font-semibold text-white/80 hover:text-white"
                    >
                      Dores
                    </button>
                  </SheetClose>
                  <SheetClose asChild>
                    <button
                      onClick={() => scrollTo('cases')}
                      className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-left text-sm font-semibold text-white/80 hover:text-white"
                    >
                      Cases
                    </button>
                  </SheetClose>
                  <SheetClose asChild>
                    <button
                      onClick={() => scrollTo('faq')}
                      className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-left text-sm font-semibold text-white/80 hover:text-white"
                    >
                      FAQ
                    </button>
                  </SheetClose>
                  <SheetClose asChild>
                    <a
                      href="/portfolio"
                      className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-left text-sm font-semibold text-white/80 hover:text-white"
                    >
                      Portfólio
                    </a>
                  </SheetClose>
                  <SheetClose asChild>
                    <a
                      href="/vibe-coding-pro"
                      className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-left text-sm font-semibold text-white/80 hover:text-white"
                    >
                      Vibe Coding Pro
                    </a>
                  </SheetClose>
                </div>
                <div className="mt-auto px-4 pb-6">
                  <SheetClose asChild>
                    <a
                      href="https://wa.me/556191185635"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#00ff88] px-5 py-3 text-xs font-bold uppercase tracking-wide text-[#000000]"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-black animate-pulse" />
                      Diagnóstico
                    </a>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
            <a
              href="https://wa.me/556191185635"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-[#00ff88] border border-white/10 hover:border-[#00ff88] rounded-full text-xs font-bold uppercase tracking-wide text-white hover:text-black transition-all duration-300"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88] group-hover:bg-black animate-pulse" />
              Diagnóstico
            </a>
          </div>
        </div>
      </header>

      {/* --- HERO SECTION --- */}
      <motion.section
        id="top"
        className="relative z-10 min-h-screen flex flex-col justify-center px-4 sm:px-6 pt-28 sm:pt-24 md:pt-20"
        style={{ y: yHero, opacity: opacityHero }}
      >
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#00ff88]/20 bg-[#00ff88]/5 mb-12 backdrop-blur-md"
          >
            <span className="font-mono text-[#00ff88] text-xs">* SYSTEM_ONLINE</span>
            <span className="w-px h-3 bg-[#00ff88]/20" />
            <span className="text-white/60 text-xs tracking-wide">Hub de Soluções & Software House</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-7xl font-medium tracking-tighter leading-[0.98] text-white mb-8"
          >
            Transformamos problemas <br />
            <span className="font-serif italic text-white/40">em linhas de código.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed font-light mb-12"
          >
            Você traz a dor. A gente traz a solução.
            <span className="block mt-6 text-sm text-white/60">
              Seja IA no WhatsApp, automação de vendas, catálogo profissional ou treinamento de equipe — se
              tecnologia resolve, a gente faz.
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col items-center gap-6"
          >
            <a
              href="https://wa.me/556191185635"
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-[#00ff88] text-[#000000] text-xs sm:text-sm font-bold uppercase tracking-widest overflow-hidden transition-all hover:pr-12"
            >
              <span className="relative z-10">Qual seu maior problema hoje?</span>
              <div className="absolute right-0 top-0 h-full w-12 bg-black/10 flex items-center justify-center translate-x-12 group-hover:translate-x-0 transition-transform duration-300">
                <ArrowRight className="w-4 h-4" />
              </div>
            </a>
            <a
              href="https://wa.me/556191185635"
              className="text-[11px] text-white/50 uppercase tracking-[0.2em] hover:text-white transition-colors"
            >
              Ou converse com nosso SDR no WhatsApp
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* --- SECTION 2: COMO FUNCIONA --- */}
      <section id="como-funciona" className="relative z-20 py-32 border-t border-white/5 bg-[#000000]">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <span className="font-mono text-[#00ff88] text-xs tracking-widest mb-4 block">/// PROCESSO</span>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-white">
              Como transformamos sua dor em solução
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {howItWorks.map((step, i) => (
              <div
                key={i}
                className="group relative p-8 border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-500"
              >
                <div className="absolute top-0 left-0 w-full h-0.5 bg-[#00ff88] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <step.icon className="w-8 h-8 text-white/30 group-hover:text-[#00ff88] transition-colors duration-500 mb-6" />
                <h3 className="text-sm font-bold text-white mb-3 tracking-widest uppercase">{step.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed mb-3">{step.desc}</p>
                <p className="text-xs text-white/40 leading-relaxed">{step.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 3: GRAFICO TEMPO --- */}
      <section id="tempo" className="relative z-20 py-28 px-6 bg-[#000000] border-t border-white/5">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white">
              Enquanto você perde tempo procurando dev...<br />
              <span className="text-white/40">Seu concorrente já está vendendo mais.</span>
            </h2>
          </div>

          <div className="space-y-8">
            <div>
              <div className="flex items-center justify-between text-xs uppercase tracking-widest text-white/40 mb-3">
                <span>Método Tradicional</span>
                <span>45 dias</span>
              </div>
              <div className="h-3 w-full rounded-full bg-white/5 overflow-hidden">
                <div className="h-full w-[90%] bg-gradient-to-r from-red-500/40 to-red-500/80 rounded-full" />
              </div>
              <p className="mt-3 text-xs text-white/40 font-mono">
                Procurar → Entrevistar → Testar → Desistir → Recomeçar
              </p>
            </div>

            <div>
              <div className="flex items-center justify-between text-xs uppercase tracking-widest text-white/40 mb-3">
                <span>Com a Mais Vendas Pro</span>
                <span>7 dias</span>
              </div>
              <div className="h-3 w-full rounded-full bg-white/5 overflow-hidden">
                <div className="h-full w-[20%] bg-gradient-to-r from-[#00ff88]/50 to-emerald-500 rounded-full" />
              </div>
              <p className="mt-3 text-xs text-white/40 font-mono">
                Diagnóstico → Proposta → Desenvolvimento → Entrega
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="text-white/50">A gente já tem o time. Você só precisa do resultado.</p>
            <a
              href="https://wa.me/556191185635"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-[#00ff88]/40 px-6 py-2 text-xs font-bold uppercase tracking-widest text-[#00ff88] hover:bg-[#00ff88] hover:text-black transition-colors"
            >
              Agendar diagnóstico
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: DORES --- */}
      <section id="dores" className="relative z-20 py-32 px-6 bg-[#000000]">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <span className="font-mono text-[#00ff88] text-xs tracking-widest mb-4 block">/// DORES</span>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-white">Qual dessas dores é sua?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {painPoints.map((item, i) => (
              <button
                key={i}
                onClick={() => scrollTo('servicos')}
                className="text-left border border-white/10 bg-white/[0.02] p-6 hover:border-[#00ff88]/40 hover:bg-white/[0.04] transition-all group"
              >
                <h3 className="text-sm font-bold text-white mb-3 tracking-widest uppercase">{item.title}</h3>
                <p className="text-white/80 text-sm mb-4">{item.quote}</p>
                <p className="text-white/40 text-xs leading-relaxed mb-6">{item.desc}</p>
                <span className="text-[11px] uppercase tracking-widest text-[#00ff88]">Ver soluções →</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 5: COMPARATIVO --- */}
      <section id="comparativo" className="relative z-20 py-32 px-6 border-t border-white/5 bg-[#000000]">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <span className="font-mono text-[#00ff88] text-xs tracking-widest mb-4 block">/// DIFERENCIAL</span>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-white">
              Agência tradicional vs. Mais Vendas Pro
            </h2>
          </div>

          <div className="border border-white/10 bg-[#000000]">
            <div className="grid grid-cols-3 text-xs uppercase tracking-widest text-white/40 border-b border-white/10">
              <div className="p-4">Critério</div>
              <div className="p-4">Agência Tradicional</div>
              <div className="p-4 text-[#00ff88]">Mais Vendas Pro</div>
            </div>
            {comparisonRows.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-1 md:grid-cols-3 border-t border-white/5 text-sm text-white/70"
              >
                <div className="p-4 font-semibold text-white">{row.label}</div>
                <div className="p-4 flex items-center gap-2 text-white/60">
                  <XCircle className="w-4 h-4 text-red-400" />
                  <span>{row.agency}</span>
                </div>
                <div className="p-4 flex items-center gap-2 text-white">
                  <CheckCircle2 className="w-4 h-4 text-[#00ff88]" />
                  <span>{row.mvp}</span>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-white/50 max-w-3xl mx-auto">
            A diferença? A gente não quer que você precise da gente pra sempre. A gente quer que você aprenda e
            escale sozinho.
          </p>
        </div>
      </section>

      {/* --- SECTION 6: ROI --- */}
      <section id="roi" className="relative z-20 py-32 px-6 bg-[#000000]">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <span className="font-mono text-[#00ff88] text-xs tracking-widest mb-4 block">/// ROI</span>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-white">Investimento que se paga</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="border border-white/10 bg-[#000000] p-6 rounded-lg">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/40 mb-6">
                <BarChart3 className="w-4 h-4 text-[#00ff88]" />
                Custo acumulado em 6 meses
              </div>
              <svg viewBox="0 0 400 220" className="w-full h-auto">
                <rect x="0" y="0" width="400" height="220" fill="transparent" />
                <line x1="30" y1="20" x2="30" y2="200" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                <line x1="30" y1="200" x2="380" y2="200" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                <polyline
                  points="30,190 90,160 150,120 210,90 270,60 330,35 380,25"
                  fill="none"
                  stroke="rgba(239,68,68,0.85)"
                  strokeWidth="3"
                />
                <polyline
                  points="30,190 90,150 150,140 210,135 270,132 330,130 380,128"
                  fill="none"
                  stroke="rgba(0,255,136,0.9)"
                  strokeWidth="3"
                />
              </svg>
              <div className="mt-6 flex items-center gap-6 text-xs text-white/60">
                <span className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500" /> Agência Tradicional
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#00ff88]" /> Mais Vendas Pro
                </span>
              </div>
            </div>

            <div className="space-y-6">
              <div className="border border-white/10 bg-white/[0.02] p-6">
                <h3 className="text-sm font-bold uppercase tracking-widest text-white/70 mb-4">Linha Vermelha</h3>
                <ul className="text-sm text-white/50 space-y-2">
                  <li>Mês 0-1: R$ 15k (briefing, propostas, reuniões)</li>
                  <li>Mês 2-3: R$ 25k (desenvolvimento com cobrança por hora)</li>
                  <li>Mês 4-6: R$ 30k (ajustes, manutenções, mensalidades)</li>
                  <li className="text-white/80">Total 6 meses: R$ 80k + você ainda não sabe mexer</li>
                </ul>
              </div>
              <div className="border border-white/10 bg-white/[0.02] p-6">
                <h3 className="text-sm font-bold uppercase tracking-widest text-[#00ff88] mb-4">Linha Verde</h3>
                <ul className="text-sm text-white/50 space-y-2">
                  <li>Mês 0: R$ 0 (diagnóstico gratuito)</li>
                  <li>Mês 1: R$ 12k (desenvolvimento + treinamento)</li>
                  <li>Mês 2-6: R$ 3k (ajustes incluídos no suporte)</li>
                  <li className="text-white/80">Total 6 meses: R$ 30k + equipe capacitada</li>
                </ul>
              </div>
              <p className="text-white/50 text-sm">
                Economia de 62% + sua equipe aprendeu a mexer. Ou seja: você não depende mais de ninguém.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 7: CASES --- */}
      <section id="cases" className="relative z-20 py-32 px-6 border-t border-white/5 bg-[#000000]">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <span className="font-mono text-[#00ff88] text-xs tracking-widest mb-4 block">/// CASES</span>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-white">Problemas Reais. Soluções Reais.</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {cases.map((item, i) => (
              <div key={i} className="border border-white/10 bg-[#000000] p-6 flex flex-col">
                <div className="mb-5 rounded-lg bg-white/[0.04] border border-white/10 aspect-video overflow-hidden relative">
                  {item.images?.length === 2 ? (
                    <div className="grid h-full w-full grid-cols-2">
                      {item.images.map((img) => (
                        <div key={img.label} className="relative h-full">
                          <img src={img.src} alt={img.label} className="h-full w-full object-cover" />
                          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-2">
                            <span className="text-[9px] uppercase tracking-widest text-white/70">{img.label}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <>
                      <img src={item.images?.[0]?.src} alt={item.images?.[0]?.label} className="h-full w-full object-cover" />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-3">
                        <span className="text-[10px] uppercase tracking-widest text-white/70">
                          {item.images?.[0]?.label}
                        </span>
                      </div>
                    </>
                  )}
                </div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-3">{item.title}</h3>
                <p className="text-white/50 text-sm mb-4">{item.problem}</p>
                <p className="text-white/80 text-sm mb-4">
                  <span className="text-white/40">Solução:</span> {item.solution}
                </p>
                <ul className="text-white/50 text-xs space-y-2 mb-6">
                  {item.results.map((result, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-[#00ff88]" />
                      {result}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/556191185635"
                  className="mt-auto inline-flex items-center justify-center gap-2 rounded-full border border-[#00ff88]/40 px-5 py-2 text-[11px] font-bold uppercase tracking-widest text-[#00ff88] hover:bg-[#00ff88] hover:text-black transition-colors"
                >
                  {item.cta}
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 8: DIFERENCIAL VIDEO --- */}
      <section id="diferencial" className="relative z-20 py-32 px-6 bg-[#000000]">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="border border-white/10 bg-[#000000] rounded-xl overflow-hidden">
              <div className="aspect-video bg-black/60 flex items-center justify-center">
                <button className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm uppercase tracking-widest text-white/70 hover:text-white hover:border-[#00ff88]/60">
                  <PlayCircle className="w-5 h-5 text-[#00ff88]" />
                  Play
                </button>
              </div>
              <div className="p-6 text-sm text-white/60 leading-relaxed">
                Opa, eu sou o Murillo, CTO da Mais Vendas Pro. Aqui a gente não te vende ferramenta. A gente te
                ensina a pescar. Todo projeto vem com documentação completa, treinamento da equipe e suporte por
                90 dias.
              </div>
            </div>

            <div>
              <span className="font-mono text-[#00ff88] text-xs tracking-widest mb-4 block">/// DIFERENCIAL</span>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-6">
                A gente não te deixa dependente.
              </h2>
              <div className="space-y-4 text-white/60">
                <div className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#00ff88]" />
                  <div>
                    <p className="text-white font-semibold">Documentação completa</p>
                    <p className="text-sm">Tipo manual de carro. Você sabe onde está cada coisa e como mexer.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#00ff88]" />
                  <div>
                    <p className="text-white font-semibold">Treinamento da Equipe</p>
                    <p className="text-sm">A gente não guarda segredo. Seu time aprende a operar.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#00ff88]" />
                  <div>
                    <p className="text-white font-semibold">Suporte por 90 dias</p>
                    <p className="text-sm">Dúvidas, ajustes, melhorias. Tudo incluído.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#00ff88]" />
                  <div>
                    <p className="text-white font-semibold">Código comentado</p>
                    <p className="text-sm">Se outro dev pegar, ele entende tudo.</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 text-white/70 text-sm">
                <strong className="text-white">Resumindo:</strong> Você contrata uma vez. Usa pra sempre. Não fica refém.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 9: SERVICOS --- */}
      <section id="servicos" className="relative z-20 py-32 px-6 border-t border-white/5 bg-[#000000]">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <span className="font-mono text-[#00ff88] text-xs tracking-widest mb-4 block">/// SERVIÇOS</span>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-white">O que a gente faz? Quase tudo.</h2>
            <p className="text-white/50 mt-4">Se tecnologia resolve, a gente sabe fazer (ou sabe quem faz).</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((item, i) => (
              <div key={i} className="border border-white/10 bg-white/[0.02] p-6 hover:border-[#00ff88]/30 transition-colors">
                <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-2">{item.title}</h3>
                <p className="text-sm text-white/50 mb-6">{item.desc}</p>
                <button onClick={() => scrollTo('cta')} className="text-[11px] uppercase tracking-widest text-[#00ff88]">
                  Ver mais
                </button>
              </div>
            ))}
          </div>

          <div className="mt-12 border border-white/10 bg-white/[0.02] p-6 text-white/60 text-sm">
            <p className="mb-4">
              <strong className="text-white">E mais:</strong> Webscraping, avatares virtuais, treinamento de closer com IA,
              canal dark no YouTube, audit de fotos, automação de processos, integração de sistemas...
            </p>
            <p className="text-white/50">Mais de 30 soluções no catálogo. Se não tiver ali, a gente cria.</p>
            <a
              href="https://wa.me/556191185635"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-[#00ff88]/40 px-6 py-2 text-[11px] font-bold uppercase tracking-widest text-[#00ff88] hover:bg-[#00ff88] hover:text-black transition-colors"
            >
              Ver catálogo completo
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </section>

      {/* --- SECTION 10: NUMEROS --- */}
      <section id="numeros" className="relative z-20 py-32 px-6 bg-[#000000]">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <span className="font-mono text-[#00ff88] text-xs tracking-widest mb-4 block">/// EM NÚMEROS</span>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-white">Em números</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {metrics.map((metric, i) => (
              <div key={i} className="border border-white/10 bg-white/[0.02] p-8">
                <div className="text-3xl md:text-4xl font-semibold text-white mb-2">{metric.value}</div>
                <p className="text-sm text-white/50">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 11: FAQ --- */}
      <section id="faq" className="relative z-20 py-32 px-6 border-t border-white/5 bg-[#000000]">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <span className="font-mono text-[#00ff88] text-xs tracking-widest mb-4 block">/// FAQ</span>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-white">Dúvidas frequentes</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((item, i) => (
              <details key={i} className="group border border-white/10 bg-white/[0.02] p-6">
                <summary className="cursor-pointer text-sm font-semibold uppercase tracking-widest text-white flex items-center justify-between">
                  {item.q}
                  <span className="text-white/40 group-open:text-[#00ff88]">+</span>
                </summary>
                <p className="mt-4 text-sm text-white/50 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 12: CTA FINAL --- */}
      <section id="cta" className="relative z-20 py-36 px-6 bg-[#000000] overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,136,0.05)_0%,transparent_70%)]" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-medium text-white mb-6 tracking-tighter">
            Não sabe por onde começar?
            <span className="block text-white/30">A gente te ajuda a descobrir.</span>
          </h2>
          <p className="text-white/50 text-lg mb-10">Diagnóstico gratuito. Sem compromisso. Sem enrolação.</p>

          <a
            href="https://wa.me/556191185635"
            className="inline-flex items-center justify-center px-10 py-5 bg-[#00ff88] hover:bg-[#00cc6a] text-black text-sm font-bold uppercase tracking-widest transition-all hover:scale-105"
          >
            Agendar diagnóstico gratuito
          </a>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/556191185635"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#00ff88]/40 px-6 py-2 text-xs font-bold uppercase tracking-widest text-[#00ff88] hover:bg-[#00ff88] hover:text-black transition-colors"
            >
              Chamar no WhatsApp
            </a>
            <a
              href="https://wa.me/556191185635"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-2 text-xs font-bold uppercase tracking-widest text-white/70 hover:text-white hover:border-white/40 transition-colors"
            >
              Preencher formulário
            </a>
          </div>

          <p className="mt-6 text-xs text-white/40">
            Seus dados estão seguros. A gente não vende, não compartilha, não enche o saco. Você agenda, a gente
            conversa, você decide.
          </p>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-16 border-t border-white/5 bg-[#000000] px-6" id="footer">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-4 gap-10 text-sm text-white/60">
          <div>
            <div className="flex items-center gap-2 mb-4 text-white/80">
              <div className="w-3 h-3 bg-[#00ff88] rounded-full" />
              <span className="font-mono text-xs tracking-widest uppercase">Mais Vendas Pro</span>
            </div>
            <p className="text-white/40">Transformamos problemas em linhas de código.</p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/70 mb-4">Soluções</h4>
            <ul className="space-y-2">
              <li>SDR com IA</li>
              <li>Catálogo Profissional</li>
              <li>CRM Customizado</li>
              <li>Vibe Coding Pro</li>
              <li>Ver catálogo completo</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/70 mb-4">Empresa</h4>
            <ul className="space-y-2">
              <li>Sobre nós</li>
              <li>Como funciona</li>
              <li>Cases de sucesso</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/70 mb-4">Suporte</h4>
            <ul className="space-y-2">
              <li>Diagnóstico gratuito</li>
              <li>WhatsApp</li>
              <li>FAQ</li>
              <li>Política de privacidade</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center text-xs text-white/30">
          (c) 2026 Mais Vendas Pro. CNPJ XX.XXX.XXX/0001-XX
        </div>
      </footer>
    </div>
  );
}
