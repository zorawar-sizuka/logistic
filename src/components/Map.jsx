
"use client";

import Image from "next/image";
import { useState } from "react";

const logoImageProps = {
  src: "/images/dnp.png",
  width: 1538,
  height: 1022,
};

// Reusable Hexagon Icon for UI elements
const HexagonIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M21 7.5V16.5L12 21L3 16.5V7.5L12 3L21 7.5Z" />
  </svg>
);

// Map Data: Well-spaced nodes equipped with premium, readable landscape trade images
const networkData = [
  {
    id: 'na',
    continent: 'North America',
    x: '20%',  
    y: '33%',
    countriesSupported: 3,
    align: 'right', 
    thumb: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=200&q=80', // Clear US Gateway Skyline
    countries: ['United States', 'Canada', 'Mexico']
  },
  {
    id: 'sa',
    continent: 'South America',
    x: '30%', 
    y: '68%',
    countriesSupported: 12,
    align: 'right',
    thumb: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=200&q=80', // Vibrant LATAM Infrastructure
    countries: ['Brazil', 'Argentina', 'Chile', 'Colombia', 'Peru', 'Venezuela', 'Ecuador', 'Bolivia', 'Paraguay', 'Uruguay', 'Guyana', 'Suriname']
  },
  {
    id: 'eu',
    continent: 'Europe',
    x: '52%', 
    y: '28%',
    countriesSupported: 42,
    align: 'left', 
    thumb: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=200&q=80', // Modern Euro Architecture
    countries: ['France', 'Germany', 'Italy', 'Spain', 'UK', 'Sweden', 'Norway', 'Austria', 'Belgium', 'Netherlands', 'Ireland', 'Portugal', 'Greece', 'Switzerland', 'Denmark', 'Finland', 'Czech Republic']
  },
  {
    id: 'af',
    continent: 'Africa',
    x: '53%', 
    y: '56%',
    countriesSupported: 24,
    align: 'right',
    thumb: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=200&q=80', // Distinct Regional Landscape
    countries: ['South Africa', 'Nigeria', 'Kenya', 'Egypt', 'Morocco', 'Ghana', 'Ethiopia', 'Tanzania', 'Uganda', 'Senegal', 'Ivory Coast', 'Angola']
  },
  {
    id: 'as',
    continent: 'Asia',
    x: '74%', 
    y: '34%',
    countriesSupported: 35,
    align: 'left',
    thumb: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=200&q=80', // Illuminating Asian Port City
    countries: ['China', 'Japan', 'India', 'South Korea', 'Singapore', 'Vietnam', 'Thailand', 'Malaysia', 'Indonesia', 'Philippines', 'Taiwan', 'UAE', 'Saudi Arabia']
  },
  {
    id: 'oc',
    continent: 'Oceania',
    x: '84%', 
    y: '74%',
    countriesSupported: 4,
    align: 'left',
    thumb: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=200&q=80', // Landmark Oceania Coastal Vista
    countries: ['Australia', 'New Zealand', 'Papua New Guinea', 'Fiji']
  }
];

const Map = () => {
  const [activeNode, setActiveNode] = useState('na');
  const activeRegionData = networkData.find(item => item.id === activeNode) || networkData[0];
  const handleActiveNodeChange = (regionId) => {
    setActiveNode((currentNode) => (currentNode === regionId ? currentNode : regionId));
  };

  return (
    <section className="relative w-full min-h-screen bg-[#fefefe] flex items-center justify-center py-20 md:py-32 font-sans overflow-hidden border-b border-black/[0.03]">
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 flex flex-col gap-12 lg:gap-20">
        
        {/* =========================================
            TOP ROW: PREMIUM HEADER DECK
            ========================================= */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 w-full">
          <div className="flex flex-col items-start max-w-3xl">
            <div className="flex items-center gap-3 mb-5">
              <HexagonIcon className="text-[#1E40AF] w-4 h-4 fill-none stroke-[#1E40AF] stroke-[2]" />
              <span className="text-[14px] font-bold text-black tracking-[0.15em] uppercase">
                Global Logistics Network
              </span>
            </div>

            <h2 className="text-[34px] sm:text-[48px] lg:text-[56px] font-normal leading-[1.4] sm:leading-[1.35] lg:leading-[1.3] tracking-[-0.03em] text-[#111]">
              <span className="inline-block bg-[#1E40AF]/10 text-[#1E40AF] px-3 sm:px-4 py-0.5 rounded-[12px] mr-2 my-1">Connecting</span> 
              a world of seamless 
              <span className="inline-block bg-[#CE0001]/10 text-[#CE0001] px-3 sm:px-4 py-0.5 rounded-[12px] mx-2 my-1">supply chain</span> 
              solutions.
            </h2>
            
            <p className="text-[15px] text-[#555] font-normal leading-relaxed max-w-xl mt-6 sm:mt-8 md:mt-10">
              With years of industry experience, we have built a reputation for delivering excellence through innovative logistics strategies, cutting-edge technology, and a commitment to customer satisfaction.
            </p>
          </div>

          <button type="button" className="group hidden sm:flex shrink-0 items-center gap-4 bg-[#f7f8f9] border border-black/[0.05] hover:border-[#1E40AF] hover:bg-[#1E40AF] hover:text-white text-[#111] px-6 py-3 rounded-full text-[14px] font-medium transition-all duration-300">
            View detailed network map
            <div className="w-[30px] h-[30px] bg-[#111] group-hover:bg-white rounded-full flex items-center justify-center transition-all duration-300">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="stroke-white group-hover:stroke-[#1E40AF] transition-colors" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="19" x2="19" y2="5"></line>
                <polyline points="9 5 19 5 19 15"></polyline>
              </svg>
            </div>
          </button>
        </div>

        {/* =========================================
            BOTTOM ROW: FULL-WIDTH MAP ENGINE
            ========================================= */}
        <div className="w-full relative">
          <div className="relative w-full aspect-[4/3] md:aspect-[2/1] lg:aspect-[2.2/1] rounded-[24px] overflow-visible select-none flex items-center justify-center">
            
            <Image
              src="/images/worldmap.jpg"
              alt="World Logistics Map"
              fill
              priority
              sizes="100vw"
              className="absolute inset-0 w-full h-full object-contain pointer-events-none opacity-90 mix-blend-darken"
            />

            {networkData.map((region) => (
              <div 
                key={region.id}
                className="absolute"
                style={{ top: region.y, left: region.x, zIndex: activeNode === region.id ? 50 : 20 }}
              >
                
                {/* HIGH-FIDELITY MAP PIN DROPDOWN ANCHOR */}
                <button
                  type="button"
                  aria-label={`View ${region.continent} logistics coverage`}
                  aria-pressed={activeNode === region.id}
                  className="relative flex flex-col items-center cursor-pointer group/pin select-none border-0 bg-transparent p-0"
                  onMouseEnter={() => handleActiveNodeChange(region.id)}
                  onFocus={() => handleActiveNodeChange(region.id)}
                  onClick={() => handleActiveNodeChange(region.id)}
                  style={{ transform: 'translate(-50%, -85%)' }} 
                >
                  
                  {/* Dynamic Pulsing Base Glow behind the Pin Head */}
                  <div className={`absolute top-0 w-14 h-14 md:w-20 md:h-20 rounded-full animate-ping pointer-events-none transition-colors duration-500 ${
                    activeNode === region.id ? 'bg-[#CE0001]/25' : 'bg-[#1E40AF]/10'
                  }`} />

                  {/* The Map Pin Shape Body via vector-drop shadows (No square box layouts) */}
                  <div className={`relative flex items-center justify-center w-14 h-14 md:w-20 md:h-20 rounded-full p-0.5 bg-white shadow-[0_12px_24px_rgba(0,0,0,0.16)] border transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    activeNode === region.id 
                      ? 'border-[#CE0001] bg-[#CE0001] scale-110 shadow-[0_16px_32px_rgba(206,0,1,0.25)]' 
                      : 'border-black/[0.08] group-hover/pin:border-[#1E40AF] group-hover/pin:scale-105'
                  }`}>
                    
                    {/* Generous High-Decent Image Frame Inside Pin Head */}
                    <div className="w-full h-full rounded-full overflow-hidden bg-gray-100 relative z-10">
                      <Image
                        src={region.thumb}
                        alt={region.continent}
                        unoptimized
                        fill
                        sizes="(max-width: 768px) 56px, 80px"
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/pin:scale-110"
                      />
                      <div className={`absolute inset-0 transition-opacity duration-300 ${
                        activeNode === region.id ? 'bg-transparent' : 'bg-black/5 group-hover/pin:bg-transparent'
                      }`} />
                    </div>

                    {/* True Map Pin Bottom Triangular Point Spur */}
                    <div className={`absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 bg-white border-r border-b transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      activeNode === region.id 
                        ? 'bg-[#CE0001] border-[#CE0001]' 
                        : 'border-black/[0.08] group-hover/pin:border-[#1E40AF]'
                    }`} />
                  </div>

                  {/* Minimal Precision Target Ring directly on the coordinates beneath the pin */}
                  <div className="w-2 h-2 mt-2.5 rounded-full bg-white border-2 transition-all duration-500 shadow-sm"
                       style={{ 
                         borderColor: activeNode === region.id ? '#CE0001' : '#1E40AF',
                         transform: activeNode === region.id ? 'scale(1.3)' : 'scale(1)'
                       }} 
                  />
                </button>

                {/* =========================================
                    DESKTOP DISPLAY DECK: GLASSMORPHIC TOOLTIPS 
                    ========================================= */}
                <div 
                  className={`hidden lg:block absolute w-[320px] bg-white/95 backdrop-blur-xl border border-black/5 p-6 rounded-[20px] shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                    ${region.align === 'right' ? 'left-[50px]' : 'right-[50px]'}
                    ${activeNode === region.id ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}
                  style={{ 
                    top: '-40px',
                  }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <HexagonIcon className="text-[#1E40AF] w-3 h-3 fill-none stroke-[#1E40AF] stroke-[2]" />
                    <span className="text-[10px] font-bold text-black/40 tracking-[0.15em] uppercase">
                      {region.continent}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-4 mb-4">
                    <h3 className="text-[24px] font-medium leading-[1.1] tracking-tight text-[#111]">
                      {region.countriesSupported} countries supported.
                    </h3>
                    <Image
                      {...logoImageProps}
                      alt="DNP Stamp"
                      unoptimized
                      style={{ height: "auto" }}
                      className="w-12 h-auto object-contain shrink-0 rotate-[-12deg]"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <span className="text-[9px] font-bold text-black/30 tracking-[0.1em] uppercase">
                      Key Regional Gateways:
                    </span>
                    <div className="max-h-[80px] overflow-y-auto custom-scrollbar pr-1">
                      <p className="text-[13px] text-[#555] leading-relaxed font-normal">
                        {region.countries.join(', ')}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* =========================================
              MOBILE DISPLAY DECK: HORIZONTAL SWIPE CAROUSEL 
              ========================================= */}
          <div className="block lg:hidden w-full mt-10 md:mt-16">
            <div className="flex items-center gap-2 overflow-x-auto custom-scrollbar pb-3 mb-4 -mx-4 px-4 snap-x">
              {networkData.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => handleActiveNodeChange(item.id)}
                  className={`px-4 py-2 rounded-full text-[13px] font-medium tracking-wide whitespace-nowrap snap-center transition-all duration-300 shrink-0 border ${
                    activeNode === item.id 
                      ? 'bg-[#1E40AF] text-white border-[#1E40AF]' 
                      : 'bg-[#f7f8f9] text-[#555] border-black/[0.05]'
                  }`}
                >
                  {item.continent}
                </button>
              ))}
            </div>

            <div className="w-full bg-[#f7f8f9] border border-black/[0.05] p-5 rounded-[20px] transition-all duration-300">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#CE0001]" />
                <span className="text-[11px] font-bold text-black/40 tracking-[0.1em] uppercase">
                  {activeRegionData.continent} Operational Hub
                </span>
              </div>
              
              <div className="flex items-center justify-between gap-4 mb-3">
                <h4 className="text-[22px] font-normal tracking-tight text-[#111]">
                  {activeRegionData.countriesSupported} Active Trade Routes
                </h4>
                <Image
                  {...logoImageProps}
                  alt="DNP Stamp"
                  unoptimized
                  style={{ height: "auto" }}
                  className="w-10 h-auto object-contain shrink-0 rotate-[-12deg]"
                />
              </div>

              <div className="p-3 bg-white rounded-[12px] border border-black/[0.03]">
                <span className="text-[9px] font-bold text-black/30 tracking-[0.05em] uppercase block mb-1">
                  Connected Trade Centers:
                </span>
                <p className="text-[13px] text-[#555] leading-relaxed">
                  {activeRegionData.countries.join(', ')}
                </p>
              </div>
            </div>
          </div>

         </div>
      </div>
    </section>
  );
};

export default Map;
