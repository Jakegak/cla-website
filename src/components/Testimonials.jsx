import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Mrs. Adebayo",
    relationship: "Parent of Year 4 student",
    quote:
      "Christ Legacy Academy has been a tremendous blessing to our family. Our daughter has grown not only academically but also in her faith and character. The teachers genuinely care about nurturing the whole child in a Christ-centred environment.",
  },
  {
    id: 2,
    name: "Mr. Okonkwo",
    relationship: "Parent of Year 6 student",
    quote:
      "We chose CLA because of their unwavering commitment to both academic excellence and Christian values. Our son consistently performs at the top of his class, and we love seeing him apply biblical principles in his daily life.",
  },
  {
    id: 3,
    name: "Mrs. Thompson",
    relationship: "Parent of Year 2 student",
    quote:
      "The dedication of the staff at Christ Legacy Academy is truly remarkable. My daughter looks forward to school every single day. The balance between rigorous academics and spiritual development is exactly what we were looking for.",
  },
  {
    id: 4,
    name: "Pastor & Mrs. Eze",
    relationship: "Parents of Year 5 and Year 3 students",
    quote:
      "Having two children at CLA, we can confidently say the school delivers on its promise of raising godly leaders. The curriculum is excellent, the moral foundation is strong, and our children are thriving in every way.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, x: -60, transition: { duration: 0.3, ease: "easeIn" } },
};

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const isPaused = useRef(false);
  const intervalRef = useRef(null);

  const advance = useCallback(() => {
    if (!isPaused.current) {
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
    }
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(advance, 4000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [advance]);

  const handleMouseEnter = () => {
    isPaused.current = true;
  };

  const handleMouseLeave = () => {
    isPaused.current = false;
  };

  const goTo = (index) => {
    setCurrent(index);
  };

  const testimonial = TESTIMONIALS[current];

  return (
    <section
      id="testimonials"
      className="py-24 bg-cla-purple"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading text-white mb-4">
            What Parents Say
          </h2>
          <div className="w-16 h-1 bg-cla-gold mx-auto" />
        </div>

        {/* Testimonial carousel */}
        <div className="flex justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="w-full max-w-2xl mx-auto px-6"
            >
              {/* Card container */}
              <div className="testimonial-card relative rounded-2xl p-10">
                {/* Decorative quote mark */}
                <span
                  className="absolute top-4 left-6 text-cla-gold font-heading leading-none select-none"
                  style={{ fontSize: "4rem" }}
                  aria-hidden="true"
                >
                  &ldquo;
                </span>

                {/* Quote text */}
                <p className="text-white/90 text-lg leading-relaxed mt-10 mb-8 text-center">
                  {testimonial.quote}
                </p>

                {/* Author info */}
                <div className="text-center">
                  <p className="text-white font-bold text-lg">
                    {testimonial.name}
                  </p>
                  <p className="text-cla-gold text-sm mt-1">
                    {testimonial.relationship}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center items-center gap-3 mt-10">
          {TESTIMONIALS.map((t, index) => (
            <button
              key={t.id}
              onClick={() => goTo(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                index === current
                  ? "bg-cla-gold scale-125"
                  : "bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
