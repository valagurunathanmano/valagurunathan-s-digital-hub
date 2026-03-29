import { motion } from "framer-motion";

const skills = [
  { name: "Search Engine Optimization (SEO)", level: 80 },
  { name: "Keyword Research & Analysis", level: 75 },
  { name: "On-Page & Off-Page SEO", level: 78 },
  { name: "Content Marketing Strategy", level: 70 },
  { name: "Social Media Marketing", level: 72 },
  { name: "Google Analytics & Search Console", level: 65 },
  { name: "Email Marketing", level: 60 },
  { name: "HTML & CSS", level: 65 },
  { name: "Microsoft Excel", level: 60 },
];

const SkillsSection = () => (
  <section id="skills" className="py-24 px-6">
    <div className="max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading text-3xl sm:text-4xl font-bold mb-12 text-center"
      >
        My <span className="gradient-text">Skills</span>
      </motion.h2>
      <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
        {skills.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <div className="flex justify-between mb-1.5">
              <span className="text-sm font-medium">{s.name}</span>
              <span className="text-xs text-muted-foreground">{s.level}%</span>
            </div>
            <div className="h-2 rounded-full bg-secondary overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${s.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.05 }}
                className="h-full rounded-full"
                style={{ background: "var(--gradient-primary)" }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
