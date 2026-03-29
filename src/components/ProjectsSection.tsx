import { motion } from "framer-motion";
import { FolderOpen } from "lucide-react";

const projects = [
  {
    title: "Project Coming Soon",
    desc: "A comprehensive SEO audit & optimization case study — details will be added soon.",
  },
  {
    title: "Project Coming Soon",
    desc: "A social media marketing campaign analysis with measurable KPIs — coming soon.",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24 px-6">
    <div className="max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading text-3xl sm:text-4xl font-bold mb-12 text-center"
      >
        My <span className="gradient-text">Projects</span>
      </motion.h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="card-gradient border border-border rounded-xl p-8 flex flex-col items-center text-center border-dashed"
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-5">
              <FolderOpen className="text-primary" size={24} />
            </div>
            <h3 className="font-heading font-semibold text-lg mb-2">{p.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
