import { useEffect } from "react";
import { motion } from "framer-motion";

const SOURCE_FORM_DIV_ID = "formsID7375";
const LEAD_FORM_DIV_ID = "formsID7375-lead";

const TRUST = [
  "Free Counselling - No obligation",
  "NCISM Approved Programs",
  "Seats Filling Fast for 2026-27",
  "Scholarship information available",
];

export default function LeadForm() {
  useEffect(() => {
    const syncForm = () => {
      const source = document.getElementById(SOURCE_FORM_DIV_ID);
      const target = document.getElementById(LEAD_FORM_DIV_ID);
      if (!source || !target || source === target) return;
      if (!source.children.length) return;
      target.innerHTML = source.innerHTML;
    };

    syncForm();
    const intervalId = window.setInterval(syncForm, 400);
    window.setTimeout(() => window.clearInterval(intervalId), 8000);

    const source = document.getElementById(SOURCE_FORM_DIV_ID);
    const observer = source
      ? new MutationObserver(() => {
          syncForm();
        })
      : null;

    if (source && observer) {
      observer.observe(source, { childList: true, subtree: true });
    }

    return () => {
      window.clearInterval(intervalId);
      observer?.disconnect();
    };
  }, []);

  return (
    <section
      id="lead"
      className="relative  pb-16 lg:pb-0 bg-cover bg-center bg-no-repeat bg-[url('/college3.webp')] overflow-hidden"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

      {/* 3-Column Strip Layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-4 pt-12 md:pt-0">
        
{/* 1. CONTENT CONTAINER (Left Side - Flex-1 automatically adjusts to remaining space) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full lg:flex-1 order-2 lg:order-1 lg:pb-24 z-20 bg-cream/50 p-10  shadow-sm"
        >
          <div className="text-[#d4af37] text-xs font-extrabold uppercase tracking-[0.3em] mb-3">
            Admissions Counsellor
          </div>
          
          {/* Slightly reduced text size here to accommodate the narrower column smoothly */}
          <h2 className="text-3xl xl:text-4xl font-bold text-neutral-800 leading-tight">
            Start Your Ayurvedic Career Today
          </h2>
          
          <p className="text-neutral-600 mt-4 text-base xl:text-md">
            Fill in your details and our admissions counsellor will reach out within 24 hours.
          </p>
          
          <ul className="mt-8 space-y-3">
            {TRUST.map((t) => (
              <li key={t} className="flex items-center gap-3 text-neutral-700 font-medium text-sm xl:text-base">
                <span className="w-6 h-6 rounded-full bg-[#d4af37] text-white flex items-center justify-center text-sm font-bold shrink-0 shadow-sm">
                  ✓
                </span>
                {t}
              </li>
            ))}
          </ul>
          
          <div className="mt-8 space-y-2 text-neutral-700 border-t border-neutral-200 pt-6 text-sm xl:text-base">
            <div className="flex items-center gap-2">
              <span>📞</span>{" "}
              <a href="tel:+918189098662" className="font-semibold text-neutral-800 hover:text-[#d4af37] transition-colors hover:underline">
                +91 8189098662
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span>📧</span>{" "}
              <a href="mailto:majorsdsinghayd@gmail.com" className="font-semibold text-neutral-800 hover:text-[#d4af37] transition-colors hover:underline">
                majorsdsinghayd@gmail.com
              </a>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-1">📍</span>{" "}
              <a
                href="https://maps.app.goo.gl/ACWHJfCqZwpAnnSe8"
                className="font-semibold text-neutral-800 hover:text-[#d4af37] transition-colors hover:underline"
              >
                Major SD Singh PG Ayurvedic Medical College, UP, India
              </a>
            </div>
          </div>
        </motion.div>

        {/* 2. CENTER IMAGE (Middle - Now w-6/12 with max limits removed) */}
       {/* 2. CENTER IMAGE (Increased size via wider column and scale factor) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full lg:w-8/12 hidden lg:flex justify-center items-end self-end order-3 lg:order-2 h-full z-10 lg:z-30"
        >
          <img 
            src="/student1.png" 
            alt="Student Representation" 
            // Added lg:scale-110 and origin-bottom to safely increase the visual size from the base up
            className="w-full max-w-full object-contain object-bottom drop-shadow-2xl transform lg:scale-110 origin-bottom transition-transform duration-300"
          />
        </motion.div>

        {/* 3. FORM CONTAINER (Right Side - flex-shrink-0 protects the width) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full lg:w-4/12 shrink-0 max-w-md mx-auto order-1 lg:order-3 lg:pb-24 z-20"
        >
          <div className="overflow-hidden rounded-lg bg-white shadow-2xl shadow-black/80 border-4 border-[#d4af37]">
            <div className="bg-charcoal-deep px-4 py-4 text-center border-b border-gray-200">
              <h3 className="text-sm font-extrabold uppercase tracking-tight text-white sm:text-base">
                Request Free Counselling
              </h3>
            </div>
            <div
              id={LEAD_FORM_DIV_ID}
              className="h-120 w-full overflow-x-hidden overflow-y-auto bg-white p-2 **:max-w-full"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}