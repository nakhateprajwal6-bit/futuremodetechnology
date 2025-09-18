import { Laptop } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="about-title">
            About Future Mode Technology
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="about-subtitle">
            Leading the revolution in educational technology with innovative solutions that transform learning experiences
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground" data-testid="about-section-title">
              Pioneering Educational Excellence
            </h3>
            <p className="text-lg text-muted-foreground" data-testid="about-description">
              Since our inception, we have been at the forefront of educational innovation, 
              developing cutting-edge technology solutions that empower educators and inspire students 
              to achieve their full potential.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2" data-testid="stat-students">100+</div>
                <div className="text-muted-foreground">Project & Products</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2" data-testid="stat-faculty">10+</div>
                <div className="text-muted-foreground">Expert Faculty</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2" data-testid="stat-success-rate">99%</div>
                <div className="text-muted-foreground">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2" data-testid="stat-support">24/7</div>
                <div className="text-muted-foreground">Support Available</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Modern technology education classroom with students using computers" 
              className="rounded-xl shadow-lg hover-lift" 
              data-testid="about-image"
            />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-full flex items-center justify-center animate-float">
              <Laptop className="text-primary-foreground text-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
