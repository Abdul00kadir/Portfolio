import { motion } from 'framer-motion';
import { FaUser, FaMapMarkerAlt, FaEnvelope, FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import TiltCard from '../components/TiltCard';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section id="about" className="py-24 px-6 lg:px-12 relative flex justify-center bg-slate-50/60 border-y border-slate-200/60">
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
              HUMAN STORY &bull; STATE 06 / 06
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-grotesk text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4 uppercase"
          >
            ABOUT ME
          </motion.h2>
        </div>

        {/* Two Column Narrative Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 text-left items-stretch"
        >

          {/* Left Column: Profile Card */}
          <motion.div variants={itemVariants} className="lg:col-span-4 h-full">
            <TiltCard
              tiltMax={5}
              glareColor="rgba(22, 163, 74, 0.05)"
              className="product-card rounded-2xl p-7 h-full flex flex-col justify-between interactive-target"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <h3 className="font-grotesk text-xl font-bold text-slate-900">Developer Profile</h3>
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-primary flex items-center justify-center text-base">
                    <FaUser />
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 text-sm">
                      <FaGraduationCap />
                    </div>
                    <div>
                      <p className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider font-grotesk">Education</p>
                      <p className="text-sm font-semibold text-slate-900">BCA — IFTM University</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 text-sm">
                      <FaMapMarkerAlt />
                    </div>
                    <div>
                      <p className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider font-grotesk">Location</p>
                      <p className="text-sm font-semibold text-slate-900">Moradabad, India</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 text-sm">
                      <FaEnvelope />
                    </div>
                    <div>
                      <p className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider font-grotesk">Email</p>
                      <a href="mailto:788abdulkadir788@gmail.com" className="text-sm font-semibold text-slate-900 hover:text-primary transition-colors">
                        788abdulkadir788@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 text-sm">
                      <FaBriefcase />
                    </div>
                    <div>
                      <p className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider font-grotesk">Focus Area</p>
                      <p className="text-sm font-semibold text-primary">Software & Business Systems</p>
                    </div>
                  </div>
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* Right Column: Editorial Narrative */}
          <motion.div variants={itemVariants} className="lg:col-span-8">
            <TiltCard
              tiltMax={3}
              glareColor="rgba(22, 163, 74, 0.04)"
              className="product-card rounded-2xl p-8 md:p-10 h-full flex flex-col justify-between interactive-target"
            >
              <div className="space-y-6">
                <h3 className="font-grotesk text-2xl sm:text-3xl font-bold text-darkCharcoal mb-2 leading-snug">
                  I started by building web interfaces. Then I became interested in the software systems behind them.
                </h3>

                <p className="font-sans text-slate-600 text-base leading-relaxed">
                  I am a Software Developer with a degree in Computer Applications (BCA) from IFTM University. My journey evolved from mastering frontend interfaces into building complex business applications, custom ERP workflows, catalog platforms, and scalable digital solutions.
                </p>

                <p className="font-sans text-slate-600 text-base leading-relaxed">
                  I thrive on solving real-world operational problems through software engineering. Whether architecting dynamic catalog structures for commercial platforms or building data-driven application tools, my objective is always the same: delivering clean, maintainable software with exceptional usability.
                </p>
              </div>

              {/* Core Philosophy Pills */}
              <div className="pt-8 mt-6 border-t border-slate-100 flex flex-wrap gap-3">
                <span className="px-3.5 py-1.5 rounded-lg bg-slate-100 text-xs font-grotesk font-bold text-slate-700 uppercase tracking-wider">
                  Clean Architecture
                </span>
                <span className="px-3.5 py-1.5 rounded-lg bg-slate-100 text-xs font-grotesk font-bold text-slate-700 uppercase tracking-wider">
                  Business Workflows
                </span>
                <span className="px-3.5 py-1.5 rounded-lg bg-slate-100 text-xs font-grotesk font-bold text-slate-700 uppercase tracking-wider">
                  Responsive Systems
                </span>
                <span className="px-3.5 py-1.5 rounded-lg bg-slate-100 text-xs font-grotesk font-bold text-slate-700 uppercase tracking-wider">
                  Real-World Usability
                </span>
              </div>
            </TiltCard>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
