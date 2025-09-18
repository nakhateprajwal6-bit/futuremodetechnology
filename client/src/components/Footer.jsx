import { useState } from "react";
import { Facebook, Twitter, Linkedin, Instagram, X } from "lucide-react";
import logoImage from "@/assets/logo-.png";
import HelpCenter from "@/pages/HelpCenter";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import FAQ from "@/pages/FAQ";

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
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const openModal = (id) => {
    setModalContent(id);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <>
      <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg">
                  <img
                    src={logoImage}
                    alt="Future Mode Technology Logo"
                    className="h-10 w-10 object-contain rounded-lg"
                  />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Future Mode Technology
                </span>
              </div>
              <p className="text-gray-300 mb-8 max-w-md text-base leading-relaxed">
                Empowering the next generation of technology leaders through innovative education and cutting-edge curriculum.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <button
                      key={social.label}
                      onClick={() => window.open(social.href, "_blank")}
                      className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center hover:from-blue-500 hover:to-purple-500 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                      aria-label={social.label}
                    >
                      <IconComponent className="h-5 w-5" />
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 text-blue-400 relative">
                Quick Links
                <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"></div>
              </h3>
              <ul className="space-y-3 text-base">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="text-gray-300 hover:text-blue-400 transition-colors text-left hover:translate-x-1 transform duration-200"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 text-purple-400 relative">
                Support
                <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400"></div>
              </h3>
              <ul className="space-y-3 text-base">
                {supportLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => openModal(link.id)}
                      className="text-gray-300 hover:text-purple-400 transition-colors text-left hover:translate-x-1 transform duration-200"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 text-green-400 relative">
                Contact Info
                <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-green-400 to-blue-400"></div>
              </h3>
              <div className="space-y-4 text-base">
                <p className="text-gray-300">
                  <span className="text-green-400 font-medium">Email:</span><br />
                  info@futuremodetchnology.com
                </p>
                <p className="text-gray-300">
                  <span className="text-green-400 font-medium">Phone:</span><br />
                  +91 8308211268
                </p>
                <p className="text-gray-300">
                  <span className="text-green-400 font-medium">Address:</span><br />
                  Mumbai Thane Bhiwandi<br />
                  Pin 421302, India
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700/50 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                © 2025 Future Mode Technology. All rights reserved.
              </p>
              <p className="text-gray-400 text-sm flex items-center">
                Crafted with 
                <span className="mx-1 text-red-400 animate-pulse">❤️</span>
                for the future of education
              </p>
            </div>
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