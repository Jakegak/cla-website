import { useState } from "react";
import { motion } from "framer-motion";
import ApplicationModal from "./ApplicationModal";

const FEE_DATA = [
  { programme: "Early Years (Ages 3-5)", termFee: "18,000", annualFee: "54,000" },
  { programme: "Lower Primary (Ages 6-8)", termFee: "25,000", annualFee: "75,000" },
  { programme: "Upper Primary (Ages 9-12)", termFee: "30,000", annualFee: "90,000" },
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
            Our admissions process is simple and welcoming. Follow the steps below
            to secure your child&apos;s place.
          </motion.p>

          {/* Admissions Steps */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            variants={staggerContainer}
          >
            {STEPS.map((item) => (
              <motion.div
                key={item.step}
                className="bg-gray-50 rounded-2xl p-6 text-center shadow-sm"
                variants={fadeInUp}
              >
                <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-700 font-bold text-lg flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-dark-heading font-semibold text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-dark-body text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Fee Structure */}
          <motion.h3
            className="text-dark-heading text-2xl font-bold text-center mb-6"
            variants={fadeInUp}
          >
            Fee Structure
          </motion.h3>

          <motion.div
            className="overflow-x-auto mb-6"
            variants={fadeInUp}
          >
            <table className="w-full max-w-3xl mx-auto text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-3 px-4 text-dark-heading font-semibold">Programme</th>
                  <th className="py-3 px-4 text-dark-heading font-semibold">Term Fee (KES)</th>
                  <th className="py-3 px-4 text-dark-heading font-semibold">Annual Fee (KES)</th>
                </tr>
              </thead>
              <tbody>
                {FEE_DATA.map((row) => (
                  <tr key={row.programme} className="border-b border-gray-100">
                    <td className="py-3 px-4 text-dark-body">{row.programme}</td>
                    <td className="py-3 px-4 text-dark-body">{`KES ${row.termFee}`}</td>
                    <td className="py-3 px-4 text-dark-body">{`KES ${row.annualFee}`}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          <motion.p
            className="text-dark-body text-sm text-center max-w-2xl mx-auto mb-8"
            variants={fadeInUp}
          >
            Fees are payable per term. A discount applies when the full annual fee is
            paid in advance. Additional costs may apply for uniforms, books, and
            extracurricular activities.
          </motion.p>

          <motion.div
            className="text-center"
            variants={fadeInUp}
          >
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="rounded-full px-8 py-3 text-lg"
              style={{
                backgroundColor: "#FFB800",
                color: "#2D1B69",
                fontWeight: "bold",
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
