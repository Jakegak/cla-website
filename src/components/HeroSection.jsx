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
      className="relative min-h-screen flex items-center justify-center"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
        }}
      />

      {/* Decorative overlay - diagonal stripes */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.03) 35px, rgba(255,255,255,0.03) 70px)",
        }}
      />

      {/* Decorative overlay - dot grid */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* Bottom fade overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />

      {/* Main content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0 }}
          style={{
            fontSize: "clamp(3rem, 8vw, 6rem)",
            lineHeight: 1.2,
            fontWeight: 700,
            fontFamily: "'Playfair Display', serif",
            color: "#ffffff",
            textShadow: "0 2px 10px rgba(0,0,0,0.3)",
          }}
        >
          Children&apos;s Learning Academy
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
            lineHeight: 1.6,
            color: "rgba(255,255,255,0.9)",
            marginTop: "1.5rem",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          Nurturing young minds through play, creativity, and discovery.
          Where every child&apos;s journey begins with joy.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            marginTop: "2.5rem",
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            justifyContent: "center",
          }}
        >
          <button
            onClick={onOpenModal}
            className="cta-apply-btn"
            style={{
              padding: "1rem 2.5rem",
              fontSize: "1.125rem",
              fontWeight: 600,
              color: "#764ba2",
              backgroundColor: "#ffffff",
              borderRadius: "9999px",
              border: "none",
              cursor: "pointer",
              fontFamily: "'Inter', sans-serif",
              boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.2)";
            }}
          >
            Apply Now
          </button>

          <button
            onClick={handleLearnMoreClick}
            style={{
              padding: "1rem 2.5rem",
              fontSize: "1.125rem",
              fontWeight: 600,
              color: "#ffffff",
              backgroundColor: "transparent",
              borderRadius: "9999px",
              border: "2px solid rgba(255,255,255,0.6)",
              cursor: "pointer",
              fontFamily: "'Inter', sans-serif",
              transition: "background-color 0.2s ease, border-color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.15)";
              e.currentTarget.style.borderColor = "#ffffff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.6)";
            }}
          >
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
}
