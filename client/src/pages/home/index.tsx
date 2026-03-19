import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useInView } from 'framer-motion';
import {
  ArrowRight, ArrowDown, ArrowLeft, Menu, Check, ChevronDown, Loader2, Zap, Users, Bot, Clock,
  DollarSign, TrendingUp, Search, Cpu, BarChart3, Shield, Flame, Gem, ShieldCheck,
  Stethoscope, Truck, Rocket, Triangle, Calendar, MessageSquare, X,
} from 'lucide-react';
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

const WHATSAPP_URL = 'https://wa.me/556291508399';
const CAL_URL = 'https://cal.com/mvp-system';

// ═══════════════════════════════════════════════════════════════════════════════
// SCORING (shared between client UI and server validation)
// ═══════════════════════════════════════════════════════════════════════════════

const REVENUE_SCORE: Record<string, number> = {
  '+R$10M': 30, 'R$2M-R$10M': 25, 'R$500k-R$2M': 20, 'R$100k-R$500k': 10, 'Ate R$100k': 5,
};
const TEAM_SCORE: Record<string, number> = { '30+': 15, '11-30': 12, '4-10': 8, '1-3': 3 };
const MATURITY_SCORE: Record<string, number> = {
  'Tenho equipe de IA': 15, 'Tenho automacoes': 12, 'Uso ChatGPT/Gemini': 5, 'Nunca usei': 2,
};
const TIMING_SCORE: Record<string, number> = {
  'Essa semana': 20, 'Este mes': 15, 'Proximos 3 meses': 5, 'So pesquisando': 2,
};
const SQUAD_MAP: Record<string, { name: string; saving: string }> = {
  'Marketing': { name: 'Content Engine + AI Reels', saving: '15k-30k' },
  'Vendas': { name: 'Sales Closer + Lead Hunter', saving: '20k-50k' },
  'RH': { name: 'Squad RH + Onboarding AI', saving: '10k-25k' },
  'Atendimento': { name: 'Squad Atendimento 24/7', saving: '12k-35k' },
  'Financeiro': { name: 'Squad Financeiro + BI', saving: '8k-20k' },
  'Operacoes': { name: 'Ops Squad + Automacao', saving: '15k-40k' },
};

function calcScore(a: { revenue: string; teamSize: string; aiMaturity: string; timing: string; freeText: string }) {
  let s = 0;
  s += REVENUE_SCORE[a.revenue] || 5;
  s += TEAM_SCORE[a.teamSize] || 3;
  s += MATURITY_SCORE[a.aiMaturity] || 2;
  s += TIMING_SCORE[a.timing] || 2;
  if (a.freeText.length > 50) s += 10; else if (a.freeText.length > 0) s += 3;
  return s;
}

function validatePhone(phone: string): boolean {
  return /^\d{10,11}$/.test(phone.replace(/[\s\-\(\)\.]/g, ''));
}

// ═══════════════════════════════════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════════════════════════════════

const founders = [
  { name: 'Pedro', role: 'O Mago', desc: 'Vendia o impossível. Transformava ideias em negócios reais antes de qualquer um entender.' },
  { name: 'Murillo', role: 'O Criador', desc: 'Construía o que ninguém comprava. Sistemas tão avançados que o mercado levava meses pra alcançar.' },
  { name: 'Rapha', role: 'O Governante', desc: 'Testava em empresas reais. Se não gerava resultado mensurável, não existia.' },
];

const pains = [
  { icon: Users, title: 'Depende de gente', desc: 'Um funcionário sai e leva junto metade do conhecimento. Turnover vira risco existencial.' },
  { icon: DollarSign, title: 'Paga caro pra operar', desc: 'Folha, encargos, ferramentas, treinamento. O custo de manter a máquina rodando só cresce.' },
  { icon: TrendingUp, title: 'Escalar = contratar', desc: 'Cada novo cliente exige mais gente. O modelo "cresce contratando" tem rendimento decrescente.' },
];

const scenarios = [
  {
    icon: Stethoscope, name: 'Clínica da Dra. Renata', segment: 'Saúde / Estética', revenue: 'R$1.2M/mês',
    before: { pain: '4 recepcionistas + 1 social media + 1 designer', cost: 'R$38k/mês em equipe' },
    after: { result: '90 posts/mês, 98% leads respondidos em <5min', cost: 'R$6k/mês com squads' },
    squads: ['content-engine', 'ai-reels', 'lead-hunter', 'copywriting-squad'],
    saving: 'R$384k/ano', roi: 'R$8,90 pra cada R$1',
  },
  {
    icon: Truck, name: 'Distribuidora do Marcos', segment: 'Distribuição', revenue: 'R$4M/mês',
    before: { pain: '3 vendedores + 2 RH + 1 analista', cost: 'R$82k/mês, turnover 40%' },
    after: { result: '1.400 prospecções/mês, turnover 12%, 3 dashboards real-time', cost: 'Payback em 15 dias' },
    squads: ['squad-comercial', 'sales-closer', 'squad-rh', 'data', 'ops'],
    saving: 'R$816k/ano', roi: 'Payback em 15 dias',
  },
  {
    icon: Rocket, name: 'Agência do Thiago', segment: 'Agência', revenue: 'R$300k/mês',
    before: { pain: '1 pessoa pra tudo, 14h/dia', cost: 'Limite de 8 clientes' },
    after: { result: '4h/dia estratégico, 20 clientes sem contratar', cost: 'Zero contratação nova' },
    squads: ['copywriting-squad', 'landing-page-squad', 'meta-ads-traffic', 'design', 'content-engine'],
    saving: 'R$180k/ano', roi: '2.5x clientes sem equipe',
  },
];

const products = [
  { icon: Shield, name: 'O Bunker', tagline: 'Entenda o poder da IA', step: 1 },
  { icon: Zap, name: 'A Primeira Missão', tagline: '1 squad em 5 dias', step: 2 },
  { icon: Flame, name: 'A Forja', tagline: '3-7 squads em 90 dias', step: 3 },
  { icon: Gem, name: 'O Arsenal', tagline: 'Operação total com IA', step: 4 },
];

const howSteps = [
  { icon: Search, num: '01', title: 'Diagnóstico', desc: 'Analisamos sua operação e mapeamos onde squads de IA geram mais impacto.' },
  { icon: Cpu, num: '02', title: 'Instalação', desc: 'Configuramos os squads na sua operação. Você não precisa entender de IA — a gente instala.' },
  { icon: BarChart3, num: '03', title: 'Resultado', desc: 'Em 20 dias você vê os números mudando. Menos custo, mais velocidade, mais margem.' },
];

const stats = [
  { value: 67, suffix: '+', label: 'squads prontos' },
  { value: 400, suffix: '+', label: 'agentes de IA' },
  { value: 20, suffix: ' dias', label: 'pra ver resultado' },
  { value: 90, suffix: ' dias', label: 'de garantia' },
];

const faqs = [
  { q: 'O que exatamente é um squad de IA?', a: 'Um squad é um conjunto de agentes de IA configurados pra executar tarefas específicas na sua empresa. Funciona como uma equipe dedicada, 24 horas por dia.' },
  { q: 'Preciso entender de tecnologia?', a: 'Não. A gente instala tudo. Você não precisa saber programar ou configurar IA.' },
  { q: 'Em quanto tempo vejo resultado?', a: 'Os primeiros squads estão operacionais em até 20 dias. Resultados mensuráveis aparecem já na primeira semana.' },
  { q: 'Funciona pro meu segmento?', a: 'Se sua empresa tem operação com pessoas, funciona. Temos squads pra mais de 15 segmentos diferentes.' },
  { q: 'E se não funcionar?', a: 'Garantia de 90 dias. Se os squads não atingirem as metas projetadas, você recebe 100% de volta.' },
  { q: 'Substitui minha equipe?', a: 'Não substitui — multiplica. Os squads assumem tarefas repetitivas, liberando sua equipe pro estratégico.' },
];

const quizQuestions = [
  { id: 'area', question: 'Qual área te dá mais dor de cabeça?', type: 'select' as const, options: ['Marketing', 'Vendas', 'RH', 'Atendimento', 'Financeiro', 'Operacoes'] },
  { id: 'teamSize', question: 'Quantas pessoas trabalham nessa area?', type: 'select' as const, options: ['1-3', '4-10', '11-30', '30+'] },
  { id: 'revenue', question: 'Quanto sua empresa fatura por mês?', type: 'select' as const, options: ['Ate R$100k', 'R$100k-R$500k', 'R$500k-R$2M', 'R$2M-R$10M', '+R$10M'] },
  { id: 'aiMaturity', question: 'Você já usa IA no dia a dia?', type: 'select' as const, options: ['Nunca usei', 'Uso ChatGPT/Gemini', 'Tenho automacoes', 'Tenho equipe de IA'] },
  { id: 'freeText', question: 'Se pudesse resolver UM problema com IA essa semana, qual seria?', type: 'textarea' as const },
  { id: 'timing', question: 'Quando gostaria de começar?', type: 'select' as const, options: ['Essa semana', 'Este mes', 'Proximos 3 meses', 'So pesquisando'] },
  { id: 'contact', question: 'Pra onde enviamos seu diagnóstico?', sub: 'Você recebe o resultado completo + squad recomendado no WhatsApp', type: 'contact' as const },
];

// ═══════════════════════════════════════════════════════════════════════════════
// COUNTER COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════

function Counter({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const startTime = Date.now();
    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setVal(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target]);
  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl sm:text-5xl font-semibold text-[#00C96E] font-mono">{val}{suffix}</p>
      <p className="text-white/40 text-sm mt-2">{label}</p>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// FAQ ITEM
// ═══════════════════════════════════════════════════════════════════════════════

function FAQItem({ q, a, open, toggle }: { q: string; a: string; open: boolean; toggle: () => void }) {
  return (
    <div className="border-b border-white/5 last:border-0">
      <button onClick={toggle} className="w-full flex items-center justify-between py-5 text-left cursor-pointer group">
        <span className="text-white font-medium text-base pr-4 group-hover:text-[#00C96E] transition-colors">{q}</span>
        <ChevronDown className={`w-4 h-4 text-white/40 flex-shrink-0 transition-transform ${open ? 'rotate-180 text-[#00C96E]' : ''}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
            <p className="text-white/70 text-sm leading-relaxed pb-5">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// SECTION WRAPPER
// ═══════════════════════════════════════════════════════════════════════════════

function Section({ id, children, className = '' }: { id?: string; children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={`relative z-20 py-20 sm:py-28 px-4 sm:px-6 ${className}`}
    >
      {children}
    </motion.section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// HOME
// ═══════════════════════════════════════════════════════════════════════════════

export default function Home() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: scrollRef, offset: ['start start', 'end start'] });
  const yHero = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Quiz state
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState({ area: '', teamSize: '', revenue: '', aiMaturity: '', freeText: '', timing: '', name: '', whatsapp: '' });
  const [quizSubmitting, setQuizSubmitting] = useState(false);
  const [quizResult, setQuizResult] = useState<{ squadName: string; area: string; teamSize: string; saving: string; score: number } | null>(null);
  const [phoneError, setPhoneError] = useState('');
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const currentQ = quizQuestions[quizStep];
  const totalSteps = quizQuestions.length;

  const getVal = useCallback((): string => {
    if (currentQ.id === 'contact') return quizAnswers.name;
    return (quizAnswers as any)[currentQ.id] || '';
  }, [currentQ, quizAnswers]);

  const canAdvance = (): boolean => {
    if (currentQ.type === 'contact') return quizAnswers.name.trim().length > 0 && quizAnswers.whatsapp.trim().length > 0;
    if (currentQ.type === 'textarea') return true;
    return getVal().trim().length > 0;
  };

  useEffect(() => {
    if (currentQ.type === 'contact') setTimeout(() => inputRef.current?.focus(), 300);
    if (currentQ.type === 'textarea') setTimeout(() => textareaRef.current?.focus(), 300);
  }, [quizStep, currentQ.type]);

  const updateQuiz = (key: string, value: string) => {
    setQuizAnswers(prev => ({ ...prev, [key]: value }));
    if (key === 'whatsapp') setPhoneError('');
  };

  const selectOption = (opt: string) => {
    updateQuiz(currentQ.id, opt);
    setTimeout(() => { if (quizStep < totalSteps - 1) setQuizStep(s => s + 1); }, 300);
  };

  const quizNext = () => {
    if (!canAdvance()) return;
    if (currentQ.type === 'contact' && !validatePhone(quizAnswers.whatsapp)) {
      setPhoneError('Formato inválido. Ex: (62) 99999-0000');
      return;
    }
    if (quizStep < totalSteps - 1) setQuizStep(s => s + 1);
    else submitQuiz();
  };

  const quizBack = () => { if (quizStep > 0) setQuizStep(s => s - 1); };

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && !e.shiftKey && canAdvance()) { e.preventDefault(); quizNext(); }
    };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [quizStep, quizAnswers]);

  const submitQuiz = async () => {
    if (!validatePhone(quizAnswers.whatsapp)) { setPhoneError('Formato inválido'); return; }
    setQuizSubmitting(true);
    const score = calcScore(quizAnswers);
    const temperatura = score >= 60 ? 'HOT' : score >= 30 ? 'WARM' : 'COLD';
    const squad = SQUAD_MAP[quizAnswers.area] || { name: 'Squad Personalizado', saving: '10k-30k' };

    try {
      await fetch('/api/quiz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...quizAnswers, score, temperatura, squadRecommended: squad.name }),
      });
    } catch { /* don't block */ }

    await new Promise(r => setTimeout(r, 2500));
    setQuizSubmitting(false);
    setQuizResult({ squadName: squad.name, area: quizAnswers.area, teamSize: quizAnswers.teamSize, saving: squad.saving, score });
  };

  const quizDone = !!quizResult;

  // ─── RENDER ─────────────────────────────────────────────────────────────────

  return (
    <div ref={scrollRef} className="relative min-h-screen bg-black text-white selection:bg-[#00C96E]/20">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/70 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 flex items-center justify-center bg-[#00C96E] rounded-md">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-black">
                <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="font-semibold tracking-tight text-white text-sm">Mais Vendas Pro</span>
          </a>

          <nav className="hidden md:flex gap-8 text-[13px] text-white/50">
            <button onClick={() => scrollTo('cenarios')} className="hover:text-white transition-colors">Cenários</button>
            <button onClick={() => scrollTo('como-funciona')} className="hover:text-white transition-colors">Como funciona</button>
            <button onClick={() => scrollTo('faq')} className="hover:text-white transition-colors">FAQ</button>
          </nav>

          <button onClick={() => scrollTo('quiz')} className="inline-flex items-center gap-2 px-4 py-2 bg-[#00C96E] rounded-lg font-semibold text-black text-sm hover:bg-[#00A85A] transition-colors">
            Diagnóstico gratuito
          </button>
        </div>
      </header>

      {/* ═══ HERO (compact) + QUIZ right below ═══ */}
      <section className="relative z-10 px-4 sm:px-6 pt-24 pb-8">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-[#00C96E]/5 rounded-full blur-[80px] sm:blur-[120px]" />
        </div>

        <div className="mx-auto max-w-4xl text-center relative mb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00C96E] animate-pulse" />
            <span className="text-white/50 text-xs font-mono tracking-wide">Squads de IA para empresas</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.08] text-white mb-4">
            Uma equipe de IA que <span className="text-[#00C96E]">trabalha 24h</span> por você
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-base md:text-lg text-white/60 max-w-xl mx-auto leading-relaxed">
            Sem CLT. Sem erro humano. Sem férias. +67 squads prontos, resultado em 20 dias.
          </motion.p>
        </div>

        {/* QUIZ — right below hero */}
        <motion.div
          id="quiz"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mx-auto max-w-xl relative"
        >
          {!quizResult && !quizSubmitting && (
            <div className="text-center mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-white mb-2">Descubra quanto a sua empresa perde sem IA</h2>
              <p className="text-white/50 text-sm">2 minutos. Diagnóstico + squad ideal + economia estimada — grátis no WhatsApp.</p>
            </div>
          )}

          {quizSubmitting ? (
            <div className="min-h-[320px] flex flex-col items-center justify-center">
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center gap-4" role="status" aria-live="polite">
                <Loader2 className="w-12 h-12 text-[#00C96E] animate-spin" />
                <p className="text-xl text-white">Calculando seu squad ideal...</p>
                <p className="text-sm text-white/40">Analisando {quizAnswers.area.toLowerCase()} + {quizAnswers.teamSize} pessoas</p>
              </motion.div>
            </div>
          ) : quizResult ? (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-lg mx-auto">
              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-full bg-[#00C96E]/10 border border-[#00C96E]/30 flex items-center justify-center mx-auto mb-4"><Check className="w-8 h-8 text-[#00C96E]" /></div>
                <h3 className="text-2xl font-semibold text-white mb-2">Seu squad ideal</h3>
              </div>
              <div className="border border-[#00C96E]/30 bg-white/[0.02] rounded-xl p-6 mb-6">
                <p className="text-[#00C96E] font-mono text-xs uppercase mb-1">Squad recomendado</p>
                <h4 className="text-xl font-semibold text-white mb-4">{quizResult.squadName}</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between"><span className="text-white/40">Area</span><span className="text-white">{quizResult.area}</span></div>
                  <div className="flex justify-between"><span className="text-white/40">Equipe atual</span><span className="text-white">{quizResult.teamSize} pessoas</span></div>
                  <div className="flex justify-between"><span className="text-white/40">Com squads, sua equipe foca no estratégico</span><span className="text-[#00C96E] font-semibold">+eficiencia</span></div>
                  <div className="h-px bg-white/5" />
                  <div className="flex justify-between"><span className="text-white/40">Economia estimada</span><span className="text-[#00C96E] font-semibold text-lg">R${quizResult.saving}/mes</span></div>
                </div>
              </div>
              <div className="bg-[#00C96E]/5 border border-[#00C96E]/20 rounded-xl p-4 mb-6 flex items-start gap-3">
                <MessageSquare className="text-[#00C96E] flex-shrink-0 mt-0.5" size={18} />
                <p className="text-white/70 text-sm">Seu squad gratuito será enviado no WhatsApp <strong className="text-white">{quizAnswers.whatsapp}</strong>.</p>
              </div>
              <a href={`${WHATSAPP_URL}?text=${encodeURIComponent(`Ola! Fiz o diagnostico e meu squad ideal e ${quizResult.squadName}. Quero agendar uma conversa.`)}`} className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#00C96E] text-black font-semibold rounded-lg hover:bg-[#00A85A] transition-colors">
                Quero acelerar — Falar com especialista <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-white/20 text-xs text-center mt-4">45 minutos | Diagnóstico gratuito | Sem compromisso</p>
            </motion.div>
          ) : (
            <div className="border border-white/5 bg-white/[0.02] rounded-2xl p-6 sm:p-8">
              {/* Progress */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-white/30 font-mono">{quizStep + 1} / {totalSteps}</span>
                </div>
                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                  <motion.div className="h-full bg-[#00C96E] rounded-full" animate={{ width: `${((quizStep + 1) / totalSteps) * 100}%` }} transition={{ duration: 0.3 }} />
                </div>
              </div>

              {/* Question */}
              <div className="min-h-[260px] flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  <motion.div key={quizStep} initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -60 }} transition={{ duration: 0.3 }} className="space-y-6">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-white">{currentQ.question}</h2>
                      {'sub' in currentQ && currentQ.sub && <p className="text-white/50 text-sm mt-2">{currentQ.sub}</p>}
                    </div>

                    {currentQ.type === 'select' && (
                      <div className="flex flex-col gap-2.5">
                        {currentQ.options!.map(opt => (
                          <button key={opt} onClick={() => selectOption(opt)} className={`w-full text-left px-5 py-3.5 rounded-lg border text-sm font-medium transition-all ${getVal() === opt ? 'border-[#00C96E] bg-[#00C96E]/10 text-[#00C96E]' : 'border-white/10 bg-white/[0.02] text-white/50 hover:text-white hover:border-white/20'}`}>
                            {opt}
                          </button>
                        ))}
                      </div>
                    )}

                    {currentQ.type === 'textarea' && (
                      <textarea ref={textareaRef} value={quizAnswers.freeText} onChange={e => updateQuiz('freeText', e.target.value)} placeholder="Descreva em poucas palavras..." rows={3} className="w-full bg-white/[0.02] border border-white/10 rounded-xl text-white placeholder:text-white/20 p-4 text-base outline-none focus:border-[#00C96E] transition-colors resize-none" />
                    )}

                    {currentQ.type === 'contact' && (
                      <div className="space-y-4">
                        <input ref={inputRef} type="text" value={quizAnswers.name} onChange={e => updateQuiz('name', e.target.value)} placeholder="Seu nome" autoComplete="name" className="w-full px-0 py-3 bg-transparent border-b-2 border-white/10 text-xl text-white placeholder:text-white/20 focus:outline-none focus:border-[#00C96E] transition-colors" />
                        <input type="tel" value={quizAnswers.whatsapp} onChange={e => updateQuiz('whatsapp', e.target.value)} placeholder="(00) 00000-0000" autoComplete="tel" className={`w-full px-0 py-3 bg-transparent border-b-2 text-xl text-white placeholder:text-white/20 focus:outline-none transition-colors ${phoneError ? 'border-[#EF4444] focus:border-[#EF4444]' : 'border-white/10 focus:border-[#00C96E]'}`} />
                        {phoneError && <p className="text-[#FF0066] text-sm" role="alert">{phoneError}</p>}
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Nav */}
              <div className="flex items-center justify-between mt-6">
                <div>{quizStep > 0 && <button onClick={quizBack} className="text-sm text-white/30 hover:text-white/60 transition-colors">Voltar</button>}</div>
                {currentQ.type !== 'select' && (
                  <button onClick={quizNext} disabled={!canAdvance()} className="inline-flex items-center gap-2 px-6 py-3 bg-[#00C96E] text-black text-sm font-semibold rounded-lg hover:bg-[#00A85A] transition-colors disabled:opacity-20 disabled:cursor-not-allowed">
                    {quizStep === totalSteps - 1 ? 'Enviar' : 'Continuar'} <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          )}
        </motion.div>
      </section>

      {/* ═══ REST OF PAGE — blur transition until quiz done ═══ */}
      <div className="relative">
        {/* Blur overlay that fades away after quiz completion */}
        <motion.div
          className="absolute inset-0 z-10 pointer-events-none"
          initial={false}
          animate={{ opacity: quizDone ? 0 : 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ display: quizDone ? 'none' : 'block' }}
        >
          {/* Top gradient fade from black (seamless) */}
          <div className="h-32 bg-gradient-to-b from-black to-transparent" />
          {/* Blur layer */}
          <div className="absolute inset-0 backdrop-blur-md bg-black/30" />
          {/* "Unlock" prompt */}
          <div className="absolute top-16 left-0 right-0 text-center z-20">
            <p className="text-white/40 text-sm">Preencha o diagnóstico acima para desbloquear o conteúdo completo</p>
            <button onClick={() => scrollTo('quiz')} className="mt-3 text-[#00C96E] text-sm font-medium hover:underline">
              ↑ Voltar ao diagnóstico
            </button>
          </div>
        </motion.div>

        {/* S2: STORY */}
        <Section>
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <Triangle className="text-[#00C96E] mx-auto mb-6" size={28} />
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4">Três founders. Um sistema.</h2>
            <p className="text-white/70 max-w-2xl mx-auto text-sm">A MaisVendas PRO nasceu quando três especialistas com perfis opostos descobriram que juntos conseguiam algo que nenhum deles faria sozinho.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {founders.map((f, i) => (
              <motion.div key={f.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 border border-white/5 bg-white/[0.02] rounded-xl hover:border-white/10 transition-colors">
                <span className="text-[#00C96E] font-mono text-xs">{f.role}</span>
                <h3 className="text-lg font-semibold text-white mt-2 mb-3">{f.name}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* S3: PAIN */}
      <Section className="border-t border-white/5">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <span className="font-mono text-[#00C96E] text-xs tracking-widest mb-3 block">/// O PROBLEMA</span>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Sua empresa ainda opera no modelo de 2015?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {pains.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-8 border border-white/5 bg-white/[0.02] rounded-xl text-center group hover:border-[#FF0066]/20 transition-colors">
                  <div className="w-14 h-14 rounded-xl bg-[#FF0066]/10 flex items-center justify-center mx-auto mb-5"><Icon className="text-[#FF0066]" size={24} /></div>
                  <h3 className="text-lg font-semibold text-white mb-3">{p.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{p.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* S4: SCENARIOS */}
      <Section id="cenarios" className="border-t border-white/5">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <span className="font-mono text-[#00C96E] text-xs tracking-widest mb-3 block">/// CENARIOS PROJETADOS</span>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4">Veja o que muda quando squads entram na operação</h2>
            <p className="text-white/40 text-sm">Cenários projetados com base nos nossos squads. Não são cases reais.</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {scenarios.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div key={s.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }} className="border border-white/5 bg-white/[0.02] rounded-xl overflow-hidden hover:border-white/10 transition-colors">
                  <div className="p-6 border-b border-white/5">
                    <div className="flex items-center gap-3 mb-1">
                      <div className="w-10 h-10 rounded-lg bg-[#00C96E]/10 flex items-center justify-center"><Icon className="text-[#00C96E]" size={18} /></div>
                      <div><h3 className="text-white font-semibold text-sm">{s.name}</h3><p className="text-white/40 text-xs">{s.segment} — {s.revenue}</p></div>
                    </div>
                  </div>
                  <div className="p-5 border-b border-white/5 bg-[#FF0066]/5">
                    <p className="text-[#FF0066] font-mono text-xs uppercase mb-1">Antes</p>
                    <p className="text-white/70 text-sm">{s.before.pain}</p>
                    <p className="text-white/40 text-xs mt-1">{s.before.cost}</p>
                  </div>
                  <div className="p-5 border-b border-white/5 bg-[#00C96E]/5">
                    <p className="text-[#00C96E] font-mono text-xs uppercase mb-1">Depois</p>
                    <p className="text-white/70 text-sm">{s.after.result}</p>
                    <p className="text-white/40 text-xs mt-1">{s.after.cost}</p>
                  </div>
                  <div className="p-5 border-b border-white/5">
                    <div className="flex flex-wrap gap-1.5">{s.squads.map(sq => <span key={sq} className="text-xs px-2 py-0.5 rounded-full bg-[#00C96E]/10 text-[#00C96E] border border-[#00C96E]/20">{sq}</span>)}</div>
                  </div>
                  <div className="p-5 text-center">
                    <p className="text-2xl font-semibold text-[#00C96E] font-mono">{s.saving}</p>
                    <p className="text-white/40 text-xs mt-1">{s.roi}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <p className="text-center text-white/20 text-xs mt-8">* Cenários projetados com base na capacidade dos squads. Resultados reais podem variar.</p>
        </div>
      </Section>

      {/* S5: JOURNEY */}
      <Section className="border-t border-white/5">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <span className="font-mono text-[#00C96E] text-xs tracking-widest mb-3 block">/// SUA JORNADA</span>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4">Cada passo prova o próximo</h2>
            <p className="text-white/70 max-w-lg mx-auto text-sm">Você não precisa de tudo de uma vez. Comece entendendo. Teste com uma missão. Escale na Forja. Domine com o Arsenal.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {products.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div key={p.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 border border-white/5 bg-white/[0.02] rounded-xl relative group hover:border-[#00C96E]/20 transition-colors">
                  <span className="absolute top-4 right-4 text-xs font-mono text-white/20">{String(p.step).padStart(2, '0')}</span>
                  <div className="w-12 h-12 rounded-xl bg-[#00C96E]/10 flex items-center justify-center mb-4"><Icon className="text-[#00C96E]" size={22} /></div>
                  <h3 className="text-lg font-semibold text-white mb-1">{p.name}</h3>
                  <p className="text-[#00C96E] text-sm mb-4">{p.tagline}</p>
                  <button disabled className="w-full py-2.5 rounded-lg border border-white/5 text-white/30 text-sm cursor-not-allowed">Em breve</button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* S6: HOW IT WORKS */}
      <Section id="como-funciona" className="border-t border-white/5">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <span className="font-mono text-[#00C96E] text-xs tracking-widest mb-3 block">/// PROCESSO</span>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">3 passos. Resultado em 20 dias.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {howSteps.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div key={s.num} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }} className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-[#00C96E]/10 border border-[#00C96E]/20 flex items-center justify-center mx-auto mb-5"><Icon className="text-[#00C96E]" size={28} /></div>
                  <span className="text-[#00C96E] font-mono text-xs">{s.num}</span>
                  <h3 className="text-xl font-semibold text-white mt-2 mb-3">{s.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{s.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* S7: NUMBERS */}
      <Section className="border-t border-white/5">
        <div className="mx-auto max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
          {stats.map(s => <Counter key={s.label} target={s.value} suffix={s.suffix} label={s.label} />)}
        </div>
      </Section>

      {/* S8: QUIZ */}
      <Section id="quiz" className="border-t border-white/5">
        <div className="mx-auto max-w-xl">
          {!quizResult && !quizSubmitting && (
            <div className="text-center mb-10">
              <span className="font-mono text-[#00C96E] text-xs tracking-widest mb-3 block">/// DIAGNOSTICO GRATUITO</span>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-3">Descubra quanto a sua empresa perde sem IA</h2>
              <p className="text-white/70 text-sm max-w-md mx-auto">Em 2 minutos voce recebe: o diagnostico da sua operacao, o squad ideal pro seu caso e a economia estimada por mes.</p>
            </div>
          )}

          {quizSubmitting ? (
            <div className="min-h-[40vh] flex flex-col items-center justify-center">
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center gap-4" role="status" aria-live="polite">
                <Loader2 className="w-12 h-12 text-[#00C96E] animate-spin" />
                <p className="text-xl text-white">Calculando seu squad ideal...</p>
                <p className="text-sm text-white/40">Analisando {quizAnswers.area.toLowerCase()} + {quizAnswers.teamSize} pessoas</p>
              </motion.div>
            </div>
          ) : quizResult ? (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-lg mx-auto">
              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-full bg-[#00C96E]/10 border border-[#00C96E]/30 flex items-center justify-center mx-auto mb-4"><Check className="w-8 h-8 text-[#00C96E]" /></div>
                <h3 className="text-2xl font-semibold text-white mb-2">Seu squad ideal</h3>
              </div>
              <div className="border border-[#00C96E]/30 bg-white/[0.02] rounded-xl p-6 mb-6">
                <p className="text-[#00C96E] font-mono text-xs uppercase mb-1">Squad recomendado</p>
                <h4 className="text-xl font-semibold text-white mb-4">{quizResult.squadName}</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between"><span className="text-white/40">Area</span><span className="text-white">{quizResult.area}</span></div>
                  <div className="flex justify-between"><span className="text-white/40">Equipe atual</span><span className="text-white">{quizResult.teamSize} pessoas</span></div>
                  <div className="flex justify-between"><span className="text-white/40">Com squads, sua equipe foca no estratégico</span><span className="text-[#00C96E] font-semibold">+eficiencia</span></div>
                  <div className="h-px bg-white/5" />
                  <div className="flex justify-between"><span className="text-white/40">Economia estimada</span><span className="text-[#00C96E] font-semibold text-lg">R${quizResult.saving}/mes</span></div>
                </div>
              </div>
              <div className="bg-[#00C96E]/5 border border-[#00C96E]/20 rounded-xl p-4 mb-6 flex items-start gap-3">
                <MessageSquare className="text-[#00C96E] flex-shrink-0 mt-0.5" size={18} />
                <p className="text-white/70 text-sm">Seu squad gratuito será enviado no WhatsApp <strong className="text-white">{quizAnswers.whatsapp}</strong>.</p>
              </div>
              <a href={`${WHATSAPP_URL}?text=${encodeURIComponent(`Ola! Fiz o diagnostico e meu squad ideal e ${quizResult.squadName}. Quero agendar uma conversa.`)}`} className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#00C96E] text-black font-semibold rounded-lg hover:bg-[#00A85A] transition-colors">
                Quero acelerar — Falar com especialista <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-white/20 text-xs text-center mt-4">45 minutos | Diagnóstico gratuito | Sem compromisso</p>
            </motion.div>
          ) : (
            <>
              {/* Progress */}
              <div className="mb-10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-white/30 font-mono">{quizStep + 1} / {totalSteps}</span>
                </div>
                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                  <motion.div className="h-full bg-[#00C96E] rounded-full" animate={{ width: `${((quizStep + 1) / totalSteps) * 100}%` }} transition={{ duration: 0.3 }} />
                </div>
              </div>

              {/* Question */}
              <div className="min-h-[280px] flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  <motion.div key={quizStep} initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -60 }} transition={{ duration: 0.3 }} className="space-y-6">
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">{currentQ.question}</h2>
                      {'sub' in currentQ && currentQ.sub && <p className="text-white/70 text-sm mt-2">{currentQ.sub}</p>}
                    </div>

                    {currentQ.type === 'select' && (
                      <div className="flex flex-col gap-3">
                        {currentQ.options!.map(opt => (
                          <button key={opt} onClick={() => selectOption(opt)} className={`w-full text-left px-5 py-4 rounded-lg border text-sm font-medium transition-all ${getVal() === opt ? 'border-[#00C96E] bg-[#00C96E]/10 text-[#00C96E]' : 'border-white/10 bg-white/[0.02] text-white/50 hover:text-white hover:border-white/20'}`}>
                            {opt}
                          </button>
                        ))}
                      </div>
                    )}

                    {currentQ.type === 'textarea' && (
                      <textarea ref={textareaRef} value={quizAnswers.freeText} onChange={e => updateQuiz('freeText', e.target.value)} placeholder="Descreva em poucas palavras..." rows={3} className="w-full bg-white/[0.02] border border-white/10 rounded-xl text-white placeholder:text-white/20 p-4 text-base outline-none focus:border-[#00C96E] transition-colors resize-none" />
                    )}

                    {currentQ.type === 'contact' && (
                      <div className="space-y-4">
                        <input ref={inputRef} type="text" value={quizAnswers.name} onChange={e => updateQuiz('name', e.target.value)} placeholder="Seu nome" autoComplete="name" className="w-full px-0 py-3 bg-transparent border-b-2 border-white/10 text-xl text-white placeholder:text-white/20 focus:outline-none focus:border-[#00C96E] transition-colors" />
                        <input type="tel" value={quizAnswers.whatsapp} onChange={e => updateQuiz('whatsapp', e.target.value)} placeholder="(00) 00000-0000" autoComplete="tel" className={`w-full px-0 py-3 bg-transparent border-b-2 text-xl text-white placeholder:text-white/20 focus:outline-none transition-colors ${phoneError ? 'border-[#EF4444] focus:border-[#EF4444]' : 'border-white/10 focus:border-[#00C96E]'}`} />
                        {phoneError && <p className="text-[#FF0066] text-sm" role="alert">{phoneError}</p>}
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Nav */}
              <div className="flex items-center justify-between mt-8">
                <div>{quizStep > 0 && <button onClick={quizBack} className="text-sm text-white/30 hover:text-white/60 transition-colors">Voltar</button>}</div>
                {currentQ.type !== 'select' && (
                  <button onClick={quizNext} disabled={!canAdvance()} className="inline-flex items-center gap-2 px-6 py-3 bg-[#00C96E] text-black text-sm font-semibold rounded-lg hover:bg-[#00A85A] transition-colors disabled:opacity-20 disabled:cursor-not-allowed">
                    {quizStep === totalSteps - 1 ? 'Enviar' : 'Continuar'} <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </Section>

      {/* S9: GUARANTEE */}
      <Section className="border-t border-white/5">
        <div className="mx-auto max-w-3xl">
          <div className="border border-[#00C96E]/20 bg-white/[0.02] rounded-2xl p-8 sm:p-12 text-center">
            <div className="w-20 h-20 rounded-full bg-[#00C96E]/10 border-2 border-[#00C96E]/30 flex items-center justify-center mx-auto mb-6"><ShieldCheck className="text-[#00C96E]" size={36} /></div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4">90 dias ou o seu dinheiro de volta</h2>
            <p className="text-white/70 text-base leading-relaxed max-w-xl mx-auto mb-4">Se em 90 dias os squads não gerarem o resultado projetado, você recebe 100% do investimento de volta. Sem burocracia.</p>
            <p className="text-white/40 text-sm">A gente só ganha quando você ganha.</p>
          </div>
        </div>
      </Section>

      {/* S10: FAQ */}
      <Section id="faq" className="border-t border-white/5">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Perguntas frequentes</h2>
          </div>
          <div className="border border-white/5 bg-white/[0.02] rounded-xl px-6 sm:px-8">
            {faqs.map((f, i) => <FAQItem key={f.q} q={f.q} a={f.a} open={faqOpen === i} toggle={() => setFaqOpen(faqOpen === i ? null : i)} />)}
          </div>
        </div>
      </Section>

      {/* S11: FINAL CTA */}
      <Section className="border-t border-white/5">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white mb-4 leading-tight">Sua empresa com IA rodando <span className="text-[#00C96E]">em 20 dias</span></h2>
          <p className="text-white/70 text-base mb-8">2 minutos. Diagnóstico gratuito. Economia estimada. Tudo direto no seu WhatsApp.</p>
          <button onClick={() => scrollTo('quiz')} className="inline-flex items-center gap-2 px-10 py-4 bg-[#00C96E] text-black text-lg font-semibold rounded-lg hover:bg-[#00A85A] transition-colors">
            Fazer meu diagnóstico gratuito
          </button>
          <p className="text-white/20 text-sm mt-6">Apenas 5 vagas simultâneas por mês</p>
        </div>
      </Section>

      </div>{/* end blur wrapper */}

      {/* FOOTER */}
      <footer className="py-8 border-t border-white/5 px-4 sm:px-6">
        <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-md bg-[#00C96E] flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-black"><path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </div>
            <span className="text-sm text-white/40">Mais Vendas Pro</span>
          </div>
          <span className="text-xs text-white/20">&copy; 2026 Mais Vendas Pro</span>
        </div>
      </footer>
    </div>
  );
}
