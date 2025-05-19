
import React from 'react';
import { CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const offerings = [
  {
    id: 1,
    title: "Free Genetic Testing",
    description: "Free-of-cost genetic testing for patients who meet Vgenomics' eligibility criteria for selected rare diseases."
  },
  {
    id: 2,
    title: "Pan-India Sample Collection",
    description: "Pan-India sample collection support through our network of logistics and lab partners."
  },
  {
    id: 3,
    title: "Research-Grade Reports",
    description: "Research-grade genomic and clinical interpretation reports, designed to support diagnosis, clinical decision-making, and treatment planning."
  },
  {
    id: 4,
    title: "Scientific Recognition",
    description: "Authorship or acknowledgment in scientific publications for clinicians and institutional contributors."
  },
  {
    id: 5,
    title: "AI-Powered Analytics",
    description: "Access to AI-powered analytics and insights from the RgenX platform, supporting case reviews and expanding clinician understanding of disease mechanisms."
  },
  {
    id: 6,
    title: "Expert Consultation",
    description: "One-on-one discussion with our scientists to better understand the disease mechanisms and treatment options."
  }
];

const Offerings: React.FC = () => {
  return (
    <section id="offerings" className="py-16 md:py-24">
      <div className="container">
        <h2 className="section-title text-center mb-12">What We Offer</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offerings.map((item) => (
            <Card key={item.id} className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 text-rare-purple">
                    <CheckCircle size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offerings;
