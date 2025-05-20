
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, Check } from "lucide-react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-white shadow-sm'}`}>
      <div className="container py-3 md:py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <a href="/" className="flex items-center">
            <span className="text-xl md:text-2xl font-bold text-rare-blue">RARE</span>
            <span className="text-xl md:text-2xl font-bold text-rare-purple">-INDIA</span>
          </a>
          {/* <div className="hidden md:flex items-center ml-6 gap-4">
            <img src="/vgenomics-logo.png" alt="VGenomics" className="h-8" />
            <img src="/meril-logo.png" alt="Meril Genomics" className="h-8" />
          </div> */}
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#overview" className="text-gray-700 hover:text-rare-purple transition-colors font-medium">Overview</a>
          <a href="#offerings" className="text-gray-700 hover:text-rare-purple transition-colors font-medium">What We Offer</a>
          <a href="#collaborate" className="text-gray-700 hover:text-rare-purple transition-colors font-medium">Collaborate</a>
          <Button
            className="gradient-bg hover:opacity-90 transition-transform hover:scale-105"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Join Program
          </Button>
          <a href=" https://niptform.onrender.com">
            <Button
              className="bg-emerald-500 hover:bg-emerald-600 text-white transition-transform hover:scale-105"
            // onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Check size={18} className="mr-1" /> Check Eligibility
            </Button>
          </a>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-4">
          <Button
            size="sm"
            className="bg-emerald-500 hover:bg-emerald-600 text-white"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Check Eligibility
          </Button>
          <button onClick={toggleMenu} className="p-2 rounded-md text-gray-700">
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t animate-fade-in">
          <div className="container py-2 flex flex-col space-y-3">
            <div className="flex gap-4 py-3 justify-center items-center border-b border-gray-100">
              <img src="/vgenomics-logo.png" alt="VGenomics" className="h-6" />
              <img src="/meril-logo.png" alt="Meril Genomics" className="h-6" />
            </div>
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
