import { motion } from "framer-motion";

const tools = [
  "Google Analytics", "Google Search Console", "Google Ads", "SEMrush",
  "Ahrefs", "Moz", "Ubersuggest", "Yoast SEO",
  "Canva", "Mailchimp", "Hootsuite", "Google Tag Manager",
];

const ToolsSection = () => (
  <section id="tools" className="py-24 px-6">
    <div className="max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading text-3xl sm:text-4xl font-bold mb-12 text-center"
      >
        Tools <span className="gradient-text">I Use</span>
      </motion.h2>
      <div className="flex flex-wrap justify-center gap-3">
        {tools.map((t, i) => (
          <motion.span
            key={t}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
            className="px-5 py-2.5 rounded-full border border-border bg-secondary text-sm font-medium hover:border-primary hover:text-primary transition-colors cursor-default"
          >
            {t}
          </motion.span>
        ))}
      </div>
    </div>
  </section>
);

export default ToolsSection;
