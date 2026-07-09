import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FaDownload } from 'react-icons/fa';
import Magnetic from './Magnetic';

const NAV_ITEMS = [
  { label: 'Home', id: 'hero' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  // { label: 'Experience', id: 'experience' },
  { label: 'Contact', id: 'contact' }
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Monitor scroll for glass background triggering
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer to trace active section in view
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px', // Trigger near middle-top
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

  // Smooth scroll handler
  const handleScrollTo = (id) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      // If lenis is active, let lenis handle smooth scroll
      if (window.lenis) {
        window.lenis.scrollTo(el, { offset: -80 });
      } else {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'py-4 glass-navbar shadow-neon-emerald/5' 
            : 'py-6 bg-transparent border-bottom border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo Brand */}
          <div 
            onClick={() => handleScrollTo('hero')}
            className="flex items-center gap-2 cursor-pointer font-grotesk text-xl font-bold tracking-tight text-white group"
          >
            <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-darkBg font-black text-sm transition-transform duration-300 group-hover:rotate-12">
              AI
            </span>
            {/* <span className="transition-colors duration-300 group-hover:text-primary">
              Abdul<span className="text-primary font-light">Kadir</span>
            </span> */}
          </div>

          {/* Desktop Nav List */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <div key={item.id} className="relative py-2">
                <button
                  onClick={() => handleScrollTo(item.id)}
                  className={`font-sans font-medium text-sm tracking-wide transition-colors duration-300 hover:text-white ${
                    activeSection === item.id ? 'text-primary' : 'text-slate-400'
                  }`}
                >
                  {item.label}
                </button>
                {activeSection === item.id && (
                  <motion.span
                    layoutId="activeNavLine"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary shadow-neon-emerald rounded-full"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Download CV CTA */}
          <div className="hidden lg:block">
            <Magnetic range={40} strength={0.25}>
              <a
                href="https://drive.google.com/file/d/1V85UpuNhINiarB4SyteLDMffJ9KqxRkn/view?usp=drive_link" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/20 bg-primary/10 text-primary font-grotesk font-semibold text-sm transition-all duration-300 hover:bg-primary hover:text-darkBg hover:shadow-neon-emerald hover:border-transparent group"
              >
                Download CV
                <FaDownload className="text-xs transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>
            </Magnetic>
          </div>

          {/* Mobile Hamburguer */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-2xl text-slate-300 hover:text-white p-1 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Slide-out Glass Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-0 z-40 bg-darkBg/95 backdrop-blur-xl border-b border-white/5 flex flex-col justify-center px-8"
          >
            <div className="flex flex-col gap-6 font-grotesk text-2xl font-bold text-center">
              {NAV_ITEMS.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05, duration: 0.3 }}
                >
                  <button
                    onClick={() => handleScrollTo(item.id)}
                    className={`hover:text-primary transition-colors py-2 ${
                      activeSection === item.id ? 'text-primary glow-text-emerald' : 'text-slate-300'
                    }`}
                  >
                    {item.label}
                  </button>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                className="mt-6 flex justify-center"
              >
                <a
                  href="#cv"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-darkBg font-semibold text-lg hover:shadow-neon-emerald"
                >
                  Download CV <FaDownload className="text-sm" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
