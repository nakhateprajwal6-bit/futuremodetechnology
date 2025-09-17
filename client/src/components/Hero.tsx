import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Play, X } from "lucide-react";
import { Bot, Brain, SatelliteDish, Move, CircuitBoard } from "lucide-react";

// Programs & Services mapping
const programs = [
  {
    title: "Robotics",
    description:
      "Design and build intelligent robotic systems integrating mechanical, electrical, and software components.",
    duration: "18 Months",
    image: "./../src/assets/Robotics.jpeg",
    icon: Bot,
  },
  {
    title: "AI/ML",
    description:
      "Explore machine learning, deep learning, and AI applications with cutting-edge tools and techniques.",
    duration: "18 Months",
    image: "./../src/assets/H2.jpg",
    icon: Brain,
  },
  {
    title: "IoT",
    description:
      "Connect and control robots remotely via IoT technologies and wireless communication systems.",
    duration: "11 Months",
    image: "./../src/assets/h3.png",
    icon: SatelliteDish,
  },
  {
    title: "3D Printing",
    description:
      "Explore additive manufacturing techniques and create complex prototypes using 3D printing tools.",
    duration: "6 Months",
    image: "./../src/assets/h4.jpg",
    icon: Move,
  },
  {
    title: "PCB Design",
    description:
      "Learn PCB designing, schematic creation, and PCB manufacturing processes for electronics projects.",
    duration: "4 Months",
    image: "./../src/assets/h5.jpg",
    icon: CircuitBoard,
  },
];

export default function Hero() {
  const [selectedProgram, setSelectedProgram] = useState(null);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="./../src/assets/humanoid-banner.png"
          alt="Modern university campus"
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="relative z-10 text-center max-w-5xl w-full">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
          FutureMode Technology
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
          Empowering minds through innovative educational technology solutions
          that shape tomorrow's leaders
        </p>

        {/* Program Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {programs.map((program) => (
            <Button
              key={program.title}
              size="md"
              className="px-6 py-3 text-white font-bold border-2 border-cyan-500 rounded-md bg-transparent hover:bg-cyan-500 hover:text-black transition-all shadow-[0_0_15px_rgb(0,255,255)] hover:shadow-[0_0_25px_rgb(0,255,255),0_0_40px_rgb(0,255,255)]"
              onClick={() => setSelectedProgram(program)}
            >
              {program.title}
            </Button>
          ))}
        </div>

        {/* Hero Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}
            size="lg"
            className="px-8 py-4 bg-primary text-primary-foreground hover:bg-blue-700 hover-lift"
          >
            Explore Programs
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="px-8 py-4 border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary transition-colors"
            onClick={() =>
              window.open(
                "https://youtu.be/bkiXZuJEfm4?si=JfqKjclGj5et6I9Y",
                "_blank"
              )
            }
          >
            <Play className="mr-2 h-4 w-4" />
            Watch Demo
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        onClick={() => window.scrollTo({ top: document.body.scrollHeight / 2, behavior: "smooth" })}
      >
        <ChevronDown className="text-white text-2xl" />
      </div>

      {/* Modal */}
      {selectedProgram && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-lg w-full relative p-6 mx-4">
            <button
              onClick={() => setSelectedProgram(null)}
              className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              <X size={24} />
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
