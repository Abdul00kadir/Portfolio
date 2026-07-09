import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';
import { EDUCATION } from '../constants';
import TiltCard from '../components/TiltCard';

export default function Education() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { x: 30, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <section id="education" className="py-24 px-6 lg:px-12 relative flex items-center justify-center">
      <div className="max-w-7xl w-full z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="flex items-center gap-3 mb-20 justify-center lg:justify-start"
        >
          <span className="w-10 h-[1px] bg-secondary" />
          <h2 className="font-grotesk text-3xl md:text-4xl font-bold tracking-tight text-white">
            My <span className="text-secondary glow-text-cyan">Education</span>
          </h2>
        </motion.div>

        {/* Education Timeline (Left Aligned for visual variety) */}
        <div className="relative max-w-4xl mx-auto text-left">
          
          {/* Vertical Timeline Track Line */}
          <div className="absolute left-6 top-2 bottom-8 w-[2px] bg-gradient-to-b from-secondary via-primary to-transparent" />

          {/* Timeline Cards Container */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-12"
          >
            {EDUCATION.map((edu) => (
              <motion.div 
                key={edu.degree + edu.year}
                variants={itemVariants}
                className="relative pl-16 group"
              >
                {/* Glowing Node Dot Icon */}
                <div className="absolute left-3 top-1 w-8 h-8 rounded-xl bg-darkBg border border-secondary/30 flex items-center justify-center -translate-x-[15px] z-20 group-hover:border-secondary transition-all duration-300 shadow-neon-cyan/15 group-hover:shadow-neon-cyan/35">
                  <FaGraduationCap className="text-xs text-secondary group-hover:text-primary transition-colors duration-300" />
                </div>

                {/* Content Card Wrapper */}
                <TiltCard 
                  tiltMax={6}
                  glareColor="rgba(6, 182, 212, 0.08)"
                  className="glass-card rounded-[24px] p-6 md:p-8 border-white/5 group-hover:border-secondary/20 hover:shadow-neon-cyan/5 transition-all duration-300 interactive-target"
                >
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                    <span className="px-3 py-1 rounded-full border border-secondary/20 bg-secondary/10 text-xs font-grotesk font-bold text-secondary tracking-wide">
                      {edu.year}
                    </span>
                    <span className="text-xs text-slate-500 font-semibold tracking-wider uppercase">
                      {edu.location}
                    </span>
                  </div>

                  {/* Degree Name */}
                  <h3 className="font-grotesk text-xl font-bold text-white mb-1 group-hover:text-secondary transition-colors">
                    {edu.degree}
                  </h3>

                  {/* Institution Branded Subtitle */}
                  <h4 className="font-grotesk text-sm font-semibold text-primary mb-4">
                    {edu.institution}
                  </h4>

                  {/* Description body */}
                  <p className="font-sans text-sm text-slate-400 leading-relaxed">
                    {edu.description}
                  </p>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
