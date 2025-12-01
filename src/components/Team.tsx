import { Button } from "@/components/ui/button";

const Team = () => {
  return (
    <section className="py-20 px-6 bg-marsala">
      <div className="container max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-palatino font-bold mb-8 text-[#E8B4B8]">
          Quem Somos
        </h2>
        
        <p className="text-lg md:text-xl text-white leading-relaxed mb-12 max-w-3xl mx-auto">
          Cláudia Amin e Lorena Mascarenhas, advogadas especializadas em direito imobiliário, 
          com ampla experiência em assessoria para imobiliárias. Uma advocacia com foco na 
          área consultiva e preventiva.
        </p>

        <Button 
          size="lg" 
          className="bg-[#8B5A5A] hover:bg-[#704848] text-white px-8 py-4 text-base"
        >
          Falar agora com uma especialista
        </Button>
      </div>
    </section>
  );
};

export default Team;
