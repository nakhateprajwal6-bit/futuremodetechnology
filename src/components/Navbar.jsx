<<<<<<< HEAD

import { useState, useEffect } from "react";
import { GraduationCap, Menu, X, Moon, Sun } from "lucide-react";
=======
import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun, ChevronDown } from "lucide-react";
>>>>>>> 8c7a750d5aaf2bfb6f6ba54e52d9c80512c2dd71
import logoImage from "../assets/logo.png";
import "./../styles/Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
<<<<<<< HEAD

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#vision", label: "Vision" },
    { href: "#programs", label: "Programs" },
    
    { href: "#contact", label: "Contact" },
  ];

=======
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#programs", label: "Programs" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contact" },
  ];

  // Handle scroll to add navbar shadow/background
>>>>>>> 8c7a750d5aaf2bfb6f6ba54e52d9c80512c2dd71
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

<<<<<<< HEAD
=======
  // Load theme from localStorage or system preference
>>>>>>> 8c7a750d5aaf2bfb6f6ba54e52d9c80512c2dd71
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
<<<<<<< HEAD
=======
    setActiveDropdown(null);
>>>>>>> 8c7a750d5aaf2bfb6f6ba54e52d9c80512c2dd71
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
<<<<<<< HEAD
  };

  const themeIcon = isDark ? <Sun className="icon" /> : <Moon className="icon" />;
=======
    setActiveDropdown(null);
  };

  const themeIcon = isDark ? <Sun size={20} /> : <Moon size={20} />;
>>>>>>> 8c7a750d5aaf2bfb6f6ba54e52d9c80512c2dd71

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : "navbar-transparent"}`}>
      <div className="navbar-container">
        <div className="navbar-content">
          {/* Logo */}
          <div className="logo-container" onClick={scrollToTop}>
<<<<<<< HEAD
            <img src={logoImage} alt="Logo" className="logo-image" />
            <h1 className="logo-text">
              <span className="logo-text-gradient">
                FutureMode Technology
              </span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="desktop-nav">
            <nav className="nav-links" role="navigation" aria-label="Main navigation">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="nav-button"
                >
                  {item.label}
                </button>
              ))}
            </nav>
            <button
              onClick={toggleTheme}
              className="icon-button theme-toggle"
              aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            >
              {themeIcon}
            </button>
=======
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
>>>>>>> 8c7a750d5aaf2bfb6f6ba54e52d9c80512c2dd71
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
<<<<<<< HEAD
          >
            {isOpen ? <X className="mobile-icon" /> : <Menu className="mobile-icon" />}
=======
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
>>>>>>> 8c7a750d5aaf2bfb6f6ba54e52d9c80512c2dd71
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
<<<<<<< HEAD
      {isOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-content">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="mobile-nav-button"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={toggleTheme}
              className="mobile-theme-button"
              aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            >
              {isDark ? (
                <>
                  <Sun className="theme-icon" /> Light Mode
                </>
              ) : (
                <>
                  <Moon className="theme-icon" /> Dark Mode
                </>
              )}
            </button>
          </div>
        </div>
      )}
=======
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
>>>>>>> 8c7a750d5aaf2bfb6f6ba54e52d9c80512c2dd71
    </nav>
  );
}
