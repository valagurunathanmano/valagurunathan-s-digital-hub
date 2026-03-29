import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  { level: "B.E — Computer Science & Engineering", school: "P.S.R Engineering College, Sivakasi", year: "2020 – 2024", pct: "79%" },
  { level: "Higher Secondary", school: "S.R Govt Hr Sec School, N.Mettupatti", year: "2019 – 2020", pct: "62.5%" },
  { level: "Secondary (SSLC)", school: "S.R Govt Hr Sec School, N.Mettupatti", year: "2017 – 2018", pct: "84.4%" },
];

const EducationSection = () => (
  <section id="education" className="py-24 px-6">
    <div className="max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading text-3xl sm:text-4xl font-bold mb-12 text-center"
      >
        My <span className="gradient-text">Education</span>
      </motion.h2>
      <div className="space-y-6">
        {education.map((e, i) => (
          <motion.div
            key={e.level}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="card-gradient border border-border rounded-xl p-6 flex items-start gap-5"
          >
            <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-1">
              <GraduationCap className="text-primary" size={20} />
            </div>
            <div className="flex-1">
              <h3 className="font-heading font-semibold text-lg">{e.level}</h3>
              <p className="text-muted-foreground text-sm mt-1">{e.school}</p>
              <p className="text-muted-foreground text-xs mt-0.5">{e.year}</p>
            </div>
            <span className="font-heading font-bold text-xl gradient-text shrink-0">{e.pct}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;
