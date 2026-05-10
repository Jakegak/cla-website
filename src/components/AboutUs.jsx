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
        <rect x="4" y="6" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
        <rect x="22" y="6" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
        <rect x="4" y="22" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
        <rect x="22" y="22" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
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
      className="py-20 px-4"
      style={{ backgroundColor: "#F8F8F8" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-4xl font-bold mb-4"
            style={{ color: "#2D1B69" }}
          >
            About Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dedicated to nurturing young minds and building a strong foundation
            for lifelong learning.
          </p>
        </motion.div>

        {/* Mission & Stats Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Mission & Vision */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3
              className="text-2xl font-bold mb-4"
              style={{ color: "#2D1B69" }}
            >
              Our Mission
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              To provide a world-class education that empowers every child to
              discover their potential, develop critical thinking skills, and
              become compassionate global citizens.
            </p>
            <h3
              className="text-2xl font-bold mb-4"
              style={{ color: "#2D1B69" }}
            >
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To be a leading institution that transforms lives through
              innovative education, fostering creativity, integrity, and
              excellence in every student.
            </p>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            className="grid grid-cols-2 gap-6 overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center w-full"
                variants={childVariants}
                whileHover={{ y: -4, shadow: "lg" }}
              >
                <div
                  className="flex justify-center mb-3"
                  style={{ color: "#667eea" }}
                >
                  {stat.icon}
                </div>
                <div
                  className="text-3xl font-bold mb-1"
                  style={{ color: "#2D1B69" }}
                >
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
