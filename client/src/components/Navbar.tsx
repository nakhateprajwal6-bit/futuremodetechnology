import { useState, useEffect } from "react";
import { GraduationCap, Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logoImage from "@/assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false); // Assuming theme state is managed here

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldUseDark = savedTheme === 'dark' || (!savedTheme && prefersDark);

    setIsDark(shouldUseDark);
    document.documentElement.classList.toggle('dark', shouldUseDark);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle('dark', newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  // Original navItems structure had 'label', the changes use 'name' and 'href'.
  // Reconciling to use 'label' and 'href' as per original code.
  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#vision", label: "Vision" },
    { href: "#programs", label: "Programs" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contact" },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // Close mobile menu after navigation
  };

  // For theme toggle in the changes, it expects a 'theme' variable, not 'isDark'.
  // Using 'isDark' here to match the existing state management.
  const theme = isDark ? "dark" : "light"; 

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "glass-effect border-b border-border shadow-lg" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2" data-testid="navbar-logo">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center">
              <img 
                src={logoImage} 
                alt="Future Mode Technology Logo" 
                className="h-10 w-10 object-contain rounded-lg"
                data-testid="logo-image"
              />
            </div>
            <span className="text-xl font-bold text-primary">Future Mode Technology</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6" role="navigation" aria-label="Main navigation">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-foreground hover:text-primary transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm px-2 py-1"
                  data-testid={`nav-link-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleTheme}
              className="ml-4"
              data-testid="theme-toggle"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            data-testid="mobile-menu-toggle"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-effect border-t border-border" data-testid="mobile-menu">
          <div className="px-4 py-2 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-primary hover:bg-muted/50 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                data-testid={`mobile-nav-link-${item.label.toLowerCase()}`}
              >
                {item.label}
              </button>
            ))}
             <Button 
                variant="ghost" 
                onClick={toggleTheme}
                className="w-full justify-start p-2 text-foreground hover:text-primary hover:bg-muted/50 rounded-md transition-colors"
                data-testid="mobile-theme-toggle"
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              >
                {theme === "dark" ? <Sun className="h-5 w-5 mr-2" /> : <Moon className="h-5 w-5 mr-2" />}
                {theme === "dark" ? "Light Mode" : "Dark Mode"}
              </Button>
          </div>
        </div>
      )}
    </nav>
  );
}