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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerClasses}`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-3"
          >
            <img
              src={claLogo}
              alt="CLA Logo"
              className="h-10 w-10 rounded-full object-cover"
            />
            <span
              className={`font-bold text-lg ${textColor} transition-colors duration-300`}
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              CLA
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-medium transition-colors duration-300 ${linkColor}`}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={onOpenModal}
              className="px-5 py-2 text-sm font-semibold text-white rounded-full transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #667eea, #764ba2)",
              }}
            >
              Apply Now
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
          >
            <span
              className={`block w-6 h-0.5 rounded transition-all duration-300 ${hamburgerBarColor} ${
                mobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 rounded transition-all duration-300 ${hamburgerBarColor} ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 rounded transition-all duration-300 ${hamburgerBarColor} ${
                mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 flex flex-col gap-3">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`text-sm font-medium px-2 py-1 transition-colors duration-300 ${linkColor}`}
                  >
                    {link.label}
                  </a>
                ))}
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenModal();
                  }}
                  className="mt-2 px-5 py-2 text-sm font-semibold text-white rounded-full transition-all duration-300"
                  style={{
                    background: "linear-gradient(135deg, #667eea, #764ba2)",
                  }}
                >
                  Apply Now
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
