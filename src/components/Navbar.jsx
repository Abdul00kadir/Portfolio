import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FaDownload } from 'react-icons/fa';
import Magnetic from './Magnetic';
import favicon from '../assets/favicon.png';

const NAV_ITEMS = [
  { label: '01 / IDENTITY', id: 'hero', stateCode: '01/06' },
  { label: '02 / BUILD', id: 'build', stateCode: '02/06' },
  { label: '03 / WORK', id: 'projects', stateCode: '03/06' },
  { label: '04 / PROGRESSION', id: 'experience', stateCode: '04/06' },
  { label: '05 / ENGINE', id: 'engineering', stateCode: '05/06' },
  { label: '06 / STORY', id: 'about', stateCode: '06/06' },
  { label: '07 / CONNECT', id: 'contact', stateCode: '07/06' }
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -50% 0px',
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleScrollTo = (id) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      if (window.lenis) {
        window.lenis.scrollTo(el, { offset: -80 });
      } else {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const currentItem = NAV_ITEMS.find((n) => n.id === activeSection) || NAV_ITEMS[0];

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'py-3 glass-navbar-light shadow-sm' 
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between px-6 mx-auto max-w-7xl lg:px-12">
          
          {/* Brand Mark & Active System State */}
          <div 
            onClick={() => handleScrollTo('hero')}
            className="flex items-center gap-3 cursor-pointer select-none group"
          >
            <span className="flex items-center justify-center w-8 h-8 text-xs font-bold tracking-wider text-white transition-transform duration-300 rounded-lg bg-darkCharcoal font-grotesk group-hover:scale-105 group-hover:bg-primary">
              <img src={favicon} alt="" />
            </span>
            <div className="flex flex-col text-left">
              <span className="text-sm font-bold tracking-tight uppercase transition-colors font-grotesk text-slate-900 group-hover:text-primary">
                ABDUL KADIR
              </span>
              <span className="text-[9px] font-mono text-slate-400 font-semibold tracking-wider">
                SYS.STATE [{currentItem.stateCode}]
              </span>
            </div>
          </div>

          {/* Desktop Navigation System Bar */}
          <div className="items-center hidden gap-6 lg:flex">
            {NAV_ITEMS.map((item) => (
              <div key={item.id} className="relative py-2">
                <button
                  onClick={() => handleScrollTo(item.id)}
                  className={`font-grotesk font-bold text-[11px] tracking-wider uppercase transition-colors duration-200 ${
                    activeSection === item.id 
                      ? 'text-primary' 
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                </button>
                {activeSection === item.id && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Download CV CTA Button */}
          <div className="hidden lg:block">
            <Magnetic range={30} strength={0.2}>
              <a
                href="https://drive.google.com/file/d/1V85UpuNhINiarB4SyteLDMffJ9KqxRkn/view?usp=drive_link" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold tracking-wider uppercase transition-all duration-200 bg-white border rounded-lg border-slate-200 text-slate-800 font-grotesk hover:border-primary hover:text-primary hover:shadow-card group"
              >
                Resume
                <FaDownload className="text-[10px] text-slate-400 transition-transform duration-200 group-hover:translate-y-0.5 group-hover:text-primary" />
              </a>
            </Magnetic>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-xl transition-colors rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100"
              aria-label="Toggle System Menu"
            >
              {mobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Slide-down Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-x-0 top-[65px] z-40 bg-white/95 backdrop-blur-xl border-b border-slate-200 px-6 py-6 shadow-lg lg:hidden"
          >
            <div className="flex flex-col gap-3 text-sm font-bold tracking-wider font-grotesk text-slate-800">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleScrollTo(item.id)}
                  className={`text-left py-2.5 px-3 rounded-lg transition-colors flex items-center justify-between ${
                    activeSection === item.id 
                      ? 'bg-emerald-50 text-primary font-bold' 
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="text-[10px] font-mono text-slate-400">[{item.stateCode}]</span>
                </button>
              ))}

              <div className="flex justify-start pt-4 border-t border-slate-100">
                <a
                  href="https://drive.google.com/file/d/1V85UpuNhINiarB4SyteLDMffJ9KqxRkn/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center justify-center w-full gap-2 px-5 py-3 text-xs font-bold tracking-wider text-white uppercase transition-colors rounded-lg bg-darkCharcoal hover:bg-primary"
                >
                  Download Resume <FaDownload className="text-xs" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
