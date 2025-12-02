import { MessageCircle, Search, ClipboardCheck, HeartPulse } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
const Reasons = () => {
  const headerReveal = useScrollReveal({
    threshold: 0.3
  });
  const cardsReveal = useScrollReveal({
    threshold: 0.2,
    delay: 100
  });
  const buttonReveal = useScrollReveal({
    threshold: 0.4,
    delay: 200
  });
  const reasons = [{
    number: "01",
    icon: MessageCircle,
    title: "Atendimento pelo WhatsApp",
    description: "O atendimento é direto com o advogado, sem intermediários. Acolhimento, escuta e direcionamento — tudo com sigilo e objetividade."
  }, {
    number: "02",
    icon: Search,
    title: "Análise Técnica do Caso",
    description: "Você explica o que está acontecendo, e analisamos se há inquérito, denúncia ou risco processual iminente. Caso necessário, é possível agendar uma videoconferência ou reunião presencial."
  }, {
    number: "03",
    icon: ClipboardCheck,
    title: "Escolha a melhor forma de seguir",
    description: "Receba um parecer técnico e os riscos envolvidos. Depois avançamos com a estratégia completa, contrato assinado digitalmente e acompanhamento imediato."
  }, {
    number: "04",
    icon: HeartPulse,
    title: "Acompanhamento contínuo (Suporte completo)",
    description: "Você é informado de cada avanço do caso. Recebe atualizações, orientações e pode entrar em contato com a advogada sempre que necessário."
  }];
  return <section className="py-20 px-6 bg-marsala-dark text-primary-foreground">
      <div className="container max-w-6xl mx-auto">
        <div ref={headerReveal.ref} className={`text-center mb-12 scroll-reveal ${headerReveal.isVisible ? 'scroll-reveal-visible' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-palatino font-bold mb-6">POR QUE ESCOLHER O ESCRITÓRIO CLÁUDIA AMIM
E COMO FUNCIONA O ATENDIMENTO:<br />
            E COMO FUNCIONA O ATENDIMENTO:
          </h2>
          <p className="text-lg opacity-95 max-w-3xl mx-auto">
            Tudo começa com uma conversa. É e mais simples do que você imagina.
          </p>
        </div>

        <div ref={cardsReveal.ref} className={`grid md:grid-cols-2 gap-6 mb-12 scroll-reveal ${cardsReveal.isVisible ? 'scroll-reveal-visible' : ''}`}>
          {reasons.map(reason => {
          const IconComponent = reason.icon;
          return <div key={reason.number} className="bg-marsala-dark/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-marsala-dark/60 transition-all">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <IconComponent className="w-12 h-12 text-white mb-4" strokeWidth={1.5} />
                    <span className="text-6xl font-bold opacity-30 font-palatino">{reason.number}</span>
                  </div>
                  <div className="flex-1 mt-2">
                    <h3 className="text-xl font-bold mb-3 font-palatino">{reason.title}</h3>
                    <p className="opacity-90 leading-relaxed font-caudex text-sm">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>;
        })}
        </div>

        <div ref={buttonReveal.ref} className={`flex justify-center scroll-reveal ${buttonReveal.isVisible ? 'scroll-reveal-visible' : ''}`}>
          <Button size="lg" variant="secondary" className="text-base md:text-lg px-10 py-6 bg-primary/80 hover:bg-primary text-white" asChild>
            <a href="https://wa.me/5532999613224" target="_blank" rel="noopener noreferrer">
              Quero tirar uma dúvida
            </a>
          </Button>
        </div>
      </div>
    </section>;
};
export default Reasons;