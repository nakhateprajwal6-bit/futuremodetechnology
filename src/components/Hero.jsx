import { useState } from "react";
import { ChevronDown, Play, X } from "lucide-react";
import { Bot, Brain, SatelliteDish, Move, CircuitBoard } from "lucide-react";
import heroBackground from "../assets/humanoid-banner.png";
import roboticsImage from "../assets/robotics.jpg";
import aimlImage from "../assets/aiml.jpg";
import iotImage from "../assets/iot.jpg";
import printingImage from "../assets/3d-printing.jpg";
import pcbImage from "../assets/pcb.jpg";
import "./../styles/Hero.css";

// Programs & Services mapping
const programs = [
  {
    title: "Robotics",
    description:
      "Design and build intelligent robotic systems integrating mechanical, electrical, and software components.",
    duration: "18 Months",
    image: roboticsImage,
    icon: Bot,
  },
  {
    title: "AI/ML",
    description:
      "Explore machine learning, deep learning, and AI applications with cutting-edge tools and techniques.",
    duration: "18 Months",
    image: aimlImage,
    icon: Brain,
  },
  {
    title: "IoT",
    description:
      "Connect and control robots remotely via IoT technologies and wireless communication systems.",
    duration: "11 Months",
    image: iotImage,
    icon: SatelliteDish,
  },
  {
    title: "3D Printing",
    description:
      "Explore additive manufacturing techniques and create complex prototypes using 3D printing tools.",
    duration: "6 Months",
    image: printingImage,
    icon: Move,
  },
  {
    title: "PCB Design",
    description:
      "Learn PCB designing, schematic creation, and PCB manufacturing processes for electronics projects.",
    duration: "4 Months",
    image: pcbImage,
    icon: CircuitBoard,
  },
];

export default function Hero() {
  const [selectedProgram, setSelectedProgram] = useState(null);

  const handleProgramClick = (program) => setSelectedProgram(program);

  const closeModal = () => setSelectedProgram(null);

  const handleExploreClick = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  const handleWatchDemoClick = () => {
    window.open("https://youtu.be/bkiXZuJEfm4?si=JfqKjclGj5et6I9Y", "_blank");
  };

  const handleScrollClick = () => {
    window.scrollTo({
      top: document.body.scrollHeight / 2,
      behavior: "smooth",
    });
  };

  return (
    <section className="hero-section">
      {/* Background */}
      <div className="hero-background">
        <img
          src={heroBackground}
          alt="Modern university campus"
          className="hero-background-image"
        />
        <div className="hero-background-overlay"></div>
      </div>

      <div className="hero-content">
        <h1 className="hero-title">FutureMode Technology</h1>
        <p className="hero-subtitle">
          Empowering minds through innovative educational technology solutions
          that shape tomorrow's leaders
        </p>

        {/* Program Buttons */}
        <div className="program-buttons">
          {programs.map((program) => (
            <button
              key={program.title}
              className="program-button"
              onClick={() => handleProgramClick(program)}
            >
              {program.title}
            </button>
          ))}
        </div>

        {/* Hero Buttons */}
        <div className="hero-actions">
          <button onClick={handleExploreClick} className="hero-button-primary">
            Explore Programs
          </button>

          <button
            className="hero-button-secondary"
            onClick={handleWatchDemoClick}
          >
            <Play className="play-icon" />
            Watch Demo
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator" onClick={handleScrollClick}>
        <ChevronDown className="scroll-indicator-icon" />
      </div>

      {/* Modal */}
      {selectedProgram && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button onClick={closeModal} className="modal-close-button">
              <X size={24} />
            </button>
            <img
              src={selectedProgram.image}
              alt={selectedProgram.title}
              className="modal-image"
            />
            <h3 className="modal-title">{selectedProgram.title}</h3>
            <p className="modal-description">{selectedProgram.description}</p>
            <div className="modal-duration">
              Duration: {selectedProgram.duration}
            </div>
            <button onClick={closeModal} className="modal-close-btn">
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
