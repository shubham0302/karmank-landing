import { Instagram, Mail } from "lucide-react";

const SocialLinks = () => {
  const socials = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/karmank_official",
      label: "Instagram",
    },
    {
      icon: Mail,
      href: "mailto:Karmankofficials@gmail.com",
      label: "Instagram",
    },
  ];

  return (
    <div className="flex items-center justify-center gap-6">
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className="glass-card p-3 rounded-full hover:bg-primary/20 transition-all duration-300 hover:scale-110 group"
        >
          <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
