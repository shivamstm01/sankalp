"use client";
import Image from "next/image";
import { siteContent } from "@/data/siteContent";
import { motion } from "framer-motion";

export default function Services() {
  const { title, subtitle, list } = siteContent.services;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="services" className="bg-[#f8fcfb] py-20 lg:py-32 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-4xl lg:text-[60px] font-black tracking-tight leading-tight">
            <span className="text-[#1a1a1a]">{title.black} </span>
            <span className="text-[#008a5e] relative inline-block">
              {title.green}
              <span className="absolute -bottom-3 left-0 w-full h-1.5 bg-[#008a5e] rounded-full"></span>
            </span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base lg:text-[18px] font-medium mt-10 leading-relaxed">
            {subtitle}
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 lg:mb-28"
        >
          {list.map((service, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-[2rem] overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)] transition-all duration-500 border border-gray-100 flex flex-col h-full group"
            >
              {/* Card Image */}
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                 <Image 
                   src={service.image} 
                   alt={service.title} 
                   fill 
                   className="object-cover group-hover:scale-110 transition-transform duration-1000"
                 />
                 <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
              </div>

              {/* Card Content Area */}
              <div className="p-8 pt-12 relative flex-1 flex flex-col">
                 {/* Floating Icon */}
                 <motion.div 
                    whileHover={{ rotate: 15 }}
                    className="absolute -top-8 left-8 w-[60px] h-[60px] bg-white rounded-full border-[2.5px] border-[#008a5e] flex items-center justify-center text-[#008a5e] shadow-xl group-hover:bg-[#008a5e] group-hover:text-white transition-all duration-300"
                 >
                    <div className="scale-110">
                       {service.icon === 'clipboard' && <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>}
                       {service.icon === 'info' && <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>}
                       {service.icon === 'stethoscope' && <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M4.8 2.3A.3.3 0 1 0 5 2.8l-.2-.5z"/><path d="M3 21h18M3 7v1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7"/><path d="M12 14v7"/></svg>}
                       {service.icon === 'heart' && <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>}
                       {service.icon === 'flask' && <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M10 2v7.5M14 2v7.5M8.5 2h7M7 22h10M9 12l-5 10M15 12l5 10"/></svg>}
                       {service.icon === 'capsule' && <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/></svg>}
                       {service.icon === 'water' && <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5s-3 3.5-3 5.5a7 7 0 0 0 7 7Z"/></svg>}
                       {service.icon === 'bed' && <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M2 4v16M2 8h18a2 2 0 0 1 2 2v10M2 17h20M6 8v0"/></svg>}
                    </div>
                 </motion.div>

                 <h3 className="text-xl lg:text-[22px] font-black text-[#1a1a1a] mb-4 leading-tight group-hover:text-[#008a5e] transition-colors">
                    {service.title}
                 </h3>
                 <p className="text-gray-500 text-sm lg:text-[15px] font-medium mb-6 leading-relaxed">
                   {service.info}
                 </p>

                 {service.items && (
                   <div className="mt-auto space-y-3.5 pt-6 border-t border-gray-100/50">
                      {service.items.map((item, i) => (
                        <div key={i} className="flex items-start gap-4">
                           <span className="text-[#008a5e] mt-1 shrink-0">
                              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                           </span>
                           <span className="text-xs lg:text-[14px] font-bold text-gray-400/80 leading-relaxed uppercase tracking-wider">{item}</span>
                        </div>
                      ))}
                   </div>
                 )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Sannati Wellness Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#008a5e] p-10 lg:p-16 rounded-[2.5rem] lg:rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden text-center mx-auto w-full lg:max-w-6xl"
        >
           <div className="relative z-10 flex flex-col items-center gap-6">
              <motion.div 
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="mb-2"
              >
                 <svg width="64" height="64" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 4L18.5 13.5L28 16L18.5 18.5L16 28L13.5 18.5L4 16L13.5 13.5L16 4Z" fill="#facc15" />
                    <circle cx="24" cy="8" r="1.5" fill="#facc15" />
                    <circle cx="8" cy="24" r="1" fill="#facc15" />
                    <circle cx="28" cy="22" r="1.2" fill="#facc15" />
                 </svg>
              </motion.div>
              
              <div className="space-y-6">
                 <h4 className="text-3xl lg:text-[44px] font-black tracking-tight leading-tight">
                    Sannati Fertility and Wellness Centre
                 </h4>
                 <div className="space-y-4">
                    <p className="text-[#e6f4f1] text-lg lg:text-[22px] font-bold italic opacity-95">
                      Making every couple's dream come true with healthy progeny – 'SUPRAJA'
                    </p>
                    <p className="text-white/80 text-base lg:text-[18px] font-medium max-w-2xl mx-auto leading-relaxed">
                      Leading with innovation, integrity and empathy in reproductive health
                    </p>
                 </div>
              </div>
           </div>
        </motion.div>

      </div>
    </section>
  );
}
