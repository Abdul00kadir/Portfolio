import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaUser, FaMapMarkerAlt, FaEnvelope, FaBriefcase, FaCalendarAlt, FaChevronRight } from 'react-icons/fa';
import TiltCard from '../components/TiltCard';

// Animated Count Component using requestAnimationFrame and useInView
function Counter({ value, duration = 1.5 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    // Extract numeric values (e.g. "10+" -> 10)
    const numericStr = value.replace(/[^0-9]/g, '');
    const target = parseInt(numericStr, 10);

    if (isNaN(target)) {
      setCount(value);
      return;
    }

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      
      // Quadratic ease-out formula
      const easeProgress = 1 - (1 - progress) * (1 - progress);
      setCount(Math.floor(easeProgress * target));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    window.requestAnimationFrame(step);
  }, [isInView, value, duration]);

  // Append original sign (e.g. "+", "K") back to animated number
  const suffix = value.replace(/[0-9]/g, '');
  return <span ref={ref}>{count}{suffix}</span>;
}

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const bioText = "I'm a BCA graduate from IFTM University, Moradabad. I love turning design ideas into fully-interactive, real-world web applications. I focus on structural integrity, semantic coding, and interactive fluidity. I spend my time exploring frontend engineering, backend integrations, API optimizations, and custom web animations.";
  
  const extendedBioText = " My programming journey began with standard computer systems, which evolved into a core passion for modern JavaScript stack components. I specialize in building SPAs with React, styling with Tailwind CSS, animating with Framer Motion, and creating backends using Node.js, Express.js, and MongoDB. I enjoy problem-solving and refining visual feedback hooks to keep layouts engaging.";

  return (
    <section id="about" className="py-24 px-6 lg:px-12 relative flex items-center justify-center">
      <div className="max-w-7xl w-full z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="flex items-center gap-3 mb-16 justify-center lg:justify-start"
        >
          <span className="w-10 h-[1px] bg-primary" />
          <h2 className="font-grotesk text-3xl md:text-4xl font-bold tracking-tight text-white">
            About <span className="text-primary glow-text-emerald">Me</span>
          </h2>
        </motion.div>

        {/* Two Column Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10"
        >
          
          {/* Left Column: Info Grid Card */}
          <motion.div variants={itemVariants} className="lg:col-span-5 h-full">
            <TiltCard 
              className="glass-card rounded-[24px] p-8 border-white/5 h-full relative" 
              glareColor="rgba(6, 182, 212, 0.12)"
            >
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-grotesk text-xl font-bold text-white tracking-wide">Personal Details</h3>
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shadow-neon-emerald/20">
                  <FaUser />
                </div>
              </div>

              {/* Info Rows */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors duration-300">
                    <FaCalendarAlt />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Age</p>
                    <p className="text-sm font-semibold text-slate-200">20</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors duration-300">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Location</p>
                    <p className="text-sm font-semibold text-slate-200">Moradabad, India</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors duration-300">
                    <FaEnvelope />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Email</p>
                    <a href="mailto:788abdulkadir788@gmail.com" className="text-sm font-semibold text-slate-200 hover:text-primary transition-colors">
                      788abdulkadir788@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors duration-300">
                    <FaBriefcase />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Freelance</p>
                    <p className="text-sm font-semibold text-primary">Available</p>
                  </div>
                </div>
              </div>

              {/* Read More / Toggle Description */}
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-12 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/5 bg-white/5 font-grotesk font-semibold text-sm text-slate-300 transition-all duration-300 hover:bg-primary hover:text-darkBg hover:shadow-neon-emerald hover:border-transparent group cursor-pointer"
              >
                {isExpanded ? 'Show Less' : 'Read More About Me'}
                <FaChevronRight className={`text-xs transition-transform duration-300 ${isExpanded ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
              </button>
            </TiltCard>
          </motion.div>

          {/* Right Column: Bio & Counter Grid */}
          <motion.div variants={itemVariants} className="lg:col-span-7 flex flex-col justify-between gap-10">
            
            {/* Bio Card */}
            <div className="text-left">
              <p className="font-sans text-slate-300 text-base md:text-lg leading-relaxed mb-6">
                {bioText}
                {isExpanded && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {extendedBioText}
                  </motion.span>
                )}
              </p>
            </div>

            {/* Stats Counter Grid */}
            <div className="text-left">
              <h3 className="font-grotesk text-xl font-bold text-white mb-6">
                My <span className="text-secondary glow-text-cyan">Stats</span>
              </h3>

              <div className="grid grid-cols-2 gap-4">
                
                {/* Stat 1: Projects Completed */}
                <TiltCard className="glass-card rounded-[24px] p-6 border-white/5" glareColor="rgba(34, 197, 94, 0.1)">
                  <h4 className="font-grotesk text-3xl md:text-4xl font-extrabold text-white mb-2">
                    <Counter value="3+" />
                  </h4>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Projects Completed</p>
                </TiltCard>

                {/* Stat 2: Commits */}
                <TiltCard className="glass-card rounded-[24px] p-6 border-white/5" glareColor="rgba(6, 182, 212, 0.1)">
                  <h4 className="font-grotesk text-3xl md:text-4xl font-extrabold text-white mb-2">
                    <Counter value="100+" />
                  </h4>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">GitHub Commits</p>
                </TiltCard>

                {/* Stat 3: Technologies */}
                <TiltCard className="glass-card rounded-[24px] p-6 border-white/5" glareColor="rgba(6, 182, 212, 0.1)">
                  <h4 className="font-grotesk text-3xl md:text-4xl font-extrabold text-white mb-2">
                    <Counter value="15+" />
                  </h4>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Technologies Learned</p>
                </TiltCard>

                {/* Stat 4: Open to Work */}
                <TiltCard className="glass-card rounded-[24px] p-6 border-primary/10 border" glareColor="rgba(34, 197, 94, 0.15)">
                  <h4 className="font-grotesk text-2xl md:text-3xl font-extrabold text-primary mb-2 flex items-center gap-1">
                    Open <span className="text-xs">↗</span>
                  </h4>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">To Work</p>
                </TiltCard>

              </div>
            </div>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
