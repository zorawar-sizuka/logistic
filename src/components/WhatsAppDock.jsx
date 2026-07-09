"use client";

const HeadsetIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-[14px] h-[14px]">
    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.966a9.9 9.9 0 00-6.98-2.879c-5.443 0-9.866 4.372-9.87 9.802 0 1.714.462 3.39 1.337 4.842l-.99 3.612 3.704-.963zm10.741-5.6c-.279-.14-1.65-.81-1.905-.903-.255-.094-.441-.14-.627.14-.186.278-.72.903-.882 1.087-.162.186-.325.21-.604.07-2.736-1.371-3.486-2.482-4.113-3.567-.162-.278-.016-.429.123-.568.125-.125.279-.325.419-.487.14-.162.186-.278.279-.463.093-.186.046-.347-.023-.487-.069-.14-.627-1.507-.859-2.063-.227-.546-.477-.473-.654-.482-.17-.008-.36-.01-.55-.01a1.06 1.06 0 00-.766.36c-.267.278-1.02 1.019-1.02 2.487 0 1.468 1.07 2.885 1.22 3.085.15.2 2.102 3.202 5.093 4.499.712.309 1.267.493 1.701.631.715.227 1.365.195 1.88.118.574-.085 1.651-.673 1.883-1.322.232-.65.232-1.206.162-1.322-.069-.118-.255-.21-.534-.35z" />
  </svg>
);

const WhatsAppDock = () => {
  const targetWhatsAppNumber = "+918750939543";
  const message = "Hi, I have a logistics query.";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${targetWhatsAppNumber}?text=${encodedMessage}`;

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[999] flex flex-col items-center gap-2 pointer-events-auto">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20ba56] text-white rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_24px_rgba(37,211,102,0.6)] transition-all duration-300 hover:-translate-y-1 active:scale-95 group cursor-pointer"
        aria-label="Contact us on WhatsApp"
      >
        <WhatsAppIcon />
      </a>
      <div className="bg-white/95 backdrop-blur-md text-black border border-black/10 px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-[0_2px_12px_rgba(0,0,0,0.08)] text-[10px] font-bold tracking-[0.08em] uppercase select-none transition-transform duration-300 hover:scale-105">
        <span className="flex items-center justify-center text-[#1E40AF] animate-pulse">
          <HeadsetIcon />
        </span>
        <span>24*7 Support</span>
      </div>
    </div>
  );
};

export default WhatsAppDock;
