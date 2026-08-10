import { Github, Linkedin, Mail } from "lucide-react";
import { memo } from "react";

// Social Links
const socialLinks = [
  {
    href: "https://github.com/Arjun-Meghwal",
    title: "GitHub",
    icon: Github,
  },
  {
    href: "https://www.linkedin.com/in/arjun-meghwal-313820320/",
    title: "LinkedIn",
    icon: Linkedin,
  },
  {
    href: "mailto:meghwalarjun930@gmail.com",
    title: "Email",
    icon: Mail,
  },
];

const Footer = memo(() => {
  return (
    <footer className="w-full bg-muted/30 border-t border-border pt-8 pb-10 mt-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 flex flex-col items-center text-center gap-5">

        {/* Name */}
        <h3 className="text-2xl font-bold text-foreground">
          Arjun Meghwal
        </h3>

        {/* Short Description */}
        <p className="text-sm text-muted-foreground max-w-xl">
          Full Stack MERN Developer | MCA Student at MANIT Bhopal |
          Passionate about building scalable web applications and solving
          real-world problems using modern technologies.
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-6">
          {socialLinks.map(({ href, title, icon: Icon }) => (
            <a
              key={title}
              href={href}
              title={title}
              aria-label={title}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <Icon className="w-6 h-6" />
            </a>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="text-sm text-muted-foreground border-t border-border pt-5 w-full">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-foreground">
            Arjun Meghwal
          </span>
          . All Rights Reserved.
        </div>

      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;