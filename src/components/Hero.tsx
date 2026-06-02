import { useState, useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

const APPLICATION_FORM_DIV_ID = "formsID7375";

// Background Images for the Carousel Slider (16:9 Aspect ratio compatible)
const CAROUSEL_IMAGES = [
  "/college2.webp", 
  "/college2.webp", 
  // Add additional paths to your slider images here
];

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.215, 0.610, 0.355, 1.000] } },
};

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (CAROUSEL_IMAGES.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, 5000); // Transitions images every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const scrollToLeadForm = () => {
    const form = document.getElementById(APPLICATION_FORM_DIV_ID);
    if (!form) return;
    form.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-transparent text-white flex items-center pt-24 pb-16 md:pt-50"
    >
      {/* ── Background Full-Screen Image Carousel ── */}
      <div className="absolute inset-0 z-0 h-full w-full select-none pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentSlide}
            src={CAROUSEL_IMAGES[currentSlide]}
            alt="Campus Background View"
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>

        {/* Cinematic dark glass overlay matching reference screen layout */}
        <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/70 to-black/40" />
        {/* <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" /> */}
      </div>

      {/* ── Main Layout Container ── */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* ── Left Side Content Column ── */}
          <motion.div
            className="flex flex-col items-start text-left lg:col-span-7 xl:col-span-8"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {/* Main Header Tag (Replacing the 'Best Private University' line) */}
            <motion.div variants={item} className="mb-4">
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl font-sans">
                Oldest College <span className="font-light opacity-90">in UP</span>
              </h2>
            </motion.div>

            {/* College Name Header */}
            <motion.h1
              variants={item}
              className="mb-6 max-w-2xl text-xl font-medium tracking-wide text-cream/85 uppercase sm:text-2xl md:text-3xl border-l-4 border-gold pl-4"
            >
              Major S. D. Singh PG <br />
              <span className="text-white font-semibold">Ayurvedic Medical College</span>
            </motion.h1>

            {/* Tagline */}
            <motion.h3
              variants={item}
              className="mb-4 max-w-xl text-base font-semibold italic text-gold sm:text-lg"
            >
              "Classical Ayurveda, clinical confidence, and research-minded care."
            </motion.h3>

            {/* Body Descriptive Copy */}
            <motion.p
              variants={item}
              className="mb-8 max-w-xl text-sm leading-relaxed text-gray-300 sm:text-base opacity-90"
            >
              Join Major SD Singh PG Ayurvedic Medical College & Hospital in Farrukhabad, Uttar
              Pradesh for BAMS NEET admission, MS Prasuti Tantra, and MS Shalya Tantra programs
              built on strong classroom learning, hospital exposure, and disciplined practice.
            </motion.p>

            {/* Core Action CTAs styled like screenshot anchors */}
            <motion.div variants={item} className="mb-10 flex flex-wrap items-center gap-4">
              <button
                onClick={scrollToLeadForm}
                className="group inline-flex items-center justify-center gap-3 rounded-md bg-gold px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-charcoal-deep transition-all duration-300 hover:bg-gold-dark hover:text-white active:scale-95 shadow-lg shadow-gold-dark/35"
              >
                <span>Apply Today</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

              <a
                href="https://majorsdspgamc.com/college-other-facilities/"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/40 bg-white/10 px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:border-white active:scale-95"
              >
                Campus Tour
              </a>
            </motion.div>

            {/* Quick Metrics Trust Strip */}
            <motion.div
              variants={item}
              className="flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/10 pt-6 w-full max-w-lg"
            >
              {[
                { icon: "🏛️", label: "Est. 1965" },
                { icon: "🎓", label: "NCISM Approved" },
                { icon: "🏥", label: "150-Bed Hospital" },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-2">
                  <span className="text-xl filter drop-shadow">{stat.icon}</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-300">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right Side Form Layout Slot ── */}
          <motion.div
            className="w-full lg:col-span-5 xl:col-span-4 flex justify-center lg:justify-end"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full max-w-md overflow-hidden rounded-lg bg-white p-1 shadow-2xl shadow-black/80">
              {/* Form container header section mirroring the screenshot layout */}
              <div className="bg-charcoal-deep px-4 py-5 text-center">
                {/* <p className="text-[11px] font-bold uppercase tracking-widest text-amber-400">
                  Admissions Session 2026–2027
                </p> */}
                <h3 className="mt-1 text-sm font-extrabold uppercase tracking-tight text-white sm:text-base">
                  Apply Today for Registration
                </h3>
              </div>

              {/* Hooked to your dynamic pre-built Lead Capture Form layout */}
              <div
                id={APPLICATION_FORM_DIV_ID}
                className="w-full bg-white h-120 overflow-y-auto"
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* ── Background Carousel Control Indicator dots ── */}
      {CAROUSEL_IMAGES.length > 1 && (
        <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2.5">
          {CAROUSEL_IMAGES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentSlide ? "w-8 bg-gold" : "w-2 bg-white/40 hover:bg-gold/80"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
