import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed w-full z-50 transition-all duration-300",
      scrolled ? "bg-brand-darkGrey/95 backdrop-blur-md py-2" : "bg-transparent py-4"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center group">
            <img
              src="/lovable-uploads/7d7ccab6-6209-4246-b447-9746d0a8b474.png"
              alt="Level-Up People Property"
              className="h-12 md:h-16 transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/investor" isScrolled={scrolled}>For Investors</NavLink>
            <NavLink href="/landlord" isScrolled={scrolled}>For Landlords</NavLink>
            <NavLink href="#why-choose-us" isScrolled={scrolled}>Why Choose Us</NavLink>
            <button className="px-6 py-2.5 bg-warm-bg text-warm-text rounded-full hover:bg-warm-hover transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Book Consultation
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-brand-whiteish hover:text-warm-bg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
          "md:hidden absolute top-full left-0 w-full bg-brand-darkGrey/95 backdrop-blur-md transition-all duration-300 ease-in-out",
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        )}>
          <div className="container mx-auto px-4 py-4 space-y-4">
            <MobileNavLink href="/investor" onClick={() => setIsOpen(false)}>For Investors</MobileNavLink>
            <MobileNavLink href="/landlord" onClick={() => setIsOpen(false)}>For Landlords</MobileNavLink>
            <MobileNavLink href="#why-choose-us" onClick={() => setIsOpen(false)}>Why Choose Us</MobileNavLink>
            <button className="w-full px-6 py-3 bg-warm-bg text-warm-text rounded-full hover:bg-warm-hover transition-all duration-300">
              Book Consultation
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children, isScrolled }: { href: string; children: React.ReactNode; isScrolled: boolean }) => (
  <a
    href={href}
    className={cn(
      "transition-colors duration-300 relative group",
      isScrolled ? "text-brand-whiteish hover:text-warm-bg" : "text-brand-whiteish hover:text-warm-bg"
    )}
  >
    {children}
    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-warm-bg transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
  </a>
);

const MobileNavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) => (
  <a
    href={href}
    onClick={onClick}
    className="block py-2 text-brand-whiteish hover:text-warm-bg transition-colors duration-300 text-center"
  >
    {children}
  </a>
);

export default Navbar;
