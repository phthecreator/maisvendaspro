import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useMemo, useRef, useState } from "react";
import SecretTerminal from "../components/lp2/SecretTerminal";
import { Menu } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const images = {
  skyline: "/portfolio/01-skyline.jpg",
  studio: "/portfolio/02-studio.jpg",
  hoodie: "/portfolio/03-hoodie.jpg",
  desk: "/portfolio/04-desk.jpg",
};

type Step = {
  id: string;
  kicker?: string;
  title?: string;
  description?: string;
  highlights?: string[];
  bg: string;
  image?: string;
  imageAlt?: string;
  layout?: "split" | "full";
  content: React.ReactNode;
};

const steps: Step[] = [
  {
    id: "sobre",
    title: "Quem sou eu",
    bg: "linear-gradient(135deg, rgba(57,255,20,0.10), rgba(0,0,0,0.92) 55%, rgba(0,153,255,0.12))",
    image: images.hoodie,
    imageAlt: "Pedro Henrique, CTO & Co-Founder da MaisVendasPro",
    content: (
      <div className="space-y-10">
        <div className="space-y-6">
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-primary/70">CTO & Co-Founder</p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white">
            Engenheiro de sistemas que geram receita
          </h2>
          <div className="space-y-4 text-base sm:text-lg md:text-xl text-white/80 leading-relaxed">
            <p>
              Sou Pedro Henrique. CTO e Co-Founder da MaisVendasPro. Arquiteto de sistemas de automação comercial
              com projetos em produção em 3 verticais diferentes: café, imobiliário e indústria.
            </p>
            <p>
              Passei 2 anos no Vale do Silício estudando como empresas que movem bilhões estruturam
              operações de vendas com IA. Voltei com uma obsessão: trazer essa mentalidade pro mercado brasileiro.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 text-white/80">
          <p className="text-xl md:text-2xl font-semibold text-white">
            Automação sem estratégia é só tecnologia cara parada. Eu construo sistemas que vendem.
          </p>
        </div>

        <div className="space-y-6">
          <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed">
            O que me diferencia de 90% dos devs e agências:
          </p>
          <ul className="space-y-4 text-white/70 leading-relaxed text-base md:text-lg">
            <li>
              → Eu entendo de vendas, copy e operação comercial. Não só de código.
            </li>
            <li>
              → Lidero um squad estruturado (Dev + QA + Advisory Board) com processos de empresa grande.
            </li>
            <li>→ Cada entrega tem documentação, treinamento e suporte por 90 dias incluído.</li>
          </ul>
        </div>

        <div className="mt-10 space-y-8">
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.4em] text-primary/70">
            <span>Perfil ideal de cliente</span>
            <span className="h-px flex-1 bg-white/10" />
          </div>
          <h3 className="text-2xl md:text-4xl font-black tracking-tighter text-white">
            Para quem eu construo
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-white/50">Clientes ideais</p>
              <ul className="space-y-4 text-white/70 leading-relaxed">
                <li>
                  ✓ Agências de marketing que querem oferecer automação com IA como serviço
                </li>
                <li>
                  ✓ SaaS e empresas B2B que precisam escalar operações sem escalar headcount
                </li>
                <li>
                  ✓ Redes de clínicas, consultórios e franquias que precisam de agendamento inteligente
                </li>
                <li>
                  ✓ Empresários que entendem que sistema é investimento com ROI mensurável
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-white/50">O que entrego</p>
              <ul className="space-y-4 text-white/70 leading-relaxed">
                <li>✓ MVP funcional em 7 dias (landing + agendamento + automação)</li>
                <li>✓ Performance garantida: Lighthouse {">"} 90, LCP {"<"} 2.5s</li>
                <li>✓ Stack enterprise: React 19, Supabase, Vercel Edge CDN</li>
                <li>✓ Documentação completa + treinamento da equipe</li>
              </ul>
              <p className="text-white/80 font-semibold">
                Entrega profissional. Processo de empresa grande. Velocidade de startup.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "o-que-eu-faco",
    title: "Soluções que entrego",
    bg: "linear-gradient(135deg, rgba(255,0,82,0.12), rgba(0,0,0,0.92) 55%, rgba(57,255,20,0.08))",
    layout: "full",
    content: (
      <div className="space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-card border border-primary/20 rounded-2xl p-6 sm:p-8 hover:border-primary/40 transition-all group relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-primary/10 text-primary text-[10px] font-black px-3 py-1 uppercase tracking-widest">A partir de $3.000</div>
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
              <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">Specialist Squad</h3>
            <p className="mt-2 text-sm text-primary/80 font-semibold uppercase tracking-wider">MVP em 7 dias</p>
            <p className="mt-3 text-white/60 leading-relaxed">
              Landing page de alta conversão + sistema de agendamento (Cal.com) + integração WhatsApp + CRM básico.
              Tudo deployado em Vercel com performance garantida (Lighthouse {">"} 90).
            </p>
            <ul className="mt-4 space-y-2 text-white/50 text-sm">
              <li className="flex items-center gap-2"><span className="text-primary">✔</span> Entrega em 7 dias</li>
              <li className="flex items-center gap-2"><span className="text-primary">✔</span> Documentação + Treinamento incluído</li>
              <li className="flex items-center gap-2"><span className="text-primary">✔</span> Suporte 90 dias</li>
            </ul>
            <p className="mt-4 text-xs uppercase tracking-widest text-white/40">
              Landing / Agendamento / WhatsApp / Deploy
            </p>
          </div>

          <div className="bg-card border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-primary/20 transition-all group relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-white/5 text-white/60 text-[10px] font-black px-3 py-1 uppercase tracking-widest">$6.000 - $15.000</div>
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10">
              <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">Enterprise OS</h3>
            <p className="mt-2 text-sm text-primary/80 font-semibold uppercase tracking-wider">Sistema completo em 30 dias</p>
            <p className="mt-3 text-white/60 leading-relaxed">
              Dashboard executivo + SDR com IA + CRM integrado (Pipedrive) + automações de email (Resend) + analytics
              avançado + relatórios automáticos. Infraestrutura enterprise com Supabase + Vercel Edge CDN.
            </p>
            <ul className="mt-4 space-y-2 text-white/50 text-sm">
              <li className="flex items-center gap-2"><span className="text-primary">✔</span> Retainer mensal: $1.000 - $3.000</li>
              <li className="flex items-center gap-2"><span className="text-primary">✔</span> SLA 99.9% uptime</li>
              <li className="flex items-center gap-2"><span className="text-primary">✔</span> Squad dedicado (Dev + QA)</li>
            </ul>
            <p className="mt-4 text-xs uppercase tracking-widest text-white/40">
              Dashboard / SDR IA / CRM / Analytics / Integrações
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-card border border-white/5 rounded-2xl p-6 hover:border-primary/20 transition-all group">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/5 border border-primary/10">
              <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-sm font-bold text-white group-hover:text-primary transition-colors uppercase tracking-wider">SDR com IA</h3>
            <p className="mt-2 text-white/50 text-sm leading-relaxed">
              Qualificação automática 24/7. Resposta em 30 segundos. Integração CRM + WhatsApp.
            </p>
          </div>
          <div className="bg-card border border-white/5 rounded-2xl p-6 hover:border-primary/20 transition-all group">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/5 border border-primary/10">
              <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-sm font-bold text-white group-hover:text-primary transition-colors uppercase tracking-wider">Dashboard Analytics</h3>
            <p className="mt-2 text-white/50 text-sm leading-relaxed">
              Métricas em tempo real. Revenue, conversão, pipeline. Alertas automáticos no Slack.
            </p>
          </div>
          <div className="bg-card border border-white/5 rounded-2xl p-6 hover:border-primary/20 transition-all group">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/5 border border-primary/10">
              <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h3 className="text-sm font-bold text-white group-hover:text-primary transition-colors uppercase tracking-wider">Automações Comerciais</h3>
            <p className="mt-2 text-white/50 text-sm leading-relaxed">
              Fluxos de nurturing, remarketing, follow-up. Nenhum lead esquecido.
            </p>
          </div>
          <div className="bg-card border border-white/5 rounded-2xl p-6 hover:border-primary/20 transition-all group">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/5 border border-primary/10">
              <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-sm font-bold text-white group-hover:text-primary transition-colors uppercase tracking-wider">Segurança & Compliance</h3>
            <p className="mt-2 text-white/50 text-sm leading-relaxed">
              JWT + RLS + criptografia at rest. LGPD compliant. Auditoria automática.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "stack",
    title: "Stack & Processo",
    bg: "linear-gradient(135deg, rgba(0,153,255,0.16), rgba(0,0,0,0.92) 55%, rgba(255,0,82,0.10))",
    image: images.desk,
    imageAlt: "Pedro Henrique no setup de desenvolvimento",
    content: (
      <div className="space-y-10">
        <div className="space-y-4">
          <p className="text-base sm:text-lg text-white/80">Decisões técnicas documentadas em ADR (Architecture Decision Records)</p>
          <p className="text-white/70 leading-relaxed">
            Cada escolha de tecnologia passa por análise de trade-offs, custo e escalabilidade. Sem achismo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card border border-white/5 rounded-2xl p-6 sm:p-8">
            <p className="text-sm font-bold text-primary uppercase tracking-wider mb-6">Stack de Produção</p>
            <ul className="space-y-3 text-white/80 font-medium">
              <li className="flex items-center gap-2"><span className="text-primary">✔</span> React 19 + Vite 7 — Frontend (LCP {"<"} 2.5s, bundle {"<"} 100KB)</li>
              <li className="flex items-center gap-2"><span className="text-primary">✔</span> Tailwind 4 — Design system consistente</li>
              <li className="flex items-center gap-2"><span className="text-primary">✔</span> Supabase — Backend gerenciado (PostgreSQL + Auth + RLS)</li>
              <li className="flex items-center gap-2"><span className="text-primary">✔</span> Vercel Edge CDN — Deploy global, {"<"} 50ms TTFB</li>
              <li className="flex items-center gap-2"><span className="text-primary">✔</span> TypeScript — Type safety em 100% do código</li>
              <li className="flex items-center gap-2"><span className="text-primary">✔</span> Cal.com — Agendamento enterprise</li>
              <li className="flex items-center gap-2"><span className="text-primary">✔</span> Pipedrive + Resend — CRM + Email transacional</li>
              <li className="flex items-center gap-2"><span className="text-primary">✔</span> Evolution API — WhatsApp Business integrado</li>
              <li className="flex items-center gap-2"><span className="text-primary">✔</span> Vitest + Playwright — Testes automatizados</li>
            </ul>
          </div>
          <div className="bg-card border border-white/5 rounded-2xl p-6 sm:p-8">
            <p className="text-sm font-bold text-primary uppercase tracking-wider mb-6">Processo de Entrega</p>
            <ul className="space-y-4 text-white/80 font-medium text-lg">
              <li className="flex items-start gap-3">
                <span className="bg-primary/20 text-primary px-2 rounded text-sm mt-1">01</span>
                <span>Diagnóstico + PRD (Product Requirements Document)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-primary/20 text-primary px-2 rounded text-sm mt-1">02</span>
                <span>ADR — Decisões técnicas documentadas com trade-offs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-primary/20 text-primary px-2 rounded text-sm mt-1">03</span>
                <span>Sprint de desenvolvimento (Squad Dev + QA em paralelo)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-primary/20 text-primary px-2 rounded text-sm mt-1">04</span>
                <span>Quality Gates: Lighthouse {">"} 90, 0 bugs críticos, E2E passing</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-primary/20 text-primary px-2 rounded text-sm mt-1">05</span>
                <span>Deploy + Documentação + Treinamento da equipe</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card border border-white/5 rounded-2xl p-6 sm:p-8">
            <p className="text-sm font-bold text-primary uppercase tracking-wider mb-6">Quality Assurance</p>
            <ul className="space-y-3 text-white/80 leading-relaxed">
              <li>→ Lighthouse CI integrado no deploy (score {">"} 90 obrigatório)</li>
              <li>→ Testes unitários + E2E antes de cada release</li>
              <li>→ Security audit: 0 vulnerabilidades críticas</li>
              <li>→ Monitoramento: Vercel Analytics + LogRocket + Slack alerts</li>
            </ul>
          </div>
          <div className="bg-card border border-white/5 rounded-2xl p-6 sm:p-8">
            <p className="text-sm font-bold text-primary uppercase tracking-wider mb-6">Estrutura do Time</p>
            <p className="text-white/80 leading-relaxed text-lg">
              Trabalho com squads estruturados: Dev Lead + Frontend Senior + Backend Senior + QA.
              Cada projeto tem Advisory Board com mentores especializados em Tech, Product, Sales e Finance.
            </p>
            <p className="mt-4 text-white/60 leading-relaxed">
              Processo de empresa grande. Velocidade de startup. Resultado de quem entende de negócio.
            </p>
          </div>
        </div>

        <SecretTerminal />
      </div>
    ),
  },
  {
    id: "projetos",
    title: "Cases de Clientes",
    bg: "linear-gradient(135deg, rgba(57,255,20,0.16), rgba(0,0,0,0.92) 55%, rgba(255,204,0,0.10))",
    layout: "full",
    content: (
      <div className="space-y-10">
        <div className="space-y-3">
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-primary/70">Resultados documentados</p>
          <p className="text-lg text-white/70">Projetos reais. Métricas reais. ROI comprovado.</p>
        </div>

        <article className="rounded-3xl border border-primary/20 bg-primary/5 p-6 md:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8">
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <span className="bg-primary/20 text-primary text-[10px] font-black px-3 py-1 rounded uppercase tracking-widest">Automação com IA</span>
                <span className="bg-white/5 text-white/50 text-[10px] font-black px-3 py-1 rounded uppercase tracking-widest">Indústria de Café</span>
              </div>
              <h3 className="text-2xl font-black text-white">Patrocínio Café: Bot WhatsApp com IA para indústria de café</h3>
              <div className="space-y-3 text-white/80 leading-relaxed">
                <p><strong className="text-white">Cliente:</strong> Judson Gabriell Martins — Indústria de café em Patrocínio/MG. Marca própria (Café Vida) + white-label B2B para marcas como Virginia, Perdomo, Box da Crise.</p>
                <p><strong className="text-white">Problema:</strong> Dono era o gargalo da empresa. WhatsApp só respondia "Oi, como posso ajudar?". Pedidos B2B e B2C se perdiam no chat. Crescimento travado.</p>
                <p><strong className="text-white">Solução:</strong> Bot "Bela 2.0" com Gemini Flash + Z-API + Google Sheets. 5 fluxos automatizados: pedido B2C, captação B2B, catálogo, dúvidas e escalação para humano.</p>
              </div>
            </div>

            <div className="rounded-2xl border border-primary/30 bg-primary/10 p-6 space-y-4">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Entregáveis</p>
              <div className="space-y-3">
                <div><p className="text-primary font-black text-2xl">5</p><p className="text-white/60 text-sm">Fluxos de conversa automatizados</p></div>
                <div><p className="text-primary font-black text-2xl">24/7</p><p className="text-white/60 text-sm">Atendimento sem intervenção humana</p></div>
                <div><p className="text-primary font-black text-2xl">B2B + B2C</p><p className="text-white/60 text-sm">Captação de leads e pedidos unificada</p></div>
                <div><p className="text-primary font-black text-2xl">8%</p><p className="text-white/60 text-sm">Revenue share — parceria de longo prazo</p></div>
              </div>
            </div>
          </div>
        </article>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <article className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-primary/20 text-primary text-[10px] font-black px-3 py-1 rounded uppercase tracking-widest">SDR com IA</span>
              <span className="bg-white/5 text-white/50 text-[10px] font-black px-3 py-1 rounded uppercase tracking-widest">Imobiliária</span>
            </div>
            <h4 className="text-lg font-black text-white">CNR Imóveis: SDR com IA e RAG no WhatsApp</h4>
            <p className="text-white/70 leading-relaxed">
              <strong className="text-white">Problema:</strong> Leads chegavam no WhatsApp e ninguém respondia rápido. Qualificação manual. Informações espalhadas entre Digisac e planilhas.
            </p>
            <p className="text-white/70 leading-relaxed">
              <strong className="text-white">Solução:</strong> SDR com IA + RAG com base de conhecimento extraída de conversas reais + Inbox unificado multi-provedor + Supabase com RLS.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
              <div><p className="text-primary font-black text-xl">100</p><p className="text-white/50 text-xs">Conversas reais processadas</p></div>
              <div><p className="text-primary font-black text-xl">122</p><p className="text-white/50 text-xs">FAQs extraídas por IA</p></div>
              <div><p className="text-primary font-black text-xl">RAG</p><p className="text-white/50 text-xs">Base de conhecimento híbrida</p></div>
              <div><p className="text-primary font-black text-xl">Multi</p><p className="text-white/50 text-xs">Digisac + Evolution API</p></div>
            </div>
          </article>

          <article className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-primary/20 text-primary text-[10px] font-black px-3 py-1 rounded uppercase tracking-widest">Site + Catálogo</span>
              <span className="bg-white/5 text-white/50 text-[10px] font-black px-3 py-1 rounded uppercase tracking-widest">Indústria Automotiva</span>
            </div>
            <h4 className="text-lg font-black text-white">América Recondicionadora: do zero à presença digital</h4>
            <p className="text-white/70 leading-relaxed">
              <strong className="text-white">Problema:</strong> Empresa com 30+ anos em Goiânia sem presença digital. Catálogo de peças era PDF estático enviado por WhatsApp.
            </p>
            <p className="text-white/70 leading-relaxed">
              <strong className="text-white">Solução:</strong> Site profissional com catálogo digital 2026, viewer PDF integrado, busca de produtos e WhatsApp CTA. Deploy automatizado no Hostinger.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
              <div><p className="text-primary font-black text-xl">30+</p><p className="text-white/50 text-xs">Anos de empresa, primeiro site</p></div>
              <div><p className="text-primary font-black text-xl">2026</p><p className="text-white/50 text-xs">Catálogo digital atualizado</p></div>
              <div><p className="text-primary font-black text-xl">Live</p><p className="text-white/50 text-xs">Em produção no Hostinger</p></div>
              <div><p className="text-primary font-black text-xl">AIOS</p><p className="text-white/50 text-xs">Squad de 4 agentes na entrega</p></div>
            </div>
          </article>
        </div>

        <article className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.4em] text-primary/70 mb-6">
            <span>Nossos números reais</span>
            <span className="h-px flex-1 bg-white/10" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-primary text-3xl md:text-4xl font-black">5+</p>
              <p className="text-white/50 text-xs uppercase tracking-wider mt-1">Projetos em produção</p>
            </div>
            <div className="text-center">
              <p className="text-white text-3xl md:text-4xl font-black">3</p>
              <p className="text-white/50 text-xs uppercase tracking-wider mt-1">Verticais atendidas</p>
            </div>
            <div className="text-center">
              <p className="text-primary text-3xl md:text-4xl font-black">12</p>
              <p className="text-white/50 text-xs uppercase tracking-wider mt-1">Agentes IA no AIOS</p>
            </div>
            <div className="text-center">
              <p className="text-white text-3xl md:text-4xl font-black">7 dias</p>
              <p className="text-white/50 text-xs uppercase tracking-wider mt-1">Tempo médio de entrega</p>
            </div>
          </div>
        </article>
      </div>
    ),
  },
  {
    id: "vale-do-silicio",
    kicker: "Vale do Silício",
    title: "O que eu vi lá que o Brasil ainda não sacou",
    bg: "linear-gradient(135deg, rgba(0,153,255,0.12), rgba(0,0,0,0.92) 55%, rgba(57,255,20,0.08))",
    image: images.skyline,
    imageAlt: "Vista panoramica do Vale do Silicio",
    content: (
      <div className="flex flex-col gap-8">
        <div className="space-y-4 text-white/80 leading-relaxed text-base sm:text-lg">
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-primary/70">2 anos no Vale do Silício</p>
          <p>
            Entre 2023 e 2025, eu morei no Vale do Silício. Não fui pra tirar foto na frente do Google. Fui pra
            entender como times que movem bilhões trabalham de verdade.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl md:text-3xl font-black text-white">O que eu aprendi (e trago pro Brasil)</h3>

          <div className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 border border-primary/20 text-primary font-black text-sm">01</span>
                <p className="text-white font-semibold">Mentalidade de abundância vs mentalidade de escassez</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/70">
                <div className="rounded-xl border border-white/10 bg-black/40 p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">No Vale</p>
                  <p>“Vou investir 20k numa ferramenta, treinar o time e colher nos próximos anos.”</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-black/40 p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">No Brasil</p>
                  <p>“E se for golpe? E se não der certo? E se eu perder dinheiro?”</p>
                </div>
              </div>
              <p className="text-white/70">
                Resultado: lá eles testam rápido, erram barato e ajustam na mesma semana. Aqui, a maioria fica travada
                esperando “o momento certo” que nunca chega.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 border border-primary/20 text-primary font-black text-sm">02</span>
                <p className="text-white font-semibold">Contratar pelo potencial, não pelo currículo</p>
              </div>
              <p className="text-white/70">
                No Vale, empresa contrata júnior de 23 anos porque o foco é lapidar talento, não achar quem “já vem
                pronto”. No Brasil, a exigência é: “5 anos de experiência + sênior + que aceite salário de júnior.”
                Isso não é critério. É medo de investir em gente.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 border border-primary/20 text-primary font-black text-sm">03</span>
                <p className="text-white font-semibold">IA como infraestrutura, não como enfeite</p>
              </div>
              <p className="text-white/70">
                Lá, IA tá na base do sistema desde 2020. Não é “chatbot no site pra parecer moderno”. É automação
                rodando em CRM, qualificação, treinamento, análise de dados, predição de churn, otimização de funil —
                tudo integrado.
              </p>
              <p className="text-white/70">
                No Brasil, em 2025, a maioria ainda tá debatendo se IA “vai roubar emprego” ou “é só hype”. Enquanto
                isso, quem entendeu já tá usando IA como alavanca há 3 anos.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-black/50 p-6 space-y-4">
          <p className="text-white font-semibold">O que eu trouxe de lá</p>
          <ul className="space-y-2 text-white/70">
            <li>✓ Pensar em sistema, não em feature isolada</li>
            <li>✓ Velocidade de execução &gt; perfeição estética</li>
            <li>✓ Investir em processo porque ele escala, gente não</li>
            <li>✓ Usar IA como copiloto, não como substituto</li>
          </ul>
          <p className="text-white/80 font-semibold">
            Voltei pro Brasil com mais repertório, menos ilusão e foco total no que gera resultado: construir sistema
            que roda.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "contato",
    title: "Próximo passo",
    bg: "linear-gradient(135deg, rgba(255,204,0,0.16), rgba(0,0,0,0.92) 55%, rgba(57,255,20,0.10))",
    layout: "full",
    content: (
      <div className="text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-base sm:text-lg md:text-xl text-white/70 leading-relaxed">
            Diagnóstico gratuito de 30 minutos. Eu analiso sua operação, identifico os gargalos
            e te mostro exatamente onde automação gera ROI real.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-white/70 leading-relaxed">
            Sem compromisso. Sem enrolação. Se não fizer sentido, eu te digo.
          </p>
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 sm:p-8 max-w-xl mx-auto my-10">
          <p className="text-primary font-bold text-lg mb-2">Specialist Squad: a partir de $3.000 | Enterprise OS: $6.000+</p>
          <p className="text-white/60 text-sm">Entrega em 7 dias (Specialist) ou 30 dias (Enterprise). Documentação + treinamento + suporte 90 dias incluídos.</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://wa.me/556291508399" className="glow-primary inline-flex items-center justify-center rounded-xl bg-primary text-background text-lg font-black px-8 py-4 uppercase tracking-wide hover:scale-[1.02] active:scale-95 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)]">
            Agendar diagnóstico gratuito →
          </a>
        </div>

        <div className="mt-10 text-sm text-white/60 space-y-2">
          <p>Pedro Henrique — CTO & Co-Founder, MaisVendasPro</p>
          <p className="flex items-center justify-center gap-2">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            pedrohensmkt@gmail.com
          </p>
          <p className="flex items-center justify-center gap-2">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            www.linkedin.com/in/pedro-pag-dev
          </p>
        </div>
      </div>
    ),
  },
];

const variants = {
  inactive: { opacity: 0.9, y: 16 },
  active: { opacity: 1, y: 0 },
};

export default function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<Array<HTMLElement | null>>([]);
  const { scrollYProgress } = useScroll();
  const bgShift = useTransform(scrollYProgress, [0, 1], [20, -20]);

  const backgroundLayers = useMemo(
    () =>
      steps.map((step, index) => (
        <motion.div
          key={step.id}
          className="absolute inset-0"
          style={{ background: step.bg, y: bgShift }}
          animate={{ opacity: activeIndex === index ? 1 : 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      )),
    [activeIndex, bgShift]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            if (!Number.isNaN(index)) setActiveIndex(index);
          }
        });
      },
      { threshold: 0.6 }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-black relative overflow-x-hidden">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto max-w-6xl px-4 sm:px-5 py-4 flex items-center justify-between">
          <a href="#top" className="font-bold tracking-tight text-white hover:text-primary transition-colors">
            Pedro Henrique <span className="text-primary">•</span> CTO
          </a>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-white/60">
            <a className="hover:text-primary transition-colors font-bold text-primary" href="/">← Voltar ao Início</a>
            <a className="hover:text-primary transition-colors" href="#sobre">Sobre</a>
            <a className="hover:text-primary transition-colors" href="#o-que-eu-faco">Soluções</a>
            <a className="hover:text-primary transition-colors" href="#stack">Stack</a>
            <a className="hover:text-primary transition-colors" href="#projetos">Cases</a>
            <a className="hover:text-primary transition-colors" href="#vale-do-silicio">Vale do Silício</a>
            <a className="hover:text-primary transition-colors" href="#contato">Contato</a>
          </nav>
          <Sheet>
            <SheetTrigger
              aria-label="Abrir menu"
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:text-white hover:border-primary/60"
            >
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="right" className="bg-background border-white/10 text-white">
              <SheetHeader>
                <SheetTitle className="text-xs uppercase tracking-[0.3em] text-white/60">Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-2 px-4 pb-6">
                <SheetClose asChild>
                  <a className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/80 hover:text-white" href="/">
                    ← Voltar ao Início
                  </a>
                </SheetClose>
                <SheetClose asChild>
                  <a className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/80 hover:text-white" href="#sobre">
                    Sobre
                  </a>
                </SheetClose>
                <SheetClose asChild>
                  <a className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/80 hover:text-white" href="#o-que-eu-faco">
                    Soluções
                  </a>
                </SheetClose>
                <SheetClose asChild>
                  <a className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/80 hover:text-white" href="#stack">
                    Stack
                  </a>
                </SheetClose>
                <SheetClose asChild>
                  <a className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/80 hover:text-white" href="#projetos">
                    Cases
                  </a>
                </SheetClose>
                <SheetClose asChild>
                  <a className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/80 hover:text-white" href="#vale-do-silicio">
                    Vale do Silício
                  </a>
                </SheetClose>
                <SheetClose asChild>
                  <a className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/80 hover:text-white" href="#contato">
                    Contato
                  </a>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <div className="relative">
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(57,255,20,0.12),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(0,153,255,0.12),transparent_55%)]" />
          {backgroundLayers}
          <div className="absolute inset-0 bg-black/40" />
          <motion.div
            className="absolute right-6 top-24 hidden h-[60vh] w-1 rounded-full bg-white/10 md:block"
            style={{ originY: 0, scaleY: scrollYProgress }}
          />
        </div>

        <main id="top" className="relative z-10">
          <section className="min-h-[70vh] md:min-h-[85vh] flex items-center">
            <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 px-5 py-12 sm:px-6 sm:py-16 md:grid-cols-[1.1fr_0.9fr]">
              <div className="flex flex-col justify-center gap-6">
                <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-2 backdrop-blur-sm w-fit">
                  <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                  <span className="text-xs font-bold tracking-wider text-primary uppercase">
                    CTO & Co-Founder — MaisVendasPro
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tighter text-white">
                  Arquiteto de sistemas{" "}
                  <span className="text-primary glow-text italic terminal-cursor">
                    que geram receita
                  </span>{" "}
                  enquanto você dorme.
                </h1>

                <p className="mt-2 text-lg sm:text-xl md:text-2xl text-white/70 max-w-4xl leading-relaxed font-medium">
                  CTO da MaisVendasPro. Construo infraestrutura de automação comercial para agências, SaaS e empresas B2B.
                  MVP em 7 dias. Enterprise OS em 30. ROI documentado.
                </p>

                <p className="text-base sm:text-lg text-white/60 max-w-3xl leading-relaxed">
                  2 anos no Vale do Silício. Stack enterprise (React 19 + Supabase + Vercel). Squad estruturado com Dev, QA e Advisory Board.
                </p>

                <div className="mt-5 flex flex-col sm:flex-row gap-4">
                  <a href="#contato" className="glow-primary inline-flex items-center justify-center rounded-xl bg-primary text-background text-lg font-black px-8 py-4 uppercase tracking-wide hover:scale-[1.02] active:scale-95 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                    Agendar diagnóstico →
                  </a>
                  <a href="#projetos" className="inline-flex items-center justify-center rounded-xl border-2 border-primary/30 text-primary hover:border-primary hover:bg-primary/10 px-8 py-4 text-lg font-bold uppercase tracking-wide transition-all">
                    Ver cases de clientes ↓
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-white/5 w-full max-w-[520px]">
                  <img
                    src={images.desk}
                    alt="Pedro Henrique no setup de desenvolvimento"
                    className="h-[260px] sm:h-[320px] md:h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </section>

          {steps.map((step, index) => {
            const isFull = step.layout === "full";

            return (
              <section
                key={step.id}
                ref={(el) => {
                  sectionRefs.current[index] = el;
                }}
                id={step.id}
                data-index={index}
                className="min-h-[70vh] md:min-h-screen flex items-center"
              >
                <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-6 sm:py-16">
                  <div className={isFull ? "flex flex-col gap-10" : "flex flex-col gap-10 md:flex-row md:items-start"}>
                    <motion.div
                      initial={false}
                      animate={activeIndex === index ? "active" : "inactive"}
                      variants={variants}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className={isFull ? "space-y-6" : "space-y-6 md:w-3/5"}
                    >
                      {step.kicker && (
                        <span className="text-xs font-bold uppercase tracking-[0.4em] text-primary/70">
                          {step.kicker}
                        </span>
                      )}
                      {step.title && (
                        <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white">
                          {step.title}
                        </h2>
                      )}
                      {step.description && (
                        <p className="text-lg text-white/70 leading-relaxed">
                          {step.description}
                        </p>
                      )}
                      {step.highlights && step.highlights.length > 0 && (
                        <div className="flex flex-wrap gap-3">
                          {step.highlights.map((item) => (
                            <span
                              key={item}
                              className="rounded-full border border-white/20 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white/80"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      )}
                      {step.content}
                    </motion.div>

                    {!isFull && step.image && (
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: activeIndex === index ? 1 : 0, y: activeIndex === index ? 0 : 30 }}
                      transition={{ duration: 0.6 }}
                      className="md:w-2/5"
                    >
                        <div className="rounded-3xl border border-white/10 bg-black/60 p-6 backdrop-blur-xl">
                          <div className="overflow-hidden rounded-2xl border border-white/10">
                            <img
                              src={step.image}
                              alt={step.imageAlt}
                              className="h-48 sm:h-56 w-full object-cover"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </section>
            );
          })}

          <footer className="py-10 text-center text-sm text-white/40 border-t border-white/10">
            <p>© {new Date().getFullYear()} Pedro Henrique — CTO & Co-Founder, MaisVendasPro</p>
          </footer>
        </main>
      </div>
    </div>
  );
}
