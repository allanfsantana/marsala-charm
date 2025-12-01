import { Button } from "@/components/ui/button";
import heroOffice from "@/assets/hero-office.jpg";

const Hero = () => {
  return (
    <section 
      className="relative min-h-[700px] flex items-center justify-end bg-primary text-primary-foreground py-12 px-6 md:px-12 lg:px-16 bg-cover bg-center"
      style={{ backgroundImage: `url(${heroOffice})` }}
    >
      <div className="absolute inset-0 bg-[#67041b]/60"></div>
      
      {/* Conteúdo alinhado à direita */}
      <div className="relative z-10 max-w-[95%] md:max-w-[50%] lg:max-w-[40%] text-left space-y-6">
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-palatino font-bold leading-tight">
          Escritório especializado em Direito Imobiliário e Direito Civil com atuação em Juiz de Fora e região
        </h1>
        
        <div className="space-y-4">
          <p className="text-base md:text-lg leading-relaxed opacity-95">
            A justiça e segurança que você procura começa aqui. Nossa equipe de advogadas está aqui para fornecer soluções jurídicas personalizadas, adaptadas às suas necessidades.
          </p>
          <p className="text-lg md:text-xl font-bold leading-relaxed">
            Não importa se o seu problema é imobiliário ou civil, nós lutamos por você.
          </p>
        </div>
        
        <div className="pt-4">
          <Button 
            size="lg" 
            variant="secondary"
            className="text-base md:text-lg px-8 py-6 hover:scale-105 transition-transform"
          >
            Falar com uma advogada especialista
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
