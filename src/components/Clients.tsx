import { FileCheck, FileText, Users, Gavel, Building, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
const Clients = () => {
  const clientTypes = [{
    icon: FileCheck,
    title: "Consultas e Análises",
    description: "Atendimento para consultas jurídicas e análise de documentação"
  }, {
    icon: FileText,
    title: "Elaboração de Contratos",
    description: "Redação e revisão de contratos imobiliários e civis"
  }, {
    icon: Users,
    title: "Assessoria para Condomínios",
    description: "Suporte jurídico completo para administração condominial"
  }, {
    icon: Gavel,
    title: "Ações Judiciais",
    description: "Representação em processos judiciais imobiliários"
  }, {
    icon: Building,
    title: "Imobiliárias e Loteamentos",
    description: "Assessoria especializada para incorporadores e construtoras"
  }, {
    icon: Scale,
    title: "Resoluções Legais",
    description: "Soluções jurídicas para questões complexas"
  }];
  return <section className="py-20 px-6 bg-background">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          
          
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {clientTypes.map((type, index) => {
          const Icon = type.icon;
          return (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-card rounded-lg border border-border">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-palatino font-semibold text-foreground mb-2">{type.title}</h3>
              <p className="font-caudex text-muted-foreground text-sm">{type.description}</p>
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
    </section>;
};
export default Clients;