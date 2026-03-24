import { siteContent } from "@/data/siteContent";

export default function WhyUs() {
  const { title, subtitle, list, banner } = siteContent.whyUs;

  return (
    <section id="whyus" className="bg-white py-20 px-4">
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
          <p className="text-gray-500 max-w-3xl mx-auto text-lg font-medium leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {list.map((feature, idx) => (
            <div 
              key={idx} 
              className="bg-white p-10 rounded-[2.5rem] shadow-[0_4px_25px_rgba(0,0,0,0.02)] border border-gray-100/50 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all group"
            >
              <div 
                style={{ backgroundColor: feature.color }}
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg"
              >
                 {/* Icon mapping */}
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
              </div>
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-4 group-hover:text-[#008a5e] transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {feature.info}
              </p>
            </div>
          ))}
        </div>

        {/* Banner */}
        <div className="bg-[#008a5e] rounded-[3rem] p-12 md:p-20 text-white text-center shadow-2xl relative overflow-hidden">
           {/* Decorative elements */}
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent)] flex-1"></div>
           
           <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-bold mb-6">{banner.title}</h3>
              <p className="text-xl md:text-2xl font-medium text-[#e6f4f1] mb-12 opacity-90">{banner.tagline}</p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                 <button className="bg-white text-[#008a5e] px-10 py-4 rounded-full font-bold text-lg hover:bg-[#e6f4f1] transition-all shadow-lg">
                    {banner.buttons[0].label}
                 </button>
                 <button className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
                    {banner.buttons[1].label}
                 </button>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
