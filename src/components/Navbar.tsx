import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
const Navbar = () => {
  return <nav className="bg-primary text-primary-foreground py-4 px-6 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex-shrink-0">
          <h2 className="text-xl font-palatino font-bold md:text-xl">Cláudia Amim Advogados</h2>
        </div>
        
        <div className="hidden md:flex items-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <Phone size={16} className="px-0 my-0" />
            <a href="https://wa.me/5532988234428" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              (32) 98823-4428
            </a>
            <span>ou</span>
            <a href="https://wa.me/5532999613224" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              (32) 99961-3224
            </a>
          </div>
          <a href="mailto:lorena.amin@terra.com.br" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Mail size={16} />
            <span className="my-[5px]">
claudia.amin58@gmail.com
lorena.amin@terra.com.br

          </span>
          </a>
        </div>

        <Button variant="secondary" className="hidden md:inline-flex" asChild>
          <a href="#contato-final">Contato</a>
        </Button>
      </div>
    </nav>;
};
export default Navbar;