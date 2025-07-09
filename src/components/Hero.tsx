
import { useState } from "react";
import { ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const [isColorMode, setIsColorMode] = useState(false);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/10"></div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-[80vh]">
          
          {/* Left side - Introduction text */}
          <div className="lg:col-span-1 text-left space-y-6 animate-fade-in">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-4">
                <span className="text-foreground">My Self,</span>
              </h1>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6">
                Rob Oliver
              </h2>
            </div>
            
            <p className="text-muted-foreground text-lg max-w-md leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing industry. Lorem Ipsum has been the industry's.
            </p>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="mt-8 min-w-[160px] border-muted-foreground/30 hover:border-primary"
            >
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
          </div>

          {/* Center - Profile Image */}
          <div className="lg:col-span-1 flex justify-center animate-fade-in">
            <div 
              className="relative cursor-pointer group"
              onClick={() => setIsColorMode(!isColorMode)}
            >
              <div className="w-80 h-96 rounded-3xl overflow-hidden bg-muted/20 backdrop-blur-sm border border-muted/30 transition-all duration-500 hover:scale-105">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face"
                  alt="Rob Oliver - Profile"
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    isColorMode 
                      ? 'filter-none' 
                      : 'grayscale hover:grayscale-0'
                  }`}
                />
              </div>
              
              {/* Subtle hover effect */}
              <div className="absolute inset-0 rounded-3xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Right side - Role/Title */}
          <div className="lg:col-span-1 text-left lg:text-left space-y-4 animate-fade-in">
            <div className="space-y-2">
              <p className="text-foreground text-2xl sm:text-3xl lg:text-4xl font-light">
                I am a
              </p>
              <h3 className="text-primary text-2xl sm:text-3xl lg:text-4xl font-bold relative">
                Engineer
                <div className="absolute -bottom-2 left-0 w-20 h-1 bg-primary rounded-full"></div>
              </h3>
            </div>
          </div>
        </div>

        {/* Bottom scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-12 h-12 rounded-full border-2 border-muted-foreground/30 flex items-center justify-center hover:border-primary transition-colors cursor-pointer">
            <ArrowDown className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
          </div>
        </div>
      </div>
    </section>
  );
}
