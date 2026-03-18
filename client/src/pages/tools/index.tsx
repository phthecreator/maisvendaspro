import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  ArrowRight,
  Bot,
  Brain,
  Copy,
  Film,
  Globe,
  Layers,
  LayoutTemplate,
  MessageSquare,
  Mic,
  Monitor,
  Palette,
  PenTool,
  Rocket,
  Search,
  Shield,
  ShoppingCart,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Zap,
  BookOpen,
  Video,
  Menu,
} from 'lucide-react';
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

const WHATSAPP_URL = 'https://wa.me/556291508399';

type Tier = 'all' | 'quick' | 'core' | 'platform' | 'playbook';

interface Product {
  id: number;
  name: string;
  tagline: string;
  description: string;
  price: string;
  priceDetail?: string;
  tier: 'quick' | 'core' | 'platform' | 'playbook';
  tierLabel: string;
  icon: React.ElementType;
  gradient: string;
  features: string[];
  squadBase: string;
  status: 'soon' | 'waitlist' | 'beta';
}

const products: Product[] = [
  {
    id: 1,
    name: 'CopyForge',
    tagline: 'Copy completa em 30 segundos',
    description: 'Cola a URL do seu produto e recebe VSL, emails, ads e landing page copy — tudo gerado por 25 agentes especializados.',
    price: '$29/mes',
    priceDetail: 'ou $0.10/geracao',
    tier: 'quick',
    tierLabel: 'Quick Win',
    icon: Copy,
    gradient: 'from-emerald-500 to-green-400',
    features: ['VSL completa', 'Email sequence (7 dias)', 'Ads copy (Meta + Google)', 'Landing page copy'],
    squadBase: 'copy (25 agents)',
    status: 'waitlist',
  },
  {
    id: 2,
    name: 'ClipMachine',
    tagline: 'Lives viram clips virais',
    description: 'Upload de live ou podcast e receba 10+ clips otimizados com legendas, thumbnails e score de viralidade.',
    price: '$19/mes',
    priceDetail: 'ou $2/video',
    tier: 'quick',
    tierLabel: 'Quick Win',
    icon: Film,
    gradient: 'from-purple-500 to-pink-500',
    features: ['10+ clips por video', 'Legendas automaticas', 'Thumbnails AI', 'Score de viralidade'],
    squadBase: 'ai-reels (7 agents)',
    status: 'waitlist',
  },
  {
    id: 3,
    name: 'LeadHunter Pro',
    tagline: 'Leads qualificados sob demanda',
    description: 'Pesquisa leads por nicho com email, LinkedIn e score de qualificacao. Nunca mais prospecte manualmente.',
    price: '$49/mes',
    priceDetail: 'ou $0.05/lead',
    tier: 'quick',
    tierLabel: 'Quick Win',
    icon: Search,
    gradient: 'from-blue-500 to-cyan-400',
    features: ['Busca por nicho', 'Email + LinkedIn', 'Lead scoring AI', 'Export CSV/CRM'],
    squadBase: 'lead-hunter (7 agents)',
    status: 'soon',
  },
  {
    id: 4,
    name: 'SquadRH',
    tagline: 'RH automatizado por IA',
    description: 'Job descriptions, avaliacoes, onboarding e fit cultural — tudo gerado automaticamente.',
    price: '$39/mes',
    tier: 'quick',
    tierLabel: 'Quick Win',
    icon: Users,
    gradient: 'from-orange-500 to-amber-400',
    features: ['Job description AI', 'Avaliacao candidatos', 'Onboarding automatico', 'Fit cultural score'],
    squadBase: 'squad-rh (6 agents)',
    status: 'soon',
  },
  {
    id: 5,
    name: 'UTM Builder',
    tagline: 'Tracking sem complicacao',
    description: 'Gera UTMs, tracking e dashboard de atribuicao para todas as suas campanhas.',
    price: 'Free',
    priceDetail: 'Pro: $9/mes',
    tier: 'quick',
    tierLabel: 'Quick Win',
    icon: Target,
    gradient: 'from-teal-500 to-emerald-400',
    features: ['Gerador de UTMs', 'Dashboard atribuicao', 'Integracao GA4', 'Templates por canal'],
    squadBase: 'gerador-utms + data',
    status: 'soon',
  },
  {
    id: 6,
    name: 'ContentEngine',
    tagline: '30 dias de conteudo em 30 minutos',
    description: 'Calendario editorial completo com posts, reels, stories e carrosseis gerados por 30 agentes.',
    price: '$49/mes',
    priceDetail: 'Pro: $99/mes',
    tier: 'core',
    tierLabel: 'Core Product',
    icon: PenTool,
    gradient: 'from-violet-500 to-purple-400',
    features: ['Calendario 30 dias', 'Posts + Reels + Stories', 'Carrosseis prontos', 'Hashtags otimizadas'],
    squadBase: 'content-engine (30 agents)',
    status: 'waitlist',
  },
  {
    id: 7,
    name: 'AdsPilot',
    tagline: 'Suas campanhas no piloto automatico',
    description: 'Conecta Meta Ads, analisa performance, sugere otimizacoes e gera novos criativos automaticamente.',
    price: '$79/mes',
    tier: 'core',
    tierLabel: 'Core Product',
    icon: TrendingUp,
    gradient: 'from-red-500 to-rose-400',
    features: ['Analise Meta Ads', 'Sugestoes AI', 'Criativos automaticos', 'Relatorio semanal'],
    squadBase: 'meta-ads (4) + ads-mgmt (7)',
    status: 'soon',
  },
  {
    id: 8,
    name: 'MindClone Studio',
    tagline: 'Clone sua mente em IA',
    description: 'Responda um questionario, extraia seu DNA mental e crie um clone consultivo que pensa como voce.',
    price: '$99/mes',
    priceDetail: 'ou $199 one-time',
    tier: 'core',
    tierLabel: 'Core Product',
    icon: Brain,
    gradient: 'from-fuchsia-500 to-pink-400',
    features: ['DNA mental extraido', 'Clone consultivo', 'Respostas no seu tom', 'Evolui com uso'],
    squadBase: 'mmos (17 agents)',
    status: 'waitlist',
  },
  {
    id: 9,
    name: 'CloserAI',
    tagline: 'Treine vendas com IA',
    description: 'Scripts de vendas, simulador de objecoes, gravacao de calls e analise de performance.',
    price: '$59/mes',
    tier: 'core',
    tierLabel: 'Core Product',
    icon: MessageSquare,
    gradient: 'from-emerald-500 to-teal-400',
    features: ['Scripts personalizados', 'Simulador objecoes', 'Gravacao de calls', 'Performance score'],
    squadBase: 'sales-closer (8 agents)',
    status: 'soon',
  },
  {
    id: 10,
    name: 'LandingForge',
    tagline: 'Landing pages em 1 click',
    description: 'Descreva seu produto e receba landing page completa com copy, design e codigo pronto pra deploy.',
    price: '$29/mes',
    priceDetail: 'ou $15/pagina',
    tier: 'core',
    tierLabel: 'Core Product',
    icon: LayoutTemplate,
    gradient: 'from-sky-500 to-blue-400',
    features: ['Copy + design + codigo', 'Deploy 1-click', 'A/B testing', 'Mobile-first'],
    squadBase: 'landing-page (4) + copy',
    status: 'soon',
  },
  {
    id: 11,
    name: 'BookDigest Pro',
    tagline: 'Livros viram action items',
    description: 'Upload PDF/livro e receba resumo executivo, action items, mind map e flashcards.',
    price: '$19/mes',
    priceDetail: 'ou $3/livro',
    tier: 'core',
    tierLabel: 'Core Product',
    icon: BookOpen,
    gradient: 'from-amber-500 to-yellow-400',
    features: ['Resumo executivo', 'Action items', 'Mind map visual', 'Flashcards'],
    squadBase: 'books + dopamine-learning',
    status: 'soon',
  },
  {
    id: 12,
    name: 'VideoAI Studio',
    tagline: 'Videos com avatar AI',
    description: 'Gere videos com seu avatar falando, corte lives e crie ads — tudo numa plataforma.',
    price: '$9/mes',
    priceDetail: 'ate $79/mes',
    tier: 'core',
    tierLabel: 'Core Product',
    icon: Video,
    gradient: 'from-indigo-500 to-violet-400',
    features: ['Avatar AI clone', 'Corte de lives', 'Criativos ads', '3 tiers qualidade'],
    squadBase: 'ai-reels + copy',
    status: 'waitlist',
  },
  {
    id: 13,
    name: 'Squad Marketplace',
    tagline: 'Escolha. Pague. Deploy.',
    description: 'Catalogo com 67 squads prontos — escolha por departamento, pague e receba sua equipe AI operando.',
    price: '$97/mes',
    priceDetail: 'por squad ativo',
    tier: 'platform',
    tierLabel: 'Platform',
    icon: ShoppingCart,
    gradient: 'from-green-400 to-emerald-300',
    features: ['67 squads prontos', 'Filtro por departamento', 'Deploy automatico', 'Suporte incluido'],
    squadBase: 'TODOS os squads',
    status: 'waitlist',
  },
  {
    id: 14,
    name: 'Advisory Board AI',
    tagline: 'Conselho de administracao AI',
    description: '11+ mentes clonadas como conselheiros — pergunte e receba visoes de Elon, Jobs, Hormozi e mais.',
    price: '$199/mes',
    priceDetail: 'ou $29/consulta',
    tier: 'platform',
    tierLabel: 'Platform',
    icon: Sparkles,
    gradient: 'from-yellow-400 to-amber-300',
    features: ['11 mentes clonadas', 'Conselho estrategico', 'Multi-perspectiva', 'Historico decisoes'],
    squadBase: 'advisory-board (11)',
    status: 'soon',
  },
  {
    id: 15,
    name: 'OpsAutomate',
    tagline: 'Operacoes no automatico',
    description: 'Conecta ClickUp, Slack e email — squad de ops automatiza seus processos internos.',
    price: '$99/mes',
    priceDetail: 'ate $299/mes',
    tier: 'platform',
    tierLabel: 'Platform',
    icon: Layers,
    gradient: 'from-cyan-400 to-sky-300',
    features: ['Integra ClickUp', 'Integra Slack', 'Automacao processos', 'Dashboard ops'],
    squadBase: 'ops (5) + hybrid-ops (9)',
    status: 'soon',
  },
  {
    id: 16,
    name: 'DesignSystem Gen',
    tagline: 'Design system em horas',
    description: 'Analisa sua marca e gera design system completo com tokens, componentes, Figma e codigo.',
    price: '$149/mes',
    priceDetail: 'ou $499 one-time',
    tier: 'platform',
    tierLabel: 'Platform',
    icon: Palette,
    gradient: 'from-rose-400 to-pink-300',
    features: ['Design tokens', 'Componentes React', 'Figma export', 'Brandbook completo'],
    squadBase: 'design-system (7) + design (8)',
    status: 'soon',
  },
  {
    id: 17,
    name: 'Playbook SaaS AI',
    tagline: 'Monte seu SaaS em 30 dias',
    description: 'Curso + templates + AIOS framework — aprenda a criar seu proprio SaaS com equipes de IA.',
    price: 'R$997',
    priceDetail: 'ou $47/mes comunidade',
    tier: 'playbook',
    tierLabel: 'Playbook',
    icon: Rocket,
    gradient: 'from-emerald-400 to-green-300',
    features: ['Framework AIOS', 'Templates prontos', 'Comunidade VIP', 'Suporte 30 dias'],
    squadBase: 'AIOS + squad-creator',
    status: 'soon',
  },
  {
    id: 18,
    name: 'Squad Templates',
    tagline: 'Squads por nicho',
    description: 'Marketplace de templates de squads por industria — restaurante, clinica, e-commerce, etc.',
    price: '$49',
    priceDetail: 'ate $199/template',
    tier: 'playbook',
    tierLabel: 'Playbook',
    icon: Globe,
    gradient: 'from-blue-400 to-indigo-300',
    features: ['Templates por nicho', 'Pronto pra usar', 'Customizavel', 'Documentacao inclusa'],
    squadBase: 'squad-creator-pro (7)',
    status: 'soon',
  },
  {
    id: 19,
    name: 'Zona de Genialidade',
    tagline: 'Descubra seu superpower',
    description: 'Assessment AI que descobre sua zona de genialidade e gera roadmap de carreira personalizado.',
    price: '$29',
    priceDetail: 'one-time',
    tier: 'playbook',
    tierLabel: 'Playbook',
    icon: Shield,
    gradient: 'from-violet-400 to-purple-300',
    features: ['Assessment completo', 'Zona de genialidade', 'Roadmap carreira', 'PDF exportavel'],
    squadBase: 'zona-genialidade (8)',
    status: 'soon',
  },
  {
    id: 20,
    name: 'WhatsApp Sales Bot',
    tagline: 'Vendas no WhatsApp 24/7',
    description: 'Bot que qualifica leads, agenda calls e faz follow-up automatico pelo WhatsApp.',
    price: '$39/mes',
    priceDetail: 'ate $99/mes',
    tier: 'playbook',
    tierLabel: 'Playbook',
    icon: Mic,
    gradient: 'from-green-500 to-emerald-400',
    features: ['Qualifica leads', 'Agenda automatico', 'Follow-up AI', 'Dashboard conversas'],
    squadBase: 'telecom-mvp (3) + closer',
    status: 'waitlist',
  },
];

const tierConfig: Record<Tier, { label: string; color: string; borderColor: string }> = {
  all: { label: 'Todos', color: 'text-white', borderColor: 'border-white/20' },
  quick: { label: 'Quick Wins', color: 'text-emerald-400', borderColor: 'border-emerald-500/30' },
  core: { label: 'Core Products', color: 'text-violet-400', borderColor: 'border-violet-500/30' },
  platform: { label: 'Platform', color: 'text-amber-400', borderColor: 'border-amber-500/30' },
  playbook: { label: 'Playbooks', color: 'text-sky-400', borderColor: 'border-sky-500/30' },
};

const statusConfig = {
  soon: { label: 'Em breve', bg: 'bg-white/5', text: 'text-white/50', border: 'border-white/10' },
  waitlist: { label: 'Lista de espera', bg: 'bg-[#00ff88]/10', text: 'text-[#00ff88]', border: 'border-[#00ff88]/20' },
  beta: { label: 'Beta', bg: 'bg-violet-500/10', text: 'text-violet-400', border: 'border-violet-500/20' },
};

function ProductCard({ product, index }: { product: Product; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const status = statusConfig[product.status];
  const Icon = product.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
      className="group relative"
    >
      <div className="relative h-full rounded-2xl border border-white/[0.06] bg-[#0a0a0a] p-6 transition-all duration-500 hover:border-white/[0.12] hover:bg-[#111] overflow-hidden">
        {/* Glow on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 rounded-2xl`} />

        {/* Header */}
        <div className="relative z-10 flex items-start justify-between mb-4">
          <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${product.gradient} bg-opacity-10`}>
            <Icon className="h-6 w-6 text-white" />
          </div>
          <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-medium border ${status.bg} ${status.text} ${status.border}`}>
            {status.label}
          </span>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-lg font-semibold text-white mb-1">{product.name}</h3>
          <p className="text-[#00ff88] text-sm font-medium mb-3">{product.tagline}</p>
          <p className="text-white/50 text-sm leading-relaxed mb-4">{product.description}</p>

          {/* Features */}
          <div className="space-y-1.5 mb-5">
            {product.features.map((feature) => (
              <div key={feature} className="flex items-center gap-2 text-xs text-white/40">
                <div className="h-1 w-1 rounded-full bg-[#00ff88]/50" />
                {feature}
              </div>
            ))}
          </div>

          {/* Price */}
          <div className="flex items-end justify-between pt-4 border-t border-white/[0.06]">
            <div>
              <span className="text-xl font-bold text-white">{product.price}</span>
              {product.priceDetail && (
                <span className="text-xs text-white/30 ml-2">{product.priceDetail}</span>
              )}
            </div>
            <div className="text-[10px] text-white/20 font-mono">{product.squadBase}</div>
          </div>

          {/* CTA */}
          <button
            onClick={() => {
              if (product.status === 'waitlist') {
                const el = document.getElementById('waitlist');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className={`mt-4 w-full rounded-xl py-2.5 text-sm font-medium transition-all duration-300 ${
              product.status === 'waitlist'
                ? 'bg-[#00ff88]/10 text-[#00ff88] border border-[#00ff88]/20 hover:bg-[#00ff88]/20'
                : 'bg-white/5 text-white/40 border border-white/10 cursor-default'
            }`}
          >
            {product.status === 'waitlist' ? 'Entrar na lista' : 'Em breve'}
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'tools-waitlist', lgpdConsent: true }),
      });
      setSubmitted(true);
    } catch {
      // Silent fail for MVP
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-8"
      >
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#00ff88]/10 mb-4">
          <Zap className="h-8 w-8 text-[#00ff88]" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">Voce esta na lista.</h3>
        <p className="text-white/50">Avisaremos quando as ferramentas estiverem disponiveis.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="seu@email.com"
        required
        className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 focus:border-[#00ff88]/50 focus:outline-none focus:ring-1 focus:ring-[#00ff88]/20 transition-all"
      />
      <button
        type="submit"
        disabled={loading}
        className="rounded-xl bg-[#00ff88] px-6 py-3 text-sm font-semibold text-black transition-all hover:bg-[#00ff88]/90 hover:shadow-[0_0_30px_rgba(0,255,136,0.3)] disabled:opacity-50"
      >
        {loading ? 'Entrando...' : 'Quero acesso antecipado'}
      </button>
    </form>
  );
}

export default function Tools() {
  const [activeTier, setActiveTier] = useState<Tier>('all');
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  const filtered = activeTier === 'all' ? products : products.filter((p) => p.tier === activeTier);

  const stats = [
    { value: '20', label: 'Ferramentas AI' },
    { value: '67', label: 'Squads prontos' },
    { value: '400+', label: 'Agentes' },
    { value: '$9', label: 'A partir de' },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/[0.06] bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
          <a href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#00ff88]/10">
              <Bot className="h-5 w-5 text-[#00ff88]" />
            </div>
            <span className="font-semibold text-white">MVP</span>
            <span className="text-[#00ff88] font-bold">Tools</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            <a href="/" className="text-sm text-white/50 hover:text-white transition-colors">Home</a>
            <a href="/tools" className="text-sm text-[#00ff88]">Ferramentas</a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-[#00ff88]/10 px-4 py-2 text-sm font-medium text-[#00ff88] border border-[#00ff88]/20 hover:bg-[#00ff88]/20 transition-all"
            >
              Falar com especialista
            </a>
          </div>

          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild>
              <button className="md:hidden p-2 text-white/70 hover:text-white">
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#0a0a0a] border-white/10 w-72">
              <SheetHeader>
                <SheetTitle className="text-white text-left">Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-4 mt-8">
                <SheetClose asChild>
                  <a href="/" className="text-white/70 hover:text-white py-2">Home</a>
                </SheetClose>
                <SheetClose asChild>
                  <a href="/tools" className="text-[#00ff88] py-2">Ferramentas</a>
                </SheetClose>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-[#00ff88] px-4 py-3 text-center text-sm font-semibold text-black mt-4"
                >
                  Falar com especialista
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      {/* Hero */}
      <section ref={heroRef} className="relative pt-32 pb-20 overflow-hidden">
        {/* Grid background */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(0,255,136,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />

        {/* Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[800px] bg-[#00ff88]/5 rounded-full blur-[120px]" />

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#00ff88]/20 bg-[#00ff88]/5 px-4 py-1.5 text-xs text-[#00ff88] mb-6">
              <Sparkles className="h-3.5 w-3.5" />
              20 ferramentas AI — Powered by 67 Squads
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
              <span className="text-white">O arsenal completo</span>
              <br />
              <span className="text-[#00ff88]" style={{ textShadow: '0 0 40px rgba(0,255,136,0.3)' }}>
                pra sua operacao.
              </span>
            </h1>

            <p className="mx-auto max-w-2xl text-lg text-white/50 mb-10">
              Cada ferramenta e alimentada por squads de IA especializados.
              Nao e template. Nao e prompt. Sao equipes inteiras trabalhando pra voce.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4"
                >
                  <div className="text-2xl font-bold text-[#00ff88]">{stat.value}</div>
                  <div className="text-xs text-white/40 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter + Products */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* Tier Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {(Object.keys(tierConfig) as Tier[]).map((tier) => (
              <button
                key={tier}
                onClick={() => setActiveTier(tier)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all border ${
                  activeTier === tier
                    ? `${tierConfig[tier].color} ${tierConfig[tier].borderColor} bg-white/5`
                    : 'text-white/40 border-transparent hover:text-white/60 hover:border-white/10'
                }`}
              >
                {tierConfig[tier].label}
                {tier !== 'all' && (
                  <span className="ml-1.5 text-[10px] opacity-50">
                    ({products.filter((p) => p.tier === tier).length})
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          >
            {filtered.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enterprise CTA */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="rounded-2xl border border-[#FFD700]/10 bg-gradient-to-br from-[#FFD700]/5 to-transparent p-8 md:p-12 text-center">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#FFD700]/10 mb-6">
              <Monitor className="h-7 w-7 text-[#FFD700]" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Quer tudo implementado na sua empresa?
            </h2>
            <p className="text-white/50 max-w-xl mx-auto mb-8">
              Nossas ferramentas sao a ponta do iceberg. Com implementacao enterprise,
              voce recebe squads completos operando dentro da sua estrutura. De R$30k a R$90k.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#FFD700] px-6 py-3 text-sm font-semibold text-black hover:bg-[#FFD700]/90 transition-all"
              >
                Falar sobre implementacao
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition-all"
              >
                Ver mais sobre nos
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist */}
      <section id="waitlist" className="py-20 border-t border-white/[0.06]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Acesso antecipado
          </h2>
          <p className="text-white/50 mb-8">
            Seja o primeiro a testar quando lancarmos. Sem spam. Sem compromisso.
          </p>
          <WaitlistForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Bot className="h-5 w-5 text-[#00ff88]" />
            <span className="text-sm text-white/30">Mais Vendas Pro &copy; 2026</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-white/30">
            <a href="/" className="hover:text-white/50 transition-colors">Home</a>
            <a href="/tools" className="hover:text-white/50 transition-colors">Ferramentas</a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white/50 transition-colors">Contato</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
