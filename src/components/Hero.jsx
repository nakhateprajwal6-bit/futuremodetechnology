import { useState, useEffect } from "react";
import { Play, ArrowRight, ChevronDown, ChevronLeft, ChevronRight, X } from "lucide-react";
import { Bot, Brain, SatelliteDish, Printer, Cpu, Move, CircuitBoard } from "lucide-react";
import heroBackground from "../assets/humanoid-banner.png";
import roboticsImage from "../assets/robotics.jpg";
import aimlImage from "../assets/aiml.jpg";
import iotImage from "../assets/iot.jpg";
import printingImage from "../assets/3d-printing.jpg";
import pcbImage from "../assets/pcb.jpg";
import "./../styles/Hero.css";

const solutions = [
  {
    id: "#programs",
    icon: Bot,
    title: "Robotics & Automation",
    description: "Advanced robotic solutions for industrial automation and intelligent systems",
    color: "#0066CC",
    image: roboticsImage,
    duration: "18 Months"
  },
  {
    id: "#programs",
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Cutting-edge AI solutions for data analysis, prediction, and automation",
    color: "#00C896",
    image: aimlImage,
    duration: "18 Months"
  },
  {
    id: "#programs",
    icon: SatelliteDish,
    title: "IoT Solutions",
    description: "Connected devices and smart systems for real-time monitoring and control",
    color: "#FF6B6B",
    image: iotImage,
    duration: "11 Months"
  },
  {
    id: "#programs",
    icon: Printer,
    title: "3D Printing",
    description: "Rapid prototyping and manufacturing with advanced 3D printing technologies",
    color: "#9B51E0",
    image: printingImage,
    duration: "6 Months"
  },
  {
    id: "#programs",
    icon: Cpu,
    title: "Electronics Design",
    description: "Custom PCB design and embedded systems development",
    color: "#FFA500",
    image: pcbImage,
    duration: "4 Months"
  }
];

export default function Hero() {
  const [activeSolution, setActiveSolution] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [selectedProgram, setSelectedProgram] = useState(null);

  const handleExploreClick = () => {
    const programsSection = document.querySelector("#programs");
    if (programsSection) {
      programsSection.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
    }
  };

  const handleWatchDemoClick = () => {
    window.open("https://youtu.be/bkiXZuJEfm4?si=JfqKjclGj5et6I9Y", "_blank", "noopener noreferrer");
  };

  const handleScrollClick = () => {
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
    // Show modal with program details
    setSelectedProgram(solution);
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

  const closeModal = () => setSelectedProgram(null);

  return (
    <section className="hero-section" id="home">
      {/* Background with Gradient Overlay */}
      <div className="hero-background">
        <img
          src={heroBackground}
          alt="Advanced Technology Solutions"
          className="hero-background-image"
        />
        <div className="hero-background-overlay"></div>
      </div>

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
                          <div className="solution-duration">
                            Duration: {solution.duration}
                          </div>
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
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator" onClick={handleScrollClick} role="button" tabIndex={0}>
        <ChevronDown className="scroll-icon" />
      </div>

      {/* Modal for Program Details */}
      {selectedProgram && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeModal} className="modal-close-button" aria-label="Close modal">
              <X size={24} />
            </button>
            <img
              src={selectedProgram.image}
              alt={selectedProgram.title}
              className="modal-image"
            />
            <div className="modal-header">
              <div className="modal-icon" style={{ color: selectedProgram.color }}>
                {selectedProgram.icon && <selectedProgram.icon size={32} />}
              </div>
              <h3 className="modal-title">{selectedProgram.title}</h3>
            </div>
            <p className="modal-description">{selectedProgram.description}</p>
            <div className="modal-duration">
              Duration: <strong>{selectedProgram.duration}</strong>
            </div>
            <button 
              onClick={() => {
                closeModal();
                handleExploreClick();
              }} 
              className="modal-explore-btn"
            >
              Explore Program Details
            </button>
          </div>
        </div>
      )}
    </section>
  );
}