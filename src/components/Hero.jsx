<<<<<<< HEAD
import { useState, useEffect } from "react";
import { Play, ArrowRight, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { Bot, Brain, SatelliteDish, Printer, Cpu } from "lucide-react";
import heroBackground from "../assets/humanoid-banner.png";
import "./../styles/Hero.css";

const solutions = [
  {
    id: "#programs",
    icon: Bot,
    title: "Robotics & Automation",
    description: "Advanced robotic solutions for industrial automation and intelligent systems",
    color: "#0066CC"
  },
  {
    id: "#programs",
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Cutting-edge AI solutions for data analysis, prediction, and automation",
    color: "#00C896"
  },
  {
    id: "#programs",
    icon: SatelliteDish,
    title: "IoT Solutions",
    description: "Connected devices and smart systems for real-time monitoring and control",
    color: "#FF6B6B"
  },
  {
    id: "#programs",
    icon: Printer,
    title: "3D Printing",
    description: "Rapid prototyping and manufacturing with advanced 3D printing technologies",
    color: "#9B51E0"
  },
  {
    id: "#programs",
    icon: Cpu,
    title: "Electronics Design",
    description: "Custom PCB design and embedded systems development",
    color: "#FFA500"
  }
];

export default function Hero() {
  const [activeSolution, setActiveSolution] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const handleExploreClick = () => {
    const solutionsSection = document.querySelector("#services");
    if (solutionsSection) {
      solutionsSection.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
=======
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
    const programsSection = document.querySelector("#programs");
    if (programsSection) {
      programsSection.scrollIntoView({ behavior: "smooth" });
>>>>>>> b762ab8bef42ca9929d080f43d790c0e517208ec
    }
  };

  const handleWatchDemoClick = () => {
    window.open("https://youtu.be/bkiXZuJEfm4?si=JfqKjclGj5et6I9Y", "_blank");
  };

  const handleScrollClick = () => {
<<<<<<< HEAD
    const solutionsSection = document.querySelector("#about");
    if (solutionsSection) {
      solutionsSection.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
    }
  };

  // Handle solution click from hero section
  const handleSolutionClick = (solution) => {
    // Update URL to trigger navigation
    window.location.hash = solution.id;
    
    // Scroll to solutions section
    setTimeout(() => {
      const solutionsSection = document.querySelector("#solutions");
      if (solutionsSection) {
        solutionsSection.scrollIntoView({ 
          behavior: "smooth",
          block: "start"
        });
      }
    }, 100);
  };

  // Next solution
  const nextSolution = () => {
    setActiveSolution((prev) => (prev + 1) % solutions.length);
    resetAutoPlay();
  };

  // Previous solution
  const prevSolution = () => {
    setActiveSolution((prev) => (prev - 1 + solutions.length) % solutions.length);
    resetAutoPlay();
  };

  // Reset autoplay timer
  const resetAutoPlay = () => {
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 5000);
  };

  // Auto-play slider
  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setActiveSolution((prev) => (prev + 1) % solutions.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [autoPlay]);

  const currentSolution = solutions[activeSolution];
  const IconComponent = currentSolution.icon;

  return (
    <section className="hero-section" id="home">
      {/* Background with Gradient Overlay */}
      <div className="hero-background">
        <img
          src={heroBackground}
          alt="Advanced Technology Solutions"
=======
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
>>>>>>> b762ab8bef42ca9929d080f43d790c0e517208ec
          className="hero-background-image"
        />
        <div className="hero-background-overlay"></div>
      </div>

<<<<<<< HEAD
      <div className="hero-container">
        <div className="hero-content">
          {/* Main Content */}
          <div className="hero-main">
            <div className="hero-badge">
              <span>Innovating Tomorrow's Technology</span>
            </div>
            
            <h1 className="hero-title">
              <span className="hero-title-line">Advanced Technology</span>
              <span className="hero-title-line accent">Solutions for</span>
              <span className="hero-title-line">Modern Businesses</span>
            </h1>
            
            <p className="hero-description">
              FutureMode Technology delivers cutting-edge solutions in robotics, AI, IoT, 
              and advanced manufacturing. We help businesses transform through innovative 
              technology and expert engineering.
            </p>

            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">50+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat">
                <div className="stat-number">15+</div>
                <div className="stat-label">Industry Partners</div>
              </div>
              <div className="stat">
                <div className="stat-number">5+</div>
                <div className="stat-label">Years Experience</div>
              </div>
            </div>

            <div className="hero-actions">
              <button onClick={handleExploreClick} className="hero-button primary">
                Explore Solutions
                <ArrowRight size={20} />
              </button>
              <button onClick={handleWatchDemoClick} className="hero-button secondary">
                <Play size={20} />
                Watch Demo
              </button>
            </div>
          </div>

          {/* Solutions Preview with Slider */}
          <div className="solutions-preview">
            <div className="solutions-header">
              <h3 className="solutions-title">Our Solutions</h3>
              <div className="slider-controls">
                <button 
                  className="slider-button prev"
                  onClick={prevSolution}
                  aria-label="Previous solution"
                >
                  <ChevronLeft size={20} />
                </button>
                <div className="solutions-indicators">
                  {solutions.map((_, index) => (
                    <button
                      key={index}
                      className={`indicator ${index === activeSolution ? 'active' : ''}`}
                      onClick={() => {
                        setActiveSolution(index);
                        resetAutoPlay();
                      }}
                      aria-label={`View ${solutions[index].title}`}
                    />
                  ))}
                </div>
                <button 
                  className="slider-button next"
                  onClick={nextSolution}
                  aria-label="Next solution"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
            
            <div className="solution-slider">
              <div 
                className="solution-slider-track"
                style={{ transform: `translateX(-${activeSolution * 100}%)` }}
              >
                {solutions.map((solution, index) => {
                  const SolutionIcon = solution.icon;
                  return (
                    <div
                      key={solution.id}
                      className="solution-slide"
                      onClick={() => handleSolutionClick(solution)}
                    >
                      <div className="solution-card">
                        <div className="solution-icon" style={{ color: solution.color }}>
                          <SolutionIcon size={48} />
                        </div>
                        <div className="solution-content">
                          <h4 className="solution-title">{solution.title}</h4>
                          <p className="solution-description">{solution.description}</p>
                          
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className="slider-mobile-nav">
              <button 
                className="mobile-slider-button prev"
                onClick={prevSolution}
                aria-label="Previous solution"
              >
                <ChevronLeft size={20} />
              </button>
              <span className="slide-counter">
                {activeSolution + 1} / {solutions.length}
              </span>
              <button 
                className="mobile-slider-button next"
                onClick={nextSolution}
                aria-label="Next solution"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
=======
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
>>>>>>> b762ab8bef42ca9929d080f43d790c0e517208ec
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator" onClick={handleScrollClick}>
<<<<<<< HEAD
        <ChevronDown className="scroll-icon" />
      </div>
    </section>
  );
}
=======
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
>>>>>>> b762ab8bef42ca9929d080f43d790c0e517208ec
