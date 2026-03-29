import { Mail, Linkedin, Github } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Certificates", href: "#certificates" },
  { label: "Tools", href: "#tools" },
  { label: "Projects", href: "#projects" },
];

const Footer = () => (
  <footer id="footer" className="border-t border-border py-16 px-6">
    <div className="max-w-5xl mx-auto">
      <div className="grid sm:grid-cols-3 gap-10">
        <div>
          <h3 className="font-heading text-xl font-bold gradient-text mb-3">Valagurunathan M</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Digital Marketing & SEO enthusiast ready to make an impact.
          </p>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-3">Let's Connect</h4>
          <div className="space-y-3">
            <a
              href="mailto:Valagurunathanmano@gmail.com"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={16} /> Valagurunathanmano@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/valagurunathan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
            <a
              href="https://github.com/valagurunathanmano"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={16} /> GitHub
            </a>
          </div>
          <a
            href="mailto:Valagurunathanmano@gmail.com"
            className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-heading font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            <Mail size={15} /> Let's Connect
          </a>
        </div>
      </div>
      <div className="mt-12 pt-6 border-t border-border text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Valagurunathan M. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
