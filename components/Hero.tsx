import Image from "next/image";
import { siteContent } from "@/data/siteContent";

export default function Hero() {
  const { badge, title, subheading, description, buttons, motto } = siteContent.hero;

  return (
    <section id="hero" className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center pt-32 lg:pt-24 pb-12 overflow-hidden bg-gradient-to-br from-[#e6f4f1] via-white to-white px-4 md:px-8">
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-64 h-64 lg:w-[32rem] lg:h-[32rem] bg-[#008a5e] opacity-5 rounded-full blur-[80px] lg:blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 lg:w-[24rem] lg:h-[24rem] bg-[#008a5e] opacity-5 rounded-full blur-[60px] lg:blur-[100px] translate-y-1/2 -translate-x-1/4"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        {/* Content */}
              height={700}
              className="w-full h-auto object-cover"
              priority
            />
          </div>

          {/* Motto Card */}
          <div className="absolute -bottom-6 -left-6 md:left-0 bg-white p-6 rounded-2xl shadow-2xl max-w-[280px] z-20 border-l-4 border-[#008a5e]">
            <p className="text-[10px] uppercase tracking-widest text-[#008a5e] font-bold mb-2">{motto.label}</p>
            <p className="text-[#008a5e] font-bold italic leading-tight text-lg">
              {motto.text}
            </p>
          </div>

          {/* Background shapes */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#e6f4f1] rounded-full -z-0 opacity-50 blur-3xl"></div>
        </div>
      </div>
    </section>
  );
}
