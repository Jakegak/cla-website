import { motion } from "framer-motion";

function DecoativeCross() {
  return (
    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="45" y="10" width="30" height="100" rx="4" fill="white" />
      <rect x="10" y="45" width="100" height="30" rx="4" fill="white" />
      <path d="M60 5L65 15H55L60 5Z" fill="white" />
    </svg>
  );
}

function GraduationCap() {
  return (
    <svg
      width="140"
      height="100"
      viewBox="0 0 140 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <polygon points="70,10 140,40 70,55 0,40" fill="white" />
      <rect x="65" y="55" width="10" height="30" fill="white" />
      <path
        d="M30 45 L30 70 Q70 90 110 70 L110 45"
        stroke="white"
        strokeWidth="4"
        fill="none"
      />
      <circle cx="130" cy="40" r="5" fill="white" />
      <line x1="130" y1="40" x2="130" y2="75" stroke="white" strokeWidth="3" />
      <rect x="120" y="72" width="20" height="8" rx="2" fill="white" />
    </svg>
  );
}

export default function HeroSection({ onOpenModal }) {
  const handleLearnMoreClick = (e) => {
    e.preventDefault();
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #2D1B69 0%, #CC0000 100%)",
      }}
    >
      {/* White diagonal stripe overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "repeating-linear-gradient(135deg, transparent, transparent 80px, rgba(255,255,255,0.15) 80px, rgba(255,255,255,0.15) 160px)",
          pointerEvents: "none",
        }}
      />

      {/* Subtle dot grid pattern overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
          pointerEvents: "none",
        }}
      />

      {/* Bottom fade to white */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"
        aria-hidden="true"
      />

      {/* Main content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0, duration: 0.7, ease: "easeOut" }}
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "white",
            fontSize: "clamp(3rem, 8vw, 6rem)",
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: "1.5rem",
          }}
        >
          Children&apos;s Learning Academy
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl mx-auto"
          style={{
            fontFamily: "'Inter', sans-serif",
            color: "#FFB800",
            fontSize: "1.25rem",
            fontWeight: 500,
            marginBottom: "2.5rem",
          }}
        >
          Nurturing young minds through faith, knowledge, and character
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={onOpenModal}
            className="hover:opacity-90 transition-opacity cursor-pointer"
            style={{
              backgroundColor: "#FFB800",
              color: "#2D1B69",
              padding: "0.75rem 2rem",
              borderRadius: "0.5rem",
              fontWeight: 700,
              fontFamily: "'Inter', sans-serif",
              fontSize: "1rem",
              border: "none",
            }}
          >
            Apply Now
          </button>
          <a
            href="#about"
            onClick={handleLearnMoreClick}
            className="hover:opacity-90 transition-opacity"
            style={{
              border: "2px solid white",
              color: "white",
              backgroundColor: "transparent",
              padding: "0.75rem 2rem",
              borderRadius: "0.5rem",
              fontWeight: 600,
              fontFamily: "'Inter', sans-serif",
              fontSize: "1rem",
              display: "inline-flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            Learn More
          </a>
        </motion.div>
      </div>
    </section>
  );
}
