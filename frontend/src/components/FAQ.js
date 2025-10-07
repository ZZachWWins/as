// src/components/FAQ.js (Apple-Level: Fluid Rounds, Subtle Shadows, Elegant Expands)
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What's in Activate?",
    answer: "A potent blend of natural nootropics, adaptogens, and vasodilators like L-citrulline, rhodiola, and caffeine from green tea—science-backed for breath, flow, and focus without jitters."
  },
  {
    question: "Is it safe for daily use?",
    answer: "Yes! Third-party tested, NSF-certified, and dosed for sustainability. Consult your doc if pregnant or on meds—starts gentle, builds epic."
  },
  {
    question: "How soon do I feel the boost?",
    answer: "Users report deeper breaths in 15 mins, full flow/focus in 30-60 mins. Cumulative magic hits after 3-5 days of consistent use."
  },
  {
    question: "What's the launch pricing?",
    answer: "Waitlist exclusives: $49 first bottle (20% off retail), bundles from $129. Free shipping on orders over $75—lock it in now before prices rise."
  },
  {
    question: "Money-back guarantee?",
    answer: "30-day no-questions-asked. If it doesn't activate your edge, full refund. We're that confident."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl font-semibold text-center mb-12 text-gray-900 font-sans"
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="overflow-hidden rounded-3xl border border-gray-200 shadow-sm"
            >
              <motion.button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-6 font-medium text-gray-900 hover:bg-gray-50 transition-colors ease-out flex justify-between items-center"
                whileHover={{ scale: 1.005 }}
                whileTap={{ scale: 0.995 }}
              >
                <span className="text-base leading-relaxed">{faq.question}</span>
                <motion.span 
                  animate={{ rotate: openIndex === index ? 180 : 0 }} 
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="ml-4 text-gray-400"
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.span>
              </motion.button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed text-sm">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;