// src/components/Hero.js (Magnetic Headline—Benefit-First, Urgency-Infused)
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
        className="text-4xl md:text-6xl font-bold mb-4 leading-tight"
      >
        Unlock <span className="text-yellow-300">Instant</span> Energy
        <br />
        That <span className="text-yellow-300">Lasts</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed"
      >
        Breathe deeper. Flow stronger. Think sharper. Activate delivers science-backed boosts to your core systems—pre-launch exclusive for early adopters like you.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
      >
        <Link to="/shop" className="btn text-lg pulse">Join the Waitlist Now</Link>
        <Link to="#benefits" className="text-white/80 hover:text-white transition">Discover How It Works</Link>
      </motion.div>
    </div>
  </section>
);

export default Hero;