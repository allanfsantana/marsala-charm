import { Button } from "@/components/ui/button";
const WhyChoose = () => {
  return <section className="py-20 px-6 bg-marsala-light">
      <div className="container max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-palatino font-bold text-marsala-dark text-center mb-12">
          Escritório especializado em Direito Imobiliário e Direito Civil com atuação em Juiz de Fora e região
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Card Esquerdo - Rosa claro com borda */}
          <div className="bg-background border-2 border-primary/30 rounded-2xl p-8 md:p-12 flex items-center">
            <p className="text-primary text-lg leading-relaxed font-caudex md:text-lg text-center">
              Entendemos que lidar com questões jurídicas pode ser complexo e desafiador. É por isso que oferecemos um atendimento especializado e personalizado, colocando suas necessidades e interesses em primeiro lugar.
            </p>
          </div>
          
          {/* Card Direito - Bordô escuro */}
          <div className="bg-marsala-dark rounded-2xl p-8 md:p-12 flex items-center">
            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-palatino font-bold leading-tight text-center">
              A SOLUÇÃO JURÍDICA QUE VOCÊ PRECISA.
            </h2>
          </div>
        </div>

        {/* Botão centralizado */}
        <div className="flex justify-center">
          <Button size="lg" variant="secondary" className="text-base md:text-lg px-10 py-6 hover:scale-105 transition-transform" asChild>
            <a href="https://wa.me/5532999613224" target="_blank" rel="noopener noreferrer">
              Quero agendar um horário
            </a>
          </Button>
        </div>
      </div>
    </section>;
};
export default WhyChoose;