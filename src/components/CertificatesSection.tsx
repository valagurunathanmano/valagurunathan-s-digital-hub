import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certs = [
  { title: "Introduction to Digital Marketing Fundamentals", issuer: "Simplilearn", date: "Oct 2025" },
  { title: "Introduction to SEO", issuer: "Simplilearn", date: "Oct 2025" },
];

const CertificatesSection = () => (
  <section id="certificates" className="py-24 px-6">
    <div className="max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading text-3xl sm:text-4xl font-bold mb-12 text-center"
      >
        <span className="gradient-text">Certifications</span>
      </motion.h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {certs.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="card-gradient border border-border rounded-xl p-6"
          >
            <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Award className="text-primary" size={20} />
            </div>
            <h3 className="font-heading font-semibold mb-1">{c.title}</h3>
            <p className="text-muted-foreground text-sm">{c.issuer} • {c.date}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CertificatesSection;
