import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useMemo, useRef, useState } from "react";

const images = {
  skyline: "/portfolio/pedro-skyline.jpg",
  hoodie: "/portfolio/pedro-hoodie.jpg",
  studio: "/portfolio/pedro-studio.jpg",
  desk: "/portfolio/pedro-desk.jpg",
};

const steps = [
  {
    kicker: "Fase 01",
    title: "Diagnóstico e direção",
    description:
      "Entendo o objetivo real, o gargalo de vendas e o que trava a conversão. Aqui eu defino o que é sucesso e corto o excesso.",
    highlights: ["Briefing direto", "Mapa de gargalos", "Meta mensurável"],
    bg: "linear-gradient(135deg, rgba(57,255,20,0.10), rgba(0,0,0,0.9) 55%, rgba(0,153,255,0.12))",
    image: images.desk,
    imageAlt: "Pedro trabalhando no escritorio",
  },
  {
    kicker: "Fase 02",
    title: "Roteiro da história",
    description:
      "Transformo o processo em passo a passo simples. É a espinha dorsal do portfólio: o que faço, em que ordem e por quê.",
    highlights: ["Storytelling claro", "Sequência lógica", "Foco no próximo passo"],
    bg: "linear-gradient(135deg, rgba(255,0,82,0.12), rgba(0,0,0,0.9) 55%, rgba(57,255,20,0.08))",
    image: images.hoodie,
    imageAlt: "Pedro em uma vista aberta da cidade",
  },
  {
    kicker: "Fase 03",
    title: "Prova visual",
    description:
      "Organizo provas, prints e bastidores. Cada bloco recebe uma imagem de fundo e uma frase curta que fixa o valor.",
    highlights: ["Provas rápidas", "Antes/depois", "Legendas estratégicas"],
    bg: "linear-gradient(135deg, rgba(0,153,255,0.16), rgba(0,0,0,0.9) 55%, rgba(255,0,82,0.10))",
    image: images.studio,
    imageAlt: "Pedro em ensaio com fundo neutro",
  },
  {
    kicker: "Fase 04",
    title: "Sistema rodando",
    description:
      "Mostro como a automação acontece na prática: gatilho, conversa, qualificação e handoff. Nada de magia, só processo.",
    highlights: ["Fluxos reais", "Integrações", "Automação prática"],
    bg: "linear-gradient(135deg, rgba(57,255,20,0.16), rgba(0,0,0,0.9) 55%, rgba(255,204,0,0.10))",
    image: images.skyline,
    imageAlt: "Vista panoramica da cidade com ponte",
  },
  {
    kicker: "Fase 05",
    title: "Entrega e expansão",
    description:
      "Fecho com resultado e próximos passos. Aqui o cliente entende o impacto e o que vem depois.",
    highlights: ["Resultados", "Próximas iterações", "Escala"],
    bg: "linear-gradient(135deg, rgba(255,204,0,0.16), rgba(0,0,0,0.9) 55%, rgba(57,255,20,0.10))",
    image: images.desk,
    imageAlt: "Pedro planejando novas entregas",
  },
];

const variants = {
  inactive: { opacity: 0.2, y: 30, filter: "blur(2px)" },
  active: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export default function PortfolioScrollTest() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<Array<HTMLElement | null>>([]);
  const { scrollYProgress } = useScroll();
  const bgShift = useTransform(scrollYProgress, [0, 1], [20, -20]);

  const backgroundLayers = useMemo(
    () =>
      steps.map((step, index) => (
        <motion.div
          key={step.title}
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
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="font-bold tracking-tight">
            Portfolio • Scroll Story
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
            <a className="hover:text-primary transition-colors" href="/portfolio">
              Voltar ao portfólio
            </a>
            <a className="hover:text-primary transition-colors" href="/">
              Home
            </a>
          </nav>
        </div>
      </header>

      <div className="relative">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(57,255,20,0.12),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(0,153,255,0.12),transparent_55%)]" />
          {backgroundLayers}
          <div className="absolute inset-0 bg-black/40" />
          <motion.div
            className="absolute right-6 top-24 hidden h-[60vh] w-1 rounded-full bg-white/10 md:block"
            style={{ originY: 0, scaleY: scrollYProgress }}
          />
        </div>

        <div className="relative z-10">
          <section className="min-h-[85vh] flex items-center">
            <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-[1.1fr_0.9fr]">
              <div className="flex flex-col justify-center gap-6">
                <span className="text-xs font-bold uppercase tracking-[0.4em] text-primary/70">
                  Portfolio • narrativa visual
                </span>
                <h1 className="text-4xl md:text-6xl font-black tracking-tight">
                  Pedro Henrique <span className="text-primary">em movimento</span>
                </h1>
                <p className="text-lg text-white/70 leading-relaxed">
                  Fotos estratégicas para comunicar presença, bastidor e autoridade. A ideia é alternar contextos:
                  cenário aberto, bastidor técnico e retrato direto para criar confiança rápida.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Storytelling", "Autoridade", "Bastidores"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/20 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href="/portfolio"
                    className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-white/70 hover:text-white"
                  >
                    Voltar ao oficial
                  </a>
                  <a
                    href="#fase-01"
                    className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2 text-xs font-bold uppercase tracking-widest text-black"
                  >
                    Ver narrativa
                  </a>
                </div>
              </div>
              <div className="relative flex items-center justify-center">
                <div className="absolute -left-6 -top-6 h-40 w-40 rounded-full bg-primary/10 blur-2xl" />
                <div className="absolute -bottom-10 right-0 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />
                <div className="relative grid grid-cols-2 gap-4">
                  <div className="col-span-2 overflow-hidden rounded-3xl border border-white/10 bg-black/40 shadow-xl">
                    <img
                      src={images.studio}
                      alt="Pedro em ensaio com fundo neutro"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/40">
                    <img
                      src={images.hoodie}
                      alt="Pedro em vista aberta"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/40">
                    <img
                      src={images.desk}
                      alt="Pedro trabalhando no escritorio"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {steps.map((step, index) => (
            <section
              key={step.title}
              ref={(el) => {
                sectionRefs.current[index] = el;
              }}
              id={`fase-${String(index + 1).padStart(2, "0")}`}
              data-index={index}
              className="min-h-screen flex items-center"
            >
              <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 md:flex-row md:items-center">
                <div className="flex flex-col gap-6 md:w-1/2">
                  <span className="text-sm font-bold uppercase tracking-[0.3em] text-primary/80">
                    {step.kicker}
                  </span>
                  <motion.div
                    initial={false}
                    animate={activeIndex === index ? "active" : "inactive"}
                    variants={variants}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="space-y-5"
                  >
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight">
                      {step.title}
                    </h2>
                    <p className="text-lg text-white/70 leading-relaxed">
                      {step.description}
                    </p>
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
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: activeIndex === index ? 1 : 0, y: activeIndex === index ? 0 : 30 }}
                  transition={{ duration: 0.6 }}
                  className="md:w-1/2"
                >
                  <div className="rounded-3xl border border-white/10 bg-black/60 p-6 backdrop-blur-xl space-y-6">
                    <p className="text-sm font-semibold text-white/50">Passo {String(index + 1).padStart(2, "0")}</p>
                    <p className="mt-4 text-2xl font-bold text-primary">
                      Resultado esperado
                    </p>
                    <p className="mt-3 text-white/70 leading-relaxed">
                      Cada etapa revela um pedaço do processo com uma transição suave. Troque o fundo por fotos e mantenha a narrativa em sequência.
                    </p>
                    <div className="overflow-hidden rounded-2xl border border-white/10">
                      <img
                        src={step.image}
                        alt={step.imageAlt}
                        className="h-56 w-full object-cover"
                      />
                    </div>
                    <div className="mt-6 flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      <span className="text-xs uppercase tracking-widest text-white/60">
                        Scroll para avançar
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
