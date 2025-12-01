import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyChoose from "@/components/WhyChoose";
import WhenToHire from "@/components/WhenToHire";
import Reasons from "@/components/Reasons";
import About from "@/components/About";
import Services from "@/components/Services";
import Clients from "@/components/Clients";
import Team from "@/components/Team";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
const Index = () => {
  return <main className="min-h-screen">
      <Navbar />
      <Hero />
      <WhyChoose />
      <WhenToHire />
      <Reasons />
      <About />
      <Services />
      
      <Team />
      <FAQ />
      <Contact />
      <Footer />
    </main>;
};
export default Index;