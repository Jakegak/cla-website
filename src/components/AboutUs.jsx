import { motion } from "framer-motion";

export default function AboutUs() {
  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="py-24 bg-slate-800 text-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Discover Our Foundation
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto">
            Dedicated to advancing knowledge and wisdom while ensuring positive
            character training in a Christian way.
          </p>
        </motion.div>

        {/* Vision, Mission, Values Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Vision Card */}
          <motion.div
            variants={itemVariants}
            className="bg-slate-700/50 p-8 rounded-2xl border border-slate-600 hover:border-blue-400/50 transition-colors shadow-lg hover:shadow-blue-900/20 group"
          >
            <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg
                className="w-8 h-8 text-blue-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Our Vision 
            </h3>
            <p className="text-slate-300 leading-relaxed">
              To offer the Best Education and Develop Positive Character that
              Every Child will impact the Society.
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            variants={itemVariants}
            className="bg-slate-700/50 p-8 rounded-2xl border border-slate-600 hover:border-blue-400/50 transition-colors shadow-lg hover:shadow-blue-900/20 group"
          >
            <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg
                className="w-8 h-8 text-blue-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Our Mission 
            </h3>
            <p className="text-slate-300 leading-relaxed">
              To advance and diffuse knowledge, wisdom and understanding by
              teaching and ensuring positive training of their character in a
              Christian way and influence the society.
            </p>
          </motion.div>

          {/* Core Values Card */}
          <motion.div
            variants={itemVariants}
            className="bg-slate-700/50 p-8 rounded-2xl border border-slate-600 hover:border-blue-400/50 transition-colors shadow-lg hover:shadow-blue-900/20 group"
          >
            <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg
                className="w-8 h-8 text-blue-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Core Values 
            </h3>
            <p className="text-slate-300 leading-relaxed">
              Team Work, Excellence, Accountability, Commitment, Hardwork &
              Honesty, Efficiency, Reliable.
            </p>
          </motion.div>
        </motion.div>

        {/* Why Choose Us & What Makes Us Different */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              Why Choose Us? 
            </h3>
            <ul className="space-y-4">
              {[
                "Our school embraces CBC education system & ensures all required resources are available[.",
                "The academy has highly qualified, experienced, dedicated & committed professionals[.",
                "A variety of extra-curricular and co-curricular activities to stimulate learning",
                "We offer all students a FREE GROUP INSURANCE COVER against personal accidents.",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-lg text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-blue-900/40 to-slate-800 p-8 rounded-3xl border border-blue-500/20"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              What Makes Us Different
            </h3>
            <div className="space-y-6">
              <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-600/50 flex items-center gap-4">
                <div className="p-3 bg-blue-500/20 rounded-lg">
                  <span className="text-2xl">🙏</span>
                </div>
                <p className="text-slate-200 font-medium">
                  Strong Christian based moral training 
                </p>
              </div>
              <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-600/50 flex items-center gap-4">
                <div className="p-3 bg-blue-500/20 rounded-lg">
                  <span className="text-2xl">👨‍🏫</span>
                </div>
                <p className="text-slate-200 font-medium">
                  Personalized attention in small classes 
                </p>
              </div>
              <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-600/50 flex items-center gap-4">
                <div className="p-3 bg-blue-500/20 rounded-lg">
                  <span className="text-2xl">🍲</span>
                </div>
                <p className="text-slate-200 font-medium">
                  Well balanced meals 
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
