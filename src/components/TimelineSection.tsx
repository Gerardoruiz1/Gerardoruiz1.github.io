import { Briefcase, GraduationCap, Rocket, Code2, Award, Star } from "lucide-react";

const timelineEvents = [
  {
    icon: Star,
    date: "2024 — Present",
    title: "Current Chapter",
    description: "Building cool things, solving problems with code, and continuously learning.",
  },
  {
    icon: Briefcase,
    date: "2023",
    title: "Professional Growth",
    description: "Took on new challenges and expanded my technical skill set.",
  },
  {
    icon: Rocket,
    date: "2022",
    title: "First Big Project",
    description: "Launched my first major project and learned the value of shipping fast.",
  },
  {
    icon: Code2,
    date: "2021",
    title: "Deep Dive into Development",
    description: "Started building full-stack applications and fell in love with the process.",
  },
  {
    icon: GraduationCap,
    date: "2020",
    title: "The Beginning",
    description: "Wrote my first line of code and discovered my passion for software engineering.",
  },
];

export function TimelineSection() {
  return (
    <section id="timeline" className="py-24 relative bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 flex items-center gap-4">
            <span className="font-mono text-primary text-xl">05.</span>
            Timeline
            <span className="hidden md:block h-px bg-border flex-1 ml-4" />
          </h2>

          <div className="relative mt-12">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div
                  key={event.title}
                  className={`relative flex items-start gap-6 md:gap-12 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 pl-16 md:pl-0 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <span className="font-mono text-primary text-sm">{event.date}</span>
                    <h3 className="text-xl font-semibold mt-1 mb-2">{event.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{event.description}</p>
                  </div>

                  {/* Icon dot */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-card border-2 border-primary/50 shadow-lg shadow-primary/10 z-10">
                    <event.icon className="w-5 h-5 text-primary" />
                  </div>

                  {/* Spacer for the other side */}
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
