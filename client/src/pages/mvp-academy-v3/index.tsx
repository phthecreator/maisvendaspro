import React from 'react';
import { motion } from 'framer-motion';

const MVPAcademyV3: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#121212] font-sans antialiased text-white selection:bg-[#FFD700] selection:text-black overflow-x-hidden p-4 md:p-8">
      <main className="max-w-5xl mx-auto border-[4px] border-white bg-black relative">
        {/* Header - Brutalist */}
        <header className="border-b-[4px] border-white p-6 md:p-12">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            <h1 className="text-6xl md:text-9xl font-black uppercase leading-[0.85] tracking-tighter mb-8">
              CHEGA DE <br/>
              CONSTRUIR <br/>
              O SONHO <br/>
              DOS OUTROS.
            </h1>
            <div className="bg-[#FFD700] text-black inline-block px-4 py-2 text-2xl font-black uppercase mb-8">
              ESTÁ NA HORA DE PLUGAR O SEU.
            </div>
            <p className="text-xl md:text-2xl font-bold max-w-xl leading-tight text-gray-400">
              Pare de aprender. <span className="text-white underline decoration-[4px]">Comece a plugar.</span>
            </p>
          </motion.div>
        </header>

        {/* CTA Section */}
        <div className="p-6 md:p-12 border-b-[4px] border-white">
          <motion.button
            whileHover={{ x: 8, y: -8, boxShadow: "-8px 8px 0px #FFD700" }}
            className="w-full md:w-auto bg-white text-black text-3xl font-black uppercase py-6 px-12 border-[4px] border-black transition-all"
          >
            QUERO ACESSO AO BUNKER
          </motion.button>
        </div>

        {/* The Wall - Brutalist */}
        <section className="grid grid-cols-1 md:grid-cols-2 border-b-[4px] border-white">
          <div className="p-12 border-b-[4px] md:border-b-0 md:border-r-[4px] border-white bg-[#1a1a1a]">
            <h2 className="text-4xl font-black uppercase mb-8 leading-none">ESTE LUGAR <br/> NÃO É PARA <br/> VOCÊ (AINDA).</h2>
            <p className="text-lg font-bold text-gray-400 leading-tight">
              O MVP Academy é um ambiente de alta tensão. Buscamos resultados, não certificados.
            </p>
          </div>
          <div className="p-12 space-y-4 flex flex-col justify-center">
            {['TURISTA DIGITAL', 'CAÇADOR DE HACKS', 'TEÓRICO CONFORTÁVEL', 'INFO-OBESO'].map((item, i) => (
              <div key={i} className="flex items-center gap-4 group">
                <div className="w-8 h-8 bg-white text-black flex items-center justify-center font-black group-hover:bg-[#FFD700] transition-colors">X</div>
                <span className="text-xl font-black tracking-tighter opacity-50 group-hover:opacity-100">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Problem Section - The Void */}
        <section className="p-12 border-b-[4px] border-white bg-white text-black">
          <h2 className="text-5xl md:text-7xl font-black uppercase leading-none mb-12">POR QUE VOCÊ AINDA NÃO CHEGOU LÁ.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <p className="text-2xl font-black leading-none">VÍTIMA DA INDÚSTRIA DO ENTRETENIMENTO EDUCACIONAL.</p>
            <p className="text-lg font-bold leading-tight">
              Eles vendem dopamina, não dividendos. Seu cérebro adora a sensação de "aprender", mas isso é apenas uma substituição cognitiva para a execução real.
            </p>
          </div>
        </section>

        {/* Roadmap - Grid Step */}
        <section className="border-b-[4px] border-white">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {[
              { num: "01", title: "QUESTION & DELETE", desc: "Foco em uma única oferta." },
              { num: "02", title: "SIMPLIFY & PLUGIN", desc: "Plugar modelos prontos." },
              { num: "03", title: "ACCELERATE", desc: "Dados reais no dashboard." }
            ].map((step, i) => (
              <div key={i} className="p-12 border-b-[4px] md:border-b-0 md:border-r-[4px] border-white last:border-0 hover:bg-[#FFD700] hover:text-black transition-all">
                <div className="text-6xl font-black mb-4">#{step.num}</div>
                <h3 className="text-2xl font-black mb-4 leading-none">{step.title}</h3>
                <p className="font-bold text-sm uppercase opacity-70">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Value Stack - Big & Loud */}
        <section className="p-12 bg-[#FFD700] text-black border-b-[4px] border-white">
          <h2 className="text-6xl font-black uppercase leading-none mb-12 italic">O EMPILHAMENTO DE VALOR.</h2>
          <div className="space-y-6 mb-12">
            {[
              "MVP PLUGIN [TECNOLOGIA]",
              "ACADEMY EXECUTION [MÉTODO]",
              "DESAFIO VITÓRIA 7 DIAS",
              "THE BUNKER [COMUNIDADE]"
            ].map((item, i) => (
              <div key={i} className="text-3xl font-black border-b-[4px] border-black flex justify-between">
                <span>{item}</span>
                <span>[X]</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="text-2xl font-black">ANCORAGEM: R$ 10.988,00</div>
            <div className="text-8xl md:text-[12rem] font-black leading-[0.8] tracking-tighter">R$ 250</div>
          </div>
        </section>

        {/* Guarantee - The Pact */}
        <section className="p-12 bg-black text-white text-center">
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-8">OU VOCÊ VENCE, <br/> OU EU TE PAGO <br/> PELO SEU TEMPO.</h2>
          <p className="text-xl font-bold text-gray-500 max-w-2xl mx-auto mb-12">
            7 DIAS. PRIMEIRA VITÓRIA. OU DEVOLVEMOS TUDO + R$ 100 VIA PIX.
          </p>
          <div className="text-2xl font-black bg-white text-black inline-block px-6 py-2 uppercase">ISSO É UMA OFERTA GRAND SLAM.</div>
        </section>
      </main>

      {/* Background Text Decor */}
      <div className="fixed -bottom-20 -left-20 text-[20rem] font-black text-white opacity-[0.02] pointer-events-none select-none uppercase">Bunker</div>
    </div>
  );
};

export default MVPAcademyV3;
