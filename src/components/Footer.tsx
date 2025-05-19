
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-rare-blue text-white py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <span className="font-bold">RARE</span>
              <span className="font-bold text-rare-purple">-INDIA</span>
            </h3>
            <p className="mb-4">
              Rare Disease Alliance for Research & Evidence in Neurodevelopmental, 
              Neuromuscular, Ocular, and Lysosomal Disorders
            </p>
            <p className="text-sm opacity-80">
              A collaborative initiative of Vgenomics & MERIL genomics
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#overview" className="hover:text-rare-purple transition-colors">Program Overview</a></li>
              <li><a href="#offerings" className="hover:text-rare-purple transition-colors">What We Offer</a></li>
              <li><a href="#collaborate" className="hover:text-rare-purple transition-colors">Collaborate</a></li>
              <li><a href="#contact" className="hover:text-rare-purple transition-colors">Apply</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <p className="mb-2">Email: contact@rareindia.org</p>
            <p className="mb-2">Phone: +91-12345-67890</p>
            <p>Address: Research Center, Medical Campus, New Delhi, India</p>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm">
          <p>© {currentYear} RARE-INDIA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
