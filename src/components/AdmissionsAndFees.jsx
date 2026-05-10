import { useState } from "react";
import { motion } from "framer-motion";

const FEE_DATA = [
  { programme: "Early Years (Ages 3–5)", termly: "₦250,000", annual: "₦700,000" },
  { programme: "Primary School (Ages 6–11)", termly: "₦350,000", annual: "₦1,000,000" },
  { programme: "Secondary School (Ages 12–17)", termly: "₦450,000", annual: "₦1,250,000" },
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
  return (
    <div
      className="section-light-white section-padding px-4"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2
            className="section-heading text-3xl sm:text-4xl font-bold mb-4 text-dark-heading"
            variants={fadeInUp}
          >
            Admissions &amp; Fees
          </motion.h2>

          <motion.p
            className="text-lg max-w-2xl mx-auto mb-16 text-dark-body"
            variants={fadeInUp}
          >
            Join the Christ Legacy Academy family. Our admissions process is straightforward and welcoming.
          </motion.p>

          {/* Admissions Steps */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            variants={staggerContainer}
          >
            {STEPS.map((item) => (
              <motion.div
                key={item.step}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-left"
                variants={fadeInUp}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm mb-4"
                  style={{ backgroundColor: '#2D1B69' }}
                >
                  {item.step}
                </div>
                <h3 className="text-lg font-bold mb-2 text-dark-heading">
                  {item.title}
                </h3>
                <p className="text-sm text-dark-body">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Fee Table */}
          <motion.div
            className="overflow-x-auto"
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-bold mb-6 text-dark-heading">
              Fee Structure
            </h3>
            <table className="w-full max-w-3xl mx-auto text-left border-collapse">
              <thead>
                <tr style={{ borderBottom: '2px solid #E5E7EB' }}>
                  <th className="py-3 px-4 font-semibold text-dark-heading">Programme</th>
                  <th className="py-3 px-4 font-semibold text-dark-heading">Termly Fee</th>
                  <th className="py-3 px-4 font-semibold text-dark-heading">Annual Fee</th>
                </tr>
              </thead>
              <tbody>
                {FEE_DATA.map((row, index) => (
                  <tr
                    key={index}
                    style={{ borderBottom: '1px solid #E5E7EB' }}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-3 px-4 text-dark-body font-medium">{row.programme}</td>
                    <td className="py-3 px-4 text-dark-body">{row.termly}</td>
                    <td className="py-3 px-4 font-semibold text-dark-heading">{row.annual}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-sm mt-4 text-dark-body" style={{ opacity: 0.7 }}>
              * Fees are subject to annual review. Sibling discounts and payment plans available.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
