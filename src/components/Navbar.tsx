
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 bg-white shadow-sm z-50">
      <div className="container py-4 flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <span className="text-xl md:text-2xl font-bold text-rare-blue">RARE</span>
            <span className="text-xl md:text-2xl font-bold text-rare-purple">-INDIA</span>
          </a>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#overview" className="text-gray-700 hover:text-rare-purple transition-colors font-medium">Overview</a>
          <a href="#offerings" className="text-gray-700 hover:text-rare-purple transition-colors font-medium">What We Offer</a>
          <a href="#collaborate" className="text-gray-700 hover:text-rare-purple transition-colors font-medium">Collaborate</a>
          <Button className="gradient-bg hover:opacity-90" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Join Program
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button onClick={toggleMenu} className="md:hidden p-2 rounded-md text-gray-700">
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container py-2 flex flex-col space-y-3">
            <a href="#overview" className="py-3 text-gray-700 hover:text-rare-purple" onClick={toggleMenu}>Overview</a>
            <a href="#offerings" className="py-3 text-gray-700 hover:text-rare-purple" onClick={toggleMenu}>What We Offer</a>
            <a href="#collaborate" className="py-3 text-gray-700 hover:text-rare-purple" onClick={toggleMenu}>Collaborate</a>
            <Button className="gradient-bg hover:opacity-90 w-full" onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              toggleMenu();
            }}>
              Join Program
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
