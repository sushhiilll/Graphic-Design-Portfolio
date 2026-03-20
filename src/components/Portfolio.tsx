import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Brand Identity",
    category: "Visual Strategy",
    image: "https://i.ibb.co/wFJxYbr9/brand-identity.jpg",
    type: "featured",
    link: "/portfolio",
    description: "A comprehensive visual identity system for a modern tech startup."
  },
  {
    id: 2,
    title: "Tech",
    category: "Print & Digital",
    image: "https://i.ibb.co/nMHFn8Y6/Bookmarks-X.jpg",
    type: "standard",
    link: "/portfolio",
    description: "Minimalist magazine layout focusing on architectural aesthetics."
  },
  {
    id: 3,
    title: "Food Agency",
    category: "Food & Beverage",
    image: "https://i.ibb.co/vCgJLDvq/Bakery-Logo-Design-with-Croissant-Mascot.jpg",
    type: "standard",
    link: "/portfolio",
    description: "Branding and creative strategy for a modern food agency."
  },
  {
    id: 4,
    title: "4+ Year Experience",
    category: "Digital Experience",
    image: "https://i.ibb.co/5hFHdVh9/3dcee0a3d63ab28f58dc0959c965b290.jpg",
    type: "standard",
    link: "/portfolio",
    description: "Intuitive mobile application for creative professionals."
  },
  {
    id: 5,
    title: "Startup Agency",
    category: "Brand Strategy",
    image: "https://i.ibb.co/Zz7211K0/ca55003b7337fe3510bacdb2476ce5ed.jpg",
    type: "standard",
    link: "/portfolio",
    description: "Comprehensive branding and identity for a high-growth startup."
  },
  {
    id: 6,
    title: "Clothing Brands",
    category: "Fashion Design",
    image: "https://i.ibb.co/rR4wM8GL/8c868f473103bdd8731a195ce61bbcda.jpg",
    type: "standard",
    link: "/portfolio",
    description: "Visual identity and creative direction for premium clothing brands."
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-40 px-6 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col gap-24">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <span className="text-xs font-bold uppercase tracking-[0.5em] text-black/40">Selected Works</span>
            <h2 className="text-display-lowercase text-7xl md:text-9xl leading-[0.8]">portfolio.</h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-xs text-black/60 text-sm leading-relaxed"
          >
            A collection of projects where strategy meets aesthetics to create meaningful brand experiences.
          </motion.p>
        </div>

        {/* Featured Section (Brand Identity) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative group cursor-pointer overflow-hidden rounded-[40px] shadow-2xl border border-black/5 aspect-[21/9] flex items-center"
        >
          <img
            src={projects[0].image}
            alt={projects[0].title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          
          <div className="relative z-10 p-12 md:p-20 flex flex-col gap-6 max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="text-accent text-xs font-bold uppercase tracking-[0.4em]"
            >
              {projects[0].category}
            </motion.span>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-white text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none"
            >
              {projects[0].title}
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-white/60 text-lg max-w-md"
            >
              {projects[0].description}
            </motion.p>
            
            <Link 
              to="/portfolio"
              className="w-20 h-20 rounded-full bg-accent flex items-center justify-center mt-8 hover:scale-110 transition-transform shadow-2xl group/btn"
            >
              <ArrowUpRight size={32} className="text-white transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
            </Link>
          </div>
        </motion.div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.slice(1).map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="flex flex-col gap-6 group cursor-pointer"
            >
              <div className="relative aspect-[4/5] rounded-card overflow-hidden shadow-lg border border-black/5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center backdrop-blur-sm">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    className="flex flex-col items-center gap-4"
                  >
                    <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-500">
                      <ArrowUpRight size={28} />
                    </div>
                    <span className="text-white text-[10px] font-bold uppercase tracking-[0.4em]">View Project</span>
                  </motion.div>
                </div>
              </div>
              
              <div className="flex flex-col gap-3">
                <span className="text-accent text-[10px] font-bold uppercase tracking-[0.3em]">{project.category}</span>
                <h3 className="text-2xl font-black uppercase tracking-tighter group-hover:text-accent transition-colors">{project.title}</h3>
                <p className="text-black/60 text-sm leading-relaxed line-clamp-1">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
