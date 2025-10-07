// src/components/Hero.js (Energized Teaser)
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => (
  <section className="hero relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 text-center relative z-10 py-8">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold mb-4"
      >
        ALL SYSTEMS GO
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-xl mb-8 max-w-2xl mx-auto"
      >
        Instant boosts to breathing, blood flow, brain. Activate your edge—sign up for launch.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Link to="/shop" className="btn text-lg">Get Activated</Link>
      </motion.div>
    </div>
  </section>
);

export default Hero;