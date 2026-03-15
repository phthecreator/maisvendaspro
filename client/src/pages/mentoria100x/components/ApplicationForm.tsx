import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '@/lib/supabase';
import { Slider } from '@/components/ui/slider';
import { Check, ArrowLeft, ArrowRight, Send } from 'lucide-react';

// --- Types ---
interface TypeformData {
  tipo_negocio: string;
  tipo_negocio_outro: string;
  faturamento_mensal: string;
  tamanho_time: string;
  decisor: string;
  motivo_agora: string;
  motivo_agora_outro: string;
  maior_desafio: string;
  maior_desafio_outro: string;
  tentativas_implementacao: string;
  investimento_ferramentas: string;
  urgencia: number;
  porque_escolher: string;
  nome: string;
  email: string;
  whatsapp: string;
  instagram: string;
}

const initialForm: TypeformData = {
  tipo_negocio: '',
  tipo_negocio_outro: '',
  faturamento_mensal: '',
  tamanho_time: '',
  decisor: '',
  motivo_agora: '',
  motivo_agora_outro: '',
  maior_desafio: '',
  maior_desafio_outro: '',
  tentativas_implementacao: '',
  investimento_ferramentas: '',
  urgencia: 5,
  porque_escolher: '',
  nome: '',
  email: '',
  whatsapp: '',
  instagram: '',
};

// --- Question definitions ---
type QuestionType = 'radio' | 'text' | 'email' | 'tel' | 'textarea' | 'slider';

interface RadioOption {
  value: string;
  label: string;
  hasInput?: boolean;
}

interface Question {
  id: number;
  field: keyof TypeformData;
  otherField?: keyof TypeformData;
  title: string;
  subtitle?: string;
  type: QuestionType;
  options?: RadioOption[];
  placeholder?: string;
  sliderMin?: number;
  sliderMax?: number;
  sliderLeftLabel?: string;
  sliderRightLabel?: string;
  required?: boolean;
  validate?: (value: string | number, form: TypeformData) => string | null;
}

const questions: Question[] = [
  {
    id: 1,
    field: 'tipo_negocio',
    otherField: 'tipo_negocio_outro',
    title: 'O que voce faz?',
    type: 'radio',
    required: true,
    options: [
      { value: 'agencia_trafego', label: 'Agencia (trafego/creative/web)' },
      { value: 'ecommerce', label: 'E-commerce' },
      { value: 'servico_local', label: 'Servico local' },
      { value: 'infoproduto', label: 'Infoproduto' },
      { value: 'outro', label: 'Outro', hasInput: true },
    ],
  },
  {
    id: 2,
    field: 'faturamento_mensal',
    title: 'Quanto voce fatura por mes?',
    type: 'radio',
    required: true,
    options: [
      { value: 'ate_20k', label: 'Ate R$20k' },
      { value: '20k_50k', label: 'R$20-50k' },
      { value: '50k_80k', label: 'R$50-80k' },
      { value: '80k_150k', label: 'R$80-150k' },
      { value: '150k_300k', label: 'R$150-300k' },
      { value: '300k_mais', label: 'R$300k+' },
    ],
  },
  {
    id: 3,
    field: 'tamanho_time',
    title: 'Quantas pessoas trabalham com voce?',
    type: 'radio',
    options: [
      { value: 'solo', label: 'So eu' },
      { value: '2_3', label: '2-3' },
      { value: '4_7', label: '4-7' },
      { value: '8_15', label: '8-15' },
      { value: '16_mais', label: '16+' },
    ],
  },
  {
    id: 4,
    field: 'decisor',
    title: 'Voce e decisor(a) final?',
    type: 'radio',
    required: true,
    options: [
      { value: 'sim', label: 'Sim' },
      { value: 'divido_socio', label: 'Divido com socio(a)' },
      { value: 'nao', label: 'Nao' },
    ],
  },
  {
    id: 5,
    field: 'motivo_agora',
    otherField: 'motivo_agora_outro',
    title: 'Por que voce quer resolver isso agora?',
    type: 'radio',
    required: true,
    options: [
      { value: 'perdendo_dinheiro', label: 'To perdendo dinheiro no caos' },
      { value: 'escalar_sem_desespero', label: 'Quero escalar sem contratar por desespero' },
      { value: 'time_travando', label: 'Time ta travando / retrabalho ta comendo' },
      { value: 'padronizar_entrega', label: 'Quero padronizar entrega e manter qualidade' },
      { value: 'outro', label: 'Outro', hasInput: true },
    ],
  },
  {
    id: 6,
    field: 'maior_desafio',
    otherField: 'maior_desafio_outro',
    title: 'O que mais te desafia com IA/automacao?',
    type: 'radio',
    required: true,
    options: [
      { value: 'complexidade', label: 'Complexidade / nao sei por onde comecar' },
      { value: 'baixa_adesao', label: 'Minha equipe nao usa / baixa adesao' },
      { value: 'falta_processo', label: 'Falta de processo (tudo vira improviso)' },
      { value: 'integracoes', label: 'Integracoes e ferramentas (CRM/WhatsApp/etc.)' },
      { value: 'ja_tentei', label: 'Ja tentei e nao deu certo' },
      { value: 'outro', label: 'Outro', hasInput: true },
    ],
  },
  {
    id: 7,
    field: 'tentativas_implementacao',
    title: 'Quantas vezes voce ja tentou implementar IA?',
    type: 'radio',
    options: [
      { value: '0', label: 'Nenhuma' },
      { value: '1', label: '1 vez' },
      { value: '2_3', label: '2-3 vezes' },
      { value: '4_mais', label: '4+ vezes' },
    ],
  },
  {
    id: 8,
    field: 'investimento_ferramentas',
    title: 'Capacidade de investimento mensal em ferramentas?',
    type: 'radio',
    options: [
      { value: 'zero', label: 'Zero' },
      { value: 'ate_1k', label: 'Ate R$1k' },
      { value: '2k_5k', label: 'R$2-5k' },
      { value: '6k_15k', label: 'R$6-15k' },
      { value: '16k_mais', label: 'R$16k+' },
    ],
  },
  {
    id: 9,
    field: 'urgencia',
    title: 'De 0 a 10, qual a urgencia de resolver isso nos proximos 30 dias?',
    type: 'slider',
    sliderMin: 0,
    sliderMax: 10,
    sliderLeftLabel: 'Pode esperar',
    sliderRightLabel: 'Muito urgente',
  },
  {
    id: 10,
    field: 'porque_escolher',
    title: 'Por que devemos te escolher para nosso acompanhamento?',
    type: 'textarea',
    placeholder: 'Seja direto. O que te faz diferente?',
    required: true,
  },
  {
    id: 11,
    field: 'nome',
    title: 'Seu nome completo',
    type: 'text',
    placeholder: 'Nome',
    required: true,
    validate: (v) => (!String(v).trim() ? 'Nome obrigatorio' : null),
  },
  {
    id: 12,
    field: 'email',
    title: 'Seu melhor e-mail',
    type: 'email',
    placeholder: 'email@empresa.com',
    required: true,
    validate: (v) => {
      const s = String(v).trim();
      if (!s) return 'E-mail obrigatorio';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s)) return 'E-mail invalido';
      return null;
    },
  },
  {
    id: 13,
    field: 'whatsapp',
    title: 'WhatsApp com DDD',
    type: 'tel',
    placeholder: '(00) 00000-0000',
    required: true,
    validate: (v) => {
      const s = String(v).trim();
      if (!s) return 'WhatsApp obrigatorio';
      if (s.replace(/\D/g, '').length < 10) return 'WhatsApp deve ter pelo menos 10 digitos';
      return null;
    },
  },
  {
    id: 14,
    field: 'instagram',
    title: 'Seu @ do Instagram',
    type: 'text',
    placeholder: '@seuuser',
  },
];

const TOTAL_QUESTIONS = questions.length;

// --- Radio Card ---
interface RadioCardProps {
  label: string;
  selected: boolean;
  onClick: () => void;
}

const RadioCard: React.FC<RadioCardProps> = ({ label, selected, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`
      w-full text-left p-5 rounded-xl border transition-all duration-200 cursor-pointer
      ${selected
        ? 'border-white/30 bg-white/[0.08]'
        : 'border-white/[0.06] bg-white/[0.03] hover:border-white/[0.15]'
      }
    `}
  >
    <div className="flex items-center gap-3">
      <div className={`
        w-5 h-5 rounded-md border flex items-center justify-center shrink-0 transition-all duration-200
        ${selected ? 'border-white bg-white' : 'border-white/20'}
      `}>
        {selected && <Check className="w-3 h-3 text-black" />}
      </div>
      <span className={`text-sm md:text-base ${selected ? 'text-white' : 'text-white/60'}`}>
        {label}
      </span>
    </div>
  </button>
);

// --- Main Component ---
const ApplicationForm: React.FC = () => {
  const [form, setForm] = useState<TypeformData>(initialForm);
  const [currentIndex, setCurrentIndex] = useState(-1); // -1 = intro screen
  const [direction, setDirection] = useState(1);
  const [error, setError] = useState('');
  const [shake, setShake] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const updateField = useCallback(<K extends keyof TypeformData>(key: K, value: TypeformData[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setError('');
  }, []);

  const currentQuestion = currentIndex >= 0 && currentIndex < TOTAL_QUESTIONS ? questions[currentIndex] : null;

  const validateCurrent = useCallback((): boolean => {
    if (!currentQuestion) return true;
    const q = currentQuestion;
    const value = form[q.field];

    // Custom validator
    if (q.validate) {
      const err = q.validate(value, form);
      if (err) { setError(err); return false; }
    }

    // Required radio
    if (q.required && q.type === 'radio' && !value) {
      setError('Selecione uma opcao');
      return false;
    }

    // Required radio with "outro" option that has input
    if (q.type === 'radio' && value === 'outro' && q.otherField) {
      const otherValue = form[q.otherField];
      if (!String(otherValue).trim()) {
        setError('Especifique sua resposta');
        return false;
      }
    }

    // Required text/email/tel/textarea
    if (q.required && (q.type === 'text' || q.type === 'email' || q.type === 'tel' || q.type === 'textarea')) {
      if (!String(value).trim()) {
        setError('Campo obrigatorio');
        return false;
      }
    }

    return true;
  }, [currentQuestion, form]);

  const triggerShake = useCallback(() => {
    setShake(true);
    setTimeout(() => setShake(false), 500);
  }, []);

  const goNext = useCallback(() => {
    if (currentIndex === -1) {
      // Intro -> first question
      setDirection(1);
      setCurrentIndex(0);
      return;
    }
    if (!validateCurrent()) {
      triggerShake();
      return;
    }
    setError('');
    setDirection(1);
    if (currentIndex < TOTAL_QUESTIONS - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      // Last question -> submit
      handleSubmit();
    }
  }, [currentIndex, validateCurrent, triggerShake]);

  const goBack = useCallback(() => {
    setError('');
    setDirection(-1);
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else if (currentIndex === 0) {
      setCurrentIndex(-1);
    }
  }, [currentIndex]);

  // Auto-advance for radio selections (no "outro" input needed)
  const handleRadioSelect = useCallback((field: keyof TypeformData, value: string, hasInput?: boolean) => {
    updateField(field, value);
    if (!hasInput) {
      // Auto-advance after 400ms
      setTimeout(() => {
        setError('');
        setDirection(1);
        setCurrentIndex((prev) => {
          if (prev < TOTAL_QUESTIONS - 1) return prev + 1;
          return prev;
        });
      }, 400);
    }
  }, [updateField]);

  // Keyboard support
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        // Dont trigger on textarea
        if (currentQuestion?.type === 'textarea') return;
        e.preventDefault();
        goNext();
      }
      if (e.key === 'Escape') {
        goBack();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [goNext, goBack, currentQuestion]);

  const handleSubmit = async () => {
    if (submitting) return;
    setSubmitting(true);
    setSubmitError('');

    try {
      if (!supabase) {
        throw new Error('Sistema de envio indisponível. Tente novamente mais tarde.');
      }
      const { error: supaErr } = await supabase.from('mentoria_applications').insert({
        nome: form.nome.trim(),
        email: form.email.trim().toLowerCase(),
        whatsapp: form.whatsapp.trim(),
        instagram: form.instagram.trim() || null,
        tipo_negocio: form.tipo_negocio === 'outro' ? form.tipo_negocio_outro.trim() : form.tipo_negocio,
        faturamento_mensal: form.faturamento_mensal,
        tamanho_time: form.tamanho_time || null,
        decisor: form.decisor,
        motivo_agora: form.motivo_agora === 'outro' ? form.motivo_agora_outro.trim() : form.motivo_agora,
        maior_desafio: form.maior_desafio === 'outro' ? form.maior_desafio_outro.trim() : form.maior_desafio,
        tentativas_implementacao: form.tentativas_implementacao || null,
        investimento_ferramentas: form.investimento_ferramentas || null,
        urgencia: form.urgencia,
        porque_escolher: form.porque_escolher.trim() || null,
      });

      if (supaErr) throw supaErr;
      setSubmitted(true);
    } catch (err) {
      console.error('Error submitting application:', err);
      setSubmitError('Erro ao enviar. Tente novamente.');
      setSubmitting(false);
    }
  };

  const progress = currentIndex < 0 ? 0 : ((currentIndex + 1) / TOTAL_QUESTIONS) * 100;

  // --- Slide animation variants ---
  const slideVariants = {
    enter: (dir: number) => ({
      y: dir > 0 ? 40 : -40,
      opacity: 0,
    }),
    center: {
      y: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      y: dir > 0 ? -40 : 40,
      opacity: 0,
    }),
  };

  // --- Submitted screen ---
  if (submitted) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-black px-6" id="application-form">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-xl mx-auto text-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-white/[0.08] flex items-center justify-center mx-auto mb-8">
            <Check className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-white text-3xl md:text-4xl font-black mb-4">
            Aplicacao recebida
          </h2>
          <p className="text-white/50 text-base md:text-lg leading-relaxed max-w-md mx-auto">
            Vamos analisar seu perfil e entrar em contato em ate 24h pelo WhatsApp para agendar sua consultoria.
          </p>
        </motion.div>
      </section>
    );
  }

  // --- Intro screen ---
  if (currentIndex === -1) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-black px-6" id="application-form">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-6">
            Consultoria gratuita do seu negocio
          </h2>
          <p className="text-white/50 text-base md:text-lg leading-relaxed mb-12 max-w-md mx-auto">
            Preencha a selecao abaixo. Nossos especialistas vao analisar e agendar sua consultoria.
          </p>
          <button
            type="button"
            onClick={goNext}
            className="inline-flex items-center gap-3 bg-white text-black font-semibold px-10 py-4 rounded-xl hover:bg-white/90 transition-all duration-300 hover:scale-[1.02] text-base md:text-lg"
          >
            Comecar
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </section>
    );
  }

  // --- Question screen ---
  return (
    <section className="min-h-screen flex flex-col bg-black" id="application-form">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-white/10">
        <motion.div
          className="h-full bg-white"
          initial={false}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        />
      </div>

      {/* Back button */}
      <div className="fixed top-6 left-6 z-50">
        <button
          type="button"
          onClick={goBack}
          className="p-2 rounded-lg text-white/30 hover:text-white/60 transition-colors"
          aria-label="Voltar"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
      </div>

      {/* Question counter */}
      <div className="fixed top-6 right-6 z-50">
        <span className="text-white/30 text-sm font-mono">
          {currentIndex + 1} / {TOTAL_QUESTIONS}
        </span>
      </div>

      {/* Question content */}
      <div className="flex-1 flex items-center justify-center px-6 py-24">
        <div className="w-full max-w-xl">
          <AnimatePresence mode="wait" custom={direction}>
            {currentQuestion && (
              <motion.div
                key={currentQuestion.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className={shake ? 'animate-shake' : ''}
              >
                {/* Title */}
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">
                  {currentQuestion.title}
                </h2>
                {currentQuestion.subtitle && (
                  <p className="text-white/40 text-sm mb-8">{currentQuestion.subtitle}</p>
                )}
                {!currentQuestion.subtitle && <div className="mb-8" />}

                {/* Radio options */}
                {currentQuestion.type === 'radio' && currentQuestion.options && (
                  <div className="space-y-3">
                    <div className="grid grid-cols-1 gap-3">
                      {currentQuestion.options.map((opt) => (
                        <RadioCard
                          key={opt.value}
                          label={opt.label}
                          selected={String(form[currentQuestion.field]) === opt.value}
                          onClick={() => handleRadioSelect(currentQuestion.field, opt.value, opt.hasInput)}
                        />
                      ))}
                    </div>

                    {/* "Outro" input field */}
                    {currentQuestion.otherField && String(form[currentQuestion.field]) === 'outro' && (
                      <div className="mt-4">
                        <input
                          type="text"
                          value={String(form[currentQuestion.otherField])}
                          onChange={(e) => updateField(currentQuestion.otherField!, e.target.value)}
                          placeholder="Especifique..."
                          autoFocus
                          className="w-full bg-transparent border-b-2 border-white/20 focus:border-white/60 text-white text-xl py-3 outline-none placeholder:text-white/20 transition-colors"
                        />
                        <button
                          type="button"
                          onClick={goNext}
                          className="mt-6 inline-flex items-center gap-2 bg-white text-black font-semibold px-8 py-3 rounded-xl hover:bg-white/90 transition-all"
                        >
                          Continuar
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {/* Text / Email / Tel inputs */}
                {(currentQuestion.type === 'text' || currentQuestion.type === 'email' || currentQuestion.type === 'tel') && (
                  <div>
                    <input
                      type={currentQuestion.type}
                      value={String(form[currentQuestion.field])}
                      onChange={(e) => updateField(currentQuestion.field, e.target.value)}
                      placeholder={currentQuestion.placeholder}
                      autoFocus
                      className="w-full bg-transparent border-b-2 border-white/20 focus:border-white/60 text-white text-xl py-3 outline-none placeholder:text-white/20 transition-colors"
                    />
                    <div className="mt-8 flex items-center gap-4">
                      <button
                        type="button"
                        onClick={goNext}
                        className="inline-flex items-center gap-2 bg-white text-black font-semibold px-8 py-3 rounded-xl hover:bg-white/90 transition-all"
                      >
                        {currentIndex === TOTAL_QUESTIONS - 1 ? (
                          submitting ? 'Enviando...' : 'Enviar'
                        ) : 'Continuar'}
                        {currentIndex === TOTAL_QUESTIONS - 1 ? (
                          <Send className="w-4 h-4" />
                        ) : (
                          <ArrowRight className="w-4 h-4" />
                        )}
                      </button>
                      <span className="text-white/20 text-xs">ou pressione Enter</span>
                    </div>
                  </div>
                )}

                {/* Textarea */}
                {currentQuestion.type === 'textarea' && (
                  <div>
                    <textarea
                      value={String(form[currentQuestion.field])}
                      onChange={(e) => updateField(currentQuestion.field, e.target.value)}
                      placeholder={currentQuestion.placeholder}
                      rows={4}
                      autoFocus
                      className="w-full bg-transparent border-b-2 border-white/20 focus:border-white/60 text-white text-xl py-3 outline-none placeholder:text-white/20 transition-colors resize-none leading-relaxed"
                    />
                    <button
                      type="button"
                      onClick={goNext}
                      className="mt-6 inline-flex items-center gap-2 bg-white text-black font-semibold px-8 py-3 rounded-xl hover:bg-white/90 transition-all"
                    >
                      Continuar
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                )}

                {/* Slider */}
                {currentQuestion.type === 'slider' && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-white/30 text-sm">{currentQuestion.sliderLeftLabel}</span>
                      <span className="text-white font-bold text-3xl font-mono">{form.urgencia}</span>
                      <span className="text-white/30 text-sm">{currentQuestion.sliderRightLabel}</span>
                    </div>
                    <Slider
                      value={[form.urgencia]}
                      onValueChange={(v) => updateField('urgencia', v[0])}
                      min={currentQuestion.sliderMin}
                      max={currentQuestion.sliderMax}
                      step={1}
                      className="w-full"
                    />
                    <button
                      type="button"
                      onClick={goNext}
                      className="mt-4 inline-flex items-center gap-2 bg-white text-black font-semibold px-8 py-3 rounded-xl hover:bg-white/90 transition-all"
                    >
                      Continuar
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                )}

                {/* Error message */}
                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-sm mt-4"
                  >
                    {error}
                  </motion.p>
                )}

                {/* Submit error */}
                {submitError && (
                  <motion.p
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-sm mt-4"
                  >
                    {submitError}
                  </motion.p>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;
