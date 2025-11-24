import { useState, useEffect, useRef } from "react";
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
  ArrowRight,
  ExternalLink
} from "lucide-react";
import { Button } from "./ui/button";
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
import "./../styles/Solution.css";

// Service data with IDs for navigation
const allServices = [
  { 
    id: "robotics", 
    icon: Bot, 
    title: "Robotic Lab", 
    description: "Hands-on lab work with robotics hardware to experiment, build, and learn advanced systems.", 
    duration: "6 Months", 
    color: "primary", 
    image: roboticLabImage,
    category: "robotics-automation"
  },
  { 
    id: "industrial-training", 
    icon: CircuitBoard, 
    title: "Industrial Training & Projects", 
    description: "Gain practical experience working on industrial automation and control systems.", 
    duration: "6 Months", 
    color: "primary", 
    image: industrialImage,
    category: "robotics-automation"
  },
  { 
    id: "iot", 
    icon: SatelliteDish, 
    title: "IoT Solutions", 
    description: "Develop smart connected devices and systems using cutting-edge Internet of Things technologies.", 
    duration: "6 Months", 
    color: "secondary", 
    image: iotImage,
    category: "iot"
  },
  { 
    id: "web-development", 
    icon: Code, 
    title: "Web Development", 
    description: "Build interactive and responsive websites using modern web technologies and frameworks.", 
    duration: "6 Months", 
    color: "primary", 
    image: webDevImage,
    category: "software"
  },
  { 
    id: "3d-printing", 
    icon: Move, 
    title: "3D Printing", 
    description: "Explore additive manufacturing techniques and create complex prototypes using 3D printing tools.", 
    duration: "3 Months", 
    color: "secondary", 
    image: printingImage,
    category: "manufacturing"
  },
  { 
    id: "mobile-development", 
    icon: Smartphone, 
    title: "Mobile App Development", 
    description: "Design and develop mobile applications for Android and iOS using popular tools and platforms.", 
    duration: "6 Months", 
    color: "primary", 
    image: mobileImage,
    category: "software"
  },
  { 
    id: "internship", 
    icon: Cpu, 
    title: "Internship Programs", 
    description: "Intern with industry partners and gain real-world experience in engineering and technology.", 
    duration: "3 Months", 
    color: "secondary", 
    image: internshipImage,
    category: "training"
  },
  { 
    id: "cad-design", 
    icon: Camera, 
    title: "CAD Designing", 
    description: "Master computer-aided design tools to create precise engineering drawings and models.", 
    duration: "4 Months", 
    color: "primary", 
    image: cadImage,
    category: "design"
  },
  { 
    id: "data-science", 
    icon: BarChart3, 
    title: "Data Science", 
    description: "Analyze large datasets to uncover insights and inform strategic decisions using statistical tools.", 
    duration: "6 Months", 
    color: "secondary", 
    image: dataImage,
    category: "ai-ml"
  },
  { 
    id: "cybersecurity", 
    icon: Shield, 
    title: "Cybersecurity", 
    description: "Implement robust security measures to protect networks, systems, and data from threats.", 
    duration: "6 Months", 
    color: "primary", 
    image: securityImage,
    category: "security"
  },
  { 
    id: "devops", 
    icon: Server, 
    title: "DevOps Engineering", 
    description: "Streamline software development and deployment processes with automation and best practices.", 
    duration: "6 Months", 
    color: "secondary", 
    image: devopsImage,
    category: "software"
  },
  { 
    id: "blockchain", 
    icon: Globe, 
    title: "Blockchain Development", 
    description: "Build decentralized applications and smart contracts using blockchain technology.", 
    duration: "6 Months", 
    color: "primary", 
    image: blockchainImage,
    category: "emerging-tech"
  },
  { 
    id: "rd-services", 
    icon: Box, 
    title: "R & D Services", 
    description: "Engage in research and development projects to innovate and enhance engineering solutions.", 
    duration: "6 Months", 
    color: "secondary", 
    image: rdImage,
    category: "research"
  },
  { 
    id: "software-development", 
    icon: Database, 
    title: "Software Development", 
    description: "Create efficient, scalable, and maintainable software systems tailored to client needs.", 
    duration: "6 Months", 
    color: "primary", 
    image: softwareImage,
    category: "software"
  },
];

// Create maps for quick lookup
const serviceMap = allServices.reduce((map, service) => {
  map[service.id] = service;
  return map;
}, {});

const categoryMap = {
  'all': 'All Services',
  'robotics-automation': 'Robotics & Automation',
  'iot': 'IoT Solutions',
  'software': 'Software Development',
  'manufacturing': '3D Printing & Manufacturing',
  'training': 'Training & Internships',
  'design': 'CAD & Design',
  'ai-ml': 'AI & Data Science',
  'security': 'Cybersecurity',
  'emerging-tech': 'Emerging Technologies',
  'research': 'R&D Services'
};

export default function WhatWeOffer() {
  const [selectedService, setSelectedService] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const sectionRef = useRef(null);

  // Get unique categories for filtering
  const categories = ["all", ...new Set(allServices.map(service => service.category))];

  // Filter services based on active filter
  const filteredServices = activeFilter === "all" 
    ? allServices 
    : allServices.filter(service => service.category === activeFilter);

  const displayedServices = showAll ? filteredServices : filteredServices.slice(0, 6);

  // Handle URL hash changes for direct navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      console.log('🔗 URL Hash changed:', hash);
      
      if (hash) {
        // First, check if hash matches a service ID (opens modal)
        const service = serviceMap[hash];
        if (service) {
          console.log('🎯 Found service, opening modal:', service.title);
          setActiveFilter(service.category); // Also filter to the service's category
          // Scroll to section
          setTimeout(() => {
            if (sectionRef.current) {
              sectionRef.current.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
              });
            }
          }, 100);
          // Open modal after scroll
          setTimeout(() => {
            setSelectedService(service);
          }, 600);
          return;
        }
        
        // Check if hash matches a category (filters services)
        if (categories.includes(hash)) {
          console.log('📁 Found category, filtering:', hash);
          setActiveFilter(hash);
          setSelectedService(null); // Close any open modal
          // Scroll to section
          setTimeout(() => {
            if (sectionRef.current) {
              sectionRef.current.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
              });
            }
          }, 100);
          return;
        }
        
        console.log('❓ Unknown hash, ignoring:', hash);
      } else {
        // No hash, reset to default state
        setActiveFilter("all");
        setSelectedService(null);
      }
    };

    // Initial check on component mount
    console.log('🚀 Solutions component mounted, checking initial hash');
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    // Also listen for popstate (browser back/forward)
    window.addEventListener('popstate', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, []);

  // Handle service card click - opens modal immediately
  const handleServiceClick = (service) => {
    console.log('🖱️ Service card clicked, opening modal:', service.title);
    setSelectedService(service);
    setActiveFilter(service.category); // Also filter to the service's category
    // Update URL without page reload
    window.history.pushState(null, '', `#${service.id}`);
  };

  // Handle filter change
  const handleFilterChange = (category) => {
    console.log('🔍 Filter changed to:', category);
    setActiveFilter(category);
    setShowAll(false);
    setSelectedService(null); // Close modal when changing filters
    // Update URL
    window.history.pushState(null, '', `#${category}`);
    // Scroll to section
    setTimeout(() => {
      if (sectionRef.current) {
        sectionRef.current.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  };

  // Handle external link (simulate navigation)
  const handleLearnMore = (service, event) => {
    event.stopPropagation();
    console.log('📚 Learn more clicked, opening modal:', service.title);
    setSelectedService(service);
    setActiveFilter(service.category); // Also filter to the service's category
    window.history.pushState(null, '', `#${service.id}`);
  };

  // Close modal and update URL
  const closeModal = () => {
    console.log('❌ Closing modal');
    setSelectedService(null);
    // Keep the current filter but remove service ID from URL
    const currentHash = window.location.hash.replace('#', '');
    if (serviceMap[currentHash]) {
      // If current hash is a service, change it to its category
      const service = serviceMap[currentHash];
      window.history.pushState(null, '', `#${service.category}`);
    } else {
      window.history.pushState(null, '', window.location.pathname);
    }
  };

  // Generate category labels
  const getCategoryLabel = (category) => {
    return categoryMap[category] || category;
  };

  return (
    <section id="solutions" className="programs-section" ref={sectionRef}>
      <div className="programs-container">
        <div className="programs-header">
          <h2 className="programs-title">Our Solutions & Services</h2>
          <p className="programs-subtitle">
            Comprehensive technology solutions combining robotics, AI, IoT, and innovative software development.
          </p>
        </div>

        {/* Category Filters */}
        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-button ${activeFilter === category ? 'active' : ''}`}
              onClick={() => handleFilterChange(category)}
            >
              {getCategoryLabel(category)}
            </button>
          ))}
        </div>

        {/* Services Count */}
        <div className="services-count">
          Showing {displayedServices.length} of {filteredServices.length} services
          {activeFilter !== 'all' && ` in ${getCategoryLabel(activeFilter)}`}
        </div>

        {/* Services Grid */}
        <div className="programs-grid">
          {displayedServices.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="program-card"
                onClick={() => handleServiceClick(service)}
                data-service-id={service.id}
              >
                <div className="program-card-header">
                  <div className={`program-icon-container ${service.color}`}>
                    <IconComponent className={`program-icon ${service.color}`} />
                  </div>
                  <div className="program-badge">{getCategoryLabel(service.category)}</div>
                </div>
                
                <h3 className="program-title">{service.title}</h3>
                <p className="program-description">{service.description}</p>
                
                <div className="program-footer">
                  <span className="program-duration">{service.duration}</span>
                  <Button 
                    variant="link" 
                    className="program-learn-more"
                    onClick={(e) => handleLearnMore(service, e)}
                  >
                    Learn More <ArrowRight size={16} />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Show More/Less Button */}
        {filteredServices.length > 6 && (
          <div className="show-more-container">
            <Button
              onClick={() => setShowAll(!showAll)}
              variant="outline"
              className="show-more-button"
            >
              {showAll ? "Show Less" : `Show All ${filteredServices.length} Services`}
            </Button>
          </div>
        )}
      </div>

      {/* Service Detail Modal - Always on top when open */}
      {selectedService && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeModal}
              className="modal-close-button"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
            
            <div className="modal-image-container">
              <img 
                src={selectedService.image} 
                alt={selectedService.title} 
                className="modal-image" 
              />
              <div className="modal-badge">{getCategoryLabel(selectedService.category)}</div>
            </div>
            
            <div className="modal-body">
              <h3 className="modal-title">{selectedService.title}</h3>
              <p className="modal-description">{selectedService.description}</p>
              
              <div className="modal-details">
                <div className="modal-duration">
                  <strong>Duration:</strong> {selectedService.duration}
                </div>
                <div className="modal-category">
                  <strong>Category:</strong> {getCategoryLabel(selectedService.category)}
                </div>
              </div>

              <div className="modal-actions">
                <Button className="modal-contact-btn">
                  Contact Us <ExternalLink size={16} />
                </Button>
                <Button variant="outline" onClick={closeModal}>
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}