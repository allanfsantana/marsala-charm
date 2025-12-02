import { Button } from "@/components/ui/button";
import officeImage from "@/assets/office.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
const About = () => {
  const {
    ref,
    isVisible
  } = useScrollReveal();
  return <section className="py-20 px-6 bg-marsala">
      <div ref={ref} className={`container max-w-7xl mx-auto scroll-reveal ${isVisible ? 'scroll-reveal-visible' : ''}`}>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-palatino font-bold text-[#E8B4B8]">
              Sobre Nós
            </h2>
            <p className="text-lg text-white leading-relaxed">Cláudia Amim é mais do que um escritório de Direito imobiliário, é formado por defensoras apaixonadas pelos direitos de seus clientes.</p>
            <p className="text-lg text-white leading-relaxed">
              Com mais de 40 anos de experiência e uma carreira consolidada no Direito Imobiliário e Direito Civil, o escritório traz um profundo conhecimento técnico e uma compreensão empática para cada caso.
            </p>
          </div>
          
          <div className="relative">
            <img src={officeImage} alt="Escritório Cláudia Amin" className="w-full h-[500px] object-cover rounded-lg" />
            <div className="absolute bottom-6 left-6 bg-[#8B5A5A]/90 backdrop-blur-sm px-8 py-6 rounded-lg">
              <p className="text-4xl font-bold text-white mb-1">40+</p>
              <p className="text-white text-sm">Anos de Experiência</p>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-12">
          <Button size="lg" className="bg-[#8B5A5A] hover:bg-[#704848] text-white px-8 py-6 text-base" asChild>
            <a href="https://wa.me/5532988234428" target="_blank" rel="noopener noreferrer">
              Quero falar com a equipe
            </a>
          </Button>
        </div>
      </div>
    </section>;
};
export default About;