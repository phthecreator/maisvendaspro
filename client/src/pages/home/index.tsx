import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, Menu, Check, ChevronDown } from 'lucide-react';
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

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
    desc: 'Configuramos squads de IA sob medida — agentes que executam tarefas reais do seu negócio.',
  },
  {
    num: '03',
    title: 'Treinamento',
    desc: 'Seu time aprende a operar, ajustar e escalar os squads sem depender de nós.',
  },
  {
    num: '04',
    title: 'Acompanhamento',
    desc: 'Suporte contínuo, métricas de ROI e expansão progressiva dos agentes.',
  },
];

const stats = [
  { value: '67', label: 'Squads operacionais' },
  { value: '35+', label: 'Mentes clonadas' },
  { value: '400+', label: 'Agentes especializados' },
  { value: '20', label: 'Dias para deploy' },
];

export default function Home() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start start', 'end start'],
  });

  const yHero = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.phone) return;
    setFormSubmitted(true);
  };

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div ref={scrollRef} className="relative min-h-screen bg-black text-white selection:bg-[#00ff88]/20">
      {/* --- HEADER --- */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/70 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 group">
            <div className="relative w-8 h-8 flex items-center justify-center bg-[#00ff88] rounded-md">
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
            <a
              href="/mvp-academy"
              className="text-[#00ff88] hover:text-[#00ff88]/80 transition-colors"
            >
              Academy
            </a>
          </nav>

          <div className="flex items-center gap-3">
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
                  <SheetClose asChild>
                    <a
                      href="/mvp-academy"
                      className="rounded-lg border border-[#00ff88]/20 bg-[#00ff88]/5 px-4 py-3 text-sm text-[#00ff88]"
                    >
                      Academy
                    </a>
                  </SheetClose>
                </div>
                <div className="mt-auto px-4 pb-6">
                  <SheetClose asChild>
                    <button
                      onClick={() => scrollTo('qualify')}
                      className="w-full rounded-lg bg-[#00ff88] px-5 py-3 text-sm font-semibold text-black"
                    >
                      Começar agora
                    </button>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
            <button
              onClick={() => scrollTo('qualify')}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-[#00ff88] rounded-lg text-sm font-semibold text-black hover:bg-[#00dd77] transition-colors"
            >
              Começar agora
            </button>
          </div>
        </div>
      </header>

      {/* --- HERO --- */}
      <motion.section
        id="top"
        className="relative z-10 min-h-screen flex flex-col justify-center px-4 sm:px-6 pt-24"
        style={{ y: yHero, opacity: opacityHero }}
      >
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88] animate-pulse" />
            <span className="text-white/50 text-xs">Enterprise AI Infrastructure</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05] text-white mb-6"
          >
            Squads de IA que{' '}
            <span className="text-[#00ff88]">operam</span>
            <br />
            sua empresa.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white/40 max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Não vendemos ferramentas. Implantamos times de agentes inteligentes
            que executam tarefas reais — vendas, suporte, operações, análise — 24/7.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={() => scrollTo('qualify')}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#00ff88] text-black text-sm font-semibold rounded-lg hover:bg-[#00dd77] transition-colors"
            >
              Testar 5 squads grátis
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollTo('como-funciona')}
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/10 text-white/60 text-sm rounded-lg hover:text-white hover:border-white/20 transition-colors"
            >
              Como funciona
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* --- QUALIFICATION FORM --- */}
      <section id="qualify" className="relative z-20 py-24 px-4 sm:px-6">
        <div className="mx-auto max-w-2xl">
          <AnimatePresence mode="wait">
            {!formSubmitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <div className="text-center mb-10">
                  <span className="font-mono text-[#00ff88] text-xs tracking-widest mb-3 block">
                    /// QUALIFICAÇÃO
                  </span>
                  <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-3">
                    Descubra como IA pode escalar sua operação
                  </h2>
                  <p className="text-white/40 text-sm">
                    Preencha para receber seu diagnóstico + acesso a 5 squads gratuitos.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-white/40 mb-1.5">Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => updateField('email', e.target.value)}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#00ff88]/50 transition-colors"
                        placeholder="seu@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-white/40 mb-1.5">Telefone *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => updateField('phone', e.target.value)}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#00ff88]/50 transition-colors"
                        placeholder="(00) 00000-0000"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-white/40 mb-1.5">Empresa</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => updateField('company', e.target.value)}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#00ff88]/50 transition-colors"
                        placeholder="Nome da empresa"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-white/40 mb-1.5">Instagram</label>
                      <input
                        type="text"
                        value={formData.instagram}
                        onChange={(e) => updateField('instagram', e.target.value)}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#00ff88]/50 transition-colors"
                        placeholder="@seuinstagram"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-white/40 mb-3">Já usa IA para automatizar processos?</label>
                    <div className="flex gap-3">
                      {['Sim', 'Não'].map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => updateField('usesAI', opt)}
                          className={`px-6 py-2.5 rounded-lg border text-sm transition-colors ${
                            formData.usesAI === opt
                              ? 'border-[#00ff88] bg-[#00ff88]/10 text-[#00ff88]'
                              : 'border-white/10 bg-white/5 text-white/50 hover:text-white'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-white/40 mb-3">Quanto já investiu em tecnologia?</label>
                    <div className="flex flex-wrap gap-2">
                      {investmentRanges.map((range) => (
                        <button
                          key={range}
                          type="button"
                          onClick={() => updateField('invested', range)}
                          className={`px-4 py-2 rounded-lg border text-xs transition-colors ${
                            formData.invested === range
                              ? 'border-[#00ff88] bg-[#00ff88]/10 text-[#00ff88]'
                              : 'border-white/10 bg-white/5 text-white/50 hover:text-white'
                          }`}
                        >
                          {range}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-white/40 mb-3">Quanto investiria em automação com IA?</label>
                    <div className="flex flex-wrap gap-2">
                      {wouldInvestRanges.map((range) => (
                        <button
                          key={range}
                          type="button"
                          onClick={() => updateField('wouldInvest', range)}
                          className={`px-4 py-2 rounded-lg border text-xs transition-colors ${
                            formData.wouldInvest === range
                              ? 'border-[#00ff88] bg-[#00ff88]/10 text-[#00ff88]'
                              : 'border-white/10 bg-white/5 text-white/50 hover:text-white'
                          }`}
                        >
                          {range}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#00ff88] text-black font-semibold rounded-lg hover:bg-[#00dd77] transition-colors text-sm"
                  >
                    Quero meu diagnóstico gratuito
                  </button>

                  <p className="text-center text-xs text-white/30">
                    Seus dados são protegidos. Sem spam.
                  </p>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#00ff88]/10 border border-[#00ff88]/30 flex items-center justify-center">
                  <Check className="w-8 h-8 text-[#00ff88]" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">Dados recebidos</h3>
                <p className="text-white/40 mb-8 max-w-md mx-auto">
                  Seu diagnóstico será enviado em até 24h. Enquanto isso, você já pode testar 5 squads gratuitamente.
                </p>

                <div className="border border-[#00ff88]/20 bg-[#00ff88]/5 rounded-lg p-8 mb-8">
                  <h4 className="text-lg font-semibold text-[#00ff88] mb-2">5 Squads grátis para testar</h4>
                  <p className="text-white/40 text-sm mb-6">
                    Acesso imediato a squads de vendas, suporte, análise de dados, copywriting e automação.
                  </p>
                  <a
                    href="https://wa.me/556291508399?text=Quero%20testar%20os%205%20squads%20gr%C3%A1tis"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#00ff88] text-black text-sm font-semibold rounded-lg hover:bg-[#00dd77] transition-colors"
                  >
                    Ativar squads agora
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

                <button
                  onClick={() => scrollTo('como-funciona')}
                  className="text-white/40 text-sm hover:text-white transition-colors"
                >
                  Ou continue explorando <ChevronDown className="w-4 h-4 inline" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* --- COMO FUNCIONA --- */}
      <section id="como-funciona" className="relative z-20 py-24 px-4 sm:px-6 border-t border-white/5">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <span className="font-mono text-[#00ff88] text-xs tracking-widest mb-3 block">/// PROCESSO</span>
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
                className="relative p-6 border border-white/5 bg-white/[0.02] rounded-lg group hover:border-white/10 transition-colors"
              >
                <span className="font-mono text-[#00ff88]/40 text-xs mb-4 block">{step.num}</span>
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
            <span className="font-mono text-[#00ff88] text-xs tracking-widest mb-3 block">/// O SISTEMA</span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
              Infraestrutura que opera em escala
            </h2>
            <p className="text-white/40 max-w-xl mx-auto">
              Um ecossistema de agentes especializados, treinados com mentes reais de mercado,
              prontos para integrar à sua operação.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="p-6 border border-white/5 bg-white/[0.02] rounded-lg text-center"
              >
                <div className="text-3xl md:text-4xl font-semibold text-[#00ff88] mb-1 font-mono">
                  {stat.value}
                </div>
                <p className="text-xs text-white/40">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA FINAL --- */}
      <section id="cta" className="relative z-20 py-24 px-4 sm:px-6 border-t border-white/5">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
            Agende um diagnóstico gratuito
          </h2>
          <p className="text-white/40 mb-8">
            30 minutos. Sem compromisso. Mapeamos onde IA pode gerar resultado real na sua operação.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => scrollTo('qualify')}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#00ff88] text-black text-sm font-semibold rounded-lg hover:bg-[#00dd77] transition-colors"
            >
              Agendar diagnóstico
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="https://wa.me/556291508399"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/10 text-white/60 text-sm rounded-lg hover:text-white hover:border-white/20 transition-colors"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 border-t border-white/5 px-4 sm:px-6">
        <div className="mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-md bg-[#00ff88] flex items-center justify-center">
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
            <a href="/mvp-academy" className="hover:text-white/60 transition-colors">Academy</a>
            <a href="https://wa.me/556291508399" className="hover:text-white/60 transition-colors">WhatsApp</a>
          </div>

          <span className="text-xs text-white/20">
            &copy; 2026 Mais Vendas Pro
          </span>
        </div>
      </footer>
    </div>
  );
}
