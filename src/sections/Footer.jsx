import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { SOCIAL_LINKS } from '../constants';
import Magnetic from '../components/Magnetic';

export default function Footer() {
  const [scrollProgress, setScrollProgress] = useState(0);

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

  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <footer className="w-full py-12 px-6 lg:px-12 border-t border-slate-200 bg-white z-20 relative text-left">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Brand & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="w-9 h-9 rounded-lg bg-slate-900 flex items-center justify-center text-white font-grotesk font-bold text-xs">
            AK
          </div>
          <div>
            <p className="text-xs font-grotesk font-bold text-slate-900 uppercase tracking-wider">
              Abdul Kadir &bull; Software Developer
            </p>
            <p className="text-xs text-slate-500 mt-1">
              &copy; {new Date().getFullYear()} All rights reserved. Handcrafted with React, Tailwind CSS & Framer Motion.
            </p>
          </div>
        </div>

        {/* Social Links & Back to Top Button */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map((soc) => {
              const Icon = soc.icon;
              return (
                <a
                  key={soc.name}
                  href={soc.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-primary transition-colors text-base"
                  aria-label={soc.name}
                >
                  <Icon />
                </a>
              );
            })}
          </div>

          <div className="h-6 w-[1px] bg-slate-200 hidden sm:block" />

          {/* Back to top scroll button */}
          <Magnetic range={25} strength={0.25}>
            <button
              onClick={handleScrollToTop}
              className="relative w-11 h-11 rounded-full border border-slate-200 bg-slate-50 hover:border-primary flex items-center justify-center text-slate-600 hover:text-primary transition-all group cursor-pointer"
              aria-label="Scroll Back to Top"
            >
              <svg className="absolute -rotate-90 w-full h-full p-1" viewBox="0 0 44 44">
                <circle
                  cx="22"
                  cy="22"
                  r={radius}
                  className="stroke-slate-200 fill-transparent"
                  strokeWidth="2.5"
                />
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
              <FaArrowUp className="text-xs transition-transform duration-200 group-hover:-translate-y-0.5" />
            </button>
          </Magnetic>
        </div>

      </div>
    </footer>
  );
}
