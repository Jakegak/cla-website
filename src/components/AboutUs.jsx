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
        <circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="2" fill="none" />
        <path
          d="M20 10V20L27 27"
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
    value: "10+",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect x="4" y="6" width="32" height="28" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M4 14H36" stroke="currentColor" strokeWidth="2" />
        <path d="M14 6V14" stroke="currentColor" strokeWidth="2" />
        <path d="M26 6V14" stroke="currentColor" strokeWidth="2" />
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

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function AboutUs() {
  return (
    <section id="about" className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-cla-purple">
            About Us
          </h2>
          <div className="gold-underline" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg leading-relaxed mb-6 text-slate-800">
              Christ Little Angels Academy is a premier educational institution
              dedicated to nurturing young minds in a safe, stimulating, and
              spiritually grounded environment. Founded over 15 years ago, we
              have grown into one of the most respected schools in our community.
            </p>
            <p className="text-lg leading-relaxed mb-6 text-slate-800">
              Our approach combines academic excellence with character
              development, ensuring that every child is prepared not just for
              exams, but for life. We believe that education is a partnership
              between the school, parents, and the community.
            </p>
            <blockquote className="text-cla-purple text-xl italic border-l-4 pl-4 border-cla-gold">
              &ldquo;Train up a child in the way he should go: and when he is
              old, he will not depart from it.&rdquo; &mdash; Proverbs 22:6
            </blockquote>
          </div>

          <motion.div
            className="grid grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={cardVariants}
                className="bg-slate-50 rounded-xl p-6 text-center text-cla-purple border-t-3"
                style={{ borderTop: "3px solid #C9A84C" }}
              >
                <div className="flex justify-center mb-3">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-cla-purple">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-slate-800 mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
