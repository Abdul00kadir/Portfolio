import { motion } from 'framer-motion';
import { FaRegCalendarAlt, FaRegClock, FaArrowRight } from 'react-icons/fa';
import { BLOGS } from '../constants';
import TiltCard from '../components/TiltCard';

export default function Blog() {
  // const containerVariants = {
  //   hidden: { opacity: 0 },
  //   visible: {
  //     opacity: 1,
  //     transition: { staggerChildren: 0.15 }
  //   }
  // };

  // const itemVariants = {
  //   hidden: { y: 30, opacity: 0 },
  //   visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } }
  // };

  // return (
  //   <section id="blog" className="py-24 px-6 lg:px-12 relative flex items-center justify-center">
  //     <div className="max-w-7xl w-full z-10">
        
  //       {/* Section Header */}
  //       <motion.div
  //         initial={{ opacity: 0, y: 20 }}
  //         whileInView={{ opacity: 1, y: 0 }}
  //         viewport={{ once: true, margin: '-100px' }}
  //         className="flex items-center gap-3 mb-16 justify-center lg:justify-start"
  //       >
  //         <span className="w-10 h-[1px] bg-secondary" />
  //         <h2 className="font-grotesk text-3xl md:text-4xl font-bold tracking-tight text-white">
  //           Latest <span className="text-secondary glow-text-cyan">Blog Posts</span>
  //         </h2>
  //       </motion.div>

  //       {/* Blog Post Cards Grid */}
  //       <motion.div
  //         variants={containerVariants}
  //         initial="hidden"
  //         whileInView="visible"
  //         viewport={{ once: true, margin: '-100px' }}
  //         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left"
  //       >
  //         {BLOGS.map((blog) => (
  //           <motion.div key={blog.slug} variants={itemVariants} className="h-full">
  //             <TiltCard
  //               tiltMax={8}
  //               glareColor="rgba(6, 182, 212, 0.1)"
  //               className="glass-card h-full rounded-[24px] border-white/5 overflow-hidden flex flex-col justify-between hover:border-white/10 hover:shadow-neon-cyan/5 transition-all duration-300 group interactive-target"
  //             >
  //               <div>
  //                 {/* Thumbnail Image Wrapper */}
  //                 <div className="relative h-52 overflow-hidden bg-slate-900 border-b border-white/5">
  //                   <img
  //                     src={blog.image}
  //                     alt={blog.title}
  //                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
  //                     loading="lazy"
  //                   />
  //                   {/* Shadow visual fade overlay */}
  //                   <div className="absolute inset-0 bg-gradient-to-t from-darkBg via-transparent to-transparent opacity-80" />
  //                 </div>

  //                 {/* Text details */}
  //                 <div className="p-6">
  //                   {/* Meta row details */}
  //                   <div className="flex items-center gap-4 text-xs text-slate-500 font-semibold tracking-wide uppercase mb-3">
  //                     <span className="flex items-center gap-1.5">
  //                       <FaRegCalendarAlt className="text-slate-600" /> {blog.date}
  //                     </span>
  //                     <span className="flex items-center gap-1.5">
  //                       <FaRegClock className="text-slate-600" /> {blog.readTime}
  //                     </span>
  //                   </div>

  //                   {/* Title */}
  //                   <h3 className="font-grotesk text-lg font-bold text-white mb-3 group-hover:text-primary transition-colors leading-snug">
  //                     <span className="relative inline-block pb-1">
  //                       {blog.title}
  //                       <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-secondary group-hover:w-full transition-all duration-300 rounded-full" />
  //                     </span>
  //                   </h3>

  //                   {/* Excerpt */}
  //                   <p className="font-sans text-sm text-slate-400 leading-relaxed">
  //                     {blog.excerpt}
  //                   </p>
  //                 </div>
  //               </div>

  //               {/* Read article CTA */}
  //               <div className="p-6 pt-0 mt-auto">
  //                 <a
  //                   href={`#blog/${blog.slug}`}
  //                   className="inline-flex items-center gap-2 text-xs font-grotesk font-bold uppercase tracking-wider text-slate-300 group-hover:text-primary transition-colors cursor-pointer"
  //                 >
  //                   Read Article 
  //                   <FaArrowRight className="text-[10px] transition-transform duration-300 group-hover:translate-x-1" />
  //                 </a>
  //               </div>
  //             </TiltCard>
  //           </motion.div>
  //         ))}
  //       </motion.div>

  //     </div>
  //   </section>
  // );
}
