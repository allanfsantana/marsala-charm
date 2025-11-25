import { Button } from "@/components/ui/button";

const WhyChoose = () => {
  return (
    <section className="py-20 px-6 bg-marsala-light">
      <div className="container max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Card Esquerdo - Rosa claro com borda */}
          <div className="bg-background border-2 border-primary/30 rounded-2xl p-8 md:p-12 flex items-center">
            <p className="text-primary text-lg md:text-xl leading-relaxed font-caudex">
              Entendemos que lidar com questões imobiliárias pode ser complexo e desafiador. É por isso que oferecemos um atendimento especializado e personalizado, colocando suas necessidades e interesses em primeiro lugar.
            </p>
          </div>
          
          {/* Card Direito - Bordô escuro */}
          <div className="bg-marsala-dark rounded-2xl p-8 md:p-12 flex items-center">
            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-palatino font-bold leading-tight">
              A SOLUÇÃO JURÍDICA QUE VOCÊ PRECISA PARA PROTEGER SUA PROPRIEDADE.
            </h2>
          </div>
        </div>

        {/* Botão centralizado */}
        <div className="flex justify-center">
          <Button 
            size="lg" 
            variant="secondary"
            className="text-base md:text-lg px-10 py-6 hover:scale-105 transition-transform"
          >
            Quero agendar um horário
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
