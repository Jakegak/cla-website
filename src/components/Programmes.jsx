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
    subtitle: "Ages 9–12",
    description:
      "Advancing academic excellence and critical thinking as students prepare for the next stage of their educational journey.",
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
          d="M20 6L34 14V26L20 34L6 26V14L20 6Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M20 6V20"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M20 20L34 14"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M20 20L6 14"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    ),
  },
  {
    name: "Christian Education",
    subtitle: "Faith & Values",
    description:
      "Rooted in Christian principles, our programme nurtures character, compassion, and spiritual growth alongside academic learning.",
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
        <path
          d="M14 8C14 8 17 11 20 11C23 11 26 8 26 8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="20" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </svg>
    ),
  },
  {
    name: "Sports and PE",
    subtitle: "Health & Fitness",
    description:
      "Developing physical fitness, teamwork, and sportsmanship through a comprehensive programme of athletic activities and games.",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="2" fill="none" />
        <path
          d="M20 8C20 8 16 14 16 20C16 26 20 32 20 32"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M20 8C20 8 24 14 24 20C24 26 20 32 20 32"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <line x1="8" y1="20" x2="32" y2="20" stroke="currentColor" strokeWidth="2" />
        <line x1="10" y1="14" x2="30" y2="14" stroke="currentColor" strokeWidth="1.5" />
        <line x1="10" y1="26" x2="30" y2="26" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: "Arts and Culture",
    subtitle: "Creativity & Expression",
    description:
      "Fostering creativity, cultural awareness, and self-expression through music, visual arts, drama, and cultural studies.",
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
          d="M10 30C10 30 12 20 16 16C20 12 24 14 22 20C20 26 14 28 10 30Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
          fill="none"
        />
        <circle cx="28" cy="10" r="3" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="32" cy="18" r="2.5" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="26" cy="22" r="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path
          d="M10 30L8 34"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    ),
  },
];

export default function Programmes() {
  return (
    <section id="programmes" className="section-light-grey section-padding px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 text-dark-heading"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Programmes
          </h2>
          <p className="text-dark-body max-w-2xl mx-auto">
            Comprehensive educational programmes designed for children ages 3–12,
            nurturing every aspect of their development.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {programmes.map((programme, index) => (
            <motion.div
              key={programme.name}
              variants={childVariants}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm text-left overflow-hidden"
            >
              <div
                className="rounded-t-2xl"
                style={{
                  height: "6px",
                  backgroundColor: accentColors[index % 3],
                }}
              />
              <div className="p-6">
                <div
                  className="mb-4 flex items-center justify-center rounded-full text-white"
                  style={{
                    width: "56px",
                    height: "56px",
                    backgroundColor: "#2D1B69",
                  }}
                >
                  {programme.icon}
                </div>
                <h3 className="text-xl font-bold mb-1 text-dark-heading">
                  {programme.name}
                </h3>
                <p className="text-sm font-semibold mb-2" style={{ color: "#FFB800" }}>
                  {programme.subtitle}
                </p>
                <p className="text-sm text-dark-body">{programme.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
