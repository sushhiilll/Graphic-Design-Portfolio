import { motion } from "motion/react";
import { Ticket } from "lucide-react";

const exhibitions = [
  {
    id: "01",
    title: "Brand Identity",
  },
  {
    id: "02",
    title: "4+ Year Experience",
  },
  {
    id: "03",
    title: "Social Media Designs",
  },
  {
    id: "04",
    title: "Poster Designs",
  },
];

export default function Exhibitions() {
  return (
    <section id="exhibitions" className="py-32 px-6 bg-primary">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-4"
        >
          <h2 className="text-display-lowercase text-7xl md:text-9xl">exhibitions.exhibitions.</h2>
          <div className="w-24 h-1 bg-accent" />
        </motion.div>

        <div className="flex flex-col gap-12">
          {exhibitions.map((exhibition, i) => (
            <motion.div
              key={exhibition.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group relative flex flex-col md:flex-row items-center justify-between gap-8 py-12 border-b border-black/10 hover:bg-black/5 transition-colors duration-500 px-8 rounded-card"
            >
              <div className="flex items-center gap-8">
                <span className="text-2xl font-black text-black/20 group-hover:text-accent transition-colors duration-500">
                  {exhibition.id}
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter italic group-hover:text-accent transition-colors duration-500">
                    {exhibition.title}
                  </h3>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest hover:bg-accent transition-colors shadow-xl"
              >
                Buy Ticket <Ticket size={16} />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
