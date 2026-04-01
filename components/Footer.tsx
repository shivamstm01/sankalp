import { siteContent } from "@/data/siteContent";

const socialIcons = [
  <svg key="fb" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.5 22v-8.2h2.8l.4-3.2h-3.2V8.6c0-.9.3-1.6 1.6-1.6H17V4.1c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.2v2.4H8v3.2h2.6V22h2.9Z"/></svg>,
  <svg key="ig" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.25"/><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none"/></svg>,
  <svg key="tw" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-4.9-6.4L6.4 22H3.3l7.3-8.3L1 2h6.5l4.4 5.9L18.9 2Zm-1.1 18h1.7L6.6 3.9H4.8L17.8 20Z"/></svg>,
  <svg key="yt" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.6 7.2a2.9 2.9 0 0 0-2-2C17.8 4.7 12 4.7 12 4.7s-5.8 0-7.6.5a2.9 2.9 0 0 0-2 2A30 30 0 0 0 2 12a30 30 0 0 0 .4 4.8 2.9 2.9 0 0 0 2 2c1.8.5 7.6.5 7.6.5s5.8 0 7.6-.5a2.9 2.9 0 0 0 2-2A30 30 0 0 0 22 12a30 30 0 0 0-.4-4.8ZM10 15.5v-7l6 3.5-6 3.5Z"/></svg>,
];

const contactCards = [
  {
    label: "Phone",
    valueKey: "phone" as const,
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2 4.11 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
  },
  {
    label: "Email",
    valueKey: "email" as const,
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
  {
    label: "Address",
    valueKey: "address" as const,
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
  },
];

export default function Footer() {
  const { description, links, contact, hours, emergency, tagline, copyright, designedBy } = siteContent.footer;

  return (
    <footer
      id="footer"
      className="bg-[linear-gradient(180deg,#022d22_0%,#033528_44%,#01261d_100%)] text-white pt-16 lg:pt-24 pb-8 px-4 md:px-8 overflow-hidden relative"
    >
      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-[#008a5e] opacity-10 rounded-full translate-y-1/2 translate-x-1/2 blur-[100px] pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-[26rem] h-[26rem] bg-[#facc15] opacity-[0.05] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1560px] mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-14 lg:mb-20">
          <div className="space-y-6 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-3">
           <div className="w-16 h-16 sm:w-18 sm:h-18">
  <img
    src="/images/sankalplogo.png"
    alt="Sankalpa Logo"
    className="object-contain w-full h-full"
  />
</div>
              <div>
                <h3 className="text-xl font-black font-semibold leading-none tracking-tight">SANKALPA</h3>
                <p className="text-[10px] text-[#008a5e] font-black uppercase tracking-[0.2em] mt-1">Ayurveda Hospital</p>
              </div>
            </div>
            <p className="text-gray-350 text-sm leading-relaxed max-w-xs mx-auto sm:mx-0 font-medium italic">
              {description}
            </p>
            <div className="flex justify-center sm:justify-start gap-3">
              {socialIcons.map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-11 h-11 bg-white/5 hover:bg-[#008a5e] hover:-translate-y-1 rounded-2xl flex items-center justify-center transition-all duration-300 border border-white/10 active:scale-90 shadow-[0_10px_24px_rgba(0,0,0,0.15)]"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="text-base lg:text-lg font-black mb-5 lg:mb-6 text-white font-semibold flex items-center justify-center sm:justify-start gap-3">
              <span className="w-2 h-2 bg-[#008a5e] font-semibold rounded-full"></span>
              Quick Links
            </h4>
            <ul className="space-y-4 text-gray-300 text-sm font-bold">
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

          <div className="text-center sm:text-left">
            <h4 className="text-base lg:text-lg font-black mb-5 lg:mb-6 text-white flex items-center justify-center sm:justify-start gap-3 font-semibold">
              <span className="w-2 h-2 bg-[#008a5e] rounded-full"></span>
              Contact Us
            </h4>
            <ul className="space-y-4 text-gray-300">
              {contactCards.map((item) => (
                <li
                  key={item.label}
                  className="rounded-[1.35rem] border border-white/8 bg-white/[0.04] p-4 backdrop-blur-sm shadow-[0_14px_30px_rgba(0,0,0,0.12)]"
                >
                  <div className="flex items-start gap-3 text-left">
                    <div className="w-11 h-11 bg-[#008a5e]/12 rounded-2xl flex items-center justify-center text-[#34d399] shrink-0 border border-[#34d399]/20">
                      {item.icon}
                    </div>
                    <div className="space-y-1 min-w-0">
                      <p className="text-[11px] uppercase tracking-[0.18em] text-gray-500 font-black">{item.label}</p>
                      <p className={`text-sm font-semibold text-white ${item.valueKey !== "phone" ? "break-all" : ""}`}>
                        {contact[item.valueKey]}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="text-base lg:text-lg font-black mb-5 lg:mb-6 text-white flex items-center justify-center sm:justify-start gap-3 font-semibold">
              <span className="w-2 h-2 bg-[#008a5e] rounded-full"></span>
              Working Hours
            </h4>
            <div className="space-y-4">
              {hours.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-[1.35rem] border border-white/8 bg-white/[0.04] p-4 backdrop-blur-sm shadow-[0_14px_30px_rgba(0,0,0,0.12)]"
                >
                  <div className="flex items-start gap-3 text-left">
                    <div className="w-11 h-11 bg-[#008a5e]/12 rounded-2xl flex items-center justify-center text-[#34d399] shrink-0 border border-[#34d399]/20">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12 6 12 12 16 14"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-black text-white text-sm lg:text-base mb-1 font-semibold">{item.days}</p>
                      <p className="text-gray-400 font-bold text-sm font-semibold">{item.time}</p>
                    </div>
                  </div>
                </div>
              ))}
              <div className="rounded-[1.35rem] border border-[#f43f5e]/15 bg-[#f43f5e]/[0.04] p-4 shadow-[0_14px_30px_rgba(0,0,0,0.12)]">
                <p className="text-[#34d399] font-black text-xs lg:text-sm uppercase tracking-widest mb-2 flex items-center justify-center sm:justify-start gap-2 font-semibold">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-[#f43f5e] opacity-75 animate-ping"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#f87171]"></span>
                  </span>
                  Emergency Services
                </p>
                <p className="text-sm text-gray-300 font-semibold">Available {emergency}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center font-medium justify-between gap-6 text-gray-300 text-xs lg:text-sm font-bold text-center md:text-left">
          <p className="md:w-1/3 order-3 md:order-1">&copy; {copyright}</p>

          <div className="flex flex-wrap justify-center gap-4 lg:gap-6 md:w-1/3 order-1 md:order-2">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
          </div>

          <p className="md:w-1/3 md:text-right order-2 md:order-3">
            Designed with care by <span className="text-[#008a5e] font-black">{designedBy}</span>
          </p>
        </div>

        <div className="mt-8 lg:mt-12 text-center">
          <p className="text-[#008a5e] italic text-sm lg:text-base font-black tracking-tight">{tagline}</p>
        </div>
      </div>
    </footer>
  );
}
