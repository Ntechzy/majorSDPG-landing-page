import { motion } from "framer-motion";
import { STATS } from "@/constants/data";
import CountUp from "./CountUp";

const HEADLINE = ["Heal", "with", "Ancient", "Wisdom."];
const HEADLINE2 = ["Lead", "with", "Modern", "Excellence."];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-charcoal-deep pt-28 pb-20 sm:pt-24 sm:pb-16"
    >
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, #1A1A2E 0%, #0D0D1A 50%, #1A0A0A 100%)",
        }}
      />
      {/* Floating ornaments */}
      <motion.svg
        className="absolute top-10 left-[-10%] sm:top-20 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 opacity-[0.08]"
        viewBox="0 0 200 200"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <circle cx="100" cy="100" r="90" stroke="#F5B800" strokeWidth="1" fill="none" />
        <circle cx="100" cy="100" r="70" stroke="#F5B800" strokeWidth="1" fill="none" />
        <circle cx="100" cy="100" r="50" stroke="#F5B800" strokeWidth="1" fill="none" />
      </motion.svg>
      <motion.svg
        className="absolute bottom-10 right-[-10%] sm:bottom-32 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 opacity-[0.07]"
        viewBox="0 0 200 200"
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      >
        <circle cx="100" cy="100" r="95" stroke="#29B6D8" strokeWidth="1" fill="none" />
        <circle cx="100" cy="100" r="60" stroke="#29B6D8" strokeWidth="1" fill="none" />
      </motion.svg>
      <motion.svg
        className="absolute top-1/3 right-1/4 w-40 h-40 opacity-[0.06] hidden sm:block"
        viewBox="0 0 100 100"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        <circle cx="50" cy="50" r="40" stroke="#F5B800" strokeWidth="0.5" fill="none" />
      </motion.svg>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sky/40 bg-sky/10 mb-6 sm:mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-sky animate-pulse-dot" />
          <span className="text-sky text-[10px] sm:text-xs font-medium uppercase tracking-widest">
            🌿 Admissions Open 2026–27
          </span>
        </motion.div>

        <h1 className="font-bold text-cream leading-[1.2] sm:leading-[1.1] tracking-tight">
          <div className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl xl:text-7xl mb-2 flex flex-wrap justify-center gap-x-2 sm:gap-x-3">
            {HEADLINE.map((w, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.08 }}
              >
                {w}
              </motion.span>
            ))}
          </div>
          <div className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl xl:text-7xl mb-4 flex flex-wrap justify-center gap-x-2 sm:gap-x-3">
            {HEADLINE2.map((w, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.08 }}
              >
                {w}
              </motion.span>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl xl:text-7xl"
          >
            <span>Begin at </span>
            <span
              className="bg-clip-text text-transparent animate-shimmer"
              style={{
                backgroundImage: "linear-gradient(90deg,#F5B800,#FFFDF4,#F5B800)",
                backgroundSize: "200% 100%",
              }}
            >
              MSDS AMCH.
            </span>
          </motion.div>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="mt-6 sm:mt-8 max-w-3xl mx-auto text-cream/70 text-sm sm:text-lg leading-relaxed px-4 sm:px-0"
        >
          Major SD Singh PG Ayurvedic Medical College & Hospital — Shaping the next generation of
          Ayurvedic healers and surgeons.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto"
        >
          {STATS.map((s) => (
            <div key={s.label} className="text-center p-2">
              <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">{s.icon}</div>
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gold">
                <CountUp end={s.value} suffix={s.suffix} />
              </div>
              <div className="text-cream/60 text-[10px] sm:text-xs mt-1 uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center px-4"
        >
          <a
            href="#lead"
            className="bg-gold text-charcoal font-semibold px-8 py-4 rounded-lg hover:bg-gold-dark transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-gold/30 text-sm sm:text-base text-center"
          >
            Apply for Admission →
          </a>
          <a
            href="#admissions"
            className="border-2 border-gold text-gold font-semibold px-8 py-4 rounded-lg hover:bg-gold hover:text-charcoal transition-all text-sm sm:text-base text-center"
          >
            Download Prospectus
          </a>
        </motion.div>
      </div>
    </section>
  );
}