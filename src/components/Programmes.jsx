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
      "Building strong literacy and numeracy foundations through engaging, interactive lessons and collaborative learning.",
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
          x="6"
          y="6"
          width="28"
          height="28"
          rx="3"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M12 14H28"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M12 20H24"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M12 26H20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    ),
  },
  {
    name: "Upper Primary",
    subtitle: "Ages 9–12",
    description:
      "Preparing students for secondary education with advanced academics, critical thinking, and leadership opportunities.",
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
    name: "Christian Education",
    subtitle: "Faith & Values",
    description:
      "Integrating Biblical principles across the curriculum to nurture character, compassion, and spiritual growth.",
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
          x="17"
          y="4"
          width="6"
          height="32"
          rx="1"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <rect
          x="8"
          y="12"
          width="24"
          height="6"
          rx="1"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    ),
  },
  {
    name: "Sports & PE",
    subtitle: "Physical Development",
    description:
      "Developing fitness, teamwork, and sportsmanship through structured physical education and competitive athletics.",
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
          d="M20 6V34"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M6 20H34"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M8 10C14 14 26 14 32 10"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M8 30C14 26 26 26 32 30"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
    ),
  },
  {
    name: "Arts & Culture",
    subtitle: "Creative Expression",
    description:
      "Fostering creativity and cultural appreciation through music, drama, visual arts, and traditional dance.",
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
          d="M14 36V12L34 6V30"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <circle cx="10" cy="36" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="30" cy="30" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
        <path
          d="M14 20L34 14"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
    ),
  },
];

export default function Programmes() {
  return (
    <section id="programmes" className="py-20 px-4" style={{ backgroundColor: "#F8F8F8" }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12"
        >
          <h2 className="text-3xl font-heading font-bold text-cla-purple mb-4">
            Our Programmes
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Discover the range of academic and extracurricular programmes we
            offer to nurture every child&apos;s potential.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {programmes.map((programme) => (
            <motion.div
              key={programme.name}
              variants={childVariants}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px rgba(45, 27, 105, 0.15)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-white rounded-xl p-6 border-l-4 border-cla-purple text-left cursor-default"
              style={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.06)" }}
            >
              <div className="text-cla-purple mb-4">{programme.icon}</div>
              <h3 className="text-xl font-heading font-bold text-slate-800 mb-1">
                {programme.name}
              </h3>
              <span className="text-sm font-semibold text-cla-purple mb-2 block">
                {programme.subtitle}
              </span>
              <p className="text-slate-600 text-sm leading-relaxed">
                {programme.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
