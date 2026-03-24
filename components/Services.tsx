import Image from "next/image";
import { siteContent } from "@/data/siteContent";

const getServiceIcon = (title: string) => {
  if (title.includes("Reception")) return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
  if (title.includes("Information")) return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>;
  if (title.includes("Consultation")) return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>;
  if (title.includes("Supraja")) return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>;
  if (title.includes("Laboratory")) return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3v12"/><path d="M18 3v12"/><path d="M3 15h18"/><path d="M3 3h18"/><path d="M12 15v6"/><path d="M8 21h8"/></svg>;
  if (title.includes("Pharmacy")) return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.5 22a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z"/><path d="M15 7h3l3 3v10a2 2 0 0 1-2 2h-4"/><path d="M15 7v15"/><path d="M10.5 11v6"/><path d="M7.5 14h6"/></svg>;
  if (title.includes("Panchakarma")) return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/></svg>;
  if (title.includes("Retiring")) return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/></svg>;
  return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10M12 2a15.3 15.3 0 0 0-4 10 15.3 15.3 0 0 0 4 10"/></svg>;
};

export default function Services() {
  const { title, subtitle, list, banner } = siteContent.services;

  return (
    <section id="services" className="bg-slate-50 py-20 px-4">
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

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {list.map((service, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,138,94,0.1)] transition-all group flex flex-col h-full border border-gray-100/50"
            >
              {/* Image Container */}
              <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-0"></div>
                {/* Fallback pattern */}
                <div className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700" style={{backgroundImage: `url(${service.image})`}}></div>
                
                {/* Floating Icon */}
                <div className="absolute -bottom-7 left-8 w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center text-[#008a5e] z-10 border border-[#e6f4f1]">
                   {getServiceIcon(service.title)}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 pb-10 pt-12 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4 group-hover:text-[#008a5e] transition-colors leading-tight">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-base leading-relaxed mb-6 flex-1">
                  {service.info}
                </p>

                {service.items && (
                  <ul className="mb-8 space-y-3 bg-[#f8fafc] p-5 rounded-2xl border border-gray-50">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-600 font-medium">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#008a5e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0"><path d="M20 6 9 17l-5-5"/></svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                <button className="flex items-center gap-2 text-[#008a5e] font-bold text-base group/btn mt-auto hover:gap-3 transition-all">
                   Explore More
                   <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/btn:translate-x-1 transition-transform"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Sannati Banner */}
        <div className="bg-[#008a5e] rounded-[2.5rem] p-10 md:p-16 text-white text-center shadow-2xl relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#e6f4f1] opacity-10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
           
           <div className="relative z-10 flex flex-col items-center gap-6">
              <div className="text-yellow-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold">{banner.title}</h3>
              <p className="text-xl md:text-2xl font-medium text-[#e6f4f1]">{banner.tagline}</p>
              <p className="text-[#e6f4f1] opacity-90 max-w-2xl">{banner.description}</p>
           </div>
        </div>
      </div>
    </section>
  );
}
