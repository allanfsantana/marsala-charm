import { Button } from "@/components/ui/button";

const Team = () => {
  const teamHighlights = [
    "Corpo Técnico altamente qualificado e experiente",
    "Cláudia Amin como sócia fundadora",
    "Compromisso e ética",
    "Corpo jurídico atualizado com novos entendimentos",
    "Equipe focada em resultados para os clientes"
  ];

  return (
    <section className="py-20 px-6 bg-primary text-primary-foreground">
      <div className="container max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-palatino font-bold mb-12">
          Quem Somos
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-6 mb-12">
          <p className="text-lg opacity-95 leading-relaxed">
            O escritório Cláudia Amin é formado por advogados especializados e 
            comprometidos com a excelência no atendimento jurídico.
          </p>
          
          <div className="space-y-3 py-8">
            {teamHighlights.map((highlight, index) => (
              <div key={index} className="text-left pl-6 border-l-2 border-primary-foreground/30">
                <p className="text-base opacity-90">{highlight}</p>
              </div>
            ))}
          </div>
        </div>

        <Button 
          size="lg" 
          variant="secondary"
          className="text-base px-8"
        >
          Conheça nossa equipe
        </Button>
      </div>
    </section>
  );
};

export default Team;
