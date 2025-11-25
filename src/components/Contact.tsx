import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
const Contact = () => {
  return <section className="py-20 px-6 bg-background">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-palatino font-bold text-foreground mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg text-muted-foreground">Estamos prontas para atender você</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">Telefones</h3>
                <p className="text-muted-foreground">(32) 98823-4428 ou
 (32) 99961-3224</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">E-mails</h3>
                <p className="text-muted-foreground">claudia.amin58@gmail.com ou
lorena.amin@terra.com.br</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">Endereço</h3>
                <p className="text-muted-foreground">Condomínio Edifício Lux Avenida -
Av. Barão do Rio Branco, 2595 - sala 1201 Centro
Juiz de Fora, Minas Gerais, 36010-011.<br />
                  Juiz de Fora, Minas Gerais, 36010-011.  
                </p>
              </div>
            </div>

            <Button size="lg" className="w-full md:w-auto">
              Agende uma consulta
            </Button>
          </div>

          <div className="h-[400px] rounded-lg overflow-hidden bg-muted border border-border">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3705.271234567890!2d-43.35123456789012!3d-21.76123456789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x989b5e123456789a%3A0x123456789abcdef0!2sAv.%20Bar%C3%A3o%20do%20Rio%20Branco%2C%202595%20-%20Centro%2C%20Juiz%20de%20Fora%20-%20MG%2C%2036010-011!5e0!3m2!1spt-BR!2sbr!4v1234567890123" width="100%" height="100%" style={{
            border: 0
          }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;