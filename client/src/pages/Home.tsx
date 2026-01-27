import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import UnderworldBackground from '../components/lp2/UnderworldBackground';
import { Bot, MessageSquare, Zap, Terminal, Cpu, ArrowRight, CheckCircle2, Menu } from 'lucide-react';
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

export default function Home() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end start"]
  });

  const yHero = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div ref={scrollRef} className="min-h-screen bg-[#020617] font-sans selection:bg-[#00ff88] selection:text-black text-white overflow-x-hidden">
      
      {/* --- BACKGROUND LAYERS --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Noise Texture for Film/Premium feel */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
        
        {/* Deep Glows */}
        <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-[#00ff88] rounded-full blur-[180px] opacity-[0.08]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-[#00ff88] rounded-full blur-[200px] opacity-[0.05]"></div>
        
        {/* Animated Grid Floor */}
        <div className="absolute bottom-0 left-0 w-full h-[50vh] bg-[linear-gradient(to_bottom,transparent_0%,#020617_100%),linear-gradient(rgba(0,255,136,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,136,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] [transform:perspective(1000px)_rotateX(60deg)] origin-bottom opacity-20"></div>
      </div>

      {/* --- HEADER --- */}
      <header className="fixed top-0 w-full z-50 border-b border-white/[0.05] bg-[#020617]/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 h-20 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 flex items-center justify-center overflow-hidden bg-white/[0.03] border border-white/10 rounded-lg group-hover:border-[#00ff88]/50 transition-colors duration-500">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[#00ff88] transform group-hover:rotate-12 transition-transform duration-500">
                <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-white text-sm leading-none">MAIS VENDAS</span>
              <span className="font-mono text-[10px] text-[#00ff88] tracking-[0.2em] leading-none mt-1">PRO_SYSTEMS</span>
            </div>
          </a>
          
          <nav className="hidden md:flex gap-10 text-xs font-medium uppercase tracking-widest text-white/50">
            <button onClick={() => scrollTo('top')} className="hover:text-white transition-colors">Início</button>
            <button onClick={() => scrollTo('niveis')} className="hover:text-white transition-colors">Soluções</button>
            <a href="/portfolio" className="hover:text-white transition-colors">Portfólio</a>
            <a href="/lp2" className="text-[#00ff88] hover:text-[#00ff88]/80 transition-colors">Ia_lucrativa_1</a>
          </nav>

          <div className="flex items-center gap-3">
            <Sheet>
              <SheetTrigger className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:text-white hover:border-[#00ff88]/60">
                <Menu className="h-5 w-5" />
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#020617] border-white/10 text-white">
                <SheetHeader>
                  <SheetTitle className="text-xs uppercase tracking-[0.3em] text-white/60">Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-2 px-4 pb-6">
                  <SheetClose asChild>
                    <button onClick={() => scrollTo('top')} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-left text-sm font-semibold text-white/80 hover:text-white">
                      Início
                    </button>
                  </SheetClose>
                  <SheetClose asChild>
                    <button onClick={() => scrollTo('niveis')} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-left text-sm font-semibold text-white/80 hover:text-white">
                      Soluções
                    </button>
                  </SheetClose>
                  <SheetClose asChild>
                    <a href="/portfolio" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/80 hover:text-white">
                      Portfólio
                    </a>
                  </SheetClose>
                  <SheetClose asChild>
                    <a href="/lp2" className="rounded-xl border border-[#00ff88]/30 bg-[#00ff88]/10 px-4 py-3 text-sm font-semibold text-[#00ff88]">
                      Ia_lucrativa_1
                    </a>
                  </SheetClose>
                </div>
                <div className="mt-auto px-4 pb-6">
                  <SheetClose asChild>
                    <a
                      href="https://wa.me/556191185635"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#00ff88] px-5 py-3 text-xs font-bold uppercase tracking-wide text-[#020617]"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-black animate-pulse"></span>
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
              <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88] group-hover:bg-black animate-pulse"></span>
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
            <span className="font-mono text-[#00ff88] text-xs">● SYSTEM_ONLINE</span>
            <span className="w-px h-3 bg-[#00ff88]/20"></span>
            <span className="text-white/60 text-xs tracking-wide">Automação Comercial v2.0</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-8xl font-medium tracking-tighter leading-[0.95] text-white mb-8"
          >
            IA no WhatsApp <br />
            <span className="font-serif italic text-white/40">que responde,</span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] to-emerald-600 terminal-font">qualifica & agenda.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed font-light mb-16"
          >
            Enquanto você vive, ela trabalha. Uma infraestrutura invisível que não deixa nenhum lead escapar.
            <span className="block mt-6 text-xs font-mono text-white/30">
              // Primeiro entendemos o problema. Depois entregamos o código.
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
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-[#00ff88] text-[#020617] text-sm font-bold uppercase tracking-widest overflow-hidden transition-all hover:pr-12"
            >
              <span className="relative z-10">Iniciar Diagnóstico</span>
              <div className="absolute right-0 top-0 h-full w-12 bg-black/10 flex items-center justify-center translate-x-12 group-hover:translate-x-0 transition-transform duration-300">
                <ArrowRight className="w-4 h-4" />
              </div>
            </a>
            <p className="text-[10px] text-white/20 uppercase tracking-[0.2em]">Gratuito • Sem Compromisso</p>
          </motion.div>
        </div>
      </motion.section>

      {/* --- SECTION 2: THE PROCESS (Minimalist Timeline) --- */}
      <section className="relative z-20 py-32 border-t border-white/5 bg-[#020617]">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-white mb-6">
                Não vendemos <br/><span className="text-[#00ff88] font-mono">robôs</span>.
              </h2>
              <p className="text-white/60 text-lg font-light leading-relaxed">
                Vendemos a arquitetura certa para o seu negócio. 
                Tecnologia sem estratégia é apenas custo. Nós entregamos ativo.
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <div className="h-px bg-white/10 flex-1"></div>
              <div className="font-mono text-xs text-white/30 uppercase tracking-widest">Protocolo de Entrega</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { icon: MessageSquare, title: "01. Diagnóstico", desc: "Input inicial via WhatsApp" },
              { icon: Cpu, title: "02. Análise", desc: "Processamento de cenário" },
              { icon: Terminal, title: "03. Direção", desc: "Seleção de arquitetura" },
              { icon: Zap, title: "04. Execução", desc: "Deploy e otimização" },
            ].map((step, i) => (
              <div key={i} className="group relative p-8 border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-500">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-[#00ff88] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <step.icon className="w-8 h-8 text-white/20 group-hover:text-[#00ff88] transition-colors duration-500 mb-6" />
                <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-white/40 font-mono">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 3: SOLUTIONS (Dark Cards) --- */}
      <section id="niveis" className="relative z-20 py-32 px-6 bg-[#020617]">
        <div className="mx-auto max-w-6xl">
          <div className="mb-20">
            <span className="font-mono text-[#00ff88] text-xs tracking-widest mb-4 block">/// SYSTEM_MODULES</span>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-white">
              Soluções <span className="text-white/30 italic font-serif">Nível 1</span>
            </h2>
            <p className="text-white/50 mt-4 max-w-xl">
              Módulos validados e prontos para deploy imediato. Escala sem fricção.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group border border-white/10 bg-[#050a1f] p-10 hover:border-[#00ff88]/30 transition-all duration-500">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-8 group-hover:bg-[#00ff88] group-hover:text-black transition-all duration-500">
                <Bot className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium text-white mb-4">SDR AI Agent</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-8">
                Agente autônomo de qualificação. Filtra leads, responde dúvidas técnicas e agenda reuniões diretamente no calendar.
              </p>
              <div className="flex gap-2">
                <span className="text-[10px] border border-white/10 px-2 py-1 text-white/30 font-mono uppercase">WhatsApp</span>
                <span className="text-[10px] border border-white/10 px-2 py-1 text-white/30 font-mono uppercase">OpenAI</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group border border-white/10 bg-[#050a1f] p-10 hover:border-[#00ff88]/30 transition-all duration-500">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-8 group-hover:bg-[#00ff88] group-hover:text-black transition-all duration-500">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium text-white mb-4">Broadcast System</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-8">
                Infraestrutura de disparo inteligente. Gestão de listas, higienização de contatos e alta taxa de entrega.
              </p>
              <div className="flex gap-2">
                <span className="text-[10px] border border-white/10 px-2 py-1 text-white/30 font-mono uppercase">CRM</span>
                <span className="text-[10px] border border-white/10 px-2 py-1 text-white/30 font-mono uppercase">API</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group border border-white/10 bg-[#050a1f] p-10 hover:border-[#00ff88]/30 transition-all duration-500">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-8 group-hover:bg-[#00ff88] group-hover:text-black transition-all duration-500">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium text-white mb-4">Zé Disparo (FB)</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-8">
                Automação high-speed para Facebook. Escala agressiva de contato inicial para operações de volume.
              </p>
              <div className="flex gap-2">
                <span className="text-[10px] border border-white/10 px-2 py-1 text-white/30 font-mono uppercase">Meta</span>
                <span className="text-[10px] border border-white/10 px-2 py-1 text-white/30 font-mono uppercase">Scale</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: LEVELS (Architectural View) --- */}
      <section className="relative z-20 py-32 px-6 border-t border-white/5 bg-[#020617]">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-medium tracking-tighter text-white mb-8">
                Arquitetura de Soluções
              </h2>
              <p className="text-white/50 text-lg font-light leading-relaxed mb-12">
                Não existe "bala de prata". Existe a ferramenta certa para o estágio certo do seu negócio.
              </p>
              <a href="https://wa.me/556191185635" className="text-[#00ff88] border-b border-[#00ff88]/30 pb-1 hover:text-white hover:border-white transition-colors text-sm font-mono uppercase tracking-widest">
                Descobrir meu nível &rarr;
              </a>
            </div>

            <div className="space-y-6">
              {[
                { lvl: "01", name: "Pronto (Recorrência)", desc: "Plug & Play. Ideal para quem precisa de velocidade." },
                { lvl: "02", name: "Sob Medida (Projeto)", desc: "Custom Code. Para problemas específicos e fluxos complexos." },
                { lvl: "03", name: "Educação (Mentoria)", desc: "Transferência de Know-how. Aprenda a operar a máquina." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-6 p-6 border border-white/5 bg-white/[0.02] hover:border-[#00ff88]/20 transition-colors">
                  <div className="text-[#00ff88] font-mono text-xl font-bold opacity-50">{item.lvl}</div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.name}</h3>
                    <p className="text-white/40 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 5: WHY QUESTIONS (Terminal Style) --- */}
      <section className="relative z-20 py-32 px-6 bg-[#000]">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-medium text-white mb-12 tracking-tighter">
            System Check
          </h2>
          
          <div className="bg-[#0a0a0a] border border-white/10 rounded-lg p-2 md:p-12 text-left font-mono text-sm md:text-base shadow-2xl">
            <div className="flex gap-2 mb-8 border-b border-white/5 pb-4">
              <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
            </div>
            
            <div className="space-y-4 text-white/70">
              <div className="flex gap-3">
                <span className="text-[#00ff88]">➜</span>
                <span>Analisando origem dos leads...</span>
              </div>
              <div className="flex gap-3">
                <span className="text-[#00ff88]">➜</span>
                <span>Detectando gargalos de conversão...</span>
              </div>
              <div className="flex gap-3">
                <span className="text-[#00ff88]">➜</span>
                <span>Filtrando curiosos vs. compradores...</span>
              </div>
              <div className="flex gap-3">
                <span className="text-[#00ff88]">➜</span>
                <span>Calculando viabilidade de automação...</span>
              </div>
              
              <div className="mt-8 p-4 bg-[#00ff88]/10 border-l-2 border-[#00ff88] text-white">
                <span className="font-bold text-[#00ff88]">STATUS:</span> Aguardando input do usuário. Sem contexto, a IA é inútil.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 6: CTA --- */}
      <section className="relative z-20 py-40 px-6 bg-[#020617] overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,136,0.05)_0%,transparent_70%)]"></div>
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-medium text-white mb-8 tracking-tighter">
            Pare de perder lead <br/>
            <span className="text-white/20">por latência.</span>
          </h2>
          
          <a 
            href="https://wa.me/556191185635"
            className="inline-flex items-center justify-center px-10 py-5 bg-[#00ff88] hover:bg-[#00cc6a] text-black text-lg font-bold uppercase tracking-widest transition-all hover:scale-105"
          >
            Iniciar Protocolo
          </a>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 border-t border-white/5 bg-[#010203] text-center px-6">
        <div className="flex items-center justify-center gap-2 mb-4 opacity-50">
          <div className="w-3 h-3 bg-[#00ff88] rounded-full"></div>
          <span className="font-mono text-white text-xs tracking-widest uppercase">Mais Vendas Pro</span>
        </div>
        <p className="text-white/20 text-xs font-mono">
          System Operational • 2026
        </p>
      </footer>
    </div>
  );
}
