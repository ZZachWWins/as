// src/pages/Contact.jsx (Classes updated)
import React from 'react';
import { Helmet } from 'react-helmet-async';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div className="py-16">
      <Helmet>
        <title>Contact - Activate Supplement</title>
      </Helmet>
      <div className="max-w-md mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Get in Touch</h1>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;