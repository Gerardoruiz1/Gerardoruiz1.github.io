import { ExternalLink, Github, Folder } from "lucide-react";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  /** Live demo or main link; falls back to GitHub when omitted */
  external?: string;
  /** Date range or label; omit when not needed */
  period?: string;
};

type ProjectSection = {
  heading: string;
  blurb?: string;
  projects: Project[];
};

const projectSections: ProjectSection[] = [
  {
    heading: "Featured Projects",
    projects: [
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
    ],
  },
  {
    heading: "Object-oriented programming (OOP)",
    blurb:
      "C++ desktop work with openFrameworks: encapsulation, modular game states, and graphics-heavy assignments where structure and clear class boundaries matter as much as what appears on screen.",
    projects: [
      {
        title: "Galaga Replica",
        description:
          "Built a Galaga-inspired space shooter in C++ using openFrameworks by engineering a modular state system that transitioned smoothly between game states, ensuring a maintainable architecture. Implemented responsive player mechanics including ship acceleration, rotation, and projectile firing with power-ups such as force shields and bombs.",
        technologies: ["C++", "openFrameworks", "OOP"],
        github: "https://github.com/Gerardoruiz1/galagareplica",
        period: "August 2024 – December 2024",
      },
      {
        title: "Fractal Visualizer",
        description:
          "Advanced programming assignment (PA3: fractals) in C++ with openFrameworks—extended the course baseline with custom behavior that depended on recursion, drawing primitives, and a clean project layout so changes stayed testable and easy to reason about.",
        technologies: ["C++", "openFrameworks", "Makefile"],
        github: "https://github.com/Gerardoruiz1/fractalvizualizer",
      },
      {
        title: "Simon Says (color pattern game)",
        description:
          "Simon-style memory game in C++ using openFrameworks: color/sound sequences, player input validation, and round progression with a standard apps/myApps build workflow (Makefile and VS Code tasks).",
        technologies: ["C++", "openFrameworks", "Game logic"],
        github: "https://github.com/Gerardoruiz1/Simon-Says_color-pattern-game",
      },
    ],
  },
];

function ProjectRow({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const previewHref = project.external ?? project.github;
  const imageOnRight = index % 2 === 1;

  return (
    <article className="grid gap-8 md:grid-cols-2 md:gap-10 md:items-start lg:gap-14 pb-20 last:pb-0">
      {/* Preview block — order swaps on alternating rows */}
      <div className={imageOnRight ? "md:order-2" : "md:order-1"}>
        <a
          href={previewHref}
          target="_blank"
          rel="noopener noreferrer"
          className="block group rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <div className="aspect-video rounded-lg border border-border bg-secondary overflow-hidden transition-colors group-hover:border-primary/50">
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/[0.12] to-transparent">
              <Folder className="h-14 w-14 text-primary/25 transition-transform group-hover:scale-105" strokeWidth={1.25} />
            </div>
          </div>
        </a>
      </div>

      {/* Copy block — always readable, left-aligned in its column */}
      <div className={`space-y-4 min-w-0 ${imageOnRight ? "md:order-1" : "md:order-2"}`}>
        {project.period ? (
          <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{project.period}</p>
        ) : null}
        <h3 className="text-2xl font-bold leading-tight text-foreground md:text-3xl">
          <a
            href={previewHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            {project.title}
          </a>
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground md:text-base">{project.description}</p>
        <ul className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-xs text-muted-foreground md:text-sm">
          {project.technologies.map((tech) => (
            <li key={tech} className="text-foreground/80">
              {tech}
            </li>
          ))}
        </ul>
        <div className="flex gap-4 pt-1">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label={`${project.title} on GitHub`}
          >
            <Github size={20} />
          </a>
          {project.external ? (
            <a
              href={project.external}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label={`${project.title} external link`}
            >
              <ExternalLink size={20} />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export function ProjectsSection() {
  let globalIndex = 0;

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {projectSections.map((section) => (
            <div key={section.heading} className="mb-24 last:mb-0">
              <h2 className="text-3xl font-bold mb-2 flex items-center gap-4">
                {section.heading}
                <span className="hidden md:block h-px bg-border flex-1 min-w-[2rem]" />
              </h2>
              {section.blurb ? (
                <p className="text-muted-foreground text-sm max-w-3xl mt-4 leading-relaxed">{section.blurb}</p>
              ) : null}

              <div className="mt-12 space-y-0">
                {section.projects.map((project) => (
                  <ProjectRow key={`${section.heading}-${project.title}`} project={project} index={globalIndex++} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
