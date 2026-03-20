import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer className="py-20 px-6 bg-primary border-t border-black/5">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-accent rounded-full" />
            </div>
            <span className="font-black text-3xl tracking-tighter uppercase italic">Sushil Nirala.</span>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {["Home", "About", "Portfolio", "Exhibitions", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-[10px] font-bold uppercase tracking-[0.3em] hover:text-accent transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-black/5">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/40">
            © 2026 Sushil Nirala. All Rights Reserved.
          </p>
          <div className="flex items-center gap-8">
            <a href="#" className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/40 hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/40 hover:text-black transition-colors">Terms of Service</a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center pt-12"
        >
          <h2 className="text-display-lowercase text-[15vw] opacity-[0.03] pointer-events-none select-none">
            sushil.
          </h2>
        </motion.div>
      </div>
    </footer>
  );
}
