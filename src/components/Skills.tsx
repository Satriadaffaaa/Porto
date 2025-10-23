import {
  Palette,
  Sparkles,
  Code,
  Search,
  Layers,
  Users,
  LucideIcon,
  Globe,
  Wrench,
  Database,
  UserCog,
} from "lucide-react";

export function Skills() {
  const skillCategories: {
    category: string;
    icon: LucideIcon;
    skills: string[];
  }[] = [
    {
      category: "Languages",
      icon: Globe,
      skills: [
        "Indonesian",
        "English",
      ],
    },
    {
      category: "UI/UX Design",
      icon: Wrench,
      skills: [
        "User Research & Persona Development",
        "Wireframing & Prototyping (Low to High Fidelity)",
        "User Flow Mapping",
        "Design Systems & Style Guides",
        "Usability Testing & Iterative Design",
      ],
    },
    {
      category: "Design Tools",
      icon: Palette,
      skills: [
        "Figma",
        "Adobe Illustrator",
        "Adobe Photoshop",
        "Canva",
        "Frammer",
      ],
    },
    {
      category: "Front-End Development",
      icon: Code,
      skills: [
        "HTML & CSS",
        "Laravel",
        "Tailwind CSS",
        "JavaScript",
        "React",
      ],
    },
    {
      category: "Database & Backend Basics",
      icon: Database,
      skills: [
        "MySQL",
        "Basic Database Management & Querying",
      ],
    },
    {
      category: "Soft Skills",
      icon: UserCog,
      skills: [
        "Team Leadership & Collaboration",
        "Creative Problem-Solving",
        "Communication & Coordination",
        "Documentation & Content Strategy",
      ],
    },
      ];

  return (
    <section id="skills" className="py-24 px-6 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4">Skills & Expertise</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            A comprehensive toolkit built through years of experience in product design,
            user research, and front-end development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.category}
                className="bg-white rounded-2xl p-6 border border-neutral-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-neutral-100 rounded-xl flex items-center justify-center">
                    <Icon className="text-neutral-700" size={20} />
                  </div>
                  <h3>{category.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-neutral-100 rounded-lg text-neutral-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
