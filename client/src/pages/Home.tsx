import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Zap, TrendingUp, Gift, Shield, Users } from "lucide-react";

/**
 * Landing Page - Mentoria IA Lucrativa
 * Design: Manus Dark Theme (Cinza Escuro, Branco, Verde e Vermelho)
 * Gatilhos: Prova Social, Urgência, Escassez, Contraste, Risco Zero
 */

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        {/* Background gradient accent */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-block">
            <span className="text-primary font-bold text-sm uppercase tracking-widest">
              ⚡ Apenas 40 Vagas Disponíveis
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white">Pare de Codar</span>
            <span className="block text-primary">de Graça!</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            A IA vai te dar o dinheiro para aprender o que quiser. Mentoria de <span className="text-accent font-bold">R$ 15.000,00</span> por <span className="text-primary font-bold">R$ 800,00</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 rounded-lg font-bold"
              onClick={() => scrollToSection("oferta")}
            >
              Garantir Minha Vaga Agora
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border text-foreground hover:bg-card text-lg px-8 py-6 rounded-lg font-bold"
              onClick={() => scrollToSection("processo")}
            >
              Entender Como Funciona
            </Button>
          </div>

          {/* Social Proof */}
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              <span>200+ mil pessoas na comunidade</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              <span>Garantia 100% ou dinheiro de volta</span>
            </div>
          </div>
        </div>
      </section>

      {/* A DOR - SEÇÃO DE IDENTIFICAÇÃO */}
      <section className="py-20 px-4 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Você está na <span className="text-accent">"Era das Cavernas"</span> do desenvolvimento
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "💰",
                title: "Falta de Grana",
                desc: "Estudando sem dinheiro, esperando o momento certo que nunca chega.",
              },
              {
                icon: "⏰",
                title: "Tempo Desperdiçado",
                desc: "Meses codando na mão enquanto a IA entrega projetos de R$ 40k em dias.",
              },
              {
                icon: "😰",
                title: "Ansiedade por Resultados",
                desc: "Muita teoria, pouca prática monetizável. Família cobrando resultados.",
              },
            ].map((item, i) => (
              <Card key={i} className="p-6 bg-background border-border">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* A SOLUÇÃO */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-center">
            A Solução: Monetizar <span className="text-primary">Agora</span>
          </h2>

          <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Você vai aprender a usar IA para resolver problemas e entregar automações que pagam. Enquanto estiver pagando a última parcela de R$ 80,00, você já terá feito R$ 8.000, R$ 20.000, R$ 60.000.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">O que você vai aprender:</h3>
              {[
                "Script comercial exato para vender automações de IA",
                "Estratégia de tráfego low-cost para atrair clientes",
                "Automação de WhatsApp e CRM com IA",
                "Como treinar closers com IA",
                "O prompt gigante para estruturar projetos",
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Formato da Mentoria</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-muted-foreground text-sm">Duração</p>
                  <p className="text-xl font-bold">Calls ao vivo 1x por semana</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Turma</p>
                  <p className="text-xl font-bold">Apenas 40 pessoas (Escassez Real)</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Mentores</p>
                  <p className="text-xl font-bold">Você + Murilo (Expertise Total)</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Foco</p>
                  <p className="text-xl font-bold">Monetização Rápida com IA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROVA SOCIAL */}
      <section className="py-20 px-4 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Prova Social: <span className="text-primary">Resultados Reais</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 bg-background border-border">
              <div className="mb-4">
                <p className="text-sm text-muted-foreground">Depoimento</p>
                <h3 className="text-2xl font-bold text-primary">Rafael Meres</h3>
              </div>
              <p className="text-lg mb-4">
                "Essa é a mesma mentoria que pagamos R$ 15.000,00. Transformou completamente nossa estratégia de vendas de automações."
              </p>
              <div className="flex items-center gap-2 text-primary font-bold">
                <TrendingUp className="w-5 h-5" />
                Vendas de R$ 40k+ em automações
              </div>
            </Card>

            <Card className="p-8 bg-background border-border">
              <div className="mb-4">
                <p className="text-sm text-muted-foreground">Resultado Típico</p>
                <h3 className="text-2xl font-bold text-primary">Alunos da Mentoria</h3>
              </div>
              <p className="text-lg mb-4">
                "Nos primeiros 30 dias, consegui fechar 3 projetos de automação. Já recuperei o investimento 10x."
              </p>
              <div className="flex items-center gap-2 text-primary font-bold">
                <Zap className="w-5 h-5" />
                ROI em menos de 1 mês
              </div>
            </Card>
          </div>

          <div className="bg-background border border-border rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Pesquisas de Mercado</h3>
            <p className="text-muted-foreground mb-4">
              "Como fazer grana fácil com IA" é uma das pesquisas que mais cresce no Google e YouTube. Você vai aprender exatamente isso.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {["40k em automações", "60k em vendas", "80k+ em projetos"].map((stat, i) => (
                <div key={i} className="text-center p-4 bg-card rounded-lg border border-border">
                  <p className="text-primary font-bold text-lg">{stat}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* O PROCESSO - NOVO ÂNGULO */}
      <section id="processo" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-center">
            Você vai aprender a fazer <span className="text-primary">o que estamos fazendo agora</span>
          </h2>

          <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Não é só mentoria de teoria. Você vai aprender o processo completo: vender, entregar, automatizar e escalar.
          </p>

          <div className="space-y-6">
            {[
              {
                num: "1",
                title: "Script Comercial",
                desc: "O script exato que usamos para vender automações de IA para médicos, advogados e outros profissionais.",
              },
              {
                num: "2",
                title: "Tráfego Inteligente",
                desc: "Como atrair clientes de alto valor usando comunidades (Rocketseat, Alura) sem gastar fortunas.",
              },
              {
                num: "3",
                title: "Automação de Vendas",
                desc: "Integração de IA no CRM, disparos automáticos no WhatsApp e Facebook, bots treinadores de closers.",
              },
              {
                num: "4",
                title: "Entrega de Projetos",
                desc: "O prompt gigante para estruturar projetos complexos e transformar problemas em soluções lucrativas.",
              },
            ].map((step, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">
                  {step.num}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-lg text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BÔNUS */}
      <section className="py-20 px-4 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Bônus: <span className="text-primary">R$ 15.000,00</span> em Ativos
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "📝",
                title: "Script Comercial Vira-Jogo",
                value: "R$ 5.000,00",
                desc: "Script exato para fechar projetos de automação de IA de R$ 15.000,00.",
              },
              {
                icon: "🤖",
                title: "Automação de WhatsApp + CRM",
                value: "R$ 3.000,00",
                desc: "Template e passo a passo para integrar IA ao CRM e automatizar conversas 24/7.",
              },
              {
                icon: "🎯",
                title: "Bot Treinador de Closers",
                value: "R$ 4.000,00",
                desc: "Arquitetura e prompt para criar IA que treina vendedores nas calls.",
              },
              {
                icon: "📊",
                title: "Estratégia de Tráfego Low Cost",
                value: "R$ 2.000,00",
                desc: "Mapa completo de tráfego para atrair clientes de alto valor sem gastar fortunas.",
              },
              {
                icon: "⚙️",
                title: "Prompt Gigante",
                value: "R$ 1.000,00",
                desc: "O mapa mental para transformar problemas em soluções de IA lucrativas.",
              },
            ].map((bonus, i) => (
              <Card key={i} className="p-6 bg-background border-border">
                <div className="text-4xl mb-3">{bonus.icon}</div>
                <h3 className="text-lg font-bold mb-1">{bonus.title}</h3>
                <p className="text-primary font-bold mb-3">{bonus.value}</p>
                <p className="text-muted-foreground">{bonus.desc}</p>
              </Card>
            ))}
            <Card className="md:col-span-2 p-8 bg-primary/10 border border-primary">
              <div className="flex items-center gap-3 mb-2">
                <Gift className="w-6 h-6 text-primary" />
                <p className="text-sm text-primary font-bold">VALOR TOTAL DOS BÔNUS</p>
              </div>
              <p className="text-4xl font-bold text-primary">R$ 15.000,00</p>
            </Card>
          </div>
        </div>
      </section>

      {/* OFERTA - SEÇÃO CRÍTICA */}
      <section id="oferta" className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            A Oferta: <span className="text-accent">Risco Zero</span>
          </h2>

          <Card className="p-10 bg-card border border-border mb-8">
            <div className="text-center mb-8">
              <p className="text-muted-foreground text-lg mb-2">Preço de Lançamento</p>
              <div className="text-6xl font-bold text-primary mb-4">R$ 800,00</div>
              <p className="text-xl text-muted-foreground">10x de R$ 80,00 no cartão</p>
            </div>

            <div className="space-y-4 mb-8 border-t border-border pt-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold">Mentoria de R$ 15.000,00</p>
                  <p className="text-muted-foreground">Mesma que Rafael Meres pagou</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold">R$ 15.000,00 em Bônus</p>
                  <p className="text-muted-foreground">Scripts, Automações, Prompts</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold">Calls ao Vivo 1x por Semana</p>
                  <p className="text-muted-foreground">Com você e Murilo</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold">Garantia 100% de Resultado</p>
                  <p className="text-muted-foreground">Ou dinheiro de volta. Eu ponho minha conta em cheque.</p>
                </div>
              </div>
            </div>

            <div className="bg-accent/10 border border-accent rounded-lg p-6 mb-8">
              <p className="text-accent font-bold text-lg mb-2">⚠️ Urgência Real</p>
              <p className="text-foreground font-bold text-lg">
                Apenas <span className="text-accent">40 vagas</span> para os primeiros. Seremos fiéis a esse número.
              </p>
            </div>

            <Button
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-white text-xl py-7 font-bold rounded-lg"
            >
              Garantir Minha Vaga Agora
            </Button>

            <p className="text-center text-muted-foreground mt-6 text-sm">
              Não preciso de reunião. Só faz o checkout e vem.
            </p>
          </Card>

          {/* Downsell */}
          <div className="bg-card border border-border rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Não tem R$ 800,00?</h3>
            <p className="text-muted-foreground mb-6">
              Temos opções. Fale com a gente sobre a versão de R$ 500,00 ou acesso ao e-book/produto gravado para começar agora.
            </p>
            <Button
              variant="outline"
              className="w-full border-border text-foreground hover:bg-card text-lg py-6 font-bold"
            >
              Explorar Outras Opções
            </Button>
          </div>
        </div>
      </section>

      {/* FECHAMENTO - ÚLTIMA CHAMADA */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/20 via-transparent to-accent/20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Você está prestes a tomar uma decisão
          </h2>

          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Continuar na "Era das Cavernas", codando de graça e esperando o dinheiro cair. Ou investir R$ 800,00 para levar uma mentoria de R$ 15.000,00, mais R$ 15.000,00 em bônus, com <span className="text-primary font-bold">risco zero</span>.
          </p>

          <p className="text-2xl font-bold mb-12">
            <span className="text-accent">Sua única limitação é a escassez: apenas 40 vagas.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 rounded-lg font-bold"
            >
              A Hora de Fazer Dinheiro com IA é Agora
            </Button>
          </div>

          <p className="text-muted-foreground mt-8 text-sm">
            Desenvolvido para quem quer monetizar IA, não apenas aprender código.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-4 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto text-center text-muted-foreground">
          <p>© 2026 Mentoria IA Lucrativa. Todos os direitos reservados.</p>
          <p className="mt-2 text-sm">
            Desenvolvido para a comunidade de desenvolvedores que querem monetizar IA.
          </p>
        </div>
      </footer>
    </div>
  );
}
