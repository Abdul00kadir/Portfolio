import { motion } from 'framer-motion';
import { FaBriefcase, FaCheckCircle, FaLongArrowAltRight } from 'react-icons/fa';
import { EXPERIENCE } from '../constants';
import TiltCard from '../components/TiltCard';

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <section id="experience" className="py-24 px-6 lg:px-12 relative flex justify-center bg-slate-50/60 border-y border-slate-200/60">
      <div className="max-w-7xl w-full z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-2xl mb-12 text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2.5 mb-3"
          >
            <span className="w-8 h-[2px] bg-primary rounded-full" />
            <span className="text-xs font-grotesk font-bold uppercase tracking-wider text-primary">
              Career Journey
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-grotesk text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4"
          >
            Professional Experience
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-slate-600 text-base leading-relaxed"
          >
            My engineering progression building real-world business software, catalog architectures, and enterprise solutions.
          </motion.p>
        </div>

        {/* Visual Career Progression Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-wrap items-center justify-around gap-4 text-center select-none"
        >
          <div className="flex flex-col items-center">
            <span className="text-[10px] font-mono uppercase text-slate-400 font-semibold tracking-widest">Stage 01</span>
            <span className="font-grotesk font-extrabold text-sm text-slate-800 uppercase tracking-wider">WEB DEVELOPMENT</span>
          </div>

          <FaLongArrowAltRight className="text-slate-300 hidden sm:block text-base" />

          <div className="flex flex-col items-center">
            <span className="text-[10px] font-mono uppercase text-slate-400 font-semibold tracking-widest">Stage 02</span>
            <span className="font-grotesk font-extrabold text-sm text-emerald-700 uppercase tracking-wider">SOFTWARE DEVELOPMENT</span>
          </div>

          <FaLongArrowAltRight className="text-slate-300 hidden sm:block text-base" />

          <div className="flex flex-col items-center">
            <span className="text-[10px] font-mono uppercase text-slate-400 font-semibold tracking-widest">Stage 03</span>
            <span className="font-grotesk font-extrabold text-sm text-darkCharcoal uppercase tracking-wider">BUSINESS SYSTEMS</span>
          </div>
        </motion.div>

        {/* Vertical Timeline Track */}
        <div className="relative max-w-4xl mx-auto text-left">
          <div className="absolute left-4 md:left-8 top-3 bottom-8 w-[2px] bg-slate-200" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="space-y-10"
          >
            {EXPERIENCE.map((exp) => (
              <motion.div
                key={exp.role + exp.period}
                variants={itemVariants}
                className="relative pl-12 md:pl-20 group"
              >
                {/* Node Icon */}
                <div className="absolute left-2 md:left-6 top-1.5 w-6 h-6 rounded-full bg-white border-2 border-primary flex items-center justify-center -translate-x-1/2 z-10 shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>

                {/* Card Container */}
                <TiltCard
                  tiltMax={4}
                  glareColor="rgba(22, 163, 74, 0.05)"
                  className="product-card rounded-2xl p-6 md:p-8 interactive-target"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <span className="px-3 py-1 rounded-md bg-emerald-50 border border-emerald-100 text-xs font-grotesk font-bold text-primary tracking-wide">
                      {exp.period}
                    </span>
                    <span className="text-xs text-slate-500 font-semibold tracking-wider uppercase flex items-center gap-1.5 font-grotesk">
                      <FaBriefcase className="text-slate-400" /> {exp.company}
                    </span>
                  </div>

                  {/* Role Title */}
                  <h3 className="font-grotesk text-2xl font-bold text-slate-900 mb-1 group-hover:text-primary transition-colors">
                    {exp.role}
                  </h3>

                  <p className="text-[11px] font-mono text-emerald-700 font-bold uppercase tracking-wider mb-4">
                    Focus &bull; {exp.stage}
                  </p>

                  {/* Description */}
                  <p className="font-sans text-sm text-slate-600 leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  {/* Bullet Highlights */}
                  {exp.highlights && exp.highlights.length > 0 && (
                    <div className="pt-4 border-t border-slate-100 space-y-2">
                      {exp.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 font-sans">
                          <FaCheckCircle className="text-primary text-xs mt-0.5 shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
