"use client"
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className="absolute top-6 left-6 right-6 z-50 flex justify-between items-start font-sans pointer-events-none">
        
        {/* LEFT NAVIGATION BLOCK (White) */}
        {/* Increased height to 64px, added subtle shadow */}
        <div className="bg-white text-black h-[64px] w-[64px] md:w-auto px-0 md:px-8 flex items-center justify-center md:justify-start rounded-[4px] pointer-events-auto shadow-sm overflow-hidden">
          {/* Logo */}
       {/* Logo */}
<a 
  href="#home" 
  className="flex items-center justify-center w-full h-full md:w-auto md:mr-12 hover:opacity-75 transition-opacity duration-300"
>
  <img 
    src="/images/dnp.png" // 👈 Replace with your local asset path, imported file, or URL
    alt="DNP Logo" 
    className="h-8 md:h-16 w-auto object-contain" 
  />
</a>

          {/* Desktop Links (Increased text size to 12px, restored font-medium) */}
          <div className="hidden md:flex items-center gap-10">
            <a href="#home" className="text-[12px] font-medium uppercase tracking-[0.15em] text-black hover:text-gray-500 transition-colors duration-300">
              Home
            </a>
            <a href="#about" className="group text-[12px] font-medium uppercase tracking-[0.15em] text-black hover:text-gray-500 flex items-center gap-1.5 transition-colors duration-300">
              About Us
            </a>
            <a href="#services" className="text-[12px] font-medium uppercase tracking-[0.15em] text-black hover:text-gray-500 transition-colors duration-300">
              Services
            </a>
            <a href="#contact" className="text-[12px] font-medium uppercase tracking-[0.15em] text-black hover:text-gray-500 transition-colors duration-300">
              Contact Us
            </a>
          </div>
        </div>

        {/* RIGHT ACTION GROUP (Dark) */}
        <div className="flex items-center gap-2 pointer-events-auto">
          
          {/* Mobile Menu Trigger (Visible only on small screens) */}
          <button 
  onClick={() => setIsMobileMenuOpen(true)}
  className="md:hidden h-[64px] px-6 bg-[#181a1b] hover:bg-black text-[#f4f4f5] text-[14px] font-medium uppercase tracking-[0.1em] rounded-[4px] flex items-center gap-2.5 transition-colors"
>
  {/* Modern 3-line Hamburger Menu Icon */}
  <svg 
    className="w-5 h-5 stroke-[2]" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <line x1="4" y1="12" x2="20" y2="12"></line>
    <line x1="4" y1="6" x2="20" y2="6"></line>
    <line x1="4" y1="18" x2="20" y2="18"></line>
  </svg>
</button>

          {/* Desktop Contact Pill (Increased height to 52px, text to 14px, restored font-medium) */}
          <a href="#contact" className="hidden md:flex h-[52px] px-8 bg-[#1E40AF] hover:bg-[#CE0001] hover:text-[#ffffff] text-[#f4f4f5] text-[14px] font-medium rounded-full items-center transition-all duration-300">
            Contact Us
          </a>
          
          {/* Desktop Action Circle (Increased to 52x52px, added group hover arrow movement) */}
          <a href="#contact" className="hidden md:flex group h-[52px] w-[52px] bg-[#1E40AF] hover:bg-[#CE0001] text-white hover:text-[#111] rounded-full items-center justify-center transition-all duration-300">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>
        </div>
      </nav>

      {/* =========================================
          MOBILE NAVIGATION FULLSCREEN OVERLAY
          ========================================= */}
      <div 
        className={`fixed inset-0 z-[100] bg-[#111] text-white flex flex-col px-6 py-8 transition-transform duration-700 ease-[cubic-bezier(0.87,0,0.13,1)] ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {/* Mobile Header */}
        <div className="flex justify-between items-center w-full mb-16">
          <a href="#home" className="w-[64px] h-[64px] bg-white rounded-[4px] overflow-hidden flex items-center justify-center hover:opacity-90 transition-opacity duration-300">
            <img src="/images/dnp.png" alt="DNP Logo" className="w-full h-full object-contain" />
          </a>
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-12 h-12 bg-white/10 hover:bg-[#1E40AF] hover:text-white rounded-full flex items-center justify-center transition-colors duration-300"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Mobile Links */}
        <div className="flex flex-col gap-6 text-[36px] sm:text-[48px] font-light tracking-tight">
          <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#1E40AF] transition-colors border-b border-white/10 pb-4">
            Home
          </a>
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#CE0001] transition-colors border-b border-white/10 pb-4">
            About Us
          </a>
          <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#1E40AF] transition-colors border-b border-white/10 pb-4">
            Services
          </a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#CE0001] transition-colors border-b border-white/10 pb-4">
            Contact Us
          </a>
        </div>

        {/* Mobile Footer CTA */}
        <div className="mt-auto pb-4">
          <a 
            href="#contact" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full h-[64px] bg-[#1E40AF] text-white text-[18px] font-medium rounded-full flex items-center justify-center gap-3 transition-transform active:scale-95"
          >
            Let&apos;s Talk
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
