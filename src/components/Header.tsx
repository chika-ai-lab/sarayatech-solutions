import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Solutions", path: "/solutions" },
    { name: "Industries", path: "/industries" },
    { name: "Success Stories", path: "/success-stories" },
    { name: "Insights", path: "/insights" },
    { name: "About", path: "/about" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 transition-smooth hover:opacity-80">
            <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center shadow-card">
              <span className="text-xl font-bold text-primary-foreground">ST</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              SarayaTech
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-smooth relative group ${
                  isActive(item.path)
                    ? "text-primary"
                    : "text-secondary hover:text-primary"
                }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-2 left-0 w-full h-0.5 bg-primary transform origin-left transition-smooth ${
                    isActive(item.path) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/contact">
              <Button variant="ghost" className="text-secondary hover:text-primary">
                Contact Us
              </Button>
            </Link>
            <Link to="/contact">
              <Button className="bg-accent hover:bg-accent-light shadow-card">
                Request Demo
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-smooth"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 space-y-4 border-t border-border animate-fade-in">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-2 rounded-lg font-medium transition-smooth ${
                  isActive(item.path)
                    ? "bg-primary/10 text-primary"
                    : "text-secondary hover:bg-muted"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-4 pt-4 space-y-3 border-t border-border">
              <Link to="/contact" className="block" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" className="w-full">
                  Contact Us
                </Button>
              </Link>
              <Link to="/contact" className="block" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-accent hover:bg-accent-light">
                  Request Demo
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
