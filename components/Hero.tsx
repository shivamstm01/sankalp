"use client";
import Image from "next/image";
import { siteContent } from "@/data/siteContent";
import { motion } from "framer-motion";

export default function Hero() {
  const { title, subheading, description, buttons, image, motto, stats } = siteContent.hero;

  return (
    <section id="hero" className="relative pt-32 lg:pt-48 pb-20 lg:pb-32 overflow-hidden bg-white">
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Content Left (Figma Precise) */}
          <div className="lg:col-span-7 space-y-10 lg:space-y-14">
            
            <div className="space-y-8">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-6xl lg:text-[96px] font-[900] tracking-tighter leading-[0.95] text-[#1a1a1a]"
              >
                {title.black} <br />
                <span className="text-[#008a5e]">{title.green}</span>
              </motion.h1>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="space-y-6"
              >
                <p className="text-[#6b7280] text-xl lg:text-[24px] font-medium">
                  {subheading}
                </p>
                <p className="text-gray-500 text-lg lg:text-[20px] font-medium leading-relaxed max-w-2xl">
                  {description}
                </p>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-5 lg:gap-6"
            >
               {buttons.map((btn, idx) => (
                 <a 
                   key={idx}
                   href={btn.href}
                   className={`px-10 lg:px-14 py-4 lg:py-5 rounded-full font-black text-lg lg:text-[20px] transition-all hover:-translate-y-1 active:scale-95 text-center ${
                     btn.variant === 'primary' 
                     ? 'bg-[#008a5e] text-white shadow-xl shadow-[#008a5e]/20 hover:bg-[#007a52]' 
                     : 'bg-white text-[#008a5e] border-2 border-[#008a5e] hover:bg-[#008a5e]/5'
                   }`}
                 >
                    {btn.label}
                 </a>
               ))}
            </motion.div>

            {/* Stats row integrated into Hero (Figma Style) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap gap-12 lg:gap-24 pt-8"
            >
               {stats.map((stat, idx) => (
                 <div key={idx} className="space-y-1">
                    <p className="text-4xl lg:text-[54px] font-[900] text-[#1a1a1a] tracking-tight">{stat.value}</p>
                    <p className="text-gray-400 text-sm lg:text-[16px] font-bold uppercase tracking-wider">{stat.label}</p>
                 </div>
               ))}
            </motion.div>
          </div>

          {/* Image Right & Motto Card (Figma Mastery) */}
          <div className="lg:col-span-5 relative">
             <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="relative aspect-[4/5] lg:aspect-[0.85] w-full rounded-[3rem] lg:rounded-[4rem] overflow-hidden shadow-2xl"
             >
                <Image 
                  src={image} 
                  alt="Ayurveda Specialist" 
                  fill 
                  priority
                  className="object-cover" 
                />
             </motion.div>

             {/* Motto Card - Figma Exact Position overlaying the image bottom */}
             <motion.div 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute bottom-[-40px] left-[-20px] lg:bottom-[-60px] lg:left-[-80px] bg-white p-8 lg:p-12 rounded-[2.5rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.15)] border border-gray-50 z-20 max-w-[420px]"
             >
                <div className="space-y-4">
                   <p className="text-gray-400 font-bold uppercase text-xs lg:text-sm tracking-widest">{motto.label}</p>
                   <p className="text-xl lg:text-[28px] font-black text-[#008a5e] leading-tight tracking-tight italic">
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
