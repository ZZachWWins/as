// src/components/FAQ.js (Modern: Icon Cards, Chevron Animations, Gradient Accents)
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react'; // Assuming Lucide icons installed; fallback emojis if not

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
    <section className="py-20 bg-gradient-to-b from-white to-red-50">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          className="text-4xl font-bold text-center mb-12 text-gray-800"
        >
          Got Questions? We've Got Answers
        </motion.h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-6 font-bold text-gray-800 hover:bg-red-50 transition-colors flex justify-between items-center bg-gradient-to-r from-transparent to-red-100/20"
              >
                <span className="text-lg">{faq.question}</span>
                <motion.span 
                  animate={{ rotate: openIndex === index ? 180 : 0 }} 
                  transition={{ duration: 0.3 }}
                  className="text-red-500 ml-4"
                >
                  <ChevronDown className="w-5 h-5" /> {/* Or use emoji: ↓ */}
                </motion.span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="p-6 text-gray-700 bg-red-50 border-t border-red-100 leading-relaxed">{faq.answer}</p>
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