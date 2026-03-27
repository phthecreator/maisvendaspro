import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useInView } from 'framer-motion';
import {
  Check, ChevronDown, Users, Video, BookOpen, MessageCircle, Zap, ArrowRight,
  Shield, Sparkles, Target, TrendingUp, Crown,
} from 'lucide-react';

// ═══════════════════════════════════════════════════════════════════════════════
// BUNKER DA IA — Landing Page (Immersive Rewrite)
// Paleta: Cyan #00E5FF, Bronze #CD7F32, Aged White #FDF5E6
// Efeitos: Neon glow, glassmorphism, scroll-triggered, counters, particles
// ═══════════════════════════════════════════════════════════════════════════════

const WHATSAPP_URL = 'https://wa.me/5564981289820?text=ESTOU%20INTERESSADO%20NO%20BUNKER';

// ─── SECTION WRAPPER ─────────────────────────────────────────────────────────

function Section({ id, children, className = '' }: { id?: string; children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`relative py-20 sm:py-28 px-4 sm:px-6 ${className}`}
    >
      {children}
    </motion.section>
  );
}

// ─── ANIMATED COUNTER ────────────────────────────────────────────────────────

function Counter({ target, prefix = '', suffix = '', label }: { target: number; prefix?: string; suffix?: string; label: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
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
      <p className="text-4xl sm:text-5xl font-bold text-[#00E5FF] font-mono" style={{ textShadow: '0 0 20px rgba(0,229,255,0.4)' }}>
        {prefix}{val}{suffix}
      </p>
      <p className="text-[#FDF5E6]/40 text-sm mt-2">{label}</p>
    </div>
  );
}

// ─── FAQ ITEM ────────────────────────────────────────────────────────────────

function FAQItem({ q, a, open, toggle }: { q: string; a: string; open: boolean; toggle: () => void }) {
  return (
    <div className="border-b border-[#FDF5E6]/5 last:border-0">
      <button onClick={toggle} className="w-full flex items-center justify-between py-5 text-left cursor-pointer group">
        <span className="text-[#FDF5E6] font-medium text-base pr-4 group-hover:text-[#00E5FF] transition-colors">{q}</span>
        <ChevronDown className={`w-4 h-4 text-[#FDF5E6]/40 flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180 text-[#00E5FF]' : ''}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="text-[#FDF5E6]/60 text-sm leading-relaxed pb-5">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── FLOATING GRID BACKGROUND ────────────────────────────────────────────────

function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,rgba(0,229,255,0.12)_0%,transparent_60%)]" />
      {/* Grid lines */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `
          linear-gradient(rgba(0,229,255,0.3) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,229,255,0.3) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }} />
      {/* Scan line */}
      <motion.div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E5FF]/30 to-transparent"
        initial={{ top: '-10%' }}
        animate={{ top: '110%' }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  );
}

// ─── HERO ────────────────────────────────────────────────────────────────────

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -60]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-[#0D1117]">
        <GridBackground />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0D1117] to-transparent" />
      </div>

      <motion.div
        style={{ opacity, y, scale }}
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-mono tracking-wider uppercase bg-[#00E5FF]/[0.08] text-[#00E5FF] border border-[#00E5FF]/20 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
            Turma fundadora — vagas limitadas
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#FDF5E6] leading-[1.1] mb-8 tracking-tight"
        >
          Aprenda a entregar{' '}
          <span className="relative inline-block">
            <span className="text-[#00E5FF]" style={{ textShadow: '0 0 30px rgba(0,229,255,0.4), 0 0 60px rgba(0,229,255,0.15)' }}>
              projetos de IA
            </span>
          </span>{' '}
          que empresas pagam milhares de reais
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-lg sm:text-xl text-[#FDF5E6]/60 mb-6 max-w-2xl mx-auto leading-relaxed"
        >
          Pedro e Murillo ensinam ao vivo as mesmas ferramentas que usam
          nos seus projetos. Calls semanais, squads prontos, suporte direto.
        </motion.p>

        {/* Price */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mb-12"
        >
          <span className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-[#CD7F32]/[0.08] border border-[#CD7F32]/20 backdrop-blur-sm">
            <Crown className="w-4 h-4 text-[#CD7F32]" />
            <span className="text-[#CD7F32] font-mono text-sm sm:text-base font-medium">R$250/ano para fundadores · R$0,68/dia</span>
          </span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#00E5FF] text-[#0D1117] font-bold text-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] hover:scale-[1.02]"
          >
            Entrar no Bunker
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#o-que-voce-recebe"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-[#FDF5E6]/10 text-[#FDF5E6]/80 font-medium hover:bg-[#FDF5E6]/[0.03] hover:border-[#FDF5E6]/20 transition-all duration-300 backdrop-blur-sm"
          >
            Ver o que tem dentro
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border border-[#FDF5E6]/10 flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 rounded-full bg-[#00E5FF]/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}

// ─── STATS ───────────────────────────────────────────────────────────────────

function Stats() {
  return (
    <Section className="bg-[#0D1117] border-y border-[#00E5FF]/[0.06]">
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
        <Counter target={52} suffix="+" label="squads disponíveis" />
        <Counter target={200} suffix="+" label="agentes de IA" />
        <Counter prefix="R$" target={250} suffix="" label="por ano inteiro" />
        <Counter target={30} suffix=" dias" label="de garantia" />
      </div>
    </Section>
  );
}

// ─── PROBLEMA ────────────────────────────────────────────────────────────────

function Problem() {
  const items = [
    { icon: Target, text: 'Assiste vídeo, faz tutorial, testa ferramenta nova toda semana.' },
    { icon: Zap, text: 'Na hora de aplicar no trabalho real... trava.' },
    { icon: TrendingUp, text: '30 minutos com direção valem mais que 50 horas assistindo conteúdo.' },
  ];

  return (
    <Section className="bg-[#0D1117]">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: headline */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FDF5E6] leading-tight mb-6">
              Você sabe que IA muda tudo.{' '}
              <span className="text-[#FDF5E6]/30">Mas não consegue sair do lugar.</span>
            </h2>
            <p className="text-[#FDF5E6]/50 text-lg leading-relaxed">
              Não é falta de informação. É falta de{' '}
              <span className="text-[#00E5FF] font-medium">direção e alguém do lado</span>{' '}
              que já faz isso funcionando.
            </p>
          </div>

          {/* Right: pain cards */}
          <div className="space-y-4">
            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="flex items-start gap-4 p-5 rounded-xl bg-[#FDF5E6]/[0.02] border border-[#FDF5E6]/[0.05] backdrop-blur-sm hover:border-[#00E5FF]/15 transition-colors duration-300"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#00E5FF]/[0.06] flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-[#00E5FF]/70" />
                </div>
                <p className="text-[#FDF5E6]/70 text-sm leading-relaxed pt-1.5">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="inline-block text-[#FDF5E6]/40 text-sm italic px-6 py-3 rounded-xl border border-[#FDF5E6]/[0.04]">
            "O Bunker existe porque a gente passou por isso."
          </p>
        </motion.div>
      </div>
    </Section>
  );
}

// ─── O QUE VOCE RECEBE ──────────────────────────────────────────────────────

const deliverables = [
  {
    icon: Video,
    title: 'Calls semanais ao vivo',
    desc: 'Toda semana a gente se encontra, mostra o que tá fazendo e tira dúvida na hora.',
    color: '#00E5FF',
  },
  {
    icon: BookOpen,
    title: 'Materiais gravados',
    desc: 'Aulas e tutoriais direto ao ponto. Sem enrolação, sem teoria sem fim.',
    color: '#3A86FF',
  },
  {
    icon: Zap,
    title: 'Squads de IA prontos',
    desc: 'Acesso a squads que a gente usa nos nossos projetos. Copia, adapta, usa.',
    color: '#00E5FF',
  },
  {
    icon: Users,
    title: 'Grupo exclusivo',
    desc: 'Tira dúvida direto com a gente e com os outros membros. Suporte real.',
    color: '#CD7F32',
  },
  {
    icon: MessageCircle,
    title: 'Funis e tráfego pago',
    desc: 'Aprenda a vender com IA. Funis comerciais, copy, tráfego — o que dá dinheiro.',
    color: '#CD7F32',
  },
  {
    icon: Sparkles,
    title: 'Acesso direto aos mentores',
    desc: 'Fala com Pedro e Murillo. Sem intermediário, sem ticket de suporte.',
    color: '#3A86FF',
  },
];

function Deliverables() {
  return (
    <Section id="o-que-voce-recebe" className="bg-[#111820]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-[#00E5FF] text-xs font-mono uppercase tracking-widest mb-4"
          >
            O que está incluído
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FDF5E6] mb-4">
            O que você recebe
          </h2>
          <p className="text-[#FDF5E6]/50 max-w-xl mx-auto">
            Tudo que você precisa pra começar a entregar projetos de IA que geram receita real.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {deliverables.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group relative p-6 rounded-2xl bg-[#FDF5E6]/[0.02] border border-[#FDF5E6]/[0.05] backdrop-blur-sm transition-all duration-500 hover:border-[#FDF5E6]/10 hover:bg-[#FDF5E6]/[0.04]"
              style={{ '--glow-color': item.color } as React.CSSProperties}
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ boxShadow: `inset 0 1px 0 0 ${item.color}20, 0 0 40px -20px ${item.color}30` }}
              />

              <div className="relative z-10">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-110"
                  style={{ backgroundColor: `${item.color}10` }}
                >
                  <item.icon className="w-6 h-6" style={{ color: item.color }} />
                </div>
                <h3 className="text-[#FDF5E6] font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-[#FDF5E6]/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

// ─── QUEM ENSINA ─────────────────────────────────────────────────────────────

const mentors = [
  {
    initial: 'P',
    name: 'Pedro Ribeiro',
    role: 'High-ticket closer & dev',
    desc: 'Vende projetos de IA pra empresas. Construiu o sistema de apresentação que usa em calls de vendas high-ticket. Na prática: faz e vende.',
    accent: '#CD7F32',
    gradient: 'from-[#CD7F32]/20 to-[#CD7F32]/5',
  },
  {
    initial: 'M',
    name: 'Murillo',
    role: 'Full-stack & growth strategy',
    desc: 'Desenvolvedor full-stack que construiu SaaS com IA pro setor de RH e fechou contrato. Constrói sistemas que funcionam em produção, não em demo.',
    accent: '#00E5FF',
    gradient: 'from-[#00E5FF]/20 to-[#00E5FF]/5',
  },
];

function WhoTeaches() {
  return (
    <Section className="bg-[#0D1117]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-[#CD7F32] text-xs font-mono uppercase tracking-widest mb-4">
            Os mentores
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FDF5E6]">
            Quem tá do outro lado
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {mentors.map((mentor, i) => (
            <motion.div
              key={mentor.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="group relative p-8 rounded-2xl bg-[#FDF5E6]/[0.02] border border-[#FDF5E6]/[0.06] backdrop-blur-sm transition-all duration-500 hover:border-opacity-20 overflow-hidden"
              style={{ borderColor: `${mentor.accent}20` }}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-b ${mentor.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10">
                {/* Avatar */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 text-2xl font-bold transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg"
                  style={{
                    backgroundColor: `${mentor.accent}15`,
                    color: mentor.accent,
                    boxShadow: `0 0 0 1px ${mentor.accent}20`,
                  }}
                >
                  {mentor.initial}
                </div>

                <h3 className="text-xl font-bold text-[#FDF5E6] mb-1">{mentor.name}</h3>
                <p className="text-sm font-mono mb-4" style={{ color: mentor.accent }}>{mentor.role}</p>
                <p className="text-[#FDF5E6]/50 text-sm leading-relaxed">{mentor.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-[#FDF5E6]/30 text-sm mt-10 italic"
        >
          A gente não ensina teoria. Mostra o que faz nos próprios projetos e te ajuda a fazer igual.
        </motion.p>
      </div>
    </Section>
  );
}

// ─── PRECO ───────────────────────────────────────────────────────────────────

const included = [
  'Calls semanais ao vivo em grupo',
  'Materiais gravados e atualizados',
  'Squads de IA prontos pra usar',
  'Grupo exclusivo com suporte',
  'Funis comerciais e tráfego pago',
  'Acesso direto ao Pedro e Murillo',
];

function Pricing() {
  return (
    <Section className="bg-[#111820]">
      <div className="max-w-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Glow border effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-[#00E5FF]/20 via-transparent to-[#CD7F32]/10 p-px">
            <div className="absolute inset-px rounded-3xl bg-[#0D1117]" />
          </div>

          <div className="relative z-10">
            {/* Header */}
            <div className="p-10 text-center border-b border-[#FDF5E6]/[0.04]">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00E5FF]/[0.06] border border-[#00E5FF]/15 mb-6">
                <Shield className="w-3.5 h-3.5 text-[#00E5FF]" />
                <span className="text-[#00E5FF] text-xs font-mono uppercase tracking-wider">Preço fundador</span>
              </div>

              <div className="flex items-baseline justify-center gap-1 mb-2">
                <span className="text-6xl sm:text-7xl font-bold text-[#FDF5E6]" style={{ textShadow: '0 0 40px rgba(0,229,255,0.15)' }}>
                  R$250
                </span>
                <span className="text-[#FDF5E6]/30 text-xl font-light">/ano</span>
              </div>

              <p className="text-[#FDF5E6]/30 text-sm mb-4">
                R$0,68 por dia · menos que um café
              </p>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#CD7F32]/[0.06] border border-[#CD7F32]/15">
                <Crown className="w-3.5 h-3.5 text-[#CD7F32]" />
                <span className="text-[#CD7F32] text-xs font-mono">
                  Depois dos primeiros 20 membros: R$99/mês
                </span>
              </div>
            </div>

            {/* What's included */}
            <div className="p-10">
              <ul className="space-y-4 mb-10">
                {included.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06, duration: 0.4 }}
                    className="flex items-center gap-3"
                  >
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#00E5FF]/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-[#00E5FF]" />
                    </div>
                    <span className="text-[#FDF5E6]/70 text-sm">{item}</span>
                  </motion.li>
                ))}
              </ul>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group block w-full text-center px-8 py-4 rounded-xl bg-[#00E5FF] text-[#0D1117] font-bold text-lg transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,229,255,0.35)] hover:scale-[1.02]"
              >
                <span className="flex items-center justify-center gap-2">
                  Entrar no Bunker — R$250/ano
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </a>

              <p className="text-center text-[#FDF5E6]/20 text-xs mt-5">
                Pagamento seguro. Acesso imediato.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────

const faqs = [
  {
    q: 'Preciso saber programar?',
    a: 'Não. A maioria dos squads e ferramentas que ensinamos não exigem código. Se você sabe usar um computador, dá pra começar.',
  },
  {
    q: 'Qual o formato das aulas?',
    a: 'Calls semanais ao vivo (gravadas pra quem não puder). Materiais gravados no seu ritmo. Suporte no grupo exclusivo.',
  },
  {
    q: 'Quanto tempo preciso dedicar?',
    a: 'Mínimo 30 minutos por semana. A call semanal dura ~1h. O resto você faz no seu ritmo.',
  },
  {
    q: 'O preço vai subir?',
    a: 'Sim. R$250/ano é preço de fundador pros 20 primeiros. Depois sobe pra R$99/mês (R$900/ano).',
  },
  {
    q: 'Tem garantia?',
    a: 'Se em 30 dias você não vir resultado, a gente estende mais 30 dias grátis. Sem burocracia.',
  },
  {
    q: 'Como é o acesso?',
    a: 'Grupo exclusivo + área de materiais. Acesso imediato após o pagamento.',
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <Section className="bg-[#0D1117]">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-[#00E5FF] text-xs font-mono uppercase tracking-widest mb-4">
            Dúvidas
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#FDF5E6]">
            Perguntas frequentes
          </h2>
        </div>

        <div className="rounded-2xl bg-[#FDF5E6]/[0.02] border border-[#FDF5E6]/[0.05] p-2 sm:p-4 backdrop-blur-sm">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              q={faq.q}
              a={faq.a}
              open={open === i}
              toggle={() => setOpen(open === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

// ─── CTA FINAL ───────────────────────────────────────────────────────────────

function FinalCTA() {
  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0D1117]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,229,255,0.08)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(205,127,50,0.06)_0%,transparent_50%)]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-2xl mx-auto text-center"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FDF5E6] mb-5 leading-tight">
          Para de assistir.{' '}
          <span className="text-[#00E5FF]" style={{ textShadow: '0 0 30px rgba(0,229,255,0.3)' }}>
            Começa a entregar.
          </span>
        </h2>

        <p className="text-[#FDF5E6]/50 mb-10 text-lg">
          R$250/ano. Acesso direto a quem faz. Sem enrolação.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-2 px-10 py-5 rounded-xl bg-[#00E5FF] text-[#0D1117] font-bold text-lg transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,229,255,0.4)] hover:scale-[1.02]"
          >
            Entrar no Bunker — R$250/ano
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-5 rounded-xl border border-[#FDF5E6]/10 text-[#FDF5E6]/70 font-medium hover:bg-[#FDF5E6]/[0.03] hover:border-[#FDF5E6]/20 transition-all duration-300"
          >
            Falar no WhatsApp
            <MessageCircle className="w-5 h-5" />
          </a>
        </div>

        <p className="text-[#FDF5E6]/20 text-xs mt-8">
          Preço de fundador pros 20 primeiros. Depois sobe pra R$99/mês.
        </p>
      </motion.div>
    </section>
  );
}

// ─── FOOTER ──────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="py-10 px-6 bg-[#0D1117] border-t border-[#FDF5E6]/[0.04]">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[#FDF5E6]/20 text-xs">
        <span className="font-mono">Bunker da IA — MaisVendas Pro</span>
        <span>
          Dúvidas?{' '}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00E5FF]/40 hover:text-[#00E5FF] transition-colors"
          >
            WhatsApp
          </a>
        </span>
      </div>
    </footer>
  );
}

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function BunkerLP() {
  return (
    <div className="bg-[#0D1117] min-h-screen text-[#FDF5E6] overflow-x-hidden">
      <Hero />
      <Stats />
      <Problem />
      <Deliverables />
      <WhoTeaches />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
