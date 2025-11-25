import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="container max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-palatino font-bold text-foreground">
              Sobre Nós
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              O escritório Cláudia Amin Advogados é referência em Direito Imobiliário e Direito Civil, 
              com mais de 100 anos de tradição familiar na advocacia. Nossa equipe altamente qualificada 
              oferece soluções jurídicas personalizadas para cada cliente.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Atuamos em todo o território nacional, sempre com foco na excelência técnica, 
              ética profissional e no melhor resultado para nossos clientes.
            </p>
            <Button 
              size="lg" 
              className="mt-4"
            >
              Conheça nossa história
            </Button>
          </div>
          
          <div className="relative h-[400px] rounded-lg overflow-hidden bg-muted">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-2xl font-palatino text-center text-muted-foreground px-8">
                Escritório moderno e acolhedor
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
