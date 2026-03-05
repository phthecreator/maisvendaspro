import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, ArrowRight, ShieldCheck, Zap, BarChart3, Lock } from 'lucide-react';

const MVPAcademyV1: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-[#F8F8F8] font-sans selection:bg-emerald-500 selection:text-black">
      {/* Navigation - Minimal */}
      <nav className="fixed top-0 w-full z-50 bg-[#0A0A0B]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold tracking-tighter text-xl">MVP ACADEMY<span className="text-emerald-500">.</span></div>
          <button className="text-sm font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-emerald-500 transition-colors">ACESSO AO BUNKER</button>
        </div>
      </nav>

      <main>
        {/* DOBRA 1: HERO - THE ALTAR */}
        <section className="relative pt-40 pb-32 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="max-w-5xl mx-auto px-6 text-center">
            <motion.div {...fadeInUp}>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-bold tracking-widest uppercase mb-8">
                <Lock size={12} /> Status: Missão Crítica
              </span>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
                Chega de construir o sonho dos outros. <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                  Está na hora de plugar o seu.
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-12 leading-relaxed">
                Informação em excesso não é poder, é paralisia. Você não precisa de mais um curso de 40 horas. 
                Você precisa de uma <span className="text-white font-semibold italic underline decoration-emerald-500">tecnologia de execução</span>. Pare de aprender. Comece a plugar.
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <button className="w-full md:w-auto px-10 py-5 bg-white text-black font-bold text-lg rounded-xl hover:bg-emerald-500 hover:scale-105 transition-all flex items-center justify-center gap-2">
                  QUERO ACESSO AO BUNKER <ArrowRight size={20} />
                </button>
                <div className="flex items-center gap-3 text-sm text-zinc-500">
                  <span className="flex -space-x-2">
                    {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0A0A0B] bg-zinc-800" />)}
                  </span>
                  +1.200 membros ativos
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* DOBRA 2: THE WALL - EXCLUSION */}
        <section className="py-24 bg-[#0F0F11]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 tracking-tight">Este lugar não é para você (Ainda).</h2>
                <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
                  O MVP Academy é um ambiente de alta tensão. Não somos uma escola, somos uma usina. 
                  Se você busca o conforto da teoria, o YouTube está cheio de distrações gratuitas.
                </p>
                <div className="space-y-4">
                  {[
                    { label: 'O Turista Digital', desc: 'Colecionador de logins que nunca entrega nada.' },
                    { label: 'O Caçador de Hacks', desc: 'Acredita em botões mágicos e evita o trabalho real.' },
                    { label: 'O Teórico Confortável', desc: 'Prefere a segurança da aula à incerteza do teste.' },
                    { label: 'O Info-Obeso', desc: 'Acredita que o "próximo curso" é a solução.' }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 p-4 rounded-xl bg-black/40 border border-white/5">
                      <div className="mt-1 text-red-500"><X size={20} /></div>
                      <div>
                        <div className="font-bold text-white uppercase tracking-tighter text-sm mb-1">{item.label}</div>
                        <div className="text-xs text-zinc-500">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-emerald-500/10 blur-[60px] rounded-full" />
                <div className="relative p-12 bg-black border border-white/10 rounded-3xl text-center">
                  <p className="text-3xl font-serif italic text-white/90 mb-8 leading-tight">
                    "Pessoas como nós buscam resultados, não certificados."
                  </p>
                  <div className="h-px w-20 bg-emerald-500 mx-auto mb-8" />
                  <p className="text-sm text-zinc-500 uppercase tracking-widest font-bold">O Veredito da Tribo</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DOBRA 3: THE VOID - PROBLEM */}
        <section className="py-32">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight italic uppercase">Por que você ainda não chegou lá?</h2>
            <p className="text-xl text-zinc-400 mb-16 leading-relaxed">
              Existe uma razão científica para você estar travado. E não é sua falta de capacidade. 
              Você é vítima da <span className="text-white font-bold">Indústria do Entretenimento Educacional</span>.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="p-8 bg-zinc-900/50 rounded-2xl border border-white/5">
                <div className="text-emerald-500 mb-4"><Zap size={32} /></div>
                <h3 className="text-xl font-bold mb-4">O Paradoxo da Informação</h3>
                <p className="text-zinc-500">
                  Eles vendem dopamina, não dividendos. Seu cérebro adora a sensação de "aprender", 
                  mas isso é apenas uma substituição cognitiva para a execução real.
                </p>
              </div>
              <div className="p-8 bg-zinc-900/50 rounded-2xl border border-white/5">
                <div className="text-red-500 mb-4"><BarChart3 size={32} /></div>
                <h3 className="text-xl font-bold mb-4">O Custo da Inércia</h3>
                <p className="text-zinc-500">
                  Enquanto você estuda manuais de 5.000 páginas, o mercado exige agilidade. 
                  Cada hora gasta em teoria é uma hora de lucro que você nunca vai recuperar.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* DOBRA 4 & 5: THE SHIFT & ROADMAP */}
        <section className="py-32 bg-emerald-500">
          <div className="max-w-7xl mx-auto px-6 text-black">
            <div className="text-center mb-24">
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 leading-none">Bem-vindo à Era da Execução.</h2>
              <p className="text-xl font-bold max-w-2xl mx-auto opacity-80">
                O MVP Academy não é um curso. É uma Tecnologia de Implantação baseada em Primeiros Princípios. 
                Deletamos 90% da gordura teórica. O que sobra é a física pura do lucro.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { day: 'DIA 1-2', title: 'Question & Delete', desc: 'Foco obsessivo em uma única oferta de alto impacto. Eliminamos o ruído.' },
                { day: 'DIA 3-5', title: 'Simplify & Plugin', desc: 'Você não cria. Você pluga nossos modelos de copy, funis e tráfego testados.' },
                { day: 'DIA 6-7', title: 'Accelerate', desc: 'Ignição. Dados reais no seu dashboard. Métrica norte: primeiro real em < 168h.' }
              ].map((step, i) => (
                <div key={i} className="p-10 bg-black text-white rounded-[2rem] shadow-2xl">
                  <div className="text-emerald-500 font-black text-2xl mb-4 tracking-tighter">{step.day}</div>
                  <h3 className="text-2xl font-black uppercase mb-4 leading-none">{step.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DOBRA 7: THE VAULT - VALUE STACK */}
        <section className="py-32">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 uppercase tracking-tighter">O Empilhamento de Valor</h2>
              <p className="text-zinc-500 font-bold uppercase tracking-widest text-sm">Tudo o que você precisa para começar a vender.</p>
            </div>
            <div className="bg-[#141417] border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
              {[
                { item: 'MVP Plugin [Tecnologia de Funil]', value: 'R$ 4.997' },
                { item: 'Academy Execution [Método Purista]', value: 'R$ 1.997' },
                { item: 'Desafio Vitória 7 Dias [Protocolo]', value: 'R$ 997' },
                { item: 'The Bunker [Suporte MMOS-Squad]', value: 'R$ 2.997' }
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center p-8 border-b border-white/5 group hover:bg-white/5 transition-colors">
                  <div className="flex items-center gap-4 text-zinc-300">
                    <Check className="text-emerald-500" size={20} />
                    <span className="font-medium">{item.item}</span>
                  </div>
                  <div className="text-zinc-600 font-mono group-hover:text-zinc-300">{item.value}</div>
                </div>
              ))}
              <div className="p-12 bg-zinc-900/50 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
                <div>
                  <div className="text-sm text-zinc-500 font-bold uppercase tracking-widest mb-1">Valor Total Acumulado</div>
                  <div className="text-2xl font-bold text-zinc-400 line-through decoration-red-500">R$ 10.988,00</div>
                </div>
                <div>
                  <div className="text-sm text-emerald-500 font-bold uppercase tracking-widest mb-1">Seu Investimento Hoje</div>
                  <div className="text-6xl font-black text-white leading-none">R$ 250</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DOBRA 8: THE COVENANT - GUARANTEE */}
        <section className="py-32 bg-white text-black relative">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <motion.div {...fadeInUp}>
              <ShieldCheck size={64} className="mx-auto mb-8 text-emerald-600" />
              <h2 className="text-5xl md:text-7xl font-black uppercase mb-8 leading-[0.9] tracking-tighter">
                Ou você vence, ou eu te pago pelo seu tempo.
              </h2>
              <p className="text-xl md:text-2xl text-zinc-600 font-medium max-w-3xl mx-auto mb-12">
                Se em 7 dias você aplicar o método e não tiver sua primeira vitória, devolvemos cada centavo 
                e ainda te mandamos <span className="text-black font-bold">R$ 100 via PIX</span>.
              </p>
              <div className="inline-block px-6 py-2 bg-emerald-100 text-emerald-700 text-sm font-black uppercase tracking-widest rounded-full mb-12">
                Oferta Grand Slam — Risco Zero
              </div>
              <button className="w-full md:w-auto px-16 py-6 bg-black text-white font-black text-2xl rounded-2xl hover:bg-emerald-600 hover:scale-105 transition-all shadow-xl">
                GARANTIR MINHA VAGA NO BUNKER
              </button>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-zinc-500 text-sm italic">© 2026 MVP Academy. Deixando marca no universo.</div>
          <div className="flex gap-8 text-sm font-medium text-zinc-400">
            <a href="#" className="hover:text-white">Privacidade</a>
            <a href="#" className="hover:text-white">Termos</a>
            <a href="#" className="hover:text-white">Suporte</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MVPAcademyV1;
