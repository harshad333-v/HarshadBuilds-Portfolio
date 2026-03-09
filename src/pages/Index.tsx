import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";

import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-background min-h-screen">
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
