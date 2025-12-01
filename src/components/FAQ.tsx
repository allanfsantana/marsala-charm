import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Como funciona o atendimento inicial?",
      answer: "O atendimento inicial é feito pelo WhatsApp, diretamente com o advogado. Você explica sua situação, e fazemos uma análise preliminar do caso. Se necessário, podemos agendar uma videoconferência ou reunião presencial para aprofundar os detalhes."
    },
    {
      question: "Atendem pessoas físicas e jurídicas?",
      answer: "Sim, atendemos tanto pessoas físicas quanto jurídicas. Nossa equipe está preparada para lidar com casos de diferentes naturezas e complexidades, sempre com o mesmo compromisso de excelência e dedicação."
    },
    {
      question: "O atendimento é sigiloso?",
      answer: "Absolutamente. O sigilo profissional é um dos pilares fundamentais da advocacia. Todas as informações compartilhadas são tratadas com total confidencialidade, protegidas pelo sigilo profissional previsto no Código de Ética da OAB."
    },
    {
      question: "Como posso agendar um atendimento?",
      answer: "Você pode agendar um atendimento através do WhatsApp ou clicando em qualquer um dos botões de contato do site. Nossa equipe responderá rapidamente para encontrar o melhor horário para você."
    },
    {
      question: "Preciso levar documentos no primeiro atendimento?",
      answer: "No primeiro atendimento, não é obrigatório ter todos os documentos. O importante é conversar e entender sua situação. Durante a consulta, o advogado orientará quais documentos serão necessários para dar andamento ao caso."
    }
  ];

  return (
    <section className="py-20 px-6 bg-marsala-dark text-primary-foreground">
      <div className="container max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div>
              <h2 className="text-6xl md:text-7xl font-palatino font-bold mb-2 text-primary-foreground/30">
                FAQ
              </h2>
              <h3 className="text-3xl md:text-4xl font-palatino font-bold">
                Perguntas<br />Frequentes
              </h3>
            </div>
            <Button 
              size="lg"
              variant="secondary"
              className="bg-background text-foreground hover:bg-background/90 px-8 py-6"
              asChild
            >
              <a href="https://wa.me/5532999613224" target="_blank" rel="noopener noreferrer">
                QUERO FALAR COM A EQUIPE →
              </a>
            </Button>
          </div>

          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border-b border-white/20"
                >
                  <AccordionTrigger className="text-left text-lg font-caudex hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-primary-foreground/80 font-caudex pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
