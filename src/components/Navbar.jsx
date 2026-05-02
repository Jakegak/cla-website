import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Logo from "./Logo"; // Make sure this is the only logo import!

export default function Navbar({ onOpenModal }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/80 backdrop-blur-md shadow-lg py-3 border-b border-slate-800/50"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
        {/* NEW SVG LOGO AND BRAND */}
        <a href="#" className="flex items-center gap-3 group">
          <Logo className="w-10 h-10 transition-transform group-hover:scale-110 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
          <span className="text-2xl font-extrabold text-white tracking-tight hidden sm:block">
            CLA <span className="text-blue-400">Academy</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-8 items-center">
          <a
            href="#about"
            className="text-sm font-semibold text-slate-300 hover:text-cyan-400 transition-colors"
          >
            About Us
          </a>
          <a
            href="#programs"
            className="text-sm font-semibold text-slate-300 hover:text-cyan-400 transition-colors"
          >
            Programs
          </a>
          <a
            href="#admissions"
            className="text-sm font-semibold text-slate-300 hover:text-cyan-400 transition-colors"
          >
            Admissions
          </a>

          <button
            onClick={onOpenModal}
            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold text-sm transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(37,99,235,0.4)] cursor-pointer"
          >
            Apply Now
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
