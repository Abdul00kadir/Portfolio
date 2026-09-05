import { useState } from 'react';
import { motion } from 'framer-motion';
import { ENGINEERING_STACK } from '../constants';
import TiltCard from '../components/TiltCard';

const ECOSYSTEM_MAP = {
  'React.js': ['JavaScript', 'Tailwind CSS', 'Next.js', 'Framer Motion'],
  'Next.js': ['React.js', 'JavaScript', 'Node.js', 'Vercel'],
  'Node.js': ['Express.js', 'MongoDB', 'REST APIs', 'JavaScript'],
  'Express.js': ['Node.js', 'MongoDB', 'REST APIs'],
  'MongoDB': ['Node.js', 'Express.js', 'REST APIs'],
  'Tailwind CSS': ['React.js', 'HTML5', 'CSS3', 'Next.js'],
  'Framer Motion': ['React.js', 'GSAP', 'Lenis Scroll'],
  'Git': ['GitHub', 'VS Code', 'Vercel'],
  'GitHub': ['Git', 'Vercel', 'Netlify'],
};

export default function Engineering() {
  const [activeSkill, setActiveSkill] = useState(null);

  const isHighlighted = (skillName) => {
    if (!activeSkill) return false;
    if (activeSkill === skillName) return true;
    const related = ECOSYSTEM_MAP[activeSkill];
    return related && related.includes(skillName);
  };

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
    <section id="engineering" className="py-24 px-6 lg:px-12 relative flex justify-center">
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
              SYSTEM ENGINE &bull; STATE 05 / 06
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-grotesk text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4 uppercase"
          >
            ENGINEERING TOOLKIT
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-slate-600 text-base leading-relaxed"
          >
            The software engine powering this architecture. Hover over any technology node to highlight connected ecosystem relationships.
          </motion.p>
        </div>

        {/* Categorized Engineering Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left"
        >
          {ENGINEERING_STACK.map((group) => (
            <motion.div key={group.category} variants={itemVariants} className="h-full">
              <TiltCard
                tiltMax={4}
                glareColor="rgba(22, 163, 74, 0.04)"
                className="product-card h-full rounded-2xl p-7 flex flex-col justify-between interactive-target"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-grotesk text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                      {group.category}
                    </h3>
                  </div>

                  <p className="font-sans text-xs text-slate-500 mb-6">
                    {group.description}
                  </p>

                  {/* Skill Pills Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {group.skills.map((skill) => {
                      const Icon = skill.icon;
                      const highlighted = isHighlighted(skill.name);
                      const isPrimaryHover = activeSkill === skill.name;

                      return (
                        <div
                          key={skill.name}
                          onMouseEnter={() => setActiveSkill(skill.name)}
                          onMouseLeave={() => setActiveSkill(null)}
                          className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl border transition-all duration-200 cursor-pointer select-none ${
                            isPrimaryHover
                              ? 'bg-emerald-100 border-emerald-400 text-emerald-900 shadow-sm scale-[1.03]'
                              : highlighted
                              ? 'bg-emerald-50/80 border-emerald-300 text-emerald-800'
                              : 'bg-slate-50 border-slate-200/70 text-slate-800 hover:border-emerald-200 hover:bg-emerald-50/40'
                          }`}
                        >
                          <Icon className={`text-base transition-colors shrink-0 ${
                            highlighted ? 'text-primary' : 'text-slate-600'
                          }`} />
                          <span className="font-sans text-xs font-semibold tracking-tight">
                            {skill.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
