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
        <circle
          cx="20"
          cy="12"
          r="8"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M4 36C4 28 11 22 20 22C29 22 36 28 36 36"
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
        <circle
          cx="20"
          cy="20"
          r="16"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
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
        <path
          d="M4 14H36"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M14 14V34"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    ),
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
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

export default function AboutUs() {
  return (
    <section
      id="about"
      style={{
        padding: "5rem 1.5rem",
        background: "linear-gradient(135deg, #f8f6ff 0%, #eee8ff 100%)",
        minHeight: "100vh",
      }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <motion.div variants={childVariants} style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: 700,
              color: "#2D1B69",
              fontFamily: "'Playfair Display', serif",
              marginBottom: "1rem",
            }}
          >
            About Us
          </h2>
          <p
            style={{
              fontSize: "1.15rem",
              color: "#555",
              maxWidth: "700px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            We are dedicated to providing quality education and fostering an
            environment where every student can thrive and reach their full
            potential.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "2rem",
            marginBottom: "4rem",
          }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              style={{
                background: "#fff",
                borderRadius: "1rem",
                padding: "2rem 1.5rem",
                textAlign: "center",
                boxShadow: "0 4px 24px rgba(45,27,105,0.08)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.75rem",
              }}
            >
              <span style={{ color: "#7C5CFC", marginBottom: "0.5rem" }}>
                {stat.icon}
              </span>
              <CountUp target={stat.value} suffix={stat.suffix} />
              <span
                style={{
                  fontSize: "1rem",
                  color: "#888",
                  fontWeight: 500,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2.5rem",
          }}
        >
          <motion.div
            variants={childVariants}
            style={{
              background: "#fff",
              borderRadius: "1rem",
              padding: "2.5rem 2rem",
              boxShadow: "0 4px 24px rgba(45,27,105,0.08)",
            }}
          >
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: 700,
                color: "#2D1B69",
                fontFamily: "'Playfair Display', serif",
                marginBottom: "1rem",
              }}
            >
              Our Mission
            </h3>
            <p
              style={{
                fontSize: "1.05rem",
                color: "#555",
                lineHeight: 1.8,
              }}
            >
              To empower students with knowledge, skills, and values that enable
              them to contribute meaningfully to society while pursuing their
              passions and dreams.
            </p>
          </motion.div>

          <motion.div
            variants={childVariants}
            style={{
              background: "#fff",
              borderRadius: "1rem",
              padding: "2.5rem 2rem",
              boxShadow: "0 4px 24px rgba(45,27,105,0.08)",
            }}
          >
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: 700,
                color: "#2D1B69",
                fontFamily: "'Playfair Display', serif",
                marginBottom: "1rem",
              }}
            >
              Our Vision
            </h3>
            <p
              style={{
                fontSize: "1.05rem",
                color: "#555",
                lineHeight: 1.8,
              }}
            >
              To be a leading institution of academic excellence, recognized for
              nurturing well-rounded individuals who are prepared to meet the
              challenges of a rapidly changing world.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
