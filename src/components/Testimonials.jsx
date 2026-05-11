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
  const isPausedRef = useRef(false);

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
    const startInterval = () => {
      intervalRef.current = setInterval(() => {
        if (!isPausedRef.current) {
          goNext();
        }
      }, 6000);
    };

    startInterval();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [goNext]);

  const handleMouseEnter = () => {
    isPausedRef.current = true;
  };

  const handleMouseLeave = () => {
    isPausedRef.current = false;
  };

  const testimonial = TESTIMONIALS[current];

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-20"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            What Parents Say
          </h2>
          <div className="mx-auto h-1 w-20 rounded-full bg-blue-600" />
        </motion.div>

        <div
          className="relative min-h-[280px]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={testimonial.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 flex flex-col items-center justify-center text-center"
            >
              <svg
                className="mb-6 h-10 w-10 text-blue-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="mb-6 max-w-2xl text-lg leading-relaxed text-gray-700 italic sm:text-xl">
                {testimonial.quote}
              </p>
              <p className="font-semibold text-gray-900">
                {testimonial.name}
              </p>
              <p className="text-sm text-gray-500">
                {testimonial.relationship}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {TESTIMONIALS.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                index === current
                  ? "scale-125 bg-blue-600"
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
