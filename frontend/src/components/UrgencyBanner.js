// src/components/UrgencyBanner.js (Bold Neon: Gradient Pulse, Shadow Glow - Fixed Import)
import React from 'react';
import { motion } from 'framer-motion'; // Fixed: Added motion import

const UrgencyBanner = () => (
  <motion.div 
    className="urgency text-white font-bold text-center py-4 px-6 shadow-lg"
    initial={{ y: -50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
    whileHover={{ scale: 1.02 }} // Subtle lift on hover
  >
    ⚡ Limited Pre-Launch Spots: Join Now Before They're Gone! Only 1,000 Left Today.
  </motion.div>
);

export default UrgencyBanner;