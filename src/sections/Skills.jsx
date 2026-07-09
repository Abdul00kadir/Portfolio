import { motion } from 'framer-motion';
import { SKILLS } from '../constants';
import TiltCard from '../components/TiltCard';

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="skills" className="py-24 px-6 lg:px-12 relative flex items-center justify-center">
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
            My <span className="text-secondary glow-text-cyan">Skills</span>
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
        >
          {SKILLS.map((skill) => {
            const Icon = skill.icon;
            
            // Generate a subtle glow shadow based on the skill's color
            const skillGlowStyle = {
              '--skill-color': skill.color,
            };

            return (
              <motion.div
                key={skill.name}
                variants={cardVariants}
                className="h-full"
              >
                <TiltCard
                  tiltMax={15}
                  glareColor={`${skill.color}25`} // Add 15% opacity to color for glare
                  className="glass-card h-full rounded-[24px] p-6 border-white/5 flex flex-col justify-between items-center transition-all duration-300 hover:border-white/10 select-none group interactive-target"
                  style={skillGlowStyle}
                >
                  {/* Skill Glow Ring */}
                  <div className="relative mb-6 w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5 transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-neon-emerald/10">
                    <Icon 
                      style={{ color: skill.color }} 
                      className="text-3xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="font-grotesk font-bold text-sm text-slate-200 mb-4 tracking-wide group-hover:text-white transition-colors">
                    {skill.name}
                  </h3>

                  {/* Progress Indicator Column */}
                  <div className="w-full flex flex-col items-center">
                    <div className="flex justify-between w-full text-[10px] text-slate-500 font-semibold tracking-wider uppercase mb-1.5">
                      <span>Proficiency</span>
                      <span className="text-slate-400">{skill.level}%</span>
                    </div>
                    {/* Progress Bar Track */}
                    <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.1 }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: skill.color }}
                      />
                    </div>
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
