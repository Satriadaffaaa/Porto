import { Palette, Layers, Users, Zap } from "lucide-react";

export function About() {
  const skills = [
    {
      icon: Palette,
      title: "Visual Design",
      description: "Creating beautiful, cohesive interfaces with strong attention to detail",
    },
    {
      icon: Layers,
      title: "Prototyping",
      description: "Building interactive prototypes to validate ideas and gather feedback",
    },
    {
      icon: Users,
      title: "User Research",
      description: "Understanding user needs through interviews, testing, and analytics",
    },
    {
      icon: Zap,
      title: "Design Systems",
      description: "Developing scalable component libraries and design guidelines",
    },
  ];

  return (
    <section id="about" className="py-24 px-6 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4">What I Do</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            I specialize in designing digital products that are both beautiful and
            functional, with a focus on user experience and accessibility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div key={skill.title} className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-2xl mb-4 shadow-sm">
                <skill.icon className="text-neutral-900" size={24} />
              </div>
              <h3 className="mb-2">{skill.title}</h3>
              <p className="text-neutral-600">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
