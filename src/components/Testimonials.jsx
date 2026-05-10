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

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 200 : -200,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: (direction) => ({
    x: direction > 0 ? -200 : 200,
    opacity: 0,
    transition: { duration: 0.3, ease: "easeIn" },
  }),
};

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  const goTo = useCallback(
    (index) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current]
  );

  const goNext = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    intervalRef.current = setInterval(goNext, 6000);
    return () => clearInterval(intervalRef.current);
  }, [isPaused, goNext]);

  const testimonial = TESTIMONIALS[current];

  return (
    <section
      id="testimonials"
      className="section-dark-navy section-padding px-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="section-heading text-3xl sm:text-4xl font-heading text-white mb-12">
          What Parents Say
        </h2>

        <div className="relative min-h-[250px] flex items-center justify-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={testimonial.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="testimonial-card w-full"
            >
              <blockquote className="text-lg sm:text-xl leading-relaxed mb-6" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div>
                <p className="text-white font-bold text-lg">
                  {testimonial.name}
                </p>
                <p className="text-cla-gold text-sm">
                  {testimonial.relationship}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === current
                  ? "bg-cla-gold scale-125"
                  : "bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
