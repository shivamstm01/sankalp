import { siteContent } from "@/data/siteContent";

export default function About() {
  const { title, vision, mission, banner } = siteContent.about;

  return (
    <section id="about" className="py-20 lg:py-32 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-4xl lg:text-6xl font-black tracking-tight">
            <span className="text-[#1a1a1a]">About </span>
            <span className="text-[#008a5e] relative inline-block">
              Sankalpa
              <span className="absolute -bottom-3 left-0 w-full h-1.5 bg-[#008a5e] rounded-full"></span>
            </span>
          </h2>
        </div>

        {/* Vision & Mission Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 lg:mb-24">
          
          {/* Our Vision Card */}
          <div className="bg-[#f0f9f6] p-8 lg:p-14 rounded-[3rem] border border-[#008a5e]/5 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full border-2 border-[#008a5e] flex items-center justify-center text-[#008a5e] bg-white">
                 <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></svg>
              </div>
              <h3 className="text-2xl lg:text-3xl font-black text-[#1a1a1a]">Our Vision</h3>
            </div>
            
            <div className="space-y-6 text-gray-600 font-medium leading-relaxed text-base lg:text-lg flex-1">
               <p>{vision.paragraphs[0]}</p>
               <p>{vision.paragraphs[1]}</p>
            </div>

            {/* Sannati Highlight Box */}
            <div className="mt-10 bg-[#fff9f0] p-6 lg:p-8 rounded-2xl border-l-[6px] border-[#f59e0b] shadow-sm">
               <h4 className="text-[#92400e] font-black text-lg lg:text-xl mb-3">{vision.highlight.title}</h4>
               <div className="space-y-2 text-[#b45309] font-bold text-sm lg:text-base leading-snug">
                  {vision.highlight.points.map((pt, i) => (
                    <p key={i}>{pt}</p>
                  ))}
               </div>
            </div>
          </div>

          {/* Our Mission Card */}
          <div className="bg-[#fff8f2] p-8 lg:p-14 rounded-[3rem] border border-[#f59e0b]/10 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full border-2 border-[#f59e0b] flex items-center justify-center text-[#f59e0b] bg-white">
                 <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>
              </div>
              <h3 className="text-2xl lg:text-3xl font-black text-[#1a1a1a]">Our Mission</h3>
            </div>
            
            <ul className="space-y-6">
              {mission.points.map((point, i) => (
                <li key={i} className="flex items-start gap-4 group">
                   <span className="w-2 h-2 rounded-full bg-[#008a5e] shrink-0 mt-2.5 group-hover:scale-125 transition-transform"></span>
                   <p className="text-gray-600 font-medium leading-relaxed text-base lg:text-lg">
                     {point}
                   </p>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Figma Style Dark Banner */}
        <div className="py-16 lg:py-24 bg-[#004d3d] rounded-[3rem] lg:rounded-[4rem] relative overflow-hidden shadow-2xl">
           <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 items-start text-center px-8">
              {banner.map((text, i) => (
                <div key={i} className="space-y-6 group">
                   <div className="flex justify-center">
                      <svg className="w-10 h-10 text-[#facc15] transition-transform group-hover:scale-125 duration-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                         <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                      </svg>
                   </div>
                   <p className="text-white text-lg lg:text-xl font-bold leading-relaxed italic opacity-90">
                      "{text}"
                   </p>
                </div>
              ))}
           </div>
        </div>

      </div>
    </section>
  );
}
