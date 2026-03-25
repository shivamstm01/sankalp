"use client";
import { useState } from "react";
import { siteContent } from "@/data/siteContent";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white px-4 z-50 shadow-[0_4px_18px_rgba(15,23,42,0.08)] border-b border-slate-100">
      <div className="max-w-[1560px] mx-auto h-[84px] lg:h-[92px] flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3.5">
          <div className="w-[54px] h-[54px] bg-[#00a16a] rounded-full flex items-center justify-center text-white font-extrabold text-[20px] shadow-inner">
            S
          </div>
          <div>
            <h1 className="font-extrabold text-[24px] lg:text-[26px] leading-none text-[#0b6b4b] tracking-tight">SANKALPA</h1>
            <p className="text-[11px] lg:text-[12px] text-slate-500 leading-tight mt-1">Ayurveda Hospital &amp; Research Centre</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {siteContent.navigation.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="text-slate-700 hover:text-[#008a5e] font-semibold transition-all text-[14px] xl:text-[15px]"
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#footer"
            className="bg-[#00a16a] text-white px-7 py-3.5 rounded-full font-bold hover:bg-[#008a5e] transition-all shadow-sm text-[14px] xl:text-[15px] leading-none"
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
          <div className="flex flex-col p-5 space-y-3">
            {siteContent.navigation.map((item) => (
              <a 
                key={item.label} 
                href={item.href} 
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-[#008a5e] font-bold text-base py-2 border-b border-gray-50 last:border-0"
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#footer"
              onClick={() => setIsMenuOpen(false)}
              className="bg-[#008a5e] text-white px-8 py-3 rounded-xl font-bold text-center shadow-lg transition-transform active:scale-95 translate-y-2"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
