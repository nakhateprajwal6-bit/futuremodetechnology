import { useState } from "react";
import {
  Bot,
  Cpu,
  Camera,
  SatelliteDish,
  Move,
  CircuitBoard,
  X,
  Code,
  Cloud,
  Shield,
  BarChart3,
  Smartphone,
  Database,
  Box,
  Server,
  Globe,
} from "lucide-react";
import { Button } from "./ui/button"; // adjust path if needed
import roboticLabImage from "../assets/roboticlab.jpg";
import industrialImage from "../assets/w2.jpg";
import iotImage from "../assets/w3.jpg";
import webDevImage from "../assets/w4.jpeg";
import printingImage from "../assets/w5.webp";
import mobileImage from "../assets/w6.webp";
import internshipImage from "../assets/w7.png";
import cadImage from "../assets/w8.jpg";
import dataImage from "../assets/w9.webp";
import securityImage from "../assets/w10.jpg";
import devopsImage from "../assets/w11.jpg";
import blockchainImage from "../assets/w12.jpg";
import rdImage from "../assets/w13.svg";
import softwareImage from "../assets/w14.png";
import "./../styles/Programs.css"; // Use Programs.css directly

const allServices = [
  { icon: Bot, title: "Robotic Lab", description: "Hands-on lab work with robotics hardware to experiment, build, and learn advanced systems.", duration: "6 Months", color: "primary", image: roboticLabImage },
  { icon: CircuitBoard, title: "Industrial Training & Projects", description: "Gain practical experience working on industrial automation and control systems.", duration: "6 Months", color: "primary", image: industrialImage },
  { icon: SatelliteDish, title: "IoT Solutions", description: "Develop smart connected devices and systems using cutting-edge Internet of Things technologies.", duration: "6 Months", color: "secondary", image: iotImage },
  { icon: Code, title: "Web Development", description: "Build interactive and responsive websites using modern web technologies and frameworks.", duration: "6 Months", color: "primary", image: webDevImage },
  { icon: Move, title: "3D Printing", description: "Explore additive manufacturing techniques and create complex prototypes using 3D printing tools.", duration: "3 Months", color: "secondary", image: printingImage },
  { icon: Smartphone, title: "Mobile App Development", description: "Design and develop mobile applications for Android and iOS using popular tools and platforms.", duration: "6 Months", color: "primary", image: mobileImage },
  { icon: Cpu, title: "Internship Programs", description: "Intern with industry partners and gain real-world experience in engineering and technology.", duration: "3 Months", color: "secondary", image: internshipImage },
  { icon: Camera, title: "CAD Designing", description: "Master computer-aided design tools to create precise engineering drawings and models.", duration: "4 Months", color: "primary", image: cadImage },
  { icon: BarChart3, title: "Data Science", description: "Analyze large datasets to uncover insights and inform strategic decisions using statistical tools.", duration: "6 Months", color: "secondary", image: dataImage },
  { icon: Shield, title: "Cybersecurity", description: "Implement robust security measures to protect networks, systems, and data from threats.", duration: "6 Months", color: "primary", image: securityImage },
  { icon: Server, title: "DevOps Engineering", description: "Streamline software development and deployment processes with automation and best practices.", duration: "6 Months", color: "secondary", image: devopsImage },
  { icon: Globe, title: "Blockchain Development", description: "Build decentralized applications and smart contracts using blockchain technology.", duration: "6 Months", color: "primary", image: blockchainImage },
  { icon: Box, title: "R & D Services", description: "Engage in research and development projects to innovate and enhance engineering solutions.", duration: "6 Months", color: "secondary", image: rdImage },
  { icon: Database, title: "Software Development", description: "Create efficient, scalable, and maintainable software systems tailored to client needs.", duration: "6 Months", color: "primary", image: softwareImage },
];

export default function WhatWeOffer() {
  const [selectedService, setSelectedService] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const displayedServices = showAll ? allServices : allServices.slice(0, 6);

  return (
    <section id="services" className="programs-section">
      <div className="programs-container">
        <div className="programs-header">
          <h2 className="programs-title">What We Offer</h2>
          <p className="programs-subtitle">
            Explore our diverse services combining robotics, computer technologies, and innovative solutions.
          </p>
        </div>

        <div className="programs-grid">
          {displayedServices.map((service, idx) => {
            const IconComponent = service.icon;
            return (
              <div
                key={idx}
                className="program-card"
                onClick={() => setSelectedService(service)}
              >
                <div className={`program-icon-container ${service.color}`}>
                  <IconComponent className={`program-icon ${service.color}`} />
                </div>
                <h3 className="program-title">{service.title}</h3>
                <p className="program-description">{service.description}</p>
                <div className="program-footer">
                  <span className="program-duration">{service.duration}</span>
                  <Button variant="link" className="program-learn-more">Learn More</Button>
                </div>
              </div>
            );
          })}
        </div>

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

      {selectedService && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button
              onClick={() => setSelectedService(null)}
              className="modal-close-button"
              aria-label="Close modal"
            >
              ✕
            </button>
            <img src={selectedService.image} alt={selectedService.title} className="modal-image" />
            <h3 className="modal-title">{selectedService.title}</h3>
            <p className="modal-description">{selectedService.description}</p>
            <div className="modal-duration">Duration: {selectedService.duration}</div>
            <Button onClick={() => setSelectedService(null)} className="modal-close-btn">Close</Button>
          </div>
        </div>
      )}
    </section>
  );
}
