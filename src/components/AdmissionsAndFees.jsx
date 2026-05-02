import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Fee data extracted from the brochure
const feeStructure = {
  Playgroup: {
    admission: "3,000",
    interview: "-",
    tuition: "15,000",
    books: "1,200",
    diary: "200",
    report: "400",
    computer: "-",
  },
  "PP1 & PP2": {
    admission: "3,000",
    interview: "500",
    tuition: "15,000",
    books: "1,200",
    diary: "200",
    report: "400",
    computer: "-",
  },
  "Grade 1-3": {
    admission: "3,000",
    interview: "1,000",
    tuition: "18,500",
    books: "2,000",
    diary: "200",
    report: "400",
    computer: "1,000",
  },
  "Grade 4-5": {
    admission: "3,000",
    interview: "1,000",
    tuition: "20,000",
    books: "2,500",
    diary: "200",
    report: "400",
    computer: "2,000",
  },
  "Grade 6": {
    admission: "3,000",
    interview: "1,000",
    tuition: "22,000",
    books: "2,500",
    diary: "200",
    report: "400",
    computer: "2,000",
  },
};

// Helper function to turn strings like "15,000" into real numbers, and "-" into 0
const parseFee = (feeStr) => {
  if (!feeStr || feeStr === "-") return 0;
  return parseInt(feeStr.replace(/,/g, ""), 10);
};

export default function AdmissionsAndFees() {
  const [selectedGrade, setSelectedGrade] = useState("Grade 1-3");
  const activeFees = feeStructure[selectedGrade];

  // Calculate the total dynamically based on the selected grade
  const calculateTotal = (fees) => {
    return Object.values(fees).reduce((sum, fee) => sum + parseFee(fee), 0);
  };

  const totalTermFee = calculateTotal(activeFees);

  return (
    <section id="admissions" className="py-24 bg-slate-800 text-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Admissions & Fees
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Everything you need to know to join the Christian Living Academy
            family. Admission is currently in progress!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Admission Requirements */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-700/40 p-8 rounded-3xl border border-slate-600 flex flex-col h-full"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="p-2 bg-green-500/20 text-green-400 rounded-lg">
                📋
              </span>
              Admission Requirements
            </h3>
            <ul className="space-y-4 mb-8 flex-grow">
              {[
                "A copy of birth certificate",
                "2 Coloured passport photos",
                "Assessment reports",
                "Clearance letter from the previous school",
              ].map((req, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 bg-slate-800/60 p-4 rounded-xl border border-slate-700/50"
                >
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 border border-green-500/30">
                    <svg
                      className="w-4 h-4 text-green-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-slate-300 font-medium">{req}</span>
                </motion.li>
              ))}
            </ul>

            {/* Note about Meals */}
            <div className="bg-blue-900/30 border border-blue-500/30 p-5 rounded-2xl flex gap-4 items-start mt-auto">
              <span className="text-3xl">🍽️</span>
              <div>
                <h4 className="text-blue-300 font-bold mb-1">Meals Included</h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Tuition fee is inclusive of breaktea, Lunch & evening snacks
                  for all students.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Fee Structure Calculator */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900 p-8 rounded-3xl border border-slate-700 shadow-2xl flex flex-col h-full"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Fee Structure (Ksh)
            </h3>

            {/* Grade Selector Pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {Object.keys(feeStructure).map((grade) => (
                <button
                  key={grade}
                  onClick={() => setSelectedGrade(grade)}
                  className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
                    selectedGrade === grade
                      ? "bg-green-500 text-slate-900 shadow-[0_0_10px_rgba(34,197,94,0.4)]"
                      : "bg-slate-800 text-slate-400 hover:bg-slate-700 border border-slate-700"
                  }`}
                >
                  {grade}
                </button>
              ))}
            </div>

            {/* Dynamic Fee Details */}
            <div className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 flex flex-col">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedGrade}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col h-full"
                >
                  <div className="divide-y divide-slate-700/50 flex-grow">
                    {/* Individual Fee Rows */}
                    <div className="flex justify-between p-4 hover:bg-slate-700/30 transition-colors">
                      <span className="text-slate-400">Admission Fee</span>
                      <span className="text-white font-medium">
                        {activeFees.admission}
                      </span>
                    </div>
                    {activeFees.interview !== "-" && (
                      <div className="flex justify-between p-4 hover:bg-slate-700/30 transition-colors">
                        <span className="text-slate-400">Interview Fee</span>
                        <span className="text-white font-medium">
                          {activeFees.interview}
                        </span>
                      </div>
                    )}
                    <div className="flex justify-between p-4 bg-slate-700/20 hover:bg-slate-700/40 transition-colors">
                      <span className="text-slate-300 font-semibold">
                        Tuition Fee
                      </span>
                      <span className="text-green-400 font-bold">
                        {activeFees.tuition}
                      </span>
                    </div>
                    <div className="flex justify-between p-4 hover:bg-slate-700/30 transition-colors">
                      <span className="text-slate-400">Exercise Books</span>
                      <span className="text-white font-medium">
                        {activeFees.books}
                      </span>
                    </div>
                    <div className="flex justify-between p-4 hover:bg-slate-700/30 transition-colors">
                      <span className="text-slate-400">
                        School Diary & Report Book
                      </span>
                      <span className="text-white font-medium">
                        {parseFee(activeFees.diary) +
                          parseFee(activeFees.report)}
                      </span>
                    </div>
                    {activeFees.computer !== "-" && (
                      <div className="flex justify-between p-4 hover:bg-slate-700/30 transition-colors">
                        <span className="text-slate-400">
                          Computer / French
                        </span>
                        <span className="text-white font-medium">
                          {activeFees.computer}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* TOTAL ROW */}
                  <div className="bg-green-500/10 border-t-2 border-green-500/50 p-5 mt-auto">
                    <div className="flex justify-between items-center">
                      <span className="text-green-400 font-bold text-lg uppercase tracking-wider">
                        Total Required
                      </span>
                      <span className="text-white font-extrabold text-2xl">
                        Ksh {totalTermFee.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
