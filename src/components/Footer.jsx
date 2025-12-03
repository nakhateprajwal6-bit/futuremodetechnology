import { useState, useEffect, useRef } from "react";
import { X, ExternalLink, Heart, Mail, Phone, MapPin } from "lucide-react";
import { 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram, 
  FaYoutube, 
  FaGithub,
  FaArrowRight,
  FaWhatsapp
} from "react-icons/fa";
import logoImage from "./../assets/logo-.png";
import HelpCenter from "./../pages/HelpCenter";
import PrivacyPolicy from "./../pages/PrivacyPolicy";
import TermsOfService from "./../pages/TermsOfService";
import FAQ from "./../pages/FAQ";
import "./../styles/Footer.css";

export default function Footer() {
  const [modalContent, setModalContent] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [currentYear] = useState(new Date().getFullYear());
  const modalRef = useRef(null);

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      setIsMobile(width < 640);
      setIsTablet(width >= 640 && width < 1024);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  const quickLinks = [
    { href: "#home", label: "Home", icon: "🏠" },
    { href: "#about", label: "About Us", icon: "📖" },
    { href: "#programs", label: "Programs", icon: "🚀" },
    { href: "#gallery", label: "Gallery", icon: "🖼️" },
    { href: "#contact", label: "Contact", icon: "📞" },
  ];

  const supportLinks = [
    { id: "help", label: "Help Center", icon: "❓" },
    { id: "privacy", label: "Privacy Policy", icon: "🔒" },
    { id: "terms", label: "Terms of Service", icon: "📝" },
    { id: "faq", label: "FAQ", icon: "💭" },
  ];

  const socialLinks = [
    { 
      icon: <FaFacebookF />, 
      href: "https://facebook.com/futuremodetech", 
      label: "Facebook", 
      color: "#1877f2",
      bgColor: "rgba(24, 119, 242, 0.1)"
    },
    { 
      icon: <FaTwitter />, 
      href: "https://twitter.com/futuremodetech", 
      label: "X (Twitter)", 
      color: "#000000",
      bgColor: "rgba(0, 0, 0, 0.1)"
    },
    { 
      icon: <FaLinkedinIn />, 
      href: "https://linkedin.com/company/futuremodetech", 
      label: "LinkedIn", 
      color: "#0077b5",
      bgColor: "rgba(0, 119, 181, 0.1)"
    },
    { 
      icon: <FaInstagram />, 
      href: "https://instagram.com/futuremodetech", 
      label: "Instagram", 
      color: "#e4405f",
      bgColor: "rgba(228, 64, 95, 0.1)"
    },
    { 
      icon: <FaYoutube />, 
      href: "https://youtube.com/@futuremodetech", 
      label: "YouTube", 
      color: "#ff0000",
      bgColor: "rgba(255, 0, 0, 0.1)"
    },
    { 
      icon: <FaWhatsapp />, 
      href: "https://wa.me/918308211268", 
      label: "WhatsApp", 
      color: "#25D366",
      bgColor: "rgba(37, 211, 102, 0.1)"
    },
    { 
      icon: <FaGithub />, 
      href: "https://github.com/futuremodetech", 
      label: "GitHub", 
      color: "#333333",
      bgColor: "rgba(51, 51, 51, 0.1)"
    },
  ];

  // Simplified contact data - Only three items
  const contactItems = [
    {
      id: "email",
      icon: <Mail size={20} />,
      title: "Email Support",
      value: "futuremodetechnology@gmail.com",
      href: "mailto:futuremodetechnology@gmail.com",
      color: "#0066CC",
      gradient: "linear-gradient(135deg, #0066CC 0%, #0047AB 100%)"
    },
    {
      id: "phone",
      icon: <Phone size={20} />,
      title: "Phone & WhatsApp",
      value: "+91 83082 11268",
      href: "tel:+918308211268",
      whatsapp: "https://wa.me/918308211268",
      color: "#00C896",
      gradient: "linear-gradient(135deg, #00C896 0%, #00997A 100%)"
    }
  ];

  const handleNavClick = (href) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        const navbarHeight = isMobile ? 60 : isTablet ? 65 : 70;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  const openModal = (id) => {
    setModalContent(id);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalContent(null);
    document.body.style.overflow = 'unset';
  };

  const handleContactClick = (href, isWhatsApp = false) => {
    if (href) {
      if (isWhatsApp) {
        window.open(href, '_blank', 'noopener,noreferrer');
      } else {
        window.location.href = href;
      }
    }
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeModal();
    };

    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        closeModal();
      }
    };

    if (modalContent) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [modalContent]);

  return (
    <>
      <footer className="footer-main-container" role="contentinfo" aria-label="Site footer">
        <div className="footer-wrapper">
          {/* Main Footer Content */}
          <div className="footer-grid-container">
            
            {/* Brand Section */}
            <div className="brand-section-main">
              <div className="brand-header-wrapper">
                <div className="logo-wrapper-main">
                  <img 
                    src={logoImage} 
                    alt="Future Mode Technology Logo" 
                    className="footer-logo-img"
                    loading="lazy"
                    width="64"
                    height="64"
                  />
                  <div className="logo-glow-effect"></div>
                </div>
                <div className="brand-text-wrapper">
                  <h2 className="company-title">
                    <span className="brand-name-gradient">FutureMode</span>
                    <span className="company-sub-text">Technology</span>
                  </h2>
                  <p className="brand-tagline-main">
                    Shaping Tomorrow's Innovators
                  </p>
                </div>
              </div>
              
              <p className="company-description-main">
                Empowering the next generation of technology leaders through innovative education 
                and cutting-edge curriculum designed for the digital age.
              </p>
              
              <div className="social-connect-wrapper">
                <h3 className="social-title-main">Connect With Us</h3>
                <div className="social-icons-container">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon-link-item"
                      aria-label={`Follow us on ${social.label}`}
                      style={{ 
                        '--social-color': social.color,
                        '--social-bg': social.bgColor
                      }}
                      title={social.label}
                    >
                      <span className="social-icon-element-item">
                        {social.icon}
                      </span>
                      <span className="visually-hidden-element">{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links Section */}
            <div className="footer-nav-section">
              <h3 className="section-title-main">
                <span className="title-icon-main" aria-hidden="true">📍</span>
                Quick Navigation
              </h3>
              <nav aria-label="Quick navigation">
                <ul className="nav-links-container">
                  {quickLinks.map((link) => (
                    <li key={link.href}>
                      <button 
                        onClick={() => handleNavClick(link.href)}
                        className="nav-link-btn"
                        aria-label={link.label}
                      >
                        <span className="link-icon-main" aria-hidden="true">{link.icon}</span>
                        <span className="link-text-main">{link.label}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Support Section */}
            <div className="footer-support-section">
              <h3 className="section-title-main">
                <span className="title-icon-main" aria-hidden="true">⚖️</span>
                Support & Legal
              </h3>
              <nav aria-label="Support and legal links">
                <ul className="nav-links-container">
                  {supportLinks.map((link) => (
                    <li key={link.id}>
                      <button 
                        onClick={() => openModal(link.id)}
                        className="support-link-btn"
                        aria-label={link.label}
                      >
                        <span className="link-icon-main" aria-hidden="true">{link.icon}</span>
                        <span className="link-text-main">{link.label}</span>
                        <span className="link-arrow-main" aria-hidden="true">→</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Simplified Contact Information Section */}
            <div className="contact-section-simple">
              <div className="contact-header-simple">
                <h3 className="contact-title-simple">
                  <span className="contact-icon-simple" aria-hidden="true">📞</span>
                  Get In Touch
                </h3>
                <p className="contact-description-simple">
                  Reach out to us for inquiries, support, or collaboration opportunities.
                </p>
              </div>

              {/* Contact Items - Only 3 items */}
              <div className="contact-items-container">
                {contactItems.map((item) => (
                  <div key={item.id} className="contact-item-simple">
                    <div className="contact-item-header">
                      <div className="contact-item-icon" style={{ background: item.gradient }}>
                        {item.icon}
                      </div>
                      <h4 className="contact-item-title">{item.title}</h4>
                    </div>
                    
                    <div className="contact-item-content">
                      <button 
                        className="contact-value-btn"
                        onClick={() => handleContactClick(item.href)}
                        aria-label={`${item.title}: ${item.value}`}
                      >
                        <span className="contact-value-text">{item.value}</span>
                        <ExternalLink size={14} className="contact-external-icon" />
                      </button>
                      
                      {/* WhatsApp button for phone item */}
                      {item.id === "phone" && item.whatsapp && (
                        <button 
                          className="whatsapp-btn"
                          onClick={() => handleContactClick(item.whatsapp, true)}
                          aria-label="Contact via WhatsApp"
                        >
                          <FaWhatsapp size={16} />
                          <span>Message on WhatsApp</span>
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom-wrapper">
            <div className="bottom-content-container">
              <div className="copyright-text">
                © {currentYear} Future Mode Technology. All rights reserved.
                <span className="reg-info-text">Registered under Companies Act, 2013</span>
              </div>
              
              <div className="footer-extra-content">
                <div className="crafted-with-info">
                  <span className="crafted-text">Crafted with</span>
                  <Heart size={14} className="heart-icon-footer" aria-label="love" />
                  <span className="crafted-for-text">for future innovators</span>
                </div>
                
                <div className="bottom-links-container">
                  <button 
                    onClick={() => openModal('privacy')}
                    className="bottom-link-btn"
                    aria-label="View privacy policy"
                  >
                    Privacy
                  </button>
                  <span className="link-divider" aria-hidden="true">•</span>
                  <button 
                    onClick={() => openModal('terms')}
                    className="bottom-link-btn"
                    aria-label="View terms of service"
                  >
                    Terms
                  </button>
                  <span className="link-divider" aria-hidden="true">•</span>
                  <button 
                    onClick={() => openModal('help')}
                    className="bottom-link-btn"
                    aria-label="Get help"
                  >
                    Help
                  </button>
                </div>
              </div>
              
              <div className="back-to-top-container-main">
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="back-to-top-btn-main"
                  aria-label="Scroll back to top"
                >
                  <FaArrowRight className="back-top-arrow-icon" />
                  <span className="back-top-text-label">Back to Top</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal - WHITE THEME */}
      {modalContent && (
        <div 
          className="modal-overlay-white"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title-white"
        >
          <div 
            ref={modalRef}
            className="modal-content-white"
            onClick={(e) => e.stopPropagation()}
            style={{ maxHeight: isMobile ? '85vh' : isTablet ? '80vh' : '75vh' }}
          >
            <div className="modal-header-white">
              <h2 id="modal-title-white" className="modal-title-white-text">
                {modalContent === "help" && "Help Center"}
                {modalContent === "privacy" && "Privacy Policy"}
                {modalContent === "terms" && "Terms of Service"}
                {modalContent === "faq" && "Frequently Asked Questions"}
              </h2>
              <button 
                onClick={closeModal}
                className="modal-close-btn-white"
                aria-label="Close modal"
              >
                <X size={isMobile ? 20 : 24} color="#333" />
              </button>
            </div>
            
            <div className="modal-body-white">
              {modalContent === "help" && <HelpCenter />}
              {modalContent === "privacy" && <PrivacyPolicy />}
              {modalContent === "terms" && <TermsOfService />}
              {modalContent === "faq" && <FAQ />}
            </div>
            
            <div className="modal-footer-white">
              <button 
                onClick={closeModal}
                className="modal-close-btn-main"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}