import { siteContent } from "@/data/siteContent";

export default function Footer() {
  const { description, links, contact, hours, emergency, tagline, copyright, designedBy } = siteContent.footer;

  return (
    <footer id="footer" className="bg-[#003324] text-white pt-20 pb-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#008a5e] rounded-full flex items-center justify-center font-bold text-xl">S</div>
              <div>
                <h3 className="text-xl font-bold leading-none tracking-tight">SANKALPA</h3>
                <p className="text-[10px] text-[#008a5e] font-bold uppercase tracking-wider">Ayurveda Hospital</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
              {description}
            </p>
            <div className="flex gap-4">
               {/* Social Icons */}
               {[
                 <svg key="fb" className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
                 <svg key="ig" className="w-5 h-5 fill-current" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>,
                 <svg key="tw" className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>,
                 <svg key="yt" className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.46 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
               ].map((icon, i) => (
                 <a key={i} href="#" className="w-10 h-10 bg-white/5 hover:bg-[#008a5e] rounded-full flex items-center justify-center transition-all">
                    {icon}
                 </a>
               ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-8">Quick Links</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              {links.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="hover:text-[#008a5e] transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-lg font-bold mb-8">Contact Us</h4>
            <ul className="space-y-6 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#008a5e] shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <span>{contact.phone}</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#008a5e] shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <span className="break-all">{contact.email}</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <svg className="w-5 h-5 text-[#008a5e] shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>{contact.address}</span>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="text-lg font-bold mb-8">Working Hours</h4>
            <div className="space-y-6 text-sm">
              {hours.map((item, idx) => (
                <div key={idx} className="flex gap-3">
                  <svg className="w-5 h-5 text-[#008a5e] shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  <div>
                    <p className="font-bold text-white mb-1">{item.days}</p>
                    <p className="text-gray-400">{item.time}</p>
                  </div>
                </div>
              ))}
              <div className="pt-4 border-t border-white/10">
                <p className="text-[#008a5e] font-bold mb-1">Emergency Services</p>
                <p className="text-xs text-gray-400">Available {emergency}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:row items-center justify-between gap-6 text-gray-500 text-xs text-center md:text-left">
           <p className="md:w-1/3">© {copyright}</p>
           
           <div className="flex gap-6 md:w-1/3 justify-center">
             <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
             <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
           </div>

           <p className="md:w-1/3 md:text-right">Designed with ❤️ by <span className="text-[#008a5e] font-bold">{designedBy}</span></p>
        </div>

        <div className="mt-10 text-center">
           <p className="text-[#008a5e] italic text-sm">{tagline}</p>
        </div>
      </div>
    </footer>
  );
}
