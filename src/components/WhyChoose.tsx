import { Home, FileText, Briefcase, Scale, Wrench } from "lucide-react";

const WhyChoose = () => {
  const reasons = [
    {
      icon: Home,
      title: "Experiência",
      description: "Mais de 100 anos de tradição em advocacia"
    },
    {
      icon: FileText,
      title: "Especialização",
      description: "Foco em Direito Imobiliário e Civil"
    },
    {
      icon: Briefcase,
      title: "Profissionalismo",
      description: "Atendimento personalizado e ético"
    },
    {
      icon: Scale,
      title: "Resultados",
      description: "Histórico comprovado de sucesso"
    },
    {
      icon: Wrench,
      title: "Soluções",
      description: "Abordagem estratégica e eficaz"
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-palatino font-bold text-foreground mb-4">
            Quando Contratar Cláudia Amin Advogados?
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div 
                key={index} 
                className="flex flex-col items-center text-center space-y-3 p-4 rounded-lg hover:bg-muted transition-colors"
              >
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground">{reason.title}</h3>
                <p className="text-sm text-muted-foreground">{reason.description}</p>
              </div>
            );
          })}
        </div>
        
        <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-palatino font-bold mb-4">
            O QUE PRECISA PARA<br />CONTRATAR O ESCRITÓRIO?
          </h3>
          <p className="text-lg mb-6 opacity-95">
            Entre em contato conosco e agende uma consulta
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
