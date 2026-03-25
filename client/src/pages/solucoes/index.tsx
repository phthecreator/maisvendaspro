import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ChevronDown,
  Layers,
  Menu,
  MessageSquare,
  PenTool,
  Search,
  Shield,
  Target,
  TrendingUp,
  Users,
  CheckCircle,
} from 'lucide-react';
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

// ═══════════════════════════════════════════════════════════════════════════════
// SOLUÇÕES — MaisVendas Pro
// Máquina de vendas completa em 90 dias.
// ═══════════════════════════════════════════════════════════════════════════════

const WHATSAPP_URL = 'https://wa.me/556291508399?text=QUERO%20MAIS%20VENDAS';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const sections = [
  { id: 'hero', label: 'Início' },
  { id: 'dores', label: 'Dores' },
  { id: 'solucoes', label: 'Soluções' },
  { id: 'como-funciona', label: 'Como funciona' },
  { id: 'funil', label: 'Funil' },
  { id: 'garantias', label: 'Garantias' },
  { id: 'cases', label: 'Cases' },
  { id: 'calculadora', label: 'Calculadora' },
  { id: 'produtos', label: 'Produtos' },
  { id: 'cta-final', label: 'Contato' },
];

// ─── HERO ────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0A0A0A]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,65,0.06)_0%,transparent_70%)]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'radial-gradient(rgba(0,255,65,0.4) 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      <motion.div
        className="relative z-10 max-w-3xl mx-auto text-center"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        <motion.div variants={fadeUp} className="mb-6">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase bg-[#00FF41]/10 text-[#00FF41] border border-[#00FF41]/20">
            Garantia de resultado em 90 dias
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6"
        >
          Seu comercial vai estar{' '}
          <span className="text-[#00FF41]" style={{ textShadow: '0 0 40px rgba(0,255,65,0.3)' }}>
            entupido de reuniões
          </span>{' '}
          em 90 dias.
        </motion.h1>

        <motion.p variants={fadeUp} className="text-lg sm:text-xl text-[#E0E0E0] mb-4 max-w-2xl mx-auto">
          A gente instala a máquina de vendas completa na sua empresa.
          Raspagem de leads, automação de WhatsApp, funil comercial, criativos, tráfego pago — tudo.
        </motion.p>

        <motion.p variants={fadeUp} className="text-sm font-mono text-[#00FF41]/80 mb-10">
          Mentoria ou implementação · Resultado ou seu dinheiro de volta
        </motion.p>

        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-[#00FF41] text-[#0A0A0A] font-bold text-lg hover:bg-[#00FF41]/90 transition-all hover:shadow-[0_0_40px_rgba(0,255,65,0.3)]"
          >
            Agendar reunião estratégica
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#como-funciona"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-white/20 text-white font-medium hover:bg-white/5 transition-colors"
          >
            Ver como funciona
            <ChevronDown className="w-5 h-5" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

// ─── DORES ───────────────────────────────────────────────────────────────────

const painPoints = [
  {
    icon: Target,
    title: 'Não sabe fazer tráfego pago',
    description:
      'Gasta dinheiro em anúncio que não converte. Não sabe otimizar campanha, não sabe testar criativo.',
  },
  {
    icon: MessageSquare,
    title: 'Não usa automação no WhatsApp',
    description:
      'Responde lead um por um. Perde venda porque demorou 2 horas pra responder.',
  },
  {
    icon: Users,
    title: 'Não tem funil comercial',
    description:
      'Não sabe quantos leads entram, quantos viram reunião, quantos viram cliente. Opera no escuro.',
  },
  {
    icon: PenTool,
    title: 'Não sabe criar criativos que vendem',
    description:
      'Usa Canva genérico. Não tem copy, não tem hook, não tem oferta clara no anúncio.',
  },
  {
    icon: Search,
    title: 'Não prospecta ativamente',
    description:
      'Espera o cliente cair do céu. Não usa raspagem, não usa lista, não faz outbound.',
  },
];

function Dores() {
  return (
    <section id="dores" className="py-20 px-6 bg-[#0A0A0A]">
      <motion.div
        className="max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={stagger}
      >
        <motion.h2
          variants={fadeUp}
          className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center"
        >
          Você sabe que precisa vender mais.{' '}
          <span className="text-[#999999]">Mas...</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {painPoints.map((pain, i) => {
            const Icon = pain.icon;
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all duration-500 hover:border-red-500/20 hover:bg-red-500/[0.02]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10 mb-4">
                  <Icon className="h-5 w-5 text-red-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">{pain.title}</h3>
                <p className="text-[#999999] text-sm leading-relaxed">{pain.description}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

// ─── SOLUÇÕES GRID ───────────────────────────────────────────────────────────

const solutions = [
  {
    icon: Search,
    gradient: 'from-emerald-500 to-green-400',
    title: 'Raspagem de Leads',
    tagline: 'Lista de clientes qualificados sob demanda',
    description:
      'Scraping de Google Maps, Instagram, LinkedIn. Você define o nicho, a gente entrega a lista com nome, telefone e email.',
    features: ['Google Maps + Instagram', 'Filtro por nicho e região', 'Export CSV pronto pra uso', 'Atualização semanal'],
    badge: 'Operacional',
    replaces: 'Substitui a prospecção manual e a compra de listas frias',
    before: 'Você gasta horas no Google procurando clientes, ou compra listas desatualizadas com emails inválidos',
    after: 'Lista fresh com nome, telefone e email entregue toda semana. Você só escolhe o nicho e a região',
    metric: '+500 leads qualificados/mês',
  },
  {
    icon: MessageSquare,
    gradient: 'from-green-500 to-emerald-400',
    title: 'Automação WhatsApp',
    tagline: 'Seu WhatsApp vendendo no automático',
    description:
      'Bot inteligente que responde, qualifica e agenda reunião. Funciona 24h. Integra com seu CRM.',
    features: ['Resposta em segundos', 'Qualificação automática', 'Agendamento de reunião', 'Relatório de conversão'],
    badge: 'Operacional',
    replaces: 'Substitui a pessoa que fica o dia todo respondendo mensagem',
    before: 'Lead manda mensagem às 22h, você responde às 8h do dia seguinte. Ele já fechou com o concorrente',
    after: 'Resposta em 3 segundos, qualificação automática, reunião agendada. 24h por dia, 7 dias por semana',
    metric: '12 reuniões agendadas/semana no automático',
  },
  {
    icon: TrendingUp,
    gradient: 'from-blue-500 to-cyan-400',
    title: 'Funil Comercial',
    tagline: 'Do lead frio à reunião agendada',
    description:
      'Estrutura completa: landing page, formulário de qualificação, sequência de follow-up, dashboard de métricas.',
    features: ['Landing page otimizada', 'Lead scoring automático', 'Follow-up sequencial', 'Dashboard de métricas'],
    badge: 'Operacional',
    replaces: 'Substitui a planilha de Excel e o \'achismo\' sobre seus números',
    before: 'Não sabe quantos leads entram, quantos respondem, quantos viram reunião. Toma decisão no escuro',
    after: 'Dashboard com métricas em tempo real. Sabe exatamente onde está perdendo dinheiro e onde investir mais',
    metric: 'Visibilidade de 100% do pipeline',
  },
  {
    icon: PenTool,
    gradient: 'from-purple-500 to-pink-500',
    title: 'Criativos & Copy',
    tagline: 'Anúncios que param o scroll e vendem',
    description:
      'Criativos para Meta Ads com copy persuasiva. Hooks testados, ofertas claras, variações para teste A/B.',
    features: ['Copy com frameworks testados', 'Variações pra teste A/B', 'Hooks que param o scroll', 'Adaptado pro seu nicho'],
    badge: 'Operacional',
    replaces: 'Substitui o designer freelancer que demora 5 dias pra entregar um post',
    before: 'Criativo genérico feito no Canva, sem copy, sem hook, sem teste. Joga dinheiro no Meta Ads e torce',
    after: 'Criativos com copy testada, variações pra A/B, hooks que param o scroll. Prontos em horas, não dias',
    metric: 'CTR 2-3x maior nos anúncios',
  },
  {
    icon: Target,
    gradient: 'from-orange-500 to-amber-400',
    title: 'Tráfego Pago',
    tagline: 'Seu dinheiro em anúncio rendendo de verdade',
    description:
      'Gestão de campanhas Meta Ads com otimização semanal. Bid cap, públicos, criativos — tudo gerenciado.',
    features: ['Setup de campanhas', 'Otimização semanal', 'Relatório de performance', 'Escala controlada'],
    badge: 'Operacional',
    replaces: 'Substitui o \'impulsionar publicação\' e a gestão amadora de anúncios',
    before: 'Bota R$50 no impulsionar, não sabe o que é bid cap, não otimiza, não escala',
    after: 'Campanhas estruturadas com orçamento otimizado, públicos testados, escala controlada',
    metric: 'CAC reduzido em até 40%',
  },
  {
    icon: Layers,
    gradient: 'from-cyan-500 to-blue-400',
    title: 'Organização Comercial',
    tagline: 'CRM, processos e métricas no lugar',
    description:
      'Seu comercial organizado: pipeline visual, métricas de conversão, processos documentados. Chega de operar no escuro.',
    features: ['Pipeline visual', 'Métricas de conversão', 'Processos documentados', 'Treinamento do time'],
    badge: 'Operacional',
    replaces: 'Substitui o caos: anotação no papel, follow-up na memória, meta no feeling',
    before: 'Não tem CRM, não tem processo, não tem métrica. Cada vendedor faz do seu jeito',
    after: 'Pipeline visual, processos documentados, métricas de conversão, time alinhado e treinado',
    metric: '30% mais fechamentos com o mesmo time',
  },
];

function SolucoesGrid() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  return (
    <section id="solucoes" className="py-20 px-6 bg-[#0A0A0A] border-t border-white/[0.06]">
      <motion.div
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={stagger}
      >
        <motion.div variants={fadeUp} className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Cada dor tem uma solução.{' '}
            <span className="text-[#00FF41]">A gente instala todas.</span>
          </h2>
          <p className="text-[#999999] max-w-2xl mx-auto">
            Estas são as soluções que implementamos nos nossos clientes. Cada uma resolve um gargalo específico do comercial.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {solutions.map((sol, i) => {
            const Icon = sol.icon;
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group relative h-full rounded-2xl border border-white/[0.06] bg-[#0a0a0a] p-6 transition-all duration-500 hover:border-[#00FF41]/20 hover:bg-[#111] overflow-hidden cursor-pointer"
                onClick={() => setExpandedCard(expandedCard === i ? null : i)}
              >
                {/* Glow on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${sol.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500 rounded-2xl`}
                />

                {/* Header */}
                <div className="relative z-10 flex items-start justify-between mb-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${sol.gradient}`}
                    style={{ boxShadow: '0 0 20px rgba(0,255,65,0.1)' }}
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-medium border bg-[#00FF41]/10 text-[#00FF41] border-[#00FF41]/20">
                      {sol.badge}
                    </span>
                    <div className={`transition-transform duration-300 ${expandedCard === i ? 'rotate-180' : ''}`}>
                      <ChevronDown className="h-4 w-4 text-white/30" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold text-white mb-1">{sol.title}</h3>
                  <p className="text-[#00FF41] text-sm font-medium mb-3">{sol.tagline}</p>
                  <p className="text-[#999999] text-sm leading-relaxed mb-4">{sol.description}</p>

                  {/* Features */}
                  <div className="space-y-1.5">
                    {sol.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-xs text-white/40">
                        <div className="h-1 w-1 rounded-full bg-[#00FF41]/50" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Expandable content */}
                  <AnimatePresence>
                    {expandedCard === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 pt-4 border-t border-white/[0.06] space-y-3">
                          <p className="text-[#00FF41]/80 text-xs font-mono uppercase tracking-wider">{sol.replaces}</p>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div className="rounded-xl bg-red-500/[0.05] border border-red-500/10 p-3">
                              <p className="text-red-400 text-[11px] font-mono uppercase mb-1">Antes</p>
                              <p className="text-[#999999] text-xs leading-relaxed">{sol.before}</p>
                            </div>
                            <div className="rounded-xl bg-[#00FF41]/[0.05] border border-[#00FF41]/10 p-3">
                              <p className="text-[#00FF41] text-[11px] font-mono uppercase mb-1">Depois</p>
                              <p className="text-[#E0E0E0] text-xs leading-relaxed">{sol.after}</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 pt-1">
                            <div className="h-2 w-2 rounded-full bg-[#00FF41] animate-pulse" />
                            <span className="text-[#00FF41] text-sm font-semibold">{sol.metric}</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          variants={fadeUp}
          className="text-center text-[#999999]/60 text-sm mt-10 font-mono"
        >
          Mais soluções em breve: IA para atendimento, RH automatizado, produção de conteúdo, gestão financeira
        </motion.p>
      </motion.div>
    </section>
  );
}

// ─── COMO FUNCIONA — 90 DIAS ─────────────────────────────────────────────────

const phases = [
  {
    number: '01',
    period: 'Semana 1-2',
    title: 'Diagnóstico & Setup',
    description:
      'Analisamos seu negócio, seu mercado e seu comercial atual. Identificamos os gargalos e montamos o plano de ação personalizado.',
    items: ['Reunião de diagnóstico', 'Mapeamento de gargalos', 'Plano de 90 dias definido', 'Setup das ferramentas'],
  },
  {
    number: '02',
    period: 'Semana 3-8',
    title: 'Implementação & Lançamento',
    description:
      'Instalamos cada solução, uma por vez. Raspagem, automação, funil, criativos, tráfego. Tudo funcionando e gerando resultado.',
    items: ['Soluções ativadas uma a uma', 'Primeiros leads entrando', 'Primeiras reuniões agendadas', 'Ajustes em tempo real'],
  },
  {
    number: '03',
    period: 'Semana 9-12',
    title: 'Otimização & Escala',
    description:
      'Com tudo rodando, otimizamos cada peça. Mais conversão, menos custo, mais reuniões. Entregamos a operação funcionando.',
    items: ['Otimização de campanhas', 'Escala de resultados', 'Time treinado', 'Operação autônoma'],
  },
];

function ComoFunciona() {
  return (
    <section id="como-funciona" className="py-20 px-6 bg-[#0A0A0A] border-t border-white/[0.06]">
      <motion.div
        className="max-w-4xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={stagger}
      >
        <motion.div variants={fadeUp} className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            90 dias. Passo a passo.{' '}
            <span className="text-[#00FF41]">Sem mistério.</span>
          </h2>
          <p className="text-[#999999] max-w-xl mx-auto">
            Você sabe exatamente o que vai acontecer em cada fase. Sem surpresas.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#00FF41]/40 via-[#00FF41]/20 to-transparent" />

          <div className="space-y-12">
            {phases.map((phase, i) => (
              <motion.div key={i} variants={fadeUp} className="relative pl-16 sm:pl-20">
                {/* Number circle */}
                <div className="absolute left-0 top-0 flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full border-2 border-[#00FF41]/30 bg-[#0A0A0A]">
                  <span className="text-[#00FF41] font-bold text-sm sm:text-lg font-mono">{phase.number}</span>
                </div>

                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-mono text-[#00FF41]/70 bg-[#00FF41]/10 px-2.5 py-1 rounded-full">
                      {phase.period}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{phase.title}</h3>
                  <p className="text-[#999999] text-sm leading-relaxed mb-4">{phase.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {phase.items.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-[#E0E0E0]">
                        <CheckCircle className="h-4 w-4 text-[#00FF41]/60 shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

// ─── FUNIL VISUAL ───────────────────────────────────────────────────────────

function FunilVisual() {
  const steps = [
    { label: 'Lista', count: '2.000', desc: 'leads raspados', color: '#00FF41' },
    { label: 'Abordagem', count: '2.000', desc: 'contatos via WhatsApp', color: '#00FF41' },
    { label: 'Qualificação', count: '400', desc: 'responderam com interesse', color: '#00E5CC' },
    { label: 'Reunião', count: '80', desc: 'reuniões agendadas', color: '#FFD700' },
    { label: 'Venda', count: '16', desc: 'novos clientes/mês', color: '#FFD700' },
  ];

  return (
    <section id="funil" className="py-20 px-6 bg-[#0A0A0A] border-t border-white/[0.06]">
      <motion.div
        className="max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={stagger}
      >
        <motion.div variants={fadeUp} className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            O caminho do lead até a{' '}
            <span className="text-[#FFD700]">venda.</span>
          </h2>
          <p className="text-[#999999] max-w-xl mx-auto">
            Funil real de um cliente nosso. Cada etapa é automatizada.
          </p>
        </motion.div>

        {/* Desktop funnel */}
        <motion.div variants={fadeUp} className="hidden md:block">
          <div className="flex items-end justify-between gap-2">
            {steps.map((step, i) => {
              const heightPercent = [100, 100, 50, 20, 8][i];
              return (
                <div key={i} className="flex-1 flex flex-col items-center gap-3">
                  <div className="text-center">
                    <p className="text-2xl font-bold" style={{ color: step.color }}>{step.count}</p>
                    <p className="text-[#999999] text-xs">{step.desc}</p>
                  </div>
                  <div
                    className="w-full rounded-t-lg transition-all duration-700"
                    style={{
                      height: `${heightPercent * 2}px`,
                      background: `linear-gradient(to top, ${step.color}15, ${step.color}40)`,
                      borderTop: `2px solid ${step.color}`,
                    }}
                  />
                  <p className="text-white text-sm font-semibold">{step.label}</p>
                </div>
              );
            })}
          </div>
          {/* Conversion arrows */}
          <div className="flex justify-between mt-4 px-[10%]">
            {['100%', '20%', '20%', '20%'].map((rate, i) => (
              <div key={i} className="flex items-center gap-1 text-[#999999] text-xs font-mono">
                <ArrowRight className="h-3 w-3" />
                {rate} conv.
              </div>
            ))}
          </div>
        </motion.div>

        {/* Mobile funnel */}
        <motion.div variants={fadeUp} className="md:hidden space-y-3">
          {steps.map((step, i) => (
            <div key={i} className="flex items-center gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg text-lg font-bold" style={{ color: step.color, backgroundColor: `${step.color}15` }}>
                {step.count}
              </div>
              <div className="flex-1">
                <p className="text-white text-sm font-semibold">{step.label}</p>
                <p className="text-[#999999] text-xs">{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <span className="text-[#999999] text-xs font-mono">&rarr;</span>
              )}
            </div>
          ))}
        </motion.div>

        <motion.p variants={fadeUp} className="text-center text-[#999999] text-sm mt-8">
          Resultado: <span className="text-[#FFD700] font-semibold">16 novos clientes/mês</span> com investimento controlado.
        </motion.p>
      </motion.div>
    </section>
  );
}

// ─── GARANTIAS ───────────────────────────────────────────────────────────────

const guarantees = [
  {
    icon: Shield,
    title: 'Garantia de reuniões',
    description:
      'Se em 90 dias seu comercial não tiver mais reuniões do que tem hoje, a gente trabalha de graça até ter.',
  },
  {
    icon: TrendingUp,
    title: 'Garantia de processo',
    description:
      'Você vai ter um processo comercial documentado, com métricas, automações e funil funcionando. Isso é fato, não promessa.',
  },
  {
    icon: Users,
    title: 'Garantia de suporte',
    description:
      'Grupo exclusivo, calls semanais, suporte direto com quem implementa. Você nunca fica sozinho.',
  },
];

function Garantias() {
  return (
    <section id="garantias" className="py-20 px-6 bg-[#0A0A0A] border-t border-white/[0.06]">
      <motion.div
        className="max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={stagger}
      >
        <motion.h2
          variants={fadeUp}
          className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center"
        >
          Três garantias.{' '}
          <span className="text-[#FFD700]">Sem letra miúda.</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {guarantees.map((g, i) => {
            const Icon = g.icon;
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group rounded-2xl border border-[#FFD700]/15 bg-[#FFD700]/[0.02] p-6 transition-all duration-500 hover:border-[#FFD700]/30 hover:bg-[#FFD700]/[0.04]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFD700]/10 mb-4">
                  <Icon className="h-6 w-6 text-[#FFD700]" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{g.title}</h3>
                <p className="text-[#999999] text-sm leading-relaxed">{g.description}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

// ─── CASES ───────────────────────────────────────────────────────────────────

const cases = [
  {
    title: 'Clínica de Estética',
    segment: 'Saúde & Beleza',
    solutions: ['Raspagem de Leads', 'Automação WhatsApp'],
    metricBefore: '3 reuniões/semana',
    metricAfter: '15 reuniões/semana',
    timeframe: '45 dias',
    highlight: '+400%',
  },
  {
    title: 'Agência de Marketing',
    segment: 'Marketing Digital',
    solutions: ['Funil Comercial', 'Criativos & Copy', 'Tráfego Pago'],
    metricBefore: 'Pipeline desorganizado',
    metricAfter: 'Pipeline visual + métricas',
    timeframe: '60 dias',
    highlight: '+40% fechamentos',
  },
  {
    title: 'Confecção Têxtil',
    segment: 'Moda & Atacado',
    solutions: ['Automação WhatsApp', 'Raspagem de Leads'],
    metricBefore: 'Representante visitando loja a loja',
    metricAfter: 'Abordagem automática em escala',
    timeframe: '30 dias',
    highlight: '10x alcance',
  },
  {
    title: 'Consultoria B2B',
    segment: 'Serviços Profissionais',
    solutions: ['Raspagem de Leads', 'Automação WhatsApp', 'Organização Comercial'],
    metricBefore: 'Prospecção manual',
    metricAfter: '847 abordagens/dia automatizadas',
    timeframe: '20 dias',
    highlight: 'R$3/dia em custo',
  },
];

function Cases() {
  return (
    <section id="cases" className="py-20 px-6 bg-[#0A0A0A] border-t border-white/[0.06]">
      <motion.div
        className="max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={stagger}
      >
        <motion.div variants={fadeUp} className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Não é teoria.{' '}
            <span className="text-[#00FF41]">É o que a gente já faz.</span>
          </h2>
          <p className="text-[#999999]">Projetos reais, com resultados reais.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all duration-500 hover:border-[#00FF41]/20 backdrop-blur-sm"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-white font-semibold text-lg">{c.title}</h3>
                  <p className="text-[#999999] text-xs">{c.segment}</p>
                </div>
                <span className="text-[#00FF41] text-xl font-bold font-mono">{c.highlight}</span>
              </div>

              {/* Solutions used */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {c.solutions.map((s) => (
                  <span key={s} className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#00FF41]/10 text-[#00FF41]/70 border border-[#00FF41]/10">
                    {s}
                  </span>
                ))}
              </div>

              {/* Before/After */}
              <div className="grid grid-cols-2 gap-2 mb-3">
                <div className="rounded-lg bg-red-500/[0.05] border border-red-500/10 p-2.5">
                  <p className="text-red-400 text-[10px] font-mono uppercase mb-0.5">Antes</p>
                  <p className="text-[#999999] text-xs">{c.metricBefore}</p>
                </div>
                <div className="rounded-lg bg-[#00FF41]/[0.05] border border-[#00FF41]/10 p-2.5">
                  <p className="text-[#00FF41] text-[10px] font-mono uppercase mb-0.5">Depois</p>
                  <p className="text-[#E0E0E0] text-xs">{c.metricAfter}</p>
                </div>
              </div>

              {/* Timeframe */}
              <div className="flex items-center gap-2 text-[#999999] text-xs">
                <div className="h-1.5 w-1.5 rounded-full bg-[#00FF41]" />
                Resultado em {c.timeframe}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

// ─── CALCULADORA ROI ─────────────────────────────────────────────────────────

function Calculadora() {
  const [leads, setLeads] = useState(100);

  // Conversion rates based on our funnel data
  const abordagens = leads;
  const interessados = Math.round(leads * 0.20);
  const reunioes = Math.round(interessados * 0.20);
  const clientes = Math.round(reunioes * 0.20);
  const ticketMedio = 3000; // R$ average
  const receitaMensal = clientes * ticketMedio;

  return (
    <section id="calculadora" className="py-20 px-6 bg-[#0A0A0A] border-t border-white/[0.06]">
      <motion.div
        className="max-w-3xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={stagger}
      >
        <motion.div variants={fadeUp} className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Faça a conta.{' '}
            <span className="text-[#00FF41]">Quanto você está deixando na mesa?</span>
          </h2>
          <p className="text-[#999999] max-w-xl mx-auto">
            Ajuste o número de leads e veja o potencial do seu comercial com a máquina rodando.
          </p>
        </motion.div>

        <motion.div variants={fadeUp} className="rounded-2xl border border-[#00FF41]/20 bg-[#00FF41]/[0.02] p-8">
          {/* Slider */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <label className="text-white text-sm font-medium">Leads por mês</label>
              <span className="text-[#00FF41] text-2xl font-bold font-mono">{leads.toLocaleString('pt-BR')}</span>
            </div>
            <input
              type="range"
              min={50}
              max={5000}
              step={50}
              value={leads}
              onChange={(e) => setLeads(Number(e.target.value))}
              className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#00FF41]"
            />
            <div className="flex justify-between text-[#999999] text-xs mt-1">
              <span>50</span>
              <span>5.000</span>
            </div>
          </div>

          {/* Results */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            {[
              { label: 'Abordagens', value: abordagens.toLocaleString('pt-BR'), color: '#00FF41' },
              { label: 'Interessados', value: interessados.toLocaleString('pt-BR'), color: '#00E5CC' },
              { label: 'Reuniões', value: reunioes.toLocaleString('pt-BR'), color: '#FFD700' },
              { label: 'Novos clientes', value: clientes.toLocaleString('pt-BR'), color: '#FFD700' },
            ].map((item) => (
              <div key={item.label} className="text-center rounded-xl bg-white/[0.03] border border-white/[0.06] p-3">
                <p className="text-2xl font-bold font-mono" style={{ color: item.color }}>{item.value}</p>
                <p className="text-[#999999] text-xs mt-1">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Revenue highlight */}
          <div className="rounded-xl bg-[#FFD700]/[0.05] border border-[#FFD700]/20 p-4 text-center">
            <p className="text-[#999999] text-sm mb-1">Receita potencial por mês</p>
            <p className="text-[#FFD700] text-3xl sm:text-4xl font-bold font-mono">
              R$ {receitaMensal.toLocaleString('pt-BR')}
            </p>
            <p className="text-[#999999] text-xs mt-1">
              Baseado em ticket médio de R$ {ticketMedio.toLocaleString('pt-BR')}
            </p>
          </div>

          <p className="text-center text-[#999999]/60 text-xs mt-4">
            * Taxas de conversão baseadas em dados reais dos nossos clientes. Resultados variam por nicho.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

// ─── DOIS PRODUTOS ───────────────────────────────────────────────────────────

function Produtos() {
  return (
    <section id="produtos" className="py-20 px-6 bg-[#0A0A0A] border-t border-white/[0.06]">
      <motion.div
        className="max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={stagger}
      >
        <motion.h2
          variants={fadeUp}
          className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center"
        >
          Dois caminhos.{' '}
          <span className="text-[#00FF41]">Um resultado: mais vendas.</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Mentoria */}
          <motion.div
            variants={fadeUp}
            className="group relative rounded-2xl border border-[#FFD700]/15 bg-[#FFD700]/[0.02] p-8 transition-all duration-500 hover:border-[#FFD700]/30 flex flex-col"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-1">Mentoria</h3>
              <p className="text-[#FFD700] text-sm font-medium">Eu te ensino a fazer</p>
            </div>
            <p className="text-[#999999] text-sm leading-relaxed mb-6">
              Pra quem quer aprender e implementar no próprio negócio. Calls semanais, passo a passo, grupo de suporte, templates prontos.
            </p>
            <div className="space-y-3 mb-8 flex-1">
              {[
                'Calls semanais ao vivo',
                'Passo a passo personalizado',
                'Templates e scripts prontos',
                'Grupo exclusivo de suporte',
                'Acesso por 90 dias',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-[#E0E0E0]">
                  <CheckCircle className="h-4 w-4 text-[#FFD700]/60 shrink-0" />
                  {item}
                </div>
              ))}
            </div>
            <a
              href="https://wa.me/556291508399?text=QUERO%20MENTORIA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full rounded-xl border border-[#FFD700]/30 bg-[#FFD700]/10 px-6 py-3.5 text-sm font-semibold text-[#FFD700] hover:bg-[#FFD700]/20 transition-all"
            >
              Quero a mentoria
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          {/* Implementação */}
          <motion.div
            variants={fadeUp}
            className="group relative rounded-2xl border border-[#00FF41]/20 bg-[#00FF41]/[0.02] p-8 transition-all duration-500 hover:border-[#00FF41]/40 hover:shadow-[0_0_60px_rgba(0,255,65,0.06)] flex flex-col"
          >
            {/* Tag */}
            <div className="absolute -top-3 right-6">
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#00FF41] text-[#0A0A0A]">
                Mais popular
              </span>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-1">Implementação</h3>
              <p className="text-[#00FF41] text-sm font-medium">Eu faço pelo seu negócio</p>
            </div>
            <p className="text-[#999999] text-sm leading-relaxed mb-6">
              Pra quem quer resultado sem botar a mão na massa. A gente instala tudo, configura tudo, entrega funcionando.
            </p>
            <div className="space-y-3 mb-8 flex-1">
              {[
                'Diagnóstico completo',
                'Todas as soluções implementadas',
                'Time treinado',
                'Suporte dedicado',
                'Resultado garantido em 90 dias',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-[#E0E0E0]">
                  <CheckCircle className="h-4 w-4 text-[#00FF41]/60 shrink-0" />
                  {item}
                </div>
              ))}
            </div>
            <a
              href="https://wa.me/556291508399?text=QUERO%20IMPLEMENTACAO"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full rounded-xl bg-[#00FF41] px-6 py-3.5 text-sm font-bold text-[#0A0A0A] hover:bg-[#00FF41]/90 transition-all hover:shadow-[0_0_30px_rgba(0,255,65,0.3)]"
            >
              Quero a implementação
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

// ─── CTA FINAL ───────────────────────────────────────────────────────────────

function CTAFinal() {
  return (
    <section id="cta-final" className="relative py-24 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[#0A0A0A]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[600px] bg-[#00FF41]/5 rounded-full blur-[120px]" />
      </div>

      <motion.div
        className="relative z-10 max-w-3xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
      >
        <motion.p
          variants={fadeUp}
          className="text-[#999999] text-lg italic mb-6"
        >
          "Enquanto você pensa, seu concorrente está implementando."
        </motion.p>

        <motion.h2
          variants={fadeUp}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8"
        >
          A pergunta não é SE você vai vender mais.{' '}
          <span className="text-[#00FF41]">É QUANDO.</span>
        </motion.h2>

        <motion.div variants={fadeUp}>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-lg bg-[#00FF41] text-[#0A0A0A] font-bold text-lg hover:bg-[#00FF41]/90 transition-all hover:shadow-[0_0_50px_rgba(0,255,65,0.3)]"
          >
            Agendar reunião estratégica
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>

        <motion.p variants={fadeUp} className="text-[#999999] text-sm mt-6">
          15 minutos. Sem compromisso. A gente analisa e te mostra o potencial.
        </motion.p>

        <motion.p variants={fadeUp} className="text-white/30 text-sm mt-8 font-mono">
          — Pedro, Murillo & Rapha
        </motion.p>
      </motion.div>
    </section>
  );
}

// ─── MOBILE NAV SHEET ────────────────────────────────────────────────────────

function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <button className="flex h-12 w-12 items-center justify-center rounded-full bg-[#00FF41] text-[#0A0A0A] shadow-[0_0_30px_rgba(0,255,65,0.3)] hover:bg-[#00FF41]/90 transition-all">
            <Menu className="h-5 w-5" />
          </button>
        </SheetTrigger>
        <SheetContent side="right" className="bg-[#0a0a0a] border-white/10 w-72">
          <SheetHeader>
            <SheetTitle className="text-white text-left">Navegação</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col gap-2 mt-6">
            {sections.map((section) => (
              <SheetClose asChild key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="text-white/70 hover:text-[#00FF41] py-2.5 px-3 rounded-lg hover:bg-white/5 transition-all text-sm"
                  onClick={() => setOpen(false)}
                >
                  {section.label}
                </a>
              </SheetClose>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-[#00FF41] px-4 py-3 text-center text-sm font-semibold text-[#0A0A0A] mt-4"
              onClick={() => setOpen(false)}
            >
              Agendar reunião
            </a>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function Solucoes() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Hero />
      <Dores />
      <SolucoesGrid />
      <ComoFunciona />
      <FunilVisual />
      <Garantias />
      <Cases />
      <Calculadora />
      <Produtos />
      <CTAFinal />
      <MobileNav />
    </div>
  );
}
