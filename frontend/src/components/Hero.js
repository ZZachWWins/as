// src/components/Hero.js (Parallax Layer + Canvas Particle Burst)
import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);

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

    const createParticle = (x, y) => ({
      x,
      y,
      vx: (Math.random() - 0.5) * 4,
      vy: (Math.random() - 0.5) * 4,
      size: Math.random() * 3 + 1,
      color: `hsl(${Math.random() * 60 + 20}, 100%, 50%)`, // Fiery oranges/reds
      life: 1,
      decay: Math.random() * 0.02 + 0.01,
    });

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.current.forEach((p, i) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.life;
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;
        p.life -= p.decay;
        p.size *= 0.98;

        if (p.life <= 0 || p.size < 0.1) {
          particles.current.splice(i, 1);
        }
      });
      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    // Initial burst
    setTimeout(() => {
      for (let i = 0; i < 50; i++) {
        particles.current.push(createParticle(canvas.width / 2, canvas.height / 2));
      }
    }, 1000);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const burstParticles = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2 + window.scrollX;
    const y = rect.top + rect.height / 2 + window.scrollY;
    for (let i = 0; i < 30; i++) {
      setTimeout(() => {
        particles.current.push(createParticle(x, y));
      }, i * 10);
    }
  };

  return (
    <section className="hero">
      <canvas ref={canvasRef} id="particles-canvas" />
      <div className="parallax-bg absolute inset-0" style={{ backgroundImage: 'ur[](https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)', transform: `translateY(${window.scrollY * 0.5}px)` }}></div>
      <div className="max-w-7xl mx-auto px-4 text-center relative z-10 py-8">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-4 leading-tight text-white"
          style={{ textShadow: '0 0 20px rgba(220,53,69,0.5)' }}
        >
          Unlock <span className="text-yellow-300">Instant</span> Energy
          <br />
          That <span className="text-yellow-300">Lasts</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed text-white/90"
        >
          Breathe deeper. Flow stronger. Think sharper. Activate delivers science-backed boosts to your core systems—pre-launch exclusive for early adopters like you.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link to="/shop" className="btn text-lg pulse" onClick={burstParticles}>Join the Waitlist Now</Link>
          <Link to="#benefits" className="btn-outline text-lg" onClick={burstParticles}>Discover How It Works</Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;