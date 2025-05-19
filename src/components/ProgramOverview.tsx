
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const ProgramOverview: React.FC = () => {
  return (
    <section id="overview" className="py-16 md:py-24 bg-rare-light">
      <div className="container">
        <h2 className="section-title text-center mb-12">Program Overview</h2>
        
        <Card className="shadow-lg border-0">
          <CardContent className="p-8">
            <p className="text-lg mb-6 leading-relaxed">
              RARE-INDIA is a pan-India collaborative research initiative led by Vgenomics & MERIL genomics 
              to accelerate the discovery and diagnosis for rare diseases affecting the neurodevelopmental, 
              neuromuscular, ocular, and lysosomal systems.
            </p>
            
            <p className="text-lg mb-6 leading-relaxed">
              The program is designed to bring together clinicians, hospitals, research labs, diagnostic centers, 
              and patient advocacy groups to co-create scalable diagnostic and therapeutic solutions using 
              advanced genomics and multi-omics research.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-10">
              <div className="bg-rare-purple/5 p-6 rounded-lg border-l-4 border-rare-purple">
                <h3 className="font-semibold text-xl mb-3 text-rare-purple">Our Mission</h3>
                <p>To create a nationwide ecosystem for evidence generation, faster diagnoses, and 
                future-ready therapeutics for rare diseases in India.</p>
              </div>
              
              <div className="bg-rare-indigo/5 p-6 rounded-lg border-l-4 border-rare-indigo">
                <h3 className="font-semibold text-xl mb-3 text-rare-indigo">Our Vision</h3>
                <p>To rewrite the rare disease story in India by providing real impact to the lives of 
                patients and families still waiting for answers.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProgramOverview;
