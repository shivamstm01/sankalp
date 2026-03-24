import { siteContent } from "@/data/siteContent";

export default function Values() {
  const { title, subtitle, list, commitment } = siteContent.values;

  return (
    <section id="values" className="bg-slate-50 py-20 px-4">
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
          <p className="text-gray-500 max-w-xl mx-auto text-lg font-medium">
            {subtitle}
          </p>
        </div>

        {/* Values Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {list.map((value, idx) => (
            <div 
              key={idx} 
              style={{ backgroundColor: value.color }}
              className="p-10 rounded-[2.5rem] text-white shadow-xl hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-md">
                 <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-4 leading-tight">{value.title}</h3>
              <p className="text-sm opacity-90 leading-relaxed font-medium">
                {value.info}
              </p>
            </div>
          ))}
        </div>

        {/* Core Commitment */}
        <div className="bg-white p-12 md:p-16 rounded-[3rem] text-center border border-[#e6f4f1] shadow-[0_10px_50px_rgba(0,138,94,0.05)]">
           <h3 className="text-3xl font-bold text-[#1a1a1a] mb-6">{commitment.title}</h3>
           <p className="text-[#008a5e] font-bold text-lg md:text-xl mb-4 max-w-3xl mx-auto">
             {commitment.highlight}
           </p>
           <p className="text-gray-500 max-w-4xl mx-auto text-lg leading-relaxed">
             {commitment.text}
           </p>
        </div>
      </div>
    </section>
  );
}
