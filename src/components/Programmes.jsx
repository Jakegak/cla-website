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
    name: "Primary School",
    subtitle: "Ages 6–11",
    description:
      "Building strong academic foundations with a balanced curriculum that develops critical thinking and creativity.",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect x="8" y="10" width="24" height="22" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M14 10V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M26 10V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M14 18H26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M14 24H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Junior Secondary",
    subtitle: "Ages 12–14",
    description:
      "Deepening knowledge and skills with specialized subjects and hands-on learning experiences.",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M8 32L20 8L32 32" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="none" />
        <path d="M13 24H27" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Senior Secondary",
    subtitle: "Ages 15–17",
    description:
      "Preparing students for higher education and life with rigorous academics and leadership development.",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M20 4L2 14L20 24L38 14L20 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="none" />
        <path d="M8 18V28C8 28 12 34 20 34C28 34 32 28 32 28V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
  {
    name: "After-School Club",
    subtitle: "All Ages",
    description:
      "Enriching extracurricular activities including sports, arts, music, and academic support.",
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
        <path d="M20 10V20L28 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Summer Programme",
    subtitle: "Seasonal",
    description:
      "Fun-filled summer activities combining learning with adventure, creativity, and social development.",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="20" cy="20" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M20 6V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M20 30V34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M6 20H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M30 20H34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M10.1 10.1L12.9 12.9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M27.1 27.1L29.9 29.9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M10.1 29.9L12.9 27.1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M27.1 12.9L29.9 10.1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Programmes() {
  return (
    <section
      id="programmes"
      className="py-20 px-4"
      style={{ backgroundColor: "#F8F8F8" }}
    >
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div className="text-center mb-16" variants={childVariants}>
          <span className="inline-block bg-purple-100 text-purple-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Our Programmes
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What We Offer
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From early years through senior secondary, our comprehensive
            programmes are designed to meet the needs of every learner.
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
        >
          {programmes.map((programme) => (
            <motion.div
              key={programme.name}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-left"
              variants={childVariants}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-purple-600 mb-4">{programme.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {programme.name}
              </h3>
              <span className="text-sm text-purple-600 font-medium">
                {programme.subtitle}
              </span>
              <p className="text-gray-600 mt-3 leading-relaxed">
                {programme.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
