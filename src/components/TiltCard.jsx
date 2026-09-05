import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

/**
 * Wraps an element to provide a responsive 3D tilt effect with a light glare highlight.
 * @param {object} props
 * @param {React.ReactNode} props.children Card contents
 * @param {string} [props.className] Optional tailwind classes
 * @param {number} [props.tiltMax=8] Maximum rotation angle (degrees)
 * @param {string} [props.glareColor='rgba(22, 163, 74, 0.08)'] Glare highlight color
 */
export default function TiltCard({ 
  children, 
  className = '', 
  tiltMax = 8,
  glareColor = 'rgba(22, 163, 74, 0.08)' 
}) {
  const ref = useRef(null);

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useTransform(y, [0, 1], [tiltMax, -tiltMax]);
  const rotateY = useTransform(x, [0, 1], [-tiltMax, tiltMax]);

  const springX = useSpring(rotateX, { stiffness: 180, damping: 22 });
  const springY = useSpring(rotateY, { stiffness: 180, damping: 22 });

  const glarePercentX = useTransform(x, (val) => `${val * 100}%`);
  const glarePercentY = useTransform(y, (val) => `${val * 100}%`);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const relativeX = (e.clientX - rect.left) / width;
    const relativeY = (e.clientY - rect.top) / height;

    x.set(relativeX);
    y.set(relativeY);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  const glareBackground = useTransform(
    [glarePercentX, glarePercentY],
    ([px, py]) => `radial-gradient(circle 200px at ${px} ${py}, ${glareColor} 0%, transparent 70%)`
  );

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: springX,
        rotateY: springY,
        transformStyle: 'preserve-3d',
      }}
      className={`relative group overflow-hidden ${className}`}
    >
      {/* Glare shine layer */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        style={{
          background: glareBackground,
        }}
      />
      {/* Card contents */}
      <div style={{ transform: 'translateZ(8px)' }} className="h-full w-full">
        {children}
      </div>
    </motion.div>
  );
}
