export function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 flex items-center gap-4">
            <span className="font-mono text-primary text-xl">01.</span>
            About Me
            <span className="hidden md:block h-px bg-border flex-1 ml-4" />
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12 mt-12">
            <div className="md:col-span-2 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Hello! I'm Alex, a software engineer based in San Francisco. I enjoy 
                creating things that live on the internet, whether that be websites, 
                applications, or anything in between. My goal is to always build products 
                that provide pixel-perfect, performant experiences.
              </p>
              
              <p>
                Shortly after graduating from{" "}
                <span className="text-primary">UC Berkeley</span> with a degree in 
                Computer Science, I joined a startup where I worked on a wide variety 
                of interesting and meaningful projects on a daily basis.
              </p>
              
              <p>
                Fast-forward to today, and I've had the privilege of working at{" "}
                <span className="text-primary">a fast-growing startup</span>,{" "}
                <span className="text-primary">a large corporation</span>, and{" "}
                <span className="text-primary">as a freelancer</span>. My main focus 
                these days is building accessible, inclusive products and digital 
                experiences.
              </p>
              
              <p>
                Here are a few technologies I've been working with recently:
              </p>
              
              <ul className="grid grid-cols-2 gap-2 font-mono text-sm mt-4">
                {[
                  "TypeScript",
                  "React",
                  "Node.js",
                  "Python",
                  "PostgreSQL",
                  "AWS",
                ].map((tech) => (
                  <li key={tech} className="flex items-center gap-2">
                    <span className="text-primary">▹</span>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative group">
              <div className="relative rounded-lg overflow-hidden">
                <div className="aspect-square bg-secondary rounded-lg border-2 border-primary/20 group-hover:border-primary/50 transition-colors duration-300">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <div className="text-6xl font-mono text-primary/50">AC</div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300 rounded-lg" />
              </div>
              <div className="absolute -inset-4 border-2 border-primary/30 rounded-lg -z-10 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
