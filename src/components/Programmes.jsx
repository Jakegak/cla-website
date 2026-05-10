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
    name: "Lower Primary",
    subtitle: "Ages 6–8",
    description:
      "Building strong academic foundations in literacy, numeracy, and science through interactive and engaging lessons.",
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
        <path d="M6 16H34" stroke="currentColor" strokeWidth="2" />
        <path d="M20 16V32" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    name: "Upper Primary",
    subtitle: "Ages 9–11",
    description:
      "Advancing critical thinking and problem-solving skills while preparing students for secondary education.",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M8 32L20 8L32 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M12 24H28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "STEM Programme",
    subtitle: "All Ages",
    description:
      "Hands-on science, technology, engineering, and mathematics activities that inspire innovation and curiosity.",
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
        <path d="M20 6V34" stroke="currentColor" strokeWidth="2" />
        <path d="M6 20H34" stroke="currentColor" strokeWidth="2" />
        <circle cx="20" cy="20" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>
    ),
  },
  {
    name: "Arts & Culture",
    subtitle: "All Ages",
    description:
      "Creative expression through visual arts, music, drama, and cultural studies that celebrate diversity.",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="14" cy="14" r="3" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="26" cy="14" r="3" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="14" cy="26" r="3" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="26" cy="26" r="3" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M14 17V23" stroke="currentColor" strokeWidth="2" />
        <path d="M26 17V23" stroke="currentColor" strokeWidth="2" />
        <path d="M17 14H23" stroke="currentColor" strokeWidth="2" />
        <path d="M17 26H23" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    name: "Sports & Fitness",
    subtitle: "All Ages",
    description:
      "Comprehensive physical education and competitive sports programmes that promote health, teamwork, and discipline.",
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
        <path d="M10 10L30 30" stroke="currentColor" strokeWidth="2" />
        <path d="M30 10L10 30" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
];

export default function Programmes() {
  return (
    <section id="programmes" className="py-20 px-4 bg-light-grey">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div variants={childVariants} className="mb-12">
            <h2 className="text-3xl font-heading font-bold text-cla-purple mb-4">
              Our Programmes
              <span className="section-heading-underline"></span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a diverse range of programmes designed to develop every aspect of your
              child&apos;s potential.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            {programmes.map((programme) => (
              <motion.div
                key={programme.name}
                variants={childVariants}
                className="bg-white rounded-xl p-6 border-l-4 border-cla-purple text-left"
              >
                <div className="text-cla-purple mb-3">{programme.icon}</div>
                <h3 className="text-xl font-bold text-cla-purple mb-1">
                  {programme.name}
                </h3>
                <p className="text-sm text-cla-gold font-semibold mb-2">
                  {programme.subtitle}
                </p>
                <p className="text-gray-600 text-sm">{programme.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
