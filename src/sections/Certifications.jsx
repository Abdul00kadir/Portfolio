import { motion } from 'framer-motion';
import { CERTIFICATIONS } from '../constants';
import TiltCard from '../components/TiltCard';

export default function Certifications() {
  // const containerVariants = {
  //   hidden: { opacity: 0 },
  //   visible: {
  //     opacity: 1,
  //     transition: { staggerChildren: 0.1 }
  //   }
  // };

  // const itemVariants = {
  //   hidden: { y: 30, opacity: 0 },
  //   visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } }
  // };

  // return (
  //   <section id="certifications" className="py-24 px-6 lg:px-12 relative flex items-center justify-center">
  //     <div className="max-w-7xl w-full z-10">
        
  //       {/* Section Header */}
  //       <motion.div
  //         initial={{ opacity: 0, y: 20 }}
  //         whileInView={{ opacity: 1, y: 0 }}
  //         viewport={{ once: true, margin: '-100px' }}
  //         className="flex items-center gap-3 mb-16 justify-center lg:justify-start"
  //       >
  //         <span className="w-10 h-[1px] bg-primary" />
  //         <h2 className="font-grotesk text-3xl md:text-4xl font-bold tracking-tight text-white">
  //           Licenses & <span className="text-primary glow-text-emerald">Certifications</span>
  //         </h2>
  //       </motion.div>

  //       {/* Responsive Grid */}
  //       <motion.div
  //         variants={containerVariants}
  //         initial="hidden"
  //         whileInView="visible"
  //         viewport={{ once: true, margin: '-100px' }}
  //         className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left"
  //       >
  //         {CERTIFICATIONS.map((cert) => {
  //           const Icon = cert.icon;

  //           return (
  //             <motion.div key={cert.title + cert.issuer} variants={itemVariants} className="h-full">
  //               <TiltCard 
  //                 tiltMax={10}
  //                 glareColor="rgba(34, 197, 94, 0.12)"
  //                 className="glass-card h-full rounded-[24px] p-6 border-white/5 flex flex-col justify-between hover:border-primary/20 hover:shadow-neon-emerald/5 transition-all duration-300 group interactive-target"
  //               >
  //                 <div>
  //                   {/* Icon with glowing backdrop */}
  //                   <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-primary/10 to-secondary/10 flex items-center justify-center border border-white/5 mb-6 text-primary group-hover:text-secondary group-hover:scale-105 transition-all duration-300">
  //                     <Icon className="text-xl" />
  //                   </div>

  //                   {/* Issuer details */}
  //                   <span className="text-[10px] font-grotesk font-extrabold uppercase tracking-widest text-slate-500 block mb-2">
  //                     {cert.issuer} &bull; {cert.year}
  //                   </span>

  //                   {/* Certification Title */}
  //                   <h3 className="font-grotesk text-lg font-bold text-white mb-2 leading-tight group-hover:text-primary transition-colors">
  //                     {cert.title}
  //                   </h3>
  //                 </div>

  //                 {/* Subtitle / Topic details */}
  //                 <p className="font-sans text-xs text-slate-400 mt-4 border-t border-white/5 pt-4">
  //                   {cert.subtitle}
  //                 </p>
  //               </TiltCard>
  //             </motion.div>
  //           );
  //         })}
  //       </motion.div>

  //     </div>
  //   </section>
  // );
}
