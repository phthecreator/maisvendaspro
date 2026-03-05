import React from 'react';
import { motion } from 'framer-motion';

const MVPAcademyV2: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A] font-sans antialiased text-white selection:bg-white selection:text-black overflow-x-hidden">
      <main className="max-w-7xl mx-auto px-6 py-32">
        {/* Hero Section */}
        <section className="text-center mb-48">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-6xl md:text-8xl font-light mb-12 tracking-tight leading-none">
              Chega de construir o <br/>
              <span className="italic font-serif">sonho dos outros.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl mx-auto mb-16 leading-relaxed">
              Informação em excesso não é poder, é paralisia. <br/>
              Pare de aprender. <span className="text-white font-medium">Comece a plugar.</span>
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-black px-12 py-5 rounded-full text-lg font-medium transition-shadow hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
            >
              Quero Acesso ao Bunker
            </motion.button>
          </motion.div>
        </section>

        {/* The Wall Section - Glassmorphism */}
        <section className="mb-48 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-[120px] -z-10" />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="bg-white/[0.03] border border-white/10 backdrop-blur-xl rounded-[40px] p-12 md:p-24"
          >
            <h2 className="text-3xl font-light mb-16 tracking-widest uppercase opacity-50">Este lugar não é para você (Ainda).</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              <div className="space-y-12">
                <p className="text-2xl font-light text-gray-300 leading-relaxed">
                  O MVP Academy é um ambiente de alta tensão. <br/>
                  Buscamos resultados, <span className="text-white italic">não certificados.</span>
                </p>
                <div className="grid grid-cols-1 gap-4 opacity-40">
                  {['O Turista Digital', 'O Caçador de Hacks', 'O Teórico Confortável', 'O Info-Obeso'].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 text-sm tracking-widest uppercase">
                      <div className="w-1 h-1 bg-white rounded-full" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col justify-end">
                <blockquote className="text-4xl font-serif italic text-white/80 leading-snug">
                  "Pessoas como nós fazem coisas como esta."
                </blockquote>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Roadmap - Elegance */}
        <section className="mb-48">
          <h2 className="text-5xl font-light mb-24 text-center tracking-tighter">O Algoritmo de 7 Dias.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { day: "01", title: "Question & Delete", desc: "A pureza da oferta única." },
              { day: "03", title: "Simplify & Plugin", desc: "A tecnologia ao seu serviço." },
              { day: "06", title: "Accelerate", desc: "A velocidade do lucro real." }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="group"
              >
                <div className="text-sm font-medium mb-6 opacity-30 group-hover:opacity-100 transition-opacity">FASE {step.day}</div>
                <h3 className="text-3xl font-light mb-4">{step.title}</h3>
                <p className="text-gray-500 font-light leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Value Stack - Luxury List */}
        <section className="max-w-4xl mx-auto mb-48">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-light mb-4">O Valor do Bunker.</h2>
            <p className="text-gray-500 font-light tracking-widest uppercase text-sm">Ancoragem R$ 10.988,00</p>
          </div>
          <div className="space-y-8">
            {[
              { item: "MVP Plugin [Tecnologia]", price: "R$ 4.997" },
              { item: "Academy Execution [Método]", price: "R$ 1.997" },
              { item: "Desafio Vitória 7 Dias", price: "R$ 997" },
              { item: "The Bunker [Comunidade]", price: "R$ 2.997" }
            ].map((item, i) => (
              <div key={i} className="flex justify-between items-baseline border-b border-white/5 pb-6">
                <span className="text-xl font-light text-gray-300">{item.item}</span>
                <span className="text-lg font-light opacity-50">{item.price}</span>
              </div>
            ))}
            <div className="flex justify-between items-center pt-12">
              <span className="text-2xl font-light">Seu Investimento:</span>
              <div className="text-right">
                <div className="text-5xl font-light mb-2">R$ 250</div>
                <div className="text-xs tracking-widest uppercase opacity-30">Ou 12x de R$ 25,00</div>
              </div>
            </div>
          </div>
        </section>

        {/* Guarantee - The Covenant */}
        <section className="text-center bg-[#111] rounded-[60px] py-32 px-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight">
              Ou você vence, ou eu te pago <br/>
              <span className="italic font-serif text-gray-400">pelo seu tempo.</span>
            </h2>
            <p className="text-gray-400 font-light max-w-2xl mx-auto mb-12 text-lg">
              Se em 7 dias você não tiver sua primeira vitória, devolvemos tudo e te enviamos R$ 100 via PIX. 
              Pelo seu tempo. Pelo seu compromisso.
            </p>
            <div className="text-xs tracking-widest uppercase opacity-20">Uma Oferta Grand Slam</div>
          </motion.div>
        </section>
      </main>

      {/* Subtle Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] contrast-150 brightness-150" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
    </div>
  );
};

export default MVPAcademyV2;
