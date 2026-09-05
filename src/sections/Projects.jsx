import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaStar } from 'react-icons/fa';
import { PROJECTS } from '../constants';
import TiltCard from '../components/TiltCard';

const CATEGORIES = ['All', 'Featured Business Case Study', 'Full Stack Application', 'React Application'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-24 px-6 lg:px-12 relative flex justify-center">
      <div className="max-w-7xl w-full z-10">
        
        {/* Section Header & Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 text-left">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2.5 mb-3"
            >
              <span className="w-8 h-[2px] bg-primary rounded-full" />
              <span className="text-xs font-grotesk font-bold uppercase tracking-wider text-primary">
                WORK ARCHIVE &bull; STATE 03 / 06
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-grotesk text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 uppercase"
            >
              SELECTED WORK
            </motion.h2>
          </div>

          {/* Category Filter Tabs */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-1.5 p-1.5 rounded-xl bg-slate-100 border border-slate-200/80"
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-4 py-1.5 rounded-lg font-grotesk font-bold text-xs uppercase tracking-wider transition-colors duration-200 ${
                  activeCategory === cat ? 'text-slate-900' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {activeCategory === cat && (
                  <motion.span
                    layoutId="activeTabBg"
                    className="absolute inset-0 bg-white rounded-lg shadow-sm"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </motion.div>
        </div>

        {/* Asymmetric Case Study Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={project.title}
                className={`h-full ${project.featured ? 'md:col-span-2 lg:col-span-2' : ''}`}
              >
                <TiltCard 
                  tiltMax={5}
                  glareColor="rgba(22, 163, 74, 0.05)"
                  className="product-card h-full rounded-2xl overflow-hidden flex flex-col justify-between interactive-card"
                >
                  <div>
                    {/* Project Image */}
                    <div className="relative h-60 sm:h-72 overflow-hidden bg-slate-100 border-b border-slate-200 group/img">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                        loading="lazy"
                      />
                      {project.featured && (
                        <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-darkCharcoal/90 backdrop-blur-md text-white text-xs font-grotesk font-bold uppercase tracking-wider shadow-sm">
                          <FaStar className="text-amber-400 text-[10px]" /> Featured Case Study
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-8">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((t) => (
                          <span 
                            key={t}
                            className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200/60 text-[11px] font-mono font-semibold text-slate-700 uppercase"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <h3 className="font-grotesk text-2xl md:text-3xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors uppercase">
                        {project.title}
                      </h3>

                      <p className="font-sans text-sm text-slate-600 leading-relaxed mb-6">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Links Footer */}
                  <div className="px-6 md:px-8 py-5 border-t border-slate-100 flex items-center justify-between mt-auto bg-slate-50/50">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-grotesk font-extrabold text-slate-900 uppercase tracking-wider hover:text-primary transition-colors cursor-pointer group/link"
                    >
                      Visit Live Platform
                      <FaExternalLinkAlt className="text-[10px] text-slate-400 group-hover/link:text-primary group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all" />
                    </a>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="w-9 h-9 rounded-lg border border-slate-200 bg-white flex items-center justify-center text-slate-600 text-sm hover:border-slate-400 hover:text-slate-900 transition-all cursor-pointer"
                        aria-label="View Source Code on GitHub"
                      >
                        <FaGithub />
                      </a>
                    )}
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
