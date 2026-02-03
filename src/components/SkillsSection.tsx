import { Code2, Database, Globe, Server, Smartphone, Terminal } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "Building responsive and performant user interfaces",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "Designing scalable server-side architectures",
    technologies: ["Node.js", "Python", "GraphQL", "REST APIs"],
  },
  {
    icon: Database,
    title: "Database Design",
    description: "Optimizing data storage and retrieval",
    technologies: ["PostgreSQL", "MongoDB", "Redis", "Prisma"],
  },
  {
    icon: Globe,
    title: "Cloud Services",
    description: "Deploying and managing cloud infrastructure",
    technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Creating cross-platform mobile applications",
    technologies: ["React Native", "Flutter", "iOS", "Android"],
  },
  {
    icon: Terminal,
    title: "DevOps & CI/CD",
    description: "Automating development workflows",
    technologies: ["GitHub Actions", "Jenkins", "Linux", "Bash"],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 flex items-center gap-4">
            <span className="font-mono text-primary text-xl">02.</span>
            Skills & Expertise
            <span className="hidden md:block h-px bg-border flex-1 ml-4" />
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {skills.map((skill, index) => (
              <div
                key={skill.title}
                className="group bg-card border border-border rounded-lg p-6 card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <skill.icon className="w-10 h-10 text-primary mb-4 group-hover:animate-pulse" />
                
                <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>
                
                <p className="text-muted-foreground text-sm mb-4">
                  {skill.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
