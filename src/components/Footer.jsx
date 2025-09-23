import { useState } from "react";
import { Facebook, Twitter, Linkedin, Instagram, X } from "lucide-react";
import logoImage from "./../assets/logo-.png";
import HelpCenter from "./../pages/HelpCenter";
import PrivacyPolicy from "./../pages/PrivacyPolicy";
import TermsOfService from "./../pages/TermsOfService";
import FAQ from "./../pages/FAQ";
import "./../styles/Footer.css";

export default function Footer() {
  const [modalContent, setModalContent] = useState(null);

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
    { icon: Facebook, href: "https://facebook.com/futuremodetech", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com/futuremodetech", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com/company/futuremodetech", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com/futuremodetech", label: "Instagram" },
  ];

  const handleNavClick = (href) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openModal = (id) => setModalContent(id);
  const closeModal = () => setModalContent(null);

  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            {/* Brand Section */}
            <div className="footer-brand">
              <div className="brand-header">
                <div className="brand-logo-container">
                  <img src={logoImage} alt="Logo" className="brand-logo" />
                </div>
                <span className="brand-name">Future Mode Technology</span>
              </div>
              <p className="brand-description">
                Empowering the next generation of technology leaders through innovative education and cutting-edge curriculum.
              </p>
              <div className="social-links">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <button
                      key={social.label}
                      onClick={() => window.open(social.href, "_blank")}
                      className="social-button"
                      aria-label={social.label}
                    >
                      <IconComponent />
                    </button>
                  );
                })}
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
            © 2025 Future Mode Technology. Crafted with <span className="footer-heart">❤️</span> for the future of education.
          </div>
        </div>
      </footer>

      {/* Modals */}
      {modalContent && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button onClick={closeModal} className="modal-close-button">
              <X size={24} />
            </button>
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
      <ul className="footer-links">
        {links.map((link) => (
          <li key={isSupport ? link.id : link.href}>
            <button onClick={() => onClick(isSupport ? link.id : link.href)} className="footer-link">
              {link.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
