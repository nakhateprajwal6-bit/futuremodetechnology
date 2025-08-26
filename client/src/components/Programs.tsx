import { Code, Brain, Cloud, Shield, BarChart3, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const programs = [
  {
    icon: Code,
    title: "Software Development",
    description: "Master modern programming languages and frameworks with hands-on projects and industry mentorship.",
    duration: "12 Months",
    color: "primary"
  },
  {
    icon: Brain,
    title: "Artificial Intelligence",
    description: "Explore machine learning, deep learning, and AI applications with cutting-edge tools and techniques.",
    duration: "18 Months",
    color: "secondary"
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    description: "Learn cloud architecture, deployment, and management across major platforms like AWS and Azure.",
    duration: "10 Months",
    color: "primary"
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Protect digital assets with comprehensive security protocols, ethical hacking, and risk management.",
    duration: "14 Months",
    color: "secondary"
  },
  {
    icon: BarChart3,
    title: "Data Science",
    description: "Analyze complex data sets and extract insights using statistical methods and visualization tools.",
    duration: "16 Months",
    color: "primary"
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Build native and cross-platform mobile applications for iOS and Android using modern frameworks.",
    duration: "11 Months",
    color: "secondary"
  }
];

export default function Programs() {
  return (
    <section id="programs" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="programs-title">
            Our Programs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="programs-subtitle">
            Comprehensive technology education programs designed to meet industry demands
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const IconComponent = program.icon;
            const bgColorClass = program.color === "primary" ? "bg-primary/10" : "bg-secondary/10";
            const textColorClass = program.color === "primary" ? "text-primary" : "text-secondary";
            return (
              <div 
                key={program.title} 
                className="bg-card rounded-xl p-6 shadow-lg hover-lift border border-border"
                data-testid={`program-card-${index}`}
              >
                <div className={`w-16 h-16 ${bgColorClass} rounded-lg flex items-center justify-center mb-6`}>
                  <IconComponent className={`${textColorClass} text-2xl`} />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-3" data-testid={`program-title-${index}`}>
                  {program.title}
                </h3>
                <p className="text-muted-foreground mb-4" data-testid={`program-description-${index}`}>
                  {program.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground" data-testid={`program-duration-${index}`}>
                    {program.duration}
                  </span>
                  <Button 
                    variant="link" 
                    className="text-primary font-semibold p-0 h-auto" 
                    data-testid={`button-learn-more-${index}`}
                    onClick={() => {
                      const contactSection = document.querySelector("#contact");
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
