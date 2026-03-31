"use client";
import { siteContent } from "@/data/siteContent";
import { motion } from "framer-motion";

const IconMap: Record<string, React.ReactNode> = {
  history: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/></svg>,
  shield: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1z"/></svg>,
  flask: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h12"/><path d="M8 3v10.5a7 7 0 1 0 8 0V3"/><path d="M6 14h12"/></svg>,
  heart: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>,
  leaf: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>,
  users: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  building: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M8 10h.01"/><path d="M16 10h.01"/><path d="M8 14h.01"/><path d="M16 14h.01"/></svg>,
  "graduation-cap": <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>,
  globe: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
};

export default function WhyUs() {
  const { title, subtitle, list, banner } = siteContent.whyUs;

  return (
    <section id="whyus" className="bg-[#f8fcfb] py-16 lg:py-24 px-4 md:px-8 overflow-hidden">
      <div className="max-w-[1560px] mx-auto">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl lg:text-[46px] font-[700] tracking-tight leading-tight">
            <span className="text-[#1a1a1a]">{title.black} </span>
            <span className="text-[#008a5e] relative inline-block">
              {title.green}
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#008a5e] rounded-full"></span>
            </span>
          </h2>
          <p className="text-gray-500 max-w-3xl mx-auto text-sm lg:text-base font-medium mt-6 leading-relaxed">
            {subtitle}
          </p>
        </motion.div>

        {/* WhyUs Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 lg:mb-20"
        >
          {list.map((item, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white p-6 lg:p-8 rounded-[1.5rem] shadow-[0_20px_50px_rgba(15,23,42,0.05)] border border-gray-100 flex flex-col gap-4 group transition-all duration-500"
            >
               <motion.div 
                 whileHover={{ rotate: 10, scale: 1.1 }}
                 className="w-14 h-14 rounded-full flex items-center justify-center text-white shadow-xl" 
                 style={{ backgroundColor: item.color }}
               >
                  {IconMap[item.icon] || <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>}
               </motion.div>
               <div className="space-y-3">
                  <h3 className="text-lg lg:text-xl font-[700] text-[#1a1a1a] transition-colors group-hover:text-[#008a5e]">{item.title}</h3>
                  <p className="text-gray-500 text-sm font-medium leading-relaxed">
                    {item.info}
                  </p>
               </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Transformation Banner (Animated) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[linear-gradient(135deg,#05533f_0%,#059669_60%,#0f766e_100%)] p-8 lg:p-14 rounded-[2rem] text-white shadow-[0_15px_40px_rgba(0,0,0,0.12)] relative overflow-hidden text-center group"
        >
           <div className="relative z-10 space-y-8">
              <div className="space-y-3">
                 <motion.h4 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.2 }}
                   className="text-[45px] font-medium tracking-tighter leading-tight"
                 >
                    {banner.title}
                 </motion.h4>
                 <motion.p 
                   initial={{ opacity: 0, y: 15 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.4 }}
                   className="text-white/90 text-base lg:text-[18px] font-medium"
                 >
                    {banner.tagline}
                 </motion.p>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                 {banner.buttons.map((btn, idx) => (
                    <motion.a 
                      key={idx}
                      href={btn.href}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white text-[#008a5e] px-8 lg:px-10 py-3.5 lg:py-4 rounded-full font-semibold text-[length:var(--text-lg)] leading-[var(--text-lg--line-height)] shadow-xl hover:bg-gray-50 transition-all"
                    >
                       {btn.label}
                    </motion.a>
                 ))}
              </motion.div>
           </div>
        </motion.div>

      </div>
    </section>
  );
}
