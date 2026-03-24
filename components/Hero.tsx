import Image from "next/image";
import { siteContent } from "@/data/siteContent";

export default function Hero() {
  const { badge, title, subheading, description, buttons, motto } = siteContent.hero;

  return (
    <section id="hero" className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-32 lg:pt-40 pb-20 bg-white overflow-hidden px-4 md:px-8">
      {/* Container with specific Grid ratio for better stability */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] items-center gap-12 lg:gap-20">
        
        {/* Left Side Content */}
        <div className="z-10 flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Tagline Badge */}
          <div className="bg-[#e6f4f1] px-5 py-2 rounded-full mb-8 inline-block">
            <span className="text-[#008a5e] font-bold text-xs lg:text-sm tracking-tight">{badge}</span>
          </div>

          {/* Heading with Fluid Sizing */}
          <div className="mb-8">
            <h1 className="text-[#1a1a1a] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.15] tracking-tight">
              {title.black}, <br />
              <span className="text-[#008a5e] text-5xl sm:text-6xl lg:text-7xl xl:text-[90px] font-black block mt-2">
                {title.green}
              </span>
            </h1>
          </div>

          {/* Subheading & Description */}
          <div className="space-y-6 mb-10">
            <p className="text-[#008a5e] text-lg lg:text-2xl font-bold">
              {subheading}
            </p>
            <p className="text-gray-500 text-base lg:text-lg font-medium leading-relaxed max-w-xl">
              {description}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-14">
            <a 
              href={buttons[0].href}
              className="w-full sm:w-auto px-10 py-4 rounded-full font-bold text-base bg-[#008a5e] text-white hover:bg-[#007a52] transition-all shadow-xl shadow-[#008a5e]/20 active:scale-95"
            >
              {buttons[0].label}
            </a>
            <a 
              href={buttons[1].href}
              className="w-full sm:w-auto px-10 py-4 rounded-full font-bold text-base border-2 border-[#008a5e] text-[#008a5e] hover:bg-[#e6f4f1] transition-all active:scale-95"
            >
              {buttons[1].label}
            </a>
          </div>

          {/* Stats Section */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-12 lg:gap-16 border-t border-gray-100 pt-10 w-full lg:w-auto">
            {siteContent.stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center lg:items-start">
                <span className="text-4xl lg:text-5xl font-black text-[#1a1a1a]">{stat.value}</span>
                <span className="text-[10px] lg:text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mt-1">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side Image & Motto */}
        <div className="relative w-full max-w-lg lg:max-w-none mx-auto lg:mx-0">
          {/* Precision rounded image frame */}
          <div className="relative aspect-[1.1/1] w-full rounded-[3.5rem] lg:rounded-[5rem] overflow-hidden shadow-2xl border-[10px] lg:border-[16px] border-[#f8fcfb]">
            <Image 
              src={siteContent.hero.image} 
              alt="Ayurveda Specialist" 
              fill 
              className="object-cover" 
              priority
            />
            {/* Subtle Gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
          </div>

          {/* Floating Motto Card - Exact repositioning */}
          <div className="absolute bottom-[-20px] lg:bottom-[-40px] left-1/2 -translate-x-1/2 lg:left-[-40px] lg:translate-x-0 w-[92%] lg:w-[380px] bg-white p-8 lg:p-10 rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] border border-gray-100 z-20">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-[2px] bg-[#008a5e]"></div>
                <p className="text-[#008a5e] font-black text-[10px] uppercase tracking-[0.25em]">{motto.label}</p>
              </div>
              <p className="text-[#1a1a1a] text-xl lg:text-2xl font-bold leading-tight italic">
                {motto.text}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
