"use client"
import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

// Reusable SVG for the solid Hexagon marker (matches previous sections)
const HexagonIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M21 7.5V16.5L12 21L3 16.5V7.5L12 3L21 7.5Z" />
  </svg>
);

const Milestones = () => {
  // Setup Intersection Observer hook
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.3,    // Trigger when 30% of the section is visible
  });

  const milestoneData = [
    {
      id: 1,
      endValue: 1500,
      suffix: '+',
      description: 'Shipments managed successfully worldwide every month.'
    },
    {
      id: 2,
      endValue: 4000,
      suffix: '+',
      description: 'Business clients partners supported globally across industries.'
    },
    {
      id: 3,
      endValue: 98.9,
      suffix: '%',
      decimals: 1, // Required for the decimal in 98.9
      description: 'Customer satisfaction rate based on recent service audits.'
    }
  ];

  return (
    // Attaching the 'ref' to this section enables the observer
    // Background is a very subtle gray to separate from pure off-white About section
    <section ref={ref} id="milestones" className="w-full bg-slate-50 py-24 md:py-32 px-6 md:px-12 font-sans border-b border-slate-100">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row gap-16 md:gap-8 items-start md:items-center">
        
        {/* =========================================
            LEFT COLUMN: SECTION LABEL
            ========================================= */}
        <div className="flex md:w-[250px] shrink-0 items-center gap-3">
          <HexagonIcon className="text-[#111] w-[18px] h-[18px]" />
          <span className="text-[15px] font-medium text-[#111] tracking-wide whitespace-nowrap">
            Company Milestones
          </span>
        </div>

        {/* =========================================
            RIGHT COLUMN: DATA GRID (Animated)
            ========================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 grow pl-0 md:pl-16">
          {milestoneData.map((item) => (
            <div key={item.id} className="flex flex-col gap-4">
              
              {/* Massive Number Animation Block */}
              {/* Maintaining extreme negative tracking for premium feel */}
              <div className="text-[60px] sm:text-[72px] lg:text-[84px] font-medium tracking-[-0.04em] text-[#111] leading-none">
                {/* CountUp only executes when inView is true */}
                {inView ? (
                  <CountUp 
                    end={item.endValue} 
                    duration={2.5} 
                    separator="," 
                    decimals={item.decimals || 0}
                    decimal="."
                  />
                ) : (
                  // Initial static value before scroll trigger
                  item.decimals ? `0.0` : `0`
                )}
                <span className="text-[#737373] ml-1">{item.suffix}</span>
              </div>
              
              {/* Milestone Description Text */}
              <p className="text-[15px] md:text-[16px] text-[#737373] font-light leading-relaxed max-w-[320px]">
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