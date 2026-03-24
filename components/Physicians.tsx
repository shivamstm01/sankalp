import Image from "next/image";
import { siteContent } from "@/data/siteContent";

export default function Physicians() {
  const { title, subtitle, list, features } = siteContent.physicians;

  return (
    <section id="physicians" className="bg-slate-50 py-20 lg:py-28 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-4xl lg:text-6xl font-extrabold mb-4 lg:mb-6 tracking-tight">
            <span className="text-[#1a1a1a]">{title.black} </span>
            <span className="text-[#008a5e] relative inline-block">
              {title.green}
              <span className="absolute -bottom-2 lg:-bottom-4 left-0 w-full h-1.5 lg:h-2 bg-[#008a5e]/10 rounded-full"></span>
            </span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base lg:text-xl font-medium px-4">
            {subtitle}
          </p>
        </div>

        {/* Physicians List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-20 lg:mb-32">
          {list.map((doc, idx) => (
            <div key={idx} className="bg-white rounded-[3rem] lg:rounded-[4rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 flex flex-col sm:flex-row group border border-gray-100">
               {/* Doctor Image */}
               <div className="w-full sm:w-[40%] aspect-[4/5] sm:aspect-auto relative overflow-hidden">
                  <Image 
                    src={doc.image} 
                    alt={doc.name} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
               </div>
               
               {/* Doctor Info */}
               <div className="flex-1 p-8 lg:p-12 space-y-4 lg:space-y-6 flex flex-col justify-center">
                  <div className="space-y-1 lg:space-y-2">
                    <p className="text-[#008a5e] font-black text-xs lg:text-sm uppercase tracking-widest">{doc.role}</p>
                    <h3 className="text-2xl lg:text-3xl font-black text-[#1a1a1a]">{doc.name}</h3>
                    <p className="text-gray-400 text-sm lg:text-base font-bold">{doc.title}</p>
                  </div>
                  
                  <div className="bg-[#e6f4f1] px-4 py-2 lg:px-6 lg:py-3 rounded-full inline-block self-start">
                     <span className="text-[#008a5e] font-black text-xs lg:text-sm">{doc.experience}</span>
                  </div>

                  <div className="space-y-3 lg:space-y-4 pt-4 lg:pt-6 border-t border-gray-50">
                     <p className="text-gray-400 font-black text-xs uppercase tracking-widest">Expertise</p>
                     <div className="flex flex-wrap gap-2 lg:gap-3">
                        {doc.expertise.map((exp, idx) => (
                          <span key={idx} className="bg-slate-50 text-gray-600 px-3 py-1.5 lg:px-4 lg:py-2 rounded-xl text-xs lg:text-sm font-bold border border-gray-100 hover:border-[#008a5e]/30 transition-colors">
                             {exp}
                          </span>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
          ))}
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
           {features.map((feat, idx) => (
             <div key={idx} className="bg-white p-8 lg:p-12 rounded-[2.5rem] lg:rounded-[3rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-50 flex flex-col items-center text-center group">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-slate-50 rounded-2xl lg:rounded-3xl flex items-center justify-center mb-8 group-hover:bg-[#008a5e] group-hover:text-white transition-all shadow-sm">
                   {/* Icon placeholder based on feat.icon */}
                   <svg className="w-8 h-8 lg:w-10 lg:h-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                   </svg>
                </div>
                <h4 className="text-lg lg:text-2xl font-black text-[#1a1a1a] mb-4 lg:mb-6">{feat.title}</h4>
                <p className="text-gray-500 text-sm lg:text-lg font-medium leading-relaxed">
                   {feat.info}
                </p>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
