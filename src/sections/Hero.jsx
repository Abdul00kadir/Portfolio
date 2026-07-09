import { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FaArrowRight, FaCommentDots } from 'react-icons/fa';
import { SOCIAL_LINKS } from '../constants';
import Magnetic from '../components/Magnetic';
import profileImg from '../assets/profile.png';

export default function Hero() {
  const containerRef = useRef(null);

  // Parallax offsets for the mouse tracker
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring settings for smooth mouse movements
  const springConfig = { stiffness: 80, damping: 15 };
  const parallaxX = useSpring(mouseX, springConfig);
  const parallaxY = useSpring(mouseY, springConfig);

  // Transform layers (slower shifts for background glow, medium for image, faster for cards)
  const glowX = useTransform(parallaxX, [-300, 300], [-15, 15]);
  const glowY = useTransform(parallaxY, [-300, 300], [-15, 15]);
  const avatarX = useTransform(parallaxX, [-300, 300], [-25, 25]);
  const avatarY = useTransform(parallaxY, [-300, 300], [-25, 25]);
  const cardX = useTransform(parallaxX, [-300, 300], [-40, 40]);
  const cardY = useTransform(parallaxY, [-300, 300], [-40, 40]);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Find displacement from center
    const displaceX = e.clientX - centerX;
    const displaceY = e.clientY - centerY;

    mouseX.set(displaceX);
    mouseY.set(displaceY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      if (window.lenis) {
        window.lenis.scrollTo(el, { offset: -80 });
      } else {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  // Text letter variants for stagger animation
  const letterVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  const nameLetters = "Abdul Kadir".split("");

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex items-center justify-center py-5 lg:py-20 px-6 lg:px-12 overflow-hidden"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center z-10">
        
        {/* Left Info Column */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="flex items-center gap-2.5 px-4 py-2 rounded-full border border-primary/20 bg-primary/10 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-xs font-grotesk font-semibold text-primary tracking-wider uppercase">
              Available for Opportunities
            </span>
          </motion.div>

          {/* Title Header */}
          <h1 className="font-grotesk text-5xl md:text-7xl font-bold tracking-tight text-white mb-4 leading-none">
            <span className="text-slate-400 font-light block mb-2 text-3xl md:text-4xl">Hi, I'm</span>
            {nameLetters.map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h1>

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="font-grotesk text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-6"
          >
            AI Frontend Developer
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="font-sans text-slate-400 text-base md:text-lg max-w-xl mb-10 leading-relaxed"
          >
            I build modern, responsive, and user-friendly web applications using React.js, Node.js, Express.js, and MongoDB. I focus on creating polished digital experiences with premium SaaS aesthetics.
          </motion.p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-5 mb-12">
            <Magnetic range={40} strength={0.2}>
              <motion.button
                onClick={() => handleScrollTo('projects')}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2.5 px-8 py-4 rounded-xl bg-primary text-darkBg font-grotesk font-bold text-base transition-all duration-300 hover:shadow-neon-emerald group"
              >
                View My Work
                <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
              </motion.button>
            </Magnetic>

            <Magnetic range={40} strength={0.2}>
              <motion.button
                onClick={() => handleScrollTo('contact')}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2.5 px-8 py-4 rounded-xl border border-white/10 bg-white/5 text-white font-grotesk font-bold text-base transition-all duration-300 hover:bg-white hover:text-darkBg group"
              >
                Contact Me
                <FaCommentDots className="text-sm transition-transform duration-300 group-hover:rotate-6" />
              </motion.button>
            </Magnetic>
          </div>

          {/* Social Icons Row */}
          <div className="flex items-center gap-5">
            {SOCIAL_LINKS.map((social) => {
              const Icon = social.icon;
              return (
                <Magnetic key={social.name} range={30} strength={0.3}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="w-11 h-11 rounded-xl border border-white/5 bg-white/5 flex items-center justify-center text-slate-400 text-lg transition-all duration-300 hover:border-primary hover:text-primary hover:shadow-neon-emerald/20 hover:rotate-6"
                    aria-label={social.name}
                  >
                    <Icon />
                  </a>
                </Magnetic>
              );
            })}
          </div>
        </div>

        {/* Right Graphic/Avatar Column */}
        <div className="lg:col-span-5 flex justify-center items-center relative py-10 lg:py-0">
          
          {/* Animated Background Blur Lights */}
          <motion.div
            style={{ x: glowX, y: glowY }}
            className="absolute w-[120%] h-[120%] rounded-full bg-gradient-to-tr from-primary/10 to-secondary/15 blur-[60px] pointer-events-none"
          />

          {/* Circle Ring Glow Container */}
          <motion.div 
            style={{ x: avatarX, y: avatarY }}
            className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-2 border-2 border-dashed border-primary/20 flex items-center justify-center"
          >
            {/* Spinning Dashed Ring */}
            <div className="absolute inset-0 rounded-full border border-dashed border-secondary/35 animate-spin-slow pointer-events-none" />

            {/* Pulsating Neon Glow Circle */}
            <div className="absolute inset-4 rounded-full border border-primary animate-pulse shadow-neon-emerald pointer-events-none" />

            {/* Profile Image Wrap */}
            <div className="relative w-full h-full rounded-full overflow-hidden border border-white/10 bg-darkCard/80">
              <img
                src={profileImg}
                alt="Abdul Kadir Portrait"
                className="w-full h-full object-cover grayscale contrast-[1.05] hover:grayscale-0 transition-all duration-500 scale-[1.02]"
              />
            </div>

            {/* Floating Cards overlaid (Continuous float + Parallax) */}
            
            {/* Floating Card 1: Available for opportunities (Top Left) */}
            <motion.div
              style={{ x: cardX, y: cardY }}
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
              className="absolute top-[8%] left-[-15%] glass-card rounded-2xl px-4 py-2 flex items-center gap-2 border-primary/20 shadow-neon-emerald/10 select-none interactive-target"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-primary shadow-neon-emerald" />
              <span className="text-xs font-grotesk font-bold text-white whitespace-nowrap">Available for Hire</span>
            </motion.div>

            {/* Floating Card 2: Experience (Top Right) */}
            <motion.div
              style={{ x: cardX, y: cardY }}
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 0.5 }}
              className="absolute top-[18%] right-[-18%] glass-card rounded-2xl px-4 py-2.5 flex flex-col items-start border-secondary/20 shadow-neon-cyan/10 select-none interactive-target"
            >
              <span className="text-[10px] uppercase font-semibold text-secondary tracking-widest">Experience</span>
              <span className="text-sm font-grotesk font-bold text-white">Fresher</span>
            </motion.div>

            {/* Floating Card 3: Projects (Bottom Left) */}
            <motion.div
              style={{ x: cardX, y: cardY }}
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut', delay: 1 }}
              className="absolute bottom-[20%] left-[-18%] glass-card rounded-2xl px-4 py-2.5 flex flex-col items-start border-secondary/20 shadow-neon-cyan/10 select-none interactive-target"
            >
              <span className="text-[10px] uppercase font-semibold text-secondary tracking-widest">Projects</span>
              <span className="text-sm font-grotesk font-bold text-white">3+ Completed</span>
            </motion.div>

            {/* Floating Card 4: Open to work (Bottom Right) */}
            <motion.div
              style={{ x: cardX, y: cardY }}
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5.5, ease: 'easeInOut', delay: 1.5 }}
              className="absolute bottom-[10%] right-[-15%] glass-card rounded-2xl px-4 py-2 flex items-center gap-2 border-primary/20 shadow-neon-emerald/10 select-none interactive-target"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-grotesk font-bold text-white whitespace-nowrap">Open to Work</span>
            </motion.div>

          </motion.div>
        </div>
      </div>

      {/* Floating particles background canvas could go here, handled globally */}
    </section>
  );
}
