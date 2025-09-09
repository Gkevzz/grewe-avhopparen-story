import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Toggle this to show/hide the Interviews navigation link
  const showInterviewsLink = false;

  const navItems = [
    { name: "Startsida", path: "/" },
    { name: "Föreläsningar", path: "/forelasningar" },
    { name: "Om författaren", path: "/om-forfattaren" },
    { name: "Boken", path: "/boken" },
    // { name: "Intervjuer/Poddar", path: "/intervjuer" }, // Hidden - change showInterviewsLink to true to show
    { name: "Kontakt", path: "/kontakt" },
  ].filter(item => item.path !== "/intervjuer" || showInterviewsLink);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <Link to="/" className="font-display font-bold text-xl text-foreground hover:text-accent transition-colors">
            Viktor Grewe
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-body text-sm transition-colors hover:text-accent ${
                  location.pathname === item.path
                    ? "text-accent font-medium"
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-in slide-in-from-top-5 duration-200">
            <div className="flex flex-col space-y-3 pt-4 border-t border-border">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={toggleMenu}
                  className={`font-body text-sm py-2 transition-colors hover:text-accent ${
                    location.pathname === item.path
                      ? "text-accent font-medium"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;