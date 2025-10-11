// src/components/Hero.js (Epic Polish: Pulsing Gradient Glow, Icon-Infused Particles, Mobile Magic)
import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFire } from 'react-icons/fa'; // From react-icons/fa

const Hero = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);

  const createParticle = (x, y, isIcon = false) => ({
    x,
    y,
    vx: (Math.random() - 0.5) * 6, // Faster for dynamism
    vy: (Math.random() - 0.5) * 6,
    size: Math.random() * 4 + 2,
    color: `hsl(${Math.random() * 60 + 20}, 100%, ${50 + Math.random() * 50}%)`, // Brighter variance
    life: 1,
    decay: Math.random() * 0.015 + 0.005,
    isIcon, // For special icon bursts
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

    // Scroll trail: Add subtle particles on scroll
    let lastScrollY = 0;
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (Math.abs(scrollY - lastScrollY) > 10) {
        for (let i = 0; i < 5; i++) {
          particles.current.push(createParticle(
            Math.random() * canvas.width,
            Math.random() * canvas.height * 0.3 // Top-focused for hero
          ));
        }
        lastScrollY = scrollY;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.current.forEach((p, i) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.life;
        ctx.shadowBlur = 10; // Glow effect
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0; // Reset

        p.x += p.vx;
        p.y += p.vy;
        p.life -= p.decay;
        p.size *= 0.99; // Slower fade for trails

        if (p.life <= 0 || p.size < 0.5 || p.x < 0 || p.x > canvas.width || p.y > canvas.height) {
          particles.current.splice(i, 1);
        }
      });
      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    // Initial burst with density
    setTimeout(() => {
      for (let i = 0; i < 100; i++) { // Denser for impact
        particles.current.push(createParticle(canvas.width / 2, canvas.height / 2));
      }
    }, 500);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const burstParticles = (e, isIcon = false) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2 + window.scrollX;
    const y = rect.top + rect.height / 2 + window.scrollY;
    for (let i = 0; i < 50; i++) { // More particles for burst
      setTimeout(() => {
        particles.current.push(createParticle(x, y, isIcon));
      }, i * 5);
    }
  };

  return (
    <section className="hero relative overflow-hidden min-h-screen flex items-center justify-center">
      <canvas ref={canvasRef} id="particles-canvas" className="absolute inset-0" />
      <div className="parallax-bg absolute inset-0 z-0" 
           style={{ 
             backgroundImage: 'ur[](https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)', 
             transform: `translateY(${window.scrollY * 0.3}px)` // Smoother parallax
           }} 
      />
      <div className="max-w-7xl mx-auto px-4 text-center relative z-10 py-8 w-full">
        <motion.h1
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ 
            opacity: 1, 
            y: 0, 
            scale: 1,
            color: [
              '#dc3545',
              '#fd7e14',
              '#ffc107',
              '#dc3545'
            ] // Gradient cycle for living text
          }}
          transition={{ 
            duration: 1.2, 
            ease: [0.22, 1, 0.36, 1],
            color: { duration: 3, repeat: Infinity, ease: 'easeInOut' }
          }}
          className="text-4xl md:text-7xl font-bold mb-4 leading-tight bg-clip-text text-transparent"
          style={{ 
            background: 'linear-gradient(135deg, #dc3545 0%, #fd7e14 50%, #ffc107 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            textShadow: '0 0 30px rgba(220,53,69,0.6), 0 0 60px rgba(253,126,20,0.4)' // Epic glow
          }}
        >
          Unlock <span className="animate-pulse">Instant</span> Energy
          <br />
          That <span className="animate-pulse">Lasts</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-white/95 font-light"
        >
          Breathe deeper. Flow stronger. Think sharper. Activate delivers science-backed boosts to your core systems—pre-launch exclusive for early adopters like you.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link 
              to="/shop" 
              className="btn text-lg pulse inline-flex items-center gap-2" 
              onClick={(e) => burstParticles(e, true)}
            >
              <FaFire className="text-xs animate-bounce" /> Join the Waitlist Now
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link 
              to="#benefits" 
              className="btn-outline text-lg inline-flex items-center gap-2" 
              onClick={(e) => burstParticles(e)}
            >
              Discover How It Works <FaFire className="text-xs ml-1 opacity-70" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;