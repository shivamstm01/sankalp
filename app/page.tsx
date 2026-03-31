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
    <div className="min-h-screen bg-transparent">
      <header className="fixed top-0 left-0 w-full z-1000 shadow-sm">
        <Topbar />
        <Navbar />
      </header>
      <main className="relative pt-37 max-w-7xl mx-auto px-3 md:px-2">
        <Hero />
        <About />
        <Services />
        <Treatments />
        <Physicians />
        <WhyUs />
        <Values />
      </main>
      <Footer />
      <a
        href="https://wa.me/916201463368"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open Chatbot"
        className="fixed bottom-6 right-6 z-[1200] w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_16px_40px_rgba(37,211,102,0.35)] flex items-center justify-center hover:scale-105 transition-transform animate-bounce"
      >
        <svg viewBox="0 0 32 32" width="26" height="26" fill="currentColor" aria-hidden="true">
          <path d="M19.11 17.23c-.28-.14-1.64-.8-1.9-.9-.25-.09-.43-.14-.62.14-.19.28-.71.9-.88 1.09-.16.19-.31.21-.59.07-.28-.14-1.17-.43-2.23-1.37-.82-.73-1.37-1.63-1.53-1.91-.16-.28-.02-.43.12-.57.12-.12.28-.31.42-.47.14-.16.19-.28.28-.47.09-.19.05-.35-.02-.5-.07-.14-.62-1.49-.85-2.05-.22-.53-.44-.46-.62-.46h-.52c-.19 0-.5.07-.76.35-.26.28-1 1-1 2.43 0 1.43 1.03 2.81 1.18 3 .14.19 2.03 3.1 4.91 4.34 2.88 1.24 2.88.83 3.4.78.52-.05 1.64-.66 1.88-1.3.23-.64.23-1.19.16-1.3-.07-.12-.26-.19-.54-.33zM16 3.2C8.94 3.2 3.2 8.94 3.2 16c0 2.26.6 4.46 1.74 6.39L3 29l6.8-1.78A12.7 12.7 0 0 0 16 28.8c7.06 0 12.8-5.74 12.8-12.8S23.06 3.2 16 3.2zm0 23.2c-2.12 0-4.19-.56-6.01-1.62l-.43-.25-4.03 1.05 1.08-3.93-.28-.45A10.66 10.66 0 0 1 5.34 16C5.34 10.36 10.36 5.34 16 5.34S26.66 10.36 26.66 16 21.64 26.4 16 26.4z" />
        </svg>
      </a>
    </div>
  );
}
