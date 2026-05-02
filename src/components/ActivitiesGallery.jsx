import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const compulsoryActivities = [
  { name: "Chess", icon: "♟️", price: "Ksh 1,000/term" },
  { name: "Abacus", icon: "🧮", price: "Ksh 1,000/term" },
  { name: "Dance Club", icon: "💃", price: "Ksh 1,000/term" },
  { name: "Culinary", icon: "🧑‍🍳", price: "Ksh 1,000/term" },
  { name: "Art World", icon: "🎨", price: "Ksh 1,000/term" },
  { name: "Origami", icon: "🕊️", price: "Ksh 1,000/term" },
  { name: "Beading", icon: "📿", price: "Ksh 1,000/term" },
];

const optionalActivities = [
  { name: "Music", icon: "🎸", price: "Ksh 2,500/term" },
  { name: "Skating", icon: "🛼", price: "Ksh 2,500/term" },
  { name: "Swimming", icon: "🏊‍♀️", price: "Ksh 2,500/term" },
  { name: "Ballet", icon: "🩰", price: "Ksh 2,000/term" },
  { name: "Taekwondo", icon: "🥋", price: "Ksh 2,000/term" },
];

export default function ActivitiesGallery() {
  const [activeTab, setActiveTab] = useState("compulsory");

  const activeData =
    activeTab === "compulsory" ? compulsoryActivities : optionalActivities;

  return (
    <section id="programs" className="py-24 bg-slate-900 text-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Student Activities
          </h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Stimulating learning through a diverse range of co-curricular and
            extracurricular programs.
          </p>
        </div>

        {/* Interactive Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab("compulsory")}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeTab === "compulsory"
                ? "bg-cyan-500 text-slate-900 shadow-[0_0_15px_rgba(6,182,212,0.5)]"
                : "bg-slate-800 text-slate-400 hover:bg-slate-700"
            }`}
          >
            Compulsory Clubs
          </button>
          <button
            onClick={() => setActiveTab("optional")}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeTab === "optional"
                ? "bg-cyan-500 text-slate-900 shadow-[0_0_15px_rgba(6,182,212,0.5)]"
                : "bg-slate-800 text-slate-400 hover:bg-slate-700"
            }`}
          >
            Optional Extras
          </button>
        </div>

        {/* Animated Grid */}
        <motion.div layout className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {activeData.map((activity, index) => (
                <motion.div
                  key={activity.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-slate-800/80 border border-slate-700 p-6 rounded-2xl flex flex-col items-center text-center hover:bg-slate-700 hover:border-cyan-400/50 hover:-translate-y-2 transition-all duration-300 group shadow-lg cursor-pointer"
                >
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {activity.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {activity.name}
                  </h3>
                  <span className="text-sm font-medium px-3 py-1 bg-slate-900 rounded-full text-cyan-300 border border-cyan-900/50">
                    {activity.price}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
