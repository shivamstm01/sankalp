"use client";
import Image from "next/image";
import { siteContent } from "@/data/siteContent";
import { motion } from "framer-motion";

export default function Physicians() {
  const { title, subtitle, list, features } = siteContent.physicians;

  return (
    <section id="physicians" className="bg-[#f9fafb] py-16 lg:py-24 px-4 md:px-8 overflow-hidden">
      <div className="max-w-[1560px] mx-auto">
        
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

        {/* Physicians List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-16 lg:mb-20">
          {list.map((doc, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden shadow-[0_22px_60px_rgba(15,23,42,0.06)] hover:shadow-2xl transition-all duration-700 flex flex-col sm:flex-row group border border-gray-100"
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
               <div className="flex-1 p-6 lg:p-8 space-y-4 lg:space-y-5 flex flex-col justify-center">
                  <div className="space-y-1">
                    <p className="text-[#008a5e] font-black text-xs lg:text-sm uppercase tracking-widest">{doc.role}</p>
                    <h3 className="text-xl lg:text-2xl font-black text-[#1a1a1a] group-hover:text-[#008a5e] transition-colors">{doc.name}</h3>
                    <p className="text-gray-400 text-sm font-bold">{doc.title}</p>
                  </div>
                  
                  <div className="bg-[#e6f4f1] px-3 py-1.5 lg:px-5 lg:py-2 rounded-full inline-block self-start">
                     <span className="text-[#008a5e] font-black text-xs">{doc.experience}</span>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-gray-50">
                     <p className="text-gray-400 font-black text-xs uppercase tracking-widest">Expertise</p>
                     <div className="flex flex-wrap gap-2">
                        {doc.expertise.map((exp, i) => (
                          <motion.span 
                            key={i} 
                            whileHover={{ scale: 1.05 }}
                            className="bg-slate-50 text-gray-600 px-3 py-1.5 rounded-lg text-xs font-bold border border-gray-100 hover:border-[#008a5e]/20 transition-colors"
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
          className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6"
        >
           {features.map((feat, idx) => (
             <motion.div 
               key={idx} 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               whileHover={{ y: -10 }}
               className="bg-white p-6 lg:p-8 rounded-[1.75rem] lg:rounded-[2rem] shadow-[0_18px_50px_rgba(15,23,42,0.05)] hover:shadow-xl transition-all duration-500 border border-gray-50 flex flex-col items-center text-center group"
             >
                <div className="w-14 h-14 lg:w-16 lg:h-16 bg-slate-50 rounded-xl lg:rounded-2xl flex items-center justify-center mb-5 group-hover:bg-[#008a5e] group-hover:text-white transition-all shadow-sm">
                   <div className="scale-110">
                      {feat.icon === 'grad' && <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>}
                      {feat.icon === 'user-check' && <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="m16 11 2 2 4-4"/></svg>}
                      {feat.icon === 'history' && <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/></svg>}
                   </div>
                </div>
                <h4 className="text-base lg:text-xl font-black text-[#1a1a1a] mb-3 lg:mb-4 transition-colors group-hover:text-[#008a5e]">{feat.title}</h4>
                <p className="text-gray-500 text-sm lg:text-base font-medium leading-relaxed">
                   {feat.info}
                </p>
             </motion.div>
           ))}
        </motion.div>
      </div>
    </section>
  );
}
