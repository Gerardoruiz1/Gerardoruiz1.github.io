const timelineEntries = [
  {
    date: "2024 — Present",
    title: "Current Chapter",
    description: "Building cool things, solving problems with code, and continuously learning.",
  },
  {
    date: "2023",
    title: "Professional Growth",
    description: "Took on new challenges and expanded my technical skill set.",
  },
  {
    date: "2022",
    title: "First Big Project",
    description: "Launched my first major project and learned the value of shipping fast.",
  },
  {
    date: "2021",
    title: "Deep Dive into Development",
    description: "Started building full-stack applications and fell in love with the process.",
  },
  {
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
            
            Vlog &amp; Timelines
            <span className="hidden md:block h-px bg-border flex-1 ml-4" />
          </h2>

          <div className="mt-12 space-y-0">
            {timelineEntries.map((entry, index) => (
              <div
                key={entry.title}
                className={`flex gap-8 ${index !== timelineEntries.length - 1 ? "pb-10" : ""}`}
              >
                {/* Left: date */}
                <div className="w-28 shrink-0 text-right">
                  <span className="font-mono text-sm text-muted-foreground">
                    {entry.date}
                  </span>
                </div>

                {/* Center: line */}
                <div className="flex flex-col items-center">
                  <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-1.5" />
                  {index !== timelineEntries.length - 1 && (
                    <div className="w-px flex-1 bg-border" />
                  )}
                </div>

                {/* Right: content */}
                <div className="pb-2">
                  <h3 className="text-lg font-semibold">{entry.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-1">
                    {entry.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
