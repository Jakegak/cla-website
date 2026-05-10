import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";

function CountUpValue({ target, suffix = "", duration = 2000 }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    let startTime = null;
    let rafId = null;

    const animate = (timestamp) => {
      if (!startTime) {
        startTime = timestamp;
      }

      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setCurrent(Math.round(eased * target));

      if (progress < 1) {
        rafId = requestAnimationFrame(animate);
      }
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [target, duration]);

  return (
    <span>
      {current}
      {suffix}
    </span>
  );
}

const stats = [
  { target: 500, suffix: "+", label: "Students" },
  { target: 50, suffix: "+", label: "Staff" },
  { target: 15, suffix: "+", label: "Years" },
  { target: 100, suffix: "%", label: "Christian Values" },
];

export default function HeroSection({ onOpenModal }) {
  const handleExploreClick = useCallback((e) => {
    e.preventDefault();
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const handleScrollDown = useCallback(() => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <section
      id="home"
      className="hero-gradient relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Cross pattern overlay */}
      <div className="hero-cross-pattern" aria-hidden="true" />

      {/* Content container */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 py-20">
        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0 }}
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "#ffffff",
            fontSize: "clamp(3.5rem, 8vw, 6rem)",
            fontWeight: "bold",
            lineHeight: 1.1,
            marginBottom: "1.5rem",
          }}
        >
          Christian Living Academy
        </motion.h1>

        {/* Sub-heading / tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            color: "#FFB800",
            fontFamily: "'Inter', sans-serif",
            fontSize: "1.25rem",
            letterSpacing: "0.05em",
            marginBottom: "2.5rem",
            fontWeight: 600,
          }}
        >
          Raising God Fearing Elite Generation
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <button
            onClick={onOpenModal}
            className="font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300 hover:scale-105 cursor-pointer"
            style={{
              backgroundColor: "#FFB800",
              color: "#2D1B69",
            }}
          >
            Apply Now
          </button>
          <button
            onClick={handleExploreClick}
            className="px-8 py-4 rounded-lg text-lg border-2 border-white text-white bg-transparent transition-all duration-300 hover:bg-white hover:text-cla-purple cursor-pointer"
          >
            Explore School
          </button>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-3xl md:text-4xl font-bold mb-1"
                style={{ color: "#FFB800" }}
              >
                <CountUpValue
                  target={stat.target}
                  suffix={stat.suffix}
                  duration={2000}
                />
              </div>
              <div
                className="text-sm md:text-base"
                style={{
                  color: "rgba(255, 255, 255, 0.85)",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bouncing scroll indicator */}
      <div
        className="bounce-arrow absolute bottom-8 left-1/2 -translate-x-1/2 z-10 cursor-pointer"
        onClick={handleScrollDown}
        role="button"
        tabIndex={0}
        aria-label="Scroll down"
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            handleScrollDown();
          }
        }}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>

      {/* Bottom fade to match bg-slate-900 */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-900 to-transparent z-10 pointer-events-none"
        aria-hidden="true"
      />
    </section>
  );
}
