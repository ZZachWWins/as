// src/components/Testimonials.js (New: Credibility Booster)
import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Activate flipped my energy game—breathing feels effortless, focus is unreal. Pre-launch wait was worth it!",
    author: "Alex R., Athlete"
  },
  {
    quote: "From sluggish mornings to all-day fire. This is the edge I've been chasing.",
    author: "Sarah L., Entrepreneur"
  },
  {
    quote: "Blood flow boost changed my workouts. Can't wait for full launch drops.",
    author: "Mike T., Trainer"
  }
];

const Testimonials = () => (
  <section className="testimonials">
    <div className="max-w-7xl mx-auto px-4">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        className="text-4xl font-bold text-center mb-12 text-gray-800"
      >
        What Early Testers Are Saying
      </motion.h2>
      <div className="testimonial-grid">
        {testimonials.map((testimonial, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ delay: index * 0.1 }}
            className="testimonial"
          >
            <p className="text-gray-700 mb-4">"{testimonial.quote}"</p>
            <p className="testimonial-author">— {testimonial.author}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;