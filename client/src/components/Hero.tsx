import { Button } from "@/components/ui/button";
import { ChevronDown, Play } from "lucide-react";

export default function Hero() {
  const handleExplorePrograms = () => {
    const programsSection = document.querySelector("#programs");
    if (programsSection) {
      programsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080" 
          alt="Modern university campus with contemporary architecture" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight" data-testid="hero-title">
            Future Mode <span className="text-gradient">Technology</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto" data-testid="hero-subtitle">
            Empowering minds through innovative educational technology solutions that shape tomorrow's leaders
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleExplorePrograms}
              size="lg"
              className="px-8 py-4 bg-primary text-primary-foreground hover:bg-blue-700 hover-lift"
              data-testid="button-explore-programs"
            >
              Explore Programs
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary"
              data-testid="button-watch-demo"
              onClick={() => {
                // Open demo video in new tab or show modal
                window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
              }}
            >
              <Play className="mr-2 h-4 w-4" />
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
      
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        onClick={() => {
          const aboutSection = document.querySelector("#about");
          if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        <ChevronDown className="text-white text-2xl" data-testid="scroll-indicator" />
      </div>
    </section>
  );
}
