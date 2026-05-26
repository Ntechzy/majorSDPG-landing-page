"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { Quote } from "lucide-react";
import SectionLabel from "./SectionLabel";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Anjali Verma",
    role: "BAMS Student, 3rd Year",
    text: "BAMS training here is very balanced. We study classical Ayurvedic Samhitas deeply and also get clear understanding of modern anatomy, physiology, and clinical practice.",
    avatar:
      "/avatar/f1.png",
  },
  {
    id: 2,
    name: "Dr. Nidhi Sharma",
    role: "MS Prasuti Tantra Alumna",
    text: "The Prasuti Tantra Avum Stri Rog program gave me excellent exposure in Garbhini Paricharya, Yoni Vyapad Chikitsa, and real OBG clinical postings with confident mentorship.",
    avatar:
      "/avatar/f4.png",
  },
  {
    id: 3,
    name: "Dr. Raghav Singh",
    role: "MS Shalya Tantra, Final Year",
    text: "From Sushruta Samhita concepts to OT exposure, the Shalya Tantra curriculum is practical and disciplined. Ksharasutra and wound management sessions are especially strong.",
    avatar:
      "/avatar/b2.png",
  },
  {
    id: 4,
    name: "Priya Tiwari",
    role: "BAMS Intern",
    text: "The one-year internship after BAMS helped me convert textbook concepts into patient care. Panchakarma, Rasayana, and clinical decision-making improved a lot.",
    avatar:
      "/avatar/f3.png",
  },
  {
    id: 5,
    name: "Dr. Meenal Joshi",
    role: "Assistant Professor, Prasuti Dept.",
    text: "Our MS scholars are trained to integrate Ayurvedic principles with modern gynecology protocols. Their diagnostic clarity and case documentation quality are impressive.",
    avatar:
      "/avatar/f2.png",
  },
  {
    id: 6,
    name: "Dr. Vivek Chauhan",
    role: "Consultant Ayurvedic Surgeon",
    text: "Graduates from the Shalya Tantra stream show strong surgical fundamentals, especially in para-surgical procedures like Ksharasutra and structured peri-operative care.",
    avatar:
      "/avatar/b3.png",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const visibleCards = [
    TESTIMONIALS[currentIndex % TESTIMONIALS.length],
    TESTIMONIALS[(currentIndex + 1) % TESTIMONIALS.length],
    TESTIMONIALS[(currentIndex + 2) % TESTIMONIALS.length],
  ];

  return (
    <section className="relative overflow-hidden bg-cream px-4 py-16 sm:px-6 sm:py-18 lg:px-8">
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-gold/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-gold-dark/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-12 text-center sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex"
          >
            <SectionLabel>Testimonials</SectionLabel>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-4 text-3xl font-bold leading-tight text-charcoal md:text-5xl"
          >
            What People Say About
            <span className="text-gold-dark"> Our College</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            viewport={{ once: true }}
            className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-charcoal/70 sm:text-lg"
          >
            Hear experiences from our students, alumni, faculty, and healthcare
            professionals about academics, clinical exposure, and campus life.
          </motion.p>
        </div>

        <div className="relative min-h-90">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
            >
              {visibleCards.map((testimonial) => (
                <motion.div
                  key={`${currentIndex}-${testimonial.id}`}
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="group relative flex h-full flex-col overflow-hidden rounded-4xl border border-gold/15 bg-white/80 p-6 shadow-[0_10px_60px_rgba(0,0,0,0.06)] backdrop-blur-xl md:p-8"
                >
                  <div className="absolute left-0 top-0 h-1 w-full bg-linear-to-r from-gold via-gold-dark to-gold" />

                  <div className="absolute right-5 top-5 opacity-10 transition group-hover:opacity-20">
                    <Quote size={64} className="text-gold-dark" />
                  </div>

                  <div className="mb-5 flex gap-1 text-gold">
                    {[...Array(5)].map((_, idx) => (
                      <FaStar key={idx} size={14} />
                    ))}
                  </div>

                  <p className="relative z-10 mb-8 text-sm leading-7 text-charcoal/70 sm:text-[15px]">
                    "{testimonial.text}"
                  </p>

                  <div className="mt-auto flex items-center gap-4">
                    <div className="relative">
                      <div className="absolute inset-0 scale-110 rounded-full bg-gold/25 blur-md" />

                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        loading="lazy"
                        className="relative h-14 w-14 rounded-full border-2 border-white object-cover shadow-lg sm:h-16 sm:w-16"
                      />
                    </div>

                    <div>
                      <h4 className="text-base font-bold text-charcoal sm:text-lg">
                        {testimonial.name}
                      </h4>

                      <p className="mt-1 text-sm font-medium text-gold-dark">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  <div className="absolute inset-0 rounded-4xl border border-transparent transition duration-500 group-hover:border-gold/40" />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex justify-center gap-3 sm:mt-12">
          {TESTIMONIALS.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Show testimonial ${index + 1}`}
              className={`rounded-full transition-all duration-500 ${
                currentIndex === index
                  ? "h-3 w-10 bg-gold"
                  : "h-3 w-3 bg-charcoal/20 hover:bg-gold/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
