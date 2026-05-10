import { useState } from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const contactDetails = [
  {
    label: "Address",
    value: "Along Kamiti Road, Near Kahawa West Junction, Nairobi",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="12"
          cy="9"
          r="3"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "0798 767 773",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M22 16.92V19.92C22 20.48 21.56 20.93 21 20.97C20.64 21 20.28 21 19.92 21C10.4 21 3 13.6 3 4.08C3 3.72 3 3.36 3.03 3C3.07 2.44 3.52 2 4.08 2H7.08C7.56 2 7.97 2.34 8.05 2.81C8.14 3.38 8.3 3.93 8.52 4.46L7.1 5.88C6.87 6.11 6.81 6.45 6.93 6.75C8.06 9.42 10.58 11.94 13.25 13.07C13.55 13.19 13.89 13.13 14.12 12.9L15.54 11.48C16.07 11.7 16.62 11.86 17.19 11.95C17.66 12.03 18 12.44 18 12.92V16.92C18 17.48 17.56 17.93 17 17.97"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "info@christianlivingacademy.com",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect
          x="2"
          y="4"
          width="20"
          height="16"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M22 7L13.03 12.7C12.7 12.9 12.3 12.9 11.97 12.7L2 7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "School Hours",
    value: "Mon \u2013 Fri: 7:30 AM \u2013 3:30 PM",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M12 6V12L16 14"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const initialFormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export default function ContactSection() {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
    setFormData(initialFormState);
    setErrors({});
  };

  return (
    <section id="contact" className="bg-slate-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2
            variants={childVariants}
            className="text-3xl md:text-4xl font-bold text-white text-center mb-4"
          >
            Contact Us
          </motion.h2>
          <motion.p
            variants={childVariants}
            className="text-slate-400 text-center mb-12 max-w-2xl mx-auto"
          >
            Have questions about admissions or our programmes? We&apos;d love to
            hear from you. Reach out and we&apos;ll get back to you as soon as
            possible.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Details */}
            <motion.div variants={childVariants} className="space-y-6">
              {contactDetails.map((detail) => (
                <div key={detail.label} className="flex items-start gap-4">
                  <div className="text-sky-400 mt-1 flex-shrink-0">
                    {detail.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-1">
                      {detail.label}
                    </h3>
                    <p className="text-slate-300">{detail.value}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={childVariants}>
              {submitted ? (
                <div className="bg-emerald-900/30 border border-emerald-500/30 rounded-xl p-8 text-center">
                  <h3 className="text-emerald-400 text-xl font-semibold mb-2">
                    Thank you!
                  </h3>
                  <p className="text-slate-300">
                    Your message has been sent. We&apos;ll get back to you
                    shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-sky-400 hover:text-sky-300 underline text-sm"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className={`w-full px-4 py-3 bg-slate-800 border rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                        errors.name ? "border-red-500" : "border-slate-700"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      className={`w-full px-4 py-3 bg-slate-800 border rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                        errors.email ? "border-red-500" : "border-slate-700"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your Phone (optional)"
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>
                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message"
                      rows={5}
                      className={`w-full px-4 py-3 bg-slate-800 border rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 resize-none ${
                        errors.message ? "border-red-500" : "border-slate-700"
                      }`}
                    />
                    {errors.message && (
                      <p className="text-red-400 text-sm mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-sky-600 hover:bg-sky-500 text-white font-semibold rounded-lg transition-colors duration-200"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
