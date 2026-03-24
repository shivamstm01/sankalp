import { siteContent } from "@/data/siteContent";

export default function About() {
  const { title, vision, mission, banner } = siteContent.about;

  return (
    <section id="about" className="py-24 px-4 bg-white relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold flex items-center justify-center gap-2">
            <span className="text-[#1a1a1a]">{title.black}</span>
            <span className="text-[#008a5e] relative inline-block">
              {title.green}
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#008a5e] rounded-full"></span>
            </span>
          </h2>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Vision Card */}
          <div className="bg-[#f2fcf9] p-8 md:p-12 rounded-[2rem] border border-[#e6f4f1] shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
             <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-[#008a5e] rounded-full flex items-center justify-center text-white shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></svg>
                </div>
                <div>
                   <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">{vision.title}</h3>
                   {vision.paragraphs.map((p, idx) => (
                     <p key={idx} className="text-gray-600 mb-4 leading-relaxed text-sm">
                       {p}
                     </p>
                   ))}
                </div>
             </div>
             
             {/* Highlight Box */}
             <div className="bg-[#fff9e6] p-6 rounded-2xl border-l-4 border-[#f59e0b] mt-8">
                <h4 className="font-bold text-[#b45309] mb-3 text-sm">{vision.highlight.title}</h4>
                {vision.highlight.points.map((p, idx) => (
                   <p key={idx} className="text-[#92400e] text-xs leading-relaxed mb-2 last:mb-0">
                     {p}
                   </p>
                ))}
             </div>
          </div>

          {/* Mission Card */}
          <div className="bg-[#fffdf5] p-8 md:p-12 rounded-[2rem] border border-[#fffaeb] shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
             <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-[#f59e0b] rounded-full flex items-center justify-center text-white shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>
                </div>
                <div>
                   <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6">{mission.title}</h3>
                   <ul className="space-y-4">
                     {mission.points.map((point, idx) => (
                       <li key={idx} className="flex items-start gap-3 text-gray-600 text-sm leading-relaxed">
                          <span className="w-1.5 h-1.5 bg-[#f59e0b] rounded-full mt-2 shrink-0"></span>
                          {point}
                       </li>
                     ))}
                   </ul>
                </div>
             </div>
          </div>
        </div>

        {/* Quote Banner */}
        <div className="bg-[#004d35] rounded-[2rem] p-10 md:p-16 text-white text-center shadow-xl">
           <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-8">
              {banner.map((quote, idx) => (
                 <div key={idx} className="flex-1 flex flex-col items-center gap-4 group">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400 group-hover:scale-110 transition-transform"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                    <p className="text-lg md:text-xl font-medium leading-tight max-w-[280px]">
                       "{quote}"
                    </p>
                 </div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
}
