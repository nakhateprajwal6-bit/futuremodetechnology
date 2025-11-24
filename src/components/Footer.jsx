import { useState, useEffect } from "react";
import { X } from "lucide-react";
import logoImage from "./../assets/logo-.png";
import HelpCenter from "./../pages/HelpCenter";
import PrivacyPolicy from "./../pages/PrivacyPolicy";
import TermsOfService from "./../pages/TermsOfService";
import FAQ from "./../pages/FAQ";
import "./../styles/Footer.css";

export default function Footer() {
  const [modalContent, setModalContent] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const quickLinks = [
    { href: "#about", label: "About Us" },
    { href: "#programs", label: "Programs" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contact" },
  ];

  const supportLinks = [
    { id: "help", label: "Help Center" },
    { id: "privacy", label: "Privacy Policy" },
    { id: "terms", label: "Terms of Service" },
    { id: "faq", label: "FAQ" },
  ];

  const socialLinks = [
    { icon: "fab fa-facebook-f", href: "https://facebook.com/futuremodetech", label: "Facebook", color: "#1877f2" },
    { icon: "fab fa-twitter", href: "https://twitter.com/futuremodetech", label: "X (Twitter)", color: "#000000" },
    { icon: "fab fa-linkedin-in", href: "https://linkedin.com/company/futuremodetech", label: "LinkedIn", color: "#0077b5" },
    { icon: "fab fa-instagram", href: "https://instagram.com/futuremodetech", label: "Instagram", color: "#e4405f" },
  ];

  const handleNavClick = (href) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const openModal = (id) => setModalContent(id);
  const closeModal = () => setModalContent(null);

  // Close modal on Escape key and disable body scroll when modal is open
  useEffect(() => {
    const handleEscape = (e) => { if (e.key === "Escape") closeModal(); };

    if (modalContent) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [modalContent]);

  return (
    <>
      <footer className="footer" role="contentinfo">
        <div className="footer-container">
          <div className="footer-content">
            {/* Brand Section */}
            <div className="footer-brand">
              <div className="brand-header">
                <div className="brand-logo-container">
                  <img src={logoImage} alt="Future Mode Technology Logo" className="brand-logo" loading="lazy" />
                </div>
                <span className="brand-name">Future Mode Technology</span>
              </div>
              <p className="brand-description">
                Empowering the next generation of technology leaders through innovative education and cutting-edge curriculum.
              </p>
              <div className="social-links-title">Follow Us</div>
              <div className="social-links">
                {socialLinks.map((social) => (
                  <button
                    key={social.label}
                    onClick={() => window.open(social.href, "_blank", "noopener noreferrer")}
                    className="social-button"
                    aria-label={`Follow us on ${social.label}`}
                    style={{ "--social-color": social.color }}
                  >
                    <i className={social.icon}></i>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <FooterSection title="Quick Links" links={quickLinks} onClick={handleNavClick} />

            {/* Support Links */}
            <FooterSection title="Support" links={supportLinks} onClick={openModal} isSupport />

            {/* Contact Info */}
            <div className="footer-section">
              <h3 className="footer-section-title">Contact Info</h3>
              <div className="contact-info">
                <p>
                  <span className="contact-highlight">Email:</span><br />
                  info@futuremodetchnology.com
                </p>
                <p>
                  <span className="contact-highlight">Phone:</span><br />
                  +91 8308211268
                </p>
                <p>
                  <span className="contact-highlight">Address:</span><br />
                  Mumbai Thane Bhiwandi<br />
                  Pin 421302, India
                </p>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            © 2025 Future Mode Technology. Crafted with <span className="footer-heart" aria-label="love">❤️</span> for the future of education.
          </div>
        </div>
      </footer>

      {/* Modals */}
      {modalContent && (
        <div
          className="modal-overlay"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeModal}
              className="modal-close-button"
              aria-label="Close modal"
            >
              <X size={isMobile ? 20 : 24} />
            </button>
            <div id="modal-title" className="sr-only">
              {modalContent === "help" && "Help Center"}
              {modalContent === "privacy" && "Privacy Policy"}
              {modalContent === "terms" && "Terms of Service"}
              {modalContent === "faq" && "Frequently Asked Questions"}
            </div>
            {modalContent === "help" && <HelpCenter />}
            {modalContent === "privacy" && <PrivacyPolicy />}
            {modalContent === "terms" && <TermsOfService />}
            {modalContent === "faq" && <FAQ />}
          </div>
        </div>
      )}
    </>
  );
}

// Reusable Footer Section
function FooterSection({ title, links, onClick, isSupport = false }) {
  return (
    <div className="footer-section">
      <h3 className="footer-section-title">{title}</h3>
      <nav aria-label={title}>
        <ul className="footer-links">
          {links.map((link) => (
            <li key={isSupport ? link.id : link.href}>
              <button
                onClick={() => onClick(isSupport ? link.id : link.href)}
                className="footer-link"
                aria-label={link.label}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
