import { useState } from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const CONTACT_INFO = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: "Email",
    value: "info@christianlivingacademy.com",
    href: "mailto:info@christianlivingacademy.com",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M22 16.92V19.92C22 20.4704 21.7893 20.9991 21.4142 21.3942C21.0391 21.7893 20.5304 22 20 22C10.61 21.44 3.56 14.39 3 5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H8C8.53043 3 9.03914 3.21071 9.41421 3.58579C9.78929 3.96086 10 4.46957 10 5C10 6.49 10.28 7.93 10.78 9.27L8.79 11.26C10.06 13.94 12.06 15.94 14.74 17.21L16.73 15.22C18.07 15.72 19.51 16 21 16C21.5304 16 22.0391 16.2107 22.4142 16.5858C22.7893 16.9609 23 17.4696 23 18L22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: "Phone",
    value: "0798 767 773",
    href: "tel:0798767773",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: "Location",
    value: "Nairobi, Kenya",
  },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-light-white section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="section-heading text-3xl sm:text-4xl font-bold text-cla-purple mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about admissions or our programmes? We would love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column: Contact Info + Map */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Contact Info Cards */}
            <div className="space-y-6 mb-8">
              {CONTACT_INFO.map((info, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-purple-50 transition-colors duration-300"
                  variants={fadeInUp}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-cla-purple/10 text-cla-purple flex items-center justify-center">
                    {info.icon}
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-medium text-gray-500 mb-1">
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-gray-800 font-medium hover:text-cla-purple transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-800 font-medium">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Google Maps Embed */}
            <motion.div
              className="rounded-xl overflow-hidden shadow-lg h-64 lg:h-72"
              variants={fadeInUp}
            >
              <iframe
                title="Christian Living Academy Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.35853743783!2d36.68219929687501!3d-1.3028617999999872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl shadow-xl p-8 space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2 text-left"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cla-purple focus:border-transparent transition-all duration-300 outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2 text-left"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cla-purple focus:border-transparent transition-all duration-300 outline-none"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2 text-left"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cla-purple focus:border-transparent transition-all duration-300 outline-none"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2 text-left"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cla-purple focus:border-transparent transition-all duration-300 outline-none resize-none"
                  placeholder="Tell us more..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 rounded-lg bg-cla-purple text-white font-semibold hover:bg-cla-purple/90 focus:ring-4 focus:ring-cla-purple/30 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {submitStatus === "success" && (
                <p className="text-green-600 text-sm font-medium text-center">
                  Thank you! Your message has been sent successfully.
                </p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-600 text-sm font-medium text-center">
                  Something went wrong. Please try again later.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
