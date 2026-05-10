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
      "Having two children at CLA, we can confidently say the school delivers on its promise of raising godly leaders. The curriculum is excellent, the moral foundation is strong, and our children are thriving in every area.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -30,
    transition: { duration: 0.4, ease: "easeIn" },
  },
};

const INTERVAL_MS = 4000;

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const isPausedRef = useRef(false);
  const intervalRef = useRef(null);

  const startInterval = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      if (!isPausedRef.current) {
        setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
      }
    }, INTERVAL_MS);
  }, []);

  useEffect(() => {
    startInterval();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [startInterval]);

  function handleMouseEnter() {
    isPausedRef.current = true;
  }

  function handleMouseLeave() {
    isPausedRef.current = false;
  }

  function handleDotClick(index) {
    setActiveIndex(index);
    startInterval();
  }

  const testimonial = TESTIMONIALS[activeIndex];

  return (
    <section id="testimonials" className="bg-cla-purple py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl text-white mb-4">
          What Parents Say
        </h2>
        <div className="h-1 w-16 bg-cla-gold mx-auto mb-12 rounded-full" />

        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          aria-live="polite"
          className="relative min-h-64 flex items-center justify-center"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="w-full max-w-2xl mx-auto px-6"
            >
              <div className="text-cla-gold text-6xl leading-none mb-4 font-heading">
                &ldquo;
              </div>
              <p className="text-white/90 text-lg md:text-xl italic leading-relaxed mb-6">
                {testimonial.quote}
              </p>
              <div className="h-px w-12 bg-cla-gold mx-auto mb-4" />
              <p className="text-white font-bold text-lg">{testimonial.name}</p>
              <p className="text-cla-gold text-sm mt-1">
                {testimonial.relationship}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-3 mt-8">
          {TESTIMONIALS.map((item, index) => (
            <button
              key={item.id}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex
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
