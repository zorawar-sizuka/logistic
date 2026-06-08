import Image from "next/image";

const ContactForm = () => {
  return (
    // Off-white section background so the pure white form card pops
    <section id="contact" className="relative w-full min-h-screen bg-[#f7f8f9] flex items-center justify-center py-12 md:py-24 font-sans overflow-hidden">
      
      {/* Subtle Architectural Grid */}
      <div className="absolute inset-0 z-0 grid grid-cols-4 pointer-events-none w-full max-w-[1400px] mx-auto opacity-100">
        <div className="border-r border-black/[0.04] h-full relative">
            <div className="absolute -right-[5px] top-[40%] text-black/[0.15] text-lg font-light leading-none">+</div>
        </div>
        <div className="border-r border-black/[0.04] h-full relative">
            <div className="absolute -right-[5px] top-[70%] text-black/[0.15] text-lg font-light leading-none">+</div>
        </div>
        <div className="border-r border-black/[0.04] h-full"></div>
        <div className="h-full"></div>
      </div>

      {/* MAIN CONTAINER: High-Contrast 2-Card Layout */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
        
        {/* =========================================
            LEFT CARD: DARK IMAGE ANCHOR
            ========================================= */}
        <div className="lg:col-span-5 relative rounded-[24px] overflow-hidden flex flex-col justify-between p-8 md:p-10 shadow-2xl min-h-[400px]">
          
          {/* Card Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/services/ser_dnp4.avif"
              alt="Industrial Warehouse Background"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="w-full h-full object-cover opacity-90"
            />
            {/* Dark gradient overlay so the white text pops aggressively */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1118] via-[#0a1118]/80 to-[#0a1118]/40" />
          </div>

          {/* Top Badge */}
          <div className="relative z-10 bg-white/10 backdrop-blur-md border border-white/20 w-fit px-3 py-1.5 rounded-[4px]">
            <span className="text-[11px] font-bold text-white tracking-[0.15em] uppercase">
              Contact Us
            </span>
          </div>

          {/* Bottom Content (Text & Contact Info) */}
          <div className="relative z-10 flex flex-col gap-6 mt-16">
            <h2 className="text-[32px] sm:text-[36px] lg:text-[44px] font-normal leading-[1.15] tracking-[-0.03em] text-white">
              From planning to delivery, we make sure every cargo moves safely, <span className="text-white/50">on schedule, and with full control.</span>
            </h2>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <div className="bg-[#1E40AF] text-white px-5 py-2.5 rounded-full text-[13px] md:text-[14px] font-bold tracking-wide flex items-center gap-2 shadow-lg w-fit">
                <span className="text-white/60">+</span> +91 8750939543
              </div>
              <a href="mailto:transport@logix.com" className="text-[14px] md:text-[15px] font-medium text-white hover:text-[#CE0001] transition-colors tracking-wide underline underline-offset-4 decoration-white/30 hover:decoration-[#CE0001]">
                info@dnplogistic.co
              </a>
            </div>
          </div>
        </div>

        {/* =========================================
            RIGHT CARD: CRISP WHITE FORM
            ========================================= */}
        <div className="lg:col-span-7 flex flex-col h-full">
          {/* Pure white card with distinct shadow and subtle border */}
          <div className="bg-white border border-gray-200 rounded-[24px] p-6 lg:p-8 shadow-[0_12px_40px_rgba(0,0,0,0.06)] relative overflow-hidden h-full flex flex-col justify-center">
            
            <form className="relative z-10 flex flex-col gap-5">
              
              {/* Shipment Details Group */}
              <div>
                <h3 className="text-[10px] font-bold text-[#1E40AF] tracking-[0.15em] uppercase mb-3">
                  Shipment Details
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                   <input type="text" placeholder="Type of Goods" className="w-full h-[46px] px-4 rounded-[4px] bg-gray-50 border border-gray-200 text-[14px] text-black placeholder:text-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent transition-all" />
                   <input type="text" placeholder="Weight / Volume" className="w-full h-[46px] px-4 rounded-[4px] bg-gray-50 border border-gray-200 text-[14px] text-black placeholder:text-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent transition-all" />
                   <input type="text" placeholder="Pickup Location" className="w-full h-[46px] px-4 rounded-[4px] bg-gray-50 border border-gray-200 text-[14px] text-black placeholder:text-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent transition-all" />
                   <input type="text" placeholder="Delivery Location" className="w-full h-[46px] px-4 rounded-[4px] bg-gray-50 border border-gray-200 text-[14px] text-black placeholder:text-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent transition-all" />
                </div>
              </div>

              {/* Contact Information Group */}
              <div>
                <h3 className="text-[10px] font-bold text-[#1E40AF] tracking-[0.15em] uppercase mb-3">
                  Contact Information
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                   <input type="text" placeholder="Full Name" className="w-full h-[46px] px-4 rounded-[4px] bg-gray-50 border border-gray-200 text-[14px] text-black placeholder:text-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent transition-all" />
                   <input type="tel" placeholder="Phone Number" className="w-full h-[46px] px-4 rounded-[4px] bg-gray-50 border border-gray-200 text-[14px] text-black placeholder:text-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent transition-all" />
                </div>
              </div>

              {/* Shipment Notes Group */}
              <div>
                <h3 className="text-[10px] font-bold text-[#1E40AF] tracking-[0.15em] uppercase mb-3">
                  Shipment Notes
                </h3>
                <textarea 
                  placeholder="Additional details..." 
                  className="w-full min-h-[70px] p-4 rounded-[4px] bg-gray-50 border border-gray-200 text-[14px] text-black placeholder:text-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent transition-all resize-none"
                ></textarea>
              </div>

              {/* Footer / Submit */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-2">
                <p className="text-[9px] font-bold text-gray-400 tracking-[0.1em] uppercase max-w-[200px]">
                  By submitting, you agree to be contacted.
                </p>
                
                <button 
                  type="submit" 
                  className="w-full sm:w-fit bg-[#111] hover:bg-[#333] text-white text-[12px] font-bold tracking-[0.1em] uppercase px-8 py-3.5 rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 transition-all duration-300"
                >
                  Get Quote
                </button>
              </div>

            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactForm;
