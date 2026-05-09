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

  const headerClasses = isScrolled
    ? "bg-white shadow-md py-3"
    : "bg-transparent py-5";

  const textColor = isScrolled ? "text-gray-800" : "text-white";
  const linkColor = isScrolled
    ? "text-gray-700 hover:text-cla-purple"
    : "text-white hover:text-cyan-400";
  const hamburgerBarColor = isScrolled ? "bg-gray-800" : "bg-white";

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerClasses}`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo and School Name */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="flex items-center gap-3 shrink-0"
        >
          <img
            src={claLogo}
            alt="CLA Logo"
            className="h-10 w-auto rounded"
            width={40}
            height={40}
          />
          <span
            className={`font-heading text-lg sm:text-xl font-bold transition-colors duration-200 ${textColor}`}
          >
            Christian Living Academy
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-sm font-medium transition-colors duration-200 ${linkColor}`}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={onOpenModal}
            className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors duration-200"
          >
            Apply Now
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
        >
          <motion.span
            animate={
              mobileMenuOpen
                ? { rotate: 45, y: 6, width: 24 }
                : { rotate: 0, y: 0, width: 24 }
            }
            transition={{ duration: 0.3 }}
            className={`block h-0.5 rounded-full transition-colors duration-200 ${hamburgerBarColor}`}
            style={{ width: 24 }}
          />
          <motion.span
            animate={
              mobileMenuOpen ? { opacity: 0, width: 0 } : { opacity: 1, width: 24 }
            }
            transition={{ duration: 0.3 }}
            className={`block h-0.5 rounded-full transition-colors duration-200 ${hamburgerBarColor}`}
            style={{ width: 24 }}
          />
          <motion.span
            animate={
              mobileMenuOpen
                ? { rotate: -45, y: -6, width: 24 }
                : { rotate: 0, y: 0, width: 24 }
            }
            transition={{ duration: 0.3 }}
            className={`block h-0.5 rounded-full transition-colors duration-200 ${hamburgerBarColor}`}
            style={{ width: 24 }}
          />
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-white shadow-lg"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-gray-700 hover:text-cla-purple text-base font-medium transition-colors duration-200 py-2"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenModal();
                }}
                className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors duration-200 mt-2"
              >
                Apply Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
