import { FileText, Home, Building2, Scale, UserCheck, Gavel } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Regularização de Imóveis",
      description: "Regularização de documentação, usucapião, registro e averbação de imóveis"
    },
    {
      icon: FileText,
      title: "Contratos",
      description: "Elaboração e análise de contratos de compra, venda, locação e permuta"
    },
    {
      icon: Building2,
      title: "Alienação e Loteamento",
      description: "Assessoria em processos de alienação fiduciária e aprovação de loteamentos"
    },
    {
      icon: Scale,
      title: "Direito",
      description: "Consultoria e assessoria jurídica preventiva em direito imobiliário e civil"
    },
    {
      icon: UserCheck,
      title: "Due Diligence",
      description: "Análise detalhada de documentação e situação jurídica de imóveis"
    },
    {
      icon: Gavel,
      title: "Ações Imobiliárias",
      description: "Defesa em ações de despejo, reintegração de posse e disputas imobiliárias"
    },
    {
      icon: FileText,
      title: "IPTU/ITR",
      description: "Revisão de lançamentos tributários e defesas administrativas e judiciais"
    },
    {
      icon: Building2,
      title: "Desmembramento",
      description: "Processos de desmembramento, remembramento e retificação de áreas"
    },
    {
      icon: Home,
      title: "Condomínios Imobiliários",
      description: "Assessoria jurídica para condomínios residenciais e comerciais"
    }
  ];

  return (
    <section className="py-20 px-6 bg-marsala-light">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-palatino font-bold text-foreground mb-4">
            Conheça nossos serviços
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Oferecemos uma ampla gama de serviços jurídicos especializados em Direito Imobiliário e Civil
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-border"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button size="lg">
            Ver todos os serviços
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
