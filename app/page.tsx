import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Treatments from "@/components/Treatments";
import Physicians from "@/components/Physicians";
import WhyUs from "@/components/WhyUs";
import Values from "@/components/Values";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Topbar />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Treatments />
        <Physicians />
        <WhyUs />
        <Values />
      </main>
      <Footer />
    </div>
  );
}
