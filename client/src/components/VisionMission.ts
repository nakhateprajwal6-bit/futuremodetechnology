import { Eye, Rocket } from "lucide-react";

export default function VisionMission() {
  return (
    <section id="vision" className="py-20 bg-muted/50 dark:bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 dark:from-primary/10 dark:to-secondary/10"></div>
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full bg-repeat bg-[length:60px_60px]" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
             }}
             className="dark:hidden another-class"></div>
        <div className="w-full h-full bg-repeat bg-[length:60px_60px] hidden dark:block" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
             }}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="vision-mission-title">
            Vision & Mission<span className="text-gradient"></span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="vision-mission-subtitle">
            Driving educational transformation through technology and innovation
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="group relative" data-testid="vision-card">
            <div className="absolute -inset-2 bg-gradient-to-r from-primary to-secondary rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
            <div className="relative bg-card border border-border rounded-xl p-8 hover-lift backdrop-blur-sm">
              <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <Eye className="text-primary text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To be the global leader in educational technology, creating a world where quality education 
                is accessible to everyone, everywhere, empowering learners to achieve their dreams and 
                contribute meaningfully to society.
              </p>
            </div>
          </div>
          
          <div className="group relative" data-testid="mission-card">
            <div className="absolute -inset-2 bg-gradient-to-r from-secondary to-primary rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
            <div className="relative bg-card border border-border rounded-xl p-8 hover-lift backdrop-blur-sm">
              <div className="w-16 h-16 bg-secondary/10 dark:bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                <Rocket className="text-secondary text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To develop innovative educational technologies and provide exceptional learning experiences 
                that inspire curiosity, foster creativity, and build the skills needed for success in 
                the digital age.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
