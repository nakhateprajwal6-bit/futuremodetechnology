import { useState } from "react";
import { Code, Brain, Cloud, BarChart3, Smartphone } from "lucide-react"; 
import { Cpu, CircuitBoard, Move, Camera, Bot, SatelliteDish } from "lucide-react";
import { Button } from "@/components/ui/button";

const allPrograms = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Build dynamic and responsive websites using HTML, CSS, JavaScript, and popular frameworks like React and Next.js.",
    duration: "9 Months",
    color: "primary",
    image: "./../src/assets/p1.jpg",
  },
  {
    icon: Bot,
    title: "Robotics Engineering",
    description:
      "Design and build intelligent robotic systems integrating mechanical, electrical, and software components.",
    duration: "18 Months",
    color: "primary",
    image: "./../src/assets/p2.jpg",
  },
  {
    icon: Code,
    title: "Software Development",
    description:
      "Master modern programming languages and frameworks with hands-on projects and industry mentorship.",
    duration: "12 Months",
    color: "primary",
    image: "./../src/assets/p3.jpg"
  },
  {
    icon: SatelliteDish,
    title: "IoT & Remote Robotics",
    description:
      "Connect and control robots remotely via IoT technologies and wireless communication systems.",
    duration: "11 Months",
    color: "secondary",
    image: "./../src/assets/p4.webp"
  },
  {
    icon: Brain,
    title: "Artificial Intelligence",
    description:
      "Explore machine learning, deep learning, and AI applications with cutting-edge tools and techniques.",
    duration: "18 Months",
    color: "secondary",
    image: "./../src/assets/p5.webp"
  },
  {
    icon: CircuitBoard,
    title: "Embedded Systems",
    description:
      "Develop real-time embedded hardware and firmware for robotic applications using microcontrollers and sensors.",
    duration: "12 Months",
    color: "secondary",
    image: "./../src/assets/p6.png"
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    description:
      "Learn cloud architecture, deployment, and management across major platforms like AWS and Azure.",
    duration: "10 Months",
    color: "primary",
    image: "./../src/assets/p7.jpg"
  },
  {
    icon: BarChart3,
    title: "Data Science",
    description:
      "Analyze complex data sets and extract insights using statistical methods and visualization tools.",
    duration: "16 Months",
    color: "primary",
    image: "./../src/assets/p8.webp"
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Build native and cross-platform mobile applications for iOS and Android using modern frameworks.",
    duration: "11 Months",
    color: "secondary",
    image: "./../src/assets/p9.jpg"
  },
  {
    icon: Move,
    title: "Mechatronics & Automation",
    description:
      "Master automation technologies combining robotics, mechanics, and electronics for industrial solutions.",
    duration: "14 Months",
    color: "primary",
    image: "./../src/assets/p10.jpg"
  },
  {
    icon: Cpu,
    title: "Control Systems",
    description:
      "Learn PID control, motion planning, and feedback systems to optimize robotic performance.",
    duration: "10 Months",
    color: "secondary",
    image: "./../src/assets/p11.webp"
  },
  {
    icon: Camera,
    title: "Computer Vision",
    description:
      "Enable robots to perceive and interact with their environment using vision and image processing techniques.",
    duration: "12 Months",
    color: "primary",
    image: "./../src/assets/p12.png"
  }
];

// Exclude Cybersecurity by not adding it
const programs = allPrograms;

export default function Programs() {
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const displayedPrograms = showAll ? programs : programs.slice(0, 6);

  return (
    <section id="programs" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="programs-title">
            Our Programs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="programs-subtitle">
            Comprehensive technology education programs designed to meet industry demands.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedPrograms.map((program, index) => {
            const IconComponent = program.icon;
            const bgColorClass = program.color === "primary" ? "bg-primary/10 dark:bg-primary/20" : "bg-secondary/10 dark:bg-secondary/20";
            const textColorClass = program.color === "primary" ? "text-primary" : "text-secondary";
            return (
              <div 
                key={program.title}
                className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl border border-border transition-all duration-300 group hover:scale-105 cursor-pointer"
                onClick={() => setSelectedProgram(program)}
                data-testid={`program-card-${index}`}
                role="button"
                aria-labelledby={`program-title-${index}`}
              >
                <div className={`w-16 h-16 ${bgColorClass} rounded-lg flex items-center justify-center mb-6`}>
                  <IconComponent className={`${textColorClass} text-2xl`} />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-3" data-testid={`program-title-${index}`}>
                  {program.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm" data-testid={`program-description-${index}`}>
                  {program.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground" data-testid={`program-duration-${index}`}>
                    {program.duration}
                  </span>
                  <Button variant="link" className="text-primary font-semibold p-0 h-auto hover:underline">
                    Learn More
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Show More / Show Less Button */}
        <div className="text-center mt-8">
          <Button
            onClick={() => setShowAll(!showAll)}
            variant="outline"
            className="px-6 py-3 text-lg"
          >
            {showAll ? "Show Less" : "Show More"}
          </Button>
        </div>
      </div>

      {/* Modal Popup */}
      {selectedProgram && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-lg w-full relative p-6 mx-4">
            <button
              onClick={() => setSelectedProgram(null)}
              className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              aria-label="Close modal"
            >
              ✕
            </button>
            <img
              src={selectedProgram.image}
              alt={selectedProgram.title}
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              {selectedProgram.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {selectedProgram.description}
            </p>
            <div className="text-sm text-muted-foreground mb-2">
              Duration: {selectedProgram.duration}
            </div>
            <Button onClick={() => setSelectedProgram(null)} className="w-full mt-4">
              Close
            </Button>
          </div>
        </div>
      )}
    </section>
  );
}
