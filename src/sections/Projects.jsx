import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { PROJECTS } from '../constants';
import TiltCard from '../components/TiltCard';

const CATEGORIES = ['All', 'Full Stack', 'React', 'Frontend', 'WIX Studio', 'Next.js'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-24 px-6 lg:px-12 relative flex items-center justify-center">
      <div className="max-w-7xl w-full z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="flex items-center gap-3 justify-center md:justify-start"
          >
            <span className="w-10 h-[1px] bg-primary" />
            <h2 className="font-grotesk text-3xl md:text-4xl font-bold tracking-tight text-white">
              My <span className="text-primary glow-text-emerald">Projects</span>
            </h2>
          </motion.div>

          {/* Filter Categories Navbar */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="flex flex-wrap justify-center gap-2 p-1.5 rounded-full border border-white/5 bg-white/5 self-center md:self-auto"
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-5 py-2 rounded-full font-grotesk font-semibold text-xs tracking-wider uppercase transition-colors duration-300 ${
                  activeCategory === cat ? 'text-darkBg' : 'text-slate-400 hover:text-white'
                }`}
              >
                {activeCategory === cat && (
                  <motion.span
                    layoutId="activeCategoryBg"
                    className="absolute inset-0 bg-primary rounded-full shadow-neon-emerald"
                    transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </motion.div>
        </div>

        {/* Projects Layout Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.title}
                className="h-full"
              >
                <TiltCard 
                  tiltMax={8}
                  glareColor="rgba(6, 182, 212, 0.1)"
                  className="glass-card h-full rounded-[24px] border-white/5 overflow-hidden flex flex-col justify-between hover:border-white/10 transition-all duration-300 hover:shadow-neon-cyan/5 group interactive-target"
                >
                  <div>
                    {/* Project Image Wrapper */}
                    <div className="relative h-48 overflow-hidden bg-slate-900 border-b border-white/5">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      {/* Gradient overlay on thumbnail */}
                      <div className="absolute inset-0 bg-gradient-to-t from-darkBg via-transparent to-transparent opacity-80" />
                    </div>

                    {/* Content padding */}
                    <div className="p-6">
                      {/* Tech badges */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((t) => (
                          <span 
                            key={t}
                            className="px-2.5 py-1 rounded-lg border border-white/5 bg-white/5 text-[10px] font-grotesk font-bold text-slate-400 tracking-wide"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Title */}
                      <h3 className="font-grotesk text-xl font-bold text-white mb-2.5 transition-colors group-hover:text-primary">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="font-sans text-sm text-slate-400 leading-relaxed mb-6">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Links Row */}
                  <div className="p-6 pt-0 flex items-center justify-between border-t border-white/5 mt-auto">
                    {/* Live link */}
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-primary font-grotesk font-bold uppercase tracking-widest group/btn cursor-pointer"
                    >
                      Live Demo
                      <FaExternalLinkAlt className="text-[10px] transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </a>

                    {/* GitHub link */}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="w-8 h-8 mt-2 rounded-full border border-white/5 bg-white/5 flex items-center justify-center text-slate-400 text-sm hover:border-white hover:text-white transition-colors duration-300 cursor-pointer"
                      aria-label="GitHub Repository"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
