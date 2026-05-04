/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { 
  Camera, 
  Target, 
  Users, 
  ArrowRight, 
  Instagram, 
  Twitter, 
  Mail, 
  Menu, 
  X,
  ChevronRight,
  Sparkles,
  Zap,
  Globe
} from 'lucide-react';
import { useState, useEffect } from 'react';

const SERVICES = [
  {
    icon: <Camera className="w-8 h-8" />,
    title: "Content Creation",
    description: "High-end photography, short-form video (Reels/TikTok), and graphic design tailored to your brand voice.",
    color: "bg-indigo-500/20 text-indigo-400"
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Social Strategy",
    description: "Full-funnel strategies designed to increase engagement and turn followers into loyal customers.",
    color: "bg-rose-500/20 text-rose-400"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Influencer Marketing",
    description: "Connecting your brand with the right voices to expand your reach and build authentic trust.",
    color: "bg-emerald-500/20 text-emerald-400"
  }
];

const STATS = [
  { label: "Growth Average", value: "140%" },
  { label: "Content Produced", value: "10k+" },
  { label: "Client ROI", value: "4.5x" },
  { label: "Brand Partners", value: "200+" }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[120px] opacity-40 animate-pulse" />
        <div className="absolute bottom-[-150px] left-[-100px] w-[600px] h-[600px] bg-rose-500/10 rounded-full blur-[120px] opacity-30 animate-pulse duration-700" />
        <div className="absolute top-[200px] left-[200px] w-[300px] h-[300px] bg-sky-500/10 rounded-full blur-[100px] opacity-20 animate-pulse duration-1000" />
      </div>

      {/* Navigation */}
      <nav 
        id="navbar"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/5 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-tr from-indigo-600 to-rose-500 rounded-lg flex items-center justify-center font-bold text-xl shadow-lg shadow-indigo-500/20">
              N
            </div>
            <span className="font-display italic font-black text-2xl tracking-tighter uppercase">Nova.</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {['Home', 'Services', 'Work', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
            <button className="px-6 py-2.5 bg-white text-slate-950 rounded-full text-sm font-bold hover:bg-slate-200 transition-colors shadow-xl">
              Get Started
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            id="mobile-menu-toggle"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-slate-900 border-b border-white/10 p-6 md:hidden flex flex-col gap-4"
            >
              {['Home', 'Services', 'Work', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className="text-lg font-medium text-slate-300 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="w-full mt-4 px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold">
                Get Started
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6 relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-6">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
              Available for Q4 Projects
            </div>
            <h1 className="text-6xl md:text-8xl font-display font-black leading-[1.1] tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400">
              WE CREATE <br />
              CONTENT THAT <br />
              <span className="italic font-display text-indigo-400">CONVERTS.</span>
            </h1>
            <p className="text-xl text-slate-400 font-light max-w-xl mb-10 leading-relaxed">
              Nova Social Studio helps high-growth brands dominate social media through aesthetic storytelling and data-driven strategy. We don't just post; we create movements.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-indigo-600 rounded-full font-bold flex items-center gap-2 hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-600/20 group">
                Start Your Project <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white/5 border border-white/10 rounded-full font-bold hover:bg-white/10 transition-all">
                View Our Work
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className="w-full aspect-[4/5] rounded-[40px] overflow-hidden border border-white/10 shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=1000" 
                alt="Creative Studio"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
              
              {/* Floating Element */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute bottom-8 left-8 right-8 p-6 bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-3xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-500 rounded-2xl flex items-center justify-center">
                    <Zap className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-bold">Aesthetic Strategy</div>
                    <div className="text-xs text-slate-400">Content that captures the zeitgeist.</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Background elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-rose-500/20 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-8 glass rounded-3xl"
            >
              <div className="text-4xl md:text-5xl font-display font-black tracking-tight text-white mb-2">{stat.value}</div>
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <div className="text-indigo-400 font-bold text-xs uppercase tracking-[0.3em] mb-4">Our Expertise</div>
              <h2 className="text-6xl md:text-7xl font-display italic font-black leading-tight tracking-tighter">
                ELEVATING YOUR <br /> DIGITAL <span className="text-slate-400">PRESENCE.</span>
              </h2>
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed">
              We combine creative vision with analytical precision to deliver results that don't just look good—they perform.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 glass rounded-[40px] hover:bg-white/10 transition-all group"
                id={`service-${i}`}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 border transition-transform group-hover:scale-110 ${
                  i === 0 ? 'bg-indigo-500/20 border-indigo-500/30 text-indigo-400' :
                  i === 1 ? 'bg-rose-500/20 border-rose-500/30 text-rose-400' :
                  'bg-sky-500/20 border-sky-500/30 text-sky-400'
                }`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-8">
                  {service.description}
                </p>
                <button className="flex items-center gap-2 text-sm font-bold text-white group-hover:gap-4 transition-all">
                  Partner With Us <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy / CTA Hybrid */}
      <section className="py-32 px-6 overflow-hidden relative">
        <div className="max-w-7xl mx-auto glass rounded-[60px] p-12 md:p-24 relative overflow-hidden flex flex-col items-center text-center">
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-rose-500/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <Globe className="w-16 h-16 text-indigo-400/50 mx-auto mb-10 animate-spin-slow" />
            <h2 className="text-5xl md:text-7xl font-display italic font-black text-white leading-none tracking-tighter mb-10">
              READY TO SCALE <br /> <span className="text-indigo-400">YOUR INFLUENCE?</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12">
              Join the ranks of high-growth brands that trust Nova to navigate the digital landscape. Let's create something extraordinary.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                className="px-10 py-5 bg-indigo-600 text-white rounded-full font-black text-lg hover:scale-105 transition-transform shadow-2xl shadow-indigo-600/40"
                onClick={() => window.location.href = 'mailto:novasocialstudioagency@gmail.com'}
              >
                Book Your Audit
              </button>
              <button className="px-10 py-5 glass-light text-white rounded-full font-black text-lg hover:bg-white/20 transition-all">
                Our Strategies
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-10 h-10 bg-gradient-to-tr from-indigo-600 to-rose-500 rounded-lg flex items-center justify-center font-bold text-xl">
                  N
                </div>
                <span className="font-display italic font-black text-2xl tracking-tighter uppercase">Nova.</span>
              </div>
              <p className="text-slate-500 max-w-sm italic mb-8">
                Propelling brands into the digital future through aesthetic precision and strategic depth.
              </p>
              <div className="flex gap-4">
                {[Instagram, Twitter, Mail].map((Icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:bg-white/10 transition-colors">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-slate-400">Navigation</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-slate-400">Contact</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" /> novasocialstudioagency@gmail.com
                </li>
                <li className="flex items-center gap-2">
                  <Globe className="w-4 h-4" /> Based Globally
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-4">
            <p className="text-xs text-slate-600">
              © 2026 Nova Social Studio Agency. All rights reserved.
            </p>
            <div className="flex gap-8 text-xs text-slate-600">
              <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
