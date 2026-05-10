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
      "A comprehensive curriculum blending academics with character development, preparing students for secondary education.",
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
        <path d="M14 16V32" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    name: "Secondary School",
    subtitle: "Ages 12–17",
    description:
      "Rigorous academic programmes designed to challenge and inspire, with a focus on critical thinking and leadership.",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M20 4L4 14V36H36V14L20 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="none" />
        <rect x="15" y="22" width="10" height="14" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="20" cy="16" r="3" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>
    ),
  },
  {
    name: "After-School Club",
    subtitle: "All Ages",
    description:
      "Enriching after-school activities including sports, arts, music, and homework support in a safe environment.",
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
        <path d="M20 10V20L27 27" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
  {
    name: "Summer Programme",
    subtitle: "Holiday Sessions",
    description:
      "Fun-filled summer experiences combining learning adventures, creative projects, and outdoor activities.",
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
        <path d="M20 4V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M20 32V36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M4 20H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M32 20H36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M8.69 8.69L11.52 11.52" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M28.48 28.48L31.31 31.31" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M8.69 31.31L11.52 28.48" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M28.48 11.52L31.31 8.69" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Special Needs Support",
    subtitle: "Inclusive Education",
    description:
      "Dedicated support programmes ensuring every child receives personalised attention and inclusive learning opportunities.",
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
          d="M20 6C12 6 6 12 6 20C6 28 12 34 20 34C28 34 34 28 34 20C34 12 28 6 20 6Z"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <path d="M14 20H26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M20 14V26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Programmes() {
  return (
    <section
      id="programmes"
      className="section-light-grey section-padding px-4"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2
            className="section-heading text-4xl font-bold mb-4 text-dark-heading"
            variants={childVariants}
          >
            Our Programmes
          </motion.h2>

          <motion.p
            className="text-lg max-w-2xl mx-auto mb-16 text-dark-body"
            variants={childVariants}
          >
            Comprehensive educational programmes designed to nurture every aspect of your child&apos;s development.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            {programmes.map((programme) => (
              <motion.div
                key={programme.name}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-left"
                variants={childVariants}
              >
                <div className="mb-4" style={{ color: '#2D1B69' }}>
                  {programme.icon}
                </div>
                <h3 className="text-xl font-bold mb-1 text-dark-heading">
                  {programme.name}
                </h3>
                <p className="text-sm font-medium mb-3" style={{ color: '#FFB800' }}>
                  {programme.subtitle}
                </p>
                <p className="text-sm text-dark-body">
                  {programme.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
