import { motion } from 'framer-motion';
import { FaGraduationCap, FaAward } from 'react-icons/fa';
import { EDUCATION, CERTIFICATIONS } from '../constants';
import TiltCard from '../components/TiltCard';

export default function EducationCertifications() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } },
  };

  return (
    <section id="education" className="py-24 px-6 lg:px-12 relative flex justify-center">
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
              Academic & Qualifications
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-grotesk text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4"
          >
            Education & Certifications
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 text-left items-start">
          
          {/* Left Side: Education List */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-grotesk text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <FaGraduationCap className="text-primary" /> Academic Degree
            </h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {EDUCATION.map((edu) => (
                <motion.div key={edu.degree + edu.year} variants={itemVariants}>
                  <TiltCard
                    tiltMax={4}
                    glareColor="rgba(22, 163, 74, 0.04)"
                    className="product-card rounded-xl p-6 interactive-target"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="px-2.5 py-1 rounded bg-slate-100 text-[11px] font-grotesk font-bold text-slate-700">
                        {edu.year}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">
                        {edu.location}
                      </span>
                    </div>

                    <h4 className="font-grotesk text-lg font-bold text-slate-900 mb-1">
                      {edu.degree}
                    </h4>

                    <p className="font-sans text-xs font-semibold text-primary mb-3">
                      {edu.institution}
                    </p>

                    {edu.description && (
                      <p className="font-sans text-xs text-slate-600 leading-relaxed">
                        {edu.description}
                      </p>
                    )}
                  </TiltCard>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Side: Certifications Grid */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-grotesk text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <FaAward className="text-primary" /> Certifications
            </h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4"
            >
              {CERTIFICATIONS.map((cert) => (
                <motion.div key={cert.title + cert.issuer} variants={itemVariants}>
                  <TiltCard
                    tiltMax={4}
                    glareColor="rgba(22, 163, 74, 0.04)"
                    className="product-card rounded-xl p-5 flex items-start gap-4 interactive-target"
                  >
                    <div className="w-10 h-10 rounded-lg bg-emerald-50 text-primary flex items-center justify-center text-base shrink-0 mt-0.5">
                      <FaAward />
                    </div>
                    <div>
                      <span className="text-[10px] font-grotesk font-bold uppercase tracking-wider text-slate-400 block mb-1">
                        {cert.issuer} &bull; {cert.year}
                      </span>
                      <h4 className="font-grotesk text-sm font-bold text-slate-900 leading-snug mb-1">
                        {cert.title}
                      </h4>
                      <p className="font-sans text-xs text-slate-500">
                        {cert.subtitle}
                      </p>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
