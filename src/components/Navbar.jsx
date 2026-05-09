import { useState, useCallback } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Logo from "./Logo";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Gallery", href: "#gallery" },
  { label: "Admissions", href: "#admissions" },
  { label: "Contact", href: "#contact" }
];

export default function Navbar({ onOpenModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const handleNavClick = useCallback((e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen((prev) => !prev);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/90 backdrop-blur-md shadow-lg py-3 border-b border-slate-800/50"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
        {/* Logo and School Name */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="flex items-center gap-3 group"
        >
          <Logo
            className="w-10 h-10 transition-transform group-hover:scale-110 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
          />
          <span className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
            Christian Living{" "}
            <span className="text-blue-400">Academy</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={onOpenModal}
            className="ml-2 px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-lg transition-colors duration-200 shadow-md hover:shadow-blue-500/25"
          >
            Apply Now
          </button>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          <motion.span
            animate={
              mobileMenuOpen
                ? { rotate: 45, y: 6, backgroundColor: "#22d3ee" }
                : { rotate: 0, y: 0, backgroundColor: "#e2e8f0" }
            }
            transition={{ duration: 0.25 }}
            className="block w-6 h-0.5 rounded-full"
          />
          <motion.span
            animate={
              mobileMenuOpen
                ? { opacity: 0, scaleX: 0 }
                : { opacity: 1, scaleX: 1 }
            }
            transition={{ duration: 0.2 }}
            className="block w-6 h-0.5 rounded-full bg-slate-200"
          />
          <motion.span
            animate={
              mobileMenuOpen
                ? { rotate: -45, y: -6, backgroundColor: "#22d3ee" }
                : { rotate: 0, y: 0, backgroundColor: "#e2e8f0" }
            }
            transition={{ duration: 0.25 }}
            className="block w-6 h-0.5 rounded-full"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-slate-950/95 backdrop-blur-md border-t border-slate-800/50"
          >
            <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.2 }}
                  className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 text-base font-medium py-3 px-2 rounded-lg hover:bg-slate-800/50"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.05, duration: 0.2 }}
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenModal();
                }}
                className="mt-2 w-full px-5 py-3 bg-blue-600 hover:bg-blue-500 text-white text-base font-semibold rounded-lg transition-colors duration-200 shadow-md"
              >
                Apply Now
              </motion.button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
