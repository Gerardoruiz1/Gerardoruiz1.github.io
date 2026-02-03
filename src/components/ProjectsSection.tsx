import { ExternalLink, Github, Folder } from "lucide-react";

const featuredProjects = [
  {
    title: "Cloud Analytics Platform",
    description:
      "A comprehensive analytics dashboard for monitoring cloud infrastructure. Features real-time metrics, custom alerts, and detailed performance insights across multiple cloud providers.",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
    github: "https://github.com",
    external: "https://example.com",
    image: "/placeholder.svg",
  },
  {
    title: "E-Commerce Marketplace",
    description:
      "A full-featured marketplace platform with real-time inventory management, secure payment processing, and a powerful admin dashboard for vendors.",
    technologies: ["Next.js", "Stripe", "Prisma", "Redis", "Docker"],
    github: "https://github.com",
    external: "https://example.com",
    image: "/placeholder.svg",
  },
  {
    title: "AI Content Generator",
    description:
      "An AI-powered content generation tool that helps marketers create compelling copy. Includes tone analysis, A/B testing suggestions, and multi-language support.",
    technologies: ["Python", "FastAPI", "OpenAI", "React", "MongoDB"],
    github: "https://github.com",
    external: "https://example.com",
    image: "/placeholder.svg",
  },
];

const otherProjects = [
  {
    title: "Task Management CLI",
    description: "A command-line task manager with sync capabilities across devices.",
    technologies: ["Rust", "SQLite", "Tokio"],
    github: "https://github.com",
  },
  {
    title: "Real-time Chat App",
    description: "Encrypted messaging app with WebSocket support and file sharing.",
    technologies: ["Socket.io", "React", "Node.js"],
    github: "https://github.com",
    external: "https://example.com",
  },
  {
    title: "Portfolio Template",
    description: "A customizable developer portfolio template with dark mode support.",
    technologies: ["Astro", "Tailwind", "TypeScript"],
    github: "https://github.com",
  },
  {
    title: "Weather Dashboard",
    description: "Beautiful weather app with 7-day forecasts and location tracking.",
    technologies: ["React", "OpenWeather API", "Mapbox"],
    github: "https://github.com",
    external: "https://example.com",
  },
  {
    title: "Code Snippet Manager",
    description: "Organize and share code snippets with syntax highlighting.",
    technologies: ["Vue.js", "Firebase", "Prism.js"],
    github: "https://github.com",
  },
  {
    title: "Fitness Tracker API",
    description: "RESTful API for tracking workouts and nutrition data.",
    technologies: ["Express", "MongoDB", "JWT"],
    github: "https://github.com",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 flex items-center gap-4">
            <span className="font-mono text-primary text-xl">03.</span>
            Featured Projects
            <span className="hidden md:block h-px bg-border flex-1 ml-4" />
          </h2>

          {/* Featured Projects */}
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
                  <p className="font-mono text-primary text-sm mb-2">
                    Featured Project
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

          {/* Other Projects */}
          <h3 className="text-2xl font-bold text-center mt-24 mb-12">
            Other Noteworthy Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherProjects.map((project) => (
              <div
                key={project.title}
                className="group bg-card border border-border rounded-lg p-6 card-hover flex flex-col"
              >
                <div className="flex items-center justify-between mb-6">
                  <Folder className="w-10 h-10 text-primary" />
                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.external && (
                      <a
                        href={project.external}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
                <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-muted-foreground text-sm mb-4 flex-1">
                  {project.description}
                </p>
                <ul className="flex flex-wrap gap-2 font-mono text-xs text-muted-foreground">
                  {project.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
