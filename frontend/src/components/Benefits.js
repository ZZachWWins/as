// src/components/Benefits.js (Modern Glow: Glass Cards, Float Icons, Gradient Text)
import React from 'react';
import { motion } from 'framer-motion';

const Benefits = () => (
  <>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      className="text-5xl font-bold text-center mb-12 text-gray-800 bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent"
    >
      Activate Transforms Your Day
    </motion.h2>
    <div className="benefits-grid stagger-children" whileInView={{ className: 'stagger-children animate' }} viewport={{ once: true }}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.1 }}
        className="benefit-item"
      >
        <span className="benefit-icon">🌬️</span>
        <h3 className="text-2xl font-bold mb-2 text-gray-800">Deeper Breaths</h3>
        <p className="text-gray-600 leading-relaxed">Oxygenate every cell for sustained vitality—no crashes, just pure flow.</p>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.2 }}
        className="benefit-item"
      >
        <span className="benefit-icon">💓</span>
        <h3 className="text-2xl font-bold mb-2 text-gray-800">Peak Circulation</h3>
        <p className="text-gray-600 leading-relaxed">Ramp up blood flow to muscles and mind for unstoppable performance.</p>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.3 }}
        className="benefit-item"
      >
        <span className="benefit-icon">🧠</span>
        <h3 className="text-2xl font-bold mb-2 text-gray-800">Laser Focus</h3>
        <p className="text-gray-600 leading-relaxed">Sharpen cognition and crush distractions with brain-boosting precision.</p>
      </motion.div>
    </div>
  </>
);

export default Benefits;