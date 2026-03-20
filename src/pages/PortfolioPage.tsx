import { motion } from "motion/react";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const brandDesigns = [
  {
    id: 1,
    title: "Minimalist Identity",
    description: "A clean, modern approach to branding for a high-end tech startup.",
    image: "https://i.ibb.co/wFJxYbr9/brand-identity.jpg",
    tags: ["Minimal", "Tech", "Modern"],
  },
  {
    id: 2,
    title: "Corporate Branding",
    description: "Professional and trustworthy visual identity for a global consulting firm.",
    image: "https://i.ibb.co/zVzRJk1H/VASK-Studio.jpg",
    tags: ["Corporate", "Trust", "Global"],
  },
  {
    id: 3,
    title: "Visual Aesthetics",
    description: "Bold and artistic branding for a creative agency specializing in fashion.",
    image: "https://i.ibb.co/5hFHdVh9/3dcee0a3d63ab28f58dc0959c965b290.jpg",
    tags: ["Artistic", "Fashion", "Bold"],
  },
  {
    id: 4,
    title: "Modern Branding",
    description: "Dynamic and scalable identity for a fast-growing e-commerce platform.",
    image: "https://i.ibb.co/99y67B7L/brandboard-brandidentity-branddesign-geek-streetwear-visualidentity-logodesign-graphicdesign.jpg",
    tags: ["Dynamic", "E-commerce", "Scalable"],
  },
  {
    id: 5,
    title: "Creative Strategy",
    description: "Strategic visual language for a non-profit organization focused on education.",
    image: "https://i.ibb.co/60xSfs5q/Lightwave-Branding-Logo-Nakani.jpg",
    tags: ["Strategy", "Education", "Non-profit"],
  },
  {
    id: 6,
    title: "Impactful Visuals",
    description: "Memorable and high-impact branding for a premium beverage brand.",
    image: "https://i.ibb.co/rR4wM8GL/8c868f473103bdd8731a195ce61bbcda.jpg",
    tags: ["Impactful", "Premium", "Beverage"],
  },
];

export default function PortfolioPage() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-primary min-h-screen"
    >
      <Navbar />
      
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col gap-8 mb-20">
            <Link 
              to="/" 
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black/40 hover:text-accent transition-colors w-fit group"
            >
              <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" /> Back to Home
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col gap-4"
            >
              <h1 className="text-display-lowercase text-7xl md:text-9xl">portfolio.</h1>
              <p className="max-w-2xl text-black/60 text-lg leading-relaxed">
                A curated selection of my best design works. 
                Focused on brand identity, visual strategy, and modern aesthetics.
              </p>
            </motion.div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {brandDesigns.map((design, i) => (
              <motion.div
                key={design.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-col gap-6 group cursor-pointer"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-card shadow-lg border border-black/5">
                  <img 
                    src={design.image} 
                    alt={design.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-sm">
                    <div className="flex flex-col items-center gap-6">
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center shadow-2xl group-hover:bg-white group-hover:text-black transition-colors duration-500"
                      >
                        <ArrowUpRight size={32} />
                      </motion.div>
                      <span className="text-white text-[10px] font-bold uppercase tracking-[0.6em] translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-100">View Project</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col gap-3">
                  <div className="flex flex-wrap gap-2">
                    {design.tags.map(tag => (
                      <span key={tag} className="text-[9px] font-bold uppercase tracking-widest px-2 py-1 bg-black/5 rounded-full text-black/40">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tighter group-hover:text-accent transition-colors">{design.title}</h3>
                  <p className="text-black/60 text-sm leading-relaxed line-clamp-1">{design.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Process Section */}
          <section className="mt-40 py-20 border-t border-black/5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              <div className="flex flex-col gap-8">
                <h2 className="text-5xl font-black uppercase tracking-tighter italic">the process.</h2>
                <p className="text-black/60 leading-relaxed">
                  Every brand identity project follows a rigorous process of discovery, 
                  conceptualization, and refinement to ensure the final result is 
                  both beautiful and effective.
                </p>
              </div>
              
              <div className="flex flex-col gap-6">
                {[
                  "Discovery & Strategy",
                  "Visual Research & Moodboarding",
                  "Concept Development",
                  "Refinement & Iteration",
                  "Final Delivery & Guidelines"
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-4 p-6 bg-white rounded-card shadow-sm border border-black/5">
                    <CheckCircle2 className="text-accent" size={24} />
                    <span className="font-bold uppercase tracking-widest text-sm">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </motion.div>
  );
}
