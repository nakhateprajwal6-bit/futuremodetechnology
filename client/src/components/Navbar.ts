import { useState, useEffect } from "react";
import { GraduationCap, Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logoImage from "@/assets/logo-.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#vision", label: "Vision" },
    { href: "#programs", label: "Programs" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
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

  const handleNavClick = (href: string) => {
  if (href === "#home") {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top for Home
  } else {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  }
  setIsOpen(false);
};


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  };

  const themeIcon = isDark ? <Sun className="h-5 w-5 text-white" /> : <Moon className="h-5 w-5 text-white" />;

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-blue-300 dark:bg-blue-800 border-b border-border shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={scrollToTop}>
            <img src={logoImage} alt="Logo" className="w-10 h-10 rounded-full border-2 border-gray-300" />
            <h1 className="text-2xl font-bold">
              <span className="text-blue-300 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                FutureMode Technology
              </span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6" role="navigation" aria-label="Main navigation">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-white hover:text-yellow-300 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 rounded-sm px-2 py-1"
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
              aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            >
              {themeIcon}
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-600 dark:bg-blue-800 border-t border-border">
          <div className="px-4 py-2 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left px-3 py-2 text-white hover:text-yellow-300 hover:bg-blue-700 rounded-md transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Button
              variant="ghost"
              onClick={toggleTheme}
              className="w-full justify-start p-2 text-white hover:text-yellow-300 hover:bg-blue-700 rounded-md transition-colors"
              aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            >
              {isDark ? (
                <>
                  <Sun className="h-5 w-5 mr-2" />
                  Light Mode
                </>
              ) : (
                <>
                  <Moon className="h-5 w-5 mr-2" />
                  Dark Mode
                </>
              )}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
