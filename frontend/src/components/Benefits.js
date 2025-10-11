// src/components/Benefits.js (New: Bulletproof Value Prop Section + Stagger on Grid)
import React from 'react';
import { motion } from 'framer-motion';

const Benefits = () => (
  <>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      className="text-4xl font-bold text-center mb-12 text-gray-800"
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
        <h3 className="text-xl font-bold mb-2 text-gray-800">Deeper Breaths</h3>
        <p className="text-gray-600">Oxygenate every cell for sustained vitality—no crashes, just pure flow.</p>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.2 }}
        className="benefit-item"
      >
        <span className="benefit-icon">💓</span>
        <h3 className="text-xl font-bold mb-2 text-gray-800">Peak Circulation</h3>
        <p className="text-gray-600">Ramp up blood flow to muscles and mind for unstoppable performance.</p>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.3 }}
        className="benefit-item"
      >
        <span className="benefit-icon">🧠</span>
        <h3 className="text-xl font-bold mb-2 text-gray-800">Laser Focus</h3>
        <p className="text-gray-600">Sharpen cognition and crush distractions with brain-boosting precision.</p>
      </motion.div>
    </div>
  </>
);

export default Benefits;