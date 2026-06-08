"use client"
import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [offsetY, setOffsetY] = useState(0);

  // Handle scroll position for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      // Use requestAnimationFrame for smoother performance
      requestAnimationFrame(() => {
        setOffsetY(window.scrollY);
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // Use svh (small viewport height) for accurate mobile browser sizing
    <section className="relative w-full min-h-[100svh] bg-[#111] overflow-hidden flex flex-col justify-center items-center text-center font-sans">
      
      {/* 1. PARALLAX BACKGROUND */}
      {/* Container is 20% taller and shifted up to allow room for the scroll translation */}
      <div 
        className="absolute inset-0 z-0 w-full h-[120vh] -top-[10vh] will-change-transform"
        style={{ transform: `translateY(${offsetY * 0.4}px)` }}
      >
        {/* Replace src with your video/image */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/logistic1.jpg"
          className="absolute w-full h-full object-cover"
        >
          <source src="/videos/dnp.mp4" type="video/mp4" />
        </video>
        {/* Soft overlay to ensure text legibility while keeping background visible */}
        <div className="absolute inset-0 z-10 bg-black/40" />
      </div>

      {/* 2. THE GRID & CROSSHAIR (Hidden on small mobile, visible on sm and up) */}
      <div className="absolute inset-0 z-10 hidden sm:grid grid-cols-4 pointer-events-none w-full max-w-[1400px] mx-auto opacity-50 md:opacity-100">
        <div className="border-r border-white/10 h-full"></div>
        <div className="border-r border-white/10 h-full relative">
          {/* Subtle Crosshair in the exact center */}
          <div className="absolute -right-[7px] top-[30%] text-white/30 text-lg font-light leading-none">+</div>
        </div>
        <div className="border-r border-white/10 h-full"></div>
        <div className="h-full"></div>
      </div>

      {/* 3. MAIN CONTENT */}
      {/* Apply dynamic translation opposite to scroll for subtle foreground floating effect (optional but premium) */}
      <div 
        className="relative z-20 w-full max-w-5xl mx-auto flex flex-col items-center px-4 sm:px-6 md:px-8 mt-12 md:mt-16 will-change-transform"
        style={{ transform: `translateY(${-offsetY * 0.15}px)` }}
      >
        
        {/* Headline: Highly responsive text scaling */}
        <h1 className="text-[44px] sm:text-[56px] md:text-[72px] lg:text-[84px] font-medium tracking-[-0.03em] text-white leading-[1.1] sm:leading-[1.05]">
          Intelligent 
          
          {/* Inline Icon 1: Logistics Box */}
          <span className="inline-flex items-center justify-center w-[0.85em] h-[0.85em] mx-2 sm:mx-3 lg:mx-4 bg-[#1E40AF] rounded-full align-middle -translate-y-[0.08em] shadow-[0_0_24px_rgba(30,64,175,0.25)]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-[0.45em] h-[0.45em] text-[#111]">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
              <line x1="12" y1="22.08" x2="12" y2="12" />
            </svg>
          </span>
          
          Logistics <br className="hidden sm:block" />
          for a Global
          
          {/* Inline Icon 2: Globe */}
          <span className="inline-flex items-center justify-center w-[0.85em] h-[0.85em] mx-2 sm:mx-3 lg:mx-4 bg-[#CE0001] rounded-full align-middle -translate-y-[0.08em] shadow-[0_0_24px_rgba(206,0,1,0.35)]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-[0.45em] h-[0.45em] text-[#111]">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              <path d="M2 12h20"/>
            </svg>
          </span>
          
          Market
        </h1>

        {/* Subheadline: Responsive padding and font sizing */}
        <p className="mt-6 md:mt-8 text-[15px] sm:text-[16px] md:text-[18px] font-normal text-white/80 leading-relaxed max-w-[90%] sm:max-w-[500px] md:max-w-[600px] mx-auto">
          Empowering businesses and communities to thrive in a fast-paced world through tailored supply chain solutions.
        </p>

        {/* MAIN CTA: Scale adjustments for mobile */}
        <div className="mt-8 md:mt-10 flex items-center gap-[6px]">
          {/* Pill */}
          <a 
            href="#contact" 
            className="h-[42px] md:h-[46px] px-6 md:px-8 bg-[#1E40AF] hover:bg-[#CE0001] text-white text-[13px] md:text-[14px] font-medium rounded-full flex items-center transition-colors"
          >
            Start a Project
          </a>
          {/* Circle */}
          <a 
            href="#contact" 
            className="group h-[42px] w-[42px] md:h-[46px] md:w-[46px] bg-[#1E40AF] hover:bg-[#CE0001] text-white rounded-full flex items-center justify-center transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>
        </div>
      </div>

      {/* 4. FOOTER INDICATOR */}
      <div 
        className="absolute bottom-6 md:bottom-8 left-0 right-0 z-20 flex justify-center transition-opacity duration-300"
        style={{ opacity: Math.max(1 - offsetY / 300, 0) }} // Fades out as you scroll down
      >
        <span className="text-[9px] md:text-[10px] font-medium tracking-[0.2em] text-white/60 uppercase animate-bounce">
          Scroll Down
        </span>
      </div>

    </section>
  );
};

export default Hero;
