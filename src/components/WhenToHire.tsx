import { Home, FileCheck, Calendar, BarChart3, Gavel } from "lucide-react";
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
        <h2 className="text-3xl md:text-4xl font-palatino font-bold text-primary text-center mb-16">
          Quando Contratar Cláudia Amin Advogados?
        </h2>

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
        <div className="h-2 mb-12 rounded-full bg-gradient-to-r from-amber-200 via-orange-300 to-marsala-dark max-w-6xl mx-auto" />

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
