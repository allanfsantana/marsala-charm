import { Scale, FileText, Briefcase, Gavel, Handshake, FileSearch, BookOpen, ShieldAlert } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
const Services = () => {
  const headerReveal = useScrollReveal({ threshold: 0.3 });
  const gridReveal = useScrollReveal({ threshold: 0.2, delay: 100 });
  
  const services = [{
    icon: FileSearch,
    title: "Acompanhamento Processual e Diligências"
  }, {
    icon: Scale,
    title: "Consultoria Jurídica"
  }, {
    icon: Briefcase,
    title: "Jurídico Empresarial"
  }, {
    icon: FileText,
    title: "Contratos"
  }, {
    icon: FileText,
    title: "Inventário Judicial e Extra Judicial"
  }, {
    icon: BookOpen,
    title: "Pareceres Jurídicos"
  }, {
    icon: Handshake,
    title: "Mediação de Conflitos"
  }, {
    icon: Gavel,
    title: "Ajuizamento de Ações"
  }, {
    icon: ShieldAlert,
    title: "Ações de indenização"
  }];
  return <section className="py-20 px-6 bg-marsala-light">
      <div className="container max-w-6xl mx-auto">
        <div ref={headerReveal.ref} className={`text-center mb-12 scroll-reveal ${headerReveal.isVisible ? 'scroll-reveal-visible' : ''}`}>
          <h2 className="text-3xl font-palatino font-bold text-foreground mb-4 md:text-2xl">
            CONTE COM QUEM ENTENDE DO ASSUNTO PARA TE AJUDAR
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Oferecemos uma ampla gama de serviços jurídicos para imobiliárias, condomínios, lojas, instituições, pessoas físicas e jurídicas. </p>
        </div>

        <div ref={gridReveal.ref} className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12 scroll-reveal ${gridReveal.isVisible ? 'scroll-reveal-visible' : ''}`}>
          {services.map((service, index) => {
          const Icon = service.icon;
          return <div key={index} className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow border border-border">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-caudex font-semibold text-foreground text-sm">
                  {service.title}
                </h3>
              </div>;
        })}
        </div>

        
      </div>
    </section>;
};
export default Services;