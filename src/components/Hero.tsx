import { motion } from "motion/react";
import { ArrowDown, Youtube, Instagram, Facebook, Twitter, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { label: "Visual identities crafted to make brands stand out", value: "250+", sub: "designs" },
  { label: "Client satisfaction rate across all branding and design projects", value: "99%", sub: "satisfaction" },
];

const socials = [
  { icon: <Youtube size={16} />, href: "#" },
  { icon: <Instagram size={16} />, href: "#" },
  { icon: <Facebook size={16} />, href: "#" },
  { icon: <Twitter size={16} />, href: "#" },
];

export default function Hero() {
  return (
    <section id="home" className="min-h-screen pt-32 pb-20 px-6 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-8"
        >
          <div className="flex flex-col gap-6">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/40"
            >
              Sushil Nirala
            </motion.span>
            <div className="flex flex-col gap-2">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-display text-7xl md:text-8xl lg:text-9xl"
              >
                Sushil<br />Nirala
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="max-w-md text-sm md:text-base text-black/60 font-medium leading-relaxed"
              >
                I am a visual storyteller dedicated to capturing the essence of brands through thoughtful design.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex items-center gap-6 pt-4"
              >
                <Link 
                  to="/portfolio"
                  className="bg-black text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-accent transition-all hover:scale-105 shadow-xl flex items-center gap-2 group"
                >
                  View Portfolio <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <a 
                  href="#contact"
                  className="text-xs font-bold uppercase tracking-widest text-black/40 hover:text-black transition-colors"
                >
                  Let's Talk
                </a>
              </motion.div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 pt-8 border-t border-black/5">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="flex flex-col gap-2"
              >
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl md:text-5xl font-black tracking-tighter italic">{stat.value}</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-black/40">{stat.sub}</span>
                </div>
                <p className="text-[10px] md:text-xs font-medium uppercase tracking-wider text-black/60 max-w-[180px]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative group"
        >
          <div className="absolute -inset-4 bg-accent/20 rounded-card blur-2xl group-hover:bg-accent/30 transition-all duration-500" />
          <div className="relative aspect-[4/5] bg-black rounded-card overflow-hidden shadow-2xl">
            <img 
              src="https://i.ibb.co/b8H7G09/Screenshot-2026-03-12-212124.png" 
              alt="Visual Storyteller" 
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-700 scale-110 group-hover:scale-100"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            
            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-8 right-8 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center text-white"
            >
              <div className="w-6 h-6 border-2 border-white rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>
            </motion.div>

            <div className="absolute bottom-8 left-8 flex flex-col gap-1">
              <span className="text-white font-black text-2xl tracking-tighter uppercase italic">Creativity</span>
              <span className="text-white/60 text-[10px] font-bold uppercase tracking-[0.2em]">4+ Year Experience</span>
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute -bottom-12 right-0 flex items-center gap-4"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/40">Scroll Down</span>
            <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center animate-bounce">
              <ArrowDown size={14} className="text-black/40" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
