
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20"></div>
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            <span className="text-primary">John</span> Doe
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 animate-fade-in">
            Full Stack Developer & UI/UX Designer
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in">
            Passionate about creating beautiful, functional, and user-centered digital experiences.
            Let's build something amazing together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in">
            <Button size="lg" className="min-w-[150px]">
              View My Work
            </Button>
            <Button variant="outline" size="lg" className="min-w-[150px]">
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mb-12 animate-fade-in">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="h-6 w-6" />
            </a>
          </div>

          <div className="animate-bounce">
            <ArrowDown className="h-8 w-8 mx-auto text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
}
