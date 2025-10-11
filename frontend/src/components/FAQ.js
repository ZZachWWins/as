// src/components/FAQ.js (Sleek Accordion: Glass Cards, Smooth Expand, Icon Chevron)
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
    <>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        className="text-5xl font-bold text-center mb-12 text-gray-800 bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent"
      >
        Frequently Asked Questions
      </motion.h2>
      <div className="faq-grid stagger-children" whileInView={{ className: 'stagger-children animate' }} viewport={{ once: true }}>
        {faqs.map((faq, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ delay: index * 0.1 }}
            className="faq-card"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="faq-button"
            >
              <span className="text-lg pr-4">{faq.question}</span>
              <motion.span 
                animate={{ rotate: openIndex === index ? 180 : 0 }} 
                transition={{ duration: 0.3 }}
                className="text-red-500"
              >
                <ChevronDown className="w-5 h-5" />
              </motion.span>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="faq-answer"
                >
                  <p className="italic text-gray-700 leading-relaxed">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default FAQ;