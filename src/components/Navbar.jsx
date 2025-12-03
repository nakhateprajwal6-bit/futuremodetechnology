import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun, ChevronDown, GraduationCap } from "lucide-react";
import logoImage from "../assets/logo-.png";
import "./../styles/Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Helper function to determine if a link is external
  const isExternalLink = (href) => {
    return href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:') || href.startsWith('tel:');
  };

  // Helper function to handle navigation
  const handleNavigation = (href) => {
    if (isExternalLink(href)) {
      // Open external links in new tab
      window.open(href, '_blank', 'noopener,noreferrer');
    } else if (href === "#home") {
      // Scroll to top for home
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Scroll to internal section
      const element = document.querySelector(href);
      if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const navItems = [
    { href: "#home", label: "Home" },
    { 
      href: "#solutions", 
      label: "Solutions",
      dropdown: [
        { href: "#services", label: "Robotics & Automation" },
        { href: "#services", label: "AI & Machine Learning" },
        { href: "#services", label: "IoT Solutions" },
        { href: "#services", label: "3D Printing" },
        { href: "https://wa.me/c/918308211268", label: "Robotics Material" }
      ]
    },
    { href: "#about", label: "About Us" },
    { href: "#programs", label: "Programs" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const useDark = savedTheme === "dark" || (!savedTheme && prefersDark);
    setIsDark(useDark);
    document.documentElement.classList.toggle("dark", useDark);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const themeIcon = isDark ? <Sun size={20} /> : <Moon size={20} />;

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : "navbar-transparent"}`}>
      <div className="navbar-container">
        <div className="navbar-content">
          {/* Logo */}
          <div className="logo-container" onClick={scrollToTop}>
            <img src={logoImage} alt="FutureMode Technology Logo" className="logo-image" />
            <div className="logo-text">
              <span className="logo-primary">FutureMode</span>
              <span className="logo-secondary">Technology</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="desktop-nav">
            <nav className="nav-links" role="navigation" aria-label="Main navigation">
              {navItems.map((item) => (
                <div
                  key={item.href}
                  className="nav-item"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.href)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.dropdown ? (
                    // For dropdown parent, keep as button
                    <button
                      onClick={() => !item.dropdown && handleNavigation(item.href)}
                      className={`nav-link ${item.dropdown ? 'has-dropdown' : ''}`}
                      aria-expanded={activeDropdown === item.href}
                      aria-haspopup={item.dropdown ? "true" : "false"}
                    >
                      {item.label}
                      {item.dropdown && <ChevronDown size={16} />}
                    </button>
                  ) : (
                    // For non-dropdown items, use button for internal links
                    <button
                      onClick={() => handleNavigation(item.href)}
                      className={`nav-link ${item.dropdown ? 'has-dropdown' : ''}`}
                    >
                      {item.label}
                      {item.dropdown && <ChevronDown size={16} />}
                    </button>
                  )}
                  
                  {item.dropdown && activeDropdown === item.href && (
                    <div className="dropdown-menu" role="menu">
                      {item.dropdown.map((dropdownItem) => (
                        isExternalLink(dropdownItem.href) ? (
                          // External link - use anchor tag
                          <a
                            key={dropdownItem.href}
                            href={dropdownItem.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="dropdown-link"
                            role="menuitem"
                            onClick={() => {
                              setActiveDropdown(null);
                              setIsOpen(false);
                            }}
                          >
                            {dropdownItem.label}
                            <span className="external-link-indicator" aria-hidden="true"> ↗</span>
                          </a>
                        ) : (
                          // Internal link - use button
                          <button
                            key={dropdownItem.href}
                            onClick={() => handleNavigation(dropdownItem.href)}
                            className="dropdown-link"
                            role="menuitem"
                          >
                            {dropdownItem.label}
                          </button>
                        )
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="nav-actions">
              <button
                onClick={toggleTheme}
                className="theme-toggle"
                aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
              >
                {themeIcon}
              </button>
              <button 
                className="cta-button" 
                onClick={() => handleNavigation("#contact")}
                aria-label="Get started with our services"
              >
                <GraduationCap size={20} className="cta-icon" />
                Get Started
              </button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'mobile-menu-open' : ''}`}>
        <div className="mobile-menu-content" role="menu">
          {navItems.map((item) => (
            <div key={item.href} className="mobile-nav-item" role="none">
              {item.dropdown ? (
                <>
                  <button
                    onClick={() => !item.dropdown && handleNavigation(item.href)}
                    className="mobile-nav-link"
                    role="menuitem"
                  >
                    {item.label}
                    {item.dropdown && <ChevronDown size={16} />}
                  </button>
                  {item.dropdown && (
                    <div className="mobile-dropdown">
                      {item.dropdown.map((dropdownItem) => (
                        isExternalLink(dropdownItem.href) ? (
                          <a
                            key={dropdownItem.href}
                            href={dropdownItem.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mobile-dropdown-link"
                            role="menuitem"
                            onClick={() => setIsOpen(false)}
                          >
                            {dropdownItem.label}
                            <span className="external-link-indicator" aria-hidden="true"> ↗</span>
                          </a>
                        ) : (
                          <button
                            key={dropdownItem.href}
                            onClick={() => handleNavigation(dropdownItem.href)}
                            className="mobile-dropdown-link"
                            role="menuitem"
                          >
                            {dropdownItem.label}
                          </button>
                        )
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <button
                  onClick={() => handleNavigation(item.href)}
                  className="mobile-nav-link"
                  role="menuitem"
                >
                  {item.label}
                </button>
              )}
            </div>
          ))}
          <div className="mobile-actions">
            <button
              onClick={toggleTheme}
              className="mobile-theme-button"
              aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            >
              {themeIcon}
              {isDark ? "Light Mode" : "Dark Mode"}
            </button>
            <button 
              className="mobile-cta-button" 
              onClick={() => handleNavigation("#contact")}
              aria-label="Get started with our services"
            >
              <GraduationCap size={20} className="cta-icon" />
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}