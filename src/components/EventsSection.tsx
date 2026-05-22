import React, { useRef } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { events, type EventCard as EventItem } from "@/constants/eventData";

export const EventsSection: React.FC = () => {
  const duplicatedEvents = [...events, ...events, ...events];
  const controls = useAnimationControls();
  const isPaused = useRef(false);

  const handleMouseEnter = () => {
    isPaused.current = true;
    controls.stop();
  };

  const handleMouseLeave = () => {
    isPaused.current = false;
    controls.start({
      x: ["0%", "-33.33%"],
      transition: {
        ease: "linear",
        duration: 30,
        repeat: Infinity,
      },
    });
  };

  React.useEffect(() => {
    controls.start({
      x: ["0%", "-33.33%"],
      transition: {
        ease: "linear",
        duration: 30,
        repeat: Infinity,
      },
    });
  }, [controls]);

  return (
    <section
      className="relative py-24 px-4 overflow-hidden min-h-screen flex flex-col justify-center"
      style={{ background: "linear-gradient(160deg, #3b1008 0%, #67291b 45%, #4a1a0e 100%)" }}
    >
      {/* Decorative grain texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px",
        }}
      />

      {/* Radial glow behind heading */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-100 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center top, rgba(237,158,56,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Bottom vignette */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-black/50 to-transparent pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 max-w-7xl mx-auto w-full mb-14 px-2 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              {/* Decorative dash */}
              <span
                className="block h-px w-10"
                style={{ background: "#2cabe0" }}
              />
              <span
                className="text-xs font-bold tracking-[0.2em] uppercase"
                style={{ color: "#2cabe0" }}
              >
                Campus Highlights
              </span>
            </div>
            <h2
              className="text-5xl md:text-6xl font-black text-white leading-[1.05] tracking-tight"
            >
              Events at{" "}
              <span
                style={{
                  color: "#ed9e38",
                  fontStyle: "italic",
                }}
              >
                Our College
              </span>
            </h2>
          </div>

          {/* Right-side badge */}
          <div
            className="hidden md:flex items-center gap-2 px-5 py-3 rounded-full border self-start md:self-auto"
            style={{
              borderColor: "rgba(255,255,255,0.12)",
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(8px)",
            }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: "#ed9e38" }}
            />
            <span className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.75)" }}>
              Live updates
            </span>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative z-10 w-full overflow-hidden">
        {/* Edge masks */}
        <div
          className="absolute inset-y-0 left-0 w-24 z-20 pointer-events-none hidden md:block"
          style={{ background: "linear-gradient(to right, #3b1008, transparent)" }}
        />
        <div
          className="absolute inset-y-0 right-0 w-24 z-20 pointer-events-none hidden md:block"
          style={{ background: "linear-gradient(to left, #4a1a0e, transparent)" }}
        />

        <motion.div
          className="flex gap-5 pr-5 shrink-0"
          animate={controls}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ cursor: "grab", willChange: "transform" }}
        >
          {duplicatedEvents.map((event, index) => (
            <EventCard key={`${event.id}-${index}`} event={event} />
          ))}
        </motion.div>
      </div>

      {/* Footer hint */}
      <p
        className="relative z-10 text-center mt-10 text-sm"
        style={{ color: "rgba(255,255,255,0.3)" }}
      >
        Hover to pause · Explore all events ?
      </p>

    </section>
  );
};

/* Event Card */
const EventCard: React.FC<{ event: EventItem }> = ({ event }) => {
  return (
    <div
      className="group relative shrink-0 w-75 sm:w-85 rounded-2xl overflow-hidden flex flex-col"
      style={{
        background: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.08)",
        backdropFilter: "blur(12px)",
        transition: "border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(44,171,224,0.45)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 20px 50px rgba(0,0,0,0.45), 0 0 0 1px rgba(44,171,224,0.15)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
      }}
    >
      {/* Image */}
      <div className="h-52 overflow-hidden relative">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
          style={{ transition: "transform 0.6s ease" }}
          loading="lazy"
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1.07)")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1)")}
        />
        {/* Gradient over image */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(30,8,2,0.85) 0%, rgba(30,8,2,0.2) 50%, transparent 100%)",
          }}
        />

        {/* Category pill on image */}
        {event.category && (
          <span
            className="absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full"
            style={{
              background: "rgba(237,158,56,0.2)",
              border: "1px solid rgba(237,158,56,0.35)",
              color: "#ed9e38",
              backdropFilter: "blur(6px)",
              letterSpacing: "0.05em",
            }}
          >
            {event.category}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col grow justify-between gap-4">
        <h3
          className="text-lg font-bold text-white leading-snug"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            transition: "color 0.25s ease",
          }}
        >
          {event.title}
        </h3>

        {/* Date row (if available) */}
        {event.date && (
          <p
            className="text-xs"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            {event.date}
          </p>
        )}

        <a
          href={event.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold self-start group/link"
          style={{
            color: "#2cabe0",
            transition: "gap 0.2s ease, color 0.2s ease",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.color = "#fff";
            (e.currentTarget as HTMLElement).style.gap = "10px";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.color = "#2cabe0";
            (e.currentTarget as HTMLElement).style.gap = "8px";
          }}
        >
          Learn More
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      {/* Subtle bottom accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: "linear-gradient(to right, transparent, #2cabe0, #ed9e38, transparent)",
        }}
      />
    </div>
  );
};

export default EventsSection;

