import { useState } from "react";
import { Code, Brain, Cloud, BarChart3, Smartphone } from "lucide-react"; 
import { Cpu, CircuitBoard, Move, Camera, Bot, SatelliteDish } from "lucide-react";
import { Button } from "./ui/button";

import p1Image from "./../assets/p1.jpg";
import p2Image from "./../assets/p2.jpg";
import p3Image from "./../assets/p3.jpg";
import p4Image from "./../assets/p4.webp";
import p5Image from "./../assets/p5.webp";
import p6Image from "./../assets/p6.png";
import p7Image from "./../assets/p7.jpg";
import p8Image from "./../assets/p8.webp";
import p9Image from "./../assets/p9.jpg";
import p10Image from "./../assets/p10.jpg";
import p11Image from "./../assets/p11.webp";
import p12Image from "./../assets/p12.png";
import "./../styles/Programs.css";

const allPrograms = [
  { icon: Code, title: "Web Development", description: "Build dynamic and responsive websites using HTML, CSS, JavaScript, and popular frameworks like React and Next.js.", duration: "9 Months", color: "primary", image: p1Image },
  { icon: Bot, title: "Robotics Engineering", description: "Design and build intelligent robotic systems integrating mechanical, electrical, and software components.", duration: "18 Months", color: "primary", image: p2Image },
  { icon: Code, title: "Software Development", description: "Master modern programming languages and frameworks with hands-on projects and industry mentorship.", duration: "12 Months", color: "primary", image: p3Image },
  { icon: SatelliteDish, title: "IoT & Remote Robotics", description: "Connect and control robots remotely via IoT technologies and wireless communication systems.", duration: "11 Months", color: "secondary", image: p4Image },
  { icon: Brain, title: "Artificial Intelligence", description: "Explore machine learning, deep learning, and AI applications with cutting-edge tools and techniques.", duration: "18 Months", color: "secondary", image: p5Image },
  { icon: CircuitBoard, title: "Embedded Systems", description: "Develop real-time embedded hardware and firmware for robotic applications using microcontrollers and sensors.", duration: "12 Months", color: "secondary", image: p6Image },
  { icon: Cloud, title: "Cloud Computing", description: "Learn cloud architecture, deployment, and management across major platforms like AWS and Azure.", duration: "10 Months", color: "primary", image: p7Image },
  { icon: BarChart3, title: "Data Science", description: "Analyze complex data sets and extract insights using statistical methods and visualization tools.", duration: "16 Months", color: "primary", image: p8Image },
  { icon: Smartphone, title: "Mobile Development", description: "Build native and cross-platform mobile applications for iOS and Android using modern frameworks.", duration: "11 Months", color: "secondary", image: p9Image },
  { icon: Move, title: "Mechatronics & Automation", description: "Master automation technologies combining robotics, mechanics, and electronics for industrial solutions.", duration: "14 Months", color: "primary", image: p10Image },
  { icon: Cpu, title: "Control Systems", description: "Learn PID control, motion planning, and feedback systems to optimize robotic performance.", duration: "10 Months", color: "secondary", image: p11Image },
  { icon: Camera, title: "Computer Vision", description: "Enable robots to perceive and interact with their environment using vision and image processing techniques.", duration: "12 Months", color: "primary", image: p12Image }
];

export default function Programs() {
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const displayedPrograms = showAll ? allPrograms : allPrograms.slice(0, 6);

  return (
    <section id="programs" className="programs-section">
      <div className="programs-container">
        <div className="programs-header">
          <h2 className="programs-title">Our Programs</h2>
          <p className="programs-subtitle">
            Comprehensive technology education programs designed to meet industry demands.
          </p>
        </div>

        <div className="programs-grid">
          {displayedPrograms.map((program, index) => {
            const IconComponent = program.icon;

            return (
              <div 
                key={index}
                className="program-card"
                onClick={() => setSelectedProgram(program)}
              >
                <div className={`program-icon-container ${program.color}`}>
                  <IconComponent className={`program-icon ${program.color}`} />
                </div>
                <h3 className="program-title">{program.title}</h3>
                <p className="program-description">{program.description}</p>
                <div className="program-footer">
                  <span className="program-duration">{program.duration}</span>
                  <Button variant="link" className="program-learn-more">Learn More</Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Show More / Less */}
        <div className="show-more-container">
          <Button
            onClick={() => setShowAll(!showAll)}
            variant="outline"
            className="show-more-button"
          >
            {showAll ? "Show Less" : "Show More"}
          </Button>
        </div>
      </div>

      {/* Modal */}
      {selectedProgram && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button
              onClick={() => setSelectedProgram(null)}
              className="modal-close-button"
              aria-label="Close modal"
            >
              ✕
            </button>
            <img src={selectedProgram.image} alt={selectedProgram.title} className="modal-image" />
            <h3 className="modal-title">{selectedProgram.title}</h3>
            <p className="modal-description">{selectedProgram.description}</p>
            <div className="modal-duration">Duration: {selectedProgram.duration}</div>
            <Button onClick={() => setSelectedProgram(null)} className="modal-close-btn">Close</Button>
          </div>
        </div>
      )}
    </section>
  );
}
