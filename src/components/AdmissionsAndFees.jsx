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
    <div className="py-20 bg-white" id="admissions">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={childVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-cla-purple mb-4">
              Admissions &amp; Fees
            </h2>
            <div className="gold-underline" />
            <p className="text-lg text-slate-700 max-w-2xl mx-auto mt-4">
              Join our community of learners. Our admissions process is designed
              to be straightforward and welcoming.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {steps.map((step) => (
              <motion.div
                key={step.number}
                variants={childVariants}
                className="relative text-center p-6 rounded-xl bg-white border border-slate-100"
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4"
                  style={{ backgroundColor: "#FFB800", color: "#2D1B69" }}
                >
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-cla-purple mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-700 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div variants={childVariants}>
            <h3 className="text-2xl font-bold text-cla-purple text-center mb-2">
              Fee Structure
            </h3>
            <div className="gold-underline mb-8" />

            <div className="overflow-x-auto">
              <table className="w-full max-w-3xl mx-auto text-left">
                <thead>
                  <tr className="border-b border-slate-100">
                    <th className="py-4 px-6 text-slate-800 font-semibold bg-white">
                      Programme
                    </th>
                    <th className="py-4 px-6 text-slate-800 font-semibold bg-white">
                      Term Fee (₦)
                    </th>
                    <th className="py-4 px-6 text-slate-800 font-semibold bg-white">
                      Annual Fee (₦)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {feeTiers.map((fee) => (
                    <tr
                      key={fee.tier}
                      className="border-b border-slate-100 hover:bg-slate-50 transition-colors"
                    >
                      <td className="py-4 px-6 text-slate-800 font-medium">
                        {fee.tier}
                      </td>
                      <td className="py-4 px-6 text-slate-700">
                        {fee.termFee}
                      </td>
                      <td className="py-4 px-6 text-slate-700">
                        {fee.annualFee}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          <motion.div variants={childVariants} className="text-center mt-12">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-3 rounded-full font-semibold text-lg transition-transform hover:scale-105"
              style={{ backgroundColor: "#FFB800", color: "#2D1B69" }}
            >
              Apply Now
            </button>
          </motion.div>
        </motion.div>
      </div>

      <ApplicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
