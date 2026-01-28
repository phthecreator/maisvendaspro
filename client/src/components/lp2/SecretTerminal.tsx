import React, { useState, useEffect, useRef } from 'react';

const FULL_CONTENT = `
1️⃣ Código puro não paga boleto. Sistema rodando, sim.

Durante muito tempo eu foquei em escrever código "bonito".
O ponto de virada foi entender que o mercado paga por solução rodando, não por elegância técnica.

Quando eu passei a pensar em:
> problema real
> tempo de entrega
> impacto direto no caixa do cliente

...meu código começou a gerar dinheiro, não só aprendizado.

------------------------------------------------

2️⃣ IA + VS Code = vantagem injusta de velocidade

O maior diferencial que eu (e meu time) usamos todo dia é simples:
IA como copiloto no VS Code.

Pra landing page, MVP, automação ou protótipo:
✓ o que eu levava dias → virou horas
✓ o que era travado → virou iterável
✓ o que era "depois eu faço" → virou entrega

Ser 10x ou 20x mais rápido não é exagero.
É a diferença entre estudar e cobrar.

E quem não usa IA assim em 2025 tá competindo de mãos atadas.

------------------------------------------------

3️⃣ Quem entrega rápido testa mais — e ganha mais

Velocidade não é só conforto. É vantagem competitiva.

Quando você entrega rápido:
- você testa ideias sem medo
- erra barato
- ajusta na mesma semana
- fecha projeto antes do outro dev terminar o setup

Foi isso que me permitiu sair do zero e começar a monetizar habilidade.

Enquanto tem gente escolhendo framework há 3 semanas,
eu já entreguei, testei e ajustei 2 vezes.

------------------------------------------------

4️⃣ Dev que sabe vender solução nunca fica sem trampo

O salto real não foi aprender mais tecnologia.
Foi aprender a:
> entender a dor real do cliente (não o que ele acha que é)
> transformar isso em fluxo, página ou automação
> explicar o valor em linguagem simples (sem "tecniquês")

Código é ferramenta.
Resolver problema é o produto.

Empresário não paga por "React bem escrito".
Ele paga por sistema que vende, qualifica e escala.

------------------------------------------------

5️⃣ Se você é dev, isso muda tudo

Se eu tivesse ouvido isso antes, teria economizado anos:

Não espere "ficar bom" pra ganhar dinheiro.
Fique útil, depois fique bom.

IA não te substitui.
Ela te acelera — se você souber usar com critério.

A era do dev que "só executa" acabou.
Quem entende de negócio, processo e resultado vai dominar os próximos 10 anos.
`;

const SecretTerminal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const toggleTerminal = () => {
    if (isOpen) {
      setIsOpen(false);
      setDisplayedText('');
      setIsTyping(false);
    } else {
      setIsOpen(true);
      setIsTyping(true);
    }
  };

  useEffect(() => {
    if (!isOpen) return;

    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < FULL_CONTENT.length) {
        // Type 3 characters at once to speed it up slightly while keeping the effect
        const nextChunk = FULL_CONTENT.slice(currentIndex, currentIndex + 3);
        setDisplayedText((prev) => prev + nextChunk);
        currentIndex += 3;
        
        // Auto scroll to bottom
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
      }
    }, 10); // 10ms per chunk

    return () => clearInterval(typingInterval);
  }, [isOpen]);

  return (
    <div className="w-full max-w-4xl mx-auto mt-12 font-mono">
      {/* Trigger Button */}
      {!isOpen && (
        <button 
          onClick={toggleTerminal}
          className="w-full group relative overflow-hidden rounded-xl border border-dashed border-primary/30 bg-black/40 p-8 hover:bg-primary/5 hover:border-primary/60 transition-all duration-300 cursor-pointer text-left"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all">
              <span className="text-2xl animate-pulse">🔥</span>
            </div>
            <div>
              <h3 className="text-primary font-black text-lg md:text-xl uppercase tracking-wider group-hover:text-primary transition-colors">
                Insights Fodas Que Eu Aprendi
              </h3>
              <p className="text-xs md:text-sm text-primary/60 uppercase tracking-widest font-bold">
                (E que botaram grana no meu bolso)
              </p>
            </div>
            <div className="ml-auto text-primary/40 text-sm group-hover:text-primary transition-colors">
               [ CLICK TO DECRYPT ]
            </div>
          </div>
        </button>
      )}

      {/* Terminal Window */}
      {isOpen && (
        <div className="rounded-xl overflow-hidden border border-white/10 bg-[#0d1117] shadow-2xl animate-in fade-in zoom-in duration-300">
          {/* Terminal Header */}
          <div className="bg-[#161b22] px-4 py-3 flex items-center justify-between border-b border-white/5">
            <div className="flex gap-2">
              <button onClick={() => setIsOpen(false)} className="w-3 h-3 rounded-full bg-[#ff5f56] hover:bg-[#bf4842] transition-colors" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>
            <div className="text-white/30 text-xs font-medium tracking-wide">
              secrets.sh — vim
            </div>
            <div className="w-10"></div> {/* Spacer for centering */}
          </div>

          {/* Terminal Body */}
          <div 
            ref={scrollRef}
            className="p-6 md:p-8 overflow-y-auto max-h-[600px] text-sm md:text-base leading-relaxed"
          >
            <div className="text-green-400 mb-4 font-bold">
              <span className="text-pink-500">➜</span> <span className="text-blue-400">~</span> ./reveal-truth.sh
            </div>
            
            <pre className="whitespace-pre-wrap font-mono text-white/80">
              {displayedText.split('\n').map((line, i) => {
                // Simple syntax highlighting simulation
                if (line.includes('----------------')) return <div key={i} className="text-white/10 my-4">{line}</div>;
                if (line.match(/^\d+️⃣/)) return <div key={i} className="text-yellow-400 font-bold mt-6 mb-2 text-lg">{line}</div>;
                if (line.startsWith('>')) return <div key={i} className="text-primary pl-4 border-l-2 border-primary/20">{line}</div>;
                if (line.startsWith('✓')) return <div key={i} className="text-green-400 font-bold">{line}</div>;
                if (line.startsWith('-')) return <div key={i} className="text-blue-300 pl-4">{line}</div>;
                
                return <div key={i}>{line}</div>;
              })}
              {isTyping && <span className="inline-block w-2.5 h-5 bg-primary align-middle animate-pulse ml-1" />}
            </pre>

            {!isTyping && (
              <div className="mt-8 pt-4 border-t border-white/10 text-center">
                 <button 
                   onClick={() => setIsOpen(false)}
                   className="text-white/30 hover:text-white hover:underline text-xs uppercase tracking-widest"
                 >
                   [ CLOSE TERMINAL ]
                 </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SecretTerminal;
