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
          ? "shadow-md bg-cream" 
          : "bg-transparent"
      }`}
    >
      {/* ========================================================================= */}
      {/* TIER 1: TOP UTILITY & TICKER BAR (Hidden on Mobile)                       */}
      {/* ========================================================================= */}
      <div 
        className={`hidden lg:flex w-full h-10 border-b text-xs items-center justify-between px-6 xl:px-12 transition-all duration-300 ${
          scrolled 
            ? "border-gold/15 bg-cream/90 text-charcoal/80" 
            : "border-white/10 bg-black/20 text-white"
        }`}
      >
        {/* Left Side: Campaign Ticker */}
        <div className="flex items-center gap-3">
          <span className={`tracking-wide font-light ${scrolled ? "text-charcoal/70" : "text-cream/80"}`}>
            Register Now for Joint Campus Placement Programme
          </span>
          <a
            href="#lead"
            className="bg-gold hover:bg-gold-dark text-charcoal-deep font-bold px-3 py-1 rounded text-[10px] uppercase tracking-wider transition-colors"
          >
            Register Now
          </a>
        </div>

        {/* Right Side: Quick Links & Icons */}
        <div className={`flex items-center gap-5 ${scrolled ? "text-charcoal/75" : "text-cream/80"}`}>
          <a href="https://wa.me/918189098662" target="_blank" rel="noreferrer" className={`flex items-center gap-1 hover:opacity-80 ${scrolled ? "text-charcoal" : "text-white"}`}>
            <span className="text-green-600">●</span> Whatsapp
          </a>
          <a href="tel:1800121288800" className={`hover:opacity-80 ${scrolled ? "text-charcoal" : "text-white"}`}>Call Us</a>
          <div className={`h-3 w-px ${scrolled ? "bg-gold/20" : "bg-white/20"}`} />
          <div className="flex items-center gap-3 text-sm">
            <a href="https://www.facebook.com/majorsdsamc/" target="_blank" rel="noreferrer" className={`hover:opacity-80 ${scrolled ? "text-charcoal" : "text-white"}`}>facebook</a>
            <a href="https://x.com" target="_blank" rel="noreferrer" className={`hover:opacity-80 ${scrolled ? "text-charcoal" : "text-white"}`}>x</a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className={`hover:opacity-80 ${scrolled ? "text-charcoal" : "text-white"}`}>linkedin</a>
            <a href="https://www.instagram.com/majorsdsinghpg/" target="_blank" rel="noreferrer" className={`hover:opacity-80 ${scrolled ? "text-charcoal" : "text-white"}`}>instagram</a>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* TIER 2: MAIN BRANDING & PRIMARY ACTIONS BAR                              */}
      {/* ========================================================================= */}
      <div 
        className={`w-full px-4 py-3 sm:px-6 lg:px-12 flex items-center justify-between border-b transition-all duration-300 ${
          scrolled || open ? "bg-cream/95 backdrop-blur-md border-gold/20 text-charcoal" : "bg-black/10 border-white/5 text-white"
        }`}
      >
        {/* Logo Branding */}
        <a href="#home" className="flex items-center max-w-[200px] sm:max-w-[280px] lg:max-w-[320px]">
          <img
            src="/MAJOR-SD-SINGH-AYURVEDIC-MEDICAL-COLLEGE.png"
            alt="Institution Logo"
            className={`h-10 sm:h-14 lg:h-16 w-auto object-contain rounded-sm transition-all duration-300 ${scrolled || open ? "brightness-100 contrast-105 filter invert-0" : ""}`}
            loading="eager"
          />
        </a>

        {/* Desktop Mid-links & Admission block */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          <div className={`flex items-center gap-4 xl:gap-5 text-xs font-semibold tracking-wider uppercase transition-colors ${scrolled ? "text-charcoal/80" : "text-cream/90"}`}>
            <a href="#about" className="hover:text-gold transition-colors">About</a>
            <a href="#courses" className="hover:text-gold transition-colors">Courses</a>
            <a href="#facilities" className="hover:text-gold transition-colors">Facilities</a>
            <a href="#admissions" className="hover:text-gold transition-colors">Admissions</a>
            <a href="#lead" className="hover:text-gold transition-colors">Apply Now</a>
            <a href="https://blogs.majorsdsinghpgamc.in/" target="_blank" rel="noreferrer" className="hover:text-gold transition-colors">Blogs</a>
            <a href="#contact" className="hover:text-gold transition-colors">Contact Us</a>
          </div>

          <a 
            href="tel:1800121288800"
            className="bg-gold hover:bg-gold-dark text-charcoal-deep flex items-center gap-3 px-5 py-2.5 rounded shadow-md transition-colors"
          >
            <div className="p-1.5 bg-white/20 rounded-full">
              <svg className="w-4 h-4 text-charcoal-deep" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[10px] uppercase tracking-widest text-charcoal/70 font-bold">Admission Helpline</span>
              <span className="text-sm font-black tracking-wide">1800121288800</span>
            </div>
          </a>
        </div>

        {/* Mobile Interactive Trigger */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          className={`lg:hidden p-2 rounded-md transition-all ${
            scrolled || open 
              ? "text-charcoal bg-gold/10 hover:bg-gold/20" 
              : "text-white bg-charcoal/80 hover:bg-charcoal/90 backdrop-blur-sm border border-white/10"
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
          scrolled ? "bg-cream/95 border-gold/20" : "bg-charcoal-deep/45 border-white/5"
        }`}
      >
        <div className="flex items-center justify-center max-w-7xl w-full text-sm font-bold tracking-widest uppercase">
          {NAV_LINKS.map((l, idx) => (
            <div key={l.href} className="flex items-center">
              <a
                href={l.href}
                className={`px-6 py-4 flex items-center gap-1.5 transition-all duration-200 group ${
                  scrolled 
                    ? "text-charcoal hover:bg-gold/10 hover:text-gold-dark" 
                    : "text-cream/90 hover:bg-gold/15 hover:text-gold"
                }`}
              >
                <span>{l.label}</span>
                <svg className={`w-3 h-3 transition-transform duration-200 group-hover:translate-y-0.5 ${scrolled ? "text-gold-dark/60 group-hover:text-gold-dark" : "text-gold/70 group-hover:text-gold"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              {idx < NAV_LINKS.length - 1 && (
                <div className={`h-6 w-[1px] self-center ${scrolled ? "bg-gold/20" : "bg-white/10"}`} />
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
            className="fixed left-0 right-0 bottom-0 top-[65px] sm:top-[81px] z-40 w-full bg-cream border-t border-gold/20 overflow-y-auto lg:hidden shadow-2xl"
          >
            <div className="px-4 py-6 space-y-6 pb-12">
              {/* Main Nav Links Stack */}
              <div className="flex flex-col space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-widest mb-2 px-2 text-gold-dark/70">Main Navigation</span>
                {NAV_LINKS.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 text-base font-bold tracking-wide text-charcoal hover:bg-gold/10 hover:text-gold-dark transition-colors"
                  >
                    {l.label}
                  </a>
                ))}
              </div>

              {/* Auxiliary Quick Links Grid */}
              <div className="border-t border-gold/20 pt-5">
                <span className="text-[10px] font-bold uppercase tracking-widest mb-3 block px-2 text-gold-dark/70">Information & Resources</span>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm font-semibold uppercase px-2 text-charcoal/75">
                  <a href="#about" onClick={() => setOpen(false)} className="py-2 hover:text-gold-dark">About</a>
                  <a href="#courses" onClick={() => setOpen(false)} className="py-2 hover:text-gold-dark">Courses</a>
                  <a href="#facilities" onClick={() => setOpen(false)} className="py-2 hover:text-gold-dark">Facilities</a>
                  <a href="#admissions" onClick={() => setOpen(false)} className="py-2 hover:text-gold-dark">Admissions</a>
                  <a href="#lead" onClick={() => setOpen(false)} className="py-2 hover:text-gold-dark">Apply Now</a>
                  <a href="https://blogs.majorsdsinghpgamc.in/" target="_blank" rel="noreferrer" className="py-2 hover:text-gold-dark">Blogs</a>
                  <a href="#contact" onClick={() => setOpen(false)} className="py-2 hover:text-gold-dark">Contact Us</a>
                </div>
              </div>

              {/* Action Banners & Contact Channels */}
              <div className="grid grid-cols-1 gap-3 pt-5 border-t border-gold/20">
                <a
                  href="tel:1800121288800"
                  className="bg-gold text-charcoal-deep flex items-center justify-center gap-3 py-3.5 rounded-xl font-bold shadow-md hover:bg-gold-dark hover:text-white transition-colors"
                >
                  <span className="text-xs uppercase tracking-wider opacity-90">Helpline:</span>
                  <span className="text-base tracking-wide">1800121288800</span>
                </a>
                
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="https://wa.me/918189098662"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-white text-charcoal text-center py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 border border-gold/20 hover:bg-gold/10 transition-colors"
                  >
                    <span className="text-green-600 text-sm">●</span> WhatsApp
                  </a>
                  <a
                    href="#lead"
                    onClick={() => setOpen(false)}
                    className="bg-charcoal-deep text-cream text-center py-3 rounded-xl text-xs font-bold hover:bg-charcoal transition-colors"
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
