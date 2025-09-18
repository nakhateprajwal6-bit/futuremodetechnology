import { useState } from "react";
import { Facebook, Twitter, Linkedin, Instagram, X } from "lucide-react";
import logoImage from "@/assets/logo.png";
import HelpCenter from "@/pages/HelpCenter";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import FAQ from "@/pages/FAQ";

export default function Footer() {
  const [modalContent, setModalContent] = useState<string | null>(null);

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

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const openModal = (id: string) => {
    setModalContent(id);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <>
      <footer className="bg-foreground text-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-primary/10">
                  <img
                    src={logoImage}
                    alt="Future Mode Technology Logo"
                    className="h-10 w-10 object-contain rounded-lg"
                  />
                </div>
                <span className="text-xl font-bold">Future Mode Technology</span>
              </div>
              <p className="text-background/80 mb-6 max-w-md text-sm">
                Empowering the next generation of technology leaders through innovative education and cutting-edge curriculum.
              </p>
              <div className="flex space-x-3">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <button
                      key={social.label}
                      onClick={() => window.open(social.href, "_blank")}
                      className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                      aria-label={social.label}
                    >
                      <IconComponent className="h-4 w-4" />
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <h3 className="text-md font-semibold mb-4 uppercase text-primary">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="text-background/80 hover:text-background transition-colors text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-md font-semibold mb-4 uppercase text-primary">Support</h3>
              <ul className="space-y-2 text-sm">
                {supportLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => openModal(link.id)}
                      className="text-background/80 hover:text-background transition-colors text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-background/20 mt-8 pt-4 text-center text-xs text-background/60">
            © 2025 Future Mode Technology. All rights reserved. | Designed with ❤️ for education
          </div>
        </div>
      </footer>

      {modalContent && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 px-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-xl w-full h-[70vh] overflow-y-auto relative p-4 sm:p-6">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
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
