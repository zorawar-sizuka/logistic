"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// Reusable SVG for the solid Hexagon marker
const HexagonIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M21 7.5V16.5L12 21L3 16.5V7.5L12 3L21 7.5Z" />
  </svg>
);

// Logistics Process Data Array
const processData = [
  {
    id: '01',
    title: 'Requirement Analysis',
    description: "We deeply analyze your business's unique freight patterns, optimization targets, and service requirements.",
  },
  {
    id: '02',
    title: 'Solution Engineering',
    description: "Our team designs custom route configurations, carrier selection strategies, and visibility workflows optimized for speed.",
  },
  {
    id: '03',
    title: 'Operational Execution',
    description: "Deploying our tech stack and expert teams to coordinate, monitor, and troubleshoot every shipment for absolute precision.",
  }
];

const getStepIcon = (step) => {
  switch (step) {
    case "01":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px] md:w-[22px] md:h-[22px] text-white">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      );
    case "02":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px] md:w-[22px] md:h-[22px] text-white">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      );
    case "03":
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px] md:w-[22px] md:h-[22px] text-white">
          <polyline points="21 16 12 21 3 16 3 8 12 3 21 8 21 16" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      );
  }
};

const Process = () => {
  const sectionRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState("01");

  useEffect(() => {
    const cardsContainer = cardsContainerRef.current;
    if (!cardsContainer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(cardsContainer);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const t1 = setTimeout(() => setActiveStep("02"), 500);
      const t2 = setTimeout(() => setActiveStep("03"), 1000);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }
  }, [isVisible]);

  return (
    <section 
      ref={sectionRef} 
      id="process" 
      className="relative w-full bg-[#0a1118] py-20 sm:py-28 md:py-36 px-4 sm:px-6 md:px-12 font-sans overflow-hidden border-b border-black/[0.03]"
    >
      {/* =========================================
          ARTISTIC BACKGROUND LAYER
          ========================================= */}
      {/* a. The Immersive Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/process_dnp1.avif"
          alt="Logistics Terminal Background"
          fill
          sizes="100vw"
          className="w-full h-full object-cover mix-blend-luminosity opacity-80"
        />
      </div>

      {/* b. The Slight Black Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#1E40AF]/70 via-[#0a1118]/40 to-[#CE0001]/45 pointer-events-none" />

      {/* c. Subtle Architectural Grid Lines */}
      <div className="absolute inset-0 z-10 hidden md:grid grid-cols-4 pointer-events-none w-full max-w-[1400px] mx-auto opacity-30">
        <div className="border-r border-white/10 h-full relative">
            <div className="absolute -right-[5px] top-[40%] text-white/40 text-sm font-light leading-none">+</div>
        </div>
        <div className="border-r border-white/10 h-full relative">
            <div className="absolute -right-[5px] top-[70%] text-white/40 text-sm font-light leading-none">+</div>
        </div>
        <div className="border-r border-white/10 h-full relative">
            <div className="absolute -right-[5px] top-[10%] text-white/40 text-sm font-light leading-none">+</div>
        </div>
        <div className="h-full"></div>
      </div>

      {/* =========================================
          CONTENT LAYERS
          ========================================= */}
      <div className="relative z-20 w-full max-w-[1400px] mx-auto flex flex-col gap-12 md:gap-20">
        
        {/* =========================================
            TOP SECTION: HEADLINE & TIMELINE
            ========================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 justify-between items-start md:items-end">
          
          {/* Left Column: Label & Dynamic Headline */}
          <div className="lg:col-span-5 flex flex-col items-start gap-3 md:gap-4">
            <div className="flex items-center gap-3">
              <HexagonIcon className="text-white w-[16px] h-[16px]" />
              <span className="text-[14px] font-bold text-white tracking-[0.15em] uppercase">
                WORK PROCESS
              </span>
            </div>

            <h2 className="text-[34px] sm:text-[44px] lg:text-[60px] font-normal leading-[1.05] tracking-[-0.04em] text-white">
              Our 3-step <br className="hidden sm:block" />
              work process
            </h2>
          </div>

          {/* Right Column: Horizonal Timeline */}
          <div className="lg:col-span-6 lg:col-start-7 flex flex-col items-start md:items-center justify-end pb-0 md:pb-4 relative z-30 w-full">
            <div className="relative w-full max-w-[320px] md:max-w-none h-[2px] bg-[#1E40AF]/35 flex items-center justify-center rounded-full mt-2 md:mt-0">
              
              {/* Dynamic Center Circle Indicator - Signature Red with Step Icon */}
              <div className="absolute w-[44px] h-[44px] md:w-[56px] md:h-[56px] bg-[#CE0001] rounded-full flex items-center justify-center shadow-[0_4px_24px_rgba(206,0,1,0.35)] transition-all duration-300 z-10">
                {getStepIcon(activeStep)}
              </div>

              {/* Scroll progress bar filling the line */}
              <div 
                className="absolute left-0 top-0 h-full bg-[#1E40AF] rounded-full transition-all duration-[1500ms] ease-out" 
                style={{ width: isVisible ? "100%" : "0%" }} 
              />
            </div>
          </div>
          
        </div>

        {/* =========================================
            BOTTOM SECTION: REVEALED CARDS
            ========================================= */}
        <div ref={cardsContainerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {processData.map((step, index) => (
              <div 
                key={step.id}
                className="bg-white rounded-[20px] p-6 sm:p-7 lg:p-10 flex flex-col gap-4 sm:gap-5 md:gap-6 transition-all duration-[1000ms] cubic-bezier(0.16, 1, 0.3, 1) shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
                style={{ 
                  opacity: isVisible ? 1 : 0, 
                  transform: isVisible ? "translate3d(0, 0, 0) scale(1)" : "translate3d(0, 48px, 0) scale(0.95)",
                  transitionDelay: `${index * 200}ms`
                }}
              >
                
                {/* Capsule Step Label */}
                <div className="w-fit bg-[#1E40AF] px-4 py-1.5 rounded-full flex items-center justify-center shadow-sm">
                  <span className="text-[10px] sm:text-[11px] font-bold text-white tracking-[0.2em] uppercase leading-none">
                    STEP: {step.id}
                  </span>
                </div>
                
                {/* Card Title */}
                <h3 className="text-[21px] sm:text-[24px] md:text-[28px] font-medium leading-[1.2] tracking-[-0.03em] text-[#1E40AF] mt-1 sm:mt-2">
                  {step.title}
                </h3>
                
                {/* Card Description */}
                <p className="text-[14px] sm:text-[15px] md:text-[16px] text-[#5d6a86] font-normal leading-relaxed max-w-none sm:max-w-[320px]">
                  {step.description}
                </p>
              </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Process;
