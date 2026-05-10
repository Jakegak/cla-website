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
    value: "123 Academy Road, Nairobi, Kenya",
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
    value: "+254 700 000 000",
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
          d="M22 16.92V19.92C22 20.48 21.56 20.93 21 20.97C20.64 21 20.28 21 19.92 21C10.4 21 3 13.6 3 4.08C3 3.72 3 3.36 3.03 3C3.07 2.44 3.52 2 4.08 2H7.08C7.56 2 7.97 2.34 8.05 2.81C8.14 3.38 8.3 3.93 8.51 4.45C8.65 4.79 8.57 5.18 8.32 5.43L6.91 6.84C8.51 9.67 10.83 11.99 13.66 13.59L15.07 12.18C15.32 11.93 15.71 11.85 16.05 11.99C16.57 12.2 17.12 12.36 17.69 12.45C18.16 12.53 18.5 12.94 18.5 13.42V16.92C18.5 16.92 22 16.92 22 16.92Z"
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
    value: "info@christlegacyacademy.com",
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
          d="M22 6L12 13L2 6"
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
    value: "Mon – Fri: 7:30 AM – 3:30 PM",
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
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.message.trim()
    ) {
      setError("Please fill in all fields before submitting.");
      return;
    }

    // Future integration: send formData via EmailJS or similar service.
    // The form data (name, email, phone, message) is captured in the formData state
    // and should be dispatched to an email service here.
    setSubmitted(true);
    setFormData(initialFormState);
  }

  return (
    <section id="contact" className="bg-slate-900 py-20 px-4">
      <motion.div
        className="max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="text-center mb-12" variants={childVariants}>
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-4">
            Contact Us
          </h2>
          <div className="w-16 h-1 bg-cla-gold mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column — Contact Details */}
          <motion.div className="space-y-8" variants={childVariants}>
            <p className="text-slate-300 text-lg leading-relaxed">
              We&apos;d love to hear from you. Whether you have questions about
              admissions, programmes, or anything else, our team is ready to
              help.
            </p>

            <div className="space-y-6">
              {contactDetails.map((detail) => (
                <div key={detail.label} className="flex items-start gap-4">
                  <div className="text-cla-gold flex-shrink-0 mt-0.5">
                    {detail.icon}
                  </div>
                  <div>
                    <h3 className="font-heading text-white text-sm uppercase tracking-wider mb-1">
                      {detail.label}
                    </h3>
                    <p className="text-slate-300">{detail.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column — Enquiry Form */}
          <motion.div variants={childVariants}>
            {submitted ? (
              <div className="bg-slate-800 rounded-2xl p-8 text-center flex flex-col items-center justify-center min-h-[400px]">
                <div className="text-cla-gold mb-4">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <circle
                      cx="24"
                      cy="24"
                      r="22"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M14 24L21 31L34 18"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="font-heading text-2xl text-white mb-2">
                  Thank You!
                </h3>
                <p className="text-slate-300 mb-6">
                  Your enquiry has been received. We will get back to you
                  shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="bg-cla-purple text-white font-heading px-6 py-2 rounded-lg hover:opacity-90 transition-opacity"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-slate-800 rounded-2xl p-8 space-y-5"
                noValidate
              >
                <h3 className="font-heading text-xl text-white mb-2">
                  Send Us an Enquiry
                </h3>

                {error && (
                  <p className="text-red-400 text-sm bg-red-400/10 rounded-lg px-4 py-2">
                    {error}
                  </p>
                )}

                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-slate-300 text-sm mb-1"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full bg-slate-700 text-white placeholder-slate-400 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-cla-gold transition-shadow"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-slate-300 text-sm mb-1"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full bg-slate-700 text-white placeholder-slate-400 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-cla-gold transition-shadow"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-phone"
                    className="block text-slate-300 text-sm mb-1"
                  >
                    Phone
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+254 700 000 000"
                    className="w-full bg-slate-700 text-white placeholder-slate-400 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-cla-gold transition-shadow"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-slate-300 text-sm mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    rows={4}
                    className="w-full bg-slate-700 text-white placeholder-slate-400 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-cla-gold transition-shadow resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-cla-purple text-white font-heading text-lg py-3 rounded-lg hover:opacity-90 transition-opacity"
                >
                  Submit Enquiry
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
