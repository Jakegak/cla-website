import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

function CountUp({ target, suffix }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));
  const displayRef = useRef(null);

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, target, {
        duration: 2,
        ease: "easeOut",
      });
      return () => controls.stop();
    }
  }, [isInView, motionValue, target]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      if (displayRef.current) {
        displayRef.current.textContent = `${latest}${suffix}`;
      }
    });
    return () => unsubscribe();
  }, [rounded, suffix]);

  return (
    <span
      ref={(node) => {
        ref.current = node;
        displayRef.current = node;
      }}
      style={{
        fontSize: "2.5rem",
        fontWeight: 700,
        color: "#2D1B69",
        fontFamily: "'Playfair Display', serif",
        lineHeight: 1.2,
      }}
    >
      {`0${suffix}`}
    </span>
  );
}

const stats = [
  {
    label: "Students",
    value: 500,
    suffix: "+",
    icon: (
      <svg
        width="24"
        height="24"
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
    value: 50,
    suffix: "+",
    icon: (
      <svg
        width="24"
        height="24"
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
    value: 15,
    suffix: "+",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="2" fill="none" />
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
    value: 6,
    suffix: "",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect
          x="4"
          y="6"
          width="32"
          height="28"
          rx="3"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <path d="M4 14H36" stroke="currentColor" strokeWidth="2" />
        <path d="M14 14V34" stroke="currentColor" strokeWidth="2" />
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
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const iconCircleStyle = {
  width: "48px",
  height: "48px",
  borderRadius: "50%",
  backgroundColor: "#2D1B69",
  color: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto 0.75rem auto",
};

const cardStyle = {
  backgroundColor: "#ffffff",
  borderTop: "4px solid #2D1B69",
  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
  borderRadius: "12px",
  padding: "1.5rem",
  textAlign: "center",
  width: "100%",
};

const labelStyle = {
  fontFamily: "'Inter', sans-serif",
  color: "#6B7280",
  fontSize: "0.875rem",
  marginTop: "0.25rem",
};

export default function AboutUs() {
  return (
    <section
      id="about"
      style={{ backgroundColor: "#F8F8F8" }}
      className="py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.h2
            variants={childVariants}
            className="text-center mb-4"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: "2.25rem",
              color: "#2D1B69",
            }}
          >
            About Us
          </motion.h2>

          <motion.p
            variants={childVariants}
            className="text-center max-w-2xl mx-auto mb-12"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#4B5563",
              fontSize: "1.05rem",
              lineHeight: 1.7,
            }}
          >
            Christian Living Academy is dedicated to raising a God-fearing elite
            generation through academic excellence and godly character. Our
            mission is to nurture every child's potential in a supportive,
            faith-filled environment.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Mission & Vision */}
            <motion.div variants={childVariants}>
              <div className="mb-8">
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 700,
                    fontSize: "1.5rem",
                    color: "#2D1B69",
                  }}
                >
                  Our Mission
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "#4B5563",
                    fontSize: "0.975rem",
                    lineHeight: 1.7,
                  }}
                >
                  To provide quality education that develops the whole child —
                  intellectually, spiritually, socially, and physically — in an
                  atmosphere of Christian love and discipline.
                </p>
              </div>
              <div>
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 700,
                    fontSize: "1.5rem",
                    color: "#2D1B69",
                  }}
                >
                  Our Vision
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "#4B5563",
                    fontSize: "0.975rem",
                    lineHeight: 1.7,
                  }}
                >
                  To be a leading institution recognised for producing
                  well-rounded, God-fearing individuals who excel in all areas of
                  life and positively impact their communities.
                </p>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={childVariants}
                  whileHover={{
                    y: -4,
                    boxShadow:
                      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
                  }}
                  style={cardStyle}
                >
                  <div style={iconCircleStyle}>{stat.icon}</div>
                  <div style={{ marginBottom: "0.25rem" }}>
                    <CountUp target={stat.value} suffix={stat.suffix} />
                  </div>
                  <p style={labelStyle}>{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
