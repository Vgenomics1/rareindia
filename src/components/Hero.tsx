
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Logo from "../images/logo.png"

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-700 to-purple-400 text-white py-16 md:py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in">RARE-INDIA</h1>
          <p className="text-xl md:text-2xl mb-6 animate-fade-in">
            Rare Disease Alliance for Research & Evidence in Neurodevelopmental, Neuromuscular, Ocular, and Lysosomal Disorders
          </p>
          <p className="text-lg md:text-xl opacity-90 mb-8 animate-fade-in">
            Accelerating discovery and diagnosis through collaborative genomics research
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in">
            <Button
              size="lg"
              className="bg-white text-rare-purple hover:bg-gray-100 transition-all transform hover:scale-105"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Apply for Testing
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-rare-purple hover:bg-gray-100 transition-all transform hover:scale-105"
              onClick={() => document.getElementById('collaborate')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Join as Collaborator
            </Button>
          </div>

          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 sm:gap-12">
            <div className="text-center">
              <p className="text-sm uppercase tracking-wider mb-2 opacity-80">A collaborative initiative by</p>
              <div className="flex items-center justify-center gap-8 sm:gap-12 mt-6 ml-[-30px]">
                <img
                  src="/meril-logo.png"
                  alt="Meril Genomics"
                  className="h-16 p-1 bg-white rounded animate-fade-in w-40"
                />
                <span className='text-xl'>X</span>

                <img
                  src={Logo}
                  alt="VGenomics"
                  className="h-10 sm:h-12 p-1 rounded animate-fade-in"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
