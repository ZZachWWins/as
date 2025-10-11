// src/components/Footer.js (Modern Sleek: Gradient Circles, Full Footer Fluid, Frosted Glass, Form Glow)
import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { FiMail, FiHome, FiShoppingBag, FiShield, FiFileText, FiArrowRight } from 'react-icons/fi';

const Footer = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const canvasRef = useRef(null);

  const onSubmit = (data) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(data),
    }).then(() => reset());
  };

  const columnVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      const dpr = window.devicePixelRatio;
      ctx.scale(dpr, dpr);
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const blobs = [];
    for (let i = 0; i < 6; i++) { // Increased for more wow factor
      blobs.push({
        x: Math.random() * canvas.width / window.devicePixelRatio,
        y: Math.random() * canvas.height / window.devicePixelRatio,
        vx: (Math.random() - 0.5) * 1.2, // Slightly faster for dynamism
        vy: (Math.random() - 0.5) * 0.8,
        radius: Math.random() * 60 + 30, // Larger for impact
      });
    }

    const animate = () => {
      // Clear with subtle tint for better visibility without full transparency loss
      ctx.clearRect(0, 0, canvas.width / window.devicePixelRatio, canvas.height / window.devicePixelRatio);
      ctx.fillStyle = 'rgba(0, 0, 0, 0.02)'; // Very subtle dark tint to help blending
      ctx.fillRect(0, 0, canvas.width / window.devicePixelRatio, canvas.height / window.devicePixelRatio);

      blobs.forEach(blob => {
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(
          blob.x, blob.y, 0,
          blob.x, blob.y, blob.radius
        );
        gradient.addColorStop(0, 'rgba(255, 0, 0, 0.6)'); // Increased opacity for visibility
        gradient.addColorStop(0.5, 'rgba(255, 170, 0, 0.6)');
        gradient.addColorStop(1, 'rgba(0, 170, 255, 0.6)');
        ctx.fillStyle = gradient;
        ctx.globalAlpha = 0.8; // Boosted for wow factor and visibility
        ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2);
        ctx.fill();

        // Enhanced connections for fluidity
        blobs.forEach(other => {
          if (other !== blob) {
            const dx = blob.x - other.x;
            const dy = blob.y - other.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 120) { // Wider connections
              ctx.beginPath();
              ctx.moveTo(blob.x, blob.y);
              ctx.lineTo(other.x, other.y);
              ctx.strokeStyle = `rgba(255, 255, 255, ${0.4 - distance / 400})`; // Brighter lines
              ctx.lineWidth = 1.5; // Thicker for effect
              ctx.globalAlpha = 0.5;
              ctx.stroke();
            }
          }
        });
        ctx.globalAlpha = 1;

        // Update position with easing for smoother movement
        blob.vx *= 0.99; // Slight damping for organic feel
        blob.vy *= 0.99;
        blob.x += blob.vx;
        blob.y += blob.vy;
        if (blob.x < blob.radius || blob.x > (canvas.width / window.devicePixelRatio) - blob.radius) blob.vx *= -1;
        if (blob.y < blob.radius || blob.y > (canvas.height / window.devicePixelRatio) - blob.radius) blob.vy *= -1;
      });

      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <motion.footer 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative bg-transparent backdrop-blur-2xl text-black py-16 border-t border-red-100 shadow-lg overflow-hidden"
      variants={columnVariants}
      animate="visible"
    >
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full z-0 pointer-events-none" 
        style={{ background: 'transparent', opacity: 1 }} // Removed blend mode, full opacity for visibility
      />
      <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-yellow-500 opacity-50 z-10"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12 justify-items-center">
          <motion.div variants={columnVariants} className="space-y-6 text-center lg:text-left">
            <motion.h3 variants={itemVariants} className="text-2xl font-bold tracking-tight flex items-center justify-center lg:justify-start gap-2 mb-4">
              <FiHome className="text-red-500" /> Navigate
            </motion.h3>
            <nav className="space-y-3">
              <motion.div variants={itemVariants}>
                <Link to="/" className="block btn-outline text-black hover:text-red-500 transition-all duration-300 flex items-center justify-center lg:justify-start gap-2 group rounded-full bg-white/20 backdrop-blur-md p-3 border-2 border-transparent hover:border-[linear-gradient(90deg,#ff0000,#ffaa00,#00aaff)]" style={{ textDecoration: 'none' }}>
                  <FiHome className="text-xl opacity-70 group-hover:opacity-100" /> Home
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link to="/shop" className="block btn-outline text-black hover:text-red-500 transition-all duration-300 flex items-center justify-center lg:justify-start gap-2 group rounded-full bg-white/20 backdrop-blur-md p-3 border-2 border-transparent hover:border-[linear-gradient(90deg,#ff0000,#ffaa00,#00aaff)]" style={{ textDecoration: 'none' }}>
                  <FiShoppingBag className="text-xl opacity-70 group-hover:opacity-100" /> Shop
                </Link>
              </motion.div>
            </nav>
          </motion.div>

          <motion.div variants={columnVariants} className="space-y-6 text-center lg:text-left">
            <motion.h3 variants={itemVariants} className="text-2xl font-bold tracking-tight flex items-center justify-center lg:justify-start gap-2 mb-4">
              <FiShield className="text-yellow-500" /> Activate
            </motion.h3>
            <motion.p variants={itemVariants} className="text-black leading-relaxed max-w-xs">
              Fuel your potential with science-backed energy boosts that last.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-sm justify-center lg:justify-start">
              <a href="/privacy-policy" className="btn-outline text-black hover:text-red-500 transition-all duration-300 flex items-center justify-center lg:justify-start gap-2 group rounded-full bg-white/20 backdrop-blur-md p-3 border-2 border-transparent hover:border-[linear-gradient(90deg,#ff0000,#ffaa00,#00aaff)]" style={{ textDecoration: 'none' }}>
                <FiShield className="text-xl" /> Privacy
              </a>
              <a href="/terms-of-service" className="block btn-outline text-black hover:text-red-500 transition-all duration-300 flex items-center justify-center lg:justify-start gap-2 group rounded-full bg-white/20 backdrop-blur-md p-3 border-2 border-transparent hover:border-[linear-gradient(90deg,#ff0000,#ffaa00,#00aaff)]" style={{ textDecoration: 'none' }}>
                <FiFileText className="text-xl" /> Terms
              </a>
            </motion.div>
          </motion.div>

          <motion.div variants={columnVariants} className="space-y-6 text-center">
            <motion.h3 variants={itemVariants} className="text-2xl font-bold tracking-tight flex items-center justify-center gap-2 mb-4">
              <FiMail className="text-red-500" /> Stay Activated
            </motion.h3>
            <motion.p variants={itemVariants} className="text-black leading-relaxed max-w-xs mb-4">
              Launch alerts and exclusives straight to your inbox.
            </motion.p>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="your@email.com" 
                {...register('email', { required: 'Email is required' })}
                className={`flex-1 px-4 py-3 rounded-full border border-black text-black placeholder-black focus:border-red-500 focus:outline-none transition-all duration-300 text-sm ${
                  errors.email ? 'border-red-500 shake' : ''
                }`} 
              />
              <motion.button 
                type="submit" 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cta-btn px-6 py-3 font-semibold transition-all duration-300 shadow-lg flex items-center justify-center gap-1 text-white text-sm"
              >
                Join <FiArrowRight className="text-xs" />
              </motion.button>
            </form>
            {errors.email && <p className="text-red-500 text-xs mt-1 text-center">Please enter a valid email.</p>}
          </motion.div>
        </div>

        <div className="border-t border-black pt-8 relative z-10">
          <motion.div 
            className="bg-black rounded-2xl p-8 text-center relative overflow-hidden mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            style={{
              background: 'linear-gradient(to bottom, black 0%, black 80%, #16a34a 100%)' // Green gradient at bottom
            }}
          >
            <motion.h3 
              className="text-3xl font-bold text-yellow-400 mb-6" // Yellow "Connect"
              variants={itemVariants}
            >
              Connect
            </motion.h3>
            <div className="flex justify-center gap-8">
              <motion.div 
                className="rounded-full bg-gradient-to-br from-yellow-500 to-amber-600 p-4 border-2 border-[linear-gradient(90deg,#ff0000,#ffaa00,#00aaff)] transition-all duration-300 shadow-lg" // Site gradient border
                whileHover={{ scale: 1.1, rotate: 360 }}
                whileTap={{ scale: 0.95 }}
              >
                <a 
                  href="https://twitter.com/activate_supplement" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white flex items-center justify-center text-2xl" 
                  style={{ textDecoration: 'none' }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
              </motion.div>
              <motion.div 
                className="rounded-full bg-gradient-to-br from-yellow-500 to-amber-600 p-4 border-2 border-[linear-gradient(90deg,#ff0000,#ffaa00,#00aaff)] transition-all duration-300 shadow-lg" // Site gradient border
                whileHover={{ scale: 1.1, rotate: 360 }}
                whileTap={{ scale: 0.95 }}
              >
                <a 
                  href="https://linkedin.com/company/activate-supplement" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white flex items-center justify-center text-2xl" 
                  style={{ textDecoration: 'none' }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
              </motion.div>
              <motion.div 
                className="rounded-full bg-gradient-to-br from-yellow-500 to-amber-600 p-4 border-2 border-[linear-gradient(90deg,#ff0000,#ffaa00,#00aaff)] transition-all duration-300 shadow-lg" // Site gradient border
                whileHover={{ scale: 1.1, rotate: 360 }}
                whileTap={{ scale: 0.95 }}
              >
                <a 
                  href="https://github.com/activate-supplement" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white flex items-center justify-center text-2xl" 
                  style={{ textDecoration: 'none' }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                </a>
              </motion.div>
              <motion.div 
                className="rounded-full bg-gradient-to-br from-yellow-500 to-amber-600 p-4 border-2 border-[linear-gradient(90deg,#ff0000,#ffaa00,#00aaff)] transition-all duration-300 shadow-lg" // Site gradient border
                whileHover={{ scale: 1.1, rotate: 360 }}
                whileTap={{ scale: 0.95 }}
              >
                <a 
                  href="mailto:hello@activatesupplement.com" 
                  className="text-white flex items-center justify-center text-2xl" 
                  style={{ textDecoration: 'none' }}
                >
                  <FiMail />
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center text-black text-sm tracking-wide relative z-10"
        >
          &copy; 2025 Activate Supplement. Fuel Your Potential. All rights reserved.
        </motion.p>
      </div>
    </motion.footer>
  );
};

export default Footer;