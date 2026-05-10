import Logo from './Logo';

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
      width="24"
      height="24"
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
      width="24"
      height="24"
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
      width="24"
      height="24"
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
      width="24"
      height="24"
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
  { label: 'Facebook', icon: FacebookIcon, href: '#' },
  { label: 'Twitter', icon: TwitterIcon, href: '#' },
  { label: 'Instagram', icon: InstagramIcon, href: '#' },
  { label: 'YouTube', icon: YouTubeIcon, href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-cla-purple text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Three-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1: Logo & Tagline */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Logo className="w-16 h-16" />
              <h3 className="text-2xl font-extrabold tracking-tight">
                Christian Living Academy
              </h3>
            </div>
            <p className="italic text-white/80 mb-4">
              &ldquo;Raising a God-fearing, Elite Generation.&rdquo;
            </p>
            <p className="text-sm text-white/60">
              Dedicated to offering the best education and developing positive
              character that impacts society.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-bold uppercase tracking-wider mb-2">
              Quick Links
            </h4>
            <div className="w-12 h-1 bg-cla-gold rounded mb-6" />
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Summary */}
          <div>
            <h4 className="text-lg font-bold uppercase tracking-wider mb-2">
              Contact Us
            </h4>
            <div className="w-12 h-1 bg-cla-gold rounded mb-6" />
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="mt-1" aria-hidden="true">📍</span>
                <span className="text-white/80">
                  Along Kamiti Road<br />
                  Near Kahawa West Junction
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span aria-hidden="true">📞</span>
                <a
                  href="tel:0798767773"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  0798 767 773
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span aria-hidden="true">✉️</span>
                <a
                  href="mailto:info@christianlivingacademy.com"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  info@christianlivingacademy.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mt-12">
          {socialLinks.map((social) => {
            const IconComponent = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-white/70 hover:text-white transition-colors"
              >
                <IconComponent />
              </a>
            );
          })}
        </div>

        {/* Bottom Copyright Bar */}
        <div className="border-t border-white/20 mt-10 pt-8 text-center">
          <p className="text-sm text-white/60">
            &copy; 2026 Christian Living Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
