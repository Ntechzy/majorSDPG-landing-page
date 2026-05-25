"use client";

import React from "react";
import { motion } from "framer-motion";
import { events, type EventCard as EventItem } from "@/constants/eventData";
import SectionLabel from "./SectionLabel";

export const EventsSection: React.FC = () => {
  return (
    <section className="relative py-24 px-4 bg-white overflow-hidden">
      {/* Header */}
       <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="text-center mb-16"
>
  <SectionLabel>College Event Gallery</SectionLabel>

  <h2 className="mt-4 text-3xl md:text-5xl font-bold text-charcoal leading-tight">
    Celebrating Moments of <span className="text-gold-dark">Learning & Excellence</span>
  </h2>

  <p className="mt-4 text-charcoal/50 max-w-2xl mx-auto text-base">
    Explore memorable highlights from cultural programs, academic achievements,
    sports events, conferences, health camps, and vibrant campus celebrations at
    Major SD Singh PG Ayurvedic Medical College & Hospital.
  </p>

  <div className="flex items-center justify-center gap-3 mt-6">
    <div className="h-px w-12 bg-gold/40" />
    <div className="w-2 h-2 rounded-full bg-gold" />
    <div className="h-px w-12 bg-gold/40" />
  </div>
</motion.div>


      {/* Bento Grid Gallery */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] gap-5">
        {events.map((event, index) => (
          <GalleryCard
            key={event.id}
            event={event}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

/* Gallery Card */
const GalleryCard: React.FC<{
  event: EventItem;
  index: number;
}> = ({ event, index }) => {
  const isLarge = index % 6 === 0;
  const gridClasses = isLarge
    ? "md:col-span-2 md:row-span-2"
    : "md:col-span-1 md:row-span-1";

  return (
    <motion.a
      href={event.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
      }}
      viewport={{ once: true }}
      className={`group relative block overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-500 bg-gray-100 h-full w-full ${gridClasses}`}
    >
      {/* Image */}
      <div className="relative overflow-hidden w-full h-full">
        <img
          src={event.image}
          alt={event.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Overlay Background */}
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Hover Title Content */}
        <div
          className={`absolute bottom-0 left-0 right-0 z-20 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ${
            isLarge ? "p-6" : "p-3"
          }`}
        >
          <div
            className={`rounded-full bg-[#8b1818] mb-2 ${
              isLarge ? "w-12 h-0.75 mb-4" : "w-8 h-0.5 mb-2"
            }`}
          />

          <h3
            className={`font-bold text-white leading-snug ${
              isLarge ? "text-2xl md:text-3xl" : "text-sm md:text-base"
            }`}
          >
            {event.title}
          </h3>

          {/* {event.date && (
            <p
              className={`mt-1 text-gray-300 ${
                isLarge ? "text-sm mt-2" : "text-xs"
              }`}
            >
              {event.date}
            </p>
          )} */}
        </div>
      </div>
    </motion.a>
  );
};

export default EventsSection;