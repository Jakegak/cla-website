import { motion } from "framer-motion";

const stats = [
  {
    label: "Students",
    value: "500+",
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
          d="M20 4L2 14L20 24L38 14L20 4Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M8 18V28C8 28 12 34 20 34C28 34 32 28 32 28V18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M38 14V26"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    ),
  },
  {
    label: "Staff",
    value: "50+",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="20" cy="12" r="6" stroke="currentColor" strokeWidth="2" fill="none" />
        <path
          d="M8 36C8 28 13 24 20 24C27 24 32 28 32 36"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    ),
  },
  {
    label: "Years",
    value: "15+",
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
        <path
          d="M20 10V20L26 26"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    ),
  },
  {
    label: "Programmes",
    value: "6",
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
        <path d="M6 14H34" stroke="currentColor" strokeWidth="2" />
        <path d="M14 8V14" stroke="currentColor" strokeWidth="2" />
        <path d="M26 8V14" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
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

export default function AboutUs() {
  return (
    <section
      id="about"
      style={{ backgroundColor: "#F8F8F8" }}
      className="py-20 px-4"
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
            About Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Who We Are
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Christ Little Academy is a faith-based educational institution
            dedicated to nurturing young minds through holistic learning
            experiences. We combine academic excellence with moral values to
            shape future leaders.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={childVariants}>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              To provide a nurturing environment where children grow
              academically, spiritually, and socially. We believe every child is
              uniquely gifted and deserves the opportunity to discover and
              develop their full potential.
            </p>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To be a leading institution that raises confident, compassionate,
              and academically excellent individuals who will make positive
              contributions to society.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-4"
            variants={containerVariants}
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center"
                variants={childVariants}
                whileHover={{ y: -4, shadow: "lg" }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-purple-600 mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
