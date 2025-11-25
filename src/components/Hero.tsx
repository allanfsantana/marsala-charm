import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center bg-primary text-primary-foreground py-20 px-6">
      <div className="container max-w-4xl text-center space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-palatino font-bold leading-tight">
          Escritório especializado em<br />
          Direito Imobiliário e Direito Civil
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed opacity-95">
          Atuação em todo o Brasil com mais de 100 anos de tradição. Oferecemos serviços jurídicos de excelência com atendimento personalizado e soluções eficazes para cada cliente.
        </p>
        <div className="pt-4">
          <Button 
            size="lg" 
            variant="secondary"
            className="text-base px-8 py-6 hover:scale-105 transition-transform"
          >
            Agende uma consulta jurídica
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
