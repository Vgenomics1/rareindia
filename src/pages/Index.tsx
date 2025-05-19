
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProgramOverview from '../components/ProgramOverview';
import Offerings from '../components/Offerings';
import Collaboration from '../components/Collaboration';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import { useToast } from "@/components/ui/use-toast";

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
