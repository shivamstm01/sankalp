import { siteContent } from "@/data/siteContent";

export default function Footer() {
  const { description, links, contact, hours, emergency, tagline, copyright, designedBy } = siteContent.footer;

  return (
    <footer id="footer" className="bg-[#003324] text-white pt-20 lg:pt-32 pb-10 px-4 md:px-8 overflow-hidden relative">
      {/* Decorative Blur */}
      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-[#008a5e] opacity-10 rounded-full translate-y-1/2 translate-x-1/2 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20 lg:mb-32">
          {/* Brand Column */}
          <div className="space-y-8 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-4">
              <div className="w-14 h-14 bg-[#008a5e] rounded-[1.2rem] flex items-center justify-center font-black text-2xl shadow-lg border border-white/20">S</div>
              <div>
                <h3 className="text-2xl font-black leading-none tracking-tight">SANKALPA</h3>
                <p className="text-[10px] text-[#008a5e] font-black uppercase tracking-[0.2em] mt-1.5">Ayurveda Hospital</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm lg:text-base leading-relaxed max-w-xs mx-auto sm:mx-0 font-medium italic">
              {description}
            </p>
            <div className="flex justify-center sm:justify-start gap-4">
               {/* Social Icons */}
               {[
                 <svg key="fb" className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
                 <svg key="ig" className="w-5 h-5 fill-current" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>,
                 <svg key="tw" className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>,
                 <svg key="yt" className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.46 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
               ].map((icon, i) => (
                 <a key={i} href="#" className="w-12 h-12 bg-white/5 hover:bg-[#008a5e] rounded-xl flex items-center justify-center transition-all border border-white/5 active:scale-90">
                    {icon}
                 </a>
               ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg lg:text-xl font-black mb-8 lg:mb-10 text-white flex items-center justify-center sm:justify-start gap-4">
              <span className="w-2 h-2 bg-[#008a5e] rounded-full"></span>
              Quick Links
            </h4>
            <ul className="space-y-5 text-gray-400 text-sm lg:text-base font-bold">
              {links.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="hover:text-[#008a5e] transition-colors relative group">
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#008a5e] transition-all group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us Column */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg lg:text-xl font-black mb-8 lg:mb-10 text-white flex items-center justify-center sm:justify-start gap-4">
               <span className="w-2 h-2 bg-[#008a5e] rounded-full"></span>
               Contact Us
            </h4>
            <ul className="space-y-8 text-gray-400 text-sm lg:text-base font-bold">
              <li className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-[#008a5e] shrink-0">
                   <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <span>{contact.phone}</span>
              </li>
              <li className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-[#008a5e] shrink-0">
                   <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <span className="break-all">{contact.email}</span>
              </li>
              <li className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-[#008a5e] shrink-0">
                   <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <span className="text-gray-300">{contact.address}</span>
              </li>
            </ul>
          </div>

          {/* Working Hours Column */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg lg:text-xl font-black mb-8 lg:mb-10 text-white flex items-center justify-center sm:justify-start gap-4">
               <span className="w-2 h-2 bg-[#008a5e] rounded-full"></span>
               Working Hours
            </h4>
            <div className="space-y-8">
              {hours.map((item, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-[#008a5e] shrink-0">
                     <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  </div>
                  <div>
                    <p className="font-black text-white text-base lg:text-lg mb-1">{item.days}</p>
                    <p className="text-gray-400 font-bold text-sm lg:text-base">{item.time}</p>
                  </div>
                </div>
              ))}
              <div className="pt-6 border-t border-white/5">
                <p className="text-[#008a5e] font-black text-xs lg:text-sm uppercase tracking-widest mb-2 flex items-center justify-center sm:justify-start gap-2">
                   <span className="w-2 h-2 bg-[#f43f5e] rounded-full animate-ping"></span>
                   Emergency Services
                </p>
                <p className="text-sm text-gray-400 font-bold">Available {emergency}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 text-gray-500 text-xs lg:text-sm font-bold text-center md:text-left">
           <p className="md:w-1/3 order-3 md:order-1">© {copyright}</p>
           
           <div className="flex flex-wrap justify-center gap-6 lg:gap-10 md:w-1/3 order-1 md:order-2">
             <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
             <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
           </div>

           <p className="md:w-1/3 md:text-right order-2 md:order-3">
             Designed with ❤️ by <span className="text-[#008a5e] font-black">{designedBy}</span>
           </p>
        </div>

        <div className="mt-12 lg:mt-20 text-center">
           <p className="text-[#008a5e] italic text-sm lg:text-lg font-black tracking-tight">{tagline}</p>
        </div>
      </div>
    </footer>
  );
}
