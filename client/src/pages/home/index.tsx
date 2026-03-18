import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, Menu, Check, ChevronDown, Loader2, Zap, Users, Bot, Clock } from 'lucide-react';
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

const WHATSAPP_URL = 'https://wa.me/556291508399';

const investmentRanges = [
  'Menos de R$ 10k',
  'R$ 10k — R$ 50k',
  'R$ 50k — R$ 200k',
  'R$ 200k — R$ 500k',
  'Acima de R$ 500k',
];

const wouldInvestRanges = [
  'R$ 5k — R$ 15k/mês',
  'R$ 15k — R$ 50k/mês',
  'R$ 50k — R$ 150k/mês',
  'Acima de R$ 150k/mês',
];

const steps = [
  {
    num: '01',
    title: 'Diagnóstico',
    desc: 'Mapeamos gargalos, processos e oportunidades de automação na sua operação.',
  },
  {
    num: '02',
    title: 'Implementação',
    desc: 'Configuramos equipes de IA sob medida — agentes que executam tarefas reais do seu negócio.',
  },
  {
    num: '03',
    title: 'Treinamento',
    desc: 'Seu time aprende a operar, ajustar e escalar os agentes sem depender de nós.',
  },
  {
    num: '04',
    title: 'Acompanhamento',
    desc: 'Suporte contínuo, métricas de ROI e expansão progressiva dos agentes.',
  },
];

const stats = [
  { value: '47', label: 'Squads operacionais', icon: Users },
  { value: '27+', label: 'Mentes clonadas', icon: Zap },
  { value: '400+', label: 'Agentes especializados', icon: Bot },
  { value: '20', label: 'Dias para deploy', icon: Clock },
];

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254;
}

function validatePhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, '');
  return digits.length >= 10 && digits.length <= 15;
}

// --- ROI calculation based on form answers ---
function calculateROI(invested: string, wouldInvest: string): { savings: string; multiplier: string } {
  const investedMap: Record<string, number> = {
    'Menos de R$ 10k': 8000,
    'R$ 10k — R$ 50k': 30000,
    'R$ 50k — R$ 200k': 120000,
    'R$ 200k — R$ 500k': 350000,
    'Acima de R$ 500k': 600000,
  };
  const wouldInvestMap: Record<string, number> = {
    'R$ 5k — R$ 15k/mês': 10000,
    'R$ 15k — R$ 50k/mês': 30000,
    'R$ 50k — R$ 150k/mês': 90000,
    'Acima de R$ 150k/mês': 200000,
  };

  const pastInvestment = investedMap[invested] || 30000;
  const monthlyBudget = wouldInvestMap[wouldInvest] || 10000;

  // Conservative ROI: 2.5-4x over 12 months vs traditional team
  const annualCost = monthlyBudget * 12;
  const traditionalCost = annualCost * 3.2; // Traditional equivalent costs ~3.2x more
  const savings = traditionalCost - annualCost;
  const multiplier = (traditionalCost / annualCost).toFixed(1);

  const formattedSavings = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0,
  }).format(savings);

  return { savings: formattedSavings, multiplier: `${multiplier}x` };
}

// --- Typeform question definitions ---
interface TypeformQuestion {
  id: string;
  field: string;
  title: string;
  subtitle?: string;
  type: 'text' | 'email' | 'tel' | 'buttons' | 'range-buttons';
  required: boolean;
  placeholder?: string;
  options?: string[];
  skipLabel?: string;
}

const questions: TypeformQuestion[] = [
  {
    id: 'name',
    field: 'name',
    title: 'Como podemos te chamar?',
    type: 'text',
    required: true,
    placeholder: 'Seu nome',
  },
  {
    id: 'email',
    field: 'email',
    title: 'Qual seu email?',
    subtitle: 'Enviaremos seu diagnóstico por aqui.',
    type: 'email',
    required: true,
    placeholder: 'seu@email.com',
  },
  {
    id: 'phone',
    field: 'phone',
    title: 'Seu WhatsApp?',
    subtitle: 'Para contato rápido sobre seu diagnóstico.',
    type: 'tel',
    required: true,
    placeholder: '(00) 00000-0000',
  },
  {
    id: 'company',
    field: 'company',
    title: 'Nome da empresa?',
    type: 'text',
    required: false,
    placeholder: 'Nome da sua empresa',
    skipLabel: 'Pular',
  },
  {
    id: 'usesAI',
    field: 'usesAI',
    title: 'Já usa IA para automatizar processos?',
    type: 'buttons',
    required: true,
    options: ['Sim', 'Não'],
  },
  {
    id: 'invested',
    field: 'invested',
    title: 'Quanto já investiu em tecnologia?',
    subtitle: 'Valor aproximado acumulado.',
    type: 'range-buttons',
    required: true,
    options: investmentRanges,
  },
  {
    id: 'wouldInvest',
    field: 'wouldInvest',
    title: 'Quanto investiria em automação com IA?',
    subtitle: 'Investimento mensal estimado.',
    type: 'range-buttons',
    required: true,
    options: wouldInvestRanges,
  },
];

export default function Home() {
  const scrollRef = useRef(null);
  const formSectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start start', 'end start'],
  });

  const yHero = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [formError, setFormError] = useState('');
  const [lgpdConsent, setLgpdConsent] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = back
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    instagram: '',
    usesAI: '',
    invested: '',
    wouldInvest: '',
  });

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!formData.name) {
      setFormError('Nome é obrigatório.');
      return;
    }
    if (!formData.email || !validateEmail(formData.email)) {
      setFormError('Email inválido.');
      return;
    }
    if (!formData.phone || !validatePhone(formData.phone)) {
      setFormError('Telefone inválido. Use formato (00) 00000-0000.');
      return;
    }
    if (!lgpdConsent) {
      setFormError('Você precisa aceitar a política de privacidade.');
      return;
    }

    setFormLoading(true);
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, lgpdConsent }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({ error: 'Erro ao enviar' }));
        setFormError(data.error || 'Erro ao enviar. Tente novamente.');
        return;
      }

      setFormSubmitted(true);
    } catch {
      setFormError('Erro de conexão. Tente novamente.');
    } finally {
      setFormLoading(false);
    }
  };

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // --- Typeform step logic ---
  const currentQuestion = questions[currentStep];
  const isLastStep = currentStep === questions.length - 1;
  const progress = ((currentStep + 1) / questions.length) * 100;

  const currentValue = formData[currentQuestion?.field as keyof typeof formData] || '';

  const canContinue = useCallback(() => {
    if (!currentQuestion) return false;
    if (!currentQuestion.required && !currentValue) return true; // optional can skip
    if (currentQuestion.required && !currentValue) return false;
    if (currentQuestion.type === 'email' && !validateEmail(currentValue)) return false;
    if (currentQuestion.type === 'tel' && !validatePhone(currentValue)) return false;
    return true;
  }, [currentQuestion, currentValue]);

  const goNext = useCallback(() => {
    if (!canContinue()) return;
    if (isLastStep) return;
    setDirection(1);
    setCurrentStep((s) => s + 1);
    setFormError('');
  }, [canContinue, isLastStep]);

  const goBack = () => {
    if (currentStep === 0) return;
    setDirection(-1);
    setCurrentStep((s) => s - 1);
    setFormError('');
  };

  // Auto-advance on button selection
  useEffect(() => {
    if (
      currentQuestion &&
      (currentQuestion.type === 'buttons' || currentQuestion.type === 'range-buttons') &&
      currentValue &&
      !isLastStep
    ) {
      const timer = setTimeout(() => {
        setDirection(1);
        setCurrentStep((s) => s + 1);
        setFormError('');
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [currentValue, currentQuestion, isLastStep]);

  // Handle Enter key for text/email/tel inputs
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (canContinue()) goNext();
    }
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
    }),
  };

  const roi = formSubmitted ? calculateROI(formData.invested, formData.wouldInvest) : null;

  return (
    <div ref={scrollRef} className="relative min-h-screen bg-black text-white selection:bg-[#00C96E]/20">
      {/* --- HEADER --- */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/70 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 group">
            <div className="relative w-8 h-8 flex items-center justify-center bg-[#00C96E] rounded-md">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                className="text-black"
              >
                <path
                  d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="font-semibold tracking-tight text-white text-sm">
              Mais Vendas Pro
            </span>
          </a>

          {/* Nav links only show after form submitted */}
          {formSubmitted && (
            <nav className="hidden md:flex gap-8 text-[13px] text-white/50">
              <button onClick={() => scrollTo('como-funciona')} className="hover:text-white transition-colors">
                Como funciona
              </button>
              <button onClick={() => scrollTo('sistema')} className="hover:text-white transition-colors">
                O sistema
              </button>
              <button onClick={() => scrollTo('cta')} className="hover:text-white transition-colors">
                Contato
              </button>
            </nav>
          )}

          <div className="flex items-center gap-3">
            {formSubmitted && (
              <Sheet>
                <SheetTrigger className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/70 transition hover:text-white">
                  <Menu className="h-4 w-4" />
                </SheetTrigger>
                <SheetContent side="right" className="bg-black border-white/10 text-white">
                  <SheetHeader>
                    <SheetTitle className="text-xs uppercase tracking-[0.3em] text-white/40">Menu</SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col gap-2 px-4 pb-6">
                    <SheetClose asChild>
                      <button
                        onClick={() => scrollTo('como-funciona')}
                        className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-left text-sm text-white/70 hover:text-white"
                      >
                        Como funciona
                      </button>
                    </SheetClose>
                    <SheetClose asChild>
                      <button
                        onClick={() => scrollTo('sistema')}
                        className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-left text-sm text-white/70 hover:text-white"
                      >
                        O sistema
                      </button>
                    </SheetClose>
                    <SheetClose asChild>
                      <button
                        onClick={() => scrollTo('cta')}
                        className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-left text-sm text-white/70 hover:text-white"
                      >
                        Contato
                      </button>
                    </SheetClose>
                  </div>
                  <div className="mt-auto px-4 pb-6">
                    <SheetClose asChild>
                      <a
                        href={`${WHATSAPP_URL}?text=${encodeURIComponent('Quero agendar meu diagnóstico gratuito')}`}
                        className="w-full block rounded-lg bg-[#00C96E] px-5 py-3 text-sm font-semibold text-black text-center"
                      >
                        Agendar diagnóstico
                      </a>
                    </SheetClose>
                  </div>
                </SheetContent>
              </Sheet>
            )}
            <button
              onClick={() => scrollTo('qualify')}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-[#00C96E] rounded-lg text-sm font-semibold text-black hover:bg-[#00A85A] transition-colors"
            >
              Começar
            </button>
          </div>
        </div>
      </header>

      {/* --- HERO --- */}
      <motion.section
        id="top"
        className="relative z-10 min-h-[80vh] flex flex-col justify-center px-4 sm:px-6 pt-24 pb-12"
        style={{ y: yHero, opacity: opacityHero }}
      >
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00C96E] animate-pulse" />
            <span className="text-white/50 text-xs font-mono tracking-wide">Enterprise AI Infrastructure</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05] text-white mb-6"
          >
            Uma equipe de IA que{' '}
            <span className="text-[#00C96E]">opera</span>
            <br className="hidden sm:block" />
            {' '}seu negócio 24/7.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white/40 max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Implantamos agentes inteligentes que executam tarefas reais —
            vendas, suporte, operações — e custam menos que 1 funcionário CLT.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <button
              onClick={() => scrollTo('qualify')}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#00C96E] text-black text-sm font-semibold rounded-lg hover:bg-[#00A85A] transition-colors"
            >
              Receber meu diagnóstico gratuito
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* --- TYPEFORM QUALIFICATION --- */}
      <section id="qualify" ref={formSectionRef} className="relative z-20 py-16 sm:py-24 px-4 sm:px-6">
        <div className="mx-auto max-w-xl">
          <AnimatePresence mode="wait">
            {!formSubmitted ? (
              <motion.div
                key="typeform"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                {/* Progress bar */}
                <div className="mb-12">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-white/30 font-mono">
                      {currentStep + 1} / {questions.length}
                    </span>
                    <span className="text-xs text-white/30 font-mono">
                      {Math.round(progress)}%
                    </span>
                  </div>
                  <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-[#00C96E] rounded-full"
                      initial={false}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                    />
                  </div>
                </div>

                {/* Question area */}
                <div className="min-h-[320px] flex flex-col justify-center">
                  <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                      key={currentStep}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white mb-3">
                        {currentQuestion.title}
                      </h2>
                      {currentQuestion.subtitle && (
                        <p className="text-white/40 text-sm mb-8">{currentQuestion.subtitle}</p>
                      )}
                      {!currentQuestion.subtitle && <div className="mb-8" />}

                      {/* Text / Email / Tel inputs */}
                      {(currentQuestion.type === 'text' ||
                        currentQuestion.type === 'email' ||
                        currentQuestion.type === 'tel') && (
                        <input
                          type={currentQuestion.type}
                          autoFocus
                          maxLength={currentQuestion.type === 'email' ? 254 : currentQuestion.type === 'tel' ? 20 : 200}
                          value={currentValue}
                          onChange={(e) => updateField(currentQuestion.field, e.target.value)}
                          onKeyDown={handleKeyDown}
                          className="w-full px-0 py-3 bg-transparent border-b-2 border-white/10 text-xl text-white placeholder:text-white/20 focus:outline-none focus:border-[#00C96E] transition-colors"
                          placeholder={currentQuestion.placeholder}
                        />
                      )}

                      {/* Sim/Não buttons */}
                      {currentQuestion.type === 'buttons' && currentQuestion.options && (
                        <div className="flex gap-4">
                          {currentQuestion.options.map((opt) => (
                            <button
                              key={opt}
                              type="button"
                              onClick={() => updateField(currentQuestion.field, opt)}
                              className={`flex-1 px-6 py-4 rounded-lg border text-base font-medium transition-all ${
                                currentValue === opt
                                  ? 'border-[#00C96E] bg-[#00C96E]/10 text-[#00C96E]'
                                  : 'border-white/10 bg-white/[0.02] text-white/50 hover:text-white hover:border-white/20'
                              }`}
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      )}

                      {/* Range buttons */}
                      {currentQuestion.type === 'range-buttons' && currentQuestion.options && (
                        <div className="flex flex-col gap-3">
                          {currentQuestion.options.map((range) => (
                            <button
                              key={range}
                              type="button"
                              onClick={() => updateField(currentQuestion.field, range)}
                              className={`w-full text-left px-5 py-4 rounded-lg border text-sm font-medium transition-all ${
                                currentValue === range
                                  ? 'border-[#00C96E] bg-[#00C96E]/10 text-[#00C96E]'
                                  : 'border-white/10 bg-white/[0.02] text-white/50 hover:text-white hover:border-white/20'
                              }`}
                            >
                              {range}
                            </button>
                          ))}
                        </div>
                      )}

                      {/* LGPD on last step */}
                      {isLastStep && currentValue && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="mt-8"
                        >
                          <label className="flex items-start gap-3 cursor-pointer group">
                            <div
                              className={`mt-0.5 w-5 h-5 rounded border flex items-center justify-center shrink-0 transition-colors ${
                                lgpdConsent
                                  ? 'bg-[#00C96E] border-[#00C96E]'
                                  : 'border-white/20 bg-white/5 group-hover:border-white/40'
                              }`}
                              onClick={() => setLgpdConsent(!lgpdConsent)}
                            >
                              {lgpdConsent && <Check className="w-3 h-3 text-black" />}
                            </div>
                            <span className="text-xs text-white/40 leading-relaxed" onClick={() => setLgpdConsent(!lgpdConsent)}>
                              Concordo com o tratamento dos meus dados pessoais conforme a{' '}
                              <span className="text-white/60 underline">Lei Geral de Proteção de Dados (LGPD)</span>.
                              Seus dados serão utilizados exclusivamente para contato comercial e envio do diagnóstico.
                            </span>
                          </label>
                        </motion.div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Error message */}
                {formError && (
                  <p className="text-sm text-red-400 mb-4">{formError}</p>
                )}

                {/* Navigation */}
                <div className="flex items-center justify-between mt-8">
                  <div>
                    {currentStep > 0 && (
                      <button
                        type="button"
                        onClick={goBack}
                        className="text-sm text-white/30 hover:text-white/60 transition-colors"
                      >
                        Voltar
                      </button>
                    )}
                  </div>

                  <div className="flex items-center gap-3">
                    {!currentQuestion.required && currentQuestion.skipLabel && (
                      <button
                        type="button"
                        onClick={() => {
                          setDirection(1);
                          setCurrentStep((s) => s + 1);
                          setFormError('');
                        }}
                        className="text-sm text-white/30 hover:text-white/60 transition-colors"
                      >
                        {currentQuestion.skipLabel}
                      </button>
                    )}

                    {/* Show continue for text inputs, or final submit */}
                    {isLastStep && currentValue ? (
                      <form onSubmit={handleSubmit}>
                        <button
                          type="submit"
                          disabled={formLoading || !lgpdConsent}
                          className="inline-flex items-center gap-2 px-8 py-3 bg-[#00C96E] text-black text-sm font-semibold rounded-lg hover:bg-[#00A85A] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                          {formLoading ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin" />
                              Enviando...
                            </>
                          ) : (
                            <>
                              Ver meu diagnóstico
                              <ArrowRight className="w-4 h-4" />
                            </>
                          )}
                        </button>
                      </form>
                    ) : (
                      (currentQuestion.type === 'text' ||
                        currentQuestion.type === 'email' ||
                        currentQuestion.type === 'tel') && (
                        <button
                          type="button"
                          onClick={goNext}
                          disabled={!canContinue()}
                          className="inline-flex items-center gap-2 px-6 py-3 bg-[#00C96E] text-black text-sm font-semibold rounded-lg hover:bg-[#00A85A] transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
                        >
                          Continuar
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      )
                    )}
                  </div>
                </div>
              </motion.div>
            ) : (
              /* --- POST-FORM: Unlocked content starts here --- */
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#00C96E]/10 border border-[#00C96E]/30 flex items-center justify-center">
                  <Check className="w-8 h-8 text-[#00C96E]" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-2">
                  Obrigado, {formData.name}!
                </h3>
                <p className="text-white/40 mb-10 max-w-md mx-auto">
                  Aqui está sua análise preliminar.
                </p>

                {/* Mini ROI Calculator result */}
                {roi && (
                  <div className="border border-white/10 bg-white/[0.02] rounded-xl p-8 mb-8 text-left">
                    <span className="font-mono text-[#00C96E] text-xs tracking-widest mb-4 block">
                      /// SEU ROI ESTIMADO
                    </span>
                    <div className="grid grid-cols-2 gap-6 mb-6">
                      <div>
                        <p className="text-xs text-white/40 mb-1">Economia anual estimada</p>
                        <p className="text-2xl sm:text-3xl font-semibold text-[#00C96E] font-mono">
                          {roi.savings}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-white/40 mb-1">Retorno sobre investimento</p>
                        <p className="text-2xl sm:text-3xl font-semibold text-white font-mono">
                          {roi.multiplier}
                        </p>
                      </div>
                    </div>
                    <p className="text-xs text-white/30 mb-6">
                      * Estimativa baseada em custos médios de equipes tradicionais vs. automação com IA.
                      Resultados reais podem variar. Diagnóstico completo é gratuito.
                    </p>
                    <a
                      href={`${WHATSAPP_URL}?text=${encodeURIComponent(`Olá! Sou ${formData.name}${formData.company ? ` da ${formData.company}` : ''}. Quero agendar meu diagnóstico completo gratuito.`)}`}
                      className="inline-flex items-center gap-2 px-8 py-4 bg-[#00C96E] text-black text-sm font-semibold rounded-lg hover:bg-[#00A85A] transition-colors"
                    >
                      Agendar diagnóstico completo gratuito
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                )}

                <button
                  onClick={() => scrollTo('como-funciona')}
                  className="text-white/40 text-sm hover:text-white transition-colors"
                >
                  Continue explorando <ChevronDown className="w-4 h-4 inline" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* === CONTENT LOCKED UNTIL FORM SUBMITTED === */}
      {formSubmitted && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* --- COMO FUNCIONA --- */}
          <section id="como-funciona" className="relative z-20 py-24 px-4 sm:px-6 border-t border-white/5">
            <div className="mx-auto max-w-5xl">
              <div className="text-center mb-16">
                <span className="font-mono text-[#00C96E] text-xs tracking-widest mb-3 block">/// PROCESSO</span>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
                  Do diagnóstico à operação autônoma
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {steps.map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="relative p-6 border border-white/5 bg-white/[0.02] rounded-xl group hover:border-white/10 transition-colors"
                  >
                    <span className="font-mono text-[#00C96E]/40 text-xs mb-4 block">{step.num}</span>
                    <h3 className="text-base font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-sm text-white/40 leading-relaxed">{step.desc}</p>
                    {i < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-white/10" />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* --- O SISTEMA --- */}
          <section id="sistema" className="relative z-20 py-24 px-4 sm:px-6 border-t border-white/5">
            <div className="mx-auto max-w-5xl">
              <div className="text-center mb-16">
                <span className="font-mono text-[#00C96E] text-xs tracking-widest mb-3 block">/// O SISTEMA</span>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
                  Infraestrutura que opera em escala
                </h2>
                <p className="text-white/40 max-w-xl mx-auto">
                  Um ecossistema de agentes especializados, treinados com mentes reais de mercado,
                  prontos para integrar à sua operação.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.4 }}
                      className="p-6 border border-white/5 bg-white/[0.02] rounded-xl text-center"
                    >
                      <div className="w-10 h-10 mx-auto mb-4 rounded-lg bg-[#00C96E]/5 border border-[#00C96E]/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#00C96E]/60" />
                      </div>
                      <div className="text-3xl md:text-4xl font-semibold text-[#00C96E] mb-1 font-mono">
                        {stat.value}
                      </div>
                      <p className="text-xs text-white/40">{stat.label}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* --- MENSAGEM PRINCIPAL (Hormozi) --- */}
          <section className="relative z-20 py-24 px-4 sm:px-6 border-t border-white/5">
            <div className="mx-auto max-w-3xl text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="font-mono text-[#00C96E] text-xs tracking-widest mb-6 block">/// A PROPOSTA</span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight mb-6">
                  Uma equipe de IA dentro do seu negócio que funciona{' '}
                  <span className="text-[#00C96E]">24/7</span> e custa menos que{' '}
                  <span className="text-[#00C96E]">1 funcionário CLT</span>.
                </h2>
                <p className="text-white/40 text-lg max-w-xl mx-auto">
                  Não vendemos ferramentas. Implantamos times de agentes inteligentes
                  que executam tarefas reais do seu dia a dia.
                </p>
              </motion.div>
            </div>
          </section>

          {/* --- CTA FINAL --- */}
          <section id="cta" className="relative z-20 py-24 px-4 sm:px-6 border-t border-white/5">
            <div className="mx-auto max-w-2xl text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
                  Agende um diagnóstico gratuito
                </h2>
                <p className="text-white/40 mb-10">
                  30 minutos. Sem compromisso. Mapeamos onde IA pode gerar resultado real na sua operação.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={`${WHATSAPP_URL}?text=${encodeURIComponent('Quero agendar meu diagnóstico gratuito')}`}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#00C96E] text-black text-sm font-semibold rounded-lg hover:bg-[#00A85A] transition-colors"
                  >
                    Agendar diagnóstico
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => scrollTo('qualify')}
                    className="inline-flex items-center gap-2 px-8 py-4 border border-white/10 text-white/60 text-sm rounded-lg hover:text-white hover:border-white/20 transition-colors"
                  >
                    Ver meu resultado
                  </button>
                </div>
              </motion.div>
            </div>
          </section>

          {/* --- FOOTER --- */}
          <footer className="py-12 border-t border-white/5 px-4 sm:px-6">
            <div className="mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-md bg-[#00C96E] flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-black">
                    <path
                      d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-sm text-white/40">Mais Vendas Pro</span>
              </div>

              <div className="flex items-center gap-6 text-xs text-white/30">
                <a href={WHATSAPP_URL} className="hover:text-white/60 transition-colors">WhatsApp</a>
              </div>

              <span className="text-xs text-white/20">
                &copy; 2026 Mais Vendas Pro
              </span>
            </div>
          </footer>
        </motion.div>
      )}

      {/* Minimal footer when content is locked */}
      {!formSubmitted && (
        <footer className="py-8 px-4 sm:px-6">
          <div className="mx-auto max-w-5xl flex items-center justify-center">
            <span className="text-xs text-white/20">
              &copy; 2026 Mais Vendas Pro
            </span>
          </div>
        </footer>
      )}
    </div>
  );
}
