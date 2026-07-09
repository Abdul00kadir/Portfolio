import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

export default function CustomCursor() {
  const [hovered, setHovered] = useState(false);
  const [clickRipples, setClickRipples] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  // Mouse coordinates using MotionValues
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Spring animations for a smooth lag/trail effect
  const springConfig = { damping: 40, stiffness: 400, mass: 0.4 };
  const trailX = useSpring(mouseX, springConfig);
  const trailY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Detect mobile/touch devices
    const checkDevice = () => {
      const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isMobileScreen = window.innerWidth < 1024;
      setIsMobile(isTouch || isMobileScreen);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    if (isMobile) return;

    // Track mouse movement
    const moveCursor = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    // Toggle custom-cursor-active class to hide standard cursor on body
    document.body.classList.add('custom-cursor-active');

    // Handle mouse leaves/enters viewport
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Global listener for hover interactions
    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      const isInteractive = 
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('.interactive-target') ||
        target.closest('[role="button"]');

      if (isInteractive) {
        setHovered(true);
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target;
      if (!target) return;

      const isInteractive = 
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('.interactive-target') ||
        target.closest('[role="button"]');

      if (isInteractive) {
        setHovered(false);
      }
    };

    // Click Ripple System
    const handleClick = (e) => {
      const newRipple = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };
      setClickRipples((prev) => [...prev, newRipple]);

      // Remove after animation finishes
      setTimeout(() => {
        setClickRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 800);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('click', handleClick);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('click', handleClick);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.body.classList.remove('custom-cursor-active');
    };
  }, [isMobile, isVisible, mouseX, mouseY]);

  if (isMobile || !isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {/* Outer Spring Trail Ring */}
      <motion.div
        className={`absolute rounded-full border ${
          hovered 
            ? 'w-14 h-14 bg-secondary/10 border-secondary shadow-neon-cyan' 
            : 'w-8 h-8 border-primary bg-transparent shadow-neon-emerald'
        }`}
        style={{
          x: trailX,
          y: trailY,
          translateX: hovered ? '-50%' : '-50%',
          translateY: hovered ? '-50%' : '-50%',
          left: 0,
          top: 0,
        }}
        animate={{
          scale: hovered ? 1.2 : 1,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      />

      {/* Inner Pinpoint Dot */}
      <motion.div
        className={`absolute w-2 h-2 rounded-full ${
          hovered ? 'bg-secondary' : 'bg-primary'
        }`}
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
          left: 0,
          top: 0,
        }}
      />

      {/* Click Ripple Effects */}
      <AnimatePresence>
        {clickRipples.map((ripple) => (
          <motion.span
            key={ripple.id}
            className="absolute rounded-full border border-primary/45 bg-primary/5 pointer-events-none"
            initial={{
              width: 0,
              height: 0,
              x: ripple.x,
              y: ripple.y,
              translateX: '-50%',
              translateY: '-50%',
              opacity: 1,
            }}
            animate={{
              width: 120,
              height: 120,
              opacity: 0,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{ left: 0, top: 0 }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
