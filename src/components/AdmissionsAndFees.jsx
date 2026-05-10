import { useState } from "react";
import { motion } from "framer-motion";
import ApplicationModal from "./ApplicationModal";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const steps = [
  {
    number: 1,
    title: "Submit Application",
    description:
      "Complete and submit the online application form with all required documents.",
  },
  {
    number: 2,
    title: "Assessment",
    description:
      "Your child will undergo an age-appropriate assessment to determine readiness.",
  },
  {
    number: 3,
    title: "Interview",
    description:
      "A brief family interview with the admissions team to discuss expectations.",
  },
  {
    number: 4,
    title: "Enrolment",
    description:
      "Upon acceptance, complete fee payment and enrolment paperwork.",
  },
];

const feeTiers = [
  {
    tier: "Early Years",
    termFee: "18,000",
    annualFee: "54,000",
  },
  {
    tier: "Lower Primary",
    termFee: "25,000",
    annualFee: "75,000",
  },
  {
    tier: "Upper Primary",
    termFee: "30,000",
    annualFee: "90,000",
  },
];

export default function AdmissionsAndFees() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="py-24 bg-slate-900">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto px-6 lg:px-8"
      >
        {/* Section Heading */}
        <motion.div variants={childVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Admissions
          </h2>
          <div className="w-24 h-1 bg-cla-gold mx-auto rounded-full" />
        </motion.div>

        {/* 4-Step Process Stepper */}
        <motion.div variants={childVariants} className="mb-20">
          <h3 className="text-xl md:text-2xl font-bold text-white text-center mb-10">
            Admission Process
          </h3>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-4 md:gap-0">
            {steps.map((step, index) => (
              <div key={step.number} className="flex flex-col md:flex-row items-center md:items-start w-full md:w-auto">
                {/* Step Card */}
                <div className="flex flex-row md:flex-col items-center md:items-center gap-4 md:gap-3 w-full md:w-48">
                  {/* Numbered Circle */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-cla-purple text-white flex items-center justify-center text-lg font-bold shadow-lg shadow-cla-purple/25">
                    {step.number}
                  </div>
                  {/* Text */}
                  <div className="md:text-center">
                    <p className="text-white font-bold text-sm md:text-base">
                      {step.title}
                    </p>
                    <p className="text-slate-400 text-xs md:text-sm mt-1 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Connector Line / Arrow */}
                {index < steps.length - 1 && (
                  <>
                    {/* Horizontal connector — hidden on mobile */}
                    <div className="hidden md:flex items-center mx-4 flex-shrink-0">
                      <div className="w-12 lg:w-20 h-0.5 bg-slate-600" />
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        className="flex-shrink-0 -ml-1"
                      >
                        <path d="M2 1L10 6L2 11" fill="#475569" />
                      </svg>
                    </div>
                    {/* Vertical connector — visible only on mobile */}
                    <div className="flex md:hidden items-center justify-center w-12 py-2">
                      <div className="w-0.5 h-8 bg-slate-600" />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Fee Table */}
        <motion.div variants={childVariants} className="mb-16">
          <h3 className="text-xl md:text-2xl font-bold text-white text-center mb-8">
            Fee Structure
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full max-w-2xl mx-auto border-collapse rounded-2xl overflow-hidden">
              <thead>
                <tr className="bg-cla-purple text-white">
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">
                    Tier
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">
                    Term Fee (KES)
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">
                    Annual Fee (KES)
                  </th>
                </tr>
              </thead>
              <tbody>
                {feeTiers.map((row, index) => (
                  <tr
                    key={row.tier}
                    className={index % 2 === 0 ? "bg-slate-800/70" : "bg-slate-800/40"}
                  >
                    <td className="px-6 py-4 text-white font-bold text-sm">
                      {row.tier}
                    </td>
                    <td className="px-6 py-4 text-slate-300 text-sm">
                      {row.termFee}
                    </td>
                    <td className="px-6 py-4 text-slate-300 text-sm">
                      {row.annualFee}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-500 text-xs text-center mt-4">
            Fees are subject to review. Contact admissions for the latest schedule.
          </p>
        </motion.div>

        {/* Apply Now CTA */}
        <motion.div variants={childVariants} className="text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsModalOpen(true)}
            className="bg-cla-purple text-white rounded-lg px-8 py-3 font-bold text-lg shadow-lg shadow-cla-purple/25 transition-colors hover:brightness-110"
          >
            Apply Now
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Local ApplicationModal instance */}
      <ApplicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
