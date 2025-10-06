// src/components/ContactForm.jsx (Classes updated)
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required';
    if (!formData.message) newErrors.message = 'Message is required';
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
    // TODO: Integrate EmailJS
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center p-8 bg-green-50 rounded-xl"
      >
        <h3 className="text-2xl font-bold text-success mb-4">Message Sent!</h3>
        <p>We'll get back to you soon.</p>
      </motion.div>
    );
  }

  return (
    <motion.form onSubmit={handleSubmit} className="contact-form" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`form-input ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.name && <p className="error-text">{errors.name}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`form-input ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.email && <p className="error-text">{errors.email}</p>}
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className={`form-input form-textarea ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.message && <p className="error-text">{errors.message}</p>}
      </div>
      <button type="submit" className="w-full btn">Send Message</button>
    </motion.form>
  );
};

export default ContactForm;