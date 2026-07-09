import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function BackgroundEffect() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles = [];
    const particleCount = 40;

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height + height; // Start below or randomly
        this.size = Math.random() * 2.5 + 0.5;
        this.speedX = Math.random() * 0.4 - 0.2;
        this.speedY = -(Math.random() * 0.6 + 0.2);
        this.opacity = Math.random() * 0.4 + 0.1;
        this.color = Math.random() > 0.5 ? '#22C55E' : '#06B6D4';
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.y < -10 || this.x < -10 || this.x > width + 10) {
          this.reset();
          this.y = height + 10;
        }
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        // Subtle glow on particles
        ctx.shadowBlur = 8;
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.restore();
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      const p = new Particle();
      p.y = Math.random() * height; // distribute initially
      particles.push(p);
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 bg-[#05070A] overflow-hidden pointer-events-none">
      {/* CSS Grid Overlay */}
      <div className="absolute inset-0 bg-grid-overlay opacity-80" />

      {/* Noise Overlay */}
      <div className="absolute inset-0 noise-overlay" />

      {/* Floating Glow Blobs */}
      {/* Blob 1: Emerald (Top Left) */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-primary/10 blur-[120px]"
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 40, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Blob 2: Cyan (Bottom Right) */}
      <motion.div
        className="absolute bottom-[-10%] right-[-10%] w-[55vw] h-[55vw] rounded-full bg-secondary/10 blur-[130px]"
        animate={{
          x: [0, -50, 30, 0],
          y: [0, 40, -30, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Blob 3: Center Radial Glow (Subtle) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_40%,#05070A_85%)] opacity-70" />

      {/* Canvas Particles */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60" />
    </div>
  );
}
