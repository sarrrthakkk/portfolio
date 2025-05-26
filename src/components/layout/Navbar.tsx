import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";

const navLinks = [
  { text: "Home", path: "/" },
  { text: "About", path: "/about" },
  { text: "Projects", path: "/projects" },
  { text: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary">
          Sarthak Mishra
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "font-medium transition-colors hover:text-primary",
                location.pathname === link.path
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {link.text}
            </Link>
          ))}
        </nav>
        
        {/* Mobile Navigation */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background shadow-md py-4 z-40 border-b animate-fade-in">
          <nav className="container mx-auto px-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-lg font-medium transition-colors hover:text-primary px-2 py-1",
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.text}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
