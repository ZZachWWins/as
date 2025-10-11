// src/components/InterestForm.js (Sleek Modern: Floating Labels, Glow Focus, Gradient Submit)
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'; // Modern form handling

const InterestForm = () => {
  const [status, setStatus] = useState('idle');
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, watch, reset } = useForm();

  const painPoint = watch('painPoint');

  const onSubmit = async (data) => {
    if (!data.email || !data.email.includes('@')) {
      setStatus('error');
      return;
    }
    setStatus('submitting');
    const formData = new FormData();
    Object.keys(data).forEach(key => formData.append(key, data[key]));
    formData.append('form-name', 'activate-interest');
    try {
      await fetch('/', { method: 'POST', body: new URLSearchParams(formData) });
      setStatus('success');
      reset();
      setTimeout(() => navigate('/'), 4000);
    } catch {
      setStatus('error');
    }
  };

  return (
    <motion.div
      className="interest-form"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <AnimatePresence mode="wait">
        {status === 'idle' && (
          <motion.form
            key="form"
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-2">Fuel Your Breakthrough</h3>
            <p className="text-center text-gray-600 text-sm mb-6">Quick quiz: What's draining your energy? Get tailored tips + 20% off launch. Zero spam.</p>
            <input
              type="text"
              placeholder="Your Name (Optional)"
              {...register('name')}
              className="form-input"
            />
            <select
              {...register('painPoint', { required: 'Select an option' })}
              className="form-input"
            >
              <option value="">What's your biggest energy killer?</option>
              <option value="fatigue">Midday crashes</option>
              <option value="focus">Brain fog</option>
              <option value="recovery">Slow recovery</option>
              <option value="stress">Stress overload</option>
            </select>
            {errors.painPoint && <p className="text-red-500 text-xs text-center">Please select an option.</p>}
            <input
              type="email"
              placeholder="your@email.com"
              {...register('email', { required: 'Email is required' })}
              className="form-input"
            />
            {errors.email && <p className="text-red-500 text-xs text-center">Please enter a valid email.</p>}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full cta-btn text-lg" // Changed from btn to cta-btn
            >
              🚀 Lock in 20% + Tailored Access
            </motion.button>
            <p className="text-xs text-gray-500 text-center">Join 5,000+ transforming their edge</p>
          </motion.form>
        )}
        {status === 'submitting' && (
          <motion.div key="submitting" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center space-y-4">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500 mx-auto"></div>
            <p className="text-lg font-semibold text-gray-700">Sparking your activation...</p>
          </motion.div>
        )}
        {status === 'success' && (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, rotate: [0, 5, -5, 0] }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-4 p-8 bg-gradient-to-r from-green-50 to-yellow-50 rounded-2xl border border-green-200"
          >
            <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 0.6 }} className="text-5xl mx-auto">
              🎉
            </motion.div>
            <h3 className="text-2xl font-bold text-green-600">Activated! Your 20% Code Incoming</h3>
            <p className="text-gray-700">Tailored tips for {painPoint || 'your edge'} + launch alerts. Fuel up! 🔥</p>
          </motion.div>
        )}
        {status === 'error' && (
          <motion.div key="error" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-center space-y-4">
            <p className="text-red-500 font-semibold">Whoops—double-check that email and ignite again!</p>
            <button onClick={() => setStatus('idle')} className="cta-btn">Retry Launch</button> {/* Changed from btn to cta-btn */}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default InterestForm;