import { Eye, Rocket } from "lucide-react";

export default function VisionMission() {
  return (
    <section id="vision" className="py-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4" data-testid="vision-mission-title">
            Vision & Mission
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto" data-testid="vision-mission-subtitle">
            Driving educational transformation through technology and innovation
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 hover-lift" data-testid="vision-card">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Eye className="text-primary-foreground text-2xl" />
            </div>
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">Our Vision</h3>
            <p className="text-primary-foreground/90 text-lg">
              To be the global leader in educational technology, creating a world where quality education 
              is accessible to everyone, everywhere, empowering learners to achieve their dreams and 
              contribute meaningfully to society.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 hover-lift" data-testid="mission-card">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Rocket className="text-primary-foreground text-2xl" />
            </div>
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">Our Mission</h3>
            <p className="text-primary-foreground/90 text-lg">
              To develop innovative educational technologies and provide exceptional learning experiences 
              that inspire curiosity, foster creativity, and build the skills needed for success in 
              the digital age.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
