import { motion } from "framer-motion";

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
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
        }}
      />

      {/* Decorative overlays */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-20 left-10 w-64 h-64 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, white 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, white 0%, transparent 70%)" }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full opacity-5"
          style={{ background: "radial-gradient(circle, white 0%, transparent 70%)" }}
        />
      </div>

      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Nurturing Young Minds,
          <br />
          <span className="text-cla-gold">Building Bright Futures</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl text-white/90 mb-10 max-w-2xl mx-auto"
        >
          Christian Living Academy provides a nurturing environment where
          children grow spiritually, academically, and socially through
          faith-based education.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={onOpenModal}
            className="cta-apply-btn bg-cla-red text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Apply Now
          </button>
          <a
            href="#about"
            onClick={handleLearnMoreClick}
            className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-cla-purple transition-all duration-300"
          >
            Learn More
          </a>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent" />
    </section>
  );
}
