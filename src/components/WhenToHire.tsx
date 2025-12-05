import { Home, FileCheck, Calendar, BarChart3, Gavel, Users, HeartCrack, FileText, DollarSign, House, MapPin, FileStack, MapPinned } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
const WhenToHire = () => {
  const titleReveal = useScrollReveal({
    threshold: 0.3
  });
  const iconsReveal = useScrollReveal({
    threshold: 0.2,
    delay: 100
  });
  const additionalReveal = useScrollReveal({
    threshold: 0.3,
    delay: 200
  });
  const buttonReveal = useScrollReveal({
    threshold: 0.4,
    delay: 300
  });
  const situations = [{
    icon: Home,
    title: "Imóvel sem documentação"
  }, {
    icon: FileCheck,
    title: "Dar segurança na aquisição de propriedades"
  }, {
    icon: Calendar,
    title: "Na urgência em negociar ou vender imóveis ainda sem incorporação"
  }, {
    icon: BarChart3,
    title: "Houver interesse em permutar imóveis"
  }, {
    icon: Gavel,
    title: "Leilões de imóveis"
  }];
  return <section className="py-12 md:py-20 px-4 md:px-6 bg-marsala-light">
      <div className="container max-w-7xl mx-auto">
        <div ref={titleReveal.ref} className={`scroll-reveal ${titleReveal.isVisible ? 'scroll-reveal-visible' : ''} px-2`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-palatino font-bold text-primary text-center mb-6 md:mb-8 leading-tight max-w-[90%] mx-auto">
            Quando Contratar Cláudia Amim Advogados?
          </h2>

          <p className="text-base sm:text-lg md:text-xl font-caudex text-primary text-center mb-8 md:mb-12 max-w-[90%] mx-auto">
            Quando estiver enfrentando algum problema relacionado ao Direito Imobiliário
          </p>
        </div>

        {/* Icons timeline */}
        <div ref={iconsReveal.ref} className={`relative mb-12 md:mb-16 scroll-reveal ${iconsReveal.isVisible ? 'scroll-reveal-visible' : ''}`}>
          <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start max-w-6xl mx-auto relative gap-6 md:gap-0">
            {/* Dotted line connecting circles */}
            <div className="absolute top-16 left-0 right-0 h-0.5 border-t-2 border-dashed border-primary/40 hidden md:block" style={{
            width: 'calc(100% - 8rem)',
            left: '4rem'
          }} />
            
            {situations.map((situation, index) => <div key={index} className="flex flex-col items-center md:flex-1 relative z-10 w-full max-w-[250px] md:max-w-none">
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full border-4 border-primary bg-marsala-light flex items-center justify-center mb-3 md:mb-6">
                  <situation.icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary" strokeWidth={2} />
                </div>
                <p className="text-primary text-center text-xs sm:text-sm font-caudex max-w-[200px] leading-relaxed">
                  {situation.title}
                </p>
              </div>)}
          </div>
        </div>

        {/* Gradient bar */}
        <div className="h-1.5 md:h-2 mb-10 md:mb-16 rounded-full bg-gradient-to-r from-amber-200 via-orange-300 to-marsala-dark max-w-6xl mx-auto" />

        {/* New Section: Additional Situations */}
        <div ref={additionalReveal.ref} className={`mb-10 md:mb-16 scroll-reveal ${additionalReveal.isVisible ? 'scroll-reveal-visible' : ''} px-2`}>
          <h3 className="text-lg sm:text-xl md:text-2xl font-palatino text-primary text-center mb-8 md:mb-12 font-thin max-w-[90%] mx-auto">
            Estiver passando por alguma dessas situações
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
            {[{
            icon: Users,
            title: "Enfrenta algum conflito familiar e precisa de orientação"
          }, {
            icon: HeartCrack,
            title: "Precisa fazer seu divórcio"
          }, {
            icon: Users,
            title: "Disputa sobre guarda dos filhos"
          }, {
            icon: FileText,
            title: "Problemas com Pensão alimentícia"
          }, {
            icon: House,
            title: "Precisa regularizar bens de herança e proteger seu patrimônio"
          }, {
            icon: Users,
            title: "Necessitar solicitar a interdição de um familiar"
          }, {
            icon: MapPinned,
            title: "Mora no exterior e precisa regularizar alguma questão legal no Brasil"
          }, {
            icon: FileStack,
            title: "Recebeu uma notificação Judicial "
          }, {
            icon: Home,
            title: "Tem dúvidas sobre Regime de Bens"
          }].map((item, index) => <div key={index} className="flex flex-col items-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 rounded-full border-3 md:border-4 border-primary bg-background flex items-center justify-center mb-2 sm:mb-4">
                  <item.icon className="w-7 h-7 sm:w-9 sm:h-9 md:w-12 md:h-12 text-primary" strokeWidth={1.5} />
                </div>
                <p className="text-primary text-center text-[10px] sm:text-xs md:text-sm font-caudex leading-tight sm:leading-relaxed px-1">
                  {item.title}
                </p>
              </div>)}
          </div>
        </div>

        {/* Button */}
        <div ref={buttonReveal.ref} className={`flex justify-center scroll-reveal ${buttonReveal.isVisible ? 'scroll-reveal-visible' : ''}`}>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-base md:text-lg px-10 py-6" asChild>
            <a href="https://wa.me/5532988234428" target="_blank" rel="noopener noreferrer">
              Falar com o escritório agora
            </a>
          </Button>
        </div>
      </div>
    </section>;
};
export default WhenToHire;