import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun, ChevronDown } from "lucide-react";
import logoImage from "../assets/logo.png";
import "./../styles/Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#programs", label: "Programs" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contact" },
  ];

  // Handle scroll to add navbar shadow/background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Load theme from localStorage or system preference
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

  const handleNavClick = (href) => {
    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.querySelector(href);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
    setActiveDropdown(null);
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
            <img src={logoImage} alt="FutureMode Technology" className="logo-image" />
            <div className="logo-text">
              <span className="logo-primary">FutureMode</span>
              <span className="logo-secondary">Technology</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="desktop-nav">
            <nav className="nav-links">
              {navItems.map((item) => (
                <div
                  key={item.href}
                  className="nav-item"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.href)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    onClick={() => !item.dropdown && handleNavClick(item.href)}
                    className={`nav-link ${item.dropdown ? "has-dropdown" : ""}`}
                  >
                    {item.label}
                    {item.dropdown && <ChevronDown size={16} />}
                  </button>

                  {/* Dropdown Menu (if needed in future) */}
                  {item.dropdown && activeDropdown === item.href && (
                    <div className="dropdown-menu">
                      {item.dropdown.map((dropdownItem) => (
                        <button
                          key={dropdownItem.href}
                          onClick={() => handleNavClick(dropdownItem.href)}
                          className="dropdown-link"
                        >
                          {dropdownItem.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Actions */}
            <div className="nav-actions">
              <button
                onClick={toggleTheme}
                className="theme-toggle"
                aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
              >
                {themeIcon}
              </button>
              <button className="cta-button" onClick={() => handleNavClick("#contact")}>
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
      <div className={`mobile-menu ${isOpen ? "mobile-menu-open" : ""}`}>
        <div className="mobile-menu-content">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="mobile-nav-link"
            >
              {item.label}
            </button>
          ))}
          <div className="mobile-actions">
            <button onClick={toggleTheme} className="mobile-theme-button">
              {themeIcon} {isDark ? "Light Mode" : "Dark Mode"}
            </button>
            <button className="mobile-cta-button" onClick={() => handleNavClick("#contact")}>
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
