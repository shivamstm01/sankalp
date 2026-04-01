"use client";
import { useState } from "react";
import { siteContent } from "@/data/siteContent";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative bg-white px-3 sm:px-4 md:px-6 lg:px-8 z-50 shadow-[0_4px_18px_rgba(15,23,42,0.08)] border-b border-slate-100">
      <div className="max-w-7xl mx-auto h-[72px] sm:h-[80px] lg:h-[92px] flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3.5">
          <div className="w-[44px] h-[44px] sm:w-[52px] sm:h-[52px] lg:w-[60px] lg:h-[60px] rounded-full flex items-center justify-center font-extrabold text-[20px]">
           <img src="/images/sankalplogo.png" alt="Sankalpa Logo" className="w-full h-full object-contain" />
          </div>
          <div>
            <h1 className="font-extrabold text-[20px] sm:text-[22px] lg:text-[26px] 2xl:text-[28px] leading-none text-[#0b6b4b] tracking-tight">SANKALPA</h1>
            <p className="text-[10px] sm:text-[11px] lg:text-[12px] text-slate-500 leading-tight mt-1">Ayurveda Hospital &amp; Research Centre</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 2xl:gap-10">
          {siteContent.navigation.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="text-slate-700 hover:text-[#008a5e] font-semibold transition-all text-[14px] xl:text-[15px] 2xl:text-[16px]"
            >
              {item.label}
            </a>
          ))}
          <a 
            href="https://www.eka.care/doctor/santrupti-katti-1753779208"
            className="border-2 border-[#00a16a] text-[#00a16a] px-6 xl:px-7 2xl:px-8 py-3 xl:py-3.5 rounded-full font-bold hover:bg-[#00a16a]/10 transition-all text-[14px] xl:text-[15px] 2xl:text-[16px] leading-none"
          >
            Book Appointment
          </a>
          <a 
            href="#footer"
            className="bg-[#00a16a] text-white px-6 xl:px-7 2xl:px-8 py-3 xl:py-3.5 rounded-full font-bold hover:bg-[#008a5e] transition-all shadow-sm text-[14px] xl:text-[15px] 2xl:text-[16px] leading-none"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden p-2 text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl overflow-hidden animate-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col p-4 sm:p-5 space-y-3">
            {siteContent.navigation.map((item) => (
              <a 
                key={item.label} 
                href={item.href} 
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-[#008a5e] font-bold text-[15px] sm:text-base py-2 border-b border-gray-50 last:border-0"
              >
                {item.label}
              </a>
            ))}
            <a 
              href="https://www.eka.care/doctor/santrupti-katti-1753779208"
              onClick={() => setIsMenuOpen(false)}
              className="border-2 border-[#008a5e] text-[#008a5e] px-6 sm:px-8 py-3 rounded-xl font-bold text-center shadow-sm transition-transform active:scale-95 translate-y-2"
            >
              Book Appointment
            </a>
            <a 
              href="#footer"
              onClick={() => setIsMenuOpen(false)}
              className="bg-[#008a5e] text-white px-6 sm:px-8 py-3 rounded-xl font-bold text-center shadow-lg transition-transform active:scale-95 translate-y-2"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
