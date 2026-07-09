import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';
import { EXPERIENCE } from '../constants';
import TiltCard from '../components/TiltCard';

// function TimelineItem({ item, index }) {
  // Check index to alternate left/right positions on desktop
//   const isLeft = index % 2 === 0;

//   return (
//     <div className={`relative flex flex-col md:flex-row items-start md:items-center justify-between mb-16 w-full ${
//       isLeft ? 'md:flex-row-reverse' : ''
//     }`}>
//       {/* Empty spacer block for desktop symmetry */}
//       <div className="hidden md:block w-[45%]" />

//       {/* Pulsating Glow Timeline Node */}
//       <div className="absolute left-4 md:left-1/2 top-1.5 md:top-auto md:bottom-auto w-10 h-10 rounded-full bg-darkBg border border-primary/30 flex items-center justify-center -translate-x-[12px] md:-translate-x-1/2 z-20 shadow-neon-emerald/20">
//         <motion.div 
//           initial={{ scale: 0.8 }}
//           whileInView={{ scale: [1, 1.2, 1] }}
//           viewport={{ once: false, amount: 0.8 }}
//           transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
//           className="w-3.5 h-3.5 rounded-full bg-primary shadow-neon-emerald" 
//         />
//       </div>

//       {/* Card Content block */}
//       <motion.div
//         initial={{ opacity: 0, x: isLeft ? -50 : 50, y: 20 }}
//         whileInView={{ opacity: 1, x: 0, y: 0 }}
//         viewport={{ once: true, margin: '-100px' }}
//         transition={{ duration: 0.6, ease: 'easeOut' }}
//         className="w-full md:w-[45%] pl-12 md:pl-0 text-left z-10"
//       >
//         <TiltCard 
//           tiltMax={6}
//           glareColor="rgba(34, 197, 94, 0.08)"
//           className="glass-card rounded-[24px] p-6 border-white/5 hover:border-primary/20 transition-all duration-300 shadow-neon-emerald/0 hover:shadow-neon-emerald/5 interactive-target"
//         >
//           {/* Metadata Row */}
//           <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
//             <span className="px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-xs font-grotesk font-bold text-primary tracking-wide">
//               {item.year}
//             </span>
//             <span className="text-xs text-slate-500 font-semibold tracking-wider uppercase flex items-center gap-1.5">
//               <FaBriefcase className="text-slate-600" /> {item.company}
//             </span>
//           </div>

//           {/* Title */}
//           <h3 className="font-grotesk text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">
//             {item.role}
//           </h3>

//           {/* Description */}
//           <p className="font-sans text-sm text-slate-400 leading-relaxed">
//             {item.description}
//           </p>
//         </TiltCard>
//       </motion.div>
//     </div>
//   );
// }

export default function Experience() {
//   const containerRef = useRef(null);

//   // Monitor scroll positioning of the timeline wrapper
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ['start center', 'end center'],
//   });

//   // Smooth scroll line growth with spring physics
//   const scaleY = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 20,
//     restDelta: 0.001,
//   });

//   return (
//     <section 
//       id="experience" 
//       ref={containerRef}
//       className="py-24 px-6 lg:px-12 relative flex items-center justify-center overflow-hidden"
//     >
//       <div className="max-w-7xl w-full z-10">
        
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: '-100px' }}
//           className="flex items-center gap-3 mb-20 justify-center lg:justify-start"
//         >
//           <span className="w-10 h-[1px] bg-primary" />
//           <h2 className="font-grotesk text-3xl md:text-4xl font-bold tracking-tight text-white">
//             Work <span className="text-primary glow-text-emerald">Experience</span>
//           </h2>
//         </motion.div>

//         {/* Timeline Container */}
//         <div className="relative w-full flex flex-col items-center">
          
//           {/* Background Track Line */}
//           <div className="absolute left-[16px] md:left-1/2 top-2 bottom-6 w-[2px] bg-white/5 -translate-x-[1px] md:-translate-x-1/2" />

//           {/* Dynamic Scroll-Flipped Progress Indicator Line */}
//           <motion.div
//             style={{ scaleY }}
//             className="absolute left-[16px] md:left-1/2 top-2 bottom-6 w-[2px] bg-gradient-to-b from-primary via-secondary to-primary -translate-x-[1px] md:-translate-x-1/2 origin-top z-10"
//           />

//           {/* List items */}
//           <div className="w-full">
//             {EXPERIENCE.map((exp, index) => (
//               <TimelineItem key={exp.role + exp.company} item={exp} index={index} />
//             ))}
//           </div>
//         </div>

//       </div>
//     </section>
//   );
}
