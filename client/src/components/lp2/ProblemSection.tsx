
import React from 'react';
import { AlertCircle, UserX, Clock, Ban } from 'lucide-react';

const ProblemSection: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-urgency text-3xl md:text-6xl font-black uppercase tracking-tighter mb-4">
            "Se você se reconhecer em algum desses... esse cohort foi feito pra você."
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {/* Card 1 */}
          <div className="bg-card-dark border-2 border-urgency/30 p-8 rounded-2xl flex flex-col h-full">
            <div className="mb-6 flex justify-between items-start">
              <h3 className="text-white text-2xl font-black uppercase">O Iniciante Sem Rumo</h3>
              <UserX className="text-urgency w-8 h-8" />
            </div>
            <div className="flex-1 space-y-4 mb-8">
              <p className="text-urgency font-bold text-sm uppercase tracking-wider">Problema:</p>
              <ul className="text-white/60 space-y-2 text-sm md:text-base">
                <li>- Assiste tutorial de React, depois Python, depois Node...</li>
                <li>- Nunca sabe por onde começar de verdade</li>
                <li>- Portfólio? Zero projetos em produção</li>
                <li>- "Quando eu aprender X, aí começo"</li>
              </ul>
            </div>
            <div className="bg-urgency/10 p-4 rounded-xl border border-urgency/20">
              <p className="text-white text-sm">
                <span className="text-urgency font-black">Resultado:</span> 6 meses se passam. Teoria acumulou. Projetos entregues? Zero.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-card-dark border-2 border-urgency/30 p-8 rounded-2xl flex flex-col h-full">
            <div className="mb-6 flex justify-between items-start">
              <h3 className="text-white text-2xl font-black uppercase">O Dev Raiz Travado</h3>
              <Clock className="text-urgency w-8 h-8" />
            </div>
            <div className="flex-1 space-y-4 mb-8">
              <p className="text-urgency font-bold text-sm uppercase tracking-wider">Problema:</p>
              <ul className="text-white/60 space-y-2 text-sm md:text-base">
                <li>- Sabe escrever código mas demora semanas pra entregar</li>
                <li>- Nunca trabalhou com cliente real</li>
                <li>- Acha que vibe coding é "coisa de preguiçoso"</li>
                <li>- Enquanto discute sintaxe, o mercado mudou</li>
              </ul>
            </div>
            <div className="bg-urgency/10 p-4 rounded-xl border border-urgency/20">
              <p className="text-white text-sm">
                <span className="text-urgency font-black">Resultado:</span> Dev raiz está sendo substituído. Quem não se adapta, fica pra trás.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-card-dark border-2 border-urgency/30 p-8 rounded-2xl flex flex-col h-full">
            <div className="mb-6 flex justify-between items-start">
              <h3 className="text-white text-2xl font-black uppercase">O Curioso que Não Cobra</h3>
              <Ban className="text-urgency w-8 h-8" />
            </div>
            <div className="flex-1 space-y-4 mb-8">
              <p className="text-urgency font-bold text-sm uppercase tracking-wider">Problema:</p>
              <ul className="text-white/60 space-y-2 text-sm md:text-base">
                <li>- Já brincou com Claude e Cursor, mas sem estrutura</li>
                <li>- Constrói coisa interessante mas não sabe vender</li>
                <li>- Trava na hora de falar com cliente e dizer o preço</li>
                <li>- Faz projeto por R$ 300 que deveria ser R$ 5k</li>
              </ul>
            </div>
            <div className="bg-urgency/10 p-4 rounded-xl border border-urgency/20">
              <p className="text-white text-sm">
                <span className="text-urgency font-black">Resultado:</span> Sabe construir, mas não transforma em dinheiro. Frustrante demais.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center max-w-4xl mx-auto">
          <h3 className="text-accent-yellow text-2xl md:text-4xl font-black uppercase mb-6">
            E se em 4 aulas ao vivo você saísse com projeto pronto E soubesse exatamente quanto cobrar?
          </h3>
          <p className="text-white/80 text-lg md:text-2xl font-medium leading-relaxed">
            "4 aulas. Ao vivo. Sem corte. Você faz junto.<br/>
            Projeto funcional em produção. Precificação real.<br/>
            Num grupo onde todo mundo quer a mesma coisa que você."
          </p>
          <p className="text-primary text-3xl md:text-5xl font-black uppercase mt-8 tracking-widest">
            Bem-vindo ao Vibe Coding Pro.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
