"use client";

import { useEffect, useRef } from "react";

const heroPosterUrl =
  "https://res.cloudinary.com/dsjuc7wd5/video/upload/so_0,q_auto,w_1600,c_limit/v1780930461/dnp_annnug.jpg";
const heroMobileVideoUrl =
  "https://res.cloudinary.com/dsjuc7wd5/video/upload/ac_none,q_auto:best,w_1280,c_limit/v1780930461/dnp_annnug.mp4";
const heroVideoUrl =
  "https://res.cloudinary.com/dsjuc7wd5/video/upload/ac_none,q_auto:good,w_1600,c_limit/v1780930461/dnp_annnug.mp4";

const Hero = () => {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;

    if (!section || !video) {
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isIOS =
      /iPad|iPhone|iPod/.test(window.navigator.userAgent) ||
      (window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);

    if (prefersReducedMotion) {
      section.style.setProperty("--hero-video-opacity", "0");
      section.style.setProperty("--hero-background-offset", "0px");
      section.style.setProperty("--hero-content-offset", "0px");
      return undefined;
    }

    let frameId = 0;

    const showPoster = () => {
      section.style.setProperty("--hero-video-opacity", "0");
    };

    const showVideo = () => {
      section.style.setProperty("--hero-video-opacity", "1");
    };

    const updateScrollStyles = () => {
      frameId = 0;

      const offsetY = window.scrollY;
      const isMobile = window.matchMedia("(max-width: 767px)").matches;

      if (isIOS || isMobile) {
        section.style.setProperty("--hero-background-offset", "0px");
        section.style.setProperty("--hero-content-offset", "0px");
      } else {
        section.style.setProperty("--hero-background-offset", `${offsetY * 0.4}px`);
        section.style.setProperty("--hero-content-offset", `${offsetY * -0.15}px`);
      }

      section.style.setProperty(
        "--hero-indicator-opacity",
        `${Math.max(1 - offsetY / 300, 0)}`,
      );
    };

    const handleScroll = () => {
      if (frameId) {
        return;
      }

      frameId = window.requestAnimationFrame(updateScrollStyles);
    };

    const tryPlayVideo = () => {
      video.defaultMuted = true;
      video.muted = true;

      try {
        const playAttempt = video.play();

        if (playAttempt !== undefined) {
          playAttempt
            .then(showVideo)
            .catch((err) => {
              console.warn("Video autoplay prevented:", err);
              showPoster();
            });
        } else {
          showVideo();
        }
      } catch (err) {
        console.error("Video play failed:", err);
        showPoster();
      }
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible" && video.paused) {
        tryPlayVideo();
      }
    };

    showPoster();
    updateScrollStyles();
    tryPlayVideo();

    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("visibilitychange", handleVisibilityChange);
    video.addEventListener("playing", showVideo);
    video.addEventListener("pause", showPoster);
    video.addEventListener("loadeddata", tryPlayVideo);
    video.addEventListener("error", showPoster);

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }

      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      video.removeEventListener("playing", showVideo);
      video.removeEventListener("pause", showPoster);
      video.removeEventListener("loadeddata", tryPlayVideo);
      video.removeEventListener("error", showPoster);
    };
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      style={{
        "--hero-background-offset": "0px",
        "--hero-content-offset": "0px",
        "--hero-indicator-opacity": 1,
        "--hero-video-opacity": 0,
      }}
      className="relative flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden bg-[#111] text-center font-sans"
    >
      <div
        className="hero-media-layer absolute inset-0 z-0 w-full h-[120vh] -top-[10vh] will-change-transform"
        style={{
          transform: "translate3d(0, var(--hero-background-offset), 0)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          crossOrigin="anonymous"
          controls={false}
          aria-hidden="true"
          tabIndex={-1}
          disablePictureInPicture
          disableRemotePlayback
          poster={heroPosterUrl}
          className="absolute w-full h-full object-cover transition-opacity duration-500"
          style={{ opacity: "var(--hero-video-opacity)" }}
        >
          <source
            media="(max-width: 767px)"
            src={heroMobileVideoUrl}
            type="video/mp4"
          />
          <source src={heroVideoUrl} type="video/mp4" />
        </video>
        <div className="absolute inset-0 z-10 bg-black/40" />
      </div>

      <div className="absolute inset-0 z-10 hidden sm:grid grid-cols-4 pointer-events-none w-full max-w-[1400px] mx-auto opacity-50 md:opacity-100">
        <div className="border-r border-white/10 h-full"></div>
        <div className="border-r border-white/10 h-full relative">
          <div className="absolute -right-[7px] top-[30%] text-white/30 text-lg font-light leading-none">+</div>
        </div>
        <div className="border-r border-white/10 h-full"></div>
        <div className="h-full"></div>
      </div>

      <div
        className="relative z-20 w-full max-w-5xl mx-auto flex flex-col items-center px-4 sm:px-6 md:px-8 mt-12 md:mt-16 will-change-transform"
        style={{ transform: "translate3d(0, var(--hero-content-offset), 0)" }}
      >
        <h1 className="text-[44px] sm:text-[56px] md:text-[72px] lg:text-[84px] font-medium tracking-[-0.03em] text-white leading-[1.1] sm:leading-[1.05]">
          Intelligent
          <span className="inline-flex items-center justify-center w-[0.85em] h-[0.85em] mx-2 sm:mx-3 lg:mx-4 bg-[#1E40AF] rounded-full align-middle -translate-y-[0.08em] shadow-[0_0_24px_rgba(30,64,175,0.25)]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-[0.45em] h-[0.45em] text-[#111]">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
              <line x1="12" y1="22.08" x2="12" y2="12" />
            </svg>
          </span>
          Logistics <br className="hidden sm:block" />
          for a Global
          <span className="inline-flex items-center justify-center w-[0.85em] h-[0.85em] mx-2 sm:mx-3 lg:mx-4 bg-[#CE0001] rounded-full align-middle -translate-y-[0.08em] shadow-[0_0_24px_rgba(206,0,1,0.35)]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-[0.45em] h-[0.45em] text-[#111]">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              <path d="M2 12h20"/>
            </svg>
          </span>
          Market
        </h1>

        <p className="mt-6 md:mt-8 text-[15px] sm:text-[16px] md:text-[18px] font-normal text-white/80 leading-relaxed max-w-[90%] sm:max-w-[500px] md:max-w-[600px] mx-auto">
          Empowering businesses and communities to thrive in a fast-paced world through tailored supply chain solutions.
        </p>

        <div className="mt-8 md:mt-10 flex items-center gap-[6px]">
          <a
            href="#contact"
            className="h-[42px] md:h-[46px] px-6 md:px-8 bg-[#1E40AF] hover:bg-[#CE0001] text-white text-[13px] md:text-[16px] font-medium tracking-wider rounded-full flex items-center transition-colors"
          >
            Start a Project
          </a>
          <a
            href="#contact"
            className="group h-[42px] w-[42px] md:h-[46px] md:w-[46px] bg-[#1E40AF] hover:bg-[#CE0001] text-white rounded-full flex items-center justify-center transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>
        </div>
      </div>

      <div
        className="absolute bottom-6 md:bottom-8 left-0 right-0 z-20 flex justify-center transition-opacity duration-300"
        style={{ opacity: "var(--hero-indicator-opacity)" }}
      >
        <span className="text-[9px] md:text-[10px] font-medium tracking-[0.2em] text-white/60 uppercase animate-bounce">
          Scroll Down
        </span>
      </div>
    </section>
  );
};

export default Hero;
