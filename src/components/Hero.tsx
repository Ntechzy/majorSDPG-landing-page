import { motion, type Variants } from "framer-motion";

const APPLICATION_FORM_DIV_ID = "formsID7375";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function Hero() {
  const scrollToLeadForm = () => {
    const form = document.getElementById(APPLICATION_FORM_DIV_ID);
    if (!form) return;
    form.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section
      id="home"
      className="hero-professional-font relative min-h-screen w-full overflow-x-hidden bg-charcoal-deep"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/college2.webp"
          alt="Major SD Singh PG Ayurvedic Medical College Campus"
          className="h-full w-full object-cover"
          fetchPriority="high"
          decoding="async"
          loading="eager"
        />
        {/* Richer layered overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-black/75 via-black/65 to-black/85 sm:bg-linear-to-r sm:from-black/80 sm:via-black/60 sm:to-black/30" />
        {/* Subtle warm tint at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-linear-to-t from-amber-950/30 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-20 xl:py-22">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-12 xl:gap-18">

          {/* ── Text Content ── */}
          <motion.div
            className="flex w-full flex-1 flex-col items-center text-center lg:items-start lg:text-left"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {/* Admissions badge */}
            {/* <motion.div
              variants={item}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-gold backdrop-blur-md sm:text-xs"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
              </span>
              Admissions Open · Session 2026–2027
            </motion.div> */}

            {/* Main heading */}
            <motion.h1
              variants={item}
              className="mb-4 text-3xl font-extrabold leading-[1.15] text-cream sm:text-4xl lg:text-5xl xl:text-6xl"
            >
              <span className="text-gold">Major S. D. Singh PG</span>{" "}
              <br className="hidden sm:block" />
              Ayurvedic Medical College
            </motion.h1>

            {/* Tagline */}
            <motion.h2
              variants={item}
              className="mb-5 max-w-xl text-lg font-medium text-cream/90 sm:text-2xl"
            >
              Classical Ayurveda, clinical confidence, and research-minded care.
            </motion.h2>

            {/* ── "Oldest college in UP" highlight ── */}
            <motion.div variants={item} className="mb-6">
              <span className="relative inline-flex items-center gap-2.5 overflow-hidden rounded-lg px-4 py-2">
                {/* Glowing background */}
                <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-amber-500 via-gold to-amber-400 opacity-90" />
                {/* Shimmer sweep */}
                <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-[shimmer_2.8s_ease-in-out_infinite]" />
                {/* Star icon */}
                <span className="relative text-charcoal">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 fill-charcoal"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01L12 2z" />
                  </svg>
                </span>
                <span className="relative text-sm font-extrabold uppercase tracking-widest text-charcoal">
                  Oldest College in UP
                </span>
                <span className="relative text-charcoal">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 fill-charcoal"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01L12 2z" />
                  </svg>
                </span>
              </span>
            </motion.div>

            {/* Body copy */}
            <motion.p
              variants={item}
              className="mb-8 max-w-2xl text-sm leading-relaxed text-cream/70 sm:text-base md:text-lg"
            >
              Join Major SD Singh PG Ayurvedic Medical College &amp; Hospital for a focused B.A.M.S.
              journey built on strong classroom learning, extensive hospital exposure, and a
              disciplined approach to professional practice.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={item}
              className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row lg:justify-start"
            >
              <button
                onClick={scrollToLeadForm}
                className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gold px-10 py-4 text-base font-bold text-charcoal shadow-xl shadow-gold/25 transition-all duration-300 hover:bg-amber-400 hover:shadow-gold/40 active:scale-95"
              >
                {/* Arrow icon */}
                <span>Apply Now</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <a
                href="https://majorsdspgamc.com/college-other-facilities/"
                className="flex items-center justify-center gap-2 rounded-full border-2 border-cream/20 bg-white/5 px-10 py-4 text-base font-bold text-cream backdrop-blur-sm transition-all duration-300 hover:border-gold/60 hover:bg-white/10 hover:text-gold active:scale-95"
              >
                {/* Play icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.069A1 1 0 0121 8.882v6.236a1 1 0 01-1.447.894L15 14M3 8a1 1 0 011-1h8a1 1 0 011 1v8a1 1 0 01-1 1H4a1 1 0 01-1-1V8z" />
                </svg>
                Campus Tour
              </a>
            </motion.div>

            {/* Trust strip */}
            <motion.div
              variants={item}
              className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 lg:justify-start"
            >
              {[
                { icon: "🏛️", label: "Est. 1965" },
                { icon: "🎓", label: "CCIM Approved" },
                { icon: "🏥", label: "300-Bed Hospital" },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-1.5 text-xs text-cream/50">
                  <span>{stat.icon}</span>
                  <span className="font-medium tracking-wide">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Form Container ── */}
          <motion.div
            className="relative z-20 w-full max-w-lg lg:w-112.5 xl:w-125"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            {/* Outer glow ring */}
            <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-gold/40 via-transparent to-sky/20 opacity-70 blur-sm" />

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/95 p-1 shadow-2xl shadow-black/40 backdrop-blur-xl sm:rounded-3xl">
              <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
                <div className="flex items-center gap-2">
                  {/* Dot accent */}
                  <span className="h-2.5 w-2.5 rounded-full bg-gold" />
                  <h3 className="font-bold text-charcoal">Registration Form</h3>
                </div>
                <span className="rounded-full bg-green-50 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-green-600">
                  Free
                </span>
              </div>
              <div
                id={APPLICATION_FORM_DIV_ID}
                className="h-118 w-full overflow-x-hidden overflow-y-hidden bg-white **:max-w-full sm:h-156"
              />
            </div>

            {/* Decorative blurs */}
            <div className="absolute -bottom-6 -right-6 -z-10 h-40 w-40 rounded-full bg-gold/25 blur-3xl" />
            <div className="absolute -top-6 -left-6 -z-10 h-40 w-40 rounded-full bg-sky/20 blur-3xl" />
          </motion.div>
        </div>
      </div>

      {/* Shimmer keyframe — add to your global CSS if not already present */}
      <style>{`
        @keyframes shimmer {
          0%   { transform: translateX(-100%); }
          60%  { transform: translateX(100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
}
