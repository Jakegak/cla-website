import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const floatVariants = {
  initial: { y: 0 },
  animate: {
    y: [-12, 12, -12],
    transition: {
      duration: 6,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
    },
  },
};

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
      <path
        d="M60 5L65 15H55L60 5Z"
        fill="white"
      />
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
      <line x1="130" y1="45" x2="130" y2="75" stroke="white" strokeWidth="3" />
      <rect x="125" y="75" width="10" height="5" rx="2" fill="white" />
    </svg>
  );
}

export default function HeroSection({ onOpenModal }) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(to bottom, #2D1B69, #1a1045)" }}
    >
      {/* Decorative floating elements */}
      <motion.div
        className="absolute top-20 left-10 opacity-10"
        variants={floatVariants}
        initial="initial"
        animate="animate"
      >
        <DecoativeCross />
      </motion.div>

      <motion.div
        className="absolute top-32 right-16 opacity-10"
        variants={floatVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 1 }}
      >
        <GraduationCap />
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-20 opacity-10"
        variants={floatVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 2 }}
      >
        <DecoativeCross />
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-10 opacity-10"
        variants={floatVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 3 }}
      >
        <GraduationCap />
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />

      {/* Main content */}
      <motion.div
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          variants={childVariants}
        >
          Christian Learners&apos; Academy
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl lg:text-2xl mb-10 max-w-2xl mx-auto font-medium"
          variants={childVariants}
          style={{ color: "#FFB800" }}
        >
          Nurturing minds, building character, and shaping futures through
          faith-based education.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={childVariants}
        >
          <button
            onClick={onOpenModal}
            className="px-8 py-3 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            style={{ backgroundColor: "#FFB800", color: "#2D1B69" }}
          >
            Apply Now
          </button>
          <a
            href="#about"
            className="px-8 py-3 bg-white/20 backdrop-blur-sm text-white rounded-lg font-semibold text-lg border-2 border-white/30 hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById("about");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Learn More
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
