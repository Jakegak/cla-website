import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Mrs. Wanjiku Kamau",
    relationship: "Parent of Year 4 student",
    quote:
      "Christian Living Academy has been a tremendous blessing to our family. Our daughter has grown not only academically but also in her faith and character. The teachers genuinely care about nurturing the whole child in a Christ-centred environment.",
  },
  {
    id: 2,
    name: "Mr. James Otieno",
    relationship: "Parent of Year 6 student",
    quote:
      "We chose CLA because of their unwavering commitment to both academic excellence and Christian values. Our son consistently performs at the top of his class, and we love seeing him apply biblical principles in his daily life.",
  },
  {
    id: 3,
    name: "Mrs. Grace Muthoni",
    relationship: "Parent of Year 2 student",
    quote:
      "The dedication of the staff at Christian Living Academy is truly remarkable. My daughter looks forward to school every single day. The balance between rigorous academics and spiritual development is exactly what we were looking for.",
  },
  {
    id: 4,
    name: "Pastor and Mrs. David Njoroge",
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
  const intervalRef = useRef(null);

  const goTo = useCallback(
    (index) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current]
  );

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const startAutoPlay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(next, 6000);
  }, [next]);

  useEffect(() => {
    startAutoPlay();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startAutoPlay]);

  const handleDotClick = (index) => {
    goTo(index);
    startAutoPlay();
  };

  const testimonial = TESTIMONIALS[current];

  return (
    <section
      id="testimonials"
      className="bg-gradient-to-b from-blue-50 to-white px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="section-heading mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
          What Parents Say
        </h2>

        <p className="mx-auto mb-12 max-w-2xl text-gray-600">
          Hear from families who have experienced the transformative impact of
          Christian Living Academy on their children&apos;s lives.
        </p>

        <div className="relative min-h-[250px] overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={testimonial.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="mx-auto max-w-2xl rounded-2xl bg-white p-8 shadow-lg"
            >
              <div className="mb-4 text-4xl text-cla-gold">&ldquo;</div>
              <p className="mb-6 text-lg leading-relaxed text-gray-700 italic">
                {testimonial.quote}
              </p>
              <div>
                <p className="font-semibold text-gray-900">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-500">
                  {testimonial.relationship}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {TESTIMONIALS.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                index === current
                  ? "scale-125 bg-cla-gold"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
