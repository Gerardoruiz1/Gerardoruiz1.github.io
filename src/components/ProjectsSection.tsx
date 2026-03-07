import { ExternalLink, Github, Folder } from "lucide-react";

const featuredProjects = [
  {
    title: "AI Doctor",
    description:
      "Built an AI-powered medical symptom-checker MVP using OpenAI's API and JavaScript, enabling users to receive structured health insights and follow-up questions. Reduced response latency and improved reliability by 40%, enhancing the overall usability and showcasing rapid end-to-end product execution.",
    technologies: ["JavaScript", "OpenAI API", "Node.js"],
    github: "https://github.com/Gerardoruiz1",
    external: "https://example.com",
    period: "September 2025 – November 2025",
  },
  {
    title: "University AirBnb",
    description:
      "Led a 30-person team and designed a cross-platform housing marketplace using Flutter by building UI components, enabling students to browse, post, and manage rental listings. Built a scalable system with Firestore backend by developing search filters, location and price range queries, listing visibility toggles, and favorite tracking features.",
    technologies: ["Flutter", "Firestore", "Dart"],
    github: "https://github.com/Gerardoruiz1",
    external: "https://example.com",
    period: "January 2025 – May 2025",
  },
  {
    title: "Galaga Replica",
    description:
      "Built a Galaga-inspired space shooter in C++ using openFrameworks by engineering a modular state system that transitioned smoothly between game states, ensuring a maintainable architecture. Implemented responsive player mechanics including ship acceleration, rotation, and projectile firing with power-ups such as force shields and bombs.",
    technologies: ["C++", "openFrameworks"],
    github: "https://github.com/Gerardoruiz1",
    external: "https://example.com",
    period: "August 2024 – December 2024",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 flex items-center gap-4">
            
            Featured Projects
            <span className="hidden md:block h-px bg-border flex-1 ml-4" />
          </h2>

          <div className="space-y-24 mt-12">
            {featuredProjects.map((project, index) => (
              <div
                key={project.title}
                className={`relative grid md:grid-cols-12 gap-4 items-center ${
                  index % 2 === 1 ? "md:text-right" : ""
                }`}
              >
                {/* Project Image */}
                <div
                  className={`md:col-span-7 ${
                    index % 2 === 1 ? "md:col-start-6" : ""
                  }`}
                >
                  <a
                    href={project.external}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative group"
                  >
                    <div className="aspect-video bg-secondary rounded-lg overflow-hidden border border-border group-hover:border-primary/50 transition-colors">
                      <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                        <Folder className="w-16 h-16 text-primary/30" />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors rounded-lg" />
                  </a>
                </div>

                {/* Project Content */}
                <div
                  className={`md:col-span-6 md:absolute ${
                    index % 2 === 1
                      ? "md:left-0 md:text-left"
                      : "md:right-0 md:text-right"
                  }`}
                >
                  <p className="font-mono text-primary text-sm mb-1">
                    {project.period}
                  </p>
                  <h3 className="text-2xl font-bold mb-4 hover:text-primary transition-colors">
                    <a
                      href={project.external}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.title}
                    </a>
                  </h3>
                  <div className="bg-card p-6 rounded-lg shadow-xl mb-4 border border-border">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <ul
                    className={`flex flex-wrap gap-3 font-mono text-sm text-muted-foreground mb-4 ${
                      index % 2 === 1 ? "md:justify-start" : "md:justify-end"
                    }`}
                  >
                    {project.technologies.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                  <div
                    className={`flex gap-4 ${
                      index % 2 === 1 ? "md:justify-start" : "md:justify-end"
                    }`}
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
