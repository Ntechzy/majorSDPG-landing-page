import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS } from "@/constants/data"; 

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Prevent background scrolling when mobile menu drawer is wide open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.nav
      initial={{ y: -120 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 flex flex-col w-full font-sans transition-all duration-300 ${
        scrolled || open
          ? "shadow-md bg-[#FDFBF7]" 
          : "bg-transparent"
      }`}
    >
      {/* ========================================================================= */}
      {/* TIER 1: TOP UTILITY & TICKER BAR (Hidden on Mobile)                       */}
      {/* ========================================================================= */}
      <div 
        className={`hidden lg:flex w-full h-10 border-b text-xs items-center justify-between px-6 xl:px-12 transition-all duration-300 ${
          scrolled 
            ? "border-zinc-200 bg-zinc-100 text-zinc-800" 
            : "border-white/10 bg-black/20 text-white"
        }`}
      >
        {/* Left Side: Campaign Ticker */}
        <div className="flex items-center gap-3">
          <span className={`tracking-wide font-light ${scrolled ? "text-zinc-600" : "text-zinc-300"}`}>
            Register Now for Joint Campus Placement Programme
          </span>
          <a
            href="#register"
            className="bg-red-600 hover:bg-red-700 text-white font-bold px-3 py-1 rounded text-[10px] uppercase tracking-wider transition-colors"
          >
            Register Now
          </a>
        </div>

        {/* Right Side: Quick Links & Icons */}
        <div className={`flex items-center gap-5 ${scrolled ? "text-zinc-700" : "text-zinc-300"}`}>
          <a href="https://wa.me/918189098662" target="_blank" rel="noreferrer" className={`flex items-center gap-1 hover:opacity-80 ${scrolled ? "text-zinc-900" : "text-white"}`}>
            <span className="text-green-600">●</span> Whatsapp
          </a>
          <a href="tel:1800121288800" className={`hover:opacity-80 ${scrolled ? "text-zinc-900" : "text-white"}`}>Call Us</a>
          <a href="#view-360" className={`flex items-center gap-1 hover:opacity-80 ${scrolled ? "text-zinc-900" : "text-white"}`}>🌐 360°</a>
          <div className={`h-3 w-[1px] ${scrolled ? "bg-zinc-300" : "bg-zinc-600"}`} />
          <div className="flex items-center gap-3 text-sm">
            <a href="#" className={`hover:opacity-80 ${scrolled ? "text-zinc-900" : "text-white"}`}>facebook</a>
            <a href="#" className={`hover:opacity-80 ${scrolled ? "text-zinc-900" : "text-white"}`}>x</a>
            <a href="#" className={`hover:opacity-80 ${scrolled ? "text-zinc-900" : "text-white"}`}>linkedin</a>
            <a href="#" className={`hover:opacity-80 ${scrolled ? "text-zinc-900" : "text-white"}`}>instagram</a>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* TIER 2: MAIN BRANDING & PRIMARY ACTIONS BAR                              */}
      {/* ========================================================================= */}
      <div 
        className={`w-full px-4 py-3 sm:px-6 lg:px-12 flex items-center justify-between border-b transition-all duration-300 ${
          scrolled || open ? "bg-[#FDFBF7]/95 backdrop-blur-md border-zinc-200 text-zinc-900" : "bg-black/10 border-white/5 text-white"
        }`}
      >
        {/* Logo Branding */}
        <a href="#home" className="flex items-center max-w-[200px] sm:max-w-[280px] lg:max-w-[320px]">
          <img
            src="/MAJOR-SD-SINGH-AYURVEDIC-MEDICAL-COLLEGE.png"
            alt="Institution Logo"
            className={`h-10 sm:h-14 lg:h-16 w-auto object-contain transition-all duration-300 ${scrolled || open ? "brightness-100 contrast-105 filter invert-0" : ""}`}
            loading="eager"
          />
        </a>

        {/* Desktop Mid-links & Admission block */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          <div className={`flex items-center gap-4 xl:gap-5 text-xs font-semibold tracking-wider uppercase transition-colors ${scrolled ? "text-zinc-700" : "text-zinc-200"}`}>
            <a href="#campuses" className="hover:text-red-600 transition-colors">Campuses</a>
            <a href="#international" className="hover:text-red-600 transition-colors">International</a>
            <a href="#library" className="hover:text-red-600 transition-colors">Library</a>
            <a href="#services" className="hover:text-red-600 transition-colors">Student Services</a>
            <a href="#career" className="hover:text-red-600 transition-colors">Career</a>
            <a href="#blogs" className="hover:text-red-600 transition-colors">Blogs</a>
            <a href="#contact" className="hover:text-red-600 transition-colors">Contact Us</a>
          </div>

          <a 
            href="tel:1800121288800"
            className="bg-red-600 hover:bg-red-700 text-white flex items-center gap-3 px-5 py-2.5 rounded shadow-md transition-colors"
          >
            <div className="p-1.5 bg-white/20 rounded-full">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[10px] uppercase tracking-widest text-red-100 font-bold">Admission Helpline</span>
              <span className="text-sm font-black tracking-wide">1800121288800</span>
            </div>
          </a>

          <button className={`flex flex-col items-center gap-0.5 justify-center transition-colors ${scrolled ? "text-zinc-600 hover:text-zinc-950" : "text-zinc-300 hover:text-white"}`} aria-label="Search">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span className="text-[9px] uppercase tracking-widest font-bold">Search</span>
          </button>
        </div>

        {/* Mobile Interactive Trigger */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          className={`lg:hidden p-2 rounded-md transition-all ${
            scrolled || open 
              ? "text-zinc-900 bg-zinc-200/80 hover:bg-zinc-200" 
              : "text-white bg-zinc-800/80 hover:bg-zinc-700 backdrop-blur-sm border border-white/10"
          }`}
          aria-label="Toggle Menu"
          aria-expanded={open}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* ========================================================================= */}
      {/* TIER 3: BOTTOM MEGA NAVIGATION BAR (Hidden on Mobile)                     */}
      {/* ========================================================================= */}
      <div 
        className={`hidden lg:flex w-full items-center justify-center border-b transition-all duration-300 ${
          scrolled ? "bg-zinc-100 border-zinc-200" : "bg-black/20 border-white/5"
        }`}
      >
        <div className="flex items-center justify-center max-w-7xl w-full text-sm font-bold tracking-widest uppercase">
          {NAV_LINKS.map((l, idx) => (
            <div key={l.href} className="flex items-center">
              <a
                href={l.href}
                className={`px-6 py-4 flex items-center gap-1.5 transition-all duration-200 group ${
                  scrolled 
                    ? "text-zinc-800 hover:bg-zinc-200/60 hover:text-red-700" 
                    : "text-zinc-100 hover:bg-black/30 hover:text-white"
                }`}
              >
                <span>{l.label}</span>
                <svg className={`w-3 h-3 transition-transform duration-200 group-hover:translate-y-0.5 ${scrolled ? "text-zinc-500 group-hover:text-red-700" : "text-zinc-300 group-hover:text-white"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              {idx < NAV_LINKS.length - 1 && (
                <div className={`h-6 w-[1px] self-center ${scrolled ? "bg-zinc-300" : "bg-white/10"}`} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* RESPONSIVE DRAWER OVERLAY (Full Viewport Fix for Mobile & Tablet)         */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed left-0 right-0 bottom-0 top-[65px] sm:top-[81px] z-40 w-full bg-[#FDFBF7] border-t border-zinc-200 overflow-y-auto lg:hidden shadow-2xl"
          >
            <div className="px-4 py-6 space-y-6 pb-12">
              {/* Main Nav Links Stack */}
              <div className="flex flex-col space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-widest mb-2 px-2 text-zinc-400">Main Navigation</span>
                {NAV_LINKS.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 text-base font-bold tracking-wide text-zinc-800 hover:bg-zinc-100 hover:text-red-600 transition-colors"
                  >
                    {l.label}
                  </a>
                ))}
              </div>

              {/* Auxiliary Quick Links Grid */}
              <div className="border-t border-zinc-200 pt-5">
                <span className="text-[10px] font-bold uppercase tracking-widest mb-3 block px-2 text-zinc-400">Information & Resources</span>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm font-semibold uppercase px-2 text-zinc-700">
                  <a href="#campuses" onClick={() => setOpen(false)} className="py-2 hover:text-red-600">Campuses</a>
                  <a href="#international" onClick={() => setOpen(false)} className="py-2 hover:text-red-600">International</a>
                  <a href="#library" onClick={() => setOpen(false)} className="py-2 hover:text-red-600">Library</a>
                  <a href="#services" onClick={() => setOpen(false)} className="py-2 hover:text-red-600">Services</a>
                  <a href="#blogs" onClick={() => setOpen(false)} className="py-2 hover:text-red-600">Blogs</a>
                  <a href="#contact" onClick={() => setOpen(false)} className="py-2 hover:text-red-600">Contact Us</a>
                </div>
              </div>

              {/* Action Banners & Contact Channels */}
              <div className="grid grid-cols-1 gap-3 pt-5 border-t border-zinc-200">
                <a
                  href="tel:1800121288800"
                  className="bg-red-600 text-white flex items-center justify-center gap-3 py-3.5 rounded-xl font-bold shadow-md hover:bg-red-700 transition-colors"
                >
                  <span className="text-xs uppercase tracking-wider opacity-90">Helpline:</span>
                  <span className="text-base tracking-wide">1800121288800</span>
                </a>
                
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="https://wa.me/918189098662"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-zinc-200 text-zinc-900 text-center py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 hover:bg-zinc-300 transition-colors"
                  >
                    <span className="text-green-600 text-sm">●</span> WhatsApp
                  </a>
                  <a
                    href="#register"
                    onClick={() => setOpen(false)}
                    className="bg-zinc-900 text-white text-center py-3 rounded-xl text-xs font-bold hover:bg-zinc-800 transition-colors"
                  >
                    Register Now
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}