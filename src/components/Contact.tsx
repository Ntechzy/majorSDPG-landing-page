import { motion } from "framer-motion";
import { FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin, FiArrowUpRight, FiClock } from "react-icons/fi";
import { NAV_LINKS } from "@/constants/data";
import SectionLabel from "./SectionLabel";

const CONTACT_ITEMS = [
  {
    icon: FiPhone,
    label: "Direct Line",
    title: "Call Admissions",
    lines: [{ text: "+91 8189098662", href: "tel:+918189098662" }],
  },
  {
    icon: FiMail,
    label: "Digital Desk",
    title: "Email Queries",
    lines: [{ text: "majorsdsinghayd@gmail.com", href: "mailto:majorsdsinghayd@gmail.com" }],
  },
  {
    icon: FiMapPin,
    label: "Main Campus",
    title: "Find Our Estate",
    lines: [
      {
        text: "Bewar Road, Fatehgarh – Farrukhabad (U.P.) 209601",
        href: "https://maps.google.com/?q=Major+S.D.+Singh+PG+Ayurvedic+Medical+College",
      },
    ],
  },
];

const SOCIAL = [
  { icon: FaFacebookF, label: "Facebook", href: "https://www.facebook.com/majorsdsamc/", color: "hover:text-[#1877F2]" },
  { icon: FaInstagram, label: "Instagram", href: "https://www.instagram.com/majorsdsinghpg/", color: "hover:text-[#E4405F]" },
  { icon: FaYoutube, label: "YouTube", href: "https://www.youtube.com/@majorsdsinghp.g.ayurvedicm4085", color: "hover:text-[#CD201F]" },
  { icon: FaWhatsapp, label: "WhatsApp", href: "https://wa.me/918189098662", color: "hover:text-[#25D366]" },
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-cream py-24 lg:py-32 font-sans">
      {/* Editorial Decorative Geometric Lines */}
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute top-0 right-[25%] bottom-0 w-px bg-gold/6 hidden lg:block" />
      <div className="absolute top-0 left-[25%] bottom-0 w-px bg-gold/6 hidden lg:block" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block: Left-Aligned Editorial Style */}
        <div className="grid lg:grid-cols-5 gap-8 items-end mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 max-w-2xl"
          >
            <SectionLabel>Contact Us</SectionLabel>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold text-charcoal leading-tight tracking-tight">
              Let's begin your <span className="text-gold-dark">Ayurvedic journey</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2"
          >
            <p className="text-charcoal/70 text-base md:text-lg leading-relaxed">
              Whether exploring prospective admissions, standard enrollment verification, or institutional visits, our specialized desks are at your disposal.
            </p>
          </motion.div>
        </div>

        {/* Master Asymmetric Layout Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          
          {/* LEFT PANEL: The Bento Matrix (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-12">
            
            {/* Interactive Pillar List */}
            <div className="divide-y divide-gold/15">
              {CONTACT_ITEMS.map(({ icon: Icon, label, title, lines }, index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="py-8 first:pt-0 last:pb-0 group flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all duration-300"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-full border border-gold/20 bg-white flex items-center justify-center text-gold-dark shrink-0 group-hover:bg-gold group-hover:text-charcoal-deep group-hover:border-gold transition-all duration-500 shadow-sm">
                      <Icon size={18} />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold tracking-widest text-gold-dark/70 uppercase block mb-0.5">
                        {label}
                      </span>
                      <h4 className="text-xl font-bold text-charcoal tracking-tight">{title}</h4>
                    </div>
                  </div>

                  <div className="md:text-right pl-17 md:pl-0 flex flex-col items-start md:items-end">
                    {lines.map((line) => (
                      <a
                        key={line.text}
                        href={line.href}
                        target={line.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-charcoal/70 hover:text-gold-dark font-medium text-base md:text-lg transition-colors group/link"
                      >
                        <span className="truncate max-w-70 sm:max-w-md lg:max-w-xs xl:max-w-sm">
                          {line.text}
                        </span>
                        <FiArrowUpRight size={16} className="opacity-0 group-hover/link:opacity-100 transition-all transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 text-gold" />
                      </a>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Micro Quick Links Footer Layout */}
            <div className="grid sm:grid-cols-2 gap-8 pt-8 border-t border-gold/15">
              <div>
                <h5 className="text-xs uppercase tracking-widest text-charcoal/40 font-bold mb-4">Jump To</h5>
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  {NAV_LINKS.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      className="text-sm font-bold uppercase tracking-wide text-charcoal/60 hover:text-gold-dark transition-colors"
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Floating-style Social Dock Component */}
              <div className="flex flex-col sm:items-end justify-end">
                <h5 className="text-xs uppercase tracking-widest text-charcoal/40 font-bold mb-3 sm:text-right w-full">Digital Echo</h5>
                <div className="inline-flex items-center gap-1 bg-white border border-gold/10 p-1.5 rounded-full shadow-sm">
                  {SOCIAL.map(({ icon: Icon, label, href, color }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className={`w-9 h-9 rounded-full flex items-center justify-center text-charcoal/40 hover:bg-gold/10 transition-all duration-300 ${color}`}
                    >
                      <Icon size={15} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT PANEL: Immersive Media Frame & Dynamic CTAs (5 Columns) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* The Framed Map Viewport */}
            <div className="relative flex-1 min-h-95 lg:min-h-105 rounded-3xl overflow-hidden shadow-2xl shadow-charcoal/5 border border-gold/15 group/map">
              {/* Architectural Frame Overlay */}
              <div className="absolute inset-0 z-10 pointer-events-none border-12 border-white rounded-3xl" />
              <div className="absolute inset-3 z-10 pointer-events-none border border-gold/10" />

              {/* Dynamic Status Tag */}
              <div className="absolute top-6 left-6 z-20 bg-charcoal-deep/90 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 border border-white/10 shadow-lg">
                <FiClock className="text-gold animate-pulse" />
                <span>Visiting Desk Open: 9 AM - 4 PM</span>
              </div>

              <iframe
                title="MSDS AMCH Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d908113.1788198057!2d78.91146252625563!3d27.240582361050407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399e3002fa39fef9%3A0x2f4d08d951adeac1!2sMajor%20S.D.%20Singh%20PG%20Ayurvedic%20Medical%20College!5e0!3m2!1sen!2sin!4v1778667869231!5m2!1sen!2sin"
                className="w-full h-full absolute inset-0 border-0 filter grayscale contrast-110 brightness-95 group-hover/map:grayscale-0 group-hover/map:brightness-100 transition-all duration-700 ease-out"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Shared Modular Actions */}
            <div className="grid sm:grid-cols-2 gap-4">
              <a
                href="https://maps.google.com/?q=Major+S.D.+Singh+PG+Ayurvedic+Medical+College+Farrukhabad"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between bg-white text-charcoal border border-gold/20 hover:border-gold-dark font-bold px-5 py-4 rounded-2xl text-xs uppercase tracking-wider transition-all duration-300 shadow-sm active:scale-[0.99]"
              >
                <span className="flex items-center gap-2">
                  <FiMapPin className="text-gold" />
                  Launch Route Map
                </span>
                <FiArrowUpRight size={16} className="text-charcoal/30 group-hover:text-charcoal group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              <a
                href="https://wa.me/918189098662"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between bg-gold text-charcoal-deep hover:bg-gold-dark hover:text-white font-bold px-5 py-4 rounded-2xl text-xs uppercase tracking-wider transition-all duration-300 shadow-lg active:scale-[0.99] border border-transparent"
              >
                <span className="flex items-center gap-2">
                  <FaWhatsapp className="text-[#25D366]" />
                  Direct WhatsApp
                </span>
                <FiArrowUpRight size={16} className="text-white/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
