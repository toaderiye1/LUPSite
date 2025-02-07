
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-transparent backdrop-blur-sm border-b border-brand-brown/10 transition-all duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center group">
            <img
              src="/lovable-uploads/7d7ccab6-6209-4246-b447-9746d0a8b474.png"
              alt="Level-Up People Property"
              className="h-12 md:h-16 transition-transform duration-300 group-hover:scale-105"
            />
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#why-choose-us">Why Choose Us</NavLink>
            <NavLink href="#how-it-works">Process</NavLink>
            <button className="px-6 py-2 bg-warm-bg text-warm-text rounded-full hover:bg-warm-hover transition-all duration-300 transform hover:scale-105">
              Book Consultation
            </button>
          </div>
          <button className="md:hidden p-2">
            <Menu className="h-6 w-6 text-brand-darkGrey" />
          </button>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-brand-darkGrey hover:text-brand-brown transition-colors duration-300 relative group"
  >
    {children}
    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-warm-bg transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
  </a>
);

export default Navbar;
