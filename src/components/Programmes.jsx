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

const accentColors = ["#2D1B69", "#CC0000", "#FFB800"];

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
      "Building strong foundations in literacy, numeracy, and social skills through engaging, structured learning experiences.",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect x="8" y="6" width="24" height="28" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
        <line x1="13" y1="14" x2="27" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="13" y1="20" x2="27" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="13" y1="26" x2="22" y2="26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Upper Primary",
    subtitle: "Ages 9–11",
    description:
      "Advancing critical thinking and academic excellence while preparing students for secondary education and beyond.",
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
          d="M20 6L34 14L20 22L6 14L20 6Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M10 17V28C10 28 14 32 20 32C26 32 30 28 30 28V17"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <line x1="34" y1="14" x2="34" y2="26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Christian Education",
    subtitle: "All Ages",
    description:
      "Integrating faith-based values and character development across all levels, nurturing the whole child in spirit and truth.",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <line x1="20" y1="6" x2="20" y2="34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="12" y1="16" x2="28" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.3" />
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
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Section Header */}
        <motion.div className="text-center mb-16" variants={childVariants}>
          <h2
            className="section-heading text-3xl md:text-4xl font-bold mb-4"
            style={{ color: '#2D1B69' }}
          >
            Our Programmes
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: '#374151' }}
          >
            Comprehensive learning pathways designed to nurture every child from
            early years through upper primary.
          </p>
        </motion.div>

        {/* Programme Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
        >
          {programmes.map((programme, index) => {
            const accentColor = accentColors[index % accentColors.length];
            return (
              <motion.div
                key={programme.name}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
                variants={childVariants}
              >
                {/* Accent Bar */}
                <div
                  className="h-1.5 w-full"
                  style={{ backgroundColor: accentColor }}
                />

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-1">
                  {/* Icon */}
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      backgroundColor: `${accentColor}15`,
                      color: accentColor,
                    }}
                  >
                    {programme.icon}
                  </div>

                  {/* Name */}
                  <h3
                    className="text-xl font-bold mb-1"
                    style={{ color: '#2D1B69' }}
                  >
                    {programme.name}
                  </h3>

                  {/* Subtitle */}
                  <p
                    className="text-sm font-medium mb-3"
                    style={{ color: accentColor }}
                  >
                    {programme.subtitle}
                  </p>

                  {/* Description */}
                  <p
                    className="text-sm leading-relaxed flex-1"
                    style={{ color: '#374151' }}
                  >
                    {programme.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
