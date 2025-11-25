import Hero from "@/components/Hero";
import WhyChoose from "@/components/WhyChoose";
import Reasons from "@/components/Reasons";
import About from "@/components/About";
import Services from "@/components/Services";
import Clients from "@/components/Clients";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <WhyChoose />
      <Reasons />
      <About />
      <Services />
      <Clients />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
