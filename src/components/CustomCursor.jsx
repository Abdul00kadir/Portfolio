import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

export default function CustomCursor() {
  const [hoverType, setHoverType] = useState(null); // 'profile', 'cta', 'label', 'card', 'generic', null
  const [clickRipples, setClickRipples] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 35, stiffness: 350, mass: 0.4 };
  const trailX = useSpring(mouseX, springConfig);
  const trailY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const checkDevice = () => {
      const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isMobileScreen = window.innerWidth < 1024;
      setIsMobile(isTouch || isMobileScreen);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    if (isMobile) return;

    const moveCursor = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    document.body.classList.add('custom-cursor-active');

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      if (target.closest('.interactive-profile')) {
        setHoverType('profile');
      } else if (target.closest('.interactive-cta')) {
        setHoverType('cta');
      } else if (target.closest('.interactive-label')) {
        setHoverType('label');
      } else if (target.closest('.interactive-card') || target.closest('.product-card')) {
        setHoverType('card');
      } else if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('.interactive-target') ||
        target.closest('[role="button"]')
      ) {
        setHoverType('generic');
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target;
      if (!target) return;

      const isInteractive = 
        target.closest('.interactive-profile') ||
        target.closest('.interactive-cta') ||
        target.closest('.interactive-label') ||
        target.closest('.interactive-card') ||
        target.closest('.product-card') ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('.interactive-target') ||
        target.closest('[role="button"]');

      if (isInteractive) {
        setHoverType(null);
      }
    };

    const handleClick = (e) => {
      const newRipple = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };
      setClickRipples((prev) => [...prev, newRipple]);

      setTimeout(() => {
        setClickRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 700);
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

  const getRingStyles = () => {
    switch (hoverType) {
      case 'profile':
        return 'w-16 h-16 bg-emerald-500/10 border-emerald-500 shadow-green-subtle';
      case 'cta':
        return 'w-12 h-12 bg-slate-900/10 border-slate-900 shadow-sm';
      case 'label':
        return 'w-14 h-14 bg-amber-500/10 border-amber-500 shadow-sm';
      case 'card':
        return 'w-14 h-14 bg-emerald-500/5 border-emerald-400/80 shadow-sm';
      case 'generic':
        return 'w-12 h-12 bg-emerald-500/10 border-emerald-600 shadow-sm';
      default:
        return 'w-8 h-8 border-slate-400/60 bg-transparent';
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {/* Outer Dynamic Ring */}
      <motion.div
        className={`absolute rounded-full border transition-all duration-200 ${getRingStyles()}`}
        style={{
          x: trailX,
          y: trailY,
          translateX: '-50%',
          translateY: '-50%',
          left: 0,
          top: 0,
        }}
        animate={{
          scale: hoverType ? 1.2 : 1,
        }}
        transition={{ type: 'spring', stiffness: 320, damping: 24 }}
      />

      {/* Inner Pinpoint Dot */}
      <motion.div
        className={`absolute w-2 h-2 rounded-full transition-colors ${
          hoverType === 'profile' 
            ? 'bg-emerald-600' 
            : hoverType === 'label'
            ? 'bg-amber-500'
            : hoverType === 'card'
            ? 'bg-emerald-600'
            : hoverType
            ? 'bg-slate-900'
            : 'bg-slate-800'
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

      {/* Click Ripples */}
      <AnimatePresence>
        {clickRipples.map((ripple) => (
          <motion.span
            key={ripple.id}
            className="absolute rounded-full border border-emerald-500/40 bg-emerald-500/5 pointer-events-none"
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
              width: 90,
              height: 90,
              opacity: 0,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{ left: 0, top: 0 }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
