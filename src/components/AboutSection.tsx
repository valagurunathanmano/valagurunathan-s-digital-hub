import { motion } from "framer-motion";
import { Target, TrendingUp, Search } from "lucide-react";

const highlights = [
  { icon: Search, label: "SEO Strategy", desc: "On-page, off-page & technical SEO to boost search visibility." },
  { icon: TrendingUp, label: "Growth Mindset", desc: "Data-driven approach to digital campaigns and analytics." },
  { icon: Target, label: "Content & Ads", desc: "Crafting compelling content and targeted ad strategies." },
];

const AboutSection = () => (
  <section id="about" className="py-24 px-6">
    <div className="max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading text-3xl sm:text-4xl font-bold mb-6 text-center"
      >
        About <span className="gradient-text">Me</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-muted-foreground text-center max-w-2xl mx-auto mb-14 leading-relaxed"
      >
        I'm a motivated fresher with a strong foundation in digital marketing and SEO. I thrive on understanding search engine algorithms, optimizing websites for maximum reach, and turning data into actionable strategies. With a blend of creativity and technical know-how — including HTML, CSS, and Excel — I bring a well-rounded perspective to every project.
      </motion.p>
      <div className="grid sm:grid-cols-3 gap-6">
        {highlights.map((h, i) => (
          <motion.div
            key={h.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="card-gradient rounded-xl p-6 border border-border text-center"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <h.icon className="text-primary" size={22} />
            </div>
            <h3 className="font-heading font-semibold text-lg mb-2">{h.label}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{h.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
