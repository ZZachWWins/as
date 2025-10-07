// src/components/FAQ.js (Fancy Modern: Icons, Glassmorphism, Stagger Animations)
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sparkles, Shield, Clock, DollarSign, Award } from 'lucide-react';

const faqs = [
  {
    question: "What's in Activate?",
    answer: "A potent blend of natural nootropics, adaptogens, and vasodilators like L-citrulline, rhodiola, and caffeine from green tea—science-backed for breath, flow, and focus without jitters.",
    icon: Sparkles
  },
  {
    question: "Is it safe for daily use?",
    answer: "Yes! Third-party tested, NSF-certified, and dosed for sustainability. Consult your doc if pregnant or on meds—starts gentle, builds epic.",
    icon: Shield
  },
  {
    question: "How soon do I feel the boost?",
    answer: "Users report deeper breaths in 15 mins, full flow/focus in 30-60 mins. Cumulative magic hits after 3-5 days of consistent use.",
    icon: Clock
  },
  {
    question: "What's the launch pricing?",
    answer: "Waitlist exclusives: $49 first bottle (20% off retail), bundles from $129. Free shipping on orders over $75—lock it in now before prices rise.",
    icon: DollarSign
  },
  {
    question: "Money-back guarantee?",
    answer: "30-day no-questions-asked. If it doesn't activate your edge, full refund. We're that confident.",
    icon: Award
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-20 bg-gradient-to-b from-white via-red-50 to-yellow-50 relative overflow-hidden">
      {/* Fancy BG Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-red-300 rounded-full mix-blend-color-burn filter blur-xl animate-blob animation-delay-4000"></div>
      </div>
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          className="text-5xl font-bold text-center mb-16 text-gray-800 bg-gradient-to-r from-red-600 to-yellow-500 bg-clip-text text-transparent"
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => {
            const Icon = faq.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group"
              >
                <motion.div
                  className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group-hover:bg-red-50/50 border border-red-100/50"
                  whileHover={{ scale: 1.02, y: -4 }}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full text-left p-8 font-bold text-gray-800 flex justify-between items-center transition-all duration-300 hover:from-red-500/10 hover:to-yellow-500/10"
                  >
                    <div className="flex items-center gap-4">
                      <motion.div
                        animate={{ rotate: openIndex === index ? 360 : 0 }}
                        transition={{ duration: 0.5 }}
                        className="p-3 bg-gradient-to-r from-red-500 to-yellow-500 rounded-2xl text-white shadow-lg"
                      >
                        <Icon className="w-6 h-6" />
                      </motion.div>
                      <span className="text-xl">{faq.question}</span>
                    </div>
                    <motion.span 
                      animate={{ rotate: openIndex === index ? 180 : 0 }} 
                      transition={{ duration: 0.3 }}
                      className="text-red-500 ml-4 flex-shrink-0"
                    >
                      <ChevronDown className="w-6 h-6" />
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <p className="p-8 text-gray-700 leading-relaxed bg-gradient-to-r from-red-50 to-yellow-50 border-t border-red-200/50">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;