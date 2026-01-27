import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import SecretTerminal from "../components/lp2/SecretTerminal";

const steps = [
  {
    id: "passo-01",
    kicker: "Passo 01",
    title: "Diagnostico e direcao",
    description:
      "Entendo o objetivo real e corto o ruido. Aqui eu enxergo o gargalo que trava a conversao e defino o que e sucesso.",
    highlights: ["Briefing direto", "Mapa de gargalos", "Meta clara"],
    image: "/portfolio/step-01.jpg",
    gradient: "rgba(57,255,20,0.12)",
  },
  {
    id: "passo-02",
    kicker: "Passo 02",
    title: "Roteiro do processo",
    description:
      "Transformo o caos em sequencia simples. O portfolio vira uma historia com comeco, meio e fim para o cliente entender o valor.",
    highlights: ["Sequencia logica", "Copy objetiva", "Proximo passo"],
    image: "/portfolio/step-02.jpg",
    gradient: "rgba(255,0,82,0.12)",
  },
  {
    id: "passo-03",
    kicker: "Passo 03",
    title: "Construcao do sistema",
    description:
      "Desenho o fluxo e construo o que precisa rodar: pagina, automacao, scripts, roteiros e integracoes.",
    highlights: ["Fluxos reais", "Integracoes", "Automacao pratica"],
    image: "/portfolio/step-03.jpg",
    gradient: "rgba(0,153,255,0.14)",
  },
  {
    id: "passo-04",
    kicker: "Passo 04",
    title: "Prova, operacao e ajuste",
    description:
      "Mostro o que esta funcionando e ajusto ate a conversao ficar redonda. Aqui entram prints, feedbacks e indicadores.",
    highlights: ["Resultados", "Antes/depois", "Ajustes finos"],
    image: "/portfolio/step-04.jpg",
    gradient: "rgba(255,204,0,0.14)",
  },
  {
    id: "passo-05",
    kicker: "Passo 05",
    title: "Escala e proxima etapa",
    description:
      "Quando o sistema esta rodando, eu mostro o que vem depois: novas automacoes, novos canais e mais escala.",
    highlights: ["Escala", "Novos canais", "Roadmap"],
    image: "/portfolio/step-05.jpg",
    gradient: "rgba(57,255,20,0.16)",
  },
];

const variants = {
  inactive: { opacity: 0.25, y: 30, filter: "blur(2px)" },
  active: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export default function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<Array<HTMLElement | null>>([]);
  const { scrollYProgress } = useScroll();
  const bgShift = useTransform(scrollYProgress, [0, 1], [20, -20]);

  const backgroundLayers = useMemo(
    () =>
      steps.map((step, index) => {
        const backgroundImage = `linear-gradient(135deg, ${step.gradient}, rgba(0,0,0,0.88) 55%, rgba(0,0,0,0.94)), url(${step.image})`;
        return (
          <motion.div
            key={step.id}
            className="absolute inset-0"
            style={{
              backgroundImage,
              backgroundSize: "cover",
              backgroundPosition: "center",
              y: bgShift,
            }}
            animate={{ opacity: activeIndex === index ? 1 : 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        );
      }),
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
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 py-4">
          <a href="#top" className="font-bold tracking-tight text-white hover:text-primary transition-colors">
            Pedro <span className="text-primary">•</span> Portfolio
          </a>
          <nav className="hidden md:flex gap-6 text-xs font-medium uppercase tracking-[0.2em] text-white/60">
            <a className="hover:text-primary transition-colors" href="/">Inicio</a>
            {steps.map((step) => (
              <a key={step.id} className="hover:text-primary transition-colors" href={`#${step.id}`}>
                {step.kicker}
              </a>
            ))}
          </nav>
          <Sheet>
            <SheetTrigger className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:text-white hover:border-primary/60">
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="right" className="bg-black border-white/10 text-white">
              <SheetHeader>
                <SheetTitle className="text-xs uppercase tracking-[0.3em] text-white/60">Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-2 px-4 pb-6">
                <SheetClose asChild>
                  <a className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/80 hover:text-white" href="/">
                    Inicio
                  </a>
                </SheetClose>
                {steps.map((step) => (
                  <SheetClose asChild key={step.id}>
                    <a className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/80 hover:text-white" href={`#${step.id}`}>
                      {step.kicker}
                    </a>
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <div id="top" className="relative">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(57,255,20,0.14),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(0,153,255,0.12),transparent_60%)]" />
          {backgroundLayers}
          <div className="absolute inset-0 bg-black/40" />
          <motion.div
            className="absolute right-6 top-24 hidden h-[60vh] w-1 rounded-full bg-white/10 md:block"
            style={{ originY: 0, scaleY: scrollYProgress }}
          />
        </div>

        <div className="relative z-10">
          {steps.map((step, index) => (
            <section
              key={step.id}
              id={step.id}
              ref={(el) => {
                sectionRefs.current[index] = el;
              }}
              data-index={index}
              className="min-h-screen flex items-center"
            >
              <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 sm:px-6 md:flex-row md:items-center">
                <div className="flex flex-col gap-6 md:w-1/2">
                  <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary/80">
                    {step.kicker}
                  </span>
                  <motion.div
                    initial={false}
                    animate={activeIndex === index ? "active" : "inactive"}
                    variants={variants}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="space-y-5"
                  >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
                      {step.title}
                    </h2>
                    <p className="text-base sm:text-lg text-white/70 leading-relaxed">
                      {step.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {step.highlights.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/20 bg-white/5 px-4 py-1 text-[11px] font-semibold uppercase tracking-wide text-white/80"
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
                  <div className="rounded-3xl border border-white/10 bg-black/60 p-6 sm:p-8 backdrop-blur-xl">
                    <p className="text-xs font-semibold text-white/50">Etapa {String(index + 1).padStart(2, "0")}</p>
                    <p className="mt-4 text-xl sm:text-2xl font-bold text-primary">
                      Resultado esperado
                    </p>
                    <p className="mt-3 text-sm sm:text-base text-white/70 leading-relaxed">
                      Cada bloco recebe uma transicao suave ao rolar. Aqui voce coloca um resumo do impacto ou uma prova rapida.
                    </p>
                    {step.id === "passo-03" && (
                      <div className="mt-6">
                        <SecretTerminal />
                      </div>
                    )}
                    {step.id === "passo-05" && (
                      <div className="mt-6 flex flex-col gap-3">
                        <a
                          href="https://wa.me/556191185635"
                          className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-xs font-bold uppercase tracking-widest text-black"
                        >
                          Quero destravar meu fluxo
                        </a>
                        <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">
                          Resposta rapida no WhatsApp
                        </span>
                      </div>
                    )}
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
