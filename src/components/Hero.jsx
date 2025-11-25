<<<<<<< HEAD
import { useState } from "react";
import { ChevronDown, Play, X } from "lucide-react";
import { Bot, Brain, SatelliteDish, Move, CircuitBoard } from "lucide-react";
=======
import { useState, useEffect } from "react";
import { Play, ArrowRight, ChevronDown, ChevronLeft, ChevronRight, X } from "lucide-react";
import { Bot, Brain, SatelliteDish, Printer, Cpu } from "lucide-react";
>>>>>>> 8c7a750d5aaf2bfb6f6ba54e52d9c80512c2dd71
import heroBackground from "../assets/humanoid-banner.png";
import roboticsImage from "../assets/robotics.jpg";
import aimlImage from "../assets/aiml.jpg";
import iotImage from "../assets/iot.jpg";
import printingImage from "../assets/3d-printing.jpg";
import pcbImage from "../assets/pcb.jpg";
import "./../styles/Hero.css";

<<<<<<< HEAD
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
=======
// Combined Programs & Solutions
const programs = [
  {
    id: "#programs",
    title: "Robotics & Automation",
    description: "Advanced robotic solutions for industrial automation and intelligent systems",
    duration: "18 Months",
    image: roboticsImage,
    icon: Bot,
    color: "#0066CC",
  },
  {
    id: "#programs",
    title: "AI & Machine Learning",
    description: "Cutting-edge AI solutions for data analysis, prediction, and automation",
    duration: "18 Months",
    image: aimlImage,
    icon: Brain,
    color: "#00C896",
  },
  {
    id: "#programs",
    title: "IoT Solutions",
    description: "Connected devices and smart systems for real-time monitoring and control",
    duration: "11 Months",
    image: iotImage,
    icon: SatelliteDish,
    color: "#FF6B6B",
  },
  {
    id: "#programs",
    title: "3D Printing",
    description: "Rapid prototyping and manufacturing with advanced 3D printing technologies",
    duration: "6 Months",
    image: printingImage,
    icon: Printer,
    color: "#9B51E0",
  },
  {
    id: "#programs",
    title: "Electronics Design",
    description: "Custom PCB design and embedded systems development",
    duration: "4 Months",
    image: pcbImage,
    icon: Cpu,
    color: "#FFA500",
>>>>>>> 8c7a750d5aaf2bfb6f6ba54e52d9c80512c2dd71
  },
];

export default function Hero() {
<<<<<<< HEAD
  const [selectedProgram, setSelectedProgram] = useState(null);

  const handleProgramClick = (program) => setSelectedProgram(program);

  const closeModal = () => setSelectedProgram(null);

  const handleExploreClick = () => {
    const programsSection = document.querySelector("#programs");
    if (programsSection) {
      programsSection.scrollIntoView({ behavior: "smooth" });
    }
=======
  const [activeProgram, setActiveProgram] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [selectedProgram, setSelectedProgram] = useState(null);

  const handleExploreClick = () => {
    const section = document.querySelector("#programs");
    if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
>>>>>>> 8c7a750d5aaf2bfb6f6ba54e52d9c80512c2dd71
  };

  const handleWatchDemoClick = () => {
    window.open("https://youtu.be/bkiXZuJEfm4?si=JfqKjclGj5et6I9Y", "_blank");
  };

  const handleScrollClick = () => {
<<<<<<< HEAD
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
=======
    window.scrollTo({ top: document.body.scrollHeight / 2, behavior: "smooth" });
  };

  const handleProgramClick = (program) => setSelectedProgram(program);

  const closeModal = () => setSelectedProgram(null);

  const nextProgram = () => {
    setActiveProgram((prev) => (prev + 1) % programs.length);
    resetAutoPlay();
  };

  const prevProgram = () => {
    setActiveProgram((prev) => (prev - 1 + programs.length) % programs.length);
    resetAutoPlay();
  };

  const resetAutoPlay = () => {
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 5000);
  };

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => setActiveProgram((prev) => (prev + 1) % programs.length), 4000);
    return () => clearInterval(interval);
  }, [autoPlay]);

  const currentProgram = programs[activeProgram];
  const IconComponent = currentProgram.icon;

  return (
    <section className="hero-section" id="home">
      {/* Background */}
      <div className="hero-background">
        <img src={heroBackground} alt="Advanced Technology Solutions" className="hero-background-image" />
        <div className="hero-background-overlay"></div>
      </div>

      {/* Hero Content */}
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">FutureMode Technology</h1>
          <p className="hero-subtitle">
            Empowering minds through innovative educational technology solutions that shape tomorrow's leaders
          </p>

          {/* Program Buttons */}
          <div className="program-buttons">
            {programs.map((program, index) => (
              <button
                key={program.title}
                className={`program-button ${index === activeProgram ? "active" : ""}`}
                onClick={() => setActiveProgram(index)}
              >
                {program.title}
              </button>
            ))}
          </div>

          {/* Hero Actions */}
          <div className="hero-actions">
            <button onClick={handleExploreClick} className="hero-button primary">
              Explore Programs <ArrowRight size={20} />
            </button>
            <button onClick={handleWatchDemoClick} className="hero-button secondary">
              <Play size={20} /> Watch Demo
            </button>
          </div>
        </div>

        {/* Program Slider */}
        <div className="program-slider">
          <div className="slider-track" style={{ transform: `translateX(-${activeProgram * 100}%)` }}>
            {programs.map((program, index) => (
              <div
                key={program.title}
                className="slider-slide"
                onClick={() => handleProgramClick(program)}
              >
                <div className="program-card">
                  <div className="program-icon" style={{ color: program.color }}>
                    <IconComponent size={48} />
                  </div>
                  <h4 className="program-title">{program.title}</h4>
                  <p className="program-description">{program.description}</p>
                  <div className="program-duration">Duration: {program.duration}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Slider Controls */}
          <div className="slider-controls">
            <button onClick={prevProgram} aria-label="Previous program"><ChevronLeft size={20} /></button>
            <span>{activeProgram + 1} / {programs.length}</span>
            <button onClick={nextProgram} aria-label="Next program"><ChevronRight size={20} /></button>
          </div>
>>>>>>> 8c7a750d5aaf2bfb6f6ba54e52d9c80512c2dd71
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
<<<<<<< HEAD
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
=======
            <button onClick={closeModal} className="modal-close-button" aria-label="Close modal">
              <X size={24} />
            </button>
            <img src={selectedProgram.image} alt={selectedProgram.title} className="modal-image" />
            <h3 className="modal-title">{selectedProgram.title}</h3>
            <p className="modal-description">{selectedProgram.description}</p>
            <div className="modal-duration">Duration: {selectedProgram.duration}</div>
            <button onClick={closeModal} className="modal-close-btn">Close</button>
>>>>>>> 8c7a750d5aaf2bfb6f6ba54e52d9c80512c2dd71
          </div>
        </div>
      )}
    </section>
  );
}
