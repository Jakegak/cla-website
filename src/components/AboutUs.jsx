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
        <circle cx="20" cy="12" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
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
        <rect x="4" y="6" width="32" height="28" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M4 14H36" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M14 6V2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M26 6V2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
];

export default function AboutUs() {
  return (
    <section
      id="about"
      className="section-light-grey section-padding"
      style={{ backgroundColor: "#F8F8F8" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
        {/* Centered heading */}
        <h2
          className="section-heading"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "#2D1B69",
            textAlign: "center",
            fontSize: "2.25rem",
            display: "block",
            marginBottom: "1rem",
          }}
        >
          About Us
        </h2>

        {/* Centered description */}
        <p
          style={{
            maxWidth: "600px",
            margin: "0 auto 3rem",
            textAlign: "center",
            color: "#374151",
            fontSize: "1.05rem",
            lineHeight: 1.7,
            fontFamily: "'Inter', sans-serif",
          }}
        >
          Christ Little Academy is dedicated to nurturing young minds through a
          holistic approach to education, combining academic excellence with
          character development.
        </p>

        {/* 2-column grid: mission/vision left, stats right */}
        <div className="about-grid">
          {/* Left column: Mission & Vision */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "12px",
                padding: "2rem",
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#2D1B69",
                  fontSize: "1.5rem",
                  marginBottom: "0.75rem",
                  textAlign: "left",
                }}
              >
                Our Mission
              </h3>
              <p
                style={{
                  color: "#374151",
                  fontSize: "1rem",
                  lineHeight: 1.7,
                  textAlign: "left",
                  fontFamily: "'Inter', sans-serif",
                  margin: 0,
                }}
              >
                To provide a nurturing and stimulating environment where every
                child can discover their unique potential, develop a love for
                learning, and grow into confident, compassionate individuals
                ready to make a positive impact in the world.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "12px",
                padding: "2rem",
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#2D1B69",
                  fontSize: "1.5rem",
                  marginBottom: "0.75rem",
                  textAlign: "left",
                }}
              >
                Our Vision
              </h3>
              <p
                style={{
                  color: "#374151",
                  fontSize: "1rem",
                  lineHeight: 1.7,
                  textAlign: "left",
                  fontFamily: "'Inter', sans-serif",
                  margin: 0,
                }}
              >
                To be a leading institution in early childhood and primary
                education, recognised for excellence in holistic development,
                innovative teaching methods, and producing well-rounded learners
                grounded in Christian values.
              </p>
            </motion.div>
          </div>

          {/* Right column: 2x2 stat cards grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1.25rem",
              alignContent: "start",
            }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "12px",
                  padding: "1.5rem",
                  borderTop: "4px solid #2D1B69",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  gap: "0.5rem",
                }}
              >
                <span style={{ color: "#2D1B69", marginBottom: "0.25rem" }}>
                  {stat.icon}
                </span>
                <CountUp target={stat.value} suffix={stat.suffix} />
                <span
                  style={{
                    color: "#374151",
                    fontSize: "0.95rem",
                    fontWeight: 500,
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
