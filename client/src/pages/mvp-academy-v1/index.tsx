import React from 'react';
import { motion } from 'framer-motion';

const MVPAcademyV1: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050505] font-mono antialiased text-white selection:bg-[#00FF41] selection:text-black overflow-x-hidden">
      {/* HUD Scanner Effect */}
      <motion.div 
        initial={{ top: "-100%" }}
        animate={{ top: "100%" }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="fixed left-0 w-full h-1 bg-[#00FF41]/20 z-50 pointer-events-none shadow-[0_0_15px_#00FF41]"
      />

      <main className="max-w-6xl mx-auto px-4 py-20 relative">
        {/* Hero Section */}
        <section className="mb-32 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[#00FF41] text-sm mb-4 block tracking-widest">[ STATUS: MISSION CRITICAL ]</span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight uppercase">
              CHEGA DE CONSTRUIR O SONHO DOS OUTROS.<br/>
              <span className="text-[#00FF41]">ESTÁ NA HORA DE PLUGAR O SEU.</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mb-10">
              A era da informação acabou. Você não precisa de mais um curso. 
              Você precisa de uma tecnologia de execução. **Pare de aprender. Comece a plugar.**
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0,255,65,0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#00FF41] text-black font-bold py-4 px-10 text-lg uppercase tracking-tighter"
            >
              QUERO ACESSO AO BUNKER
            </motion.button>
          </motion.div>
        </section>

        {/* The Wall Section */}
        <section className="border border-[#00FF41]/30 p-10 bg-[#00FF41]/5 mb-32">
          <h2 className="text-3xl font-bold mb-8 uppercase text-[#00FF41]">[ ACESSO RESTRITO ]</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-gray-400 leading-relaxed">
                O MVP Academy é um ambiente de alta tensão. Se você busca o conforto da teoria, o YouTube está cheio de distrações.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>• TURISTA DIGITAL: NEGADO</li>
                <li>• CAÇADOR DE HACKS: NEGADO</li>
                <li>• TEÓRICO CONFORTÁVEL: NEGADO</li>
                <li>• INFO-OBESO: NEGADO</li>
              </ul>
            </div>
            <div className="flex items-center justify-center border-l border-[#00FF41]/20 pl-8">
              <p className="text-xl font-bold italic">"Pessoas como nós buscam resultados, não certificados."</p>
            </div>
          </div>
        </section>

        {/* Roadmap Steps */}
        <section className="mb-32">
          <h2 className="text-4xl font-bold mb-16 uppercase">[ ALGORITMO DE 7 DIAS ]</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#00FF41]/20">
            {[
              { day: "01-02", title: "QUESTION & DELETE", desc: "Foco em uma única oferta." },
              { day: "03-05", title: "SIMPLIFY & PLUGIN", desc: "Plugamos modelos prontos de copy e funil." },
              { day: "06-07", title: "ACCELERATE", desc: "Ignição e dados reais no dashboard." }
            ].map((step, i) => (
              <div key={i} className="p-10 border-[#00FF41]/20 border-b md:border-b-0 md:border-r last:border-0 hover:bg-[#00FF41]/5 transition-colors group">
                <span className="text-[#00FF41] text-xl font-bold mb-4 block">D-{step.day}</span>
                <h3 className="text-xl font-bold mb-4 group-hover:text-[#00FF41] transition-colors">{step.title}</h3>
                <p className="text-gray-500">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Value Stack */}
        <section className="text-center mb-32">
          <h2 className="text-4xl font-bold mb-4 uppercase">O EMPILHAMENTO DE VALOR</h2>
          <p className="text-[#00FF41] mb-12">[ VALOR ESTIMADO: R$ 10.988,00 ]</p>
          <div className="max-w-2xl mx-auto space-y-4 text-left">
            {[
              { item: "MVP Plugin [Tecnologia]", price: "R$ 4.997" },
              { item: "Academy Execution [Método]", price: "R$ 1.997" },
              { item: "Desafio Vitória 7 Dias", price: "R$ 997" },
              { item: "The Bunker [Comunidade]", price: "R$ 2.997" }
            ].map((item, i) => (
              <div key={i} className="flex justify-between border-b border-gray-800 py-4 font-mono">
                <span className="text-gray-300">{item.item}</span>
                <span className="text-[#00FF41]">{item.price}</span>
              </div>
            ))}
            <div className="flex justify-between py-10">
              <span className="text-3xl font-bold">TOTAL HOJE:</span>
              <span className="text-5xl font-bold text-[#00FF41]">R$ 250</span>
            </div>
          </div>
        </section>

        {/* Guarantee */}
        <section className="text-center p-20 bg-white text-black relative">
          <h2 className="text-4xl font-black mb-6 uppercase">OU VOCÊ VENCE, OU EU TE PAGO PELO SEU TEMPO.</h2>
          <p className="text-lg max-w-2xl mx-auto mb-10">
            Se em 7 dias você aplicar o método e não tiver sua primeira vitória, 
            devolvemos cada centavo e ainda te mandamos **R$ 100 via PIX** pelo seu tempo.
          </p>
          <p className="font-bold text-sm tracking-widest uppercase text-gray-500">Isso é uma Oferta Grand Slam — é impossível perder.</p>
        </section>
      </main>

      {/* Grid Lines Background */}
      <div className="fixed inset-0 pointer-events-none opacity-5 z-0" style={{ backgroundImage: 'linear-gradient(#00FF41 1px, transparent 1px), linear-gradient(90deg, #00FF41 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
    </div>
  );
};

export default MVPAcademyV1;
