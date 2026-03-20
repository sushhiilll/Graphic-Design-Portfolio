import { motion } from "motion/react";
import { Send, Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-black text-white relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-12"
        >
          <div className="flex flex-col gap-4">
            <h2 className="text-display-lowercase text-7xl md:text-9xl">contact.</h2>
            <div className="w-24 h-1 bg-accent" />
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-500">
                <Mail size={20} />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">Email</span>
                <span className="text-xl font-black tracking-tighter uppercase italic">sushil.niralaworks@gmail.com</span>
              </div>
            </div>
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-500">
                <Phone size={20} />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">Phone</span>
                <span className="text-xl font-black tracking-tighter uppercase italic">+9179030664271</span>
              </div>
            </div>
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-500">
                <MapPin size={20} />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">Location</span>
                <span className="text-xl font-black tracking-tighter uppercase italic">India</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 backdrop-blur-md p-12 rounded-card border border-white/10 shadow-2xl"
        >
          <form className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="bg-transparent border-b border-white/10 py-4 text-xl font-black tracking-tighter uppercase italic focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="bg-transparent border-b border-white/10 py-4 text-xl font-black tracking-tighter uppercase italic focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">Message</label>
              <textarea
                placeholder="Your Message"
                rows={4}
                className="bg-transparent border-b border-white/10 py-4 text-xl font-black tracking-tighter uppercase italic focus:outline-none focus:border-accent transition-colors resize-none"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-3 bg-accent text-white px-12 py-6 rounded-full text-xs font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500 shadow-xl"
            >
              Send Message <Send size={16} />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
