import { useState } from 'react';
import { motion } from 'framer-motion';
import { WHAT_I_BUILD } from '../constants';
import TiltCard from '../components/TiltCard';

export default function WhatIBuild() {
  const [activePillar, setActivePillar] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section id="build" className="py-20 px-6 lg:px-12 relative flex justify-center bg-slate-50/60 border-y border-slate-200/60">
      <div className="max-w-7xl w-full z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-2xl mb-16 text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2.5 mb-3"
          >
            <span className="w-8 h-[2px] bg-primary rounded-full" />
            <span className="text-xs font-grotesk font-bold uppercase tracking-wider text-primary">
              SYSTEM ARCHITECTURE MAP &bull; STATE 02 / 06
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-grotesk text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4 uppercase"
          >
            WHAT I BUILD
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-slate-600 text-base leading-relaxed"
          >
            An interconnected system map of modern software solutions, custom enterprise applications, and digital platforms engineered for operational excellence.
          </motion.p>
        </div>

        {/* 4 Pillars System Map Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left"
        >
          {WHAT_I_BUILD.map((item) => {
            const Icon = item.icon;
            const isHovered = activePillar === item.id;
            const isAnyHovered = activePillar !== null;
            const isQuieted = isAnyHovered && !isHovered;

            return (
              <motion.div 
                key={item.id} 
                variants={itemVariants} 
                className="h-full"
                onMouseEnter={() => setActivePillar(item.id)}
                onMouseLeave={() => setActivePillar(null)}
              >
                <TiltCard
                  tiltMax={6}
                  glareColor="rgba(22, 163, 74, 0.05)"
                  className={`product-card h-full rounded-2xl p-7 flex flex-col justify-between interactive-target transition-all duration-300 ${
                    isHovered 
                      ? 'border-emerald-300 shadow-card-hover scale-[1.02]' 
                      : isQuieted 
                      ? 'opacity-65' 
                      : ''
                  }`}
                >
                  <div>
                    {/* System Code Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-primary text-xl">
                        <Icon />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-slate-400 border border-slate-200 px-2 py-0.5 rounded">
                        {item.code}
                      </span>
                    </div>

                    {/* Card Title */}
                    <h3 className="font-grotesk text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="font-sans text-sm text-slate-600 leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  {/* Highlights tags */}
                  <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2">
                    {item.highlights.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded bg-slate-100 text-[11px] font-sans font-semibold text-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
