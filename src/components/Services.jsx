"use client";
import React, { useState, useEffect, useRef } from 'react';

// Reusable Hexagon
const HexagonIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M21 7.5V16.5L12 21L3 16.5V7.5L12 3L21 7.5Z" />
  </svg>
);

// Sharp, minimalist diagonal arrow matching the premium screenshot vibe
const ArrowUpRightIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const servicesData = [
  {
    id: '01',
    title: 'AIR FREIGHT',
    description: "In airfreight, the only constant is change - it's the heartbeat of the sector.",
    image: '/services/ser_dnp1.jpg',
  },
  {
    id: '02',
    title: 'OCEAN FREIGHT',
    description: "Navigating international waters with precision, carrying the weight of global trade.",
    image: '/services/ser_dnp2.jpg',
  },
  {
    id: '03',
    title: 'LAND TRANSPORT',
    description: "The vital arteries of continental logistics, delivering directly to the destination.",
    image: '/services/ser_dnp3.avif',
  },
  {
    id: '04',
    title: 'WAREHOUSING & DISTRIBUTION',
    description: "Intelligent warehousing and inventory management engineered for rapid scaling.",
    image: '/services/ser_dnp4.avif',
  },
  {
    id: '05',
    title: 'PROJECT CARGO HANDLING',
    description: "Specialized engineering and heavy-lift transport for massive industrial builds.",
    image: '/services/ser_dnp5.jpg',
  },
  {
    id: '06',
    title: 'CUSTOMS BROKERAGE',
    description: "Seamless border transitions through expert regulatory compliance and data integration.",
    image: '/services/ser_dnp6.avif',
  }
];

// Independent Card Wrapper Component to isolate viewport entry states
const ScrollRevealCard = ({ service, index }) => {
  const [isCardVisible, setIsCardVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsCardVisible(true);
          observer.disconnect(); // Locks state into view once visible
        }
      },
      { 
        threshold: 0.12, // Card must be 12% visible to trigger reveal
        rootMargin: "0px 0px -50px 0px" // Delays trigger slightly so it happens cleanly as you scroll into view
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Compute a smart, staggered delay based on grid row position
  const staggerDelay = (index % 3) * 100;

  return (
    <div 
      ref={cardRef}
      className="transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
      style={{ 
        transform: isCardVisible ? 'translateY(0)' : 'translateY(100px)',
        opacity: isCardVisible ? 1 : 0,
        transitionDelay: isCardVisible ? `${staggerDelay}ms` : '0ms'
      }}
    >
      <div className="group relative w-full h-[280px] sm:h-[360px] md:h-[580px] lg:h-[620px] rounded-[16px] sm:rounded-[24px] overflow-hidden cursor-pointer shadow-sm hover:shadow-[0_30px_60px_rgba(0,0,0,0.25)] transition-all duration-700 bg-black">
        
        {/* 1. BACKGROUND IMAGE */}
        <img 
          src={service.image} 
          alt={service.title} 
          className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[1800ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isCardVisible ? 'scale-100 opacity-70 group-hover:scale-105 group-hover:opacity-60' : 'scale-115 opacity-0'
          }`}
        />
        
        {/* 2. BALANCED AMBIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/5 to-black/60 transition-all duration-700 group-hover:to-black/80" />

        {/* 3. SHUTTLE BRAND ACTION BUTTON */}
        <div className="absolute top-3 right-3 md:top-6 md:right-6 w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 bg-[#CE0001] rounded-full flex items-center justify-center text-white z-20 shadow-lg overflow-hidden transform transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:opacity-90 md:group-hover:opacity-100 md:group-hover:scale-105 md:group-hover:bg-[#1E40AF]">
          <div className="relative w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-6 group-hover:-translate-y-6">
            <ArrowUpRightIcon className="absolute w-full h-full text-white" />
            <ArrowUpRightIcon className="absolute w-full h-full text-white -translate-x-6 translate-y-6" />
          </div>
        </div>

        {/* 4. FLOATING FROSTED-GLASS BLOCK */}
        <div className="absolute inset-x-2 bottom-2 sm:inset-x-4 sm:bottom-4 md:inset-x-6 md:bottom-6 z-10">
          <div className="rounded-[12px] sm:rounded-[20px] border border-white/10 sm:border-white/15 bg-white/[0.06] backdrop-blur-xl p-3 sm:p-5 md:p-8 shadow-[0_15px_35px_rgba(0,0,0,0.25)] transform transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] md:translate-y-4 md:group-hover:translate-y-0 md:group-hover:bg-white/[0.12] md:group-hover:border-white/25">
            
            {/* Small Title Identifier */}
            <div className="text-white/70 text-[9px] sm:text-[11px] md:text-[12px] font-bold tracking-[0.12em] sm:tracking-[0.16em] uppercase mb-1.5 sm:mb-2 md:mb-4 transition-colors duration-500 group-hover:text-white">
              {service.title}
            </div>

            {/* Main Description Statement */}
            <p className="text-white/90 text-[12px] sm:text-[16px] md:text-[22px] font-normal leading-[1.3] sm:leading-[1.35] tracking-tight whitespace-normal transition-colors duration-500 group-hover:text-white">
              {service.description}
            </p>

          </div>
        </div>

        {/* 5. HOVER ACCENT LINE LAYER */}
        <div className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-[#1E40AF] to-[#CE0001] w-0 transition-all duration-700 ease-out group-hover:w-full" />

      </div>
    </div>
  );
};

const Services = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="w-full bg-[#f7f8f9] py-20 md:py-32 px-4 sm:px-6 md:px-12 font-sans border-b border-black/[0.03]">
      
      {/* Global Style overrides to fix complex hydration-prone CSS rules cleanly */}
      <style>{`
        @keyframes premiumSmoothSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .premium-spin-icon {
          animation: premiumSmoothSpin 12s linear infinite;
        }
      `}</style>

      <div className="max-w-[1400px] mx-auto flex flex-col gap-16 md:gap-28">
        
        {/* =========================================
            TOP ROW: EDITORIAL TYPOGRAPHY BLOCK 
            ========================================= */}
        <div ref={headerRef} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8">
          <div className="lg:col-span-3 flex flex-col justify-start items-start h-full mt-2">
            <div className={`flex items-center gap-3 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
              <HexagonIcon className="text-[#1E40AF] w-4 h-4 fill-none stroke-[#1E40AF] stroke-[2] premium-spin-icon" />
              <span className="text-[14px] font-bold text-[#111] tracking-[0.15em] uppercase">
                Our Services
              </span>
            </div>
          </div>

          <div className="lg:col-span-9 lg:pl-12 overflow-hidden">
            <h2 className={`text-[38px] sm:text-[52px] lg:text-[64px] font-normal leading-[1.1] sm:leading-[1.05] tracking-[-0.04em] transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-100 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <span className="text-[#7b879f]">From global airways to local routes, </span>
              <span className="text-[#1E40AF] font-medium">we engineer supply chain velocity, </span>
              <span className="text-[#CE0001]/75">moving your cargo with absolute precision.</span>
            </h2>
          </div>
        </div>

        {/* =========================================
            BOTTOM ROW: HIGH-FIDELITY SCROLL REVEAL GRID
            ========================================= */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-8">
          {servicesData.map((service, index) => (
            <ScrollRevealCard 
              key={service.id} 
              service={service} 
              index={index} 
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;