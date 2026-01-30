
import React from 'react';
import { AlertCircle, UserX, Clock, Ban } from 'lucide-react';

const ProblemSection: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-urgency text-3xl md:text-6xl font-black uppercase tracking-tighter mb-4">
            "Você já viu esse filme (e ele SEMPRE acaba mal)..."
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {/* Card 1 */}
          <div className="bg-card-dark border-2 border-urgency/30 p-8 rounded-2xl flex flex-col h-full">
            <div className="mb-6 flex justify-between items-start">
              <h3 className="text-white text-2xl font-black uppercase">O Dev Tradicional</h3>
              <UserX className="text-urgency w-8 h-8" />
            </div>
            <div className="flex-1 space-y-4 mb-8">
              <p className="text-urgency font-bold text-sm">😰 Problema:</p>
              <ul className="text-white/60 space-y-2 text-sm md:text-base">
                <li>• Demora 3 meses pra entregar um MVP</li>
                <li>• Cobra R$ 15.000 (que você não tem)</li>
                <li>• Usa termos técnicos que você não entende</li>
                <li>• Some quando o bug aparece</li>
              </ul>
            </div>
            <div className="bg-urgency/10 p-4 rounded-xl border border-urgency/20">
              <p className="text-white text-sm">
                <span className="text-urgency font-black">💸 Resultado:</span> Você fica refém, quebra ou desiste.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-card-dark border-2 border-urgency/30 p-8 rounded-2xl flex flex-col h-full">
            <div className="mb-6 flex justify-between items-start">
              <h3 className="text-white text-2xl font-black uppercase">O Gestor de Tráfego Limitado</h3>
              <Clock className="text-urgency w-8 h-8" />
            </div>
            <div className="flex-1 space-y-4 mb-8">
              <p className="text-urgency font-bold text-sm">😤 Problema:</p>
              <ul className="text-white/60 space-y-2 text-sm md:text-base">
                <li>• Gera leads, mas cliente não atende</li>
                <li>• Reclama que "o lead é frio"</li>
                <li>• Perde conta porque não entrega resultado</li>
                <li>• Vive de tiro curto (R$ 300, R$ 500)</li>
              </ul>
            </div>
            <div className="bg-urgency/10 p-4 rounded-xl border border-urgency/20">
              <p className="text-white text-sm">
                <span className="text-urgency font-black">💸 Resultado:</span> Você vira commoditizado. Todo mundo faz tráfego.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-card-dark border-2 border-urgency/30 p-8 rounded-2xl flex flex-col h-full">
            <div className="mb-6 flex justify-between items-start">
              <h3 className="text-white text-2xl font-black uppercase">O Empreendedor Travado</h3>
              <Ban className="text-urgency w-8 h-8" />
            </div>
            <div className="flex-1 space-y-4 mb-8">
              <p className="text-urgency font-bold text-sm">😫 Problema:</p>
              <ul className="text-white/60 space-y-2 text-sm md:text-base">
                <li>• Tem a ideia do SaaS, mas não sabe executar</li>
                <li>• Trava na hora de integrar WhatsApp com banco de dados</li>
                <li>• Assiste curso atrás de curso, mas nunca faz</li>
                <li>• Fica esperando "o momento certo"</li>
              </ul>
            </div>
            <div className="bg-urgency/10 p-4 rounded-xl border border-urgency/20">
              <p className="text-white text-sm">
                <span className="text-urgency font-black">💸 Resultado:</span> 6 meses se passam. Concorrente já lançou. Você continua na mesma.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center max-w-4xl mx-auto">
          <h3 className="text-accent-yellow text-2xl md:text-4xl font-black uppercase mb-6 italic">
            🔥 Mas e se existisse um caminho completamente diferente?
          </h3>
          <p className="text-white/80 text-lg md:text-2xl font-medium leading-relaxed">
            "Um caminho onde você NÃO precisa saber sintaxe...<br/>
            ...onde a IA faz o trabalho pesado...<br/>
            ...e você se torna a PONTE entre o problema do empresário e a solução tecnológica?"
          </p>
          <p className="text-primary text-3xl md:text-5xl font-black uppercase mt-8 tracking-widest neon-glow">
            Bem-vindo ao Vibe Coding.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
