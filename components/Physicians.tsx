"use client";
import Image from "next/image";
import { siteContent } from "@/data/siteContent";
import { motion } from "framer-motion";

export default function Physicians() {
  const { title, subtitle, list, features } = siteContent.physicians;

  return (
    <section id="physicians" className="bg-[#f9fafb] py-20 lg:py-32 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-24"
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

        {/* Physicians List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-20 lg:mb-32">
          {list.map((doc, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-[3rem] lg:rounded-[4rem] overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] hover:shadow-2xl transition-all duration-700 flex flex-col sm:flex-row group border border-gray-100"
            >
               {/* Doctor Image */}
               <div className="w-full sm:w-[40%] aspect-[4/5] sm:aspect-auto relative overflow-hidden">
                  <Image 
                    src={doc.image} 
                    alt={doc.name} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-1000" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
               </div>
               
               {/* Doctor Info */}
               <div className="flex-1 p-8 lg:p-12 space-y-4 lg:space-y-6 flex flex-col justify-center">
                  <div className="space-y-1 lg:space-y-2">
                    <p className="text-[#008a5e] font-black text-xs lg:text-sm uppercase tracking-widest">{doc.role}</p>
                    <h3 className="text-2xl lg:text-3xl font-black text-[#1a1a1a] group-hover:text-[#008a5e] transition-colors">{doc.name}</h3>
                    <p className="text-gray-400 text-sm lg:text-base font-bold">{doc.title}</p>
                  </div>
                  
                  <div className="bg-[#e6f4f1] px-4 py-2 lg:px-6 lg:py-3 rounded-full inline-block self-start">
                     <span className="text-[#008a5e] font-black text-xs lg:text-sm">{doc.experience}</span>
                  </div>

                  <div className="space-y-3 lg:space-y-4 pt-4 lg:pt-6 border-t border-gray-50">
                     <p className="text-gray-400 font-black text-xs uppercase tracking-widest">Expertise</p>
                     <div className="flex flex-wrap gap-2 lg:gap-3">
                        {doc.expertise.map((exp, i) => (
                          <motion.span 
                            key={i} 
                            whileHover={{ scale: 1.05 }}
                            className="bg-slate-50 text-gray-600 px-3 py-1.5 lg:px-4 lg:py-2 rounded-xl text-xs lg:text-sm font-bold border border-gray-100 hover:border-[#008a5e]/20 transition-colors"
                          >
                             {exp}
                          </motion.span>
                        ))}
                     </div>
                  </div>
               </div>
            </motion.div>
          ))}
        </div>

        {/* Feature Highlights */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10"
        >
           {features.map((feat, idx) => (
             <motion.div 
               key={idx} 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               whileHover={{ y: -10 }}
               className="bg-white p-8 lg:p-12 rounded-[2.5rem] lg:rounded-[3rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-50 flex flex-col items-center text-center group"
             >
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-slate-50 rounded-2xl lg:rounded-3xl flex items-center justify-center mb-8 group-hover:bg-[#008a5e] group-hover:text-white transition-all shadow-sm">
                   <div className="scale-110">
                      {feat.icon === 'grad' && <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>}
                      {feat.icon === 'user-check' && <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="m16 11 2 2 4-4"/></svg>}
                      {feat.icon === 'history' && <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/></svg>}
                   </div>
                </div>
                <h4 className="text-lg lg:text-2xl font-black text-[#1a1a1a] mb-4 lg:mb-6 transition-colors group-hover:text-[#008a5e]">{feat.title}</h4>
                <p className="text-gray-500 text-sm lg:text-lg font-medium leading-relaxed">
                   {feat.info}
                </p>
             </motion.div>
           ))}
        </motion.div>
      </div>
    </section>
  );
}
