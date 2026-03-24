import Image from "next/image";
import { siteContent } from "@/data/siteContent";

export default function Physicians() {
  const { title, subtitle, list, features } = siteContent.physicians;

  return (
    <section id="physicians" className="bg-slate-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-[#1a1a1a]">{title.black} </span>
            <span className="text-[#008a5e] relative inline-block">
              {title.green}
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#008a5e] rounded-full"></span>
            </span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium">
            {subtitle}
          </p>
        </div>

        {/* Physicians Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 max-w-6xl mx-auto">
          {list.map((doc, idx) => (
            <div key={idx} className="bg-white rounded-[2.5rem] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col group">
               <div className="relative h-[450px] w-full overflow-hidden">
                  <Image 
                    src={idx === 0 ? "/images/doctor.png" : "/images/doctor-male.png"} 
                    alt={doc.name} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
               </div>
               <div className="p-10">
                  <h3 className="text-2xl font-bold text-[#1a1a1a] mb-1">{doc.name}</h3>
                  <p className="text-[#008a5e] font-bold text-sm mb-1 uppercase tracking-wider">{doc.title || (doc as any).title2}</p>
                  <p className="text-gray-500 text-sm mb-6 font-medium">{doc.role}</p>
                  
                  <div className="flex items-center gap-2 mb-8 bg-[#fff9e6] w-fit px-4 py-1.5 rounded-full border border-[#fef3c7]">
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
                     <span className="text-[#b45309] font-bold text-xs">{doc.experience}</span>
                  </div>

                  <div className="space-y-4">
                     <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Areas of Expertise:</p>
                     <div className="flex flex-wrap gap-2">
                        {doc.expertise.map((exp, i) => (
                           <span key={i} className="bg-[#e6f4f1] text-[#008a5e] px-4 py-1.5 rounded-full text-xs font-bold">
                              {exp}
                           </span>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
          ))}
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {features.map((feature, idx) => (
             <div 
               key={idx} 
               style={{ backgroundColor: feature.color }}
               className="p-10 rounded-[2rem] text-white flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300 shadow-xl"
             >
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-md">
                   {/* Custom Icons for features */}
                   {idx === 0 && <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>}
                   {idx === 1 && <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>}
                   {idx === 2 && <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v10"/><path d="M18.4 6.6c.8.8 1.4 1.7 1.8 2.8.4 1.1.6 2.2.6 3.4 0 2.2-.9 4.3-2.4 5.8s-3.6 2.4-5.8 2.4c-2.2 0-4.3-.9-5.8-2.4S4.4 15 4.4 12.8c0-1.1.2-2.3.6-3.4.4-1.1 1-2.1 1.8-2.8l2-2"/><path d="m14 2 2 4-4 2"/></svg>}
                </div>
                <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                <p className="opacity-90 text-sm leading-relaxed">{feature.info}</p>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
