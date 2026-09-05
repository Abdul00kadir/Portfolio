import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FaArrowRight, FaCommentDots, FaCode, FaBuilding, FaDatabase, FaLayerGroup } from 'react-icons/fa';
import { SOCIAL_LINKS } from '../constants';
import Magnetic from '../components/Magnetic';
import profileImg from '../assets/profile.png';

export default function Hero() {
  const containerRef = useRef(null);
  const [hasGyroscope, setHasGyroscope] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 45, damping: 20, mass: 0.6 };
  const parallaxX = useSpring(mouseX, springConfig);
  const parallaxY = useSpring(mouseY, springConfig);

  // Depth Layers
  const badgeX = useTransform(parallaxX, [-300, 300], [-8, 8]);
  const badgeY = useTransform(parallaxY, [-300, 300], [-8, 8]);
  const titleX = useTransform(parallaxX, [-300, 300], [-18, 18]);
  const titleY = useTransform(parallaxY, [-300, 300], [-18, 18]);
  const textX = useTransform(parallaxX, [-300, 300], [-12, 12]);
  const textY = useTransform(parallaxY, [-300, 300], [-12, 12]);
  const ctaX = useTransform(parallaxX, [-300, 300], [-15, 15]);
  const ctaY = useTransform(parallaxY, [-300, 300], [-15, 15]);

  const avatarX = useTransform(parallaxX, [-300, 300], [-26, 26]);
  const avatarY = useTransform(parallaxY, [-300, 300], [-26, 26]);
  const orbitRotate = useTransform(parallaxX, [-300, 300], [-15, 15]);

  const card1X = useTransform(parallaxX, [-300, 300], [-38, 38]);
  const card1Y = useTransform(parallaxY, [-300, 300], [-38, 38]);
  const card2X = useTransform(parallaxX, [-300, 300], [-44, 44]);
  const card2Y = useTransform(parallaxY, [-300, 300], [-44, 44]);
  const card3X = useTransform(parallaxX, [-300, 300], [-34, 34]);
  const card3Y = useTransform(parallaxY, [-300, 300], [-34, 34]);
  const card4X = useTransform(parallaxX, [-300, 300], [-48, 48]);
  const card4Y = useTransform(parallaxY, [-300, 300], [-48, 48]);

  const handleMouseMove = (e) => {
    if (!containerRef.current || hasGyroscope) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    if (hasGyroscope) return;
    mouseX.set(0);
    mouseY.set(0);
  };

  useEffect(() => {
    const handleOrientation = (e) => {
      if (e.gamma !== null && e.beta !== null) {
        if (!hasGyroscope) setHasGyroscope(true);
        const tiltX = Math.min(Math.max(e.gamma * 8, -250), 250);
        const tiltY = Math.min(Math.max((e.beta - 30) * 8, -250), 250);
        mouseX.set(tiltX);
        mouseY.set(tiltY);
      }
    };

    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', handleOrientation, true);
    }

    return () => {
      if (window.DeviceOrientationEvent) {
        window.removeEventListener('deviceorientation', handleOrientation, true);
      }
    };
  }, [hasGyroscope, mouseX, mouseY]);

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

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[92vh] flex items-center justify-center py-16 lg:py-24 px-6 lg:px-12 overflow-hidden"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center z-10">
        
        {/* Left Column: Art-Directed Display Typography */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Technical System Label */}
          <motion.div
            style={{ x: badgeX, y: badgeY }}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200/80 mb-6 shadow-sm select-none"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
            </span>
            <span className="text-[11px] font-grotesk font-bold text-slate-800 uppercase tracking-wider">
              SOFTWARE DEVELOPER / PRODUCT BUILDER &bull; <span className="text-emerald-700 font-extrabold">SYS.2026</span>
            </span>
          </motion.div>

          {/* Enormous Art-Directed Display Title */}
          <motion.h1 
            style={{ x: titleX, y: titleY }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-grotesk text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-tighter text-darkCharcoal mb-4 leading-[0.98] select-none uppercase"
          >
            ABDUL<br />KADIR
          </motion.h1>

          {/* Supporting Headline with Warm-to-Green Accent Gradient */}
          <motion.h2
            style={{ x: textX, y: textY }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-grotesk text-2xl sm:text-3xl font-bold text-slate-800 mb-6 leading-snug select-none"
          >
            Building software that <span className="text-gradient-warm-green underline decoration-emerald-500/30 underline-offset-4">solves real problems</span>.
          </motion.h2>

          {/* Description */}
          <motion.p
            style={{ x: textX, y: textY }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-sans text-slate-600 text-base sm:text-lg max-w-2xl mb-10 leading-relaxed"
          >
            Engineering modern business software, responsive web applications, mobile tools, and internal workflows. Focused on clean architecture, practical usability, and reliable digital products.
          </motion.p>

          {/* Interactive Action CTAs */}
          <motion.div 
            style={{ x: ctaX, y: ctaY }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <Magnetic range={35} strength={0.25}>
              <button
                onClick={() => handleScrollTo('projects')}
                className="interactive-cta inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-slate-900 via-slate-900 to-emerald-950 text-white font-sans font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-green-subtle group cursor-pointer border border-emerald-900/40 uppercase tracking-wider font-grotesk"
              >
                Explore My Work
                <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1 text-emerald-400" />
              </button>
            </Magnetic>

            <Magnetic range={35} strength={0.25}>
              <button
                onClick={() => handleScrollTo('contact')}
                className="interactive-cta inline-flex items-center gap-2.5 px-8 py-4 rounded-xl border border-slate-300 bg-white text-slate-800 font-sans font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-50 hover:border-slate-400 hover:shadow-sm group cursor-pointer uppercase tracking-wider font-grotesk"
              >
                Let's Connect
                <FaCommentDots className="text-xs text-slate-400 transition-transform duration-300 group-hover:rotate-6 group-hover:text-primary" />
              </button>
            </Magnetic>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            style={{ x: badgeX, y: badgeY }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center gap-3"
          >
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-2 font-grotesk">
              Profiles:
            </span>
            {SOCIAL_LINKS.map((social) => {
              const Icon = social.icon;
              return (
                <Magnetic key={social.name} range={25} strength={0.25}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-xl border border-slate-200 bg-white flex items-center justify-center text-slate-600 text-sm transition-all duration-300 hover:border-primary hover:text-primary hover:shadow-sm hover:scale-105"
                    aria-label={social.name}
                  >
                    <Icon />
                  </a>
                </Magnetic>
              );
            })}
          </motion.div>
        </div>

        {/* Right Column: Layer 3 & 4 Futuristic Interactive 3D Composition */}
        <div className="lg:col-span-5 flex justify-center items-center relative py-8 lg:py-0">
          
          {/* Layer 3 — Profile & Orbit Frame Container */}
          <motion.div
            style={{ x: avatarX, y: avatarY }}
            className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-2xl p-3 bg-white border border-slate-200/90 shadow-card group interactive-profile select-none"
          >
            {/* Orbit Line */}
            <motion.div
              style={{ rotate: orbitRotate }}
              className="absolute -inset-4 rounded-3xl border border-dashed border-emerald-500/25 pointer-events-none transition-colors duration-500 group-hover:border-emerald-500/50"
            />

            {/* Inner Frame */}
            <div className="relative w-full h-full rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
              <img
                src={profileImg}
                alt="Abdul Kadir - Software Developer"
                className="profile-portrait-filter w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Layer 4 — Floating Interactive Labels */}
            <motion.div
              style={{ x: card1X, y: card1Y }}
              animate={{ y: [0, -7, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
              className="interactive-label absolute -top-5 -left-8 bg-white border border-slate-200/90 rounded-xl px-4 py-2.5 shadow-sm flex items-center gap-2.5 select-none hover:shadow-card transition-all duration-300"
            >
              <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center text-xs">
                <FaBuilding />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[9px] font-mono uppercase text-slate-400 font-semibold tracking-wider">Enterprise</span>
                <span className="text-xs font-grotesk font-bold text-slate-800">Business Applications</span>
              </div>
            </motion.div>

            <motion.div
              style={{ x: card2X, y: card2Y }}
              animate={{ y: [0, 7, 0] }}
              transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut', delay: 0.5 }}
              className="interactive-label absolute top-1/3 -right-10 bg-white border border-slate-200/90 rounded-xl px-4 py-2.5 shadow-sm flex items-center gap-2.5 select-none hover:shadow-card transition-all duration-300"
            >
              <div className="w-7 h-7 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center text-xs">
                <FaCode />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[9px] font-mono uppercase text-slate-400 font-semibold tracking-wider">Stack</span>
                <span className="text-xs font-grotesk font-bold text-slate-800">Web Engineering</span>
              </div>
            </motion.div>

            <motion.div
              style={{ x: card3X, y: card3Y }}
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 5.5, ease: 'easeInOut', delay: 1 }}
              className="interactive-label absolute bottom-12 -left-10 bg-white border border-slate-200/90 rounded-xl px-4 py-2.5 shadow-sm flex items-center gap-2.5 select-none hover:shadow-card transition-all duration-300"
            >
              <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center text-xs">
                <FaDatabase />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[9px] font-mono uppercase text-slate-400 font-semibold tracking-wider">Workflows</span>
                <span className="text-xs font-grotesk font-bold text-slate-800">ERP & Systems</span>
              </div>
            </motion.div>

            <motion.div
              style={{ x: card4X, y: card4Y }}
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 6.5, ease: 'easeInOut', delay: 1.5 }}
              className="interactive-label absolute -bottom-5 -right-6 bg-white border border-slate-200/90 rounded-xl px-4 py-2.5 shadow-sm flex items-center gap-2.5 select-none hover:shadow-card transition-all duration-300"
            >
              <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center text-xs">
                <FaLayerGroup />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[9px] font-mono uppercase text-slate-400 font-semibold tracking-wider">Products</span>
                <span className="text-xs font-grotesk font-bold text-slate-800">Product Engineering</span>
              </div>
            </motion.div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
