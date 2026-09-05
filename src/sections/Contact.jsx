import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPaperPlane, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { SOCIAL_LINKS } from '../constants';
import TiltCard from '../components/TiltCard';
import Magnetic from '../components/Magnetic';

export default function Contact() {
  const [formData, setFormData] = useState({ from_name: '', from_email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

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

    const serviceID = 'service_bsb8p1p';
    const templateID = 'template_tuz003d';
    const publicKey = 'GF7VBnLhhczMRMlH2';

    emailjs.send(serviceID, templateID, formData, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({ from_name: '', from_email: '', message: '' });
        setTimeout(() => setSubmitSuccess(false), 5000);
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setIsSubmitting(false);
        alert('Oops! Something went wrong. Please try again or send a direct email.');
      });
  };

  return (
    <section id="contact" className="py-24 px-6 lg:px-12 relative flex justify-center bg-slate-50/60 border-t border-slate-200/60">
      <div className="max-w-7xl w-full z-10">

        {/* Section Header — Final Scene Display Statement */}
        <div className="flex flex-col items-start max-w-3xl mb-16 text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2.5 mb-3"
          >
            <span className="w-8 h-[2px] bg-primary rounded-full" />
            <span className="text-xs font-grotesk font-bold uppercase tracking-wider text-primary">
              Initiate Project / Contact
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-grotesk text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter text-darkCharcoal uppercase leading-[1.02] mb-6"
          >
            LET'S BUILD<br />
            <span className="text-gradient-warm-green">SOMETHING USEFUL.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-slate-600 text-base sm:text-lg leading-relaxed"
          >
            Whether you have a software development project, business application requirement, or engineering collaboration in mind, I'm ready to talk.
          </motion.p>
        </div>

        {/* Form & Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 text-left items-stretch">

          {/* Left Column: Contact Info Card */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <TiltCard
              tiltMax={4}
              glareColor="rgba(22, 163, 74, 0.04)"
              className="product-card rounded-2xl p-8 h-full flex flex-col justify-between interactive-target"
            >
              <div>
                <h3 className="font-grotesk text-xl font-bold text-slate-900 mb-6">
                  Direct Channels
                </h3>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-primary flex items-center justify-center text-base shrink-0">
                      <FaEnvelope />
                    </div>
                    <div>
                      <p className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider font-grotesk">Email Direct</p>
                      <a href="mailto:788abdulkadir788@gmail.com" className="text-sm font-semibold text-slate-900 hover:text-primary transition-colors">
                        788abdulkadir788@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-primary flex items-center justify-center text-base shrink-0">
                      <FaPhoneAlt />
                    </div>
                    <div>
                      <p className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider font-grotesk">Phone / WhatsApp</p>
                      <a href="tel:+918433041563" className="text-sm font-semibold text-slate-900 hover:text-primary transition-colors">
                        +91 8433041563
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-primary flex items-center justify-center text-base shrink-0">
                      <FaMapMarkerAlt />
                    </div>
                    <div>
                      <p className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider font-grotesk">Location</p>
                      <p className="text-sm font-semibold text-slate-900">Moradabad, India</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social row */}
              <div className="pt-8 border-t border-slate-100 mt-8">
                <p className="text-xs font-grotesk font-bold uppercase tracking-wider text-slate-400 mb-4">Connect Online</p>
                <div className="flex gap-3">
                  {SOCIAL_LINKS.map((soc) => {
                    const Icon = soc.icon;
                    return (
                      <Magnetic key={soc.name} range={20} strength={0.2}>
                        <a
                          href={soc.url}
                          target="_blank"
                          rel="noreferrer"
                          className="w-10 h-10 rounded-lg border border-slate-200 bg-slate-50 flex items-center justify-center text-slate-600 hover:text-primary hover:border-primary hover:bg-emerald-50/50 transition-all"
                          aria-label={soc.name}
                        >
                          <Icon />
                        </a>
                      </Magnetic>
                    );
                  })}
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Right Column: Minimal Form */}
          <div className="lg:col-span-7">
            <TiltCard
              tiltMax={3}
              glareColor="rgba(22, 163, 74, 0.04)"
              className="product-card rounded-2xl p-8 md:p-10 relative h-full flex flex-col justify-between interactive-target"
            >
              <div>
                <h3 className="font-grotesk text-xl font-bold text-slate-900 mb-8">
                  Start A Conversation
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name field */}
                  <div className="relative">
                    <label htmlFor="from_name" className="block text-xs font-grotesk font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="from_name"
                      name="from_name"
                      placeholder="e.g. Rahul Sharma"
                      value={formData.from_name}
                      onChange={handleChange}
                      className={`w-full bg-slate-50 border rounded-lg px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none transition-all ${
                        errors.from_name
                          ? 'border-red-400 focus:border-red-500'
                          : 'border-slate-200 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10'
                      }`}
                    />
                    {errors.from_name && (
                      <span className="text-[11px] text-red-500 font-semibold mt-1 block">
                        {errors.from_name}
                      </span>
                    )}
                  </div>

                  {/* Email field */}
                  <div className="relative">
                    <label htmlFor="from_email" className="block text-xs font-grotesk font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="from_email"
                      name="from_email"
                      placeholder="e.g. rahul@example.com"
                      value={formData.from_email}
                      onChange={handleChange}
                      className={`w-full bg-slate-50 border rounded-lg px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none transition-all ${
                        errors.from_email
                          ? 'border-red-400 focus:border-red-500'
                          : 'border-slate-200 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10'
                      }`}
                    />
                    {errors.from_email && (
                      <span className="text-[11px] text-red-500 font-semibold mt-1 block">
                        {errors.from_email}
                      </span>
                    )}
                  </div>

                  {/* Message field */}
                  <div className="relative">
                    <label htmlFor="message" className="block text-xs font-grotesk font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Project Details / Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Tell me about your software development project or business requirements..."
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full bg-slate-50 border rounded-lg px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none transition-all resize-none ${
                        errors.message
                          ? 'border-red-400 focus:border-red-500'
                          : 'border-slate-200 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10'
                      }`}
                    />
                    {errors.message && (
                      <span className="text-[11px] text-red-500 font-semibold mt-1 block">
                        {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex justify-start">
                    <Magnetic range={25} strength={0.2}>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="interactive-cta inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-slate-900 via-slate-900 to-emerald-950 text-white font-grotesk font-bold text-xs uppercase tracking-wider transition-all hover:-translate-y-0.5 hover:shadow-green-subtle disabled:opacity-50 cursor-pointer group"
                      >
                        {isSubmitting ? (
                          <>
                            Sending Message...
                            <div className="w-3.5 h-3.5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                          </>
                        ) : (
                          <>
                            Send Message
                            <FaPaperPlane className="text-xs transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-emerald-400" />
                          </>
                        )}
                      </button>
                    </Magnetic>
                  </div>
                </form>
              </div>

              {/* Success Alert */}
              <AnimatePresence>
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-6 p-4 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center gap-3 text-sm font-semibold text-primary"
                  >
                    <FaCheckCircle className="text-primary shrink-0" />
                    Thank you! Your message has been sent successfully. I will get back to you soon.
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