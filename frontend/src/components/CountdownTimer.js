// src/components/CountdownTimer.js (Pulse + April 2026 Launch Tune)
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CountdownTimer = () => {
  const targetDate = new Date('2026-04-01T00:00:00').getTime(); // April Launch

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now(); // Live as of Oct 10, 2025
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, scale: [1, 1.02, 1] }} // Breathing pulse
      transition={{ duration: 0.6, ease: 'easeOut', repeat: Infinity, repeatType: 'reverse' }}
      viewport={{ once: true }}
      className="urgency text-center py-6 px-8 rounded-3xl mx-auto max-w-lg mb-8 shadow-2xl bg-gradient-to-r from-red-500 to-yellow-500 text-white"
    >
      <p className="text-xl font-bold mb-3">Launch Ignites In:</p>
      <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-3 mb-3">
        <motion.div className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-xl font-bold text-lg w-full sm:w-auto animate-pulse">
          {timeLeft.days}d
        </motion.div>
        <motion.div className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-xl font-bold text-lg w-full sm:w-auto animate-pulse">
          {timeLeft.hours}h
        </motion.div>
        <motion.div className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-xl font-bold text-lg w-full sm:w-auto animate-pulse">
          {timeLeft.minutes}m
        </motion.div>
        <motion.div className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-xl font-bold text-lg w-full sm:w-auto animate-pulse">
          {timeLeft.seconds}s
        </motion.div>
      </div>
      <p className="text-sm opacity-90">Only 500 Spots Left – Activate Now! ⚡</p>
    </motion.div>
  );
};

export default CountdownTimer;