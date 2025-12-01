import { Scale, FileText, Briefcase, Search, Gavel, Phone, Building2, CreditCard, AlertCircle, HeartPulse, Receipt, ShieldAlert, Package, Shield, Handshake, FileSearch, BookOpen } from "lucide-react";
const Services = () => {
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
    icon: Phone,
    title: "Ações contra operadora de telefonia"
  }, {
    icon: Building2,
    title: "Ações contra construtoras ou incorporadoras"
  }, {
    icon: CreditCard,
    title: "Defesa contra empréstimos consignados abusivos"
  }, {
    icon: AlertCircle,
    title: "Nome negativado indevidamente (SPC / SERASA)"
  }, {
    icon: HeartPulse,
    title: "Ações contra planos de saúde"
  }, {
    icon: Receipt,
    title: "Cobrança indevida"
  }, {
    icon: ShieldAlert,
    title: "Ações de indenização"
  }, {
    icon: CreditCard,
    title: "Clonagem de cartão"
  }, {
    icon: Package,
    title: "Produto com defeito ou problema com entrega"
  }, {
    icon: Shield,
    title: "Defesa contra fraude e golpes na internet"
  }];
  return <section className="py-20 px-6 bg-marsala-light">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-palatino font-bold text-foreground mb-4 md:text-2xl">
            CONTE COM QUEM ENTENDE DO ASSUNTO PARA TE AJUDAR
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Oferecemos uma ampla gama de serviços jurídicos para imobiliárias, condomínios, lojas, instituições, pessoas físicas e jurídicas. </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
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