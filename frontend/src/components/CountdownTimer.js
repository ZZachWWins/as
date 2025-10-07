// src/components/CountdownTimer.js (Responsive Fix: Mobile Stack, Desktop Center – Red/Gold)
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CountdownTimer = () => {
  const targetDate = new Date('2025-11-01T00:00:00').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
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
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="urgency text-center py-6 px-8 rounded-3xl mx-auto max-w-lg mb-8 shadow-2xl"
    >
      <p className="text-xl font-bold mb-3">Launch Ignites In:</p>
      <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-3 mb-3">
        <div className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-xl font-bold text-lg w-full sm:w-auto"> {timeLeft.days}d </div>
        <div className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-xl font-bold text-lg w-full sm:w-auto"> {timeLeft.hours}h </div>
        <div className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-xl font-bold text-lg w-full sm:w-auto"> {timeLeft.minutes}m </div>
        <div className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-xl font-bold text-lg w-full sm:w-auto"> {timeLeft.seconds}s </div>
      </div>
      <p className="text-sm opacity-90">Only 500 Spots Left – Activate Now! ⚡</p>
    </motion.div>
  );
};

export default CountdownTimer;