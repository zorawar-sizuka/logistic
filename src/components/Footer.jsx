import Image from "next/image";

const logoImageProps = {
  src: "/images/dnp.png",
  width: 1538,
  height: 1022,
};

// Reusable SVG for the arrow inside the Submit button
const ArrowUpRightIcon = ({ className = "w-[14px] h-[14px]" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const InstagramIcon = ({ className = "w-[18px] h-[18px]" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

const LinkedInIcon = ({ className = "w-[18px] h-[18px]" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="16" height="16" rx="3" />
    <path d="M8 10v6" />
    <path d="M8 8.2v.1" />
    <path d="M11 16v-3.4c0-1.1.7-1.6 1.5-1.6s1.5.5 1.5 1.6V16" />
  </svg>
);

const XIcon = ({ className = "w-[18px] h-[18px]" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M4 4h3.9l4.1 5.4L16.9 4H20l-5.9 8L20 20h-3.9l-4.1-5.4L7.1 20H4l5.9-8L4 4Z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="w-full bg-[#f7f8f9] p-4 sm:p-6 md:p-8 font-sans">
      <div className="max-w-[1400px] mx-auto bg-[#111] rounded-[24px] md:rounded-[32px] p-8 sm:p-12 md:p-16 flex flex-col gap-16 md:gap-24 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 justify-between">
          <div className="lg:col-span-6 flex flex-col items-start">
            <a
              href="#home"
              className="flex items-center hover:opacity-75 transition-opacity duration-300"
            >
              <Image
                {...logoImageProps}
                alt="Logix Logo"
                style={{ width: "auto", height: "auto" }}
                className="h-7 md:h-14 w-auto object-contain"
              />
            </a>

            <p className="mt-8 text-[15px] md:text-[16px] font-light text-[#a1a1a1] leading-[1.6] max-w-[380px]">
              Easily adapt to changes and scale your operations with our flexible infrastructure, designed to support your business growth.
            </p>
          </div>

          <div className="lg:col-span-5 lg:col-start-8 flex flex-col gap-10">
            <div className="grid grid-cols-2 gap-y-5 gap-x-12">
              <div className="flex flex-col gap-5">
                <a href="#home" className="text-[15px] font-normal text-[#f4f4f5] hover:text-[#1E40AF] transition-colors">Home</a>
                <a href="#about" className="text-[15px] font-normal text-[#f4f4f5] hover:text-[#CE0001] transition-colors">About us</a>
              </div>
              <div className="flex flex-col gap-5">
                <a href="#services" className="text-[15px] font-normal text-[#f4f4f5] hover:text-[#1E40AF] transition-colors">Services</a>
                <a href="#contact" className="text-[15px] font-normal text-[#f4f4f5] hover:text-[#CE0001] transition-colors">Contact us</a>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-[14px] text-[#c9c9c9]">
              <div className="rounded-[18px] border border-white/8 bg-white/5 px-4 py-3">
                <div className="text-[10px] uppercase tracking-[0.16em] text-white/45 mb-1">Phone</div>
                <div className="text-white">+91 8750939543</div>
              </div>
              <div className="rounded-[18px] border border-white/8 bg-white/5 px-4 py-3">
                <div className="text-[10px] uppercase tracking-[0.16em] text-white/45 mb-1">Email</div>
                <div className="text-white break-all">info@dnplogistic.co</div>
              </div>
              <div className="rounded-[18px] border border-white/8 bg-white/5 px-4 py-3 sm:col-span-3 lg:col-span-1">
                <div className="text-[10px] uppercase tracking-[0.16em] text-white/45 mb-1">Address</div>
                <div className="text-white">8/2 East Guru Angad Nagar, Laxmi Nagar, East Delhi, Delhi-110092, India</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
          <div className="w-full max-w-[420px] flex flex-col gap-4">
            <h3 className="text-[18px] font-normal text-white tracking-tight">
              Subscribe our newsletter
            </h3>

            <div className="relative flex items-center bg-[#232323] rounded-full h-[58px] p-1.5 w-full border border-white/5 focus-within:border-white/10 transition-colors">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-transparent text-[15px] text-white w-full h-full px-5 outline-none placeholder:text-[#666] font-light"
              />
              <button 
                type="button"
                className="group h-full pl-6 pr-1.5 bg-[#1E40AF] hover:bg-[#CE0001] rounded-full flex items-center gap-3 transition-colors shrink-0"
              >
                  <span className="text-[12px] font-bold tracking-[0.1em] uppercase text-white">
                    Submit
                  </span>
                <div className="w-[34px] h-[34px] bg-white rounded-full flex items-center justify-center text-[#1E40AF] transition-transform duration-300 group-hover:rotate-45 group-hover:text-[#CE0001]">
                  <ArrowUpRightIcon />
                </div>
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-[18px] font-normal text-white tracking-tight">Follow us</h3>
            <div className="flex items-center gap-3">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#CE0001] hover:border-[#CE0001] transition-colors duration-300">
                <InstagramIcon />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#1E40AF] hover:border-[#1E40AF] transition-colors duration-300">
                <LinkedInIcon />
              </a>
              <a href="https://x.com" target="_blank" rel="noreferrer" className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition-colors duration-300">
                <XIcon />
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full lg:w-auto gap-6 lg:gap-12 mt-4 lg:mt-0">
            <span className="text-[13px] font-light text-[#666]">
              © 2026 DNP Inc. All rights reserved.
            </span>

            <div className="hidden md:flex items-center gap-2 bg-white px-4 py-2 rounded-md">
              <span className="text-[12px] font-bold text-black tracking-tight">
                Crafted by Asoft
              </span>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
