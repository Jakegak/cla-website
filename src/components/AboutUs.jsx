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
        <rect
          x="4"
          y="8"
          width="32"
          height="28"
          rx="3"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <path d="M4 16H36" stroke="currentColor" strokeWidth="2" />
        <path d="M12 4V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M28 4V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <rect x="10" y="22" width="4" height="4" rx="1" fill="currentColor" />
        <rect x="18" y="22" width="4" height="4" rx="1" fill="currentColor" />
        <rect x="26" y="22" width="4" height="4" rx="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Christian Values",
    value: "100%",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M20 4V36" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M10 14H30" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

const cardVariants = {
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
      className="py-20"
      style={{ backgroundColor: "#F8F8F8" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column — Mission Text */}
          <motion.div
            className="text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gray-800 mb-6">
              About Christian Living Academy
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Christian Living Academy is dedicated to advancing knowledge and
              wisdom while ensuring positive character training in a Christian
              way. Our mission is to provide an environment where academic
              excellence and spiritual growth go hand in hand, nurturing every
              student to become a well-rounded individual rooted in faith and
              equipped for the future.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              We believe that education extends beyond the classroom. Through a
              curriculum grounded in Christian values, dedicated mentorship, and
              a supportive community, we empower our students to discover their
              God-given purpose. Our commitment is to develop not only sharp
              minds but also compassionate hearts that serve others and honor
              God.
            </p>
            <p className="text-cla-purple text-xl font-heading font-semibold italic">
              &ldquo;Founded to raise a generation that fears God and excels
              academically.&rdquo;
            </p>
          </motion.div>

          {/* Right Column — Stat Cards */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.15 }}
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                className="bg-cla-purple rounded-2xl p-6 text-white text-left flex flex-col items-start gap-3"
                variants={cardVariants}
              >
                <div className="text-cla-gold">{stat.icon}</div>
                <span className="text-3xl md:text-4xl font-bold leading-tight">
                  {stat.value}
                </span>
                <span className="text-sm md:text-base text-white/80 font-medium">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
