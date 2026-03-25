"use client";
import { siteContent } from "@/data/siteContent";
import { motion } from "framer-motion";

const themeStyles: Record<string, string> = {
  green: "bg-[#f0fdf4] border-[#dcfce7] text-[#15803d]",
  red: "bg-[#fef2f2] border-[#fee2e2] text-[#b91c1c]",
  orange: "bg-[#fff7ed] border-[#ffedd5] text-[#c2410c]",
  pink: "bg-[#fdf2f8] border-[#fce7f3] text-[#be185d]",
  blue: "bg-[#eff6ff] border-[#dbeafe] text-[#1d4ed8]",
  cyan: "bg-[#ecfeff] border-[#cffafe] text-[#0891b2]",
  purple: "bg-[#f5f3ff] border-[#ede9fe] text-[#7e22ce]",
  lime: "bg-[#f7fee7] border-[#ecfccb] text-[#4d7c0f]",
};

const IconMap: Record<string, React.ReactNode> = {
  "heart-pulse": <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.22 12H9.5l1.5-3 2 6 1.5-3h7.22"/></svg>,
  baby: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12h.01"/><path d="M15 12h.01"/><path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"/><path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 1.1l-.8.8s-1.2-1-2.7-1a7.4 7.4 0 0 0-3.4.8c-2.4 1.5-3.1 4.7-2.1 7.2.9 2.1 3.2 3.8 5.5 4 1.3.1 2.6-.1 3.6-.3"/><path d="M12 3c2 0 3.5 1.1 3.5 1.1l-.8.8s-1.2-1-2.7-1"/></svg>,
  scale: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h18"/></svg>,
  sparkles: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3 1.91 5.82L21 10.73l-5.18 4.23L17.09 21 12 17.27 6.91 21l1.27-6.04L3 10.73l7.09-1.91L12 3Z"/></svg>,
  activity: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
  "circle-dot": <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="1"/></svg>,
  bone: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 10c.7-.7 1.69-1 2.5-1a2.5 2.5 0 1 1 0 5c-.81 0-1.8-.3-2.5-1"/><path d="M8.31 15.69a2.5 2.5 0 1 1-3.32-3.32"/><path d="M4.99 8.31a2.5 2.5 0 1 1 3.32 3.32"/><path d="M15.5 14c0 .81.3 1.8 1 2.5a2.5 2.5 0 1 1-5 0c0-.81.3-1.8 1-2.5"/><path d="M7 14c-.7.7-1.69 1-2.5 1a2.5 2.5 0 1 1 0-5c.81 0 1.8.3 2.5 1"/><path d="m16.5 9.5-7 7"/></svg>,
  brain: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.54Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.54Z"/></svg>,
  wind: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17.7 7.7A2.5 2.5 0 1 1 20 12H2"/><path d="M9.6 4.6A2 2 0 1 1 11 8H2"/><path d="M12.6 19.4A2 2 0 1 0 14 16H2"/></svg>,
  eye: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>,
  star: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  zap: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
};

export default function Treatments() {
  const { title, subtitle, list, holisticBanner } = siteContent.treatments;

  if (!holisticBanner) return null;

  return (
    <section id="treatments" className="py-16 lg:py-24 px-4 md:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl lg:text-[46px] font-black tracking-tight leading-tight">
            <span className="text-[#1a1a1a]">{title.black} </span>
            <span className="text-[#008a5e] relative inline-block">
              {title.green}
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#008a5e] rounded-full"></span>
            </span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm lg:text-base font-medium mt-6 leading-relaxed">
            {subtitle}
          </p>
        </motion.div>

        {/* Treatments Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.05 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16 lg:mb-20"
        >
          {list.map((item, idx) => {
            const style = themeStyles[item.theme || 'green'] || themeStyles.green;
            return (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`${style} border-2 p-6 lg:p-7 rounded-[1.5rem] shadow-sm flex flex-col items-start gap-4 transition-all group min-h-[136px] lg:min-h-[150px]`}
              >
                <div className="opacity-90 group-hover:rotate-12 transition-transform duration-300">
                   {IconMap[item.icon] || <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/></svg>}
                </div>
                <h3 className="text-base lg:text-lg font-black leading-tight tracking-tight">
                   {item.title}
                </h3>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Holistic Approach Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#f8fcf0] p-8 lg:p-14 rounded-[2rem] lg:rounded-[3rem] border border-[#e1f1d1] shadow-xl relative overflow-hidden"
        >
           {/* Center Icon */}
           <div className="flex justify-center mb-8">
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="bg-white w-16 h-16 lg:w-20 lg:h-20 rounded-full shadow-2xl border-[3px] border-[#008a5e] flex items-center justify-center text-[#008a5e]"
              >
                 <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/>
                 </svg>
              </motion.div>
           </div>

           <div className="text-center max-w-5xl mx-auto">
              <h2 className="text-2xl lg:text-[38px] font-black text-[#1a1a1a] mb-5 tracking-tight">
                {holisticBanner.title}
              </h2>
              <p className="text-gray-600 text-sm lg:text-[17px] font-medium leading-[1.7] mb-10">
                {holisticBanner.description}
              </p>

              {/* Benefits List */}
              <div className="flex flex-wrap justify-center gap-3 lg:gap-5">
                 {holisticBanner.points.map((point, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-2.5 bg-white px-4 lg:px-6 py-2.5 lg:py-3 rounded-full border border-[#e1f1d1] shadow-sm"
                    >
                       <span className="text-[#008a5e]">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                       </span>
                       <span className="text-[#1a1a1a] font-black text-xs lg:text-[15px] whitespace-nowrap">{point}</span>
                    </motion.div>
                 ))}
              </div>
           </div>
        </motion.div>

      </div>
    </section>
  );
}
