import React from "react";
import { Eye, Rocket } from "lucide-react";
import "./../styles/VisionMission.css";

export default function VisionMission() {
  return (
    <section id="vision" className="vision-mission-section">
      {/* Background Pattern */}
      <div className="vision-mission-background"></div>
      <div className="background-pattern">
        <div className="pattern-light"></div>
        <div className="pattern-dark"></div>
      </div>

      <div className="vision-mission-container">
        <div className="vision-mission-header">
          <h2 className="vision-mission-title" data-testid="vision-mission-title">
            Our Vision & Mission
          </h2>
          <p className="vision-mission-subtitle" data-testid="vision-mission-subtitle">
            Driving innovation in technology education and empowering the next generation of digital leaders.
          </p>
        </div>

        <div className="vision-mission-grid">
          <div className="vision-mission-card" data-testid="vision-card">
            <div className="card-glow vision"></div>
            <div className="card-content">
              <div className="card-icon-container vision-icon-container">
                <Eye className="card-icon" />
              </div>
              <h3 className="card-title">Our Vision</h3>
              <p className="card-description">
                To be the global leader in educational technology, creating a world where quality education 
                is accessible to everyone, everywhere, empowering learners to achieve their dreams and 
                contribute meaningfully to society.
              </p>
            </div>
          </div>

          <div className="vision-mission-card" data-testid="mission-card">
            <div className="card-glow mission"></div>
            <div className="card-content">
              <div className="card-icon-container mission-icon-container">
                <Rocket className="mission-icon" />
              </div>
              <h3 className="card-title">Our Mission</h3>
              <p className="card-description">
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
