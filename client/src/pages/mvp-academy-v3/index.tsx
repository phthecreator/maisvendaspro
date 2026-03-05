import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Play, FastForward, Layers, Info, Check, ArrowRight, ShieldCheck } from 'lucide-react';

const MVPAcademyV3: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      {/* Top Bar - Technical Info */}
      <div className="bg-zinc-100 border-b border-zinc-200 px-6 py-2 flex justify-between items-center text-[10px] font-bold tracking-widest text-zinc-500 uppercase">
        <div className="flex gap-6">
          <span>System: MVP_ACADEMY_ENGINE</span>
          <span>Version: 3.0.4</span>
        </div>
        <div className="flex gap-6">
          <span>Server: BR-EAST-1</span>
          <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 bg-green-500 rounded-full" /> Operational</span>
        </div>
      </div>

      <main>
        {/* DOBRA 1: HERO - THE ENGINE */}
        <section className="pt-24 pb-32 border-b border-zinc-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-7">
                <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-12">
                  Plugar <br/> 
                  <span className="text-zinc-300">Não é</span> <br/> 
                  Aprender.
                </h1>
                <p className="text-2xl font-bold leading-tight max-w-xl mb-12">
                  Chega de construir o sonho dos outros. O MVP Academy é a tecnologia que transforma seu conhecimento em lucro real em 7 dias.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-black text-white px-10 py-5 text-xl font-black uppercase tracking-tighter hover:bg-zinc-800 transition-all flex items-center gap-2">
                    ATIVAR CONEXÃO <ArrowRight size={20} />
                  </button>
                  <div className="p-4 border-2 border-black flex items-center gap-4">
                    <div className="bg-zinc-100 p-2 font-mono text-xs">ID: 168H</div>
                    <span className="text-xs font-black uppercase tracking-widest">Tempo para Vitória</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 flex flex-col justify-end">
                <div className="p-8 bg-zinc-50 border border-zinc-200 rounded-2xl">
                  <div className="flex items-center gap-2 text-zinc-400 mb-6 font-mono text-[10px] font-bold uppercase tracking-widest">
                    <Info size={14} /> Abstract_System_Summary
                  </div>
                  <p className="text-zinc-600 leading-relaxed italic mb-0">
                    "A era da informação acabou. Você não precisa de mais um curso. Você precisa de uma tecnologia de execução. 
                    Deletamos 90% da gordura teórica. O que sobra é a física pura do lucro."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DOBRA 2 & 3: THE WALL & THE VOID */}
        <section className="grid grid-cols-1 md:grid-cols-2 border-b border-zinc-200">
          <div className="p-12 md:p-24 border-b md:border-b-0 md:border-r border-zinc-200 bg-zinc-50">
            <span className="text-[10px] font-black tracking-[0.3em] text-zinc-400 uppercase mb-8 block">Warning: Restricted_Area</span>
            <h2 className="text-5xl font-black uppercase tracking-tighter mb-8 leading-none">Este lugar não é para você (Ainda).</h2>
            <p className="text-lg font-bold text-zinc-500 mb-12 leading-tight">
              O MVP Academy é um ambiente de alta tensão. Buscamos resultados, não certificados. Se você se identifica com os perfis abaixo, encerre a conexão agora.
            </p>
            <div className="space-y-4">
              {['Turista Digital', 'Caçador de Hacks', 'Teórico Confortável', 'Info-Obeso'].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-sm font-black uppercase tracking-widest">
                  <div className="w-5 h-5 border border-zinc-300 flex items-center justify-center text-zinc-300">X</div> {item}
                </div>
              ))}
            </div>
          </div>
          <div className="p-12 md:p-24 flex flex-col justify-center bg-black text-white">
            <h2 className="text-5xl font-black uppercase tracking-tighter mb-12 leading-none italic">Por que você ainda não chegou lá?</h2>
            <p className="text-2xl font-bold mb-12 leading-tight opacity-60">
              Vítima da Indústria do Entretenimento Educacional. Eles vendem dopamina, não dividendos.
            </p>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="text-zinc-600 font-black text-4xl leading-none">01.</div>
                <div>
                  <h4 className="font-black uppercase mb-2">O Paradoxo da Informação</h4>
                  <p className="text-sm text-zinc-500">Seu cérebro substitui a execução pelo "aprender". É um vício em progresso falso.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="text-zinc-600 font-black text-4xl leading-none">02.</div>
                <div>
                  <h4 className="font-black uppercase mb-2">O Custo da Inércia</h4>
                  <p className="text-sm text-zinc-500">Cada hora gasta em teoria é uma hora de lucro que você nunca vai recuperar.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DOBRA 4, 5 & 6: ROADMAP & METHOD */}
        <section className="py-32 border-b border-zinc-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-24">
              <div className="max-w-2xl">
                <span className="text-[10px] font-black tracking-[0.3em] text-zinc-400 uppercase mb-4 block">Execution_Logic</span>
                <h2 className="text-6xl font-black uppercase tracking-tighter leading-none">O Algoritmo de 7 Dias.</h2>
              </div>
              <p className="text-zinc-500 font-bold uppercase text-right leading-none">
                Lucro = (Valor Real x Velocidade) / Atrito
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { icon: <Settings size={32} />, step: '01', title: 'Question & Delete', desc: 'Foco em uma única oferta. Deletamos 90% da gordura processual.' },
                { icon: <Layers size={32} />, step: '02', title: 'Simplify & Plugin', desc: 'Plugar modelos prontos de copy e funil. Não optimize o que deve ser automatizado.' },
                { icon: <FastForward size={32} />, step: '03', title: 'Accelerate', desc: 'Ignição e dados reais no dashboard. Métrica: tempo até o real < 168h.' }
              ].map((item, i) => (
                <div key={i} className="group">
                  <div className="mb-8 group-hover:rotate-12 transition-transform">{item.icon}</div>
                  <div className="text-xs font-black mb-4 opacity-30">SEQUÊNCIA_{item.step}</div>
                  <h3 className="text-2xl font-black uppercase mb-4 leading-none">{item.title}</h3>
                  <p className="text-zinc-500 text-sm font-bold uppercase leading-tight">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DOBRA 7: VALUE STACK */}
        <section className="py-32 bg-zinc-50 border-b border-zinc-200">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-4xl font-black uppercase mb-16 text-center">O Empilhamento de Valor</h2>
            <div className="border-4 border-black bg-white">
              {[
                { item: 'MVP Plugin [Tecnologia]', price: 'R$ 4.997' },
                { item: 'Academy Execution [Método]', price: 'R$ 1.997' },
                { item: 'Desafio Vitória 7 Dias', price: 'R$ 997' },
                { item: 'The Bunker [Comunidade]', price: 'R$ 2.997' }
              ].map((row, i) => (
                <div key={i} className="flex justify-between items-center p-8 border-b-2 border-zinc-100 last:border-0">
                  <div className="flex items-center gap-4">
                    <Check size={20} className="text-zinc-300" />
                    <span className="font-black uppercase tracking-tight">{row.item}</span>
                  </div>
                  <span className="font-mono text-sm font-bold text-zinc-400">{row.price}</span>
                </div>
              ))}
              <div className="p-12 bg-black text-white flex flex-col md:flex-row justify-between items-center gap-8">
                <div>
                  <div className="text-[10px] font-black tracking-widest uppercase opacity-40 mb-2">Total Estimated Value</div>
                  <div className="text-3xl font-bold line-through opacity-30 italic">R$ 10.988,00</div>
                </div>
                <div className="text-center md:text-right">
                  <div className="text-[10px] font-black tracking-widest uppercase mb-2 text-zinc-400">Your Initial Investment</div>
                  <div className="text-8xl font-black leading-none tracking-tighter">R$ 250</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DOBRA 8: GUARANTEE */}
        <section className="py-40 text-center">
          <div className="max-w-4xl mx-auto px-6">
            <ShieldCheck size={80} className="mx-auto mb-12" />
            <h2 className="text-6xl md:text-8xl font-black uppercase mb-12 leading-[0.85] tracking-tighter">
              Ou você vence, ou eu te pago pelo seu tempo.
            </h2>
            <p className="text-xl font-bold text-zinc-500 mb-16 leading-tight max-w-xl mx-auto">
              Se em 7 dias você não tiver sua vitória, devolvemos tudo + R$ 100 via PIX. Isso é uma Oferta Grand Slam.
            </p>
            <button className="bg-black text-white px-20 py-8 text-3xl font-black uppercase tracking-tighter hover:bg-zinc-800 transition-all shadow-2xl">
              CONECTAR AO BUNKER
            </button>
          </div>
        </section>
      </main>

      <footer className="py-20 bg-zinc-50 border-t border-zinc-200 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 text-center">
        MVP_ACADEMY_SYSTEM_PROTOCOL // 2026 // NO_MORE_EXCUSES
      </footer>
    </div>
  );
};

export default MVPAcademyV3;
