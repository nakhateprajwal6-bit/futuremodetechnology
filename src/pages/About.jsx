import { Laptop } from "lucide-react";
import "./../styles/About.css";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-header">
          <h2 className="about-title" data-testid="about-title">
            About Future Mode Technology
          </h2>
          <p className="about-subtitle" data-testid="about-subtitle">
            Leading the revolution in educational technology with innovative solutions that transform learning experiences
          </p>
        </div>
        
        <div className="about-content">
          <div className="about-text-content">
            <h3 className="about-section-title" data-testid="about-section-title">
              Pioneering Educational Excellence
            </h3>
            <p className="about-description" data-testid="about-description">
              Since our inception, we have been at the forefront of educational innovation, 
              developing cutting-edge technology solutions that empower educators and inspire students 
              to achieve their full potential.
            </p>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number primary" data-testid="stat-students">100+</div>
                <div className="stat-label">Project & Products</div>
              </div>
              <div className="stat-item">
                <div className="stat-number secondary" data-testid="stat-faculty">10+</div>
                <div className="stat-label">Expert Faculty</div>
              </div>
              <div className="stat-item">
                <div className="stat-number primary" data-testid="stat-success-rate">99%</div>
                <div className="stat-label">Success Rate</div>
              </div>
              <div className="stat-item">
                <div className="stat-number secondary" data-testid="stat-support">24/7</div>
                <div className="stat-label">Support Available</div>
              </div>
            </div>
          </div>
          <div className="about-image-container">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Modern technology education classroom with students using computers" 
              className="about-image" 
              data-testid="about-image"
            />
            <div className="floating-icon">
              <Laptop className="floating-icon-svg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
