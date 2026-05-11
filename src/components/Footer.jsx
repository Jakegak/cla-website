import { useState } from 'react';
import claLogo from '../assets/cla-logo.jpg';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Programmes', href: '#programmes' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Admissions', href: '#admissions' },
  { label: 'Contact', href: '#contact' },
];

function FacebookIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

const socialLinks = [
  { icon: FacebookIcon, href: 'https://facebook.com', label: 'Facebook' },
  { icon: TwitterIcon, href: 'https://twitter.com', label: 'Twitter' },
  { icon: InstagramIcon, href: 'https://instagram.com', label: 'Instagram' },
  { icon: YouTubeIcon, href: 'https://youtube.com', label: 'YouTube' },
];

export default function Footer() {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      className="text-white"
      style={{ backgroundColor: '#2D1B69' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1: Branding + Socials */}
          <div className="flex flex-col items-start gap-6">
            <div className="flex items-center gap-4">
              <img
                src={claLogo}
                alt="Christian Living Academy Logo"
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: '50%',
                  border: '3px solid #FFB800',
                  objectFit: 'cover',
                }}
              />
              <div className="flex flex-col">
                <span
                  className="text-xl font-bold"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: '#FFFFFF',
                  }}
                >
                  Christian Living Academy
                </span>
                <span
                  className="text-sm"
                  style={{
                    color: '#FFB800',
                    fontStyle: 'italic',
                  }}
                >
                  Raising God Fearing Elite Generation
                </span>
              </div>
            </div>

            <p style={{ color: 'rgba(255, 255, 255, 0.7)' }} className="text-sm leading-relaxed">
              Nurturing young minds with faith, excellence, and purpose.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                const isHovered = hoveredSocial === index;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex items-center justify-center transition-colors"
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      border: isHovered ? '2px solid #FFB800' : '2px solid rgba(255, 255, 255, 0.7)',
                      color: isHovered ? '#FFB800' : '#FFFFFF',
                      background: 'transparent',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={() => setHoveredSocial(index)}
                    onMouseLeave={() => setHoveredSocial(null)}
                  >
                    <IconComponent />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3
              className="text-lg font-semibold mb-6"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: '#FFFFFF',
              }}
            >
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link, index) => {
                const isHovered = hoveredLink === index;
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-sm inline-flex items-center"
                      style={{
                        color: '#FFFFFF',
                        paddingLeft: isHovered ? 12 : 0,
                        transition: 'all 0.3s ease',
                      }}
                      onMouseEnter={() => setHoveredLink(index)}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      {isHovered && (
                        <span
                          style={{
                            color: '#FFB800',
                            marginRight: 6,
                            fontWeight: 600,
                          }}
                        >
                          →
                        </span>
                      )}
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3
              className="text-lg font-semibold mb-6"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: '#FFFFFF',
              }}
            >
              Contact Us
            </h3>
            <div className="flex flex-col gap-4">
              {/* Address */}
              <div className="flex items-start gap-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ color: '#FFB800', flexShrink: 0, marginTop: 2 }}
                  aria-hidden="true"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
                  Along Kamiti Road, Near Kahawa West Junction, Nairobi
                </span>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ color: '#FFB800', flexShrink: 0 }}
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                <a
                  href="tel:0798767773"
                  className="text-sm transition-colors"
                  style={{ color: 'rgba(255, 255, 255, 0.85)' }}
                >
                  0798 767 773
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ color: '#FFB800', flexShrink: 0 }}
                  aria-hidden="true"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a
                  href="mailto:info@christianlivingacademy.com"
                  className="text-sm transition-colors"
                  style={{ color: 'rgba(255, 255, 255, 0.85)' }}
                >
                  info@christianlivingacademy.com
                </a>
              </div>

              {/* Hours */}
              <div className="flex items-center gap-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ color: '#FFB800', flexShrink: 0 }}
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
                  Mon – Fri: 7:30 AM – 3:30 PM
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div
        className="border-t py-6"
        style={{ borderColor: 'rgba(255, 255, 255, 0.15)' }}
      >
        <p
          className="text-center text-sm"
          style={{ color: 'rgba(255, 255, 255, 0.6)' }}
        >
          © {new Date().getFullYear()} Christian Living Academy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
