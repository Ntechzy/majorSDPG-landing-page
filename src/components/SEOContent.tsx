import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";

const SEO_POINTS = [
  {
    title: "BAMS Admission in UP",
    text: "Students looking for BAMS NEET admission in UP can explore the 5.5 years Bachelor of Ayurvedic Medicine and Surgery program with hospital-based internship exposure.",
  },
  {
    title: "Ayurvedic College in Farrukhabad",
    text: "The campus on Bewar Road, Fatehgarh-Farrukhabad, is positioned for learners from Central UP, Kanpur, Lucknow, and nearby districts seeking an NCISM approved Ayurvedic medical college.",
  },
  {
    title: "PG Ayurveda Specializations",
    text: "MS Prasuti Tantra Avum Stri Roga and MS Shalya Tantra support AIAPGET-qualified BAMS graduates pursuing Ayurvedic gynecology, obstetrics, surgery, and Ksharasutra therapy training.",
  },
];

const SEARCH_TERMS = [
  "BAMS college Farrukhabad",
  "Ayurvedic college Fatehgarh",
  "BAMS college near Lucknow UP",
  "AYUSH college near Kanpur",
  "NCISM approved PG Ayurvedic college UP",
  "BAMS college with hostel facility UP",
];

export default function SEOContent() {
  return (
    <section className="relative bg-cream py-20 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-gold/25 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl"
        >
          <SectionLabel>Admissions Search Guide</SectionLabel>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-charcoal leading-tight">
            BAMS and MS Ayurveda Admissions in Farrukhabad, Uttar Pradesh
          </h2>
          <p className="mt-5 text-charcoal/65 text-base md:text-lg leading-relaxed">
            Major S.D. Singh PG Ayurvedic Medical College & Hospital serves students comparing
            BAMS colleges in Uttar Pradesh, private BAMS course fees, hostel facilities, and
            postgraduate Ayurveda options in Prasuti Tantra and Shalya Tantra.
          </p>
        </motion.div>

        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {SEO_POINTS.map((point, index) => (
            <motion.article
              key={point.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="bg-white border border-gold/15 rounded-2xl p-6 shadow-sm"
            >
              <h3 className="text-charcoal text-xl font-bold leading-snug">{point.title}</h3>
              <p className="mt-3 text-charcoal/60 text-sm leading-relaxed">{point.text}</p>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {SEARCH_TERMS.map((term) => (
            <span
              key={term}
              className="rounded-full border border-gold/20 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wide text-charcoal/60"
            >
              {term}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
