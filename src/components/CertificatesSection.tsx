import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certs = [
  { title: "Introduction to Digital Marketing Fundamentals", issuer: "Simplilearn", date: "Oct 2025", link: "https://drive.google.com/file/d/1d961425o776TPUcBT0An6lhPU3zxoq3n/view?usp=sharing" },
  { title: "Introduction to SEO", issuer: "Simplilearn", date: "Oct 2025", link: "https://drive.google.com/file/d/16lY33RoaFqSb_BLfPNS7rr30KzDFqlCa/view?usp=sharing" },
  { title: "Introduction to MS Excel", issuer: "Simplilearn", date: "Oct 2025", link: "https://drive.google.com/file/d/1omwYiuCHL1LUZcB27Ah6YJDhQdd7UvRg/view?usp=sharing" },
  { title: "Coming Soon", issuer: "—", date: "—", link: "" },
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
        {certs.map((c, i) => {
          const Wrapper = c.link ? "a" : "div";
          const wrapperProps = c.link
            ? { href: c.link, target: "_blank", rel: "noopener noreferrer" }
            : {};
          return (
            <motion.div
              key={`${c.title}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <Wrapper
                {...(wrapperProps as any)}
                className={`card-gradient border border-border rounded-xl p-6 block ${c.link ? "hover:border-primary/50 transition-colors cursor-pointer" : ""}`}
              >
                <div className="flex items-start justify-between">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Award className="text-primary" size={20} />
                  </div>
                  {c.link && <ExternalLink className="text-muted-foreground" size={16} />}
                </div>
                <h3 className="font-heading font-semibold mb-1">{c.title}</h3>
                <p className="text-muted-foreground text-sm">{c.issuer} • {c.date}</p>
              </Wrapper>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default CertificatesSection;
