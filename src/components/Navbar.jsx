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

  const headerStyle = isScrolled
    ? {
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        boxShadow: "0 2px 20px rgba(0, 0, 0, 0.1)",
        transition: "all 300ms ease",
      }
    : {
        backgroundColor: "transparent",
        backdropFilter: "none",
        WebkitBackdropFilter: "none",
        boxShadow: "none",
        transition: "all 300ms ease",
      };

  const textColor = isScrolled ? "#2D1B69" : "#ffffff";
  const hamburgerBarBg = isScrolled ? "#2D1B69" : "#ffffff";

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 h-20 max-w-full overflow-x-hidden"
      style={headerStyle}
    >
      <nav className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo and School Name */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="flex items-center gap-3"
        >
          <img
            src={claLogo}
            alt="Christian Living Academy Logo"
            className="h-11 w-11 rounded-full object-cover"
            style={{ border: "2px solid #FFB800" }}
          />
          <span
            className="text-xl font-bold hidden sm:inline"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: textColor,
              transition: "color 300ms ease",
            }}
          >
            Christian Living Academy
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="nav-link-gold text-sm font-medium"
              style={{
                color: textColor,
                transition: "color 300ms ease",
              }}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={onOpenModal}
            className="font-bold"
            style={{
              backgroundColor: "#FFB800",
              color: "#2D1B69",
              borderRadius: "9999px",
              padding: "0.625rem 1.5rem",
              transition: "filter 200ms ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.filter = "brightness(0.9)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.filter = "brightness(1)";
            }}
          >
            Apply Now
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMobileMenu}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          <motion.span
            className="block h-0.5 w-6 rounded-full"
            style={{ backgroundColor: mobileMenuOpen ? "#ffffff" : hamburgerBarBg }}
            animate={
              mobileMenuOpen
                ? { rotate: 45, y: 8, transition: { duration: 0.3 } }
                : { rotate: 0, y: 0, transition: { duration: 0.3 } }
            }
          />
          <motion.span
            className="block h-0.5 w-6 rounded-full"
            style={{ backgroundColor: mobileMenuOpen ? "#ffffff" : hamburgerBarBg }}
            animate={
              mobileMenuOpen
                ? { opacity: 0, transition: { duration: 0.2 } }
                : { opacity: 1, transition: { duration: 0.2 } }
            }
          />
          <motion.span
            className="block h-0.5 w-6 rounded-full"
            style={{ backgroundColor: mobileMenuOpen ? "#ffffff" : hamburgerBarBg }}
            animate={
              mobileMenuOpen
                ? { rotate: -45, y: -8, transition: { duration: 0.3 } }
                : { rotate: 0, y: 0, transition: { duration: 0.3 } }
            }
          />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8"
            style={{ backgroundColor: "#2D1B69" }}
          >
            {NAV_LINKS.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.07, duration: 0.3 }}
                className="text-2xl font-semibold text-white nav-link-gold"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenModal) {
                  onOpenModal();
                }
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: NAV_LINKS.length * 0.07, duration: 0.3 }}
              className="font-bold"
              style={{
                backgroundColor: "#FFB800",
                color: "#2D1B69",
                borderRadius: "9999px",
                padding: "0.625rem 1.5rem",
                fontSize: "1.125rem",
              }}
            >
              Apply Now
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
