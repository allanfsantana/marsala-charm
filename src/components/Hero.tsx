import { Button } from "@/components/ui/button";
import heroOffice from "@/assets/hero-office.jpg";

const Hero = () => {
  return (
    <section 
      className="relative min-h-[700px] flex flex-col items-center justify-between text-primary-foreground py-20 px-6 bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroOffice})`,
      }}
    >
      <div className="absolute inset-0 bg-primary/60"></div>
      
      {/* Grupo superior - Título e textos */}
      <div className="container max-w-5xl text-center space-y-6 relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-palatino font-bold leading-tight">
          Escritório especializado em<br />
          Direito Imobiliário e Direito Civil
        </h1>
        <p className="text-xl md:text-2xl font-palatino font-semibold opacity-95">
          com atuação em Juiz de Fora e região
        </p>
        <p className="text-base md:text-lg max-w-4xl mx-auto leading-relaxed opacity-95 mt-8">
          A justiça e segurança que você procura começa aqui. Nossa equipe de advogadas está aqui para fornecer soluções jurídicas personalizadas, adaptadas às suas necessidades.
        </p>
        <p className="text-lg md:text-xl font-bold max-w-3xl mx-auto leading-relaxed">
          Não importa se o seu problema é imobiliário ou civil, nós lutamos por você.
        </p>
      </div>
      
      {/* Grupo inferior - Botão no rodapé */}
      <div className="relative z-10 pb-8">
        <Button 
          size="lg" 
          variant="secondary"
          className="text-base md:text-lg px-8 py-6 hover:scale-105 transition-transform"
        >
          Falar com uma advogada especialista
        </Button>
      </div>
    </section>
  );
};

export default Hero;
