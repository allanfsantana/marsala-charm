import { Button } from "@/components/ui/button";
import heroOffice from "@/assets/hero-office.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
const Hero = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });
  
  return <section className="hero-section relative min-h-[700px] flex flex-col items-center justify-between bg-primary text-primary-foreground pt-8 pb-12 px-6 bg-cover bg-center" style={{
    backgroundImage: `url(${heroOffice})`
  }}>
      <div className="absolute inset-0 bg-[#67041b]/60"></div>
      
      {/* Título no topo */}
      <div className="container max-w-5xl text-center relative z-10">
        
      </div>
      
      {/* Subtítulo e botão na parte inferior */}
      <div 
        ref={ref}
        className={`content-wrapper container max-w-4xl text-center space-y-6 relative z-10 mb-16 scroll-reveal ${isVisible ? 'scroll-reveal-visible' : ''}`}
      >
        <p className="text-base md:text-lg leading-relaxed opacity-95">
          A justiça e segurança que você procura começa aqui. Nossa equipe de advogadas está aqui para fornecer soluções jurídicas personalizadas, adaptadas às suas necessidades.
        </p>
        <p className="text-lg md:text-xl font-bold leading-relaxed">
          Não importa se o seu problema é imobiliário ou civil, nós lutamos por você.
        </p>
        <div className="pt-4">
          <Button size="lg" variant="secondary" className="text-base md:text-lg px-8 py-6 hover:scale-105 transition-transform" asChild>
            <a href="https://wa.me/5532988234428" target="_blank" rel="noopener noreferrer">
              Falar com uma advogada especialista
            </a>
          </Button>
        </div>
      </div>
    </section>;
};
export default Hero;