import { motion } from "motion/react";
import { Crosshair, Target, Zap } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="bg-black text-white py-32 px-6 relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col items-center gap-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative group"
        >
          {/* Radial Pattern Behind Image */}
          <div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:opacity-60 transition-opacity duration-700">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-64 bg-accent/40 origin-center"
                style={{ transform: `rotate(${i * 30}deg)` }}
              />
            ))}
          </div>

          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
            <img
              src="https://i.ibb.co/b8H7G09/Screenshot-2026-03-12-212124.png"
              alt="Profile"
              className="w-full h-full object-cover group-hover:opacity-100 transition-all duration-700 scale-110 group-hover:scale-100"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Crosshair UI Elements */}
          <div className="absolute -top-8 -left-8 text-accent animate-pulse">
            <Crosshair size={32} />
          </div>
          <div className="absolute -bottom-8 -right-8 text-white animate-pulse">
            <Target size={32} />
          </div>
        </motion.div>

        <div className="max-w-2xl text-center flex flex-col gap-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-display-lowercase text-5xl md:text-7xl"
          >
            about.about.about.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-white/60 text-base md:text-lg font-medium leading-relaxed"
          >
            I am a visual storyteller dedicated to capturing the essence of brands through thoughtful design. With over 4 years of experience, I have helped startups, agencies, and businesses build strong and memorable identities through minimal and impactful visuals.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-12 pt-8"
          >
            <div className="flex flex-col items-center gap-2">
              <Zap size={24} className="text-accent" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Cinematic</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Zap size={24} className="text-accent" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Minimalist</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Zap size={24} className="text-accent" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Storyteller</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
