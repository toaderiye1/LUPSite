import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-brand-whiteish border-b border-brand-brown/20">
      <div className="container mx-auto px-4 py-4">
        <Link to="/" className="flex items-center">
          <img
            src="/lovable-uploads/7d7ccab6-6209-4246-b447-9746d0a8b474.png"
            alt="Level-Up People Property"
            className="h-12 md:h-16"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;