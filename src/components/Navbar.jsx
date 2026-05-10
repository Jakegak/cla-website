import { useState, useCallback } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import claLogo from "../assets/cla-logo.jpg";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Programmes", href: "#programmes" },
  { label: "Gallery", href: "#gallery" },
  { label: "Admissions", href: "#admissions" },
  { label: "Contact", href: "#contact" },
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

  const headerBg = isScrolled
    ? "bg-white shadow-md"
    : "bg-transparent";

  const textColor = isScrolled ? "text-gray-800" : "text-white";
  const linkColor = isScrolled
    ? "text-gray-700 hover:text-cla-purple"
    : "text-white hover:text-cyan-400";
  const hamburgerBarColor = isScrolled ? "bg-gray-800" : "bg-white";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full max-w-full overflow-x-hidden relative transition-all duration-300 ${headerBg}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-3 flex-shrink-0 min-w-0"
          >
            <img
              src={claLogo}
              alt="CLA Logo"
              className="h-12 w-12 rounded-full object-cover"
            />
            <span className={`text-xl font-bold whitespace-nowrap ${textColor}`}>
              CLA
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 min-w-0 flex-1 flex-wrap justify-end">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-medium whitespace-nowrap transition-colors duration-200 ${linkColor}`}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={onOpenModal}
              className="bg-cla-red text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-red-700 transition-colors duration-200 whitespace-nowrap flex-shrink-0"
            >
              Apply Now
            </button>
          </nav>

          {/* Hamburger Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 flex-shrink-0"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            <motion.span
              animate={
                mobileMenuOpen
                  ? { rotate: 45, y: 8 }
                  : { rotate: 0, y: 0 }
              }
              className={`block w-6 h-0.5 ${hamburgerBarColor}`}
            />
            <motion.span
              animate={
                mobileMenuOpen
                  ? { opacity: 0 }
                  : { opacity: 1 }
              }
              className={`block w-6 h-0.5 ${hamburgerBarColor}`}
            />
            <motion.span
              animate={
                mobileMenuOpen
                  ? { rotate: -45, y: -8 }
                  : { rotate: 0, y: 0 }
              }
              className={`block w-6 h-0.5 ${hamburgerBarColor}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-white shadow-lg w-full"
          >
            <nav className="flex flex-col px-4 py-4 gap-3 overflow-y-auto max-h-[80vh]">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-gray-700 hover:text-cla-purple font-medium py-3 min-h-[44px] flex items-center transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenModal();
                }}
                className="w-full bg-cla-red text-white py-3 rounded-full font-semibold hover:bg-red-700 transition-colors duration-200 mt-2"
              >
                Apply Now
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
