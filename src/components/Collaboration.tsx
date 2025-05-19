
import React from 'react';
import { Button } from "@/components/ui/button";
import { Users, Hospital, FlaskConical, Database } from "lucide-react";

const collaboratorTypes = [
  {
    icon: <Users size={48} className="text-rare-purple" />,
    title: "Clinicians",
    description: "Treating undiagnosed cases or specialized in rare disorders."
  },
  {
    icon: <FlaskConical size={48} className="text-rare-purple" />,
    title: "Researchers",
    description: "Working on rare disorders and seeking collaborative opportunities."
  },
  {
    icon: <Hospital size={48} className="text-rare-purple" />,
    title: "Hospitals & Centers",
    description: "Seeking access to advanced genomics and diagnostic capabilities."
  },
  {
    icon: <Database size={48} className="text-rare-purple" />,
    title: "Patient Groups",
    description: "Advocacy organizations supporting rare disease patients and families."
  }
];

const Collaboration: React.FC = () => {
  return (
    <section id="collaborate" className="py-16 md:py-24 bg-rare-light">
      <div className="container">
        <h2 className="section-title text-center mb-4">Call for Collaboration</h2>
        <p className="text-center text-lg max-w-3xl mx-auto mb-12">
          Whether you're a clinician treating undiagnosed cases, a researcher working on rare disorders, 
          or a hospital seeking access to advanced genomics, we invite you to become part of RARE-INDIA.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {collaboratorTypes.map((type, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                {type.icon}
              </div>
              <h3 className="font-semibold text-xl mb-2">{type.title}</h3>
              <p className="text-gray-600">{type.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-xl italic text-gray-700 mb-6">
            "Together, we can create a nationwide ecosystem for evidence generation, faster diagnoses, and 
            future-ready therapeutics—all while delivering real impact to the lives of patients and families still waiting for answers."
          </p>
          
          <p className="font-medium text-lg text-rare-purple mb-8">
            📩 Join us. Let's rewrite the rare disease story—together.
          </p>
          
          <Button 
            className="gradient-bg hover:opacity-90 text-lg px-8 py-6 h-auto"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Apply to Collaborate
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Collaboration;
