import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <p className="font-mono text-primary mb-4 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Hi, my name is
          </p>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <span className="text-foreground">Alex Chen.</span>
          </h1>
          
          <h2 className="text-4xl md:text-6xl font-bold text-muted-foreground mb-6 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            I build things for the web.
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: "0.4s" }}>
            I'm a software engineer specializing in building exceptional digital experiences. 
            Currently focused on creating accessible, human-centered products with modern technologies.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12 animate-slide-up" style={{ animationDelay: "0.5s" }}>
            <Button variant="hero" size="lg" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
          
          <div className="flex gap-6 animate-slide-up" style={{ animationDelay: "0.6s" }}>
            <a
              href="https://github.com/Gerardoruiz1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover:-translate-y-1 duration-300"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/gerardojrb/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover:-translate-y-1 duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:gerardojrb.ruiz@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors hover:-translate-y-1 duration-300"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
}
