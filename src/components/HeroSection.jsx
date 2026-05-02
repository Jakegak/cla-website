import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Image with Dark Glass Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2622&auto=format&fit=crop"
          alt="Students learning"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/80 to-slate-900/95"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-16">
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-blue-500/20 text-blue-200 border border-blue-400/30 text-sm md:text-base font-bold tracking-widest uppercase mb-6 backdrop-blur-md shadow-lg">
            Admission In Progress {/*  */}
          </span>
        </motion.div>

        {/* Animated Main Title */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Christian Living <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            Academy {/*  */}
          </span>
        </motion.h1>

        {/* Animated Subtitle */}
        <motion.p
          className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto font-light leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <strong className="text-white font-semibold">
            The Brightest Future, Begins Here!
          </strong>{" "}
          {/*  */} <br />
          Raising a God-fearing, Elite Generation. {/*  */}
        </motion.p>

        {/* Animated Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {/* Changed button to 'a' tag and added href="#admissions" */}
          <a
            href="#admissions"
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white rounded-full font-bold text-lg transition-all transform hover:scale-105 hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] active:scale-95 flex items-center gap-2"
          >
            Join Us Today
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>

          {/* Changed button to 'a' tag and added href="#programs" */}
          <a
            href="#programs"
            className="px-8 py-4 bg-white/5 border border-white/20 hover:border-white/60 hover:bg-white/10 text-white rounded-full font-bold text-lg transition-all backdrop-blur-sm"
          >
            Explore Programs
          </a>
        </motion.div>
      </div>
    </section>
  );
}
