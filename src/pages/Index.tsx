
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProgramOverview from '../components/ProgramOverview';
import Offerings from '../components/Offerings';
import Collaboration from '../components/Collaboration';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import { useToast } from "@/components/ui/use-toast";
import Carousel from '../components/carousel';

import img1 from '../images/AIIMS_New_Delhi.png'
import img2 from '../images/Nizaam.png'
import img3 from '../images/PGIMER_chandigarh.png'
import img4 from '../images/Shroffs.png'
import img5 from '../images/cdfd_logo.png'


const images = [img1, img2, img3, img4, img5];

const Index = () => {
  const { toast } = useToast();

  useEffect(() => {
    // Update page title
    document.title = "RARE-INDIA | Rare Disease Alliance for Research & Evidence";

    // Show welcome toast after 1.5 seconds
    const timer = setTimeout(() => {
      toast({
        title: "Welcome to RARE-INDIA",
        description: "Explore our collaborative research initiative for rare diseases.",
        duration: 5000,
      });
    }, 1500);

    return () => clearTimeout(timer);
  }, [toast]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Carousel images={images} />
        <ProgramOverview />
        <Offerings />
        <Collaboration />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
