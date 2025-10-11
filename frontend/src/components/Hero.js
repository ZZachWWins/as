// src/components/Hero.js (Professional Polish: Apple-Inspired, Persistent Particles, Full Visibility with CTA Buttons)
import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFire } from 'react-icons/fa';

const Hero = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);

  const createParticle = (x, y) => ({
    x,
    y,
    vx: (Math.random() - 0.5) * 2, // Subtle speed
    vy: (Math.random() - 0.5) * 2,
    size: Math.random() * 2 + 1, // Smaller particles
    color: `hsl(${Math.random() * 60 + 20}, 70%, 80%)`, // Softer colors
    life: 1,
    decay: Math.random() * 0.005 + 0.002, // Slower decay for persistence
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const throttle = (func, limit) => {
      let inThrottle;
      return (...args) => {
        if (!inThrottle) {
          func(...args);
          inThrottle = true;
          setTimeout(() => (inThrottle = false), limit);
        }
      };
    };

    // Continuous particle spawning
    const spawnParticles = () => {
      for (let i = 0; i < 1; i++) { // Constant low-rate spawning
        particles.current.push(createParticle(
          Math.random() * canvas.width,
          Math.random() * canvas.height
        ));
      }
    };
    const spawnInterval = setInterval(spawnParticles, 200); // Spawn every 200ms

    const handleScroll = throttle(() => {
      for (let i = 0; i < 2; i++) { // Reduced but active on scroll
        particles.current.push(createParticle(
          Math.random() * canvas.width,
          Math.random() * canvas.height * 0.3
        ));
      }
    }, 300);
    window.addEventListener('scroll', handleScroll, { passive: true });

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.current = particles.current.filter((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.life * 0.5; // Subtle opacity
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;
        p.life -= p.decay;
        p.size *= 0.98;

        return p.life > 0 && p.size > 0.5 && p.x > 0 && p.x < canvas.width && p.y < canvas.height;
      });
      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    // Increased initial particles for always-on effect
    for (let i = 0; i < 30; i++) { // Increased from 10
      particles.current.push(createParticle(canvas.width / 2, canvas.height / 2));
    }

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', handleScroll);
      clearInterval(spawnInterval); // Clean up interval
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="hero relative overflow-hidden min-h-screen">
      <canvas ref={canvasRef} id="particles-canvas" className="absolute inset-0" />
      <div className="parallax-bg absolute inset-0 z-0" 
           style={{ 
             backgroundImage: 'ur[](https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)', 
             backgroundSize: 'cover', 
             backgroundPosition: 'center', 
             opacity: 0.5, // Reduced opacity for text visibility
             transform: `translateY(${window.scrollY * 0.2}px)` // Slower parallax
           }} 
      />
      <div className="relative z-10 flex items-center justify-center h-screen pt-48 pb-16 px-4"> {/* Increased pt-48 to 12rem */}
        <div className="text-center max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-100 leading-tight mb-6"
            style={{ 
              textShadow: '0 2px 6px rgba(0,0,0,0.5)' // Stronger shadow for readability
            }}
          >
            Unlock Instant Energy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Science-backed boosts for breath, focus, and flow. Join 5,000+ early adopters for exclusive pre-launch access.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                to="/shop" 
                className="cta-btn text-lg pulse inline-flex items-center gap-2"
              >
                <FaFire className="text-xs animate-bounce" /> Join Waitlist
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                to="#benefits" 
                className="cta-btn text-lg inline-flex items-center gap-2"
              >
                Learn More <FaFire className="text-xs ml-1 opacity-70" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;