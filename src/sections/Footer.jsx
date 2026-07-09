import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';
import Magnetic from '../components/Magnetic';

export default function Footer() {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Monitor scroll percent
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const totalScroll = scrollHeight - clientHeight;
      if (totalScroll <= 0) return;
      const percentage = (window.scrollY / totalScroll) * 100;
      setScrollProgress(percentage);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    if (window.lenis) {
      window.lenis.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // SVG circular path settings
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <footer className="w-full py-10 px-6 lg:px-12 border-t border-white/5 bg-[#05070A]/80 z-20 relative text-left">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo and Copyright Info */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-darkBg font-black text-xs font-grotesk">
            AK
          </div>
          <div>
            <p className="text-xs text-slate-500 font-semibold tracking-wider uppercase font-grotesk">
              &copy; {new Date().getFullYear()} Abdul Kadir. All rights reserved.
            </p>
            <p className="text-[10px] text-slate-600 mt-0.5">
              Handcrafted in India. Powered by React, Tailwind & Framer Motion.
            </p>
          </div>
        </div>

        {/* Back to top scroll progress button */}
        <div className="flex items-center">
          <Magnetic range={30} strength={0.3}>
            <button
              onClick={handleScrollToTop}
              className="relative w-12 h-12 rounded-full border border-white/5 bg-white/5 hover:border-primary/20 flex items-center justify-center text-slate-400 hover:text-primary transition-colors duration-300 group cursor-pointer"
              aria-label="Back to Top"
            >
              {/* Circular SVG Progress wheel */}
              <svg className="absolute -rotate-90 w-full h-full p-1" viewBox="0 0 44 44">
                {/* Track circle (Subtle outline) */}
                <circle
                  cx="22"
                  cy="22"
                  r={radius}
                  className="stroke-white/5 fill-transparent"
                  strokeWidth="2.5"
                />
                {/* Glowing progress circle */}
                <circle
                  cx="22"
                  cy="22"
                  r={radius}
                  className="stroke-primary fill-transparent transition-all duration-100"
                  strokeWidth="2.5"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                />
              </svg>

              {/* Up Arrow Icon */}
              <FaArrowUp className="text-sm transition-transform duration-300 group-hover:-translate-y-1" />
            </button>
          </Magnetic>
        </div>

      </div>
    </footer>
  );
}
