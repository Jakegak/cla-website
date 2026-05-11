import { useState } from "react";
import { motion } from "framer-motion";
import ApplicationModal from "./ApplicationModal";

const FEE_DATA = [
  { programme: "Early Years (Ages 3-5)", termFee: 18000, annualFee: 54000 },
  { programme: "Lower Primary (Ages 6-8)", termFee: 25000, annualFee: 75000 },
  { programme: "Upper Primary (Ages 9-12)", termFee: 30000, annualFee: 90000 },
];

const STEPS = [
  {
    step: 1,
    title: "Submit Application",
    description: "Complete and submit the online application form with required documents.",
  },
  {
    step: 2,
    title: "Entrance Assessment",
    description: "Your child will take an age-appropriate entrance assessment at the school.",
  },
  {
    step: 3,
    title: "Interview",
    description: "A brief interview with the admissions team and your family.",
  },
  {
    step: 4,
    title: "Offer & Enrolment",
    description: "Successful candidates receive an offer letter and complete enrolment.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export default function AdmissionsAndFees() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div
      className="section-light-white section-padding px-4 bg-white text-gray-900"
      style={{ backgroundColor: "#FFFFFF", color: "#1a1a1a" }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.h2
            className="section-heading text-dark-heading text-center mb-4"
            variants={fadeInUp}
          >
            Admissions & Fees
          </motion.h2>
          <motion.p
            className="text-dark-body text-center max-w-2xl mx-auto mb-12"
            variants={fadeInUp}
          >
            Join our learning community. Follow the simple steps below to secure
            a place for your child.
          </motion.p>

          {/* Admission Steps */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            variants={staggerContainer}
          >
            {STEPS.map((item) => (
              <motion.div
                key={item.step}
                className="bg-gray-50 rounded-2xl p-6 text-center"
                variants={fadeInUp}
              >
                <div className="w-10 h-10 rounded-full bg-purple-700 text-white flex items-center justify-center mx-auto mb-4 font-bold">
                  {item.step}
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Fee Structure Table */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-2xl font-bold text-center mb-8">
              Fee Structure
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full max-w-3xl mx-auto text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="py-3 px-4 font-semibold">Programme</th>
                    <th className="py-3 px-4 font-semibold">Term Fee (KES)</th>
                    <th className="py-3 px-4 font-semibold">Annual Fee (KES)</th>
                  </tr>
                </thead>
                <tbody>
                  {FEE_DATA.map((item) => (
                    <tr
                      key={item.programme}
                      className="border-b border-gray-100 hover:bg-gray-50"
                    >
                      <td className="py-3 px-4">{item.programme}</td>
                      <td className="py-3 px-4">
                        KES {item.termFee.toLocaleString()}
                      </td>
                      <td className="py-3 px-4">
                        KES {item.annualFee.toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Apply Now Button */}
          <motion.div className="text-center mt-12" variants={fadeInUp}>
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              style={{
                backgroundColor: "#FFB800",
                color: "#2D1B69",
                fontWeight: "bold",
              }}
              className="px-8 py-3 rounded-full text-lg transition-transform hover:scale-105"
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
