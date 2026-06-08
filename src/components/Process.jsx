"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

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
    threshold: 0.05, 
  },
  {
    id: '02',
    title: 'Solution Engineering',
    description: "Our team designs custom route configurations, carrier selection strategies, and visibility workflows optimized for speed.",
    threshold: 0.35, 
  },
  {
    id: '03',
    title: 'Operational Execution',
    description: "Deploying our tech stack and expert teams to coordinate, monitor, and troubleshoot every shipment for absolute precision.",
    threshold: 0.65, 
  }
];

const Process = () => {
  const wrapperRef = useRef(null);
  const activeStepRef = useRef(null);
  const progressBarRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const wrapper = wrapperRef.current;

    if (!wrapper) {
      return undefined;
    }

    let frameId = 0;

    const updateProgress = () => {
      frameId = 0;

      const rect = wrapper.getBoundingClientRect();
      const scrollableDistance = rect.height - window.innerHeight;
      const scrolled = -rect.top;
      const progress =
        scrollableDistance <= 0
          ? 0
          : Math.max(0, Math.min(1, scrolled / scrollableDistance));
      const activeStep = progress >= 0.65 ? "03" : progress >= 0.35 ? "02" : "01";

      if (progressBarRef.current) {
        progressBarRef.current.style.width = `${progress * 100}%`;
      }

      if (activeStepRef.current) {
        activeStepRef.current.textContent = activeStep;
      }

      cardRefs.current.forEach((card, index) => {
        if (!card) {
          return;
        }

        const isVisible = progress >= processData[index].threshold;

        card.style.opacity = isVisible ? "1" : "0";
        card.style.transform = isVisible
          ? "translate3d(0, 0, 0) scale(1)"
          : "translate3d(0, 64px, 0) scale(0.95)";
      });
    };

    const handleScroll = () => {
      if (frameId) {
        return;
      }

      frameId = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }

      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    // MASSIVE WRAPPER - Base set to dark to blend with the black overlay
    <section ref={wrapperRef} id="process" className="relative w-full h-[240vh] sm:h-[280vh] md:h-[350vh] bg-[#0a1118]">
      
      {/* 1. STICKY INNER CONTAINER */}
      <div className="sticky top-0 w-full min-h-screen overflow-hidden flex flex-col justify-center px-4 sm:px-6 md:px-12 py-12 md:py-0 font-sans">
        
        {/* =========================================
            ARTISTIC BACKGROUND LAYER
            ========================================= */}
        {/* a. The Immersive Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/process_dnp1.avif"
            alt="Logistics Terminal Background"
            fill
            sizes="100vw"
            className="w-full h-full object-cover mix-blend-luminosity opacity-80"
          />
        </div>

        {/* b. The Slight Black Overlay (Letting the image breathe while ensuring text pops) */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#1E40AF]/70 via-[#0a1118]/40 to-[#CE0001]/45" />

        {/* c. Subtle Architectural Grid Lines - Reverted to white/light for dark background */}
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
        <div className="relative z-20 w-full max-w-[1400px] mx-auto flex flex-col gap-12 md:gap-24 mt-0 md:mt-[-5vh]">
          
          {/* =========================================
              TOP SECTION: HEADLINE & TIMELINE
              ========================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 justify-between items-start md:items-end">
            
            {/* Left Column: Label & Dynamic Headline */}
            <div className="lg:col-span-5 flex flex-col items-start gap-3 md:gap-4">
              
              {/* Dock Notifier - White text for dark bg */}
              <div className="flex items-center gap-3">
                <HexagonIcon className="text-white w-[16px] h-[16px]" />
                <span className="text-[14px] font-bold text-white tracking-[0.15em] uppercase">
                  WORK PROCESS
                </span>
              </div>

              {/* Editorial Headline - White text for dark bg */}
              <h2 className="text-[34px] sm:text-[44px] lg:text-[60px] font-normal leading-[1.05] tracking-[-0.04em] text-white">
                Our 3-step <br className="hidden sm:block" />
                work process
              </h2>
            </div>

            {/* Right Column: Horizonal Timeline */}
            <div className="lg:col-span-6 lg:col-start-7 flex flex-col items-start md:items-center justify-end pb-0 md:pb-4 relative z-30 w-full">
              
              {/* Timeline Track - Light translucent line for dark bg */}
              <div className="relative w-full max-w-[320px] md:max-w-none h-[2px] bg-[#1E40AF]/35 flex items-center justify-center rounded-full mt-2 md:mt-0">
                
                {/* Dynamic Center Circle Indicator - Signature Lime Green */}
                <div className="absolute w-[44px] h-[44px] md:w-[56px] md:h-[56px] bg-[#CE0001] rounded-full flex items-center justify-center shadow-[0_4px_24px_rgba(206,0,1,0.35)] transition-transform duration-300 z-10">
                  <div ref={activeStepRef} className="text-[16px] md:text-[20px] font-bold text-white tracking-tight leading-none">
                    01
                  </div>
                </div>

                {/* Scroll progress bar filling the line */}
                <div ref={progressBarRef} className="absolute left-0 top-0 h-full bg-[#1E40AF] rounded-full transition-all duration-[50ms]" style={{ width: "0%" }} />
              </div>
            </div>
            
          </div>

          {/* =========================================
              BOTTOM SECTION: SCROLL-REVEALED CARDS
              ========================================= */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {processData.map((step, index) => (
                <div 
                  key={step.id}
                  ref={(element) => {
                    cardRefs.current[index] = element;
                  }}
                  className="bg-white rounded-[20px] p-6 sm:p-7 lg:p-10 flex flex-col gap-4 sm:gap-5 md:gap-6 transition-all duration-[800ms] ease-out shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
                  style={{ opacity: 0, transform: "translate3d(0, 64px, 0) scale(0.95)" }}
                >
                  
                  {/* REVAMPED LABEL: Signature Green Capsule */}
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
      </div>
    </section>
  );
};

export default Process;
