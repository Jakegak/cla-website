import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
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

const programmes = [
  {
    name: "Early Years",
    subtitle: "Ages 3–5",
    description:
      "A nurturing foundation stage where young learners explore, play, and develop essential skills through guided discovery.",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="20" cy="12" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
        <path
          d="M12 36C12 28 15 24 20 24C25 24 28 28 28 36"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M8 18L14 14"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M32 18L26 14"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="8" cy="20" r="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="32" cy="20" r="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </svg>
    ),
  },
  {
    name: "Primary",
    subtitle: "Ages 6–11",
    description:
      "Building strong academic foundations with a balanced curriculum that nurtures curiosity and critical thinking.",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect x="6" y="8" width="28" height="24" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
        <line x1="6" y1="14" x2="34" y2="14" stroke="currentColor" strokeWidth="2" />
        <line x1="14" y1="14" x2="14" y2="32" stroke="currentColor" strokeWidth="2" />
        <circle cx="24" cy="23" r="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </svg>
    ),
  },
  {
    name: "Secondary",
    subtitle: "Ages 12–16",
    description:
      "Preparing students for academic excellence with rigorous coursework, mentorship, and personal development.",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M20 6L34 14L20 22L6 14L20 6Z" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M6 14V26L20 34L34 26V14" stroke="currentColor" strokeWidth="2" fill="none" />
        <line x1="20" y1="22" x2="20" y2="34" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    name: "Sixth Form",
    subtitle: "Ages 16–18",
    description:
      "Advanced studies and university preparation with A-Levels and enrichment programmes tailored to individual goals.",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect x="8" y="4" width="24" height="32" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
        <line x1="14" y1="12" x2="26" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="14" y1="18" x2="26" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="14" y1="24" x2="22" y2="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "STEM Academy",
    subtitle: "All Ages",
    description:
      "Specialist science, technology, engineering, and mathematics enrichment with hands-on projects and competitions.",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="2" fill="none" />
        <line x1="20" y1="6" x2="20" y2="34" stroke="currentColor" strokeWidth="1.5" />
        <line x1="6" y1="20" x2="34" y2="20" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="20" cy="20" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </svg>
    ),
  },
  {
    name: "Arts & Culture",
    subtitle: "All Ages",
    description:
      "Creative expression through visual arts, music, drama, and cultural studies — nurturing the whole child.",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M20 4C12 4 6 10 6 18C6 30 20 36 20 36C20 36 34 30 34 18C34 10 28 4 20 4Z"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <circle cx="16" cy="16" r="2" fill="currentColor" />
        <circle cx="24" cy="16" r="2" fill="currentColor" />
        <circle cx="20" cy="22" r="2" fill="currentColor" />
        <circle cx="14" cy="22" r="1.5" fill="currentColor" />
        <circle cx="26" cy="22" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
];

export default function Programmes() {
  return (
    <section id="programmes" className="py-20 px-4" style={{ backgroundColor: "#F8F8F8" }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2
            variants={childVariants}
            className="text-4xl font-bold mb-4"
          >
            Our Programmes
          </motion.h2>
          <motion.p
            variants={childVariants}
            className="text-gray-600 mb-12 max-w-2xl mx-auto text-lg"
          >
            Comprehensive educational pathways designed to inspire and challenge every student.
          </motion.p>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {programmes.map((prog) => (
              <motion.div
                key={prog.name}
                variants={childVariants}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-left h-full flex flex-col min-w-0 overflow-hidden"
              >
                <div className="text-purple-600 mb-4">{prog.icon}</div>
                <h3 className="text-xl font-bold">{prog.name}</h3>
                <span className="text-sm text-gray-500 mt-1 block">{prog.subtitle}</span>
                <p className="text-gray-600 mt-3 leading-relaxed flex-1">
                  {prog.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
