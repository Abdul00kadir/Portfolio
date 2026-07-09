import { useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

/**
 * Creates a magnetic attraction effect pulling children elements slightly toward the user's cursor.
 * @param {object} props
 * @param {React.ReactNode} props.children The element to magnetize
 * @param {number} [props.range=50] Bounding hover radius for the magnetic pull (pixels)
 * @param {number} [props.strength=0.3] Displacement ratio (0 to 1)
 */
export default function Magnetic({ children, range = 50, strength = 0.3 }) {
  const ref = useRef(null);

  // Set up motion values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Apply spring physics for elastic returns
  const springX = useSpring(x, { stiffness: 120, damping: 12, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 120, damping: 12, mass: 0.5 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    
    // Find element center
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Find vector distance from mouse to center
    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;
    
    const distance = Math.hypot(deltaX, deltaY);

    if (distance < range) {
      // Calculate pull force proportional to cursor position
      x.set(deltaX * strength);
      y.set(deltaY * strength);
    } else {
      // Return to center
      x.set(0);
      y.set(0);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}
