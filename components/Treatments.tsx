import { siteContent } from "@/data/siteContent";

export default function Treatments() {
  const { title, subtitle, list } = siteContent.treatments;

  return (
    <section id="treatments" className="bg-white py-20 px-4">
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

        {/* Treatments Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {list.map((treatment, idx) => (
            <div 
              key={idx} 
              style={{ backgroundColor: treatment.color }}
              className="p-6 rounded-2xl flex items-center gap-4 hover:shadow-md transition-shadow cursor-default"
            >
              <div className="w-10 h-10 bg-white/80 rounded-full flex items-center justify-center text-[#008a5e] shrink-0 shadow-sm font-bold">
                 {/* Icon placeholder based on treatment.icon */}
                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M2 12h20"/></svg>
              </div>
              <h3 className="text-sm font-bold text-gray-800 leading-snug">
                {treatment.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Holistic Approach Badge Section */}
        <div className="mt-24 p-10 md:p-16 bg-[#e6f4f1] rounded-[3rem] text-center relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-[#008a5e] opacity-5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
           
           <div className="relative z-10 flex flex-col items-center gap-6">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-[#008a5e] shadow-lg mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-[#1a1a1a]">Holistic Approach to Healing</h3>
              <p className="text-gray-600 max-w-3xl text-lg leading-relaxed mb-6">
                Our treatments focus on addressing the root cause, not just symptoms. We combine traditional Panchakarma therapies, herbal medicines, dietary modifications, and lifestyle counseling for comprehensive healing.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                 {["Personalized Treatment Plans", "Evidence-Based Protocols", "Expert Ayurvedic Physicians", "Natural & Safe"].map((badge, i) => (
                    <div key={i} className="bg-white px-6 py-2.5 rounded-full text-[#008a5e] font-bold text-sm shadow-sm flex items-center gap-2">
                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                       {badge}
                    </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
