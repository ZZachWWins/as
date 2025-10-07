// src/components/FAQ.js (Spacious Grid: Wide Cards, Massive Gaps, Floating Flare)
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
    <section className="py-32 bg-gradient-to-br from-white to-red-50/20 relative overflow-hidden">
      {/* Floating Flare Elements */}
      <motion.div 
        className="absolute top-1/2 left-0 w-96 h-96 bg-red-100 rounded-full opacity-20 -translate-x-1/2 translate-y-1/2"
        animate={{ x: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-20 right-0 w-80 h-80 bg-yellow-100 rounded-full opacity-20 translate-x-1/2"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          className="text-6xl font-bold text-center mb-8 text-gray-900 tracking-tight"
        >
          Frequently Asked
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          className="text-6xl font-bold text-center mb-16 text-transparent bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text"
        >
          Questions
        </motion.p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12"> {/* Spacious grid: Own space on desktop */}
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }} // Staggered slide-in
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group overflow-hidden rounded-3xl border border-gray-200/50 shadow-xl hover:shadow-2xl bg-white/80 backdrop-blur-sm" // Glassy base
              whileHover={{ y: -8 }} // Lift on hover for presence
            >
              <motion.button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-10 font-semibold text-gray-900 hover:bg-red-50/30 transition-all ease-out flex justify-between items-center" // Massive padding
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-2xl leading-tight flex-1"> {/* XXL text */}
                  {faq.question}
                </span>
                <motion.span 
                  animate={{ rotate: openIndex === index ? 180 : 0 }} 
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="ml-8 text-red-500 flex-shrink-0" // Ample icon space
                >
                  <ChevronDown className="w-8 h-8" /> {/* Scaled icon */}
                </motion.span>
              </motion.button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-10 pb-10 bg-gradient-to-b from-red-50/50 to-transparent"> {/* Flared expand glow */}
                      <p className="text-gray-700 leading-relaxed text-lg">{faq.answer}</p>
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