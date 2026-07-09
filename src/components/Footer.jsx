"use client";

import Image from "next/image";
import { useState } from "react";

const logoImageProps = {
  src: "/images/dnp.png",
  width: 1538,
  height: 1022,
};

const CopyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-[14px] h-[14px]" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-[14px] h-[14px] text-green-400" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const CopyableRow = ({ label, value }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="flex items-center gap-3 text-white text-[14px] min-w-0 transition-all duration-300">
      <span className="text-white/45 font-medium min-w-[70px] uppercase tracking-wider text-[11px] shrink-0">{label}:</span>
      <span className="select-all font-medium whitespace-nowrap min-w-0 overflow-x-auto custom-scrollbar pr-2" title={value}>{value}</span>
      <button
        onClick={handleCopy}
        className="flex items-center justify-center w-5 h-5 rounded bg-white/5 border border-white/10 hover:bg-[#1E40AF] hover:border-[#1E40AF] text-[#c9c9c9] hover:text-white transition-all shrink-0 active:scale-95 cursor-pointer"
        title={`Copy ${label}`}
        aria-label={`Copy ${label}`}
      >
        {copied ? <CheckIcon /> : <CopyIcon />}
      </button>
    </div>
  );
};

const CopyableAddressRow = ({ label, value }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="flex items-start gap-3 text-white text-[14px] min-w-0 transition-all duration-300">
      <span className="text-white/45 font-medium min-w-[70px] uppercase tracking-wider text-[11px] shrink-0 mt-[3px]">{label}:</span>
      <span className="select-all font-medium min-w-0 line-clamp-3 break-normal leading-relaxed pr-2" title={value}>
        {value}
      </span>
      <button
        onClick={handleCopy}
        className="flex items-center justify-center w-5 h-5 rounded bg-white/5 border border-white/10 hover:bg-[#1E40AF] hover:border-[#1E40AF] text-[#c9c9c9] hover:text-white transition-all shrink-0 active:scale-95 cursor-pointer mt-[1px]"
        title={`Copy ${label}`}
        aria-label={`Copy ${label}`}
      >
        {copied ? <CheckIcon /> : <CopyIcon />}
      </button>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="w-full bg-[#f7f8f9] p-4 sm:p-6 md:p-8 font-sans">
      <div className="max-w-[1400px] mx-auto bg-[#111] rounded-[24px] md:rounded-[32px] p-6 sm:p-8 md:p-10 flex flex-col gap-8 md:gap-12 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 justify-between">
          <div className="lg:col-span-6 flex flex-col items-start">
            <a
              href="#home"
              className="flex items-center hover:opacity-75 transition-opacity duration-300"
            >
              <Image
                {...logoImageProps}
                alt="Logix Logo"
                unoptimized
                style={{ width: "auto" }}
                className="h-7 md:h-14 w-auto object-contain"
              />
            </a>

            <p className="mt-6 text-[15px] md:text-[16px] font-light text-[#a1a1a1] leading-[1.6] max-w-[380px]">
              Easily adapt to changes and scale your operations with our flexible infrastructure, designed to support your business growth.
            </p>
          </div>

          <div className="lg:col-span-5 lg:col-start-8 flex flex-col gap-8">
            <div className="grid grid-cols-2 gap-y-4 gap-x-12">
              <div className="flex flex-col gap-3">
                <a href="#home" className="text-[15px] font-normal text-[#f4f4f5] hover:text-[#1E40AF] transition-colors">Home</a>
                <a href="#about" className="text-[15px] font-normal text-[#f4f4f5] hover:text-[#CE0001] transition-colors">About us</a>
              </div>
              <div className="flex flex-col gap-3">
                <a href="#services" className="text-[15px] font-normal text-[#f4f4f5] hover:text-[#1E40AF] transition-colors">Services</a>
                <a href="#contact" className="text-[15px] font-normal text-[#f4f4f5] hover:text-[#CE0001] transition-colors">Contact us</a>
              </div>
            </div>

            <div className="flex flex-col gap-3.5 text-[14px] text-[#c9c9c9] mt-2">
              <CopyableRow label="Phone" value="+91 8750939543" />
              <CopyableRow label="Email" value="info@dnplogistic.co" />
              <CopyableAddressRow label="Address" value="8/2 East Guru Angad Nagar, Laxmi Nagar, East Delhi, Delhi-110092, India" />
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-6 w-full mt-2">
          <a
            href="https://www.asofttechnologies.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white px-4 py-2 rounded-md hover:bg-gray-100 transition-colors duration-300 cursor-pointer"
          >
            <span className="text-[12px] font-bold text-black tracking-tight">
              Crafted by Asoft
            </span>
          </a>

          <span className="text-[13px] font-light text-[#666]">
            © 2026 DNP Inc. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
