import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

/**
 * Wraps an element to provide a responsive 3D tilt effect with a mouse-following light glare.
 * @param {object} props
 * @param {React.ReactNode} props.children Card contents
 * @param {string} [props.className] Optional tailwind classes
 * @param {number} [props.tiltMax=10] Maximum rotation angle (degrees)
 * @param {string} [props.glareColor='rgba(34, 197, 94, 0.15)'] Glare highlight color
 */
export default function TiltCard({ 
  children, 
  className = '', 
  tiltMax = 10,
  glareColor = 'rgba(34, 197, 94, 0.15)' 
}) {
  const ref = useRef(null);

  // Normal relative coordinates: [0, 1]
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  // Map coordinate range [0, 1] to rotate bounds [-tiltMax, tiltMax]
  const rotateX = useTransform(y, [0, 1], [tiltMax, -tiltMax]);
  const rotateY = useTransform(x, [0, 1], [-tiltMax, tiltMax]);

  // Spring animations for clean tilt transitions
  const springX = useSpring(rotateX, { stiffness: 150, damping: 20 });
  const springY = useSpring(rotateY, { stiffness: 150, damping: 20 });

  // Map glare percentage tracking coordinates
  const glarePercentX = useTransform(x, (val) => `${val * 100}%`);
  const glarePercentY = useTransform(y, (val) => `${val * 100}%`);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Relative coordinates within the element
    const relativeX = (e.clientX - rect.left) / width;
    const relativeY = (e.clientY - rect.top) / height;

    x.set(relativeX);
    y.set(relativeY);
  };

  const handleMouseLeave = () => {
    // Return to horizontal state
    x.set(0.5);
    y.set(0.5);
  };

  // Convert glare transforms into a dynamic radial background style
  const glareBackground = useTransform(
    [glarePercentX, glarePercentY],
    ([px, py]) => `radial-gradient(circle 180px at ${px} ${py}, ${glareColor} 0%, transparent 70%)`
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
      <div style={{ transform: 'translateZ(10px)' }} className="h-full w-full">
        {children}
      </div>
    </motion.div>
  );
}
