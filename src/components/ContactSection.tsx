import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-mono text-primary mb-4">
            <span className="text-muted-foreground">03.</span> What's Next?
          </p>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In Touch
          </h2>
          
          <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
            I'm currently looking for new opportunities and my inbox is always open. 
            Whether you have a question or just want to say hi, I'll try my best 
            to get back to you!
          </p>
          
          <Button variant="hero" size="lg" asChild>
            <a href="mailto:gerardojrb.ruiz@gmail.com" className="gap-2">
              <Mail className="w-5 h-5" />
              Say Hello Through Email
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
