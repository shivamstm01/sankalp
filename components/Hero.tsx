"use client";
import Image from "next/image";
import { siteContent } from "@/data/siteContent";
import { motion } from "framer-motion";

export default function Hero() {
  const { title, subheading, description, buttons, image, motto, stats } = siteContent.hero;

  return (
    <section
      id="hero"
      className="relative pt-4 lg:pt-6 pb-14 lg:pb-16 overflow-hidden bg-[#f8fcfb]"
    >
      <div className="max-w-[1560px] mx-auto px-4 md:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[0.96fr_0.88fr] gap-10 lg:gap-16 items-start">
          
          <div className="space-y-8 lg:space-y-9 pt-4 lg:pt-8">
            <div className="inline-flex items-center rounded-full bg-[#d8f7ea] px-5 py-2.5 text-[#0b6b4b] text-[13px] lg:text-[14px] font-medium shadow-[0_10px_24px_rgba(16,185,129,0.08)]">
              9 Decades of Ayurvedic Excellence
            </div>

            <div className="space-y-5">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-[60px] sm:text-[60px] lg:text-[72px] font-[700] tracking-[-0.045em] leading-[0.94] text-[#0f172a]"
              >
                {title.black} <br />
                <span className="text-[#00a16a]">{title.green}</span>
              </motion.h1>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="space-y-6"
              >
                <p className="text-[#334155] text-[18px] lg:text-[19px] font-normal leading-[1.4]">
                  {subheading}
                </p>
                <p className="text-slate-600 text-[16px] lg:text-[17px] font-normal leading-[1.7] max-w-[640px]">
                  {description}
                </p>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-1"
            >
               {buttons.map((btn, idx) => (
                 <a 
                   key={idx}
                   href={btn.href}
                   className={`min-w-[190px] px-8 py-4 rounded-full font-semibold text-[15px] lg:text-[16px] transition-all hover:-translate-y-1 active:scale-95 text-center ${
                     btn.variant === 'primary' 
                     ? 'bg-[#00a16a] text-white shadow-md hover:shadow-lg hover:bg-[#008a5e]' 
                     : 'bg-white text-[#00a16a] border-2 border-[#00a16a] hover:bg-[#00a16a]/5'
                   }`}
                 >
                    {btn.label}
                 </a>
               ))}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="grid grid-cols-3 max-w-[520px] gap-8 pt-4"
            >
               {stats.map((stat, idx) => (
                 <div key={idx} className="space-y-1.5">
                    <p className="text-[30px] lg:text-[34px] font-[800] text-[#00a16a] tracking-tight">{stat.value}</p>
                    <p className="text-slate-600 text-[13px] lg:text-[14px] leading-tight">{stat.label}</p>
                 </div>
               ))}
            </motion.div>
          </div>

          <div className="relative">
             <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="relative aspect-[0.92] w-full max-w-[680px] ml-auto rounded-[1.6rem] overflow-hidden shadow-lg"
             >
                <Image 
                  src={image} 
                  alt="Ayurveda Specialist" 
                  fill 
                  priority
                  className="object-cover" 
                />
             </motion.div>

             <motion.div 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute bottom-[-22px] left-0 lg:bottom-[-26px] lg:left-[-18px] bg-white p-6 rounded-[1.4rem] shadow-lg border border-slate-100 z-20 w-[80%] max-w-[344px]"
             >
                <div className="space-y-3">
                   <p className="text-slate-600 text-[14px] font-medium">{motto.label}</p>
                   <p className="text-[16px] lg:text-[18px] font-semibold text-[#0b6b4b] leading-[1.45] italic">
                      {motto.text}
                   </p>
                </div>
             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
