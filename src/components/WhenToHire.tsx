import { Home, FileCheck, Calendar, BarChart3, Gavel, Users, HeartCrack, FileText, DollarSign, House, MapPin, FileStack, MapPinned } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhenToHire = () => {
  const situations = [
    {
      icon: Home,
      title: "Imóvel sem documentação",
    },
    {
      icon: FileCheck,
      title: "Dar segurança na aquisição de propriedades",
    },
    {
      icon: Calendar,
      title: "Na urgência em negociar ou vender imóveis ainda sem incorporação",
    },
    {
      icon: BarChart3,
      title: "Houver interesse em permutar imóveis",
    },
    {
      icon: Gavel,
      title: "Leilões de imóveis",
    },
  ];

  return (
    <section className="py-20 px-6 bg-marsala-light">
      <div className="container max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-palatino font-bold text-primary text-center mb-8">
          Quando Contratar Cláudia Amin Advogados?
        </h2>

        <p className="text-lg md:text-xl font-caudex text-primary text-center mb-12">
          Quando estiver enfrentando algum problema relacionado ao Direito Imobiliário
        </p>

        {/* Icons timeline */}
        <div className="relative mb-16">
          <div className="flex justify-between items-start max-w-6xl mx-auto relative">
            {/* Dotted line connecting circles */}
            <div className="absolute top-16 left-0 right-0 h-0.5 border-t-2 border-dashed border-primary/40 hidden md:block" style={{ width: 'calc(100% - 8rem)', left: '4rem' }} />
            
            {situations.map((situation, index) => (
              <div key={index} className="flex flex-col items-center flex-1 relative z-10">
                <div className="w-32 h-32 rounded-full border-4 border-primary bg-marsala-light flex items-center justify-center mb-6">
                  <situation.icon className="w-12 h-12 text-primary" strokeWidth={2} />
                </div>
                <p className="text-primary text-center text-sm font-caudex max-w-[200px] leading-relaxed">
                  {situation.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Gradient bar */}
        <div className="h-2 mb-16 rounded-full bg-gradient-to-r from-amber-200 via-orange-300 to-marsala-dark max-w-6xl mx-auto" />

        {/* New Section: Additional Situations */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-palatino font-bold text-primary text-center mb-12">
            Estiver passando por alguma dessas situações
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Users, title: "Enfrenta algum conflito familiar e precisa de orientação" },
              { icon: HeartCrack, title: "Precisa fazer seu divórcio" },
              { icon: Users, title: "Disputa sobre guarda dos filhos" },
              { icon: FileText, title: "Problemas com Pensão alimentícia" },
              { icon: House, title: "Precisa regularizar bens de herança e proteger seu patrimônio" },
              { icon: Users, title: "Necessitar solicitar a interdição de um familiar" },
              { icon: MapPinned, title: "Mora no exterior e precisa regularizar alguma questão legal no Brasil" },
              { icon: FileStack, title: "Recebeu uma notificação Judicial da Vara de Família" },
              { icon: Home, title: "Tem dúvidas sobre Regime de Bens" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full border-4 border-primary bg-background flex items-center justify-center mb-4">
                  <item.icon className="w-10 h-10 md:w-12 md:h-12 text-primary" strokeWidth={1.5} />
                </div>
                <p className="text-primary text-center text-xs md:text-sm font-caudex leading-relaxed">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-base md:text-lg px-10 py-6"
          >
            Falar com o escritório agora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhenToHire;
