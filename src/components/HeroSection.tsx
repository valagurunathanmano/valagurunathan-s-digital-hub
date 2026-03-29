import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HeroSection = () => (
  <section id="home" className="min-h-screen flex items-center justify-center relative px-6">
    <div className="text-center max-w-3xl">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-primary font-heading text-sm tracking-widest uppercase mb-4"
      >
        Digital Marketing & SEO Specialist
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="font-heading text-5xl sm:text-7xl font-bold leading-tight mb-6"
      >
        Hi, I'm{" "}
        <span className="gradient-text">Valagurunathan M</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-muted-foreground text-lg max-w-xl mx-auto mb-10"
      >
        Aspiring digital marketer passionate about driving organic growth, crafting data-driven strategies, and building impactful online presence.
      </motion.p>
      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        href="#about"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-heading font-semibold text-sm hover:opacity-90 transition-opacity"
      >
        Explore My Work <ArrowDown size={16} />
      </motion.a>
    </div>
  </section>
);

export default HeroSection;
