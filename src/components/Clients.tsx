import { FileCheck, FileText, Users, Gavel, Building, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";

const Clients = () => {
  const clientTypes = [
    {
      icon: FileCheck,
      title: "Consultas e Análises",
      description: "Atendimento para consultas jurídicas e análise de documentação"
    },
    {
      icon: FileText,
      title: "Elaboração de Contratos",
      description: "Redação e revisão de contratos imobiliários e civis"
    },
    {
      icon: Users,
      title: "Assessoria para Condomínios",
      description: "Suporte jurídico completo para administração condominial"
    },
    {
      icon: Gavel,
      title: "Ações Judiciais",
      description: "Representação em processos judiciais imobiliários"
    },
    {
      icon: Building,
      title: "Imobiliárias e Loteamentos",
      description: "Assessoria especializada para incorporadores e construtoras"
    },
    {
      icon: Scale,
      title: "Resoluções Legais",
      description: "Soluções jurídicas para questões complexas"
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-palatino font-bold text-foreground mb-4">
            COM O QUE VOCÊ ENTENDE DO<br />
            ASSUNTO PARA TE AJUDAR?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Atuamos em diversas frentes do Direito Imobiliário e Civil
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {clientTypes.map((type, index) => {
            const Icon = type.icon;
            return (
              <div 
                key={index}
                className="bg-card p-8 rounded-lg border border-border hover:border-primary transition-colors text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{type.title}</h3>
                <p className="text-sm text-muted-foreground">{type.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button size="lg">
            Entre em contato
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Clients;
