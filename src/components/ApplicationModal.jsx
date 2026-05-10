import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PROGRAMMES = [
  "Early Years",
  "Lower Primary",
  "Upper Primary",
];

const AGE_OPTIONS = Array.from({ length: 10 }, (_, i) => i + 3);

const INITIAL_FORM = {
  parentName: "",
  email: "",
  phone: "",
  childName: "",
  childAge: "",
  programme: "",
  message: "",
};

const REQUIRED_FIELDS = [
  "parentName",
  "email",
  "phone",
  "childName",
  "childAge",
  "programme",
];

const FIELD_LABELS = {
  parentName: "Parent / Guardian Name",
  email: "Email Address",
  phone: "Phone Number",
  childName: "Child's Name",
  childAge: "Child's Age",
  programme: "Programme of Interest",
  message: "Message (Optional)",
};

export default function ApplicationModal({ isOpen, onClose }) {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setForm(INITIAL_FORM);
      setErrors({});
      setSubmitted(false);
    }
  }, [isOpen]);

  const handleEsc = useCallback(
    (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    },
    [isOpen, onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [handleEsc]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validate = () => {
    const newErrors = {};
    REQUIRED_FIELDS.forEach((field) => {
      if (!form[field] || form[field].trim() === "") {
        newErrors[field] = `${FIELD_LABELS[field]} is required`;
      }
    });
    if (form.email && form.email.trim() !== "") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(form.email.trim())) {
        newErrors.email = "Please enter a valid email address";
      }
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setSubmitted(true);
  };

  const inputBaseClass =
    "w-full bg-slate-900 border rounded-xl px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:ring-1 transition-all text-sm";

  const getInputClass = (fieldName) => {
    if (errors[fieldName]) {
      return `${inputBaseClass} border-red-500 focus:border-red-500 focus:ring-red-500`;
    }
    return `${inputBaseClass} border-slate-700 focus:border-blue-500 focus:ring-blue-500`;
  };

  const renderField = (name, type, placeholder) => (
    <div key={name}>
      <label className="block text-sm font-medium text-slate-300 mb-1.5">
        {FIELD_LABELS[name]}
        {REQUIRED_FIELDS.includes(name) && (
          <span className="text-red-400 ml-1">*</span>
        )}
      </label>
      <input
        type={type}
        name={name}
        value={form[name]}
        onChange={handleChange}
        placeholder={placeholder}
        className={getInputClass(name)}
      />
      {errors[name] && (
        <p className="mt-1 text-xs text-red-400">{errors[name]}</p>
      )}
    </div>
  );

  const renderSelect = (name, options, placeholder) => (
    <div key={name}>
      <label className="block text-sm font-medium text-slate-300 mb-1.5">
        {FIELD_LABELS[name]}
        {REQUIRED_FIELDS.includes(name) && (
          <span className="text-red-400 ml-1">*</span>
        )}
      </label>
      <select
        name={name}
        value={form[name]}
        onChange={handleChange}
        className={getInputClass(name)}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {errors[name] && (
        <p className="mt-1 text-xs text-red-400">{errors[name]}</p>
      )}
    </div>
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Dark Blurred Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-slate-800 border border-slate-700 p-6 sm:p-8 rounded-3xl shadow-2xl w-full max-w-xl z-10 max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors bg-slate-700/50 hover:bg-slate-700 rounded-full p-2"
              aria-label="Close modal"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-green-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Thank You!
                </h3>
                <p className="text-slate-300 mb-8 max-w-sm">
                  Your application has been received. We will review your
                  submission and get back to you shortly.
                </p>
                <button
                  onClick={onClose}
                  className="px-8 py-3 bg-cla-purple text-white font-semibold rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-cla-purple/25"
                >
                  Close
                </button>
              </motion.div>
            ) : (
              <>
                <div className="mb-6 pr-8">
                  <h2 className="text-2xl font-bold text-white mb-1">
                    Apply Now
                  </h2>
                  <p className="text-slate-400 text-sm">
                    Fill in the details below to begin your child&apos;s
                    enrolment journey.
                  </p>
                </div>

                <form onSubmit={handleSubmit} noValidate>
                  <div className="space-y-4">
                    {/* Row 1: Parent Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {renderField(
                        "parentName",
                        "text",
                        "Enter parent or guardian name"
                      )}
                      {renderField(
                        "email",
                        "email",
                        "email@example.com"
                      )}
                    </div>

                    {/* Row 2: Phone + Child Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {renderField(
                        "phone",
                        "tel",
                        "+234 000 000 0000"
                      )}
                      {renderField(
                        "childName",
                        "text",
                        "Enter child's name"
                      )}
                    </div>

                    {/* Row 3: Child Age + Programme */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {renderSelect(
                        "childAge",
                        AGE_OPTIONS.map((age) => ({
                          value: String(age),
                          label: `${age} years`,
                        })),
                        "Select age"
                      )}
                      {renderSelect(
                        "programme",
                        PROGRAMMES.map((p) => ({ value: p, label: p })),
                        "Select programme"
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1.5">
                        {FIELD_LABELS.message}
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Any additional information or questions..."
                        rows={3}
                        className={`${getInputClass("message")} resize-none`}
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="mt-6">
                    <button
                      type="submit"
                      className="w-full py-3 bg-cla-purple text-white font-semibold rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-cla-purple/25 text-sm"
                    >
                      Submit Application
                    </button>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
