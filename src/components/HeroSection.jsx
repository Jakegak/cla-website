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
      <circle cx="130" cy="40" r="4" fill="white" />
      <line x1="130" y1="44" x2="130" y2="75" stroke="white" strokeWidth="3" />
      <rect x="125" y="75" width="10" height="6" rx="2" fill="white" />
    </svg>
  );
}

export default function HeroSection({ onOpenModal }) {
  const handleLearnMore = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cla-purple to-cla-red">
      {/* Pattern overlay */}
      <div className="hero-pattern absolute inset-0 z-0 pointer-events-none" />

      {/* Decorative floating cross — top right */}
      <motion.div
        className="absolute top-20 right-8 sm:right-16 md:right-24 opacity-10 pointer-events-none hidden sm:block"
        variants={floatVariants}
        initial="initial"
        animate="animate"
      >
        <DecoativeCross />
      </motion.div>

      {/* Decorative floating graduation cap — bottom left */}
      <motion.div
        className="absolute bottom-16 left-6 sm:left-16 md:left-24 opacity-10 pointer-events-none hidden sm:block"
        variants={floatVariants}
        initial="initial"
        animate="animate"
        style={{ animationDelay: "3s" }}
      >
        <GraduationCap />
      </motion.div>

      {/* Gradient edge fade at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent z-0 pointer-events-none" />

      {/* Main content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Animated badge */}
        <motion.div variants={childVariants}>
          <span className="inline-block py-1.5 px-5 rounded-full bg-white/10 text-white/80 border border-white/20 text-sm font-semibold tracking-widest uppercase mb-8 backdrop-blur-sm">
            Admission In Progress
          </span>
        </motion.div>

        {/* School name */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg"
          variants={childVariants}
        >
          Christian Living Academy
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-cla-gold font-semibold mb-12 tracking-wide"
          variants={childVariants}
        >
          Raising God Fearing Elite Generation
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          variants={childVariants}
        >
          <button
            type="button"
            onClick={onOpenModal}
            className="bg-cla-gold text-slate-900 font-bold px-8 py-3.5 rounded-lg text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer w-full sm:w-auto"
          >
            Apply Now
          </button>
          <button
            type="button"
            onClick={handleLearnMore}
            className="border-2 border-white text-white font-bold px-8 py-3.5 rounded-lg text-lg hover:bg-white/10 hover:scale-105 transition-all duration-300 cursor-pointer w-full sm:w-auto"
          >
            Learn More
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
