
import Image from "next/image";

// Reusable SVG for the sharp arrow
const ArrowUpRightIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

// Reusable SVG for the solid Hexagon marker
const HexagonIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M21 7.5V16.5L12 21L3 16.5V7.5L12 3L21 7.5Z" />
  </svg>
);

const About = () => {
  return (
    <section id="about" className="relative w-full bg-[#f7f8f9] py-24 md:py-32 px-6 md:px-12 font-sans border-b border-black/[0.03] overflow-hidden">
      <div id="company" className="absolute top-0" aria-hidden="true" />
      
      {/* Subtle Architectural Grid Background */}
      <div className="absolute inset-0 z-0 grid grid-cols-2 md:grid-cols-4 pointer-events-none w-full max-w-[1400px] mx-auto opacity-100">
        <div className="border-r border-black/[0.03] h-full" />
        <div className="border-r border-black/[0.03] h-full relative">
            <div className="absolute -right-[5px] top-[10%] text-black/[0.08] text-lg font-light leading-none">+</div>
        </div>
        <div className="border-r border-black/[0.03] h-full hidden md:block" />
        <div className="h-full hidden md:block relative">
            <div className="absolute -left-[5px] bottom-[10%] text-black/[0.08] text-lg font-light leading-none">+</div>
        </div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto flex flex-col">
        
        {/* =========================================
            TOP SECTION: TYPOGRAPHY & DOCK CARDS
            ========================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Left Column: Label & CTA */}
          <div className="lg:col-span-3 flex flex-col justify-between items-start h-full">
            <div className="hidden lg:flex items-center gap-3">
              <HexagonIcon className="text-[#111] w-[14px] h-[14px] fill-transparent stroke-black stroke-[2]" />
              <span className="text-[14px] font-bold text-[#111] tracking-[0.15em] uppercase">
                About us
              </span>
            </div>
            
            <div className="mt-4 lg:mt-auto w-full md:w-auto order-last lg:order-none">
              <a 
                href="#company" 
                className="group flex items-center justify-between gap-4 bg-[#1E40AF] hover:bg-[#CE0001] text-white pl-8 pr-3 py-3 rounded-full text-[15px] font-medium transition-all duration-300 w-full md:w-auto shadow-sm"
              >
                Discover our company
                  <div className="w-[42px] h-[42px] bg-white/10 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <ArrowUpRightIcon className="w-[18px] h-[18px] text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
              </a>
            </div>
          </div>

          {/* Right Column: Massive Editorial Typography & Capsule Highlight Framework */}
          <div className="lg:col-span-9 lg:pl-12">
            
            <div className="flex lg:hidden items-center gap-3 mb-6">
              <HexagonIcon className="text-[#111] w-[14px] h-[14px] fill-transparent stroke-black stroke-[1.5]" />
              <span className="text-[14px] font-bold text-[#111] tracking-[0.15em] uppercase">
                About us
              </span>
            </div>

            {/* FIXED HEADING: Replaced architectural angle shapes with clean capsule dock structures */}
            <h2 className="text-[34px] sm:text-[52px] lg:text-[58px] font-normal leading-[1.5] sm:leading-[1.45] lg:leading-[1.42] tracking-[-0.03em] text-[#737373]">
              We specialize in providing{' '}
              
              {/* First Capsule Dock Highlight */}
              <span className="inline-flex items-center bg-[#1E40AF]/10 border border-[#1E40AF]/10 px-4 sm:px-5 py-1 rounded-full text-[#1E40AF] font-medium my-1 align-middle whitespace-nowrap">
                seamless and reliable
              </span>
              
              {' '}logistics solutions, ensuring businesses stay ahead with{' '} 
              {' '}efficient transportation & supply{' '}
              
              {/* Second Capsule Dock Highlight */}
              <span className="inline-flex items-center bg-[#CE0001]/10 border border-[#CE0001]/10 px-4 sm:px-5 py-1 rounded-full text-[#CE0001] font-medium my-1 align-middle">
               chain management.
              </span>
            </h2>
            
            <p className="mt-8 md:mt-10 text-[16px] md:text-[19px] text-[#737373] font-light leading-relaxed max-w-4xl tracking-wide">
              With years of industry experience, we have built a reputation for delivering excellence through innovative logistics strategies, cutting-edge technology, and a commitment to customer satisfaction.
            </p>

            {/* Horizontal Array of Dock Cards */}
            <div className="mt-10 md:mt-12 flex flex-wrap items-center gap-3 sm:gap-4">
              {[
                { id: 1, title: 'On-Time Deliveries' },
                { id: 2, title: 'Cost-Effective Solutions' },
                { id: 3, title: 'Scalable Services' }
              ].map((item) => (
                <div 
                  key={item.id} 
                  className="group bg-white rounded-full p-1.5 pr-5 sm:p-2 sm:pr-6 flex items-center gap-3 sm:gap-4 w-fit shadow-sm border border-black/[0.04] hover:border-black/10 hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-default"
                >
                  <div className="w-[36px] h-[36px] sm:w-[42px] sm:h-[42px] bg-[#f7f8f9] group-hover:bg-[#d74040] group-hover:text-white rounded-full flex items-center justify-center text-[#111] text-[13px] sm:text-[14px] font-semibold transition-colors duration-300">
                    0{item.id}
                  </div>
                  <span className="text-[13px] sm:text-[14px] md:text-[15px] font-medium text-[#111] transition-transform duration-300">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* =========================================
            BOTTOM SECTION: FULL-WIDTH MEDIA
            ========================================= */}
        <div className="w-full h-[400px] sm:h-[500px] lg:h-[620px] rounded-[24px] sm:rounded-[32px] overflow-hidden relative shadow-[0_20px_40px_rgba(0,0,0,0.08)] group cursor-crosshair mt-16 md:mt-24">
          
          <Image
            src="/images/about_dnp.avif"
            alt="Logistics Truck on Highway"
            fill
            sizes="(max-width: 640px) 100vw, 1400px"
            className="w-full h-full object-cover transition-transform duration-[1.5s] md:group-hover:scale-[1.05]"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-700" />

          {/* 1. Bottom-Left Card */}
          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 bg-white/10 backdrop-blur-md border border-white/20 p-5 md:p-8 rounded-[20px] max-w-[220px] md:max-w-[260px] transition-all duration-700 ease-out delay-100
                          opacity-100 translate-y-0 md:opacity-0 md:translate-y-8 md:group-hover:translate-y-0 md:group-hover:opacity-100">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-2 h-2 rounded-full bg-[#1E40AF] animate-pulse" />
              <span className="text-white/80 text-[10px] md:text-[11px] tracking-[0.15em] uppercase font-bold">Network Status</span>
            </div>
            <div className="text-white text-[32px] md:text-[38px] leading-none font-normal mb-1">99.8%</div>
            <div className="text-white/70 text-[13px] md:text-[14px] leading-snug font-medium mt-2">
              Success rate across all global transit corridors.
            </div>
          </div>

          {/* 2. Top-Right Card */}
          <div className="hidden sm:block absolute top-6 right-6 md:top-10 md:right-10 bg-white/10 backdrop-blur-md border border-white/20 p-5 md:p-8 rounded-[20px] max-w-[220px] md:max-w-[260px] transition-all duration-700 ease-out delay-200
                          sm:opacity-100 sm:translate-y-0 md:opacity-0 md:-translate-y-8 md:group-hover:translate-y-0 md:group-hover:opacity-100">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-2 h-2 rounded-full bg-[#CE0001] animate-pulse" />
              <span className="text-white/80 text-[10px] md:text-[11px] tracking-[0.15em] uppercase font-bold">Active Fleet</span>
            </div>
            <div className="text-white text-[32px] md:text-[38px] leading-none font-normal mb-1">2,450+</div>
            <div className="text-white/70 text-[13px] md:text-[14px] leading-snug font-medium mt-2">
              Vehicles operating globally in real-time.
            </div>
          </div>

          {/* 3. Bottom-Right Card */}
          <div className="hidden lg:block absolute bottom-10 right-10 bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-[20px] max-w-[260px] transition-all duration-700 ease-out delay-300
                          opacity-0 translate-y-8 group-hover:translate-y-0 group-hover:opacity-100">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-2 h-2 rounded-full bg-[#1E40AF] animate-pulse" />
              <span className="text-white/80 text-[11px] tracking-[0.15em] uppercase font-bold">Global Reach</span>
            </div>
            <div className="text-white text-[38px] leading-none font-normal mb-1">120+</div>
            <div className="text-white/70 text-[14px] leading-snug font-medium mt-2">
              Countries served across 6 interconnected continents.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
