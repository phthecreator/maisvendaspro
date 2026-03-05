import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Trophy, Users, ArrowUpRight, CheckCircle2, AlertCircle } from 'lucide-react';

const MVPAcademyV2: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-amber-500 selection:text-black">
      {/* Decorative background elements */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/10 blur-[150px] rounded-full" />
      </div>

      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#020617]/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-600 rounded-lg flex items-center justify-center font-bold text-black">M</div>
            <span className="font-bold tracking-tight text-xl text-white">MVP ACADEMY</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#metodo" className="hover:text-amber-400 transition-colors">O Método</a>
            <a href="#valor" className="hover:text-amber-400 transition-colors">Valor Stack</a>
            <button className="bg-amber-500 hover:bg-amber-400 text-black px-6 py-2.5 rounded-full font-bold transition-all shadow-lg shadow-amber-500/20">
              ENTRAR NO BUNKER
            </button>
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        {/* DOBRA 1: HERO */}
        <section className="pt-48 pb-32">
          <div className="max-w-6xl mx-auto px-8">
            <div className="flex flex-col items-center text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-slate-300 text-xs font-bold tracking-widest uppercase mb-10">
                  <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" /> Protocolo de Elite Ativado
                </div>
                <h1 className="text-6xl md:text-[5.5rem] font-medium tracking-tight text-white mb-10 leading-[1] max-w-4xl mx-auto">
                  Chega de construir o sonho dos outros. <br/>
                  <span className="text-amber-500 italic font-serif">Plugue o seu hoje.</span>
                </h1>
                <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-16 leading-relaxed font-light">
                  A paralisia por excesso de informação termina aqui. O MVP Academy entrega a vitória que 100 cursos não entregaram.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <button className="group px-12 py-6 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-black text-xl rounded-2xl hover:scale-105 transition-all shadow-2xl shadow-amber-500/40 flex items-center gap-3">
                    ACESSO IMEDIATO AO BUNKER <ArrowUpRight size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                  <p className="text-sm text-slate-500 font-medium">Últimas 12 vagas do ciclo atual</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* DOBRA 2: THE WALL */}
        <section className="py-32 border-y border-white/5 bg-slate-900/20">
          <div className="max-w-7xl mx-auto px-8">
            <div className="bg-slate-900/40 border border-white/10 rounded-[3rem] p-12 md:p-20 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 blur-[100px] rounded-full" />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
                <div>
                  <h2 className="text-4xl font-medium text-white mb-8 tracking-tight italic font-serif">Este lugar não é para todos.</h2>
                  <p className="text-xl text-slate-400 mb-12 leading-relaxed">
                    Excluímos 90% dos interessados intencionalmente. O Bunker foi desenhado para quem prioriza a execução sobre a diversão teórica.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {['O Turista Digital', 'O Caçador de Hacks', 'O Teórico Confortável', 'O Info-Obeso'].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 p-4 bg-slate-800/30 rounded-xl border border-white/5 text-sm font-bold tracking-tight uppercase text-slate-400">
                        <AlertCircle size={16} className="text-amber-500/50" /> {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center lg:items-end text-center lg:text-right">
                  <div className="w-20 h-1 bg-amber-500 mb-8" />
                  <blockquote className="text-4xl font-medium text-white italic leading-tight mb-6">
                    "Pessoas como nós buscam resultados, não certificados."
                  </blockquote>
                  <p className="text-slate-500 text-sm font-bold tracking-[0.2em] uppercase">O Filtro de Sangue</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DOBRA 3: THE VOID */}
        <section className="py-32">
          <div className="max-w-5xl mx-auto px-8">
            <div className="text-center mb-24">
              <h2 className="text-5xl font-medium text-white mb-8 tracking-tight">O Fim da Obesidade Mental.</h2>
              <p className="text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
                Você foi treinado para ser um espectador. A Indústria do Entretenimento Educacional prospera com o seu fracasso. 
                Eles vendem dopamina. <span className="text-white font-bold italic">Nós entregamos dividendos.</span>
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="p-12 bg-gradient-to-b from-slate-800/40 to-transparent rounded-3xl border border-white/5">
                <Target className="text-amber-500 mb-6" size={40} />
                <h3 className="text-2xl font-bold text-white mb-4">O Paradoxo da Informação</h3>
                <p className="text-slate-400 leading-relaxed text-lg font-light">
                  Seu cérebro substitui a execução pelo "aprender". É um vício em progresso falso. 
                  Enquanto você estuda, o mercado exige velocidade absoluta.
                </p>
              </div>
              <div className="p-12 bg-gradient-to-b from-slate-800/40 to-transparent rounded-3xl border border-white/5">
                <Users className="text-amber-500 mb-6" size={40} />
                <h3 className="text-2xl font-bold text-white mb-4">O Inimigo Oculto</h3>
                <p className="text-slate-400 leading-relaxed text-lg font-light">
                  O sistema quer que você continue comprando. Complicam o jogo para você se sentir incapaz. 
                  O MVP Academy simplifica o jogo para você se tornar lucrativo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* DOBRA 4 & 5: ROADMAP */}
        <section className="py-32 bg-slate-900/50 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-8 relative z-10">
            <h2 className="text-center text-5xl font-medium text-white mb-24 tracking-tight">A Engenharia da Vitória.</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { step: '01', title: 'Question & Delete', desc: 'Limpamos sua mesa. Deletamos 90% das tarefas inúteis. Foco total em uma única oferta de alto ticket.' },
                { step: '02', title: 'Simplify & Plugin', desc: 'Não há o que criar. Plugamos nossa tecnologia de cópia e funis testados. Velocidade de engenharia.' },
                { step: '03', title: 'Accelerate', desc: 'O primeiro real no dashboard em menos de 168 horas. Dados reais. Execução implacável.' }
              ].map((item, i) => (
                <div key={i} className="group relative">
                  <div className="text-8xl font-black text-white/5 absolute -top-10 -left-6 group-hover:text-amber-500/10 transition-colors">{item.step}</div>
                  <div className="relative pt-10">
                    <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">{item.title}</h3>
                    <p className="text-slate-400 leading-relaxed font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DOBRA 7: VALUE STACK */}
        <section className="py-40">
          <div className="max-w-4xl mx-auto px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-medium text-white mb-4 tracking-tight italic font-serif">O Investimento Proporcional</h2>
              <p className="text-slate-500 font-bold uppercase tracking-[0.2em] text-xs">Transformando R$ 10.988 em Oportunidade</p>
            </div>
            <div className="bg-slate-900/80 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-1 shadow-2xl overflow-hidden">
              {[
                { item: 'MVP Plugin [Infraestrutura Pronta]', price: 'R$ 4.997' },
                { item: 'Academy Execution [Método 30min]', price: 'R$ 1.997' },
                { item: 'Desafio Vitória 7 Dias [Checklist]', price: 'R$ 997' },
                { item: 'The Bunker [Acesso VIP Squad]', price: 'R$ 2.997' }
              ].map((row, i) => (
                <div key={i} className="flex justify-between items-center p-10 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors group">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center text-amber-500 font-bold group-hover:scale-110 transition-transform">
                      <CheckCircle2 size={24} />
                    </div>
                    <span className="text-xl font-medium text-slate-200">{row.item}</span>
                  </div>
                  <span className="text-slate-500 font-mono text-lg">{row.price}</span>
                </div>
              ))}
              <div className="p-16 bg-gradient-to-br from-slate-800/50 to-slate-900/50 flex flex-col sm:flex-row justify-between items-center gap-10">
                <div className="text-center sm:text-left">
                  <p className="text-slate-500 font-bold uppercase tracking-widest text-xs mb-2">Preço de Mercado</p>
                  <p className="text-3xl font-medium text-slate-400 line-through">R$ 10.988,00</p>
                </div>
                <div className="text-center sm:text-right">
                  <p className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-2">Investimento Único</p>
                  <p className="text-7xl font-black text-white leading-none">R$ 250</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DOBRA 8: GUARANTEE */}
        <section className="py-40 bg-white text-black text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-amber-500" />
          <div className="max-w-4xl mx-auto px-8 relative z-10">
            <Trophy size={80} className="mx-auto mb-10 text-amber-600" />
            <h2 className="text-6xl md:text-8xl font-black text-black leading-[0.8] tracking-tighter mb-10 uppercase italic">
              Ou você vence, ou eu te pago pelo seu tempo.
            </h2>
            <p className="text-2xl text-slate-600 font-medium max-w-2xl mx-auto mb-16 leading-tight">
              Se em 7 dias você aplicar e não tiver sua primeira vitória, devolvemos tudo + <span className="text-black font-black underline decoration-amber-500">R$ 100 via PIX</span>.
            </p>
            <div className="inline-block px-8 py-3 bg-amber-500 text-black font-black text-sm uppercase tracking-[0.3em] rounded-full mb-16 shadow-xl shadow-amber-500/20">
              Oferta Grand Slam
            </div>
            <br/>
            <button className="px-20 py-8 bg-black text-white font-black text-3xl rounded-[2rem] hover:bg-amber-600 hover:scale-105 transition-all shadow-2xl">
              ENVIAR MINHA CANDIDATURA
            </button>
          </div>
        </section>
      </main>

      <footer className="py-20 border-t border-white/5 text-center">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-center gap-12 mb-10 text-sm font-bold tracking-widest uppercase text-slate-500">
            <a href="#" className="hover:text-amber-500">Privacidade</a>
            <a href="#" className="hover:text-amber-500">Termos</a>
            <a href="#" className="hover:text-amber-500">Suporte</a>
          </div>
          <p className="text-slate-600 text-sm italic font-serif">MVP Academy Elite Cycle © 2026. Excellence is not an option.</p>
        </div>
      </footer>
    </div>
  );
};

export default MVPAcademyV2;
