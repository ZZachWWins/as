// src/components/InterestForm.jsx (New lead capture form - Netlify-ready)
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const InterestForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    quantity: 1,
    notes: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required';
    if (!formData.quantity || formData.quantity < 1) newErrors.quantity = 'Quantity must be at least 1';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setSubmitting(true);

    const formDataToSend = new FormData();
    Object.keys(formData).forEach(key => {
      formDataToSend.append(key, formData[key]);
    });
    formDataToSend.append('form-name', 'activate-interest'); // Matches hidden input

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formDataToSend).toString(),
      });

      if (response.ok) {
        setSubmitted(true);
        // Optional: Redirect after 3s
        setTimeout(() => navigate('/'), 3000);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      alert('Oops—something went wrong. Try again or email us!');
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="interest-success"
      >
        <h3 className="text-2xl font-bold mb-4">Thanks for Your Interest!</h3>
        <p>We'll reach out soon with details on Activate. Stay tuned!</p>
      </motion.div>
    );
  }

  return (
    <motion.form
      name="activate-interest"
      data-netlify="true"
      netlify-honeypot="bot-field" // Spam protection
      onSubmit={handleSubmit}
      className="interest-form"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <input type="hidden" name="form-name" value="activate-interest" />
      <input type="hidden" name="product" value="Activate Supplement" />
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Full Name *</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full form-input ${errors.name ? 'border-red-500' : ''}`}
          placeholder="John Doe"
          required
        />
        {errors.name && <p className="error-text">{errors.name}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Email *</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full form-input ${errors.email ? 'border-red-500' : ''}`}
          placeholder="john@example.com"
          required
        />
        {errors.email && <p className="error-text">{errors.email}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Phone (Optional)</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full form-input"
          placeholder="(123) 456-7890"
        />
        <p className="interest-note">We'll use this to confirm your order.</p>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Quantity *</label>
        <select
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          className={`w-full form-input ${errors.quantity ? 'border-red-500' : ''}`}
          required
        >
          <option value={1}>1 Bottle</option>
          <option value={3}>3 Bottles (Save 10%)</option>
          <option value={6}>6 Bottles (Save 20%)</option>
        </select>
        {errors.quantity && <p className="error-text">{errors.quantity}</p>}
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Notes (Optional)</label>
        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          className="w-full form-input form-textarea"
          placeholder="Any questions about Activate?"
          rows={3}
        />
        <p className="interest-note">E.g., "Interested in bulk pricing."</p>
      </div>
      <div className="hidden">
        <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
      </div>
      <button type="submit" disabled={submitting} className="w-full btn">
        {submitting ? 'Sending...' : 'Express Interest in Activate'}
      </button>
      <p className="interest-note text-center mt-2">Secure & spam-free—your info stays with us.</p>
    </motion.form>
  );
};

export default InterestForm;