// src/components/InterestForm.js (Ultimate One-Field Magic: Email-Only, Instant Delight)
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const InterestForm = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setStatus('error');
      return;
    }
    setStatus('submitting');
    const data = new FormData();
    data.append('email', email);
    data.append('form-name', 'activate-interest');
    try {
      await fetch('/', { method: 'POST', body: new URLSearchParams(data) });
      setStatus('success');
      setTimeout(() => navigate('/'), 3000); // Redirect after celebration
    } catch {
      setStatus('error');
    }
  };

  return (
    <motion.div
      className="interest-form" // Style: max-w-md mx-auto bg-white p-8 rounded-2xl shadow-xl
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <AnimatePresence mode="wait">
        {status === 'idle' && (
          <motion.form
            key="form"
            name="activate-interest"
            data-netlify="true"
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <input type="hidden" name="form-name" value="activate-interest" />
            <h3 className="text-2xl font-bold text-center text-gray-800">Unlock Activate Updates</h3>
            <p className="text-center text-gray-600">Just your email— we'll blast you launch alerts, pricing, and exclusives. No spam, ever.</p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none transition-all duration-300 text-center text-lg" // Magic focus glow
              required
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full btn" // Gradient red/gold, shadow, hover lift
            >
              Activate Me In
            </motion.button>
          </motion.form>
        )}
        {status === 'submitting' && (
          <motion.div
            key="submitting"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center space-y-4"
          >
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500 mx-auto"></div>
            <p className="text-lg font-semibold">Igniting your activation...</p>
          </motion.div>
        )}
        {status === 'success' && (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, rotate: [0, 5, -5, 0] }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-4 p-8 bg-gradient-to-r from-red-50 to-yellow-50 rounded-2xl"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 0.5 }}
              className="text-4xl mx-auto" // Rocket emoji or custom icon
            >
              🚀
            </motion.div>
            <h3 className="text-2xl font-bold text-red-600">ALL SYSTEMS GO!</h3>
            <p className="text-gray-700">You're activated—expect epic updates in your inbox soon. Fueling your potential! 🔥</p>
          </motion.div>
        )}
        {status === 'error' && (
          <motion.div
            key="error"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-4"
          >
            <p className="text-red-500 font-semibold">Oops—check that email and try again!</p>
            <button onClick={() => setStatus('idle')} className="btn">Retry</button>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="hidden"><input name="bot-field" /></div>
    </motion.div>
  );
};

export default InterestForm;