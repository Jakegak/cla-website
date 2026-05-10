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
    <div className="py-24 bg-slate-900" id="admissions">
      <motion.div
        className="max-w-6xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Section Header */}
        <motion.div className="text-center mb-16" variants={childVariants}>
          <h2 className="text-4xl font-bold text-white mb-4">
            Admissions & Fees
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Join our vibrant learning community. Follow our simple admissions
            process to secure a place for your child.
          </p>
        </motion.div>

        {/* Admissions Process Steps */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          variants={childVariants}
        >
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative text-center p-6 rounded-xl bg-slate-800 border border-slate-700"
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4"
                style={{ backgroundColor: "#FFB800", color: "#2D1B69" }}
              >
                {step.number}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {step.title}
              </h3>
              <p className="text-gray-400 text-sm">{step.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Fee Table */}
        <motion.div className="mb-16" variants={childVariants}>
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Fee Structure
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full max-w-2xl mx-auto text-left">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="py-4 px-6 text-gray-300 font-semibold">
                    Programme
                  </th>
                  <th className="py-4 px-6 text-gray-300 font-semibold">
                    Term Fee (GHS)
                  </th>
                  <th className="py-4 px-6 text-gray-300 font-semibold">
                    Annual Fee (GHS)
                  </th>
                </tr>
              </thead>
              <tbody>
                {feeTiers.map((tier) => (
                  <tr
                    key={tier.tier}
                    className="border-b border-slate-800 hover:bg-slate-800 transition-colors"
                  >
                    <td className="py-4 px-6 text-white font-medium">
                      {tier.tier}
                    </td>
                    <td className="py-4 px-6 text-gray-300">
                      {tier.termFee}
                    </td>
                    <td className="py-4 px-6 text-gray-300">
                      {tier.annualFee}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Apply Now CTA Button */}
        <motion.div className="text-center" variants={childVariants}>
          <button
            type="button"
            className="cta-apply-btn text-lg font-bold px-10 py-4 rounded-lg border-none cursor-pointer transition-all duration-200"
            style={{ backgroundColor: "#FFB800", color: "#2D1B69" }}
            onClick={() => setIsModalOpen(true)}
          >
            Apply Now
          </button>
        </motion.div>
      </motion.div>

      <ApplicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
