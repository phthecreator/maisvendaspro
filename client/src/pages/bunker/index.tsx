import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ChevronDown, Users, Video, BookOpen, MessageCircle, Zap, ArrowRight } from 'lucide-react';

// ═══════════════════════════════════════════════════════════════════════════════
// BUNKER DA IA — Landing Page
// Copy real. Números reais. Sem inflação.
// ═══════════════════════════════════════════════════════════════════════════════

const WHATSAPP_URL = 'https://wa.me/5564981289820?text=ESTOU%20INTERESSADO%20NO%20BUNKER';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

// ─── HERO ────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#1A1E22]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,229,255,0.08)_0%,transparent_70%)]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 49px, rgba(0,229,255,0.15) 50px)',
          backgroundSize: '50px 50px',
        }} />
      </div>

      <motion.div
        className="relative z-10 max-w-3xl mx-auto text-center"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        <motion.div variants={fadeUp} className="mb-6">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/20">
            Turma fundadora — vagas limitadas
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#FDF5E6] leading-tight mb-6"
        >
          Aprenda a entregar{' '}
          <span className="text-[#00E5FF]">projetos de IA</span>{' '}
          que empresas pagam milhares de reais
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-lg sm:text-xl text-[#FDF5E6]/70 mb-4 max-w-2xl mx-auto"
        >
          Pedro e Murillo ensinam ao vivo as mesmas ferramentas que usam
          nos seus projetos. Calls semanais, squads prontos, suporte direto.
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="text-base text-[#CD7F32] font-mono mb-10"
        >
          R$250/ano para fundadores &middot; R$0,68/dia
        </motion.p>

        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-[#00E5FF] text-[#1A1E22] font-bold text-lg hover:bg-[#00E5FF]/90 transition-colors"
          >
            Entrar no Bunker
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#o-que-voce-recebe"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-[#FDF5E6]/20 text-[#FDF5E6] font-medium hover:bg-[#FDF5E6]/5 transition-colors"
          >
            Ver o que tem dentro
            <ChevronDown className="w-5 h-5" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

// ─── PROBLEMA ────────────────────────────────────────────────────────────────

function Problem() {
  return (
    <section className="py-20 px-6 bg-[#1A1E22]">
      <motion.div
        className="max-w-3xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={stagger}
      >
        <motion.h2
          variants={fadeUp}
          className="text-3xl sm:text-4xl font-bold text-[#FDF5E6] mb-6"
        >
          Você sabe que IA muda tudo.{' '}
          <span className="text-[#FDF5E6]/50">Mas não consegue sair do lugar.</span>
        </motion.h2>

        <motion.div variants={fadeUp} className="space-y-4 text-[#FDF5E6]/70 text-lg">
          <p>
            Assiste vídeo, faz tutorial, testa uma ferramenta nova por semana.
            Mas na hora de aplicar no trabalho real... trava.
          </p>
          <p>
            Não é falta de informação. É falta de <span className="text-[#00E5FF]">direção e alguém do lado</span> que
            já faz isso funcionando.
          </p>
          <p>
            O Bunker existe porque a gente passou por isso. E descobriu que
            30 minutos com direção valem mais que 50 horas assistindo conteúdo.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

// ─── O QUE VOCE RECEBE ──────────────────────────────────────────────────────

const deliverables = [
  {
    icon: Video,
    title: 'Calls semanais ao vivo',
    desc: 'Toda semana a gente se encontra, mostra o que tá fazendo e tira dúvida na hora.',
  },
  {
    icon: BookOpen,
    title: 'Materiais gravados',
    desc: 'Aulas e tutoriais direto ao ponto. Sem enrolação, sem teoria sem fim.',
  },
  {
    icon: Zap,
    title: 'Squads de IA prontos',
    desc: 'Acesso a squads que a gente usa nos nossos projetos. Copia, adapta, usa.',
  },
  {
    icon: Users,
    title: 'Grupo exclusivo',
    desc: 'Tira dúvida direto com a gente e com os outros membros. Suporte real.',
  },
  {
    icon: MessageCircle,
    title: 'Funis e tráfego pago',
    desc: 'Aprenda a vender com IA. Funis comerciais, copy, tráfego — o que dá dinheiro.',
  },
];

function Deliverables() {
  return (
    <section id="o-que-voce-recebe" className="py-20 px-6 bg-[#2F353A]">
      <motion.div
        className="max-w-4xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={stagger}
      >
        <motion.h2
          variants={fadeUp}
          className="text-3xl sm:text-4xl font-bold text-[#FDF5E6] mb-4 text-center"
        >
          O que você recebe
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="text-[#FDF5E6]/60 text-center mb-12 max-w-xl mx-auto"
        >
          Tudo que você precisa pra começar a entregar projetos de IA que geram receita real.
        </motion.p>

        <motion.div variants={stagger} className="grid sm:grid-cols-2 gap-6">
          {deliverables.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="flex gap-4 p-6 rounded-xl bg-[#1A1E22] border border-[#00E5FF]/10 hover:border-[#00E5FF]/25 transition-colors"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#00E5FF]/10 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-[#00E5FF]" />
              </div>
              <div>
                <h3 className="text-[#FDF5E6] font-semibold mb-1">{item.title}</h3>
                <p className="text-[#FDF5E6]/60 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

// ─── QUEM ENSINA ─────────────────────────────────────────────────────────────

function WhoTeaches() {
  return (
    <section className="py-20 px-6 bg-[#1A1E22]">
      <motion.div
        className="max-w-4xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={stagger}
      >
        <motion.h2
          variants={fadeUp}
          className="text-3xl sm:text-4xl font-bold text-[#FDF5E6] mb-12 text-center"
        >
          Quem tá do outro lado
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-8">
          <motion.div variants={fadeUp} className="p-8 rounded-xl bg-[#2F353A] border border-[#CD7F32]/20">
            <div className="w-14 h-14 rounded-full bg-[#CD7F32]/10 flex items-center justify-center mb-4 text-2xl">
              P
            </div>
            <h3 className="text-xl font-bold text-[#FDF5E6] mb-2">Pedro Ribeiro</h3>
            <p className="text-[#CD7F32] text-sm font-mono mb-3">High-ticket closer & dev</p>
            <p className="text-[#FDF5E6]/60 text-sm">
              Vende projetos de IA pra empresas. Construiu o sistema de apresentação
              que usa em calls de vendas high-ticket. Na prática: faz e vende.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="p-8 rounded-xl bg-[#2F353A] border border-[#00E5FF]/20">
            <div className="w-14 h-14 rounded-full bg-[#00E5FF]/10 flex items-center justify-center mb-4 text-2xl">
              M
            </div>
            <h3 className="text-xl font-bold text-[#FDF5E6] mb-2">Murillo</h3>
            <p className="text-[#00E5FF] text-sm font-mono mb-3">Full-stack & growth strategy</p>
            <p className="text-[#FDF5E6]/60 text-sm">
              Desenvolvedor full-stack que construiu SaaS com IA pro setor de RH
              e fechou contrato. Constrói sistemas que funcionam em produção, não em demo.
            </p>
          </motion.div>
        </div>

        <motion.p
          variants={fadeUp}
          className="text-center text-[#FDF5E6]/50 text-sm mt-8"
        >
          A gente não ensina teoria. Mostra o que faz nos próprios projetos e te ajuda a fazer igual.
        </motion.p>
      </motion.div>
    </section>
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
    <section className="py-20 px-6 bg-[#2F353A]">
      <motion.div
        className="max-w-lg mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={stagger}
      >
        <motion.div
          variants={fadeUp}
          className="rounded-2xl bg-[#1A1E22] border border-[#00E5FF]/20 overflow-hidden"
        >
          {/* Header */}
          <div className="p-8 text-center border-b border-[#00E5FF]/10">
            <p className="text-[#00E5FF] text-sm font-mono uppercase tracking-wider mb-2">
              Preço fundador
            </p>
            <div className="flex items-baseline justify-center gap-1 mb-1">
              <span className="text-5xl font-bold text-[#FDF5E6]">R$250</span>
              <span className="text-[#FDF5E6]/50 text-lg">/ano</span>
            </div>
            <p className="text-[#FDF5E6]/40 text-sm">
              R$0,68 por dia &middot; menos que um café
            </p>
            <p className="text-[#CD7F32] text-xs font-mono mt-3">
              Depois dos primeiros 20 membros: R$99/mês
            </p>
          </div>

          {/* Inclui */}
          <div className="p-8">
            <ul className="space-y-3 mb-8">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#00E5FF] flex-shrink-0 mt-0.5" />
                  <span className="text-[#FDF5E6]/80 text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
              className="block w-full text-center px-8 py-4 rounded-lg bg-[#00E5FF] text-[#1A1E22] font-bold text-lg hover:bg-[#00E5FF]/90 transition-colors"
            >
              Entrar no Bunker — R$250/ano
            </a>

            <p className="text-center text-[#FDF5E6]/30 text-xs mt-4">
              Pagamento seguro. Acesso imediato.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
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
    <section className="py-20 px-6 bg-[#1A1E22]">
      <motion.div
        className="max-w-2xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={stagger}
      >
        <motion.h2
          variants={fadeUp}
          className="text-3xl font-bold text-[#FDF5E6] mb-10 text-center"
        >
          Perguntas frequentes
        </motion.h2>

        <motion.div variants={stagger} className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="rounded-xl border border-[#FDF5E6]/10 overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-[#FDF5E6]/[0.02] transition-colors"
              >
                <span className="text-[#FDF5E6] font-medium pr-4">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[#FDF5E6]/40 flex-shrink-0 transition-transform ${
                    open === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-5 pb-5">
                  <p className="text-[#FDF5E6]/60 text-sm">{faq.a}</p>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

// ─── CTA FINAL ───────────────────────────────────────────────────────────────

function FinalCTA() {
  return (
    <section className="py-20 px-6 bg-[#2F353A]">
      <motion.div
        className="max-w-2xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={stagger}
      >
        <motion.h2
          variants={fadeUp}
          className="text-3xl sm:text-4xl font-bold text-[#FDF5E6] mb-4"
        >
          Para de assistir. Começa a entregar.
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="text-[#FDF5E6]/60 mb-8 text-lg"
        >
          R$250/ano. Acesso direto a quem faz. Sem enrolação.
        </motion.p>

        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-[#00E5FF] text-[#1A1E22] font-bold text-lg hover:bg-[#00E5FF]/90 transition-colors"
          >
            Entrar no Bunker — R$250/ano
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-[#FDF5E6]/20 text-[#FDF5E6] font-medium hover:bg-[#FDF5E6]/5 transition-colors"
          >
            Falar no WhatsApp
            <MessageCircle className="w-5 h-5" />
          </a>
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="text-[#FDF5E6]/30 text-xs mt-6"
        >
          Preço de fundador pros 20 primeiros. Depois sobe pra R$99/mês.
        </motion.p>
      </motion.div>
    </section>
  );
}

// ─── FOOTER ──────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="py-8 px-6 bg-[#1A1E22] border-t border-[#FDF5E6]/5">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[#FDF5E6]/30 text-xs">
        <span>Bunker da IA &mdash; MaisVendas Pro</span>
        <span>Dúvidas? <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-[#00E5FF]/50 hover:text-[#00E5FF]">WhatsApp</a></span>
      </div>
    </footer>
  );
}

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function BunkerLP() {
  return (
    <div className="bg-[#1A1E22] min-h-screen">
      <Hero />
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
