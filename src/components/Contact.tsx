import { Mail, Linkedin, Github, Twitter, Instagram } from "lucide-react";

export function Contact() {
  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      href: "#",
      text: "satriadaffa878@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/andhikasatriadaffa",
      text: "Andhika Satria Daffa",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Satriadaffaaa",
      text: "Satriadaffaaa",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://instagram.com/Satriadaffaaa",
      text: "Satriadaffaaa",
    },
   ];

  return (
    <section id="contact" className="py-24 px-6 bg-neutral-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="mb-4">Let's Work Together</h2>
        <p className="text-neutral-600 mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision. Feel free to reach out!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto justify-content-center">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-white rounded-xl hover:shadow-md transition-shadow"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center">
                <link.icon className="text-neutral-700" size={20} />
              </div>
              <div className="text-left">
                <p className="text-neutral-500">{link.label}</p>
                <p className="text-neutral-900">{link.text}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
