"use client";
import { useEffect, useRef, useState } from "react";
import CountUp from 'react-countup';

// Reusable SVG for the solid Hexagon marker (matches previous sections)
const HexagonIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M21 7.5V16.5L12 21L3 16.5V7.5L12 3L21 7.5Z" />
  </svg>
);

const milestoneData = [
  {
    id: 1,
    prefix: "01 //",
    endValue: 1500,
    suffix: "+",
    label: "MONTHLY VOLUME",
    description: "Shipments managed successfully worldwide every month.",
  },
  {
    id: 2,
    prefix: "02 //",
    endValue: 4000,
    suffix: "+",
    label: "ENTERPRISE TRUST",
    description: "Business clients partners supported globally across industries.",
  },
  {
    id: 3,
    prefix: "03 //",
    endValue: 98.9,
    suffix: "%",
    decimals: 1,
    label: "PERFORMANCE RATE",
    description: "Customer satisfaction rate based on recent service audits.",
  },
];

const Milestones = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        setIsVisible(true);
        observer.disconnect();
      },
      { threshold: 0.2 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="milestones" 
      className="w-full bg-white py-28 md:py-36 px-6 md:px-12 font-sans overflow-hidden relative border-b border-black/[0.03]"
    >
      {/* Premium Blueprint Grid Layer for a Light Context Shift */}
      <div className="absolute inset-0 z-0 opacity-[0.4] pointer-events-none" 
           style={{ 
             backgroundImage: `radial-gradient(circle, #e2e8f0 1px, transparent 1px), linear-gradient(to right, #f1f5f9 1px, transparent 1px), linear-gradient(to bottom, #f1f5f9 1px, transparent 1px)`,
             backgroundSize: '24px 24px, 48px 48px, 48px 48px',
             backgroundPosition: 'center center'
           }} 
      />
      
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-8 items-start relative z-10">
        
        {/* =========================================
            LEFT COLUMN: SECTION LABEL BLOCK
            ========================================= */}
        <div className="flex lg:w-[280px] shrink-0 items-center gap-3">
          <HexagonIcon className="text-[#1E40AF] w-4 h-4 fill-none stroke-[#1E40AF] stroke-[2.5]" />
          <span className="text-[12px] font-bold text-[#111] tracking-[0.2em] uppercase">
            Company&apos;s Milestone
          </span>
        </div>

        {/* =========================================
            RIGHT COLUMN: TECHNICAL DATA GRID
            ========================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 grow border-t border-black/[0.06] md:border-t-0 md:border-l border-black/[0.06] pl-0 md:pl-6 lg:pl-12 xl:pl-16">
          {milestoneData.map((item, index) => (
            <div 
              key={item.id} 
              className={`flex flex-col gap-6 pt-10 pb-10 md:py-4 md:px-4 lg:px-8 border-b border-black/[0.06] md:border-b-0 ${
                index !== 2 ? 'md:border-r border-black/[0.06]' : ''
              } transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]`}
              style={{ 
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                opacity: isVisible ? 1 : 0,
                transitionDelay: `${index * 150}ms`
              }}
            >
              {/* Technical Monospace Prefix Label */}
              <div className="text-[10px] font-mono tracking-widest text-[#CE0001] font-semibold flex items-center gap-1.5">
                <span>{item.prefix}</span> 
                <span className="text-[#111]/40 ml-1 font-sans font-bold">{item.label}</span>
              </div>
              
              {/* Massive Minimalist Numbers */}
              <div className="text-[56px] sm:text-[68px] md:text-[44px] lg:text-[60px] xl:text-[76px] font-light tracking-[-0.04em] text-[#111] leading-none flex items-baseline">
                {isVisible ? (
                  <CountUp 
                    end={item.endValue} 
                    duration={3} 
                    separator="," 
                    decimals={item.decimals || 0}
                    decimal="."
                  />
                ) : (
                  item.decimals ? `0.0` : `0`
                )}
                <span className="text-[#111]/25 font-light ml-0.5 text-[28px] md:text-[22px] lg:text-[32px] xl:text-[40px] select-none">
                  {item.suffix}
                </span>
              </div>
              
              {/* Clean Minimal Statement Description */}
              <p className="text-[14px] lg:text-[15px] text-[#555] font-normal leading-relaxed max-w-[280px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Milestones;
