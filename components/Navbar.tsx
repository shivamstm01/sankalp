"use client";
import { useState } from "react";
import { siteContent } from "@/data/siteContent";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white py-4 px-4 sticky top-0 z-50 shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#008a5e] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-inner">
            S
          </div>
          <div>
            <h1 className="font-bold text-lg leading-tight text-gray-800 tracking-tight">SANKALPA</h1>
            <p className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold">Ayurveda Hospital</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          {siteContent.navigation.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="text-gray-600 hover:text-[#008a5e] font-bold transition-all text-sm uppercase tracking-wide"
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#footer"
            className="bg-[#008a5e] text-white px-8 py-2.5 rounded-full font-bold hover:bg-[#007a52] transition-all shadow-md text-sm uppercase tracking-wider"
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
          <div className="flex flex-col p-6 space-y-4">
            {siteContent.navigation.map((item) => (
              <a 
                key={item.label} 
                href={item.href} 
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-[#008a5e] font-bold text-lg py-2 border-b border-gray-50 last:border-0"
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#footer"
              onClick={() => setIsMenuOpen(false)}
              className="bg-[#008a5e] text-white px-8 py-4 rounded-xl font-bold text-center shadow-lg transition-transform active:scale-95 translate-y-2"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
