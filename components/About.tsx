"use client";
import { siteContent } from "@/data/siteContent";
import { motion } from "framer-motion";

export default function About() {
  const { title, vision, mission, banner } = siteContent.about;

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <section id="about" className="py-24 lg:py-32 px-4 md:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-24 lg:space-y-36">
        
        {/* Section Heading */}
        <motion.div 
          {...fadeInUp}
          className="text-center"
        >
          <h2 className="text-4xl lg:text-[60px] font-[900] tracking-tighter leading-tight text-[#1a1a1a]">
            {title.black} <span className="text-[#008a5e]">{title.green}</span>
          </h2>
          <div className="w-24 h-1.5 bg-[#008a5e] rounded-full mx-auto mt-6"></div>
        </motion.div>

        {/* Vision & Sannati Highlight (Dual Card Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          {/* Vision Card */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#f0f9f6] p-10 lg:p-16 rounded-[4rem] space-y-8 shadow-sm border border-[#008a5e]/5"
          >
            <div className="space-y-6">
              <h3 className="text-3xl lg:text-4xl font-black text-[#008a5e]">{vision.title}</h3>
              <div className="space-y-4">
                {vision.paragraphs.map((p, i) => (
                  <p key={i} className="text-gray-600 text-lg lg:text-xl font-medium leading-relaxed opacity-90">
                    {p}
                  </p>
                ))}
              </div>
            </div>
            
            {/* Sannati Wellness Sub-card (Figma Mastery) */}
            <motion.div 
              initial={{ opacity: 0, rotate: -2 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 lg:p-10 rounded-[2.5rem] shadow-xl border border-[#008a5e]/10 space-y-6"
            >
              <h4 className="text-xl lg:text-2xl font-[900] text-[#1a1a1a] leading-tight">
                {vision.highlight.title}
              </h4>
              <ul className="space-y-4">
                {vision.highlight.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="w-3 h-3 bg-[#facc15] rounded-full mt-2.5 shrink-0"></span>
                    <span className="text-gray-500 font-bold text-base lg:text-lg">{pt}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Mission Card - Figma Typography Focus */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-10 lg:p-16 flex flex-col justify-center space-y-10"
          >
            <h3 className="text-3xl lg:text-[44px] font-black text-[#1a1a1a] leading-tight border-l-[6px] border-[#008a5e] pl-8">
              {mission.title}
            </h3>
            <ul className="space-y-6 lg:space-y-8">
              {mission.points.map((pt, i) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-6 group"
                >
                  <span className="w-10 h-10 bg-[#008a5e]/10 text-[#008a5e] rounded-xl flex items-center justify-center font-black shrink-0 group-hover:bg-[#008a5e] group-hover:text-white transition-colors duration-300">
                    {i + 1}
                  </span>
                  <span className="text-gray-500 text-lg lg:text-[21px] font-medium leading-tight">
                    {pt}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Figma Dark Green Brand Banner (Animated) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="bg-[#004d3d] p-12 lg:p-24 rounded-[4rem] text-center space-y-12 relative overflow-hidden group shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)]"
        >
          {/* Heart Accent (Figma Style) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] select-none pointer-events-none group-hover:scale-110 transition-transform duration-1000">
            <svg width="400" height="400" fill="#facc15" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
          </div>

          <div className="relative z-10 space-y-10">
            <div className="flex justify-center mb-8">
               <svg className="text-[#facc15] w-20 h-20 animate-pulse" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
               </svg>
            </div>
            <div className="space-y-6 max-w-5xl mx-auto">
               {banner.map((line, idx) => (
                 <motion.p 
                   key={idx} 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: idx * 0.2 }}
                   className={`text-2xl lg:text-[40px] font-black leading-tight tracking-tight ${idx === 1 ? 'text-[#facc15]' : idx === 2 ? 'opacity-80' : 'text-white'}`}
                 >
                   {line}
                 </motion.p>
               ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
