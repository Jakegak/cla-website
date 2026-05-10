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
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div variants={childVariants} className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
              Admissions & Fees
              <span className="section-heading-underline mx-auto"></span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join our community of learners. Our admissions process is simple and
              straightforward.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-4 gap-6 mb-16"
            variants={containerVariants}
          >
            {steps.map((step) => (
              <motion.div
                key={step.number}
                variants={childVariants}
                className="relative text-center p-6 rounded-xl bg-gray-50 border border-gray-200"
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold"
                  style={{
                    backgroundColor: '#FFB800',
                    color: '#2D1B69',
                  }}
                >
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={childVariants} className="mb-16">
            <h3 className="text-2xl font-heading font-bold text-gray-900 mb-8 text-center">
              Fee Structure
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full max-w-2xl mx-auto">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 text-gray-600 font-semibold">
                      Programme
                    </th>
                    <th className="text-left py-3 px-4 text-gray-600 font-semibold">
                      Term Fee
                    </th>
                    <th className="text-left py-3 px-4 text-gray-600 font-semibold">
                      Annual Fee
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {feeTiers.map((fee) => (
                    <tr
                      key={fee.tier}
                      className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                    >
                      <td className="py-3 px-4 text-gray-900 font-medium">
                        {fee.tier}
                      </td>
                      <td className="py-3 px-4 text-gray-600">
                        ₦{fee.termFee}
                      </td>
                      <td className="py-3 px-4 text-gray-600">
                        ₦{fee.annualFee}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          <motion.div variants={childVariants} className="text-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="cta-apply-btn px-8 py-4 rounded-full text-lg font-bold transition-all"
              style={{
                backgroundColor: '#FFB800',
                color: '#2D1B69',
              }}
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
