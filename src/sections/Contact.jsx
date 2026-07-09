import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPaperPlane, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
// 1. EmailJS ko import kiya
import emailjs from '@emailjs/browser'; 
import { SOCIAL_LINKS } from '../constants';
import TiltCard from '../components/TiltCard';
import Magnetic from '../components/Magnetic';

export default function Contact() {
  // EmailJS ke templates se match karne ke liye fields ke naam from_name aur from_email rakhe hain
  const [formData, setFormData] = useState({ from_name: '', from_email: '', message: '' });
  const [focused, setFocused] = useState({ from_name: false, from_email: false, message: false });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleFocus = (field) => setFocused((prev) => ({ ...prev, [field]: true }));
  const handleBlur = (field) => setFocused((prev) => ({ ...prev, [field]: false }));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  // Form Validation updated for new field names
  const validateForm = () => {
    const newErrors = {};
    if (!formData.from_name.trim()) newErrors.from_name = 'Name is required';
    if (!formData.from_email.trim()) {
      newErrors.from_email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.from_email)) {
      newErrors.from_email = 'Invalid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // 2. Real EmailJS Integration yahan laga diya
    const serviceID = 'service_bsb8p1p'; 
    const templateID = 'template_tuz003d'; 
    const publicKey = 'GF7VBnLhhczMRMlH2'; 

    emailjs.send(serviceID, templateID, formData, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setIsSubmitting(false);
        setSubmitSuccess(true);
        // Form clear kar diya
        setFormData({ from_name: '', from_email: '', message: '' });
        setTimeout(() => setSubmitSuccess(false), 4000);
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setIsSubmitting(false);
        alert('Oops! Something went wrong. Please try again.');
      });
  };

  return (
    <section id="contact" className="py-24 px-6 lg:px-12 relative flex items-center justify-center">
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
            Let's <span className="text-primary glow-text-emerald">Connect</span>
          </h2>
        </motion.div>

        {/* Form & Map Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch text-left">

          {/* Left Column: Coordinates & Blueprint Radar Map */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">

            {/* Contact details Card */}
            <TiltCard
              tiltMax={6}
              glareColor="rgba(34, 197, 94, 0.06)"
              className="glass-card rounded-[24px] p-6 md:p-8 border-white/5 space-y-6 interactive-target"
            >
              <h3 className="font-grotesk text-lg font-bold text-white mb-2">Contact Info</h3>

              <div className="space-y-4">
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors">
                    <FaEnvelope />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Email Me</p>
                    <a href="mailto:788abdulkadir788@gmail.com" className="text-sm font-semibold text-slate-200 hover:text-primary transition-colors">
                      788abdulkadir788@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Call Me</p>
                    <a href="tel:+918433041563" className="text-sm font-semibold text-slate-200 hover:text-primary transition-colors">
                      +91 8433041563
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Base Location</p>
                    <p className="text-sm font-semibold text-slate-200">Moradabad, India</p>
                  </div>
                </div>
              </div>

              {/* Social row */}
              <div className="pt-4 border-t border-white/5 flex gap-4">
                {SOCIAL_LINKS.map((soc) => {
                  const Icon = soc.icon;
                  return (
                    <Magnetic key={soc.name} range={20} strength={0.3}>
                      <a
                        href={soc.url}
                        target="_blank"
                        rel="noreferrer"
                        className="w-10 h-10 rounded-xl border border-white/5 bg-white/5 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all duration-300"
                        aria-label={soc.name}
                      >
                        <Icon />
                      </a>
                    </Magnetic>
                  );
                })}
              </div>
            </TiltCard>

            {/* Radar Sci-fi Blueprint Mock Map Card */}
            <div className="glass-card rounded-[24px] p-6 border-white/5 relative h-64 overflow-hidden bg-darkBg flex items-center justify-center select-none group">
              <div className="absolute inset-0 bg-grid-overlay opacity-25" />
              <div className="absolute w-44 h-44 rounded-full border border-primary/10 animate-ping opacity-60" />
              <div className="absolute w-40 h-40 rounded-full border border-secondary/15" />
              <div className="absolute w-24 h-24 rounded-full border border-dashed border-primary/20" />

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
                className="absolute w-full h-[1px] bg-gradient-to-r from-primary/30 to-transparent origin-center z-10"
              />

              <div className="absolute flex flex-col items-center gap-1.5 z-20">
                <span className="relative flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-secondary border border-darkBg flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-white shadow-neon-cyan" />
                  </span>
                </span>
                <span className="font-grotesk text-[10px] font-bold text-slate-300 bg-darkBg border border-white/10 px-2 py-0.5 rounded-full uppercase tracking-wider">
                  Moradabad, India
                </span>
              </div>

              <div className="absolute bottom-4 left-6 font-mono text-[9px] text-slate-600">
                LAT: 28.8386&deg; N / LON: 78.7768&deg; E
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <TiltCard
              tiltMax={4}
              glareColor="rgba(6, 182, 212, 0.05)"
              className="glass-card rounded-[24px] p-8 border-white/5 relative h-full flex flex-col justify-between interactive-target"
            >
              <div>
                <h3 className="font-grotesk text-lg font-bold text-white mb-8">Drop A Message</h3>

                <form onSubmit={handleSubmit} className="space-y-8">
                  
                  {/* Name field (Modified for from_name) */}
                  <div className="relative">
                    <input
                      type="text"
                      id="from_name"
                      name="from_name"
                      value={formData.from_name}
                      onFocus={() => handleFocus('from_name')}
                      onBlur={() => handleBlur('from_name')}
                      onChange={handleChange}
                      className={`w-full bg-white/5 border rounded-xl px-5 py-4 text-sm text-slate-200 focus:outline-none transition-all duration-300 ${errors.from_name
                          ? 'border-red-500/50 focus:border-red-500'
                          : 'border-white/10 focus:border-primary focus:shadow-neon-emerald/20'
                        }`}
                    />
                    <label
                      htmlFor="from_name"
                      className={`absolute left-5 top-4 text-slate-500 text-sm transition-all duration-300 pointer-events-none ${focused.from_name || formData.from_name
                          ? '-translate-y-[24px] translate-x-[-12px] text-[10px] text-primary font-semibold uppercase tracking-wider bg-[#05070A]/95 px-2'
                          : ''
                        }`}
                    >
                      Your Name
                    </label>
                    {errors.from_name && (
                      <span className="text-[10px] text-red-400 font-semibold uppercase tracking-wide absolute bottom-[-16px] left-2">
                        {errors.from_name}
                      </span>
                    )}
                  </div>

                  {/* Email field (Modified for from_email) */}
                  <div className="relative">
                    <input
                      type="email"
                      id="from_email"
                      name="from_email"
                      value={formData.from_email}
                      onFocus={() => handleFocus('from_email')}
                      onBlur={() => handleBlur('from_email')}
                      onChange={handleChange}
                      className={`w-full bg-white/5 border rounded-xl px-5 py-4 text-sm text-slate-200 focus:outline-none transition-all duration-300 ${errors.from_email
                          ? 'border-red-500/50 focus:border-red-500'
                          : 'border-white/10 focus:border-primary focus:shadow-neon-emerald/20'
                        }`}
                    />
                    <label
                      htmlFor="from_email"
                      className={`absolute left-5 top-4 text-slate-500 text-sm transition-all duration-300 pointer-events-none ${focused.from_email || formData.from_email
                          ? '-translate-y-[24px] translate-x-[-12px] text-[10px] text-primary font-semibold uppercase tracking-wider bg-[#05070A]/95 px-2'
                          : ''
                        }`}
                    >
                      Your Email
                    </label>
                    {errors.from_email && (
                      <span className="text-[10px] text-red-400 font-semibold uppercase tracking-wide absolute bottom-[-16px] left-2">
                        {errors.from_email}
                      </span>
                    )}
                  </div>

                  {/* Message field */}
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onFocus={() => handleFocus('message')}
                      onBlur={() => handleBlur('message')}
                      onChange={handleChange}
                      className={`w-full bg-white/5 border rounded-xl px-5 py-4 text-sm text-slate-200 focus:outline-none transition-all duration-300 resize-none ${errors.message
                          ? 'border-red-500/50 focus:border-red-500'
                          : 'border-white/10 focus:border-primary focus:shadow-neon-emerald/20'
                        }`}
                    />
                    <label
                      htmlFor="message"
                      className={`absolute left-5 top-4 text-slate-500 text-sm transition-all duration-300 pointer-events-none ${focused.message || formData.message
                          ? '-translate-y-[24px] translate-x-[-12px] text-[10px] text-primary font-semibold uppercase tracking-wider bg-[#05070A]/95 px-2'
                          : ''
                        }`}
                    >
                      Your Message
                    </label>
                    {errors.message && (
                      <span className="text-[10px] text-red-400 font-semibold uppercase tracking-wide absolute bottom-[-16px] left-2">
                        {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Submit button */}
                  <div className="pt-2 flex justify-start">
                    <Magnetic range={30} strength={0.25}>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-primary text-darkBg font-grotesk font-bold text-sm tracking-wider uppercase transition-all duration-300 hover:shadow-neon-emerald/40 disabled:opacity-50 group cursor-pointer"
                      >
                        {isSubmitting ? (
                          <>
                            Sending...
                            <div className="w-4 h-4 rounded-full border border-darkBg border-t-transparent animate-spin" />
                          </>
                        ) : (
                          <>
                            Send Message
                            <FaPaperPlane className="text-xs transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </>
                        )}
                      </button>
                    </Magnetic>
                  </div>
                </form>
              </div>

              {/* Success alert popup */}
              <AnimatePresence>
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute inset-x-8 bottom-8 p-4 rounded-xl border border-primary/20 bg-primary/10 flex items-center justify-center text-center text-sm font-semibold text-primary shadow-neon-emerald"
                  >
                    Thank you! Your message was sent successfully.
                  </motion.div>
                )}
              </AnimatePresence>
            </TiltCard>
          </div>

        </div>

      </div>
    </section>
  );
}