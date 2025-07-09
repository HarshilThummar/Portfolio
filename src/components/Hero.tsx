
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
        <div className="flex items-center justify-center min-h-[80vh]">
          
          {/* Center - Profile Image with overlaid text */}
          <div className="flex justify-center animate-fade-in">
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
              
              {/* Name at top left corner */}
              <div className="absolute top-4 left-4 text-left">
                <h1 className="text-2xl sm:text-3xl font-light mb-1">
                  <span className="text-white drop-shadow-lg">My Self,</span>
                </h1>
                <h2 className="text-2xl sm:text-3xl font-bold text-primary drop-shadow-lg">
                  Rob Oliver
                </h2>
              </div>

              {/* Role at bottom right corner */}
              <div className="absolute bottom-4 right-4 text-right">
                <div className="space-y-1">
                  <p className="text-white text-lg sm:text-xl font-light drop-shadow-lg">
                    I am a
                  </p>
                  <h3 className="text-primary text-lg sm:text-xl font-bold relative drop-shadow-lg">
                    Engineer
                    <div className="absolute -bottom-1 right-0 w-16 h-0.5 bg-primary rounded-full"></div>
                  </h3>
                </div>
              </div>
              
              {/* Subtle hover effect */}
              <div className="absolute inset-0 rounded-3xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>

        {/* Description and Download button below the image */}
        <div className="flex flex-col items-center space-y-6 animate-fade-in mt-8">
          <p className="text-muted-foreground text-lg max-w-md leading-relaxed text-center">
            Lorem Ipsum is simply dummy text of the printing industry. Lorem Ipsum has been the industry's.
          </p>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="min-w-[160px] border-muted-foreground/30 hover:border-primary"
          >
            <Download className="w-4 h-4 mr-2" />
            Download CV
          </Button>
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
