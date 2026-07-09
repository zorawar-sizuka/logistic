"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const logoImageProps = {
  src: "/images/dnp.png",
  width: 1538,
  height: 1022,
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const { style } = document.body;
    const previousOverflow = style.overflow;

    style.overflow = isMobileMenuOpen ? "hidden" : "";

    return () => {
      style.overflow = previousOverflow;
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className="absolute top-4 left-4 right-4 md:top-6 md:left-6 md:right-6 z-50 flex justify-between items-start font-sans pointer-events-none">
        <div className="bg-white text-black h-[64px] w-[64px] md:w-auto px-0 md:px-4 lg:px-8 flex items-center justify-center md:justify-start rounded-[4px] pointer-events-auto shadow-sm overflow-hidden">
          <a
            href="#home"
            className="flex items-center justify-center w-full h-full md:w-auto md:mr-6 lg:mr-12 hover:opacity-75 transition-opacity duration-300"
          >
            <Image
              {...logoImageProps}
              alt="DNP Logo"
              unoptimized
              priority
              style={{ width: "auto" }}
              className="h-8 md:h-16 w-auto object-contain"
            />
          </a>

          <div className="hidden md:flex items-center gap-4 lg:gap-8 xl:gap-10">
            <a href="#home" className="text-[13px] lg:text-[14px] xl:text-[15px] font-medium uppercase tracking-[0.08em] lg:tracking-[0.15em] text-black hover:text-gray-500 transition-colors duration-300">
              Home
            </a>
            <a href="#about" className="group text-[13px] lg:text-[14px] xl:text-[15px] font-medium uppercase tracking-[0.08em] lg:tracking-[0.15em] text-black hover:text-gray-500 flex items-center gap-1.5 transition-colors duration-300">
              About Us
            </a>
            <a href="#services" className="text-[13px] lg:text-[14px] xl:text-[15px] font-medium uppercase tracking-[0.08em] lg:tracking-[0.15em] text-black hover:text-gray-500 transition-colors duration-300">
              Services
            </a>
            <a href="#contact" className="text-[13px] lg:text-[14px] xl:text-[15px] font-medium uppercase tracking-[0.08em] lg:tracking-[0.15em] text-black hover:text-gray-500 transition-colors duration-300">
              Contact Us
            </a>
          </div>
        </div>

        <div className="flex items-center gap-1.5 lg:gap-2 pointer-events-auto">
          <button
            type="button"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label="Open navigation menu"
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden h-[64px] px-6 bg-[#CE0001] hover:bg-[#a60001] text-white text-[14px] font-medium uppercase tracking-[0.1em] rounded-[4px] flex items-center gap-2.5 transition-colors cursor-pointer"
          >
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

          <a href="#contact" className="hidden md:flex h-[44px] lg:h-[52px] px-4 lg:px-8 bg-[#1E40AF] hover:bg-[#CE0001] hover:text-[#ffffff] text-[#f4f4f5] text-[13px] lg:text-[14px] xl:text-[15px] font-semibold tracking-wider rounded-full items-center transition-all duration-300">
            Contact Us
          </a>

          <a href="#contact" className="hidden md:flex group h-[44px] w-[44px] lg:h-[52px] lg:w-[52px] bg-[#1E40AF] hover:bg-[#CE0001] text-white hover:text-[#111] rounded-full items-center justify-center transition-all duration-300">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>
        </div>
      </nav>

      <div
        id="mobile-navigation"
        aria-hidden={!isMobileMenuOpen}
        className={`fixed inset-0 z-[100] bg-white text-[#111] flex flex-col px-6 py-8 transition-transform duration-700 ease-[cubic-bezier(0.87,0,0.13,1)] ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full pointer-events-none"
        }`}
      >
        <div className="flex justify-between items-center w-full mb-16">
          <a href="#home" className="w-[64px] h-[64px] bg-white border border-black/10 shadow-sm rounded-[4px] overflow-hidden flex items-center justify-center hover:opacity-90 transition-opacity duration-300">
            <Image {...logoImageProps} alt="DNP Logo" unoptimized style={{ width: "auto" }} className="h-full w-auto object-contain" />
          </a>
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-12 h-12 bg-black/5 hover:bg-[#1E40AF] hover:text-white rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className="flex flex-col gap-6 text-[36px] sm:text-[48px] font-light tracking-tight">
          <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#1E40AF] transition-colors border-b border-black/10 pb-4 text-[#111]">
            Home
          </a>
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#CE0001] transition-colors border-b border-black/10 pb-4 text-[#111]">
            About Us
          </a>
          <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#1E40AF] transition-colors border-b border-black/10 pb-4 text-[#111]">
            Services
          </a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#CE0001] transition-colors border-b border-black/10 pb-4 text-[#111]">
            Contact Us
          </a>
        </div>

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
